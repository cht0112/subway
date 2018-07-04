
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
					}else{						document.getElementById(this._id).xformsObject.loadInstance(data, itemInfo, replace, parentID);
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
				for(var model in this.xformInfo){var that = this; 
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
							var manager = this.__dragObject.obj.parentNode;					manager.removeChild(this.__dragObject.obj);
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

	var ids=[{id:'1d9d90d3a7ef4ca7911c43e6758ec24e', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'041fce6ccadc43759da1b4b30f5fa86b', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'cbbbeb1544974231a762c130d0a88c13', name:'xforms:label'}]},{id:'d4203a80168643ba8e8f522d99d44dae', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'smartFilter1', name:'/UI/system/components/smartFilter.xbl.xml#smartFilter', children:[{id:'smartFilter1_input_1669082765', name:'xforms:input'}]},{id:'trigger1', name:'xforms:trigger', children:[{id:'default22', name:'xforms:label'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default82', name:'xforms:label'},{id:'default83', name:'xforms:value'}]},{id:'trigger3', name:'xforms:trigger', children:[{id:'default170', name:'xforms:label'}]}]},{id:'grdMain', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger1', name:'xforms:trigger', children:[{id:'ad8e16e5b0554e66a663c48469748410', name:'xforms:label'}]},{id:'saveTrigger2', name:'xforms:trigger', children:[{id:'a33d33ed368d48ac8075f17cdf4e3bd2', name:'xforms:label'}]},{id:'removeTrigger2', name:'xforms:trigger', children:[{id:'41ea0be6c2014cc28e16e2bbcd04af2a', name:'xforms:label'}]}]},{id:'iptCREATOR', name:'xforms:input'},{id:'iptCREATE_DATE', name:'xforms:input'},{id:'iptVERSION_ID', name:'xforms:gridselect1', children:[{id:'default24', name:'xforms:label'},{id:'default66', name:'xforms:value'}]},{id:'iptPRIORITY', name:'xforms:gridselect1', children:[{id:'default70', name:'xforms:label'},{id:'default71', name:'xforms:value'}]},{id:'iptSEVERITY', name:'xforms:gridselect1', children:[{id:'default86', name:'xforms:label'},{id:'default87', name:'xforms:value'}]},{id:'projectSelect', name:'xforms:gridselect1', children:[{id:'default31', name:'xforms:label'},{id:'default34', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default120', name:'xforms:label'},{id:'default121', name:'xforms:value'}]},{id:'iptMEMO', name:'xforms:textarea'},{id:'iptDEFECT_DETAIL', name:'xforms:textarea'},{id:'iptDEFECT_DESC', name:'xforms:textarea'},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default125', name:'xforms:label'},{id:'default126', name:'xforms:value'}]},{id:'iptPLATFORM_INFO', name:'xforms:gridselect1', children:[{id:'default133', name:'xforms:label'},{id:'default134', name:'xforms:value'}]},{id:'iptFUNC_ID', name:'xforms:gridselect1', children:[{id:'default150', name:'xforms:label'},{id:'default151', name:'xforms:value'}]},{id:'iptDEFECT_STATUS', name:'xforms:gridselect1', children:[{id:'default156', name:'xforms:label'},{id:'default157', name:'xforms:value'}]},{id:'iptASSIGN_PERSON', name:'xforms:treeselect1', children:[{id:'default179', name:'xforms:label'},{id:'default180', name:'xforms:value'}]},{id:'gridSelect1', name:'xforms:treeselect1', children:[{id:'default155', name:'xforms:label'},{id:'default159', name:'xforms:value'}]},{id:'iptCC_PERSON', name:'xforms:treeselect1', children:[{id:'default163', name:'xforms:label'},{id:'default164', name:'xforms:value'}]}]}]},{id:'filter-pattern-457f0652-d664-4e68-8d31-73236de7890a', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'0d77f8d433944f1f81c89c6e440d038d', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N330127593', name:'xforms:menu'}]},{id:'GLOBAL_ID_1541507797', name:'xforms:dialog'}]},{id:'filter-dialog-6cf6cd66-296a-458f-a32b-7e1aba53345c', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1699951839', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','041fce6ccadc43759da1b4b30f5fa86b');xf._a(null,'removeTrigger');xf._a('removeTrigger','cbbbeb1544974231a762c130d0a88c13');xf._a(null,'smartFilter1_input_1669082765');xf._a(null,'trigger1');xf._a('trigger1','default22');xf._a(null,'gridSelect5');xf._a('gridSelect5','default82');xf._a('gridSelect5','default108');xf._a(null,'trigger3');xf._a('trigger3','default170');xf._a(null,'grdMain');xf._a(null,'insertTrigger1');xf._a('insertTrigger1','ad8e16e5b0554e66a663c48469748410');xf._a(null,'saveTrigger2');xf._a('saveTrigger2','a33d33ed368d48ac8075f17cdf4e3bd2');xf._a(null,'removeTrigger2');xf._a('removeTrigger2','41ea0be6c2014cc28e16e2bbcd04af2a');xf._a(null,'iptCREATOR');xf._a(null,'iptCREATE_DATE');xf._a(null,'iptVERSION_ID');xf._a('iptVERSION_ID','default24');xf._a('iptVERSION_ID','default67');xf._a(null,'iptPRIORITY');xf._a('iptPRIORITY','default70');xf._a('iptPRIORITY','default72');xf._a(null,'iptSEVERITY');xf._a('iptSEVERITY','default86');xf._a('iptSEVERITY','default88');xf._a(null,'projectSelect');xf._a('projectSelect','default31');xf._a('projectSelect','default39');xf._a(null,'gridSelect2');xf._a('gridSelect2','default120');xf._a('gridSelect2','default122');xf._a(null,'iptMEMO');xf._a(null,'iptDEFECT_DETAIL');xf._a(null,'iptDEFECT_DESC');xf._a(null,'gridSelect3');xf._a('gridSelect3','default125');xf._a('gridSelect3','default127');xf._a(null,'iptPLATFORM_INFO');xf._a('iptPLATFORM_INFO','default133');xf._a('iptPLATFORM_INFO','default135');xf._a(null,'iptFUNC_ID');xf._a('iptFUNC_ID','default150');xf._a('iptFUNC_ID','default152');xf._a(null,'iptDEFECT_STATUS');xf._a('iptDEFECT_STATUS','default156');xf._a('iptDEFECT_STATUS','default158');xf._a(null,'iptASSIGN_PERSON');xf._a('iptASSIGN_PERSON','default179');xf._a('iptASSIGN_PERSON','default181');xf._a(null,'gridSelect1');xf._a('gridSelect1','default155');xf._a('gridSelect1','default160');xf._a(null,'iptCC_PERSON');xf._a('iptCC_PERSON','default163');xf._a('iptCC_PERSON','default165');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/PRIORITY",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PRIORITY')))));	
