
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

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
						this.rightBorderEl.css({top: top,right: right});	right += this.rightBorderEl.width();
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

	var ids=[{id:'5ddf0480270c4e35978b3500b5d370aa', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveTrigger', name:'xforms:trigger', children:[{id:'9249d55a3dbe49d2b1dcf29a29594b5e', name:'xforms:label'}]}]},{id:'CHANGE_APPLY_DOC_NO2', name:'xforms:input'},{id:'CHANGE_APPLY_NOAPPLYNO2', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default13', name:'xforms:label'},{id:'default14', name:'xforms:value'}]},{id:'input5', name:'xforms:input'},{id:'APPLY_PERSONPERSON2', name:'xforms:input'},{id:'APPLY_DATEDATE2', name:'xforms:input'},{id:'input4', name:'xforms:input'},{id:'CHANGE_TITLETITLE2', name:'xforms:input'},{id:'CHANGE_OBJECTOBJECT2', name:'xforms:input'},{id:'gridSelect2', name:'xforms:gridselect', children:[{id:'default16', name:'xforms:label'},{id:'default17', name:'xforms:value'}]},{id:'textarea2', name:'xforms:textarea'},{id:'textarea3', name:'xforms:textarea'},{id:'textarea4', name:'xforms:textarea'},{id:'textarea5', name:'xforms:textarea'},{id:'textarea6', name:'xforms:textarea'},{id:'textarea7', name:'xforms:textarea'},{id:'input1', name:'xforms:input'},{id:'input3', name:'xforms:input'}]},{id:'flw', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'flw_processControlDialog', name:'xforms:dialog'},{id:'flw_processChartDialogID', name:'xforms:dialog'},{id:'flw_processConfirmDialog', name:'xforms:dialog', children:[{id:'29582337f7ff427690c09610d4fef576', name:'xforms:trigger', children:[{id:'8a120fbfe7684b9aa8d85b8002ba53e5', name:'xforms:label'}]},{id:'1550512dca9144c0898944b188ddc6bd', name:'xforms:trigger', children:[{id:'f58aff29c22f4a31b67f8a817369e776', name:'xforms:label'}]}]},{id:'flw_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'saveTrigger');xf._a('saveTrigger','9249d55a3dbe49d2b1dcf29a29594b5e');xf._a(null,'CHANGE_APPLY_DOC_NO2');xf._a(null,'CHANGE_APPLY_NOAPPLYNO2');xf._a(null,'gridSelect1');xf._a('gridSelect1','default13');xf._a('gridSelect1','default15');xf._a(null,'input5');xf._a(null,'APPLY_PERSONPERSON2');xf._a(null,'APPLY_DATEDATE2');xf._a(null,'input4');xf._a(null,'CHANGE_TITLETITLE2');xf._a(null,'CHANGE_OBJECTOBJECT2');xf._a(null,'gridSelect2');xf._a('gridSelect2','default16');xf._a('gridSelect2','default19');xf._a(null,'textarea2');xf._a(null,'textarea3');xf._a(null,'textarea4');xf._a(null,'textarea5');xf._a(null,'textarea6');xf._a(null,'textarea7');xf._a(null,'input1');xf._a(null,'input3');xf._a(null,'29582337f7ff427690c09610d4fef576');xf._a('29582337f7ff427690c09610d4fef576','8a120fbfe7684b9aa8d85b8002ba53e5');xf._a(null,'1550512dca9144c0898944b188ddc6bd');xf._a('1550512dca9144c0898944b188ddc6bd','f58aff29c22f4a31b67f8a817369e776');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/CHANGE_APPLY_NOAPPLYNO",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_APPLY_NOAPPLYNO')))));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dataMain')/CHANGE_TITLETITLE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_TITLETITLE')))));	
