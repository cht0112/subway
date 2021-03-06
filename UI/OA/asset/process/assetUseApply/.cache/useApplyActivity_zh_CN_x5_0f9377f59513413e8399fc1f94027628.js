
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
			   	this.centerEl = $("#" + id + " > div > " + baseCls + "center");	this.topBorderEl = $("#" + id + " > div > " + baseCls + "border-top");
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
						this._task = task;	this.__load(null, null, null, task);
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
								img.attr("src", info.enImg);				a.unbind("click");
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

	var ids=[{id:'2e31c2ae6b9e4b11956e138161259381', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'tbrUseApply', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'optNO', name:'xforms:output'},{id:'orgSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSltDept', name:'xforms:treeselect1', children:[{id:'37fa4280ec1f4df0aa9a1312ce0714ed', name:'xforms:label'},{id:'c9089ebfd9c04fbabb773b58b4f69063', name:'xforms:value'}]}]},{id:'psmSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSltPsm', name:'xforms:treeselect1', children:[{id:'2da65834583b429c85b4c7d9cc581306', name:'xforms:value'},{id:'fa7afb2af0ab439cb41bc50e9d32c689', name:'xforms:label'}]}]},{id:'iptApplyDate', name:'xforms:input'},{id:'grdSltKind', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default9', name:'xforms:value'}]},{id:'iptName', name:'xforms:input'},{id:'iptDemandDate', name:'xforms:input'},{id:'iptReturnDate', name:'xforms:input'},{id:'taApplyReason', name:'xforms:textarea'},{id:'taRequire', name:'xforms:textarea'},{id:'taRemark', name:'xforms:textarea'},{id:'standardProcessExecuteList', name:'/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList', children:[{id:'standardProcessExecuteList_collapse_panel_414802798', name:'/UI/system/components/collapsePanel.xbl.xml#collapsePanel', children:[{id:'standardProcessExecuteList_windowFrame_414802798', name:'/UI/system/components/windowFrame.xbl.xml#windowFrame'}]}]},{id:'assetUseApplyProcess', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'assetUseApplyProcess_processControlDialog', name:'xforms:dialog'},{id:'assetUseApplyProcess_processChartDialogID', name:'xforms:dialog'},{id:'assetUseApplyProcess_processConfirmDialog', name:'xforms:dialog', children:[{id:'0b0ef7bf9a9e4b2aa5d35d2cd04973dc', name:'xforms:trigger', children:[{id:'8cb9b9a2c8a4418388275854a7afaa43', name:'xforms:label'}]},{id:'df6b55ea356142d183bd36307ad7c1b8', name:'xforms:trigger', children:[{id:'8dc38cc1a446489d988460d562d986a9', name:'xforms:label'}]}]},{id:'assetUseApplyProcess_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'processChart', name:'/UI/system/components/processChart.xbl.xml#processChart', children:[{id:'GLOBAL_ID_821409732', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'GLOBAL_ID_N1664476049', name:'/UI/system/components/processChart.xbl.xml#processTrackChart', children:[{id:'bl2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]},{id:'GLOBAL_ID_N1843856613', name:'/UI/system/components/processChart.xbl.xml#processPertChart'}]}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'optNO');xf._a(null,'treeSltDept');xf._a('treeSltDept','37fa4280ec1f4df0aa9a1312ce0714ed');xf._a('treeSltDept','xf-itemset-0');xf._a(null,'treeSltPsm');xf._a('treeSltPsm','fa7afb2af0ab439cb41bc50e9d32c689');xf._a('treeSltPsm','xf-itemset-1');xf._a(null,'iptApplyDate');xf._a(null,'grdSltKind');xf._a('grdSltKind','xuiLabel3');xf._a('grdSltKind','default10');xf._a(null,'iptName');xf._a(null,'iptDemandDate');xf._a(null,'iptReturnDate');xf._a(null,'taApplyReason');xf._a(null,'taRequire');xf._a(null,'taRemark');xf._a(null,'0b0ef7bf9a9e4b2aa5d35d2cd04973dc');xf._a('0b0ef7bf9a9e4b2aa5d35d2cd04973dc','8cb9b9a2c8a4418388275854a7afaa43');xf._a(null,'df6b55ea356142d183bd36307ad7c1b8');xf._a('df6b55ea356142d183bd36307ad7c1b8','8dc38cc1a446489d988460d562d986a9');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dUseApply')/fApplyDeptID",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyDeptID')))));	
xf._b("true()",xf._f('true'));	
xf._b("'申请部门不能为空！'",xf._i("申请部门不能为空！"));	
xf._b("instance('dUseApply')/fApplyPsnID",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyPsnID')))));	
xf._b("'申请人不能为空！'",xf._i("申请人不能为空！"));	
xf._b("instance('dUseApply')/fApplyDate",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("'申请日期不能为空！'",xf._i("申请日期不能为空！"));	
xf._b("instance('dUseApply')/fApplyReason",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyReason')))));	
xf._b("'申请原因不能为空！'",xf._i("申请原因不能为空！"));	
xf._b("instance('dUseApply')",xf._f('instance',xf._i("dUseApply")));	
xf._b("(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')",xf._l(xf._f('call',xf._i("justep.Context.getRequestParameter"),xf._i("activity-pattern")), '=',xf._i("detail")));	
xf._b("instance('dUseApply')/version",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dUseApply')/fDemandDate",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fDemandDate')))));	
xf._b("instance('dUseApply')/fReturnDate",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fReturnDate')))));	
xf._b("instance('dUseApply')/fProcess",xf._g(xf._f('instance',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fProcess')))));	
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
xf._b("instance('dKind')/version",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dKind')/fLevel",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dKind')/fCreateTime",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dKind')/fUpdateTime",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
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
xf._b("data('dUseApply')/fKindID",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fKindID')))));	
xf._b("data('dUseApply')/fKind",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fKind')))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("OA_AS_Kind",xf._h(false, xf._k("child",xf._j('','OA_AS_Kind'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fDescription",xf._h(false, xf._k("child",xf._j('','fDescription'))));	
xf._b("fSequence",xf._h(false, xf._k("child",xf._j('','fSequence'))));	
xf._b("fUseStatus",xf._h(false, xf._k("child",xf._j('','fUseStatus'))));	
xf._b("fUseStatusName",xf._h(false, xf._k("child",xf._j('','fUseStatusName'))));	
xf._b("fParentCode",xf._h(false, xf._k("child",xf._j('','fParentCode'))));	
xf._b("fLevel",xf._h(false, xf._k("child",xf._j('','fLevel'))));	
xf._b("fURL",xf._h(false, xf._k("child",xf._j('','fURL'))));	
xf._b("fCreateOgnID",xf._h(false, xf._k("child",xf._j('','fCreateOgnID'))));	
xf._b("fCreateOgnName",xf._h(false, xf._k("child",xf._j('','fCreateOgnName'))));	
xf._b("fCreateDeptID",xf._h(false, xf._k("child",xf._j('','fCreateDeptID'))));	
xf._b("fCreateDeptName",xf._h(false, xf._k("child",xf._j('','fCreateDeptName'))));	
xf._b("fCreatePsnID",xf._h(false, xf._k("child",xf._j('','fCreatePsnID'))));	
xf._b("fCreatePsnName",xf._h(false, xf._k("child",xf._j('','fCreatePsnName'))));	
xf._b("fCreatePsnFID",xf._h(false, xf._k("child",xf._j('','fCreatePsnFID'))));	
xf._b("fCreateTime",xf._h(false, xf._k("child",xf._j('','fCreateTime'))));	
xf._b("fUpdatePsnID",xf._h(false, xf._k("child",xf._j('','fUpdatePsnID'))));	
xf._b("fUpdatePsnName",xf._h(false, xf._k("child",xf._j('','fUpdatePsnName'))));	
xf._b("fUpdateTime",xf._h(false, xf._k("child",xf._j('','fUpdateTime'))));	
xf._b("lINKCODE",xf._h(false, xf._k("child",xf._j('','lINKCODE'))));	
xf._b("data('dUseApply')/fName",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fName')))));	
xf._b("data('dUseApply')/fDemandDate",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fDemandDate')))));	
xf._b("data('dUseApply')/fReturnDate",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fReturnDate')))));	
xf._b("data('dUseApply')/fApplyReason",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fApplyReason')))));	
xf._b("data('dUseApply')/fRequire",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fRequire')))));	
xf._b("data('dUseApply')/fRemark",xf._g(xf._f('data',xf._i("dUseApply")),xf._h(false, xf._k("child",xf._j('','fRemark')))));	
xf._b("not(call('justep.XData.canDo','dUseApply','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dUseApply"),xf._i("Save"))));	
xf._b("call('standardProcessBar_getRowState') = 'new'",xf._l(xf._f('call',xf._i("standardProcessBar_getRowState")), '=',xf._i("new")));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xf._b("call('standardProcessBar_getBackRelevant') ",xf._f('call',xf._i("standardProcessBar_getBackRelevant")));	
xf._b("call('standardProcessBar_getAdvanceRelevant') ",xf._f('call',xf._i("standardProcessBar_getAdvanceRelevant")));	
xf._b("call('standardProcessBar_getTransferRelevant') ",xf._f('call',xf._i("standardProcessBar_getTransferRelevant")));	
xf._b("call('standardProcessBar_getSuspendRelevant') ",xf._f('call',xf._i("standardProcessBar_getSuspendRelevant")));	
xf._b("call('standardProcessBar_getAbortRelevant') ",xf._f('call',xf._i("standardProcessBar_getAbortRelevant")));	
xf._b("call('standardProcessBar_getCustomizedRelevant') ",xf._f('call',xf._i("standardProcessBar_getCustomizedRelevant")));	
xf._b("call('standardProcessBar_getProcessChartRelevant') ",xf._f('call',xf._i("standardProcessBar_getProcessChartRelevant")));	
xf._b("call('standardProcessBar_getExecuteListRelevant') ",xf._f('call',xf._i("standardProcessBar_getExecuteListRelevant")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action2,'mdMain', evt,false)});	
xforms.load_parts('vUseApply');	
var xf_model_xf_model_3 = new xforms.XFModel('xf-model-3',null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var data = justep.xbl('dUseApply'); var p = justep.xbl('assetUseApplyProcess'); if (data){ data.attachEvent(justep.XData.EVENT_REFRESHDATA_BEFORE, function(event){ /*if (p.isAutoFilter()){*/ var conceptName = event.source.getConceptAliasName(); var value = justep.Context.getProcessData1(); var condition = null; if (value){ condition = conceptName + "='" + value + "'"; }else{ condition = "1=0"; } event.source.setFilter("_process-filter_", condition); /*}else{ event.source.setFilter("_process-filter_", "1=1"); }*/ }, data); }else{ var msg = new justep.Message(justep.Message.JUSTEP230001, "'dUseApply'"); throw justep.Error.create(msg); }}));xf._p(justep('xf-model-3'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'xf-model-3', evt,false)});	
new xforms.XFDialog('assetUseApplyProcess_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_2=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('assetUseApplyProcess_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('assetUseApplyProcess'); process[callback](task, processControl, options); } justep('assetUseApplyProcess_processControlDialogIFrame').src="";});xf._p(justep('assetUseApplyProcess_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_2,'assetUseApplyProcess_processControlDialog', evt,false)});	
new xforms.XFDialog('assetUseApplyProcess_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){justep('assetUseApplyProcess_processChartDialogIFrame').src="";});xf._p(justep('assetUseApplyProcess_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_3,'assetUseApplyProcess_processChartDialogID', evt,false)});	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('assetUseApplyProcess_processChartDialogIFrame').src=url;});xf._p(justep('assetUseApplyProcess_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_4,'assetUseApplyProcess_processChartDialogID', evt,false)});	
new xforms.XFDialog('assetUseApplyProcess_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('assetUseApplyProcess_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('assetUseApplyProcess'); process[callback](task, processControl, options); }});xf._p(justep('assetUseApplyProcess_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'assetUseApplyProcess_processConfirmDialog', evt,false)});	
var xf_trigger_0b0ef7bf9a9e4b2aa5d35d2cd04973dc=new xforms.XFTrigger('0b0ef7bf9a9e4b2aa5d35d2cd04973dc',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('assetUseApplyProcess_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('assetUseApplyProcess_processConfirmDialog').close();}));xf._p(justep('0b0ef7bf9a9e4b2aa5d35d2cd04973dc'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'0b0ef7bf9a9e4b2aa5d35d2cd04973dc', evt,false)});	
var xf_trigger_df6b55ea356142d183bd36307ad7c1b8=new xforms.XFTrigger('df6b55ea356142d183bd36307ad7c1b8',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('assetUseApplyProcess_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('assetUseApplyProcess_processConfirmDialog').close();}));xf._p(justep('df6b55ea356142d183bd36307ad7c1b8'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'df6b55ea356142d183bd36307ad7c1b8', evt,false)});	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){tabFlowChartxforms_select(event)}));xf._p(justep('tabFlowChart'),"xforms-select",null,function(evt) { xforms.run(xf_action_action1,'tabFlowChart', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dUseApply_part_loaded = false;	
function load_dUseApply_part(callback){if (dUseApply_part_loaded) return;dUseApply_part_loaded = true;	
new xforms.XFInstance2('dUseApply','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dUseApply',null);	
xf._c('xf-bind-0','mdMain',"instance('dUseApply')/fApplyDeptID",null,null,"true()",null,null,null,"'申请部门不能为空！'");	
xf._c('xf-bind-1','mdMain',"instance('dUseApply')/fApplyPsnID",null,null,"true()",null,null,null,"'申请人不能为空！'");	
xf._c('xf-bind-2','mdMain',"instance('dUseApply')/fApplyDate",null,null,"true()",null,null,null,"'申请日期不能为空！'");	
xf._c('xf-bind-3','mdMain',"instance('dUseApply')/fApplyReason",null,null,"true()",null,null,null,"'申请原因不能为空！'");	
xf._c('xf-bind-4','mdMain',"instance('dUseApply')",null,"(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')",null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dUseApply')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dUseApply')/fApplyDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dUseApply')/fDemandDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dUseApply')/fReturnDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dUseApply')/fProcess","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dUseApply')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dUseApply')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dUseApply')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dUseApply')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dUseApply')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dUseApply')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dUseApply')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dUseApply')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dUseApply')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dUseApply')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dUseApply')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dUseApply')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dUseApply_part_init_loaded = false;	
function load_dUseApply_part_init(){if (dUseApply_part_init_loaded) return;dUseApply_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var dKind_part_loaded = false;	
function load_dKind_part(callback){if (dKind_part_loaded) return;dKind_part_loaded = true;	
new xforms.XFInstance2('dKind','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dKind',null);	
xf._c('xf-bind-22','mdMain',"instance('dKind')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dKind')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dKind')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dKind')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dKind_part_init_loaded = false;	
function load_dKind_part_init(){if (dKind_part_init_loaded) return;dKind_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_vUseApply(){if (justep("vUseApply").getAttribute('loaded') && justep("vUseApply").getAttribute('loaded') == 'true') return;justep("vUseApply").setAttribute('loaded', 'true');	
if(typeof(load_vUseApply_html) == 'function')load_vUseApply_html();	
var xf_output_optNO=new xforms.XFOutput('optNO',xf._q("data('dUseApply')/fNO"),null,null);	
var xf_model_mdOrg = new xforms.XFModel('mdOrg',null);	
new xforms.XFExtSelect({id:'treeSltDept',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dUseApply')/fApplyDeptID"),labelRef:xf._q("data('dUseApply')/fApplyDeptName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dOrg',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'rowid',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1170828540',onRowHasChildren:func_1123351550,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_mdPsm = new xforms.XFModel('mdPsm',null);	
new xforms.XFExtSelect({id:'treeSltPsm',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dUseApply')/fApplyPsnID"),labelRef:xf._q("data('dUseApply')/fApplyPsnName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dPsm',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'sPersonID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1189568089',onRowHasChildren:func_510475611,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'treeSltPsmDropdown',onCloseup:'startActivity.treeSltPsmCloseup'});	
xf._d('iptApplyDate','text',xf._q("data('dUseApply')/fApplyDate"),null,null,null,"yyyy-MM-dd",false,false);	
new xforms.XFExtSelect({id:'grdSltKind',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dUseApply')/fKindID"),labelRef:xf._q("data('dUseApply')/fKind"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dKind',columns:'OA_AS_Kind,fName,__c_,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OA_AS_Kind,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',valueColumn:'OA_AS_Kind',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'200px',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('iptName','text',xf._q("data('dUseApply')/fName"),null,null,null,null,false,false);	
xf._d('iptDemandDate','text',xf._q("data('dUseApply')/fDemandDate"),null,null,null,"yyyy-MM-dd",false,false);	
xf._d('iptReturnDate','text',xf._q("data('dUseApply')/fReturnDate"),null,null,null,"yyyy-MM-dd",false,false);	
xf._d('taApplyReason','textarea',xf._q("data('dUseApply')/fApplyReason"),null,null,null,null,false,false);	
xf._d('taRequire','textarea',xf._q("data('dUseApply')/fRequire"),null,null,null,null,false,false);	
xf._d('taRemark','textarea',xf._q("data('dUseApply')/fRemark"),null,null,null,null,false,false);	
}	
function load_vUseApply_xblinit(){if (justep("vUseApply").getAttribute('xblloaded') && justep("vUseApply").getAttribute('xblloaded') == 'true') return;justep("vUseApply").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('mdOrg').xformsObject.construct_part();	
if(xforms.ready)justep('mdPsm').xformsObject.construct_part();	
}	
var dOrg_part_loaded = false;	
function load_dOrg_part(callback){if (dOrg_part_loaded) return;dOrg_part_loaded = true;	
new xforms.XFInstance2('dOrg','mdOrg',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-26','mdOrg',"instance('dOrg')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdOrg',"instance('dOrg')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdOrg',"instance('dOrg')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrg_part_init_loaded = false;	
function load_dOrg_part_init(){if (dOrg_part_init_loaded) return;dOrg_part_init_loaded = true;	
if(xforms.ready)justep('mdOrg').xformsObject.construct_part();}	
var dPsm_part_loaded = false;	
function load_dPsm_part(callback){if (dPsm_part_loaded) return;dPsm_part_loaded = true;	
new xforms.XFInstance2('dPsm','mdPsm',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-29','mdPsm',"instance('dPsm')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdPsm',"instance('dPsm')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdPsm',"instance('dPsm')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dPsm_part_init_loaded = false;	
function load_dPsm_part_init(){if (dPsm_part_init_loaded) return;dPsm_part_init_loaded = true;	
if(xforms.ready)justep('mdPsm').xformsObject.construct_part();}	
var __actions__ = {	
};	
