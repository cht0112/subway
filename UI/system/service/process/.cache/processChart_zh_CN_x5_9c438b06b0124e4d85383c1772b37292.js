
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processTrackChart"] = _xbl_JSClassDefine_processTrackChart;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processPertChart"] = _xbl_JSClassDefine_processPertChart;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'1eae661f736f8b2a124ca00ba3cb3fd1',time:1525315396},m:'d14f091eaa3c070bc34435c3f199469b'};
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

_xbl_JSClassDefine_tabs.prototype.ClassName='_xbl_JSClassDefine_tabs';
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'1eae661f736f8b2a124ca00ba3cb3fd1',time:1525315396},m:'802013d5c3ed30792f29e87c68ad66a8'};
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

_xbl_JSClassDefine_processTrackChart.prototype.ClassName='_xbl_JSClassDefine_processTrackChart';
_xbl_JSClassDefine_processTrackChart.prototype.__code__={v:{name:'_xbl_JSClassDefine_processTrackChart',key:'1eae661f736f8b2a124ca00ba3cb3fd1',time:1525315396},m:'86a79acd6a05a587b29f695b2923ff9a'};
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
			   	this.centerEl = $("#" + id + " > div > " + baseCls + "center");	   	this.topBorderEl = $("#" + id + " > div > " + baseCls + "border-top");
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
				}if(this.bottomEl.get(0)){
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

_xbl_JSClassDefine_borderLayout.prototype.ClassName='_xbl_JSClassDefine_borderLayout';
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'1eae661f736f8b2a124ca00ba3cb3fd1',time:1525315396},m:'5d63464cb1ebdd9067a44f4028ab9056'};
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

_xbl_JSClassDefine_processPertChart.prototype.ClassName='_xbl_JSClassDefine_processPertChart';
_xbl_JSClassDefine_processPertChart.prototype.__code__={v:{name:'_xbl_JSClassDefine_processPertChart',key:'1eae661f736f8b2a124ca00ba3cb3fd1',time:1525315396},m:'1a8d079afc7771ac44eb25f69f0197d6'};
	var ids=[{id:'ea0550abbb514f0b8b41fc436a20db74', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'GLOBAL_ID_1627837018', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'track', name:'/UI/system/components/processChart.xbl.xml#processTrackChart', children:[{id:'bl2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]},{id:'pert', name:'/UI/system/components/processChart.xbl.xml#processPertChart'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='1eae661f736f8b2a124ca00ba3cb3fd1';
xforms.Core.fileName='form.js';	
function init() {	
var begin = new Date().getTime();	
var xf_model_model1 = new xforms.XFModel('model1',null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){processChart.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
