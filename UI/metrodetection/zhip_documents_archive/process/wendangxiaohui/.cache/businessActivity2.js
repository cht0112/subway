
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
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
					justep.Object.extend(this, new justep.ProcessEngine(this));
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
					//todo: 相似组件以后可以集中统一触发一次 
					//xforms.XMLEvents.dispatch(justep.xbl(model), "xforms-refresh");
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

	var ids=[{id:'7c73482bcd9c4b5cae4965e9ddaacbe8', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default27', name:'xforms:label'},{id:'default28', name:'xforms:value'}]},{id:'input4', name:'xforms:input'},{id:'treeSelect1', name:'xforms:treeselect1', children:[{id:'default42', name:'xforms:label'},{id:'default57', name:'xforms:value'}]},{id:'gridSelect6', name:'xforms:gridselect1', children:[{id:'default64', name:'xforms:label'},{id:'default67', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default18', name:'xforms:label'},{id:'default19', name:'xforms:value'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default23', name:'xforms:label'},{id:'default24', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default15', name:'xforms:label'},{id:'default16', name:'xforms:value'}]},{id:'input5', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default11', name:'xforms:label'},{id:'default12', name:'xforms:value'}]},{id:'textarea1', name:'xforms:textarea'},{id:'textarea2', name:'xforms:textarea'},{id:'radio1', name:'xforms:select1', children:[{id:'selectItem1', name:'xforms:item', children:[{id:'default7', name:'xforms:label'},{id:'default8', name:'xforms:value'}]},{id:'selectItem2', name:'xforms:item', children:[{id:'default9', name:'xforms:label'},{id:'default10', name:'xforms:value'}]}]},{id:'textarea3', name:'xforms:textarea'},{id:'textarea4', name:'xforms:textarea'},{id:'process1', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'process1_processControlDialog', name:'xforms:dialog'},{id:'process1_processChartDialogID', name:'xforms:dialog'},{id:'process1_processConfirmDialog', name:'xforms:dialog', children:[{id:'ee179dc2665b4edd853ea169c0d3e076', name:'xforms:trigger', children:[{id:'63e0a498754243acb584cf8ba2a0b1e4', name:'xforms:label'}]},{id:'f3181fc2954b4d808a75a963d2986d73', name:'xforms:trigger', children:[{id:'328e43801ab2475ba9e6fd9f73a680c7', name:'xforms:label'}]}]},{id:'process1_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'gridSelect2');xf._a('gridSelect2','default27');xf._a('gridSelect2','default29');xf._a(null,'input4');xf._a(null,'treeSelect1');xf._a('treeSelect1','default42');xf._a('treeSelect1','default60');xf._a(null,'gridSelect6');xf._a('gridSelect6','default64');xf._a('gridSelect6','default68');xf._a(null,'gridSelect4');xf._a('gridSelect4','default18');xf._a('gridSelect4','default22');xf._a(null,'gridSelect5');xf._a('gridSelect5','default23');xf._a('gridSelect5','default41');xf._a(null,'gridSelect3');xf._a('gridSelect3','default15');xf._a('gridSelect3','default17');xf._a(null,'input5');xf._a(null,'gridSelect1');xf._a('gridSelect1','default11');xf._a('gridSelect1','default13');xf._a(null,'textarea1');xf._a(null,'textarea2');xf._a(null,'radio1');xf._a('radio1','selectItem1');xf._a('selectItem1','default7');xf._a('radio1','selectItem2');xf._a('selectItem2','default9');xf._a(null,'textarea3');xf._a(null,'textarea4');xf._a(null,'ee179dc2665b4edd853ea169c0d3e076');xf._a('ee179dc2665b4edd853ea169c0d3e076','63e0a498754243acb584cf8ba2a0b1e4');xf._a(null,'f3181fc2954b4d808a75a963d2986d73');xf._a('f3181fc2954b4d808a75a963d2986d73','328e43801ab2475ba9e6fd9f73a680c7');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/aPPLICATIONTIME",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTIME')))));	
