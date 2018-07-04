
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
 };justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'ea8044092c3db63e51e34df9bbe2a418',time:1529979198},m:'d15a106260c3efd836a5bb942ad340a9'};
function _xbl_JSClassDefine_dialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_dialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var dialog = new justep.Dialog(node.getAttribute("id"),node.getAttribute("title"),node.getAttribute("modal")=="true",node.getAttribute("status"),node.getAttribute("width"),node.getAttribute("height"),node.getAttribute("left"),node.getAttribute("top")
					,node.getAttribute("onInit"),node.getAttribute("onOpen"),node.getAttribute("onClose")
				);
				dialog.setClosable(node.getAttribute("closable")!="false");
				dialog.setMinmaxable(node.getAttribute("minmaxable")!="false");
				dialog.setResizable(node.getAttribute("resizable")!="false");
				dialog.setNeighbor(node.getAttribute("neighbor"));
				dialog.setAutoSize(node.getAttribute("auto-size")=="true");
				dialog.setShowTitle(node.getAttribute("show-title")!="false");
				justep.Object.extend(this, dialog);
			} 
		}));

_xbl_JSClassDefine_dialog.prototype.ClassName='_xbl_JSClassDefine_dialog';
_xbl_JSClassDefine_dialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_dialog',key:'ea8044092c3db63e51e34df9bbe2a418',time:1529979198},m:'8159c61716ac1f41fd6d16280a5a6bbb'};
function _xbl_JSClassDefine_process(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_process.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function(){
					justep.supportCustomOperation(this);
					justep.Object.extend(this, new justep.ProcessEngine(this));
				}
			}));