xf._b("'变更提案标题不能为空!'",xf._i("变更提案标题不能为空!"));	
xf._b("instance('dataMain')/CHANGE_CONTENTCONTENT",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_CONTENTCONTENT')))));	
xf._b("'变更内容不能为空!'",xf._i("变更内容不能为空!"));	
xf._b("instance('dataMain')/APPLY_PERSONPERSON",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_PERSONPERSON')))));	
xf._b("instance('dataMain')/APPLY_DATEDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_DATEDATE')))));	
xf._b("instance('dataMain')/PROJECT_IDID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_IDID')))));	
xf._b("instance('dataMain')/CHANGE_TIMETIME",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_TIMETIME')))));	
xf._b("instance('dataMain')/APPROVAL_STATUSSTATUS",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPROVAL_STATUSSTATUS')))));	
xf._b("instance('dataMain')/CHANGE_AUDIT_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_AUDIT_DATE')))));	
xf._b("instance('dataMain')/APPLY_APPROVE_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_APPROVE_DATE')))));	
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
xf._b("instance('bizData1')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('bizData1')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('bizData1')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('bizData1')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('bizData1')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('bizData1')/lINEID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('bizData1')/bUSINESSID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('bizData1')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('bizData1')/pROJECTDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('bizData1')/eNDINGDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('bizData1')/mAKEDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('bizData1')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('main')/sDistributeTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sDistributeTime')))));	
xf._b("instance('main')/sCreateTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('main')/sLastModifyTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sLastModifyTime')))));	
xf._b("instance('main')/sLimitTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("instance('main')/sWarningTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xf._b("instance('main')/sExecuteTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sExecuteTime')))));	
xf._b("instance('main')/sExpectStartTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sExpectStartTime')))));	
xf._b("instance('main')/sExpectFinishTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sExpectFinishTime')))));	
xf._b("instance('main')/sActualStartTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sActualStartTime')))));	
xf._b("instance('main')/sActualFinishTime",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sActualFinishTime')))));	
xf._b("instance('main')/sSequence",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('main')/version",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('main')/sEDField21",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField21')))));	
xf._b("instance('main')/sEDField22",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField22')))));	
xf._b("instance('main')/sEDField23",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField23')))));	
xf._b("instance('main')/sEDField24",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEDField24')))));	
xf._b("instance('main')/sEIField41",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField41')))));	
xf._b("instance('main')/sEIField42",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField42')))));	
xf._b("instance('main')/sEIField43",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField43')))));	
xf._b("instance('main')/sEIField44",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sEIField44')))));	
xf._b("instance('main')/sENField11",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField11')))));	
xf._b("instance('main')/sENField12",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField12')))));	
xf._b("instance('main')/sENField13",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField13')))));	
xf._b("instance('main')/sENField14",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sENField14')))));	
xf._b("instance('main')/sWithdraw",xf._g(xf._f('instance',xf._i("main")),xf._h(false, xf._k("child",xf._j('','sWithdraw')))));	
xf._b("data('dataMain')/CHANGE_APPLY_DOC_NO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_APPLY_DOC_NO')))));	
xf._b("data('dataMain')/CHANGE_APPLY_NOAPPLYNO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_APPLY_NOAPPLYNO')))));	
xf._b("data('dataMain')/PROJECT_NAMENAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_NAMENAME')))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("TEST_PROJECT_INFO",xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("aPPLICATIONNO",xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO'))));	
xf._b("tESTSCHEMEID",xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID'))));	
xf._b("pROJECTTYPE",xf._h(false, xf._k("child",xf._j('','pROJECTTYPE'))));	
xf._b("aSSIGNEDMANUFACTUREID",xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID'))));	
xf._b("cONTACTPERSON",xf._h(false, xf._k("child",xf._j('','cONTACTPERSON'))));	
xf._b("cONTACTMOBILE",xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE'))));	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))));	
xf._b("cONTACTEMAIL",xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL'))));	
xf._b("nOTIFYTYPE",xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE'))));	
xf._b("lINEID",xf._h(false, xf._k("child",xf._j('','lINEID'))));	
xf._b("bUSINESSID",xf._h(false, xf._k("child",xf._j('','bUSINESSID'))));	
xf._b("mANUFACTUREID",xf._h(false, xf._k("child",xf._j('','mANUFACTUREID'))));	
xf._b("pROJECTDATE",xf._h(false, xf._k("child",xf._j('','pROJECTDATE'))));	
xf._b("eNDINGDATE",xf._h(false, xf._k("child",xf._j('','eNDINGDATE'))));	
xf._b("pROJECTMANAGER",xf._h(false, xf._k("child",xf._j('','pROJECTMANAGER'))));	
xf._b("qAMANAGER",xf._h(false, xf._k("child",xf._j('','qAMANAGER'))));	
xf._b("tESTMANAGER",xf._h(false, xf._k("child",xf._j('','tESTMANAGER'))));	
xf._b("tECHMANAGER",xf._h(false, xf._k("child",xf._j('','tECHMANAGER'))));	
xf._b("mAKEDATE",xf._h(false, xf._k("child",xf._j('','mAKEDATE'))));	
xf._b("eXECUTESTATE",xf._h(false, xf._k("child",xf._j('','eXECUTESTATE'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("data('dataMain')/PROJECT_IDID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_IDID')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/oPERATORNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME')))));	
xf._b("data('dataMain')/APPLY_DATEDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_DATEDATE')))));	
xf._b("data('dataMain')/CHANGE_TIMETIME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_TIMETIME')))));	
xf._b("data('dataMain')/CHANGE_TITLETITLE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_TITLETITLE')))));	
xf._b("data('dataMain')/CHANGE_OBJECTOBJECT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_OBJECTOBJECT')))));	
xf._b("data('dataMain')/CHANGE_CONTENTCONTENT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_CONTENTCONTENT')))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('dataMain')/CHANGE_REASONREASON",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CHANGE_REASONREASON')))));	
xf._b("data('dataMain')/IMPACT_RANGERANGE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','IMPACT_RANGERANGE')))));	
xf._b("data('dataMain')/POTENTIAL_RISKRISK",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','POTENTIAL_RISKRISK')))));	
xf._b("data('dataMain')/RESOLVE_RISKRISK",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','RESOLVE_RISKRISK')))));	
xf._b("data('dataMain')/IMPLEMENTATION_PROCESSPROCESS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','IMPLEMENTATION_PROCESSPROCESS')))));	
xf._b("data('dataMain')/RESOURCES_NEEDEDNEEDED",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','RESOURCES_NEEDEDNEEDED')))));	
xf._b("data('dataMain')/oPERATORNAME1",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME1')))));	
xf._b("data('dataMain')/APPLY_APPROVE_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_APPROVE_DATE')))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/CHANGE_APPLY_NOAPPLYNO",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/CHANGE_TITLETITLE",null,null,"true()",null,null,null,"'变更提案标题不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/CHANGE_CONTENTCONTENT",null,null,"true()",null,null,null,"'变更内容不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/APPLY_PERSONPERSON",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/APPLY_DATEDATE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/PROJECT_IDID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/CHANGE_TIMETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/APPLY_DATEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/APPROVAL_STATUSSTATUS","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/CHANGE_AUDIT_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/APPLY_APPROVE_DATE","xsd:date",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'mdDefault', evt,false)});	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-23','mdDefault',"instance('bizData1')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('bizData1')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('bizData1')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('bizData1')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('bizData1')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('bizData1')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('bizData1')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('bizData1')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('bizData1')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('bizData1')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('bizData1')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('bizData1')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultLoad(event)}));xf._p(justep('mdDefault'),"onload",null,function(evt) { xforms.run(xf_action_action2,'mdDefault', evt,false)});	
new xforms.XFInstance2('main','mdDefault',null,null,null,null,null,null,null,null,'calcIndex',null,'whereVersion');new SimpleStore('main',null);	
xf._c('xf-bind-35','mdDefault',"instance('main')/sDistributeTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('main')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('main')/sLastModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('main')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('main')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('main')/sExecuteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('main')/sExpectStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('main')/sExpectFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('main')/sActualStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('main')/sActualFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('main')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('main')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('main')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('main')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('main')/sEDField23","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('main')/sEDField24","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdDefault',"instance('main')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdDefault',"instance('main')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdDefault',"instance('main')/sEIField43","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdDefault',"instance('main')/sEIField44","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-55','mdDefault',"instance('main')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdDefault',"instance('main')/sENField12","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdDefault',"instance('main')/sENField13","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdDefault',"instance('main')/sENField14","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdDefault',"instance('main')/sWithdraw","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var sysOperData_part_loaded = false;	
function load_sysOperData_part(callback){if (sysOperData_part_loaded) return;sysOperData_part_loaded = true;	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-11','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var sysOperData_part_init_loaded = false;	
function load_sysOperData_part_init(){if (sysOperData_part_init_loaded) return;sysOperData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var hrPerData_part_loaded = false;	
function load_hrPerData_part(callback){if (hrPerData_part_loaded) return;hrPerData_part_loaded = true;	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-14','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var hrPerData_part_init_loaded = false;	
function load_hrPerData_part_init(){if (hrPerData_part_init_loaded) return;hrPerData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_saveTrigger=new xforms.XFTrigger('saveTrigger',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveMore(event)}));xf._p(justep('saveTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'saveTrigger', evt,false)});	
xforms.load_parts('vDetail');	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_3,'xf-model-1', evt,false)});	
new xforms.XFDialog('flw_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('flw_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('flw'); process[callback](task, processControl, options); } justep('flw_processControlDialogIFrame').src="";});xf._p(justep('flw_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_4,'flw_processControlDialog', evt,false)});	
new xforms.XFDialog('flw_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){justep('flw_processChartDialogIFrame').src="";});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'flw_processChartDialogID', evt,false)});	
var xf_script_xf_script_6=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('flw_processChartDialogIFrame').src=url;});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_6,'flw_processChartDialogID', evt,false)});	
new xforms.XFDialog('flw_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_7=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('flw'); process[callback](task, processControl, options); }});xf._p(justep('flw_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_7,'flw_processConfirmDialog', evt,false)});	
var xf_trigger_29582337f7ff427690c09610d4fef576=new xforms.XFTrigger('29582337f7ff427690c09610d4fef576',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('flw_processConfirmDialog').close();}));xf._p(justep('29582337f7ff427690c09610d4fef576'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'29582337f7ff427690c09610d4fef576', evt,false)});	
var xf_trigger_1550512dca9144c0898944b188ddc6bd=new xforms.XFTrigger('1550512dca9144c0898944b188ddc6bd',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('flw_processConfirmDialog').close();}));xf._p(justep('1550512dca9144c0898944b188ddc6bd'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'1550512dca9144c0898944b188ddc6bd', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('CHANGE_APPLY_DOC_NO2','text',xf._q("data('dataMain')/CHANGE_APPLY_DOC_NO"),null,null,null,null,true,false);	
xf._d('CHANGE_APPLY_NOAPPLYNO2','text',xf._q("data('dataMain')/CHANGE_APPLY_NOAPPLYNO"),null,null,null,null,true,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PROJECT_NAMENAME"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'TEST_PROJECT_INFO,pROJECTNAME,__c_,aPPLICATIONNO,tESTSCHEMEID,pROJECTTYPE,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,qAMANAGER,tESTMANAGER,tECHMANAGER,mAKEDATE,eXECUTESTATE,mEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'TEST_PROJECT_INFO,aPPLICATIONNO,tESTSCHEMEID,pROJECTTYPE,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,qAMANAGER,tESTMANAGER,tECHMANAGER,mAKEDATE,eXECUTESTATE,mEMO',valueColumn:'pROJECTNAME',labelColumn:'pROJECTNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect1Closeup'});	
xf._d('input5','text',xf._q("data('dataMain')/PROJECT_IDID"),null,null,null,null,false,true);	
xf._d('APPLY_PERSONPERSON2','text',xf._q("data('dataMain')/oPERATORNAME"),null,null,null,null,false,true);	
xf._d('APPLY_DATEDATE2','text',xf._q("data('dataMain')/APPLY_DATEDATE"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('input4','text',xf._q("data('dataMain')/CHANGE_TIMETIME"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('CHANGE_TITLETITLE2','text',xf._q("data('dataMain')/CHANGE_TITLETITLE"),null,null,null,null,false,false);	
xf._d('CHANGE_OBJECTOBJECT2','text',xf._q("data('dataMain')/CHANGE_OBJECTOBJECT"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/CHANGE_CONTENTCONTENT"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'col_0',labelColumn:'col_0',extColumn:null,labels:',',aligns:',',types:'checkbox,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default64"><row id="default65"><cell id="default66">检测内容</cell></row><row id="default67"><cell id="default68">人员分配</cell></row><row id="default69"><cell id="default70">时间安排</cell></row><row id="default71"><cell id="default72">系统资源</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea2','textarea',xf._q("data('dataMain')/CHANGE_REASONREASON"),null,null,null,null,false,false);	
xf._d('textarea3','textarea',xf._q("data('dataMain')/IMPACT_RANGERANGE"),null,null,null,null,false,false);	
xf._d('textarea4','textarea',xf._q("data('dataMain')/POTENTIAL_RISKRISK"),null,null,null,null,false,false);	
xf._d('textarea5','textarea',xf._q("data('dataMain')/RESOLVE_RISKRISK"),null,null,null,null,false,false);	
xf._d('textarea6','textarea',xf._q("data('dataMain')/IMPLEMENTATION_PROCESSPROCESS"),null,null,null,null,false,false);	
xf._d('textarea7','textarea',xf._q("data('dataMain')/RESOURCES_NEEDEDNEEDED"),null,null,null,null,false,false);	
xf._d('input1','text',xf._q("data('dataMain')/oPERATORNAME1"),null,null,null,null,false,false);	
xf._d('input3','text',xf._q("data('dataMain')/APPLY_APPROVE_DATE"),null,null,null,"yyyy-MM-dd",false,true);	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
