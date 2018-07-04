
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/dateFilter.xbl.xml#dateFilter"] = _xbl_JSClassDefine_dateFilter;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

function _xbl_JSClassDefine_tabs(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_tabs.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				this.tabbar = new justep.JSTabbar(this.domNode.id);
				justep.Utils.proxable(this, this.tabbar, justep.JSTabbar);
			}
		}));

function _xbl_JSClassDefine_windowDialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowDialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var dialog = new justep.WindowDialog(node.id,node.getAttribute('url'),node.getAttribute('title'),node.getAttribute('modal')=="true",node.getAttribute('status'),
				                  node.getAttribute('width'),node.getAttribute('height'),node.getAttribute('left'),node.getAttribute('top'),node.getAttribute("reload-on-open") =='true',
				                  node.getAttribute('onSend') , node.getAttribute('onReceive') ,node.getAttribute('onInit') ,node.getAttribute('onOpen') ,node.getAttribute('onClose'));
				dialog.setClosable(node.getAttribute('closable')!="false");
				dialog.setMinmaxable(node.getAttribute('minmaxable')!="false");
				dialog.setResizable(node.getAttribute('resizable')!="false");
				dialog.setNeighbor(node.getAttribute('neighbor'));
				dialog.setAutoSize(node.getAttribute('autosize')=="true");
				dialog.setShowTitle(node.getAttribute("show-title")!="false");
				dialog.setProcess(node.getAttribute("process"));
				dialog.setActivity(node.getAttribute("activity"));
				justep.Object.extend(this, dialog);
			} 
		}));

function _xbl_JSClassDefine_menu(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_menu.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"_id": null,
				"_itemsets": null,
				initXBL: function(){
					var menuitemsets = this.getElementByXblID("menuitemsets");
					this._id = menuitemsets.attributes["menuid"].value;
					this._itemsets = {};
					var nodes = $(menuitemsets).children();
					var len = nodes.length;
					for (var i = 0; len > i; i++) {
						var info = {};
						this.initItemset(nodes[i], info);
						this._itemsets[info["id"]] = info;
						if(info["init-loaded"] == "true"){
							this.refreshMenuItemset(info["id"]);
						}
					}
				},
				initItemset: function(e, info){
					info["id"] = e.attributes["id"].value;
					info["init-loaded"] = e.attributes["init-loaded"].value;
					info["replace"] = e.attributes["replace"].value;
					info["data"] = e.attributes["data"].value;
					info["parentID"] = e.attributes["parentID"].value;
					var params = [];
					info["params"] = params;
					var nodes = $(e).children();
					var len = nodes.length;
					for (var i = 0; len > i; i++) {
						params[i] = {};
						params[i]["name"] = nodes[i].attributes["name"].value;
						params[i]["value"] = nodes[i].attributes["value"].value;
					}
				},
				refreshMenu: function(){
					for (var p in this._itemsets)
					{
						this.refreshMenuItemset(this._itemsets[p].id);
					}
				},
				refreshMenuItemset: function(itemsetID){
					var itemInfo = new xforms.MenuItemInfo();
					var params = this._itemsets[itemsetID]["params"];
					var len = params.length;
					for (var i=0; len > i; i++){
						itemInfo[params[i]["name"]] = params[i]["value"]
					}
					var data = this._itemsets[itemsetID]["data"];
					var replace = this._itemsets[itemsetID]["replace"];
					var parentID = this._itemsets[itemsetID]["parentID"];
					if(parentID == ""){
						document.getElementById(this._id).xformsObject.loadInstance(data, itemInfo, replace);
					}else{
						document.getElementById(this._id).xformsObject.loadInstance(data, itemInfo, replace, parentID);
					}
				}
			}));

