
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/report.xbl.xml#report"] = _xbl_JSClassDefine_report;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processTrackChart"] = _xbl_JSClassDefine_processTrackChart;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processPertChart"] = _xbl_JSClassDefine_processPertChart;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/reportData.xbl.xml#data"] = _xbl_JSClassDefine_data;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processChart"] = _xbl_JSClassDefine_processChart;
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

function _xbl_JSClassDefine_report(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_report.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Utils.extend(this, justep.Report, null, true);
					this.initComponent();
				},
				initXBL2 : function() {
					this.initContent();
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
				"loadByPI" : function(pi){					if (pi != this._pi){
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

function _xbl_JSClassDefine_data(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_data.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			initXBL : function() {
				this._id = this.domNode.id;
				if (!this._id) {
					throw new Error("ReportData组件的id属性不能为空");
				}
				justep.Object.extend(this, new justep.ReportData(this.domNode.id,false));
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

	var ids=[{id:'wdwSendDoc', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabs', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'trigger2', name:'xforms:trigger', children:[{id:'default2', name:'xforms:label'}]},{id:'aSSIGNEDMANUFACTUREID1', name:'xforms:input'},{id:'pRODUCTMANUFACTUREID1', name:'xforms:input'},{id:'pRODUCTNAME1', name:'xforms:input'},{id:'dETECTIONOBJECTTYPE1', name:'xforms:input'},{id:'dEVICETYPE1', name:'xforms:input'},{id:'bUSINESSID1', name:'xforms:input'},{id:'lINEID1', name:'xforms:input'},{id:'aPPLICATIONDATE1', name:'xforms:input'},{id:'eXPECTENDINGDATE1', name:'xforms:input'},{id:'rECEIPTER1', name:'xforms:input'},{id:'rECEIPTDATE1', name:'xforms:input'},{id:'cONTACTPERSON1', name:'xforms:input'},{id:'cONTACTMOBILE1', name:'xforms:input'},{id:'cONTACTTELEPHONE1', name:'xforms:input'},{id:'cONTACTPOSTCODE1', name:'xforms:input'},{id:'cONTACTEMAIL1', name:'xforms:input'},{id:'cONTACTFAXNUMBER1', name:'xforms:input'},{id:'cONTACTADDRESS1', name:'xforms:input'},{id:'mNITLEMAIL1', name:'xforms:input'},{id:'cOMPILERENVIRONMENT1', name:'xforms:input'},{id:'pRODUCTSTYLE1', name:'xforms:input'},{id:'cOMPANYTYPE1', name:'xforms:input'},{id:'dEVELOPMENTTOOLS1', name:'xforms:input'},{id:'mNITLMOBILE1', name:'xforms:input'},{id:'mNITLPOSTCODE1', name:'xforms:input'},{id:'mNITLFAXNUMBER1', name:'xforms:input'},{id:'oPERATORID1', name:'xforms:input'},{id:'mNITLTELEPHONE1', name:'xforms:input'},{id:'mNITLADDRESS1', name:'xforms:input'},{id:'textarea2', name:'xforms:textarea'},{id:'textarea3', name:'xforms:textarea'},{id:'textarea4', name:'xforms:textarea'},{id:'textarea5', name:'xforms:textarea'},{id:'textarea6', name:'xforms:textarea'},{id:'textarea1', name:'xforms:textarea'},{id:'trigger1', name:'xforms:trigger'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'report1', name:'/UI/system/components/report.xbl.xml#report'}]},{id:'processChart', name:'/UI/system/components/processChart.xbl.xml#processChart', children:[{id:'GLOBAL_ID_2005339870', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'GLOBAL_ID_N1757500459', name:'/UI/system/components/processChart.xbl.xml#processTrackChart', children:[{id:'bl2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]},{id:'GLOBAL_ID_1260602278', name:'/UI/system/components/processChart.xbl.xml#processPertChart'}]}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'trigger2');xf._a('trigger2','default2');xf._a(null,'aSSIGNEDMANUFACTUREID1');xf._a(null,'pRODUCTMANUFACTUREID1');xf._a(null,'pRODUCTNAME1');xf._a(null,'dETECTIONOBJECTTYPE1');xf._a(null,'dEVICETYPE1');xf._a(null,'bUSINESSID1');xf._a(null,'lINEID1');xf._a(null,'aPPLICATIONDATE1');xf._a(null,'eXPECTENDINGDATE1');xf._a(null,'rECEIPTER1');xf._a(null,'rECEIPTDATE1');xf._a(null,'cONTACTPERSON1');xf._a(null,'cONTACTMOBILE1');xf._a(null,'cONTACTTELEPHONE1');xf._a(null,'cONTACTPOSTCODE1');xf._a(null,'cONTACTEMAIL1');xf._a(null,'cONTACTFAXNUMBER1');xf._a(null,'cONTACTADDRESS1');xf._a(null,'mNITLEMAIL1');xf._a(null,'cOMPILERENVIRONMENT1');xf._a(null,'pRODUCTSTYLE1');xf._a(null,'cOMPANYTYPE1');xf._a(null,'dEVELOPMENTTOOLS1');xf._a(null,'mNITLMOBILE1');xf._a(null,'mNITLPOSTCODE1');xf._a(null,'mNITLFAXNUMBER1');xf._a(null,'oPERATORID1');xf._a(null,'mNITLTELEPHONE1');xf._a(null,'mNITLADDRESS1');xf._a(null,'textarea2');xf._a(null,'textarea3');xf._a(null,'textarea4');xf._a(null,'textarea5');xf._a(null,'textarea6');xf._a(null,'textarea1');xf._a(null,'trigger1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/sDistributeTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sDistributeTime')))),'','');	
xf._b("instance('dataMain')/sCreateTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))),'','');	
xf._b("instance('dataMain')/sLastModifyTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sLastModifyTime')))),'','');	
xf._b("instance('dataMain')/sLimitTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))),'','');	
xf._b("instance('dataMain')/sWarningTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))),'','');	
xf._b("instance('dataMain')/sExecuteTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sExecuteTime')))),'','');	
xf._b("instance('dataMain')/sExpectStartTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sExpectStartTime')))),'','');	
xf._b("instance('dataMain')/sExpectFinishTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sExpectFinishTime')))),'','');	
xf._b("instance('dataMain')/sActualStartTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sActualStartTime')))),'','');	
xf._b("instance('dataMain')/sActualFinishTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sActualFinishTime')))),'','');	
xf._b("instance('dataMain')/sSequence",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sSequence')))),'','');	
xf._b("instance('dataMain')/version",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','version')))),'','');	
xf._b("instance('dataMain')/sEDField21",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEDField21')))),'','');	
xf._b("instance('dataMain')/sEDField22",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEDField22')))),'','');	
xf._b("instance('dataMain')/sEDField23",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEDField23')))),'','');	
xf._b("instance('dataMain')/sEDField24",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEDField24')))),'','');	
xf._b("instance('dataMain')/sEIField41",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEIField41')))),'','');	
xf._b("instance('dataMain')/sEIField42",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEIField42')))),'','');	
xf._b("instance('dataMain')/sEIField43",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEIField43')))),'','');	
xf._b("instance('dataMain')/sEIField44",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sEIField44')))),'','');	
xf._b("instance('dataMain')/sENField11",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sENField11')))),'','');	
xf._b("instance('dataMain')/sENField12",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sENField12')))),'','');	
xf._b("instance('dataMain')/sENField13",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sENField13')))),'','');	
xf._b("instance('dataMain')/sENField14",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sENField14')))),'','');	
xf._b("instance('dataMain')/sWithdraw",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sWithdraw')))),'','');	
xf._b("instance('testApplicationData')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))),'','');	
xf._b("instance('testApplicationData')/pRODUCTMANUFACTUREID",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','pRODUCTMANUFACTUREID')))),'','');	
xf._b("instance('testApplicationData')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))),'','');	
xf._b("instance('testApplicationData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))),'','');	
xf._b("instance('testApplicationData')/bUSINESSID",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))),'','');	
xf._b("instance('testApplicationData')/lINEID",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','lINEID')))),'','');	
xf._b("instance('testApplicationData')/aPPLICATIONDATE",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))),'','');	
xf._b("instance('testApplicationData')/eXPECTENDINGDATE",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))),'','');	
xf._b("instance('testApplicationData')/rECEIPTDATE",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','rECEIPTDATE')))),'','');	
xf._b("instance('testApplicationData')/COMPANY_PROMISE",xf._g(xf._f('instance',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','COMPANY_PROMISE')))),'','');	
xf._b("data('testApplicationData')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("data('testApplicationData')/wtName",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','wtName')))));	
xf._b("data('testApplicationData')/pRODUCTNAME",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','pRODUCTNAME')))));	
xf._b("data('testApplicationData')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("data('testApplicationData')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("data('testApplicationData')/bUSINESSIDCNAME",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME')))));	
xf._b("data('testApplicationData')/lINEID",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("data('testApplicationData')/aPPLICATIONDATE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))));	
xf._b("data('testApplicationData')/eXPECTENDINGDATE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("data('testApplicationData')/receipterName",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','receipterName')))));	
xf._b("data('testApplicationData')/rECEIPTDATE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','rECEIPTDATE')))));	
xf._b("data('testApplicationData')/cONTACTPERSON",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cONTACTPERSON')))));	
xf._b("data('testApplicationData')/cONTACTMOBILE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE')))));	
xf._b("data('testApplicationData')/cONTACTTELEPHONE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("data('testApplicationData')/cONTACTPOSTCODE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cONTACTPOSTCODE')))));	
xf._b("data('testApplicationData')/cONTACTEMAIL",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL')))));	
xf._b("data('testApplicationData')/cONTACTFAXNUMBER",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cONTACTFAXNUMBER')))));	
xf._b("data('testApplicationData')/cONTACTADDRESS",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cONTACTADDRESS')))));	
xf._b("data('testApplicationData')/mNITLEMAIL",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mNITLEMAIL')))));	
xf._b("data('testApplicationData')/cOMPILERENVIRONMENT",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cOMPILERENVIRONMENT')))));	
xf._b("data('testApplicationData')/pRODUCTSTYLE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','pRODUCTSTYLE')))));	
xf._b("data('testApplicationData')/cOMPANYTYPE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','cOMPANYTYPE')))));	
xf._b("data('testApplicationData')/dEVELOPMENTTOOLS",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','dEVELOPMENTTOOLS')))));	
xf._b("data('testApplicationData')/mNITLMOBILE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mNITLMOBILE')))));	
xf._b("data('testApplicationData')/mNITLPOSTCODE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mNITLPOSTCODE')))));	
xf._b("data('testApplicationData')/mNITLFAXNUMBER",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mNITLFAXNUMBER')))));	
xf._b("data('testApplicationData')/oPERATORNAME",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME')))));	
xf._b("data('testApplicationData')/mNITLTELEPHONE",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mNITLTELEPHONE')))));	
xf._b("data('testApplicationData')/mNITLADDRESS",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mNITLADDRESS')))));	
xf._b("data('testApplicationData')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("data('testApplicationData')/pRODUCTCONFIGURATION",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','pRODUCTCONFIGURATION')))));	
xf._b("data('testApplicationData')/aPPLICATIONFIELDS",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONFIELDS')))));	
xf._b("data('testApplicationData')/fEATURESANDMODELS",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','fEATURESANDMODELS')))));	
xf._b("data('testApplicationData')/tESTINGREQUIREMENTS",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','tESTINGREQUIREMENTS')))));	
xf._b("data('testApplicationData')/mEMO",xf._g(xf._f('data',xf._i("testApplicationData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dataMain','model1',null,null,null,null,null,null,null,null,'recNO',null,'whereVersion');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','model1',"instance('dataMain')/sDistributeTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dataMain')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dataMain')/sLastModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('dataMain')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dataMain')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('dataMain')/sExecuteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dataMain')/sExpectStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('dataMain')/sExpectFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('dataMain')/sActualStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('dataMain')/sActualFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('dataMain')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('dataMain')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('dataMain')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('dataMain')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('dataMain')/sEDField23","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('dataMain')/sEDField24","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('dataMain')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('dataMain')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('dataMain')/sEIField43","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('dataMain')/sEIField44","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('dataMain')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('dataMain')/sENField12","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('dataMain')/sENField13","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('dataMain')/sENField14","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('dataMain')/sWithdraw","xsd:integer",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){detectionProcessQueryDetail.model1ModelConstructDone(event)}));xf._p(justep('model1'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action2,'model1', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var testApplicationData_part_loaded = false;	
function load_testApplicationData_part(callback){if (testApplicationData_part_loaded) return;testApplicationData_part_loaded = true;	
new xforms.XFInstance2('testApplicationData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('testApplicationData',null);	
xf._c('xf-bind-25','model1',"instance('testApplicationData')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('testApplicationData')/pRODUCTMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('testApplicationData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('testApplicationData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('testApplicationData')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('testApplicationData')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('testApplicationData')/aPPLICATIONDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('testApplicationData')/eXPECTENDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('testApplicationData')/rECEIPTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-34','model1',"instance('testApplicationData')/COMPANY_PROMISE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var testApplicationData_part_init_loaded = false;	
function load_testApplicationData_part_init(){if (testApplicationData_part_init_loaded) return;testApplicationData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){detectionProcessQueryDetail.tabProcessChartSelect()}));xf._p(justep('tabProcessChart'),"xforms-select",null,function(evt) { xforms.run(xf_action_action1,'tabProcessChart', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){detectionProcessQueryDetail.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trigger2', evt,false)});	
xf._d('aSSIGNEDMANUFACTUREID1','text',xf._q("data('testApplicationData')/mANUFACTUREIDCNAME"),null,null,null,null,true,false);	
xf._d('pRODUCTMANUFACTUREID1','text',xf._q("data('testApplicationData')/wtName"),null,null,null,null,true,false);	
xf._d('pRODUCTNAME1','text',xf._q("data('testApplicationData')/pRODUCTNAME"),null,null,null,null,true,false);	
xf._d('dETECTIONOBJECTTYPE1','text',xf._q("data('testApplicationData')/dETECTIONOBJECTCNAME"),null,null,null,null,true,false);	
xf._d('dEVICETYPE1','text',xf._q("data('testApplicationData')/dEVICETYPECNAME"),null,null,null,null,true,false);	
xf._d('bUSINESSID1','text',xf._q("data('testApplicationData')/bUSINESSIDCNAME"),null,null,null,null,true,false);	
xf._d('lINEID1','text',xf._q("data('testApplicationData')/lINEID"),null,null,null,null,true,false);	
xf._d('aPPLICATIONDATE1','text',xf._q("data('testApplicationData')/aPPLICATIONDATE"),null,null,null,null,true,false);	
xf._d('eXPECTENDINGDATE1','text',xf._q("data('testApplicationData')/eXPECTENDINGDATE"),null,null,null,null,true,false);	
xf._d('rECEIPTER1','text',xf._q("data('testApplicationData')/receipterName"),null,null,null,null,true,false);	
xf._d('rECEIPTDATE1','text',xf._q("data('testApplicationData')/rECEIPTDATE"),null,null,null,null,true,false);	
xf._d('cONTACTPERSON1','text',xf._q("data('testApplicationData')/cONTACTPERSON"),null,null,null,null,true,false);	
xf._d('cONTACTMOBILE1','text',xf._q("data('testApplicationData')/cONTACTMOBILE"),null,null,null,null,true,false);	
xf._d('cONTACTTELEPHONE1','text',xf._q("data('testApplicationData')/cONTACTTELEPHONE"),null,null,null,null,true,false);	
xf._d('cONTACTPOSTCODE1','text',xf._q("data('testApplicationData')/cONTACTPOSTCODE"),null,null,null,null,true,false);	
xf._d('cONTACTEMAIL1','text',xf._q("data('testApplicationData')/cONTACTEMAIL"),null,null,null,null,true,false);	
xf._d('cONTACTFAXNUMBER1','text',xf._q("data('testApplicationData')/cONTACTFAXNUMBER"),null,null,null,null,true,false);	
xf._d('cONTACTADDRESS1','text',xf._q("data('testApplicationData')/cONTACTADDRESS"),null,null,null,null,true,false);	
xf._d('mNITLEMAIL1','text',xf._q("data('testApplicationData')/mNITLEMAIL"),null,null,null,null,true,false);	
xf._d('cOMPILERENVIRONMENT1','text',xf._q("data('testApplicationData')/cOMPILERENVIRONMENT"),null,null,null,null,true,false);	
xf._d('pRODUCTSTYLE1','text',xf._q("data('testApplicationData')/pRODUCTSTYLE"),null,null,null,null,true,false);	
xf._d('cOMPANYTYPE1','text',xf._q("data('testApplicationData')/cOMPANYTYPE"),null,null,null,null,true,false);	
xf._d('dEVELOPMENTTOOLS1','text',xf._q("data('testApplicationData')/dEVELOPMENTTOOLS"),null,null,null,null,true,false);	
xf._d('mNITLMOBILE1','text',xf._q("data('testApplicationData')/mNITLMOBILE"),null,null,null,null,true,false);	
xf._d('mNITLPOSTCODE1','text',xf._q("data('testApplicationData')/mNITLPOSTCODE"),null,null,null,null,true,false);	
xf._d('mNITLFAXNUMBER1','text',xf._q("data('testApplicationData')/mNITLFAXNUMBER"),null,null,null,null,true,false);	
xf._d('oPERATORID1','text',xf._q("data('testApplicationData')/oPERATORNAME"),null,null,null,null,true,false);	
xf._d('mNITLTELEPHONE1','text',xf._q("data('testApplicationData')/mNITLTELEPHONE"),null,null,null,null,true,false);	
xf._d('mNITLADDRESS1','text',xf._q("data('testApplicationData')/mNITLADDRESS"),null,null,null,null,true,false);	
xf._d('textarea2','textarea',xf._q("data('testApplicationData')/dECTIONBASEDONNAME"),null,null,null,null,true,false);	
xf._d('textarea3','textarea',xf._q("data('testApplicationData')/pRODUCTCONFIGURATION"),null,null,null,null,true,false);	
xf._d('textarea4','textarea',xf._q("data('testApplicationData')/aPPLICATIONFIELDS"),null,null,null,null,true,false);	
xf._d('textarea5','textarea',xf._q("data('testApplicationData')/fEATURESANDMODELS"),null,null,null,null,true,false);	
xf._d('textarea6','textarea',xf._q("data('testApplicationData')/tESTINGREQUIREMENTS"),null,null,null,null,true,false);	
xf._d('textarea1','textarea',xf._q("data('testApplicationData')/mEMO"),null,null,null,null,true,false);	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,"/UI/metrodetection/detection_Process_Related/process/detectionProcessQuery/images/move_down.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){detectionProcessQueryDetail.trigger1Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'trigger1', evt,false)});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
xforms.load_parts('view3');	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
xforms.refresh(justep("view2"));	
justep.XBLObject.loadXBL(justep("view2"));}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
function load_vProcessChart(){if (justep("vProcessChart").getAttribute('loaded') && justep("vProcessChart").getAttribute('loaded') == 'true') return;justep("vProcessChart").setAttribute('loaded', 'true');	
if(typeof(load_vProcessChart_html) == 'function')load_vProcessChart_html();	
}	
function load_vProcessChart_xblinit(){if (justep("vProcessChart").getAttribute('xblloaded') && justep("vProcessChart").getAttribute('xblloaded') == 'true') return;justep("vProcessChart").setAttribute('xblloaded', 'true');	
xforms.refresh(justep("vProcessChart"));	
justep.XBLObject.loadXBL(justep("vProcessChart"));}	
var __actions__ = {	
};	
function load_view2_html(){var a = [];a.push('<div class="component_D66742E1 toolbars" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1" style="position:absolute;left:10px;top:5px;width:619px;height:37px;" >');a.push('<table cellpadding="0" cellspacing="0" style="width:100%" >');a.push('<tr>');a.push('<td>');a.push('<div class="toolbar-manager" name="toolbarmanager" width="100%" >');a.push('<div class="toolbar-style" name="toolbargroup" >');a.push('<table cellpadding="0" cellspacing="1px" >');a.push('<tr>');a.push('<td class="groupanchor" name="group_anchor" onmouseout="this.style.border=\'1px solid #dfe8f6\';" onmouseover="this.style.border=\'1px ridge\';" width="5" >');a.push('<img align="absmiddle" class="standard-btn" src="/x5/$v32783cab2d684bb8b3a94efe2ee7d4c3/UI/system/images/standardToolbar/standard/group.gif?language=zh_CN" >');a.push('</img>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<table id="barItem1" model="model1" onclick="justep.xbl(\'report1\').pageSetup();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<tr align="center" valign="middle" >');a.push('<td align="center" valign="middle" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/print_page_setup_g.gif" src="/x5/$v08671ac6c2a1447dbdb0f7541a391ea0/UI/system/images/report/print_page_setup.gif?language=zh_CN" style="border:none" title="页面设置" >');a.push('</img>');a.push('</td>');a.push('<td align="center" class="xforms-trigger-label" valign="middle" >');a.push('页面设置');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<table id="barItem2" model="model1" onclick="justep.xbl(\'report1\').preview();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<tr align="center" valign="middle" >');a.push('<td align="center" valign="middle" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/print_preview_g.gif" src="/x5/$v8be99bb26ca54b68886c682c9b689180/UI/system/images/report/print_preview.gif?language=zh_CN" style="border:none" title="打印预览" >');a.push('</img>');a.push('</td>');a.push('<td align="center" class="xforms-trigger-label" valign="middle" >');a.push('打印预览');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<table id="barItem3" model="model1" onclick="justep.xbl(\'report1\').print();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<tr align="center" valign="middle" >');a.push('<td align="center" valign="middle" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/print_print_g.gif" src="/x5/$vc595c7aa64294434a9d30a211cbd0b8f/UI/system/images/report/print_print.gif?language=zh_CN" style="border:none" title="打印" >');a.push('</img>');a.push('</td>');a.push('<td align="center" class="xforms-trigger-label" valign="middle" >');a.push('打印');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<div class="toolbar-manager" name="toolbarmanager" width="100%" >');a.push('<div class="toolbar-style" name="toolbargroup" >');a.push('<table cellpadding="0" cellspacing="1px" >');a.push('<tr>');a.push('<td class="groupanchor" name="group_anchor" onmouseout="this.style.border=\'1px solid #dfe8f6\';" onmouseover="this.style.border=\'1px ridge\';" width="5" >');a.push('<img align="absmiddle" class="standard-btn" src="/x5/$vd10b8f3142bb4cdb809de75f128775e0/UI/system/images/standardToolbar/standard/group.gif?language=zh_CN" >');a.push('</img>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<table id="barItem4" model="model1" onclick="justep.xbl(\'report1\').exportPDF();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<tr align="center" valign="middle" >');a.push('<td align="center" valign="middle" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/export_pdf_g.gif" src="/x5/$v097cf24c14a444a89f6eb71e4b43cec3/UI/system/images/report/export_pdf.gif?language=zh_CN" style="border:none" title="导出为PDF文件" >');a.push('</img>');a.push('</td>');a.push('<td align="center" class="xforms-trigger-label" valign="middle" >');a.push('导出为PDF文件');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<table id="barItem5" model="model1" onclick="justep.xbl(\'report1\').exportWord();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<tr align="center" valign="middle" >');a.push('<td align="center" valign="middle" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/export_word_g.gif" src="/x5/$v042ea12a62b04cb6809d4856e5b7525d/UI/system/images/report/export_word.gif?language=zh_CN" style="border:none" title="导出为Word文档" >');a.push('</img>');a.push('</td>');a.push('<td align="center" class="xforms-trigger-label" valign="middle" >');a.push('导出为Word文档');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<table id="barItem6" model="model1" onclick="justep.xbl(\'report1\').exportExcel();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<tr align="center" valign="middle" >');a.push('<td align="center" valign="middle" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/export_excel_.gif" src="/x5/$ve4d1003d2f3242318cf6077f7be0085c/UI/system/images/report/export_excel.gif?language=zh_CN" style="border:none" title="导出为Excel工作簿" >');a.push('</img>');a.push('</td>');a.push('<td align="center" class="xforms-trigger-label" valign="middle" >');a.push('导出为Excel工作簿');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</div>');a.push('</td>');a.push('<td style="width:100%" >');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('<div class="xui-container" id="view3" lazy="false" style="position:relative;;position:absolute;height:167px;top:34px;left:4px;border-color:#FFFFFF #FFFFFF #FFFFFF #FFFFFF;width:746px;" >');a.push('<div auto-load="false" class="xui-report component_2BF03861 report" column-width="1" component="/UI/system/components/report.xbl.xml#report" data-list="reportData" id="report1" report-name="流程记录" src="" style="position:absolute;top:5px;left:72px;height:149px;width:764px;" >');a.push('<span cacheFile="%2FUI%2Fmetrodetection%2Fdetection_Process_Related%2Fprocess%2FdetectionProcessQuery%2F.cache%2FdetectionProcessQueryDetail.report" dataList="reportData" marginBottom="2.4mm" marginFootter="" marginHeader="" marginLeft="3.7mm" marginRight="3.7mm" marginTop="2.4mm" orientation="" pageHeight="297mm" pageWidth="210mm" paperType="A4" style="display:none" xblid="attribute" >');a.push('</span>');a.push('<div id="report_report1_content" report-name="流程记录" style="width:100%;height:100%;" >');a.push('</div>');a.push('<iframe name="report_report1_frame" onReadyStateChange="var xbl=justep.xbl(\'report1\'); if (xbl != null) xbl._hideWaittingDialog()" style="position:absolute;top:-1000px;left:-1000px;width:1px;height:1px;" >');a.push('</iframe>');a.push('</div>');a.push('</div>');justep('view2').innerHTML = a.join('');}function load_vProcessChart_html(){var a = [];a.push('<div class="component_4D3D41 processChart" component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart" style="height:100%;width:100%;" >');a.push('<div pertID="GLOBAL_ID_1260602278" style="display:none" trackID="GLOBAL_ID_N1757500459" xblid="interface" >');a.push('</div>');a.push('<div class="component_478DC2A1 tabs" component="/UI/system/components/tabs.xbl.xml#tabs" id="GLOBAL_ID_2005339870" style="width:100%;height:100%;overflow:auto;" >');a.push('<div class="jstabbar" id="GLOBAL_ID_2005339870_root" >');a.push('<ul class="tabItems clearfix" >');a.push('<li class="selected" id="GLOBAL_ID_2090149454_tab" >');a.push('<button class="selected" onclick="this.parentNode.parentNode.parentNode.parentNode.tabbar.setTabActive(\'GLOBAL_ID_2090149454\');this.blur();" type="button" >');a.push('轨迹图');a.push('</button>');a.push('</li>');a.push('<li id="GLOBAL_ID_1203356025_tab" >');a.push('<button onclick="this.parentNode.parentNode.parentNode.parentNode.tabbar.setTabActive(\'GLOBAL_ID_1203356025\');this.blur();" type="button" >');a.push('波特图');a.push('</button>');a.push('</li>');a.push('</ul>');a.push('<div class="contents" id="GLOBAL_ID_2005339870_contents" >');a.push('<div class="content selected" id="GLOBAL_ID_2090149454" >');a.push('<div class="component_8CF08DD0 processTrackChart" component="/UI/system/components/processChart.xbl.xml#processTrackChart" ext="" id="GLOBAL_ID_N1757500459" onTrackItemClick="" style="height:100%;" >');a.push('<div style="display:none" >');a.push('<div chartControlID="track_GLOBAL_ID_1387293217" xblid="interface" >');a.push('</div>');a.push('</div>');a.push('<div class="component_8F7B2FA1 borderLayout" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="bl2" style="height:100%;" >');a.push('<div borderSize="0" class="xui-borderlayout-root" >');a.push('<div class="xui-borderlayout-area xui-borderlayout-top" size="40px" style="" >');a.push('<table>');a.push('<tr>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:green; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td align="" >');a.push('<span>');a.push('已经过');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:black; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('未经过');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:red; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('回退');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:#0080FF; border:1px #0080FF solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('当前环节');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:green; border:1px green solid; width:100%;height:20px; border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已处理');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:#ff6666; border:1px #ff6666 solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已终止');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:yellow; border:1px yellow solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已暂停');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('<div class="xui-borderlayout-border xui-borderlayout-border-top" style="height:0" >');a.push('</div>');a.push('<div class="xui-borderlayout-area xui-borderlayout-center" style="overflow:auto;" >');a.push('<div id="track_GLOBAL_ID_1387293217" style="width:100%;height:100%;overflow:auto;" >');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('<div class="content" id="GLOBAL_ID_1203356025" >');a.push('<div class="component_4502B30A processPertChart" component="/UI/system/components/processChart.xbl.xml#processPertChart" ext="" id="GLOBAL_ID_1260602278" onPertItemClick="" style="height:100%;" >');a.push('<div style="display:none" >');a.push('<div chartControlID="bot_GLOBAL_ID_N143625353" xblid="interface" >');a.push('</div>');a.push('</div>');a.push('<div id="bot_GLOBAL_ID_N143625353" style="width:100%;height:100%;overflow:auto;" >');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');justep('vProcessChart').innerHTML = a.join('');}