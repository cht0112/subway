
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
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
					if (typeof(data.advanceFilter) != "undefined") {var frameEl = document.getElementById(this.iframeId);
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

	var ids=[{id:'3f615122a67747d9b9b3f228a5b36749', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'default1', name:'xforms:label'}]},{id:'83161a0eeecf4e0c908e4ad62030c95b', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grdMain', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insert', name:'xforms:trigger', children:[{id:'d61f02f731ee4faeb47392be882ba656', name:'xforms:label'}]},{id:'saveMas', name:'xforms:trigger', children:[{id:'e66564832d634ef8bff6ae202e065a15', name:'xforms:label'}]}]},{id:'iptSUPERVISION_PLAN_CODEPLANCODE', name:'xforms:input'},{id:'iptSUPERVISION_NO', name:'xforms:input'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default31', name:'xforms:label'},{id:'default32', name:'xforms:value'}]},{id:'iptPROJECT_DATE', name:'xforms:input'},{id:'iptENDING_DATE', name:'xforms:input'},{id:'iptEMPLOYEE_NUMBER', name:'xforms:input'},{id:'iptPROBATION_NUMBER', name:'xforms:input'},{id:'iptSTUDENT_NUMBER', name:'xforms:input'},{id:'iptOTHER_NUMBER', name:'xforms:input'},{id:'input3', name:'xforms:input'},{id:'iptPLAN_DATE', name:'xforms:input'},{id:'radio1', name:'xforms:select1', children:[{id:'selectItem1', name:'xforms:item', children:[{id:'default10', name:'xforms:label'},{id:'default11', name:'xforms:value'}]},{id:'selectItem2', name:'xforms:item', children:[{id:'default12', name:'xforms:label'},{id:'default13', name:'xforms:value'}]},{id:'selectItem3', name:'xforms:item', children:[{id:'default14', name:'xforms:label'},{id:'default19', name:'xforms:value'}]}]},{id:'textarea5', name:'xforms:textarea'},{id:'textarea4', name:'xforms:textarea'}]},{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMas', name:'xforms:trigger', children:[{id:'af5363ba0f9d491da4ac6fd1e9c8731f', name:'xforms:label'}]},{id:'save2Mas', name:'xforms:trigger', children:[{id:'20916cf065f54125a7dc8775a614d36d', name:'xforms:label'}]}]},{id:'grid5', name:'xforms:grid'}]},{id:'filter-pattern-0b029107-f8f5-4b9e-8509-daeec5c60f5b', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'f32825a84268480b9f74187432f0e602', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_650706548', name:'xforms:menu'}]},{id:'GLOBAL_ID_1861785932', name:'xforms:dialog'}]},{id:'filter-dialog-4a3e1497-bb4f-4e4c-b949-bd591eb8b0e9', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1137575677', name:'xforms:dialog'}]},{id:'filter-pattern-fa6efef9-7d1e-47e0-9f91-3a79720e6b40', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'8109741d1db845319828ce9a71d34922', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1264314453', name:'xforms:menu'}]},{id:'GLOBAL_ID_N944312936', name:'xforms:dialog'}]},{id:'filter-dialog-28f95387-c04f-4c92-a0c1-df6fde46ca3b', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N224103278', name:'xforms:dialog'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default17', name:'xforms:label'},{id:'default47', name:'xforms:value'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','default1');xf._a(null,'grdMain');xf._a(null,'insert');xf._a('insert','d61f02f731ee4faeb47392be882ba656');xf._a(null,'saveMas');xf._a('saveMas','e66564832d634ef8bff6ae202e065a15');xf._a(null,'iptSUPERVISION_PLAN_CODEPLANCODE');xf._a(null,'iptSUPERVISION_NO');xf._a(null,'gridSelect2');xf._a('gridSelect2','default31');xf._a('gridSelect2','default33');xf._a(null,'iptPROJECT_DATE');xf._a(null,'iptENDING_DATE');xf._a(null,'iptEMPLOYEE_NUMBER');xf._a(null,'iptPROBATION_NUMBER');xf._a(null,'iptSTUDENT_NUMBER');xf._a(null,'iptOTHER_NUMBER');xf._a(null,'input3');xf._a(null,'iptPLAN_DATE');xf._a(null,'radio1');xf._a('radio1','selectItem1');xf._a('selectItem1','default10');xf._a('radio1','selectItem2');xf._a('selectItem2','default12');xf._a('radio1','selectItem3');xf._a('selectItem3','default14');xf._a(null,'textarea5');xf._a(null,'textarea4');xf._a(null,'insertMas');xf._a('insertMas','af5363ba0f9d491da4ac6fd1e9c8731f');xf._a(null,'save2Mas');xf._a('save2Mas','20916cf065f54125a7dc8775a614d36d');xf._a(null,'grid5');xf._a(null,'gridSelect3');xf._a('gridSelect3','default17');xf._a('gridSelect3','default48');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/SUPERVISION_PLAN_CODEPLANCODE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_PLAN_CODEPLANCODE')))));	
