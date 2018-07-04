
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/blob.xbl.xml#image"] = _xbl_JSClassDefine_image;
justep.XBLObject._classes["/UI/system/components/blob.xbl.xml#blob"] = _xbl_JSClassDefine_blob;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_image(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_image.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function(){
				this.stretch = "false"==this.domNode.getAttribute("stretch")? false: true;
				var blob_object = this.getElementByXblID('blob');
			}, 
			"setDisabled" : function(disabled){
				var blob_object = this.getElementByXblID('blob');
				if(blob_object && blob_object.xblObject){
					blob_object.xblObject.disabled = disabled;
				}
			},
			"getDisabled" : function(){
				var blob_object = this.getElementByXblID('blob');
				if(blob_object && blob_object.xblObject){
					return blob_object.xblObject.disabled;
				}
			},
			"doSubmit" : function(event){
				var func = this.domNode.getAttribute('onSubmit');
				if(func) func = justep.Function.get(func);
				if(!func){
					return justep.Blob.imgFileTest(event);
				}else{
					return func(event);
				}
			},
			"doRefresh" : function(event){
				this.setImgSrc(event.url);
				var func = this.domNode.getAttribute('onRefresh');
				if(func){
					func = justep.Function.get(func);
					if(func) func(event);
				}
			},
			"refresh" : function(rowid){
				var blob_object = justep.XBLObject.getXBLObject(this.getElementByXblID('blob'));
				if(blob_object){
					blob_object.refresh(rowid);
				}
			},
			"setImgSrc" : function(src){
				if(!src) return;
				var blob_object = this.getElementByXblID('blob');
				var imgWidth = $(blob_object).innerWidth();
				var imgHeight = $(blob_object).innerHeight();
				var img = $('#img-'+this.domNode.id);
				if (!this.stretch) {
					var tempImage = new Image();  
					tempImage.onload = function() {
						/* tempImage用于获取高度和宽度 */
						if(imgWidth && imgHeight){
							var scaleH = tempImage.width / imgWidth;
							var scaleV = tempImage.height / imgHeight;
							var scale = 1;
							if (scaleH > scaleV) {
								scale = scaleH;
							}
							else {
								scale = scaleV;
							}
							img.height(tempImage.height/scale).width(tempImage.width/scale);
						}
						img.attr('src',src);
						tempImage = null;
					};
					tempImage.onerror = function() {
						img.attr('src',src);
						tempImage = null;
					};
					tempImage.src = src;
				}else {
					if(imgWidth && imgHeight) img.height(imgHeight).width(imgWidth);
					img.attr('src',src);
				}
			}
		}));

