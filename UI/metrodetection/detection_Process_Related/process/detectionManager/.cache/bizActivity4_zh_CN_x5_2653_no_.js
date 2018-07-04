
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
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'e2e73db5d37efc68f8d5ac7cfc4c19c2'};
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
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'c8fbf107211575fedda71c113e706ac8'};
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
_xbl_JSClassDefine_dialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_dialog',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'afd5f02bedc03a22395b1631430a96bf'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'a4fa2d2c5881041b38504a85e2b3e6e0'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'5c422ce63482b5fb696b1c03b549aad5'};
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
_xbl_JSClassDefine_process.prototype.__code__={v:{name:'_xbl_JSClassDefine_process',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'4435f3485005800889fa471d34b50a83'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'b0c9c69b6b42d87c307033a61d44b09e'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'404a7502d673166a565ba5c667243e46'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'fef747a9f166c2d6e7df8b687fc3544a'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'8e26c8788bcf221bf90de981343c3a85'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'2e389c9fff4e8bc14d33c85352776470',time:1528099123},m:'e39aa316821e28361549a8c7928f61d0'};
	var ids=[{id:'5fede0f1583f49e09385778d8fad1ab7', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'flw', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'flw_processControlDialog', name:'xforms:dialog'},{id:'flw_processChartDialogID', name:'xforms:dialog'},{id:'flw_processConfirmDialog', name:'xforms:dialog', children:[{id:'f17d3610f7a04baa97ffaa48206fbfa0', name:'xforms:trigger', children:[{id:'6c6e652621974ae1934dbbd32f6ee992', name:'xforms:label'}]},{id:'952d72b04746470db8ec4ba063a0a37f', name:'xforms:trigger', children:[{id:'7505c73377f44cda85c5069289871175', name:'xforms:label'}]}]},{id:'flw_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'toolbars2_7', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'tabPanel4_9', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'gridSelect1_22', name:'xforms:gridselect1', children:[{id:'xuiLabel1_22', name:'xforms:label'},{id:'default1_22', name:'xforms:value'}]},{id:'gridSelect2_22', name:'xforms:gridselect1', children:[{id:'xuiLabel2_22', name:'xforms:label'},{id:'default3_22', name:'xforms:value'}]},{id:'pRODUCTNAME', name:'xforms:input'},{id:'gridSelect3_22', name:'xforms:gridselect1', children:[{id:'xuiLabel3_22', name:'xforms:label'},{id:'default5_22', name:'xforms:value'}]},{id:'gridSelect4_22', name:'xforms:gridselect1', children:[{id:'xuiLabel4_22', name:'xforms:label'},{id:'default7_22', name:'xforms:value'}]},{id:'gridSelect5_22', name:'xforms:gridselect1', children:[{id:'xuiLabel5_22', name:'xforms:label'},{id:'default9_22', name:'xforms:value'}]},{id:'lINEID', name:'xforms:input'},{id:'dECTIONBASEDONNAME', name:'xforms:input'},{id:'aPPLICATIONDATE', name:'xforms:input'},{id:'eXPECTENDINGDATE', name:'xforms:input'},{id:'tESTINGREQUIREMENTS', name:'xforms:input'},{id:'pROJECTNAME', name:'xforms:input'},{id:'cONTACTPERSON', name:'xforms:input'},{id:'cONTACTMOBILE', name:'xforms:input'},{id:'cONTACTTELEPHONE', name:'xforms:input'},{id:'cONTACTEMAIL', name:'xforms:input'},{id:'gridSelect1_24', name:'xforms:gridselect1', children:[{id:'xuiLabel1_24', name:'xforms:label'},{id:'default1_24', name:'xforms:value'}]},{id:'pROJECTDATE', name:'xforms:input'},{id:'eNDINGDATE', name:'xforms:input'},{id:'mAKEDATE', name:'xforms:input'},{id:'gridSelect4_24', name:'xforms:gridselect1', children:[{id:'xuiLabel4_24', name:'xforms:label'},{id:'default13_24', name:'xforms:value'}]},{id:'gridSelect5_24', name:'xforms:gridselect1', children:[{id:'xuiLabel5_24', name:'xforms:label'},{id:'default23_24', name:'xforms:value'}]},{id:'gridSelect3_24', name:'xforms:gridselect1', children:[{id:'xuiLabel3_24', name:'xforms:label'},{id:'default11_24', name:'xforms:value'}]},{id:'gridSelect2_24', name:'xforms:gridselect1', children:[{id:'xuiLabel2_24', name:'xforms:label'},{id:'default3_24', name:'xforms:value'}]},{id:'input1_3', name:'xforms:input'},{id:'gridSelect2_3', name:'xforms:gridselect1', children:[{id:'default4_3', name:'xforms:label'},{id:'default12_3', name:'xforms:value'}]},{id:'gridSelect3_3', name:'xforms:gridselect1', children:[{id:'default14_3', name:'xforms:label'},{id:'default15_3', name:'xforms:value'}]},{id:'gridSelect4_3', name:'xforms:gridselect1', children:[{id:'default23_3', name:'xforms:label'},{id:'default24_3', name:'xforms:value'}]},{id:'textarea1_24', name:'xforms:textarea'}]},{id:'radio1_1', name:'xforms:select1', children:[{id:'selectItem1_1', name:'xforms:item', children:[{id:'xuiLabel2_1', name:'xforms:label'},{id:'default9_1', name:'xforms:value'}]},{id:'selectItem2_1', name:'xforms:item', children:[{id:'xuiLabel3_1', name:'xforms:label'},{id:'default10_1', name:'xforms:value'}]},{id:'selectItem1_5', name:'xforms:item', children:[{id:'default4_5', name:'xforms:label'},{id:'default5_5', name:'xforms:value'}]},{id:'selectItem2_5', name:'xforms:item', children:[{id:'default6_5', name:'xforms:label'},{id:'default7_5', name:'xforms:value'}]}]},{id:'triggerOut', name:'xforms:trigger', children:[{id:'default28_1', name:'xforms:label'}]},{id:'triggerinput', name:'xforms:trigger', children:[{id:'default32_1', name:'xforms:label'}]},{id:'grid13_2', name:'xforms:grid'},{id:'trigger9_1', name:'xforms:trigger', children:[{id:'xuiLabel10_1', name:'xforms:label'}]},{id:'radio2_1', name:'xforms:select1', children:[{id:'selectItem3_0', name:'xforms:item', children:[{id:'xuiLabel4_0', name:'xforms:label'},{id:'default13_0', name:'xforms:value'}]},{id:'selectItem3_1', name:'xforms:item', children:[{id:'xuiLabel4_1', name:'xforms:label'},{id:'default13_1', name:'xforms:value'}]},{id:'selectItem4_1', name:'xforms:item', children:[{id:'xuiLabel5_1', name:'xforms:label'},{id:'default14_1', name:'xforms:value'}]},{id:'selectItem5_1', name:'xforms:item', children:[{id:'xuiLabel6_1', name:'xforms:label'},{id:'default15_1', name:'xforms:value'}]}]},{id:'grid2_2', name:'xforms:grid'},{id:'trigger2_2', name:'xforms:trigger', children:[{id:'default25_2', name:'xforms:label'}]},{id:'trigger3_2', name:'xforms:trigger', children:[{id:'default26_2', name:'xforms:label'}]},{id:'trigger4_2', name:'xforms:trigger', children:[{id:'default27_2', name:'xforms:label'}]},{id:'toolbars5_2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'7a5bc399061e4561873d02e54161756a', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'roomScheduleDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'deviceScheduleDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'toolScheduleDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'grid1_10', name:'xforms:grid'}]},{id:'windowDialog2', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'hrselect', name:'xforms:gridselect1', children:[{id:'xuiLabel5_3', name:'xforms:label'},{id:'default10_3', name:'xforms:value'}]},{id:'treeSelect1_2', name:'xforms:treeselect1', children:[{id:'default17_2', name:'xforms:label'},{id:'default18_2', name:'xforms:value'}]},{id:'gridSelect1_3', name:'xforms:gridselect1', children:[{id:'default1_3', name:'xforms:label'},{id:'default2_3', name:'xforms:value'}]},{id:'gridSelect1_1', name:'xforms:gridselect1', children:[{id:'default12_1', name:'xforms:label'},{id:'default16_1', name:'xforms:value'}]},{id:'filter-pattern-e379add7-e24c-4f3d-8716-0512263a1a6c', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'f7ec249d7e564a3fa66064cc9afd303f', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_961228752', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1499247093', name:'xforms:dialog'}]},{id:'filter-dialog-5cbac6c6-aede-4625-a1bc-a3e1f5431bf7', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1908884289', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='2e389c9fff4e8bc14d33c85352776470';
xforms.Core.fileName='form.js';	
xf._a(null,'f17d3610f7a04baa97ffaa48206fbfa0');xf._a('f17d3610f7a04baa97ffaa48206fbfa0','6c6e652621974ae1934dbbd32f6ee992');xf._a(null,'952d72b04746470db8ec4ba063a0a37f');xf._a('952d72b04746470db8ec4ba063a0a37f','7505c73377f44cda85c5069289871175');xf._a(null,'gridSelect1_22');xf._a('gridSelect1_22','xuiLabel1_22');xf._a('gridSelect1_22','default2_22');xf._a(null,'gridSelect2_22');xf._a('gridSelect2_22','xuiLabel2_22');xf._a('gridSelect2_22','default4_22');xf._a(null,'pRODUCTNAME');xf._a(null,'gridSelect3_22');xf._a('gridSelect3_22','xuiLabel3_22');xf._a('gridSelect3_22','default6_22');xf._a(null,'gridSelect4_22');xf._a('gridSelect4_22','xuiLabel4_22');xf._a('gridSelect4_22','default8_22');xf._a(null,'gridSelect5_22');xf._a('gridSelect5_22','xuiLabel5_22');xf._a('gridSelect5_22','default10_22');xf._a(null,'lINEID');xf._a(null,'dECTIONBASEDONNAME');xf._a(null,'aPPLICATIONDATE');xf._a(null,'eXPECTENDINGDATE');xf._a(null,'tESTINGREQUIREMENTS');xf._a(null,'pROJECTNAME');xf._a(null,'cONTACTPERSON');xf._a(null,'cONTACTMOBILE');xf._a(null,'cONTACTTELEPHONE');xf._a(null,'cONTACTEMAIL');xf._a(null,'gridSelect1_24');xf._a('gridSelect1_24','xuiLabel1_24');xf._a('gridSelect1_24','default2_24');xf._a(null,'pROJECTDATE');xf._a(null,'eNDINGDATE');xf._a(null,'mAKEDATE');xf._a(null,'gridSelect4_24');xf._a('gridSelect4_24','xuiLabel4_24');xf._a('gridSelect4_24','default14_24');xf._a(null,'gridSelect5_24');xf._a('gridSelect5_24','xuiLabel5_24');xf._a('gridSelect5_24','default24_24');xf._a(null,'gridSelect3_24');xf._a('gridSelect3_24','xuiLabel3_24');xf._a('gridSelect3_24','default12_24');xf._a(null,'gridSelect2_24');xf._a('gridSelect2_24','xuiLabel2_24');xf._a('gridSelect2_24','default4_24');xf._a(null,'input1_3');xf._a(null,'gridSelect2_3');xf._a('gridSelect2_3','default4_3');xf._a('gridSelect2_3','default13_3');xf._a(null,'gridSelect3_3');xf._a('gridSelect3_3','default14_3');xf._a('gridSelect3_3','default16_3');xf._a(null,'gridSelect4_3');xf._a('gridSelect4_3','default23_3');xf._a('gridSelect4_3','default25_3');xf._a(null,'textarea1_24');xf._a(null,'radio1_1');xf._a('radio1_1','selectItem1_1');xf._a('selectItem1_1','xuiLabel2_1');xf._a('radio1_1','selectItem2_1');xf._a('selectItem2_1','xuiLabel3_1');xf._a('radio1_1','selectItem1_5');xf._a('selectItem1_5','default4_5');xf._a('radio1_1','selectItem2_5');xf._a('selectItem2_5','default6_5');xf._a(null,'triggerOut');xf._a('triggerOut','default28_1');xf._a(null,'triggerinput');xf._a('triggerinput','default32_1');xf._a(null,'grid13_2');xf._a(null,'trigger9_1');xf._a('trigger9_1','xuiLabel10_1');xf._a(null,'radio2_1');xf._a('radio2_1','selectItem3_0');xf._a('selectItem3_0','xuiLabel4_0');xf._a('radio2_1','selectItem3_1');xf._a('selectItem3_1','xuiLabel4_1');xf._a('radio2_1','selectItem4_1');xf._a('selectItem4_1','xuiLabel5_1');xf._a('radio2_1','selectItem5_1');xf._a('selectItem5_1','xuiLabel6_1');xf._a(null,'grid2_2');xf._a(null,'trigger2_2');xf._a('trigger2_2','default25_2');xf._a(null,'trigger3_2');xf._a('trigger3_2','default26_2');xf._a(null,'trigger4_2');xf._a('trigger4_2','default27_2');xf._a(null,'grid1_10');xf._a(null,'hrselect');xf._a('hrselect','xuiLabel5_3');xf._a('hrselect','default11_3');xf._a(null,'treeSelect1_2');xf._a('treeSelect1_2','default17_2');xf._a('treeSelect1_2','default19_2');xf._a(null,'gridSelect1_3');xf._a('gridSelect1_3','default1_3');xf._a('gridSelect1_3','default3_3');xf._a(null,'gridSelect1_1');xf._a('gridSelect1_1','default12_1');xf._a('gridSelect1_1','default17_1');function init() {	
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
xf._b("instance('testProjectTask')/pROJECTID",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('testProjectTask')/tASKTYPE",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','tASKTYPE')))));	
xf._b("instance('testProjectTask')/tASKID",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('testProjectTask')/pLANSTARTDATE",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','pLANSTARTDATE')))));	
xf._b("instance('testProjectTask')/pLANENDINGDATE",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','pLANENDINGDATE')))));	
xf._b("instance('testProjectTask')/tESTTASKREASON",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','tESTTASKREASON')))));	
xf._b("instance('testProjectTask')/aCTUALSTARTDATE",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','aCTUALSTARTDATE')))));	
xf._b("instance('testProjectTask')/aCTUALENDINGDATE",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','aCTUALENDINGDATE')))));	
xf._b("instance('testProjectTask')/tASKEXECUTE",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','tASKEXECUTE')))));	
xf._b("instance('testProjectTask')/TEST_TASK_REASON_CODE",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','TEST_TASK_REASON_CODE')))));	
xf._b("instance('testProjectTask')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("testProjectTask")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('vData')/sTARTTIME",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','sTARTTIME')))));	
xf._b("data('vData')/fPARENTID='' or data('vData')/fPARENTID!='root'",xf._l(xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '=',xf._i("")), 'or',xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '!=',xf._i("root"))));	
xf._b("instance('vData')/eNDTIME",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','eNDTIME')))));	
xf._b("data('vData')/fPARENTID='' or data('vData')/fPARENTID='root'",xf._l(xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '=',xf._i("")), 'or',xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '=',xf._i("root"))));	
xf._b("instance('vData')/qZRW",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','qZRW')))));	
xf._b("data('vData')/fPARENTID='' or data('vData')/fPARENTID !='root'",xf._l(xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '=',xf._i("")), 'or',xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '!=',xf._i("root"))));	
xf._b("instance('vData')/oPERATORNAME",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME')))));	
xf._b("data('vData')/fPARENTID='' or data('vData')/fPARENTID != 'root'",xf._l(xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '=',xf._i("")), 'or',xf._l(xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','fPARENTID')))), '!=',xf._i("root"))));	
xf._b("instance('vData')/sHIJIAN",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','sHIJIAN')))));	
xf._b("instance('vData')/cASEVERSION",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','cASEVERSION')))));	
xf._b("instance('vData')/tASKID",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('vData')/tESTCASEVER",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('vData')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('hrData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('hrData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('hrData')/oFFICEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('hrData')/pOSITIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('hrData')/dEGREEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('hrData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('hrData')/pOLITICALID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('hrData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('hrData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('roomData')/rOOMTYPE",xf._g(xf._f('instance',xf._i("roomData")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("instance('roomData')/MANUFACTURE_ID",xf._g(xf._f('instance',xf._i("roomData")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("instance('roomData')/IS_DELEGATE",xf._g(xf._f('instance',xf._i("roomData")),xf._h(false, xf._k("child",xf._j('','IS_DELEGATE')))));	
xf._b("instance('toolData')/tOOLTYPEID",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','tOOLTYPEID')))));	
xf._b("instance('toolData')/uSESTATECODE",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','uSESTATECODE')))));	
xf._b("instance('toolData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('toolData')/tOOLRESOURCE",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','tOOLRESOURCE')))));	
xf._b("instance('toolData')/iNDATE",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','iNDATE')))));	
xf._b("instance('toolData')/iNPRICE",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','iNPRICE')))));	
xf._b("instance('toolData')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("instance('toolData')/rECIVESTATE",xf._g(xf._f('instance',xf._i("toolData")),xf._h(false, xf._k("child",xf._j('','rECIVESTATE')))));	
xf._b("instance('testSchemeData')/bUSINESSID",xf._g(xf._f('instance',xf._i("testSchemeData")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('testSchemeData')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("testSchemeData")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("instance('testSchemeData')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("testSchemeData")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("instance('testSchemeData')/vALIDSTATE",xf._g(xf._f('instance',xf._i("testSchemeData")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("instance('testSchemeData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("testSchemeData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('pData')/pROJECTNAME",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','pROJECTNAME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'项目名称不能为空!'",xf._i("项目名称不能为空!"));	
xf._b("instance('pData')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('pData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('pData')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('pData')/cONTACTPERSON",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cONTACTPERSON')))));	
xf._b("'联系人不能为空!'",xf._i("联系人不能为空!"));	
xf._b("instance('pData')/cONTACTMOBILE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE')))));	
xf._b("'联系手机不能为空!'",xf._i("联系手机不能为空!"));	
xf._b("instance('pData')/cONTACTTELEPHONE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("instance('pData')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('pData')/lINEID",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('pData')/bUSINESSID",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('pData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('pData')/pROJECTDATE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('pData')/pROJECTMANAGER",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','pROJECTMANAGER')))));	
xf._b("instance('pData')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('pData')/mAKEDATE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('pData')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('pData')/qAMANAGER",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','qAMANAGER')))));	
xf._b("'质量负责人不能为空!'",xf._i("质量负责人不能为空!"));	
xf._b("instance('pData')/tESTMANAGER",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','tESTMANAGER')))));	
xf._b("'检测负责人不能为空!'",xf._i("检测负责人不能为空!"));	
xf._b("instance('pData')/tECHMANAGER",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','tECHMANAGER')))));	
xf._b("'技术负责人不能为空!'",xf._i("技术负责人不能为空!"));	
xf._b("instance('pData')/eNDINGDATE",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("'结项日期不能为空!'",xf._i("结项日期不能为空!"));	
xf._b("instance('pData')/afc",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','afc')))));	
xf._b("instance('pData')/afc1",xf._g(xf._f('instance',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','afc1')))));	
xf._b("instance('personData')/uSERTYPE",xf._g(xf._f('instance',xf._i("personData")),xf._h(false, xf._k("child",xf._j('','uSERTYPE')))));	
xf._b("instance('personData')/vALIDENDDATE",xf._g(xf._f('instance',xf._i("personData")),xf._h(false, xf._k("child",xf._j('','vALIDENDDATE')))));	
xf._b("instance('projectMember')/pROJECTMEMBERROLE",xf._g(xf._f('instance',xf._i("projectMember")),xf._h(false, xf._k("child",xf._j('','pROJECTMEMBERROLE')))));	
xf._b("instance('projectMember')/aPPLICATION_NO",xf._g(xf._f('instance',xf._i("projectMember")),xf._h(false, xf._k("child",xf._j('','aPPLICATION_NO')))));	
xf._b("instance('taskData')/pROJECTID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('taskData')/tASKTYPE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tASKTYPE')))));	
xf._b("instance('taskData')/tASKID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('taskData')/pLANSTARTDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','pLANSTARTDATE')))));	
xf._b("instance('taskData')/pLANENDINGDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','pLANENDINGDATE')))));	
xf._b("instance('taskData')/tESTTASKREASON",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tESTTASKREASON')))));	
xf._b("instance('taskData')/aCTUALSTARTDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','aCTUALSTARTDATE')))));	
xf._b("instance('taskData')/aCTUALENDINGDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','aCTUALENDINGDATE')))));	
xf._b("instance('taskData')/tASKEXECUTE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tASKEXECUTE')))));	
xf._b("instance('taskData')/tASKCHECK",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tASKCHECK')))));	
xf._b("instance('taskData')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('taskData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('taskData')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('taskData')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('taskData')/lINEID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('taskData')/bUSINESSID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('taskData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('taskData')/pROJECTDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('taskData')/eNDINGDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('taskData')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('taskData')/mAKEDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('taskData')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('taskData')/uSERTYPE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','uSERTYPE')))));	
xf._b("instance('taskData')/vALIDENDDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','vALIDENDDATE')))));	
xf._b("instance('taskData')/rOOMID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','rOOMID')))));	
xf._b("instance('taskData')/tESTTASKID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tESTTASKID')))));	
xf._b("instance('taskData')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('taskData')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('taskData')/rOOMUSED",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','rOOMUSED')))));	
xf._b("instance('taskData')/version",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('taskData')/ri",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','ri')))));	
xf._b("instance('taskData')/rOOMTYPE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("instance('taskData')/MANUFACTURE_ID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("instance('taskData')/IS_DELEGATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','IS_DELEGATE')))));	
xf._b("instance('taskData')/tOOLNO1",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tOOLNO1')))));	
xf._b("instance('taskData')/tOOLUSED",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tOOLUSED')))));	
xf._b("instance('taskData')/ti",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','ti')))));	
xf._b("instance('taskData')/tOOLTYPEID",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tOOLTYPEID')))));	
xf._b("instance('taskData')/uSESTATECODE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','uSESTATECODE')))));	
xf._b("instance('taskData')/tOOLRESOURCE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tOOLRESOURCE')))));	
xf._b("instance('taskData')/iNDATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','iNDATE')))));	
xf._b("instance('taskData')/iNPRICE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','iNPRICE')))));	
xf._b("instance('taskData')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("instance('taskData')/rECIVESTATE",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','rECIVESTATE')))));	
xf._b("instance('taskData')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('areaData')/ROOMID",xf._g(xf._f('instance',xf._i("areaData")),xf._h(false, xf._k("child",xf._j('','ROOMID')))));	
xf._b("instance('sampleDeviceData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('sampleDeviceData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('sampleDeviceData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('sampleDeviceData')/dECTIONTYPE",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','dECTIONTYPE')))));	
xf._b("instance('sampleDeviceData')/sOFTWAREVERSION",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','sOFTWAREVERSION')))));	
xf._b("instance('sampleDeviceData')/hARDWAREVERSION",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','hARDWAREVERSION')))));	
xf._b("instance('sampleDeviceData')/dEADLINERECEIVEDATE",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','dEADLINERECEIVEDATE')))));	
xf._b("instance('sampleDeviceData')/iNDEEDRECEIVEDATE",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE')))));	
xf._b("instance('sampleDeviceData')/rETURNDATE",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("instance('sampleDeviceData')/iNDEEDRETURNDATE",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE')))));	
xf._b("instance('sampleDeviceData')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("instance('sampleDeviceData')/rECIVESTATE",xf._g(xf._f('instance',xf._i("sampleDeviceData")),xf._h(false, xf._k("child",xf._j('','rECIVESTATE')))));	
xf._b("instance('caseHouseData')/FSTIME",xf._g(xf._f('instance',xf._i("caseHouseData")),xf._h(false, xf._k("child",xf._j('','FSTIME')))));	
xf._b("instance('caseHouseData')/FETIME",xf._g(xf._f('instance',xf._i("caseHouseData")),xf._h(false, xf._k("child",xf._j('','FETIME')))));	
xf._b("instance('caseHouseData')/SCHEMEID",xf._g(xf._f('instance',xf._i("caseHouseData")),xf._h(false, xf._k("child",xf._j('','SCHEMEID')))));	
xf._b("instance('caseHouseData')/TASKID",xf._g(xf._f('instance',xf._i("caseHouseData")),xf._h(false, xf._k("child",xf._j('','TASKID')))));	
xf._b("instance('projectMemberData')/aPPLICATION_NO",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','aPPLICATION_NO')))));	
xf._b("instance('projectMemberData')/pOSITIONID",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('projectMemberData')/aCTUALSTARTDATE",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','aCTUALSTARTDATE')))));	
xf._b("instance('projectMemberData')/aCTUALENDINGDATE",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','aCTUALENDINGDATE')))));	
xf._b("instance('projectMemberData')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('projectMemberData')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("projectMemberData")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
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
xf._b("APP_DOC_ID",xf._h(false, xf._k("child",xf._j('','APP_DOC_ID'))));	
xf._b("APP_DOC_NO",xf._h(false, xf._k("child",xf._j('','APP_DOC_NO'))));	
xf._b("aSSIGNEDMANUFACTUREID",xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID'))));	
xf._b("pRODUCTMANUFACTUREID",xf._h(false, xf._k("child",xf._j('','pRODUCTMANUFACTUREID'))));	
xf._b("pRODUCTNAME",xf._h(false, xf._k("child",xf._j('','pRODUCTNAME'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("bUSINESSID",xf._h(false, xf._k("child",xf._j('','bUSINESSID'))));	
xf._b("lINEID",xf._h(false, xf._k("child",xf._j('','lINEID'))));	
xf._b("dECTIONBASEDONNAME",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME'))));	
xf._b("cONTACTPERSON",xf._h(false, xf._k("child",xf._j('','cONTACTPERSON'))));	
xf._b("cONTACTADDRESS",xf._h(false, xf._k("child",xf._j('','cONTACTADDRESS'))));	
xf._b("cONTACTPOSTCODE",xf._h(false, xf._k("child",xf._j('','cONTACTPOSTCODE'))));	
xf._b("cONTACTFAXNUMBER",xf._h(false, xf._k("child",xf._j('','cONTACTFAXNUMBER'))));	
xf._b("aPPLICATIONDATE",xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE'))));	
xf._b("eXPECTENDINGDATE",xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE'))));	
xf._b("pRODUCTSTYLE",xf._h(false, xf._k("child",xf._j('','pRODUCTSTYLE'))));	
xf._b("cOMPANYTYPE",xf._h(false, xf._k("child",xf._j('','cOMPANYTYPE'))));	
xf._b("aPPLICATIONFIELDS",xf._h(false, xf._k("child",xf._j('','aPPLICATIONFIELDS'))));	
xf._b("dEVELOPMENTTOOLS",xf._h(false, xf._k("child",xf._j('','dEVELOPMENTTOOLS'))));	
xf._b("cOMPILERENVIRONMENT",xf._h(false, xf._k("child",xf._j('','cOMPILERENVIRONMENT'))));	
xf._b("pRODUCTCONFIGURATION",xf._h(false, xf._k("child",xf._j('','pRODUCTCONFIGURATION'))));	
xf._b("fEATURESANDMODELS",xf._h(false, xf._k("child",xf._j('','fEATURESANDMODELS'))));	
xf._b("tESTINGREQUIREMENTS",xf._h(false, xf._k("child",xf._j('','tESTINGREQUIREMENTS'))));	
xf._b("oPERATORID",xf._h(false, xf._k("child",xf._j('','oPERATORID'))));	
xf._b("mNITLTELEPHONE",xf._h(false, xf._k("child",xf._j('','mNITLTELEPHONE'))));	
xf._b("mNITLFAXNUMBER",xf._h(false, xf._k("child",xf._j('','mNITLFAXNUMBER'))));	
xf._b("mNITLMOBILE",xf._h(false, xf._k("child",xf._j('','mNITLMOBILE'))));	
xf._b("mNITLEMAIL",xf._h(false, xf._k("child",xf._j('','mNITLEMAIL'))));	
xf._b("mNITLADDRESS",xf._h(false, xf._k("child",xf._j('','mNITLADDRESS'))));	
xf._b("mNITLPOSTCODE",xf._h(false, xf._k("child",xf._j('','mNITLPOSTCODE'))));	
xf._b("rECEIPTER",xf._h(false, xf._k("child",xf._j('','rECEIPTER'))));	
xf._b("rECEIPTDATE",xf._h(false, xf._k("child",xf._j('','rECEIPTDATE'))));	
xf._b("COMPANY_PROMISE",xf._h(false, xf._k("child",xf._j('','COMPANY_PROMISE'))));	
xf._b("iNSTALLREQUIRE",xf._h(false, xf._k("child",xf._j('','iNSTALLREQUIRE'))));	
xf._b("pROCESSUNIT",xf._h(false, xf._k("child",xf._j('','pROCESSUNIT'))));	
xf._b("wtName",xf._h(false, xf._k("child",xf._j('','wtName'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("receipterName",xf._h(false, xf._k("child",xf._j('','receipterName'))));	
xf._b("data('dataMain')/pRODUCTNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('dataMain')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("data('dataMain')/dEVICETYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("DEVICE_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','DEVICE_TYPE_CODE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('dataMain')/bUSINESSIDCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME')))));	
xf._b("data('dataMain')/bUSINESSID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("BUSINESS_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE'))));	
xf._b("bUSINESSIDENAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDENAME'))));	
xf._b("data('dataMain')/lINEID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("data('dataMain')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("data('dataMain')/aPPLICATIONDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))));	
xf._b("data('dataMain')/eXPECTENDINGDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("data('dataMain')/tESTINGREQUIREMENTS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tESTINGREQUIREMENTS')))));	
xf._b("data('pData')/pROJECTNAME",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','pROJECTNAME')))));	
xf._b("data('pData')/cONTACTPERSON",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cONTACTPERSON')))));	
xf._b("data('pData')/cONTACTMOBILE",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE')))));	
xf._b("data('pData')/cONTACTTELEPHONE",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("data('pData')/cONTACTEMAIL",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL')))));	
xf._b("data('pData')/cname2",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cname2')))));	
xf._b("data('pData')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("data('pData')/pROJECTDATE",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("data('pData')/eNDINGDATE",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("data('pData')/mAKEDATE",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("data('pData')/bUSINESSID",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("data('pData')/tESTSCHEMEID",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("tESTSCHEMENAME",xf._h(false, xf._k("child",xf._j('','tESTSCHEMENAME'))));	
xf._b("TEST_SCHEME_BASE_INFO",xf._h(false, xf._k("child",xf._j('','TEST_SCHEME_BASE_INFO'))));	
xf._b("tESTSCHEMEDESC",xf._h(false, xf._k("child",xf._j('','tESTSCHEMEDESC'))));	
xf._b("dECTIONBASEDONID",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID'))));	
xf._b("mAKEDATETIME",xf._h(false, xf._k("child",xf._j('','mAKEDATETIME'))));	
xf._b("vALIDSTATE",xf._h(false, xf._k("child",xf._j('','vALIDSTATE'))));	
xf._b("aPPLICATIONNO",xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO'))));	
xf._b("data('pData')/nOTIFYTYPE",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("nOTIFYTYPECNAME",xf._h(false, xf._k("child",xf._j('','nOTIFYTYPECNAME'))));	
xf._b("NOTIFY_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','NOTIFY_TYPE_CODE'))));	
xf._b("nOTIFYTYPEENAME",xf._h(false, xf._k("child",xf._j('','nOTIFYTYPEENAME'))));	
xf._b("data('pData')/cname1",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','cname1')))));	
xf._b("data('pData')/mANUFACTUREID",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("data('pData')/lINEID",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("data('pData')/name1",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','name1')))));	
xf._b("data('pData')/qAMANAGER",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','qAMANAGER')))));	
xf._b("pROJECTMEMBERID",xf._h(false, xf._k("child",xf._j('','pROJECTMEMBERID'))));	
xf._b("pROJECTMEMBERROLE",xf._h(false, xf._k("child",xf._j('','pROJECTMEMBERROLE'))));	
xf._b("aPPLICATION_NO",xf._h(false, xf._k("child",xf._j('','aPPLICATION_NO'))));	
xf._b("HR_BASE_INFO",xf._h(false, xf._k("child",xf._j('','HR_BASE_INFO'))));	
xf._b("data('pData')/name2",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','name2')))));	
xf._b("data('pData')/tESTMANAGER",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','tESTMANAGER')))));	
xf._b("data('pData')/name3",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','name3')))));	
xf._b("data('pData')/tECHMANAGER",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','tECHMANAGER')))));	
xf._b("data('pData')/mEMO",xf._g(xf._f('data',xf._i("pData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('temp')/name",xf._g(xf._f('data',xf._i("temp")),xf._h(false, xf._k("child",xf._j('','name')))));	
xf._b("calculate0",xf._h(false, xf._k("child",xf._j('','calculate0'))));	
xf._b("tASKID",xf._h(false, xf._k("child",xf._j('','tASKID'))));	
xf._b("tESTCASENAME",xf._h(false, xf._k("child",xf._j('','tESTCASENAME'))));	
xf._b("rANGENAME",xf._h(false, xf._k("child",xf._j('','rANGENAME'))));	
xf._b("dETOBJNAME",xf._h(false, xf._k("child",xf._j('','dETOBJNAME'))));	
xf._b("sHIJIAN",xf._h(false, xf._k("child",xf._j('','sHIJIAN'))));	
xf._b("sTARTTIME",xf._h(false, xf._k("child",xf._j('','sTARTTIME'))));	
xf._b("eNDTIME",xf._h(false, xf._k("child",xf._j('','eNDTIME'))));	
xf._b("qZRW",xf._h(false, xf._k("child",xf._j('','qZRW'))));	
xf._b("pName",xf._h(false, xf._k("child",xf._j('','pName'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('tempoption')/name",xf._g(xf._f('data',xf._i("tempoption")),xf._h(false, xf._k("child",xf._j('','name')))));	
xf._b("tASKNAME",xf._h(false, xf._k("child",xf._j('','tASKNAME'))));	
xf._b("uSERNAME",xf._h(false, xf._k("child",xf._j('','uSERNAME'))));	
xf._b("aCTUALSTARTDATE",xf._h(false, xf._k("child",xf._j('','aCTUALSTARTDATE'))));	
xf._b("aCTUALENDINGDATE",xf._h(false, xf._k("child",xf._j('','aCTUALENDINGDATE'))));	
xf._b("rOOMCNAME",xf._h(false, xf._k("child",xf._j('','rOOMCNAME'))));	
xf._b("tOOLCNAME",xf._h(false, xf._k("child",xf._j('','tOOLCNAME'))));	
xf._b("dEVICEID",xf._h(false, xf._k("child",xf._j('','dEVICEID'))));	
xf._b("pOSITIONIDCNAME",xf._h(false, xf._k("child",xf._j('','pOSITIONIDCNAME'))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("oCCUPYSTARTDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME'))));	
xf._b("oCCUPYENDDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME'))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xf._b("not(call('justep.XData.canDo','pData','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("pData"),xf._i("Save"))));	
xf._b("data('vData')/pName",xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','pName')))));	
xf._b("data('vData')/oPERATORNAME",xf._g(xf._f('data',xf._i("vData")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME')))));	
xf._b("data('taskData')/rOOMCNAME",xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','rOOMCNAME')))));	
xf._b("data('taskData')/rOOMAREA",xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','rOOMAREA')))));	
xf._b("AREA",xf._h(false, xf._k("child",xf._j('','AREA'))));	
xf._b("AREAID",xf._h(false, xf._k("child",xf._j('','AREAID'))));	
xf._b("FID",xf._h(false, xf._k("child",xf._j('','FID'))));	
xf._b("PARENTID",xf._h(false, xf._k("child",xf._j('','PARENTID'))));	
xf._b("ROOMID",xf._h(false, xf._k("child",xf._j('','ROOMID'))));	
xf._b("data('taskData')/tOOLCNAME",xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tOOLCNAME')))));	
xf._b("data('taskData')/tOOLNO1",xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','tOOLNO1')))));	
xf._b("DETECTION_TOOL_INFO",xf._h(false, xf._k("child",xf._j('','DETECTION_TOOL_INFO'))));	
xf._b("tOOLENAME",xf._h(false, xf._k("child",xf._j('','tOOLENAME'))));	
xf._b("tOOLTYPEID",xf._h(false, xf._k("child",xf._j('','tOOLTYPEID'))));	
xf._b("tOOLMODEL",xf._h(false, xf._k("child",xf._j('','tOOLMODEL'))));	
xf._b("tOOLSTANDARDS",xf._h(false, xf._k("child",xf._j('','tOOLSTANDARDS'))));	
xf._b("tOOLID",xf._h(false, xf._k("child",xf._j('','tOOLID'))));	
xf._b("uSESTATECODE",xf._h(false, xf._k("child",xf._j('','uSESTATECODE'))));	
xf._b("tOOLUNIT",xf._h(false, xf._k("child",xf._j('','tOOLUNIT'))));	
xf._b("mANUFACTUREID",xf._h(false, xf._k("child",xf._j('','mANUFACTUREID'))));	
xf._b("tOOLRESOURCE",xf._h(false, xf._k("child",xf._j('','tOOLRESOURCE'))));	
xf._b("iNDATE",xf._h(false, xf._k("child",xf._j('','iNDATE'))));	
xf._b("iNPRICE",xf._h(false, xf._k("child",xf._j('','iNPRICE'))));	
xf._b("sHAREDFLAG",xf._h(false, xf._k("child",xf._j('','sHAREDFLAG'))));	
xf._b("aSSETSORTCODE",xf._h(false, xf._k("child",xf._j('','aSSETSORTCODE'))));	
xf._b("rECIVESTATE",xf._h(false, xf._k("child",xf._j('','rECIVESTATE'))));	
xf._b("data('taskData')/dEVICEID",xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("data('taskData')/sAMPLEDEVICENO",xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("SAMPLE_DEVICE_INFO",xf._h(false, xf._k("child",xf._j('','SAMPLE_DEVICE_INFO'))));	
xf._b("dEVICESTYLE",xf._h(false, xf._k("child",xf._j('','dEVICESTYLE'))));	
xf._b("dECTIONTYPE",xf._h(false, xf._k("child",xf._j('','dECTIONTYPE'))));	
xf._b("sOFTWAREVERSION",xf._h(false, xf._k("child",xf._j('','sOFTWAREVERSION'))));	
xf._b("hARDWAREVERSION",xf._h(false, xf._k("child",xf._j('','hARDWAREVERSION'))));	
xf._b("dEADLINERECEIVEDATE",xf._h(false, xf._k("child",xf._j('','dEADLINERECEIVEDATE'))));	
xf._b("iNDEEDRECEIVEDATE",xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE'))));	
xf._b("rETURNDATE",xf._h(false, xf._k("child",xf._j('','rETURNDATE'))));	
xf._b("iNDEEDRETURNDATE",xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE'))));	
xf._b("not(call('justep.XData.canDo','taskData','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("taskData"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','taskData','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("taskData"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','taskData','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("taskData"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','taskData','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("taskData"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','taskData','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("taskData"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('dateTime', 'null');xforms.Schema.registerPrefix('select', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
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
new xforms.XFInstance2('afcData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('afcData',null);	
xf._c('xf-bind-10','mdDefault',"instance('afcData')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('afcData')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('detObjType','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('detObjType',null);	
new xforms.XFInstance2('businessData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('businessData',null);	
new xforms.XFInstance2('deviceTypeCodeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-12','mdDefault',"instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('deviceTypeCodeData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('testProjectTask','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('testProjectTask',null);	
xf._c('xf-bind-14','mdDefault',"instance('testProjectTask')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('testProjectTask')/tASKTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('testProjectTask')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('testProjectTask')/pLANSTARTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('testProjectTask')/pLANENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('testProjectTask')/tESTTASKREASON","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('testProjectTask')/aCTUALSTARTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('testProjectTask')/aCTUALENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('testProjectTask')/tASKEXECUTE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('testProjectTask')/TEST_TASK_REASON_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('testProjectTask')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('reasonData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('hrData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrData',null);	
xf._c('xf-bind-34','mdDefault',"instance('hrData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('hrData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('hrData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('hrData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('hrData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('hrData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('hrData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('hrData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('hrData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('roomData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-43','mdDefault',"instance('roomData')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('roomData')/MANUFACTURE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('roomData')/IS_DELEGATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('toolData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-46','mdDefault',"instance('toolData')/tOOLTYPEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('toolData')/uSESTATECODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('toolData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('toolData')/tOOLRESOURCE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('toolData')/iNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdDefault',"instance('toolData')/iNPRICE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdDefault',"instance('toolData')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdDefault',"instance('toolData')/rECIVESTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hourData','mdDefault',null,'<rows id="default60_3"><row id="default61_3"><cell id="default62_3"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('hourData','name');	
new xforms.XFInstance2('temp','mdDefault',null,'<rows id="default6_1"><row id="default7_1"><cell id="default8_1"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('temp','name');	
new xforms.XFInstance2('tempoption','mdDefault',null,'<rows id="default1_2"><row id="default2_2"><cell id="default3_2"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('tempoption','name');	
new xforms.XFInstance2('testSchemeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('testSchemeData',null);	
xf._c('xf-bind-54','mdDefault',"instance('testSchemeData')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-55','mdDefault',"instance('testSchemeData')/dECTIONBASEDONID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdDefault',"instance('testSchemeData')/mAKEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdDefault',"instance('testSchemeData')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdDefault',"instance('testSchemeData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('notifyTypeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
var xf_action_action3_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity4.mdDefaultLoad(event)}));xf._p(justep('mdDefault'),"onload",null,function(evt) { xforms.run(xf_action_action3_2,'mdDefault', evt,false)});	
new xforms.XFInstance2('areaData','mdDefault',null,null,null,null,null,null,null,null,null,'房间信息','whereAll');new SimpleStore('areaData',null);	
xf._c('xf-bind-151','mdDefault',"instance('areaData')/ROOMID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('sampleDeviceData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('sampleDeviceData',null);	
xf._c('xf-bind-152','mdDefault',"instance('sampleDeviceData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-153','mdDefault',"instance('sampleDeviceData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-154','mdDefault',"instance('sampleDeviceData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-155','mdDefault',"instance('sampleDeviceData')/dECTIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-156','mdDefault',"instance('sampleDeviceData')/sOFTWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-157','mdDefault',"instance('sampleDeviceData')/hARDWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-158','mdDefault',"instance('sampleDeviceData')/dEADLINERECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-159','mdDefault',"instance('sampleDeviceData')/iNDEEDRECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-160','mdDefault',"instance('sampleDeviceData')/rETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-161','mdDefault',"instance('sampleDeviceData')/iNDEEDRETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-162','mdDefault',"instance('sampleDeviceData')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-163','mdDefault',"instance('sampleDeviceData')/rECIVESTATE","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFExtSelect({id:'hrselect',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('vData')/oPERATORNAME"),labelRef:xf._q("data('vData')/pName"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'projectMember',columns:'oPERATORNAME,__c_,pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',valueColumn:'pROJECTMEMBERID',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'bizActivity4.hrselectCloseup'});	
new xforms.XFExtSelect({id:'treeSelect1_2',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('taskData')/rOOMAREA"),labelRef:xf._q("data('taskData')/rOOMCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'areaData',columns:'AREA,__c_,FID,PARENTID,ROOMID,AREAID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'FID,PARENTID,ROOMID,AREAID',valueColumn:'AREAID',labelColumn:'AREA',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'tree,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect1_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('taskData')/tOOLNO1"),labelRef:xf._q("data('taskData')/tOOLCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'toolData',columns:'DETECTION_TOOL_INFO,tOOLCNAME,__c_,tOOLENAME,tOOLTYPEID,tOOLMODEL,tOOLSTANDARDS,tOOLID,uSESTATECODE,tOOLUNIT,mANUFACTUREID,tOOLRESOURCE,iNDATE,iNPRICE,sHAREDFLAG,mEMO,aSSETSORTCODE,rECIVESTATE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_TOOL_INFO,tOOLENAME,tOOLTYPEID,tOOLMODEL,tOOLSTANDARDS,tOOLID,uSESTATECODE,tOOLUNIT,mANUFACTUREID,tOOLRESOURCE,iNDATE,iNPRICE,sHAREDFLAG,mEMO,aSSETSORTCODE,rECIVESTATE',valueColumn:'DETECTION_TOOL_INFO',labelColumn:'tOOLCNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect1_1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('taskData')/sAMPLEDEVICENO"),labelRef:xf._q("data('taskData')/dEVICEID"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'sampleDeviceData',columns:'SAMPLE_DEVICE_INFO,dEVICEID,__c_,aPPLICATIONNO,mANUFACTUREID,dEVICETYPE,dEVICESTYLE,dECTIONTYPE,sOFTWAREVERSION,hARDWAREVERSION,dEADLINERECEIVEDATE,iNDEEDRECEIVEDATE,rETURNDATE,iNDEEDRETURNDATE,sHAREDFLAG,mEMO,rECIVESTATE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'SAMPLE_DEVICE_INFO,aPPLICATIONNO,mANUFACTUREID,dEVICETYPE,dEVICESTYLE,dECTIONTYPE,sOFTWAREVERSION,hARDWAREVERSION,dEADLINERECEIVEDATE,iNDEEDRECEIVEDATE,rETURNDATE,iNDEEDRETURNDATE,sHAREDFLAG,mEMO,rECIVESTATE',valueColumn:'SAMPLE_DEVICE_INFO',labelColumn:'dEVICEID',extColumn:null,labels:',,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_menu_GLOBAL_ID_961228752 = new xforms.XFMenu('GLOBAL_ID_961228752','context');xf_menu_GLOBAL_ID_961228752.menu.addContextZone('f7ec249d7e564a3fa66064cc9afd303f');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_961228752.hide()});xf_menu_GLOBAL_ID_961228752.menu.setOpenMode('web');	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1499247093");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_961228752'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_961228752', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1499247093',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N199312882');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N199312882", "");}));xf._p(justep('GLOBAL_ID_N1499247093'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_N1499247093', evt,false)});	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N199312882');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1499247093'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_N1499247093', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1908884289',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N880033937');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N880033937", "");}));xf._p(justep('GLOBAL_ID_1908884289'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_1908884289', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var vData_part_loaded = false;	
function load_vData_part(callback){if (vData_part_loaded) return;vData_part_loaded = true;	
new xforms.XFInstance2('vData','mdDefault',null,null,null,null,null,null,null,null,'calculate0',null,'whereAll');new SimpleStore('vData',null);	
xf._c('xf-bind-25','mdDefault',"instance('vData')/sTARTTIME",null,"data('vData')/fPARENTID='' or data('vData')/fPARENTID!='root'",null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('vData')/eNDTIME",null,"data('vData')/fPARENTID='' or data('vData')/fPARENTID='root'",null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('vData')/qZRW",null,"data('vData')/fPARENTID='' or data('vData')/fPARENTID !='root'",null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('vData')/oPERATORNAME",null,"data('vData')/fPARENTID='' or data('vData')/fPARENTID != 'root'",null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('vData')/sHIJIAN","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('vData')/cASEVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('vData')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('vData')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('vData')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var vData_part_init_loaded = false;	
function load_vData_part_init(){if (vData_part_init_loaded) return;vData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var pData_part_loaded = false;	
function load_pData_part(callback){if (pData_part_loaded) return;pData_part_loaded = true;	
new xforms.XFInstance2('pData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('pData',null);	
xf._c('xf-bind-59','mdDefault',"instance('pData')/pROJECTNAME",null,null,"true()",null,null,null,"'项目名称不能为空!'");	
xf._c('xf-bind-60','mdDefault',"instance('pData')/pROJECTTYPE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-61','mdDefault',"instance('pData')/aPPLICATIONNO",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-62','mdDefault',"instance('pData')/aSSIGNEDMANUFACTUREID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-63','mdDefault',"instance('pData')/cONTACTPERSON",null,null,"true()",null,null,null,"'联系人不能为空!'");	
xf._c('xf-bind-64','mdDefault',"instance('pData')/cONTACTMOBILE",null,null,"true()",null,null,null,"'联系手机不能为空!'");	
xf._c('xf-bind-65','mdDefault',"instance('pData')/cONTACTTELEPHONE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-66','mdDefault',"instance('pData')/nOTIFYTYPE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-67','mdDefault',"instance('pData')/lINEID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-68','mdDefault',"instance('pData')/bUSINESSID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-69','mdDefault',"instance('pData')/mANUFACTUREID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-70','mdDefault',"instance('pData')/pROJECTDATE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-71','mdDefault',"instance('pData')/pROJECTMANAGER",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-72','mdDefault',"instance('pData')/tESTSCHEMEID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-73','mdDefault',"instance('pData')/mAKEDATE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-74','mdDefault',"instance('pData')/eXECUTESTATE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-75','mdDefault',"instance('pData')/qAMANAGER",null,null,"true()",null,null,null,"'质量负责人不能为空!'");	
xf._c('xf-bind-76','mdDefault',"instance('pData')/tESTMANAGER",null,null,"true()",null,null,null,"'检测负责人不能为空!'");	
xf._c('xf-bind-77','mdDefault',"instance('pData')/tECHMANAGER",null,null,"true()",null,null,null,"'技术负责人不能为空!'");	
xf._c('xf-bind-78','mdDefault',"instance('pData')/eNDINGDATE",null,null,"true()",null,null,null,"'结项日期不能为空!'");	
xf._c('xf-bind-79','mdDefault',"instance('pData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-80','mdDefault',"instance('pData')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-81','mdDefault',"instance('pData')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-82','mdDefault',"instance('pData')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-83','mdDefault',"instance('pData')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-84','mdDefault',"instance('pData')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-85','mdDefault',"instance('pData')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-86','mdDefault',"instance('pData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-87','mdDefault',"instance('pData')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-88','mdDefault',"instance('pData')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-89','mdDefault',"instance('pData')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-90','mdDefault',"instance('pData')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-91','mdDefault',"instance('pData')/afc","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-92','mdDefault',"instance('pData')/afc1","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var pData_part_init_loaded = false;	
function load_pData_part_init(){if (pData_part_init_loaded) return;pData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var personData_part_loaded = false;	
function load_personData_part(callback){if (personData_part_loaded) return;personData_part_loaded = true;	
new xforms.XFInstance2('personData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('personData',null);	
xf._c('xf-bind-93','mdDefault',"instance('personData')/uSERTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-94','mdDefault',"instance('personData')/vALIDENDDATE","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var personData_part_init_loaded = false;	
function load_personData_part_init(){if (personData_part_init_loaded) return;personData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var projectMember_part_loaded = false;	
function load_projectMember_part(callback){if (projectMember_part_loaded) return;projectMember_part_loaded = true;	
new xforms.XFInstance2('projectMember','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('projectMember',null);	
xf._c('xf-bind-95','mdDefault',"instance('projectMember')/pROJECTMEMBERROLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-96','mdDefault',"instance('projectMember')/aPPLICATION_NO","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var projectMember_part_init_loaded = false;	
function load_projectMember_part_init(){if (projectMember_part_init_loaded) return;projectMember_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var taskData_part_loaded = false;	
function load_taskData_part(callback){if (taskData_part_loaded) return;taskData_part_loaded = true;	
new xforms.XFInstance2('taskData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('taskData',null);	
xf._c('xf-bind-97','mdDefault',"instance('taskData')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-98','mdDefault',"instance('taskData')/tASKTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-99','mdDefault',"instance('taskData')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-100','mdDefault',"instance('taskData')/pLANSTARTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-101','mdDefault',"instance('taskData')/pLANENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-102','mdDefault',"instance('taskData')/tESTTASKREASON","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-103','mdDefault',"instance('taskData')/aCTUALSTARTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-104','mdDefault',"instance('taskData')/aCTUALENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-105','mdDefault',"instance('taskData')/tASKEXECUTE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-106','mdDefault',"instance('taskData')/tASKCHECK","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-107','mdDefault',"instance('taskData')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-108','mdDefault',"instance('taskData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-109','mdDefault',"instance('taskData')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-110','mdDefault',"instance('taskData')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-111','mdDefault',"instance('taskData')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-112','mdDefault',"instance('taskData')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-113','mdDefault',"instance('taskData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-114','mdDefault',"instance('taskData')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-115','mdDefault',"instance('taskData')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-116','mdDefault',"instance('taskData')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-117','mdDefault',"instance('taskData')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-118','mdDefault',"instance('taskData')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-119','mdDefault',"instance('taskData')/uSERTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-120','mdDefault',"instance('taskData')/vALIDENDDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-121','mdDefault',"instance('taskData')/rOOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-122','mdDefault',"instance('taskData')/tESTTASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-123','mdDefault',"instance('taskData')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-124','mdDefault',"instance('taskData')/oCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-125','mdDefault',"instance('taskData')/rOOMUSED","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-126','mdDefault',"instance('taskData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-127','mdDefault',"instance('taskData')/ri","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-128','mdDefault',"instance('taskData')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-129','mdDefault',"instance('taskData')/MANUFACTURE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-130','mdDefault',"instance('taskData')/IS_DELEGATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-131','mdDefault',"instance('taskData')/tOOLNO1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-132','mdDefault',"instance('taskData')/tESTTASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-133','mdDefault',"instance('taskData')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-134','mdDefault',"instance('taskData')/oCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-135','mdDefault',"instance('taskData')/tOOLUSED","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-136','mdDefault',"instance('taskData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-137','mdDefault',"instance('taskData')/ti","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-138','mdDefault',"instance('taskData')/tOOLTYPEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-139','mdDefault',"instance('taskData')/uSESTATECODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-140','mdDefault',"instance('taskData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-141','mdDefault',"instance('taskData')/tOOLRESOURCE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-142','mdDefault',"instance('taskData')/iNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-143','mdDefault',"instance('taskData')/iNPRICE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-144','mdDefault',"instance('taskData')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-145','mdDefault',"instance('taskData')/rECIVESTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-146','mdDefault',"instance('taskData')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-147','mdDefault',"instance('taskData')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-148','mdDefault',"instance('taskData')/tESTTASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-149','mdDefault',"instance('taskData')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-150','mdDefault',"instance('taskData')/oCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
if(callback)callback();}	
var taskData_part_init_loaded = false;	
function load_taskData_part_init(){if (taskData_part_init_loaded) return;taskData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var caseHouseData_part_loaded = false;	
function load_caseHouseData_part(callback){if (caseHouseData_part_loaded) return;caseHouseData_part_loaded = true;	
new xforms.XFInstance2('caseHouseData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('caseHouseData',null);	
xf._c('xf-bind-164','mdDefault',"instance('caseHouseData')/FSTIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-165','mdDefault',"instance('caseHouseData')/FETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-166','mdDefault',"instance('caseHouseData')/SCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-167','mdDefault',"instance('caseHouseData')/TASKID","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var caseHouseData_part_init_loaded = false;	
function load_caseHouseData_part_init(){if (caseHouseData_part_init_loaded) return;caseHouseData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var projectMemberData_part_loaded = false;	
function load_projectMemberData_part(callback){if (projectMemberData_part_loaded) return;projectMemberData_part_loaded = true;	
new xforms.XFInstance2('projectMemberData','mdDefault',null,null,null,null,null,null,null,null,'calculate0',null,'whereAll');	
xf._c('xf-bind-168','mdDefault',"instance('projectMemberData')/aPPLICATION_NO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-169','mdDefault',"instance('projectMemberData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-170','mdDefault',"instance('projectMemberData')/aCTUALSTARTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-171','mdDefault',"instance('projectMemberData')/aCTUALENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-172','mdDefault',"instance('projectMemberData')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-173','mdDefault',"instance('projectMemberData')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var projectMemberData_part_init_loaded = false;	
function load_projectMemberData_part_init(){if (projectMemberData_part_init_loaded) return;projectMemberData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'xf-model-1', evt,false)});	
new xforms.XFDialog('flw_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_2=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('flw_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('flw'); process[callback](task, processControl, options); } justep('flw_processControlDialogIFrame').src="";});xf._p(justep('flw_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_2,'flw_processControlDialog', evt,false)});	
new xforms.XFDialog('flw_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){justep('flw_processChartDialogIFrame').src="";});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_3,'flw_processChartDialogID', evt,false)});	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('flw_processChartDialogIFrame').src=url;});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_4,'flw_processChartDialogID', evt,false)});	
new xforms.XFDialog('flw_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('flw'); process[callback](task, processControl, options); }});xf._p(justep('flw_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'flw_processConfirmDialog', evt,false)});	
var xf_trigger_f17d3610f7a04baa97ffaa48206fbfa0=new xforms.XFTrigger('f17d3610f7a04baa97ffaa48206fbfa0',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('flw_processConfirmDialog').close();}));xf._p(justep('f17d3610f7a04baa97ffaa48206fbfa0'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'f17d3610f7a04baa97ffaa48206fbfa0', evt,false)});	
var xf_trigger_952d72b04746470db8ec4ba063a0a37f=new xforms.XFTrigger('952d72b04746470db8ec4ba063a0a37f',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('flw_processConfirmDialog').close();}));xf._p(justep('952d72b04746470db8ec4ba063a0a37f'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'952d72b04746470db8ec4ba063a0a37f', evt,false)});	
xforms.load_parts('view3_7');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
function load_view3_7(){if (justep("view3_7").getAttribute('loaded') && justep("view3_7").getAttribute('loaded') == 'true') return;justep("view3_7").setAttribute('loaded', 'true');	
if(typeof(load_view3_7_html) == 'function')load_view3_7_html();	
xforms.load_parts('view2_7');	
xforms.load_parts('view2_3');	
new xforms.XFGrid({id:'grid13_2',instance:'vData',systemColumnsPro:'fID,fPARENTID,oPERATORNAME,rOOMNAME,tOOLNAME,cASEID,cASEVERSION,tESTCASEVER,tESTCASEID,tESTSCHEMEID',onInit:null,type:'treegrid',smartRender:0,delay:false,ids:'calculate0,tASKID,tESTCASENAME,rANGENAME,dETOBJNAME,sHIJIAN,sTARTTIME,eNDTIME,qZRW,pName,space-column',headNames:'序号,检测任务,测试用例名称,检测方面,检测对象,耗时/小时,开始时间,结束时间,前置任务,执行人员,&nbsp;',widths:'30,65,251,100,100,100,155,150,65,115,*',types:'cntr,ed,tree,ed,ed,ed,dateTime,dateTime,ed,select,ro',hiddenColumns:'',aligns:'center,center,,,,,,,center,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:false,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'rANGENAME','true');this.grid.bindColReadonly(null,'dETOBJNAME','true');this.grid.bindColEditor(null,'pName','hrselect');}});	
xforms.load_parts('view10_1');	
xforms.load_parts('view1_3');	
xforms.load_parts('view12_1');	
xforms.load_parts('view1_2');	
xforms.load_parts('view1_8');	
}	
function load_view3_7_xblinit(){if (justep("view3_7").getAttribute('xblloaded') && justep("view3_7").getAttribute('xblloaded') == 'true') return;justep("view3_7").setAttribute('xblloaded', 'true');	
}	
function load_view2_7(){if (justep("view2_7").getAttribute('loaded') && justep("view2_7").getAttribute('loaded') == 'true') return;justep("view2_7").setAttribute('loaded', 'true');	
if(typeof(load_view2_7_html) == 'function')load_view2_7_html();	
xforms.load_parts('view1_22');	
xforms.load_parts('view1_24');	
}	
function load_view2_7_xblinit(){if (justep("view2_7").getAttribute('xblloaded') && justep("view2_7").getAttribute('xblloaded') == 'true') return;justep("view2_7").setAttribute('xblloaded', 'true');	
}	
function load_view1_22(){if (justep("view1_22").getAttribute('loaded') && justep("view1_22").getAttribute('loaded') == 'true') return;justep("view1_22").setAttribute('loaded', 'true');	
if(typeof(load_view1_22_html) == 'function')load_view1_22_html();	
new xforms.XFExtSelect({id:'gridSelect1_22',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/aSSIGNEDMANUFACTUREID"),labelRef:xf._q("data('dataMain')/mANUFACTUREIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcData',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2_22',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/pRODUCTMANUFACTUREID"),labelRef:xf._q("data('dataMain')/wtName"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'dataMain',columns:'mANUFACTUREIDCNAME,AFC_MANUFACTURER_INFO,__c_,APP_DOC_ID,APP_DOC_NO,aSSIGNEDMANUFACTUREID,pRODUCTMANUFACTUREID,pRODUCTNAME,dETECTIONOBJECTTYPE,dEVICETYPE,bUSINESSID,lINEID,dECTIONBASEDONNAME,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,cONTACTADDRESS,cONTACTPOSTCODE,cONTACTFAXNUMBER,aPPLICATIONDATE,eXPECTENDINGDATE,pRODUCTSTYLE,cOMPANYTYPE,aPPLICATIONFIELDS,dEVELOPMENTTOOLS,cOMPILERENVIRONMENT,pRODUCTCONFIGURATION,fEATURESANDMODELS,tESTINGREQUIREMENTS,oPERATORID,mNITLTELEPHONE,mNITLFAXNUMBER,mNITLMOBILE,mNITLEMAIL,mNITLADDRESS,mNITLPOSTCODE,rECEIPTER,rECEIPTDATE,mEMO,COMPANY_PROMISE,iNSTALLREQUIRE,pROCESSUNIT,wtName,dETECTIONOBJECTCNAME,bUSINESSIDCNAME,dEVICETYPECNAME,oPERATORNAME,receipterName',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,APP_DOC_ID,APP_DOC_NO,aSSIGNEDMANUFACTUREID,pRODUCTMANUFACTUREID,pRODUCTNAME,dETECTIONOBJECTTYPE,dEVICETYPE,bUSINESSID,lINEID,dECTIONBASEDONNAME,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,cONTACTADDRESS,cONTACTPOSTCODE,cONTACTFAXNUMBER,aPPLICATIONDATE,eXPECTENDINGDATE,pRODUCTSTYLE,cOMPANYTYPE,aPPLICATIONFIELDS,dEVELOPMENTTOOLS,cOMPILERENVIRONMENT,pRODUCTCONFIGURATION,fEATURESANDMODELS,tESTINGREQUIREMENTS,oPERATORID,mNITLTELEPHONE,mNITLFAXNUMBER,mNITLMOBILE,mNITLEMAIL,mNITLADDRESS,mNITLPOSTCODE,rECEIPTER,rECEIPTDATE,mEMO,COMPANY_PROMISE,iNSTALLREQUIRE,pROCESSUNIT,wtName,dETECTIONOBJECTCNAME,bUSINESSIDCNAME,dEVICETYPECNAME,oPERATORNAME,receipterName',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('pRODUCTNAME','text',xf._q("data('dataMain')/pRODUCTNAME"),null,null,null,null,false,true);	
new xforms.XFExtSelect({id:'gridSelect3_22',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dETECTIONOBJECTTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detObjType',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4_22',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dEVICETYPE"),labelRef:xf._q("data('dataMain')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'deviceTypeCodeData',columns:'dEVICETYPECNAME,DEVICE_TYPE_CODE,__c_,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DEVICE_TYPE_CODE,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect5_22',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/bUSINESSID"),labelRef:xf._q("data('dataMain')/bUSINESSIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessData',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,__c_,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'BUSINESS_TYPE_CODE,bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('lINEID','text',xf._q("data('dataMain')/lINEID"),null,null,null,null,false,true);	
xf._d('dECTIONBASEDONNAME','text',xf._q("data('dataMain')/dECTIONBASEDONNAME"),null,null,null,null,false,true);	
xf._d('aPPLICATIONDATE','text',xf._q("data('dataMain')/aPPLICATIONDATE"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('eXPECTENDINGDATE','text',xf._q("data('dataMain')/eXPECTENDINGDATE"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('tESTINGREQUIREMENTS','text',xf._q("data('dataMain')/tESTINGREQUIREMENTS"),null,null,null,null,false,true);	
}	
function load_view1_22_xblinit(){if (justep("view1_22").getAttribute('xblloaded') && justep("view1_22").getAttribute('xblloaded') == 'true') return;justep("view1_22").setAttribute('xblloaded', 'true');	
}	
function load_view1_24(){if (justep("view1_24").getAttribute('loaded') && justep("view1_24").getAttribute('loaded') == 'true') return;justep("view1_24").setAttribute('loaded', 'true');	
if(typeof(load_view1_24_html) == 'function')load_view1_24_html();	
xf._d('pROJECTNAME','text',xf._q("data('pData')/pROJECTNAME"),null,null,null,null,false,false);	
xf._d('cONTACTPERSON','text',xf._q("data('pData')/cONTACTPERSON"),null,null,null,null,false,false);	
xf._d('cONTACTMOBILE','text',xf._q("data('pData')/cONTACTMOBILE"),null,null,null,null,false,false);	
xf._d('cONTACTTELEPHONE','text',xf._q("data('pData')/cONTACTTELEPHONE"),null,null,null,null,false,false);	
xf._d('cONTACTEMAIL','text',xf._q("data('pData')/cONTACTEMAIL"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1_24',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/aSSIGNEDMANUFACTUREID"),labelRef:xf._q("data('pData')/cname2"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcData',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('pROJECTDATE','text',xf._q("data('pData')/pROJECTDATE"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('eNDINGDATE','text',xf._q("data('pData')/eNDINGDATE"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('mAKEDATE','text',xf._q("data('pData')/mAKEDATE"),null,null,null,"yyyy-MM-dd",false,true);	
new xforms.XFExtSelect({id:'gridSelect4_24',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/bUSINESSID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessData',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,__c_,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'BUSINESS_TYPE_CODE,bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'bizActivity4.gridSelect4_24Closeup'});	
new xforms.XFExtSelect({id:'gridSelect5_24',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/tESTSCHEMEID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'testSchemeData',columns:'TEST_SCHEME_BASE_INFO,tESTSCHEMENAME,__c_,tESTSCHEMEDESC,bUSINESSID,dECTIONBASEDONID,mAKEDATETIME,vALIDSTATE,aPPLICATIONNO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'TEST_SCHEME_BASE_INFO,tESTSCHEMEDESC,bUSINESSID,dECTIONBASEDONID,mAKEDATETIME,vALIDSTATE,aPPLICATIONNO',valueColumn:'TEST_SCHEME_BASE_INFO',labelColumn:'tESTSCHEMENAME',extColumn:null,labels:',,,,,,,,',aligns:',,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'bizActivity4.gridSelect5_24Closeup'});	
new xforms.XFExtSelect({id:'gridSelect3_24',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/nOTIFYTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'notifyTypeData',columns:'NOTIFY_TYPE_CODE,nOTIFYTYPECNAME,__c_,nOTIFYTYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'NOTIFY_TYPE_CODE,nOTIFYTYPEENAME',valueColumn:'NOTIFY_TYPE_CODE',labelColumn:'nOTIFYTYPECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2_24',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/mANUFACTUREID"),labelRef:xf._q("data('pData')/cname1"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcData',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:true,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('input1_3','text',xf._q("data('pData')/lINEID"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect2_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/qAMANAGER"),labelRef:xf._q("data('pData')/name1"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'projectMember',columns:'oPERATORNAME,__c_,pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',valueColumn:'pROJECTMEMBERID',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:true,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/tESTMANAGER"),labelRef:xf._q("data('pData')/name2"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'projectMember',columns:'oPERATORNAME,__c_,pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',valueColumn:'pROJECTMEMBERID',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:true,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('pData')/tECHMANAGER"),labelRef:xf._q("data('pData')/name3"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'projectMember',columns:'oPERATORNAME,__c_,pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'pROJECTMEMBERID,pROJECTMEMBERROLE,aPPLICATION_NO,HR_BASE_INFO',valueColumn:'pROJECTMEMBERID',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:true,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea1_24','textarea',xf._q("data('pData')/mEMO"),null,null,null,null,false,false);	
}	
function load_view1_24_xblinit(){if (justep("view1_24").getAttribute('xblloaded') && justep("view1_24").getAttribute('xblloaded') == 'true') return;justep("view1_24").setAttribute('xblloaded', 'true');	
}	
function load_view2_3(){if (justep("view2_3").getAttribute('loaded') && justep("view2_3").getAttribute('loaded') == 'true') return;justep("view2_3").setAttribute('loaded', 'true');	
if(typeof(load_view2_3_html) == 'function')load_view2_3_html();	
var xf_select1_radio1_1=new xforms.XFSelect('radio1_1',false,true,xf._q("data('temp')/name"),true,false,false,'',0);	
var xf_item_selectItem1_1=new xforms.XFItem('selectItem1_1',null,null);	
var xf_item_selectItem2_1=new xforms.XFItem('selectItem2_1',null,null);	
var xf_item_selectItem1_5=new xforms.XFItem('selectItem1_5',null,null);	
var xf_item_selectItem2_5=new xforms.XFItem('selectItem2_5',null,null);	
var xf_trigger_triggerOut=new xforms.XFTrigger('triggerOut',null,null,null,false,false,false,null,null,null);	
var xf_action_action2_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity4.triggerOutClick(event)}));xf._p(justep('triggerOut'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2_1,'triggerOut', evt,false)});	
var xf_trigger_triggerinput=new xforms.XFTrigger('triggerinput',null,null,null,false,false,false,null,null,null);	
var xf_action_action3_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity4.triggerinputClick(event)}));xf._p(justep('triggerinput'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3_1,'triggerinput', evt,false)});	
}	
function load_view2_3_xblinit(){if (justep("view2_3").getAttribute('xblloaded') && justep("view2_3").getAttribute('xblloaded') == 'true') return;justep("view2_3").setAttribute('xblloaded', 'true');	
}	
function load_view10_1(){if (justep("view10_1").getAttribute('loaded') && justep("view10_1").getAttribute('loaded') == 'true') return;justep("view10_1").setAttribute('loaded', 'true');	
if(typeof(load_view10_1_html) == 'function')load_view10_1_html();	
}	
function load_view10_1_xblinit(){if (justep("view10_1").getAttribute('xblloaded') && justep("view10_1").getAttribute('xblloaded') == 'true') return;justep("view10_1").setAttribute('xblloaded', 'true');	
}	
function load_view1_3(){if (justep("view1_3").getAttribute('loaded') && justep("view1_3").getAttribute('loaded') == 'true') return;justep("view1_3").setAttribute('loaded', 'true');	
if(typeof(load_view1_3_html) == 'function')load_view1_3_html();	
}	
function load_view1_3_xblinit(){if (justep("view1_3").getAttribute('xblloaded') && justep("view1_3").getAttribute('xblloaded') == 'true') return;justep("view1_3").setAttribute('xblloaded', 'true');	
}	
function load_view12_1(){if (justep("view12_1").getAttribute('loaded') && justep("view12_1").getAttribute('loaded') == 'true') return;justep("view12_1").setAttribute('loaded', 'true');	
if(typeof(load_view12_1_html) == 'function')load_view12_1_html();	
var xf_trigger_trigger9_1=new xforms.XFTrigger('trigger9_1',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity4.trigger9_1Click(event)}));xf._p(justep('trigger9_1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_1,'trigger9_1', evt,false)});	
var xf_select1_radio2_1=new xforms.XFSelect('radio2_1',false,true,xf._q("data('tempoption')/name"),true,false,false,'',0);	
var xf_item_selectItem3_0=new xforms.XFItem('selectItem3_0',null,null);	
var xf_item_selectItem3_1=new xforms.XFItem('selectItem3_1',null,null);	
var xf_item_selectItem4_1=new xforms.XFItem('selectItem4_1',null,null);	
var xf_item_selectItem5_1=new xforms.XFItem('selectItem5_1',null,null);	
}	
function load_view12_1_xblinit(){if (justep("view12_1").getAttribute('xblloaded') && justep("view12_1").getAttribute('xblloaded') == 'true') return;justep("view12_1").setAttribute('xblloaded', 'true');	
}	
function load_view1_2(){if (justep("view1_2").getAttribute('loaded') && justep("view1_2").getAttribute('loaded') == 'true') return;justep("view1_2").setAttribute('loaded', 'true');	
if(typeof(load_view1_2_html) == 'function')load_view1_2_html();	
new xforms.XFGrid({id:'grid2_2',instance:'taskData',systemColumnsPro:'pROJECTID,tASKTYPE,tASKID,pLANOPERATORID,pLANSTARTDATE,pLANENDINGDATE,tESTTASKAREA,tESTTASKITERATIVE,tESTTASKREASON,aCTUALOPERATORID,tASKEXECUTE,tASKCHECK,tESTTASKFILE,tESTTASKRESULTFILE,TEST_PROJECT_INFO,pROJECTNAME,pROJECTTYPE,aPPLICATIONNO,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,tESTSCHEMEID,mAKEDATE,eXECUTESTATE,mEMO,OPERATOR_PASSWORD,uSERTYPE,vALIDENDDATE,oPERATORPASSWORD,oRGID,roi,rOOMID,rOOMAREA,tESTTASKID,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,rOOMUSED,tECHMANAGER,version,ri,rOOMTYPE,rOOMENAME,iMAGE,MANUFACTURE_ID,IS_DELEGATE,toi,tOOLNO1,tOOLUSED,ti,tOOLENAME,tOOLTYPEID,tOOLMODEL,tOOLSTANDARDS,tOOLID,uSESTATECODE,tOOLUNIT,tOOLRESOURCE,iNDATE,iNPRICE,sHAREDFLAG,aSSETSORTCODE,rECIVESTATE,sdoi,sAMPLEDEVICENO',onInit:null,type:'grid',smartRender:20,delay:false,ids:'tASKNAME,uSERNAME,aCTUALSTARTDATE,aCTUALENDINGDATE,rOOMCNAME,tOOLCNAME,dEVICEID,space-column',headNames:'任务名称,执行人,任务开始日期,任务结束日期,房间区域,工具中文名称,样品序号,&nbsp;',widths:'110,121,139,159,123,136,111,*',types:'ed,ed,ed,ed,select,select,select,ro',hiddenColumns:'',aligns:',,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColEditor(null,'rOOMCNAME','treeSelect1_2');this.grid.bindColEditor(null,'tOOLCNAME','gridSelect1_3');this.grid.bindColEditor(null,'dEVICEID','gridSelect1_1');}});	
var xf_trigger_trigger2_2=new xforms.XFTrigger('trigger2_2',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity4.trigger2_2Click(event)}));xf._p(justep('trigger2_2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_4,'trigger2_2', evt,false)});	
var xf_trigger_trigger3_2=new xforms.XFTrigger('trigger3_2',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity4.trigger3_2Click(event)}));xf._p(justep('trigger3_2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_2,'trigger3_2', evt,false)});	
var xf_trigger_trigger4_2=new xforms.XFTrigger('trigger4_2',null,null,null,false,false,false,null,null,null);	
var xf_action_action1_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){bizActivity4.trigger4_2Click(event)}));xf._p(justep('trigger4_2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1_7,'trigger4_2', evt,false)});	
}	
function load_view1_2_xblinit(){if (justep("view1_2").getAttribute('xblloaded') && justep("view1_2").getAttribute('xblloaded') == 'true') return;justep("view1_2").setAttribute('xblloaded', 'true');	
}	
function load_view1_8(){if (justep("view1_8").getAttribute('loaded') && justep("view1_8").getAttribute('loaded') == 'true') return;justep("view1_8").setAttribute('loaded', 'true');	
if(typeof(load_view1_8_html) == 'function')load_view1_8_html();	
new xforms.XFGrid({id:'grid1_10',instance:'projectMemberData',systemColumnsPro:'pROJECTMEMBERID,aPPLICATION_NO,pOSITIONID,TEST_PROJECT_TASK_INFO,aCTUALSTARTDATE,aCTUALENDINGDATE,HR_OCCUPY_INFO',onInit:null,type:'grid',smartRender:20,delay:false,ids:'calculate0,oPERATORNAME,pOSITIONIDCNAME,pROJECTNAME,tASKNAME,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,space-column',headNames:'序号,姓名,岗位,项目名称,任务名称,计划占用起始日期时间,计划占用结束日期时间,&nbsp;',widths:'30,121,100,197,194,181,175,*',types:'cntr,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'center,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view1_8_xblinit(){if (justep("view1_8").getAttribute('xblloaded') && justep("view1_8").getAttribute('xblloaded') == 'true') return;justep("view1_8").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
