
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"] = _xbl_JSClassDefine_windowDialogReceiver;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
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
_xbl_JSClassDefine_windowDialogReceiver.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialogReceiver',key:'e097147233bb184c187dd798212f88aa',time:1525315135},m:'886605355a47a824a8d2c12e5bfa3ded'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'e097147233bb184c187dd798212f88aa',time:1525315135},m:'f905c02f94de958af995bf094acd0700'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'e097147233bb184c187dd798212f88aa',time:1525315135},m:'9ed5f266e0bb49d0d67e7c8ba7c3e803'};
	var ids=[{id:'91f5b3bf61bf42a79c720d0cb11b5f99', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'inputName', name:'xforms:input'},{id:'inputCode', name:'xforms:input'},{id:'inputRoleKind', name:'xforms:input'},{id:'inputCatalog', name:'xforms:input'},{id:'receiver', name:'/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver'},{id:'inputDescription', name:'xforms:input'},{id:'wdSelectRoles', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'gridRole', name:'xforms:grid'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel1', name:'xforms:label'},{id:'default3', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'xuiLabel2', name:'xforms:label'},{id:'default5', name:'xforms:value'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='e097147233bb184c187dd798212f88aa';
xforms.Core.fileName='form.js';	
xf._a(null,'inputName');xf._a(null,'inputCode');xf._a(null,'inputRoleKind');xf._a(null,'inputCatalog');xf._a(null,'inputDescription');xf._a(null,'gridRole');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel1');xf._a('gridSelect1','default4');xf._a(null,'gridSelect2');xf._a('gridSelect2','xuiLabel2');xf._a('gridSelect2','default6');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dRole')/sCode",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sCode')))));	
xf._b("true()",xf._f('true'));	
xf._b("'编号不能为空！'",xf._i("编号不能为空！"));	
xf._b("instance('dRole')/sName",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("'名称不能为空！'",xf._i("名称不能为空！"));	
xf._b("instance('dRole')/sParentRolesNames",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sParentRolesNames')))));	
xf._b("instance('dRole')/sRoleKind",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sRoleKind')))));	
xf._b("instance('dRole')/calcRoleKind",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','calcRoleKind')))));	
xf._b("call('justep.OpmUtils.getRoleKindLabel',data('dRole')/sRoleKind)",xf._f('call',xf._i("justep.OpmUtils.getRoleKindLabel"),xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sRoleKind'))))));	
xf._b("instance('dRole')/fZW",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','fZW')))));	
xf._b("'职位不能为空！'",xf._i("职位不能为空！"));	
xf._b("instance('dRole')/fGW",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','fGW')))));	
xf._b("'岗位不能为空！'",xf._i("岗位不能为空！"));	
xf._b("instance('dRole')/sSequence",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('dRole')/sValidState",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dRole')/version",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dParentRole')/version",xf._g(xf._f('instance',xf._i("dParentRole")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dRole')/sName",xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("data('dRole')/sCode",xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sCode')))));	
xf._b("data('dRole')/calcRoleKind",xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','calcRoleKind')))));	
xf._b("data('dRole')/sCatalog",xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sCatalog')))));	
xf._b("data('dRole')/sDescription",xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sDescription')))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("data('dRole')/fZW",xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','fZW')))));	
xf._b("oFFICEIDCNAME",xf._h(false, xf._k("child",xf._j('','oFFICEIDCNAME'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("oFFICEIDENAME",xf._h(false, xf._k("child",xf._j('','oFFICEIDENAME'))));	
xf._b("data('dRole')/fGW",xf._g(xf._f('data',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','fGW')))));	
xf._b("pOSITIONIDCNAME",xf._h(false, xf._k("child",xf._j('','pOSITIONIDCNAME'))));	
xf._b("pOSITIONIDENAME",xf._h(false, xf._k("child",xf._j('','pOSITIONIDENAME'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dRole','model1',null,null,null,null,null,null,null,null,'calcRoleKind',null,'whereVersion');new SimpleStore('dRole',null);	
xf._c('xf-bind-0','model1',"instance('dRole')/sCode",null,null,"true()",null,null,null,"'编号不能为空！'");	
xf._c('xf-bind-1','model1',"instance('dRole')/sName",null,null,"true()",null,null,null,"'名称不能为空！'");	
xf._c('xf-bind-2','model1',"instance('dRole')/sParentRolesNames",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('dRole')/sRoleKind",null,"true()","true()",null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dRole')/calcRoleKind",null,"true()",null,null,"call('justep.OpmUtils.getRoleKindLabel',data('dRole')/sRoleKind)",null,null);	
xf._c('xf-bind-5','model1',"instance('dRole')/fZW",null,null,"true()",null,null,null,"'职位不能为空！'");	
xf._c('xf-bind-6','model1',"instance('dRole')/fGW",null,null,"true()",null,null,null,"'岗位不能为空！'");	
xf._c('xf-bind-7','model1',"instance('dRole')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('dRole')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('dRole')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('bizData1',null);	
new xforms.XFInstance2('bizData2','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('bizData2',null);	
xf._d('inputName','text',xf._q("data('dRole')/sName"),null,null,null,null,false,false);	
xf._d('inputCode','text',xf._q("data('dRole')/sCode"),null,null,null,null,false,false);	
xf._d('inputRoleKind','text',xf._q("data('dRole')/calcRoleKind"),null,null,null,null,false,false);	
xf._d('inputCatalog','text',xf._q("data('dRole')/sCatalog"),null,null,null,null,false,false);	
xf._d('inputDescription','text',xf._q("data('dRole')/sDescription"),null,null,null,null,false,false);	
new xforms.XFGrid({id:'gridRole',instance:'dRole',systemColumnsPro:'sCode,sCatalog,sRoleKind,sDescription,sSequence,sValidState,sParentRolesNames,version,fZW,fGW,calcRoleKind',onInit:null,type:'grid',smartRender:null,delay:false,ids:'space-column,sName',headNames:',',widths:'*,*',types:'ro,ro',hiddenColumns:'',aligns:',',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dRole')/fZW"),labelRef:xf._q("data('dRole')/fZW"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'oFFICEIDCNAME,__c_,oFFICEIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'oFFICEIDENAME',valueColumn:'oFFICEIDCNAME',labelColumn:'oFFICEIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dRole')/fGW"),labelRef:xf._q("data('dRole')/fGW"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData2',columns:'pOSITIONIDCNAME,__c_,pOSITIONIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'pOSITIONIDENAME',valueColumn:'pOSITIONIDCNAME',labelColumn:'pOSITIONIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dParentRole_part_loaded = false;	
function load_dParentRole_part(callback){if (dParentRole_part_loaded) return;dParentRole_part_loaded = true;	
new xforms.XFInstance2('dParentRole','model1',null,null,null,null,null,null,null,null,'calcCheckBox',null,'whereVersion');	
xf._c('xf-bind-10','model1',"instance('dParentRole')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dParentRole_part_init_loaded = false;	
function load_dParentRole_part_init(){if (dParentRole_part_init_loaded) return;dParentRole_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var __actions__ = {	
};	