function _xbl_JSClassDefine_blob(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_blob.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
				justep.Object.extend(this, new justep.Blob(this));
				this.attachStoreEvent();
				this.refresh();
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

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
							}else{						el.parent('td').hide();
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

	var ids=[{id:'253b34a7fd9445249ad35317251bce7f', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'04c669dc6a844eccb499157bf91782d0', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'b92fc76c5d344fdeb8b62492f53fc1cb', name:'xforms:label'}]},{id:'b99aebede1e64118a1f3fd0a6b910247', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'trigger8', name:'xforms:trigger', children:[{id:'xuiLabel11', name:'xforms:label'}]}]},{id:'windowDialog2', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'grdMaster', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMas', name:'xforms:trigger', children:[{id:'c832feb72ae74bc2a00c768160557a88', name:'xforms:label'}]},{id:'removeTrigr', name:'xforms:trigger', children:[{id:'545e4615a59c47c080384283cd53b714', name:'xforms:label'}]}]},{id:'iptROOMCNAME', name:'xforms:input'},{id:'iptROOMENAME', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default18', name:'xforms:value'}]},{id:'textarea1', name:'xforms:textarea'},{id:'blobImage1', name:'/UI/system/components/blob.xbl.xml#image', children:[{id:'blob-blobImage1', name:'/UI/system/components/blob.xbl.xml#blob', children:[{id:'dlg-blob-blobImage1', name:'/UI/system/components/dialog.xbl.xml#dialog', children:[{id:'90f7ae49584a45a2853b9f7da4d3deee', name:'xforms:trigger', children:[{id:'89a6268cf2c04092a118cd791b353574', name:'xforms:label'}]},{id:'8c88220874134566a123c53217fd251f', name:'xforms:trigger', children:[{id:'319175d7a6174394a6483f445113dda4', name:'xforms:label'}]}]}]}]},{id:'radio1', name:'xforms:select1', children:[{id:'selectItem1', name:'xforms:item', children:[{id:'default7', name:'xforms:label'},{id:'default10', name:'xforms:value'}]},{id:'selectItem2', name:'xforms:item', children:[{id:'default11', name:'xforms:label'},{id:'default12', name:'xforms:value'}]}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default22', name:'xforms:label'},{id:'default24', name:'xforms:value'}]},{id:'windowDialog1', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'tbsDetail', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMas', name:'xforms:trigger', children:[{id:'ffc3a31e68074958933b9423842d6f43', name:'xforms:label'}]},{id:'save2Mas', name:'xforms:trigger', children:[{id:'c81a5fd8b1d9465cb6ff062f24e876b7', name:'xforms:label'}]},{id:'remove2', name:'xforms:trigger', children:[{id:'d42bd30de53d46efaac3fd075114457a', name:'xforms:label'}]}]},{id:'grid1', name:'xforms:grid'}]}]},{id:'windowDialog3', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'windowDialog4', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'windowDialog5', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'windowDialog6', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'filter-dialog-ed22d2bb-0c2b-4d60-bebc-0359d97a6452', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1959285172', name:'xforms:dialog'}]},{id:'filter-pattern-b5c75634-4031-49f7-9a3e-f27f96c3222c', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'908bc55bb02d48e9956600325868f936', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1865639964', name:'xforms:menu'}]},{id:'GLOBAL_ID_N459221093', name:'xforms:dialog'}]},{id:'filter-dialog-e0916799-5b4a-470b-a289-d6fafffb62e8', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_511010242', name:'xforms:dialog'}]},{id:'filter-pattern-703704da-70f2-4929-8d98-fe530e288be7', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'19f02719360b4829a17362320d9e75cc', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N390774202', name:'xforms:menu'}]},{id:'GLOBAL_ID_1044967436', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','04c669dc6a844eccb499157bf91782d0');xf._a(null,'removeTrigger');xf._a('removeTrigger','b92fc76c5d344fdeb8b62492f53fc1cb');xf._a(null,'trigger8');xf._a('trigger8','xuiLabel11');xf._a(null,'grdMaster');xf._a(null,'saveMas');xf._a('saveMas','c832feb72ae74bc2a00c768160557a88');xf._a(null,'removeTrigr');xf._a('removeTrigr','545e4615a59c47c080384283cd53b714');xf._a(null,'iptROOMCNAME');xf._a(null,'iptROOMENAME');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel3');xf._a('gridSelect1','default19');xf._a(null,'textarea1');xf._a(null,'90f7ae49584a45a2853b9f7da4d3deee');xf._a('90f7ae49584a45a2853b9f7da4d3deee','89a6268cf2c04092a118cd791b353574');xf._a(null,'8c88220874134566a123c53217fd251f');xf._a('8c88220874134566a123c53217fd251f','319175d7a6174394a6483f445113dda4');xf._a(null,'radio1');xf._a('radio1','selectItem1');xf._a('selectItem1','default7');xf._a('radio1','selectItem2');xf._a('selectItem2','default11');xf._a(null,'gridSelect4');xf._a('gridSelect4','default22');xf._a('gridSelect4','default25');xf._a(null,'insertMas');xf._a('insertMas','ffc3a31e68074958933b9423842d6f43');xf._a(null,'save2Mas');xf._a('save2Mas','c81a5fd8b1d9465cb6ff062f24e876b7');xf._a(null,'remove2');xf._a('remove2','d42bd30de53d46efaac3fd075114457a');xf._a(null,'grid1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMaster')/rOOMTYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("true()",xf._f('true'));	
