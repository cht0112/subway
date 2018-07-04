/**
 * appCommon根名空间
 */
if (typeof(appCommon) == "undefined")
	appCommon = {};

/**
 * appCommon.component名空间
 */
if (typeof(appCommon.component) == "undefined")
	appCommon.component = {};

appCommon.component.ExtDateFilter = function(xblObject) {
	
	dhtmlxEventable(this);

	this.id = xblObject.domNode.id;

	this._attributeNode = xblObject.getElementByXblID('attribute');
	this.filterDataID = this._attributeNode.getAttribute('filter-data');
	this.filterDateMode = this._attributeNode.getAttribute('filter-date-mode');
	this.filterDateRelation1 = this._attributeNode.getAttribute('filter-date-relation1');
	this.filterDateRelation2 = this._attributeNode.getAttribute('filter-date-relation2');

	this.defaultSelect = this._attributeNode.getAttribute('default-select');
	this.autoRefresh = this._attributeNode.getAttribute('auto-refresh') == "true";

	this._modelID = this._attributeNode.getAttribute('model-id');
	this._innerDataID = this._attributeNode.getAttribute('inner-data-id');
	this._selectID = this._attributeNode.getAttribute('select-id');
	this._dialogID = this._attributeNode.getAttribute('dialog-id');

	this._isDialogOK = false;
	this._lastSelect = null;
	this._lastLabel = null;
	this._lastCustomBeginDate = null;
	this._lastCustomEndDate = null;

	this.onGetCondition = this._attributeNode.getAttribute('onGetCondition');

	var innerData = this.getInnerData();
	innerData.attachEvent(justep.XData.EVENT_DATA_CHANGED, function(event) {
		this._doValueChanged(event);
	}, xblObject);

	var select = this.getInnerSelect();
	select.attachEvent("onDropdown", function(event) {
		this._doDropdown(event);
	}, xblObject);
	select.attachEvent("onCloseup", function(event) {
		this._doCloseup(event);
	}, xblObject);

	var dialog = this.getInnerDialog();
	dialog.attachEvent("onOpen", function(event) {
		this._doDialogOpen(event);
	}, xblObject);
	dialog.attachEvent("onClose", function(event) {
		this._doDialogClose(event);
	}, xblObject);

};

appCommon.component.ExtDateFilter.prototype._doValueChanged = function(event) {
	if (event.column == "value") {
		this._lastSelect = this.getCurrentSelect();
		this._lastLabel = this.getCurrentLabel();
		if (event.value != appCommon.component.ExtDateFilter.CUSTOM_SELECT) {
			appCommon.component.ExtDateFilter.setFilterCondition(this.id, 
				this.getFilterData(), 
				this.filterDateMode,
				this.filterDateRelation1,
				this.filterDateRelation2,
				event.value, 
				this.defaultSelect,
				this.getCustomBeginDate(),
				this.getCustomEndDate(),
				this.onGetCondition, 
				this.autoRefresh);
		}
	}
}

appCommon.component.ExtDateFilter.prototype._doDropdown = function(event) {
	var value = this.getCurrentSelect();
	if (!value) {
		var defaultValue = this.defaultSelect;
		if (defaultValue) {
			this.getInnerData().setValue("value", defaultValue);
			this.getInnerSelect().changeRowsStatus();
		}
	}
}

appCommon.component.ExtDateFilter.prototype._doCloseup = function(event) {
	if (event.value == appCommon.component.ExtDateFilter.CUSTOM_SELECT) {
		this.getInnerDialog().open();
	}
}

appCommon.component.ExtDateFilter.prototype._doDialogOpen = function(event) {
	this._isDialogOK = false;
	
	if (this.getCustomBeginDate() == "" && this.getCustomEndDate() == "") {
		var today = justep.Date.toString(appCommon.component.ExtDateFilter._getToday(), "YYYY-MM-DD");
		var innerData = this.getInnerData();
		innerData.setValue("beginDate", today);
		innerData.setValue("endDate", today);
	}
}