_xbl_JSClassDefine_process.prototype.ClassName='_xbl_JSClassDefine_process';
_xbl_JSClassDefine_process.prototype.__code__={v:{name:'_xbl_JSClassDefine_process',key:'ea8044092c3db63e51e34df9bbe2a418',time:1529979198},m:'f76ed54d41520883bea2649e31b3de09'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'ea8044092c3db63e51e34df9bbe2a418',time:1529979198},m:'9bb0fc53fa8ef7c3f31788b43abf6d0a'};
function _xbl_JSClassDefine_toolbars(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_toolbars.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function(){
				this.initXFormEvent();	
			},
			"initXFormEvent" : function(){
				var id = this.domNode.id;
				this.xformInfo = {};
				var that = this;
				var attr = "readonly";
				var cb = function(){
					var modelId = $(this).attr("model");
					if (!modelId) return;
					that.xformInfo[modelId] = that.xformInfo[modelId] || [];
					var info = {};
					info["id"] = this.id;
					info["dataId"] = $(this).attr("data");
					info[attr] = $(this).attr(attr);
					that.xformInfo[modelId].push(info);
				}; 
				jQuery("[readonly]", this.domNode).each(cb);
				var attr = "relevant";
				jQuery("[relevant]", this.domNode).each(cb);
				for(var model in this.xformInfo){
					var that = this; 
					new xforms.Listener(justep(model), "xforms-refresh", null, function(){that.modelRefreshcb();});
					/*
					todo: 相似组件以后可以集中统一触发一次 
					xforms.XMLEvents.dispatch(justep.xbl(model), "xforms-refresh");
					*/
					this.modelRefreshcb();
				} 
			},
			"modelRefreshcb" : function(){
				for(var model in this.xformInfo){
					var infos = this.xformInfo[model];
					for(var i in infos){
						var info = infos[i];
						if (info.readonly){
							var xpath = xforms.XPath.get(info.readonly);
							var img = jQuery("#" + info.id + ".xforms-trigger-img,"+"#" + info.id + " .xforms-trigger-img");
							var a = jQuery("#" + info.id);
							if(0!=img.size()){
								if (!info.enImg){
									info.enImg = img.attr("src");
									if(info.enImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)
										info.enImg = justep.Request.convertURL(info.enImg, true);
								}
								if (!info.disImg){
									info.disImg = img.attr("dis-src");
									if(info.disImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)
										info.disImg = justep.Request.convertURL(info.disImg, true);
								}
							}
							if (!info.click){
								info.click = a.attr("onclick") || function(){};
								a.attr("onclick", null);
							}
							if(xpath.evaluate({})){
								img.attr("src", info.disImg);
								a.unbind("click");
								a.addClass("xforms-readonly");
							}else{
								img.attr("src", info.enImg);
								a.unbind("click");
								a.bind("click", function(){if(xforms)xforms.blur(true);});
								a.bind("click", info.click);
								a.removeClass("xforms-readonly");
							}
						}else if(info.relevant){
							var xpath = xforms.XPath.get(info.relevant);
							var el = jQuery("#" + info.id);
							if(xpath.evaluate({})){
								el.parent('td').show();
							}else{
								el.parent('td').hide();
							}
						}
					}
				}
			},
			"__dragObject" : null,
			"mousedownAction" : function(event) {
				event = event || window.event;
				var group = this.__findToolGroup(event.srcElement||event.target);
				if (!group) { 
					return;
				}
				var posX = parseInt(window.event.clientX) + parseInt(document.body.scrollLeft);
				var posY = parseInt(window.event.clientY) + parseInt(document.body.scrollTop);
				this.__dragObject = new Object();
				this.__dragObject.obj = group;
				this.__dragObject.manager = group.parentNode;
				group.style.position = "absolute";
				group.style.border = "1px ridge";
				group.style.top = posY - 0 + 4;
				group.style.left = posX - 0 + 4;
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);
				xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
				xforms.Event.attach(document, "selectstart", this.selectstartAction, null, this);
			},
			"mousemoveAction" : function() {
				var posX = parseInt(window.event.clientX) + parseInt(document.body.scrollLeft);
				var posY = parseInt(window.event.clientY) + parseInt(document.body.scrollTop);
				if (this.__dragObject) {
					this.__dragObject.obj.style.top = posY - 0 + 4;
					this.__dragObject.obj.style.left = posX - 0 + 4;
				}
			},
			"findParentTDOrTH" : function(node) {
				var cur = node;
				while (cur) {
					var tmp = cur.localName || cur.tagName;
					if (tmp.toLowerCase()=="body")
						return null;
					else if (tmp.toLowerCase()=="td" || tmp.toLowerCase()=="th") {
						return cur;
					}
					cur = cur.parentNode;
				}
				return cur;

			},
			"mouseupAction" : function(event) {
				if (this.__dragObject) {
					event = event || window.event;
					var target = event.srcElement || event.target;
					var td = this.findParentTDOrTH(target);
					var group = this.__findToolGroup(target);
					if (group && group.parentNode==this.__dragObject.manager) {
						if (td && td.name=="group_anchor") {
							var manager = this.__dragObject.obj.parentNode;
							manager.removeChild(this.__dragObject.obj);
							manager.insertBefore(this.__dragObject.obj, group);
						}
						else {
							var manager = this.__dragObject.obj.parentNode;
							manager.removeChild(this.__dragObject.obj);
							manager.appendChild(this.__dragObject.obj);
						}
					}
					this.__dragObject.obj.style.position = "static";
					this.__dragObject.obj.style.border = "none";
				}
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);
				xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
				xforms.Event.attach(document, "selectstart", this.selectstartAction, null, this);
				this.__dragObject = null;
			},
			"selectstartAction" : function() {
				return false;
			},
			"__findToolGroup" : function(node) {
				var cur = node;
				while (cur) {
					if (cur.tagName=="BODY") {
						return null;
					}
					else if (cur.tagName=="DIV" && cur.name=="toolbargroup") {
						return cur;
					}
					cur = cur.parentNode;
				}
				return null;
			}
		}));

