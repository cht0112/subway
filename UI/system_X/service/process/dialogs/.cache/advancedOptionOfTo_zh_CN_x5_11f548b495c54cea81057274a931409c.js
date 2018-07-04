
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'5c98fbdace903ebd89ff53f1533150b2',time:1528686186},m:'23a15a0b88ef64687d894e52609bc459'};
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
_xbl_JSClassDefine_windowReceiver.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowReceiver',key:'5c98fbdace903ebd89ff53f1533150b2',time:1528686186},m:'811331e472d9a35d3ba04b57eefe29b8'};
	var ids=[{id:'2b5a586a27a445a7834d880b528442dd', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'inputName', name:'xforms:input'},{id:'btnOk', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'btnCancel', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'gridSelectExecuteMode', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default14', name:'xforms:value'}]},{id:'gridSelectPreemptMode', name:'xforms:gridselect1', children:[{id:'xuiLabel4', name:'xforms:label'},{id:'default29', name:'xforms:value'}]},{id:'input2', name:'xforms:input'},{id:'input3', name:'xforms:input'},{id:'input4', name:'xforms:input'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='5c98fbdace903ebd89ff53f1533150b2';
xforms.Core.fileName='form.js';	
xf._a(null,'inputName');xf._a(null,'btnOk');xf._a('btnOk','xuiLabel1');xf._a(null,'btnCancel');xf._a('btnCancel','xuiLabel2');xf._a(null,'gridSelectExecuteMode');xf._a('gridSelectExecuteMode','xuiLabel3');xf._a('gridSelectExecuteMode','default15');xf._a(null,'gridSelectPreemptMode');xf._a('gridSelectPreemptMode','xuiLabel4');xf._a('gridSelectPreemptMode','default30');xf._a(null,'input2');xf._a(null,'input3');xf._a(null,'input4');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dMain')/sPreemptMode",xf._g(xf._f('instance',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sPreemptMode')))));	
xf._b("data('dMain')/sExecuteMode != 'temPreempt'",xf._l(xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sExecuteMode')))), '!=',xf._i("temPreempt")));	
xf._b("instance('dMain')/sCreateTime",xf._g(xf._f('instance',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('dMain')/sLimitTime",xf._g(xf._f('instance',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("instance('dMain')/sWarningTime",xf._g(xf._f('instance',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xf._b("data('dMain')/sName",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("data('dMain')/sExecuteMode",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sExecuteMode')))));	
xf._b("data('dMain')/sExecuteModeLabel",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sExecuteModeLabel')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("data('dMain')/sPreemptMode",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sPreemptMode')))));	
xf._b("data('dMain')/sPreemptModeLabel",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sPreemptModeLabel')))));	
xf._b("data('dMain')/sCreateTime",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("data('dMain')/sLimitTime",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("data('dMain')/sWarningTime",xf._g(xf._f('data',xf._i("dMain")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
xf._d('inputName','text',xf._q("data('dMain')/sName"),null,null,null,null,false,false);	
var xf_trigger_btnOk=new xforms.XFTrigger('btnOk',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){advancedOptionOfTo.btnOkClick(event)}));xf._p(justep('btnOk'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnOk', evt,false)});	
var xf_trigger_btnCancel=new xforms.XFTrigger('btnCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){advancedOptionOfTo.btnCancelClick(event)}));xf._p(justep('btnCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'btnCancel', evt,false)});	
new xforms.XFExtSelect({id:'gridSelectExecuteMode',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dMain')/sExecuteMode"),labelRef:xf._q("data('dMain')/sExecuteModeLabel"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default17"><row id="default18"><cell id="default19">temSequential</cell><cell id="default20">顺序</cell></row><row id="default21"><cell id="default22">temPreempt</cell><cell id="default23">抢占</cell></row><row id="default24"><cell id="default25">temSimultaneous</cell><cell id="default26">同时</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelectPreemptMode',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dMain')/sPreemptMode"),labelRef:xf._q("data('dMain')/sPreemptModeLabel"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default48"><row id="default49"><cell id="default50">tpmOpen</cell><cell id="default51">打开时抢占</cell></row><row id="default52"><cell id="default53">tpmExecute</cell><cell id="default54">执行时抢占</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('input2','text',xf._q("data('dMain')/sCreateTime"),null,null,null,null,false,false);	
xf._d('input3','text',xf._q("data('dMain')/sLimitTime"),null,null,null,null,false,false);	
xf._d('input4','text',xf._q("data('dMain')/sWarningTime"),null,null,null,null,false,false);	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dMain_part_loaded = false;	
function load_dMain_part(callback){if (dMain_part_loaded) return;dMain_part_loaded = true;	
new xforms.XFInstance2('dMain','model1',null,'<rows id="default1"><row id="default2"><cell id="default3"></cell><cell id="default4"></cell><cell id="default5"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dMain','sName,sExecuteMode,sExecuteModeLabel,sPreemptMode,sPreemptModeLabel,sCreateTime,sLimitTime,sWarningTime');	
xf._c('xf-bind-0','model1',"instance('dMain')/sPreemptMode","xsd:string","data('dMain')/sExecuteMode != 'temPreempt'",null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dMain')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dMain')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('dMain')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dMain_part_init_loaded = false;	
function load_dMain_part_init(){if (dMain_part_init_loaded) return;dMain_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var __actions__ = {	
};	
