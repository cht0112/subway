xforms.XFExtSelect.prototype.showOption = function(show, oldValue, newValue) {
	if (show && !this.optionShow) {
		if (this.checkEvent("onDropdown")) {
			this.callEvent("onDropdown", [ {
				source : this
			} ]);
		}
		if (!this.grid) {
			this.initGridFun();
			this.initGridEvents();
		}
		var pos = xforms.XFExt.util.getPosition(this.element);
		this.optionDiv.style.left = pos[0] + "px";
		this.optionDiv.style.top = pos[1] + this.element.offsetHeight + "px";
		if ((this.autoLoadData && this.itemset) || this.delayCreateGrid) {
			var data = this.itemset;
			if (data instanceof xforms.XFInstance2) {
				data = justep.xbl(this.itemset.element.id);
			}
			if (data) {
				data.loadData();
			}
		}
		this.optionDiv.style.display = "block";
		var width = Math.max(this.baseGridWidth, this.optionDiv.clientWidth);
		if (width < this.element.clientWidth) {
			width = this.element.clientWidth;
		}
		this.optionDiv.style.width = width + "px";

		this.changeRowsStatus();

		// this.grid.setSizes();
		var self = this;
		setTimeout(function() {
			self.grid.setSizes();
		}, 1);

		this.optionShow = true;
		this.rowCheckedFlag = false;
		this.rowCheckedFlags = {};
		xforms.XFExtSelect.prototype.activeOptionDiv = this.optionDiv;
		// this.optionDiv.focus();
		if (this.independence && !this.loadIndependenceData && this.itemset) {
			this.grid.loadXMLString(this.itemset.getDoc());
			this.loadIndependenceData = true;
		}
		xforms.Event.attach(document, "mousedown", this.closeEvent);
	} else if (!show && this.optionShow) {
		this.optionDiv.style.display = "none";

		if (this.mutil) {
			var newValue = this.getSelectedValue(), oldValue = this.currentValue;
			if (newValue != oldValue) {
				this.valueChanged(newValue, this.getSelectedLabel());
			}
		}

		if (this.checkEvent("onCloseup")) {
			var data = {
				instance : this.grid.instance,
				grid : this.grid,
				source : this,
				label : this.getSelectedLabel()
			};
			data.valueChanged = (newValue != oldValue);
			data.value = newValue;
			if (!this.mutil)
				data.rowId = this.grid.getSelectedRowId();
			var self = this;
			window.setTimeout(function() {
				self.callEvent("onCloseup", [ data ]);
			}, 1);
		}
		this.optionShow = false;
		xforms.XFExtSelect.prototype.activeOptionDiv = null;
		xforms.Event.detach(document, "mousedown", this.closeEvent);
		// lzg 2010.11 增加定位到select组件的逻辑,多选也不进行光标定位
		if (!this.mutil && this.isCloseFocus)
			this.controlElement.focus();
	}
};


/**
 * appCommon根名空间
 */
if (typeof (appCommon) == "undefined")
	appCommon = {};

/**
 * appCommon.component名空间
 */
if (typeof (appCommon.component) == "undefined")
	appCommon.component = {};

appCommon.component.SearchSelect = function(xblObject) {
	dhtmlxEventable(this);
	this.id = xblObject.domNode.id;
	this._regEvent("onDropdown", xblObject.domNode.getAttribute("onDropdown"));
	this._regEvent("onCloseup", xblObject.domNode.getAttribute("onCloseup"));
	this._regEvent("onKeyDown",	xblObject.domNode.getAttribute("onKeyDown"));
	this._regEvent("onKeyUp", xblObject.domNode.getAttribute("onKeyUp"));
	this._regEvent("onKeyPress", xblObject.domNode.getAttribute("onKeyPress"));
	this._regEvent("onSearch", xblObject.domNode.getAttribute("onSearch"));

	var _attributeNode = xblObject.getElementByXblID("attribute");
	this.select = xforms(_attributeNode.getAttribute("select-id"));
	this.select._owner = this;
	this.data = this.select.itemset;

	this.filterRelations = xblObject.domNode.getAttribute("filter-relations");
	this.filterMode = xblObject.domNode.getAttribute("filter-mode");
	this.filterMode = this.filterMode ? this.filterMode : "doublePercent";
};

