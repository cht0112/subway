
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

	var ids=[{id:'9147d744a95e44a8b630724a14f9006f', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'iptDate', name:'xforms:input'},{id:'trgOK', name:'xforms:trigger', children:[{id:'03f6766e6cb642c3b936cff82923f039', name:'xforms:label'}]},{id:'trgCancel', name:'xforms:trigger', children:[{id:'e6fdb67857a54d8fad58445a154fc10e', name:'xforms:label'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'iptDate');xf._a(null,'trgOK');xf._a('trgOK','03f6766e6cb642c3b936cff82923f039');xf._a(null,'trgCancel');xf._a('trgCancel','e6fdb67857a54d8fad58445a154fc10e');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dAssetInDate')/assetInDate",xf._g(xf._f('instance',xf._i("dAssetInDate")),xf._h(false, xf._k("child",xf._j('','assetInDate')))));	
xf._b("data('dAssetInDate')/assetInDate",xf._g(xf._f('data',xf._i("dAssetInDate")),xf._h(false, xf._k("child",xf._j('','assetInDate')))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dAssetInDate','mdMain',null,'<rows id="default2"><row id="default3"><cell id="default4"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dAssetInDate','assetInDate');	
xf._c('xf-bind-0','mdMain',"instance('dAssetInDate')/assetInDate","xsd:date",null,null,null,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainload(event)}));xf._p(justep('mdMain'),"onload",null,function(evt) { xforms.run(xf_action_action3,'mdMain', evt,false)});	
xf._d('iptDate','text',xf._q("data('dAssetInDate')/assetInDate"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_trigger_trgOK=new xforms.XFTrigger('trgOK',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgOKDOMActivate(event)}));xf._p(justep('trgOK'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trgOK', evt,false)});	
var xf_trigger_trgCancel=new xforms.XFTrigger('trgCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgCancelDOMActivate(event)}));xf._p(justep('trgCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'trgCancel', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var __actions__ = {	
};	
