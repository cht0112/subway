
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
					var tmp = cur.localName || cur.tagName;	if (tmp.toLowerCase()=="body")
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

	var ids=[{id:'fd7f42a69907496f87cbd4e5efc53b75', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'toolbars3', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default20', name:'xforms:label'},{id:'default21', name:'xforms:value'}]},{id:'input3', name:'xforms:input'},{id:'treeSelect1', name:'xforms:treeselect1', children:[{id:'default54', name:'xforms:label'},{id:'default55', name:'xforms:value'}]},{id:'gridSelect8', name:'xforms:gridselect1', children:[{id:'default66', name:'xforms:label'},{id:'default67', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default41', name:'xforms:label'},{id:'default42', name:'xforms:value'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default46', name:'xforms:label'},{id:'default47', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default36', name:'xforms:label'},{id:'default37', name:'xforms:value'}]},{id:'input5', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default4', name:'xforms:label'},{id:'default5', name:'xforms:value'}]},{id:'textarea1', name:'xforms:textarea'},{id:'textarea2', name:'xforms:textarea'},{id:'process1', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'process1_processControlDialog', name:'xforms:dialog'},{id:'process1_processChartDialogID', name:'xforms:dialog'},{id:'process1_processConfirmDialog', name:'xforms:dialog', children:[{id:'457bd892fe9a40738ddbbe62e713e0e1', name:'xforms:trigger', children:[{id:'88375bb8c67b4cadb5b66da08bb1fb0e', name:'xforms:label'}]},{id:'03f2836afe1d4f3893b4d0185f84ce78', name:'xforms:trigger', children:[{id:'9a4c43b3acdd45a78cea16e8b38add3f', name:'xforms:label'}]}]},{id:'process1_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'gridSelect2');xf._a('gridSelect2','default20');xf._a('gridSelect2','default22');xf._a(null,'input3');xf._a(null,'treeSelect1');xf._a('treeSelect1','default54');xf._a('treeSelect1','default56');xf._a(null,'gridSelect8');xf._a('gridSelect8','default66');xf._a('gridSelect8','default68');xf._a(null,'gridSelect4');xf._a('gridSelect4','default41');xf._a('gridSelect4','default45');xf._a(null,'gridSelect5');xf._a('gridSelect5','default46');xf._a('gridSelect5','default48');xf._a(null,'gridSelect3');xf._a('gridSelect3','default36');xf._a('gridSelect3','default38');xf._a(null,'input5');xf._a(null,'gridSelect1');xf._a('gridSelect1','default4');xf._a('gridSelect1','default6');xf._a(null,'textarea1');xf._a(null,'textarea2');xf._a(null,'457bd892fe9a40738ddbbe62e713e0e1');xf._a('457bd892fe9a40738ddbbe62e713e0e1','88375bb8c67b4cadb5b66da08bb1fb0e');xf._a(null,'03f2836afe1d4f3893b4d0185f84ce78');xf._a('03f2836afe1d4f3893b4d0185f84ce78','9a4c43b3acdd45a78cea16e8b38add3f');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/aPPLICATIONTIME",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTIME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'销毁申请时间不能为空!'",xf._i("销毁申请时间不能为空!"));	
