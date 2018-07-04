
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/buttonBar.xbl.xml#buttonBar"] = _xbl_JSClassDefine_buttonBar;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_buttonBar(obj) {
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
_xbl_JSClassDefine_buttonBar.prototype.__code__={v:{name:'_xbl_JSClassDefine_buttonBar',key:'19dc9a57bf70babef240b7044db1fe9d',time:1528169809},m:'ee1b727ac4522d60e057f89676e263ef'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'19dc9a57bf70babef240b7044db1fe9d',time:1528169809},m:'a5ee2bda72b66707572ff3d05bdba6e1'};
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
_xbl_JSClassDefine_windowReceiver.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowReceiver',key:'19dc9a57bf70babef240b7044db1fe9d',time:1528169809},m:'8384cf89435fbc63e90a6c3b4ffa56e1'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'19dc9a57bf70babef240b7044db1fe9d',time:1528169809},m:'d70deaa39a1cc160e355eca39b2428e0'};
	var ids=[{id:'51a8b89767894ccd8d516bea8e48f963', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'buttonBar1', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'imageSearch', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]}]},{id:'gridTree', name:'xforms:grid'},{id:'gridList', name:'xforms:grid'},{id:'buttonBar2', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'btnOK', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'btnCancel', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]}]}]},{id:'receiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='19dc9a57bf70babef240b7044db1fe9d';
xforms.Core.fileName='form.js';	
xf._a(null,'imageSearch');xf._a('imageSearch','xuiLabel3');xf._a(null,'gridTree');xf._a(null,'gridList');xf._a(null,'btnOK');xf._a('btnOK','xuiLabel2');xf._a(null,'btnCancel');xf._a('btnCancel','xuiLabel1');function init() {	
var begin = new Date().getTime();	
xf._b("checkBox",xf._h(false, xf._k("child",xf._j('','checkBox'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("url",xf._h(false, xf._k("child",xf._j('','url'))));	
xf._b("process",xf._h(false, xf._k("child",xf._j('','process'))));	
xf._b("activity",xf._h(false, xf._k("child",xf._j('','activity'))));	
xf._b("isFolder",xf._h(false, xf._k("child",xf._j('','isFolder'))));	
xf._b("activityFName",xf._h(false, xf._k("child",xf._j('','activityFName'))));	
xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('ch', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectMultiFunctions.model1ModelConstructDone(event)}));xf._p(justep('model1'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
var xf_trigger_imageSearch=new xforms.XFTrigger('imageSearch',null,null,null,false,false,false,null,null,"icon-system-search");	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectMultiFunctions.imageSearchClick(event)}));xf._p(justep('imageSearch'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'imageSearch', evt,false)});	
new xforms.XFGrid({id:'gridTree',instance:'dFunTree',systemColumnsPro:null,onInit:null,type:'tree',smartRender:null,delay:false,ids:'checkBox,label,url,process,activity,isFolder,activityFName',headNames:'checkBox,功能,url,process,activity,isFolder,activityFName',widths:'30,*,100,100,100,100,100',types:'ro,tree,ro,ro,ro,ro,ro',hiddenColumns:'checkBox,url,process,activity,isFolder,activityFName',aligns:'center,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'selectMultiFunctions.gridTreeShowNodeImg',multiSelection:'true',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'30',hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:true,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'label','true');}});	
new xforms.XFGrid({id:'gridList',instance:'dFunList',systemColumnsPro:null,onInit:null,type:'grid',smartRender:null,delay:false,ids:'checkBox,label,url,process,activity,isFolder,activityFName',headNames:'#master_checkbox,功能,url,process,activity,isFolder,功能',widths:'30,100,100,100,100,100,*',types:'ch,ro,ro,ro,ro,ro,ro',hiddenColumns:'label,url,process,activity,isFolder',aligns:'center,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'false',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'30',hdrRowH:'30',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_btnOK=new xforms.XFTrigger('btnOK',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectMultiFunctions.btnOKClick(event)}));xf._p(justep('btnOK'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnOK', evt,false)});	
var xf_trigger_btnCancel=new xforms.XFTrigger('btnCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectMultiFunctions.btnCancelClick(event)}));xf._p(justep('btnCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'btnCancel', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dFunTree_part_loaded = false;	
function load_dFunTree_part(callback){if (dFunTree_part_loaded) return;dFunTree_part_loaded = true;	
new xforms.XFInstance2('dFunTree','model1',null,null,null,null,null,null,null,null,null,null,null);	
if(callback)callback();}	
var dFunTree_part_init_loaded = false;	
function load_dFunTree_part_init(){if (dFunTree_part_init_loaded) return;dFunTree_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var dFunList_part_loaded = false;	
function load_dFunList_part(callback){if (dFunList_part_loaded) return;dFunList_part_loaded = true;	
new xforms.XFInstance2('dFunList','model1',null,null,null,null,null,null,null,null,null,null,null);	
if(callback)callback();}	
var dFunList_part_init_loaded = false;	
function load_dFunList_part_init(){if (dFunList_part_init_loaded) return;dFunList_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var __actions__ = {	
};	
