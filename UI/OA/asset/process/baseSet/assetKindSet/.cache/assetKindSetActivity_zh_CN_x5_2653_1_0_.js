
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
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

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'ed23ea7b205515ff05f4d6391615112f',time:1528079655},m:'b1c4a9a6b9dd636f2dbe612902e97694'};
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

_xbl_JSClassDefine_windowDialog.prototype.ClassName='_xbl_JSClassDefine_windowDialog';
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'ed23ea7b205515ff05f4d6391615112f',time:1528079655},m:'00b146ea89b3346afc65d8b183607a1f'};
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

_xbl_JSClassDefine_menu.prototype.ClassName='_xbl_JSClassDefine_menu';
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'ed23ea7b205515ff05f4d6391615112f',time:1528079655},m:'4c733a2e74f10fd648a4944f56350e27'};
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

_xbl_JSClassDefine_bizDataFilterPattern.prototype.ClassName='_xbl_JSClassDefine_bizDataFilterPattern';
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'ed23ea7b205515ff05f4d6391615112f',time:1528079655},m:'cefa12577add54282be9724670ea7485'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'ed23ea7b205515ff05f4d6391615112f',time:1528079655},m:'643b8a2a1dbe4bf275de563bc02ee75a'};
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

_xbl_JSClassDefine_bizDataFilterDialog.prototype.ClassName='_xbl_JSClassDefine_bizDataFilterDialog';
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'ed23ea7b205515ff05f4d6391615112f',time:1528079655},m:'36dd42a2ef8944a1eb158fccd925a124'};
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

