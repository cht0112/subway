
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/smartFilter.xbl.xml#smartFilter"] = _xbl_JSClassDefine_smartFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/dateFilter.xbl.xml#dateFilter"] = _xbl_JSClassDefine_dateFilter;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_dialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_dialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var dialog = new justep.Dialog(node.getAttribute("id"),node.getAttribute("title"),node.getAttribute("modal")=="true",node.getAttribute("status"),node.getAttribute("width"),node.getAttribute("height"),node.getAttribute("left"),node.getAttribute("top")
					,node.getAttribute("onInit"),node.getAttribute("onOpen"),node.getAttribute("onClose")
				);
				dialog.setClosable(node.getAttribute("closable")!="false");
				dialog.setMinmaxable(node.getAttribute("minmaxable")!="false");
				dialog.setResizable(node.getAttribute("resizable")!="false");
				dialog.setNeighbor(node.getAttribute("neighbor"));
				dialog.setAutoSize(node.getAttribute("auto-size")=="true");
				dialog.setShowTitle(node.getAttribute("show-title")!="false");
				justep.Object.extend(this, dialog);
			} 
		}));

function _xbl_JSClassDefine_process(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_process.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function(){
					justep.supportCustomOperation(this);
					justep.Object.extend(this, new justep.ProcessEngine(this));
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

function _xbl_JSClassDefine_borderLayout(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_borderLayout.prototype = justep.Object.extend(new justep.XBLObject(), eval({

			"initXBL" : function() {
			   	if(!this.domNode.id || this.domNode.id ==""){
					this.domNode.id = (new UUID()).valueOf();
			   	}
			   	var baseCls = '.xui-borderlayout-';
			   	var id = this.domNode.id; 
			   	this.el = $("#" + id);
			   	this.rootEl = $("#" + id + " > div");
			   	this.topEl = $("#" + id + " > div > " + baseCls + "top");
			   	this.leftEl = $("#" + id + " > div > " + baseCls + "left");
			   	this.rightEl = $("#" + id + " > div > " + baseCls + "right");
			   	this.bottomEl = $("#" + id + " > div > " + baseCls + "bottom");
			   	this.centerEl = $("#" + id + " > div > " + baseCls + "center");
			   	this.topBorderEl = $("#" + id + " > div > " + baseCls + "border-top");
			   	this.leftBorderEl = $("#" + id + " > div > " + baseCls + "border-left");
			   	this.rightBorderEl = $("#" + id + " > div > " + baseCls + "border-right");
			   	this.bottomBorderEl = $("#" + id + " > div > " + baseCls + "border-bottom");
			   	this.onWindowResize();
			},
			onWindowResize: function(){
				var b = parseFloat(this.rootEl.attr('borderSize')),
					top = left = right = bottom = 0,
					w = this.el.width()-2*b, h = this.el.height()-2*b,
					bp = function(el, isHeight){
						return isHeight? (el.outerHeight()-el.height()): (el.outerWidth()-el.width());
					},
					size = function(el, isHeight){
						var value = el.attr('size');
						if(value!='auto'){
							value = parseFloat(value) - bp(el, isHeight);
						}
						return value;
					},
					area = $(" >.xui-borderlayout-area", this.rootEl);

/*				area.css({overflow:'hidden'});	
				area.css({overflow:'auto'});
*/				
				this.rootEl.height(h);
				this.rootEl.width(w);
				this.rootEl.css({top: b, left:b});					
				if(this.topEl.get(0)){
					this.topEl.css({top: top, left:left});
					this.topEl.height(size(this.topEl, true));
					this.topEl.width(w - bp(this.topEl));
					top = this.topEl.outerHeight();
					if(this.topBorderEl.get(0)){
						this.topBorderEl.css({top: top,left:left});
						top += this.topBorderEl.height();
					} 
				}
				if(this.leftEl.get(0)){
					this.leftEl.css({top: top, left:left});
					this.leftEl.width(size(this.leftEl));
					left = this.leftEl.outerWidth(); 
					if(this.leftBorderEl.get(0)){
						this.leftBorderEl.css({top: top, left: left});
						left += this.leftBorderEl.width(); 
					} 
				}
				if(this.rightEl.get(0)){
					this.rightEl.css({top: top, right:right});
					this.rightEl.width(size(this.rightEl));
					right = this.rightEl.outerWidth(); 
					if(this.rightBorderEl.get(0)){
						this.rightBorderEl.css({top: top,right: right});
						right += this.rightBorderEl.width();
					} 
				}
				if(this.bottomEl.get(0)){
					this.bottomEl.height(size(this.bottomEl, true));
					this.bottomEl.width(w - bp(this.bottomEl));
					bottom = this.bottomEl.outerHeight(); 
					if(this.bottomBorderEl.get(0)){
						this.bottomBorderEl.css({left:0, bottom: bottom});
						bottom += this.bottomBorderEl.height();  
					} 
				}
				this.centerEl.css({top: top, left: left});
				this.centerEl.width(w - left - right - bp(this.centerEl));
				h = h - top - bottom;
				this.leftEl.height(h - bp(this.leftEl, true));  
				this.centerEl.height(h - bp(this.centerEl, true));  
				this.rightEl.height(h - bp(this.rightEl, true));
				this.leftBorderEl.height(h);  
				this.rightBorderEl.height(h);
			}   	
		}));

function _xbl_JSClassDefine_smartFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_smartFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new justep.SmartFilter(this));
				}
			}));

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

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
		    		this.combo.attachEvent("onChange",callback);
				},
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
					this.combo.readonly(true);
					this._readOnly;
				},
				getReadonly : function(){
					return this._readOnly;
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
							}else{					el.parent('td').hide();
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
								dialog.open();								return true;
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

	var ids=[{id:'929af2987dd043388c74f1f6b526133c', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'dlgChart', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'process', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'process_processControlDialog', name:'xforms:dialog'},{id:'process_processChartDialogID', name:'xforms:dialog'},{id:'process_processConfirmDialog', name:'xforms:dialog', children:[{id:'dc60837663f54ffb9108ab1156f09a0e', name:'xforms:trigger', children:[{id:'ddb5a1f3821d4580a2fd1af256450e90', name:'xforms:label'}]},{id:'510b19019ba94947b7161b00ab03636b', name:'xforms:trigger', children:[{id:'d9420627fe2440a8a65d5393db1c170c', name:'xforms:label'}]}]},{id:'process_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'d5806e75c1234ac4a9a2b30fc3ea5be8', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'dateFilter1', name:'/UI/system/components/dateFilter.xbl.xml#dateFilter', children:[{id:'dateFilter1_part', name:'xforms:group', children:[{id:'dateFilter1_dialog', name:'xforms:dialog', children:[{id:'d4eeccb37f3a4868956e76481510be19', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'da108df9646c4b2daed90abb7ab770cf', name:'xforms:input'},{id:'a23a975664334895813c93d3b4f04467', name:'xforms:input'},{id:'29aaf6401eed456d9f94d640c47f0613', name:'xforms:trigger', children:[{id:'79be3074dfe3404fb578e51458c3b66c', name:'xforms:label'}]},{id:'9ad450f121464596bef65491840755e3', name:'xforms:trigger', children:[{id:'5a7cb6fd979845f59d42cd3f1a8b54fa', name:'xforms:label'}]}]}]}]}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'xuiLabel6', name:'xforms:label'},{id:'default2', name:'xforms:value'}]},{id:'gridSelect1', name:'xforms:gridselect', children:[{id:'xuiLabel6', name:'xforms:label'},{id:'default2', name:'xforms:value'}]},{id:'smartFilter1', name:'/UI/system/components/smartFilter.xbl.xml#smartFilter', children:[{id:'smartFilter1_input_1792196792', name:'xforms:input'}]},{id:'trgSearch', name:'xforms:trigger', children:[{id:'xuiLabel10', name:'xforms:label'}]},{id:'grid', name:'xforms:grid'}]},{id:'filter-pattern-25d7d6d2-645e-4106-8ba2-b097f104b4e6', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'128336bcda604df0b80180534e100077', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1130234067', name:'xforms:menu'}]},{id:'GLOBAL_ID_689827909', name:'xforms:dialog'}]},{id:'filter-dialog-cf210b39-0c01-4ee2-856d-dce757d6a681', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N15119061', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'dc60837663f54ffb9108ab1156f09a0e');xf._a('dc60837663f54ffb9108ab1156f09a0e','ddb5a1f3821d4580a2fd1af256450e90');xf._a(null,'510b19019ba94947b7161b00ab03636b');xf._a('510b19019ba94947b7161b00ab03636b','d9420627fe2440a8a65d5393db1c170c');xf._a(null,'dateFilter1_part');xf._a('dateFilter1_part','da108df9646c4b2daed90abb7ab770cf');xf._a('dateFilter1_part','a23a975664334895813c93d3b4f04467');xf._a('dateFilter1_part','29aaf6401eed456d9f94d640c47f0613');xf._a('29aaf6401eed456d9f94d640c47f0613','79be3074dfe3404fb578e51458c3b66c');xf._a('dateFilter1_part','9ad450f121464596bef65491840755e3');xf._a('9ad450f121464596bef65491840755e3','5a7cb6fd979845f59d42cd3f1a8b54fa');xf._a(null,'gridSelect2');xf._a('gridSelect2','xuiLabel6');xf._a('gridSelect2','default3');xf._a(null,'gridSelect1');xf._a('gridSelect1','xf-label-5');xf._a('gridSelect1','xf-itemset-1');xf._a(null,'smartFilter1_input_1792196792');xf._a(null,'trgSearch');xf._a('trgSearch','xuiLabel10');xf._a(null,'grid');function init() {	
var begin = new Date().getTime();	
xf._b("instance('main')/sDistributeTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sDistributeTime')))));	
xf._b("instance('main')/sCreateTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('main')/sLastModifyTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sLastModifyTime')))));	
xf._b("instance('main')/sLimitTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("instance('main')/sWarningTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xf._b("instance('main')/sExecuteTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sExecuteTime')))));	
xf._b("instance('main')/sExpectStartTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sExpectStartTime')))));	
xf._b("instance('main')/sExpectFinishTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sExpectFinishTime')))));	
xf._b("instance('main')/sActualStartTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sActualStartTime')))));	
xf._b("instance('main')/sActualFinishTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sActualFinishTime')))));	
xf._b("instance('main')/sSequence",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('main')/version",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('main')/sEDField21",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField21')))));	
xf._b("instance('main')/sEDField22",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField22')))));	
xf._b("instance('main')/sEDField23",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField23')))));	
xf._b("instance('main')/sEDField24",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField24')))));	
xf._b("instance('main')/sEIField41",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField41')))));	
xf._b("instance('main')/sEIField42",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField42')))));	
xf._b("instance('main')/sEIField43",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField43')))));	
xf._b("instance('main')/sEIField44",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField44')))));	
xf._b("instance('main')/sENField11",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField11')))));	
xf._b("instance('main')/sENField12",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField12')))));	
xf._b("instance('main')/sENField13",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField13')))));	
xf._b("instance('main')/sENField14",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField14')))));	
xf._b("instance('main')/sWithdraw",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sWithdraw')))));	
xf._b("instance('dateFilter1_data')/beginDate",xf._g(xf._f('instance',xf._i("dateFilter1_data")),xf._h(false, xf._k("child",xf._j('','beginDate')))),'','http://www.justep.com/xui');	
xf._b("instance('dateFilter1_data')/endDate",xf._g(xf._f('instance',xf._i("dateFilter1_data")),xf._h(false, xf._k("child",xf._j('','endDate')))),'','http://www.justep.com/xui');	
xf._b("data('custom_filter')/org",xf._g(xf._f('data',xf._i("custom_filter")),xf._h(false, xf._k("child",xf._j('','org')))),'','http://www.justep.com/xui');	
xf._b("data('custom_filter')/orgLabel",xf._g(xf._f('data',xf._i("custom_filter")),xf._h(false, xf._k("child",xf._j('','orgLabel')))),'','http://www.justep.com/xui');	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))),'','http://www.justep.com/xui');	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))),'','http://www.justep.com/xui');	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("data('custom_filter')/status",xf._g(xf._f('data',xf._i("custom_filter")),xf._h(false, xf._k("child",xf._j('','status')))),'','http://www.justep.com/xui');	
xf._b("data('custom_filter')/statusLabel",xf._g(xf._f('data',xf._i("custom_filter")),xf._h(false, xf._k("child",xf._j('','statusLabel')))),'','http://www.justep.com/xui');	
xf._b("instance('smartFilter1_data_1792196792')/value",xf._g(xf._f('instance',xf._i("smartFilter1_data_1792196792")),xf._h(false, xf._k("child",xf._j('','value')))),'','http://www.justep.com/xui');	
xf._b("calcIndex",xf._h(false, xf._k("child",xf._j('','calcIndex'))));	
xf._b("sStatusName1",xf._h(false, xf._k("child",xf._j('','sStatusName1'))));	
xf._b("sESField05",xf._h(false, xf._k("child",xf._j('','sESField05'))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sCreatorPersonName",xf._h(false, xf._k("child",xf._j('','sCreatorPersonName'))));	
xf._b("sCreateTime",xf._h(false, xf._k("child",xf._j('','sCreateTime'))));	
xf._b("sLastModifyTime",xf._h(false, xf._k("child",xf._j('','sLastModifyTime'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('custom_filter','model1',null,'<rows id="default4"><row id="default5"><cell id="default6"></cell><cell id="default7"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('custom_filter','status,statusLabel,org,orgLabel');	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action3,'model1', evt,false)});	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'xf-model-1', evt,false)});	
new xforms.XFDialog('process_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_2=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('process_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('process'); process[callback](task, processControl, options); } justep('process_processControlDialogIFrame').src="";});xf._p(justep('process_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_2,'process_processControlDialog', evt,false)});	
new xforms.XFDialog('process_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){justep('process_processChartDialogIFrame').src="";});xf._p(justep('process_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_3,'process_processChartDialogID', evt,false)});	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('process_processChartDialogIFrame').src=url;});xf._p(justep('process_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_4,'process_processChartDialogID', evt,false)});	
new xforms.XFDialog('process_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('process'); process[callback](task, processControl, options); }});xf._p(justep('process_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'process_processConfirmDialog', evt,false)});	
var xf_trigger_dc60837663f54ffb9108ab1156f09a0e=new xforms.XFTrigger('dc60837663f54ffb9108ab1156f09a0e',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('process_processConfirmDialog').close();}));xf._p(justep('dc60837663f54ffb9108ab1156f09a0e'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'dc60837663f54ffb9108ab1156f09a0e', evt,false)});	
var xf_trigger_510b19019ba94947b7161b00ab03636b=new xforms.XFTrigger('510b19019ba94947b7161b00ab03636b',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('process_processConfirmDialog').close();}));xf._p(justep('510b19019ba94947b7161b00ab03636b'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'510b19019ba94947b7161b00ab03636b', evt,false)});	
var xf_model_dateFilter1_model = new xforms.XFModel('dateFilter1_model',null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.DateFilter.setFilter("dateFilter1", justep.xbl("main"), "single", "sCreateTime", "", "", "0", null, null, "", false);}));xf._p(justep('dateFilter1_model'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_4,'dateFilter1_model', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('custom_filter')/org"),labelRef:xf._q("data('custom_filter')/orgLabel"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default28"><row id="default29"><cell id="default30">0</cell><cell id="default31">全部</cell></row><row id="default32"><cell id="default33">1</cell><cell id="default34">本人</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect2Closeup'});	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('custom_filter')/status"),labelRef:xf._q("data('custom_filter')/statusLabel"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'col_0',labelColumn:'col_0',extColumn:null,labels:',',aligns:',',types:'checkbox,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default9"><row id="default10"><cell id="default11">编辑中</cell></row><row id="default12"><cell id="default13">处理中</cell></row><row id="default14"><cell id="default15">已完成</cell></row><row id="default16"><cell id="default17">已终止</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect1Closeup'});	
var xf_model_smartFilter1_model_1792196792 = new xforms.XFModel('smartFilter1_model_1792196792',null);	
new xforms.XFInstance2('smartFilter1_data_1792196792','smartFilter1_model_1792196792',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('smartFilter1_data_1792196792','value');	
xf._d('smartFilter1_input_1792196792','text',xf._q("instance('smartFilter1_data_1792196792')/value"),null,null,null,null,false,false);	
var xf_trigger_trgSearch=new xforms.XFTrigger('trgSearch',null,"/UI/SA/task/taskCenter/images/search.png",null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trgSearchClick(event)}));xf._p(justep('trgSearch'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trgSearch', evt,false)});	
new xforms.XFGrid({id:'grid',instance:'main',systemColumnsPro:'sParent,sContent,sRemark,sFlowID,sSourceID,sFrontID,sCatalogID,sKindID,sResponsible,sExecuteMode2,sExecuteMode,sPreemptMode,sRemindMode,sTypeID,sTypeName,sImportanceID,sImportanceName,sEmergencyID,sEmergencyName,sCURL,sEURL,sDistributeTime,sLimitTime,sWarningTime,sExecuteTime,sExpectStartTime,sExpectFinishTime,sActualStartTime,sActualFinishTime,sCreatorFID,sCreatorFName,sExecutorFID,sExecutorFName,sCreatorPersonID,sCreatorPosID,sCreatorPosName,sCreatorDeptID,sCreatorDeptName,sCreatorOgnID,sCreatorOgnName,sExecutorPersonID,sExecutorPersonName,sExecutorPosID,sExecutorPosName,sExecutorDeptID,sExecutorDeptName,sExecutorOgnID,sExecutorOgnName,sExecutorNames,sCustomerID,sCustomerName,sProjectID,sProjectName,sPlanID,sPlanName,sData1,sData2,sData3,sData4,sVariable,sActive,sStatusID,sStatusName,sAIActive,sAIID,sAIStatusID,sAIStatusName,sSequence,sLock,sHints,sShortcut,sProcess,sActivity,sProcessName,sActivityName,version,sProcessTemplateID,sProcessTemplateItemSequence,sTempPermissionID,sESField01,sESField02,sESField03,sESField04,sESField06,sESField07,sESField08,sEDField21,sEDField22,sEDField23,sEDField24,sETField31,sETField32,sETField33,sETField34,sEIField41,sEIField42,sEIField43,sEIField44,sEBField51,sEBField52,sEBField53,sEBField54,sENField11,sENField12,sENField13,sENField14,sSummary,sActivityNames,sCode,sWithdraw,sProcessTemplateID2,sActivityInTemplate',onInit:null,type:'grid',smartRender:null,delay:false,ids:'calcIndex,sStatusName1,sESField05,sName,sCreatorPersonName,sCreateTime,sLastModifyTime,space-column',headNames:'&nbsp;,状态,变更申请单据号,名称,提交人,提交时间,最后修改时间,&nbsp;',widths:'30,60,150,280,100,120,120,*',types:'cntr,ro,html,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.gridRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sESField05','mainActivity.grid_sNameRender');}});	
var xf_menu_GLOBAL_ID_N1130234067 = new xforms.XFMenu('GLOBAL_ID_N1130234067','context');xf_menu_GLOBAL_ID_N1130234067.menu.addContextZone('128336bcda604df0b80180534e100077');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1130234067.hide()});xf_menu_GLOBAL_ID_N1130234067.menu.setOpenMode('web');	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_689827909");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1130234067'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N1130234067', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_689827909',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1318479631');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1318479631", "");}));xf._p(justep('GLOBAL_ID_689827909'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_689827909', evt,false)});	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1318479631');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_689827909'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_689827909', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N15119061',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_225509629');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_225509629", "");}));xf._p(justep('GLOBAL_ID_N15119061'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_N15119061', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var main_part_loaded = false;	
function load_main_part(callback){if (main_part_loaded) return;main_part_loaded = true;	
new xforms.XFInstance2('main','model1',null,null,null,null,null,null,null,null,'calcIndex',null,'whereVersion');	
xf._c('xf-bind-0','model1',"instance('main')/sDistributeTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('main')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('main')/sLastModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('main')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('main')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('main')/sExecuteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('main')/sExpectStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('main')/sExpectFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('main')/sActualStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('main')/sActualFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('main')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('main')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('main')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('main')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('main')/sEDField23","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('main')/sEDField24","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('main')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('main')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('main')/sEIField43","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('main')/sEIField44","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('main')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('main')/sENField12","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('main')/sENField13","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('main')/sENField14","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('main')/sWithdraw","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var main_part_init_loaded = false;	
function load_main_part_init(){if (main_part_init_loaded) return;main_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_dateFilter1_part(){if (justep("dateFilter1_part").getAttribute('loaded') && justep("dateFilter1_part").getAttribute('loaded') == 'true') return;justep("dateFilter1_part").setAttribute('loaded', 'true');	
if(typeof(load_dateFilter1_part_html) == 'function')load_dateFilter1_part_html();	
new xforms.XFGroup('dateFilter1_part',null);var xf_model_xf_model_3 = new xforms.XFModel('xf-model-3',null);	
xf._c('xf-bind-25','xf-model-3',"instance('dateFilter1_data')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-26','xf-model-3',"instance('dateFilter1_data')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('dateFilter1_data','xf-model-3',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dateFilter1_data','value,label,beginDate,endDate');	
new xforms.XFDialog('dateFilter1_dialog',"自定义",'model',true,false,true,false,false,null,'238','112',null,null,null,null);	
xf._d('da108df9646c4b2daed90abb7ab770cf','text',xf._q("instance('dateFilter1_data')/beginDate"),null,null,null,null,false,false);	
xf._d('a23a975664334895813c93d3b4f04467','text',xf._q("instance('dateFilter1_data')/endDate"),null,null,null,null,false,false);	
var xf_trigger_29aaf6401eed456d9f94d640c47f0613=new xforms.XFTrigger('29aaf6401eed456d9f94d640c47f0613',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms.blur(true); if(justep.xbl('dateFilter1')._doDialogCheck()) xforms('dateFilter1_dialog').close();}));xf._p(justep('29aaf6401eed456d9f94d640c47f0613'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'29aaf6401eed456d9f94d640c47f0613', evt,false)});	
var xf_trigger_9ad450f121464596bef65491840755e3=new xforms.XFTrigger('9ad450f121464596bef65491840755e3',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms('dateFilter1_dialog').close();}));xf._p(justep('9ad450f121464596bef65491840755e3'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'9ad450f121464596bef65491840755e3', evt,false)});	
}	
function load_dateFilter1_part_xblinit(){if (justep("dateFilter1_part").getAttribute('xblloaded') && justep("dateFilter1_part").getAttribute('xblloaded') == 'true') return;justep("dateFilter1_part").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-3').xformsObject.construct_part();	
xforms.refresh(justep("dateFilter1_part"));	
justep.XBLObject.loadXBL(justep("dateFilter1_part"));}	
var __actions__ = {	
};	
function load_dateFilter1_part_html(){var a = [];a.push('<div class="xforms-group-content" style="" >');a.push('<div id="dateFilter1_dialog" style="display:none" >');a.push('</div>');a.push('<div style="width:234px;height:87px;position:absolute;left:-9000px;top:-9000px" >');a.push('<div class="xforms-dialog" height="112" id="dateFilter1_dialog-content" minmax="false" resizable="false" style="width:100%;height:100%" title="自定义" width="238" >');a.push('<table border="0" cellpadding="0" cellspacing="8" class="component_42908985 tableLayout" component="/UI/system/components/tableLayout.xbl.xml#tableLayout" id="d4eeccb37f3a4868956e76481510be19" style="width:100%;height:100%;tabel-layout:fixed" >');a.push('<tr style="height: 28px" valign="middle" >');a.push('<td style="width: 56px;" >');a.push('<div style="padding-top:8px" >');a.push('开始日期');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-input xforms-appearance-minimal xui-input" id="da108df9646c4b2daed90abb7ab770cf" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<input accesskey="" class="xforms-value" tabindex="" type="text" >');a.push('</input>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('<td class="xui-ie-input-bug" >');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('<tr style="height: 28px" valign="middle" >');a.push('<td style="width: 56px;" >');a.push('<div style="padding-top:8px" >');a.push('结束日期');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-input xforms-appearance-minimal xui-input" id="a23a975664334895813c93d3b4f04467" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<input accesskey="" class="xforms-value" tabindex="" type="text" >');a.push('</input>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('<td class="xui-ie-input-bug" >');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('<tr valign="middle" >');a.push('<td align="right" colspan="2" >');a.push('<table cellpadding="0" cellspacing="0" class="button-green xforms-control xforms-trigger xforms-appearance-minimal xui-button" id="29aaf6401eed456d9f94d640c47f0613" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="width:75px;margin-right:8px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="xxf-value" >');a.push('<button class="xui-button-label" onmouseout="xforms.Core.setClass(this,\'xforms-trigger-over\')" onmouseover="xforms.Core.setClass(this,\'xforms-trigger-over\',true)" tabindex="" type="button" >');a.push('<span class="xforms-label " id="79be3074dfe3404fb578e51458c3b66c" >');a.push('确定');a.push('</span>');a.push('</button>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-trigger xforms-appearance-minimal xui-button" id="9ad450f121464596bef65491840755e3" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="width:75px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="xxf-value" >');a.push('<a class="xui-button-label" tabindex="" >');a.push('<i class="icon " >');a.push('</i>');a.push('<span class="xforms-label " id="5a7cb6fd979845f59d42cd3f1a8b54fa" >');a.push('取消');a.push('</span>');a.push('</a>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</div>');a.push('</div>');justep('dateFilter1_part').innerHTML = a.join('');}