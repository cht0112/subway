
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
				this.tabbar= new justep.JSTabbar(this.domNode.id);
				$.extend(this,this.tabbar);
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
					justep.Object.extend(this, new justep.Report(this));
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
					var processChartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task);
					this.__loadByChartData(processChartData);
				},
				"__loadByChartData": function(chartData) {
					var interface = this.getElementByXblID("interface");
					__wfLoadTrack(interface.getAttribute('chartControlID'), chartData);
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

//				area.css({overflow:'hidden'});	
//				area.css({overflow:'auto'});
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
					var processChartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task);
					this.__loadByChartData(processChartData);
				},
				"__loadByChartData": function(chartData) {
					var interface = this.getElementByXblID("interface");
					__wfLoadBot(interface.getAttribute('chartControlID'), chartData);
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
					//todo: 相似组件以后可以集中统一触发一次 
					//xforms.XMLEvents.dispatch(justep.xbl(model), "xforms-refresh");
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
				"_chartData" : null,		"_botLoaded" : false,
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
					this._chartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task);
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

	var ids=[{id:'wdwSendDoc', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabs', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'input1', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default4', name:'xforms:label'},{id:'default5', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default44', name:'xforms:label'},{id:'default45', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default55', name:'xforms:label'},{id:'default56', name:'xforms:value'}]},{id:'input2', name:'xforms:input'},{id:'input3', name:'xforms:input'},{id:'textarea7', name:'xforms:textarea'},{id:'grid1', name:'xforms:grid'},{id:'trigger2', name:'xforms:trigger', children:[{id:'default22', name:'xforms:label'}]},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'report1', name:'/UI/system/components/report.xbl.xml#report'}]},{id:'processChart', name:'/UI/system/components/processChart.xbl.xml#processChart', children:[{id:'GLOBAL_ID_N1902949574', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'GLOBAL_ID_N928619051', name:'/UI/system/components/processChart.xbl.xml#processTrackChart', children:[{id:'bl2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]},{id:'GLOBAL_ID_N824799294', name:'/UI/system/components/processChart.xbl.xml#processPertChart'}]}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'input1');xf._a(null,'gridSelect1');xf._a('gridSelect1','default4');xf._a('gridSelect1','default6');xf._a(null,'gridSelect2');xf._a('gridSelect2','default44');xf._a('gridSelect2','default46');xf._a(null,'gridSelect3');xf._a('gridSelect3','default55');xf._a('gridSelect3','default57');xf._a(null,'input2');xf._a(null,'input3');xf._a(null,'textarea7');xf._a(null,'grid1');xf._a(null,'trigger2');xf._a('trigger2','default22');function init() {	
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
xf._b("instance('testSchemeBaseInfoD')/bUSINESSID",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/vALIDSTATE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/VALID_STATE_CODE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','VALID_STATE_CODE')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/DECTION_BASED_ON_INFO",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO')))),'','');	
xf._b("instance('testSchemeBaseInfoD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))),'','');	
xf._b("instance('dectionBaseInfoD')/vALIDDATETIME",xf._g(xf._f('instance',xf._i("dectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDDATETIME')))),'','');	
xf._b("instance('dectionBaseInfoD')/vALIDSTATE",xf._g(xf._f('instance',xf._i("dectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))),'','');	
xf._b("instance('dectionBaseInfoD')/version",xf._g(xf._f('instance',xf._i("dectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','version')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/bUSINESSID",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/bUSINESSSTAGE1",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE1')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))),'','');	
xf._b("instance('testSchemeCaseInfoD')/dEVICETYPE1",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE1')))),'','');	
xf._b("instance('testCaseBaseInfoD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))),'','');	
xf._b("instance('testCaseBaseInfoD')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))),'','');	
xf._b("instance('testCaseBaseInfoD')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))),'','');	
xf._b("instance('testCaseBaseInfoD')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))),'','');	
xf._b("instance('testCaseBaseInfoD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))),'','');	
xf._b("instance('testCaseBaseInfoD')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))),'','');	
xf._b("instance('testCaseBaseInfoD')/dEVICETYPE",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))),'','');	
xf._b("instance('testCaseBaseInfoD')/DECTION_BASED_ON_INFO",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO')))),'','');	
xf._b("instance('businessStageD')/bUSINESSID",xf._g(xf._f('instance',xf._i("businessStageD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))),'','');	
xf._b("instance('businessStageD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("businessStageD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))),'','');	
xf._b("data('testSchemeBaseInfoD')/tESTSCHEMENAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMENAME')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('testSchemeBaseInfoD')/dECTIONBASEDONID",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("data('testSchemeBaseInfoD')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("dECTIONBASEDONNAME",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME'))));	
xf._b("DECTION_BASED_ON_INFO",xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO'))));	
xf._b("vALIDDATETIME",xf._h(false, xf._k("child",xf._j('','vALIDDATETIME'))));	
xf._b("vALIDSTATE",xf._h(false, xf._k("child",xf._j('','vALIDSTATE'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("data('testSchemeBaseInfoD')/bUSINESSID",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("data('testSchemeBaseInfoD')/bUSINESSIDCNAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME')))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("BUSINESS_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE'))));	
xf._b("bUSINESSIDENAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDENAME'))));	
xf._b("data('testSchemeBaseInfoD')/vALIDSTATE",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("data('testSchemeBaseInfoD')/vALIDSTATECNAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATECNAME')))));	
xf._b("vALIDSTATECNAME",xf._h(false, xf._k("child",xf._j('','vALIDSTATECNAME'))));	
xf._b("VALID_STATE_CODE",xf._h(false, xf._k("child",xf._j('','VALID_STATE_CODE'))));	
xf._b("vALIDSTATEENAME",xf._h(false, xf._k("child",xf._j('','vALIDSTATEENAME'))));	
xf._b("data('testSchemeBaseInfoD')/mAKEDATETIME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("data('testSchemeBaseInfoD')/bUSINESSSTAGECNAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGECNAME')))));	
xf._b("data('testSchemeBaseInfoD')/tESTSCHEMEDESC",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEDESC')))));	
xf._b("tESTCASEVER",xf._h(false, xf._k("child",xf._j('','tESTCASEVER'))));	
xf._b("tESTCASEID",xf._h(false, xf._k("child",xf._j('','tESTCASEID'))));	
xf._b("bUSINESSSTAGECNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGECNAME'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xf._b("not(call('justep.XData.canDo','testSchemeBaseInfoD','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("testSchemeBaseInfoD"),xf._i("Save"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
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
var xf_action_action40=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){schemeProcessQueryDetail.model1ModelConstructDone(event)}));xf._p(justep('model1'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action40,'model1', evt,false)});	
new xforms.XFInstance2('testSchemeBaseInfoD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('testSchemeBaseInfoD',null);	
xf._c('xf-bind-25','model1',"instance('testSchemeBaseInfoD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('testSchemeBaseInfoD')/dECTIONBASEDONID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('testSchemeBaseInfoD')/mAKEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('testSchemeBaseInfoD')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('testSchemeBaseInfoD')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('testSchemeBaseInfoD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('testSchemeBaseInfoD')/VALID_STATE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('testSchemeBaseInfoD')/DECTION_BASED_ON_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('testSchemeBaseInfoD')/bUSINESSSTAGE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dectionBaseInfoD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dectionBaseInfoD',null);	
xf._c('xf-bind-34','model1',"instance('dectionBaseInfoD')/vALIDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-35','model1',"instance('dectionBaseInfoD')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','model1',"instance('dectionBaseInfoD')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('businessTypeCodeD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('businessTypeCodeD',null);	
new xforms.XFInstance2('validStateCodeD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('validStateCodeD',null);	
new xforms.XFInstance2('testSchemeCaseInfoD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('testSchemeCaseInfoD',null);	
xf._c('xf-bind-37','model1',"instance('testSchemeCaseInfoD')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('testSchemeCaseInfoD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('testSchemeCaseInfoD')/bUSINESSSTAGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','model1',"instance('testSchemeCaseInfoD')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('testSchemeCaseInfoD')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('testSchemeCaseInfoD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-43','model1',"instance('testSchemeCaseInfoD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','model1',"instance('testSchemeCaseInfoD')/bUSINESSSTAGE1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-45','model1',"instance('testSchemeCaseInfoD')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','model1',"instance('testSchemeCaseInfoD')/dEVICETYPE1","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('testCaseBaseInfoD','model1',null,null,null,null,null,null,null,null,'checkBox,serialNumber',null,'whereAll');	
xf._c('xf-bind-47','model1',"instance('testCaseBaseInfoD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-48','model1',"instance('testCaseBaseInfoD')/mAKEDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-49','model1',"instance('testCaseBaseInfoD')/dECTIONBASEDONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-50','model1',"instance('testCaseBaseInfoD')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-51','model1',"instance('testCaseBaseInfoD')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-52','model1',"instance('testCaseBaseInfoD')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-53','model1',"instance('testCaseBaseInfoD')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-54','model1',"instance('testCaseBaseInfoD')/DECTION_BASED_ON_INFO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('businessCD','model1',null,'<rows id="default30"><row id="default31"><cell id="default32"></cell><cell id="default33"></cell><cell id="default34"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('businessCD','businessId,businessStage,businessStageName');	
new xforms.XFInstance2('businessStageD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('businessStageD',null);	
xf._c('xf-bind-55','model1',"instance('businessStageD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','model1',"instance('businessStageD')/bUSINESSSTAGE","xsd:float",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){schemeProcessQueryDetail.tabProcessChartSelect()}));xf._p(justep('tabProcessChart'),"xforms-select",null,function(evt) { xforms.run(xf_action_action1,'tabProcessChart', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xf._d('input1','text',xf._q("data('testSchemeBaseInfoD')/tESTSCHEMENAME"),null,null,null,null,false,true);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('testSchemeBaseInfoD')/dECTIONBASEDONID"),labelRef:xf._q("data('testSchemeBaseInfoD')/dECTIONBASEDONNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'dectionBaseInfoD',columns:'DECTION_BASED_ON_INFO,dECTIONBASEDONNAME,vALIDDATETIME,vALIDSTATE,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DECTION_BASED_ON_INFO,vALIDDATETIME,vALIDSTATE,version',valueColumn:'DECTION_BASED_ON_INFO',labelColumn:'dECTIONBASEDONNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('testSchemeBaseInfoD')/bUSINESSID"),labelRef:xf._q("data('testSchemeBaseInfoD')/bUSINESSIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessTypeCodeD',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'BUSINESS_TYPE_CODE,bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('testSchemeBaseInfoD')/vALIDSTATE"),labelRef:xf._q("data('testSchemeBaseInfoD')/vALIDSTATECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'validStateCodeD',columns:'VALID_STATE_CODE,vALIDSTATECNAME,vALIDSTATEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'VALID_STATE_CODE,vALIDSTATEENAME',valueColumn:'VALID_STATE_CODE',labelColumn:'vALIDSTATECNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('input2','text',xf._q("data('testSchemeBaseInfoD')/mAKEDATETIME"),null,null,null,null,false,true);	
xf._d('input3','text',xf._q("data('testSchemeBaseInfoD')/bUSINESSSTAGECNAME"),null,null,null,null,false,true);	
xf._d('textarea7','textarea',xf._q("data('testSchemeBaseInfoD')/tESTSCHEMEDESC"),null,null,null,null,false,true);	
new xforms.XFGrid({id:'grid1',instance:'testSchemeCaseInfoD',systemColumnsPro:'tESTSCHEMEID,bUSINESSID,bUSINESSSTAGE,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,BUSINESS_TYPE_CODE,bUSINESSIDCNAME,bUSINESSSTAGE1,DETECTION_OBJECT_TYPE,dEVICETYPE1',onInit:null,type:'grid',smartRender:20,delay:false,ids:'tESTCASEVER,tESTCASEID,bUSINESSSTAGECNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME',headNames:'测试用例版本,测试用例ID,业务阶段,检测对象类型,检测对象',widths:'105,145,127,131,173',types:'ro,ro,ro,ro,ro',hiddenColumns:'',aligns:',,,,',serverSort:true,sorts:'na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,"/UI/metrodetection/testing_standard/process/testSchemeProcessQuery/images/move_down.gif",null,false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){schemeProcessQueryDetail.trigger1Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trigger2', evt,false)});	
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
		function load_view2_html(){var a = [];a.push('<div class="component_D66742E1 toolbars" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1" style="position:absolute;left:10px;width:400px;top:5px;height:25px;" >');a.push('<table cellpadding="0" cellspacing="0" style="width:100%" >');a.push('<tr>');a.push('<td>');a.push('<div class="toolbar-manager" name="toolbarmanager" width="100%" >');a.push('<div class="toolbar-style" name="toolbargroup" >');a.push('<table cellpadding="0" cellspacing="1px" >');a.push('<tr>');a.push('<td class="groupanchor" name="group_anchor" onmouseout="this.style.border=\'1px solid #dfe8f6\';" onmouseover="this.style.border=\'1px ridge\';" width="5" >');a.push('<img align="absmiddle" class="standard-btn" src="/x5/$v2229_dbdf89712932f4741add52983e3a28edf/UI/system/images/standardToolbar/standard/group.gif?language=zh_CN" >');a.push('</img>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<span id="barItem1" model="model1" onclick="justep.xbl(\'report1\').pageSetup();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/print_page_setup_g.gif" src="/x5/$v2229_d1cd66f94ba3f4b0bbce162f059d2979d/UI/system/images/report/print_page_setup.gif?language=zh_CN" style="border:none" title="页面设置" >');a.push('</img>');a.push('</span>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<span id="barItem2" model="model1" onclick="justep.xbl(\'report1\').preview();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/print_preview_g.gif" src="/x5/$v2229_d16bc11810524404c89ba9d9251e52d8c/UI/system/images/report/print_preview.gif?language=zh_CN" style="border:none" title="打印预览" >');a.push('</img>');a.push('</span>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<span id="barItem3" model="model1" onclick="justep.xbl(\'report1\').print();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/print_print_g.gif" src="/x5/$v2229_dc08bf7cfbb6340c081f3e53ccbc8e1ce/UI/system/images/report/print_print.gif?language=zh_CN" style="border:none" title="打印" >');a.push('</img>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<div class="toolbar-manager" name="toolbarmanager" width="100%" >');a.push('<div class="toolbar-style" name="toolbargroup" >');a.push('<table cellpadding="0" cellspacing="1px" >');a.push('<tr>');a.push('<td class="groupanchor" name="group_anchor" onmouseout="this.style.border=\'1px solid #dfe8f6\';" onmouseover="this.style.border=\'1px ridge\';" width="5" >');a.push('<img align="absmiddle" class="standard-btn" src="/x5/$v2229_df0fdc56e586b4beaacb0740ebd0b327b/UI/system/images/standardToolbar/standard/group.gif?language=zh_CN" >');a.push('</img>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<span id="barItem4" model="model1" onclick="justep.xbl(\'report1\').exportPDF();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/export_pdf_g.gif" src="/x5/$v2229_d07faac59aab24bce84ed299f9af0746a/UI/system/images/report/export_pdf.gif?language=zh_CN" style="border:none" title="导出为PDF文件" >');a.push('</img>');a.push('</span>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<span id="barItem5" model="model1" onclick="justep.xbl(\'report1\').exportWord();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/export_word_g.gif" src="/x5/$v2229_d8ba0f54ee5e64a539ead11e9ba40799f/UI/system/images/report/export_word.gif?language=zh_CN" style="border:none" title="导出为Word文档" >');a.push('</img>');a.push('</span>');a.push('</td>');a.push('<td class="toolbar-item-style" onmousedown="this.className=\'toolbar-item-style-down\';" onmouseout="this.className=\'toolbar-item-style-out\';" onmouseover="this.className=\'toolbar-item-style-over\';" onmouseup="this.className=\'toolbar-item-style-up\';" >');a.push('<span id="barItem6" model="model1" onclick="justep.xbl(\'report1\').exportExcel();" readonly="call(\'justep.Context.isReadonlyMode\')" >');a.push('<img align="absmiddle" class="xforms-trigger-img" dis-src="/UI/system/images/report/export_excel_.gif" src="/x5/$v2229_d99604aebcee942e7a741dab45b998d92/UI/system/images/report/export_excel.gif?language=zh_CN" style="border:none" title="导出为Excel工作簿" >');a.push('</img>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</div>');a.push('</td>');a.push('<td style="width:100%" >');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('<div class="xui-container" id="view3" lazy="false" style="position:relative;;position:absolute;height:167px;top:34px;left:4px;border-color:#FFFFFF #FFFFFF #FFFFFF #FFFFFF;width:746px;" >');a.push('<div auto-load="false" class="xui-report component_2BF03861 report" column-width="1" component="/UI/system/components/report.xbl.xml#report" data-list="reportData" id="report1" report-name="流程记录" src="" style="position:absolute;top:5px;height:149px;left:-3px;width:684px;" >');a.push('<span cacheFile="%2FUI%2Fmetrodetection%2Ftesting_standard%2Fprocess%2FtestSchemeProcessQuery%2F.cache%2FschemeProcessQueryDetail.report" dataList="reportData" marginBottom="2.4mm" marginFootter="" marginHeader="" marginLeft="3.7mm" marginRight="3.7mm" marginTop="2.4mm" orientation="" pageHeight="297mm" pageWidth="210mm" paperType="A4" style="display:none" xblid="attribute" >');a.push('</span>');a.push('<div id="report_report1_content" report-name="流程记录" style="width:100%;height:100%;" >');a.push('</div>');a.push('<iframe name="report_report1_frame" onReadyStateChange="var xbl=justep.xbl(\'report1\'); if (xbl != null) xbl._hideWaittingDialog()" style="position:absolute;top:-1000px;left:-1000px;width:1px;height:1px;" >');a.push('</iframe>');a.push('</div>');a.push('</div>');justep('view2').innerHTML = a.join('');}function load_vProcessChart_html(){var a = [];a.push('<div class="component_4D3D41 processChart" component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart" style="height:100%;width:100%;" >');a.push('<div pertID="GLOBAL_ID_N824799294" style="display:none" trackID="GLOBAL_ID_N928619051" xblid="interface" >');a.push('</div>');a.push('<div class="component_478DC2A1 tabs" component="/UI/system/components/tabs.xbl.xml#tabs" id="GLOBAL_ID_N1902949574" style="width:100%;height:100%;overflow:auto;" >');a.push('<div class="jstabbar" id="GLOBAL_ID_N1902949574_root" >');a.push('<ul class="tabItems" >');a.push('<li class="selected" id="GLOBAL_ID_1180422134_tab" >');a.push('<button class="selected" onclick="this.parentNode.parentNode.parentNode.parentNode.tabbar.setTabActive(\'GLOBAL_ID_1180422134\');this.blur();" type="button" >');a.push('轨迹图');a.push('</button>');a.push('</li>');a.push('<li id="GLOBAL_ID_438303613_tab" >');a.push('<button onclick="this.parentNode.parentNode.parentNode.parentNode.tabbar.setTabActive(\'GLOBAL_ID_438303613\');this.blur();" type="button" >');a.push('波特图');a.push('</button>');a.push('</li>');a.push('</ul>');a.push('<div class="contents" id="GLOBAL_ID_N1902949574_contents" >');a.push('<div class="content selected" id="GLOBAL_ID_1180422134" >');a.push('<div class="component_8CF08DD0 processTrackChart" component="/UI/system/components/processChart.xbl.xml#processTrackChart" id="GLOBAL_ID_N928619051" style="height:100%;" >');a.push('<div style="display:none" >');a.push('<div chartControlID="track_GLOBAL_ID_653874692" xblid="interface" >');a.push('</div>');a.push('</div>');a.push('<div class="component_8F7B2FA1 borderLayout" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="bl2" style="height:100%;" >');a.push('<div borderSize="0" class="xui-borderlayout-root" >');a.push('<div class="xui-borderlayout-area xui-borderlayout-top" size="40px" style="" >');a.push('<table>');a.push('<tr>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:green; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td align="" >');a.push('<span>');a.push('已经过');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:black; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('未经过');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:red; width:100%;height:2px" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('回退');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:#0080FF; border:1px #0080FF solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('当前环节');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:green; border:1px green solid; width:100%;height:20px; border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已处理');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:#ff6666; border:1px #ff6666 solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已终止');a.push('</span>');a.push('</td>');a.push('<td width="20" >');a.push('</td>');a.push('<td width="30" >');a.push('<div style="overflow:hidden;display:block;background:yellow; border:1px yellow solid; width:100%;height:20px;border-style:solid;" >');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<span>');a.push('已暂停');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('<div class="xui-borderlayout-border xui-borderlayout-border-top" style="height:0" >');a.push('</div>');a.push('<div class="xui-borderlayout-area xui-borderlayout-center" style="overflow:auto;" >');a.push('<div id="track_GLOBAL_ID_653874692" style="width:100%;height:100%;overflow:auto;" >');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('<div class="content" id="GLOBAL_ID_438303613" >');a.push('<div class="component_4502B30A processPertChart" component="/UI/system/components/processChart.xbl.xml#processPertChart" id="GLOBAL_ID_N824799294" style="height:100%;" >');a.push('<div style="display:none" >');a.push('<div chartControlID="bot_GLOBAL_ID_N1769832207" xblid="interface" >');a.push('</div>');a.push('</div>');a.push('<div id="bot_GLOBAL_ID_N1769832207" style="width:100%;height:100%;overflow:auto;" >');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');a.push('</div>');justep('vProcessChart').innerHTML = a.join('');}