
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
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
_xbl_JSClassDefine_windowReceiver.prototype = justep.Object.extend(new justep.XBLObject(), eval);

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

function _xbl_JSClassDefine_pageNavigator(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_pageNavigator.prototype = justep.Object.extend(new justep.XBLObject(), eval({ 
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
			    this.__limit = 20;
			    this.__offset = 1;
			    this.__count = 0;
			    this.__pageCount = 5;
			    this.__navigatorContent = '';
			    this.__navigatorPageConten = '';
			    this.__firstButton = '';
			    this.__prevButton = '';
			    this.__nextButton = '';
			    this.__lastButton = '';
			    this.__extendArea = '';
				justep.Object.extend(this, new justep.PageNavigator(this));
				this.attachStoreEvent();
				this.refresh();
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

	var ids=[{id:'window', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'7dd51c3072ff4f7cb4e92a7925227479', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grid1', name:'xforms:grid'},{id:'filter-pattern-e7782dc4-644e-46a1-9a92-fde2348691c5', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'edddfceaa44b420f9f0afec77cfe6cb1', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N241328059', name:'xforms:menu'}]},{id:'GLOBAL_ID_N192498436', name:'xforms:dialog'}]},{id:'filter-dialog-e4bdee32-0f44-4e71-9a5e-d8a96b04d68f', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1236241295', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'grid1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('lvliData')/oPERATEDATETIME",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATEDATETIME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'操作日期时间不能为空!'",xf._i("操作日期时间不能为空!"));	
xf._b("instance('lvliData')/oPERATORID",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATORID')))));	
xf._b("'操作员不能为空!'",xf._i("操作员不能为空!"));	
xf._b("instance('lvliData')/dEVICEID",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("'设备ID不能为空!'",xf._i("设备ID不能为空!"));	
xf._b("instance('lvliData')/oPERATETYPE",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATETYPE')))));	
xf._b("instance('lvliData')/pROJECTID",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('lvliData')/oPERATERESULTSTATE",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATERESULTSTATE')))));	
xf._b("instance('lvliData')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('sysOperData')/sValidState",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('sysOperData')/sLevel",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('sysOperData')/version",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('hrData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('hrData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('hrData')/oFFICEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('hrData')/pOSITIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('hrData')/dEGREEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('hrData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('hrData')/pOLITICALID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('hrData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('hrData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('zhanyong')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('zhanyong')/pROJECTID",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('zhanyong')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('zhanyong')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('bizData2')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('bizData2')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('bizData2')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('bizData2')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('bizData2')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('bizData2')/lINEID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('bizData2')/bUSINESSID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('bizData2')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('bizData2')/pROJECTDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('bizData2')/eNDINGDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('bizData2')/mAKEDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('bizData2')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
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
xf._b("instance('dataMaster')/dEVICETYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("'检测对象不能为空!'",xf._i("检测对象不能为空!"));	
xf._b("instance('dataMaster')/dECTIONTYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dECTIONTYPE')))));	
xf._b("'检测类型不能为空!'",xf._i("检测类型不能为空!"));	
xf._b("instance('dataMaster')/sOFTWAREVERSION",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sOFTWAREVERSION')))));	
xf._b("'软件版本不能为空!'",xf._i("软件版本不能为空!"));	
xf._b("instance('dataMaster')/hARDWAREVERSION",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','hARDWAREVERSION')))));	
xf._b("'硬件版本不能为空!'",xf._i("硬件版本不能为空!"));	
xf._b("instance('dataMaster')/dEADLINERECEIVEDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEADLINERECEIVEDATE')))));	
xf._b("'最晚进场日期不能为空!'",xf._i("最晚进场日期不能为空!"));	
xf._b("instance('dataMaster')/iNDEEDRECEIVEDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE')))));	
xf._b("'实际进场日期不能为空!'",xf._i("实际进场日期不能为空!"));	
xf._b("instance('dataMaster')/rETURNDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("'预计归还日期不能为空!'",xf._i("预计归还日期不能为空!"));	
xf._b("instance('dataMaster')/iNDEEDRETURNDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE')))));	
xf._b("'实际归还日期不能为空!'",xf._i("实际归还日期不能为空!"));	
xf._b("instance('dataMaster')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("'是否允许资源共用不能为空!'",xf._i("是否允许资源共用不能为空!"));	
xf._b("instance('dataMaster')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("'供应商名称不能为空!'",xf._i("供应商名称不能为空!"));	
xf._b("instance('dataMaster')/dEVICEID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("instance('dataMaster')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('dataMaster')/sAMPLEDEVICENO1",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO1')))));	
xf._b("instance('dataMaster')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('dataMaster')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('dataMaster')/pROJECTID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('dataMaster')/TEST_CONTRACT_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TEST_CONTRACT_INFO')))));	
xf._b("instance('dataMaster')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('dataMaster')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('dataMaster')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('cData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('cData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('cData')/cHECKRESULT",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("instance('cData')/cHECKTIME",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKTIME')))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("oPERATETYPE1",xf._h(false, xf._k("child",xf._j('','oPERATETYPE1'))));	
xf._b("dEVICEID",xf._h(false, xf._k("child",xf._j('','dEVICEID'))));	
xf._b("oPERATERESULTSTATE1",xf._h(false, xf._k("child",xf._j('','oPERATERESULTSTATE1'))));	
xf._b("sAMPLEDEVICENO",xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO'))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("oPERATEDATETIME",xf._h(false, xf._k("child",xf._j('','oPERATEDATETIME'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('lvliData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('lvliData',null);	
xf._c('xf-bind-0','model1',"instance('lvliData')/oPERATEDATETIME",null,null,"true()",null,null,null,"'操作日期时间不能为空!'");	
xf._c('xf-bind-1','model1',"instance('lvliData')/oPERATORID",null,null,"true()",null,null,null,"'操作员不能为空!'");	
xf._c('xf-bind-2','model1',"instance('lvliData')/dEVICEID",null,null,"true()",null,null,null,"'设备ID不能为空!'");	
xf._c('xf-bind-3','model1',"instance('lvliData')/oPERATEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('lvliData')/oPERATETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('lvliData')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('lvliData')/oPERATERESULTSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('lvliData')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-11','model1',"instance('hrData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('hrData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('hrData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('hrData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('hrData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('hrData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('hrData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('hrData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('hrData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData2',null);	
xf._c('xf-bind-24','model1',"instance('bizData2')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('bizData2')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('bizData2')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('bizData2')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('bizData2')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('bizData2')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('bizData2')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('bizData2')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('bizData2')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('bizData2')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-34','model1',"instance('bizData2')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-35','model1',"instance('bizData2')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-36','model1',"instance('bizData1')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','model1',"instance('bizData1')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('bizData1')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('bizData1')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','model1',"instance('bizData1')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('bizData1')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('bizData1')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','model1',"instance('bizData1')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','model1',"instance('bizData1')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-45','model1',"instance('bizData1')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-46','model1',"instance('bizData1')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-47','model1',"instance('bizData1')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dataMaster','model1',null,null,null,null,null,null,null,null,'recCB',null,'whereAll');new SimpleStore('dataMaster',null);	
xf._c('xf-bind-48','model1',"instance('dataMaster')/dEVICETYPE",null,null,"true()",null,null,null,"'检测对象不能为空!'");	
xf._c('xf-bind-49','model1',"instance('dataMaster')/dECTIONTYPE",null,null,"true()",null,null,null,"'检测类型不能为空!'");	
xf._c('xf-bind-50','model1',"instance('dataMaster')/sOFTWAREVERSION",null,null,"true()",null,null,null,"'软件版本不能为空!'");	
xf._c('xf-bind-51','model1',"instance('dataMaster')/hARDWAREVERSION",null,null,"true()",null,null,null,"'硬件版本不能为空!'");	
xf._c('xf-bind-52','model1',"instance('dataMaster')/dEADLINERECEIVEDATE",null,null,"true()",null,null,null,"'最晚进场日期不能为空!'");	
xf._c('xf-bind-53','model1',"instance('dataMaster')/iNDEEDRECEIVEDATE",null,null,"true()",null,null,null,"'实际进场日期不能为空!'");	
xf._c('xf-bind-54','model1',"instance('dataMaster')/rETURNDATE",null,null,"true()",null,null,null,"'预计归还日期不能为空!'");	
xf._c('xf-bind-55','model1',"instance('dataMaster')/iNDEEDRETURNDATE",null,null,"true()",null,null,null,"'实际归还日期不能为空!'");	
xf._c('xf-bind-56','model1',"instance('dataMaster')/sHAREDFLAG",null,null,"true()",null,null,null,"'是否允许资源共用不能为空!'");	
xf._c('xf-bind-57','model1',"instance('dataMaster')/mANUFACTUREID",null,null,"true()",null,null,null,"'供应商名称不能为空!'");	
xf._c('xf-bind-58','model1',"instance('dataMaster')/dEVICEID",null,null,"true()",null,null,null,"'设备ID不能为空!'");	
xf._c('xf-bind-59','model1',"instance('dataMaster')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-60','model1',"instance('dataMaster')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-61','model1',"instance('dataMaster')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-62','model1',"instance('dataMaster')/dECTIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-63','model1',"instance('dataMaster')/sOFTWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-64','model1',"instance('dataMaster')/hARDWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-65','model1',"instance('dataMaster')/dEADLINERECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-66','model1',"instance('dataMaster')/iNDEEDRECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-67','model1',"instance('dataMaster')/rETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-68','model1',"instance('dataMaster')/iNDEEDRETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-69','model1',"instance('dataMaster')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-70','model1',"instance('dataMaster')/sAMPLEDEVICENO1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-71','model1',"instance('dataMaster')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-72','model1',"instance('dataMaster')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-73','model1',"instance('dataMaster')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-74','model1',"instance('dataMaster')/TEST_CONTRACT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-75','model1',"instance('dataMaster')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-76','model1',"instance('dataMaster')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-77','model1',"instance('dataMaster')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('cData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('cData',null);	
xf._c('xf-bind-78','model1',"instance('cData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-79','model1',"instance('cData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-80','model1',"instance('cData')/cHECKRESULT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-81','model1',"instance('cData')/cHECKTIME","xsd:date",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_N241328059 = new xforms.XFMenu('GLOBAL_ID_N241328059','context');xf_menu_GLOBAL_ID_N241328059.menu.addContextZone('edddfceaa44b420f9f0afec77cfe6cb1');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N241328059.hide()});xf_menu_GLOBAL_ID_N241328059.menu.setOpenMode('web');	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N192498436");	if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N241328059'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'GLOBAL_ID_N241328059', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N192498436',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1922753495');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1922753495", "");}));xf._p(justep('GLOBAL_ID_N192498436'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_1,'GLOBAL_ID_N192498436', evt,false)});	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1922753495');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N192498436'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_2,'GLOBAL_ID_N192498436', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1236241295',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_884093814');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_884093814", "");}));xf._p(justep('GLOBAL_ID_N1236241295'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_N1236241295', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var sysOperData_part_loaded = false;	
function load_sysOperData_part(callback){if (sysOperData_part_loaded) return;sysOperData_part_loaded = true;	
new xforms.XFInstance2('sysOperData','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-8','model1',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var sysOperData_part_init_loaded = false;	
function load_sysOperData_part_init(){if (sysOperData_part_init_loaded) return;sysOperData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var zhanyong_part_loaded = false;	
function load_zhanyong_part(callback){if (zhanyong_part_loaded) return;zhanyong_part_loaded = true;	
new xforms.XFInstance2('zhanyong','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('zhanyong',null);	
xf._c('xf-bind-20','model1',"instance('zhanyong')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('zhanyong')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('zhanyong')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('zhanyong')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var zhanyong_part_init_loaded = false;	
function load_zhanyong_part_init(){if (zhanyong_part_init_loaded) return;zhanyong_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
xforms.load_parts('view2');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
new xforms.XFGrid({id:'grid1',instance:'lvliData',systemColumnsPro:'oPERATETYPE,oPERATORID,pROJECTID,tESTTASKID,oPERATERESULTSTATE,mEMO',onInit:null,type:'grid',smartRender:null,delay:false,ids:'pROJECTNAME,oPERATETYPE1,dEVICEID,oPERATERESULTSTATE1,sAMPLEDEVICENO,oPERATORNAME,oPERATEDATETIME',headNames:'项目名称,操作类型,唯一编号,操作结果,样品序号,操作员,操作日期时间',widths:'100,100,100,100,100,100,100',types:'ed,ed,ed,ed,ed,ed,ed',hiddenColumns:'',aligns:',,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		