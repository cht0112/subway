
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

	var ids=[{id:'window', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'windowReceiver1', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default4', name:'xforms:label'},{id:'default5', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default7', name:'xforms:label'},{id:'default8', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default10', name:'xforms:label'},{id:'default11', name:'xforms:value'}]},{id:'trigger1', name:'xforms:trigger', children:[{id:'default37', name:'xforms:label'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'gridSelect1');xf._a('gridSelect1','default4');xf._a('gridSelect1','default6');xf._a(null,'gridSelect2');xf._a('gridSelect2','default7');xf._a('gridSelect2','default9');xf._a(null,'gridSelect3');xf._a('gridSelect3','default10');xf._a('gridSelect3','default12');xf._a(null,'trigger1');xf._a('trigger1','default37');function init() {	
var begin = new Date().getTime();	
xf._b("instance('assetTypeD')/version",xf._g(xf._f('instance',xf._i("assetTypeD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('assetTypeD')/pARENTLEV",xf._g(xf._f('instance',xf._i("assetTypeD")),xf._h(false, xf._k("child",xf._j('','pARENTLEV')))));	
xf._b("instance('toolSortD')/version",xf._g(xf._f('instance',xf._i("toolSortD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('toolSortD')/pARENTLEV",xf._g(xf._f('instance',xf._i("toolSortD")),xf._h(false, xf._k("child",xf._j('','pARENTLEV')))));	
xf._b("instance('toolCategoryD')/version",xf._g(xf._f('instance',xf._i("toolCategoryD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('toolSortTypeCategoryCD')/toolCategory",xf._g(xf._f('instance',xf._i("toolSortTypeCategoryCD")),xf._h(false, xf._k("child",xf._j('','toolCategory')))));	
xf._b("true()",xf._f('true'));	
xf._b("'不能为空'",xf._i("不能为空"));	
xf._b("instance('toolSortTypeCategoryCD')/toolSort",xf._g(xf._f('instance',xf._i("toolSortTypeCategoryCD")),xf._h(false, xf._k("child",xf._j('','toolSort')))));	
xf._b("instance('toolSortTypeCategoryCD')/toolType",xf._g(xf._f('instance',xf._i("toolSortTypeCategoryCD")),xf._h(false, xf._k("child",xf._j('','toolType')))));	
xf._b("data('toolSortTypeCategoryCD')/toolCategory",xf._g(xf._f('data',xf._i("toolSortTypeCategoryCD")),xf._h(false, xf._k("child",xf._j('','toolCategory')))));	
xf._b("tOOLCATEGORYCNAME",xf._h(false, xf._k("child",xf._j('','tOOLCATEGORYCNAME'))));	
xf._b("TOOL_CATEGORY_CODE",xf._h(false, xf._k("child",xf._j('','TOOL_CATEGORY_CODE'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("tOOLCATEGORYENAME",xf._h(false, xf._k("child",xf._j('','tOOLCATEGORYENAME'))));	
xf._b("nUMSCODE",xf._h(false, xf._k("child",xf._j('','nUMSCODE'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("data('toolSortTypeCategoryCD')/toolSort",xf._g(xf._f('data',xf._i("toolSortTypeCategoryCD")),xf._h(false, xf._k("child",xf._j('','toolSort')))));	
xf._b("tOOLSORTCNAME",xf._h(false, xf._k("child",xf._j('','tOOLSORTCNAME'))));	
xf._b("TOOL_SORT_CODE",xf._h(false, xf._k("child",xf._j('','TOOL_SORT_CODE'))));	
xf._b("tOOLSORTENAME",xf._h(false, xf._k("child",xf._j('','tOOLSORTENAME'))));	
xf._b("pARENTLEV",xf._h(false, xf._k("child",xf._j('','pARENTLEV'))));	
xf._b("data('toolSortTypeCategoryCD')/toolType",xf._g(xf._f('data',xf._i("toolSortTypeCategoryCD")),xf._h(false, xf._k("child",xf._j('','toolType')))));	
xf._b("tOOLTYPECNAME",xf._h(false, xf._k("child",xf._j('','tOOLTYPECNAME'))));	
xf._b("TOOL_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','TOOL_TYPE_CODE'))));	
xf._b("tOOLTYPEENAME",xf._h(false, xf._k("child",xf._j('','tOOLTYPEENAME'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('toolCategoryD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('toolCategoryD',null);	
xf._c('xf-bind-4','model1',"instance('toolCategoryD')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('toolSortTypeCategoryCD','model1',null,null,null,null,null,null,null,null,null,null,null);new SimpleStore('toolSortTypeCategoryCD','toolCategory,toolSort,toolType');	
xf._c('xf-bind-5','model1',"instance('toolSortTypeCategoryCD')/toolCategory",null,null,"true()",null,null,null,"'不能为空'");	
xf._c('xf-bind-6','model1',"instance('toolSortTypeCategoryCD')/toolSort",null,null,"true()",null,null,null,"'不能为空'");	
xf._c('xf-bind-7','model1',"instance('toolSortTypeCategoryCD')/toolType",null,null,"true()",null,null,null,"'不能为空'");	
xforms.load_parts('view1');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var assetTypeD_part_loaded = false;	
function load_assetTypeD_part(callback){if (assetTypeD_part_loaded) return;assetTypeD_part_loaded = true;	
new xforms.XFInstance2('assetTypeD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('assetTypeD',null);	
xf._c('xf-bind-0','model1',"instance('assetTypeD')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('assetTypeD')/pARENTLEV","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var assetTypeD_part_init_loaded = false;	
function load_assetTypeD_part_init(){if (assetTypeD_part_init_loaded) return;assetTypeD_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var toolSortD_part_loaded = false;	
function load_toolSortD_part(callback){if (toolSortD_part_loaded) return;toolSortD_part_loaded = true;	
new xforms.XFInstance2('toolSortD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('toolSortD',null);	
xf._c('xf-bind-2','model1',"instance('toolSortD')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('toolSortD')/pARENTLEV","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var toolSortD_part_init_loaded = false;	
function load_toolSortD_part_init(){if (toolSortD_part_init_loaded) return;toolSortD_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('toolSortTypeCategoryCD')/toolCategory"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'toolCategoryD',columns:'TOOL_CATEGORY_CODE,tOOLCATEGORYCNAME,__c_,tOOLCATEGORYENAME,nUMSCODE,version',headerH:null,rowH:'36',dropdownClass:'xui-grid-hide-VLine',hiddenColumns:'TOOL_CATEGORY_CODE,tOOLCATEGORYENAME,nUMSCODE,version',valueColumn:'TOOL_CATEGORY_CODE',labelColumn:'tOOLCATEGORYCNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('toolSortTypeCategoryCD')/toolSort"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'toolSortD',columns:'TOOL_SORT_CODE,tOOLSORTCNAME,__c_,tOOLSORTENAME,nUMSCODE,version,pARENTLEV',headerH:null,rowH:'36',dropdownClass:'xui-grid-hide-VLine',hiddenColumns:'TOOL_SORT_CODE,tOOLSORTENAME,nUMSCODE,version,pARENTLEV',valueColumn:'TOOL_SORT_CODE',labelColumn:'tOOLSORTCNAME',extColumn:null,labels:',,,,,,',aligns:',,,,,,',types:'ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'asset.gridSelect2Dropdown',onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('toolSortTypeCategoryCD')/toolType"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'assetTypeD',columns:'TOOL_TYPE_CODE,tOOLTYPECNAME,__c_,tOOLTYPEENAME,nUMSCODE,version,pARENTLEV',headerH:null,rowH:'36',dropdownClass:'xui-grid-hide-VLine',hiddenColumns:'TOOL_TYPE_CODE,tOOLTYPEENAME,nUMSCODE,version,pARENTLEV',valueColumn:'TOOL_TYPE_CODE',labelColumn:'tOOLTYPECNAME',extColumn:null,labels:',,,,,,',aligns:',,,,,,',types:'ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'asset.gridSelect3Dropdown',onCloseup:null});	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){asset.trigger1Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trigger1', evt,false)});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
