
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/orgSelect.xbl.xml#orgSelect"] = _xbl_JSClassDefine_orgSelect;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processPertChart"] = _xbl_JSClassDefine_processPertChart;
justep.XBLObject._classes["/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList"] = _xbl_JSClassDefine_standardProcessExecuteList;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processChart"] = _xbl_JSClassDefine_processChart;
justep.XBLObject._classes["/UI/system/components/windowFrame.xbl.xml#windowFrame"] = _xbl_JSClassDefine_windowFrame;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/collapsePanel.xbl.xml#collapsePanel"] = _xbl_JSClassDefine_collapsePanel;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processTrackChart"] = _xbl_JSClassDefine_processTrackChart;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
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

function _xbl_JSClassDefine_orgSelect(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_orgSelect.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"initXBL" : function() {
					this.__attribute_node = this.getElementByXblID('attribute');
					this.__data_id = this.__attribute_node?this.__attribute_node.getAttribute('data-id'):'';
					this.__grid_id = this.__attribute_node?this.__attribute_node.getAttribute('grid-id'):'';
					this.__data_obj = this.__data_id?justep.xbl(this.__data_id):null;
					this.__grid_obj = this.__grid_id?xforms(this.__grid_id):null;
					if(this.domNode.getAttribute("onDropdown")) this.__onDropdown = justep.Function.get(this.domNode.getAttribute("onDropdown")); else this.__onDropdown = null;
					if(this.domNode.getAttribute("onRowExpand")) this.__onRowExpand = justep.Function.get(this.domNode.getAttribute("onRowExpand")); else this.__onRowExpand = null;
					this.hasDisable = 'true'==this.domNode.getAttribute("include-disable-org");
					this.selectableOrgTypes = this.domNode.getAttribute('selectable-org-types');
					this.selectableOrgTypes = this.selectableOrgTypes?this.selectableOrgTypes.split(','):null;
					this.showOrgTypes = this.domNode.getAttribute('show-org-types');
					this.showOrgTypes = this.showOrgTypes?this.showOrgTypes.split(','):[];
					var filter = '';
					for(var i=0;i<this.showOrgTypes.length;i++){
						var nodeType = this.showOrgTypes[i];
						var s = justep.String.trim(nodeType);
						if(s) filter += (filter!=''?",":"")+"'"+s+"'";
					}
					this.showOrgTypeFilter = filter!=''?'SA_OPOrg.sOrgKindID in ('+filter+')':'';
					this.manageCodes =  justep.String.trim(this.domNode.getAttribute('manage-codes'));
					if(this.__grid_obj){
				        if(this.__onRowExpand)
							this.__select_obj.attachEvent("onRowExpand", this.__onRowExpand, this);
						this.__grid_obj.attachEvent("onShowNodeImg", this._doShowNodeImg, this);
						this.__grid_obj.attachEvent("onDropdown", this._doDropdown, this);
						this.__grid_obj.attachEvent("onRowDisabled", this._doSelectNodeFilter, this);
					}
					if(this.__data_obj){
						this.__data_obj.attachEvent("onRefreshCreateParam", this._doCreateParam, this);
					}
				},
				"_doCreateParam" : function(event){
					var queryParam = event.param;
					var data = this.__data_obj;
					var filter = this._getFilter();
					var userFilter = data.buildFilter();
					if(userFilter) filter = filter?'('+userFilter+') AND ('+filter+')':userFilter;
					if(filter) queryParam.setString('filter', filter);
					else queryParam.deleteParam('filter');

					if(justep.XData.IS_TREE_ROOT==this.__data_obj.defTreeOption.loadTreeParent && this.manageCodes){
						queryParam.setString('manageCodes', this.manageCodes);
					}else queryParam.deleteParam('manageCodes');
				},
				"_doSelectNodeFilter" : function(event){
					if(null==this.selectableOrgTypes) return true;
					var id = event.rowId;
					var data = this.__data_obj;
					var kind = data.getValue('sOrgKindID',id);
					if(kind){
						kind = kind.toUpperCase();
						var len = this.selectableOrgTypes.length;
						for(var i=0;i<len;i++){
							var s = this.selectableOrgTypes[i].toUpperCase();
							if(kind==s) return true;
						}
					}
					return false;
				},
				"_getFilter" : function(){
					var orgFilter = this.showOrgTypeFilter;
					if(orgFilter==""){
						orgFilter += !this.hasDisable?'SA_OPOrg.sValidState=1':'';
					}
					else{
						orgFilter += !this.hasDisable?' AND SA_OPOrg.sValidState=1':'';
					}
					return orgFilter;
				},
				"_doDropdown" : function(event){
					if(this.__onDropdown) this.__onDropdown(event);
					if(!event.source.isLoadData){
						event.source.isLoadData = this.__data_obj.refreshData();
					}
				},
				"_doShowNodeImg" : function(event){
					var data = justep.xbl(event.instance.element.id);
					if(!data) return;
					var orgKind = !event.grid._isVirtualRoot(event.rowId)?data.getValue('sOrgKindID', event.rowId):'root';
					var ValidState = !event.grid._isVirtualRoot(event.rowId)?(1==data.getValue('sValidState', event.rowId)):true;
					return justep.Resource.getOrgImgURL(orgKind, !ValidState);
				},
				"getData" : function(){
					return this.__data_obj;
				},
				"getTreeSelect" : function(){
					return this.__grid_obj;
				},
				"getSelect" : function(){
					return this.__grid_obj;
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

function _xbl_JSClassDefine_standardProcessExecuteList(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_standardProcessExecuteList.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.StandardProcessExecuteList(this));
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

function _xbl_JSClassDefine_windowFrame(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowFrame.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var windowFrame = new justep.WindowFrame(this.domNode.id, this.domNode.getAttribute("url")||"", this.domNode.getAttribute("auto-load"), 
														this.domNode.getAttribute('onSend'), this.domNode.getAttribute('onReceive'), this.domNode.getAttribute('onInit'), this.domNode.getAttribute('onInitFrame'),
														{"process":this.domNode.getAttribute("process"),"activity":this.domNode.getAttribute("activity")});
				justep.Object.extend(this, windowFrame);
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

function _xbl_JSClassDefine_collapsePanel(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_collapsePanel.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"initXBL" : function() {
					this.__id = this.domNode.id;
					if('true'==jQuery(this.domNode).attr('fixed')){
						var slef = this;
						jQuery(this.domNode).children(".xui-collapsePanel-div-title").bind("click",function(event){slef.changeLayout();});
					}
					this.__open = this.domNode.getAttribute("status")!="collapsed";
					this.__layout = this.getElementByXblID('collapsePanel-content');
					this.__img = this.getElementByXblID('collapsePanel-img');
					this.__onCollapse = this.domNode.getAttribute("onCollapse")?justep.Function.get(this.domNode.getAttribute("onCollapse")):null;
					this.__onExpand = this.domNode.getAttribute("onExpand")?justep.Function.get(this.domNode.getAttribute("onExpand")):null;
				},
				"collapse" : function() {
						if(this.__onCollapse) this.__onCollapse({source:this});	
						this.__layout.style.display = "none";
						this.__img.src= justep.Request.convertURL("/UI/system/images/expanded.gif", true);
						this.__open = false;
				},
				"expand" : function() {
						if(this.__onExpand)	this.__onExpand({source:this});
						this.__layout.style.display = "block";
						this.__img.src= justep.Request.convertURL("/UI/system/images/collapsed.gif", true);
						this.__open = true;						
						justep.XBLObject.resize(this.domNode.id);						
				},
				"changeLayout" : function() {
					if (this.__open) {
						this.collapse();
					}
					else {
						this.expand();
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
					this.modelRefreshcb();		} 
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

	var ids=[{id:'742d32ebfdaa497683fe29f90e303a51', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'tbrUseApply', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'trgSearch', name:'xforms:trigger', children:[{id:'xuiLabel6', name:'xforms:label'}]}]},{id:'optNO', name:'xforms:output'},{id:'orgSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSelect1', name:'xforms:treeselect1', children:[{id:'1b226c3d041b4cc293e8054fa7279008', name:'xforms:label'},{id:'d6a069ff6207417ba627d1b4003e86e5', name:'xforms:value'}]}]},{id:'orgPsmSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSelect2', name:'xforms:treeselect1', children:[{id:'default23', name:'xforms:value'},{id:'default24', name:'xforms:label'}]}]},{id:'iptApplyDate', name:'xforms:input'},{id:'iptTitle', name:'xforms:input'},{id:'boardroomSelect', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default9', name:'xforms:value'}]},{id:'iptBeginTime', name:'xforms:input'},{id:'iptEndTime', name:'xforms:input'},{id:'iptPhone', name:'xforms:input'},{id:'iptApplyPsns', name:'xforms:textarea'},{id:'trgSelectPsn', name:'xforms:trigger', children:[{id:'xuiLabel4', name:'xforms:label'}]},{id:'taOutPsns', name:'xforms:textarea'},{id:'iptPsnNum', name:'xforms:input'},{id:'taDescription', name:'xforms:textarea'},{id:'taRemark', name:'xforms:textarea'},{id:'standardProcessExecuteList1', name:'/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList', children:[{id:'standardProcessExecuteList1_collapse_panel_847973276', name:'/UI/system/components/collapsePanel.xbl.xml#collapsePanel', children:[{id:'standardProcessExecuteList1_windowFrame_847973276', name:'/UI/system/components/windowFrame.xbl.xml#windowFrame'}]}]},{id:'boardroomUseApplyProcess', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'boardroomUseApplyProcess_processControlDialog', name:'xforms:dialog'},{id:'boardroomUseApplyProcess_processChartDialogID', name:'xforms:dialog'},{id:'boardroomUseApplyProcess_processConfirmDialog', name:'xforms:dialog', children:[{id:'e7f05ccc0e534199ba91a0bc7cdc54f5', name:'xforms:trigger', children:[{id:'80dc72cd6bf740399a113bfe24ca398d', name:'xforms:label'}]},{id:'f5ddd6544b9f4a95b966a66116405300', name:'xforms:trigger', children:[{id:'14c07cc08ccc4dea96d2f673f0ad2a3e', name:'xforms:label'}]}]},{id:'boardroomUseApplyProcess_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'wDlgMeetPsn', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wDlgMeetingRoom', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'processChart', name:'/UI/system/components/processChart.xbl.xml#processChart', children:[{id:'GLOBAL_ID_1189536715', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'GLOBAL_ID_2065695957', name:'/UI/system/components/processChart.xbl.xml#processTrackChart', children:[{id:'bl2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]},{id:'GLOBAL_ID_767783003', name:'/UI/system/components/processChart.xbl.xml#processPertChart'}]}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'trgSearch');xf._a('trgSearch','xuiLabel6');xf._a(null,'optNO');xf._a(null,'treeSelect1');xf._a('treeSelect1','1b226c3d041b4cc293e8054fa7279008');xf._a('treeSelect1','xf-itemset-0');xf._a(null,'treeSelect2');xf._a('treeSelect2','default24');xf._a('treeSelect2','xf-itemset-1');xf._a(null,'iptApplyDate');xf._a(null,'iptTitle');xf._a(null,'boardroomSelect');xf._a('boardroomSelect','xuiLabel3');xf._a('boardroomSelect','default10');xf._a(null,'iptBeginTime');xf._a(null,'iptEndTime');xf._a(null,'iptPhone');xf._a(null,'iptApplyPsns');xf._a(null,'trgSelectPsn');xf._a('trgSelectPsn','xuiLabel4');xf._a(null,'taOutPsns');xf._a(null,'iptPsnNum');xf._a(null,'taDescription');xf._a(null,'taRemark');xf._a(null,'e7f05ccc0e534199ba91a0bc7cdc54f5');xf._a('e7f05ccc0e534199ba91a0bc7cdc54f5','80dc72cd6bf740399a113bfe24ca398d');xf._a(null,'f5ddd6544b9f4a95b966a66116405300');xf._a('f5ddd6544b9f4a95b966a66116405300','14c07cc08ccc4dea96d2f673f0ad2a3e');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dUseApply')/fMeetName",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fMeetName')))));	
xf._b("true()",xf._f('true'));	
xf._b("'会议主题不能为空!'",xf._i("会议主题不能为空!"));	
xf._b("instance('dUseApply')/fBoardroomID",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fBoardroomID')))));	
xf._b("'会议室不能为空!'",xf._i("会议室不能为空!"));	
xf._b("instance('dUseApply')/fBeginTime",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))));	
xf._b("'开始时间不能为空!'",xf._i("开始时间不能为空!"));	
xf._b("instance('dUseApply')/fEndTime",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fEndTime')))));	
xf._b("data('dUseApply')/fEndTime>data('dUseApply')/fBeginTime",xf._l(xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fEndTime')))), '>',xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fBeginTime'))))));	
xf._b("'结束时间必须大于开始时间!'",xf._i("结束时间必须大于开始时间!"));	
xf._b("instance('dUseApply')/fMeetPsns",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fMeetPsns')))));	
xf._b("instance('dUseApply')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))));	
xf._b("instance('dUseApply')/version",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dUseApply')/fApplyDate",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("instance('dUseApply')/fArrBeginTime",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fArrBeginTime')))));	
xf._b("instance('dUseApply')/fArrEndTime",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fArrEndTime')))));	
xf._b("instance('dUseApply')/fArrTime",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fArrTime')))));	
xf._b("instance('dUseApply')/fCreateTime",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dUseApply')/fUpdateTime",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dUseApply')/fExtendDate1",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dUseApply')/fExtendDate2",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dUseApply')/fExtendDate3",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dUseApply')/fExtendDate4",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dUseApply')/fExtendDate5",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dUseApply')/fExtendNum1",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dUseApply')/fExtendNum2",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dUseApply')/fExtendNum3",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dUseApply')/fExtendNum4",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dUseApply')/fExtendNum5",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dUsePerson')/version",xf._g(xf._f('instance',xf._i("dUsePerson")),xf._h(false, xf._k("child",xf._j('','version')))));	
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
xf._b("data('dUseApply')/fNO",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fNO')))));	
xf._b("instance('dOrg')/sValidState",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrg')/sLevel",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrg')/version",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dUseApply')/fApplyDeptID",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyDeptID')))));	
xf._b("data('dUseApply')/fApplyDeptName",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyDeptName')))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sLongName",xf._h(false, xf._k("child",xf._j('','sLongName'))));	
xf._b("sFName",xf._h(false, xf._k("child",xf._j('','sFName'))));	
xf._b("sFCode",xf._h(false, xf._k("child",xf._j('','sFCode'))));	
xf._b("sFID",xf._h(false, xf._k("child",xf._j('','sFID'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("sSequence",xf._h(false, xf._k("child",xf._j('','sSequence'))));	
xf._b("sValidState",xf._h(false, xf._k("child",xf._j('','sValidState'))));	
xf._b("sParent",xf._h(false, xf._k("child",xf._j('','sParent'))));	
xf._b("sLevel",xf._h(false, xf._k("child",xf._j('','sLevel'))));	
xf._b("sPhone",xf._h(false, xf._k("child",xf._j('','sPhone'))));	
xf._b("sFax",xf._h(false, xf._k("child",xf._j('','sFax'))));	
xf._b("sAddress",xf._h(false, xf._k("child",xf._j('','sAddress'))));	
xf._b("sZip",xf._h(false, xf._k("child",xf._j('','sZip'))));	
xf._b("sDescription",xf._h(false, xf._k("child",xf._j('','sDescription'))));	
xf._b("sPersonID",xf._h(false, xf._k("child",xf._j('','sPersonID'))));	
xf._b("sNodeKind",xf._h(false, xf._k("child",xf._j('','sNodeKind'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("instance('dPsm')/sValidState",xf._g(xf._f('instance',xf._i("dPsm")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dPsm')/sLevel",xf._g(xf._f('instance',xf._i("dPsm")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dPsm')/version",xf._g(xf._f('instance',xf._i("dPsm")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dUseApply')/fApplyPsnID",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyPsnID')))));	
xf._b("data('dUseApply')/fApplyPsnName",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyPsnName')))));	
xf._b("data('dUseApply')/fApplyDate",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("data('dUseApply')/fMeetName",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fMeetName')))));	
xf._b("data('dUseApply')/fBoardroomID",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fBoardroomID')))));	
xf._b("data('dUseApply')/fBoardroom",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fBoardroom')))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("fType",xf._h(false, xf._k("child",xf._j('','fType'))));	
xf._b("fHoldNum",xf._h(false, xf._k("child",xf._j('','fHoldNum'))));	
xf._b("fAddress",xf._h(false, xf._k("child",xf._j('','fAddress'))));	
xf._b("fUse",xf._h(false, xf._k("child",xf._j('','fUse'))));	
xf._b("fFloor",xf._h(false, xf._k("child",xf._j('','fFloor'))));	
xf._b("fBaseConfig",xf._h(false, xf._k("child",xf._j('','fBaseConfig'))));	
xf._b("fEquipment",xf._h(false, xf._k("child",xf._j('','fEquipment'))));	
xf._b("fDescription",xf._h(false, xf._k("child",xf._j('','fDescription'))));	
xf._b("fPicture",xf._h(false, xf._k("child",xf._j('','fPicture'))));	
xf._b("fUseStatus",xf._h(false, xf._k("child",xf._j('','fUseStatus'))));	
xf._b("fUseStatusName",xf._h(false, xf._k("child",xf._j('','fUseStatusName'))));	
xf._b("fDuptOgnID",xf._h(false, xf._k("child",xf._j('','fDuptOgnID'))));	
xf._b("fDuptOgnName",xf._h(false, xf._k("child",xf._j('','fDuptOgnName'))));	
xf._b("fDuptOgnFID",xf._h(false, xf._k("child",xf._j('','fDuptOgnFID'))));	
xf._b("fDutyDeptID",xf._h(false, xf._k("child",xf._j('','fDutyDeptID'))));	
xf._b("fDutyDeptName",xf._h(false, xf._k("child",xf._j('','fDutyDeptName'))));	
xf._b("fDutyPsnID",xf._h(false, xf._k("child",xf._j('','fDutyPsnID'))));	
xf._b("fDutyPsnName",xf._h(false, xf._k("child",xf._j('','fDutyPsnName'))));	
xf._b("fDutyPsnFID",xf._h(false, xf._k("child",xf._j('','fDutyPsnFID'))));	
xf._b("fDutyPsnFName",xf._h(false, xf._k("child",xf._j('','fDutyPsnFName'))));	
xf._b("fCreateOgnID",xf._h(false, xf._k("child",xf._j('','fCreateOgnID'))));	
xf._b("fCreateOgnName",xf._h(false, xf._k("child",xf._j('','fCreateOgnName'))));	
xf._b("fCreateDeptID",xf._h(false, xf._k("child",xf._j('','fCreateDeptID'))));	
xf._b("fCreateDeptName",xf._h(false, xf._k("child",xf._j('','fCreateDeptName'))));	
xf._b("fCreatePosID",xf._h(false, xf._k("child",xf._j('','fCreatePosID'))));	
xf._b("fCreatePosName",xf._h(false, xf._k("child",xf._j('','fCreatePosName'))));	
xf._b("fCreatePsnID",xf._h(false, xf._k("child",xf._j('','fCreatePsnID'))));	
xf._b("fCreatePsnName",xf._h(false, xf._k("child",xf._j('','fCreatePsnName'))));	
xf._b("fCreatePsnFID",xf._h(false, xf._k("child",xf._j('','fCreatePsnFID'))));	
xf._b("fCreatePsnFName",xf._h(false, xf._k("child",xf._j('','fCreatePsnFName'))));	
xf._b("fCreateTime",xf._h(false, xf._k("child",xf._j('','fCreateTime'))));	
xf._b("fUpdatePsnID",xf._h(false, xf._k("child",xf._j('','fUpdatePsnID'))));	
xf._b("fUpdatePsnName",xf._h(false, xf._k("child",xf._j('','fUpdatePsnName'))));	
xf._b("fUpdateTime",xf._h(false, xf._k("child",xf._j('','fUpdateTime'))));	
xf._b("fDisUseTime",xf._h(false, xf._k("child",xf._j('','fDisUseTime'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("fExtendStr1",xf._h(false, xf._k("child",xf._j('','fExtendStr1'))));	
xf._b("fExtendStr2",xf._h(false, xf._k("child",xf._j('','fExtendStr2'))));	
xf._b("fExtendStr3",xf._h(false, xf._k("child",xf._j('','fExtendStr3'))));	
xf._b("fExtendStr4",xf._h(false, xf._k("child",xf._j('','fExtendStr4'))));	
xf._b("fExtendStr5",xf._h(false, xf._k("child",xf._j('','fExtendStr5'))));	
xf._b("fExtendStr6",xf._h(false, xf._k("child",xf._j('','fExtendStr6'))));	
xf._b("fExtendStr7",xf._h(false, xf._k("child",xf._j('','fExtendStr7'))));	
xf._b("fExtendStr8",xf._h(false, xf._k("child",xf._j('','fExtendStr8'))));	
xf._b("fExtendStr9",xf._h(false, xf._k("child",xf._j('','fExtendStr9'))));	
xf._b("fExtendDate1",xf._h(false, xf._k("child",xf._j('','fExtendDate1'))));	
xf._b("fExtendDate2",xf._h(false, xf._k("child",xf._j('','fExtendDate2'))));	
xf._b("fExtendDate3",xf._h(false, xf._k("child",xf._j('','fExtendDate3'))));	
xf._b("fExtendDate4",xf._h(false, xf._k("child",xf._j('','fExtendDate4'))));	
xf._b("fExtendDate5",xf._h(false, xf._k("child",xf._j('','fExtendDate5'))));	
xf._b("fExtendNum1",xf._h(false, xf._k("child",xf._j('','fExtendNum1'))));	
xf._b("fExtendNum2",xf._h(false, xf._k("child",xf._j('','fExtendNum2'))));	
xf._b("fExtendNum3",xf._h(false, xf._k("child",xf._j('','fExtendNum3'))));	
xf._b("fExtendNum4",xf._h(false, xf._k("child",xf._j('','fExtendNum4'))));	
xf._b("fExtendNum5",xf._h(false, xf._k("child",xf._j('','fExtendNum5'))));	
xf._b("data('dUseApply')/fBeginTime",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))));	
xf._b("data('dUseApply')/fEndTime",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fEndTime')))));	
xf._b("data('dUseApply')/fPhone",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fPhone')))));	
xf._b("data('dUseApply')/fMeetPsns",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fMeetPsns')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dUseApply')/fOutPsns",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fOutPsns')))));	
xf._b("data('dUseApply')/fMeetPsnNum",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))));	
xf._b("data('dUseApply')/fDescription",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fDescription')))));	
xf._b("data('dUseApply')/fRemark",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fRemark')))));	
xf._b("not(call('justep.XData.canDo','dUseApply','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dUseApply"),xf._i("Save"))));	
xf._b("call('standardProcessBar1_getRowState') = 'new'",xf._l(xf._f('call',xf._i("standardProcessBar1_getRowState")), '=',xf._i("new")));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xf._b("call('standardProcessBar1_getBackRelevant') ",xf._f('call',xf._i("standardProcessBar1_getBackRelevant")));	
xf._b("call('standardProcessBar1_getAdvanceRelevant') ",xf._f('call',xf._i("standardProcessBar1_getAdvanceRelevant")));	
xf._b("call('standardProcessBar1_getTransferRelevant') ",xf._f('call',xf._i("standardProcessBar1_getTransferRelevant")));	
xf._b("call('standardProcessBar1_getSuspendRelevant') ",xf._f('call',xf._i("standardProcessBar1_getSuspendRelevant")));	
xf._b("call('standardProcessBar1_getAbortRelevant') ",xf._f('call',xf._i("standardProcessBar1_getAbortRelevant")));	
xf._b("call('standardProcessBar1_getCustomizedRelevant') ",xf._f('call',xf._i("standardProcessBar1_getCustomizedRelevant")));	
xf._b("call('standardProcessBar1_getProcessChartRelevant') ",xf._f('call',xf._i("standardProcessBar1_getProcessChartRelevant")));	
xf._b("call('standardProcessBar1_getExecuteListRelevant') ",xf._f('call',xf._i("standardProcessBar1_getExecuteListRelevant")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-27','mdMain',"instance('dBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdMain',"instance('dBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdMain',"instance('dBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdMain',"instance('dBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdMain',"instance('dBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdMain',"instance('dBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdMain',"instance('dBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdMain',"instance('dBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdMain',"instance('dBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdMain',"instance('dBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdMain',"instance('dBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdMain',"instance('dBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdMain',"instance('dBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdMain',"instance('dBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdMain',"instance('dBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action3,'mdMain', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dUseApply_part_loaded = false;	
function load_dUseApply_part(callback){if (dUseApply_part_loaded) return;dUseApply_part_loaded = true;	
new xforms.XFInstance2('dUseApply','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dUseApply',null);	
xf._c('xf-bind-0','mdMain',"instance('dUseApply')/fMeetName",null,null,"true()",null,null,null,"'会议主题不能为空!'");	
xf._c('xf-bind-1','mdMain',"instance('dUseApply')/fBoardroomID",null,null,"true()",null,null,null,"'会议室不能为空!'");	
xf._c('xf-bind-2','mdMain',"instance('dUseApply')/fBeginTime",null,null,"true()",null,null,null,"'开始时间不能为空!'");	
xf._c('xf-bind-3','mdMain',"instance('dUseApply')/fEndTime",null,null,null,null,null,"data('dUseApply')/fEndTime>data('dUseApply')/fBeginTime","'结束时间必须大于开始时间!'");	
xf._c('xf-bind-4','mdMain',"instance('dUseApply')/fMeetPsns",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dUseApply')/fMeetPsnNum",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dUseApply')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dUseApply')/fApplyDate","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dUseApply')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dUseApply')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dUseApply')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dUseApply')/fArrBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dUseApply')/fArrEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dUseApply')/fArrTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dUseApply')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dUseApply')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dUseApply')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dUseApply')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dUseApply')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dUseApply')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dUseApply')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dUseApply')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdMain',"instance('dUseApply')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dUseApply')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dUseApply')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dUseApply')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dUseApply_part_init_loaded = false;	
function load_dUseApply_part_init(){if (dUseApply_part_init_loaded) return;dUseApply_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var dUsePerson_part_loaded = false;	
function load_dUsePerson_part(callback){if (dUsePerson_part_loaded) return;dUsePerson_part_loaded = true;	
new xforms.XFInstance2('dUsePerson','mdMain',null,null,'false','fMasterID','dUseApply',null,null,null,null,null,'whereVersion');new SimpleStore('dUsePerson',null);	
xf._c('xf-bind-26','mdMain',"instance('dUsePerson')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dUsePerson_part_init_loaded = false;	
function load_dUsePerson_part_init(){if (dUsePerson_part_init_loaded) return;dUsePerson_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_trgSearch=new xforms.XFTrigger('trgSearch',null,null,null,false,false,false,null,null,null);	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgSearchDOMActivate(event)}));xf._p(justep('trgSearch'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action6,'trgSearch', evt,false)});	
xforms.load_parts('vApplyInfo');	
var xf_model_xf_model_3 = new xforms.XFModel('xf-model-3',null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var data = justep.xbl('dUseApply'); var p = justep.xbl('boardroomUseApplyProcess'); if (data){ data.attachEvent(justep.XData.EVENT_REFRESHDATA_BEFORE, function(event){ /*if (p.isAutoFilter()){*/ var conceptName = event.source.getConceptAliasName(); var value = justep.Context.getProcessData1(); var condition = null; if (value){ condition = conceptName + "='" + value + "'"; }else{ condition = "1=0"; } event.source.setFilter("_process-filter_", condition); /*}else{ event.source.setFilter("_process-filter_", "1=1"); }*/ }, data); }else{ var msg = new justep.Message(justep.Message.JUSTEP230001, "'dUseApply'"); throw justep.Error.create(msg); }}));xf._p(justep('xf-model-3'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_4,'xf-model-3', evt,false)});	
new xforms.XFDialog('boardroomUseApplyProcess_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('boardroomUseApplyProcess_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('boardroomUseApplyProcess'); process[callback](task, processControl, options); } justep('boardroomUseApplyProcess_processControlDialogIFrame').src="";});xf._p(justep('boardroomUseApplyProcess_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'boardroomUseApplyProcess_processControlDialog', evt,false)});	
new xforms.XFDialog('boardroomUseApplyProcess_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_6=xf._o(null,null,function(element, ctx, event){justep('boardroomUseApplyProcess_processChartDialogIFrame').src="";});xf._p(justep('boardroomUseApplyProcess_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_6,'boardroomUseApplyProcess_processChartDialogID', evt,false)});	
var xf_script_xf_script_7=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('boardroomUseApplyProcess_processChartDialogIFrame').src=url;});xf._p(justep('boardroomUseApplyProcess_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_7,'boardroomUseApplyProcess_processChartDialogID', evt,false)});	
new xforms.XFDialog('boardroomUseApplyProcess_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_8=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('boardroomUseApplyProcess_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('boardroomUseApplyProcess'); process[callback](task, processControl, options); }});xf._p(justep('boardroomUseApplyProcess_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_8,'boardroomUseApplyProcess_processConfirmDialog', evt,false)});	
var xf_trigger_e7f05ccc0e534199ba91a0bc7cdc54f5=new xforms.XFTrigger('e7f05ccc0e534199ba91a0bc7cdc54f5',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('boardroomUseApplyProcess_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('boardroomUseApplyProcess_processConfirmDialog').close();}));xf._p(justep('e7f05ccc0e534199ba91a0bc7cdc54f5'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'e7f05ccc0e534199ba91a0bc7cdc54f5', evt,false)});	
var xf_trigger_f5ddd6544b9f4a95b966a66116405300=new xforms.XFTrigger('f5ddd6544b9f4a95b966a66116405300',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('boardroomUseApplyProcess_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('boardroomUseApplyProcess_processConfirmDialog').close();}));xf._p(justep('f5ddd6544b9f4a95b966a66116405300'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'f5ddd6544b9f4a95b966a66116405300', evt,false)});	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){tabFlowChartxforms_select(event)}));xf._p(justep('tabFlowChart'),"xforms-select",null,function(evt) { xforms.run(xf_action_action1,'tabFlowChart', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-3').xformsObject.construct_part();	
}	
function load_vApplyInfo(){if (justep("vApplyInfo").getAttribute('loaded') && justep("vApplyInfo").getAttribute('loaded') == 'true') return;justep("vApplyInfo").setAttribute('loaded', 'true');	
if(typeof(load_vApplyInfo_html) == 'function')load_vApplyInfo_html();	
var xf_output_optNO=new xforms.XFOutput('optNO',xf._q("data('dUseApply')/fNO"),null,null);	
var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFExtSelect({id:'treeSelect1',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dUseApply')/fApplyDeptID"),labelRef:xf._q("data('dUseApply')/fApplyDeptName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dOrg',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'rowid',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1668499773',onRowHasChildren:func_1248320991,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_model2 = new xforms.XFModel('model2',null);	
new xforms.XFExtSelect({id:'treeSelect2',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dUseApply')/fApplyPsnID"),labelRef:xf._q("data('dUseApply')/fApplyPsnName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dPsm',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'sPersonID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_421244711',onRowHasChildren:func_289504256,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'treeSelect2Dropdown',onCloseup:'useApply.treeSelect2Closeup'});	
xf._d('iptApplyDate','text',xf._q("data('dUseApply')/fApplyDate"),null,null,null,"format-dateTime('yyyy-MM-dd hh:mm')",false,false);	
xf._d('iptTitle','text',xf._q("data('dUseApply')/fMeetName"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'boardroomSelect',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dUseApply')/fBoardroomID"),labelRef:xf._q("data('dUseApply')/fBoardroom"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dBoardroom',columns:'rowid,fName,fType,fHoldNum,fAddress,__c_,version,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'rowid,version,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',valueColumn:'rowid',labelColumn:'fName',extColumn:null,labels:',会议室名称,会议室类型,容纳人数,地址,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,80,80,60,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('iptBeginTime','text',xf._q("data('dUseApply')/fBeginTime"),null,null,null,"format-dateTime('yyyy-MM-dd hh:mm')",false,false);	
xf._d('iptEndTime','text',xf._q("data('dUseApply')/fEndTime"),null,null,null,"format-dateTime('yyyy-MM-dd hh:mm')",false,false);	
xf._d('iptPhone','text',xf._q("data('dUseApply')/fPhone"),null,null,null,null,false,false);	
xf._d('iptApplyPsns','textarea',xf._q("data('dUseApply')/fMeetPsns"),null,null,null,null,false,true);	
var xf_trigger_trgSelectPsn=new xforms.XFTrigger('trgSelectPsn',null,"/UI/appCommon/images/search.png","/UI/appCommon/images/un_search.png",false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgSelectPsnDOMActivate(event)}));xf._p(justep('trgSelectPsn'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trgSelectPsn', evt,false)});	
xf._d('taOutPsns','textarea',xf._q("data('dUseApply')/fOutPsns"),null,null,null,null,false,false);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){taOutPsnsxforms_value_changed(event)}));xf._p(justep('taOutPsns'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action4,'taOutPsns', evt,false)});	
xf._d('iptPsnNum','text',xf._q("data('dUseApply')/fMeetPsnNum"),null,null,null,null,false,false);	
xf._d('taDescription','textarea',xf._q("data('dUseApply')/fDescription"),null,null,null,null,false,false);	
xf._d('taRemark','textarea',xf._q("data('dUseApply')/fRemark"),null,null,null,null,false,false);	
}	
function load_vApplyInfo_xblinit(){if (justep("vApplyInfo").getAttribute('xblloaded') && justep("vApplyInfo").getAttribute('xblloaded') == 'true') return;justep("vApplyInfo").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('model1').xformsObject.construct_part();	
if(xforms.ready)justep('model2').xformsObject.construct_part();	
}	
var dOrg_part_loaded = false;	
function load_dOrg_part(callback){if (dOrg_part_loaded) return;dOrg_part_loaded = true;	
new xforms.XFInstance2('dOrg','model1',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-42','model1',"instance('dOrg')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','model1',"instance('dOrg')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','model1',"instance('dOrg')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrg_part_init_loaded = false;	
function load_dOrg_part_init(){if (dOrg_part_init_loaded) return;dOrg_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var dPsm_part_loaded = false;	
function load_dPsm_part(callback){if (dPsm_part_loaded) return;dPsm_part_loaded = true;	
new xforms.XFInstance2('dPsm','model2',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-45','model2',"instance('dPsm')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','model2',"instance('dPsm')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','model2',"instance('dPsm')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dPsm_part_init_loaded = false;	
function load_dPsm_part_init(){if (dPsm_part_init_loaded) return;dPsm_part_init_loaded = true;	
if(xforms.ready)justep('model2').xformsObject.construct_part();}	
var __actions__ = {	
};	