appCommon.component.SearchSelect.prototype._regEvent = function(name, funname,
		owner) {
	var fun = justep.Function.get(funname);
	if (fun != null) {
		this.attachEvent(name, fun, owner ? owner : this);
	}
};

appCommon.component.SearchSelect._doDropdown = function(e) {
	var self = e.source._owner;
	var value = self.select.input.value;
	var oldFilter = self.data.buildFilter();
	if (self.checkEvent("onDropdown")) {
		var event = {
			source : self
		};
		self.callEvent("onDropdown", [ event ]);
	}
	var newFilter = self.data.buildFilter();
	appCommon.component.SearchSelect._doSearch(self, value, (oldFilter != newFilter));
};

appCommon.component.SearchSelect._doCloseup = function(e) {
	var self = e.source._owner;
	if (self.checkEvent("onCloseup")) {
		var event = {
			source : self
		};
		self.callEvent("onCloseup", [ event ]);
	}
};

appCommon.component.SearchSelect.__keydownValue;
appCommon.component.SearchSelect.__changed = false;
appCommon.component.SearchSelect.__changedTime;

appCommon.component.SearchSelect._doKeyDown = function(e) {
	var self = e.source._owner;
	var select = e.source;
	var value = e.value;
	var data = e.source.itemset;
	var altKey = e.event.altKey;
	var keyCode = e.event.keyCode;

	if (self.checkEvent("onKeyDown")) {
		var event = {
			source : self,
			altKey : e.event.altKey,
			shiftKey : e.event.shiftKey,
			ctrlKey : e.event.ctrlKey,
			keyCode : keyCode,
			value : value
		};
		self.callEvent("onKeyDown", [ event ]);
		keyCode = event.keyCode;
	}

	if (!e.event.repeat) {
		appCommon.component.SearchSelect.__keydownValue = value;
	}

	if (keyCode == 38) {
		if (altKey && select.optionShow) {
			select.showOption(false);
		} else if (!altKey) {
			appCommon.component.SearchSelect._moveDataSelectedIndex(data, -1);
		}
	} else if (keyCode == 40) {
		if (altKey && !select.optionShow) {
			appCommon.component.SearchSelect._doSearch(self, value);
		}
		appCommon.component.SearchSelect._moveDataSelectedIndex(data, 1);
	} else if (keyCode == 13) {
		if (select.optionShow) {
			var rowID = data.getRowId();
			if (rowID) {
				var row = data.getStore().getRowById(rowID);
				if (select.getRowCanSelected(row)) {
					var newValue = select.getSelectedValue();
					var oldValue = select.currentValue;
					select.showOption(false, oldValue, newValue);

					var labelValue = select.getSelectedLabel();
					if (newValue != oldValue
							|| labelValue != select.oldDisplayValue) {
						select.valueChanged(newValue, labelValue);
					}
					select.input.value = labelValue;
					appCommon.component.SearchSelect.__keydownValue = labelValue;
					appCommon.component.SearchSelect.__changed = false;
				}
			}
		}
	}
};

