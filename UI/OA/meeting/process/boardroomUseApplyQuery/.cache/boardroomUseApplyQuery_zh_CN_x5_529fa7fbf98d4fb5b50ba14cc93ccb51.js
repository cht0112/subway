
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter"] = _xbl_JSClassDefine_extOrgFilter;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"] = _xbl_JSClassDefine_extDateFilter;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processPertChart"] = _xbl_JSClassDefine_processPertChart;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processChart"] = _xbl_JSClassDefine_processChart;
justep.XBLObject._classes["/UI/appCommon/components/filter.xbl.xml#gridFilter"] = _xbl_JSClassDefine_gridFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processTrackChart"] = _xbl_JSClassDefine_processTrackChart;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_extOrgFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_extOrgFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.ExtOrgFilter(this));
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

function _xbl_JSClassDefine_extDateFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_extDateFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.ExtDateFilter(this));
				}
			}));

function _xbl_JSClassDefine_processPertChart(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_processPertChart.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"_task" : null,
				"_p" : null,
				"_pi" : null,
				"_bizData" : null,
				"load" : function(){
					var task = justep.Context.getTask();
					if (task != null){
						this.loadByTask(task);
					}else{
						var process = justep.Context.getCurrentProcess();
						this.loadByData(process, null);
					}
				},
				"loadByTask" : function(task){
					if (task != this._task){
						this._task = task;
						this.__load(null, null, null, task);
					}
				},
				"loadByPI" : function(pi){
					if (pi != this._pi){
						this._pi = pi;
						this.__load(null, null, pi, null);
					}
				},
				"loadByData" : function(p, bizData){
					if ((p != this._p) || (bizData != this._bizData)){
						this._p = p;
						this._bizData = bizData;
						this.__load(bizData, p, null, null);
					}
				},
				"__load": function(bizData, p, pi, task) {
					var ext = this.domNode.getAttribute('ext');
					var processChartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task, ext);
					this.__loadByChartData(processChartData);
				},
				"__loadByChartData": function(chartData) {
					var interface = this.getElementByXblID("interface");
					var onClick = this.domNode.getAttribute('onPertItemClick');
					if (onClick && (onClick!='')){
						onClick = justep.Function.get(onClick);
					}
					__wfLoadBot(interface.getAttribute('chartControlID'), chartData, onClick);
				}
			}));

function _xbl_JSClassDefine_processChart(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_processChart.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"_task" : null,
				"_p" : null,
				"_pi" : null,
				"_bizData" : null,
				"_chartData" : null,
				"_botLoaded" : false,
				"load" : function(){
					var task = justep.Context.getTask();
					if (task != null){
						this.loadByTask(task);
					}else{
						var process = justep.Context.getCurrentProcess();
						this.loadByData(process, null);
					}
				},
				"loadByTask" : function(task){
					if (task != this._task){
						this._task = task;
						this.__load(null, null, null, task);
					}
				},
				"loadByPI" : function(pi){
					if (pi != this._pi){
						this._pi = pi;
						this.__load(null, null, pi, null);
					}
				},
				"loadByData" : function(p, bizData){
					if ((p != this._p) || (bizData != this._bizData)){
						this._p = p;
						this._bizData = bizData;
						this.__load(bizData, p, null, null);
					}
				},
				"__load": function(bizData, p, pi, task) {
					var ext = this.domNode.getAttribute('ext');
					this._chartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task, ext);
					var interface = this.getElementByXblID("interface");
					justep.xbl(interface.getAttribute('trackID')).__loadByChartData(this._chartData);
					justep.xbl(interface.getAttribute('pertID')).__loadByChartData(this._chartData);
				}, 
				"__loadBot" : function(){
					if (this._botLoaded == false){
						this._botLoaded = true;
						var interface = this.getElementByXblID("interface");
						justep.xbl(interface.getAttribute('pertID')).__loadByChartData(this._chartData);
					}
				}
			}));

function _xbl_JSClassDefine_gridFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_gridFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.GridFilter(this));
				}
			}));