function _xbl_JSClassDefine_tableLayout(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_tableLayout.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			   	if(!this.domNode.id || this.domNode.id ==""){
					this.domNode.id = (new UUID()).valueOf();
			   	}
			   	var id = this.domNode.id; 
			   	this.el = $("#" + id);
			   	this.trs = $(">tbody tr", this.el);
			   	this.spacing = this._getSpace();
			   	/*为了兼容ie789, cellpadding都强设为0*/
			   	this.el.attr("cellpadding", "0");
			   	$(">tbody>tr>td", this.el).css("padding", "0");
			   	this.padding = this._getPadding();
		   		this.onWindowResize();
			},
			_getSpace : function(){
				/*默认2是为了解决ie下无法获得默认值的问题*/
				var spacing = this.el.attr("cellspacing") || (!justep.Browser.IE?this.el.css("border-spacing"):null) || "2px";
			   	spacing = spacing.split(" ");
			   	return parseInt(spacing[1] || spacing[0]) || 0;  
			},
			_getPadding : function(){
				/*默认是为了解决ie下无法获得默认值的问题，ie7默认是2px,ie89默认是1px*/
				var ret = parseInt(this.el.attr("cellpadding"));
				return ret || (ret===0 ? 0 : (justep.Browser.IE7 ? "2" : "1")); 
			},
			onWindowResize : function(){
				if(!justep.Browser.IE){
					$(">tbody >tr", this.el).each(function(index, tr){
						var td = $(tr.children[0]);
						tr = $(tr);
						var h = tr.attr('height') || tr.get(0).style["height"],
							hd = td.attr('height') || td.get(0).style["height"];
						if((h == null || h == '') && (hd == null || hd == '')){
							td.get(0).height = '100%';
							td.get(0).style["height"] = '100%';
						}
					});
					return;
				}	
				var el = this.el;
				if(el.parent().get(0).tagName.toLowerCase()=="td"){
					el = el.parent();
				}
				var h = el.height(),that = this,
					a = [], b = this.spacing*(this.trs.length + 1);
				this.trs.each(function(index, tr){
					var td = $(tr.children[0]);
					tr = $(tr);
					var h = tr.get(0).height || tr.get(0).style["height"],
						hd = td.get(0).height || td.get(0).style["height"];
					/*为了兼容已有应用*/ 
					if(h=='100%') {
						h=null;
						tr.get(0).height = null;
						tr.get(0).style["height"] = null;
					}
					if(hd=='100%') {
						hd=null;
						td.get(0).height = null;
						td.get(0).style["height"] = null;
					}
					if(!tr.attr("noheight") && ((h!=null && h!=''&& h!='auto') || (hd!=null && hd!=''&& hd!='auto'))){
						var mh = Math.max(
							parseInt(tr.get(0).height)||0,
							parseInt(tr.get(0).style["height"])||0,
							(parseInt(td.get(0).height) + that.padding*2)||0,
							(parseInt(td.get(0).style["height"]) + that.padding*2)||0
						);
						b += mh;
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));/*这是防止td被内容撑开*/
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}	 
					}else{
						tr.attr("noheight", true);/*noheight这个笔记是为了解决ie7执行多次resize的问题*/
						a.push(tr);
					}
				});
				if(a[0]){
					a[0].get(0).setAttribute("height", (h-b)+"px");
					if(a[0].get(0).children[0]){
						/*第一个td*/
						var mh = h-b-this.padding*2; 
						a[0].get(0).children[0].setAttribute("height", (h-b-this.padding*2)+"px");
						var td = $(a[0].get(0).children[0]);
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			},   	
			resize2 : function(){
				var h = this.el.parent().height(),that = this,
					w = this.el.parent().width(),
					a = [], b = this.spacing*(this.trs.length + 1);
				this.el.width(w);
				this.trs.each(function(index, tr){
					var td = $(tr.children[0]);
					tr = $(tr);
					var h = tr.get(0).style["height"] || tr.attr('height'),
						hd = td.get(0).style["height"] || tr.attr('height');
					/*为了兼容已有应用*/ 
					if(h=='100%') h=null;
					if(hd=='100%') hd=null;
					if(!tr.attr("noheight") && ((h!=null && h!=''&& h!='auto') || (hd!=null && hd!=''&& hd!='auto'))){
						b += tr.outerHeight();
						/*这是防止td被内容撑开*/
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(td.height()));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(td.height());
						}	 
					}else{
						tr.attr("noheight", true);/*noheight这个笔记是为了解决ie7执行多次resize的问题*/
						a.push(tr);
					}
				});
				if(a[0]){
					a[0].get(0).setAttribute("height", (h-b)+"px");
					/*第一个td*/
					var td;
					if(td = a[0].get(0).children[0]){
						var mh = h-b-this.padding*2; 
						td.setAttribute("height", mh+"px");
						td = $(td);
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			}   	
		}));

function _xbl_JSClassDefine_bizDataFilterPattern(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_bizDataFilterPattern.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL": function() {
				var menuEl = this.getElementByXblID("filter-pattern-menu");
				this.menuId = $(menuEl).firstElement().getAttribute("menu-id");
				var dialogEl = this.getElementByXblID("filter-pattern-dialog");
				this.dialogId = $(dialogEl).firstElement().id;
				var frameEl = this.getElementByXblID("filter-pattern-dialog-iframe");
				this.iframeId = frameEl.getAttribute("name");
			},
			"show": function(data, controlId, filterDlgId) {
				if (typeof(data) == "string") {
					data = justep.xbl(data);
				}
				if (data) {
					if (typeof(data.advanceFilter) != "undefined") {
						var frameEl = document.getElementById(this.iframeId);
						if (frameEl) {
							frameEl.dialogId = this.dialogId;
							frameEl.currData = data;
							frameEl.advanceFilter = data.advanceFilter.getFilter();
							showFilterPatternMenu(data, this.menuId, controlId, filterDlgId);
						}
					}
				}
			}
		}));

