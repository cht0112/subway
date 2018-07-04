
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
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'bae2b43540a7d7d7a36b854e21fbef85'};
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
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'4e50af69447ffe138d479165214c3aed'};
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
_xbl_JSClassDefine_dialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_dialog',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'9f2688d44f332018764cfaa82948b711'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'5de757497c10fff536909fd799a5c3b8'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'cf1aeaa161de60263cab7978a3deecdb'};
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
_xbl_JSClassDefine_process.prototype.__code__={v:{name:'_xbl_JSClassDefine_process',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'41674a1e05e7af352e85d5a6189f069f'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'6ce70cd49c105cb5490bcad75be57cd6'};
function _xbl_JSClassDefine_borderLayout(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_borderLayout.prototype = justep.Object.extend(new justep.XBLObject(), eval({

			"initXBL" : function() {  	if(!this.domNode.id || this.domNode.id ==""){
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
				}if(this.leftEl.get(0)){
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'ee67e9cf2c0d37e01cd65e6cbcefbd9e'};
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
						}else if(info.relevant){				var xpath = xforms.XPath.get(info.relevant);
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'cd45ab3757ab758c6ba0e20412706823'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'00348b3ba4f07c2bc0fb8c68cf570bdc'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'70241f1a1b6278a2392c0f8dc3f1c6db',time:1528686211},m:'03da2912aeb92be7a5d2820d8cb4d62c'};
	var ids=[{id:'b92646b7312547629e598cca0f9ba16b', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'xuiLabel5', name:'xforms:label'},{id:'default94', name:'xforms:value'}]},{id:'tabPanel1_6', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'toolbars1_6', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'gridSelect1_8', name:'xforms:gridselect1', children:[{id:'default1_8', name:'xforms:label'},{id:'default2_8', name:'xforms:value'}]},{id:'pRODUCTNAME', name:'xforms:input'},{id:'gridSelect2_8', name:'xforms:gridselect1', children:[{id:'default10_8', name:'xforms:label'},{id:'default11_8', name:'xforms:value'}]},{id:'gridSelect3_8', name:'xforms:gridselect1', children:[{id:'default19_8', name:'xforms:label'},{id:'default20_8', name:'xforms:value'}]},{id:'gridSelect1_3', name:'xforms:gridselect1', children:[{id:'xuiLabel1_3', name:'xforms:label'},{id:'default1_3', name:'xforms:value'}]},{id:'cONTACTPERSON', name:'xforms:input'},{id:'cONTACTMOBILE', name:'xforms:input'},{id:'aPPLICATIONDATE', name:'xforms:input'},{id:'input1_2', name:'xforms:input'},{id:'dEVELOPMENTTOOLS', name:'xforms:input'},{id:'tESTINGREQUIREMENTS', name:'xforms:input'},{id:'input2_2', name:'xforms:input'},{id:'cONTRACTNAME', name:'xforms:input'},{id:'gridSelect1_17', name:'xforms:gridselect1', children:[{id:'default1_17', name:'xforms:label'},{id:'default2_17', name:'xforms:value'}]},{id:'cONTRACTDATE', name:'xforms:input'},{id:'eXPECTENDINGDATE', name:'xforms:input'},{id:'textarea1_7', name:'xforms:textarea'},{id:'textarea2_7', name:'xforms:textarea'},{id:'toolbars2_6', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'4a64218a2ee74911b44bd40c11a3792e', name:'xforms:label'}]},{id:'removeTrigger1', name:'xforms:trigger', children:[{id:'fd899d56e72445d6b982ade1a28fae8f', name:'xforms:label'}]},{id:'a398feb06a734a17ad6d41735c8371c6', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'windowDialog3_1', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'grid4_6', name:'xforms:grid'}]}]},{id:'flw', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'flw_processControlDialog', name:'xforms:dialog'},{id:'flw_processChartDialogID', name:'xforms:dialog'},{id:'flw_processConfirmDialog', name:'xforms:dialog', children:[{id:'51fe0b08d99b4f008135020127afe749', name:'xforms:trigger', children:[{id:'f26059753958480f89c11567c545c3c1', name:'xforms:label'}]},{id:'0d2af5965e994262acb082fa1450d878', name:'xforms:trigger', children:[{id:'403fa29a465a4bcd94044f8ecaa2dd54', name:'xforms:label'}]}]},{id:'flw_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'filter-dialog-f6088d85-0d7d-4708-bc7a-d5e29b430151', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N2086729872', name:'xforms:dialog'}]},{id:'filter-pattern-9f3ca04b-3145-4095-b1da-440786d7f57f', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'50db3a0d61d748ab8a126ce8661a857c', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1202018246', name:'xforms:menu'}]},{id:'GLOBAL_ID_1819700665', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='70241f1a1b6278a2392c0f8dc3f1c6db';
xforms.Core.fileName='form.js';	
xf._a(null,'gridSelect5');xf._a('gridSelect5','xuiLabel5');xf._a('gridSelect5','default95');xf._a(null,'gridSelect1_8');xf._a('gridSelect1_8','default1_8');xf._a('gridSelect1_8','default3_8');xf._a(null,'pRODUCTNAME');xf._a(null,'gridSelect2_8');xf._a('gridSelect2_8','default10_8');xf._a('gridSelect2_8','default12_8');xf._a(null,'gridSelect3_8');xf._a('gridSelect3_8','default19_8');xf._a('gridSelect3_8','default21_8');xf._a(null,'gridSelect1_3');xf._a('gridSelect1_3','xuiLabel1_3');xf._a('gridSelect1_3','default2_3');xf._a(null,'cONTACTPERSON');xf._a(null,'cONTACTMOBILE');xf._a(null,'aPPLICATIONDATE');xf._a(null,'input1_2');xf._a(null,'dEVELOPMENTTOOLS');xf._a(null,'tESTINGREQUIREMENTS');xf._a(null,'input2_2');xf._a(null,'cONTRACTNAME');xf._a(null,'gridSelect1_17');xf._a('gridSelect1_17','default1_17');xf._a('gridSelect1_17','default3_17');xf._a(null,'cONTRACTDATE');xf._a(null,'eXPECTENDINGDATE');xf._a(null,'textarea1_7');xf._a(null,'textarea2_7');xf._a(null,'insertTrigger');xf._a('insertTrigger','4a64218a2ee74911b44bd40c11a3792e');xf._a(null,'removeTrigger1');xf._a('removeTrigger1','fd899d56e72445d6b982ade1a28fae8f');xf._a(null,'grid4_6');xf._a(null,'51fe0b08d99b4f008135020127afe749');xf._a('51fe0b08d99b4f008135020127afe749','f26059753958480f89c11567c545c3c1');xf._a(null,'0d2af5965e994262acb082fa1450d878');xf._a('0d2af5965e994262acb082fa1450d878','403fa29a465a4bcd94044f8ecaa2dd54');function init() {	
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
xf._b("instance('bizData2_1')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("bizData2_1")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData2_1')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("bizData2_1")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('CONTRACTData')/cONTRACTNAME",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTNAME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'合同名称不能为空!'",xf._i("合同名称不能为空!"));	
xf._b("instance('CONTRACTData')/cONTRACTDESC",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTDESC')))));	
xf._b("'合同内容简介不能为空!'",xf._i("合同内容简介不能为空!"));	
xf._b("instance('CONTRACTData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("'客户名称不能为空!'",xf._i("客户名称不能为空!"));	
xf._b("instance('CONTRACTData')/cONTRACTDATE",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTDATE')))));	
xf._b("'合同签订日期不能为空!'",xf._i("合同签订日期不能为空!"));	
xf._b("instance('CONTRACTData')/eXPECTENDINGDATE",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("'预期完成日期不能为空!'",xf._i("预期完成日期不能为空!"));	
xf._b("instance('CONTRACTData')/cONTRACTNO",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTNO')))));	
xf._b("'合同编号不能为空!'",xf._i("合同编号不能为空!"));	
xf._b("instance('CONTRACTData')/cONTRACTCODE",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTCODE')))));	
xf._b("'不能为空'",xf._i("不能为空"));	
xf._b("instance('CONTRACTData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('SAMPLE_DEVICEData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('SAMPLE_DEVICEData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('SAMPLE_DEVICEData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('SAMPLE_DEVICEData')/dECTIONTYPE",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','dECTIONTYPE')))));	
xf._b("instance('SAMPLE_DEVICEData')/sOFTWAREVERSION",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','sOFTWAREVERSION')))));	
xf._b("instance('SAMPLE_DEVICEData')/hARDWAREVERSION",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','hARDWAREVERSION')))));	
xf._b("instance('SAMPLE_DEVICEData')/dEADLINERECEIVEDATE",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','dEADLINERECEIVEDATE')))));	
xf._b("instance('SAMPLE_DEVICEData')/iNDEEDRECEIVEDATE",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE')))));	
xf._b("instance('SAMPLE_DEVICEData')/rETURNDATE",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("instance('SAMPLE_DEVICEData')/iNDEEDRETURNDATE",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE')))));	
xf._b("instance('SAMPLE_DEVICEData')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("instance('SAMPLE_DEVICEData')/sAMPLEDEVICENO1",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO1')))));	
xf._b("instance('SAMPLE_DEVICEData')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('SAMPLE_DEVICEData')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('SAMPLE_DEVICEData')/pROJECTID",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('SAMPLE_DEVICEData')/TEST_CONTRACT_INFO",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','TEST_CONTRACT_INFO')))));	
xf._b("instance('SAMPLE_DEVICEData')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('SAMPLE_DEVICEData')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('SAMPLE_DEVICEData')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("SAMPLE_DEVICEData")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('checkRecordData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('checkRecordData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('checkRecordData')/cHECKRESULT",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("instance('checkRecordData')/cHECKTIME",xf._g(xf._f('instance',xf._i("checkRecordData")),xf._h(false, xf._k("child",xf._j('','cHECKTIME')))));	
xf._b("instance('afcmanufacturerinfo')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("afcmanufacturerinfo")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('afcmanufacturerinfo')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("afcmanufacturerinfo")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("data('dataMain')/dEVICETYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("data('dataMain')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('dataMain')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))));	
xf._b("AFC_MANUFACTURER_INFO",xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO'))));	
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
xf._b("data('dataMain')/pRODUCTNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pRODUCTNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("DEVICE_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','DEVICE_TYPE_CODE'))));	
xf._b("data('dataMain')/bUSINESSID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("bUSINESSIDCNAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDCNAME'))));	
xf._b("BUSINESS_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','BUSINESS_TYPE_CODE'))));	
xf._b("bUSINESSIDENAME",xf._h(false, xf._k("child",xf._j('','bUSINESSIDENAME'))));	
xf._b("data('dataMain')/cONTACTPERSON",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTPERSON')))));	
xf._b("data('dataMain')/cONTACTTELEPHONE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("data('dataMain')/aPPLICATIONDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))));	
xf._b("data('dataMain')/eXPECTENDINGDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("data('dataMain')/dEVELOPMENTTOOLS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVELOPMENTTOOLS')))));	
xf._b("data('dataMain')/tESTINGREQUIREMENTS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tESTINGREQUIREMENTS')))));	
xf._b("data('CONTRACTData')/cONTRACTCODE",xf._g(xf._f('data',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTCODE')))));	
xf._b("data('CONTRACTData')/cONTRACTNAME",xf._g(xf._f('data',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTNAME')))));	
xf._b("data('CONTRACTData')/mANUFACTUREID",xf._g(xf._f('data',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('CONTRACTData')/cONTRACTDATE",xf._g(xf._f('data',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTDATE')))));	
xf._b("data('CONTRACTData')/eXPECTENDINGDATE",xf._g(xf._f('data',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("data('CONTRACTData')/cONTRACTDESC",xf._g(xf._f('data',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','cONTRACTDESC')))));	
xf._b("data('CONTRACTData')/mEMO",xf._g(xf._f('data',xf._i("CONTRACTData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("recCB1",xf._h(false, xf._k("child",xf._j('','recCB1'))));	
xf._b("dEVICEID",xf._h(false, xf._k("child",xf._j('','dEVICEID'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xf._b("not(call('justep.XData.canDo','CONTRACTData','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("CONTRACTData"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','SAMPLE_DEVICEData','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("SAMPLE_DEVICEData"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','SAMPLE_DEVICEData','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("SAMPLE_DEVICEData"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','SAMPLE_DEVICEData','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("SAMPLE_DEVICEData"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','SAMPLE_DEVICEData','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("SAMPLE_DEVICEData"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','SAMPLE_DEVICEData','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("SAMPLE_DEVICEData"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
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
new xforms.XFInstance2('deviceTypeCodeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-10','mdDefault',"instance('deviceTypeCodeData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('deviceTypeCodeData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2_1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-12','mdDefault',"instance('bizData2_1')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('bizData2_1')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('CONTRACTData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('CONTRACTData',null);	
xf._c('xf-bind-14','mdDefault',"instance('CONTRACTData')/cONTRACTNAME",null,null,"true()",null,null,null,"'合同名称不能为空!'");	
xf._c('xf-bind-15','mdDefault',"instance('CONTRACTData')/cONTRACTDESC",null,null,"true()",null,null,null,"'合同内容简介不能为空!'");	
xf._c('xf-bind-16','mdDefault',"instance('CONTRACTData')/mANUFACTUREID",null,null,"true()",null,null,null,"'客户名称不能为空!'");	
xf._c('xf-bind-17','mdDefault',"instance('CONTRACTData')/cONTRACTDATE",null,null,"true()",null,null,null,"'合同签订日期不能为空!'");	
xf._c('xf-bind-18','mdDefault',"instance('CONTRACTData')/eXPECTENDINGDATE",null,null,"true()",null,null,null,"'预期完成日期不能为空!'");	
xf._c('xf-bind-19','mdDefault',"instance('CONTRACTData')/cONTRACTNO",null,null,"true()",null,null,null,"'合同编号不能为空!'");	
xf._c('xf-bind-20','mdDefault',"instance('CONTRACTData')/cONTRACTCODE",null,null,"true()",null,null,null,"'不能为空'");	
xf._c('xf-bind-21','mdDefault',"instance('CONTRACTData')/mANUFACTUREID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('CONTRACTData')/cONTRACTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('CONTRACTData')/eXPECTENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('CONTRACTData')/aPPLICATIONNO","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('SAMPLE_DEVICEData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-25','mdDefault',"instance('SAMPLE_DEVICEData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('SAMPLE_DEVICEData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('SAMPLE_DEVICEData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('SAMPLE_DEVICEData')/dECTIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('SAMPLE_DEVICEData')/sOFTWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('SAMPLE_DEVICEData')/hARDWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('SAMPLE_DEVICEData')/dEADLINERECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('SAMPLE_DEVICEData')/iNDEEDRECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('SAMPLE_DEVICEData')/rETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('SAMPLE_DEVICEData')/iNDEEDRETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('SAMPLE_DEVICEData')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('SAMPLE_DEVICEData')/sAMPLEDEVICENO1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('SAMPLE_DEVICEData')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('SAMPLE_DEVICEData')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('SAMPLE_DEVICEData')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('SAMPLE_DEVICEData')/TEST_CONTRACT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('SAMPLE_DEVICEData')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('SAMPLE_DEVICEData')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('SAMPLE_DEVICEData')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('businessData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('detObjType','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
var xf_action_action1_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){qianshuhetong.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1_1,'mdDefault', evt,false)});	
new xforms.XFInstance2('afcmanufacturerinfo','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-48','mdDefault',"instance('afcmanufacturerinfo')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('afcmanufacturerinfo')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){qianshuhetong.mdDefaultLoad(event)}));xf._p(justep('mdDefault'),"onload",null,function(evt) { xforms.run(xf_action_action1_2,'mdDefault', evt,false)});	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N2086729872',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_504514943');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_504514943", "");}));xf._p(justep('GLOBAL_ID_N2086729872'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_N2086729872', evt,false)});	
var xf_menu_GLOBAL_ID_1202018246 = new xforms.XFMenu('GLOBAL_ID_1202018246','context');xf_menu_GLOBAL_ID_1202018246.menu.addContextZone('50db3a0d61d748ab8a126ce8661a857c');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1202018246.hide()});xf_menu_GLOBAL_ID_1202018246.menu.setOpenMode('web');	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1819700665");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1202018246'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_1202018246', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1819700665',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1753237495');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1753237495", "");}));xf._p(justep('GLOBAL_ID_1819700665'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_1819700665', evt,false)});	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1753237495');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1819700665'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_1819700665', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var checkRecordData_part_loaded = false;	
function load_checkRecordData_part(callback){if (checkRecordData_part_loaded) return;checkRecordData_part_loaded = true;	
new xforms.XFInstance2('checkRecordData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('checkRecordData',null);	
xf._c('xf-bind-44','mdDefault',"instance('checkRecordData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('checkRecordData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('checkRecordData')/cHECKRESULT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('checkRecordData')/cHECKTIME","xsd:date",null,null,null,null,null,null);	
if(callback)callback();}	
var checkRecordData_part_init_loaded = false;	
function load_checkRecordData_part_init(){if (checkRecordData_part_init_loaded) return;checkRecordData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vDetail');	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_4,'xf-model-1', evt,false)});	
new xforms.XFDialog('flw_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('flw_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('flw'); process[callback](task, processControl, options); } justep('flw_processControlDialogIFrame').src="";});xf._p(justep('flw_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_5,'flw_processControlDialog', evt,false)});	
new xforms.XFDialog('flw_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_6=xf._o(null,null,function(element, ctx, event){justep('flw_processChartDialogIFrame').src="";});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_6,'flw_processChartDialogID', evt,false)});	
var xf_script_xf_script_7=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('flw_processChartDialogIFrame').src=url;});xf._p(justep('flw_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_7,'flw_processChartDialogID', evt,false)});	
new xforms.XFDialog('flw_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_8=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('flw'); process[callback](task, processControl, options); }});xf._p(justep('flw_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_8,'flw_processConfirmDialog', evt,false)});	
var xf_trigger_51fe0b08d99b4f008135020127afe749=new xforms.XFTrigger('51fe0b08d99b4f008135020127afe749',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('flw_processConfirmDialog').close();}));xf._p(justep('51fe0b08d99b4f008135020127afe749'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'51fe0b08d99b4f008135020127afe749', evt,false)});	
var xf_trigger_0d2af5965e994262acb082fa1450d878=new xforms.XFTrigger('0d2af5965e994262acb082fa1450d878',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('flw_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('flw_processConfirmDialog').close();}));xf._p(justep('0d2af5965e994262acb082fa1450d878'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'0d2af5965e994262acb082fa1450d878', evt,false)});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-1').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dEVICETYPE"),labelRef:xf._q("data('dataMain')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'deviceTypeCodeData',columns:'dEVICETYPECNAME,__c_,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xforms.load_parts('view1_6');	
xforms.load_parts('view1_1');	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){qianshuhetong.insertTriggerClick1(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger1=new xforms.XFTrigger('removeTrigger1',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){qianshuhetong.removeTrigger1Click(event)}));xf._p(justep('removeTrigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'removeTrigger1', evt,false)});	
new xforms.XFGrid({id:'grid4_6',instance:'SAMPLE_DEVICEData',systemColumnsPro:'aPPLICATIONNO,mANUFACTUREID,dEVICETYPE,dEVICESTYLE,dECTIONTYPE,sOFTWAREVERSION,hARDWAREVERSION,dEADLINERECEIVEDATE,iNDEEDRECEIVEDATE,rETURNDATE,iNDEEDRETURNDATE,sHAREDFLAG,mEMO1,typ,SAMPLE_DEVICE_OCCUPY_INFO,sAMPLEDEVICENO1,dEVICEID1,tESTTASKID,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,mEMO2,pROJECTID,TEST_CONTRACT_INFO,TEST_PROJECT_INFO,pROJECTNAME,AFC_MANUFACTURER_INFO,DETECTION_OBJECT_TYPE,cONTRACTNAME',onInit:null,type:'grid',smartRender:20,delay:false,ids:'recCB1,dEVICEID,mANUFACTUREIDCNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,space-column',headNames:'#master_checkbox,设备ID,厂商和检测机构商中文名称,检测对象类别,检测对象,&nbsp;',widths:'30,100,155,124,123,*',types:'checkbox,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'qianshuhetong.grid4_6RowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view1_6(){if (justep("view1_6").getAttribute('loaded') && justep("view1_6").getAttribute('loaded') == 'true') return;justep("view1_6").setAttribute('loaded', 'true');	
if(typeof(load_view1_6_html) == 'function')load_view1_6_html();	
new xforms.XFExtSelect({id:'gridSelect1_8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/aSSIGNEDMANUFACTUREID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData2_1',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('pRODUCTNAME','text',xf._q("data('dataMain')/pRODUCTNAME"),null,null,null,null,true,false);	
new xforms.XFExtSelect({id:'gridSelect2_8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dETECTIONOBJECTTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detObjType',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3_8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dEVICETYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'deviceTypeCodeData',columns:'DEVICE_TYPE_CODE,dEVICETYPECNAME,__c_,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'DEVICE_TYPE_CODE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect1_3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/bUSINESSID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'businessData',columns:'BUSINESS_TYPE_CODE,bUSINESSIDCNAME,__c_,bUSINESSIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'bUSINESSIDENAME',valueColumn:'BUSINESS_TYPE_CODE',labelColumn:'bUSINESSIDCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('cONTACTPERSON','text',xf._q("data('dataMain')/cONTACTPERSON"),null,null,null,null,true,false);	
xf._d('cONTACTMOBILE','text',xf._q("data('dataMain')/cONTACTTELEPHONE"),null,null,null,null,true,false);	
xf._d('aPPLICATIONDATE','text',xf._q("data('dataMain')/aPPLICATIONDATE"),null,null,null,"yyyy-MM-dd",true,false);	
xf._d('input1_2','text',xf._q("data('dataMain')/eXPECTENDINGDATE"),null,null,null,"yyyy-MM-dd",true,false);	
xf._d('dEVELOPMENTTOOLS','text',xf._q("data('dataMain')/dEVELOPMENTTOOLS"),null,null,null,null,true,false);	
xf._d('tESTINGREQUIREMENTS','text',xf._q("data('dataMain')/tESTINGREQUIREMENTS"),null,null,null,null,true,false);	
}	
function load_view1_6_xblinit(){if (justep("view1_6").getAttribute('xblloaded') && justep("view1_6").getAttribute('xblloaded') == 'true') return;justep("view1_6").setAttribute('xblloaded', 'true');	
}	
function load_view1_1(){if (justep("view1_1").getAttribute('loaded') && justep("view1_1").getAttribute('loaded') == 'true') return;justep("view1_1").setAttribute('loaded', 'true');	
if(typeof(load_view1_1_html) == 'function')load_view1_1_html();	
xf._d('input2_2','text',xf._q("data('CONTRACTData')/cONTRACTCODE"),null,null,null,null,false,false);	
xf._d('cONTRACTNAME','text',xf._q("data('CONTRACTData')/cONTRACTNAME"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1_17',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('CONTRACTData')/mANUFACTUREID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'afcmanufacturerinfo',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'qianshuhetong.gridSelect1_17Dropdown',onCloseup:null});	
xf._d('cONTRACTDATE','text',xf._q("data('CONTRACTData')/cONTRACTDATE"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('eXPECTENDINGDATE','text',xf._q("data('CONTRACTData')/eXPECTENDINGDATE"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('textarea1_7','textarea',xf._q("data('CONTRACTData')/cONTRACTDESC"),null,null,null,null,false,false);	
xf._d('textarea2_7','textarea',xf._q("data('CONTRACTData')/mEMO"),null,null,null,null,false,false);	
}	
function load_view1_1_xblinit(){if (justep("view1_1").getAttribute('xblloaded') && justep("view1_1").getAttribute('xblloaded') == 'true') return;justep("view1_1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