appCommon.component.ExtDateFilter.prototype._doDialogClose = function(event) {
	xforms.blur();
	if (this._isDialogOK) {
		this._lastSelect = this.getCurrentSelect();
		this._lastLabel = this.getCurrentLabel();
		this._lastCustomBeginDate = this.getCustomBeginDate();
		this._lastCustomEndDate = this.getCustomEndDate();
		appCommon.component.ExtDateFilter.setFilterCondition(this.id, 
			this.getFilterData(), 
			this.filterDateMode,
			this.filterDateRelation1,
			this.filterDateRelation2,
			this.getCurrentSelect(), 
			this.defaultSelect,
			this.getCustomBeginDate(),
			this.getCustomEndDate(),
			this.onGetCondition, 
			this.autoRefresh);		
	} else {
		var innerData = this.getInnerData();
		innerData.setValue("beginDate", this._lastCustomBeginDate);
		innerData.setValue("endDate", this._lastCustomEndDate);
		this.getInnerSelect().valueChanged(this._lastSelect, this._lastLabel);
	}
}

appCommon.component.ExtDateFilter.prototype._doDialogCheck = function(event) {
	if (this.getCustomBeginDate() == "" || this.getCustomEndDate() == "") {
		alert("日期不能为空");
		return false;
	}
	var beginDate = appCommon.component.ExtDateFilter.str2date(this.getCustomBeginDate());
	var endDate = appCommon.component.ExtDateFilter.str2date(this.getCustomEndDate());
	if (beginDate > endDate) {
		alert("开始日期不能大于结束日期");
		return false;
	}
	this._isDialogOK = true;
	return true;
}

appCommon.component.ExtDateFilter.prototype.getFilterName = function() {
	return appCommon.component.ExtDateFilter.getFilterName(this.id);
}

appCommon.component.ExtDateFilter.prototype.getCondition = function() {
	return appCommon.component.ExtDateFilter.getCondition(this.filterDateMode,
			this.filterDateRelation1, this.filterDateRelation2,
			this.getCurrentSelect(), this.defaultSelect, 
			this.getCustomBeginDate(), this.getCustomEndDate());
}

appCommon.component.ExtDateFilter.prototype.getFilterData = function() {
	return justep.xbl(this.filterDataID);
}

appCommon.component.ExtDateFilter.prototype.getInnerSelect = function() {
	return xforms(this._selectID);
}

appCommon.component.ExtDateFilter.prototype.getInnerDialog = function() {
	return xforms(this._dialogID);
}

appCommon.component.ExtDateFilter.prototype.getInnerData = function() {
	return justep.xbl(this._innerDataID);
}

appCommon.component.ExtDateFilter.prototype.getCurrentSelect = function() {
	return this.getInnerData().getValue("value");
}

appCommon.component.ExtDateFilter.prototype.getCurrentLabel = function() {
	return this.getInnerData().getValue("label");
}

appCommon.component.ExtDateFilter.prototype.getCustomBeginDate = function() {
	return this.getInnerData().getValue("beginDate");
}

appCommon.component.ExtDateFilter.prototype.getCustomEndDate = function() {
	return this.getInnerData().getValue("endDate");
}

appCommon.component.ExtDateFilter.CUSTOM_SELECT = "9"; 

/**
 * 设置过滤条件
 */
appCommon.component.ExtDateFilter.setFilterCondition = function(id, filterData,
		filterMode, dateRelation1, dateRelation2, currentSelect, defaultSelect,
		customBeginDate, customEndDate, onGetConditionEvent, isRefresh) {
	var filterName = appCommon.component.ExtDateFilter.getFilterName(id);
	var condition = appCommon.component.ExtDateFilter._doGetCondition(id,
			filterData, filterMode, dateRelation1, dateRelation2,
			currentSelect, defaultSelect, customBeginDate, customEndDate,
			onGetConditionEvent);
	var oldCondition = filterData.getFilter(filterName);
	if (condition != oldCondition) {
		filterData.setFilter(filterName, condition);
		if (isRefresh)
			filterData.refreshData();
	}
}

/**
 * 构造filter name
 */
appCommon.component.ExtDateFilter.getFilterName = function(id) {
	return "_" + id + "_filter";
}

/**
 * 构造条件
 */
appCommon.component.ExtDateFilter.getCondition = function(filterMode,
		dateRelation1, dateRelation2, currentSelect, defaultSelect,
		customBeginDate, customEndDate) {
	if (!currentSelect && defaultSelect)
		currentSelect = defaultSelect;
	if (!currentSelect)
		return "";

	var r = appCommon.component.ExtDateFilter.getDateRange(currentSelect, customBeginDate, customEndDate); 
	return appCommon.component.ExtDateFilter.range2condition(filterMode, dateRelation1, dateRelation2, r.beginDate, r.endDate);
}