function _xbl_JSClassDefine_dateFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_dateFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					var labels = (new justep.Message(justep.Message.JUSTEP231074)).getMessage().split(",");
					this.alertLabel1 = (new justep.Message(justep.Message.JUSTEP231075)).getMessage();
					this.alertLabel2 = (new justep.Message(justep.Message.JUSTEP231076)).getMessage();
					this.partId = this.domNode.id + "_part";
					this.modelId = this.domNode.id + "_model";
					this.dataId = this.domNode.id + "_data";
					this.dialogId = this.domNode.id + "_dialog";
					var el = jQuery(this.domNode);
					var onChanged = el.attr("onChanged");
					if(onChanged)
						this.onChanged = justep.Function.get(onChanged);
					var onGetCondition = el.attr('onGetCondition');
					if(onGetCondition)	
						this.onGetCondition = justep.Function.get(onGetCondition);
					this.defaultValue = el.attr("default-select");
					var width = el.width()||100;
					var tabindex = el.attr("tabindex");
					var disable = el.attr("disabled");
					this.autoRefresh = el.attr('auto-refresh') == "true";
					this.filterDateMode = el.attr('filter-date-mode');
					this.filterDataID = el.attr('filter-data');
					if(this.filterDataID)
						this.filterData = justep.xbl(this.filterDataID);
					this.dateRelation1 = el.attr('filter-date-relation1');
					this.dateRelation2 = el.attr('filter-date-relation2');
					this.dropdownHeight = el.attr("dropdown-height") || "225";
					this._disabled = disable = disable ? ((''+disable)=="true"): false; 
					window.dhx_globalImgPath=justep.Request.convertURL("/form/dhtmlx/dhtmlxCombo/imgs/", true);
			    	this.combo = new dhtmlXCombo(this.domNode.id, "", width, "", tabindex);
			    	this.combo.addOption([["0", labels[0]], ["1", labels[1]], ["2", labels[2]], ["3", labels[3]], ["4", labels[4]], ["5", labels[5]], ["6", labels[6]], ["7", labels[7]], ["8", labels[8]], ["9", labels[9]]]);
			    	if(this.defaultValue != undefined) this.combo.setComboValue(this.defaultValue);
			    	this.jelement = jQuery(this.combo.DOMelem); 
			    	this.combo.readonly(true);
			    	this.setDisabled(disable);
			    	if(this.dropdownHeight){
			    		if(this.dropdownHeight.indexOf("px") == -1 ) this.dropdownHeight = this.dropdownHeight + "px";
			    		jQuery(this.combo.DOMlist).height(this.dropdownHeight);
			    		if (this.combo.DOMlistF) 
			    			jQuery(this.combo.DOMlistF).height(this.dropdownHeight);
			    	}	

		    		var that = this;
		    		var callback = function(){
		    			if(that.getCurrentSelect() == 9){
		    				that.openDialog();
		    			}else{
			    			var event = {source: that};
			    			that.setFilter();
			    			if(that.onChanged)
			    				that.onChanged.call(that, event);
		    			}	
		    		};
		    		this.combo.attachEvent("onChange",callback);},
				setDisabled : function(disabled){
					this.combo.disable(disabled);
					if(disabled) this.jelement.addClass("xforms-readonly");
					else this.jelement.removeClass("xforms-readonly");
					this._disabled = disabled;
				},
				getDisabled : function(){
					return this._disabled;
				},
				setReadonly : function(readonly){
					this.setDisabled(readonly);
				},
				getReadonly : function(){
					return this.getDisabled();
				},
				setTabIndex : function(tabIndex){
					this._tabIndex = tabIndex;
				},
				getTabIndex : function(){
					return this._tabIndex;
				},
				setAccessKey : function(key){
					this._accessKey = key;
				},
				getAccessKey : function(){
					return this._accessKey;
				},
				setAutoRefresh : function(autoRefresh){
					this.autoRefresh = autoRefresh;
				},
				clearFilter : function(){
					this.filterData.setFilter(this.getFilterName(),"");
					if(this.defaultValue != undefined) 
						this.combo.setComboValue(this.defaultValue);
					else
						this.combo.setComboValue("0");
				},			
				setFilter : function(){
					if(!this.filterData || !this.dateRelation1) return;
					var condition = this.getCondition();
					var old = this.filterData.getFilter(this.getFilterName());
					if (condition != old) {
						this.filterData.setFilter(this.getFilterName(), condition);
						if (this.autoRefresh)
							this.filterData.refreshData();
					}			
				},
				getCondition : function(){
					var r = this.getDateRange();
					var condition;
					if (this.filterDateMode == "single"){
						var relationAlias = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,this.dateRelation1);
						condition = justep.Components.FilterUtils.getDateFilter(relationAlias, r.beginDate, r.endDate);
					}else{
						var r1 = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,this.dateRelation1);
						var r2 = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,this.dateRelation2);
						condition = justep.Components.FilterUtils.getDateRangeFilter(r1, r2, r.beginDate, r.endDate);					
					}
					if (this.onGetCondition) {
						var eventData = {
							"filterData" : this.filterData,
							"filterMode" : this.filterDateMode,
							"dateRelation1" : this.dateRelation1,
							"dateRelation2" : this.dateRelation2,
							"currentSelect" : this.getCurrentSelect(),
							"defaultSelect" : this.defaultValue,
							"customBeginDate" : r.beginDate,
							"customEndDate" : r.endDate,
							"defaultCondition" : condition
						};
						var ret = this.onGetCondition(eventData);
						if (ret)
							condition = ret;
					}
					return condition;		
				},
				getFilterName : function(){
					return "_" + this.domNode.id + "_filter";
				},
				getDateFilter : function(relation){
					if(!relation) return '';
					var range = this.getDateRange();
					var r = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,relation);
					return justep.Components.FilterUtils.getDateFilter(r, range.beginDate, range.endDate);
				},
				getBeginDatetime : function(){
					return this.getDateRange().beginDate;                   
				},
				getEndDatetime : function(){
					return this.getDateRange().endDate;
				},
				getCurrentSelect : function(){
					return this.combo.getSelectedValue();
				},
				getValue : function(){
					return this.getCurrentSelect();
				},
				getInnerDialog : function(){
					this._loadPart();
					return this.dialog;				
				},
				getInnerSelect : function(){
					return this.combo;
				},
				getDateRange : function() {
					var select = this.combo.getSelectedValue();
					var result = {'beginDate': null, 'endDate': null};
					if(typeof(select) == "string" && select) select = parseInt(select);
					if(typeof(select) != "number") return result;
					var today = justep.DateFilter._getToday();
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
							customBeginDate = this.getCustomBeginDate();  
							customEndDate = this.getCustomEndDate();
							if (customBeginDate) 
								result.beginDate = this._str2date(customBeginDate);
							if (customEndDate) 
								result.endDate = this._str2date(customEndDate);
							break;
						}
					}
					return result;	
				},
				getCustomBeginDate : function(){
					return this.data.getValue("beginDate", 1);
				},
				getCustomEndDate : function(){
					return this.data.getValue("endDate", 1);
				},
				openDialog : function(){
					this._loadPart();
					this.dialog.open();				
				},
				_loadPart : function(){
					if(!this._hasLoaded){
						xforms.load_part(this.partId);
						this.model = justep.xbl(this.modelId);
						this.data = justep.xbl(this.dataId);
						this.dialog = justep.xbl(this.dialogId);
						this._hasLoaded = true;
						this.dialog.attachEvent("onOpen", function(event) {
							this._doDialogOpen(event);
						}, this);
						this.dialog.attachEvent("onClose", function(event) {
							this._doDialogClose(event);
						}, this);
						this._lastCustomBeginDate = null;
						this._lastCustomEndDate = null;
					}
				},
				_doDialogOpen : function(){
					this._isDialogOK = false;
					if (this.getCustomBeginDate() == "" && this.getCustomEndDate() == "") {
						var today = justep.Date.toString(this._getToday(), "YYYY-MM-DD");
						this.data.setValue("beginDate", today, 1);
						this.data.setValue("endDate", today, 1);
					}
				},
				_getToday : function() {
					return this._str2date(justep.System.datetimeString());
				},
				_doDialogClose : function(){
					xforms.blur();
					if (this._isDialogOK) {
						this._lastCustomBeginDate = this.getCustomBeginDate();
						this._lastCustomEndDate = this.getCustomEndDate();
						this.setFilter();
						if(this.onChanged) this.onChanged({'source':this});
					} else {
						this.data.setValue("beginDate", this._lastCustomBeginDate, 1);
						this.data.setValue("endDate", this._lastCustomEndDate, 1);
					}
				},
				getCurrentLabel : function(){
					return this.combo.getComboText();
				},
				_str2date : function(d) {
					return new Date(parseInt(d.substr(0, 4), 10), parseInt(d.substr(5, 2), 10) - 1, parseInt(d.substr(8, 2), 10));
				},
				_doDialogCheck : function(){
					if (this.getCustomBeginDate() == "" || this.getCustomEndDate() == "") {
						alert(this.alertLabel1);
						return false;
					}
					var beginDate = this._str2date(this.getCustomBeginDate());
					var endDate = this._str2date(this.getCustomEndDate());
					if (beginDate > endDate) {
						alert(this.alertLabel2);
						return false;
					}
					this._isDialogOK = true;
					return true;
				},
				dispose: function(){
					this.combo.destructor();
					this.combo = null;
					justep.XBLObject.prototype.dispose.call(this);
				}
			}));

