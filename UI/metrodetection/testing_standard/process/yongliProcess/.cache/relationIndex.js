
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
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
					var nodes = $(e).children();		var len = nodes.length;
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

	var ids=[{id:'d812475a4b1a4fa5b99a3d54793d47a9', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'grid1', name:'xforms:grid'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'44db74637a87478080306b5fcc377da2', name:'xforms:label'}]},{id:'14f286f78e004b34b667018719159850', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'gridSelect6', name:'xforms:gridselect1', children:[{id:'default79', name:'xforms:label'},{id:'default80', name:'xforms:value'},{id:'default23', name:'xforms:ext-value'}]},{id:'filter-pattern-51fdbead-9941-4956-ad9c-2f9248488d79', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'6769964042f146ecbfae7bd1cbc8c914', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N350337966', name:'xforms:menu'}]},{id:'GLOBAL_ID_1121160753', name:'xforms:dialog'}]},{id:'filter-dialog-025568d2-9da3-4527-bd65-dc195e639060', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1005149670', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'grid1');xf._a(null,'insertTrigger');xf._a('insertTrigger','44db74637a87478080306b5fcc377da2');xf._a(null,'gridSelect6');xf._a('gridSelect6','default79');xf._a('gridSelect6','default81');function init() {	
var begin = new Date().getTime();	
xf._b("instance('subTestCaseD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('subTestCaseD')/iNDEXID1",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','iNDEXID1')))));	
xf._b("instance('subTestCaseD')/INDEX_ID_BASE_INFO",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','INDEX_ID_BASE_INFO')))));	
xf._b("instance('subTestCaseD')/dETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("instance('subTestCaseD')/dETECTIONRANGEID",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("instance('subTestCaseD')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('subTestCaseD')/dEVICETYPE",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('subTestCaseD')/DETECTION_RANGE_TYPE",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE')))));	
xf._b("instance('subTestCaseD')/dETECTIONRANGETYPE1",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE1')))));	
xf._b("instance('subTestCaseD')/dETECTIONRANGEID1",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID1')))));	
xf._b("instance('subTestCaseD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('indexValueD')/iNDEXSYSTEMNO",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','iNDEXSYSTEMNO')))));	
xf._b("instance('indexValueD')/bUSINESSID",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('indexValueD')/iNDEXID",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','iNDEXID')))));	
xf._b("instance('indexValueD')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('indexValueD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('indexValueD')/INDEX_SYSTEM_PARAMETER",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','INDEX_SYSTEM_PARAMETER')))));	
xf._b("instance('indexValueD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))));	
xf._b("instance('indexValueD')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('indexValueD')/dEVICETYPE",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('indexValueD')/INDEX_ID_BASE_INFO",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','INDEX_ID_BASE_INFO')))));	
xf._b("instance('indexValueD')/dETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("instance('indexValueD')/dETECTIONRANGEID",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("instance('indexValueD')/DETECTION_RANGE_TYPE",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE')))));	
xf._b("instance('indexValueD')/dETECTIONRANGETYPE1",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE1')))));	
xf._b("instance('indexValueD')/dETECTIONRANGEID1",xf._g(xf._f('instance',xf._i("indexValueD")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID1')))));	
xf._b("instance('relationIndexD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("relationIndexD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('relationIndexD')/bUSINESSID",xf._g(xf._f('instance',xf._i("relationIndexD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('relationIndexD')/iNDEXNO",xf._g(xf._f('instance',xf._i("relationIndexD")),xf._h(false, xf._k("child",xf._j('','iNDEXNO')))));	
xf._b("instance('relationIndexD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("relationIndexD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))));	
xf._b("instance('relationIndexD')/INDEX_SYSTEM_VALUE",xf._g(xf._f('instance',xf._i("relationIndexD")),xf._h(false, xf._k("child",xf._j('','INDEX_SYSTEM_VALUE')))));	
xf._b("checkBox",xf._h(false, xf._k("child",xf._j('','checkBox'))));	
xf._b("calSeq",xf._h(false, xf._k("child",xf._j('','calSeq'))));	
xf._b("tESTCASEVER",xf._h(false, xf._k("child",xf._j('','tESTCASEVER'))));	
xf._b("tESTCASEID",xf._h(false, xf._k("child",xf._j('','tESTCASEID'))));	
xf._b("sUBTESTCASEID",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("rANGEIDCNAME",xf._h(false, xf._k("child",xf._j('','rANGEIDCNAME'))));	
xf._b("iNDEXIDCNAME",xf._h(false, xf._k("child",xf._j('','iNDEXIDCNAME'))));	
xf._b("calBusinessId",xf._h(false, xf._k("child",xf._j('','calBusinessId'))));	
xf._b("iNDEXID1",xf._h(false, xf._k("child",xf._j('','iNDEXID1'))));	
xf._b("data('subTestCaseD')/indexNo",xf._g(xf._f('data',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','indexNo')))));	
xf._b("data('subTestCaseD')/calBusinessId",xf._g(xf._f('data',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','calBusinessId')))));	
xf._b("data('subTestCaseD')/businessId",xf._g(xf._f('data',xf._i("subTestCaseD")),xf._h(false, xf._k("child",xf._j('','businessId')))));	
xf._b("iNDEXVALUE",xf._h(false, xf._k("child",xf._j('','iNDEXVALUE'))));	
xf._b("INDEX_SYSTEM_VALUE",xf._h(false, xf._k("child",xf._j('','INDEX_SYSTEM_VALUE'))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("iNDEXVALUEDESC",xf._h(false, xf._k("child",xf._j('','iNDEXVALUEDESC'))));	
xf._b("iNDEXSYSTEMNO",xf._h(false, xf._k("child",xf._j('','iNDEXSYSTEMNO'))));	
xf._b("bUSINESSID",xf._h(false, xf._k("child",xf._j('','bUSINESSID'))));	
xf._b("iNDEXID",xf._h(false, xf._k("child",xf._j('','iNDEXID'))));	
xf._b("aPPLYFOROBJECT",xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT'))));	
xf._b("aPPLYFORDEVICETYPE",xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE'))));	
xf._b("INDEX_SYSTEM_PARAMETER",xf._h(false, xf._k("child",xf._j('','INDEX_SYSTEM_PARAMETER'))));	
xf._b("iNDEXSYSTEMNAME",xf._h(false, xf._k("child",xf._j('','iNDEXSYSTEMNAME'))));	
xf._b("BUSINESS_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE'))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("INDEX_ID_BASE_INFO",xf._h(false, xf._k("child",xf._j('','INDEX_ID_BASE_INFO'))));	
xf._b("dETECTIONRANGETYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE'))));	
xf._b("dETECTIONRANGEID",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID'))));	
xf._b("DETECTION_RANGE_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE'))));	
xf._b("DETECTION_RANGE_CODE",xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_CODE'))));	
xf._b("dETECTIONRANGETYPE1",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE1'))));	
xf._b("dETECTIONRANGEID1",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID1'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ch', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('select', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('subTestCaseD','model1',null,null,null,null,null,null,null,null,'calSeq,checkBox,calBusinessId,indexNo,businessId',null,'whereAll');	
xf._c('xf-bind-0','model1',"instance('subTestCaseD')/aPPLYFORDEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('subTestCaseD')/iNDEXID1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('subTestCaseD')/INDEX_ID_BASE_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('subTestCaseD')/dETECTIONRANGETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('subTestCaseD')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('subTestCaseD')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('subTestCaseD')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('subTestCaseD')/DETECTION_RANGE_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('subTestCaseD')/dETECTIONRANGETYPE1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('subTestCaseD')/dETECTIONRANGEID1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('subTestCaseD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('indexValueD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('indexValueD',null);	
xf._c('xf-bind-11','model1',"instance('indexValueD')/iNDEXSYSTEMNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('indexValueD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('indexValueD')/iNDEXID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('indexValueD')/aPPLYFOROBJECT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('indexValueD')/aPPLYFORDEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('indexValueD')/INDEX_SYSTEM_PARAMETER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('indexValueD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('indexValueD')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('indexValueD')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('indexValueD')/INDEX_ID_BASE_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('indexValueD')/dETECTIONRANGETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('indexValueD')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('indexValueD')/DETECTION_RANGE_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('indexValueD')/dETECTIONRANGETYPE1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('indexValueD')/dETECTIONRANGEID1","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('relationIndexD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('relationIndexD',null);	
xf._c('xf-bind-26','model1',"instance('relationIndexD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('relationIndexD')/bUSINESSID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('relationIndexD')/iNDEXNO","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('relationIndexD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('relationIndexD')/INDEX_SYSTEM_VALUE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){relationIndex.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
xforms.load_parts('view1');	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('subTestCaseD')/indexNo"),labelRef:xf._q("data('subTestCaseD')/calBusinessId"),extRef:xf._q("data('subTestCaseD')/businessId"),valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'indexValueD',columns:'INDEX_SYSTEM_VALUE,bUSINESSIDCNAME,dEVICETYPECNAME,rANGEIDCNAME,iNDEXVALUE,iNDEXVALUEDESC,iNDEXSYSTEMNO,bUSINESSID,iNDEXID,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,INDEX_SYSTEM_PARAMETER,iNDEXSYSTEMNAME,BUSINESS_TYPE_CODE,DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,dEVICETYPE,INDEX_ID_BASE_INFO,iNDEXIDCNAME,dETECTIONRANGETYPE,dETECTIONRANGEID,DETECTION_RANGE_TYPE,dETECTIONRANGECNAME,DETECTION_RANGE_CODE,dETECTIONRANGETYPE1,dETECTIONRANGEID1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'INDEX_SYSTEM_VALUE,iNDEXSYSTEMNO,bUSINESSID,iNDEXID,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,INDEX_SYSTEM_PARAMETER,iNDEXSYSTEMNAME,BUSINESS_TYPE_CODE,DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,dEVICETYPE,INDEX_ID_BASE_INFO,iNDEXIDCNAME,dETECTIONRANGETYPE,dETECTIONRANGEID,DETECTION_RANGE_TYPE,dETECTIONRANGECNAME,DETECTION_RANGE_CODE,dETECTIONRANGETYPE1,dETECTIONRANGEID1',valueColumn:'INDEX_SYSTEM_VALUE',labelColumn:'iNDEXVALUE',extColumn:'bUSINESSID',labels:',,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'relationIndex.gridSelect6Dropdown',onCloseup:'relationIndex.gridSelect6Closeup'});	
var xf_menu_GLOBAL_ID_N350337966 = new xforms.XFMenu('GLOBAL_ID_N350337966','context');xf_menu_GLOBAL_ID_N350337966.menu.addContextZone('6769964042f146ecbfae7bd1cbc8c914');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N350337966.hide()});xf_menu_GLOBAL_ID_N350337966.menu.setOpenMode('web');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1121160753");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N350337966'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'GLOBAL_ID_N350337966', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1121160753',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1340444843');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1340444843", "");}));xf._p(justep('GLOBAL_ID_1121160753'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_1121160753', evt,false)});	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1340444843');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1121160753'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_1121160753', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1005149670',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_990709077');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_990709077", "");}));xf._p(justep('GLOBAL_ID_N1005149670'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N1005149670', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var businessCD_part_loaded = false;	
function load_businessCD_part(callback){if (businessCD_part_loaded) return;businessCD_part_loaded = true;	
new xforms.XFInstance2('businessCD','model1',null,'<rows id="default4"><row id="default5"><cell id="default6"></cell><cell id="default7"></cell><cell id="default8"></cell><cell id="default9"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('businessCD','indexNo,businessId,indexValue,indexDes,bUSINESSIDCNAME');	
if(callback)callback();}	
var businessCD_part_init_loaded = false;	
function load_businessCD_part_init(){if (businessCD_part_init_loaded) return;businessCD_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
new xforms.XFGrid({id:'grid1',instance:'subTestCaseD',systemColumnsPro:'aPPLYFORDEVICETYPE,INDEX_ID_BASE_INFO,dETECTIONRANGETYPE,dETECTIONRANGEID,DEVICE_TYPE_CODE,dETECTIONOBJECTTYPE,dEVICETYPE,DETECTION_RANGE_TYPE,DETECTION_RANGE_CODE,dETECTIONRANGETYPE1,dETECTIONRANGEID1,indexNo,businessId',onInit:null,type:'grid',smartRender:20,delay:false,ids:'checkBox,calSeq,tESTCASEVER,tESTCASEID,sUBTESTCASEID,dEVICETYPECNAME,dETECTIONRANGECNAME,rANGEIDCNAME,iNDEXIDCNAME,calBusinessId,iNDEXID1',headNames:'#master_checkbox,序号,测试用例版本,测试用例ID,测试子用例ID,检测对象,检测方面类别,检测方面,指标名称,选择指标值,指标ID',widths:'51,30,100,100,100,100,100,100,100,140,100',types:'ch,cntr,ro,ro,ro,ro,ro,ro,ro,select,ed',hiddenColumns:'iNDEXID1',aligns:'center,center,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:'relationIndex.grid1RowValueChanged',groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'relationIndex.grid1RowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColEditor(null,'calBusinessId','gridSelect6');}});	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){relationIndex.saveRalationClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		