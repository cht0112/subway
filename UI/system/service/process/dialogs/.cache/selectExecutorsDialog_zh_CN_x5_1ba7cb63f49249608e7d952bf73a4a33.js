
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/buttonBar.xbl.xml#buttonBar"] = _xbl_JSClassDefine_buttonBar;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/trigger.xbl.xml#trigger"] = _xbl_JSClassDefine_trigger;
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
_xbl_JSClassDefine_buttonBar.prototype.__code__={v:{name:'_xbl_JSClassDefine_buttonBar',key:'88aa179506f05f62e1ff9f99dc7e1362',time:1528686170},m:'e550db822fafa458b7e15d473fda3778'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'88aa179506f05f62e1ff9f99dc7e1362',time:1528686170},m:'8c4901e3150b02fb11d2a71ee451aeaf'};
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
_xbl_JSClassDefine_windowReceiver.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowReceiver',key:'88aa179506f05f62e1ff9f99dc7e1362',time:1528686170},m:'33cd16f2cf825adfd23b373494255111'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'88aa179506f05f62e1ff9f99dc7e1362',time:1528686170},m:'dd35933be26b224b31d022522473fca5'};
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
_xbl_JSClassDefine_trigger.prototype.__code__={v:{name:'_xbl_JSClassDefine_trigger',key:'88aa179506f05f62e1ff9f99dc7e1362',time:1528686170},m:'bb4d1c0d90a74cfaa6accfb6c43de4d0'};
	var ids=[{id:'534ca73286df4bde9358c3e35efe5270', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'btnSearch', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]},{id:'btnMoveLast', name:'xforms:trigger', children:[{id:'xuiLabel8', name:'xforms:label'}]},{id:'btnMoveDown', name:'xforms:trigger', children:[{id:'xuiLabel9', name:'xforms:label'}]},{id:'btnMoveUp', name:'xforms:trigger', children:[{id:'xuiLabel10', name:'xforms:label'}]},{id:'btnMoveFirst', name:'xforms:trigger', children:[{id:'xuiLabel11', name:'xforms:label'}]},{id:'divToolbar', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'btnNextPage', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default5', name:'xforms:label'}]},{id:'btnAllPage', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default6', name:'xforms:label'}]}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'gridSelected', name:'xforms:grid'},{id:'btnSelectAll', name:'xforms:trigger', children:[{id:'xuiLabel4', name:'xforms:label'}]},{id:'btnSelect', name:'xforms:trigger', children:[{id:'xuiLabel5', name:'xforms:label'}]},{id:'btnUnSelect', name:'xforms:trigger', children:[{id:'xuiLabel6', name:'xforms:label'}]},{id:'btnClear', name:'xforms:trigger', children:[{id:'xuiLabel7', name:'xforms:label'}]}]},{id:'gridOrgTree', name:'xforms:grid'},{id:'gridOrgList', name:'xforms:grid'},{id:'btnCancel', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'btnOk', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]}]},{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='88aa179506f05f62e1ff9f99dc7e1362';
xforms.Core.fileName='form.js';	
xf._a(null,'btnSearch');xf._a('btnSearch','xuiLabel3');xf._a(null,'btnMoveLast');xf._a('btnMoveLast','xuiLabel8');xf._a(null,'btnMoveDown');xf._a('btnMoveDown','xuiLabel9');xf._a(null,'btnMoveUp');xf._a('btnMoveUp','xuiLabel10');xf._a(null,'btnMoveFirst');xf._a('btnMoveFirst','xuiLabel11');xf._a(null,'btnNextPage');xf._a('btnNextPage','default5');xf._a(null,'btnAllPage');xf._a('btnAllPage','default6');xf._a(null,'gridSelected');xf._a(null,'btnSelectAll');xf._a('btnSelectAll','xuiLabel4');xf._a(null,'btnSelect');xf._a('btnSelect','xuiLabel5');xf._a(null,'btnUnSelect');xf._a('btnUnSelect','xuiLabel6');xf._a(null,'btnClear');xf._a('btnClear','xuiLabel7');xf._a(null,'gridOrgTree');xf._a(null,'gridOrgList');xf._a(null,'btnCancel');xf._a('btnCancel','xuiLabel1');xf._a(null,'btnOk');xf._a('btnOk','xuiLabel2');function init() {	
var begin = new Date().getTime();	
xf._b("calcIndex",xf._h(false, xf._k("child",xf._j('','calcIndex'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("responsible",xf._h(false, xf._k("child",xf._j('','responsible'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))),'','http://www.justep.com/xui');	
xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('ch', 'null');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('checkbox', 'null');var xf_model_model = new xforms.XFModel('model',null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.modelModelConstructDone(event)}));xf._p(justep('model'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action1,'model', evt,false)});	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.modelXBLLoaded(event)}));xf._p(justep('model'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action2,'model', evt,false)});	
var xf_trigger_btnSearch=new xforms.XFTrigger('btnSearch',null,null,null,false,false,false,null,null,"icon-system-search");	
var xf_action_action9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnSearchClick(event)}));xf._p(justep('btnSearch'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action9,'btnSearch', evt,false)});	
var xf_trigger_btnMoveLast=new xforms.XFTrigger('btnMoveLast',null,null,null,false,false,false,null,null,"icon-system-angle-double-down");	
var xf_action_action14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnMoveLastClick(event)}));xf._p(justep('btnMoveLast'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action14,'btnMoveLast', evt,false)});	
var xf_trigger_btnMoveDown=new xforms.XFTrigger('btnMoveDown',null,null,null,false,false,false,null,null,"icon-system-angle-down");	
var xf_action_action15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnMoveDownClick(event)}));xf._p(justep('btnMoveDown'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action15,'btnMoveDown', evt,false)});	
var xf_trigger_btnMoveUp=new xforms.XFTrigger('btnMoveUp',null,null,null,false,false,false,null,null,"icon-system-angle-up");	
var xf_action_action16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnMoveUpClick(event)}));xf._p(justep('btnMoveUp'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action16,'btnMoveUp', evt,false)});	
var xf_trigger_btnMoveFirst=new xforms.XFTrigger('btnMoveFirst',null,null,null,false,false,false,null,null,"icon-system-angle-double-up");	
var xf_action_action17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnMoveFirstClick(event)}));xf._p(justep('btnMoveFirst'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action17,'btnMoveFirst', evt,false)});	
var xf_trigger_btnNextPage=new xforms.XFTrigger('btnNextPage',null,null,null,false,false,false,"dOrgList","loadNextPage","icon-system-angle-right");	
var xf_trigger_btnAllPage=new xforms.XFTrigger('btnAllPage',null,null,null,false,false,false,"dOrgList","loadAllPage","icon-system-angle-double-right");	
new xforms.XFGrid({id:'gridSelected',instance:'dSelected',systemColumnsPro:'sFID,sFName,sParent',onInit:null,type:'grid',smartRender:20,delay:false,ids:'calcIndex,sName,sOrgKindID,responsible',headNames:'序号,名称,类型,管理者',widths:'30,*,40,45',types:'cntr,ro,html,ch',hiddenColumns:'',aligns:'center,,center,center',serverSort:true,sorts:'na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'false',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'25',hdrRowH:'25',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:'selectExecutorsDialog.gridCellHint',cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'selectExecutorsDialog.gridSelectedRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'calcIndex','true');this.grid.bindColHTMLCallback(null,'sOrgKindID','selectExecutorsDialog.grid_sOrgKindIDRender');this.grid.bindCheckedValue(null,'responsible','true');this.grid.bindUncheckedValue(null,'responsible','false');}});	
var xf_trigger_btnSelectAll=new xforms.XFTrigger('btnSelectAll',null,null,null,false,false,false,null,null,"icon-system-angle-double-right");	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnSelectAllClick(event)}));xf._p(justep('btnSelectAll'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action8,'btnSelectAll', evt,false)});	
var xf_trigger_btnSelect=new xforms.XFTrigger('btnSelect',null,null,null,false,false,false,null,null,"icon-system-angle-right");	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnSelectClick(event)}));xf._p(justep('btnSelect'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action7,'btnSelect', evt,false)});	
var xf_trigger_btnUnSelect=new xforms.XFTrigger('btnUnSelect',null,null,null,false,false,false,null,null,"icon-system-angle-left");	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnUnSelectClick(event)}));xf._p(justep('btnUnSelect'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action6,'btnUnSelect', evt,false)});	
var xf_trigger_btnClear=new xforms.XFTrigger('btnClear',null,null,null,false,false,false,null,null,"icon-system-angle-double-left");	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnClearClick(event)}));xf._p(justep('btnClear'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action5,'btnClear', evt,false)});	
new xforms.XFGrid({id:'gridOrgTree',instance:'dOrgTree',systemColumnsPro:'sFID,sFName,sOrgKindID,sParent,virtual',onInit:null,type:'tree',smartRender:20,delay:true,ids:'sName,space-column',headNames:'sName,&nbsp;',widths:'*,*',types:'tree,ro',hiddenColumns:'',aligns:',',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'selectExecutorsDialog.gridOrgTreeShowNodeImg',multiSelection:'true',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:'selectExecutorsDialog.gridRowValueChanged',groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:'selectExecutorsDialog.gridCellHint',cascade:null,hasChildrenCallback1:'selectExecutorsDialog.gridOrgTreeRowHasChildren',onRowCheck:null,onRowChecked:'selectExecutorsDialog.gridOrgTreeRowChecked',onRowCheckedAll:null,onRowExpand:'func_146422448',onRowClick:null,onRowDblClick:'selectExecutorsDialog.gridOrgTreeRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'sName','true');}});	
new xforms.XFGrid({id:'gridOrgList',instance:'dOrgList',systemColumnsPro:'sFID,sFName,sParent,virtual',onInit:null,type:'grid',smartRender:20,delay:false,ids:'sName,sOrgKindID',headNames:'名称,类型',widths:'*,40',types:'checkbox,html',hiddenColumns:'',aligns:',center',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'false',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'25',hdrRowH:'25',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:'selectExecutorsDialog.gridRowValueChanged',groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:'selectExecutorsDialog.gridCellHint',cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:'selectExecutorsDialog.gridOrgListRowChecked',onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'selectExecutorsDialog.gridOrgListRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sOrgKindID','selectExecutorsDialog.grid_sOrgKindIDRender');}});	
var xf_trigger_btnCancel=new xforms.XFTrigger('btnCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnCancelClick(event)}));xf._p(justep('btnCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'btnCancel', evt,false)});	
var xf_trigger_btnOk=new xforms.XFTrigger('btnOk',null,null,null,false,false,false,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){selectExecutorsDialog.btnOkClick(event)}));xf._p(justep('btnOk'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'btnOk', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dOrgTree_part_loaded = false;	
function load_dOrgTree_part(callback){if (dOrgTree_part_loaded) return;dOrgTree_part_loaded = true;	
new xforms.XFInstance2('dOrgTree','model',null,null,null,null,null,null,null,null,'virtual',null,'whereVersion');	
if(callback)callback();}	
var dOrgTree_part_init_loaded = false;	
function load_dOrgTree_part_init(){if (dOrgTree_part_init_loaded) return;dOrgTree_part_init_loaded = true;	
if(xforms.ready)justep('model').xformsObject.construct_part();}	
var dSelected_part_loaded = false;	
function load_dSelected_part(callback){if (dSelected_part_loaded) return;dSelected_part_loaded = true;	
new xforms.XFInstance2('dSelected','model',null,'<rows id="default48"></rows>',null,null,null,null,null,null,null,null,null);	
if(callback)callback();}	
var dSelected_part_init_loaded = false;	
function load_dSelected_part_init(){if (dSelected_part_init_loaded) return;dSelected_part_init_loaded = true;	
if(xforms.ready)justep('model').xformsObject.construct_part();}	
var dOrgList_part_loaded = false;	
function load_dOrgList_part(callback){if (dOrgList_part_loaded) return;dOrgList_part_loaded = true;	
new xforms.XFInstance2('dOrgList','model',null,null,null,null,null,null,null,null,'virtual',null,'whereVersion');	
if(callback)callback();}	
var dOrgList_part_init_loaded = false;	
function load_dOrgList_part_init(){if (dOrgList_part_init_loaded) return;dOrgList_part_init_loaded = true;	
if(xforms.ready)justep('model').xformsObject.construct_part();}	
var dOrgBackground_part_loaded = false;	
function load_dOrgBackground_part(callback){if (dOrgBackground_part_loaded) return;dOrgBackground_part_loaded = true;	
new xforms.XFInstance2('dOrgBackground','model',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dOrgBackground',null);	
if(callback)callback();}	
var dOrgBackground_part_init_loaded = false;	
function load_dOrgBackground_part_init(){if (dOrgBackground_part_init_loaded) return;dOrgBackground_part_init_loaded = true;	
if(xforms.ready)justep('model').xformsObject.construct_part();}	
var __actions__ = {	
};	