function _xbl_JSClassDefine_toolbars(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_toolbars.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function(){
				this.initXFormEvent();	
			},
			"initXFormEvent" : function(){
				var id = this.domNode.id;
				this.xformInfo = {};
				var that = this;
				var attr = "readonly";
				var cb = function(){
					var modelId = $(this).attr("model");
					if (!modelId) return;
					that.xformInfo[modelId] = that.xformInfo[modelId] || [];
					var info = {};
					info["id"] = this.id;
					info["dataId"] = $(this).attr("data");
					info[attr] = $(this).attr(attr);
					that.xformInfo[modelId].push(info);
				}; 
				jQuery("[readonly]", this.domNode).each(cb);
				var attr = "relevant";
				jQuery("[relevant]", this.domNode).each(cb);
				for(var model in this.xformInfo){
					var that = this; 
					new xforms.Listener(justep(model), "xforms-refresh", null, function(){that.modelRefreshcb();});
					/*
					todo: 相似组件以后可以集中统一触发一次 
					xforms.XMLEvents.dispatch(justep.xbl(model), "xforms-refresh");
					*/
					this.modelRefreshcb();
				} 
			},
			"modelRefreshcb" : function(){
				for(var model in this.xformInfo){
					var infos = this.xformInfo[model];
					for(var i in infos){
						var info = infos[i];
						if (info.readonly){
							var xpath = xforms.XPath.get(info.readonly);
							var img = jQuery("#" + info.id + ".xforms-trigger-img,"+"#" + info.id + " .xforms-trigger-img");
							var a = jQuery("#" + info.id);
							if(0!=img.size()){
								if (!info.enImg){
									info.enImg = img.attr("src");
									if(info.enImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)
										info.enImg = justep.Request.convertURL(info.enImg, true);
								}
								if (!info.disImg){
									info.disImg = img.attr("dis-src");
									if(info.disImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)
										info.disImg = justep.Request.convertURL(info.disImg, true);
								}
							}
							if (!info.click){
								info.click = a.attr("onclick") || function(){};
								a.attr("onclick", null);
							}
							if(xpath.evaluate({})){
								img.attr("src", info.disImg);
								a.unbind("click");
								a.addClass("xforms-readonly");
							}else{
								img.attr("src", info.enImg);
								a.unbind("click");
								a.bind("click", function(){if(xforms)xforms.blur(true);});
								a.bind("click", info.click);
								a.removeClass("xforms-readonly");
							}
						}else if(info.relevant){
							var xpath = xforms.XPath.get(info.relevant);
							var el = jQuery("#" + info.id);
							if(xpath.evaluate({})){
								el.parent('td').show();
							}else{
								el.parent('td').hide();
							}
						}
					}
				}
			},
			"__dragObject" : null,
			"mousedownAction" : function(event) {
				event = event || window.event;
				var group = this.__findToolGroup(event.srcElement||event.target);
				if (!group) { 
					return;
				}
				var posX = parseInt(window.event.clientX) + parseInt(document.body.scrollLeft);
				var posY = parseInt(window.event.clientY) + parseInt(document.body.scrollTop);
				this.__dragObject = new Object();
				this.__dragObject.obj = group;
				this.__dragObject.manager = group.parentNode;
				group.style.position = "absolute";
				group.style.border = "1px ridge";
				group.style.top = posY - 0 + 4;
				group.style.left = posX - 0 + 4;
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);
				xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
				xforms.Event.attach(document, "selectstart", this.selectstartAction, null, this);
			},
			"mousemoveAction" : function() {
				var posX = parseInt(window.event.clientX) + parseInt(document.body.scrollLeft);
				var posY = parseInt(window.event.clientY) + parseInt(document.body.scrollTop);
				if (this.__dragObject) {
					this.__dragObject.obj.style.top = posY - 0 + 4;
					this.__dragObject.obj.style.left = posX - 0 + 4;
				}
			},
			"findParentTDOrTH" : function(node) {
				var cur = node;
				while (cur) {
					var tmp = cur.localName || cur.tagName;
					if (tmp.toLowerCase()=="body")
						return null;
					else if (tmp.toLowerCase()=="td" || tmp.toLowerCase()=="th") {
						return cur;
					}
					cur = cur.parentNode;
				}
				return cur;

			},
			"mouseupAction" : function(event) {
				if (this.__dragObject) {
					event = event || window.event;
					var target = event.srcElement || event.target;
					var td = this.findParentTDOrTH(target);
					var group = this.__findToolGroup(target);
					if (group && group.parentNode==this.__dragObject.manager) {
						if (td && td.name=="group_anchor") {
							var manager = this.__dragObject.obj.parentNode;
							manager.removeChild(this.__dragObject.obj);
							manager.insertBefore(this.__dragObject.obj, group);
						}
						else {
							var manager = this.__dragObject.obj.parentNode;
							manager.removeChild(this.__dragObject.obj);
							manager.appendChild(this.__dragObject.obj);
						}
					}
					this.__dragObject.obj.style.position = "static";
					this.__dragObject.obj.style.border = "none";
				}
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);
				xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
				xforms.Event.attach(document, "selectstart", this.selectstartAction, null, this);
				this.__dragObject = null;
			},
			"selectstartAction" : function() {
				return false;
			},
			"__findToolGroup" : function(node) {
				var cur = node;
				while (cur) {
					if (cur.tagName=="BODY") {
						return null;
					}
					else if (cur.tagName=="DIV" && cur.name=="toolbargroup") {
						return cur;
					}
					cur = cur.parentNode;
				}
				return null;
			}
		}));

