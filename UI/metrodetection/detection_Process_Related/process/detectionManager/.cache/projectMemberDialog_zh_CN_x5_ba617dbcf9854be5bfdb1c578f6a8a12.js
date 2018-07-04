
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/config.xbl.xml#config"] = _xbl_JSClassDefine_config;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/smartFilter.xbl.xml#smartFilter"] = _xbl_JSClassDefine_smartFilter;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'ceddef6c8ea1c80f57d517dfc6caca3d',time:1528686128},m:'7075e2bd49dde70821194f92a3b19c5a'};
function _xbl_JSClassDefine_windowReceiver(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowReceiver.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				this.domNode._xblObject.initXBL();
			},
			"initXBL2" : function() {
				this.domNode._xblObject.initXBL2();
			}
		}));

_xbl_JSClassDefine_windowReceiver.prototype.ClassName='_xbl_JSClassDefine_windowReceiver';
_xbl_JSClassDefine_windowReceiver.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowReceiver',key:'ceddef6c8ea1c80f57d517dfc6caca3d',time:1528686128},m:'79371fe1ff8192e591a7d87ce0243199'};
function _xbl_JSClassDefine_config(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_config.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
				},
				getValue : function(name) {
					return $(this.domNode).children("ITEM[name='"+name+"']").attr("value") || "";				
				},
				setValue : function(name,value,label){
					var $p = $(this.domNode).children("ITEM[name='"+name+"']");
					if($p.length > 0){
						if(value)$p.attr("value",value);
						if(label)$p.attr("label",label);
					}else{			
						$(this.domNode).append("<ITEM name='"+name+"' value='"+value+"'"+(label?(" label='"+label+"'"):"")+"/>");
					}
				}
			}));

