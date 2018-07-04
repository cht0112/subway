
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"] = _xbl_JSClassDefine_windowDialogReceiver;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
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

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

	var ids=[{id:'3d012c228a374635a390c6692221a2f7', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'inputParentFName', name:'xforms:input'},{id:'inputName', name:'xforms:input'},{id:'inputCode', name:'xforms:input'},{id:'receiver', name:'/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver'},{id:'gridOrg', name:'xforms:grid'},{id:'btnOK', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'btnCancel', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'inputParentFName');xf._a(null,'inputName');xf._a(null,'inputCode');xf._a(null,'gridOrg');xf._a(null,'btnOK');xf._a('btnOK','xuiLabel1');xf._a(null,'btnCancel');xf._a('btnCancel','xuiLabel2');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dOrg')/calcOrgKind",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','calcOrgKind')))));	
xf._b("call('justep.OpmUtils.getOrgKindLabel',data('dOrg')/sOrgKindID)",xf._f('call',xf._i("justep.OpmUtils.getOrgKindLabel"),xf._g(xf._f('data',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sOrgKindID'))))));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dOrg')/calcValidState",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','calcValidState')))));	
xf._b("call('justep.OpmUtils.getValidStateLabel', data('dOrg')/sValidState)",xf._f('call',xf._i("justep.OpmUtils.getValidStateLabel"),xf._g(xf._f('data',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sValidState'))))));	
xf._b("instance('dOrg')",xf._f('instance',xf._i("dOrg")));	
xf._b("call('orgDetail.getReadOnly')",xf._f('call',xf._i("orgDetail.getReadOnly")));	
xf._b("instance('dOrg')/sName",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("'名称不能为空！'",xf._i("名称不能为空！"));	
xf._b("instance('dOrg')/sCode",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sCode')))));	
xf._b("'编码不能为空！'",xf._i("编码不能为空！"));	
xf._b("instance('dOrg')/sValidState",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrg')/sLevel",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrg')/version",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dOrg')/personNumb",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('dOrg')/personValidState",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('dOrg')/personVersion",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('dOrg')/eDUCATIONID",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('dOrg')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('dOrg')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('dOrg')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('dParent')/sFName",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','sFName')))));	
xf._b("instance('dParent')/sValidState",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dParent')/sLevel",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dParent')/version",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dParent')/personNumb",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('dParent')/personValidState",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('dParent')/personVersion",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('dParent')/eDUCATIONID",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('dParent')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('dParent')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('dParent')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("data('dParent')/sFName",xf._g(xf._f('data',xf._i("dParent")),xf._h(false, xf._k("child",xf._j('','sFName')))));	
xf._b("data('dOrg')/sName",xf._g(xf._f('data',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("data('dOrg')/sCode",xf._g(xf._f('data',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sCode')))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
xf._d('inputParentFName','text',xf._q("data('dParent')/sFName"),null,null,null,null,false,false);	
xf._d('inputName','text',xf._q("data('dOrg')/sName"),null,null,null,null,false,false);	
xf._d('inputCode','text',xf._q("data('dOrg')/sCode"),null,null,null,null,false,false);	
new xforms.XFGrid({id:'gridOrg',instance:'dOrg',systemColumnsPro:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME,calcOrgKind,calcValidState',onInit:null,type:'grid',smartRender:null,delay:false,ids:'space-column,sName',headNames:',',widths:'*,*',types:'ro,ro',hiddenColumns:'',aligns:',',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_btnOK=new xforms.XFTrigger('btnOK',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){orgDetail.btnOKClick(event)}));xf._p(justep('btnOK'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'btnOK', evt,false)});	
var xf_trigger_btnCancel=new xforms.XFTrigger('btnCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){orgDetail.btnCancelClick(event)}));xf._p(justep('btnCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnCancel', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dOrg_part_loaded = false;	
function load_dOrg_part(callback){if (dOrg_part_loaded) return;dOrg_part_loaded = true;	
new xforms.XFInstance2('dOrg','model1',null,null,null,null,null,null,null,null,'calcOrgKind,calcValidState',null,'whereVersion');	
xf._c('xf-bind-0','model1',"instance('dOrg')/calcOrgKind",null,"true()",null,null,"call('justep.OpmUtils.getOrgKindLabel',data('dOrg')/sOrgKindID)",null,null);	
xf._c('xf-bind-1','model1',"instance('dOrg')/calcValidState",null,"true()",null,null,"call('justep.OpmUtils.getValidStateLabel', data('dOrg')/sValidState)",null,null);	
xf._c('xf-bind-2','model1',"instance('dOrg')",null,"call('orgDetail.getReadOnly')",null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('dOrg')/sName",null,null,"true()",null,null,null,"'名称不能为空！'");	
xf._c('xf-bind-4','model1',"instance('dOrg')/sCode",null,null,"true()",null,null,null,"'编码不能为空！'");	
xf._c('xf-bind-5','model1',"instance('dOrg')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dOrg')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('dOrg')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('dOrg')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('dOrg')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('dOrg')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('dOrg')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('dOrg')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('dOrg')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('dOrg')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrg_part_init_loaded = false;	
function load_dOrg_part_init(){if (dOrg_part_init_loaded) return;dOrg_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var dParent_part_loaded = false;	
function load_dParent_part(callback){if (dParent_part_loaded) return;dParent_part_loaded = true;	
new xforms.XFInstance2('dParent','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dParent',null);	
xf._c('xf-bind-15','model1',"instance('dParent')/sFName",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('dParent')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('dParent')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('dParent')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('dParent')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('dParent')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('dParent')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('dParent')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('dParent')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('dParent')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('dParent')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dParent_part_init_loaded = false;	
function load_dParent_part_init(){if (dParent_part_init_loaded) return;dParent_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var __actions__ = {	
};	
