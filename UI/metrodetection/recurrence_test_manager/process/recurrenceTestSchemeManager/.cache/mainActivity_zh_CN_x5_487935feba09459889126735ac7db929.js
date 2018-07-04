
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/windowFrame.xbl.xml#windowFrame"] = _xbl_JSClassDefine_windowFrame;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_windowFrame(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowFrame.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var windowFrame = new justep.WindowFrame(this.domNode.id, this.domNode.getAttribute("url")||"", this.domNode.getAttribute("auto-load"), 
														this.domNode.getAttribute('onSend'), this.domNode.getAttribute('onReceive'), this.domNode.getAttribute('onInit'), this.domNode.getAttribute('onInitFrame'),
														{"process":this.domNode.getAttribute("process"),"activity":this.domNode.getAttribute("activity")});
				justep.Object.extend(this, windowFrame);
			}
		}));

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

	var ids=[{id:'window', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'recurrencetestSchemeFrame', name:'/UI/system/components/windowFrame.xbl.xml#windowFrame'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
function init() {	
var begin = new Date().getTime();	
var xf_model_model1 = new xforms.XFModel('model1',null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var __actions__ = {	
};	
