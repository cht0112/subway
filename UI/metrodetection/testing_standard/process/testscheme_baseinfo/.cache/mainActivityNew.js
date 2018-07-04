
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
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

function _xbl_JSClassDefine_menu(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_menu.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"_id": null,
				"_itemsets": null,
				initXBL: function(){
					var menuitemsets = this.getElementByXblID("menuitemsets");
					this._id = menuitemsets.attributes["menuid"].value;
					this._itemsets = {};
					var nodes = $(menuitemsets).children();
					var len = nodes.length;
					for (var i = 0; len > i; i++) {
						var info = {};
						this.initItemset(nodes[i], info);
						this._itemsets[info["id"]] = info;
						if(info["init-loaded"] == "true"){
							this.refreshMenuItemset(info["id"]);
						}
					}
				},
				initItemset: function(e, info){
					info["id"] = e.attributes["id"].value;
					info["init-loaded"] = e.attributes["init-loaded"].value;
					info["replace"] = e.attributes["replace"].value;
					info["data"] = e.attributes["data"].value;
					info["parentID"] = e.attributes["parentID"].value;
					var params = [];
					info["params"] = params;
					var nodes = $(e).children();
					var len = nodes.length;
					for (var i = 0; len > i; i++) {
						params[i] = {};
						params[i]["name"] = nodes[i].attributes["name"].value;
						params[i]["value"] = nodes[i].attributes["value"].value;
					}
				},
				refreshMenu: function(){
					for (var p in this._itemsets)
					{
						this.refreshMenuItemset(this._itemsets[p].id);
					}
				},
				refreshMenuItemset: function(itemsetID){
					var itemInfo = new xforms.MenuItemInfo();
					var params = this._itemsets[itemsetID]["params"];
					var len = params.length;
					for (var i=0; len > i; i++){
						itemInfo[params[i]["name"]] = params[i]["value"]
					}
					var data = this._itemsets[itemsetID]["data"];
					var replace = this._itemsets[itemsetID]["replace"];
					var parentID = this._itemsets[itemsetID]["parentID"];
					if(parentID == ""){
						document.getElementById(this._id).xformsObject.loadInstance(data, itemInfo, replace);
					}else{
						document.getElementById(this._id).xformsObject.loadInstance(data, itemInfo, replace, parentID);
					}
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

function _xbl_JSClassDefine_bizDataFilterPattern(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_bizDataFilterPattern.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL": function() {
				var menuEl = this.getElementByXblID("filter-pattern-menu");
				this.menuId = $(menuEl).firstElement().getAttribute("menu-id");
				var dialogEl = this.getElementByXblID("filter-pattern-dialog");
				this.dialogId = $(dialogEl).firstElement().id;
				var frameEl = this.getElementByXblID("filter-pattern-dialog-iframe");
				this.iframeId = frameEl.getAttribute("name");
			},
			"show": function(data, controlId, filterDlgId) {
				if (typeof(data) == "string") {
					data = justep.xbl(data);
				}
				if (data) {
					if (typeof(data.advanceFilter) != "undefined") {
						var frameEl = document.getElementById(this.iframeId);
						if (frameEl) {
							frameEl.dialogId = this.dialogId;
							frameEl.currData = data;
							frameEl.advanceFilter = data.advanceFilter.getFilter();
							showFilterPatternMenu(data, this.menuId, controlId, filterDlgId);
						}
					}
				}
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
								}if (!info.disImg){
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

function _xbl_JSClassDefine_bizDataFilterDialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_bizDataFilterDialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL": function() {
				var dialogEl = this.getElementByXblID("filter-dialog");
				this.dialogId = $(dialogEl).firstElement().id;
				var frameEl = this.getElementByXblID("filter-dialog-iframe");
				this.iframeId = frameEl.id;
			},
			"show": function(data, callBack) {
				var filterData = data;
				if (typeof(filterData) == "string") {
					filterData = justep.xbl(filterData);
				}
				if (filterData) {
					if (typeof(filterData.advanceFilter) != "undefined") {
						var dialog = xforms(this.dialogId);
						if(dialog) {
							var frameEl = justep(this.iframeId);
							if (frameEl) {
								frameEl.dialogId = this.dialogId;
								frameEl.filterData = filterData;
								frameEl.callBack = callBack;
								dialog.open();
								return true;
							}
						}
					}
				}
				return false;
			}
		}));

	var ids=[{id:'77002f06d2244141bc5da74ce74683c7', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'testSchemeP', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'testSchemeP_processControlDialog', name:'xforms:dialog'},{id:'testSchemeP_processChartDialogID', name:'xforms:dialog'},{id:'testSchemeP_processConfirmDialog', name:'xforms:dialog', children:[{id:'71ac5deda0284fa084f0d1099b5cf4a5', name:'xforms:trigger', children:[{id:'a725255456bd44a79e55ab6492896f42', name:'xforms:label'}]},{id:'80a1bc116b374c56b25b3ae91eb616c7', name:'xforms:trigger', children:[{id:'10f5ea8d51744d1a971c4f7a36d12cc6', name:'xforms:label'}]}]},{id:'testSchemeP_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'input1', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default4', name:'xforms:label'},{id:'default5', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default24', name:'xforms:label'},{id:'default25', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default27', name:'xforms:label'},{id:'default28', name:'xforms:value'}]},{id:'textarea2', name:'xforms:textarea'},{id:'input2', name:'xforms:input'},{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMore', name:'xforms:trigger', children:[{id:'f4b39478407f4b3a9137f5b41ecc549e', name:'xforms:label'}]}]},{id:'toolbars3', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMoreD', name:'xforms:trigger', children:[{id:'bc1bfc2ca32847faac3ee4a9e65e94af', name:'xforms:label'}]}]},{id:'testCaseGrid', name:'xforms:grid'},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default40', name:'xforms:label'},{id:'default41', name:'xforms:value'}]},{id:'relationWD', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'filter-pattern-a683cee9-acca-451c-a613-905609861e01', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'f6429fa7729d429ea54f4fb18fda8e14', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_119525049', name:'xforms:menu'}]},{id:'GLOBAL_ID_1516648329', name:'xforms:dialog'}]},{id:'filter-dialog-5712ce2e-ea96-4e6a-92b6-c68a7ea401e2', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N135074281', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'71ac5deda0284fa084f0d1099b5cf4a5');xf._a('71ac5deda0284fa084f0d1099b5cf4a5','a725255456bd44a79e55ab6492896f42');xf._a(null,'80a1bc116b374c56b25b3ae91eb616c7');xf._a('80a1bc116b374c56b25b3ae91eb616c7','10f5ea8d51744d1a971c4f7a36d12cc6');xf._a(null,'input1');xf._a(null,'gridSelect1');xf._a('gridSelect1','default4');xf._a('gridSelect1','default6');xf._a(null,'gridSelect2');xf._a('gridSelect2','default24');xf._a('gridSelect2','default26');xf._a(null,'gridSelect3');xf._a('gridSelect3','default27');xf._a('gridSelect3','default29');xf._a(null,'textarea2');xf._a(null,'input2');xf._a(null,'saveMore');xf._a('saveMore','f4b39478407f4b3a9137f5b41ecc549e');xf._a(null,'saveMoreD');xf._a('saveMoreD','bc1bfc2ca32847faac3ee4a9e65e94af');xf._a(null,'testCaseGrid');xf._a(null,'gridSelect4');xf._a('gridSelect4','default40');xf._a('gridSelect4','default42');function init() {	
var begin = new Date().getTime();	
xf._b("instance('testSchemeBaseInfoD')/bUSINESSID",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('testSchemeBaseInfoD')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("instance('testSchemeBaseInfoD')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("instance('testSchemeBaseInfoD')/vALIDSTATE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("instance('testSchemeBaseInfoD')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('testSchemeBaseInfoD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))));	
xf._b("instance('testSchemeBaseInfoD')/VALID_STATE_CODE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','VALID_STATE_CODE')))));	
xf._b("instance('testSchemeBaseInfoD')/DECTION_BASED_ON_INFO",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO')))));	
xf._b("instance('testSchemeBaseInfoD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))));	
xf._b("instance('dectionBaseInfoD')/vALIDDATETIME",xf._g(xf._f('instance',xf._i("dectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDDATETIME')))));	
xf._b("instance('dectionBaseInfoD')/vALIDSTATE",xf._g(xf._f('instance',xf._i("dectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("instance('dectionBaseInfoD')/version",xf._g(xf._f('instance',xf._i("dectionBaseInfoD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('testSchemeCaseInfoD')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('testSchemeCaseInfoD')/bUSINESSID",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('testSchemeCaseInfoD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))));	
xf._b("instance('testSchemeCaseInfoD')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('testSchemeCaseInfoD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('testSchemeCaseInfoD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("testSchemeCaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('testCaseBaseInfoD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('testCaseBaseInfoD')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("instance('testCaseBaseInfoD')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("instance('testCaseBaseInfoD')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('testCaseBaseInfoD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('testCaseBaseInfoD')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('testCaseBaseInfoD')/dEVICETYPE",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('testCaseBaseInfoD')/DECTION_BASED_ON_INFO",xf._g(xf._f('instance',xf._i("testCaseBaseInfoD")),xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO')))));	
xf._b("instance('businessStageD')/bUSINESSID",xf._g(xf._f('instance',xf._i("businessStageD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('businessStageD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("businessStageD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))));	
xf._b("instance('indexAndRelationD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("indexAndRelationD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('indexAndRelationD')/bUSINESSID",xf._g(xf._f('instance',xf._i("indexAndRelationD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('indexAndRelationD')/iNDEXNO",xf._g(xf._f('instance',xf._i("indexAndRelationD")),xf._h(false, xf._k("child",xf._j('','iNDEXNO')))));	
xf._b("data('testSchemeBaseInfoD')/tESTSCHEMENAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMENAME')))));	
xf._b("data('testSchemeBaseInfoD')/dECTIONBASEDONID",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("data('testSchemeBaseInfoD')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("dECTIONBASEDONNAME",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME'))));	
xf._b("DECTION_BASED_ON_INFO",xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_INFO'))));	
xf._b("vALIDDATETIME",xf._h(false, xf._k("child",xf._j('','vALIDDATETIME'))));	
xf._b("vALIDSTATE",xf._h(false, xf._k("child",xf._j('','vALIDSTATE'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("data('testSchemeBaseInfoD')/bUSINESSID",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("data('testSchemeBaseInfoD')/bUSINESSIDCNAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME')))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("BUSINESS_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE'))));	
xf._b("bUSINESSIDENAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDENAME'))));	
xf._b("data('testSchemeBaseInfoD')/vALIDSTATE",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("data('testSchemeBaseInfoD')/vALIDSTATECNAME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATECNAME')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("vALIDSTATECNAME",xf._h(false, xf._k("child",xf._j('','vALIDSTATECNAME'))));	
xf._b("VALID_STATE_CODE",xf._h(false, xf._k("child",xf._j('','VALID_STATE_CODE'))));	
xf._b("vALIDSTATEENAME",xf._h(false, xf._k("child",xf._j('','vALIDSTATEENAME'))));	
xf._b("data('testSchemeBaseInfoD')/tESTSCHEMEDESC",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEDESC')))));	
xf._b("data('testSchemeBaseInfoD')/mAKEDATETIME",xf._g(xf._f('data',xf._i("testSchemeBaseInfoD")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("checkBox",xf._h(false, xf._k("child",xf._j('','checkBox'))));	
xf._b("serialNumber",xf._h(false, xf._k("child",xf._j('','serialNumber'))));	
xf._b("tESTCASEVER",xf._h(false, xf._k("child",xf._j('','tESTCASEVER'))));	
xf._b("tESTCASEID",xf._h(false, xf._k("child",xf._j('','tESTCASEID'))));	
xf._b("tESTCASENAME",xf._h(false, xf._k("child",xf._j('','tESTCASENAME'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("calMark",xf._h(false, xf._k("child",xf._j('','calMark'))));	
xf._b("data('businessCD')/businessStage",xf._g(xf._f('data',xf._i("businessCD")),xf._h(false, xf._k("child",xf._j('','businessStage')))));	
xf._b("data('businessCD')/businessStageName",xf._g(xf._f('data',xf._i("businessCD")),xf._h(false, xf._k("child",xf._j('','businessStageName')))));	
xf._b("bUSINESSSTAGECNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGECNAME'))));	
xf._b("bUSINESSSTAGE",xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE'))));	
xf._b("bUSINESSID",xf._h(false, xf._k("child",xf._j('','bUSINESSID'))));	
xf._b("bUSINESSSTAGEENAME",xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGEENAME'))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ch', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('testSchemeBaseInfoD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('testSchemeBaseInfoD',null);	
xf._c('xf-bind-0','model1',"instance('testSchemeBaseInfoD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('testSchemeBaseInfoD')/dECTIONBASEDONID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('testSchemeBaseInfoD')/mAKEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('testSchemeBaseInfoD')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('testSchemeBaseInfoD')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('testSchemeBaseInfoD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('testSchemeBaseInfoD')/VALID_STATE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('testSchemeBaseInfoD')/DECTION_BASED_ON_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('testSchemeBaseInfoD')/bUSINESSSTAGE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dectionBaseInfoD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dectionBaseInfoD',null);	
xf._c('xf-bind-9','model1',"instance('dectionBaseInfoD')/vALIDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('dectionBaseInfoD')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('dectionBaseInfoD')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('businessTypeCodeD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('businessTypeCodeD',null);	
new xforms.XFInstance2('validStateCodeD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('validStateCodeD',null);	
new xforms.XFInstance2('testSchemeCaseInfoD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('testSchemeCaseInfoD',null);	
xf._c('xf-bind-12','model1',"instance('testSchemeCaseInfoD')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('testSchemeCaseInfoD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('testSchemeCaseInfoD')/bUSINESSSTAGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('testSchemeCaseInfoD')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('testSchemeCaseInfoD')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('testSchemeCaseInfoD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('testCaseBaseInfoD','model1',null,null,null,null,null,null,null,null,'checkBox,serialNumber,calMark',null,'whereAll');	
xf._c('xf-bind-18','model1',"instance('testCaseBaseInfoD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('testCaseBaseInfoD')/mAKEDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('testCaseBaseInfoD')/dECTIONBASEDONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('testCaseBaseInfoD')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('testCaseBaseInfoD')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('testCaseBaseInfoD')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('testCaseBaseInfoD')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('testCaseBaseInfoD')/DECTION_BASED_ON_INFO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('businessCD','model1',null,'<rows id="default30"><row id="default31"><cell id="default32"></cell><cell id="default33"></cell><cell id="default34"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('businessCD','businessId,businessStage,businessStageName');	
new xforms.XFInstance2('businessStageD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('businessStageD',null);	
xf._c('xf-bind-26','model1',"instance('businessStageD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('businessStageD')/bUSINESSSTAGE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('indexAndRelationD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('indexAndRelationD',null);	
xf._c('xf-bind-28','model1',"instance('indexAndRelationD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('indexAndRelationD')/bUSINESSID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('indexAndRelationD')/iNDEXNO","xsd:float",null,null,null,null,null,null);	
xforms.load_parts('view1');	
var xf_menu_GLOBAL_ID_119525049 = new xforms.XFMenu('GLOBAL_ID_119525049','context');xf_menu_GLOBAL_ID_119525049.menu.addContextZone('f6429fa7729d429ea54f4fb18fda8e14');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_119525049.hide()});xf_menu_GLOBAL_ID_119525049.menu.setOpenMode('web');	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1516648329");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_119525049'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_119525049', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1516648329',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N649735914');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N649735914", "");}));xf._p(justep('GLOBAL_ID_1516648329'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_1516648329', evt,false)});	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N649735914');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1516648329'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_1516648329', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N135074281',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N619726267');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N619726267", "");}));xf._p(justep('GLOBAL_ID_N135074281'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N135074281', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var data = justep.xbl('testSchemeBaseInfoD'); if (data){ data.attachEvent(justep.XData.EVENT_REFRESHDATA_BEFORE, function(event){ var conceptName = event.source.getConceptAliasName(); var value = justep.Context.getProcessData1(); var condition = null; if (value){ condition = conceptName + "='" + value + "'"; }else{ condition = "1=0"; } event.source.setFilter("_process-filter_", condition); }, data); }else{ throw new Error("[process组件定义出错]: data属性(" + 'testSchemeBaseInfoD' + ")引用的不是xbl组件!"); }}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_0,'xf-model-1', evt,false)});	
new xforms.XFDialog('testSchemeP_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','445',null,null,null,null);	
var xf_script_xf_script_1=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('testSchemeP_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('testSchemeP'); process[callback](task, processControl, options); } justep('testSchemeP_processControlDialogIFrame').src="";});xf._p(justep('testSchemeP_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_1,'testSchemeP_processControlDialog', evt,false)});	
new xforms.XFDialog('testSchemeP_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_2=xf._o(null,null,function(element, ctx, event){justep('testSchemeP_processChartDialogIFrame').src="";});xf._p(justep('testSchemeP_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_2,'testSchemeP_processChartDialogID', evt,false)});	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('testSchemeP_processChartDialogIFrame').src=url;});xf._p(justep('testSchemeP_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_3,'testSchemeP_processChartDialogID', evt,false)});	
new xforms.XFDialog('testSchemeP_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('testSchemeP_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('testSchemeP'); process[callback](task, processControl, options); }});xf._p(justep('testSchemeP_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_4,'testSchemeP_processConfirmDialog', evt,false)});	
var xf_trigger_71ac5deda0284fa084f0d1099b5cf4a5=new xforms.XFTrigger('71ac5deda0284fa084f0d1099b5cf4a5',null,null,null,false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('testSchemeP_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('testSchemeP_processConfirmDialog').close();}));xf._p(justep('71ac5deda0284fa084f0d1099b5cf4a5'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'71ac5deda0284fa084f0d1099b5cf4a5', evt,false)});	
var xf_trigger_80a1bc116b374c56b25b3ae91eb616c7=new xforms.XFTrigger('80a1bc116b374c56b25b3ae91eb616c7',null,null,null,false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('testSchemeP_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('testSchemeP_processConfirmDialog').close();}));xf._p(justep('80a1bc116b374c56b25b3ae91eb616c7'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'80a1bc116b374c56b25b3ae91eb616c7', evt,false)});	
xf._d('input1','text',xf._q("data('testSchemeBaseInfoD')/tESTSCHEMENAME"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('testSchemeBaseInfoD')/dECTIONBASEDONID"),labelRef:xf._q("data('testSchemeBaseInfoD')/dECTIONBASEDONNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'dectionBaseInfoD',columns:'DECTION_BASED_ON_INFO,dECTIONBASEDONNAME,vALIDDATETIME,vALIDSTATE,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DECTION_BASED_ON_INFO,vALIDDATETIME,vALIDSTATE,version',valueColumn:'DECTION_BASED_ON_INFO',labelColumn:'dECTIONBASEDONNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivityNew.gridSelect1Closeup'});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('testSchemeBaseInfoD')/bUSINESSID"),labelRef:xf._q("data('testSchemeBaseInfoD')/bUSINESSIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessTypeCodeD',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'BUSINESS_TYPE_CODE,bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('testSchemeBaseInfoD')/vALIDSTATE"),labelRef:xf._q("data('testSchemeBaseInfoD')/vALIDSTATECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'validStateCodeD',columns:'VALID_STATE_CODE,vALIDSTATECNAME,vALIDSTATEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'VALID_STATE_CODE,vALIDSTATEENAME',valueColumn:'VALID_STATE_CODE',labelColumn:'vALIDSTATECNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea2','textarea',xf._q("data('testSchemeBaseInfoD')/tESTSCHEMEDESC"),null,null,null,null,false,false);	
xf._d('input2','text',xf._q("data('testSchemeBaseInfoD')/mAKEDATETIME"),null,null,null,null,false,true);	
var xf_trigger_saveMore=new xforms.XFTrigger('saveMore',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivityNew.saveMoreClick(event)}));xf._p(justep('saveMore'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'saveMore', evt,false)});	
var xf_trigger_saveMoreD=new xforms.XFTrigger('saveMoreD',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",true,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivityNew.saveMoreDClick(event)}));xf._p(justep('saveMoreD'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'saveMoreD', evt,false)});	
new xforms.XFGrid({id:'testCaseGrid',instance:'testCaseBaseInfoD',systemColumnsPro:'tESTCASEPRIOR,tESTCASEDESC,tESTCASEFILE,mAKEDATETIME,dECTIONBASEDONID,TEST_CASE_DECTION_INFO,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,DETECTION_OBJECT_TYPE,dEVICETYPE,DECTION_BASED_ON_INFO',onInit:null,type:'grid',smartRender:20,delay:false,ids:'checkBox,serialNumber,tESTCASEVER,tESTCASEID,tESTCASENAME,dECTIONBASEDONNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,calMark',headNames:'#master_checkbox,序号,测试用例版本,测试用例ID,测试用例名称,检测依据文件名称,检测对象类别,检测对象,用例指标',widths:'23,30,100,116,136,105,141,136,100',types:'ch,cntr,ed,ed,ed,ed,ro,ro,html',hiddenColumns:'',aligns:'center,center,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'calMark','mainActivityNew.testCaseGrid_calMarkRender');}});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('businessCD')/businessStage"),labelRef:xf._q("data('businessCD')/businessStageName"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessStageD',columns:'bUSINESSSTAGECNAME,bUSINESSID,bUSINESSSTAGE,bUSINESSSTAGEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'bUSINESSID,bUSINESSSTAGE,bUSINESSSTAGEENAME',valueColumn:'bUSINESSSTAGE',labelColumn:'bUSINESSSTAGECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
var __actions__ = {	
};	
		