_xbl_JSClassDefine_toolbars.prototype.ClassName='_xbl_JSClassDefine_toolbars';
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'ea8044092c3db63e51e34df9bbe2a418',time:1529979198},m:'d23367885f0ca173e57ad5a8e1270a27'};
	var ids=[{id:'715e67fd7e1840279a918a2e5703b734', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'input1', name:'xforms:input'},{id:'input2', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel1', name:'xforms:label'},{id:'default3', name:'xforms:value'}]},{id:'pRODUCTNAME', name:'xforms:input'},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default23', name:'xforms:value'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'xuiLabel5', name:'xforms:label'},{id:'default27', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'xuiLabel4', name:'xforms:label'},{id:'default25', name:'xforms:value'}]},{id:'lINEID', name:'xforms:input'},{id:'eXPECTENDINGDATE', name:'xforms:input'},{id:'gridSelect6', name:'xforms:gridselect', children:[{id:'default39', name:'xforms:label'},{id:'default40', name:'xforms:value'}]},{id:'dEVELOPMENTTOOLS', name:'xforms:input'},{id:'cOMPILERENVIRONMENT', name:'xforms:input'},{id:'pRODUCTSTYLE', name:'xforms:input'},{id:'oPERATORID', name:'xforms:input'},{id:'mNITLTELEPHONE', name:'xforms:input'},{id:'mNITLFAXNUMBER', name:'xforms:input'},{id:'mNITLMOBILE', name:'xforms:input'},{id:'mNITLEMAIL', name:'xforms:input'},{id:'mNITLADDRESS', name:'xforms:input'},{id:'mNITLPOSTCODE', name:'xforms:input'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'xuiLabel2', name:'xforms:label'},{id:'default11', name:'xforms:value'}]},{id:'cONTACTPERSON', name:'xforms:input'},{id:'cONTACTTELEPHONE', name:'xforms:input'},{id:'cONTACTMOBILE', name:'xforms:input'},{id:'cONTACTADDRESS', name:'xforms:input'},{id:'cONTACTEMAIL', name:'xforms:input'},{id:'cONTACTFAXNUMBER', name:'xforms:input'},{id:'cONTACTPOSTCODE', name:'xforms:input'},{id:'gridSelect8', name:'xforms:gridselect1', children:[{id:'default45', name:'xforms:label'},{id:'default46', name:'xforms:value'}]},{id:'input3', name:'xforms:input'},{id:'gridSelect9', name:'xforms:gridselect', children:[{id:'default49', name:'xforms:label'},{id:'default50', name:'xforms:value'}]},{id:'gridSelect7', name:'xforms:gridselect', children:[{id:'default111', name:'xforms:label'},{id:'default112', name:'xforms:value'}]},{id:'pRODUCTCONFIGURATION', name:'xforms:input'},{id:'fEATURESANDMODELS', name:'xforms:input'},{id:'iNSTALLREQUIRE', name:'xforms:textarea'},{id:'tESTINGREQUIREMENTS', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'}]},{id:'flw', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'flw_processControlDialog', name:'xforms:dialog'},{id:'flw_processChartDialogID', name:'xforms:dialog'},{id:'flw_processConfirmDialog', name:'xforms:dialog', children:[{id:'9957695a83f04cb78d5adab58ecf7d6a', name:'xforms:trigger', children:[{id:'9ca951f091af490bac24517c663a5a37', name:'xforms:label'}]},{id:'7c56963dc2af4d5e99844a05e20b91ef', name:'xforms:trigger', children:[{id:'7a591a12726045389f61eb0583eff1b3', name:'xforms:label'}]}]},{id:'flw_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='ea8044092c3db63e51e34df9bbe2a418';
xforms.Core.fileName='form.js';	
xf._a(null,'input1');xf._a(null,'input2');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel1');xf._a('gridSelect1','default4');xf._a(null,'pRODUCTNAME');xf._a(null,'gridSelect3');xf._a('gridSelect3','xuiLabel3');xf._a('gridSelect3','default24');xf._a(null,'gridSelect5');xf._a('gridSelect5','xuiLabel5');xf._a('gridSelect5','default28');xf._a(null,'gridSelect4');xf._a('gridSelect4','xuiLabel4');xf._a('gridSelect4','default26');xf._a(null,'lINEID');xf._a(null,'eXPECTENDINGDATE');xf._a(null,'gridSelect6');xf._a('gridSelect6','default39');xf._a('gridSelect6','default41');xf._a(null,'dEVELOPMENTTOOLS');xf._a(null,'cOMPILERENVIRONMENT');xf._a(null,'pRODUCTSTYLE');xf._a(null,'oPERATORID');xf._a(null,'mNITLTELEPHONE');xf._a(null,'mNITLFAXNUMBER');xf._a(null,'mNITLMOBILE');xf._a(null,'mNITLEMAIL');xf._a(null,'mNITLADDRESS');xf._a(null,'mNITLPOSTCODE');xf._a(null,'gridSelect2');xf._a('gridSelect2','xuiLabel2');xf._a('gridSelect2','default16');xf._a(null,'cONTACTPERSON');xf._a(null,'cONTACTTELEPHONE');xf._a(null,'cONTACTMOBILE');xf._a(null,'cONTACTADDRESS');xf._a(null,'cONTACTEMAIL');xf._a(null,'cONTACTFAXNUMBER');xf._a(null,'cONTACTPOSTCODE');xf._a(null,'gridSelect8');xf._a('gridSelect8','default45');xf._a('gridSelect8','default47');xf._a(null,'input3');xf._a(null,'gridSelect9');xf._a('gridSelect9','default49');xf._a('gridSelect9','default51');xf._a(null,'gridSelect7');xf._a('gridSelect7','default111');xf._a('gridSelect7','default113');xf._a(null,'pRODUCTCONFIGURATION');xf._a(null,'fEATURESANDMODELS');xf._a(null,'iNSTALLREQUIRE');xf._a(null,'tESTINGREQUIREMENTS');xf._a(null,'textarea1');xf._a(null,'9957695a83f04cb78d5adab58ecf7d6a');xf._a('9957695a83f04cb78d5adab58ecf7d6a','9ca951f091af490bac24517c663a5a37');xf._a(null,'7c56963dc2af4d5e99844a05e20b91ef');xf._a('7c56963dc2af4d5e99844a05e20b91ef','7a591a12726045389f61eb0583eff1b3');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/pRODUCTMANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTMANUFACTUREID')))));	
xf._b("true()",xf._f('true'));	
xf._b("'开发单位不能为空!'",xf._i("开发单位不能为空!"));	
xf._b("instance('dataMain')/pRODUCTNAME",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTNAME')))));	
xf._b("'产品名称不能为空!'",xf._i("产品名称不能为空!"));	
xf._b("instance('dataMain')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("'申请检测对象类别不能为空!'",xf._i("申请检测对象类别不能为空!"));	
xf._b("instance('dataMain')/dEVICETYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("'申请检测对象不能为空!'",xf._i("申请检测对象不能为空!"));	
xf._b("instance('dataMain')/bUSINESSID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("'申请检测业务不能为空!'",xf._i("申请检测业务不能为空!"));	
xf._b("instance('dataMain')/lINEID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("'申请检测对象应用路线不能为空!'",xf._i("申请检测对象应用路线不能为空!"));	
xf._b("instance('dataMain')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("'委托单位不能为空!'",xf._i("委托单位不能为空!"));	
xf._b("instance('dataMain')/eXPECTENDINGDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("'预期完成日期不能为空!'",xf._i("预期完成日期不能为空!"));	
xf._b("instance('dataMain')/COMPANY_PROMISE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','COMPANY_PROMISE')))));	
xf._b("'承诺样品最晚进场天数不能为空'",xf._i("承诺样品最晚进场天数不能为空"));	
xf._b("instance('dataMain')/aPPLICATIONDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))));	
xf._b("instance('dataMain')/rECEIPTDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','rECEIPTDATE')))));	
xf._b("instance('afcData')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("afcData")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('afcData')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("afcData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("deviceTypeCodeData")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('deviceTypeCodeData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("deviceTypeCodeData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('manufactureData')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("manufactureData")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('manufactureData')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("manufactureData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('sysOperData')/sValidState",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('sysOperData')/sLevel",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('sysOperData')/version",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('hrPerData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('hrPerData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('hrPerData')/oFFICEID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('hrPerData')/pOSITIONID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('hrPerData')/dEGREEID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('hrPerData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('hrPerData')/pOLITICALID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('hrPerData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('hrPerData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('SA_TaskData')/sDistributeTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sDistributeTime')))));	
xf._b("instance('SA_TaskData')/sCreateTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('SA_TaskData')/sLastModifyTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sLastModifyTime')))));	
xf._b("instance('SA_TaskData')/sLimitTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("instance('SA_TaskData')/sWarningTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xf._b("instance('SA_TaskData')/sExecuteTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sExecuteTime')))));	
xf._b("instance('SA_TaskData')/sExpectStartTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sExpectStartTime')))));	
xf._b("instance('SA_TaskData')/sExpectFinishTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sExpectFinishTime')))));	
xf._b("instance('SA_TaskData')/sActualStartTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sActualStartTime')))));	
xf._b("instance('SA_TaskData')/sActualFinishTime",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sActualFinishTime')))));	
xf._b("instance('SA_TaskData')/sSequence",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('SA_TaskData')/version",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('SA_TaskData')/sEDField21",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEDField21')))));	
xf._b("instance('SA_TaskData')/sEDField22",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEDField22')))));	
xf._b("instance('SA_TaskData')/sEDField23",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEDField23')))));	
xf._b("instance('SA_TaskData')/sEDField24",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEDField24')))));	
xf._b("instance('SA_TaskData')/sEIField41",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEIField41')))));	
xf._b("instance('SA_TaskData')/sEIField42",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEIField42')))));	
xf._b("instance('SA_TaskData')/sEIField43",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEIField43')))));	
xf._b("instance('SA_TaskData')/sEIField44",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sEIField44')))));	
xf._b("instance('SA_TaskData')/sENField11",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sENField11')))));	
xf._b("instance('SA_TaskData')/sENField12",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sENField12')))));	
xf._b("instance('SA_TaskData')/sENField13",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sENField13')))));	
xf._b("instance('SA_TaskData')/sENField14",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sENField14')))));	
xf._b("instance('SA_TaskData')/sWithdraw",xf._g(xf._f('instance',xf._i("SA_TaskData")),xf._h(false, xf._k("child",xf._j('','sWithdraw')))));	
xf._b("instance('jiagongdanweiDB')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("jiagongdanweiDB")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('jiagongdanweiDB')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("jiagongdanweiDB")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('detectionBaseInfoD')/vALIDDATETIME",xf._g(xf._f('instance',xf._i("detectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDDATETIME')))));	
xf._b("instance('detectionBaseInfoD')/vALIDSTATE",xf._g(xf._f('instance',xf._i("detectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("instance('detectionBaseInfoD')/version",xf._g(xf._f('instance',xf._i("detectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dataMain')/APP_DOC_NO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APP_DOC_NO')))));	
xf._b("data('dataMain')/APP_DOC_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APP_DOC_ID')))));	
xf._b("data('dataMain')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("data('dataMain')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))));	
xf._b("AFC_MANUFACTURER_INFO",xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("mANUFACTUREIDENAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDENAME'))));	
xf._b("mANUFACTURETYPE",xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE'))));	
xf._b("mANUFACTUREADDRESS",xf._h(false, xf._k("child",xf._j('','mANUFACTUREADDRESS'))));	
xf._b("mANUFACTUREPOSTCODE",xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE'))));	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))));	
xf._b("cONTACTOR",xf._h(false, xf._k("child",xf._j('','cONTACTOR'))));	
xf._b("cONTACTMOBILE",xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE'))));	
xf._b("fAXNUMBER",xf._h(false, xf._k("child",xf._j('','fAXNUMBER'))));	
xf._b("cONTACTEMAIL",xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("oPERATOR_ID",xf._h(false, xf._k("child",xf._j('','oPERATOR_ID'))));	
xf._b("data('dataMain')/pRODUCTNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("data('dataMain')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('dataMain')/dEVICETYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("data('dataMain')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('dataMain')/bUSINESSID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("data('dataMain')/bUSINESSIDCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME')))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("BUSINESS_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE'))));	
xf._b("bUSINESSIDENAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDENAME'))));	
xf._b("data('dataMain')/lINEID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("data('dataMain')/eXPECTENDINGDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("data('dataMain')/cOMPANYTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cOMPANYTYPE')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("data('dataMain')/dEVELOPMENTTOOLS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVELOPMENTTOOLS')))));	
xf._b("data('dataMain')/cOMPILERENVIRONMENT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cOMPILERENVIRONMENT')))));	
xf._b("data('dataMain')/pRODUCTSTYLE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTSTYLE')))));	
xf._b("data('dataMain')/oPERATORNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME')))));	
xf._b("data('dataMain')/mNITLTELEPHONE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mNITLTELEPHONE')))));	
xf._b("data('dataMain')/mNITLFAXNUMBER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mNITLFAXNUMBER')))));	
xf._b("data('dataMain')/mNITLMOBILE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mNITLMOBILE')))));	
xf._b("data('dataMain')/mNITLEMAIL",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mNITLEMAIL')))));	
xf._b("data('dataMain')/mNITLADDRESS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mNITLADDRESS')))));	
xf._b("data('dataMain')/mNITLPOSTCODE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mNITLPOSTCODE')))));	
xf._b("data('dataMain')/pRODUCTMANUFACTUREID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTMANUFACTUREID')))));	
xf._b("data('dataMain')/wtName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','wtName')))));	
xf._b("data('dataMain')/cONTACTPERSON",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTPERSON')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/cONTACTTELEPHONE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("data('dataMain')/cONTACTMOBILE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE')))));	
xf._b("data('dataMain')/cONTACTADDRESS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTADDRESS')))));	
xf._b("data('dataMain')/cONTACTEMAIL",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL')))));	
xf._b("data('dataMain')/cONTACTFAXNUMBER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTFAXNUMBER')))));	
xf._b("data('dataMain')/cONTACTPOSTCODE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTPOSTCODE')))));	
xf._b("data('dataMain')/pROCESSUNIT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROCESSUNIT')))));	
xf._b("data('dataMain')/COMPANY_PROMISE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','COMPANY_PROMISE')))));	
xf._b("data('dataMain')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("dECTIONBASEDONNAME",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME'))));	
xf._b("DECTION_BASED_ON_INFO",xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO'))));	
xf._b("vALIDDATETIME",xf._h(false, xf._k("child",xf._j('','vALIDDATETIME'))));	
xf._b("vALIDSTATE",xf._h(false, xf._k("child",xf._j('','vALIDSTATE'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("data('dataMain')/aPPLICATIONFIELDS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONFIELDS')))));	
xf._b("data('dataMain')/pRODUCTCONFIGURATION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTCONFIGURATION')))));	
xf._b("data('dataMain')/fEATURESANDMODELS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fEATURESANDMODELS')))));	
xf._b("data('dataMain')/iNSTALLREQUIRE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','iNSTALLREQUIRE')))));	
xf._b("data('dataMain')/tESTINGREQUIREMENTS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tESTINGREQUIREMENTS')))));	
xf._b("data('dataMain')/mEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("not(call('justep.XData.canDo','dataMain','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Save"))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/pRODUCTMANUFACTUREID",null,null,"true()",null,null,null,"'开发单位不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/pRODUCTNAME",null,null,"true()",null,null,null,"'产品名称不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/dETECTIONOBJECTTYPE",null,null,"true()",null,null,null,"'申请检测对象类别不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/dEVICETYPE",null,null,"true()",null,null,null,"'申请检测对象不能为空!'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/bUSINESSID",null,null,"true()",null,null,null,"'申请检测业务不能为空!'");	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/lINEID",null,null,"true()",null,null,null,"'申请检测对象应用路线不能为空!'");	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/aSSIGNEDMANUFACTUREID",null,null,"true()",null,null,null,"'委托单位不能为空!'");	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/eXPECTENDINGDATE",null,null,"true()",null,null,null,"'预期完成日期不能为空!'");	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/COMPANY_PROMISE",null,null,"true()",null,null,null,"'承诺样品最晚进场天数不能为空'");	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/pRODUCTMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dataMain')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dataMain')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMain')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMain')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMain')/aPPLICATIONDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMain')/eXPECTENDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('dataMain')/rECEIPTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dataMain')/COMPANY_PROMISE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('afcData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-19','mdDefault',"instance('afcData')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('afcData')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('detObjType','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('businessData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('deviceTypeCodeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-21','mdDefault',"instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('deviceTypeCodeData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivityNew.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action2,'mdDefault', evt,false)});	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-25','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-28','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('jiagongdanweiDB','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('jiagongdanweiDB',null);	
xf._c('xf-bind-62','mdDefault',"instance('jiagongdanweiDB')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-63','mdDefault',"instance('jiagongdanweiDB')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('detectionBaseInfoD','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('detectionBaseInfoD',null);	
xf._c('xf-bind-64','mdDefault',"instance('detectionBaseInfoD')/vALIDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-65','mdDefault',"instance('detectionBaseInfoD')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-66','mdDefault',"instance('detectionBaseInfoD')/version","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var manufactureData_part_loaded = false;	
function load_manufactureData_part(callback){if (manufactureData_part_loaded) return;manufactureData_part_loaded = true;	
new xforms.XFInstance2('manufactureData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('manufactureData',null);	
xf._c('xf-bind-23','mdDefault',"instance('manufactureData')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('manufactureData')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var manufactureData_part_init_loaded = false;	
function load_manufactureData_part_init(){if (manufactureData_part_init_loaded) return;manufactureData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var SA_TaskData_part_loaded = false;	
function load_SA_TaskData_part(callback){if (SA_TaskData_part_loaded) return;SA_TaskData_part_loaded = true;	
new xforms.XFInstance2('SA_TaskData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('SA_TaskData',null);	
xf._c('xf-bind-37','mdDefault',"instance('SA_TaskData')/sDistributeTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('SA_TaskData')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('SA_TaskData')/sLastModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('SA_TaskData')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('SA_TaskData')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('SA_TaskData')/sExecuteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('SA_TaskData')/sExpectStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('SA_TaskData')/sExpectFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('SA_TaskData')/sActualStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('SA_TaskData')/sActualFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('SA_TaskData')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('SA_TaskData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('SA_TaskData')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('SA_TaskData')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdDefault',"instance('SA_TaskData')/sEDField23","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdDefault',"instance('SA_TaskData')/sEDField24","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdDefault',"instance('SA_TaskData')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdDefault',"instance('SA_TaskData')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-55','mdDefault',"instance('SA_TaskData')/sEIField43","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdDefault',"instance('SA_TaskData')/sEIField44","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdDefault',"instance('SA_TaskData')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdDefault',"instance('SA_TaskData')/sENField12","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdDefault',"instance('SA_TaskData')/sENField13","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-60','mdDefault',"instance('SA_TaskData')/sENField14","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-61','mdDefault',"instance('SA_TaskData')/sWithdraw","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var SA_TaskData_part_init_loaded = false;	
function load_SA_TaskData_part_init(){if (SA_TaskData_part_init_loaded) return;SA_TaskData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var data = justep.xbl('dataMain'); var p = justep.xbl('flw'); if (data){ data.attachEvent(justep.XData.EVENT_REFRESHDATA_BEFORE, function(event){ /*if (p.isAutoFilter()){*/ var conceptName = event.source.getConceptAliasName(); var value = justep.Context.getProcessData1(); var condition = null; if (value){ condition = conceptName + "='" + value + "'"; }else{ condition = "1=0"; } event.source.setFilter("_process-filter_", condition); /*}else{ event.source.setFilter("_process-filter_", "1=1"); }*/ }, data); }else{ var msg = new justep.Message(justep.Message.JUSTEP230001, "'dataMain'"); throw justep.Error.create(msg); }}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'xf-model-1', evt,false)});	
new xforms.XFDialog('flw_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_2=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('flw_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('flw'); process[callback](task, processControl, options); } justep('flw_processControlDialogIFrame').src="";});xf._p(justep('flw_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_2,'flw_processControlDialog', evt,false)});	
new xforms.XFDialog('flw_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){justep('flw_processChartDialogIFrame').src="";});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_3,'flw_processChartDialogID', evt,false)});	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('flw_processChartDialogIFrame').src=url;});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_4,'flw_processChartDialogID', evt,false)});	
new xforms.XFDialog('flw_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('flw'); process[callback](task, processControl, options); }});xf._p(justep('flw_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'flw_processConfirmDialog', evt,false)});	
var xf_trigger_9957695a83f04cb78d5adab58ecf7d6a=new xforms.XFTrigger('9957695a83f04cb78d5adab58ecf7d6a',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('flw_processConfirmDialog').close();}));xf._p(justep('9957695a83f04cb78d5adab58ecf7d6a'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'9957695a83f04cb78d5adab58ecf7d6a', evt,false)});	
var xf_trigger_7c56963dc2af4d5e99844a05e20b91ef=new xforms.XFTrigger('7c56963dc2af4d5e99844a05e20b91ef',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('flw_processConfirmDialog').close();}));xf._p(justep('7c56963dc2af4d5e99844a05e20b91ef'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'7c56963dc2af4d5e99844a05e20b91ef', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xf._d('input1','text',xf._q("data('dataMain')/APP_DOC_NO"),null,null,null,null,false,false);	
xf._d('input2','text',xf._q("data('dataMain')/APP_DOC_ID"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/aSSIGNEDMANUFACTUREID"),labelRef:xf._q("data('dataMain')/mANUFACTUREIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcData',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:true,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivityNew.gridSelect1Dropdown',onCloseup:'mainActivityNew.gridSelect1Closeup'});	
xf._d('pRODUCTNAME','text',xf._q("data('dataMain')/pRODUCTNAME"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dETECTIONOBJECTTYPE"),labelRef:xf._q("data('dataMain')/dETECTIONOBJECTCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detObjType',columns:'dETECTIONOBJECTCNAME,DETECTION_OBJECT_TYPE,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivityNew.gridSelect3Closeup'});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dEVICETYPE"),labelRef:xf._q("data('dataMain')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'deviceTypeCodeData',columns:'dEVICETYPECNAME,__c_,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/bUSINESSID"),labelRef:xf._q("data('dataMain')/bUSINESSIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessData',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,__c_,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'BUSINESS_TYPE_CODE,bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('lINEID','text',xf._q("data('dataMain')/lINEID"),null,null,null,null,false,false);	
xf._d('eXPECTENDINGDATE','text',xf._q("data('dataMain')/eXPECTENDINGDATE"),null,null,null,"yyyy-MM-dd",false,false);	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/cOMPANYTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'col_1',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'checkbox,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default132"><row id="default133"><cell id="default134">独立科研机构</cell></row><row id="default135"><cell id="default136">大专院校</cell></row><row id="default137"><cell id="default138">国有企业</cell></row><row id="default139"><cell id="default140">股份公司</cell></row><row id="default141"><cell id="default142">集体个体</cell></row><row id="default143"><cell id="default144">其他</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('dEVELOPMENTTOOLS','text',xf._q("data('dataMain')/dEVELOPMENTTOOLS"),null,null,null,null,false,false);	
xf._d('cOMPILERENVIRONMENT','text',xf._q("data('dataMain')/cOMPILERENVIRONMENT"),null,null,null,null,false,false);	
xf._d('pRODUCTSTYLE','text',xf._q("data('dataMain')/pRODUCTSTYLE"),null,null,null,null,false,false);	
xf._d('oPERATORID','text',xf._q("data('dataMain')/oPERATORNAME"),null,null,null,null,true,false);	
xf._d('mNITLTELEPHONE','text',xf._q("data('dataMain')/mNITLTELEPHONE"),null,null,null,null,true,false);	
xf._d('mNITLFAXNUMBER','text',xf._q("data('dataMain')/mNITLFAXNUMBER"),null,null,null,null,true,false);	
xf._d('mNITLMOBILE','text',xf._q("data('dataMain')/mNITLMOBILE"),null,null,null,null,true,false);	
xf._d('mNITLEMAIL','text',xf._q("data('dataMain')/mNITLEMAIL"),null,null,null,null,true,false);	
xf._d('mNITLADDRESS','text',xf._q("data('dataMain')/mNITLADDRESS"),null,null,null,null,true,false);	
xf._d('mNITLPOSTCODE','text',xf._q("data('dataMain')/mNITLPOSTCODE"),null,null,null,null,true,false);	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/pRODUCTMANUFACTUREID"),labelRef:xf._q("data('dataMain')/wtName"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcData',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivityNew.gridSelect2Dropdown',onCloseup:null});	
xf._d('cONTACTPERSON','text',xf._q("data('dataMain')/cONTACTPERSON"),null,null,null,null,true,true);	
xf._d('cONTACTTELEPHONE','text',xf._q("data('dataMain')/cONTACTTELEPHONE"),null,null,null,null,true,true);	
xf._d('cONTACTMOBILE','text',xf._q("data('dataMain')/cONTACTMOBILE"),null,null,null,null,true,true);	
xf._d('cONTACTADDRESS','text',xf._q("data('dataMain')/cONTACTADDRESS"),null,null,null,null,true,true);	
xf._d('cONTACTEMAIL','text',xf._q("data('dataMain')/cONTACTEMAIL"),null,null,null,null,true,true);	
xf._d('cONTACTFAXNUMBER','text',xf._q("data('dataMain')/cONTACTFAXNUMBER"),null,null,null,null,true,true);	
xf._d('cONTACTPOSTCODE','text',xf._q("data('dataMain')/cONTACTPOSTCODE"),null,null,null,null,true,true);	
new xforms.XFExtSelect({id:'gridSelect8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/pROCESSUNIT"),labelRef:xf._q("data('dataMain')/pROCESSUNIT"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'jiagongdanweiDB',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,cONTACTTELEPHONE,fAXNUMBER,mANUFACTUREADDRESS,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREPOSTCODE,cONTACTOR,cONTACTMOBILE,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:'36',dropdownClass:'xui-grid-hide-VLine',hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREPOSTCODE,cONTACTOR,cONTACTMOBILE,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,#,#,#,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivityNew.gridSelect8Dropdown',onCloseup:'mainActivityNew.gridSelect8Closeup'});	
xf._d('input3','text',xf._q("data('dataMain')/COMPANY_PROMISE"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect9',type:'gridselect',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dECTIONBASEDONNAME"),labelRef:xf._q("data('dataMain')/dECTIONBASEDONNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detectionBaseInfoD',columns:'DECTION_BASED_ON_INFO,dECTIONBASEDONNAME,__c_,vALIDDATETIME,vALIDSTATE,version',headerH:null,rowH:'36',dropdownClass:'xui-grid-hide-VLine',hiddenColumns:'vALIDDATETIME,vALIDSTATE,version',valueColumn:'dECTIONBASEDONNAME',labelColumn:'dECTIONBASEDONNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'checkbox,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivityNew.gridSelect9Closeup'});	
new xforms.XFExtSelect({id:'gridSelect7',type:'gridselect',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/aPPLICATIONFIELDS"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'col_1',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'checkbox,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default125"><row id="default126"><cell id="default127">交通</cell></row><row id="default128"><cell id="default129">其他</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('pRODUCTCONFIGURATION','text',xf._q("data('dataMain')/pRODUCTCONFIGURATION"),null,null,null,null,false,false);	
xf._d('fEATURESANDMODELS','text',xf._q("data('dataMain')/fEATURESANDMODELS"),null,null,null,null,false,false);	
xf._d('iNSTALLREQUIRE','textarea',xf._q("data('dataMain')/iNSTALLREQUIRE"),null,null,null,null,false,false);	
xf._d('tESTINGREQUIREMENTS','text',xf._q("data('dataMain')/tESTINGREQUIREMENTS"),null,null,null,null,false,false);	
xf._d('textarea1','textarea',xf._q("data('dataMain')/mEMO"),null,null,null,null,false,false);	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
