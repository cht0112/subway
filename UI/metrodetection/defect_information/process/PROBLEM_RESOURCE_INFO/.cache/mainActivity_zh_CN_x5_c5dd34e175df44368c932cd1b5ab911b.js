
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
					if (typeof(data.advanceFilter) != "undefined") {
						var frameEl = document.getElementById(this.iframeId);						if (frameEl) {
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
_xbl_JSClassDefine_toolbars.prototype = justep.Object.extend(new justep.XBLObject(), eval({			"initXBL" : function(){
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
								img.attr("src", info.disImg);	a.unbind("click");
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

	var ids=[{id:'2d6c6b241e664a739bd08421b553ee4d', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'a2e620df6b5446fd953200f42ce80964', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'94cf2ec96b3c4511b3d5e35ca0d9df8a', name:'xforms:label'}]},{id:'34c70ee5fef94295afff6527dc07f948', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grdMain', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'iptDEVICE_STYLE', name:'xforms:input'},{id:'iptHARDWARE_VERSION', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default19', name:'xforms:label'},{id:'default46', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default57', name:'xforms:label'},{id:'default58', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default69', name:'xforms:label'},{id:'default70', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default81', name:'xforms:label'},{id:'default82', name:'xforms:value'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default93', name:'xforms:label'},{id:'default94', name:'xforms:value'}]},{id:'gridSelect6', name:'xforms:gridselect1', children:[{id:'default105', name:'xforms:label'},{id:'default106', name:'xforms:value'}]},{id:'textarea1', name:'xforms:textarea'},{id:'gridSelect8', name:'xforms:gridselect1', children:[{id:'default44', name:'xforms:label'},{id:'default45', name:'xforms:value'}]},{id:'gridSelect9', name:'xforms:gridselect1', children:[{id:'default144', name:'xforms:label'},{id:'default145', name:'xforms:value'}]},{id:'textarea2', name:'xforms:textarea'},{id:'textarea3', name:'xforms:textarea'},{id:'grid1', name:'xforms:grid'}]}]},{id:'filter-pattern-984c8f35-92da-40ed-936f-24a90390223e', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'44f20067902f4e2fb4a24d4769022677', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1267834599', name:'xforms:menu'}]},{id:'GLOBAL_ID_N79036877', name:'xforms:dialog'}]},{id:'filter-dialog-50b4a1be-870c-4b28-adc6-eee31dd48b34', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N618406323', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','a2e620df6b5446fd953200f42ce80964');xf._a(null,'removeTrigger');xf._a('removeTrigger','94cf2ec96b3c4511b3d5e35ca0d9df8a');xf._a(null,'grdMain');xf._a(null,'iptDEVICE_STYLE');xf._a(null,'iptHARDWARE_VERSION');xf._a(null,'gridSelect1');xf._a('gridSelect1','default19');xf._a('gridSelect1','default47');xf._a(null,'gridSelect2');xf._a('gridSelect2','default57');xf._a('gridSelect2','default59');xf._a(null,'gridSelect3');xf._a('gridSelect3','default69');xf._a('gridSelect3','default71');xf._a(null,'gridSelect4');xf._a('gridSelect4','default81');xf._a('gridSelect4','default83');xf._a(null,'gridSelect5');xf._a('gridSelect5','default93');xf._a('gridSelect5','default95');xf._a(null,'gridSelect6');xf._a('gridSelect6','default105');xf._a('gridSelect6','default107');xf._a(null,'textarea1');xf._a(null,'gridSelect8');xf._a('gridSelect8','default44');xf._a('gridSelect8','default51');xf._a(null,'gridSelect9');xf._a('gridSelect9','default144');xf._a('gridSelect9','default146');xf._a(null,'textarea2');xf._a(null,'textarea3');xf._a(null,'grid1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/APPLY_FOR_OBJECT",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_OBJECT')))));	
xf._b("true()",xf._f('true'));	
xf._b("'应用检测对象类型 不能为空'",xf._i("应用检测对象类型 不能为空"));	
xf._b("instance('dataMain')/APPLY_FOR_DEVICE_TYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_DEVICE_TYPE')))));	
xf._b("'应用检测对象不能为空'",xf._i("应用检测对象不能为空"));	
xf._b("instance('dataMain')/APPLY_FOR_RANGE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_RANGE')))));	
xf._b("'应用检测方面类型不能为空'",xf._i("应用检测方面类型不能为空"));	
xf._b("instance('dataMain')/APPLY_FOR_SUB_RANGE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_SUB_RANGE')))));	
xf._b("'应用检测方面不能为空'",xf._i("应用检测方面不能为空"));	
xf._b("instance('dataMain')/PROBLEM_PRIOR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBLEM_PRIOR')))));	
xf._b("'问题级别不能为空'",xf._i("问题级别不能为空"));	
xf._b("instance('dataMain')/PROBLEM_TYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBLEM_TYPE')))));	
xf._b("'问题类型不能为空'",xf._i("问题类型不能为空"));	
xf._b("instance('dataMain')/PROBLEM_DESC",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBLEM_DESC')))));	
xf._b("'问题描述不能为空'",xf._i("问题描述不能为空"));	
xf._b("instance('dataMain')/MANUFACTURE_ID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("instance('dataMain')/HARDWARE_VERSION",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','HARDWARE_VERSION')))));	
xf._b("instance('dataMain')/pROBLEMPRIOR1",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR1')))));	
xf._b("instance('dataMain')/pROBLEMTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE')))));	
xf._b("instance('dataMain')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData2')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('bizData2')/dEVICETYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('bizData4')/dETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("instance('bizData4')/dETECTIONRANGEID",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("instance('bizData6')/pROBLEMPRIOR",xf._g(xf._f('instance',xf._i("bizData6")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR')))));	
xf._b("instance('bizData6')/pROBLEMTYPE",xf._g(xf._f('instance',xf._i("bizData6")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE')))));	
xf._b("instance('bizData7')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("bizData7")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData7')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("bizData7")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('bizData8')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("bizData8")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData8')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("bizData8")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('problem')/tASKID",xf._g(xf._f('instance',xf._i("problem")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('problem')/sUBTESTCASESTEPID",xf._g(xf._f('instance',xf._i("problem")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID')))));	
xf._b("instance('problem')/eXECUTEDATETIME",xf._g(xf._f('instance',xf._i("problem")),xf._h(false, xf._k("child",xf._j('','eXECUTEDATETIME')))));	
xf._b("instance('problem')/pROBLEMPRIOR",xf._g(xf._f('instance',xf._i("problem")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR')))));	
xf._b("instance('problem')/pROBLEMTYPE",xf._g(xf._f('instance',xf._i("problem")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE')))));	
xf._b("instance('problem')/rEPORTDATE",xf._g(xf._f('instance',xf._i("problem")),xf._h(false, xf._k("child",xf._j('','rEPORTDATE')))));	
xf._b("instance('problem')/pROBLEMID",xf._g(xf._f('instance',xf._i("problem")),xf._h(false, xf._k("child",xf._j('','pROBLEMID')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("DEVICE_STYLE",xf._h(false, xf._k("child",xf._j('','DEVICE_STYLE'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("rANGEIDCNAME",xf._h(false, xf._k("child",xf._j('','rANGEIDCNAME'))));	
xf._b("HARDWARE_VERSION",xf._h(false, xf._k("child",xf._j('','HARDWARE_VERSION'))));	
xf._b("pROBLEMPRIORCNAME",xf._h(false, xf._k("child",xf._j('','pROBLEMPRIORCNAME'))));	
xf._b("pROBLEMTYPECNAME",xf._h(false, xf._k("child",xf._j('','pROBLEMTYPECNAME'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMain')/DEVICE_STYLE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','DEVICE_STYLE')))));	
xf._b("data('dataMain')/HARDWARE_VERSION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','HARDWARE_VERSION')))));	
xf._b("data('dataMain')/APPLY_FOR_OBJECT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_OBJECT')))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('dataMain')/APPLY_FOR_DEVICE_TYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_DEVICE_TYPE')))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('dataMain')/APPLY_FOR_RANGE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_RANGE')))));	
xf._b("DETECTION_RANGE_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE'))));	
xf._b("dETECTIONRANGEENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEENAME'))));	
xf._b("data('dataMain')/APPLY_FOR_SUB_RANGE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_SUB_RANGE')))));	
xf._b("dETECTIONRANGEID",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID'))));	
xf._b("dETECTIONRANGETYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE'))));	
xf._b("rANGEIDENAME",xf._h(false, xf._k("child",xf._j('','rANGEIDENAME'))));	
xf._b("data('dataMain')/PROBLEM_PRIOR",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBLEM_PRIOR')))));	
xf._b("PROBLEM_PRIOR_CODE",xf._h(false, xf._k("child",xf._j('','PROBLEM_PRIOR_CODE'))));	
xf._b("pROBLEMPRIORENAME",xf._h(false, xf._k("child",xf._j('','pROBLEMPRIORENAME'))));	
xf._b("data('dataMain')/PROBLEM_TYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBLEM_TYPE')))));	
xf._b("pROBLEMTYPE",xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE'))));	
xf._b("pROBLEMPRIOR",xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR'))));	
xf._b("pROBLEMTYPEENAME",xf._h(false, xf._k("child",xf._j('','pROBLEMTYPEENAME'))));	
xf._b("data('dataMain')/MEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MEMO')))));	
xf._b("data('dataMain')/MANUFACTURE_ID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("data('dataMain')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("AFC_MANUFACTURER_INFO",xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO'))));	
xf._b("mANUFACTUREIDENAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDENAME'))),'','');	
xf._b("mANUFACTURETYPE",xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE'))),'','');	
xf._b("mANUFACTUREADDRESS",xf._h(false, xf._k("child",xf._j('','mANUFACTUREADDRESS'))),'','');	
xf._b("mANUFACTUREPOSTCODE",xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE'))),'','');	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))),'','');	
xf._b("cONTACTOR",xf._h(false, xf._k("child",xf._j('','cONTACTOR'))),'','');	
xf._b("cONTACTMOBILE",xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE'))),'','');	
xf._b("fAXNUMBER",xf._h(false, xf._k("child",xf._j('','fAXNUMBER'))),'','');	
xf._b("cONTACTEMAIL",xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL'))),'','');	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))),'','');	
xf._b("oPERATOR_ID",xf._h(false, xf._k("child",xf._j('','oPERATOR_ID'))),'','');	
xf._b("data('dataMain')/mANUFACTURETYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('dataMain')/SOLUTION",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','SOLUTION')))));	
xf._b("data('dataMain')/PROBLEM_DESC",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','PROBLEM_DESC')))));	
xf._b("tASKNAME",xf._h(false, xf._k("child",xf._j('','tASKNAME'))));	
xf._b("dEVICEID",xf._h(false, xf._k("child",xf._j('','dEVICEID'))));	
xf._b("tESTCASEID",xf._h(false, xf._k("child",xf._j('','tESTCASEID'))));	
xf._b("sUBTESTCASEID",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID'))));	
xf._b("pROBLEMDESC",xf._h(false, xf._k("child",xf._j('','pROBLEMDESC'))));	
xf._b("not(call('justep.XData.canDo','dataMain','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMain','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/APPLY_FOR_OBJECT",null,null,"true()",null,null,null,"'应用检测对象类型 不能为空'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/APPLY_FOR_DEVICE_TYPE",null,null,"true()",null,null,null,"'应用检测对象不能为空'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/APPLY_FOR_RANGE",null,null,"true()",null,null,null,"'应用检测方面类型不能为空'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/APPLY_FOR_SUB_RANGE",null,null,"true()",null,null,null,"'应用检测方面不能为空'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/PROBLEM_PRIOR",null,null,"true()",null,null,null,"'问题级别不能为空'");	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/PROBLEM_TYPE",null,null,"true()",null,null,null,"'问题类型不能为空'");	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/PROBLEM_DESC",null,null,"true()",null,null,null,"'问题描述不能为空'");	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/MANUFACTURE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/APPLY_FOR_OBJECT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/APPLY_FOR_DEVICE_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/APPLY_FOR_RANGE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dataMain')/APPLY_FOR_SUB_RANGE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dataMain')/HARDWARE_VERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMain')/PROBLEM_PRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMain')/PROBLEM_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMain')/PROBLEM_PRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMain')/pROBLEMPRIOR1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('dataMain')/pROBLEMTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dataMain')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData2','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-19','mdDefault',"instance('bizData2')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('bizData2')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData3','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData4','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-21','mdDefault',"instance('bizData4')/dETECTIONRANGETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('bizData4')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData5','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData6','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-23','mdDefault',"instance('bizData6')/pROBLEMPRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('bizData6')/pROBLEMTYPE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData8','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData8',null);	
xf._c('xf-bind-27','mdDefault',"instance('bizData8')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('bizData8')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'mdDefault', evt,false)});	
new xforms.XFInstance2('problem','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-29','mdDefault',"instance('problem')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('problem')/sUBTESTCASESTEPID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('problem')/eXECUTEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('problem')/pROBLEMPRIOR","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('problem')/pROBLEMTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('problem')/rEPORTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('problem')/pROBLEMID","xsd:float",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_N1267834599 = new xforms.XFMenu('GLOBAL_ID_N1267834599','context');xf_menu_GLOBAL_ID_N1267834599.menu.addContextZone('44f20067902f4e2fb4a24d4769022677');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1267834599.hide()});xf_menu_GLOBAL_ID_N1267834599.menu.setOpenMode('web');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N79036877");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1267834599'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N1267834599', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N79036877',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1788863836');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1788863836", "");}));xf._p(justep('GLOBAL_ID_N79036877'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N79036877', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1788863836');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N79036877'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N79036877', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N618406323',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1485198592');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1485198592", "");}));xf._p(justep('GLOBAL_ID_N618406323'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_N618406323', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var bizData7_part_loaded = false;	
function load_bizData7_part(callback){if (bizData7_part_loaded) return;bizData7_part_loaded = true;	
new xforms.XFInstance2('bizData7','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-25','mdDefault',"instance('bizData7')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('bizData7')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var bizData7_part_init_loaded = false;	
function load_bizData7_part_init(){if (bizData7_part_init_loaded) return;bizData7_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.assetDelete(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'removeTrigger', evt,false)});	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'MANUFACTURE_ID,APPLY_FOR_OBJECT,APPLY_FOR_DEVICE_TYPE,APPLY_FOR_RANGE,APPLY_FOR_SUB_RANGE,PROBLEM_PRIOR,PROBLEM_TYPE,PROBLEM_DESC,SOLUTION,MEMO,PROBLEM_TYPE_CODE,pROBLEMPRIOR1,pROBLEMTYPE,mANUFACTURETYPE',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,mANUFACTUREIDCNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,DEVICE_STYLE,dETECTIONRANGECNAME,rANGEIDCNAME,HARDWARE_VERSION,pROBLEMPRIORCNAME,pROBLEMTYPECNAME,space-column',headNames:'#master_checkbox,受测厂商,应用检测对象类型,应用检测对象,对象型号,应用检测方面类型,应用检测方面,版本信息,问题级别,问题类型,&nbsp;',widths:'30,100,100,132,100,100,100,100,100,100,*',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,center,center,center,center,center,center,center,center,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptDEVICE_STYLE','text',xf._q("data('dataMain')/DEVICE_STYLE"),null,null,null,null,false,false);	
xf._d('iptHARDWARE_VERSION','text',xf._q("data('dataMain')/HARDWARE_VERSION"),null,null,null,null,false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptHARDWARE_VERSION'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action2,'iptHARDWARE_VERSION', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/APPLY_FOR_OBJECT"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,__c_,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect1Closeup'});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/APPLY_FOR_DEVICE_TYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData2',columns:'dEVICETYPECNAME,__c_,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/APPLY_FOR_RANGE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData3',columns:'DETECTION_RANGE_TYPE,dETECTIONRANGECNAME,__c_,dETECTIONRANGEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_RANGE_TYPE,dETECTIONRANGEENAME',valueColumn:'DETECTION_RANGE_TYPE',labelColumn:'dETECTIONRANGECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect3Closeup'});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/APPLY_FOR_SUB_RANGE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData4',columns:'rANGEIDCNAME,__c_,dETECTIONRANGETYPE,dETECTIONRANGEID,rANGEIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONRANGETYPE,dETECTIONRANGEID,rANGEIDENAME',valueColumn:'dETECTIONRANGEID',labelColumn:'rANGEIDCNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PROBLEM_PRIOR"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData5',columns:'PROBLEM_PRIOR_CODE,pROBLEMPRIORCNAME,__c_,pROBLEMPRIORENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'PROBLEM_PRIOR_CODE,pROBLEMPRIORENAME',valueColumn:'PROBLEM_PRIOR_CODE',labelColumn:'pROBLEMPRIORCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect5Closeup'});	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/PROBLEM_TYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData6',columns:'pROBLEMTYPECNAME,__c_,pROBLEMPRIOR,pROBLEMTYPE,pROBLEMTYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'pROBLEMPRIOR,pROBLEMTYPE,pROBLEMTYPEENAME',valueColumn:'pROBLEMTYPE',labelColumn:'pROBLEMTYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea1','textarea',xf._q("data('dataMain')/MEMO"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/MANUFACTURE_ID"),labelRef:xf._q("data('dataMain')/mANUFACTUREIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData7',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,__c_,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default137"></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect8Closeup'});	
new xforms.XFExtSelect({id:'gridSelect9',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/mANUFACTURETYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default159"><row id="default160"><cell id="default161">1</cell><cell id="default162">设备厂商</cell></row><row id="default163"><cell id="default164">2</cell><cell id="default165">工具厂商</cell></row><row id="default166"><cell id="default167">3</cell><cell id="default168">第三方检测机构</cell></row></rows>',inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect9Closeup'});	
xf._d('textarea2','textarea',xf._q("data('dataMain')/SOLUTION"),null,null,null,null,false,false);	
xf._d('textarea3','textarea',xf._q("data('dataMain')/PROBLEM_DESC"),null,null,null,null,false,false);	
new xforms.XFGrid({id:'grid1',instance:'problem',systemColumnsPro:'tASKID,sUBTESTCASESTEPID,eXECUTEDATETIME,pROBLEMPRIOR,pROBLEMTYPE,oPERATORID,rEPORTDATE,mEMO,pROBLEMID,oPERATORNAME',onInit:null,type:'grid',smartRender:null,delay:false,ids:'tASKNAME,dEVICEID,tESTCASEID,sUBTESTCASEID,pROBLEMPRIORCNAME,pROBLEMTYPECNAME,pROBLEMDESC,space-column',headNames:'任务名称,设备名称,测试用例ID,测试子用例ID,问题级别,问题类型,问题描述,&nbsp;',widths:'100,100,100,100,100,100,100,*',types:'ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,center,center,center,center,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