_xbl_JSClassDefine_pageNavigator.prototype.ClassName='_xbl_JSClassDefine_pageNavigator';
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'ed23ea7b205515ff05f4d6391615112f',time:1528079655},m:'06c8d2bbd6968e58d16d5d6a0830dfc8'};
	var ids=[{id:'4f477f0cbcb9428ebcb42cbbb0fae87a', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tbrListToolbar', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMas', name:'xforms:trigger', children:[{id:'376325c7615a4e4197b2e041c6130006', name:'xforms:label'}]},{id:'saveMas', name:'xforms:trigger', children:[{id:'379a2420112b4489aae29eafe51d05ef', name:'xforms:label'}]},{id:'delMas', name:'xforms:trigger', children:[{id:'7ba2cb1a513e446f9b52f96658701d6a', name:'xforms:label'}]},{id:'9d2631da85ab4d8da23e41f63fea6f45', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'trgStartUse', name:'xforms:trigger', children:[{id:'2ebc664b1f324efa890b230dc0f91efc', name:'xforms:label'}]},{id:'trgAllUse', name:'xforms:trigger', children:[{id:'0f2433969faf4099a8fe26590f85fcd0', name:'xforms:label'}]},{id:'trgStopUse', name:'xforms:trigger', children:[{id:'94bbf17140ae48108ce60bbb5445263a', name:'xforms:label'}]}]},{id:'listGrid', name:'xforms:grid'},{id:'asserWD', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'filter-dialog-7c960790-b95f-4db9-8971-a1f28793d976', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1695175095', name:'xforms:dialog'}]},{id:'filter-pattern-d8e2b16a-4ec0-432c-a7b3-445aecaafad1', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'411e6ed1e6504c75bc97265ab0c7e43e', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N2143453723', name:'xforms:menu'}]},{id:'GLOBAL_ID_N977392247', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='ed23ea7b205515ff05f4d6391615112f';
xforms.Core.fileName='form.js';	
xf._a(null,'insertMas');xf._a('insertMas','376325c7615a4e4197b2e041c6130006');xf._a(null,'saveMas');xf._a('saveMas','379a2420112b4489aae29eafe51d05ef');xf._a(null,'delMas');xf._a('delMas','7ba2cb1a513e446f9b52f96658701d6a');xf._a(null,'trgStartUse');xf._a('trgStartUse','2ebc664b1f324efa890b230dc0f91efc');xf._a(null,'trgAllUse');xf._a('trgAllUse','0f2433969faf4099a8fe26590f85fcd0');xf._a(null,'trgStopUse');xf._a('trgStopUse','94bbf17140ae48108ce60bbb5445263a');xf._a(null,'listGrid');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dPubBaseCodeAsset')/fName",xf._g(xf._f('instance',xf._i("dPubBaseCodeAsset")),xf._h(false, xf._k("child",xf._j('','fName')))));	
xf._b("true()",xf._f('true'));	
xf._b("'名称必填!'",xf._i("名称必填!"));	
xf._b("instance('dPubBaseCodeAsset')/version",xf._g(xf._f('instance',xf._i("dPubBaseCodeAsset")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dPubBaseCodeAsset')/fLevel",xf._g(xf._f('instance',xf._i("dPubBaseCodeAsset")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dPubBaseCodeAsset')/fCreateTime",xf._g(xf._f('instance',xf._i("dPubBaseCodeAsset")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dPubBaseCodeAsset')/fUpdateTime",xf._g(xf._f('instance',xf._i("dPubBaseCodeAsset")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetD')/version",xf._g(xf._f('instance',xf._i("dAssetD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetD')/pARENTLEV",xf._g(xf._f('instance',xf._i("dAssetD")),xf._h(false, xf._k("child",xf._j('','pARENTLEV')))));	
xf._b("instance('dBtnStatus')/startUse",xf._g(xf._f('instance',xf._i("dBtnStatus")),xf._h(false, xf._k("child",xf._j('','startUse')))));	
xf._b("instance('dPubBaseCodeAsset')/fUseStatus = '1'",xf._l(xf._g(xf._f('instance',xf._i("dPubBaseCodeAsset")),xf._h(false, xf._k("child",xf._j('','fUseStatus')))), '=',xf._i("1")));	
xf._b("instance('dBtnStatus')/stopUse",xf._g(xf._f('instance',xf._i("dBtnStatus")),xf._h(false, xf._k("child",xf._j('','stopUse')))));	
xf._b("not(instance('dPubBaseCodeAsset')/fUseStatus = '1')",xf._f('not',xf._l(xf._g(xf._f('instance',xf._i("dPubBaseCodeAsset")),xf._h(false, xf._k("child",xf._j('','fUseStatus')))), '=',xf._i("1"))));	
xf._b("fUseStatusName",xf._h(false, xf._k("child",xf._j('','fUseStatusName'))));	
xf._b("fSequence",xf._h(false, xf._k("child",xf._j('','fSequence'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("false",xf._h(false, xf._k("child",xf._j('','false'))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("fType",xf._h(false, xf._k("child",xf._j('','fType'))));	
xf._b("fDescription",xf._h(false, xf._k("child",xf._j('','fDescription'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('inputbtn', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dPubBaseCodeAsset','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','model1',"instance('dPubBaseCodeAsset')/fName",null,null,"true()",null,null,null,"'名称必填!'");	
xf._c('xf-bind-1','model1',"instance('dPubBaseCodeAsset')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dPubBaseCodeAsset')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('dPubBaseCodeAsset')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dPubBaseCodeAsset')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
new xforms.XFInstance2('dAssetD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dAssetD',null);	
xf._c('xf-bind-5','model1',"instance('dAssetD')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dAssetD')/pARENTLEV","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dBtnStatus','model1',null,'<rows><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dBtnStatus','startUse,stopUse');	
xf._c('xf-bind-7','model1',"instance('dBtnStatus')/startUse",null,"instance('dPubBaseCodeAsset')/fUseStatus = '1'",null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('dBtnStatus')/stopUse",null,"not(instance('dPubBaseCodeAsset')/fUseStatus = '1')",null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N1695175095',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1588860498');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1588860498", "");}));xf._p(justep('GLOBAL_ID_N1695175095'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N1695175095', evt,false)});	
var xf_menu_GLOBAL_ID_N2143453723 = new xforms.XFMenu('GLOBAL_ID_N2143453723','context');xf_menu_GLOBAL_ID_N2143453723.menu.addContextZone('411e6ed1e6504c75bc97265ab0c7e43e');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N2143453723.hide()});xf_menu_GLOBAL_ID_N2143453723.menu.setOpenMode('web');	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){			var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N977392247");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N2143453723'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_N2143453723', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N977392247',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_265124895');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_265124895", "");}));xf._p(justep('GLOBAL_ID_N977392247'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N977392247', evt,false)});	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_265124895');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N977392247'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N977392247', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertMas=new xforms.XFTrigger('insertMas',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){pubAssetBaseCodeActivity.insertMasClick(event)}));xf._p(justep('insertMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'insertMas', evt,false)});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){pubAssetBaseCodeActivity.saveMasClick(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'saveMas', evt,false)});	
var xf_trigger_delMas=new xforms.XFTrigger('delMas',null,"/UI/system/images/standardToolbar/standard/remove.gif","/UI/system/images/standardToolbar/standard/un_remove.gif",false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){pubAssetBaseCodeActivity.delMasClick(event)}));xf._p(justep('delMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'delMas', evt,false)});	
var xf_trigger_trgStartUse=new xforms.XFTrigger('trgStartUse',xf._q("instance('dBtnStatus')/startUse"),"/UI/appCommon/images/start_use.gif","/UI/appCommon/images/un_start_use.gif",false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){startUseFun();}));xf._p(justep('trgStartUse'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'trgStartUse', evt,false)});	
var xf_trigger_trgAllUse=new xforms.XFTrigger('trgAllUse',null,"/UI/appCommon/images/all_use.gif","/UI/appCommon/images/all_use.gif",false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){useAllFun();}));xf._p(justep('trgAllUse'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'trgAllUse', evt,false)});	
var xf_trigger_trgStopUse=new xforms.XFTrigger('trgStopUse',xf._q("instance('dBtnStatus')/stopUse"),"/UI/appCommon/images/stop_use.gif","/UI/appCommon/images/un_stop_use.gif",false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){stopUseFun();}));xf._p(justep('trgStopUse'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'trgStopUse', evt,false)});	
new xforms.XFGrid({id:'listGrid',instance:'dPubBaseCodeAsset',systemColumnsPro:'version,fUseStatus,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',onInit:null,type:'grid',smartRender:null,delay:false,ids:'fUseStatusName,fSequence,fCode,fName,fType,fDescription,space-column',headNames:'启用状态,排序,编码（单击...按钮选择）,名称,类型,描述,&nbsp;',widths:'60,60,150,150,80,280,*',types:'ro,ed,inputbtn,ed,ed,ed,ro',hiddenColumns:'',aligns:'center,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:'pubAssetBaseCodeActivity.listGridRowClick',onRowDblClick:'pubAssetBaseCodeActivity.listGridRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'fCode','false');this.grid.bindInputbtnButtonClickCallback(null,'fCode','pubAssetBaseCodeActivity.listGrid_fCodeButtonClick');this.grid.bindEnterSelected(null,'fCode','true');this.grid.bindColReadonly(null,'fDescription','true');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