xf._b("true()",xf._f('true'));	
xf._b("'缺陷类型不能为空'",xf._i("缺陷类型不能为空"));	
xf._b("instance('dataMain')/SEVERITY",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SEVERITY')))));	
xf._b("'缺陷等级不能为空'",xf._i("缺陷等级不能为空"));	
xf._b("instance('dataMain')/DEFECT_DESC",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','DEFECT_DESC')))));	
xf._b("'缺陷描述不能为空'",xf._i("缺陷描述不能为空"));	
xf._b("instance('dataMain')/DEFECT_STATUS",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','DEFECT_STATUS')))));	
xf._b("'缺陷状态不能为空'",xf._i("缺陷状态不能为空"));	
xf._b("instance('dataMain')/CREATOR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CREATOR')))));	
xf._b("''",xf._i(""));	
xf._b("instance('dataMain')/CREATE_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CREATE_DATE')))));	
xf._b("instance('dataMain')/VERSION_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VERSION_ID')))));	
xf._b("'版本不能为空'",xf._i("版本不能为空"));	
xf._b("instance('dataMain')/FUNC_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','FUNC_ID')))));	
xf._b("'功能不能为空'",xf._i("功能不能为空"));	
xf._b("instance('dataMain')/REVIEW_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','REVIEW_DATE')))));	
xf._b("instance('dataMain')/MODULE_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MODULE_ID')))));	
xf._b("instance('dataMain')/PRODUCT_IDID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PRODUCT_IDID')))));	
xf._b("instance('dataMain')/PROJECT_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_ID')))));	
xf._b("instance('versionData')/PRODUCT_ID",xf._g(xf._f('instance',xf._i("versionData")),xf._h(false, xf._k("child",xf._j('','PRODUCT_ID')))));	
xf._b("instance('versionData')/BUILD_DATE",xf._g(xf._f('instance',xf._i("versionData")),xf._h(false, xf._k("child",xf._j('','BUILD_DATE')))));	
xf._b("instance('versionData')/PROJECT_ID",xf._g(xf._f('instance',xf._i("versionData")),xf._h(false, xf._k("child",xf._j('','PROJECT_ID')))));	
xf._b("instance('ccPersonData')/sValidState",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('ccPersonData')/sLevel",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('ccPersonData')/version",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('ccPersonData')/personNumb",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('ccPersonData')/personValidState",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('ccPersonData')/personVersion",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('ccPersonData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('ccPersonData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('ccPersonData')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('ccPersonData')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("ccPersonData")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('productSelectData')/PROJECT_ID",xf._g(xf._f('instance',xf._i("productSelectData")),xf._h(false, xf._k("child",xf._j('','PROJECT_ID')))));	
xf._b("instance('moduleSelectData')/PRODUCT_IDID",xf._g(xf._f('instance',xf._i("moduleSelectData")),xf._h(false, xf._k("child",xf._j('','PRODUCT_IDID')))));	
xf._b("instance('funcSelectData')/MODULE_ID",xf._g(xf._f('instance',xf._i("funcSelectData")),xf._h(false, xf._k("child",xf._j('','MODULE_ID')))));	
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
xf._b("instance('reviewerData')/sValidState",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('reviewerData')/sLevel",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('reviewerData')/version",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('reviewerData')/personNumb",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('reviewerData')/personValidState",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('reviewerData')/personVersion",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('reviewerData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('reviewerData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('reviewerData')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('reviewerData')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("reviewerData")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('bizData1')/sValidState",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('bizData1')/sLevel",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('bizData1')/version",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('bizData1')/personNumb",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('bizData1')/personValidState",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('bizData1')/personVersion",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('bizData1')/eDUCATIONID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('bizData1')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('bizData1')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('bizData1')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('assignPersonData')/sValidState",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('assignPersonData')/sLevel",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('assignPersonData')/version",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('assignPersonData')/personNumb",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('assignPersonData')/personValidState",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('assignPersonData')/personVersion",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('assignPersonData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('assignPersonData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('assignPersonData')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('assignPersonData')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("assignPersonData")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('smartFilter1_data_1669082765')/value",xf._g(xf._f('instance',xf._i("smartFilter1_data_1669082765")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("data('cData')/value",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("data('cData')/name",xf._g(xf._f('data',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','name')))));	
xf._b("'全部'",xf._i("全部"));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("PROJECT_NAME",xf._h(false, xf._k("child",xf._j('','PROJECT_NAME'))));	
xf._b("PRODUCT_NAME",xf._h(false, xf._k("child",xf._j('','PRODUCT_NAME'))));	
xf._b("MODULE_NAME",xf._h(false, xf._k("child",xf._j('','MODULE_NAME'))));	
xf._b("FUNC_NAME",xf._h(false, xf._k("child",xf._j('','FUNC_NAME'))));	
xf._b("myVersionId",xf._h(false, xf._k("child",xf._j('','myVersionId'))));	
xf._b("PRIORITY_NAME",xf._h(false, xf._k("child",xf._j('','PRIORITY_NAME'))));	
xf._b("SEVERITY_NAME",xf._h(false, xf._k("child",xf._j('','SEVERITY_NAME'))));	
xf._b("DEFECT_STATUS_CNAME",xf._h(false, xf._k("child",xf._j('','DEFECT_STATUS_CNAME'))));	
xf._b("ASSIGN_PERSON_NAME",xf._h(false, xf._k("child",xf._j('','ASSIGN_PERSON_NAME'))));	
xf._b("CREATOR_NAME",xf._h(false, xf._k("child",xf._j('','CREATOR_NAME'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMain')/CREATOR_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CREATOR_NAME')))));	
xf._b("data('dataMain')/CREATE_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CREATE_DATE')))));	
xf._b("data('dataMain')/VERSION_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VERSION_ID')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/myVersionId",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','myVersionId')))));	
xf._b("DEFECT_TRACK_VERSION_INFO",xf._h(false, xf._k("child",xf._j('','DEFECT_TRACK_VERSION_INFO'))));	
xf._b("PRODUCT_ID",xf._h(false, xf._k("child",xf._j('','PRODUCT_ID'))));	
xf._b("MAJOR_VERSION_NUMBER",xf._h(false, xf._k("child",xf._j('','MAJOR_VERSION_NUMBER'))));	
xf._b("MINOR_VERSION_NUMBER",xf._h(false, xf._k("child",xf._j('','MINOR_VERSION_NUMBER'))));	
xf._b("REVISION_NUMBER",xf._h(false, xf._k("child",xf._j('','REVISION_NUMBER'))));	
xf._b("BUILD_DATE",xf._h(false, xf._k("child",xf._j('','BUILD_DATE'))));	
xf._b("BUILD_PERSON",xf._h(false, xf._k("child",xf._j('','BUILD_PERSON'))));	
xf._b("MEMO",xf._h(false, xf._k("child",xf._j('','MEMO'))));	
xf._b("PROJECT_ID",xf._h(false, xf._k("child",xf._j('','PROJECT_ID'))));	
xf._b("HR_BASE_INFO",xf._h(false, xf._k("child",xf._j('','HR_BASE_INFO'))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("data('dataMain')/PRIORITY",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PRIORITY')))));	
xf._b("data('dataMain')/SEVERITY",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SEVERITY')))));	
xf._b("data('dataMain')/PROJECT_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_ID')))));	
xf._b("data('dataMain')/PROJECT_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_NAME')))));	
xf._b("DEFECT_TRACK_PROJECT_INFO",xf._h(false, xf._k("child",xf._j('','DEFECT_TRACK_PROJECT_INFO'))));	
xf._b("PROJECT_MANAGER",xf._h(false, xf._k("child",xf._j('','PROJECT_MANAGER'))));	
xf._b("PROJECT_DESC",xf._h(false, xf._k("child",xf._j('','PROJECT_DESC'))));	
xf._b("data('dataMain')/PRODUCT_IDID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PRODUCT_IDID')))));	
xf._b("data('dataMain')/PRODUCT_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PRODUCT_NAME')))));	
xf._b("DEFECT_TRACK_PRODUCT_INFO",xf._h(false, xf._k("child",xf._j('','DEFECT_TRACK_PRODUCT_INFO'))));	
xf._b("PRODUCT_DESC",xf._h(false, xf._k("child",xf._j('','PRODUCT_DESC'))));	
xf._b("data('dataMain')/MEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MEMO')))));	
xf._b("data('dataMain')/DEFECT_DETAIL",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','DEFECT_DETAIL')))));	
xf._b("data('dataMain')/DEFECT_DESC",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','DEFECT_DESC')))));	
xf._b("data('dataMain')/MODULE_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MODULE_ID')))));	
xf._b("data('dataMain')/MODULE_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MODULE_NAME')))));	
xf._b("DEFECT_TRACK_MODULE_INFO",xf._h(false, xf._k("child",xf._j('','DEFECT_TRACK_MODULE_INFO'))));	
xf._b("PRODUCT_IDID",xf._h(false, xf._k("child",xf._j('','PRODUCT_IDID'))));	
xf._b("data('dataMain')/PLATFORM_INFO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PLATFORM_INFO')))));	
xf._b("data('dataMain')/FUNC_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','FUNC_ID')))));	
xf._b("data('dataMain')/FUNC_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','FUNC_NAME')))));	
xf._b("DEFECT_TRACK_FUNC_INFO",xf._h(false, xf._k("child",xf._j('','DEFECT_TRACK_FUNC_INFO'))));	
xf._b("MODULE_ID",xf._h(false, xf._k("child",xf._j('','MODULE_ID'))));	
xf._b("data('dataMain')/DEFECT_STATUS",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','DEFECT_STATUS')))));	
xf._b("DEFECT_STATUS_CODE",xf._h(false, xf._k("child",xf._j('','DEFECT_STATUS_CODE'))));	
xf._b("DEFECT_STATUS_ENAME",xf._h(false, xf._k("child",xf._j('','DEFECT_STATUS_ENAME'))),'','');	
xf._b("data('dataMain')/ASSIGN_PERSON",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','ASSIGN_PERSON')))));	
xf._b("data('dataMain')/ASSIGN_PERSON_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','ASSIGN_PERSON_NAME')))));	
xf._b("false",xf._h(false, xf._k("child",xf._j('','false'))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("personLoginName",xf._h(false, xf._k("child",xf._j('','personLoginName'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sLongName",xf._h(false, xf._k("child",xf._j('','sLongName'))));	
xf._b("sFName",xf._h(false, xf._k("child",xf._j('','sFName'))));	
xf._b("sFCode",xf._h(false, xf._k("child",xf._j('','sFCode'))));	
xf._b("sFID",xf._h(false, xf._k("child",xf._j('','sFID'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("sSequence",xf._h(false, xf._k("child",xf._j('','sSequence'))));	
xf._b("sValidState",xf._h(false, xf._k("child",xf._j('','sValidState'))));	
xf._b("sParent",xf._h(false, xf._k("child",xf._j('','sParent'))));	
xf._b("sLevel",xf._h(false, xf._k("child",xf._j('','sLevel'))));	
xf._b("sPhone",xf._h(false, xf._k("child",xf._j('','sPhone'))));	
xf._b("sFax",xf._h(false, xf._k("child",xf._j('','sFax'))));	
xf._b("sAddress",xf._h(false, xf._k("child",xf._j('','sAddress'))));	
xf._b("sZip",xf._h(false, xf._k("child",xf._j('','sZip'))));	
xf._b("sDescription",xf._h(false, xf._k("child",xf._j('','sDescription'))));	
xf._b("sPersonID",xf._h(false, xf._k("child",xf._j('','sPersonID'))));	
xf._b("sNodeKind",xf._h(false, xf._k("child",xf._j('','sNodeKind'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("ognName",xf._h(false, xf._k("child",xf._j('','ognName'))));	
xf._b("dptName",xf._h(false, xf._k("child",xf._j('','dptName'))));	
xf._b("posName",xf._h(false, xf._k("child",xf._j('','posName'))));	
xf._b("operatorState",xf._h(false, xf._k("child",xf._j('','operatorState'))));	
xf._b("personID",xf._h(false, xf._k("child",xf._j('','personID'))));	
xf._b("personName",xf._h(false, xf._k("child",xf._j('','personName'))));	
xf._b("personCode",xf._h(false, xf._k("child",xf._j('','personCode'))));	
xf._b("personNumb",xf._h(false, xf._k("child",xf._j('','personNumb'))));	
xf._b("personPassword",xf._h(false, xf._k("child",xf._j('','personPassword'))));	
xf._b("personMainOrgID",xf._h(false, xf._k("child",xf._j('','personMainOrgID'))));	
xf._b("personIDCard",xf._h(false, xf._k("child",xf._j('','personIDCard'))));	
xf._b("personValidState",xf._h(false, xf._k("child",xf._j('','personValidState'))));	
xf._b("personVersion",xf._h(false, xf._k("child",xf._j('','personVersion'))));	
xf._b("personSex",xf._h(false, xf._k("child",xf._j('','personSex'))));	
xf._b("nATION",xf._h(false, xf._k("child",xf._j('','nATION'))));	
xf._b("eDUCATIONID",xf._h(false, xf._k("child",xf._j('','eDUCATIONID'))));	
xf._b("pOSITIONALTITLE",xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE'))));	
xf._b("EDUCATION_CODE",xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE'))));	
xf._b("eDUCATIONIDCNAME",xf._h(false, xf._k("child",xf._j('','eDUCATIONIDCNAME'))));	
xf._b("POSITIONAL_TITLE_CODE",xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE'))));	
xf._b("pOSITIONALTITLEIDCNAME",xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLEIDCNAME'))));	
xf._b("data('dataMain')/REVIEWER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','REVIEWER')))));	
xf._b("data('dataMain')/REVIEWER_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','REVIEWER_NAME')))));	
xf._b("data('dataMain')/CC_PERSON",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CC_PERSON')))));	
xf._b("data('dataMain')/CC_PERSON_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CC_PERSON_NAME')))));	
xf._b("not(call('justep.XData.canDo','dataMain','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,'recCB',null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/PRIORITY",null,null,"true()",null,null,null,"'缺陷类型不能为空'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/SEVERITY",null,null,"true()",null,null,null,"'缺陷等级不能为空'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/DEFECT_DESC",null,null,"true()",null,null,null,"'缺陷描述不能为空'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/DEFECT_STATUS",null,null,"true()",null,null,null,"'缺陷状态不能为空'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/CREATOR",null,null,"true()",null,null,null,"''");	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/CREATE_DATE",null,null,"true()",null,null,null,"''");	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/VERSION_ID",null,null,"true()",null,null,null,"'版本不能为空'");	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/FUNC_ID",null,null,"true()",null,null,null,"'功能不能为空'");	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/VERSION_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/FUNC_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/PRIORITY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dataMain')/SEVERITY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dataMain')/DEFECT_STATUS","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMain')/CREATE_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMain')/REVIEW_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMain')/MODULE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMain')/PRODUCT_IDID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('dataMain')/PROJECT_ID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('versionData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-18','mdDefault',"instance('versionData')/PRODUCT_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('versionData')/BUILD_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('versionData')/PROJECT_ID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('ccPersonData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-21','mdDefault',"instance('ccPersonData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('ccPersonData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('ccPersonData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('ccPersonData')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('ccPersonData')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('ccPersonData')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('ccPersonData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('ccPersonData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('ccPersonData')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('ccPersonData')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('projectSelectData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('productSelectData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-31','mdDefault',"instance('productSelectData')/PROJECT_ID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('moduleSelectData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-32','mdDefault',"instance('moduleSelectData')/PRODUCT_IDID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('funcSelectData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-33','mdDefault',"instance('funcSelectData')/MODULE_ID","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-34','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-37','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('defectStatusData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDefectBug.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action2,'mdDefault', evt,false)});	
new xforms.XFInstance2('cData','mdDefault',null,null,null,null,null,null,null,null,null,null,null);new SimpleStore('cData','value,name');	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-56','mdDefault',"instance('bizData1')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdDefault',"instance('bizData1')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdDefault',"instance('bizData1')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdDefault',"instance('bizData1')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-60','mdDefault',"instance('bizData1')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-61','mdDefault',"instance('bizData1')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-62','mdDefault',"instance('bizData1')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-63','mdDefault',"instance('bizData1')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-64','mdDefault',"instance('bizData1')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-65','mdDefault',"instance('bizData1')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('assignPersonData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-66','mdDefault',"instance('assignPersonData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-67','mdDefault',"instance('assignPersonData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-68','mdDefault',"instance('assignPersonData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-69','mdDefault',"instance('assignPersonData')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-70','mdDefault',"instance('assignPersonData')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-71','mdDefault',"instance('assignPersonData')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-72','mdDefault',"instance('assignPersonData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-73','mdDefault',"instance('assignPersonData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-74','mdDefault',"instance('assignPersonData')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-75','mdDefault',"instance('assignPersonData')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_N330127593 = new xforms.XFMenu('GLOBAL_ID_N330127593','context');xf_menu_GLOBAL_ID_N330127593.menu.addContextZone('0d77f8d433944f1f81c89c6e440d038d');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N330127593.hide()});xf_menu_GLOBAL_ID_N330127593.menu.setOpenMode('web');	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1541507797");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N330127593'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N330127593', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1541507797',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_706958832');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_706958832", "");}));xf._p(justep('GLOBAL_ID_1541507797'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_1541507797', evt,false)});	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_706958832');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1541507797'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_1541507797', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1699951839',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N789878414');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N789878414", "");}));xf._p(justep('GLOBAL_ID_1699951839'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_1699951839', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var reviewerData_part_loaded = false;	
function load_reviewerData_part(callback){if (reviewerData_part_loaded) return;reviewerData_part_loaded = true;	
new xforms.XFInstance2('reviewerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-46','mdDefault',"instance('reviewerData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('reviewerData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('reviewerData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('reviewerData')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('reviewerData')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdDefault',"instance('reviewerData')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdDefault',"instance('reviewerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdDefault',"instance('reviewerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdDefault',"instance('reviewerData')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-55','mdDefault',"instance('reviewerData')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var reviewerData_part_init_loaded = false;	
function load_reviewerData_part_init(){if (reviewerData_part_init_loaded) return;reviewerData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDefectBug.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDefectBug.removeTriggerClick(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'removeTrigger', evt,false)});	
var xf_model_smartFilter1_model_1669082765 = new xforms.XFModel('smartFilter1_model_1669082765',null);	
new xforms.XFInstance2('smartFilter1_data_1669082765','smartFilter1_model_1669082765',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('smartFilter1_data_1669082765','value');	
xf._d('smartFilter1_input_1669082765','text',xf._q("instance('smartFilter1_data_1669082765')/value"),null,null,null,null,false,false);	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,"/UI/SA/OPM/images/search.gif",null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms.blur();justep.xbl('dataMain').refreshData();}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trigger1', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("data('cData')/value"),labelRef:xf._q("data('cData')/name"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default110"><row id="default112"><cell id="default113">0</cell><cell id="default116">全部</cell></row><row id="default117"><cell id="default143">1</cell><cell id="default154">本人</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_trigger_trigger3=new xforms.XFTrigger('trigger3',null,null,null,false,false,false,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDefectBug.trigger3Click(event)}));xf._p(justep('trigger3'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trigger3', evt,false)});	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'VERSION_ID,FUNC_ID,PLATFORM_INFO,PRIORITY,SEVERITY,ASSIGN_PERSON,CC_PERSON,DEFECT_DESC,DEFECT_DETAIL,DEFECT_REASON,DEFECT_SOLUTION,DEFECT_STATUS,CREATOR,CREATE_DATE,REVIEW_COMMENT,REVIEWER,REVIEW_DATE,MEMO,DEFECT_STATUS_NAME,CC_PERSON_NAME,REVIEWER_NAME,MODULE_ID,PRODUCT_IDID,PROJECT_ID,PROJECT_MANAGER,MAJOR_VERSION_NUMBER,MINOR_VERSION_NUMBER,PROJECT_MANAGER_NAME,recCB',onInit:null,type:'grid',smartRender:null,delay:false,ids:'PROJECT_NAME,PRODUCT_NAME,MODULE_NAME,FUNC_NAME,myVersionId,PRIORITY_NAME,SEVERITY_NAME,DEFECT_STATUS_CNAME,ASSIGN_PERSON_NAME,CREATOR_NAME,space-column',headNames:'项目名称,产品名称,模块名称,功能名称,缺陷版本号,缺陷类型,缺陷等级,缺陷状态,分配给谁,缺陷提出人,&nbsp;',widths:'164,164,168,198,122,82,84,100,100,100,*',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'left,left,left,left,left,left,left,left,left,left,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'newDefectBug.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_insertTrigger1=new xforms.XFTrigger('insertTrigger1',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDefectBug.newItemClick(event)}));xf._p(justep('insertTrigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'insertTrigger1', evt,false)});	
var xf_trigger_saveTrigger2=new xforms.XFTrigger('saveTrigger2',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDefectBug.saveTrigger2Click(event)}));xf._p(justep('saveTrigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'saveTrigger2', evt,false)});	
var xf_trigger_removeTrigger2=new xforms.XFTrigger('removeTrigger2',null,"/UI/system/images/standardToolbar/standard/remove.gif","/UI/system/images/standardToolbar/standard/un_remove.gif",false,false,false,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDefectBug.removeTrigger2Click(event)}));xf._p(justep('removeTrigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'removeTrigger2', evt,false)});	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('smartFilter1_model_1669082765').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptCREATOR','text',xf._q("data('dataMain')/CREATOR_NAME"),null,null,null,null,true,false);	
xf._d('iptCREATE_DATE','text',xf._q("data('dataMain')/CREATE_DATE"),null,null,null,null,true,false);	
new xforms.XFExtSelect({id:'iptVERSION_ID',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/VERSION_ID"),labelRef:xf._q("data('dataMain')/myVersionId"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'versionData',columns:'DEFECT_TRACK_VERSION_INFO,myVersionId,__c_,PRODUCT_ID,MAJOR_VERSION_NUMBER,MINOR_VERSION_NUMBER,REVISION_NUMBER,BUILD_DATE,BUILD_PERSON,MEMO,PRODUCT_NAME,PROJECT_ID,PROJECT_NAME,HR_BASE_INFO,oPERATORNAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'PRODUCT_ID,MAJOR_VERSION_NUMBER,MINOR_VERSION_NUMBER,REVISION_NUMBER,BUILD_DATE,BUILD_PERSON,MEMO,PRODUCT_NAME,PROJECT_ID,PROJECT_NAME,HR_BASE_INFO,oPERATORNAME',valueColumn:'DEFECT_TRACK_VERSION_INFO',labelColumn:'myVersionId',extColumn:null,labels:',,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'iptPRIORITY',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PRIORITY"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default115"><row id="default118"><cell id="default123">1</cell><cell id="default124">功能错误</cell></row><row id="default129"><cell id="default130">2</cell><cell id="default131">功能缺失</cell></row><row id="default132"><cell id="default136">3</cell><cell id="default137">界面缺陷</cell></row><row id="default138"><cell id="default139">4</cell><cell id="default140">其他</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'iptSEVERITY',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/SEVERITY"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default89"><row id="default90"><cell id="default91">1</cell><cell id="default92">致命缺陷</cell></row><row id="default93"><cell id="default94">2</cell><cell id="default95">严重缺陷</cell></row><row id="default96"><cell id="default97">3</cell><cell id="default98">一般性缺陷</cell></row><row id="default99"><cell id="default100">4</cell><cell id="default101">建议性缺陷</cell></row><row id="default102"><cell id="default103">5</cell><cell id="default104">其它缺陷</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'projectSelect',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PROJECT_ID"),labelRef:xf._q("data('dataMain')/PROJECT_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'projectSelectData',columns:'DEFECT_TRACK_PROJECT_INFO,PROJECT_NAME,__c_,PROJECT_MANAGER,PROJECT_DESC,MEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DEFECT_TRACK_PROJECT_INFO,PROJECT_MANAGER,PROJECT_DESC,MEMO',valueColumn:'DEFECT_TRACK_PROJECT_INFO',labelColumn:'PROJECT_NAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'newDefectBug.projectSelectCloseup'});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PRODUCT_IDID"),labelRef:xf._q("data('dataMain')/PRODUCT_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'productSelectData',columns:'DEFECT_TRACK_PRODUCT_INFO,PRODUCT_NAME,__c_,PROJECT_ID,PRODUCT_DESC,MEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DEFECT_TRACK_PRODUCT_INFO,PROJECT_ID,PRODUCT_DESC,MEMO',valueColumn:'DEFECT_TRACK_PRODUCT_INFO',labelColumn:'PRODUCT_NAME',extColumn:null,labels:',,,,,',aligns:',,,,,',types:'ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'newDefectBug.gridSelect2Dropdown',onCloseup:'newDefectBug.gridSelect2Closeup'});	
xf._d('iptMEMO','textarea',xf._q("data('dataMain')/MEMO"),null,null,null,null,false,false);	
xf._d('iptDEFECT_DETAIL','textarea',xf._q("data('dataMain')/DEFECT_DETAIL"),null,null,null,null,false,false);	
xf._d('iptDEFECT_DESC','textarea',xf._q("data('dataMain')/DEFECT_DESC"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/MODULE_ID"),labelRef:xf._q("data('dataMain')/MODULE_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'moduleSelectData',columns:'DEFECT_TRACK_MODULE_INFO,MODULE_NAME,__c_,PRODUCT_IDID,MEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DEFECT_TRACK_MODULE_INFO,PRODUCT_IDID,MEMO',valueColumn:'DEFECT_TRACK_MODULE_INFO',labelColumn:'MODULE_NAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'newDefectBug.gridSelect3Dropdown',onCloseup:'newDefectBug.gridSelect3Closeup'});	
new xforms.XFExtSelect({id:'iptPLATFORM_INFO',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PLATFORM_INFO"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default8"><row id="default9"><cell id="default10">1</cell><cell id="default11">Linux</cell></row><row id="default12"><cell id="default13">2</cell><cell id="default16">Windows</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'iptFUNC_ID',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/FUNC_ID"),labelRef:xf._q("data('dataMain')/FUNC_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'funcSelectData',columns:'DEFECT_TRACK_FUNC_INFO,FUNC_NAME,__c_,MODULE_ID,MEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DEFECT_TRACK_FUNC_INFO,MODULE_ID,MEMO',valueColumn:'DEFECT_TRACK_FUNC_INFO',labelColumn:'FUNC_NAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'newDefectBug.iptFUNC_IDDropdown',onCloseup:null});	
new xforms.XFExtSelect({id:'iptDEFECT_STATUS',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/DEFECT_STATUS"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'defectStatusData',columns:'DEFECT_STATUS_CODE,DEFECT_STATUS_CNAME,__c_,DEFECT_STATUS_ENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DEFECT_STATUS_CODE,DEFECT_STATUS_ENAME',valueColumn:'DEFECT_STATUS_CODE',labelColumn:'DEFECT_STATUS_CNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default63"></rows>',inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'iptASSIGN_PERSON',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/ASSIGN_PERSON"),labelRef:xf._q("data('dataMain')/ASSIGN_PERSON_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'assignPersonData',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',valueColumn:'personLoginName',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect1',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/REVIEWER"),labelRef:xf._q("data('dataMain')/REVIEWER_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',valueColumn:'personLoginName',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'iptCC_PERSON',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/CC_PERSON"),labelRef:xf._q("data('dataMain')/CC_PERSON_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'ccPersonData',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',valueColumn:'personLoginName',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