xf._b("instance('dataMain')/dESTROYTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dESTROYTYPE')))));	
xf._b("'销毁类别不能为空!'",xf._i("销毁类别不能为空!"));	
xf._b("instance('dataMain')/fILEVER",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fILEVER')))));	
xf._b("'文件版本不能为空!'",xf._i("文件版本不能为空!"));	
xf._b("instance('dataMain')/sECRETLEVEL",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("instance('dataMain')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('dataMain')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('bizData1')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('bizData1')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('bizData1')/sECRETLEVEL",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("instance('bizData1')/lOCATIONROOMID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','lOCATIONROOMID')))));	
xf._b("instance('bizData1')/aRCHIVEDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE')))));	
xf._b("instance('bizData1')/aLLOWBORROW",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aLLOWBORROW')))));	
xf._b("instance('bizData1')/dESTROYSTATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dESTROYSTATE')))));	
xf._b("instance('leixing')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('leixing')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('bizData2')/aPPLICATIONTIME",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTIME')))));	
xf._b("'借阅申请时间不能为空!'",xf._i("借阅申请时间不能为空!"));	
xf._b("instance('bizData2')/pFILEID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','pFILEID')))));	
xf._b("'编号不能为空!'",xf._i("编号不能为空!"));	
xf._b("instance('bizData2')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("'文档科目不能为空!'",xf._i("文档科目不能为空!"));	
xf._b("instance('bizData2')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("'文档类型不能为空!'",xf._i("文档类型不能为空!"));	
xf._b("instance('bizData2')/pFILENAME",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','pFILENAME')))));	
xf._b("'文档名称不能为空!'",xf._i("文档名称不能为空!"));	
xf._b("instance('bizData2')/bORROWER",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','bORROWER')))));	
xf._b("'借阅者不能为空!'",xf._i("借阅者不能为空!"));	
xf._b("instance('bizData2')/rETURNDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("'预计归还日期不能为空!'",xf._i("预计归还日期不能为空!"));	
xf._b("instance('bizData2')/iNDEEDRETURNDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE')))));	
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
xf._b("SA_DocNode",xf._h(false, xf._k("child",xf._j('','SA_DocNode'))));	
xf._b("data('dataMain')/dOCUMENTCATEGORY",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("data('dataMain')/dOCUMENTCATEGORYCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYCNAME')))));	
xf._b("dOCUMENTCATEGORYCNAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYCNAME'))));	
xf._b("DOCUMENT_CATEGORY_CODE",xf._h(false, xf._k("child",xf._j('','DOCUMENT_CATEGORY_CODE'))));	
xf._b("dOCUMENTCATEGORYENAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYENAME'))));	
xf._b("data('dataMain')/dOCUMENTTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("data('dataMain')/dOCUMENTTYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPECNAME')))));	
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
xf._b("not(call('justep.XData.canDo','dataMain','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Save"))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dataMain','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','model1',"instance('dataMain')/aPPLICATIONTIME",null,null,"true()",null,null,null,"'销毁申请时间不能为空!'");	
xf._c('xf-bind-1','model1',"instance('dataMain')/dESTROYTYPE",null,null,"true()",null,null,null,"'销毁类别不能为空!'");	
xf._c('xf-bind-2','model1',"instance('dataMain')/fILEVER",null,null,"true()",null,null,null,"'文件版本不能为空!'");	
xf._c('xf-bind-3','model1',"instance('dataMain')/aPPLICATIONTIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dataMain')/dESTROYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('dataMain')/sECRETLEVEL","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dataMain')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('dataMain')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-8','model1',"instance('bizData1')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('bizData1')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('bizData1')/sECRETLEVEL","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('bizData1')/lOCATIONROOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('bizData1')/aRCHIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('bizData1')/aLLOWBORROW","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('bizData1')/dESTROYSTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('kemu','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('leixing','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-15','model1',"instance('leixing')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('leixing')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData2',null);	
xf._c('xf-bind-17','model1',"instance('bizData2')/aPPLICATIONTIME",null,null,"true()",null,null,null,"'借阅申请时间不能为空!'");	
xf._c('xf-bind-18','model1',"instance('bizData2')/pFILEID",null,null,"true()",null,null,null,"'编号不能为空!'");	
xf._c('xf-bind-19','model1',"instance('bizData2')/dOCUMENTCATEGORY",null,null,"true()",null,null,null,"'文档科目不能为空!'");	
xf._c('xf-bind-20','model1',"instance('bizData2')/dOCUMENTTYPE",null,null,"true()",null,null,null,"'文档类型不能为空!'");	
xf._c('xf-bind-21','model1',"instance('bizData2')/pFILENAME",null,null,"true()",null,null,null,"'文档名称不能为空!'");	
xf._c('xf-bind-22','model1',"instance('bizData2')/bORROWER",null,null,"true()",null,null,null,"'借阅者不能为空!'");	
xf._c('xf-bind-23','model1',"instance('bizData2')/rETURNDATE",null,null,"true()",null,null,null,"'预计归还日期不能为空!'");	
xf._c('xf-bind-24','model1',"instance('bizData2')/aPPLICATIONTIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('bizData2')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('bizData2')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('bizData2')/rETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('bizData2')/iNDEEDRETURNDATE","xsd:date",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('model1'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
new xforms.XFInstance2('docNodeTree','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-29','model1',"instance('docNodeTree')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('docNodeTree')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('docNodeTree')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('docNodeTree')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('docNodeTree')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-34','model1',"instance('docNodeTree')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-35','model1',"instance('docNodeTree')/version","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('view1');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var docData_part_loaded = false;	
function load_docData_part(callback){if (docData_part_loaded) return;docData_part_loaded = true;	
new xforms.XFInstance2('docData','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-36','model1',"instance('docData')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-37','model1',"instance('docData')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('docData')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('docData')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','model1',"instance('docData')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('docData')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('docData')/version","xsd:integer",null,null,null,null,null,null);	
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
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dESTROYTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default24"><row id="default25"><cell id="default26">1</cell><cell id="default27">电子文档销毁</cell></row><row id="default28"><cell id="default29">2</cell><cell id="default30">纸质文档销毁</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect2Closeup'});	
xf._d('input3','text',xf._q("data('dataMain')/aPPLICATIONTIME"),null,null,null,"yyyy-MM-dd",true,false);	
new xforms.XFExtSelect({id:'treeSelect1',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/sParentID"),labelRef:xf._q("data('dataMain')/sDocName1"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'docNodeTree',columns:'sDocName,sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',valueColumn:'sParentID',labelColumn:'sDocName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_2125686817',onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.treeSelect1Closeup'});	
new xforms.XFExtSelect({id:'gridSelect8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fILEID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'docData',columns:'SA_DocNode,sDocName,sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'SA_DocNode,sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',valueColumn:'SA_DocNode',labelColumn:'sDocName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dOCUMENTCATEGORY"),labelRef:xf._q("data('dataMain')/dOCUMENTCATEGORYCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'kemu',columns:'DOCUMENT_CATEGORY_CODE,dOCUMENTCATEGORYCNAME,dOCUMENTCATEGORYENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DOCUMENT_CATEGORY_CODE,dOCUMENTCATEGORYENAME',valueColumn:'DOCUMENT_CATEGORY_CODE',labelColumn:'dOCUMENTCATEGORYCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect4Closeup'});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dOCUMENTTYPE"),labelRef:xf._q("data('dataMain')/dOCUMENTTYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'leixing',columns:'DOCUMENT_TYPE_CODE,dOCUMENTTYPECNAME,dOCUMENTCATEGORY,dOCUMENTTYPE,dOCUMENTTYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DOCUMENT_TYPE_CODE,dOCUMENTCATEGORY,dOCUMENTTYPE,dOCUMENTTYPEENAME',valueColumn:'DOCUMENT_TYPE_CODE',labelColumn:'dOCUMENTTYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect5Closeup'});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fILEID"),labelRef:xf._q("data('dataMain')/fILENAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'P_DOCUMENTS_ARCHIVE,pFILENAME,dOCUMENTCATEGORY,dOCUMENTTYPE,fILEVER,sECRETLEVEL,pFILEPROPERTY,pFILEDESC,lOCATIONROOMID,lOCATIONCABINETID,aRCHIVEDATE,aRCHIVEOPERATOR,iNPUTOPERATOR,aLLOWBORROW,dESTROYSTATE,mEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'P_DOCUMENTS_ARCHIVE,dOCUMENTCATEGORY,dOCUMENTTYPE,fILEVER,sECRETLEVEL,pFILEPROPERTY,pFILEDESC,lOCATIONROOMID,lOCATIONCABINETID,aRCHIVEDATE,aRCHIVEOPERATOR,iNPUTOPERATOR,aLLOWBORROW,dESTROYSTATE,mEMO',valueColumn:'P_DOCUMENTS_ARCHIVE',labelColumn:'pFILENAME',extColumn:null,labels:',,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivity.gridSelect3Dropdown',onCloseup:'mainActivity.gridSelect3Closeup'});	
xf._d('input5','text',xf._q("data('dataMain')/fILEVER"),null,null,null,null,true,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/sECRETLEVEL"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default8"><row id="default9"><cell id="default10">1</cell><cell id="default11">普通</cell></row><row id="default12"><cell id="default13">2</cell><cell id="default14">秘密</cell></row><row id="default15"><cell id="default16">3</cell><cell id="default17">机密</cell></row><row id="default33"><cell id="default34">4</cell><cell id="default35">绝密</cell></row></rows>',inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea1','textarea',xf._q("data('dataMain')/fILEDESC"),null,null,null,null,true,false);	
xf._d('textarea2','textarea',xf._q("data('dataMain')/mEMO"),null,null,null,null,false,false);	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var data = justep.xbl('dataMain'); if (data){ data.attachEvent(justep.XData.EVENT_REFRESHDATA_BEFORE, function(event){ var conceptName = event.source.getConceptAliasName(); var value = justep.Context.getProcessData1(); var condition = null; if (value){ condition = conceptName + "='" + value + "'"; }else{ condition = "1=0"; } event.source.setFilter("_process-filter_", condition); }, data); }else{ throw new Error("[process组件定义出错]: data属性(" + 'dataMain' + ")引用的不是xbl组件!"); }}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'xf-model-1', evt,false)});	
new xforms.XFDialog('process1_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','445',null,null,null,null);	
var xf_script_xf_script_2=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('process1_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('process1'); process[callback](task, processControl, options); } justep('process1_processControlDialogIFrame').src="";});xf._p(justep('process1_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_2,'process1_processControlDialog', evt,false)});	
new xforms.XFDialog('process1_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){justep('process1_processChartDialogIFrame').src="";});xf._p(justep('process1_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_3,'process1_processChartDialogID', evt,false)});	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('process1_processChartDialogIFrame').src=url;});xf._p(justep('process1_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_4,'process1_processChartDialogID', evt,false)});	
new xforms.XFDialog('process1_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process1_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('process1'); process[callback](task, processControl, options); }});xf._p(justep('process1_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'process1_processConfirmDialog', evt,false)});	
var xf_trigger_457bd892fe9a40738ddbbe62e713e0e1=new xforms.XFTrigger('457bd892fe9a40738ddbbe62e713e0e1',null,null,null,false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process1_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('process1_processConfirmDialog').close();}));xf._p(justep('457bd892fe9a40738ddbbe62e713e0e1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'457bd892fe9a40738ddbbe62e713e0e1', evt,false)});	
var xf_trigger_03f2836afe1d4f3893b4d0185f84ce78=new xforms.XFTrigger('03f2836afe1d4f3893b4d0185f84ce78',null,null,null,false,false);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('process1_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('process1_processConfirmDialog').close();}));xf._p(justep('03f2836afe1d4f3893b4d0185f84ce78'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'03f2836afe1d4f3893b4d0185f84ce78', evt,false)});	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
var __actions__ = {	
};	
		