appCommon.component.SearchSelect._doKeyUp = function(e) {
	var self = e.source._owner;
	var select = e.source;
	var value = e.value;
	var keyCode = e.event.keyCode;

	if (self.checkEvent("onKeyUp")) {
		var event = {
			source : self,
			altKey : e.event.altKey,
			shiftKey : e.event.shiftKey,
			ctrlKey : e.event.ctrlKey,
			keyCode : e.event.keyCode,
			value : value
		};
		self.callEvent("onKeyUp", [ event ]);
		keyCode = event.keyCode;
	}
	if (keyCode == 9) {
		return;
	}

	appCommon.component.SearchSelect.__changed = appCommon.component.SearchSelect.__changed
			|| (appCommon.component.SearchSelect.__keydownValue != e.source.input.value);

	if (appCommon.component.SearchSelect.__changed) {
		appCommon.component.SearchSelect.__changedTime = (new Date()).getTime();
		setTimeout(function() {
			var now = (new Date()).getTime();
			var timeSpace = now
					- appCommon.component.SearchSelect.__changedTime;
			if (timeSpace >= 300) {
				if (value != "") {
					appCommon.component.SearchSelect._doSearch(self, value);
				} else {
					select.showOption(false, select.currentValue, "");
				}
				appCommon.component.SearchSelect.__changed = false;
			}
		}, 300);
	}
};

appCommon.component.SearchSelect._doKeyPress = function(e) {
	var self = e.source._owner;
	var select = e.source;
	var value = e.value;

	if (self.checkEvent("onKeyPress")) {
		var event = {
			source : self,
			altKey : e.event.altKey,
			shiftKey : e.event.shiftKey,
			ctrlKey : e.event.ctrlKey,
			keyCode : e.event.keyCode,
			value : value
		};
		self.callEvent("onKeyPress", [ event ]);
	}
};

appCommon.component.SearchSelect._getSearchFilter = function(fields, value,
		split, filterMode) {
	if (!split) {
		split = ",";
	}

	var fieldArray = [];
	if (typeof (fields) == "string") {
		fieldArray = fields.split(split);
	} else if (Object.prototype.toString.apply(fields) == "[object Array]") {
		fieldArray = fields;
	} else {
		throw new Error("无效的fields");
	}

	value = value.toUpperCase();
	var filter = "";
	for ( var i = 0; i < fieldArray.length; i++) {
		filter = appCommon.FilterUtils.joinFilter(filter, "UPPER("
				+ fieldArray[i] + ") LIKE '"
				+ (filterMode == "doublePercent" ? "%" : "") + value + "%'",
				"OR");
	}
	return filter;
};

appCommon.component.SearchSelect._doSearch = function(self, value, doRefresh) {
	if (!doRefresh) {
		doRefresh = false;
	}
	function showOption(select) {
		if (!select.optionShow && (select.itemset.getCount() > 0)) {
			select.showOption(true);
			setTimeout(function() {
				select.grid.setSizes();
			}, 1);
		}
		/*
		else if (select.optionShow && (select.itemset.getCount() == 0)) {
			select.showOption(false);
		}
		*/
	}
	setTimeout(function() {
		var select = self.select;
		var data = self.select.itemset;

		var oldFilter = data.buildFilter();
		var searchFilter = appCommon.component.SearchSelect._getSearchFilter(
				self.filterRelations, value, ",", self.filterMode);
		if (self.checkEvent("onSearch")) {
			var event = {
				source : self,
				value : value,
				searchFilter : searchFilter,
				cancel : false
			};
			self.callEvent("onSearch", [ event ]);
			if (event.cancel) {
				return;
			}
			searchFilter = event.searchFilter;
		}
		data.setFilter("_searchFilter_", searchFilter);
		var newFilter = data.buildFilter();

		doRefresh = doRefresh || (newFilter != oldFilter);
		if (doRefresh) {
			data.refreshData(function() {
				showOption(select);
				if (data.getCount() > 0) {
					data.setIndex(0);
				}
			});
		} else {
			showOption(select);
		}
	}, 1);
};

appCommon.component.SearchSelect._moveDataSelectedIndex = function(data, offset) {
	var store = data.getStore();
	var count = store.getRowsNum();
	var curIndex = store.getIndex(store.getSelectedRowId()) + offset;

	if (curIndex < 0) {
		curIndex = count - 1;
	} else if (curIndex >= count) {
		curIndex = 0;
	}
	store.setIndex(curIndex);
};