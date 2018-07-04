
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
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
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'62887c4be8b224354a0837879be28ea9'};
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
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'0789d0eef5e3542a6d236c5f74a8b36c'};
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
_xbl_JSClassDefine_dialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_dialog',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'1289db19fc7f9e204fb0f4b3d72409d6'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'2e6a5704aa28bd0f64409b807c94a60b'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'34e82cc750a3d94d2c02f2a5d0a24c33'};
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
_xbl_JSClassDefine_process.prototype.__code__={v:{name:'_xbl_JSClassDefine_process',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'ea2dfd24caadcbc62adfbd8e9d27793f'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'217494678628ae93b7dbc4f2c3b7751e'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'bb14ed25a4a7545faa8c87f0dd0f1e7c'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'45687772fda365fb4744108892e5160f'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'6ece38cc3b2c60614288f38bc75b2384'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'25b30a3272f96de7ba4d6352185f8a72',time:1528686116},m:'7144e4bb6e3ae06b0a020aaf772cea53'};
	var ids=[{id:'5babd4915b004509b6e3f9413d2b7165', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'tabPanel1_2', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'pRODUCTNAME', name:'xforms:input'},{id:'gridSelect1_3', name:'xforms:gridselect1', children:[{id:'xuiLabel1_3', name:'xforms:label'},{id:'default2_3', name:'xforms:value'}]},{id:'gridSelect3_3', name:'xforms:gridselect1', children:[{id:'xuiLabel3_3', name:'xforms:label'},{id:'default6_3', name:'xforms:value'}]},{id:'gridSelect2_3', name:'xforms:gridselect1', children:[{id:'xuiLabel2_3', name:'xforms:label'},{id:'default4_3', name:'xforms:value'}]},{id:'cONTACTPERSON', name:'xforms:input'},{id:'cONTACTTELEPHONE', name:'xforms:input'},{id:'aPPLICATIONDATE', name:'xforms:input'},{id:'eXPECTENDINGDATE', name:'xforms:input'},{id:'dEVELOPMENTTOOLS', name:'xforms:input'},{id:'mANUFACTUREIDCNAME', name:'xforms:input'},{id:'textarea1_2', name:'xforms:textarea'},{id:'radio1_23', name:'xforms:select1', children:[{id:'selectItem1_23', name:'xforms:item', children:[{id:'xuiLabel1_23', name:'xforms:label'},{id:'default1_23', name:'xforms:value'}]},{id:'selectItem2_23', name:'xforms:item', children:[{id:'xuiLabel2_23', name:'xforms:label'},{id:'default2_23', name:'xforms:value'}]}]},{id:'textarea1_3', name:'xforms:textarea'},{id:'textarea2_2', name:'xforms:textarea'},{id:'toolbars1_2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'6bc1632219de4321849426a16d4af118', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'c0ca6e4ca2d149c9960ea6c7442b47f0', name:'xforms:label'}]},{id:'bcf9e00554fb47f89fc936f38718d82f', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'brnRoom', name:'xforms:trigger', children:[{id:'xuiLabel3_2', name:'xforms:label'}]}]},{id:'hrOccupyDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'grid3_5', name:'xforms:grid'},{id:'roomOccupyDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'toolbars1_1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'refreshTrigger1', name:'xforms:trigger', children:[{id:'f28b161d14974df887e890b54b80f930', name:'xforms:label'}]},{id:'d36b46f3d3f04fd78f317e593a137ae0', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'myQuery', name:'xforms:gridselect1', children:[{id:'xuiLabel5_1', name:'xforms:label'},{id:'default15_1', name:'xforms:value'}]},{id:'trigger2_1', name:'xforms:trigger', children:[{id:'xuiLabel3_1', name:'xforms:label'}]},{id:'trigger1_1', name:'xforms:trigger', children:[{id:'xuiLabel1_1', name:'xforms:label'}]}]},{id:'grid1_1', name:'xforms:grid'}]},{id:'hrDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]},{id:'flw', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'flw_processControlDialog', name:'xforms:dialog'},{id:'flw_processChartDialogID', name:'xforms:dialog'},{id:'flw_processConfirmDialog', name:'xforms:dialog', children:[{id:'272a5835ac5c4c9ea6251812eccebcbd', name:'xforms:trigger', children:[{id:'e1304946662640c09573c46fa3f84397', name:'xforms:label'}]},{id:'f4283120d58747ec97ac4f427d03f9e5', name:'xforms:trigger', children:[{id:'77025f5df7ed4681bc1949e7d9178cb7', name:'xforms:label'}]}]},{id:'flw_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'filter-dialog-0ee01a73-68e0-4c89-871f-9fbcc270a660', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N551772375', name:'xforms:dialog'}]},{id:'filter-pattern-fc465fba-544e-415a-88df-35557e792d9f', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'a260a1af905e4395b6e64fa3c998a087', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1526390009', name:'xforms:menu'}]},{id:'GLOBAL_ID_1139708245', name:'xforms:dialog'}]},{id:'filter-dialog-bd99377e-7f89-4180-b3b6-d847efe0b304', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1064154268', name:'xforms:dialog'}]},{id:'filter-pattern-e296b3c1-2dcc-4b7b-8c8d-68c5e7244232', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'ca7a9d08328f4d409c815c137413d233', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N271016408', name:'xforms:menu'}]},{id:'GLOBAL_ID_1320019815', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='25b30a3272f96de7ba4d6352185f8a72';
xforms.Core.fileName='form.js';	
xf._a(null,'pRODUCTNAME');xf._a(null,'gridSelect1_3');xf._a('gridSelect1_3','xuiLabel1_3');xf._a('gridSelect1_3','default3_3');xf._a(null,'gridSelect3_3');xf._a('gridSelect3_3','xuiLabel3_3');xf._a('gridSelect3_3','default7_3');xf._a(null,'gridSelect2_3');xf._a('gridSelect2_3','xuiLabel2_3');xf._a('gridSelect2_3','default5_3');xf._a(null,'cONTACTPERSON');xf._a(null,'cONTACTTELEPHONE');xf._a(null,'aPPLICATIONDATE');xf._a(null,'eXPECTENDINGDATE');xf._a(null,'dEVELOPMENTTOOLS');xf._a(null,'mANUFACTUREIDCNAME');xf._a(null,'textarea1_2');xf._a(null,'radio1_23');xf._a('radio1_23','selectItem1_23');xf._a('selectItem1_23','xuiLabel1_23');xf._a('radio1_23','selectItem2_23');xf._a('selectItem2_23','xuiLabel2_23');xf._a(null,'textarea1_3');xf._a(null,'textarea2_2');xf._a(null,'insertTrigger');xf._a('insertTrigger','6bc1632219de4321849426a16d4af118');xf._a(null,'removeTrigger');xf._a('removeTrigger','c0ca6e4ca2d149c9960ea6c7442b47f0');xf._a(null,'brnRoom');xf._a('brnRoom','xuiLabel3_2');xf._a(null,'grid3_5');xf._a(null,'refreshTrigger1');xf._a('refreshTrigger1','f28b161d14974df887e890b54b80f930');xf._a(null,'myQuery');xf._a('myQuery','xuiLabel5_1');xf._a('myQuery','default16_1');xf._a(null,'trigger2_1');xf._a('trigger2_1','xuiLabel3_1');xf._a(null,'trigger1_1');xf._a('trigger1_1','xuiLabel1_1');xf._a(null,'grid1_1');xf._a(null,'272a5835ac5c4c9ea6251812eccebcbd');xf._a('272a5835ac5c4c9ea6251812eccebcbd','e1304946662640c09573c46fa3f84397');xf._a(null,'f4283120d58747ec97ac4f427d03f9e5');xf._a('f4283120d58747ec97ac4f427d03f9e5','77025f5df7ed4681bc1949e7d9178cb7');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('dataMain')/pRODUCTMANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTMANUFACTUREID')))));	
xf._b("instance('dataMain')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('dataMain')/dEVICETYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('dataMain')/bUSINESSID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('dataMain')/lINEID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('dataMain')/aPPLICATIONDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))));	
xf._b("instance('dataMain')/eXPECTENDINGDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("instance('dataMain')/rECEIPTDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','rECEIPTDATE')))));	
xf._b("instance('dataMain')/COMPANY_PROMISE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','COMPANY_PROMISE')))));	
xf._b("instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("deviceTypeCodeData")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('deviceTypeCodeData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("deviceTypeCodeData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('checkRecordData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("true()",xf._f('true'));	
xf._b("instance('checkRecordData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('checkRecordData')/cHECKRESULT",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("instance('checkRecordData')/cHECKTIME",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','cHECKTIME')))));	
xf._b("instance('applicationTypeData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("applicationTypeData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('testProjectData')/pROJECTNAME",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','pROJECTNAME')))));	
xf._b("instance('testProjectData')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('testProjectData')/cONTACTMOBILE",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE')))));	
xf._b("instance('testProjectData')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('testProjectData')/lINEID",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('testProjectData')/pROJECTMANAGER",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','pROJECTMANAGER')))));	
xf._b("instance('testProjectData')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('testProjectData')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('testProjectData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('testProjectData')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('testProjectData')/bUSINESSID",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('testProjectData')/mANUFACTUREID2",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID2')))));	
xf._b("instance('testProjectData')/mAKEDATE",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('testProjectData')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('testProjectData')/NOTIFY_TYPE_CODE",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','NOTIFY_TYPE_CODE')))));	
xf._b("instance('testProjectData')/BUSINESS_TYPE_CODE",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE')))));	
xf._b("instance('testProjectData')/TEST_SCHEME_BASE_INFO",xf._g(xf._f('instance',xf._i("testProjectData")),xf._h(false, xf._k("child",xf._j('','TEST_SCHEME_BASE_INFO')))));	
xf._b("instance('afcData')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("afcData")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('afcData')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("afcData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('projectMemberData')/calIndex",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','calIndex')))));	
xf._b("instance('projectMemberData')/aPPLICATION_NO",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','aPPLICATION_NO')))));	
xf._b("instance('projectMemberData')/pOSITIONID",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('projectMemberData')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('projectMemberData')/OCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','OCCUPYENDDATETIME')))));	
xf._b("instance('projectMemberData')/tASKID",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('projectMemberData')/project_member_role",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','project_member_role')))));	
xf._b("instance('projectMemberData')/project_id",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','project_id')))));	
xf._b("instance('projectRoomData')/DETECTION_ROOM_INFO",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','DETECTION_ROOM_INFO')))));	
xf._b("instance('projectRoomData')/rOOMTYPE",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("instance('projectRoomData')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('projectRoomData')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('projectRoomData')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("instance('projectRoomData')/tESTTASKID",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','tESTTASKID')))));	
xf._b("instance('projectRoomData')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('projectRoomData')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("projectRoomData")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
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
xf._b("instance('projectMember')/pROJECTMEMBERROLE",xf._g(xf._f('instance',xf._i("projectMember")),xf._h(false, xf._k("child",xf._j('','pROJECTMEMBERROLE')))));	
xf._b("instance('projectMember')/aPPLICATION_NO",xf._g(xf._f('instance',xf._i("projectMember")),xf._h(false, xf._k("child",xf._j('','aPPLICATION_NO')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/pRODUCTNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('dataMain')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("data('dataMain')/dEVICETYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('dataMain')/bUSINESSIDCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME')))));	
xf._b("data('dataMain')/bUSINESSID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("BUSINESS_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE'))));	
xf._b("bUSINESSIDENAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDENAME'))));	
xf._b("data('dataMain')/cONTACTPERSON",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTPERSON')))));	
xf._b("data('dataMain')/cONTACTTELEPHONE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("data('dataMain')/aPPLICATIONDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))));	
xf._b("data('dataMain')/eXPECTENDINGDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("data('dataMain')/dEVELOPMENTTOOLS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVELOPMENTTOOLS')))));	
xf._b("data('dataMain')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("data('dataMain')/tESTINGREQUIREMENTS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tESTINGREQUIREMENTS')))));	
xf._b("data('checkRecordData')/cHECKRESULT",xf._g(xf._f('data',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("data('checkRecordData')/cHECKDESC",xf._g(xf._f('data',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','cHECKDESC')))));	
xf._b("data('checkRecordData')/mEMO",xf._g(xf._f('data',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("calIndex",xf._h(false, xf._k("child",xf._j('','calIndex'))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("pOSITIONIDCNAME",xf._h(false, xf._k("child",xf._j('','pOSITIONIDCNAME'))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("taskname",xf._h(false, xf._k("child",xf._j('','taskname'))));	
xf._b("oCCUPYSTARTDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME'))));	
xf._b("OCCUPYENDDATETIME",xf._h(false, xf._k("child",xf._j('','OCCUPYENDDATETIME'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("'请选择检测对象类型'",xf._i("请选择检测对象类型"));	
xf._b("data('tempData')/name",xf._g(xf._f('data',xf._i("tempData")),xf._h(false, xf._k("child",xf._j('','name')))));	
xf._b("rOOMCNAME",xf._h(false, xf._k("child",xf._j('','rOOMCNAME'))));	
xf._b("rOOMTYPECNAME",xf._h(false, xf._k("child",xf._j('','rOOMTYPECNAME'))));	
xf._b("rOOMAREA",xf._h(false, xf._k("child",xf._j('','rOOMAREA'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("tASKNAME",xf._h(false, xf._k("child",xf._j('','tASKNAME'))));	
xf._b("oCCUPYENDDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME'))));	
xf._b("not(call('justep.XData.canDo','checkRecordData','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("checkRecordData"),xf._i("Save"))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/pRODUCTMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/aPPLICATIONDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/eXPECTENDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/rECEIPTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/COMPANY_PROMISE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('detObjType','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('businessData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('deviceTypeCodeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-10','mdDefault',"instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('deviceTypeCodeData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('checkRecordData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('checkRecordData',null);	
xf._c('xf-bind-12','mdDefault',"instance('checkRecordData')/aPPLICATIONTYPE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('checkRecordData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('checkRecordData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('checkRecordData')/cHECKRESULT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('checkRecordData')/cHECKTIME","xsd:date",null,null,null,null,null,null);	
var xf_action_action1_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){ bizActivity3.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1_3,'mdDefault', evt,false)});	
new xforms.XFInstance2('projectMemberData','mdDefault',null,null,null,null,null,null,null,null,'calIndex',null,'whereAll');	
xf._c('xf-bind-39','mdDefault',"instance('projectMemberData')/calIndex","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('projectMemberData')/aPPLICATION_NO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('projectMemberData')/pOSITIONID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('projectMemberData')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('projectMemberData')/OCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('projectMemberData')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('projectMemberData')/project_member_role","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('projectMemberData')/project_id","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('projectRoomData','mdDefault',null,null,null,null,null,null,null,null,'recCB',null,'whereAll');	
xf._c('xf-bind-47','mdDefault',"instance('projectRoomData')/DETECTION_ROOM_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('projectRoomData')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('projectRoomData')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('projectRoomData')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdDefault',"instance('projectRoomData')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdDefault',"instance('projectRoomData')/tESTTASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdDefault',"instance('projectRoomData')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdDefault',"instance('projectRoomData')/oCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('roomTypeBiz','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('roomTypeBiz',null);	
new xforms.XFInstance2('oData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('tempData','mdDefault',null,'<rows id="default28_1"><row id="default16_3"><cell id="default17_3"></cell><cell id="default27_1"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('tempData','val,name');	
var xf_action_action3_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('mdDefault'),"onload",null,function(evt) { xforms.run(xf_action_action3_1,'mdDefault', evt,false)});	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-55','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-58','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-60','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-61','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-62','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-63','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-64','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-65','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-66','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('roomType','mdDefault',null,'<rows id="default8_3"><row id="default9_3"><cell id="default12_3"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('roomType','tName');	
new xforms.XFInstance2('projectMember','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('projectMember',null);	
xf._c('xf-bind-67','mdDefault',"instance('projectMember')/pROJECTMEMBERROLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-68','mdDefault',"instance('projectMember')/aPPLICATION_NO","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N551772375',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N973926291');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N973926291", "");}));xf._p(justep('GLOBAL_ID_N551772375'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_N551772375', evt,false)});	
var xf_menu_GLOBAL_ID_1526390009 = new xforms.XFMenu('GLOBAL_ID_1526390009','context');xf_menu_GLOBAL_ID_1526390009.menu.addContextZone('a260a1af905e4395b6e64fa3c998a087');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1526390009.hide()});xf_menu_GLOBAL_ID_1526390009.menu.setOpenMode('web');	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1139708245");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1526390009'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_1526390009', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1139708245',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_35455801');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_35455801", "");}));xf._p(justep('GLOBAL_ID_1139708245'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_1139708245', evt,false)});	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_35455801');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1139708245'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_14,'GLOBAL_ID_1139708245', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1064154268',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1461215376');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1461215376", "");}));xf._p(justep('GLOBAL_ID_1064154268'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_15,'GLOBAL_ID_1064154268', evt,false)});	
var xf_menu_GLOBAL_ID_N271016408 = new xforms.XFMenu('GLOBAL_ID_N271016408','context');xf_menu_GLOBAL_ID_N271016408.menu.addContextZone('ca7a9d08328f4d409c815c137413d233');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N271016408.hide()});xf_menu_GLOBAL_ID_N271016408.menu.setOpenMode('web');	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1320019815");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N271016408'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_16,'GLOBAL_ID_N271016408', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1320019815',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_106706330');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_106706330", "");}));xf._p(justep('GLOBAL_ID_1320019815'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_17,'GLOBAL_ID_1320019815', evt,false)});	
var xf_action_xf_action_18=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_106706330');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1320019815'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_18,'GLOBAL_ID_1320019815', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var applicationTypeData_part_loaded = false;	
function load_applicationTypeData_part(callback){if (applicationTypeData_part_loaded) return;applicationTypeData_part_loaded = true;	
new xforms.XFInstance2('applicationTypeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('applicationTypeData',null);	
xf._c('xf-bind-17','mdDefault',"instance('applicationTypeData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var applicationTypeData_part_init_loaded = false;	
function load_applicationTypeData_part_init(){if (applicationTypeData_part_init_loaded) return;applicationTypeData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var testProjectData_part_loaded = false;	
function load_testProjectData_part(callback){if (testProjectData_part_loaded) return;testProjectData_part_loaded = true;	
new xforms.XFInstance2('testProjectData','mdDefault',null,null,null,null,null,null,null,null,'calculate0',null,'whereAll');new SimpleStore('testProjectData',null);	
xf._c('xf-bind-18','mdDefault',"instance('testProjectData')/pROJECTNAME",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('testProjectData')/pROJECTTYPE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('testProjectData')/cONTACTMOBILE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('testProjectData')/nOTIFYTYPE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('testProjectData')/lINEID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('testProjectData')/pROJECTMANAGER",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('testProjectData')/tESTSCHEMEID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('testProjectData')/eXECUTESTATE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('testProjectData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('testProjectData')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('testProjectData')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('testProjectData')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('testProjectData')/mANUFACTUREID2","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('testProjectData')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('testProjectData')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('testProjectData')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('testProjectData')/NOTIFY_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('testProjectData')/BUSINESS_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('testProjectData')/TEST_SCHEME_BASE_INFO","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var testProjectData_part_init_loaded = false;	
function load_testProjectData_part_init(){if (testProjectData_part_init_loaded) return;testProjectData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var afcData_part_loaded = false;	
function load_afcData_part(callback){if (afcData_part_loaded) return;afcData_part_loaded = true;	
new xforms.XFInstance2('afcData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('afcData',null);	
xf._c('xf-bind-37','mdDefault',"instance('afcData')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('afcData')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var afcData_part_init_loaded = false;	
function load_afcData_part_init(){if (afcData_part_init_loaded) return;afcData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vDetail');	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_8,'xf-model-1', evt,false)});	
new xforms.XFDialog('flw_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_9=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('flw_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('flw'); process[callback](task, processControl, options); } justep('flw_processControlDialogIFrame').src="";});xf._p(justep('flw_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_9,'flw_processControlDialog', evt,false)});	
new xforms.XFDialog('flw_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_10=xf._o(null,null,function(element, ctx, event){justep('flw_processChartDialogIFrame').src="";});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_10,'flw_processChartDialogID', evt,false)});	
var xf_script_xf_script_11=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('flw_processChartDialogIFrame').src=url;});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_11,'flw_processChartDialogID', evt,false)});	
new xforms.XFDialog('flw_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_12=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('flw'); process[callback](task, processControl, options); }});xf._p(justep('flw_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_12,'flw_processConfirmDialog', evt,false)});	
var xf_trigger_272a5835ac5c4c9ea6251812eccebcbd=new xforms.XFTrigger('272a5835ac5c4c9ea6251812eccebcbd',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('flw_processConfirmDialog').close();}));xf._p(justep('272a5835ac5c4c9ea6251812eccebcbd'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_9,'272a5835ac5c4c9ea6251812eccebcbd', evt,false)});	
var xf_trigger_f4283120d58747ec97ac4f427d03f9e5=new xforms.XFTrigger('f4283120d58747ec97ac4f427d03f9e5',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('flw_processConfirmDialog').close();}));xf._p(justep('f4283120d58747ec97ac4f427d03f9e5'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_10,'f4283120d58747ec97ac4f427d03f9e5', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xforms.load_parts('view1_4');	
xforms.load_parts('view1_1');	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity3.insertTriggerClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity3.removeTriggerClick(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'removeTrigger', evt,false)});	
var xf_trigger_brnRoom=new xforms.XFTrigger('brnRoom',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity3.roomClick(event)}));xf._p(justep('brnRoom'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_2,'brnRoom', evt,false)});	
new xforms.XFGrid({id:'grid3_5',instance:'projectMemberData',systemColumnsPro:'project_info,pROJECTMEMBERID,aPPLICATION_NO,pOSITIONID,tASKID,project_member_role,project_id',onInit:null,type:'grid',smartRender:20,delay:false,ids:'calIndex,oPERATORNAME,pOSITIONIDCNAME,pROJECTNAME,taskname,oCCUPYSTARTDATETIME,OCCUPYENDDATETIME,space-column',headNames:'序号,姓名,岗位,项目名称,任务名称,计划占用起始日期时间,计划占用结束日期时间,&nbsp;',widths:'30,100,87,170,202,143,165,*',types:'cntr,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'center,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_refreshTrigger1=new xforms.XFTrigger('refreshTrigger1',null,"/UI/system/images/standardToolbar/standard/refresh.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity3.refreshTriggerClick(event)}));xf._p(justep('refreshTrigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'refreshTrigger1', evt,false)});	
new xforms.XFExtSelect({id:'myQuery',type:'gridselect1',defaultLabelRef:xf._q("'请选择检测对象类型'"),allSelectedLabelRef:null,ref:xf._q("data('tempData')/name"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'oData',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_trigger_trigger2_1=new xforms.XFTrigger('trigger2_1',null,null,null,false,false,false,null,null,null);	
var xf_action_action2_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity3.trigger2_1Click(event)}));xf._p(justep('trigger2_1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2_1,'trigger2_1', evt,false)});	
var xf_trigger_trigger1_1=new xforms.XFTrigger('trigger1_1',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity3.trigger1_1Click(event)}));xf._p(justep('trigger1_1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_1,'trigger1_1', evt,false)});	
new xforms.XFGrid({id:'grid1_1',instance:'projectRoomData',systemColumnsPro:'DETECTION_ROOM_INFO,rOOMTYPE,iMAGE,im,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,tESTTASKID,recCB',onInit:null,type:'grid',smartRender:20,delay:false,ids:'rOOMCNAME,rOOMTYPECNAME,rOOMAREA,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,pROJECTNAME,tASKNAME,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,space-column',headNames:'房间名称,房间类型,区域,检测对象类型,检测对象,检测方面类型,项目名称,任务名称,计划占用起始日期时间,计划占用结束日期时间,&nbsp;',widths:'108,88,91,105,126,104,227,224,161,154,*',types:'ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'left,left,left,left,left,left,left,,left,left,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'bizActivity3.grid1_1RowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'rOOMCNAME','true');this.grid.bindColReadonly(null,'rOOMTYPECNAME','true');this.grid.bindColReadonly(null,'rOOMAREA','true');this.grid.bindColReadonly(null,'dETECTIONOBJECTCNAME','true');this.grid.bindColReadonly(null,'dEVICETYPECNAME','true');this.grid.bindColReadonly(null,'dETECTIONRANGECNAME','true');this.grid.bindColReadonly(null,'pROJECTNAME','true');this.grid.bindColFormat(null,'oCCUPYSTARTDATETIME','yyyy-MM-dd');this.grid.bindColReadonly(null,'oCCUPYSTARTDATETIME','true');this.grid.bindColFormat(null,'oCCUPYENDDATETIME','yyyy-MM-dd');this.grid.bindColReadonly(null,'oCCUPYENDDATETIME','true');}});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view1_4(){if (justep("view1_4").getAttribute('loaded') && justep("view1_4").getAttribute('loaded') == 'true') return;justep("view1_4").setAttribute('loaded', 'true');	
if(typeof(load_view1_4_html) == 'function')load_view1_4_html();	
xf._d('pRODUCTNAME','text',xf._q("data('dataMain')/pRODUCTNAME"),null,null,null,null,true,true);	
new xforms.XFExtSelect({id:'gridSelect1_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dETECTIONOBJECTTYPE"),labelRef:xf._q("data('dataMain')/dETECTIONOBJECTCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detObjType',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dEVICETYPE"),labelRef:xf._q("data('dataMain')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'deviceTypeCodeData',columns:'dEVICETYPE,dEVICETYPECNAME,__c_,dETECTIONOBJECTTYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/bUSINESSID"),labelRef:xf._q("data('dataMain')/bUSINESSIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessData',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,__c_,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'BUSINESS_TYPE_CODE,bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('cONTACTPERSON','text',xf._q("data('dataMain')/cONTACTPERSON"),null,null,null,null,true,true);	
xf._d('cONTACTTELEPHONE','text',xf._q("data('dataMain')/cONTACTTELEPHONE"),null,null,null,null,true,true);	
xf._d('aPPLICATIONDATE','text',xf._q("data('dataMain')/aPPLICATIONDATE"),null,null,null,"yyyy-MM-dd",true,true);	
xf._d('eXPECTENDINGDATE','text',xf._q("data('dataMain')/eXPECTENDINGDATE"),null,null,null,"yyyy-MM-dd",true,true);	
xf._d('dEVELOPMENTTOOLS','text',xf._q("data('dataMain')/dEVELOPMENTTOOLS"),null,null,null,null,true,true);	
xf._d('mANUFACTUREIDCNAME','text',xf._q("data('dataMain')/mANUFACTUREIDCNAME"),null,null,null,null,true,true);	
xf._d('textarea1_2','textarea',xf._q("data('dataMain')/tESTINGREQUIREMENTS"),null,null,null,null,true,true);	
}	
function load_view1_4_xblinit(){if (justep("view1_4").getAttribute('xblloaded') && justep("view1_4").getAttribute('xblloaded') == 'true') return;justep("view1_4").setAttribute('xblloaded', 'true');	
}	
function load_view1_1(){if (justep("view1_1").getAttribute('loaded') && justep("view1_1").getAttribute('loaded') == 'true') return;justep("view1_1").setAttribute('loaded', 'true');	
if(typeof(load_view1_1_html) == 'function')load_view1_1_html();	
var xf_select1_radio1_23=new xforms.XFSelect('radio1_23',false,true,xf._q("data('checkRecordData')/cHECKRESULT"),true,false,false,'',1);	
var xf_item_selectItem1_23=new xforms.XFItem('selectItem1_23',null,null);	
var xf_item_selectItem2_23=new xforms.XFItem('selectItem2_23',null,null);	
xf._d('textarea1_3','textarea',xf._q("data('checkRecordData')/cHECKDESC"),null,null,null,null,false,false);	
xf._d('textarea2_2','textarea',xf._q("data('checkRecordData')/mEMO"),null,null,null,null,false,false);	
}	
function load_view1_1_xblinit(){if (justep("view1_1").getAttribute('xblloaded') && justep("view1_1").getAttribute('xblloaded') == 'true') return;justep("view1_1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