xf._b("true()",xf._f('true'));	
xf._b("'编码不能为空!'",xf._i("编码不能为空!"));	
xf._b("instance('dataMain')/SUPERVISION_NO",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_NO')))));	
xf._b("'编号不能为空!'",xf._i("编号不能为空!"));	
xf._b("instance('dataMain')/PROJECT_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_ID')))));	
xf._b("'项目名称不能为空!'",xf._i("项目名称不能为空!"));	
xf._b("instance('dataMain')/PROJECT_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_DATE')))));	
xf._b("'项目开始日期不能为空!'",xf._i("项目开始日期不能为空!"));	
xf._b("instance('dataMain')/ENDING_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','ENDING_DATE')))));	
xf._b("'项目结束日期不能为空!'",xf._i("项目结束日期不能为空!"));	
xf._b("instance('dataMain')/PLAN_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PLAN_DATE')))));	
xf._b("'计划制定日期不能为空!'",xf._i("计划制定日期不能为空!"));	
xf._b("instance('dataMain')/EMPLOYEE_NUMBER",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EMPLOYEE_NUMBER')))));	
xf._b("instance('dataMain')/PROBATION_NUMBER",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBATION_NUMBER')))));	
xf._b("instance('dataMain')/STUDENT_NUMBER",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','STUDENT_NUMBER')))));	
xf._b("instance('dataMain')/OTHER_NUMBER",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','OTHER_NUMBER')))));	
xf._b("instance('dataMain')/TOTAL_NUMBER",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','TOTAL_NUMBER')))));	
xf._b("instance('dataMain')/PROJECT_PRIOR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_PRIOR')))));	
xf._b("instance('dataMain')/SUPERVISION_COUNT",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_COUNT')))));	
xf._b("instance('TEST_PROJECT_INFO')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('TEST_PROJECT_INFO')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('TEST_PROJECT_INFO')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('TEST_PROJECT_INFO')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('TEST_PROJECT_INFO')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('TEST_PROJECT_INFO')/lINEID",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('TEST_PROJECT_INFO')/bUSINESSID",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('TEST_PROJECT_INFO')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('TEST_PROJECT_INFO')/pROJECTDATE",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('TEST_PROJECT_INFO')/eNDINGDATE",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('TEST_PROJECT_INFO')/mAKEDATE",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('TEST_PROJECT_INFO')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("TEST_PROJECT_INFO")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('qa_supervision_plan_round')/ROUND_NO",xf._g(xf._f('instance',xf._i("qa_supervision_plan_round")),xf._h(false, xf._k("child",xf._j('','ROUND_NO')))));	
xf._b("'轮次不能为空!'",xf._i("轮次不能为空!"));	
xf._b("instance('qa_supervision_plan_round')/SUPERVISION_DATE",xf._g(xf._f('instance',xf._i("qa_supervision_plan_round")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_DATE')))));	
xf._b("'监督时间不能为空!'",xf._i("监督时间不能为空!"));	
xf._b("instance('qa_supervision_plan_round')/SUPERVISION_PERSON",xf._g(xf._f('instance',xf._i("qa_supervision_plan_round")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_PERSON')))));	
xf._b("'监督员不能为空!'",xf._i("监督员不能为空!"));	
xf._b("instance('qa_supervision_plan_round')/SUPERVISION_PLAN_ID",xf._g(xf._f('instance',xf._i("qa_supervision_plan_round")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_PLAN_ID')))));	
xf._b("instance('cData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('cData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('cData')/cHECKRESULT",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("instance('cData')/cHECKTIME",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKTIME')))));	
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
xf._b("instance('wcData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('wcData')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('wcData')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('wcData')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('wcData')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('wcData')/lINEID",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('wcData')/bUSINESSID",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('wcData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('wcData')/pROJECTDATE",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('wcData')/eNDINGDATE",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('wcData')/mAKEDATE",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('wcData')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("wcData")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("PROJECT_NAME",xf._h(false, xf._k("child",xf._j('','PROJECT_NAME'))));	
xf._b("SUPERVISION_PLAN_CODEPLANCODE",xf._h(false, xf._k("child",xf._j('','SUPERVISION_PLAN_CODEPLANCODE'))));	
xf._b("SUPERVISION_NO",xf._h(false, xf._k("child",xf._j('','SUPERVISION_NO'))));	
xf._b("PROJECT_DATE",xf._h(false, xf._k("child",xf._j('','PROJECT_DATE'))));	
xf._b("ENDING_DATE",xf._h(false, xf._k("child",xf._j('','ENDING_DATE'))));	
xf._b("PLAN_DATE",xf._h(false, xf._k("child",xf._j('','PLAN_DATE'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMain')/SUPERVISION_PLAN_CODEPLANCODE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_PLAN_CODEPLANCODE')))));	
xf._b("data('dataMain')/SUPERVISION_NO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_NO')))));	
xf._b("data('dataMain')/PROJECT_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_ID')))));	
xf._b("data('dataMain')/PROJECT_NAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_NAME')))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("TEST_PROJECT_INFO",xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("aPPLICATIONNO",xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO'))));	
xf._b("tESTSCHEMEID",xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID'))));	
xf._b("pROJECTTYPE",xf._h(false, xf._k("child",xf._j('','pROJECTTYPE'))));	
xf._b("aSSIGNEDMANUFACTUREID",xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID'))));	
xf._b("cONTACTPERSON",xf._h(false, xf._k("child",xf._j('','cONTACTPERSON'))));	
xf._b("cONTACTMOBILE",xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE'))));	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))));	
xf._b("cONTACTEMAIL",xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL'))));	
xf._b("nOTIFYTYPE",xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE'))));	
xf._b("lINEID",xf._h(false, xf._k("child",xf._j('','lINEID'))));	
xf._b("bUSINESSID",xf._h(false, xf._k("child",xf._j('','bUSINESSID'))));	
xf._b("mANUFACTUREID",xf._h(false, xf._k("child",xf._j('','mANUFACTUREID'))));	
xf._b("pROJECTDATE",xf._h(false, xf._k("child",xf._j('','pROJECTDATE'))));	
xf._b("eNDINGDATE",xf._h(false, xf._k("child",xf._j('','eNDINGDATE'))));	
xf._b("pROJECTMANAGER",xf._h(false, xf._k("child",xf._j('','pROJECTMANAGER'))));	
xf._b("qAMANAGER",xf._h(false, xf._k("child",xf._j('','qAMANAGER'))));	
xf._b("tESTMANAGER",xf._h(false, xf._k("child",xf._j('','tESTMANAGER'))));	
xf._b("tECHMANAGER",xf._h(false, xf._k("child",xf._j('','tECHMANAGER'))));	
xf._b("mAKEDATE",xf._h(false, xf._k("child",xf._j('','mAKEDATE'))));	
xf._b("eXECUTESTATE",xf._h(false, xf._k("child",xf._j('','eXECUTESTATE'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("data('dataMain')/PROJECT_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_DATE')))));	
xf._b("data('dataMain')/ENDING_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','ENDING_DATE')))));	
xf._b("data('dataMain')/EMPLOYEE_NUMBER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','EMPLOYEE_NUMBER')))));	
xf._b("data('dataMain')/PROBATION_NUMBER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBATION_NUMBER')))));	
xf._b("data('dataMain')/STUDENT_NUMBER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','STUDENT_NUMBER')))));	
xf._b("data('dataMain')/OTHER_NUMBER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','OTHER_NUMBER')))));	
xf._b("data('dataMain')/TOTAL_NUMBER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','TOTAL_NUMBER')))));	
xf._b("data('dataMain')/PLAN_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PLAN_DATE')))));	
xf._b("data('dataMain')/PROJECT_PRIOR",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROJECT_PRIOR')))));	
xf._b("data('dataMain')/SUPPLEMENT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SUPPLEMENT')))));	
xf._b("data('dataMain')/MEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MEMO')))));	
xf._b("ROUND_NO",xf._h(false, xf._k("child",xf._j('','ROUND_NO'))));	
xf._b("SUPERVISION_DATE",xf._h(false, xf._k("child",xf._j('','SUPERVISION_DATE'))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("SUPERVISION_PLAN_ID",xf._h(false, xf._k("child",xf._j('','SUPERVISION_PLAN_ID'))));	
xf._b("not(call('justep.XData.canDo','dataMain','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMain','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Last"))));	
xf._b("not(call('justep.XData.canDo','qa_supervision_plan_round','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("qa_supervision_plan_round"),xf._i("Delete"))));	
xf._b("data('qa_supervision_plan_round')/SUPERVISION_PERSON",xf._g(xf._f('data',xf._i("qa_supervision_plan_round")),xf._h(false, xf._k("child",xf._j('','SUPERVISION_PERSON')))));	
xf._b("data('qa_supervision_plan_round')/oPERATORNAME",xf._g(xf._f('data',xf._i("qa_supervision_plan_round")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME')))));	
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
xf._b("cARDID",xf._h(false, xf._k("child",xf._j('','cARDID'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('dateTime', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('select', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/SUPERVISION_PLAN_CODEPLANCODE",null,null,"true()",null,null,null,"'编码不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/SUPERVISION_NO",null,null,"true()",null,null,null,"'编号不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/PROJECT_ID",null,null,"true()",null,null,null,"'项目名称不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/PROJECT_DATE",null,null,"true()",null,null,null,"'项目开始日期不能为空!'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/ENDING_DATE",null,null,"true()",null,null,null,"'项目结束日期不能为空!'");	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/PLAN_DATE",null,null,"true()",null,null,null,"'计划制定日期不能为空!'");	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/PROJECT_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/PROJECT_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/ENDING_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/EMPLOYEE_NUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/PROBATION_NUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dataMain')/STUDENT_NUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dataMain')/OTHER_NUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMain')/TOTAL_NUMBER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMain')/PROJECT_PRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMain')/SUPERVISION_COUNT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMain')/PLAN_DATE","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('TEST_PROJECT_INFO','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-17','mdDefault',"instance('TEST_PROJECT_INFO')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('TEST_PROJECT_INFO')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('TEST_PROJECT_INFO')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('TEST_PROJECT_INFO')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('TEST_PROJECT_INFO')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('TEST_PROJECT_INFO')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('TEST_PROJECT_INFO')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('TEST_PROJECT_INFO')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('TEST_PROJECT_INFO')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('TEST_PROJECT_INFO')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('TEST_PROJECT_INFO')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('TEST_PROJECT_INFO')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('qa_supervision_plan_round','mdDefault',null,null,null,'SUPERVISION_PLAN_ID','dataMain',null,null,null,null,null,'whereAll');	
xf._c('xf-bind-29','mdDefault',"instance('qa_supervision_plan_round')/ROUND_NO",null,null,"true()",null,null,null,"'轮次不能为空!'");	
xf._c('xf-bind-30','mdDefault',"instance('qa_supervision_plan_round')/SUPERVISION_DATE",null,null,"true()",null,null,null,"'监督时间不能为空!'");	
xf._c('xf-bind-31','mdDefault',"instance('qa_supervision_plan_round')/SUPERVISION_PERSON",null,null,"true()",null,null,null,"'监督员不能为空!'");	
xf._c('xf-bind-32','mdDefault',"instance('qa_supervision_plan_round')/SUPERVISION_PLAN_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('qa_supervision_plan_round')/ROUND_NO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('qa_supervision_plan_round')/SUPERVISION_DATE","xsd:date",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action2,'mdDefault', evt,false)});	
new xforms.XFInstance2('cData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('cData',null);	
xf._c('xf-bind-35','mdDefault',"instance('cData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('cData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('cData')/cHECKRESULT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('cData')/cHECKTIME","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-42','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('wcData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('wcData',null);	
xf._c('xf-bind-51','mdDefault',"instance('wcData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdDefault',"instance('wcData')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdDefault',"instance('wcData')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdDefault',"instance('wcData')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-55','mdDefault',"instance('wcData')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdDefault',"instance('wcData')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdDefault',"instance('wcData')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdDefault',"instance('wcData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdDefault',"instance('wcData')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-60','mdDefault',"instance('wcData')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-61','mdDefault',"instance('wcData')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-62','mdDefault',"instance('wcData')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('mdDefault'),"onload",null,function(evt) { xforms.run(xf_action_action6,'mdDefault', evt,false)});	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_650706548 = new xforms.XFMenu('GLOBAL_ID_650706548','context');xf_menu_GLOBAL_ID_650706548.menu.addContextZone('f32825a84268480b9f74187432f0e602');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_650706548.hide()});xf_menu_GLOBAL_ID_650706548.menu.setOpenMode('web');	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1861785932");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_650706548'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_650706548', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1861785932',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N2033580377');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N2033580377", "");}));xf._p(justep('GLOBAL_ID_1861785932'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_1861785932', evt,false)});	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N2033580377');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1861785932'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_1861785932', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1137575677',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N739841996');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N739841996", "");}));xf._p(justep('GLOBAL_ID_1137575677'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_14,'GLOBAL_ID_1137575677', evt,false)});	
var xf_menu_GLOBAL_ID_N1264314453 = new xforms.XFMenu('GLOBAL_ID_N1264314453','context');xf_menu_GLOBAL_ID_N1264314453.menu.addContextZone('8109741d1db845319828ce9a71d34922');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1264314453.hide()});xf_menu_GLOBAL_ID_N1264314453.menu.setOpenMode('web');	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N944312936");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1264314453'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_15,'GLOBAL_ID_N1264314453', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N944312936',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N387572531');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N387572531", "");}));xf._p(justep('GLOBAL_ID_N944312936'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_16,'GLOBAL_ID_N944312936', evt,false)});	
var xf_action_xf_action_17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N387572531');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N944312936'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_17,'GLOBAL_ID_N944312936', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N224103278',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_18=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1077649164');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1077649164", "");}));xf._p(justep('GLOBAL_ID_N224103278'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_18,'GLOBAL_ID_N224103278', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('qa_supervision_plan_round')/SUPERVISION_PERSON"),labelRef:xf._q("data('qa_supervision_plan_round')/oPERATORNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'hrPerData',columns:'HR_BASE_INFO,oPERATORNAME,__c_,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'HR_BASE_INFO,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',valueColumn:'HR_BASE_INFO',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect3Closeup'});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var sysOperData_part_loaded = false;	
function load_sysOperData_part(callback){if (sysOperData_part_loaded) return;sysOperData_part_loaded = true;	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-39','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var sysOperData_part_init_loaded = false;	
function load_sysOperData_part_init(){if (sysOperData_part_init_loaded) return;sysOperData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'insertTrigger', evt,false)});	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'PROJECT_ID,EMPLOYEE_NUMBER,PROBATION_NUMBER,STUDENT_NUMBER,OTHER_NUMBER,TOTAL_NUMBER,PROJECT_PRIOR,SUPERVISION_COUNT,PLAN_PEOPLE,SUPPLEMENT,RESPONSOR_VIEW,MEMO',onInit:null,type:'grid',smartRender:null,delay:false,ids:'PROJECT_NAME,SUPERVISION_PLAN_CODEPLANCODE,SUPERVISION_NO,PROJECT_DATE,ENDING_DATE,PLAN_DATE,space-column',headNames:'项目名称,质量监督计划编码,质量监督计划单据编号,项目开始日期,项目结束日期,计划制定日期,&nbsp;',widths:'155,155,146,100,100,100,*',types:'ro,ro,ro,dateTime,dateTime,dateTime,ro',hiddenColumns:'',aligns:',,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_insert=new xforms.XFTrigger('insert',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newClick(event)}));xf._p(justep('insert'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'insert', evt,false)});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveMore(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'saveMas', evt,false)});	
xforms.load_parts('vDetail');	
xforms.load_parts('view1');	
xforms.load_parts('view3');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptSUPERVISION_PLAN_CODEPLANCODE','text',xf._q("data('dataMain')/SUPERVISION_PLAN_CODEPLANCODE"),null,null,null,null,false,false);	
xf._d('iptSUPERVISION_NO','text',xf._q("data('dataMain')/SUPERVISION_NO"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PROJECT_ID"),labelRef:xf._q("data('dataMain')/PROJECT_NAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'TEST_PROJECT_INFO',columns:'TEST_PROJECT_INFO,pROJECTNAME,__c_,aPPLICATIONNO,tESTSCHEMEID,pROJECTTYPE,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,qAMANAGER,tESTMANAGER,tECHMANAGER,mAKEDATE,eXECUTESTATE,mEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'TEST_PROJECT_INFO,aPPLICATIONNO,tESTSCHEMEID,pROJECTTYPE,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,qAMANAGER,tESTMANAGER,tECHMANAGER,mAKEDATE,eXECUTESTATE,mEMO',valueColumn:'TEST_PROJECT_INFO',labelColumn:'pROJECTNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect2Closeup'});	
xf._d('iptPROJECT_DATE','text',xf._q("data('dataMain')/PROJECT_DATE"),null,null,null,null,true,false);	
xf._d('iptENDING_DATE','text',xf._q("data('dataMain')/ENDING_DATE"),null,null,null,null,true,false);	
xf._d('iptEMPLOYEE_NUMBER','text',xf._q("data('dataMain')/EMPLOYEE_NUMBER"),"^[0-9]*[1-9][0-9]*$",null,null,null,false,false);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.iptEMPLOYEE_NUMBERChange(event)}));xf._p(justep('iptEMPLOYEE_NUMBER'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action3,'iptEMPLOYEE_NUMBER', evt,false)});	
xf._d('iptPROBATION_NUMBER','text',xf._q("data('dataMain')/PROBATION_NUMBER"),"^[0-9]*[1-9][0-9]*$",null,null,null,false,false);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.iptPROBATION_NUMBERChange(event)}));xf._p(justep('iptPROBATION_NUMBER'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action4,'iptPROBATION_NUMBER', evt,false)});	
xf._d('iptSTUDENT_NUMBER','text',xf._q("data('dataMain')/STUDENT_NUMBER"),"^[0-9]*[1-9][0-9]*$",null,null,null,false,false);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.iptSTUDENT_NUMBERChange(event)}));xf._p(justep('iptSTUDENT_NUMBER'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action5,'iptSTUDENT_NUMBER', evt,false)});	
xf._d('iptOTHER_NUMBER','text',xf._q("data('dataMain')/OTHER_NUMBER"),"^[0-9]*[1-9][0-9]*$",null,null,null,false,false);	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.iptOTHER_NUMBERChange(event)}));xf._p(justep('iptOTHER_NUMBER'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action7,'iptOTHER_NUMBER', evt,false)});	
xf._d('input3','text',xf._q("data('dataMain')/TOTAL_NUMBER"),"^[0-9]*[1-9][0-9]*$",null,null,null,true,false);	
xf._d('iptPLAN_DATE','text',xf._q("data('dataMain')/PLAN_DATE"),null,null,null,null,true,false);	
var xf_select1_radio1=new xforms.XFSelect('radio1',false,true,xf._q("data('dataMain')/PROJECT_PRIOR"),true,false,false,'',12);	
var xf_item_selectItem1=new xforms.XFItem('selectItem1',null,null);	
var xf_item_selectItem2=new xforms.XFItem('selectItem2',null,null);	
var xf_item_selectItem3=new xforms.XFItem('selectItem3',null,null);	
xf._d('textarea5','textarea',xf._q("data('dataMain')/SUPPLEMENT"),null,null,null,null,false,false);	
xf._d('textarea4','textarea',xf._q("data('dataMain')/MEMO"),null,null,null,null,false,false);	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
var xf_trigger_insertMas=new xforms.XFTrigger('insertMas',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false,false,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.insertMasClick(event)}));xf._p(justep('insertMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_9,'insertMas', evt,false)});	
var xf_trigger_save2Mas=new xforms.XFTrigger('save2Mas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.save2More(event)}));xf._p(justep('save2Mas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_10,'save2Mas', evt,false)});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
new xforms.XFGrid({id:'grid5',instance:'qa_supervision_plan_round',systemColumnsPro:'SUPERVISION_PERSON',onInit:null,type:'grid',smartRender:null,delay:false,ids:'ROUND_NO,SUPERVISION_DATE,oPERATORNAME,SUPERVISION_PLAN_ID,space-column',headNames:'轮次,监督时间,监督员,SUPERVISION_PLAN_ID,&nbsp;',widths:'100,100,100,*,*',types:'ed,ed,select,ro,ro',hiddenColumns:'SUPERVISION_PLAN_ID',aligns:',,,,',serverSort:true,sorts:'na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'SUPERVISION_DATE','yyyy-MM-dd');this.grid.bindColEditor(null,'oPERATORNAME','gridSelect3');}});	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
