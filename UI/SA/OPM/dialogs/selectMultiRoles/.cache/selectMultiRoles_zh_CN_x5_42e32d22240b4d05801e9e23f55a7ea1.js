
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"] = _xbl_JSClassDefine_windowDialogReceiver;
justep.XBLObject._classes["/UI/system/components/buttonBar.xbl.xml#buttonBar"] = _xbl_JSClassDefine_buttonBar;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/trigger.xbl.xml#trigger"] = _xbl_JSClassDefine_trigger;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_windowDialogReceiver(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowDialogReceiver.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var s = node.getAttribute('onReceive');
				if(s) justep.windowDialogReceiver.acceptParentParamsFun = s;
			},
			"windowEnsure" : function(data,noclose){
				justep.windowDialogReceiver.windowEnsure(data,noclose);
			}, 
			"windowCancel" : function(){
				justep.windowDialogReceiver.windowCancel();
			}, 
			"windowRefresh" : function(){
				justep.windowDialogReceiver.windowRefresh();
			}
		}));

_xbl_JSClassDefine_windowDialogReceiver.prototype.ClassName='_xbl_JSClassDefine_windowDialogReceiver';
_xbl_JSClassDefine_windowDialogReceiver.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialogReceiver',key:'2057a0af8d4031c8cd7b86fda6a01784',time:1525315221},m:'8ad8a9197fc26f4170ff25bb40bd5650'};
function _xbl_JSClassDefine_buttonBar(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_buttonBar.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL: function(){
					this.$el = $(this.domNode);
					this.expandable = this.$el.attr('expandable') == 'true';
					if(this.expandable){
						this.expanded = this.$el.attr('expanded') == 'true';
						this.expandedLabel = this.$el.attr('expanded-label');
						this.collapsedLabel = this.$el.attr('collapsed-label');
						this.iconExpanded = this.$el.attr('icon-expanded') || 'icon-system-plus-circle';
						this.iconCollapsed= this.$el.attr('icon-collapsed') || 'icon-system-minus-circle';
						this.btn = justep.xbl(this.domNode.id + '-extend');
						this.expandedItems = $('li.extend ~ li', this.$el); 
					}
				},
				toggle: function(){
					this.expandable && this.extend(!this.expanded);
				},
				extend: function(value){
					if(this.expandable && this.expanded != value){
						this.expanded = value;
						this.btn.setLabel(this.expanded? this.collapsedLabel : this.expandedLabel);
						if(this.expanded){
							this.expandedItems.show();
							$('.icon', this.btn.element).removeClass(this.iconExpanded).addClass(this.iconCollapsed);
						}else{
							this.expandedItems.hide();
							$('.icon', this.btn.element).removeClass(this.iconCollapsed).addClass(this.iconExpanded);
						}	
					}
				}
			}));

_xbl_JSClassDefine_buttonBar.prototype.ClassName='_xbl_JSClassDefine_buttonBar';
_xbl_JSClassDefine_buttonBar.prototype.__code__={v:{name:'_xbl_JSClassDefine_buttonBar',key:'2057a0af8d4031c8cd7b86fda6a01784',time:1525315221},m:'91051075793308047a4ab1ff2eef3140'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'2057a0af8d4031c8cd7b86fda6a01784',time:1525315221},m:'9d39b34f558e2ab69a50474251aca09f'};
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

