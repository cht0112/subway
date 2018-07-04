
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'99854ca9d1b6cb3e04bd967510d2e8cb',time:1529388287},m:'937dfb06a2627c0c33afd5ad60c4d153'};
	var ids=[{id:'7fd79fd69a0e43e6bc2558d511046c69', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default7', name:'xforms:label'},{id:'default8', name:'xforms:value'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='99854ca9d1b6cb3e04bd967510d2e8cb';
xforms.Core.fileName='form.js';	
xf._a(null,'gridSelect2');xf._a('gridSelect2','default7');xf._a('gridSelect2','default9');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dectionBaseInfoData')/vALIDDATETIME",xf._g(xf._f('instance',xf._i("dectionBaseInfoData")),xf._h(false, xf._k("child",xf._j('','vALIDDATETIME')))));	
xf._b("instance('dectionBaseInfoData')/vALIDSTATE",xf._g(xf._f('instance',xf._i("dectionBaseInfoData")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("instance('dectionBaseInfoData')/version",xf._g(xf._f('instance',xf._i("dectionBaseInfoData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('tempData')/name",xf._g(xf._f('data',xf._i("tempData")),xf._h(false, xf._k("child",xf._j('','name')))),'','http://www.justep.com/xui');	
xf._b("'请选择检测依据'",xf._i("请选择检测依据"));	
xf._b("dECTIONBASEDONNAME",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME'))),'','http://www.justep.com/xui');	
xf._b("DECTION_BASED_ON_INFO",xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO'))),'','http://www.justep.com/xui');	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','http://www.justep.com/xui');	
xf._b("vALIDDATETIME",xf._h(false, xf._k("child",xf._j('','vALIDDATETIME'))),'','http://www.justep.com/xui');	
xf._b("vALIDSTATE",xf._h(false, xf._k("child",xf._j('','vALIDSTATE'))),'','http://www.justep.com/xui');	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))),'','http://www.justep.com/xui');	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dectionBaseInfoData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dectionBaseInfoData',null);	
xf._c('xf-bind-0','model1',"instance('dectionBaseInfoData')/vALIDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dectionBaseInfoData')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dectionBaseInfoData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('tempData','model1',null,'<rows id="default4"><row id="default5"><cell id="default6"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('tempData','name');	
xforms.load_parts('view1');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:xf._q("'请选择检测依据'"),allSelectedLabelRef:null,ref:xf._q("data('tempData')/name"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'dectionBaseInfoData',columns:'DECTION_BASED_ON_INFO,dECTIONBASEDONNAME,__c_,vALIDDATETIME,vALIDSTATE,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DECTION_BASED_ON_INFO,vALIDDATETIME,vALIDSTATE,version',valueColumn:'DECTION_BASED_ON_INFO',labelColumn:'dECTIONBASEDONNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
