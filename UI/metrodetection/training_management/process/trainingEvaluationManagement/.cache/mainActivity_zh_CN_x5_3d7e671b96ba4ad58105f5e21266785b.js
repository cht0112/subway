
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/smartFilter.xbl.xml#smartFilter"] = _xbl_JSClassDefine_smartFilter;
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

function _xbl_JSClassDefine_smartFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_smartFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new justep.SmartFilter(this));
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

	var ids=[{id:'742b13db6682441daf2979b96afd288a', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'f95354c703494f61be517c41e8fcfea4', name:'xforms:label'}]},{id:'deleteTrigger', name:'xforms:trigger', children:[{id:'default76', name:'xforms:label'}]},{id:'406f7b6ee5654cb3b9b8aa2cfbfb13ed', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'smartFilter1', name:'/UI/system/components/smartFilter.xbl.xml#smartFilter', children:[{id:'smartFilter1_input_1935496059', name:'xforms:input'}]},{id:'trigger1', name:'xforms:trigger', children:[{id:'default24', name:'xforms:label'}]}]},{id:'grdMain', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMas', name:'xforms:trigger', children:[{id:'d3422ab4bb2042fbbac285f8d94f4a38', name:'xforms:label'}]},{id:'saveMas', name:'xforms:trigger', children:[{id:'4a091bf6eec24947a1765ac3269d2f77', name:'xforms:label'}]}]},{id:'iptEVALUATION_CODE', name:'xforms:input'},{id:'iptEVALUATION_NO', name:'xforms:input'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default10', name:'xforms:label'},{id:'default11', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default62', name:'xforms:label'},{id:'default63', name:'xforms:value'}]},{id:'radio1', name:'xforms:select1', children:[{id:'selectItem1', name:'xforms:item', children:[{id:'default20', name:'xforms:label'},{id:'default21', name:'xforms:value'}]},{id:'selectItem2', name:'xforms:item', children:[{id:'default22', name:'xforms:label'},{id:'default23', name:'xforms:value'}]},{id:'selectItem5', name:'xforms:item', children:[{id:'default36', name:'xforms:label'},{id:'default37', name:'xforms:value'}]}]},{id:'radio2', name:'xforms:select1', children:[{id:'selectItem3', name:'xforms:item', children:[{id:'default32', name:'xforms:label'},{id:'default33', name:'xforms:value'}]},{id:'selectItem4', name:'xforms:item', children:[{id:'default34', name:'xforms:label'},{id:'default35', name:'xforms:value'}]},{id:'selectItem6', name:'xforms:item', children:[{id:'default38', name:'xforms:label'},{id:'default39', name:'xforms:value'}]},{id:'selectItem7', name:'xforms:item', children:[{id:'default40', name:'xforms:label'},{id:'default41', name:'xforms:value'}]}]},{id:'iptWORK_TEST_YEAR', name:'xforms:input'},{id:'iptWORK_EXP_YEAR', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'},{id:'textarea2', name:'xforms:textarea'},{id:'input2', name:'xforms:input'},{id:'checkbox7', name:'xforms:select', children:[{id:'selectItem24', name:'xforms:item', children:[{id:'default151', name:'xforms:label'},{id:'default152', name:'xforms:value'}]},{id:'selectItem29', name:'xforms:item', children:[{id:'default153', name:'xforms:label'},{id:'default154', name:'xforms:value'}]},{id:'selectItem30', name:'xforms:item', children:[{id:'default155', name:'xforms:label'},{id:'default156', name:'xforms:value'}]},{id:'selectItem31', name:'xforms:item', children:[{id:'default157', name:'xforms:label'},{id:'default158', name:'xforms:value'}]}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default92', name:'xforms:label'},{id:'default93', name:'xforms:value'}]},{id:'radio5', name:'xforms:select1', children:[{id:'selectItem27', name:'xforms:item', children:[{id:'default80', name:'xforms:label'},{id:'default81', name:'xforms:value'}]},{id:'selectItem28', name:'xforms:item', children:[{id:'default82', name:'xforms:label'},{id:'default83', name:'xforms:value'}]}]},{id:'input6', name:'xforms:input'},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default72', name:'xforms:label'},{id:'default73', name:'xforms:value'}]},{id:'checkbox5', name:'xforms:select', children:[{id:'selectItem34', name:'xforms:item', children:[{id:'default94', name:'xforms:label'},{id:'default95', name:'xforms:value'}]},{id:'selectItem35', name:'xforms:item', children:[{id:'default96', name:'xforms:label'},{id:'default97', name:'xforms:value'}]},{id:'selectItem36', name:'xforms:item', children:[{id:'default98', name:'xforms:label'},{id:'default99', name:'xforms:value'}]},{id:'selectItem37', name:'xforms:item', children:[{id:'default100', name:'xforms:label'},{id:'default101', name:'xforms:value'}]},{id:'selectItem38', name:'xforms:item', children:[{id:'default102', name:'xforms:label'},{id:'default103', name:'xforms:value'}]},{id:'selectItem39', name:'xforms:item', children:[{id:'default104', name:'xforms:label'},{id:'default105', name:'xforms:value'}]},{id:'selectItem40', name:'xforms:item', children:[{id:'default106', name:'xforms:label'},{id:'default107', name:'xforms:value'}]},{id:'selectItem41', name:'xforms:item', children:[{id:'default108', name:'xforms:label'},{id:'default109', name:'xforms:value'}]},{id:'selectItem42', name:'xforms:item', children:[{id:'default110', name:'xforms:label'},{id:'default111', name:'xforms:value'}]},{id:'selectItem43', name:'xforms:item', children:[{id:'default112', name:'xforms:label'},{id:'default113', name:'xforms:value'}]},{id:'selectItem44', name:'xforms:item', children:[{id:'default114', name:'xforms:label'},{id:'default115', name:'xforms:value'}]},{id:'selectItem45', name:'xforms:item', children:[{id:'default116', name:'xforms:label'},{id:'default117', name:'xforms:value'}]},{id:'selectItem46', name:'xforms:item', children:[{id:'default118', name:'xforms:label'},{id:'default119', name:'xforms:value'}]},{id:'selectItem47', name:'xforms:item', children:[{id:'default120', name:'xforms:label'},{id:'default121', name:'xforms:value'}]},{id:'selectItem48', name:'xforms:item', children:[{id:'default122', name:'xforms:label'},{id:'default123', name:'xforms:value'}]},{id:'selectItem49', name:'xforms:item', children:[{id:'default124', name:'xforms:label'},{id:'default125', name:'xforms:value'}]},{id:'selectItem50', name:'xforms:item', children:[{id:'default126', name:'xforms:label'},{id:'default127', name:'xforms:value'}]},{id:'selectItem51', name:'xforms:item', children:[{id:'default128', name:'xforms:label'},{id:'default129', name:'xforms:value'}]},{id:'selectItem52', name:'xforms:item', children:[{id:'default130', name:'xforms:label'},{id:'default131', name:'xforms:value'}]},{id:'selectItem53', name:'xforms:item', children:[{id:'default132', name:'xforms:label'},{id:'default133', name:'xforms:value'}]},{id:'selectItem54', name:'xforms:item', children:[{id:'default134', name:'xforms:label'},{id:'default135', name:'xforms:value'}]}]},{id:'checkbox3', name:'xforms:select', children:[{id:'selectItem8', name:'xforms:item', children:[{id:'default42', name:'xforms:label'},{id:'default43', name:'xforms:value'}]},{id:'selectItem9', name:'xforms:item', children:[{id:'default44', name:'xforms:label'},{id:'default45', name:'xforms:value'}]},{id:'selectItem10', name:'xforms:item', children:[{id:'default46', name:'xforms:label'},{id:'default47', name:'xforms:value'}]},{id:'selectItem11', name:'xforms:item', children:[{id:'default48', name:'xforms:label'},{id:'default49', name:'xforms:value'}]},{id:'selectItem12', name:'xforms:item', children:[{id:'default50', name:'xforms:label'},{id:'default51', name:'xforms:value'}]},{id:'selectItem13', name:'xforms:item', children:[{id:'default52', name:'xforms:label'},{id:'default53', name:'xforms:value'}]},{id:'selectItem14', name:'xforms:item', children:[{id:'default54', name:'xforms:label'},{id:'default55', name:'xforms:value'}]},{id:'selectItem15', name:'xforms:item', children:[{id:'default56', name:'xforms:label'},{id:'default57', name:'xforms:value'}]},{id:'selectItem16', name:'xforms:item', children:[{id:'default58', name:'xforms:label'},{id:'default59', name:'xforms:value'}]},{id:'selectItem17', name:'xforms:item', children:[{id:'default60', name:'xforms:label'},{id:'default61', name:'xforms:value'}]}]},{id:'textarea8', name:'xforms:textarea'}]}]},{id:'filter-pattern-42e277a5-f2c5-4590-8dda-bfedfcd9ee56', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'6337abe862364337a0815800b99a878d', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_936111925', name:'xforms:menu'}]},{id:'GLOBAL_ID_2110351485', name:'xforms:dialog'}]},{id:'filter-dialog-8a96ca53-1550-43c3-ac45-cf1c2caed2f7', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_335264521', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','f95354c703494f61be517c41e8fcfea4');xf._a(null,'deleteTrigger');xf._a('deleteTrigger','default76');xf._a(null,'smartFilter1_input_1935496059');xf._a(null,'trigger1');xf._a('trigger1','default24');xf._a(null,'grdMain');xf._a(null,'insertMas');xf._a('insertMas','d3422ab4bb2042fbbac285f8d94f4a38');xf._a(null,'saveMas');xf._a('saveMas','4a091bf6eec24947a1765ac3269d2f77');xf._a(null,'iptEVALUATION_CODE');xf._a(null,'iptEVALUATION_NO');xf._a(null,'gridSelect2');xf._a('gridSelect2','default10');xf._a('gridSelect2','default12');xf._a(null,'gridSelect3');xf._a('gridSelect3','default62');xf._a('gridSelect3','default64');xf._a(null,'radio1');xf._a('radio1','selectItem1');xf._a('selectItem1','default20');xf._a('radio1','selectItem2');xf._a('selectItem2','default22');xf._a('radio1','selectItem5');xf._a('selectItem5','default36');xf._a(null,'radio2');xf._a('radio2','selectItem3');xf._a('selectItem3','default32');xf._a('radio2','selectItem4');xf._a('selectItem4','default34');xf._a('radio2','selectItem6');xf._a('selectItem6','default38');xf._a('radio2','selectItem7');xf._a('selectItem7','default40');xf._a(null,'iptWORK_TEST_YEAR');xf._a(null,'iptWORK_EXP_YEAR');xf._a(null,'textarea1');xf._a(null,'textarea2');xf._a(null,'input2');xf._a(null,'checkbox7');xf._a('checkbox7','selectItem24');xf._a('selectItem24','default151');xf._a('checkbox7','selectItem29');xf._a('selectItem29','default153');xf._a('checkbox7','selectItem30');xf._a('selectItem30','default155');xf._a('checkbox7','selectItem31');xf._a('selectItem31','default157');xf._a(null,'gridSelect5');xf._a('gridSelect5','default92');xf._a('gridSelect5','default136');xf._a(null,'radio5');xf._a('radio5','selectItem27');xf._a('selectItem27','default80');xf._a('radio5','selectItem28');xf._a('selectItem28','default82');xf._a(null,'input6');xf._a(null,'gridSelect4');xf._a('gridSelect4','default72');xf._a('gridSelect4','default74');xf._a(null,'checkbox5');xf._a('checkbox5','selectItem34');xf._a('selectItem34','default94');xf._a('checkbox5','selectItem35');xf._a('selectItem35','default96');xf._a('checkbox5','selectItem36');xf._a('selectItem36','default98');xf._a('checkbox5','selectItem37');xf._a('selectItem37','default100');xf._a('checkbox5','selectItem38');xf._a('selectItem38','default102');xf._a('checkbox5','selectItem39');xf._a('selectItem39','default104');xf._a('checkbox5','selectItem40');xf._a('selectItem40','default106');xf._a('checkbox5','selectItem41');xf._a('selectItem41','default108');xf._a('checkbox5','selectItem42');xf._a('selectItem42','default110');xf._a('checkbox5','selectItem43');xf._a('selectItem43','default112');xf._a('checkbox5','selectItem44');xf._a('selectItem44','default114');xf._a('checkbox5','selectItem45');xf._a('selectItem45','default116');xf._a('checkbox5','selectItem46');xf._a('selectItem46','default118');xf._a('checkbox5','selectItem47');xf._a('selectItem47','default120');xf._a('checkbox5','selectItem48');xf._a('selectItem48','default122');xf._a('checkbox5','selectItem49');xf._a('selectItem49','default124');xf._a('checkbox5','selectItem50');xf._a('selectItem50','default126');xf._a('checkbox5','selectItem51');xf._a('selectItem51','default128');xf._a('checkbox5','selectItem52');xf._a('selectItem52','default130');xf._a('checkbox5','selectItem53');xf._a('selectItem53','default132');xf._a('checkbox5','selectItem54');xf._a('selectItem54','default134');xf._a(null,'checkbox3');xf._a('checkbox3','selectItem8');xf._a('selectItem8','default42');xf._a('checkbox3','selectItem9');xf._a('selectItem9','default44');xf._a('checkbox3','selectItem10');xf._a('selectItem10','default46');xf._a('checkbox3','selectItem11');xf._a('selectItem11','default48');xf._a('checkbox3','selectItem12');xf._a('selectItem12','default50');xf._a('checkbox3','selectItem13');xf._a('selectItem13','default52');xf._a('checkbox3','selectItem14');xf._a('selectItem14','default54');xf._a('checkbox3','selectItem15');xf._a('selectItem15','default56');xf._a('checkbox3','selectItem16');xf._a('selectItem16','default58');xf._a('checkbox3','selectItem17');xf._a('selectItem17','default60');xf._a(null,'textarea8');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/EVALUATION_CODE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATION_CODE')))));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dataMain')/EVALUATION_NO",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATION_NO')))));	
