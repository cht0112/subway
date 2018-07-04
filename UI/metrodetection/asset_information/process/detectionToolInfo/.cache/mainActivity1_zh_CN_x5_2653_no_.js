
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
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
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'acb5368ca73953d7ca0c046ae8b12b46'};
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
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'4177f13a980a39a40376fae758c5f59c'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'7dde7d6d012cc2992b840515d2f0ba91'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'ee36aee66be0219cdd1d5a50f0ec682f'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'0438518f53d7dc5115c17544e60de9bf'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'c5da2bd390b8ce792afd14e19a154464'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'e42482737ab8e8dc186242ebbcb6a63b'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'b3e6635f144dbf932f0384c25e257801'};
function _xbl_JSClassDefine_pageNavigator(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_pageNavigator.prototype = justep.Object.extend(new justep.XBLObject(), eval({ 
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
			    this.__limit = 20;	    this.__offset = 1;
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'0cccdaff5ad3e3f71b35ed3db7066f44',time:1528079603},m:'92d3cceb3a6ad0aed8a1c83af133507a'};
	var ids=[{id:'4570deff43ee47d397f565b73994eb5b', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'8bee2495805b4bcfaa098e754a1bad11', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'trigger1', name:'xforms:trigger', children:[{id:'xuiLabel12', name:'xforms:label'}]},{id:'trigger3', name:'xforms:trigger', children:[{id:'default83', name:'xforms:label'}]},{id:'trigger4', name:'xforms:trigger', children:[{id:'default89', name:'xforms:label'}]},{id:'trigger6', name:'xforms:trigger', children:[{id:'default93', name:'xforms:label'}]},{id:'trigger2', name:'xforms:trigger', children:[{id:'default95', name:'xforms:label'}]},{id:'trigger5', name:'xforms:trigger', children:[{id:'default99', name:'xforms:label'}]}]},{id:'windowDialog2', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'grid3', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'iptTOOLCNAME', name:'xforms:input'},{id:'iptTOOLENAME', name:'xforms:input'},{id:'iptTOOLMODEL', name:'xforms:input'},{id:'iptTOOLSTANDARDS', name:'xforms:input'},{id:'iptTOOLID', name:'xforms:input'},{id:'iptTOOLUNIT', name:'xforms:input'},{id:'iptINDATE', name:'xforms:input'},{id:'iptINPRICE', name:'xforms:input'},{id:'radio1', name:'xforms:select1', children:[{id:'selectItem1', name:'xforms:item', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default17', name:'xforms:value'}]},{id:'selectItem2', name:'xforms:item', children:[{id:'xuiLabel4', name:'xforms:label'},{id:'default49', name:'xforms:value'}]}]},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel5', name:'xforms:label'},{id:'default60', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'xuiLabel7', name:'xforms:label'},{id:'default21', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'xuiLabel8', name:'xforms:label'},{id:'default18', name:'xforms:value'}]},{id:'textarea1', name:'xforms:textarea'},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default45', name:'xforms:label'},{id:'default47', name:'xforms:value'}]},{id:'gridSelect6', name:'xforms:gridselect1', children:[{id:'default73', name:'xforms:label'},{id:'default74', name:'xforms:value'}]},{id:'gridSelect7', name:'xforms:gridselect1', children:[{id:'default96', name:'xforms:label'},{id:'default97', name:'xforms:value'}]},{id:'input1', name:'xforms:input'},{id:'assetSortCodeWD', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'toolbars3', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'grid1', name:'xforms:grid'}]}]},{id:'waibuchukuDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'guihuanDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'waiburukuDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'lingyongDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'chaxunDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'filter-dialog-64f38675-495e-4696-927c-11f8963957ce', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1233123752', name:'xforms:dialog'}]},{id:'filter-pattern-38bf36af-e4f4-41f8-a568-8c81952ea469', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'4ab7f78e625d44a4bc5c1fffd7a34211', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1899257710', name:'xforms:menu'}]},{id:'GLOBAL_ID_1912904523', name:'xforms:dialog'}]},{id:'filter-dialog-7902968f-a1ac-43d9-9565-12ffbfba0c51', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_483339913', name:'xforms:dialog'}]},{id:'filter-pattern-eeba6725-10e7-451c-ae9e-58acf49e38ce', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'9c86115b7c2c47bf904110887cfd05cc', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1652847224', name:'xforms:menu'}]},{id:'GLOBAL_ID_140913164', name:'xforms:dialog'}]},{id:'filter-dialog-87bbb3ff-cf80-465a-95d0-9a7cd76cd724', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1056924794', name:'xforms:dialog'}]},{id:'filter-pattern-7683514b-9d71-4774-b97c-79004fac4b07', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'59d6cfd0604f4d51a4d6dbf2d0a5a67f', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N466501644', name:'xforms:menu'}]},{id:'GLOBAL_ID_1304324250', name:'xforms:dialog'}]},{id:'objTypeSelect', name:'xforms:gridselect1', children:[{id:'xuiLabel10', name:'xforms:label'},{id:'default24', name:'xforms:value'}]},{id:'objSelect', name:'xforms:gridselect1', children:[{id:'xuiLabel11', name:'xforms:label'},{id:'default27', name:'xforms:value'}]},{id:'rangeSelect', name:'xforms:gridselect1', children:[{id:'xuiLabel9', name:'xforms:label'},{id:'default22', name:'xforms:value'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='0cccdaff5ad3e3f71b35ed3db7066f44';
xforms.Core.fileName='form.js';	
xf._a(null,'trigger1');xf._a('trigger1','xuiLabel12');xf._a(null,'trigger3');xf._a('trigger3','default83');xf._a(null,'trigger4');xf._a('trigger4','default89');xf._a(null,'trigger6');xf._a('trigger6','default93');xf._a(null,'trigger2');xf._a('trigger2','default95');xf._a(null,'trigger5');xf._a('trigger5','default99');xf._a(null,'grid3');xf._a(null,'iptTOOLCNAME');xf._a(null,'iptTOOLENAME');xf._a(null,'iptTOOLMODEL');xf._a(null,'iptTOOLSTANDARDS');xf._a(null,'iptTOOLID');xf._a(null,'iptTOOLUNIT');xf._a(null,'iptINDATE');xf._a(null,'iptINPRICE');xf._a(null,'radio1');xf._a('radio1','selectItem1');xf._a('selectItem1','xuiLabel3');xf._a('radio1','selectItem2');xf._a('selectItem2','xuiLabel4');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel5');xf._a('gridSelect1','default61');xf._a(null,'gridSelect3');xf._a('gridSelect3','xuiLabel7');xf._a('gridSelect3','default35');xf._a(null,'gridSelect4');xf._a('gridSelect4','xuiLabel8');xf._a('gridSelect4','default19');xf._a(null,'textarea1');xf._a(null,'gridSelect5');xf._a('gridSelect5','default45');xf._a('gridSelect5','default51');xf._a(null,'gridSelect6');xf._a('gridSelect6','default73');xf._a('gridSelect6','default82');xf._a(null,'gridSelect7');xf._a('gridSelect7','default96');xf._a('gridSelect7','default98');xf._a(null,'input1');xf._a(null,'grid1');xf._a(null,'objTypeSelect');xf._a('objTypeSelect','xuiLabel10');xf._a('objTypeSelect','default25');xf._a(null,'objSelect');xf._a('objSelect','xuiLabel11');xf._a('objSelect','default33');xf._a(null,'rangeSelect');xf._a('rangeSelect','xuiLabel9');xf._a('rangeSelect','default23');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMaster')/tOOLTYPEID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLTYPEID')))));	
xf._b("true()",xf._f('true'));	
xf._b("'工具类型不能为空!'",xf._i("工具类型不能为空!"));	
xf._b("instance('dataMaster')/tOOLMODEL",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLMODEL')))));	
xf._b("'工具型号不能为空!'",xf._i("工具型号不能为空!"));	
xf._b("instance('dataMaster')/tOOLSTANDARDS",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLSTANDARDS')))));	
xf._b("'工具规格不能为空!'",xf._i("工具规格不能为空!"));	
xf._b("instance('dataMaster')/tOOLID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLID')))));	
xf._b("'工具ID不能为空!'",xf._i("工具ID不能为空!"));	
xf._b("instance('dataMaster')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("'供应商名称不能为空!'",xf._i("供应商名称不能为空!"));	
xf._b("instance('dataMaster')/uSESTATECODE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','uSESTATECODE')))));	
xf._b("'状态不能为空!'",xf._i("状态不能为空!"));	
xf._b("instance('dataMaster')/tOOLCNAME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLCNAME')))));	
xf._b("'工具中文名称不能为空!'",xf._i("工具中文名称不能为空!"));	
xf._b("instance('dataMaster')/iNDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDATE')))));	
xf._b("'入账时间不能为空!'",xf._i("入账时间不能为空!"));	
xf._b("instance('dataMaster')/tOOLRESOURCE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLRESOURCE')))));	
xf._b("instance('dataMaster')/iNPRICE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNPRICE')))));	
xf._b("instance('dataMaster')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("instance('dataMaster')/rECIVESTATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rECIVESTATE')))));	
xf._b("instance('dataMaster')/USE_STATE_CODE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','USE_STATE_CODE')))));	
xf._b("instance('dataMaster')/TOOL_SORT_CODE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TOOL_SORT_CODE')))));	
xf._b("instance('dataMaster')/TOOL_CATEGORY_CODE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TOOL_CATEGORY_CODE')))));	
xf._b("instance('dataMaster')/TOOL_TYPE_CODE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TOOL_TYPE_CODE')))));	
xf._b("instance('dataDetail')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("'应用检测对象类型不能为空!'",xf._i("应用检测对象类型不能为空!"));	
xf._b("instance('dataDetail')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("'应用检测对象不能为空!'",xf._i("应用检测对象不能为空!"));	
xf._b("instance('dataDetail')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("'应用检测方面类型不能为空!'",xf._i("应用检测方面类型不能为空!"));	
xf._b("instance('dataDetail')/tOOLTYPEID",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','tOOLTYPEID')))));	
xf._b("instance('dataDetail')/tOOLNO2",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','tOOLNO2')))));	
xf._b("instance('bizData1')/version",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('bizData1')/pARENTLEV",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pARENTLEV')))));	
xf._b("instance('devicetypecodeData')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("devicetypecodeData")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('devicetypecodeData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("devicetypecodeData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('gongyingshang')/mANUFACTUREIDCNAME",xf._g(xf._f('instance',xf._i("gongyingshang")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("instance('gongyingshang')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("gongyingshang")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('gongyingshang')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("gongyingshang")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('tool_relationship')/tOOLCATEGORY",xf._g(xf._f('instance',xf._i("tool_relationship")),xf._h(false, xf._k("child",xf._j('','tOOLCATEGORY')))));	
xf._b("instance('tool_relationship')/tOOLSORT",xf._g(xf._f('instance',xf._i("tool_relationship")),xf._h(false, xf._k("child",xf._j('','tOOLSORT')))));	
xf._b("instance('tool_relationship')/tOOLTYPE",xf._g(xf._f('instance',xf._i("tool_relationship")),xf._h(false, xf._k("child",xf._j('','tOOLTYPE')))));	
xf._b("instance('tool_category_code')/version",xf._g(xf._f('instance',xf._i("tool_category_code")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('tool_type_code')/version",xf._g(xf._f('instance',xf._i("tool_type_code")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('tool_type_code')/pARENTLEV",xf._g(xf._f('instance',xf._i("tool_type_code")),xf._h(false, xf._k("child",xf._j('','pARENTLEV')))));	
xf._b("instance('caozuoleixing')/oPERATEDATETIME",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','oPERATEDATETIME')))));	
xf._b("instance('caozuoleixing')/oPERATETYPE",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','oPERATETYPE')))));	
xf._b("instance('caozuoleixing')/pROJECTID",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('caozuoleixing')/tOOLTYPEID",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','tOOLTYPEID')))));	
xf._b("instance('caozuoleixing')/tOOLIDSTATE",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','tOOLIDSTATE')))));	
xf._b("instance('caozuoleixing')/tOOLNUMBER",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','tOOLNUMBER')))));	
xf._b("instance('caozuoleixing')/mOVINGREASON",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','mOVINGREASON')))));	
xf._b("instance('caozuoleixing')/tOOLNO",xf._g(xf._f('instance',xf._i("caozuoleixing")),xf._h(false, xf._k("child",xf._j('','tOOLNO')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("tOOLCNAME",xf._h(false, xf._k("child",xf._j('','tOOLCNAME'))));	
xf._b("tOOLSORTCNAME",xf._h(false, xf._k("child",xf._j('','tOOLSORTCNAME'))));	
xf._b("tOOLMODEL",xf._h(false, xf._k("child",xf._j('','tOOLMODEL'))));	
xf._b("tOOLSTANDARDS",xf._h(false, xf._k("child",xf._j('','tOOLSTANDARDS'))));	
xf._b("iNDATE",xf._h(false, xf._k("child",xf._j('','iNDATE'))));	
xf._b("iNPRICE",xf._h(false, xf._k("child",xf._j('','iNPRICE'))));	
xf._b("uSESTATECODECNAME",xf._h(false, xf._k("child",xf._j('','uSESTATECODECNAME'))));	
xf._b("aSSETSORTCODE",xf._h(false, xf._k("child",xf._j('','aSSETSORTCODE'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMaster')/tOOLCNAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLCNAME')))));	
xf._b("data('dataMaster')/tOOLENAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLENAME')))));	
xf._b("data('dataMaster')/tOOLMODEL",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLMODEL')))));	
xf._b("data('dataMaster')/tOOLSTANDARDS",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLSTANDARDS')))));	
xf._b("data('dataMaster')/tOOLID",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLID')))));	
xf._b("data('dataMaster')/tOOLUNIT",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLUNIT')))));	
xf._b("data('dataMaster')/iNDATE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDATE')))));	
xf._b("data('dataMaster')/iNPRICE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNPRICE')))));	
xf._b("data('dataMaster')/sHAREDFLAG",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("data('dataMaster')/uSESTATECODE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','uSESTATECODE')))));	
xf._b("data('bizData2')/uSESTATECODECNAME",xf._g(xf._f('data',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','uSESTATECODECNAME')))));	
xf._b("USE_STATE_CODE",xf._h(false, xf._k("child",xf._j('','USE_STATE_CODE'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("uSESTATECODEENAME",xf._h(false, xf._k("child",xf._j('','uSESTATECODEENAME'))),'','');	
xf._b("data('dataMaster')/mANUFACTUREID",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("data('gongyingshang')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("gongyingshang")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
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
xf._b("data('dataMaster')/tOOLRESOURCE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','tOOLRESOURCE')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('dataMaster')/mEMO",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('tool_relationship')/tOOLCATEGORY",xf._g(xf._f('data',xf._i("tool_relationship")),xf._h(false, xf._k("child",xf._j('','tOOLCATEGORY')))));	
xf._b("tOOLCATEGORYCNAME",xf._h(false, xf._k("child",xf._j('','tOOLCATEGORYCNAME'))));	
xf._b("TOOL_CATEGORY_CODE",xf._h(false, xf._k("child",xf._j('','TOOL_CATEGORY_CODE'))));	
xf._b("tOOLCATEGORYENAME",xf._h(false, xf._k("child",xf._j('','tOOLCATEGORYENAME'))),'','');	
xf._b("nUMSCODE",xf._h(false, xf._k("child",xf._j('','nUMSCODE'))),'','');	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))),'','');	
xf._b("data('tool_relationship')/tOOLTYPE",xf._g(xf._f('data',xf._i("tool_relationship")),xf._h(false, xf._k("child",xf._j('','tOOLTYPE')))));	
xf._b("tOOLTYPECNAME",xf._h(false, xf._k("child",xf._j('','tOOLTYPECNAME'))));	
xf._b("TOOL_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','TOOL_TYPE_CODE'))));	
xf._b("tOOLTYPEENAME",xf._h(false, xf._k("child",xf._j('','tOOLTYPEENAME'))));	
xf._b("pARENTLEV",xf._h(false, xf._k("child",xf._j('','pARENTLEV'))));	
xf._b("data('tool_relationship')/tOOLSORT",xf._g(xf._f('data',xf._i("tool_relationship")),xf._h(false, xf._k("child",xf._j('','tOOLSORT')))));	
xf._b("TOOL_SORT_CODE",xf._h(false, xf._k("child",xf._j('','TOOL_SORT_CODE'))));	
xf._b("tOOLSORTENAME",xf._h(false, xf._k("child",xf._j('','tOOLSORTENAME'))));	
xf._b("data('dataMaster')/aSSETSORTCODE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aSSETSORTCODE')))));	
xf._b("recCC",xf._h(false, xf._k("child",xf._j('','recCC'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("tOOLTYPEID",xf._h(false, xf._k("child",xf._j('','tOOLTYPEID'))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Last"))));	
xf._b("not(call('justep.XData.canDo','dataDetail','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataDetail"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dataDetail','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataDetail"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataDetail','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataDetail"),xf._i("Next"))));	
xf._b("data('dataDetail')/aPPLYFOROBJECT",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("data('dataDetail')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('dataDetail')/aPPLYFORDEVICETYPE",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("data('dataDetail')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('dataDetail')/aPPLYFORRANGE",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("data('dataDetail')/dETECTIONRANGECNAME",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME')))));	
xf._b("DETECTION_RANGE_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE'))));	
xf._b("dETECTIONRANGEENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEENAME'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('date', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('select', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMaster','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMaster')/tOOLTYPEID",null,null,"true()",null,null,null,"'工具类型不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMaster')/tOOLMODEL",null,null,"true()",null,null,null,"'工具型号不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMaster')/tOOLSTANDARDS",null,null,"true()",null,null,null,"'工具规格不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMaster')/tOOLID",null,null,"true()",null,null,null,"'工具ID不能为空!'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMaster')/mANUFACTUREID",null,null,"true()",null,null,null,"'供应商名称不能为空!'");	
xf._c('xf-bind-5','mdDefault',"instance('dataMaster')/uSESTATECODE",null,null,"true()",null,null,null,"'状态不能为空!'");	
xf._c('xf-bind-6','mdDefault',"instance('dataMaster')/tOOLCNAME",null,null,"true()",null,null,null,"'工具中文名称不能为空!'");	
xf._c('xf-bind-7','mdDefault',"instance('dataMaster')/iNDATE",null,null,"true()",null,null,null,"'入账时间不能为空!'");	
xf._c('xf-bind-8','mdDefault',"instance('dataMaster')/tOOLTYPEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMaster')/uSESTATECODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMaster')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dataMaster')/tOOLRESOURCE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dataMaster')/iNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMaster')/iNPRICE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMaster')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMaster')/rECIVESTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMaster')/USE_STATE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('dataMaster')/TOOL_SORT_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dataMaster')/TOOL_CATEGORY_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('dataMaster')/TOOL_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dataDetail','mdDefault',null,null,null,'tOOLTYPEID','dataMaster',null,null,null,null,null,'whereAll');	
xf._c('xf-bind-20','mdDefault',"instance('dataDetail')/aPPLYFOROBJECT",null,null,"true()",null,null,null,"'应用检测对象类型不能为空!'");	
xf._c('xf-bind-21','mdDefault',"instance('dataDetail')/aPPLYFORDEVICETYPE",null,null,"true()",null,null,null,"'应用检测对象不能为空!'");	
xf._c('xf-bind-22','mdDefault',"instance('dataDetail')/aPPLYFORRANGE",null,null,"true()",null,null,null,"'应用检测方面类型不能为空!'");	
xf._c('xf-bind-23','mdDefault',"instance('dataDetail')/tOOLTYPEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('dataDetail')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('dataDetail')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('dataDetail')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('dataDetail')/tOOLNO2","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-28','mdDefault',"instance('bizData1')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('bizData1')/pARENTLEV","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('detectionobjecttypeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('detectionrangetypeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('gongyingshang','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-32','mdDefault',"instance('gongyingshang')/mANUFACTUREIDCNAME",null,null,"true()",null,null,null,"'供应商名称不能为空!'");	
xf._c('xf-bind-33','mdDefault',"instance('gongyingshang')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('gongyingshang')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'mdDefault', evt,false)});	
new xforms.XFInstance2('tool_relationship','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('tool_relationship',null);	
xf._c('xf-bind-35','mdDefault',"instance('tool_relationship')/tOOLCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('tool_relationship')/tOOLSORT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('tool_relationship')/tOOLTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('tool_category_code','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-38','mdDefault',"instance('tool_category_code')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('tool_type_code','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-39','mdDefault',"instance('tool_type_code')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('tool_type_code')/pARENTLEV","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_1233123752',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_586293890');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_586293890", "");}));xf._p(justep('GLOBAL_ID_1233123752'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_1233123752', evt,false)});	
var xf_menu_GLOBAL_ID_N1899257710 = new xforms.XFMenu('GLOBAL_ID_N1899257710','context');xf_menu_GLOBAL_ID_N1899257710.menu.addContextZone('4ab7f78e625d44a4bc5c1fffd7a34211');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1899257710.hide()});xf_menu_GLOBAL_ID_N1899257710.menu.setOpenMode('web');	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1912904523");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1899257710'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N1899257710', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1912904523',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_839106794');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_839106794", "");}));xf._p(justep('GLOBAL_ID_1912904523'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_1912904523', evt,false)});	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_839106794');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1912904523'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_1912904523', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_483339913',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1757451540');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1757451540", "");}));xf._p(justep('GLOBAL_ID_483339913'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_483339913', evt,false)});	
var xf_menu_GLOBAL_ID_1652847224 = new xforms.XFMenu('GLOBAL_ID_1652847224','context');xf_menu_GLOBAL_ID_1652847224.menu.addContextZone('9c86115b7c2c47bf904110887cfd05cc');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1652847224.hide()});xf_menu_GLOBAL_ID_1652847224.menu.setOpenMode('web');	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_140913164");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1652847224'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_1652847224', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_140913164',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1070413297');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1070413297", "");}));xf._p(justep('GLOBAL_ID_140913164'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_14,'GLOBAL_ID_140913164', evt,false)});	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1070413297');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_140913164'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_15,'GLOBAL_ID_140913164', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1056924794',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1843630065');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1843630065", "");}));xf._p(justep('GLOBAL_ID_1056924794'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_16,'GLOBAL_ID_1056924794', evt,false)});	
var xf_menu_GLOBAL_ID_N466501644 = new xforms.XFMenu('GLOBAL_ID_N466501644','context');xf_menu_GLOBAL_ID_N466501644.menu.addContextZone('59d6cfd0604f4d51a4d6dbf2d0a5a67f');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N466501644.hide()});xf_menu_GLOBAL_ID_N466501644.menu.setOpenMode('web');	
var xf_action_xf_action_17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1304324250");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {	var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N466501644'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_17,'GLOBAL_ID_N466501644', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1304324250',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_18=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_997949444');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_997949444", "");}));xf._p(justep('GLOBAL_ID_1304324250'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_18,'GLOBAL_ID_1304324250', evt,false)});	
var xf_action_xf_action_19=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_997949444');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1304324250'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_19,'GLOBAL_ID_1304324250', evt,false)});	
new xforms.XFExtSelect({id:'objTypeSelect',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataDetail')/aPPLYFOROBJECT"),labelRef:xf._q("data('dataDetail')/dETECTIONOBJECTCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detectionobjecttypeData',columns:'dETECTIONOBJECTCNAME,DETECTION_OBJECT_TYPE,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity1.objTypeSelectCloseup'});	
new xforms.XFExtSelect({id:'objSelect',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataDetail')/aPPLYFORDEVICETYPE"),labelRef:xf._q("data('dataDetail')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'devicetypecodeData',columns:'dEVICETYPECNAME,__c_,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'rangeSelect',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataDetail')/aPPLYFORRANGE"),labelRef:xf._q("data('dataDetail')/dETECTIONRANGECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'detectionrangetypeData',columns:'DETECTION_RANGE_TYPE,dETECTIONRANGECNAME,__c_,dETECTIONRANGEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_RANGE_TYPE,dETECTIONRANGEENAME',valueColumn:'DETECTION_RANGE_TYPE',labelColumn:'dETECTIONRANGECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var devicetypecodeData_part_loaded = false;	
function load_devicetypecodeData_part(callback){if (devicetypecodeData_part_loaded) return;devicetypecodeData_part_loaded = true;	
new xforms.XFInstance2('devicetypecodeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-30','mdDefault',"instance('devicetypecodeData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('devicetypecodeData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var devicetypecodeData_part_init_loaded = false;	
function load_devicetypecodeData_part_init(){if (devicetypecodeData_part_init_loaded) return;devicetypecodeData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var caozuoleixing_part_loaded = false;	
function load_caozuoleixing_part(callback){if (caozuoleixing_part_loaded) return;caozuoleixing_part_loaded = true;	
new xforms.XFInstance2('caozuoleixing','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('caozuoleixing',null);	
xf._c('xf-bind-41','mdDefault',"instance('caozuoleixing')/oPERATEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('caozuoleixing')/oPERATETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('caozuoleixing')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('caozuoleixing')/tOOLTYPEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('caozuoleixing')/tOOLIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('caozuoleixing')/tOOLNUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('caozuoleixing')/mOVINGREASON","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('caozuoleixing')/tOOLNO","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var caozuoleixing_part_init_loaded = false;	
function load_caozuoleixing_part_init(){if (caozuoleixing_part_init_loaded) return;caozuoleixing_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.trigger1Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trigger1', evt,false)});	
var xf_trigger_trigger3=new xforms.XFTrigger('trigger3',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.trigger3Click(event)}));xf._p(justep('trigger3'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trigger3', evt,false)});	
var xf_trigger_trigger4=new xforms.XFTrigger('trigger4',null,null,null,false,false,false,null,null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.trigger4Click(event)}));xf._p(justep('trigger4'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action5,'trigger4', evt,false)});	
var xf_trigger_trigger6=new xforms.XFTrigger('trigger6',null,null,null,false,false,false,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.trigger6Click(event)}));xf._p(justep('trigger6'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trigger6', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,null,null,false,false,false,null,null,null);	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action6,'trigger2', evt,false)});	
var xf_trigger_trigger5=new xforms.XFTrigger('trigger5',null,null,null,false,false,false,null,null,null);	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.trigger5Click(event)}));xf._p(justep('trigger5'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action7,'trigger5', evt,false)});	
new xforms.XFGrid({id:'grid3',instance:'dataMaster',systemColumnsPro:'tOOLENAME,tOOLTYPEID,tOOLID,uSESTATECODE,tOOLUNIT,mANUFACTUREID,tOOLRESOURCE,sHAREDFLAG,mEMO,rECIVESTATE,USE_STATE_CODE,TOOL_SORT_CODE,TOOL_CATEGORY_CODE,tOOLCATEGORYCNAME,TOOL_TYPE_CODE,tOOLTYPECNAME',onInit:null,type:'grid',smartRender:20,delay:false,ids:'recCB,tOOLCNAME,tOOLSORTCNAME,tOOLMODEL,tOOLSTANDARDS,iNDATE,iNPRICE,uSESTATECODECNAME,aSSETSORTCODE,space-column',headNames:'#master_checkbox,工具名称,工具类型,工具型号,工具规格,入账时间,入账价值,状态,固定资产分类,&nbsp;',widths:'30,100,100,99,88,121,99,100,100,*',types:'checkbox,ro,ro,ro,ro,date,ro,ro,ed,ro',hiddenColumns:'',aligns:'center,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'false',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:'mainActivity1.grid3RowClick',onRowDblClick:'mainActivity1.grdMasterRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'iNDATE','yyyy-MM-dd');}});	
xforms.load_parts('vDetail');	
new xforms.XFGrid({id:'grid1',instance:'dataDetail',systemColumnsPro:'aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,tOOLNO2',onInit:null,type:'grid',smartRender:20,delay:false,ids:'recCC,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,tOOLTYPEID,space-column',headNames:'#master_checkbox,应用检测对象类型,应用检测对象,应用检测方面类型,tOOLTYPEID,&nbsp;',widths:'25,182,177,178,*,*',types:'checkbox,select,select,select,ro,ro',hiddenColumns:'tOOLTYPEID',aligns:'center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:'mainActivity1.grid1RowValueChanged',groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColEditor(null,'dETECTIONOBJECTCNAME','objTypeSelect');this.grid.bindEnterSelected(null,'dETECTIONOBJECTCNAME','false');this.grid.bindColEditor(null,'dEVICETYPECNAME','objSelect');this.grid.bindColEditor(null,'dETECTIONRANGECNAME','rangeSelect');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptTOOLCNAME','text',xf._q("data('dataMaster')/tOOLCNAME"),null,null,null,null,false,false);	
xf._d('iptTOOLENAME','text',xf._q("data('dataMaster')/tOOLENAME"),null,null,null,null,false,false);	
xf._d('iptTOOLMODEL','text',xf._q("data('dataMaster')/tOOLMODEL"),null,null,null,null,false,false);	
xf._d('iptTOOLSTANDARDS','text',xf._q("data('dataMaster')/tOOLSTANDARDS"),null,null,null,null,false,false);	
xf._d('iptTOOLID','text',xf._q("data('dataMaster')/tOOLID"),null,null,null,null,false,false);	
xf._d('iptTOOLUNIT','text',xf._q("data('dataMaster')/tOOLUNIT"),null,null,null,null,false,false);	
xf._d('iptINDATE','text',xf._q("data('dataMaster')/iNDATE"),null,null,null,"yyyy-MM-dd",false,false);	
xf._d('iptINPRICE','text',xf._q("data('dataMaster')/iNPRICE"),null,null,null,null,false,false);	
var xf_select1_radio1=new xforms.XFSelect('radio1',false,true,xf._q("data('dataMaster')/sHAREDFLAG"),true,false,false,'',0);	
var xf_item_selectItem1=new xforms.XFItem('selectItem1',null,null);	
var xf_item_selectItem2=new xforms.XFItem('selectItem2',null,null);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:xf._q("data('bizData2')/uSESTATECODECNAME"),allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/uSESTATECODE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData2',columns:'uSESTATECODECNAME,USE_STATE_CODE,__c_,uSESTATECODEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'USE_STATE_CODE,uSESTATECODEENAME',valueColumn:'USE_STATE_CODE',labelColumn:'uSESTATECODECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default10"></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/mANUFACTUREID"),labelRef:xf._q("data('gongyingshang')/mANUFACTUREIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'gongyingshang',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivity1.gridSelect3Dropdown',onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/tOOLRESOURCE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default76"><row id="default77"><cell id="default78">1</cell><cell id="default79">采购</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea1','textarea',xf._q("data('dataMaster')/mEMO"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('tool_relationship')/tOOLCATEGORY"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'tool_category_code',columns:'TOOL_CATEGORY_CODE,tOOLCATEGORYCNAME,__c_,tOOLCATEGORYENAME,nUMSCODE,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'TOOL_CATEGORY_CODE,tOOLCATEGORYENAME,nUMSCODE,version',valueColumn:'TOOL_CATEGORY_CODE',labelColumn:'tOOLCATEGORYCNAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default109"></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('tool_relationship')/tOOLTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'tool_type_code',columns:'TOOL_TYPE_CODE,tOOLTYPECNAME,__c_,tOOLTYPEENAME,nUMSCODE,version,pARENTLEV',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'TOOL_TYPE_CODE,tOOLTYPEENAME,nUMSCODE,version,pARENTLEV',valueColumn:'TOOL_TYPE_CODE',labelColumn:'tOOLTYPECNAME',extColumn:null,labels:',,,,,,',aligns:',,,,,,',types:'ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivity1.gridSelect6Dropdown',onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('tool_relationship')/tOOLSORT"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'TOOL_SORT_CODE,tOOLSORTCNAME,__c_,tOOLSORTENAME,nUMSCODE,version,pARENTLEV',headerH:null,rowH:'36',dropdownClass:'xui-grid-hide-VLine',hiddenColumns:'TOOL_SORT_CODE,tOOLSORTENAME,nUMSCODE,version,pARENTLEV',valueColumn:'TOOL_SORT_CODE',labelColumn:'tOOLSORTCNAME',extColumn:null,labels:',,,,,,',aligns:',,,,,,',types:'ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivity1.gridSelect7Dropdown',onCloseup:null});	
xf._d('input1','text',xf._q("data('dataMaster')/aSSETSORTCODE"),null,null,null,null,false,false);	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity1.input1Focus(event)}));xf._p(justep('input1'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action8,'input1', evt,false)});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