function _xbl_JSClassDefine_window(obj) {
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

function _xbl_JSClassDefine_processTrackChart(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_processTrackChart.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"_task" : null,
				"_p" : null,
				"_pi" : null,
				"_bizData" : null,
				"load" : function(){
					var task = justep.Context.getTask();
					if (task != null){
						this.loadByTask(task);
					}else{
						var process = justep.Context.getCurrentProcess();
						this.loadByData(process, null);
					}
				},
				"loadByTask" : function(task){
					if (task != this._task){
						this._task = task;
						this.__load(null, null, null, task);
					}
				},
				"loadByPI" : function(pi){
					if (pi != this._pi){
						this._pi = pi;
						this.__load(null, null, pi, null);
					}
				},
				"loadByData" : function(p, bizData){
					if ((p != this._p) || (bizData != this._bizData)){
						this._p = p;
						this._bizData = bizData;
						this.__load(bizData, p, null, null);
					}
				},
				"__load": function(bizData, p, pi, task) {
					var ext = this.domNode.getAttribute('ext');
					var processChartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task, ext);
					this.__loadByChartData(processChartData);
				},
				"__loadByChartData": function(chartData) {
					var interface = this.getElementByXblID("interface");
					var onClick = this.domNode.getAttribute('onTrackItemClick');
					if (onClick && (onClick!='')){
						onClick = justep.Function.get(onClick);
					}
					__wfLoadTrack(interface.getAttribute('chartControlID'), chartData, onClick);
				},
				"getSelectedActivities" : function(){
					var ret = [];
					var interface = this.getElementByXblID("interface");
					var canvas = JustepFlowTrack[interface.getAttribute('chartControlID')];
					var selections = canvas.selections;
					for(var id in selections){
						if((selections[id].type!='Connection')&&(typeof selections[id].type!='undefined')){
							var activity = canvas.modelData.processMainData[id];
							ret.push(activity);
						}
					}
					return ret;
				},
				"getTrackCanvas" : function(){
					var ret = [];
					var interface = this.getElementByXblID("interface");
					var canvas = JustepFlowTrack[interface.getAttribute('chartControlID')];
					return canvas;
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
						var info = infos[i];	if (info.readonly){
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
				group.style.border = "1px ridge";	group.style.top = posY - 0 + 4;
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

	var ids=[{id:'3f0139614a5143778d7d111d27cb07c0', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table1', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrApplyList', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'4622009cddb94920b227e0537d206a7a', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'standardProcessQueryBar_bizStateFilter', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'standardProcessQueryBar_bizStateFilter_select_910146252', name:'xforms:gridselect', children:[{id:'f4b12e26927b4bfda306150fc234ad7e', name:'xforms:value'},{id:'2c3d559c17f54ce0b2674be70b3373a3', name:'xforms:label'}]},{id:'standardProcessQueryBar_bizStateFilter_defaultValue_910146252', name:'xforms:output'}]},{id:'standardProcessQueryBar_dateFilter', name:'/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter', children:[{id:'standardProcessQueryBar_dateFilter_select_1224423119', name:'xforms:gridselect1', children:[{id:'b7eb725455f345f6b7beaac1ef363923', name:'xforms:value'},{id:'7aeae9dc288649d8b2140033e770b7e4', name:'xforms:label'}]},{id:'standardProcessQueryBar_dateFilter_dialog_1224423119', name:'xforms:dialog', children:[{id:'d7c861f459044e21881e5be18ef1123a', name:'xforms:input'},{id:'233aba09d96e4a0b81ab561e565b2243', name:'xforms:input'}]}]},{id:'standardProcessQueryBar_orgFilter', name:'/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter', children:[{id:'standardProcessQueryBar_orgFilter_manageTypeCodes_783303227', name:'xforms:output'},{id:'standardProcessQueryBar_orgFilter_select_783303227', name:'xforms:treeselect', children:[{id:'828be88375b34022b97d42dc024dd711', name:'xforms:label'},{id:'3859ab5a007c452996c174a8e09aae84', name:'xforms:value'}]}]}]},{id:'grdApply', name:'xforms:grid'}]},{id:'filter-dialog-f106d167-c8fd-4212-8cfc-ecbea543d0af', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N2103240998', name:'xforms:dialog'}]},{id:'filter-pattern-5f1cb499-8e57-4a6d-831c-468fac78138c', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'b9a6642c613a49f2adcd831b628576f1', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1752184955', name:'xforms:menu'}]},{id:'GLOBAL_ID_1546637340', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'standardProcessQueryBar_bizStateFilter_select_910146252');xf._a('standardProcessQueryBar_bizStateFilter_select_910146252','2c3d559c17f54ce0b2674be70b3373a3');xf._a('standardProcessQueryBar_bizStateFilter_select_910146252','xf-itemset-0');xf._a(null,'standardProcessQueryBar_bizStateFilter_defaultValue_910146252');xf._a(null,'standardProcessQueryBar_dateFilter_select_1224423119');xf._a('standardProcessQueryBar_dateFilter_select_1224423119','7aeae9dc288649d8b2140033e770b7e4');xf._a('standardProcessQueryBar_dateFilter_select_1224423119','xf-itemset-1');xf._a(null,'d7c861f459044e21881e5be18ef1123a');xf._a(null,'233aba09d96e4a0b81ab561e565b2243');xf._a(null,'standardProcessQueryBar_orgFilter_manageTypeCodes_783303227');xf._a(null,'standardProcessQueryBar_orgFilter_select_783303227');xf._a('standardProcessQueryBar_orgFilter_select_783303227','828be88375b34022b97d42dc024dd711');xf._a('standardProcessQueryBar_orgFilter_select_783303227','xf-itemset-2');xf._a(null,'grdApply');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dApplyList')",xf._f('instance',xf._i("dApplyList")));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dApplyList')/version",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dApplyList')/fApplyDate",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("instance('dApplyList')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))));	
xf._b("instance('dApplyList')/fBeginTime",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))));	
xf._b("instance('dApplyList')/fEndTime",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fEndTime')))));	
xf._b("instance('dApplyList')/fArrBeginTime",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fArrBeginTime')))));	
xf._b("instance('dApplyList')/fArrEndTime",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fArrEndTime')))));	
xf._b("instance('dApplyList')/fArrTime",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fArrTime')))));	
xf._b("instance('dApplyList')/fCreateTime",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dApplyList')/fUpdateTime",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dApplyList')/fExtendDate1",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dApplyList')/fExtendDate2",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dApplyList')/fExtendDate3",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dApplyList')/fExtendDate4",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dApplyList')/fExtendDate5",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dApplyList')/fExtendNum1",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dApplyList')/fExtendNum2",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dApplyList')/fExtendNum3",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dApplyList')/fExtendNum4",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dApplyList')/fExtendNum5",xf._g(xf._f('instance',xf._i("dApplyList")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dBoardroom')/version",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dBoardroom')/fHoldNum",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fHoldNum')))));	
xf._b("instance('dBoardroom')/fCreateTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dBoardroom')/fUpdateTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dBoardroom')/fDisUseTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDisUseTime')))));	
xf._b("instance('dBoardroom')/fExtendDate1",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dBoardroom')/fExtendDate2",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dBoardroom')/fExtendDate3",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dBoardroom')/fExtendDate4",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dBoardroom')/fExtendDate5",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dBoardroom')/fExtendNum1",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dBoardroom')/fExtendNum2",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dBoardroom')/fExtendNum3",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dBoardroom')/fExtendNum4",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dBoardroom')/fExtendNum5",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('standardProcessQueryBar_bizStateFilter_data_910146252')/value",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_bizStateFilter_data_910146252")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('standardProcessQueryBar_bizStateFilter_data_910146252')/label",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_bizStateFilter_data_910146252")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'编辑中,处理中,已完成'",xf._i("编辑中,处理中,已完成"));	
xf._b("'全部'",xf._i("全部"));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("'bsEditing,bsExecuting,bsFinished'",xf._i("bsEditing,bsExecuting,bsFinished"));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_1224423119')/beginDate",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_1224423119")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_1224423119')/endDate",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_1224423119")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_1224423119')/value",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_1224423119")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_1224423119')/label",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_1224423119")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("call('appCommon.component.StandardProcessQueryBar.getManageTypeCodes')",xf._f('call',xf._i("appCommon.component.StandardProcessQueryBar.getManageTypeCodes")));	
xf._b("instance('standardProcessQueryBar_orgFilter_orgData_783303227')/sValidState",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_orgFilter_orgData_783303227")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('standardProcessQueryBar_orgFilter_data_783303227')/value",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_orgFilter_data_783303227")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('standardProcessQueryBar_orgFilter_data_783303227')/label",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_orgFilter_data_783303227")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'本人'",xf._i("本人"));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sFID",xf._h(false, xf._k("child",xf._j('','sFID'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sLongName",xf._h(false, xf._k("child",xf._j('','sLongName'))));	
xf._b("sFName",xf._h(false, xf._k("child",xf._j('','sFName'))));	
xf._b("sFCode",xf._h(false, xf._k("child",xf._j('','sFCode'))));	
xf._b("sParent",xf._h(false, xf._k("child",xf._j('','sParent'))));	
xf._b("sNodeKind",xf._h(false, xf._k("child",xf._j('','sNodeKind'))));	
xf._b("sValidState",xf._h(false, xf._k("child",xf._j('','sValidState'))));	
xf._b("sPersonID",xf._h(false, xf._k("child",xf._j('','sPersonID'))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fBizStateName",xf._h(false, xf._k("child",xf._j('','fBizStateName'))));	
xf._b("fApplyDeptName",xf._h(false, xf._k("child",xf._j('','fApplyDeptName'))));	
xf._b("fApplyPsnName",xf._h(false, xf._k("child",xf._j('','fApplyPsnName'))));	
xf._b("fApplyDate",xf._h(false, xf._k("child",xf._j('','fApplyDate'))));	
xf._b("fMeetName",xf._h(false, xf._k("child",xf._j('','fMeetName'))));	
xf._b("fBoardroom",xf._h(false, xf._k("child",xf._j('','fBoardroom'))));	
xf._b("fBeginTime",xf._h(false, xf._k("child",xf._j('','fBeginTime'))));	
xf._b("fEndTime",xf._h(false, xf._k("child",xf._j('','fEndTime'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('dateTime', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dStatus','mdMain',null,'<rows><row><cell>编辑中</cell><cell>bsEditing</cell></row><row><cell>待办中</cell><cell>bsWaiting</cell></row><row><cell>流转中</cell><cell>bsFlowing</cell></row><row><cell>已完成</cell><cell>bsFinished</cell></row><row><cell>已终止</cell><cell>bsAbort</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dStatus','label,value');	
new xforms.XFInstance2('dFilter','mdMain',null,'<rows><row><cell></cell><cell></cell><cell></cell><cell>bsFinished</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dFilter','person,keyword,roomIDs,status');	
new xforms.XFInstance2('dBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-21','mdMain',"instance('dBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdMain',"instance('dBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdMain',"instance('dBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdMain',"instance('dBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdMain',"instance('dBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdMain',"instance('dBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdMain',"instance('dBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdMain',"instance('dBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdMain',"instance('dBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdMain',"instance('dBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdMain',"instance('dBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdMain',"instance('dBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action1,'mdMain', evt,false)});	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N2103240998',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_271152820');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_271152820", "");}));xf._p(justep('GLOBAL_ID_N2103240998'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N2103240998', evt,false)});	
var xf_menu_GLOBAL_ID_1752184955 = new xforms.XFMenu('GLOBAL_ID_1752184955','context');xf_menu_GLOBAL_ID_1752184955.menu.addContextZone('b9a6642c613a49f2adcd831b628576f1');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1752184955.hide()});xf_menu_GLOBAL_ID_1752184955.menu.setOpenMode('web');	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1546637340");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);					var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1752184955'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_1752184955', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1546637340',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_713244587');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_713244587", "");}));xf._p(justep('GLOBAL_ID_1546637340'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_1546637340', evt,false)});	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_713244587');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1546637340'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_1546637340', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dApplyList_part_loaded = false;	
function load_dApplyList_part(callback){if (dApplyList_part_loaded) return;dApplyList_part_loaded = true;	
new xforms.XFInstance2('dApplyList','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dApplyList')",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dApplyList')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dApplyList')/fApplyDate","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dApplyList')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dApplyList')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dApplyList')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dApplyList')/fArrBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dApplyList')/fArrEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dApplyList')/fArrTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dApplyList')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dApplyList')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dApplyList')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dApplyList')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dApplyList')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dApplyList')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dApplyList')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dApplyList')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dApplyList')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dApplyList')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dApplyList')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dApplyList')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dApplyList_part_init_loaded = false;	
function load_dApplyList_part_init(){if (dApplyList_part_init_loaded) return;dApplyList_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_model_standardProcessQueryBar_bizStateFilter_model_910146252 = new xforms.XFModel('standardProcessQueryBar_bizStateFilter_model_910146252',null);	
new xforms.XFInstance2('standardProcessQueryBar_bizStateFilter_data_910146252','standardProcessQueryBar_bizStateFilter_model_910146252',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('standardProcessQueryBar_bizStateFilter_data_910146252','value,label');	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("standardProcessQueryBar_bizStateFilter", justep.xbl("dApplyList"), "fBizState", "", appCommon.component.Filter.getDefaultValueBinding("standardProcessQueryBar_bizStateFilter_defaultValue_910146252"), true, ",", "", false);}));xf._p(justep('standardProcessQueryBar_bizStateFilter_model_910146252'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'standardProcessQueryBar_bizStateFilter_model_910146252', evt,false)});	
new xforms.XFExtSelect({id:'standardProcessQueryBar_bizStateFilter_select_910146252',type:'gridselect',defaultLabelRef:xf._q("'编辑中,处理中,已完成'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('standardProcessQueryBar_bizStateFilter_data_910146252')/value"),labelRef:xf._q("instance('standardProcessQueryBar_bizStateFilter_data_910146252')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:null,columns:'label,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'checkbox,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="bsEditing"><cell>编辑中</cell></row><row id="bsExecuting"><cell>处理中</cell></row><row id="bsFinished"><cell>已完成</cell></row><row id="bsAborted"><cell>已终止</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_standardProcessQueryBar_bizStateFilter_defaultValue_910146252=new xforms.XFOutput('standardProcessQueryBar_bizStateFilter_defaultValue_910146252',xf._q("'bsEditing,bsExecuting,bsFinished'"),null,null);	
var xf_model_standardProcessQueryBar_dateFilter_model_1224423119 = new xforms.XFModel('standardProcessQueryBar_dateFilter_model_1224423119',null);	
xf._c('xf-bind-36','standardProcessQueryBar_dateFilter_model_1224423119',"instance('standardProcessQueryBar_dateFilter_data_1224423119')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-37','standardProcessQueryBar_dateFilter_model_1224423119',"instance('standardProcessQueryBar_dateFilter_data_1224423119')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('standardProcessQueryBar_dateFilter_data_1224423119','standardProcessQueryBar_dateFilter_model_1224423119',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('standardProcessQueryBar_dateFilter_data_1224423119','value,label,beginDate,endDate');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtDateFilter.setFilterCondition("standardProcessQueryBar_dateFilter", justep.xbl("dApplyList"), "single", "fCreateTime", "", "", "0", null, null, "", false);}));xf._p(justep('standardProcessQueryBar_dateFilter_model_1224423119'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'standardProcessQueryBar_dateFilter_model_1224423119', evt,false)});	
new xforms.XFExtSelect({id:'standardProcessQueryBar_dateFilter_select_1224423119',type:'gridselect1',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("instance('standardProcessQueryBar_dateFilter_data_1224423119')/value"),labelRef:xf._q("instance('standardProcessQueryBar_dateFilter_data_1224423119')/label"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:null,columns:'label,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="0"><cell>全部</cell></row><row id="1"><cell>今天</cell></row><row id="2"><cell>昨天</cell></row><row id="3"><cell>本周</cell></row><row id="4"><cell>上周</cell></row><row id="5"><cell>本月</cell></row><row id="6"><cell>上月</cell></row><row id="7"><cell>今年</cell></row><row id="8"><cell>去年</cell></row><row id="9"><cell>自定义...</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFDialog('standardProcessQueryBar_dateFilter_dialog_1224423119',"自定义",'model',true,false,true,true,false,null,'250','135',null,null,null,null);	
xf._d('d7c861f459044e21881e5be18ef1123a','text',xf._q("instance('standardProcessQueryBar_dateFilter_data_1224423119')/beginDate"),null,null,null,null,false,false);	
xf._d('233aba09d96e4a0b81ab561e565b2243','text',xf._q("instance('standardProcessQueryBar_dateFilter_data_1224423119')/endDate"),null,null,null,null,false,false);	
var xf_output_standardProcessQueryBar_orgFilter_manageTypeCodes_783303227=new xforms.XFOutput('standardProcessQueryBar_orgFilter_manageTypeCodes_783303227',xf._q("call('appCommon.component.StandardProcessQueryBar.getManageTypeCodes')"),null,null);	
var xf_model_standardProcessQueryBar_orgFilter_model_783303227 = new xforms.XFModel('standardProcessQueryBar_orgFilter_model_783303227',null);	
new xforms.XFInstance2('standardProcessQueryBar_orgFilter_data_783303227','standardProcessQueryBar_orgFilter_model_783303227',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('standardProcessQueryBar_orgFilter_data_783303227','value,label');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtOrgFilter.setFilterCondition("standardProcessQueryBar_orgFilter", justep.xbl("dApplyList"), "fCreatePsnID", "fCreatePsnFID", "OA_MT_UseExecute", "本人", "", false);}));xf._p(justep('standardProcessQueryBar_orgFilter_model_783303227'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_3,'standardProcessQueryBar_orgFilter_model_783303227', evt,false)});	
new xforms.XFExtSelect({id:'standardProcessQueryBar_orgFilter_select_783303227',type:'treeselect',defaultLabelRef:xf._q("'本人'"),allSelectedLabelRef:null,ref:xf._q("instance('standardProcessQueryBar_orgFilter_data_783303227')/value"),labelRef:xf._q("instance('standardProcessQueryBar_orgFilter_data_783303227')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'standardProcessQueryBar_orgFilter_orgData_783303227',columns:'sName,__c_,sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',valueColumn:'sFID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,',aligns:',,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_313393767',onRowHasChildren:func_244749819,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xforms.load_parts('vApplyList');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('standardProcessQueryBar_bizStateFilter_model_910146252').xformsObject.construct_part();	
if(xforms.ready)justep('standardProcessQueryBar_dateFilter_model_1224423119').xformsObject.construct_part();	
if(xforms.ready)justep('standardProcessQueryBar_orgFilter_model_783303227').xformsObject.construct_part();	
}	
var standardProcessQueryBar_orgFilter_orgData_783303227_part_loaded = false;	
function load_standardProcessQueryBar_orgFilter_orgData_783303227_part(callback){if (standardProcessQueryBar_orgFilter_orgData_783303227_part_loaded) return;standardProcessQueryBar_orgFilter_orgData_783303227_part_loaded = true;	
new xforms.XFInstance2('standardProcessQueryBar_orgFilter_orgData_783303227','standardProcessQueryBar_orgFilter_model_783303227',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-38','standardProcessQueryBar_orgFilter_model_783303227',"instance('standardProcessQueryBar_orgFilter_orgData_783303227')/sValidState","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var standardProcessQueryBar_orgFilter_orgData_783303227_part_init_loaded = false;	
function load_standardProcessQueryBar_orgFilter_orgData_783303227_part_init(){if (standardProcessQueryBar_orgFilter_orgData_783303227_part_init_loaded) return;standardProcessQueryBar_orgFilter_orgData_783303227_part_init_loaded = true;	
if(xforms.ready)justep('standardProcessQueryBar_orgFilter_model_783303227').xformsObject.construct_part();}	
function load_vApplyList(){if (justep("vApplyList").getAttribute('loaded') && justep("vApplyList").getAttribute('loaded') == 'true') return;justep("vApplyList").setAttribute('loaded', 'true');	
if(typeof(load_vApplyList_html) == 'function')load_vApplyList_html();	
new xforms.XFGrid({id:'grdApply',instance:'dApplyList',systemColumnsPro:'version,fNO,fApplyOgnID,fApplyOgnName,fApplyPsnID,fApplyPsnFID,fApplyPsnFName,fMeetPsns,fMeetPsnNum,fBoardroomID,fPhone,fDescription,fArrBoardroomID,fArrBoardroom,fArrBeginTime,fArrEndTime,fArrOgnID,fArrOgnName,fArrDeptID,fArrDeptName,fArrPsnID,fArrPsnName,fArrPsnFID,fArrPsnFName,fArrTime,fArrRemark,fBizState,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fRemark,fApplyDeptID,fCurrentActivities,fCurrentExecutors,fOutPsns,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fBizStateName,fApplyDeptName,fApplyPsnName,fApplyDate,fMeetName,fBoardroom,fBeginTime,fEndTime,space-column',headNames:'序号,状态,申请部门,申请人员,申请日期,会议主题,会议室,开始时间,结束时间,&nbsp;',widths:'30,60,80,80,100,140,100,100,*,*',types:'cntr,ro,ro,ro,dateTime,html,ro,dateTime,dateTime,ro',hiddenColumns:'',aligns:'center,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'fApplyDate','yyyy-MM-dd hh:mm');this.grid.bindColHTMLCallback(null,'fMeetName','grdApply_fMeetNameRender');this.grid.bindColFormat(null,'fBeginTime','yyyy-MM-dd hh:mm');this.grid.bindColFormat(null,'fEndTime','yyyy-MM-dd hh:mm');}});	
}	
function load_vApplyList_xblinit(){if (justep("vApplyList").getAttribute('xblloaded') && justep("vApplyList").getAttribute('xblloaded') == 'true') return;justep("vApplyList").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