function _xbl_JSClassDefine_bizDataFilterDialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_bizDataFilterDialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL": function() {
				var dialogEl = this.getElementByXblID("filter-dialog");
				this.dialogId = $(dialogEl).firstElement().id;
				var frameEl = this.getElementByXblID("filter-dialog-iframe");
				this.iframeId = frameEl.id;
			},
			"show": function(data, callBack) {
				var filterData = data;
				if (typeof(filterData) == "string") {
					filterData = justep.xbl(filterData);
				}
				if (filterData) {
					if (typeof(filterData.advanceFilter) != "undefined") {
						var dialog = xforms(this.dialogId);
						if(dialog) {
							var frameEl = justep(this.iframeId);
							if (frameEl) {
								frameEl.dialogId = this.dialogId;
								frameEl.filterData = filterData;
								frameEl.callBack = callBack;
								dialog.open();
								return true;
							}
						}
					}
				}
				return false;
			}
		}));

function _xbl_JSClassDefine_pageNavigator(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_pageNavigator.prototype = justep.Object.extend(new justep.XBLObject(), eval({ 
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
			    this.__limit = 20;
			    this.__offset = 1;
			    this.__count = 0;
			    this.__pageCount = 5;
			    this.__navigatorContent = '';
			    this.__navigatorPageConten = '';
			    this.__firstButton = '';
			    this.__prevButton = '';
			    this.__nextButton = '';
			    this.__lastButton = '';
			    this.__extendArea = '';
				justep.Object.extend(this, new justep.PageNavigator(this));
				this.attachStoreEvent();
				this.refresh();
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

	var ids=[{id:'993d922d9f4e477d94ed190130322b61', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabPanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'3bd0717e360449dfb916c95c47e1cfc8', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'d364671847fe4d398e768b635abb217c', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'dateFilter', name:'/UI/system/components/dateFilter.xbl.xml#dateFilter', children:[{id:'dateFilter_part', name:'xforms:group', children:[{id:'dateFilter_dialog', name:'xforms:dialog', children:[{id:'afb640ad012943a09fbe9d91a479b896', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'7decff46bd84466eb4387c304973702f', name:'xforms:input'},{id:'4f172bf3be6148a0ac7b0fd5d720adbe', name:'xforms:input'},{id:'916a908e982e49a797b618d775fe55b4', name:'xforms:trigger', children:[{id:'5a34ac5e4f43489596b501794d38d1d8', name:'xforms:label'}]},{id:'c0fef851f70147f9a2b7688b4d48b79e', name:'xforms:trigger', children:[{id:'b91bb52ca6034fe2944f48b78f8fb5f8', name:'xforms:label'}]}]}]}]}]},{id:'search', name:'xforms:trigger', children:[{id:'691f83a26e3f42c49e6a5d9edce5f41d', name:'xforms:label'}]},{id:'grdMain', name:'xforms:grid'},{id:'executorDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'actionDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'activityDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]},{id:'b3559b1f818949d49bca6bde89d5efb7', name:'xforms:output'},{id:'ad3f72b11cd64c408d69f14373bd3db8', name:'xforms:output'},{id:'faa316e4ea754fb6adccb79379357c8e', name:'xforms:output'},{id:'261b0c0b273c4e9f8e64a0b76427041d', name:'xforms:output'},{id:'aa98d68853064e54b9327e43f5094ac3', name:'xforms:output'},{id:'24beeca874ad4dd2bd54111e65ab3a1e', name:'xforms:output'},{id:'3ca8f6e4289c4871b5b15037284ba943', name:'xforms:textarea'},{id:'a5590e7c0dc34e7192b5bc36db5d703a', name:'xforms:textarea'},{id:'83de2f52fd674f38a8e2902980bbc14b', name:'xforms:textarea'}]},{id:'filter-pattern-25a7db12-e55a-4a58-acb5-e84dda779691', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'13cba8a5b0224dbca782f9bb3ff676d8', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_447287161', name:'xforms:menu'}]},{id:'GLOBAL_ID_N930748943', name:'xforms:dialog'}]},{id:'filter-dialog-7a7da279-b3e4-42c7-b42b-fc3b52919e54', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1445351013', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'dateFilter_part');xf._a('dateFilter_part','7decff46bd84466eb4387c304973702f');xf._a('dateFilter_part','4f172bf3be6148a0ac7b0fd5d720adbe');xf._a('dateFilter_part','916a908e982e49a797b618d775fe55b4');xf._a('916a908e982e49a797b618d775fe55b4','5a34ac5e4f43489596b501794d38d1d8');xf._a('dateFilter_part','c0fef851f70147f9a2b7688b4d48b79e');xf._a('c0fef851f70147f9a2b7688b4d48b79e','b91bb52ca6034fe2944f48b78f8fb5f8');xf._a(null,'search');xf._a('search','691f83a26e3f42c49e6a5d9edce5f41d');xf._a(null,'grdMain');xf._a(null,'b3559b1f818949d49bca6bde89d5efb7');xf._a(null,'ad3f72b11cd64c408d69f14373bd3db8');xf._a(null,'faa316e4ea754fb6adccb79379357c8e');xf._a(null,'261b0c0b273c4e9f8e64a0b76427041d');xf._a(null,'aa98d68853064e54b9327e43f5094ac3');xf._a(null,'24beeca874ad4dd2bd54111e65ab3a1e');xf._a(null,'3ca8f6e4289c4871b5b15037284ba943');xf._a(null,'a5590e7c0dc34e7192b5bc36db5d703a');xf._a(null,'83de2f52fd674f38a8e2902980bbc14b');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/version",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dataMain')/sCreateTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('dataMain')/sEDField21",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEDField21')))));	
