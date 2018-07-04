
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
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'530b6e3a859aa0dfa1bb4620211510ae'};
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
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'085c20ded550fdb06365cc6e703c6172'};
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
_xbl_JSClassDefine_dialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_dialog',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'5a4d6988179589a14745643b27433282'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'adcb85170a69392d609da861e2075979'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'33dbd6c30fb152ab9992ea0271921956'};
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
_xbl_JSClassDefine_process.prototype.__code__={v:{name:'_xbl_JSClassDefine_process',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'792c683f8c9cdbefc8e145323930b60e'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'0ac9660387a9ba4636ead74c01fc5660'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'cd3f8b8f8fecd3e653bab740d3b347c8'};
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
								img.attr("src", info.disImg);		a.unbind("click");
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'90f387203162d15cce781dcde8c05e86'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'e23af6a2d51faaf73d1d436e90b947fd'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'d46ef69f7c4e7a27d5a152d8c85ecb17',time:1528686036},m:'2137e1d520006837812a0005861708a0'};
	var ids=[{id:'c062b6aca94c4f51bfd62f0bc769f153', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'roomScheduleDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'hrScheduleDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'tabPanel1_7', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'gridSelect1_7', name:'xforms:gridselect1', children:[{id:'xuiLabel3_7', name:'xforms:label'},{id:'default1_7', name:'xforms:value'}]},{id:'gridSelect2_7', name:'xforms:gridselect1', children:[{id:'xuiLabel4_7', name:'xforms:label'},{id:'default7_7', name:'xforms:value'}]},{id:'pRODUCTNAME', name:'xforms:input'},{id:'gridSelect3_7', name:'xforms:gridselect1', children:[{id:'xuiLabel5_7', name:'xforms:label'},{id:'default9_7', name:'xforms:value'}]},{id:'gridSelect5_7', name:'xforms:gridselect1', children:[{id:'xuiLabel7_7', name:'xforms:label'},{id:'default13_7', name:'xforms:value'}]},{id:'gridSelect4_7', name:'xforms:gridselect1', children:[{id:'xuiLabel6_7', name:'xforms:label'},{id:'default11_7', name:'xforms:value'}]},{id:'lINEID', name:'xforms:input'},{id:'eXPECTENDINGDATE', name:'xforms:input'},{id:'textarea1_5', name:'xforms:textarea'},{id:'textarea2_5', name:'xforms:textarea'},{id:'radio1_4', name:'xforms:select1', children:[{id:'selectItem1_4', name:'xforms:item', children:[{id:'xuiLabel1_4', name:'xforms:label'},{id:'default1_4', name:'xforms:value'}]},{id:'selectItem2_4', name:'xforms:item', children:[{id:'xuiLabel2_4', name:'xforms:label'},{id:'default2_4', name:'xforms:value'}]}]},{id:'textarea2_9', name:'xforms:textarea'},{id:'textarea1_9', name:'xforms:textarea'},{id:'toolbars1_2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'fce37cf9b6934446bb11d97d085972f6', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'myQuery', name:'xforms:gridselect1', children:[{id:'xuiLabel1_3', name:'xforms:label'},{id:'default8_3', name:'xforms:value'}]},{id:'trigger1_1', name:'xforms:trigger', children:[{id:'xuiLabel2_1', name:'xforms:label'}]},{id:'trigger1_5', name:'xforms:trigger', children:[{id:'xuiLabel1_5', name:'xforms:label'}]}]},{id:'grid1_8', name:'xforms:grid'},{id:'toolbars2_1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'f2618cf9e1d9419a971ff92e42fa6fb7', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'queryHrS1', name:'xforms:gridselect1', children:[{id:'xuiLabel2_2', name:'xforms:label'},{id:'default12_2', name:'xforms:value'}]},{id:'trigger1_2', name:'xforms:trigger', children:[{id:'xuiLabel4_2', name:'xforms:label'}]},{id:'trigger1_4', name:'xforms:trigger', children:[{id:'xuiLabel7_4', name:'xforms:label'}]}]},{id:'grid1_4', name:'xforms:grid'}]}]},{id:'flw', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'flw_processControlDialog', name:'xforms:dialog'},{id:'flw_processChartDialogID', name:'xforms:dialog'},{id:'flw_processConfirmDialog', name:'xforms:dialog', children:[{id:'a18fbe7b82684c70a0ded87d1bb15f66', name:'xforms:trigger', children:[{id:'2c87a448366241f8a7c0c6dba2e41deb', name:'xforms:label'}]},{id:'e89dc5895e3d4b02bee4c17c3dc07145', name:'xforms:trigger', children:[{id:'028553a5aa9b4c2d9c2fb0603365a8e3', name:'xforms:label'}]}]},{id:'flw_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'filter-dialog-b03585de-0148-4eaa-b926-43470d76febf', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1283439457', name:'xforms:dialog'}]},{id:'filter-pattern-6cf9027f-c770-4698-9125-8c4aebe45720', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'8fc032d15faf43cfb6729e8390d01dc6', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1161370091', name:'xforms:menu'}]},{id:'GLOBAL_ID_N421791409', name:'xforms:dialog'}]},{id:'filter-dialog-c26fcb58-965c-4c6e-80ba-08015fca10ab', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N78074347', name:'xforms:dialog'}]},{id:'filter-pattern-839ea252-13bf-4ba2-b72e-2b527ba7b193', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'d18efb3e48624f1b9ec63d1f712df10c', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_825799589', name:'xforms:menu'}]},{id:'GLOBAL_ID_1109344848', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='d46ef69f7c4e7a27d5a152d8c85ecb17';
xforms.Core.fileName='form.js';	
xf._a(null,'gridSelect1_7');xf._a('gridSelect1_7','xuiLabel3_7');xf._a('gridSelect1_7','default2_7');xf._a(null,'gridSelect2_7');xf._a('gridSelect2_7','xuiLabel4_7');xf._a('gridSelect2_7','default8_7');xf._a(null,'pRODUCTNAME');xf._a(null,'gridSelect3_7');xf._a('gridSelect3_7','xuiLabel5_7');xf._a('gridSelect3_7','default10_7');xf._a(null,'gridSelect5_7');xf._a('gridSelect5_7','xuiLabel7_7');xf._a('gridSelect5_7','default14_7');xf._a(null,'gridSelect4_7');xf._a('gridSelect4_7','xuiLabel6_7');xf._a('gridSelect4_7','default12_7');xf._a(null,'lINEID');xf._a(null,'eXPECTENDINGDATE');xf._a(null,'textarea1_5');xf._a(null,'textarea2_5');xf._a(null,'radio1_4');xf._a('radio1_4','selectItem1_4');xf._a('selectItem1_4','xuiLabel1_4');xf._a('radio1_4','selectItem2_4');xf._a('selectItem2_4','xuiLabel2_4');xf._a(null,'textarea2_9');xf._a(null,'textarea1_9');xf._a(null,'myQuery');xf._a('myQuery','xuiLabel1_3');xf._a('myQuery','default9_3');xf._a(null,'trigger1_1');xf._a('trigger1_1','xuiLabel2_1');xf._a(null,'trigger1_5');xf._a('trigger1_5','xuiLabel1_5');xf._a(null,'grid1_8');xf._a(null,'queryHrS1');xf._a('queryHrS1','xuiLabel2_2');xf._a('queryHrS1','default15_2');xf._a(null,'trigger1_2');xf._a('trigger1_2','xuiLabel4_2');xf._a(null,'trigger1_4');xf._a('trigger1_4','xuiLabel7_4');xf._a(null,'grid1_4');xf._a(null,'a18fbe7b82684c70a0ded87d1bb15f66');xf._a('a18fbe7b82684c70a0ded87d1bb15f66','2c87a448366241f8a7c0c6dba2e41deb');xf._a(null,'e89dc5895e3d4b02bee4c17c3dc07145');xf._a('e89dc5895e3d4b02bee4c17c3dc07145','028553a5aa9b4c2d9c2fb0603365a8e3');function init() {	
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
xf._b("instance('afcData')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("afcData")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('afcData')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("afcData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("deviceTypeCodeData")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('deviceTypeCodeData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("deviceTypeCodeData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('qData')/DETECTION_ROOM_INFO",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','DETECTION_ROOM_INFO')))));	
xf._b("instance('qData')/rOOMTYPE",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("instance('qData')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('qData')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('qData')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("instance('qData')/tESTTASKID",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','tESTTASKID')))));	
xf._b("instance('qData')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('qData')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("qData")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('cData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('cData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('cData')/cHECKRESULT",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("instance('cData')/cHECKTIME",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKTIME')))));	
xf._b("instance('pData')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('pData')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('applicationType')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("applicationType")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('detObjCode')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("detObjCode")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('detObjCode')/dEVICETYPE",xf._g(xf._f('instance',xf._i("detObjCode")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
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
xf._b("data('dataMain')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))));	
xf._b("AFC_MANUFACTURER_INFO",xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("mANUFACTUREIDENAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDENAME'))));	
xf._b("mANUFACTURETYPE",xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE'))));	
xf._b("mANUFACTUREADDRESS",xf._h(false, xf._k("child",xf._j('','mANUFACTUREADDRESS'))));	
xf._b("mANUFACTUREPOSTCODE",xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE'))));	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))));	
xf._b("cONTACTOR",xf._h(false, xf._k("child",xf._j('','cONTACTOR'))));	
xf._b("cONTACTMOBILE",xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE'))));	
xf._b("fAXNUMBER",xf._h(false, xf._k("child",xf._j('','fAXNUMBER'))));	
xf._b("cONTACTEMAIL",xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("oPERATOR_ID",xf._h(false, xf._k("child",xf._j('','oPERATOR_ID'))));	
xf._b("data('dataMain')/wtName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','wtName')))));	
xf._b("data('dataMain')/pRODUCTMANUFACTUREID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTMANUFACTUREID')))));	
xf._b("data('dataMain')/pRODUCTNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
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
xf._b("data('dataMain')/lINEID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("data('dataMain')/eXPECTENDINGDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("data('dataMain')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("data('dataMain')/tESTINGREQUIREMENTS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tESTINGREQUIREMENTS')))));	
xf._b("data('cData')/cHECKRESULT",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("data('cData')/cHECKDESC",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKDESC')))));	
xf._b("data('cData')/mEMO",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("'请选择检测对象类型'",xf._i("请选择检测对象类型"));	
xf._b("data('tempData')/name",xf._g(xf._f('data',xf._i("tempData")),xf._h(false, xf._k("child",xf._j('','name')))));	
xf._b("rOOMCNAME",xf._h(false, xf._k("child",xf._j('','rOOMCNAME'))));	
xf._b("rOOMTYPECNAME",xf._h(false, xf._k("child",xf._j('','rOOMTYPECNAME'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("oCCUPYSTARTDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME'))));	
xf._b("oCCUPYENDDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('tempData')/val",xf._g(xf._f('data',xf._i("tempData")),xf._h(false, xf._k("child",xf._j('','val')))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("oPERATORSTATE",xf._h(false, xf._k("child",xf._j('','oPERATORSTATE'))));	
xf._b("not(call('justep.XData.canDo','cData','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("cData"),xf._i("Save"))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xf._b("not(call('justep.XData.canDo','pData','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("pData"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','pData','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("pData"),xf._i("Next"))));	
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
new xforms.XFInstance2('afcData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-10','mdDefault',"instance('afcData')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('afcData')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('detObjType','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('businessData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('deviceTypeCodeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-12','mdDefault',"instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('deviceTypeCodeData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('qData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-14','mdDefault',"instance('qData')/DETECTION_ROOM_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('qData')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('qData')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('qData')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('qData')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('qData')/tESTTASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('qData')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('qData')/oCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('cData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('cData',null);	
xf._c('xf-bind-22','mdDefault',"instance('cData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('cData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('cData')/cHECKRESULT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('cData')/cHECKTIME","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('pData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-26','mdDefault',"instance('pData')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('pData')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
new xforms.XFInstance2('oData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('detObjCode','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('detObjCode',null);	
xf._c('xf-bind-29','mdDefault',"instance('detObjCode')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('detObjCode')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('tempData','mdDefault',null,'<rows id="default15_3"><row id="default16_3"><cell id="default17_3"></cell><cell id="default18_3"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('tempData','val,name');	
new xforms.XFInstance2('roomType','mdDefault',null,'<rows id="default6_2"><row id="default7_2"><cell id="default8_2"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('roomType','tName');	
new xforms.XFInstance2('roomTypeBiz','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
var xf_action_action2_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity2.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action2_2,'mdDefault', evt,false)});	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-31','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-34','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
var xf_action_action2_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity2.mdDefaultLoad(event)}));xf._p(justep('mdDefault'),"onload",null,function(evt) { xforms.run(xf_action_action2_1,'mdDefault', evt,false)});	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_1283439457',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N835754673');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N835754673", "");}));xf._p(justep('GLOBAL_ID_1283439457'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_1283439457', evt,false)});	
var xf_menu_GLOBAL_ID_N1161370091 = new xforms.XFMenu('GLOBAL_ID_N1161370091','context');xf_menu_GLOBAL_ID_N1161370091.menu.addContextZone('8fc032d15faf43cfb6729e8390d01dc6');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1161370091.hide()});xf_menu_GLOBAL_ID_N1161370091.menu.setOpenMode('web');	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N421791409");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1161370091'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_N1161370091', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N421791409',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N37787794');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N37787794", "");}));xf._p(justep('GLOBAL_ID_N421791409'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_N421791409', evt,false)});	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N37787794');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N421791409'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_N421791409', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N78074347',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N2142695875');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N2142695875", "");}));xf._p(justep('GLOBAL_ID_N78074347'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_N78074347', evt,false)});	
var xf_menu_GLOBAL_ID_825799589 = new xforms.XFMenu('GLOBAL_ID_825799589','context');xf_menu_GLOBAL_ID_825799589.menu.addContextZone('d18efb3e48624f1b9ec63d1f712df10c');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_825799589.hide()});xf_menu_GLOBAL_ID_825799589.menu.setOpenMode('web');	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1109344848");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_825799589'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_14,'GLOBAL_ID_825799589', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1109344848',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_80324857');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_80324857", "");}));xf._p(justep('GLOBAL_ID_1109344848'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_15,'GLOBAL_ID_1109344848', evt,false)});	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_80324857');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1109344848'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_16,'GLOBAL_ID_1109344848', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var applicationType_part_loaded = false;	
function load_applicationType_part(callback){if (applicationType_part_loaded) return;applicationType_part_loaded = true;	
new xforms.XFInstance2('applicationType','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('applicationType',null);	
xf._c('xf-bind-28','mdDefault',"instance('applicationType')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var applicationType_part_init_loaded = false;	
function load_applicationType_part_init(){if (applicationType_part_init_loaded) return;applicationType_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vDetail');	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_6,'xf-model-1', evt,false)});	
new xforms.XFDialog('flw_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_7=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('flw_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('flw'); process[callback](task, processControl, options); } justep('flw_processControlDialogIFrame').src="";});xf._p(justep('flw_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_7,'flw_processControlDialog', evt,false)});	
new xforms.XFDialog('flw_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_8=xf._o(null,null,function(element, ctx, event){justep('flw_processChartDialogIFrame').src="";});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_8,'flw_processChartDialogID', evt,false)});	
var xf_script_xf_script_9=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('flw_processChartDialogIFrame').src=url;});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_9,'flw_processChartDialogID', evt,false)});	
new xforms.XFDialog('flw_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_10=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('flw'); process[callback](task, processControl, options); }});xf._p(justep('flw_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_10,'flw_processConfirmDialog', evt,false)});	
var xf_trigger_a18fbe7b82684c70a0ded87d1bb15f66=new xforms.XFTrigger('a18fbe7b82684c70a0ded87d1bb15f66',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('flw_processConfirmDialog').close();}));xf._p(justep('a18fbe7b82684c70a0ded87d1bb15f66'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'a18fbe7b82684c70a0ded87d1bb15f66', evt,false)});	
var xf_trigger_e89dc5895e3d4b02bee4c17c3dc07145=new xforms.XFTrigger('e89dc5895e3d4b02bee4c17c3dc07145',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('flw_processConfirmDialog').close();}));xf._p(justep('e89dc5895e3d4b02bee4c17c3dc07145'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'e89dc5895e3d4b02bee4c17c3dc07145', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xforms.load_parts('view1_3');	
xforms.load_parts('view1_7');	
xforms.load_parts('view1_8');	
xforms.load_parts('view2_1');	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view1_3(){if (justep("view1_3").getAttribute('loaded') && justep("view1_3").getAttribute('loaded') == 'true') return;justep("view1_3").setAttribute('loaded', 'true');	
if(typeof(load_view1_3_html) == 'function')load_view1_3_html();	
new xforms.XFExtSelect({id:'gridSelect1_7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/aSSIGNEDMANUFACTUREID"),labelRef:xf._q("data('dataMain')/mANUFACTUREIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcData',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2_7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/pRODUCTMANUFACTUREID"),labelRef:xf._q("data('dataMain')/wtName"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcData',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('pRODUCTNAME','text',xf._q("data('dataMain')/pRODUCTNAME"),null,null,null,null,true,true);	
new xforms.XFExtSelect({id:'gridSelect3_7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dETECTIONOBJECTTYPE"),labelRef:xf._q("data('dataMain')/dETECTIONOBJECTCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detObjType',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect5_7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dEVICETYPE"),labelRef:xf._q("data('dataMain')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'deviceTypeCodeData',columns:'dEVICETYPECNAME,__c_,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4_7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/bUSINESSID"),labelRef:xf._q("data('dataMain')/bUSINESSIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessData',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,__c_,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'BUSINESS_TYPE_CODE,bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('lINEID','text',xf._q("data('dataMain')/lINEID"),null,null,null,null,true,true);	
xf._d('eXPECTENDINGDATE','text',xf._q("data('dataMain')/eXPECTENDINGDATE"),null,null,null,"yyyy-MM-dd",true,true);	
xf._d('textarea1_5','textarea',xf._q("data('dataMain')/dECTIONBASEDONNAME"),null,null,null,null,true,false);	
xf._d('textarea2_5','textarea',xf._q("data('dataMain')/tESTINGREQUIREMENTS"),null,null,null,null,true,false);	
}	
function load_view1_3_xblinit(){if (justep("view1_3").getAttribute('xblloaded') && justep("view1_3").getAttribute('xblloaded') == 'true') return;justep("view1_3").setAttribute('xblloaded', 'true');	
}	
function load_view1_7(){if (justep("view1_7").getAttribute('loaded') && justep("view1_7").getAttribute('loaded') == 'true') return;justep("view1_7").setAttribute('loaded', 'true');	
if(typeof(load_view1_7_html) == 'function')load_view1_7_html();	
var xf_select1_radio1_4=new xforms.XFSelect('radio1_4',false,true,xf._q("data('cData')/cHECKRESULT"),true,false,false,'',1);	
var xf_item_selectItem1_4=new xforms.XFItem('selectItem1_4',null,null);	
var xf_item_selectItem2_4=new xforms.XFItem('selectItem2_4',null,null);	
xf._d('textarea2_9','textarea',xf._q("data('cData')/cHECKDESC"),null,null,null,null,false,false);	
xf._d('textarea1_9','textarea',xf._q("data('cData')/mEMO"),null,null,null,null,false,false);	
}	
function load_view1_7_xblinit(){if (justep("view1_7").getAttribute('xblloaded') && justep("view1_7").getAttribute('xblloaded') == 'true') return;justep("view1_7").setAttribute('xblloaded', 'true');	
}	
function load_view1_8(){if (justep("view1_8").getAttribute('loaded') && justep("view1_8").getAttribute('loaded') == 'true') return;justep("view1_8").setAttribute('loaded', 'true');	
if(typeof(load_view1_8_html) == 'function')load_view1_8_html();	
new xforms.XFExtSelect({id:'myQuery',type:'gridselect1',defaultLabelRef:xf._q("'请选择检测对象类型'"),allSelectedLabelRef:null,ref:xf._q("data('tempData')/name"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'oData',columns:'dETECTIONOBJECTCNAME,DETECTION_OBJECT_TYPE,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:true,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_trigger_trigger1_1=new xforms.XFTrigger('trigger1_1',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity2.trigger1_1Click(event)}));xf._p(justep('trigger1_1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_1,'trigger1_1', evt,false)});	
var xf_trigger_trigger1_5=new xforms.XFTrigger('trigger1_5',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity2.trigger1_5Click(event)}));xf._p(justep('trigger1_5'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_5,'trigger1_5', evt,false)});	
new xforms.XFGrid({id:'grid1_8',instance:'qData',systemColumnsPro:'DETECTION_ROOM_INFO,rOOMTYPE,iMAGE,im,rOOMAREA,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,tESTTASKID,tASKNAME',onInit:'bizActivity2.grid1_8Init',type:'grid',smartRender:20,delay:false,ids:'rOOMCNAME,rOOMTYPECNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,pROJECTNAME,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,space-column',headNames:'房间名称,房间类型,应用检测对象类型,检测对象,应用检测方面类型,项目名称,计划占用起始日期时间,计划占用结束日期时间,&nbsp;',widths:'126,118,138,124,123,187,138,139,*',types:'ed,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'left,left,left,left,left,left,left,left,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'rOOMCNAME','true');this.grid.bindColReadonly(null,'rOOMTYPECNAME','true');this.grid.bindColReadonly(null,'dETECTIONOBJECTCNAME','true');this.grid.bindColReadonly(null,'dEVICETYPECNAME','true');this.grid.bindColReadonly(null,'dETECTIONRANGECNAME','true');this.grid.bindColFormat(null,'oCCUPYSTARTDATETIME','yyyy-MM-dd');this.grid.bindColReadonly(null,'oCCUPYSTARTDATETIME','true');this.grid.bindColFormat(null,'oCCUPYENDDATETIME','yyyy-MM-dd');this.grid.bindColReadonly(null,'oCCUPYENDDATETIME','true');}});	
}	
function load_view1_8_xblinit(){if (justep("view1_8").getAttribute('xblloaded') && justep("view1_8").getAttribute('xblloaded') == 'true') return;justep("view1_8").setAttribute('xblloaded', 'true');	
}	
function load_view2_1(){if (justep("view2_1").getAttribute('loaded') && justep("view2_1").getAttribute('loaded') == 'true') return;justep("view2_1").setAttribute('loaded', 'true');	
if(typeof(load_view2_1_html) == 'function')load_view2_1_html();	
new xforms.XFExtSelect({id:'queryHrS1',type:'gridselect1',defaultLabelRef:xf._q("'请选择检测对象类型'"),allSelectedLabelRef:null,ref:xf._q("data('tempData')/val"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'oData',columns:'dETECTIONOBJECTCNAME,DETECTION_OBJECT_TYPE,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_trigger_trigger1_2=new xforms.XFTrigger('trigger1_2',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity2.trigger1_2Click(event)}));xf._p(justep('trigger1_2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_2,'trigger1_2', evt,false)});	
var xf_trigger_trigger1_4=new xforms.XFTrigger('trigger1_4',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity2.trigger1_4Click(event)}));xf._p(justep('trigger1_4'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_4,'trigger1_4', evt,false)});	
new xforms.XFGrid({id:'grid1_4',instance:'pData',systemColumnsPro:null,onInit:null,type:'grid',smartRender:20,delay:false,ids:'oPERATORNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,pROJECTNAME,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,oPERATORSTATE,space-column',headNames:'姓名,应用检测对象类型,检测对象,应用检测方面类型,项目名称,计划占用起始日期时间,计划占用结束日期时间,状态,&nbsp;',widths:'100,115,105,114,201,163,162,100,*',types:'ed,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'left,left,left,left,left,left,left,left,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'oPERATORNAME','true');this.grid.bindColReadonly(null,'dETECTIONOBJECTCNAME','true');this.grid.bindColReadonly(null,'dEVICETYPECNAME','true');this.grid.bindColReadonly(null,'dETECTIONRANGECNAME','true');this.grid.bindColReadonly(null,'pROJECTNAME','true');this.grid.bindColFormat(null,'oCCUPYSTARTDATETIME','yyyy-MM-dd');this.grid.bindColReadonly(null,'oCCUPYSTARTDATETIME','true');this.grid.bindColFormat(null,'oCCUPYENDDATETIME','yyyy-MM-dd');this.grid.bindColReadonly(null,'oPERATORSTATE','true');}});	
}	
function load_view2_1_xblinit(){if (justep("view2_1").getAttribute('xblloaded') && justep("view2_1").getAttribute('xblloaded') == 'true') return;justep("view2_1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
