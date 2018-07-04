
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/report.xbl.xml#report"] = _xbl_JSClassDefine_report;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/chart.xbl.xml#chart"] = _xbl_JSClassDefine_chart;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/reportData.xbl.xml#data"] = _xbl_JSClassDefine_data;
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

function _xbl_JSClassDefine_chart(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_chart.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Utils.extend(this, justep.Chart, null, true);
					this.initComponent();
				},
				initXBL2 : function() {
					this.initContent();
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

	var ids=[{id:'window_1', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout_1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tabPanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'startDate', name:'xforms:input'},{id:'endDate', name:'xforms:input'},{id:'trigger1', name:'xforms:trigger', children:[{id:'default8', name:'xforms:label'}]},{id:'Report1', name:'/UI/system/components/report.xbl.xml#report'},{id:'chart3', name:'/UI/system/components/chart.xbl.xml#chart'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'startDate1', name:'xforms:input'},{id:'endDate1', name:'xforms:input'},{id:'trigger2', name:'xforms:trigger', children:[{id:'default1', name:'xforms:label'}]},{id:'chart1', name:'/UI/system/components/chart.xbl.xml#chart'},{id:'report2', name:'/UI/system/components/report.xbl.xml#report'}]}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'startDate');xf._a(null,'endDate');xf._a(null,'trigger1');xf._a('trigger1','default8');xf._a(null,'startDate1');xf._a(null,'endDate1');xf._a(null,'trigger2');xf._a('trigger2','default1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('bizData1')/COMPLAINT_SOURCE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','COMPLAINT_SOURCE')))),'','');	