appCommon.component.ExtDateFilter.getDateRange = function(select, customBeginDate, customEndDate) {
	var result = {'beginDate': null, 'endDate': null};
	if(typeof(select) == "string" && select) select = parseInt(select);
	if(typeof(select) != "number") return result;

	var today = appCommon.component.ExtDateFilter._getToday();

	switch(select){
		case 0: break;
		case 1:{
			result.beginDate = today;
			result.endDate = result.beginDate;
			break;
		}
		case 2:{
			result.beginDate = justep.Date.increase(today, -1, "d");
			result.endDate = result.beginDate;
			break;
		}
		case 3:{
			result.beginDate = justep.Date.increase(today, -today.getDay(), "d");
			result.endDate = justep.Date.increase(result.beginDate, 6, "d");
			break;
		}
		case 4:{
			result.beginDate = justep.Date.increase(today, -today.getDay()-7, "d");
			result.endDate = justep.Date.increase(result.beginDate, 6, "d");
			break;
		}
		case 5:{
			result.beginDate = new Date(today.getFullYear(), today.getMonth(), 1);
			result.endDate = justep.Date.increase(new Date(today.getFullYear(), today.getMonth()+1, 1), -1, "d");
			break;
		}
		case 6:{
			result.beginDate = new Date(today.getFullYear(), today.getMonth()-1, 1);
			result.endDate = justep.Date.increase(new Date(today.getFullYear(), today.getMonth(), 1), -1, "d");
			break;
		}
		case 7:{
			result.beginDate = new Date(today.getFullYear(), 0, 1);
			result.endDate = justep.Date.increase(new Date(today.getFullYear()+1, 0, 1), -1, "d");
			break;
		}
		case 8:{
			result.beginDate = new Date(today.getFullYear()-1, 0, 1);
			result.endDate = justep.Date.increase(new Date(today.getFullYear(), 0, 1), -1, "d");
			break;
		}
		case 9:{
			if (customBeginDate) 
				result.beginDate = appCommon.component.ExtDateFilter.str2date(customBeginDate);
			if (customEndDate) 
				result.endDate = appCommon.component.ExtDateFilter.str2date(customEndDate);
			break;
		}
	}
	return result;	
}

appCommon.component.ExtDateFilter.range2condition = function(filterMode, dateRelation1, dateRelation2, beginDate, endDate) {
	if (filterMode == "single")
		return appCommon.FilterUtils.getDateFilter(dateRelation1, beginDate, endDate);
	else
		return appCommon.FilterUtils.getDateRangeFilter(dateRelation1, dateRelation2, beginDate, endDate);;
}

appCommon.component.ExtDateFilter.str2date = function(d) {
	return new Date(parseInt(d.substr(0, 4), 10), parseInt(d.substr(5, 2), 10) - 1, parseInt(d.substr(8, 2), 10));
}

/**
 * 获取条件
 */
appCommon.component.ExtDateFilter._doGetCondition = function(id, filterData,
		filterMode, dateRelation1, dateRelation2, currentSelect, defaultSelect,
		customBeginDate, customEndDate, onGetConditionEvent) {
	var condition = appCommon.component.ExtDateFilter.getCondition(
			filterMode, dateRelation1, dateRelation2, currentSelect,
			defaultSelect, customBeginDate, customEndDate);
	var fun = justep.Function.get(onGetConditionEvent);
	if (fun) {
		var eventData = {
			"id" : id,
			"filterData" : filterData,
			"filterMode" : filterMode,
			"dateRelation1" : dateRelation1,
			"dateRelation2" : dateRelation2,
			"currentSelect" : currentSelect,
			"defaultSelect" : defaultSelect,
			"customBeginDate" : customBeginDate,
			"customEndDate" : customEndDate,
			"defaultCondition" : condition,
			"handled" : false
		};
		var customCondition = fun(eventData);
		if (eventData.handled)
			condition = customCondition;
	}

	return condition;
}

appCommon.component.ExtDateFilter._getToday = function() {
	return appCommon.component.ExtDateFilter.str2date(justep.System.datetimeString());
}
