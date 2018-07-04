
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/excel.xbl.xml#export"] = _xbl_JSClassDefine_export;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
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
						}}
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

function _xbl_JSClassDefine_export(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_export.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
				justep.Object.extend(this, new justep.ExportExcel(this));
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

	var ids=[{id:'ff9405e001af44b0b8407fd4948d98e1', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'grid1', name:'xforms:grid'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMas', name:'xforms:trigger', children:[{id:'f02c3cfe6f9e4110bb0df2b1ff856f0f', name:'xforms:label'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default17', name:'xforms:label'},{id:'default18', name:'xforms:value'}]},{id:'excelExport1', name:'/UI/system/components/excel.xbl.xml#export', children:[{id:'trigger-excelExport1', name:'xforms:trigger', children:[{id:'90773a4633ac472199198bad8ee11231', name:'xforms:label'}]}]},{id:'trigger2', name:'xforms:trigger', children:[{id:'default4', name:'xforms:label'}]}]},{id:'windowDialog2', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'grid1');xf._a(null,'saveMas');xf._a('saveMas','f02c3cfe6f9e4110bb0df2b1ff856f0f');xf._a(null,'gridSelect2');xf._a('gridSelect2','default17');xf._a('gridSelect2','default19');xf._a(null,'trigger-excelExport1');xf._a('trigger-excelExport1','90773a4633ac472199198bad8ee11231');xf._a(null,'trigger2');xf._a('trigger2','default4');function init() {	
var begin = new Date().getTime();	
xf._b("instance('indexData')/INDEXID",xf._g(xf._f('instance',xf._i("indexData")),xf._h(false, xf._k("child",xf._j('','INDEXID')))));	
xf._b("instance('indexData')/INDEXSYSTEMNO",xf._g(xf._f('instance',xf._i("indexData")),xf._h(false, xf._k("child",xf._j('','INDEXSYSTEMNO')))));	
xf._b("instance('indexData')/BUSINESSID",xf._g(xf._f('instance',xf._i("indexData")),xf._h(false, xf._k("child",xf._j('','BUSINESSID')))));	
xf._b("instance('indexData')/APPLYFOROBJECT",xf._g(xf._f('instance',xf._i("indexData")),xf._h(false, xf._k("child",xf._j('','APPLYFOROBJECT')))));	
xf._b("instance('indexData')/APPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("indexData")),xf._h(false, xf._k("child",xf._j('','APPLYFORDEVICETYPE')))));	
xf._b("instance('indexData')/DETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("indexData")),xf._h(false, xf._k("child",xf._j('','DETECTIONRANGETYPE')))));	
xf._b("instance('indexData')/DETECTIONRANGEID",xf._g(xf._f('instance',xf._i("indexData")),xf._h(false, xf._k("child",xf._j('','DETECTIONRANGEID')))));	
xf._b("instance('indexFilterData')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("indexFilterData")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("instance('indexFilterData')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("indexFilterData")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("instance('indexFilterData')/vALIDSTATE",xf._g(xf._f('instance',xf._i("indexFilterData")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("calIndex",xf._h(false, xf._k("child",xf._j('','calIndex'))));	
xf._b("INDEXNO",xf._h(false, xf._k("child",xf._j('','INDEXNO'))));	
xf._b("INDEXID",xf._h(false, xf._k("child",xf._j('','INDEXID'))));	
xf._b("INDEXIDCNAME",xf._h(false, xf._k("child",xf._j('','INDEXIDCNAME'))));	
xf._b("DETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','DETECTIONRANGECNAME'))));	
xf._b("RANGEIDCNAME",xf._h(false, xf._k("child",xf._j('','RANGEIDCNAME'))));	
xf._b("DETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','DETECTIONOBJECTCNAME'))));	
xf._b("DEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','DEVICETYPECNAME'))));	
xf._b("BUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','BUSINESSIDCNAME'))));	
xf._b("INDEXVALUE",xf._h(false, xf._k("child",xf._j('','INDEXVALUE'))));	
xf._b("INDEXVALUEDESC",xf._h(false, xf._k("child",xf._j('','INDEXVALUEDESC'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('cData')/value",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("data('cData')/name",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','name')))));	
xf._b("iNDEXSYSTEMNAME",xf._h(false, xf._k("child",xf._j('','iNDEXSYSTEMNAME'))));	
xf._b("INDEX_SYSTEM_PARAMETER",xf._h(false, xf._k("child",xf._j('','INDEX_SYSTEM_PARAMETER'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("mAKEDATETIME",xf._h(false, xf._k("child",xf._j('','mAKEDATETIME'))));	
xf._b("dECTIONBASEDONID",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID'))));	
xf._b("vALIDSTATE",xf._h(false, xf._k("child",xf._j('','vALIDSTATE'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('indexFilterData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-7','model1',"instance('indexFilterData')/mAKEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('indexFilterData')/dECTIONBASEDONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('indexFilterData')/vALIDSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('cData','model1',null,null,null,null,null,null,null,null,null,null,null);new SimpleStore('cData','value,name');	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){zhibiaoDialog.model1XBLLoaded(event)}));xf._p(justep('model1'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var indexData_part_loaded = false;	
function load_indexData_part(callback){if (indexData_part_loaded) return;indexData_part_loaded = true;	
new xforms.XFInstance2('indexData','model1',null,null,null,null,null,null,null,null,'calIndex,recCB',null,'whereAll');	
xf._c('xf-bind-0','model1',"instance('indexData')/INDEXID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('indexData')/INDEXSYSTEMNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('indexData')/BUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('indexData')/APPLYFOROBJECT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('indexData')/APPLYFORDEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('indexData')/DETECTIONRANGETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('indexData')/DETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var indexData_part_init_loaded = false;	
function load_indexData_part_init(){if (indexData_part_init_loaded) return;indexData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
new xforms.XFGrid({id:'grid1',instance:'indexData',systemColumnsPro:'INDEXSYSTEMNO,BUSINESSID,APPLYFOROBJECT,APPLYFORDEVICETYPE,DETECTIONRANGETYPE,DETECTIONRANGEID,INDEXSYSTEMNAME,recCB',onInit:null,type:'grid',smartRender:20,delay:false,ids:'calIndex,INDEXNO,INDEXID,INDEXIDCNAME,DETECTIONRANGECNAME,RANGEIDCNAME,DETECTIONOBJECTCNAME,DEVICETYPECNAME,BUSINESSIDCNAME,INDEXVALUE,INDEXVALUEDESC,space-column',headNames:'序号,指标序号,指标ID,指标名称,指标检测方面类别,检测方面,应用检测对象类型,应用检测对象,指标应用业务类型,指标值公式,指标值文字描述,&nbsp;',widths:'30,56,48,108,119,100,114,100,120,116,184,*',types:'cntr,ro,ro,ro,ro,ro,ro,ro,ro,ed,ed,ro',hiddenColumns:'',aligns:'center,center,center,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){zhibiaoDialog.saveMasClick(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'saveMas', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('cData')/value"),labelRef:xf._q("data('cData')/name"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'indexFilterData',columns:'INDEX_SYSTEM_PARAMETER,iNDEXSYSTEMNAME,__c_,mAKEDATETIME,dECTIONBASEDONID,vALIDSTATE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'INDEX_SYSTEM_PARAMETER,mAKEDATETIME,dECTIONBASEDONID,vALIDSTATE',valueColumn:'INDEX_SYSTEM_PARAMETER',labelColumn:'iNDEXSYSTEMNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'zhibiaoDialog.gridSelect2Closeup'});	
var xf_trigger_trigger_excelExport1=new xforms.XFTrigger('trigger-excelExport1',null,"/UI/system/components/excel/images/export.gif","/UI/system/components/excel/images/unexport.gif",false,false,false,null,null,"");	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.XBLObject.getXBLObject(event.target).exportExcel();}));xf._p(justep('trigger-excelExport1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'trigger-excelExport1', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,"/UI/system/components/excel/images/import.gif","/UI/system/components/excel/images/unimport.gif",false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){zhibiaoDialog.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trigger2', evt,false)});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