xf._b("instance('dataMain')/dESTROYTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dESTROYTYPE')))));	
xf._b("instance('dataMain')/sECRETLEVEL",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("instance('dataMain')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('dataMain')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('cData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('cData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('cData')/cHECKRESULT",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("instance('cData')/cHECKTIME",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKTIME')))));	
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
xf._b("instance('bizData1')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('bizData1')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('bizData1')/sECRETLEVEL",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("instance('bizData1')/lOCATIONROOMID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','lOCATIONROOMID')))));	
xf._b("instance('bizData1')/aRCHIVEDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE')))));	
xf._b("instance('bizData1')/aLLOWBORROW",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aLLOWBORROW')))));	
xf._b("instance('bizData1')/dESTROYSTATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dESTROYSTATE')))));	
xf._b("instance('leixing')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('leixing')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('docNodeTree')/sSize",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sSize')))));	
xf._b("instance('docNodeTree')/sCreateTime",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('docNodeTree')/sLastWriteTime",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sLastWriteTime')))));	
xf._b("instance('docNodeTree')/sDocLiveVersionID",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID')))));	
xf._b("instance('docNodeTree')/sFinishTime",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sFinishTime')))));	
xf._b("instance('docNodeTree')/sFlag",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('docNodeTree')/version",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('docData')/sSize",xf._g(xf._f('instance',xf._i("docData")),xf._h(false, xf._k("child",xf._j('','sSize')))));	
xf._b("instance('docData')/sCreateTime",xf._g(xf._f('instance',xf._i("docData")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('docData')/sLastWriteTime",xf._g(xf._f('instance',xf._i("docData")),xf._h(false, xf._k("child",xf._j('','sLastWriteTime')))));	
xf._b("instance('docData')/sDocLiveVersionID",xf._g(xf._f('instance',xf._i("docData")),xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID')))));	
xf._b("instance('docData')/sFinishTime",xf._g(xf._f('instance',xf._i("docData")),xf._h(false, xf._k("child",xf._j('','sFinishTime')))));	
xf._b("instance('docData')/sFlag",xf._g(xf._f('instance',xf._i("docData")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('docData')/version",xf._g(xf._f('instance',xf._i("docData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dataMain')/dESTROYTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dESTROYTYPE')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('dataMain')/aPPLICATIONTIME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTIME')))));	
xf._b("data('dataMain')/sParentID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sParentID')))));	
xf._b("data('dataMain')/sDocName1",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sDocName1')))));	
xf._b("sDocName",xf._h(false, xf._k("child",xf._j('','sDocName'))));	
xf._b("sParentID",xf._h(false, xf._k("child",xf._j('','sParentID'))));	
xf._b("sSequence",xf._h(false, xf._k("child",xf._j('','sSequence'))));	
xf._b("sSize",xf._h(false, xf._k("child",xf._j('','sSize'))));	
xf._b("sKind",xf._h(false, xf._k("child",xf._j('','sKind'))));	
xf._b("sDocPath",xf._h(false, xf._k("child",xf._j('','sDocPath'))));	
xf._b("sDocDisplayPath",xf._h(false, xf._k("child",xf._j('','sDocDisplayPath'))));	
xf._b("sCreatorFID",xf._h(false, xf._k("child",xf._j('','sCreatorFID'))));	
xf._b("sCreatorName",xf._h(false, xf._k("child",xf._j('','sCreatorName'))));	
xf._b("sCreatorDeptName",xf._h(false, xf._k("child",xf._j('','sCreatorDeptName'))));	
xf._b("sCreateTime",xf._h(false, xf._k("child",xf._j('','sCreateTime'))));	
xf._b("sEditorFID",xf._h(false, xf._k("child",xf._j('','sEditorFID'))));	
xf._b("sEditorName",xf._h(false, xf._k("child",xf._j('','sEditorName'))));	
xf._b("sEditorDeptName",xf._h(false, xf._k("child",xf._j('','sEditorDeptName'))));	
xf._b("sLastWriterFID",xf._h(false, xf._k("child",xf._j('','sLastWriterFID'))));	
xf._b("sLastWriterName",xf._h(false, xf._k("child",xf._j('','sLastWriterName'))));	
xf._b("sLastWriterDeptName",xf._h(false, xf._k("child",xf._j('','sLastWriterDeptName'))));	
xf._b("sLastWriteTime",xf._h(false, xf._k("child",xf._j('','sLastWriteTime'))));	
xf._b("sFileID",xf._h(false, xf._k("child",xf._j('','sFileID'))));	
xf._b("sDescription",xf._h(false, xf._k("child",xf._j('','sDescription'))));	
xf._b("sDocLiveVersionID",xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID'))));	
xf._b("sDocSerialNumber",xf._h(false, xf._k("child",xf._j('','sDocSerialNumber'))));	
xf._b("sKeywords",xf._h(false, xf._k("child",xf._j('','sKeywords'))));	
xf._b("sClassification",xf._h(false, xf._k("child",xf._j('','sClassification'))));	
xf._b("sFinishTime",xf._h(false, xf._k("child",xf._j('','sFinishTime'))));	
xf._b("sNameSpace",xf._h(false, xf._k("child",xf._j('','sNameSpace'))));	
xf._b("sFlag",xf._h(false, xf._k("child",xf._j('','sFlag'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("sCacheName",xf._h(false, xf._k("child",xf._j('','sCacheName'))));	
xf._b("sRevisionCacheName",xf._h(false, xf._k("child",xf._j('','sRevisionCacheName'))));	
xf._b("data('dataMain')/fILEID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fILEID')))));	
xf._b("data('dataMain')/sDocName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sDocName')))));	
xf._b("SA_DocNode",xf._h(false, xf._k("child",xf._j('','SA_DocNode'))));	
xf._b("data('bizData1')/dOCUMENTCATEGORY",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("dOCUMENTCATEGORYCNAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYCNAME'))));	
xf._b("DOCUMENT_CATEGORY_CODE",xf._h(false, xf._k("child",xf._j('','DOCUMENT_CATEGORY_CODE'))));	
xf._b("dOCUMENTCATEGORYENAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYENAME'))));	
xf._b("data('bizData1')/dOCUMENTTYPE",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("dOCUMENTTYPECNAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPECNAME'))));	
xf._b("DOCUMENT_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','DOCUMENT_TYPE_CODE'))));	
xf._b("dOCUMENTCATEGORY",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY'))));	
xf._b("dOCUMENTTYPE",xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE'))));	
xf._b("dOCUMENTTYPEENAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPEENAME'))));	
xf._b("data('dataMain')/fILENAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fILENAME')))));	
xf._b("pFILENAME",xf._h(false, xf._k("child",xf._j('','pFILENAME'))));	
xf._b("P_DOCUMENTS_ARCHIVE",xf._h(false, xf._k("child",xf._j('','P_DOCUMENTS_ARCHIVE'))));	
xf._b("fILEVER",xf._h(false, xf._k("child",xf._j('','fILEVER'))));	
xf._b("sECRETLEVEL",xf._h(false, xf._k("child",xf._j('','sECRETLEVEL'))));	
xf._b("pFILEPROPERTY",xf._h(false, xf._k("child",xf._j('','pFILEPROPERTY'))));	
xf._b("pFILEDESC",xf._h(false, xf._k("child",xf._j('','pFILEDESC'))));	
xf._b("lOCATIONROOMID",xf._h(false, xf._k("child",xf._j('','lOCATIONROOMID'))));	
xf._b("lOCATIONCABINETID",xf._h(false, xf._k("child",xf._j('','lOCATIONCABINETID'))));	
xf._b("aRCHIVEDATE",xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE'))));	
xf._b("aRCHIVEOPERATOR",xf._h(false, xf._k("child",xf._j('','aRCHIVEOPERATOR'))));	
xf._b("iNPUTOPERATOR",xf._h(false, xf._k("child",xf._j('','iNPUTOPERATOR'))));	
xf._b("aLLOWBORROW",xf._h(false, xf._k("child",xf._j('','aLLOWBORROW'))));	
xf._b("dESTROYSTATE",xf._h(false, xf._k("child",xf._j('','dESTROYSTATE'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("data('dataMain')/fILEVER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fILEVER')))));	
xf._b("data('dataMain')/sECRETLEVEL",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("data('dataMain')/fILEDESC",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fILEDESC')))));	
xf._b("data('dataMain')/mEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('cData')/cHECKRESULT",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("data('cData')/cHECKDESC",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKDESC')))));	
xf._b("data('cData')/mEMO",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("not(call('justep.XData.canDo','cData','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("cData"),xf._i("Save"))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dataMain','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','model1',"instance('dataMain')/aPPLICATIONTIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dataMain')/dESTROYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dataMain')/sECRETLEVEL","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('dataMain')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dataMain')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('cData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('cData',null);	
xf._c('xf-bind-5','model1',"instance('cData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('cData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('cData')/cHECKRESULT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('cData')/cHECKTIME","xsd:date",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){businessActivity2.model1XBLLoaded(event)}));xf._p(justep('model1'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
new xforms.XFInstance2('sysOperData','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-9','model1',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-12','model1',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-21','model1',"instance('bizData1')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('bizData1')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('bizData1')/sECRETLEVEL","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('bizData1')/lOCATIONROOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('bizData1')/aRCHIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('bizData1')/aLLOWBORROW","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('bizData1')/dESTROYSTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('kemu','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('leixing','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-28','model1',"instance('leixing')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('leixing')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('docNodeTree','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-30','model1',"instance('docNodeTree')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('docNodeTree')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('docNodeTree')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('docNodeTree')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-34','model1',"instance('docNodeTree')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-35','model1',"instance('docNodeTree')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','model1',"instance('docNodeTree')/version","xsd:integer",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){businessActivity2.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action2,'model1', evt,false)});	
xforms.load_parts('view1');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var docData_part_loaded = false;	
function load_docData_part(callback){if (docData_part_loaded) return;docData_part_loaded = true;	
new xforms.XFInstance2('docData','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-37','model1',"instance('docData')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('docData')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('docData')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-40','model1',"instance('docData')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('docData')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('docData')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','model1',"instance('docData')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var docData_part_init_loaded = false;	
function load_docData_part_init(){if (docData_part_init_loaded) return;docData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xforms.load_parts('view2');	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dESTROYTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default31"><row id="default32"><cell id="default33">1</cell><cell id="default34">电子文档销毁</cell></row><row id="default35"><cell id="default36">2</cell><cell id="default37">纸质文档销毁</cell></row></rows>',inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('input4','text',xf._q("data('dataMain')/aPPLICATIONTIME"),null,null,null,"yyyy-MM-dd",true,false);	
new xforms.XFExtSelect({id:'treeSelect1',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/sParentID"),labelRef:xf._q("data('dataMain')/sDocName1"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'docNodeTree',columns:'sDocName,sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',valueColumn:'sParentID',labelColumn:'sDocName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fILEID"),labelRef:xf._q("data('dataMain')/sDocName"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'docData',columns:'SA_DocNode,sDocName,sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'SA_DocNode,sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',valueColumn:'SA_DocNode',labelColumn:'sDocName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData1')/dOCUMENTCATEGORY"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'kemu',columns:'DOCUMENT_CATEGORY_CODE,dOCUMENTCATEGORYCNAME,dOCUMENTCATEGORYENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DOCUMENT_CATEGORY_CODE,dOCUMENTCATEGORYENAME',valueColumn:'DOCUMENT_CATEGORY_CODE',labelColumn:'dOCUMENTCATEGORYCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData1')/dOCUMENTTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'leixing',columns:'DOCUMENT_TYPE_CODE,dOCUMENTTYPECNAME,dOCUMENTCATEGORY,dOCUMENTTYPE,dOCUMENTTYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DOCUMENT_TYPE_CODE,dOCUMENTCATEGORY,dOCUMENTTYPE,dOCUMENTTYPEENAME',valueColumn:'DOCUMENT_TYPE_CODE',labelColumn:'dOCUMENTTYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fILEID"),labelRef:xf._q("data('dataMain')/fILENAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'P_DOCUMENTS_ARCHIVE,pFILENAME,dOCUMENTCATEGORY,dOCUMENTTYPE,fILEVER,sECRETLEVEL,pFILEPROPERTY,pFILEDESC,lOCATIONROOMID,lOCATIONCABINETID,aRCHIVEDATE,aRCHIVEOPERATOR,iNPUTOPERATOR,aLLOWBORROW,dESTROYSTATE,mEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'P_DOCUMENTS_ARCHIVE,dOCUMENTCATEGORY,dOCUMENTTYPE,fILEVER,sECRETLEVEL,pFILEPROPERTY,pFILEDESC,lOCATIONROOMID,lOCATIONCABINETID,aRCHIVEDATE,aRCHIVEOPERATOR,iNPUTOPERATOR,aLLOWBORROW,dESTROYSTATE,mEMO',valueColumn:'P_DOCUMENTS_ARCHIVE',labelColumn:'pFILENAME',extColumn:null,labels:',,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('input5','text',xf._q("data('dataMain')/fILEVER"),null,null,null,null,true,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/sECRETLEVEL"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default44"><row id="default45"><cell id="default46">1</cell><cell id="default47">普通</cell></row><row id="default48"><cell id="default49">2</cell><cell id="default50">秘密</cell></row><row id="default51"><cell id="default52">3</cell><cell id="default53">机密</cell></row><row id="default54"><cell id="default55">4</cell><cell id="default56">绝密</cell></row></rows>',inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea1','textarea',xf._q("data('dataMain')/fILEDESC"),null,null,null,null,true,false);	
xf._d('textarea2','textarea',xf._q("data('dataMain')/mEMO"),null,null,null,null,true,false);	
var xf_select1_radio1=new xforms.XFSelect('radio1',false,true,xf._q("data('cData')/cHECKRESULT"),true,false,false,'',0);	
var xf_item_selectItem1=new xforms.XFItem('selectItem1',null,null);	
var xf_item_selectItem2=new xforms.XFItem('selectItem2',null,null);	
xf._d('textarea3','textarea',xf._q("data('cData')/cHECKDESC"),null,null,null,null,false,false);	
xf._d('textarea4','textarea',xf._q("data('cData')/mEMO"),null,null,null,null,false,false);	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'xf-model-1', evt,false)});	
new xforms.XFDialog('process1_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','445',null,null,null,null);	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('process1_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('process1'); process[callback](task, processControl, options); } justep('process1_processControlDialogIFrame').src="";});xf._p(justep('process1_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_3,'process1_processControlDialog', evt,false)});	
new xforms.XFDialog('process1_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){justep('process1_processChartDialogIFrame').src="";});xf._p(justep('process1_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_4,'process1_processChartDialogID', evt,false)});	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('process1_processChartDialogIFrame').src=url;});xf._p(justep('process1_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_5,'process1_processChartDialogID', evt,false)});	
new xforms.XFDialog('process1_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_6=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process1_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('process1'); process[callback](task, processControl, options); }});xf._p(justep('process1_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_6,'process1_processConfirmDialog', evt,false)});	
var xf_trigger_ee179dc2665b4edd853ea169c0d3e076=new xforms.XFTrigger('ee179dc2665b4edd853ea169c0d3e076',null,null,null,false,false);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process1_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('process1_processConfirmDialog').close();}));xf._p(justep('ee179dc2665b4edd853ea169c0d3e076'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'ee179dc2665b4edd853ea169c0d3e076', evt,false)});	
var xf_trigger_f3181fc2954b4d808a75a963d2986d73=new xforms.XFTrigger('f3181fc2954b4d808a75a963d2986d73',null,null,null,false,false);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process1_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('process1_processConfirmDialog').close();}));xf._p(justep('f3181fc2954b4d808a75a963d2986d73'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'f3181fc2954b4d808a75a963d2986d73', evt,false)});	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
var __actions__ = {	
};	
		