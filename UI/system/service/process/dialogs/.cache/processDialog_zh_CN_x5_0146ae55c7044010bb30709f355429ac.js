
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'ce6693d3d0a09827e3df3c8d1b297078',time:1528686162},m:'9005785c21a7e5ca5d2a204e104792b3'};
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
_xbl_JSClassDefine_windowReceiver.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowReceiver',key:'ce6693d3d0a09827e3df3c8d1b297078',time:1528686162},m:'c061a3c09f0fda02252f988db8131077'};
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

_xbl_JSClassDefine_windowDialog.prototype.ClassName='_xbl_JSClassDefine_windowDialog';
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'ce6693d3d0a09827e3df3c8d1b297078',time:1528686162},m:'0f931416413064f661ca0046d6bccd16'};
	var ids=[{id:'7945a2412a694dd68432d039831070f9', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'gridActivities', name:'xforms:grid'},{id:'gridNotices', name:'xforms:grid'},{id:'textareaContent', name:'xforms:textarea'},{id:'btnExit', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'btnExecute', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]},{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'wdSelectExecutors', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdAdvancedOptionOfTo', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdAdvancedOptionOfNotice', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='ce6693d3d0a09827e3df3c8d1b297078';
xforms.Core.fileName='form.js';	
xf._a(null,'gridActivities');xf._a(null,'gridNotices');xf._a(null,'textareaContent');xf._a(null,'btnExit');xf._a('btnExit','xuiLabel2');xf._a(null,'btnExecute');xf._a('btnExecute','xuiLabel3');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dTask')/version",xf._g(xf._f('instance',xf._i("dTask")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("executorNames",xf._h(false, xf._k("child",xf._j('','executorNames'))));	
xf._b("advancedOption",xf._h(false, xf._k("child",xf._j('','advancedOption'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("activity",xf._h(false, xf._k("child",xf._j('','activity'))));	
xf._b("check",xf._h(false, xf._k("child",xf._j('','check'))));	
xf._b("name",xf._h(false, xf._k("child",xf._j('','name'))));	
xf._b("data('dTask')/sContent",xf._g(xf._f('data',xf._i("dTask")),xf._h(false, xf._k("child",xf._j('','sContent')))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ch', 'null');var xf_model_model = new xforms.XFModel('model',null);	
new xforms.XFInstance2('dActivities','model',null,null,null,null,null,null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){processDialog.modelXBLLoaded(event)}));xf._p(justep('model'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'model', evt,false)});	
new xforms.XFGrid({id:'gridActivities',instance:'dActivities',systemColumnsPro:'name,isSelectable,isOptional,check',onInit:null,type:'treegrid',smartRender:null,delay:false,ids:'label,executorNames,advancedOption,space-column',headNames:'环节,办理人,&nbsp;,&nbsp;',widths:'175,325,60,*',types:'tree,html,html,ro',hiddenColumns:'',aligns:',,center,',serverSort:true,sorts:'na,na,na,na',fixColumnSize:null,nodeImgCallback:'processDialog.gridActivitiesShowNodeImg',multiSelection:'true',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'25',hdrRowH:'25',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:'processDialog.gridActivitiesRowChecked',onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'label','true');this.grid.bindColHTMLCallback(null,'executorNames','processDialog.gridActivities_executorNamesRender');this.grid.bindColHTMLCallback(null,'advancedOption','processDialog.gridActivities_advancedOptionRender');}});	
new xforms.XFGrid({id:'gridNotices',instance:'dNotices',systemColumnsPro:null,onInit:null,type:'grid',smartRender:null,delay:false,ids:'activity,check,name,executorNames,advancedOption,space-column',headNames:'activity,&nbsp;,通知,接收人,&nbsp;,&nbsp;',widths:'*,25,150,325,60,*',types:'ro,ch,ro,html,html,ro',hiddenColumns:'activity',aligns:',center,,,center,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'true',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'25',hdrRowH:'25',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'executorNames','processDialog.gridNotices_executorNamesRender');this.grid.bindColHTMLCallback(null,'advancedOption','processDialog.gridNotices_advancedOptionRender');}});	
xf._d('textareaContent','textarea',xf._q("data('dTask')/sContent"),null,null,null,null,false,false);	
var xf_trigger_btnExit=new xforms.XFTrigger('btnExit',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){processDialog.btnExitClick(event)}));xf._p(justep('btnExit'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'btnExit', evt,false)});	
var xf_trigger_btnExecute=new xforms.XFTrigger('btnExecute',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){processDialog.btnExecuteClick(event)}));xf._p(justep('btnExecute'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnExecute', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dTask_part_loaded = false;	
function load_dTask_part(callback){if (dTask_part_loaded) return;dTask_part_loaded = true;	
new xforms.XFInstance2('dTask','model',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dTask',null);	
xf._c('xf-bind-0','model',"instance('dTask')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dTask_part_init_loaded = false;	
function load_dTask_part_init(){if (dTask_part_init_loaded) return;dTask_part_init_loaded = true;	
if(xforms.ready)justep('model').xformsObject.construct_part();}	
var dNotices_part_loaded = false;	
function load_dNotices_part(callback){if (dNotices_part_loaded) return;dNotices_part_loaded = true;	
new xforms.XFInstance2('dNotices','model',null,null,null,null,null,null,null,null,null,null,null);	
if(callback)callback();}	
var dNotices_part_init_loaded = false;	
function load_dNotices_part_init(){if (dNotices_part_init_loaded) return;dNotices_part_init_loaded = true;	
if(xforms.ready)justep('model').xformsObject.construct_part();}	
var __actions__ = {	
};	