xf._b("instance('dataMain')/sEDField22",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEDField22')))));	
xf._b("instance('dataMain')/sEIField41",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEIField41')))));	
xf._b("instance('dataMain')/sEIField42",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEIField42')))));	
xf._b("instance('dataMain')/sENField11",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sENField11')))));	
xf._b("instance('dataMain')/sENField12",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sENField12')))));	
xf._b("instance('dateFilter_data')/beginDate",xf._g(xf._f('instance',xf._i("dateFilter_data")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('dateFilter_data')/endDate",xf._g(xf._f('instance',xf._i("dateFilter_data")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("sActivityName",xf._h(false, xf._k("child",xf._j('','sActivityName'))));	
xf._b("sCreatorPersonName",xf._h(false, xf._k("child",xf._j('','sCreatorPersonName'))));	
xf._b("sActionName",xf._h(false, xf._k("child",xf._j('','sActionName'))));	
xf._b("sCreateTime",xf._h(false, xf._k("child",xf._j('','sCreateTime'))));	
xf._b("sTypeName",xf._h(false, xf._k("child",xf._j('','sTypeName'))));	
xf._b("sIP",xf._h(false, xf._k("child",xf._j('','sIP'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("sDeviceType",xf._h(false, xf._k("child",xf._j('','sDeviceType'))));	
xf._b("sDescription",xf._h(false, xf._k("child",xf._j('','sDescription'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMain')/sActivityName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sActivityName')))));	
xf._b("data('dataMain')/sActionName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sActionName')))));	
xf._b("data('dataMain')/sCreatorPersonName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sCreatorPersonName')))));	
xf._b("data('dataMain')/sCreateTime",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("data('dataMain')/sIP",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sIP')))));	
xf._b("data('dataMain')/sTypeName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sTypeName')))));	
xf._b("data('dataMain')/sParameters",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sParameters')))));	
xf._b("data('dataMain')/sResult",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sResult')))));	
xf._b("data('dataMain')/sDescription",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sDescription')))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/sENField12","xsd:float",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_447287161 = new xforms.XFMenu('GLOBAL_ID_447287161','context');xf_menu_GLOBAL_ID_447287161.menu.addContextZone('13cba8a5b0224dbca782f9bb3ff676d8');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_447287161.hide()});xf_menu_GLOBAL_ID_447287161.menu.setOpenMode('web');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N930748943");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_447287161'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_447287161', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N930748943',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N787043304');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N787043304", "");}));xf._p(justep('GLOBAL_ID_N930748943'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N930748943', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N787043304');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N930748943'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N930748943', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1445351013',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_428287447');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_428287447", "");}));xf._p(justep('GLOBAL_ID_1445351013'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_1445351013', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_model_dateFilter_model = new xforms.XFModel('dateFilter_model',null);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.DateFilter.setFilter("dateFilter", justep.xbl(""), "single", "", "", "", "3", null, null, "", false);}));xf._p(justep('dateFilter_model'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_0,'dateFilter_model', evt,false)});	
var xf_trigger_search=new xforms.XFTrigger('search',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.searchClick(event)}));xf._p(justep('search'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'search', evt,false)});	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'version,sCreatorFID,sCreatorFName,sCreatorPersonID,sCreatorPosID,sCreatorPosName,sCreatorDeptID,sCreatorDeptName,sCreatorOgnID,sCreatorOgnName,sProcess,sProcessName,sActivity,sAction,sStatusName,sParameters,sResult,sESField01,sESField02,sESField03,sESField04,sEDField21,sEDField22,sETField31,sETField32,sEIField41,sEIField42,sEBField51,sEBField52,sENField11,sENField12,sOperatingSystem',onInit:null,type:'grid',smartRender:null,delay:false,ids:'sActivityName,sCreatorPersonName,sActionName,sCreateTime,sTypeName,sIP,sDeviceType,sDescription,space-column',headNames:'功能,操作者,操作,操作时间,类别,IP地址,客户端类型,描述,&nbsp;',widths:'105,100,150,140,100,100,100,100,*',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:',,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'sIP','true');this.grid.bindColReadonly(null,'sDeviceType','true');}});	
var xf_output_b3559b1f818949d49bca6bde89d5efb7=new xforms.XFOutput('b3559b1f818949d49bca6bde89d5efb7',xf._q("data('dataMain')/sActivityName"),null,null);	
var xf_output_ad3f72b11cd64c408d69f14373bd3db8=new xforms.XFOutput('ad3f72b11cd64c408d69f14373bd3db8',xf._q("data('dataMain')/sActionName"),null,null);	
var xf_output_faa316e4ea754fb6adccb79379357c8e=new xforms.XFOutput('faa316e4ea754fb6adccb79379357c8e',xf._q("data('dataMain')/sCreatorPersonName"),null,null);	
var xf_output_261b0c0b273c4e9f8e64a0b76427041d=new xforms.XFOutput('261b0c0b273c4e9f8e64a0b76427041d',xf._q("data('dataMain')/sCreateTime"),null,null);	
var xf_output_aa98d68853064e54b9327e43f5094ac3=new xforms.XFOutput('aa98d68853064e54b9327e43f5094ac3',xf._q("data('dataMain')/sIP"),null,null);	
var xf_output_24beeca874ad4dd2bd54111e65ab3a1e=new xforms.XFOutput('24beeca874ad4dd2bd54111e65ab3a1e',xf._q("data('dataMain')/sTypeName"),null,null);	
xf._d('3ca8f6e4289c4871b5b15037284ba943','textarea',xf._q("data('dataMain')/sParameters"),null,null,null,null,false,true);	
xf._d('a5590e7c0dc34e7192b5bc36db5d703a','textarea',xf._q("data('dataMain')/sResult"),null,null,null,null,false,true);	
xf._d('83de2f52fd674f38a8e2902980bbc14b','textarea',xf._q("data('dataMain')/sDescription"),null,null,null,null,false,true);	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('dateFilter_model').xformsObject.construct_part();	
}	
function load_dateFilter_part(){if (justep("dateFilter_part").getAttribute('loaded') && justep("dateFilter_part").getAttribute('loaded') == 'true') return;justep("dateFilter_part").setAttribute('loaded', 'true');	
if(typeof(load_dateFilter_part_html) == 'function')load_dateFilter_part_html();	
new xforms.XFGroup('dateFilter_part',null);var xf_model_xf_model_2 = new xforms.XFModel('xf-model-2',null);	
xf._c('xf-bind-8','xf-model-2',"instance('dateFilter_data')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','xf-model-2',"instance('dateFilter_data')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('dateFilter_data','xf-model-2',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dateFilter_data','value,label,beginDate,endDate');	
new xforms.XFDialog('dateFilter_dialog',"自定义",'model',true,false,true,false,false,null,'238','112',null,null,null,null);	
xf._d('7decff46bd84466eb4387c304973702f','text',xf._q("instance('dateFilter_data')/beginDate"),null,null,null,null,false,false);	
xf._d('4f172bf3be6148a0ac7b0fd5d720adbe','text',xf._q("instance('dateFilter_data')/endDate"),null,null,null,null,false,false);	
var xf_trigger_916a908e982e49a797b618d775fe55b4=new xforms.XFTrigger('916a908e982e49a797b618d775fe55b4',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms.blur(true); if(justep.xbl('dateFilter')._doDialogCheck()) xforms('dateFilter_dialog').close();}));xf._p(justep('916a908e982e49a797b618d775fe55b4'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'916a908e982e49a797b618d775fe55b4', evt,false)});	
var xf_trigger_c0fef851f70147f9a2b7688b4d48b79e=new xforms.XFTrigger('c0fef851f70147f9a2b7688b4d48b79e',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms('dateFilter_dialog').close();}));xf._p(justep('c0fef851f70147f9a2b7688b4d48b79e'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'c0fef851f70147f9a2b7688b4d48b79e', evt,false)});	
}	
function load_dateFilter_part_xblinit(){if (justep("dateFilter_part").getAttribute('xblloaded') && justep("dateFilter_part").getAttribute('xblloaded') == 'true') return;justep("dateFilter_part").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-2').xformsObject.construct_part();	
xforms.refresh(justep("dateFilter_part"));	
justep.XBLObject.loadXBL(justep("dateFilter_part"));}	
var __actions__ = {	
};	
function load_dateFilter_part_html(){var a = [];a.push('<div class="xforms-group-content" style="" >');a.push('<div id="dateFilter_dialog" style="display:none" >');a.push('</div>');a.push('<div style="width:234px;height:87px;position:absolute;left:-9000px;top:-9000px" >');a.push('<div class="xforms-dialog" height="112" id="dateFilter_dialog-content" minmax="false" resizable="false" style="width:100%;height:100%" title="自定义" width="238" >');a.push('<table border="0" cellpadding="0" cellspacing="8" class="component_42908985 tableLayout" component="/UI/system/components/tableLayout.xbl.xml#tableLayout" id="afb640ad012943a09fbe9d91a479b896" style="width:100%;height:100%;tabel-layout:fixed" >');a.push('<tr style="height: 28px" valign="middle" >');a.push('<td style="width: 56px;" >');a.push('<div style="padding-top:8px" >');a.push('开始日期');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-input xforms-appearance-minimal xui-input" id="7decff46bd84466eb4387c304973702f" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<input accesskey="" class="xforms-value" tabindex="" type="text" >');a.push('</input>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('<td class="xui-ie-input-bug" >');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('<tr style="height: 28px" valign="middle" >');a.push('<td style="width: 56px;" >');a.push('<div style="padding-top:8px" >');a.push('结束日期');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-input xforms-appearance-minimal xui-input" id="4f172bf3be6148a0ac7b0fd5d720adbe" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<input accesskey="" class="xforms-value" tabindex="" type="text" >');a.push('</input>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('<td class="xui-ie-input-bug" >');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('<tr valign="middle" >');a.push('<td align="right" colspan="2" >');a.push('<table cellpadding="0" cellspacing="0" class="button-green xforms-control xforms-trigger xforms-appearance-minimal xui-button" id="916a908e982e49a797b618d775fe55b4" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="width:75px;margin-right:8px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="xxf-value" >');a.push('<button class="xui-button-label" onmouseout="xforms.Core.setClass(this,\'xforms-trigger-over\')" onmouseover="xforms.Core.setClass(this,\'xforms-trigger-over\',true)" tabindex="" type="button" >');a.push('<span class="xforms-label " id="5a34ac5e4f43489596b501794d38d1d8" >');a.push('确定');a.push('</span>');a.push('</button>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-trigger xforms-appearance-minimal xui-button" id="c0fef851f70147f9a2b7688b4d48b79e" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="width:75px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="xxf-value" >');a.push('<a class="xui-button-label" tabindex="" >');a.push('<i class="icon " >');a.push('</i>');a.push('<span class="xforms-label " id="b91bb52ca6034fe2944f48b78f8fb5f8" >');a.push('取消');a.push('</span>');a.push('</a>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</div>');a.push('</div>');justep('dateFilter_part').innerHTML = a.join('');}