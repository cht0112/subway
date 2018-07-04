
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/excel.xbl.xml#export"] = _xbl_JSClassDefine_export;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/printHtml.xbl.xml#printHtml"] = _xbl_JSClassDefine_printHtml;
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
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'b0755c0072a1ad074fce899c0f938aba'};
function _xbl_JSClassDefine_tabs(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_tabs.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				this.tabbar = new justep.JSTabbar(this.domNode.id);
				justep.Utils.proxable(this, this.tabbar, justep.JSTabbar);
			}
		}));

_xbl_JSClassDefine_tabs.prototype.ClassName='_xbl_JSClassDefine_tabs';
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'8830c5513a9202730fe1329ce84dc723'};
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
					var len = nodes.length;			for (var i = 0; len > i; i++) {
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'68c4f61865774c5eda46544a0da8fe9e'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'a662c69495550e05369251082444536a'};
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
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);		xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'6b515ebeddba340d4f35c33861e0ca60'};
function _xbl_JSClassDefine_export(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_export.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
				justep.Object.extend(this, new justep.ExportExcel(this));
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

_xbl_JSClassDefine_export.prototype.ClassName='_xbl_JSClassDefine_export';
_xbl_JSClassDefine_export.prototype.__code__={v:{name:'_xbl_JSClassDefine_export',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'ab36310abc85ebfcc9c439f4fccf146b'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'ae29f40e9c09d699c4b55bb39565dad0'};
function _xbl_JSClassDefine_printHtml(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_printHtml.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
				this.__targetID = this.domNode.getAttribute("target-id");
				if(this.__targetID) this.__targetID = this.__targetID.split(",");
				this.__isPreview = this.domNode.getAttribute("is-preview");
				var self = this;
				jQuery(this.domNode).bind("click",function(){self.print();});
			},
			"print" : function(isPreview){		
				if (isPreview || this.__isPreview=="true"){
					justep.HtmlPrint.printpreview(this.__targetID);	
				}else {
					justep.HtmlPrint.printForm(this.__targetID);
				}					
			},
			"_getTriggerObj" : function() {
				return justep.xbl('trigger-'+this.domNode.id);
			},
			"setTargetID" : function(id){
				this.__targetID = id;
			},
			"getTargetID" : function(){
				return this.__targetID;
			},			
			"setTabIndex" : function(tabIndex){
				var o = this._getTriggerObj();
				if(o) o.setTabIndex(tabIndex);
			},
			"getTabIndex" : function(){
				var o = this._getTriggerObj();
				if(o) return o.getTabIndex();
			},			
			"setAccessKey" : function(key){
				var o = this._getTriggerObj();
				if(o) o.setAccessKey(key);
			},			
			"getAccessKey" : function(){
				var o = this._getTriggerObj();
				if(o) return o.getAccessKey();
			},			
			"setDisabled" : function(disabled){
				var o = this._getTriggerObj();
				if(o) o.setDisabled(disabled);
			},			
			"getDisabled" : function(){
				var o = this._getTriggerObj();
				if(o) return o.getDisabled();
			},	"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

_xbl_JSClassDefine_printHtml.prototype.ClassName='_xbl_JSClassDefine_printHtml';
_xbl_JSClassDefine_printHtml.prototype.__code__={v:{name:'_xbl_JSClassDefine_printHtml',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'e7856b4bdb866550f9e2da80abe1e2ed'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'53358aeaa305fd4d81c129cde6f162a7',time:1528079588},m:'4bb2a53862308836e87d213997fafc2f'};
	var ids=[{id:'25d8ba75b32c4fca9f21c3b8638a9d44', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabPanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'71cf6d282adb4d3490e7125178ecf094', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'excelExport1', name:'/UI/system/components/excel.xbl.xml#export', children:[{id:'trigger-excelExport1', name:'xforms:trigger', children:[{id:'05a900f38cc54133921a45db44df96d5', name:'xforms:label'}]}]},{id:'printHtml1', name:'/UI/system/components/printHtml.xbl.xml#printHtml', children:[{id:'trigger-printHtml1', name:'xforms:trigger', children:[{id:'a89c3dfe9b444000b905225523169a34', name:'xforms:label'}]}]}]},{id:'grid1', name:'xforms:grid'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'666e415d00f440368c520994324a00ea', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'excelExport2', name:'/UI/system/components/excel.xbl.xml#export', children:[{id:'trigger-excelExport2', name:'xforms:trigger', children:[{id:'887f24255c6d4402a13b9824f854932c', name:'xforms:label'}]}]},{id:'printHtml2', name:'/UI/system/components/printHtml.xbl.xml#printHtml', children:[{id:'trigger-printHtml2', name:'xforms:trigger', children:[{id:'135d67fbf08d45549e93d6500213997c', name:'xforms:label'}]}]}]},{id:'grid2', name:'xforms:grid'},{id:'toolbars3', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'4c9799f3fb7241d49f4845352f8825ab', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'excelExport3', name:'/UI/system/components/excel.xbl.xml#export', children:[{id:'trigger-excelExport3', name:'xforms:trigger', children:[{id:'a82d9fa27b4e4adbb337a2f6a8b819ff', name:'xforms:label'}]}]},{id:'printHtml3', name:'/UI/system/components/printHtml.xbl.xml#printHtml', children:[{id:'trigger-printHtml3', name:'xforms:trigger', children:[{id:'9c2223ff808c461ebe8cd399c7117097', name:'xforms:label'}]}]}]},{id:'grid3', name:'xforms:grid'},{id:'toolbars4', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'686d84bf70bc42afa2b07451c711a12c', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'excelExport4', name:'/UI/system/components/excel.xbl.xml#export', children:[{id:'trigger-excelExport4', name:'xforms:trigger', children:[{id:'ab2d9e41808f416792874cddfc7a3720', name:'xforms:label'}]}]},{id:'printHtml4', name:'/UI/system/components/printHtml.xbl.xml#printHtml', children:[{id:'trigger-printHtml4', name:'xforms:trigger', children:[{id:'974f9b9435b241968076763efe96abc4', name:'xforms:label'}]}]}]},{id:'grid4', name:'xforms:grid'}]},{id:'filter-pattern-0cc73cff-b2eb-4486-a148-ceee02636dca', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'65be87b3e8594a13932023fe474b7b9e', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1230508618', name:'xforms:menu'}]},{id:'GLOBAL_ID_1845072674', name:'xforms:dialog'}]},{id:'filter-dialog-0318b1c4-2ef0-4209-8bde-1bdec039a7d8', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1429512337', name:'xforms:dialog'}]},{id:'filter-pattern-3ab87b18-ecb8-4480-a4c2-dddacbd1ef08', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'1751e42197ca4591915907abdecd8699', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1461978255', name:'xforms:menu'}]},{id:'GLOBAL_ID_N51787228', name:'xforms:dialog'}]},{id:'filter-dialog-b67cf2fa-94d6-45a6-a71b-ce332a51e725', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N2144407504', name:'xforms:dialog'}]},{id:'filter-pattern-3b3158b6-309b-4b44-86ef-4734e5c3f057', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'ad741a58af194102be7bccaafe2fbef4', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1661046517', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1373604543', name:'xforms:dialog'}]},{id:'filter-dialog-ec9de8fa-dba7-4b77-a95c-dd4829ca61c0', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1151143728', name:'xforms:dialog'}]},{id:'filter-pattern-afea9cbf-81b9-4849-88a6-aac220b0e1fc', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'ad147fcf07944b3d902892f2ad088a53', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_193204793', name:'xforms:menu'}]},{id:'GLOBAL_ID_1927536019', name:'xforms:dialog'}]},{id:'filter-dialog-31f04a74-c461-49ad-bff7-47018bd58829', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1454825276', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='53358aeaa305fd4d81c129cde6f162a7';
xforms.Core.fileName='form.js';	
xf._a(null,'trigger-excelExport1');xf._a('trigger-excelExport1','05a900f38cc54133921a45db44df96d5');xf._a(null,'trigger-printHtml1');xf._a('trigger-printHtml1','a89c3dfe9b444000b905225523169a34');xf._a(null,'grid1');xf._a(null,'trigger-excelExport2');xf._a('trigger-excelExport2','887f24255c6d4402a13b9824f854932c');xf._a(null,'trigger-printHtml2');xf._a('trigger-printHtml2','135d67fbf08d45549e93d6500213997c');xf._a(null,'grid2');xf._a(null,'trigger-excelExport3');xf._a('trigger-excelExport3','a82d9fa27b4e4adbb337a2f6a8b819ff');xf._a(null,'trigger-printHtml3');xf._a('trigger-printHtml3','9c2223ff808c461ebe8cd399c7117097');xf._a(null,'grid3');xf._a(null,'trigger-excelExport4');xf._a('trigger-excelExport4','ab2d9e41808f416792874cddfc7a3720');xf._a(null,'trigger-printHtml4');xf._a('trigger-printHtml4','974f9b9435b241968076763efe96abc4');xf._a(null,'grid4');function init() {	
var begin = new Date().getTime();	
xf._b("instance('testProjectStatD')/rEPORTDATE",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','rEPORTDATE')))));	
xf._b("instance('testProjectStatD')/pROJECTDATE",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('testProjectStatD')/bUSINESSID",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('testProjectStatD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))));	
xf._b("instance('testProjectStatD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('testProjectStatD')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('testProjectStatD')/pROJECTNUMBER",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','pROJECTNUMBER')))));	
xf._b("instance('testProjectStatD')/sUBTESTCASENUMBER",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASENUMBER')))));	
xf._b("instance('testProjectStatD')/sUBTESTCASETIME",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASETIME')))));	
xf._b("instance('testProjectStatD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))));	
xf._b("instance('testProjectStatD')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('testProjectStatD')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("testProjectStatD")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('singleExeDaySummD')/rEPORTDATE",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','rEPORTDATE')))));	
xf._b("instance('singleExeDaySummD')/pROJECTID",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('singleExeDaySummD')/tASKID",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('singleExeDaySummD')/sUBTESTCASEPASS",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEPASS')))));	
xf._b("instance('singleExeDaySummD')/sUBTESTCASEFAILED",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEFAILED')))));	
xf._b("instance('singleExeDaySummD')/sUBTESTCASEBLOCKED",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEBLOCKED')))));	
xf._b("instance('singleExeDaySummD')/aCTUALSUBTESTCASETIME",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','aCTUALSUBTESTCASETIME')))));	
xf._b("instance('singleExeDaySummD')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("singleExeDaySummD")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('singleTestTaskSummD')/pROJECTID",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('singleTestTaskSummD')/tASKID",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('singleTestTaskSummD')/bUSINESSID",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('singleTestTaskSummD')/bUSINESSSTAGE",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGE')))));	
xf._b("instance('singleTestTaskSummD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('singleTestTaskSummD')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('singleTestTaskSummD')/sUBTESTCASENUMBER",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASENUMBER')))));	
xf._b("instance('singleTestTaskSummD')/sUBTESTCASETIME",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASETIME')))));	
xf._b("instance('singleTestTaskSummD')/sUBTESTCASESTEPDATANUMBER",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPDATANUMBER')))));	
xf._b("instance('singleTestTaskSummD')/pLANSTARTDATE",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','pLANSTARTDATE')))));	
xf._b("instance('singleTestTaskSummD')/aCTUALSTARTDATE",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','aCTUALSTARTDATE')))));	
xf._b("instance('singleTestTaskSummD')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('singleTestTaskSummD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))));	
xf._b("instance('singleTestTaskSummD')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('singleTestTaskSummD')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("singleTestTaskSummD")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('exeProblemSummD')/eXECUTEDATE",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','eXECUTEDATE')))));	
xf._b("instance('exeProblemSummD')/bUSINESSID",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('exeProblemSummD')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('exeProblemSummD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('exeProblemSummD')/pROBLEMPRIOR",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR')))));	
xf._b("instance('exeProblemSummD')/pROBLEMTYPE",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE')))));	
xf._b("instance('exeProblemSummD')/pROJECTNUMBER",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','pROJECTNUMBER')))));	
xf._b("instance('exeProblemSummD')/sUBTESTCASENUMBER",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASENUMBER')))));	
xf._b("instance('exeProblemSummD')/sUBTESTCASEPASS",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEPASS')))));	
xf._b("instance('exeProblemSummD')/sUBTESTCASEFAILED",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEFAILED')))));	
xf._b("instance('exeProblemSummD')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))));	
xf._b("instance('exeProblemSummD')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('exeProblemSummD')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('exeProblemSummD')/PROBLEM_PRIOR_CODE",xf._g(xf._f('instance',xf._i("exeProblemSummD")),xf._h(false, xf._k("child",xf._j('','PROBLEM_PRIOR_CODE')))));	
xf._b("''",xf._i(""));	
xf._b("rEPORTDATE",xf._h(false, xf._k("child",xf._j('','rEPORTDATE'))));	
xf._b("pROJECTDATE",xf._h(false, xf._k("child",xf._j('','pROJECTDATE'))));	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("bUSINESSSTAGECNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSSTAGECNAME'))));	
xf._b("pROJECTNUMBER",xf._h(false, xf._k("child",xf._j('','pROJECTNUMBER'))));	
xf._b("sUBTESTCASENUMBER",xf._h(false, xf._k("child",xf._j('','sUBTESTCASENUMBER'))));	
xf._b("sUBTESTCASETIME",xf._h(false, xf._k("child",xf._j('','sUBTESTCASETIME'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("aCTUALOPERATORID",xf._h(false, xf._k("child",xf._j('','aCTUALOPERATORID'))));	
xf._b("aCTUALSTARTDATE",xf._h(false, xf._k("child",xf._j('','aCTUALSTARTDATE'))));	
xf._b("tESTCASENAME",xf._h(false, xf._k("child",xf._j('','tESTCASENAME'))));	
xf._b("pLANOPERATORID",xf._h(false, xf._k("child",xf._j('','pLANOPERATORID'))));	
xf._b("sUBTESTCASEPASS",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEPASS'))));	
xf._b("sUBTESTCASEFAILED",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEFAILED'))));	
xf._b("sUBTESTCASEBLOCKED",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEBLOCKED'))));	
xf._b("aCTUALSUBTESTCASETIME",xf._h(false, xf._k("child",xf._j('','aCTUALSUBTESTCASETIME'))));	
xf._b("eXECUTEDATE",xf._h(false, xf._k("child",xf._j('','eXECUTEDATE'))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("pROBLEMPRIORCNAME",xf._h(false, xf._k("child",xf._j('','pROBLEMPRIORCNAME'))));	
xf._b("pROBLEMTYPECNAME",xf._h(false, xf._k("child",xf._j('','pROBLEMTYPECNAME'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('testProjectStatD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','model1',"instance('testProjectStatD')/rEPORTDATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('testProjectStatD')/pROJECTDATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('testProjectStatD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('testProjectStatD')/bUSINESSSTAGE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('testProjectStatD')/aPPLYFORDEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('testProjectStatD')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('testProjectStatD')/pROJECTNUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('testProjectStatD')/sUBTESTCASENUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('testProjectStatD')/sUBTESTCASETIME","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('testProjectStatD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('testProjectStatD')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('testProjectStatD')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('singleExeDaySummD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-12','model1',"instance('singleExeDaySummD')/rEPORTDATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('singleExeDaySummD')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('singleExeDaySummD')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('singleExeDaySummD')/sUBTESTCASEPASS","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('singleExeDaySummD')/sUBTESTCASEFAILED","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('singleExeDaySummD')/sUBTESTCASEBLOCKED","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('singleExeDaySummD')/aCTUALSUBTESTCASETIME","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('singleExeDaySummD')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('singleExeDaySummD')/tASKID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('singleTestTaskSummD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-21','model1',"instance('singleTestTaskSummD')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('singleTestTaskSummD')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('singleTestTaskSummD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('singleTestTaskSummD')/bUSINESSSTAGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('singleTestTaskSummD')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('singleTestTaskSummD')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('singleTestTaskSummD')/sUBTESTCASENUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('singleTestTaskSummD')/sUBTESTCASETIME","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('singleTestTaskSummD')/sUBTESTCASESTEPDATANUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('singleTestTaskSummD')/pLANSTARTDATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('singleTestTaskSummD')/aCTUALSTARTDATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('singleTestTaskSummD')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('singleTestTaskSummD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-34','model1',"instance('singleTestTaskSummD')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-35','model1',"instance('singleTestTaskSummD')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','model1',"instance('singleTestTaskSummD')/tASKID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('exeProblemSummD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-37','model1',"instance('exeProblemSummD')/eXECUTEDATE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('exeProblemSummD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('exeProblemSummD')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','model1',"instance('exeProblemSummD')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('exeProblemSummD')/pROBLEMPRIOR","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('exeProblemSummD')/pROBLEMTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-43','model1',"instance('exeProblemSummD')/pROJECTNUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','model1',"instance('exeProblemSummD')/sUBTESTCASENUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','model1',"instance('exeProblemSummD')/sUBTESTCASEPASS","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','model1',"instance('exeProblemSummD')/sUBTESTCASEFAILED","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','model1',"instance('exeProblemSummD')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','model1',"instance('exeProblemSummD')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','model1',"instance('exeProblemSummD')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-50','model1',"instance('exeProblemSummD')/PROBLEM_PRIOR_CODE","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('view1');	
var xf_menu_GLOBAL_ID_N1230508618 = new xforms.XFMenu('GLOBAL_ID_N1230508618','context');xf_menu_GLOBAL_ID_N1230508618.menu.addContextZone('65be87b3e8594a13932023fe474b7b9e');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1230508618.hide()});xf_menu_GLOBAL_ID_N1230508618.menu.setOpenMode('web');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1845072674");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1230508618'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N1230508618', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1845072674',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1218664678');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1218664678", "");}));xf._p(justep('GLOBAL_ID_1845072674'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_1845072674', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1218664678');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1845072674'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_1845072674', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1429512337',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N429400983');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N429400983", "");}));xf._p(justep('GLOBAL_ID_1429512337'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_1429512337', evt,false)});	
var xf_menu_GLOBAL_ID_N1461978255 = new xforms.XFMenu('GLOBAL_ID_N1461978255','context');xf_menu_GLOBAL_ID_N1461978255.menu.addContextZone('1751e42197ca4591915907abdecd8699');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1461978255.hide()});xf_menu_GLOBAL_ID_N1461978255.menu.setOpenMode('web');	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N51787228");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1461978255'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N1461978255', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N51787228',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1399253700');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1399253700", "");}));xf._p(justep('GLOBAL_ID_N51787228'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N51787228', evt,false)});	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1399253700');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N51787228'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_N51787228', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N2144407504',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1016401509');		if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1016401509", "");}));xf._p(justep('GLOBAL_ID_N2144407504'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_N2144407504', evt,false)});	
var xf_menu_GLOBAL_ID_N1661046517 = new xforms.XFMenu('GLOBAL_ID_N1661046517','context');xf_menu_GLOBAL_ID_N1661046517.menu.addContextZone('ad741a58af194102be7bccaafe2fbef4');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1661046517.hide()});xf_menu_GLOBAL_ID_N1661046517.menu.setOpenMode('web');	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1373604543");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1661046517'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_N1661046517', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1373604543',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1335794040');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1335794040", "");}));xf._p(justep('GLOBAL_ID_N1373604543'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_N1373604543', evt,false)});	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1335794040');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1373604543'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_14,'GLOBAL_ID_N1373604543', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1151143728',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1692913400');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1692913400", "");}));xf._p(justep('GLOBAL_ID_N1151143728'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_15,'GLOBAL_ID_N1151143728', evt,false)});	
var xf_menu_GLOBAL_ID_193204793 = new xforms.XFMenu('GLOBAL_ID_193204793','context');xf_menu_GLOBAL_ID_193204793.menu.addContextZone('ad147fcf07944b3d902892f2ad088a53');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_193204793.hide()});xf_menu_GLOBAL_ID_193204793.menu.setOpenMode('web');	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1927536019");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_193204793'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_16,'GLOBAL_ID_193204793', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1927536019',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N675981371');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N675981371", "");}));xf._p(justep('GLOBAL_ID_1927536019'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_17,'GLOBAL_ID_1927536019', evt,false)});	
var xf_action_xf_action_18=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N675981371');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1927536019'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_18,'GLOBAL_ID_1927536019', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1454825276',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_19=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N477932147');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N477932147", "");}));xf._p(justep('GLOBAL_ID_1454825276'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_19,'GLOBAL_ID_1454825276', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xforms.load_parts('view2');	
xforms.load_parts('view3');	
xforms.load_parts('view4');	
xforms.load_parts('view5');	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
var xf_trigger_trigger_excelExport1=new xforms.XFTrigger('trigger-excelExport1',null,"/UI/system/components/excel/images/export.gif","/UI/system/components/excel/images/unexport.gif",false,false,false,null,null,"");	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.XBLObject.getXBLObject(event.target).exportExcel();}));xf._p(justep('trigger-excelExport1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'trigger-excelExport1', evt,false)});	
var xf_trigger_trigger_printHtml1=new xforms.XFTrigger('trigger-printHtml1',null,"/UI/system/images/demo/print.gif","/UI/system/images/demo/print.gif",false,false,false,null,null,"");	
new xforms.XFGrid({id:'grid1',instance:'testProjectStatD',systemColumnsPro:'bUSINESSID,bUSINESSSTAGE,aPPLYFORDEVICETYPE,mANUFACTUREID,BUSINESS_TYPE_CODE,bUSINESSIDCNAME,DEVICE_TYPE_CODE,BUSINESS_STAGE_CODE,AFC_MANUFACTURER_INFO,mANUFACTUREPOSTCODE',onInit:null,type:'grid',smartRender:20,delay:false,ids:'rEPORTDATE,pROJECTDATE,mANUFACTUREIDCNAME,dEVICETYPECNAME,bUSINESSSTAGECNAME,pROJECTNUMBER,sUBTESTCASENUMBER,sUBTESTCASETIME,space-column',headNames:'统计报告日期,立项日期,厂商和检测机构商名称,检测对象,业务阶段,项目总数,测试子用例数,测试子用例工时,&nbsp;',widths:'100,100,145,153,135,100,121,148,*',types:'ed,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:',,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
var xf_trigger_trigger_excelExport2=new xforms.XFTrigger('trigger-excelExport2',null,"/UI/system/components/excel/images/export.gif","/UI/system/components/excel/images/unexport.gif",false,false,false,null,null,"");	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.XBLObject.getXBLObject(event.target).exportExcel();}));xf._p(justep('trigger-excelExport2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'trigger-excelExport2', evt,false)});	
var xf_trigger_trigger_printHtml2=new xforms.XFTrigger('trigger-printHtml2',null,"/UI/system/images/demo/print.gif","/UI/system/images/demo/print.gif",false,false,false,null,null,"");	
new xforms.XFGrid({id:'grid2',instance:'singleTestTaskSummD',systemColumnsPro:'pROJECTID,tASKID,bUSINESSID,bUSINESSSTAGE,tESTCASEID,aPPLYFORDEVICETYPE,mANUFACTUREID,sUBTESTCASESTEPDATANUMBER,pLANSTARTDATE,TEST_PROJECT_INFO,BUSINESS_TYPE_CODE,bUSINESSIDCNAME,BUSINESS_STAGE_CODE,AFC_MANUFACTURER_INFO,mANUFACTUREPOSTCODE,pLANOPERATORID,DEVICE_TYPE_CODE',onInit:null,type:'grid',smartRender:20,delay:false,ids:'pROJECTNAME,aCTUALOPERATORID,aCTUALSTARTDATE,mANUFACTUREIDCNAME,sUBTESTCASENUMBER,dEVICETYPECNAME,bUSINESSSTAGECNAME,tESTCASENAME,sUBTESTCASETIME,space-column',headNames:'项目名称,任务执行人,任务开始日期,厂商和检测机构商名称,测试子用例数,检测对象,业务阶段,测试用例名称,测试子用例工时,&nbsp;',widths:'100,100,100,156,100,100,100,100,102,*',types:'ed,ed,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:',,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
function load_view4(){if (justep("view4").getAttribute('loaded') && justep("view4").getAttribute('loaded') == 'true') return;justep("view4").setAttribute('loaded', 'true');	
if(typeof(load_view4_html) == 'function')load_view4_html();	
var xf_trigger_trigger_excelExport3=new xforms.XFTrigger('trigger-excelExport3',null,"/UI/system/components/excel/images/export.gif","/UI/system/components/excel/images/unexport.gif",false,false,false,null,null,"");	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.XBLObject.getXBLObject(event.target).exportExcel();}));xf._p(justep('trigger-excelExport3'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'trigger-excelExport3', evt,false)});	
var xf_trigger_trigger_printHtml3=new xforms.XFTrigger('trigger-printHtml3',null,"/UI/system/images/demo/print.gif","/UI/system/images/demo/print.gif",false,false,false,null,null,"");	
new xforms.XFGrid({id:'grid3',instance:'singleExeDaySummD',systemColumnsPro:'pROJECTID,tASKID,tESTCASEID,TEST_PROJECT_INFO',onInit:null,type:'grid',smartRender:20,delay:false,ids:'rEPORTDATE,pROJECTNAME,tESTCASENAME,pLANOPERATORID,sUBTESTCASEPASS,sUBTESTCASEFAILED,sUBTESTCASEBLOCKED,aCTUALSUBTESTCASETIME,space-column',headNames:'上报日期,项目名称,测试用例名称,计划执行人,测试子用例成功数,测试子用例失败数,测试子用例阻碍数,测试子用例实际总工时数,&nbsp;',widths:'96,93,108,99,107,110,106,149,*',types:'ed,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:',,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view4_xblinit(){if (justep("view4").getAttribute('xblloaded') && justep("view4").getAttribute('xblloaded') == 'true') return;justep("view4").setAttribute('xblloaded', 'true');	
}	
function load_view5(){if (justep("view5").getAttribute('loaded') && justep("view5").getAttribute('loaded') == 'true') return;justep("view5").setAttribute('loaded', 'true');	
if(typeof(load_view5_html) == 'function')load_view5_html();	
var xf_trigger_trigger_excelExport4=new xforms.XFTrigger('trigger-excelExport4',null,"/UI/system/components/excel/images/export.gif","/UI/system/components/excel/images/unexport.gif",false,false,false,null,null,"");	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.XBLObject.getXBLObject(event.target).exportExcel();}));xf._p(justep('trigger-excelExport4'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'trigger-excelExport4', evt,false)});	
var xf_trigger_trigger_printHtml4=new xforms.XFTrigger('trigger-printHtml4',null,"/UI/system/images/demo/print.gif","/UI/system/images/demo/print.gif",false,false,false,null,null,"");	
new xforms.XFGrid({id:'grid4',instance:'exeProblemSummD',systemColumnsPro:'bUSINESSID,mANUFACTUREID,aPPLYFORDEVICETYPE,pROBLEMPRIOR,pROBLEMTYPE,BUSINESS_TYPE_CODE,AFC_MANUFACTURER_INFO,mANUFACTUREPOSTCODE,DEVICE_TYPE_CODE,PROBLEM_PRIOR_CODE,PROBLEM_TYPE_CODE',onInit:null,type:'grid',smartRender:20,delay:false,ids:'eXECUTEDATE,pROJECTNUMBER,mANUFACTUREIDCNAME,bUSINESSIDCNAME,dEVICETYPECNAME,pROBLEMPRIORCNAME,pROBLEMTYPECNAME,sUBTESTCASENUMBER,sUBTESTCASEFAILED,sUBTESTCASEPASS,space-column',headNames:'执行出错日期,执行项目总数,厂商和检测机构商名称,业务类型,检测对象,问题级别,问题类型,测试子用例数,测试子用例失败数,测试子用例成功数,&nbsp;',widths:'100,100,136,100,100,100,100,100,102,109,*',types:'ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:',,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view5_xblinit(){if (justep("view5").getAttribute('xblloaded') && justep("view5").getAttribute('xblloaded') == 'true') return;justep("view5").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