_xbl_JSClassDefine_config.prototype.ClassName='_xbl_JSClassDefine_config';
_xbl_JSClassDefine_config.prototype.__code__={v:{name:'_xbl_JSClassDefine_config',key:'ceddef6c8ea1c80f57d517dfc6caca3d',time:1528686128},m:'d66f77fd9715f755a700f56143dd1938'};
function _xbl_JSClassDefine_borderLayout(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_borderLayout.prototype = justep.Object.extend(new justep.XBLObject(), eval({

			"initXBL" : function() {			   	if(!this.domNode.id || this.domNode.id ==""){
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

_xbl_JSClassDefine_borderLayout.prototype.ClassName='_xbl_JSClassDefine_borderLayout';
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'ceddef6c8ea1c80f57d517dfc6caca3d',time:1528686128},m:'e55df8bf6480d1fe2f2914daaeb88881'};
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

_xbl_JSClassDefine_smartFilter.prototype.ClassName='_xbl_JSClassDefine_smartFilter';
_xbl_JSClassDefine_smartFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_smartFilter',key:'ceddef6c8ea1c80f57d517dfc6caca3d',time:1528686128},m:'c90d8622816f21513a5455a9735f5b90'};
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

_xbl_JSClassDefine_toolbars.prototype.ClassName='_xbl_JSClassDefine_toolbars';
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'ceddef6c8ea1c80f57d517dfc6caca3d',time:1528686128},m:'c834cfce50c62d213770ebce8ed77d52'};
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

_xbl_JSClassDefine_pageNavigator.prototype.ClassName='_xbl_JSClassDefine_pageNavigator';
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'ceddef6c8ea1c80f57d517dfc6caca3d',time:1528686128},m:'0212df544c88b3fb7f97ce584335d9c8'};
	var ids=[{id:'3182c03ed94748e6a974a0b796109c61', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'config', name:'/UI/system/components/config.xbl.xml#config'},{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'rootTable', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'borderLayout3', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'toolbars', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'smartFilter', name:'/UI/system/components/smartFilter.xbl.xml#smartFilter', children:[{id:'smartFilter_input_1126376379', name:'xforms:input'}]},{id:'c3643e7d2816442097316a3d51ee4e2f', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grid', name:'xforms:grid'},{id:'borderLayout4', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='ceddef6c8ea1c80f57d517dfc6caca3d';
xforms.Core.fileName='form.js';	
xf._a(null,'smartFilter_input_1126376379');xf._a(null,'grid');function init() {	
var begin = new Date().getTime();	
xf._b("instance('main')/APPLICATIONNO",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','APPLICATIONNO')))));	
xf._b("instance('projectMemberData')/pROJECTMEMBERROLE",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','pROJECTMEMBERROLE')))));	
xf._b("instance('projectMemberData')/aPPLICATION_NO",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','aPPLICATION_NO')))));	
xf._b("instance('smartFilter_data_1126376379')/value",xf._g(xf._f('instance',xf._i("smartFilter_data_1126376379")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("ch",xf._h(false, xf._k("child",xf._j('','ch'))));	
xf._b("OPERATOR_NAME",xf._h(false, xf._k("child",xf._j('','OPERATOR_NAME'))));	
xf._b("POSITION_ID_CNAME",xf._h(false, xf._k("child",xf._j('','POSITION_ID_CNAME'))));	
xf._b("OFFICE_ID_CNAME",xf._h(false, xf._k("child",xf._j('','OFFICE_ID_CNAME'))));	
xf._b("OPERATORSTATE",xf._h(false, xf._k("child",xf._j('','OPERATORSTATE'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model = new xforms.XFModel('model',null);	
new xforms.XFInstance2('main','model',null,null,null,null,null,null,null,null,'ch',null,'whereVersion');	
xf._c('xf-bind-0','model',"instance('main')/APPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){projectMemberDialog.modelLoad(event)}));xf._p(justep('model'),"onload",null,function(evt) { xforms.run(xf_action_action1_9,'model', evt,false)});	
new xforms.XFInstance2('projectMemberData','model',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('projectMemberData',null);	
xf._c('xf-bind-1','model',"instance('projectMemberData')/pROJECTMEMBERROLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-2','model',"instance('projectMemberData')/aPPLICATION_NO","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('toolbarGridView');	
xforms.load_parts('buttonView');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_toolbarGridView(){if (justep("toolbarGridView").getAttribute('loaded') && justep("toolbarGridView").getAttribute('loaded') == 'true') return;justep("toolbarGridView").setAttribute('loaded', 'true');	
if(typeof(load_toolbarGridView_html) == 'function')load_toolbarGridView_html();	
var xf_model_smartFilter_model_1126376379 = new xforms.XFModel('smartFilter_model_1126376379',null);	
new xforms.XFInstance2('smartFilter_data_1126376379','smartFilter_model_1126376379',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('smartFilter_data_1126376379','value');	
xf._d('smartFilter_input_1126376379','text',xf._q("instance('smartFilter_data_1126376379')/value"),null,null,null,null,false,false);	
new xforms.XFGrid({id:'grid',instance:'main',systemColumnsPro:'APPLICATIONNO',onInit:null,type:'grid',smartRender:null,delay:false,ids:'ch,OPERATOR_NAME,POSITION_ID_CNAME,OFFICE_ID_CNAME,OPERATORSTATE,space-column',headNames:'#master_checkbox,姓名,岗位,职位,操作员状态,&nbsp;',widths:'30,100,114,106,100,*',types:'checkbox,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'center,center,center,center,center,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'true',checkedRef:'ch',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:'justep.MultiList._doCheckRow',onRowCheckedAll:'justep.MultiList._doCheckAll',onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
xforms.load_parts('selectView');	
}	
function load_toolbarGridView_xblinit(){if (justep("toolbarGridView").getAttribute('xblloaded') && justep("toolbarGridView").getAttribute('xblloaded') == 'true') return;justep("toolbarGridView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('smartFilter_model_1126376379').xformsObject.construct_part();	
}	
function load_selectView(){if (justep("selectView").getAttribute('loaded') && justep("selectView").getAttribute('loaded') == 'true') return;justep("selectView").setAttribute('loaded', 'true');	
if(typeof(load_selectView_html) == 'function')load_selectView_html();	
}	
function load_selectView_xblinit(){if (justep("selectView").getAttribute('xblloaded') && justep("selectView").getAttribute('xblloaded') == 'true') return;justep("selectView").setAttribute('xblloaded', 'true');	
}	
function load_buttonView(){if (justep("buttonView").getAttribute('loaded') && justep("buttonView").getAttribute('loaded') == 'true') return;justep("buttonView").setAttribute('loaded', 'true');	
if(typeof(load_buttonView_html) == 'function')load_buttonView_html();	
}	
function load_buttonView_xblinit(){if (justep("buttonView").getAttribute('xblloaded') && justep("buttonView").getAttribute('xblloaded') == 'true') return;justep("buttonView").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