xf._b("instance('bizData1')/COMPLAINT_DATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','COMPLAINT_DATE')))),'','');	
xf._b("instance('bizData1')/TYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','TYPE')))),'','');	
xf._b("instance('bizData1')/SEVERITY",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','SEVERITY')))),'','');	
xf._b("instance('bizData1')/RECEIPT_DATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','RECEIPT_DATE')))),'','');	
xf._b("instance('bizData2')/COMPLAINT_SOURCE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','COMPLAINT_SOURCE')))),'','');	
xf._b("instance('bizData2')/COMPLAINT_DATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','COMPLAINT_DATE')))),'','');	
xf._b("instance('bizData2')/TYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','TYPE')))),'','');	
xf._b("instance('bizData2')/SEVERITY",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','SEVERITY')))),'','');	
xf._b("instance('bizData2')/RECEIPT_DATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','RECEIPT_DATE')))),'','');	
xf._b("instance('data1')/startDate",xf._g(xf._f('instance',xf._i("data1")),xf._h(false, xf._k("child",xf._j('','startDate')))),'','');	
xf._b("instance('data1')/endDate",xf._g(xf._f('instance',xf._i("data1")),xf._h(false, xf._k("child",xf._j('','endDate')))),'','');	
xf._b("instance('data3')/startDate1",xf._g(xf._f('instance',xf._i("data3")),xf._h(false, xf._k("child",xf._j('','startDate1')))),'','');	
xf._b("instance('data3')/endDate1",xf._g(xf._f('instance',xf._i("data3")),xf._h(false, xf._k("child",xf._j('','endDate1')))),'','');	
xf._b("data('data1')/startDate",xf._g(xf._f('data',xf._i("data1")),xf._h(false, xf._k("child",xf._j('','startDate')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('data1')/endDate",xf._g(xf._f('data',xf._i("data1")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("data('data3')/startDate1",xf._g(xf._f('data',xf._i("data3")),xf._h(false, xf._k("child",xf._j('','startDate1')))));	
xf._b("data('data3')/endDate1",xf._g(xf._f('data',xf._i("data3")),xf._h(false, xf._k("child",xf._j('','endDate1')))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_dataModel = new xforms.XFModel('dataModel',null);	
new xforms.XFInstance2('bizData1','dataModel',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData1',null);	
xf._c('xf-bind-0','dataModel',"instance('bizData1')/COMPLAINT_SOURCE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','dataModel',"instance('bizData1')/COMPLAINT_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-2','dataModel',"instance('bizData1')/TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','dataModel',"instance('bizData1')/SEVERITY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','dataModel',"instance('bizData1')/RECEIPT_DATE","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','dataModel',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData2',null);	
xf._c('xf-bind-5','dataModel',"instance('bizData2')/COMPLAINT_SOURCE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','dataModel',"instance('bizData2')/COMPLAINT_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','dataModel',"instance('bizData2')/TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','dataModel',"instance('bizData2')/SEVERITY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','dataModel',"instance('bizData2')/RECEIPT_DATE","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('data1','dataModel',null,null,null,null,null,null,null,null,null,null,null);new SimpleStore('data1','startDate,endDate');	
xf._c('xf-bind-10','dataModel',"instance('data1')/startDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','dataModel',"instance('data1')/endDate","xsd:date",null,null,null,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.dataModelXBLLoaded(event)}));xf._p(justep('dataModel'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action4,'dataModel', evt,false)});	
new xforms.XFInstance2('data3','dataModel',null,null,null,null,null,null,null,null,null,null,null);new SimpleStore('data3','startDate1,endDate1');	
xf._c('xf-bind-12','dataModel',"instance('data3')/startDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','dataModel',"instance('data3')/endDate1","xsd:date",null,null,null,null,null,null);	
xforms.load_parts('view_1');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_view_1(){if (justep("view_1").getAttribute('loaded') && justep("view_1").getAttribute('loaded') == 'true') return;justep("view_1").setAttribute('loaded', 'true');	
if(typeof(load_view_1_html) == 'function')load_view_1_html();	
xforms.load_parts('view2');	
xforms.load_parts('view3');	
}	
function load_view_1_xblinit(){if (justep("view_1").getAttribute('xblloaded') && justep("view_1").getAttribute('xblloaded') == 'true') return;justep("view_1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
xforms.load_parts('view5');	
xforms.load_parts('view4');	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
function load_view5(){if (justep("view5").getAttribute('loaded') && justep("view5").getAttribute('loaded') == 'true') return;justep("view5").setAttribute('loaded', 'true');	
if(typeof(load_view5_html) == 'function')load_view5_html();	
xf._d('startDate','text',xf._q("data('data1')/startDate"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('endDate','text',xf._q("data('data1')/endDate"),null,null,null,null,false,true);	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger1Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trigger1', evt,false)});	
}	
function load_view5_xblinit(){if (justep("view5").getAttribute('xblloaded') && justep("view5").getAttribute('xblloaded') == 'true') return;justep("view5").setAttribute('xblloaded', 'true');	
}	
function load_view4(){if (justep("view4").getAttribute('loaded') && justep("view4").getAttribute('loaded') == 'true') return;justep("view4").setAttribute('loaded', 'true');	
if(typeof(load_view4_html) == 'function')load_view4_html();	
xforms.load_parts('view6');	
}	
function load_view4_xblinit(){if (justep("view4").getAttribute('xblloaded') && justep("view4").getAttribute('xblloaded') == 'true') return;justep("view4").setAttribute('xblloaded', 'true');	
}	
function load_view6(){if (justep("view6").getAttribute('loaded') && justep("view6").getAttribute('loaded') == 'true') return;justep("view6").setAttribute('loaded', 'true');	
if(typeof(load_view6_html) == 'function')load_view6_html();	
}	
function load_view6_xblinit(){if (justep("view6").getAttribute('xblloaded') && justep("view6").getAttribute('xblloaded') == 'true') return;justep("view6").setAttribute('xblloaded', 'true');	
}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
xforms.load_parts('view7');	
xforms.load_parts('view8');	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
function load_view7(){if (justep("view7").getAttribute('loaded') && justep("view7").getAttribute('loaded') == 'true') return;justep("view7").setAttribute('loaded', 'true');	
if(typeof(load_view7_html) == 'function')load_view7_html();	
xf._d('startDate1','text',xf._q("data('data3')/startDate1"),null,null,null,null,false,true);	
xf._d('endDate1','text',xf._q("data('data3')/endDate1"),null,null,null,"yyyy-MM-dd",false,true);	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trigger2', evt,false)});	
}	
function load_view7_xblinit(){if (justep("view7").getAttribute('xblloaded') && justep("view7").getAttribute('xblloaded') == 'true') return;justep("view7").setAttribute('xblloaded', 'true');	
}	
function load_view8(){if (justep("view8").getAttribute('loaded') && justep("view8").getAttribute('loaded') == 'true') return;justep("view8").setAttribute('loaded', 'true');	
if(typeof(load_view8_html) == 'function')load_view8_html();	
xforms.load_parts('view9');	
}	
function load_view8_xblinit(){if (justep("view8").getAttribute('xblloaded') && justep("view8").getAttribute('xblloaded') == 'true') return;justep("view8").setAttribute('xblloaded', 'true');	
}	
function load_view9(){if (justep("view9").getAttribute('loaded') && justep("view9").getAttribute('loaded') == 'true') return;justep("view9").setAttribute('loaded', 'true');	
if(typeof(load_view9_html) == 'function')load_view9_html();	
}	
function load_view9_xblinit(){if (justep("view9").getAttribute('xblloaded') && justep("view9").getAttribute('xblloaded') == 'true') return;justep("view9").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