xf._b("instance('dataMain')/EVALUATED_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATED_ID')))));	
xf._b("'被评价人姓名不能为空'",xf._i("被评价人姓名不能为空"));	
xf._b("instance('dataMain')/WORK_EXP_YEAR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','WORK_EXP_YEAR')))));	
xf._b("'与测试相关工作年限不能为空'",xf._i("与测试相关工作年限不能为空"));	
xf._b("instance('dataMain')/WORK_TEST_YEAR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','WORK_TEST_YEAR')))));	
xf._b("'工作年限不能为空'",xf._i("工作年限不能为空"));	
xf._b("instance('dataMain')/recCB",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','recCB')))));	
xf._b("instance('dataMain')/POSITION_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','POSITION_ID')))));	
xf._b("instance('dataMain')/EVALUATEE_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATEE_DATE')))));	
xf._b("instance('dataMain')/APPROVAL_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPROVAL_DATE')))));	
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
xf._b("instance('approvalIdData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('approvalIdData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('approvalIdData')/oFFICEID",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('approvalIdData')/pOSITIONID",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('approvalIdData')/dEGREEID",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('approvalIdData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('approvalIdData')/pOLITICALID",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('approvalIdData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('approvalIdData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("approvalIdData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('evaluateeData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('evaluateeData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('evaluateeData')/oFFICEID",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('evaluateeData')/pOSITIONID",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('evaluateeData')/dEGREEID",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('evaluateeData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('evaluateeData')/pOLITICALID",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('evaluateeData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('evaluateeData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("evaluateeData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('smartFilter1_data_1935496059')/value",xf._g(xf._f('instance',xf._i("smartFilter1_data_1935496059")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("EVALUATION_NO",xf._h(false, xf._k("child",xf._j('','EVALUATION_NO'))));	
xf._b("EVALUATED_NAME",xf._h(false, xf._k("child",xf._j('','EVALUATED_NAME'))));	
xf._b("uSERNAME",xf._h(false, xf._k("child",xf._j('','uSERNAME'))));	
xf._b("POSITION_NAME",xf._h(false, xf._k("child",xf._j('','POSITION_NAME'))));	
xf._b("IDENTIFED_NAME",xf._h(false, xf._k("child",xf._j('','IDENTIFED_NAME'))));	
xf._b("EVALUATEE_NAME",xf._h(false, xf._k("child",xf._j('','EVALUATEE_NAME'))));	
xf._b("DEFICIENCY_NAME",xf._h(false, xf._k("child",xf._j('','DEFICIENCY_NAME'))));	
xf._b("APPROVAL_NAME",xf._h(false, xf._k("child",xf._j('','APPROVAL_NAME'))));	
xf._b("APPROVAL_OPINION_NAME",xf._h(false, xf._k("child",xf._j('','APPROVAL_OPINION_NAME'))));	
xf._b("MEMO",xf._h(false, xf._k("child",xf._j('','MEMO'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMain')/EVALUATION_CODE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATION_CODE')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/EVALUATION_NO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATION_NO')))));	
xf._b("data('dataMain')/EVALUATED_DEPT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATED_DEPT')))));	
xf._b("DEPT_ID",xf._h(false, xf._k("child",xf._j('','DEPT_ID'))));	
xf._b("PLAN_NO",xf._h(false, xf._k("child",xf._j('','PLAN_NO'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("PLAN_DOC_NO",xf._h(false, xf._k("child",xf._j('','PLAN_DOC_NO'))));	
xf._b("data('dataMain')/EVALUATED_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATED_ID')))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("gROUPMEMBERID",xf._h(false, xf._k("child",xf._j('','gROUPMEMBERID'))));	
xf._b("oPERATORID",xf._h(false, xf._k("child",xf._j('','oPERATORID'))));	
xf._b("data('dataMain')/POSITION_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','POSITION_ID')))));	
xf._b("data('dataMain')/IDENTIFED",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','IDENTIFED')))));	
xf._b("data('dataMain')/WORK_TEST_YEAR",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','WORK_TEST_YEAR')))));	
xf._b("data('dataMain')/WORK_EXP_YEAR",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','WORK_EXP_YEAR')))));	
xf._b("data('dataMain')/EFFECT_EVALUATION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EFFECT_EVALUATION')))));	
xf._b("data('dataMain')/DEFICIENCY",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','DEFICIENCY')))));	
xf._b("data('dataMain')/EVALUATEE_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATEE_DATE')))));	
xf._b("data('dataMain')/RECOMMENDATION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','RECOMMENDATION')))));	
xf._b("data('dataMain')/EVALUATEE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATEE')))));	
xf._b("data('dataMain')/EVALUATEE_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EVALUATEE_NAME')))));	
xf._b("HR_BASE_INFO",xf._h(false, xf._k("child",xf._j('','HR_BASE_INFO'))));	
xf._b("oPERATORSEX",xf._h(false, xf._k("child",xf._j('','oPERATORSEX'))));	
xf._b("oPERATORBIRTHDAY",xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY'))));	
xf._b("nATION",xf._h(false, xf._k("child",xf._j('','nATION'))));	
xf._b("oFFICEID",xf._h(false, xf._k("child",xf._j('','oFFICEID'))));	
xf._b("pOSITIONID",xf._h(false, xf._k("child",xf._j('','pOSITIONID'))));	
xf._b("dEGREEID",xf._h(false, xf._k("child",xf._j('','dEGREEID'))));	
xf._b("eDUCATIONID",xf._h(false, xf._k("child",xf._j('','eDUCATIONID'))));	
xf._b("pOLITICALID",xf._h(false, xf._k("child",xf._j('','pOLITICALID'))));	
xf._b("pROFESSIONAL",xf._h(false, xf._k("child",xf._j('','pROFESSIONAL'))));	
xf._b("pOSITIONALTITLE",xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE'))));	
xf._b("eMAILADDRESS",xf._h(false, xf._k("child",xf._j('','eMAILADDRESS'))));	
xf._b("mOBILE",xf._h(false, xf._k("child",xf._j('','mOBILE'))));	
xf._b("oPERATORSTATE",xf._h(false, xf._k("child",xf._j('','oPERATORSTATE'))));	
xf._b("Scode",xf._h(false, xf._k("child",xf._j('','Scode'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("cARDID",xf._h(false, xf._k("child",xf._j('','cARDID'))));	
xf._b("data('dataMain')/APPROVAL_OPINION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPROVAL_OPINION')))));	
xf._b("data('dataMain')/APPROVAL_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPROVAL_DATE')))));	
xf._b("data('dataMain')/APPROVAL_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPROVAL_ID')))));	
xf._b("data('dataMain')/SKILL_EVALUATION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SKILL_EVALUATION')))));	
xf._b("data('dataMain')/ETHICS_EVALUATION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','ETHICS_EVALUATION')))));	
xf._b("data('dataMain')/MEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MEMO')))));	
xf._b("not(call('justep.XData.canDo','dataMain','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMain','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,'tuijian,recCB',null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/EVALUATION_CODE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/EVALUATION_NO",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/EVALUATED_ID",null,null,"true()",null,null,null,"'被评价人姓名不能为空'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/WORK_EXP_YEAR",null,null,"true()",null,null,null,"'与测试相关工作年限不能为空'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/WORK_TEST_YEAR",null,null,"true()",null,null,null,"'工作年限不能为空'");	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/recCB","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/POSITION_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/WORK_EXP_YEAR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/WORK_TEST_YEAR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/EVALUATEE_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/APPROVAL_DATE","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('deptData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-11','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-14','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('evaluatedIdData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('evaluateeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-32','mdDefault',"instance('evaluateeData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('evaluateeData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('evaluateeData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('evaluateeData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('evaluateeData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('evaluateeData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('evaluateeData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('evaluateeData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('evaluateeData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
var xf_action_action32=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action32,'mdDefault', evt,false)});	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_936111925 = new xforms.XFMenu('GLOBAL_ID_936111925','context');xf_menu_GLOBAL_ID_936111925.menu.addContextZone('6337abe862364337a0815800b99a878d');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_936111925.hide()});xf_menu_GLOBAL_ID_936111925.menu.setOpenMode('web');	
var xf_action_xf_action_35=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_2110351485");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_936111925'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_35,'GLOBAL_ID_936111925', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_2110351485',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_36=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N216093583');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N216093583", "");}));xf._p(justep('GLOBAL_ID_2110351485'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_36,'GLOBAL_ID_2110351485', evt,false)});	
var xf_action_xf_action_37=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N216093583');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_2110351485'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_37,'GLOBAL_ID_2110351485', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_335264521',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_38=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N665345664');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N665345664", "");}));xf._p(justep('GLOBAL_ID_335264521'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_38,'GLOBAL_ID_335264521', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var approvalIdData_part_loaded = false;	
function load_approvalIdData_part(callback){if (approvalIdData_part_loaded) return;approvalIdData_part_loaded = true;	
new xforms.XFInstance2('approvalIdData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-23','mdDefault',"instance('approvalIdData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('approvalIdData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('approvalIdData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('approvalIdData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('approvalIdData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('approvalIdData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('approvalIdData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('approvalIdData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('approvalIdData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var approvalIdData_part_init_loaded = false;	
function load_approvalIdData_part_init(){if (approvalIdData_part_init_loaded) return;approvalIdData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
var xf_trigger_deleteTrigger=new xforms.XFTrigger('deleteTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_action31=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.deleteTriggerClick(event)}));xf._p(justep('deleteTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action31,'deleteTrigger', evt,false)});	
var xf_model_smartFilter1_model_1935496059 = new xforms.XFModel('smartFilter1_model_1935496059',null);	
new xforms.XFInstance2('smartFilter1_data_1935496059','smartFilter1_model_1935496059',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('smartFilter1_data_1935496059','value');	
xf._d('smartFilter1_input_1935496059','text',xf._q("instance('smartFilter1_data_1935496059')/value"),null,null,null,null,false,false);	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,"/UI/SA/OPM/images/search.gif",null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms.blur();justep.xbl('dataMain').refreshData();}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trigger1', evt,false)});	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'EVALUATION_CODE,EVALUATED_ID,EVALUATED_DEPT,POSITION_ID,IDENTIFED,WORK_EXP_YEAR,WORK_TEST_YEAR,ETHICS_EVALUATION,SKILL_EVALUATION,EFFECT_EVALUATION,DEFICIENCY,RECOMMENDATION,EVALUATEE,EVALUATEE_DATE,APPROVAL_OPINION,APPROVAL_ID,APPROVAL_DATE,tuijian',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,EVALUATION_NO,EVALUATED_NAME,uSERNAME,POSITION_NAME,IDENTIFED_NAME,EVALUATEE_NAME,DEFICIENCY_NAME,APPROVAL_NAME,APPROVAL_OPINION_NAME,MEMO,space-column',headNames:'#master_checkbox,评价表编号,被评价人,所在部门,岗位,身份,评价人,推荐意见,批准人,批准意见,备注,&nbsp;',widths:'30,100,100,100,95,100,100,100,100,118,183,*',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,left,left,left,left,left,left,left,left,left,left,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_insertMas=new xforms.XFTrigger('insertMas',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.insertMasClick(event)}));xf._p(justep('insertMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'insertMas', evt,false)});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveMasClick(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'saveMas', evt,false)});	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('smartFilter1_model_1935496059').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptEVALUATION_CODE','text',xf._q("data('dataMain')/EVALUATION_CODE"),null,null,null,null,false,true);	
xf._d('iptEVALUATION_NO','text',xf._q("data('dataMain')/EVALUATION_NO"),null,null,null,null,false,true);	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/EVALUATED_DEPT"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'deptData',columns:'PLAN_NO,uSERNAME,__c_,PLAN_DOC_NO,DEPT_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'PLAN_DOC_NO,DEPT_ID',valueColumn:'DEPT_ID',labelColumn:'uSERNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect2Closeup'});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/EVALUATED_ID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'evaluatedIdData',columns:'oPERATORNAME,__c_,oPERATORID,gROUPMEMBERID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'oPERATORID,gROUPMEMBERID',valueColumn:'gROUPMEMBERID',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_select1_radio1=new xforms.XFSelect('radio1',false,true,xf._q("data('dataMain')/POSITION_ID"),true,false,false,'',3);	
var xf_item_selectItem1=new xforms.XFItem('selectItem1',null,null);	
var xf_item_selectItem2=new xforms.XFItem('selectItem2',null,null);	
var xf_item_selectItem5=new xforms.XFItem('selectItem5',null,null);	
var xf_select1_radio2=new xforms.XFSelect('radio2',false,true,xf._q("data('dataMain')/IDENTIFED"),true,false,false,'',4);	
var xf_item_selectItem3=new xforms.XFItem('selectItem3',null,null);	
var xf_item_selectItem4=new xforms.XFItem('selectItem4',null,null);	
var xf_item_selectItem6=new xforms.XFItem('selectItem6',null,null);	
var xf_item_selectItem7=new xforms.XFItem('selectItem7',null,null);	
xf._d('iptWORK_TEST_YEAR','text',xf._q("data('dataMain')/WORK_TEST_YEAR"),"^[0-9]*[1-9][0-9]*$",null,null,null,false,false);	
xf._d('iptWORK_EXP_YEAR','text',xf._q("data('dataMain')/WORK_EXP_YEAR"),"^[0-9]*[1-9][0-9]*$",null,null,null,false,false);	
xf._d('textarea1','textarea',xf._q("data('dataMain')/EFFECT_EVALUATION"),null,null,null,null,false,false);	
xf._d('textarea2','textarea',xf._q("data('dataMain')/DEFICIENCY"),null,null,null,null,false,false);	
xforms.load_parts('view5');	
xforms.load_parts('view3');	
xforms.load_parts('view7');	
xforms.load_parts('view1');	
xf._d('textarea8','textarea',xf._q("data('dataMain')/MEMO"),null,null,null,null,false,false);	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view5(){if (justep("view5").getAttribute('loaded') && justep("view5").getAttribute('loaded') == 'true') return;justep("view5").setAttribute('loaded', 'true');	
if(typeof(load_view5_html) == 'function')load_view5_html();	
xf._d('input2','text',xf._q("data('dataMain')/EVALUATEE_DATE"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_select_checkbox7=new xforms.XFSelect('checkbox7',true,true,xf._q("data('dataMain')/RECOMMENDATION"),true,false,false,'',9);	
var xf_item_selectItem24=new xforms.XFItem('selectItem24',null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem24Select(event)}));xf._p(justep('selectItem24'),"xforms-select",null,function(evt) { xforms.run(xf_action_action2,'selectItem24', evt,false)});	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem24DeSelect(event)}));xf._p(justep('selectItem24'),"xforms-deselect",null,function(evt) { xforms.run(xf_action_action3,'selectItem24', evt,false)});	
var xf_item_selectItem29=new xforms.XFItem('selectItem29',null,null);	
var xf_action_action9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem29Select(event)}));xf._p(justep('selectItem29'),"xforms-select",null,function(evt) { xforms.run(xf_action_action9,'selectItem29', evt,false)});	
var xf_action_action10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem29DeSelect(event)}));xf._p(justep('selectItem29'),"xforms-deselect",null,function(evt) { xforms.run(xf_action_action10,'selectItem29', evt,false)});	
var xf_item_selectItem30=new xforms.XFItem('selectItem30',null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem30Select(event)}));xf._p(justep('selectItem30'),"xforms-select",null,function(evt) { xforms.run(xf_action_action5,'selectItem30', evt,false)});	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem30DeSelect(event)}));xf._p(justep('selectItem30'),"xforms-deselect",null,function(evt) { xforms.run(xf_action_action6,'selectItem30', evt,false)});	
var xf_item_selectItem31=new xforms.XFItem('selectItem31',null,null);	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem31Select(event)}));xf._p(justep('selectItem31'),"xforms-select",null,function(evt) { xforms.run(xf_action_action7,'selectItem31', evt,false)});	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem31DeSelect(event)}));xf._p(justep('selectItem31'),"xforms-deselect",null,function(evt) { xforms.run(xf_action_action8,'selectItem31', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/EVALUATEE"),labelRef:xf._q("data('dataMain')/EVALUATEE_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'evaluateeData',columns:'HR_BASE_INFO,oPERATORNAME,__c_,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'HR_BASE_INFO,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',valueColumn:'HR_BASE_INFO',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view5_xblinit(){if (justep("view5").getAttribute('xblloaded') && justep("view5").getAttribute('xblloaded') == 'true') return;justep("view5").setAttribute('xblloaded', 'true');	
}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
var xf_select1_radio5=new xforms.XFSelect('radio5',false,true,xf._q("data('dataMain')/APPROVAL_OPINION"),true,false,false,'',10);	
var xf_item_selectItem27=new xforms.XFItem('selectItem27',null,null);	
var xf_item_selectItem28=new xforms.XFItem('selectItem28',null,null);	
xf._d('input6','text',xf._q("data('dataMain')/APPROVAL_DATE"),null,null,null,"yyyy-MM-dd",false,false);	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/APPROVAL_ID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'approvalIdData',columns:'HR_BASE_INFO,oPERATORNAME,__c_,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'HR_BASE_INFO,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',valueColumn:'HR_BASE_INFO',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
function load_view7(){if (justep("view7").getAttribute('loaded') && justep("view7").getAttribute('loaded') == 'true') return;justep("view7").setAttribute('loaded', 'true');	
if(typeof(load_view7_html) == 'function')load_view7_html();	
xforms.load_parts('view8');	
}	
function load_view7_xblinit(){if (justep("view7").getAttribute('xblloaded') && justep("view7").getAttribute('xblloaded') == 'true') return;justep("view7").setAttribute('xblloaded', 'true');	
}	
function load_view8(){if (justep("view8").getAttribute('loaded') && justep("view8").getAttribute('loaded') == 'true') return;justep("view8").setAttribute('loaded', 'true');	
if(typeof(load_view8_html) == 'function')load_view8_html();	
var xf_select_checkbox5=new xforms.XFSelect('checkbox5',true,true,xf._q("data('dataMain')/SKILL_EVALUATION"),true,false,false,'',13);	
var xf_item_selectItem34=new xforms.XFItem('selectItem34',null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem34Select(event)}));xf._p(justep('selectItem34'),"xforms-select",null,function(evt) { xforms.run(xf_action_action4,'selectItem34', evt,false)});	
var xf_item_selectItem35=new xforms.XFItem('selectItem35',null,null);	
var xf_action_action11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem35Select(event)}));xf._p(justep('selectItem35'),"xforms-select",null,function(evt) { xforms.run(xf_action_action11,'selectItem35', evt,false)});	
var xf_item_selectItem36=new xforms.XFItem('selectItem36',null,null);	
var xf_action_action12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem36Select(event)}));xf._p(justep('selectItem36'),"xforms-select",null,function(evt) { xforms.run(xf_action_action12,'selectItem36', evt,false)});	
var xf_item_selectItem37=new xforms.XFItem('selectItem37',null,null);	
var xf_action_action13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem37Select(event)}));xf._p(justep('selectItem37'),"xforms-select",null,function(evt) { xforms.run(xf_action_action13,'selectItem37', evt,false)});	
var xf_item_selectItem38=new xforms.XFItem('selectItem38',null,null);	
var xf_action_action14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem38Select(event)}));xf._p(justep('selectItem38'),"xforms-select",null,function(evt) { xforms.run(xf_action_action14,'selectItem38', evt,false)});	
var xf_item_selectItem39=new xforms.XFItem('selectItem39',null,null);	
var xf_action_action15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem39Select(event)}));xf._p(justep('selectItem39'),"xforms-select",null,function(evt) { xforms.run(xf_action_action15,'selectItem39', evt,false)});	
var xf_item_selectItem40=new xforms.XFItem('selectItem40',null,null);	
var xf_action_action16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem40Select(event)}));xf._p(justep('selectItem40'),"xforms-select",null,function(evt) { xforms.run(xf_action_action16,'selectItem40', evt,false)});	
var xf_item_selectItem41=new xforms.XFItem('selectItem41',null,null);	
var xf_action_action17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem41Select(event)}));xf._p(justep('selectItem41'),"xforms-select",null,function(evt) { xforms.run(xf_action_action17,'selectItem41', evt,false)});	
var xf_item_selectItem42=new xforms.XFItem('selectItem42',null,null);	
var xf_action_action18=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem42Select(event)}));xf._p(justep('selectItem42'),"xforms-select",null,function(evt) { xforms.run(xf_action_action18,'selectItem42', evt,false)});	
var xf_item_selectItem43=new xforms.XFItem('selectItem43',null,null);	
var xf_action_action19=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem43Select(event)}));xf._p(justep('selectItem43'),"xforms-select",null,function(evt) { xforms.run(xf_action_action19,'selectItem43', evt,false)});	
var xf_item_selectItem44=new xforms.XFItem('selectItem44',null,null);	
var xf_action_action20=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem44Select(event)}));xf._p(justep('selectItem44'),"xforms-select",null,function(evt) { xforms.run(xf_action_action20,'selectItem44', evt,false)});	
var xf_item_selectItem45=new xforms.XFItem('selectItem45',null,null);	
var xf_action_action21=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem45Select(event)}));xf._p(justep('selectItem45'),"xforms-select",null,function(evt) { xforms.run(xf_action_action21,'selectItem45', evt,false)});	
var xf_item_selectItem46=new xforms.XFItem('selectItem46',null,null);	
var xf_action_action22=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem46Select(event)}));xf._p(justep('selectItem46'),"xforms-select",null,function(evt) { xforms.run(xf_action_action22,'selectItem46', evt,false)});	
var xf_item_selectItem47=new xforms.XFItem('selectItem47',null,null);	
var xf_action_action23=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem47Select(event)}));xf._p(justep('selectItem47'),"xforms-select",null,function(evt) { xforms.run(xf_action_action23,'selectItem47', evt,false)});	
var xf_item_selectItem48=new xforms.XFItem('selectItem48',null,null);	
var xf_action_action24=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem48Select(event)}));xf._p(justep('selectItem48'),"xforms-select",null,function(evt) { xforms.run(xf_action_action24,'selectItem48', evt,false)});	
var xf_item_selectItem49=new xforms.XFItem('selectItem49',null,null);	
var xf_action_action25=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem49Select(event)}));xf._p(justep('selectItem49'),"xforms-select",null,function(evt) { xforms.run(xf_action_action25,'selectItem49', evt,false)});	
var xf_item_selectItem50=new xforms.XFItem('selectItem50',null,null);	
var xf_action_action26=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem50Select(event)}));xf._p(justep('selectItem50'),"xforms-select",null,function(evt) { xforms.run(xf_action_action26,'selectItem50', evt,false)});	
var xf_item_selectItem51=new xforms.XFItem('selectItem51',null,null);	
var xf_action_action27=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem51Select(event)}));xf._p(justep('selectItem51'),"xforms-select",null,function(evt) { xforms.run(xf_action_action27,'selectItem51', evt,false)});	
var xf_item_selectItem52=new xforms.XFItem('selectItem52',null,null);	
var xf_action_action28=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem52Select(event)}));xf._p(justep('selectItem52'),"xforms-select",null,function(evt) { xforms.run(xf_action_action28,'selectItem52', evt,false)});	
var xf_item_selectItem53=new xforms.XFItem('selectItem53',null,null);	
var xf_action_action29=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem53Select(event)}));xf._p(justep('selectItem53'),"xforms-select",null,function(evt) { xforms.run(xf_action_action29,'selectItem53', evt,false)});	
var xf_item_selectItem54=new xforms.XFItem('selectItem54',null,null);	
var xf_action_action30=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem54Select(event)}));xf._p(justep('selectItem54'),"xforms-select",null,function(evt) { xforms.run(xf_action_action30,'selectItem54', evt,false)});	
}	
function load_view8_xblinit(){if (justep("view8").getAttribute('xblloaded') && justep("view8").getAttribute('xblloaded') == 'true') return;justep("view8").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
var xf_select_checkbox3=new xforms.XFSelect('checkbox3',true,true,xf._q("data('dataMain')/ETHICS_EVALUATION"),true,false,false,'',14);	
var xf_item_selectItem8=new xforms.XFItem('selectItem8',null,null);	
var xf_item_selectItem9=new xforms.XFItem('selectItem9',null,null);	
var xf_item_selectItem10=new xforms.XFItem('selectItem10',null,null);	
var xf_item_selectItem11=new xforms.XFItem('selectItem11',null,null);	
var xf_item_selectItem12=new xforms.XFItem('selectItem12',null,null);	
var xf_item_selectItem13=new xforms.XFItem('selectItem13',null,null);	
var xf_item_selectItem14=new xforms.XFItem('selectItem14',null,null);	
var xf_item_selectItem15=new xforms.XFItem('selectItem15',null,null);	
var xf_item_selectItem16=new xforms.XFItem('selectItem16',null,null);	
var xf_item_selectItem17=new xforms.XFItem('selectItem17',null,null);	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
