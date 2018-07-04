
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/orgSelect.xbl.xml#orgSelect"] = _xbl_JSClassDefine_orgSelect;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processPertChart"] = _xbl_JSClassDefine_processPertChart;
justep.XBLObject._classes["/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList"] = _xbl_JSClassDefine_standardProcessExecuteList;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processChart"] = _xbl_JSClassDefine_processChart;
justep.XBLObject._classes["/UI/system/components/windowFrame.xbl.xml#windowFrame"] = _xbl_JSClassDefine_windowFrame;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
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
				initXBL : function(){	justep.supportCustomOperation(this);
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

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

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

	var ids=[{id:'f0ab822cc75445c686448f009fe05608', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'fPlanYear', name:'xforms:gridselect1', children:[{id:'c6b0d2daa8194380a771c7e3308f6d99', name:'xforms:label'},{id:'a592b975031f465e9f614606b01cfa3d', name:'xforms:value'}]},{id:'fPlanMonth', name:'xforms:gridselect1', children:[{id:'c4ef3ab54f474ab7929e98905f39bdb8', name:'xforms:label'},{id:'99425a71ad964d64b524f2e8a7ef88a4', name:'xforms:value'}]},{id:'fPlanWeek', name:'xforms:gridselect1', children:[{id:'a580552a17ad46729ae41aa8920a5ba7', name:'xforms:label'},{id:'7f7ede4871fd413da48eee47cd8e8ee8', name:'xforms:value'}]},{id:'fCBBM', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSelect1', name:'xforms:treeselect1', children:[{id:'fe9861bb9ec74c90afcae05f78f9019e', name:'xforms:label'},{id:'9e951f6edbe24bd4b6218a885a86cd01', name:'xforms:value'}]}]},{id:'fCBR', name:'xforms:input'},{id:'fCreateTime', name:'xforms:input'},{id:'tbsDetail', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'trigger1', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]}]},{id:'grdDetail', name:'xforms:grid'},{id:'standardProcessExecuteList2', name:'/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList', children:[{id:'standardProcessExecuteList2_collapse_panel_640418854', name:'/UI/system/components/collapsePanel.xbl.xml#collapsePanel', children:[{id:'standardProcessExecuteList2_windowFrame_640418854', name:'/UI/system/components/windowFrame.xbl.xml#windowFrame'}]}]},{id:'flwc', name:'/UI/system/components/processChart.xbl.xml#processChart', children:[{id:'GLOBAL_ID_N218911053', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'GLOBAL_ID_75925505', name:'/UI/system/components/processChart.xbl.xml#processTrackChart', children:[{id:'bl2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]},{id:'GLOBAL_ID_N2011471842', name:'/UI/system/components/processChart.xbl.xml#processPertChart'}]}]}]},{id:'flw', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'flw_processControlDialog', name:'xforms:dialog'},{id:'flw_processChartDialogID', name:'xforms:dialog'},{id:'flw_processConfirmDialog', name:'xforms:dialog', children:[{id:'9e32e25c2eb74f6385dc7dae951305c1', name:'xforms:trigger', children:[{id:'9484743fc91c4392b12c8d8c45810c66', name:'xforms:label'}]},{id:'5517f2a46da3494f8a797203827e17ae', name:'xforms:trigger', children:[{id:'22e7d57c8e5d416a85b6a146c0a21121', name:'xforms:label'}]}]},{id:'flw_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'fPlanYear');xf._a('fPlanYear','c6b0d2daa8194380a771c7e3308f6d99');xf._a('fPlanYear','xf-itemset-0');xf._a(null,'fPlanMonth');xf._a('fPlanMonth','c4ef3ab54f474ab7929e98905f39bdb8');xf._a('fPlanMonth','xf-itemset-1');xf._a(null,'fPlanWeek');xf._a('fPlanWeek','a580552a17ad46729ae41aa8920a5ba7');xf._a('fPlanWeek','xf-itemset-2');xf._a(null,'treeSelect1');xf._a('treeSelect1','fe9861bb9ec74c90afcae05f78f9019e');xf._a('treeSelect1','xf-itemset-3');xf._a(null,'fCBR');xf._a(null,'fCreateTime');xf._a(null,'trigger1');xf._a('trigger1','xuiLabel3');xf._a(null,'grdDetail');xf._a(null,'9e32e25c2eb74f6385dc7dae951305c1');xf._a('9e32e25c2eb74f6385dc7dae951305c1','9484743fc91c4392b12c8d8c45810c66');xf._a(null,'5517f2a46da3494f8a797203827e17ae');xf._a('5517f2a46da3494f8a797203827e17ae','22e7d57c8e5d416a85b6a146c0a21121');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')",xf._f('instance',xf._i("dataMain")));	
xf._b("(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail') or not(contains('bizActivity1,mainActivity', call('justep.Context.getCurrentActivity')))",xf._l(xf._l(xf._f('call',xf._i("justep.Context.getRequestParameter"),xf._i("activity-pattern")), '=',xf._i("detail")), 'or',xf._f('not',xf._f('contains',xf._i("bizActivity1,mainActivity"),xf._f('call',xf._i("justep.Context.getCurrentActivity"))))));	
xf._b("instance('dataMain')/fGZJHLX",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fGZJHLX')))));	
xf._b("instance('dataMain')/fPlanYear",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanYear')))));	
xf._b("true()",xf._f('true'));	
xf._b("'度年不能为空!'",xf._i("度年不能为空!"));	
xf._b("instance('dataMain')/version",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dataMain')/fJHKSRQ",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fJHKSRQ')))));	
xf._b("instance('dataMain')/fJHJSRQ",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fJHJSRQ')))));	
xf._b("instance('dataMain')/fApplyDate",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("instance('dataMain')/fCreateTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dataMain')/fUpdateTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dGZNR')/fWorkContent",xf._g(xf._f('instance',xf._i("dGZNR")),xf._h(false, xf._k("child",xf._j('','fWorkContent')))));	
xf._b("'工作内容必填!'",xf._i("工作内容必填!"));	
xf._b("instance('dGZNR')",xf._f('instance',xf._i("dGZNR")));	
xf._b("not(contains('deptEdActivity,mainActivity', call('justep.Context.getCurrentActivity')))",xf._f('not',xf._f('contains',xf._i("deptEdActivity,mainActivity"),xf._f('call',xf._i("justep.Context.getCurrentActivity")))));	
xf._b("instance('dGZNR')/version",xf._g(xf._f('instance',xf._i("dGZNR")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dGZNR')/fPlanTime",xf._g(xf._f('instance',xf._i("dGZNR")),xf._h(false, xf._k("child",xf._j('','fPlanTime')))));	
xf._b("instance('dBtn')/insertBtn",xf._g(xf._f('instance',xf._i("dBtn")),xf._h(false, xf._k("child",xf._j('','insertBtn')))));	
xf._b("(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail') or not(contains('deptEdActivity,mainActivity', call('justep.Context.getCurrentActivity')))",xf._l(xf._l(xf._f('call',xf._i("justep.Context.getRequestParameter"),xf._i("activity-pattern")), '=',xf._i("detail")), 'or',xf._f('not',xf._f('contains',xf._i("deptEdActivity,mainActivity"),xf._f('call',xf._i("justep.Context.getCurrentActivity"))))));	
xf._b("data('dataMain')/fPlanYear",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanYear')))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("value",xf._h(false, xf._k("child",xf._j('','value'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("data('dataMain')/fPlanMonth",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanMonth')))));	
xf._b("data('dataMain')/fPlanWeek",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanWeek')))));	
xf._b("instance('dOrgDept')/sValidState",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrgDept')/sLevel",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrgDept')/version",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dataMain')/fCreateDeptID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateDeptID')))));	
xf._b("data('dataMain')/fCreateDeptName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateDeptName')))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
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
xf._b("data('dataMain')/fCreatePsnName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreatePsnName')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/fCreateTime",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("data('dBtn')/insertBtn",xf._g(xf._f('data',xf._i("dBtn")),xf._h(false, xf._k("child",xf._j('','insertBtn')))));	
xf._b("(contains('deptEdActivity,mainActivity', call('justep.Context.getCurrentActivity')))",xf._f('contains',xf._i("deptEdActivity,mainActivity"),xf._f('call',xf._i("justep.Context.getCurrentActivity"))));	
xf._b("序号",xf._h(false, xf._k("child",xf._j('','序号'))));	
xf._b("fWorkContent",xf._h(false, xf._k("child",xf._j('','fWorkContent'))));	
xf._b("fFGLD",xf._h(false, xf._k("child",xf._j('','fFGLD'))));	
xf._b("fZRC",xf._h(false, xf._k("child",xf._j('','fZRC'))));	
xf._b("fZRR",xf._h(false, xf._k("child",xf._j('','fZRR'))));	
xf._b("fPlanTime",xf._h(false, xf._k("child",xf._j('','fPlanTime'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("fGZJHID",xf._h(false, xf._k("child",xf._j('','fGZJHID'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("not(call('justep.XData.canDo','dataMain','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Save"))));	
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
xf._b("not(call('justep.XData.canDo','dGZNR','Delete')) or (not(contains('deptEdActivity,mainActivity', call('justep.Context.getCurrentActivity'))))",xf._l(xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dGZNR"),xf._i("Delete"))), 'or',xf._f('not',xf._f('contains',xf._i("deptEdActivity,mainActivity"),xf._f('call',xf._i("justep.Context.getCurrentActivity"))))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dGZNR','mdDefault',null,null,null,'fGZJHID','dataMain',null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-9','mdDefault',"instance('dGZNR')/fWorkContent",null,null,"true()",null,null,null,"'工作内容必填!'");	
xf._c('xf-bind-10','mdDefault',"instance('dGZNR')",null,"not(contains('deptEdActivity,mainActivity', call('justep.Context.getCurrentActivity')))",null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dGZNR')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dGZNR')/fPlanTime","xsd:date",null,null,null,null,null,null);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms_model_construct_done(event)}));xf._p(justep('mdDefault'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_xf_action_0,'mdDefault', evt,false)});	
new xforms.XFInstance2('yearData','mdDefault',null,'<rows><row><cell>2010</cell><cell>2010</cell></row><row><cell>2011</cell><cell>2011</cell></row><row><cell>2012</cell><cell>2012</cell></row><row><cell>2013</cell><cell>2013</cell></row><row><cell>2014</cell><cell>2014</cell></row><row><cell>2015</cell><cell>2015</cell></row><row><cell>2016</cell><cell>2016</cell></row><row><cell>2017</cell><cell>2017</cell></row><row><cell>2018</cell><cell>2018</cell></row><row><cell>2019</cell><cell>2019</cell></row><row><cell>2020</cell><cell>2020</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('yearData','label,value');	
new xforms.XFInstance2('monthData','mdDefault',null,'<rows><row><cell>1</cell><cell>1</cell></row><row><cell>2</cell><cell>2</cell></row><row><cell>3</cell><cell>3</cell></row><row><cell>4</cell><cell>4</cell></row><row><cell>5</cell><cell>5</cell></row><row><cell>6</cell><cell>6</cell></row><row><cell>7</cell><cell>7</cell></row><row><cell>8</cell><cell>8</cell></row><row><cell>9</cell><cell>9</cell></row><row><cell>10</cell><cell>10</cell></row><row><cell>11</cell><cell>11</cell></row><row><cell>12</cell><cell>12</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('monthData','label,value');	
new xforms.XFInstance2('weekData','mdDefault',null,'<rows><row><cell>第一周</cell><cell>第一周</cell></row><row><cell>第二周</cell><cell>第二周</cell></row><row><cell>第三周</cell><cell>第三周</cell></row><row><cell>第四周</cell><cell>第四周</cell></row><row><cell>第五周</cell><cell>第五周</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('weekData','label,value');	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action3,'mdDefault', evt,false)});	
new xforms.XFInstance2('dBtn','mdDefault',null,'<rows id="default3"><row id="default4"><cell id="default7"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dBtn','insertBtn');	
xf._c('xf-bind-13','mdDefault',"instance('dBtn')/insertBtn",null,"(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail') or not(contains('deptEdActivity,mainActivity', call('justep.Context.getCurrentActivity')))",null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dataMain_part_loaded = false;	
function load_dataMain_part(callback){if (dataMain_part_loaded) return;dataMain_part_loaded = true;	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')",null,"(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail') or not(contains('bizActivity1,mainActivity', call('justep.Context.getCurrentActivity')))",null,null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/fGZJHLX",null,null,null,null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/fPlanYear",null,null,"true()",null,null,null,"'度年不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/fJHKSRQ","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/fJHJSRQ","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/fApplyDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dataMain_part_init_loaded = false;	
function load_dataMain_part_init(){if (dataMain_part_init_loaded) return;dataMain_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vDetail');	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){tabPage2xforms_select(event)}));xf._p(justep('tabFlow'),"xforms-select",null,function(evt) { xforms.run(xf_action_action1,'tabFlow', evt,false)});	
var xf_model_xf_model_2 = new xforms.XFModel('xf-model-2',null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var data = justep.xbl('dataMain'); var p = justep.xbl('flw'); if (data){ data.attachEvent(justep.XData.EVENT_REFRESHDATA_BEFORE, function(event){ /*if (p.isAutoFilter()){*/ var conceptName = event.source.getConceptAliasName(); var value = justep.Context.getProcessData1(); var condition = null; if (value){ condition = conceptName + "='" + value + "'"; }else{ condition = "1=0"; } event.source.setFilter("_process-filter_", condition); /*}else{ event.source.setFilter("_process-filter_", "1=1"); }*/ }, data); }else{ var msg = new justep.Message(justep.Message.JUSTEP230001, "'dataMain'"); throw justep.Error.create(msg); }}));xf._p(justep('xf-model-2'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_4,'xf-model-2', evt,false)});	
new xforms.XFDialog('flw_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('flw_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('flw'); process[callback](task, processControl, options); } justep('flw_processControlDialogIFrame').src="";});xf._p(justep('flw_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'flw_processControlDialog', evt,false)});	
new xforms.XFDialog('flw_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_6=xf._o(null,null,function(element, ctx, event){justep('flw_processChartDialogIFrame').src="";});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_6,'flw_processChartDialogID', evt,false)});	
var xf_script_xf_script_7=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('flw_processChartDialogIFrame').src=url;});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_7,'flw_processChartDialogID', evt,false)});	
new xforms.XFDialog('flw_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_8=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('flw'); process[callback](task, processControl, options); }});xf._p(justep('flw_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_8,'flw_processConfirmDialog', evt,false)});	
var xf_trigger_9e32e25c2eb74f6385dc7dae951305c1=new xforms.XFTrigger('9e32e25c2eb74f6385dc7dae951305c1',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('flw_processConfirmDialog').close();}));xf._p(justep('9e32e25c2eb74f6385dc7dae951305c1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'9e32e25c2eb74f6385dc7dae951305c1', evt,false)});	
var xf_trigger_5517f2a46da3494f8a797203827e17ae=new xforms.XFTrigger('5517f2a46da3494f8a797203827e17ae',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('flw_processConfirmDialog').close();}));xf._p(justep('5517f2a46da3494f8a797203827e17ae'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'5517f2a46da3494f8a797203827e17ae', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-2').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
new xforms.XFExtSelect({id:'fPlanYear',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fPlanYear"),labelRef:xf._q("data('dataMain')/fPlanYear"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'yearData',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"100,#,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'fPlanMonth',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fPlanMonth"),labelRef:xf._q("data('dataMain')/fPlanMonth"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'monthData',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"100,#,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'fPlanWeek',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fPlanWeek"),labelRef:xf._q("data('dataMain')/fPlanWeek"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'weekData',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"100,#,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_model2 = new xforms.XFModel('model2',null);	
new xforms.XFExtSelect({id:'treeSelect1',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fCreateDeptID"),labelRef:xf._q("data('dataMain')/fCreateDeptName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dOrgDept',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'rowid',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1185340950',onRowHasChildren:func_183257778,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('fCBR','text',xf._q("data('dataMain')/fCreatePsnName"),null,null,null,null,false,true);	
xf._d('fCreateTime','text',xf._q("data('dataMain')/fCreateTime"),null,null,null,"format-dateTime('yyyy-MM-dd')",false,false);	
xforms.load_parts('vTbrGZNR');	
xforms.load_parts('vgrdGZNR');	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('model2').xformsObject.construct_part();	
}	
var dOrgDept_part_loaded = false;	
function load_dOrgDept_part(callback){if (dOrgDept_part_loaded) return;dOrgDept_part_loaded = true;	
new xforms.XFInstance2('dOrgDept','model2',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-14','model2',"instance('dOrgDept')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model2',"instance('dOrgDept')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','model2',"instance('dOrgDept')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrgDept_part_init_loaded = false;	
function load_dOrgDept_part_init(){if (dOrgDept_part_init_loaded) return;dOrgDept_part_init_loaded = true;	
if(xforms.ready)justep('model2').xformsObject.construct_part();}	
function load_vTbrGZNR(){if (justep("vTbrGZNR").getAttribute('loaded') && justep("vTbrGZNR").getAttribute('loaded') == 'true') return;justep("vTbrGZNR").setAttribute('loaded', 'true');	
if(typeof(load_vTbrGZNR_html) == 'function')load_vTbrGZNR_html();	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',xf._q("data('dBtn')/insertBtn"),"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false,false,null,null,null);	
var xf_action_action2=xf._n("(contains('deptEdActivity,mainActivity', call('justep.Context.getCurrentActivity')))",null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.insertItemClick(event)}));xf._p(justep('td-118'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'td-118', evt,false)});	
}	
function load_vTbrGZNR_xblinit(){if (justep("vTbrGZNR").getAttribute('xblloaded') && justep("vTbrGZNR").getAttribute('xblloaded') == 'true') return;justep("vTbrGZNR").setAttribute('xblloaded', 'true');	
}	
function load_vgrdGZNR(){if (justep("vgrdGZNR").getAttribute('loaded') && justep("vgrdGZNR").getAttribute('loaded') == 'true') return;justep("vgrdGZNR").setAttribute('loaded', 'true');	
if(typeof(load_vgrdGZNR_html) == 'function')load_vgrdGZNR_html();	
new xforms.XFGrid({id:'grdDetail',instance:'dGZNR',systemColumnsPro:'version,fSponsor,fChargePerson,fChargePersonName,fParticipantsID,fParticipants,fAddress',onInit:null,type:'grid',smartRender:null,delay:false,ids:'序号,fWorkContent,fFGLD,fZRC,fZRR,fPlanTime,fRemark,fGZJHID,space-column',headNames:'序号,工作项目,分管领导,责任处,责任人,完成时限,备注,fGZJHID,&nbsp;',widths:'30,320,100,100,100,120,100,*,*',types:'cntr,ed,ed,ed,ed,ed,ed,ro,ro',hiddenColumns:'fGZJHID',aligns:'center,,,,,center,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'fPlanTime','yyyy-MM-dd');}});	
}	
function load_vgrdGZNR_xblinit(){if (justep("vgrdGZNR").getAttribute('xblloaded') && justep("vgrdGZNR").getAttribute('xblloaded') == 'true') return;justep("vgrdGZNR").setAttribute('xblloaded', 'true');	
}	
function load_vFlow(){if (justep("vFlow").getAttribute('loaded') && justep("vFlow").getAttribute('loaded') == 'true') return;justep("vFlow").setAttribute('loaded', 'true');	
if(typeof(load_vFlow_html) == 'function')load_vFlow_html();	
}	
function load_vFlow_xblinit(){if (justep("vFlow").getAttribute('xblloaded') && justep("vFlow").getAttribute('xblloaded') == 'true') return;justep("vFlow").setAttribute('xblloaded', 'true');	
xforms.refresh(justep("vFlow"));	
justep.XBLObject.loadXBL(justep("vFlow"));}	
var __actions__ = {	
};	
function load_vFlow_html(){var a = [];a.push('<div class="component_4D3D41 processChart" component="/UI/system/components/processChart.xbl.xml#processChart" id="flwc" style="height:100%;width:100%;" >');a.push('<div pertID="GLOBAL_ID_N2011471842" style="display:none" trackID="GLOBAL_ID_75925505" xblid="interface" >');a.push('</div>');a.push('<div class="component_478DC2A1 tabs" component="/UI/system/components/tabs.xbl.xml#tabs" id="GLOBAL_ID_N218911053" style="width:100%;height:100%;overflow:auto;" >');a.push('<div class="jstabbar" id="GLOBAL_ID_N218911053_root" >');a.push('<ul class="tabItems clearfix" >');a.push('<li class="selected" id="GLOBAL_ID_100271083_tab" >');a.push('<button class="selected" onclick="this.parentNode.parentNode.parentNode.parentNode.tabbar.setTabActive(\'GLOBAL_ID_100271083\');this.blur();" type="button" >');a.push('轨迹图');a.push('</button>');a.push('</li>');a.push('<li id="GLOBAL_ID_606196507_tab" >');a.push('<button onclick="this.parentNode.parentNode.parentNode.parentNode.tabbar.setTabActive(\'GLOBAL_ID_606196507\');this.blur();" type="button" >');a.push('波特图');a.push('</button>');a.push('</li>');a.push('</ul>');a.push('<div class="contents" id="GLOBAL_ID_N218911053_contents" >');a.push('<div class="content selected" id="GLOBAL_ID_100271083" >');a.push('<div class="component_8CF08DD0 processTrackChart" component="/UI/system/components/processChart.xbl.xml#processTrackChart" ext="" id="GLOBAL_ID_75925505" onTrackItemClick="" style="height:100%;" >');a.push('<div style="display:none" >');a.push('<div chartControlID="track_GLOBAL_ID_N1160134551" xblid="interface" >');a.push('</div>');a.push('</div>');a.push('<div class="component_8F7B2FA1 borderLayout" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="bl2" style="height:100%;" >');a.push('<div borderSize="0" class="xui-borderlayout-root" >');a.push('<div class="xui-borderlayout-area xui-borderlayout-top" size="40px" style="" >');a.push('<table>');a.push('<tr>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:green; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td align="" >');a.push('<span>');a.push('已经过');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:black; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('未经过');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:red; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('回退');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:#0080FF; border:1px #0080FF solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('当前环节');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:green; border:1px green solid; width:100%;height:20px; border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已处理');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:#ff6666; border:1px #ff6666 solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已终止');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:yellow; border:1px yellow solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已暂停');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('<div class="xui-borderlayout-border xui-borderlayout-border-top" style="height:0" >');a.push('</div>');a.push('<div class="xui-borderlayout-area xui-borderlayout-center" style="overflow:auto;" >');a.push('<div id="track_GLOBAL_ID_N1160134551" style="width:100%;height:100%;overflow:auto;" >');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('<div class="content" id="GLOBAL_ID_606196507" >');a.push('<div class="component_4502B30A processPertChart" component="/UI/system/components/processChart.xbl.xml#processPertChart" ext="" id="GLOBAL_ID_N2011471842" onPertItemClick="" style="height:100%;" >');a.push('<div style="display:none" >');a.push('<div chartControlID="bot_GLOBAL_ID_N1946295764" xblid="interface" >');a.push('</div>');a.push('</div>');a.push('<div id="bot_GLOBAL_ID_N1946295764" style="width:100%;height:100%;overflow:auto;" >');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');justep('vFlow').innerHTML = a.join('');}