
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
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
				group.style.left = posX - 0 + 4;		xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);
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

	var ids=[{id:'e86522ffee2741b198d14160df4c6f61', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'dlgBorrowReturn', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'btnReturn', name:'xforms:trigger', children:[{id:'default5', name:'xforms:label'}]},{id:'grid1', name:'xforms:grid'},{id:'filter-pattern-ba0c99da-4044-4243-bbd2-f708fb475f4d', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'d88899e4fadb4f50bb0518b607e02641', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1433731079', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1073277449', name:'xforms:dialog'}]},{id:'filter-dialog-5d9b2951-b38d-4316-b4bd-5b97d7991dd1', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N647761587', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'btnReturn');xf._a('btnReturn','default5');xf._a(null,'grid1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dBorrowReturn')/aPPLICATIONTIME",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTIME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'借阅申请时间不能为空!'",xf._i("借阅申请时间不能为空!"));	
xf._b("instance('dBorrowReturn')/pFILEID",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','pFILEID')))));	
xf._b("'编号不能为空!'",xf._i("编号不能为空!"));	
xf._b("instance('dBorrowReturn')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("'文档科目不能为空!'",xf._i("文档科目不能为空!"));	
xf._b("instance('dBorrowReturn')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("'文档类型不能为空!'",xf._i("文档类型不能为空!"));	
xf._b("instance('dBorrowReturn')/pFILENAME",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','pFILENAME')))));	
xf._b("'文档名称不能为空!'",xf._i("文档名称不能为空!"));	
xf._b("instance('dBorrowReturn')/bORROWER",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','bORROWER')))));	
xf._b("'借阅者不能为空!'",xf._i("借阅者不能为空!"));	
xf._b("instance('dBorrowReturn')/rETURNDATE",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("'预计归还日期不能为空!'",xf._i("预计归还日期不能为空!"));	
xf._b("instance('dBorrowReturn')/dOCUMENTTYPE1",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE1')))));	
xf._b("instance('dBorrowReturn')/iNDEEDRETURNDATE",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE')))));	
xf._b("instance('dBorrowReturn')/DOCUMENT_CATEGORY_CODE",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','DOCUMENT_CATEGORY_CODE')))));	
xf._b("instance('dBorrowReturn')/aLLOWBORROW",xf._g(xf._f('instance',xf._i("dBorrowReturn")),xf._h(false, xf._k("child",xf._j('','aLLOWBORROW')))));	
xf._b("instance('leixing')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('leixing')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('hrData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('hrData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('hrData')/oFFICEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('hrData')/pOSITIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('hrData')/dEGREEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('hrData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('hrData')/pOLITICALID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('hrData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('hrData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('bizData1')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('bizData1')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('bizData1')/sECRETLEVEL",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("instance('bizData1')/lOCATIONROOMID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','lOCATIONROOMID')))));	
xf._b("instance('bizData1')/aRCHIVEDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE')))));	
xf._b("instance('bizData1')/aLLOWBORROW",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aLLOWBORROW')))));	
xf._b("instance('bizData1')/dESTROYSTATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dESTROYSTATE')))));	
xf._b("instance('hrPerData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('hrPerData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('hrPerData')/oFFICEID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('hrPerData')/pOSITIONID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('hrPerData')/dEGREEID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('hrPerData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('hrPerData')/pOLITICALID",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('hrPerData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('hrPerData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("hrPerData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('sysOperData')/sValidState",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('sysOperData')/sLevel",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('sysOperData')/version",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('guidang')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("guidang")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('guidang')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("guidang")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('guidang')/sECRETLEVEL",xf._g(xf._f('instance',xf._i("guidang")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("instance('guidang')/lOCATIONROOMID",xf._g(xf._f('instance',xf._i("guidang")),xf._h(false, xf._k("child",xf._j('','lOCATIONROOMID')))));	
xf._b("instance('guidang')/aRCHIVEDATE",xf._g(xf._f('instance',xf._i("guidang")),xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE')))));	
xf._b("instance('guidang')/aLLOWBORROW",xf._g(xf._f('instance',xf._i("guidang")),xf._h(false, xf._k("child",xf._j('','aLLOWBORROW')))));	
xf._b("instance('guidang')/dESTROYSTATE",xf._g(xf._f('instance',xf._i("guidang")),xf._h(false, xf._k("child",xf._j('','dESTROYSTATE')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("dOCUMENTCATEGORYCNAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYCNAME'))));	
xf._b("dOCUMENTTYPECNAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPECNAME'))));	
xf._b("pFILENAME",xf._h(false, xf._k("child",xf._j('','pFILENAME'))));	
xf._b("oPERATORNAME2",xf._h(false, xf._k("child",xf._j('','oPERATORNAME2'))));	
xf._b("aPPLICATIONTIME",xf._h(false, xf._k("child",xf._j('','aPPLICATIONTIME'))));	
xf._b("rETURNDATE",xf._h(false, xf._k("child",xf._j('','rETURNDATE'))));	
xf._b("not(call('justep.XData.canDo','dBorrowReturn','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dBorrowReturn"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dBorrowReturn','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dBorrowReturn"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dBorrowReturn','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dBorrowReturn"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dBorrowReturn','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dBorrowReturn"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dBorrowReturn','mdDefault',null,null,null,null,null,null,null,null,'recCB',null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dBorrowReturn')/aPPLICATIONTIME",null,null,"true()",null,null,null,"'借阅申请时间不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dBorrowReturn')/pFILEID",null,null,"true()",null,null,null,"'编号不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dBorrowReturn')/dOCUMENTCATEGORY",null,null,"true()",null,null,null,"'文档科目不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dBorrowReturn')/dOCUMENTTYPE",null,null,"true()",null,null,null,"'文档类型不能为空!'");	
xf._c('xf-bind-4','mdDefault',"instance('dBorrowReturn')/pFILENAME",null,null,"true()",null,null,null,"'文档名称不能为空!'");	
xf._c('xf-bind-5','mdDefault',"instance('dBorrowReturn')/bORROWER",null,null,"true()",null,null,null,"'借阅者不能为空!'");	
xf._c('xf-bind-6','mdDefault',"instance('dBorrowReturn')/rETURNDATE",null,null,"true()",null,null,null,"'预计归还日期不能为空!'");	
xf._c('xf-bind-7','mdDefault',"instance('dBorrowReturn')/aPPLICATIONTIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dBorrowReturn')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dBorrowReturn')/dOCUMENTTYPE1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dBorrowReturn')/rETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dBorrowReturn')/iNDEEDRETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dBorrowReturn')/DOCUMENT_CATEGORY_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dBorrowReturn')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dBorrowReturn')/aLLOWBORROW","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('kemu','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('leixing','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-15','mdDefault',"instance('leixing')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('leixing')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-17','mdDefault',"instance('hrData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('hrData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('hrData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('hrData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('hrData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('hrData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('hrData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('hrData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('hrData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-33','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-42','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('guidang','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('guidang',null);	
xf._c('xf-bind-45','mdDefault',"instance('guidang')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('guidang')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('guidang')/sECRETLEVEL","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('guidang')/lOCATIONROOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('guidang')/aRCHIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('guidang')/aLLOWBORROW","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdDefault',"instance('guidang')/dESTROYSTATE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'mdDefault', evt,false)});	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_1433731079 = new xforms.XFMenu('GLOBAL_ID_1433731079','context');xf_menu_GLOBAL_ID_1433731079.menu.addContextZone('d88899e4fadb4f50bb0518b607e02641');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1433731079.hide()});xf_menu_GLOBAL_ID_1433731079.menu.setOpenMode('web');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1073277449");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1433731079'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'GLOBAL_ID_1433731079', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1073277449',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_681831089');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_681831089", "");}));xf._p(justep('GLOBAL_ID_N1073277449'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_N1073277449', evt,false)});	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_681831089');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1073277449'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N1073277449', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N647761587',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_2058965243');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_2058965243", "");}));xf._p(justep('GLOBAL_ID_N647761587'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N647761587', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var bizData1_part_loaded = false;	
function load_bizData1_part(callback){if (bizData1_part_loaded) return;bizData1_part_loaded = true;	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-26','mdDefault',"instance('bizData1')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('bizData1')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('bizData1')/sECRETLEVEL","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('bizData1')/lOCATIONROOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('bizData1')/aRCHIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('bizData1')/aLLOWBORROW","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('bizData1')/dESTROYSTATE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var bizData1_part_init_loaded = false;	
function load_bizData1_part_init(){if (bizData1_part_init_loaded) return;bizData1_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
var xf_trigger_btnReturn=new xforms.XFTrigger('btnReturn',null,null,null,false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnReturnClick(event)}));xf._p(justep('btnReturn'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnReturn', evt,false)});	
xforms.load_parts('view2');	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
xforms.load_parts('view3');	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
new xforms.XFGrid({id:'grid1',instance:'dBorrowReturn',systemColumnsPro:'pFILEID,dOCUMENTCATEGORY,dOCUMENTTYPE1,bORROWER,iNDEEDRETURNDATE,mEMO,DOCUMENT_CATEGORY_CODE,dOCUMENTTYPE,oPERATORNAME,oPERATORNAME1,aLLOWBORROW',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,dOCUMENTCATEGORYCNAME,dOCUMENTTYPECNAME,pFILENAME,oPERATORNAME2,aPPLICATIONTIME,rETURNDATE',headNames:'#master_checkbox,文档科目,文档类型,文档名称,借阅者,借阅申请时间,预计归还日期',widths:'30,100,100,196,100,100,100',types:'checkbox,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindCheckedValue(null,'recCB','2');this.grid.bindColFormat(null,'aPPLICATIONTIME','yyyy-MM-dd');this.grid.bindColFormat(null,'rETURNDATE','yyyy-MM-dd');}});	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		