_xbl_JSClassDefine_borderLayout.prototype.ClassName='_xbl_JSClassDefine_borderLayout';
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'2057a0af8d4031c8cd7b86fda6a01784',time:1525315221},m:'4f598d7c83a523202aaf453c44c742a5'};
function _xbl_JSClassDefine_trigger(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_trigger.prototype = justep.Object.extend(new justep.XBLObject(), eval({	
			"initXBL" : function() {
				this.$el = $(this.domNode);
				justep.Utils.proxable(this, this.domNode.xformsObject, xforms.XFTrigger);
			},
			"initXBL2" : function() {
				this.domNode.xformsObject.initOperation();
			}
		}));

_xbl_JSClassDefine_trigger.prototype.ClassName='_xbl_JSClassDefine_trigger';
_xbl_JSClassDefine_trigger.prototype.__code__={v:{name:'_xbl_JSClassDefine_trigger',key:'2057a0af8d4031c8cd7b86fda6a01784',time:1525315221},m:'9a3f56fb20f792af8c65906b2116f779'};
	var ids=[{id:'0982e26fc3974e599a62b22fad29ea8d', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'buttonBar1', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'imageSearch', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]}]},{id:'buttonBar2', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'triggerNextPage', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default2', name:'xforms:label'}]},{id:'triggerAllPage', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default3', name:'xforms:label'}]}]},{id:'gridRole', name:'xforms:grid'},{id:'buttonBar3', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'btnOK', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'btnCancel', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]}]}]},{id:'receiver', name:'/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='2057a0af8d4031c8cd7b86fda6a01784';
xforms.Core.fileName='form.js';	
xf._a(null,'imageSearch');xf._a('imageSearch','xuiLabel3');xf._a(null,'triggerNextPage');xf._a('triggerNextPage','default2');xf._a(null,'triggerAllPage');xf._a('triggerAllPage','default3');xf._a(null,'gridRole');xf._a(null,'btnOK');xf._a('btnOK','xuiLabel2');xf._a(null,'btnCancel');xf._a('btnCancel','xuiLabel1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dRole')/sSequence",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('dRole')/sValidState",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dRole')/version",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("calcCheckBox",xf._h(false, xf._k("child",xf._j('','calcCheckBox'))));	
xf._b("calcIndex",xf._h(false, xf._k("child",xf._j('','calcIndex'))));	
xf._b("sRoleKind",xf._h(false, xf._k("child",xf._j('','sRoleKind'))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sCatalog",xf._h(false, xf._k("child",xf._j('','sCatalog'))));	
xf._b("sParentRolesNames",xf._h(false, xf._k("child",xf._j('','sParentRolesNames'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ch', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
var xf_trigger_imageSearch=new xforms.XFTrigger('imageSearch',null,null,null,false,false,false,null,null,"icon-system-search");	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectMultiRoles.imageSearchClick(event)}));xf._p(justep('imageSearch'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'imageSearch', evt,false)});	
var xf_trigger_triggerNextPage=new xforms.XFTrigger('triggerNextPage',null,null,null,false,false,false,"dRole","loadNextPage","icon-system-angle-right");	
var xf_trigger_triggerAllPage=new xforms.XFTrigger('triggerAllPage',null,null,null,false,false,false,"dRole","loadAllPage","icon-system-angle-double-right");	
new xforms.XFGrid({id:'gridRole',instance:'dRole',systemColumnsPro:'sDescription,sSequence,sValidState,version,fZW,fGW',onInit:null,type:'grid',smartRender:null,delay:false,ids:'calcCheckBox,calcIndex,sRoleKind,sName,sCode,sCatalog,sParentRolesNames,space-column',headNames:'#master_checkbox,序号,类型,角色名称,编码,分类,父角色,&nbsp;',widths:'30,30,30,150,60,80,150,*',types:'ch,cntr,html,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'30',hdrRowH:'30',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sRoleKind','selectMultiRoles.gridRoleSRoleKindRender');}});	
var xf_trigger_btnOK=new xforms.XFTrigger('btnOK',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectMultiRoles.btnOKClick(event)}));xf._p(justep('btnOK'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnOK', evt,false)});	
var xf_trigger_btnCancel=new xforms.XFTrigger('btnCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectMultiRoles.btnCancelClick(event)}));xf._p(justep('btnCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'btnCancel', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dRole_part_loaded = false;	
function load_dRole_part(callback){if (dRole_part_loaded) return;dRole_part_loaded = true;	
new xforms.XFInstance2('dRole','model1',null,null,null,null,null,null,null,null,'calcIndex,calcCheckBox',null,'whereVersion');	
xf._c('xf-bind-0','model1',"instance('dRole')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dRole')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dRole')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dRole_part_init_loaded = false;	
function load_dRole_part_init(){if (dRole_part_init_loaded) return;dRole_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var __actions__ = {	
};	