xf._b("'房间类型不能为空'",xf._i("房间类型不能为空"));	
xf._b("instance('dataMaster')/rOOMCNAME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rOOMCNAME')))));	
xf._b("'房间中文名不能为空'",xf._i("房间中文名不能为空"));	
xf._b("instance('dataMaster')/rOOMENAME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rOOMENAME')))));	
xf._b("'房间英文名不能为空'",xf._i("房间英文名不能为空"));	
xf._b("instance('dataMaster')/MANUFACTURE_ID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("instance('dataMaster')/IS_DELEGATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','IS_DELEGATE')))));	
xf._b("instance('dataMaster')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('dataMaster')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('dataMaster')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("instance('dataMaster')/tESTTASKID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tESTTASKID')))));	
xf._b("instance('dataMaster')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('dataMaster')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('dataMaster')/ROOM_TYPE_CODE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','ROOM_TYPE_CODE')))));	
xf._b("instance('dataMaster')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('dataMaster')/DETECTION_RANGE_TYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE')))));	
xf._b("instance('dataDetail')/rOOMID",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','rOOMID')))));	
xf._b("instance('dataDetail')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('dataDetail')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('dataDetail')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("instance('dataDetail')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('dataDetail')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('dataDetail')/dEVICETYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('dataDetail')/DETECTION_RANGE_TYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE')))));	
xf._b("instance('bizData1')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData1')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('room')/rOOMID",xf._g(xf._f('instance',xf._i("room")),xf._h(false, xf._k("child",xf._j('','rOOMID')))));	
xf._b("instance('room')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("room")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('room')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("room")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('room')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("room")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("instance('zhanyong')/rOOMID",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','rOOMID')))));	
xf._b("instance('zhanyong')/tESTTASKID",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','tESTTASKID')))));	
xf._b("instance('zhanyong')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('zhanyong')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('zhanyong')/rOOMUSED",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','rOOMUSED')))));	
xf._b("instance('zhanyong')/version",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("rOOMCNAME",xf._h(false, xf._k("child",xf._j('','rOOMCNAME'))));	
xf._b("im",xf._h(false, xf._k("child",xf._j('','im'))));	
xf._b("rOOMAREA",xf._h(false, xf._k("child",xf._j('','rOOMAREA'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("oCCUPYSTARTDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME'))));	
xf._b("oCCUPYENDDATETIME",xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME'))));	
xf._b("rOOMENAME",xf._h(false, xf._k("child",xf._j('','rOOMENAME'))));	
xf._b("rOOMTYPECNAME",xf._h(false, xf._k("child",xf._j('','rOOMTYPECNAME'))));	
xf._b("iMAGE",xf._h(false, xf._k("child",xf._j('','iMAGE'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMaster')/rOOMCNAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rOOMCNAME')))),'','http://www.justep.com/xui');	
xf._b("data('dataMaster')/rOOMENAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rOOMENAME')))),'','http://www.justep.com/xui');	
xf._b("data('dataMaster')/rOOMTYPE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))),'','http://www.justep.com/xui');	
xf._b("data('dataMaster')/rOOMTYPECNAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rOOMTYPECNAME')))),'','http://www.justep.com/xui');	
xf._b("ROOM_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','ROOM_TYPE_CODE'))),'','http://www.justep.com/xui');	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','http://www.justep.com/xui');	
xf._b("rOOMTYPEENAME",xf._h(false, xf._k("child",xf._j('','rOOMTYPEENAME'))),'','http://www.justep.com/xui');	
xf._b("data('dataMaster')/mEMO",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mEMO')))),'','http://www.justep.com/xui');	
xf._b("data('dataMaster')/IS_DELEGATE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','IS_DELEGATE')))),'','http://www.justep.com/xui');	
xf._b("data('dataMaster')/MANUFACTURE_ID",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))),'','http://www.justep.com/xui');	
xf._b("data('dataMaster')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))),'','http://www.justep.com/xui');	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))),'','http://www.justep.com/xui');	
xf._b("AFC_MANUFACTURER_INFO",xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO'))),'','http://www.justep.com/xui');	
xf._b("mANUFACTUREIDENAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDENAME'))),'','http://www.justep.com/xui');	
xf._b("mANUFACTURETYPE",xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE'))),'','http://www.justep.com/xui');	
xf._b("mANUFACTUREADDRESS",xf._h(false, xf._k("child",xf._j('','mANUFACTUREADDRESS'))),'','http://www.justep.com/xui');	
xf._b("mANUFACTUREPOSTCODE",xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE'))),'','http://www.justep.com/xui');	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))),'','http://www.justep.com/xui');	
xf._b("cONTACTOR",xf._h(false, xf._k("child",xf._j('','cONTACTOR'))),'','http://www.justep.com/xui');	
xf._b("cONTACTMOBILE",xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE'))),'','http://www.justep.com/xui');	
xf._b("fAXNUMBER",xf._h(false, xf._k("child",xf._j('','fAXNUMBER'))),'','http://www.justep.com/xui');	
xf._b("cONTACTEMAIL",xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL'))),'','http://www.justep.com/xui');	
xf._b("oPERATOR_ID",xf._h(false, xf._k("child",xf._j('','oPERATOR_ID'))),'','http://www.justep.com/xui');	
xf._b("recC",xf._h(false, xf._k("child",xf._j('','recC'))));	
xf._b("IM",xf._h(false, xf._k("child",xf._j('','IM'))));	
xf._b("rOOMID",xf._h(false, xf._k("child",xf._j('','rOOMID'))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMaster','mdDefault',null,null,null,null,null,null,null,null,'calculate3',null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMaster')/rOOMTYPE",null,null,"true()",null,null,null,"'房间类型不能为空'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMaster')/rOOMCNAME",null,null,"true()",null,null,null,"'房间中文名不能为空'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMaster')/rOOMENAME",null,null,"true()",null,null,null,"'房间英文名不能为空'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMaster')/MANUFACTURE_ID",null,null,null,null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMaster')/IS_DELEGATE",null,null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMaster')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMaster')/MANUFACTURE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMaster')/IS_DELEGATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMaster')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMaster')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMaster')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dataMaster')/tESTTASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dataMaster')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMaster')/oCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMaster')/ROOM_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMaster')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMaster')/DETECTION_RANGE_TYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dataDetail','mdDefault',null,null,null,'rOOMID','dataMaster',null,null,null,null,null,'whereAll');	
xf._c('xf-bind-17','mdDefault',"instance('dataDetail')/rOOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dataDetail')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('dataDetail')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('dataDetail')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('dataDetail')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('dataDetail')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('dataDetail')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('dataDetail')/DETECTION_RANGE_TYPE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('mdDefault'),"onload",null,function(evt) { xforms.run(xf_action_action5,'mdDefault', evt,false)});	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action6,'mdDefault', evt,false)});	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-25','mdDefault',"instance('bizData1')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('bizData1')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('mdDefault'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_action10,'mdDefault', evt,false)});	
new xforms.XFInstance2('room','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('room',null);	
xf._c('xf-bind-27','mdDefault',"instance('room')/rOOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('room')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('room')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('room')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('zhanyong','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('zhanyong',null);	
xf._c('xf-bind-31','mdDefault',"instance('zhanyong')/rOOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('zhanyong')/tESTTASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('zhanyong')/oCCUPYSTARTDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('zhanyong')/oCCUPYENDDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('zhanyong')/rOOMUSED","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('zhanyong')/version","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_1959285172',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_24=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_374975545');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_374975545", "");}));xf._p(justep('GLOBAL_ID_1959285172'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_24,'GLOBAL_ID_1959285172', evt,false)});	
var xf_menu_GLOBAL_ID_1865639964 = new xforms.XFMenu('GLOBAL_ID_1865639964','context');xf_menu_GLOBAL_ID_1865639964.menu.addContextZone('908bc55bb02d48e9956600325868f936');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1865639964.hide()});xf_menu_GLOBAL_ID_1865639964.menu.setOpenMode('web');	
var xf_action_xf_action_25=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N459221093");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {							var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1865639964'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_25,'GLOBAL_ID_1865639964', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N459221093',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_26=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N581453040');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N581453040", "");}));xf._p(justep('GLOBAL_ID_N459221093'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_26,'GLOBAL_ID_N459221093', evt,false)});	
var xf_action_xf_action_27=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N581453040');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N459221093'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_27,'GLOBAL_ID_N459221093', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_511010242',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_28=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_51904885');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_51904885", "");}));xf._p(justep('GLOBAL_ID_511010242'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_28,'GLOBAL_ID_511010242', evt,false)});	
var xf_menu_GLOBAL_ID_N390774202 = new xforms.XFMenu('GLOBAL_ID_N390774202','context');xf_menu_GLOBAL_ID_N390774202.menu.addContextZone('19f02719360b4829a17362320d9e75cc');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N390774202.hide()});xf_menu_GLOBAL_ID_N390774202.menu.setOpenMode('web');	
var xf_action_xf_action_29=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1044967436");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N390774202'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_29,'GLOBAL_ID_N390774202', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1044967436',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_30=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N2050038236');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N2050038236", "");}));xf._p(justep('GLOBAL_ID_1044967436'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_30,'GLOBAL_ID_1044967436', evt,false)});	
var xf_action_xf_action_31=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N2050038236');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1044967436'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_31,'GLOBAL_ID_1044967436', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var bizData4_part_loaded = false;	
function load_bizData4_part(callback){if (bizData4_part_loaded) return;bizData4_part_loaded = true;	
new xforms.XFInstance2('bizData4','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var bizData4_part_init_loaded = false;	
function load_bizData4_part_init(){if (bizData4_part_init_loaded) return;bizData4_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.assetDelete(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'removeTrigger', evt,false)});	
var xf_trigger_trigger8=new xforms.XFTrigger('trigger8',null,null,null,false,false,false,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.trigger8Click(event)}));xf._p(justep('trigger8'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trigger8', evt,false)});	
new xforms.XFGrid({id:'grdMaster',instance:'dataMaster',systemColumnsPro:'rOOMTYPE,MANUFACTURE_ID,IS_DELEGATE,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,iMAGE1,tESTTASKID,ROOM_TYPE_CODE,DETECTION_OBJECT_TYPE,DEVICE_TYPE_CODE,DETECTION_RANGE_TYPE,mANUFACTUREIDCNAME,calculate3',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,rOOMCNAME,im,rOOMAREA,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,pROJECTNAME,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,rOOMENAME,rOOMTYPECNAME,iMAGE,mEMO,space-column',headNames:'#master_checkbox,房间名称,房间位置图,区域,检测对象类型,检测对象,检测方面类型,项目名称,计划占用起始日期时间,计划占用结束日期时间,房间英文名称,房间类别,房间位置图,备注,&nbsp;',widths:'30,106,100,98,100,100,100,85,111,124,15,9,10,10,*',types:'checkbox,ro,html,ro,ro,ro,ro,ed,ed,ed,ro,ro,html,ro,ro',hiddenColumns:'rOOMENAME,rOOMTYPECNAME,iMAGE,mEMO',aligns:'center,center,center,center,center,center,center,center,,,center,center,center,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:true,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'im','mainActivity4.grdMaster_imRender');this.grid.bindColHTMLCallback(null,'iMAGE','mainActivity4.grdMaster_iMAGERender');}});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.saveMore(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'saveMas', evt,false)});	
var xf_trigger_removeTrigr=new xforms.XFTrigger('removeTrigr',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.removeMore(event)}));xf._p(justep('removeTrigr'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'removeTrigr', evt,false)});	
xforms.load_parts('vDetail');	
var xf_trigger_insertMas=new xforms.XFTrigger('insertMas',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false,false,null,null,null);	
var xf_action_xf_action_21=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.insertMasClick(event)}));xf._p(justep('insertMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_21,'insertMas', evt,false)});	
var xf_trigger_save2Mas=new xforms.XFTrigger('save2Mas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_22=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.save2More(event)}));xf._p(justep('save2Mas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_22,'save2Mas', evt,false)});	
var xf_trigger_remove2=new xforms.XFTrigger('remove2',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_23=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.setDelete(event)}));xf._p(justep('remove2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_23,'remove2', evt,false)});	
new xforms.XFGrid({id:'grid1',instance:'dataDetail',systemColumnsPro:'aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,iMAGE,DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME,DEVICE_TYPE_CODE,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME,DETECTION_RANGE_TYPE,dETECTIONRANGEENAME',onInit:null,type:'grid',smartRender:20,delay:false,ids:'recC,rOOMAREA,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,IM,rOOMID,space-column',headNames:'#master_checkbox,区域,应用检测对象类型,应用检测对象,应用检测方面类型,区域位置图,rOOMID,&nbsp;',widths:'30,82,140,134,146,100,*,*',types:'checkbox,ro,ro,ro,ro,html,ro,ro',hiddenColumns:'rOOMID',aligns:'center,,,,,center,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity4.grid1RowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'IM','mainActivity4.grid1_IMRender');this.grid.bindEnterSelected(null,'IM','false');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptROOMCNAME','text',xf._q("data('dataMaster')/rOOMCNAME"),null,null,null,null,false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptROOMCNAME'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action2,'iptROOMCNAME', evt,false)});	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptROOMCNAME'),"DOMFocusOut",null,function(evt) { xforms.run(xf_action_action7,'iptROOMCNAME', evt,false)});	
var xf_action_action13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptROOMCNAME'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action13,'iptROOMCNAME', evt,false)});	
xf._d('iptROOMENAME','text',xf._q("data('dataMaster')/rOOMENAME"),null,null,null,null,false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptROOMENAME'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action1,'iptROOMENAME', evt,false)});	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptROOMENAME'),"DOMFocusOut",null,function(evt) { xforms.run(xf_action_action8,'iptROOMENAME', evt,false)});	
var xf_action_action14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptROOMENAME'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action14,'iptROOMENAME', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/rOOMTYPE"),labelRef:xf._q("data('dataMaster')/rOOMTYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData4',columns:'ROOM_TYPE_CODE,rOOMTYPECNAME,__c_,rOOMTYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'ROOM_TYPE_CODE,rOOMTYPEENAME',valueColumn:'ROOM_TYPE_CODE',labelColumn:'rOOMTYPECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity4.gridSelect1Closeup'});	
xf._d('textarea1','textarea',xf._q("data('dataMaster')/mEMO"),null,null,null,null,false,false);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('textarea1'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action3,'textarea1', evt,false)});	
var xf_action_action9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('textarea1'),"DOMFocusOut",null,function(evt) { xforms.run(xf_action_action9,'textarea1', evt,false)});	
var xf_action_action15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('textarea1'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action15,'textarea1', evt,false)});	
var xf_trigger_90f7ae49584a45a2853b9f7da4d3deee=new xforms.XFTrigger('90f7ae49584a45a2853b9f7da4d3deee',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.xbl('blob-blobImage1').dialogCancel();}));xf._p(justep('90f7ae49584a45a2853b9f7da4d3deee'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_17,'90f7ae49584a45a2853b9f7da4d3deee', evt,false)});	
var xf_trigger_8c88220874134566a123c53217fd251f=new xforms.XFTrigger('8c88220874134566a123c53217fd251f',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_18=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.xbl('blob-blobImage1').dialogOk();}));xf._p(justep('8c88220874134566a123c53217fd251f'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_18,'8c88220874134566a123c53217fd251f', evt,false)});	
var xf_select1_radio1=new xforms.XFSelect('radio1',false,true,xf._q("data('dataMaster')/IS_DELEGATE"),true,true,false,'',0);	
var xf_item_selectItem1=new xforms.XFItem('selectItem1',null,null);	
var xf_action_action11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.selectItem1Select(event)}));xf._p(justep('selectItem1'),"xforms-select",null,function(evt) { xforms.run(xf_action_action11,'selectItem1', evt,false)});	
var xf_item_selectItem2=new xforms.XFItem('selectItem2',null,null);	
var xf_action_action12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity4.selectItem2Select(event)}));xf._p(justep('selectItem2'),"xforms-select",null,function(evt) { xforms.run(xf_action_action12,'selectItem2', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/MANUFACTURE_ID"),labelRef:xf._q("data('dataMaster')/mANUFACTUREIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivity4.gridSelect4Dropdown',onCloseup:null});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
