
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
				                  node.getAttribute('width'),node.getAttribute('height'),node.getAttribute('left'),node.getAttribute('top'),node.getAttribute("reload-on-open") =='true',		                  node.getAttribute('onSend') , node.getAttribute('onReceive') ,node.getAttribute('onInit') ,node.getAttribute('onOpen') ,node.getAttribute('onClose'));
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
					var target = event.srcElement || event.target;			var td = this.findParentTDOrTH(target);
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

	var ids=[{id:'52ae1806b9a14123b93f18faa3eb24f8', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'20a77c05d1dd48fdba42389d938012fb', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grdMain', name:'xforms:grid'}]},{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMas', name:'xforms:trigger', children:[{id:'fd2477eabb2e4549867b5bdb70408439', name:'xforms:label'}]},{id:'trigger2', name:'xforms:trigger', children:[{id:'default13', name:'xforms:label'}]}]},{id:'iptTASKID', name:'xforms:input'},{id:'iptDEVICEID', name:'xforms:input'},{id:'iptTESTCASEID', name:'xforms:input'},{id:'iptSUBTESTCASEID', name:'xforms:input'},{id:'iptSUBTESTCASESTEPID', name:'xforms:input'},{id:'iptEXECUTEDATETIME', name:'xforms:input'},{id:'iptPROBLEMPRIOR', name:'xforms:input'},{id:'iptPROBLEMTYPE', name:'xforms:input'},{id:'iptOPERATORID', name:'xforms:input'},{id:'iptREPORTDATE', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'},{id:'textarea2', name:'xforms:textarea'},{id:'windowDialog2', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'windowDialog4', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'DEVICE_STYLE', name:'xforms:input'},{id:'HARDWARE_VERSION', name:'xforms:input'},{id:'PROBLEM_DESC', name:'xforms:input'},{id:'SOLUTION', name:'xforms:input'},{id:'MEMO', name:'xforms:input'},{id:'input2', name:'xforms:input'},{id:'input5', name:'xforms:input'},{id:'input6', name:'xforms:input'},{id:'input7', name:'xforms:input'},{id:'input8', name:'xforms:input'},{id:'input9', name:'xforms:input'},{id:'input10', name:'xforms:input'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default15', name:'xforms:label'},{id:'default16', name:'xforms:value'}]}]},{id:'filter-pattern-988c85f0-5b96-4470-8fb6-270574756305', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'f76138f0f8ec4c25a4341521f00ca39b', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1582078333', name:'xforms:menu'}]},{id:'GLOBAL_ID_2099716837', name:'xforms:dialog'}]},{id:'filter-dialog-9e6cac2b-cbc1-4e2e-8a7e-a3ba2c0c9fae', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N471726543', name:'xforms:dialog'}]},{id:'filter-pattern-abbe9008-f4dc-4ff7-bdf7-792fa0090aba', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'da4df6e00f82407ea00d7829a7ac02c6', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_105710539', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1653200500', name:'xforms:dialog'}]},{id:'filter-dialog-f1394bfc-c3fb-4138-ba79-b532c1106c9a', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N62897601', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'grdMain');xf._a(null,'saveMas');xf._a('saveMas','fd2477eabb2e4549867b5bdb70408439');xf._a(null,'trigger2');xf._a('trigger2','default13');xf._a(null,'iptTASKID');xf._a(null,'iptDEVICEID');xf._a(null,'iptTESTCASEID');xf._a(null,'iptSUBTESTCASEID');xf._a(null,'iptSUBTESTCASESTEPID');xf._a(null,'iptEXECUTEDATETIME');xf._a(null,'iptPROBLEMPRIOR');xf._a(null,'iptPROBLEMTYPE');xf._a(null,'iptOPERATORID');xf._a(null,'iptREPORTDATE');xf._a(null,'textarea1');xf._a(null,'textarea2');xf._a(null,'DEVICE_STYLE');xf._a(null,'HARDWARE_VERSION');xf._a(null,'PROBLEM_DESC');xf._a(null,'SOLUTION');xf._a(null,'MEMO');xf._a(null,'input2');xf._a(null,'input5');xf._a(null,'input6');xf._a(null,'input7');xf._a(null,'input8');xf._a(null,'input9');xf._a(null,'input10');xf._a(null,'gridSelect2');xf._a('gridSelect2','default15');xf._a('gridSelect2','default18');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/dECTIONPROBLEMNO",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dECTIONPROBLEMNO')))));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dataMain')/pROJECTID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('dataMain')/tASKID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('dataMain')/dEVICEID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("instance('dataMain')/tESTCASEID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tESTCASEID')))));	
xf._b("instance('dataMain')/sUBTESTCASEID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID')))));	
xf._b("instance('dataMain')/sUBTESTCASESTEPID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID')))));	
xf._b("instance('dataMain')/eXECUTEDATETIME",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXECUTEDATETIME')))));	
xf._b("instance('dataMain')/pROBLEMPRIOR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR')))));	
xf._b("instance('dataMain')/pROBLEMTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE')))));	
xf._b("instance('dataMain')/pROBLEMDESC",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMDESC')))));	
xf._b("instance('dataMain')/oPERATORID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','oPERATORID')))));	
xf._b("instance('dataMain')/rEPORTDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','rEPORTDATE')))));	
xf._b("instance('dataMain')/pROBLEMID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMID')))));	
xf._b("instance('bizData7')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("bizData7")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData7')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("bizData7")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('bizData1')/MANUFACTURE_ID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("instance('bizData1')/APPLY_FOR_OBJECT",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_OBJECT')))));	
xf._b("instance('bizData1')/APPLY_FOR_DEVICE_TYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_DEVICE_TYPE')))));	
xf._b("instance('bizData1')/APPLY_FOR_RANGE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_RANGE')))));	
xf._b("instance('bizData1')/APPLY_FOR_SUB_RANGE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','APPLY_FOR_SUB_RANGE')))));	
xf._b("instance('bizData1')/HARDWARE_VERSION",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','HARDWARE_VERSION')))));	
xf._b("instance('bizData1')/PROBLEM_PRIOR",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','PROBLEM_PRIOR')))));	
xf._b("instance('bizData1')/PROBLEM_TYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','PROBLEM_TYPE')))));	
xf._b("instance('bizData1')/pROBLEMPRIOR1",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR1')))));	
xf._b("instance('bizData1')/pROBLEMTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE')))));	
xf._b("instance('bizData1')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData3')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('bizData3')/dEVICETYPE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('bizData5')/dETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("bizData5")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("instance('bizData5')/dETECTIONRANGEID",xf._g(xf._f('instance',xf._i("bizData5")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("instance('bizData8')/pROBLEMPRIOR",xf._g(xf._f('instance',xf._i("bizData8")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIOR')))));	
xf._b("instance('bizData8')/pROBLEMTYPE",xf._g(xf._f('instance',xf._i("bizData8")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPE')))));	
xf._b("instance('bizData9')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("bizData9")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('bizData9')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("bizData9")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("tASKNAME",xf._h(false, xf._k("child",xf._j('','tASKNAME'))));	
xf._b("tESTCASEID",xf._h(false, xf._k("child",xf._j('','tESTCASEID'))));	
xf._b("eXECUTEDATETIME",xf._h(false, xf._k("child",xf._j('','eXECUTEDATETIME'))));	
xf._b("sUBTESTCASEID",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID'))));	
xf._b("pROBLEMPRIORCNAME",xf._h(false, xf._k("child",xf._j('','pROBLEMPRIORCNAME'))));	
xf._b("pROBLEMTYPECNAME",xf._h(false, xf._k("child",xf._j('','pROBLEMTYPECNAME'))));	
xf._b("pROBLEMID",xf._h(false, xf._k("child",xf._j('','pROBLEMID'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dataMain')/tASKNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tASKNAME')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/dEVICEID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("data('dataMain')/tESTCASEID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tESTCASEID')))));	
xf._b("data('dataMain')/sUBTESTCASEID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID')))));	
xf._b("data('dataMain')/sUBTESTCASESTEPID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID')))));	
xf._b("data('dataMain')/eXECUTEDATETIME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eXECUTEDATETIME')))));	
xf._b("data('dataMain')/pROBLEMPRIORCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIORCNAME')))));	
xf._b("data('dataMain')/pROBLEMTYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPECNAME')))));	
xf._b("data('dataMain')/oPERATORNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME')))));	
xf._b("data('dataMain')/rEPORTDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','rEPORTDATE')))));	
xf._b("data('dataMain')/pROBLEMDESC",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pROBLEMDESC')))));	
xf._b("data('dataMain')/mEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('bizData1')/DEVICE_STYLE",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','DEVICE_STYLE')))));	
xf._b("data('bizData1')/HARDWARE_VERSION",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','HARDWARE_VERSION')))));	
xf._b("data('bizData1')/PROBLEM_DESC",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','PROBLEM_DESC')))));	
xf._b("data('bizData1')/SOLUTION",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','SOLUTION')))));	
xf._b("data('bizData1')/MEMO",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','MEMO')))));	
xf._b("data('bizData1')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("data('bizData1')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("data('bizData1')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("data('bizData1')/dETECTIONRANGECNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME')))));	
xf._b("data('bizData1')/rANGEIDCNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','rANGEIDCNAME')))));	
xf._b("data('bizData1')/pROBLEMPRIORCNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROBLEMPRIORCNAME')))));	
xf._b("data('bizData1')/pROBLEMTYPECNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROBLEMTYPECNAME')))));	
xf._b("data('bizData1')/mANUFACTURETYPE",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','bizData1','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','bizData1','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','bizData1','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','bizData1','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','bizData1','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','bizData1','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/dECTIONPROBLEMNO",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/pROJECTID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/tASKID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/dEVICEID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/tESTCASEID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/sUBTESTCASEID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/sUBTESTCASESTEPID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/eXECUTEDATETIME",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/pROBLEMPRIOR",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/pROBLEMTYPE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/pROBLEMDESC",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('dataMain')/oPERATORID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dataMain')/rEPORTDATE",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMain')/pROBLEMID",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMain')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMain')/sUBTESTCASESTEPID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMain')/eXECUTEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('dataMain')/pROBLEMPRIOR","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dataMain')/pROBLEMTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('dataMain')/rEPORTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('dataMain')/pROBLEMID","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData7','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-21','mdDefault',"instance('bizData7')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('bizData7')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData1',null);	
xf._c('xf-bind-23','mdDefault',"instance('bizData1')/MANUFACTURE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('bizData1')/APPLY_FOR_OBJECT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('bizData1')/APPLY_FOR_DEVICE_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('bizData1')/APPLY_FOR_RANGE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('bizData1')/APPLY_FOR_SUB_RANGE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('bizData1')/HARDWARE_VERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('bizData1')/PROBLEM_PRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('bizData1')/PROBLEM_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdDefault',"instance('bizData1')/PROBLEM_PRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('bizData1')/pROBLEMPRIOR1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('bizData1')/pROBLEMTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('bizData1')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData3','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-35','mdDefault',"instance('bizData3')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('bizData3')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData4','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData5','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-37','mdDefault',"instance('bizData5')/dETECTIONRANGETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('bizData5')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData6','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData8','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-39','mdDefault',"instance('bizData8')/pROBLEMPRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('bizData8')/pROBLEMTYPE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData9','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData9',null);	
xf._c('xf-bind-41','mdDefault',"instance('bizData9')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('bizData9')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_1582078333 = new xforms.XFMenu('GLOBAL_ID_1582078333','context');xf_menu_GLOBAL_ID_1582078333.menu.addContextZone('f76138f0f8ec4c25a4341521f00ca39b');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1582078333.hide()});xf_menu_GLOBAL_ID_1582078333.menu.setOpenMode('web');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_2099716837");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1582078333'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_1582078333', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_2099716837',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1447119367');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1447119367", "");}));xf._p(justep('GLOBAL_ID_2099716837'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_2099716837', evt,false)});	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1447119367');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_2099716837'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_2099716837', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N471726543',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1269033595');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1269033595", "");}));xf._p(justep('GLOBAL_ID_N471726543'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N471726543', evt,false)});	
var xf_menu_GLOBAL_ID_105710539 = new xforms.XFMenu('GLOBAL_ID_105710539','context');xf_menu_GLOBAL_ID_105710539.menu.addContextZone('da4df6e00f82407ea00d7829a7ac02c6');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_105710539.hide()});xf_menu_GLOBAL_ID_105710539.menu.setOpenMode('web');	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1653200500");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_105710539'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_105710539', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1653200500',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_889016491');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_889016491", "");}));xf._p(justep('GLOBAL_ID_N1653200500'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N1653200500', evt,false)});	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_889016491');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1653200500'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N1653200500', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N62897601',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_893072738');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_893072738", "");}));xf._p(justep('GLOBAL_ID_N62897601'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_N62897601', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'tASKID,dEVICEID,sUBTESTCASESTEPID,pROBLEMPRIOR,pROBLEMTYPE,pROBLEMDESC,oPERATORID,rEPORTDATE,mEMO,oPERATORNAME',onInit:null,type:'grid',smartRender:null,delay:false,ids:'tASKNAME,tESTCASEID,eXECUTEDATETIME,sUBTESTCASEID,pROBLEMPRIORCNAME,pROBLEMTYPECNAME,pROBLEMID,space-column',headNames:'任务名称,测试用例ID,执行出错日期,测试子用例ID,问题级别,问题类型,问题编号,&nbsp;',widths:'100,158,120,121,141,100,100,*',types:'ro,ro,ro,ro,ro,ro,ed,ro',hiddenColumns:'',aligns:',center,center,center,center,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false,false,null,null,null);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveMore(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'saveMas', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trigger2', evt,false)});	
xforms.load_parts('vDetail');	
xforms.load_parts('view1');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptTASKID','text',xf._q("data('dataMain')/tASKNAME"),null,null,null,null,false,true);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptTASKID'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action1,'iptTASKID', evt,false)});	
xf._d('iptDEVICEID','text',xf._q("data('dataMain')/dEVICEID"),null,null,null,null,false,true);	
xf._d('iptTESTCASEID','text',xf._q("data('dataMain')/tESTCASEID"),null,null,null,null,false,true);	
xf._d('iptSUBTESTCASEID','text',xf._q("data('dataMain')/sUBTESTCASEID"),null,null,null,null,false,true);	
xf._d('iptSUBTESTCASESTEPID','text',xf._q("data('dataMain')/sUBTESTCASESTEPID"),null,null,null,null,false,true);	
xf._d('iptEXECUTEDATETIME','text',xf._q("data('dataMain')/eXECUTEDATETIME"),null,null,null,"yyyy-MM-dd",true,false);	
xf._d('iptPROBLEMPRIOR','text',xf._q("data('dataMain')/pROBLEMPRIORCNAME"),null,null,null,null,false,true);	
xf._d('iptPROBLEMTYPE','text',xf._q("data('dataMain')/pROBLEMTYPECNAME"),null,null,null,null,false,true);	
xf._d('iptOPERATORID','text',xf._q("data('dataMain')/oPERATORNAME"),null,null,null,null,false,true);	
xf._d('iptREPORTDATE','text',xf._q("data('dataMain')/rEPORTDATE"),null,null,null,"yyyy-MM-dd",true,false);	
xf._d('textarea1','textarea',xf._q("data('dataMain')/pROBLEMDESC"),null,null,null,null,false,true);	
xf._d('textarea2','textarea',xf._q("data('dataMain')/mEMO"),null,null,null,null,false,true);	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xf._d('DEVICE_STYLE','text',xf._q("data('bizData1')/DEVICE_STYLE"),null,null,null,null,false,false);	
xf._d('HARDWARE_VERSION','text',xf._q("data('bizData1')/HARDWARE_VERSION"),null,null,null,null,false,false);	
xf._d('PROBLEM_DESC','text',xf._q("data('bizData1')/PROBLEM_DESC"),null,null,null,null,false,false);	
xf._d('SOLUTION','text',xf._q("data('bizData1')/SOLUTION"),null,null,null,null,false,false);	
xf._d('MEMO','text',xf._q("data('bizData1')/MEMO"),null,null,null,null,false,false);	
xf._d('input2','text',xf._q("data('bizData1')/mANUFACTUREIDCNAME"),null,null,null,null,false,true);	
xf._d('input5','text',xf._q("data('bizData1')/dETECTIONOBJECTCNAME"),null,null,null,null,false,true);	
xf._d('input6','text',xf._q("data('bizData1')/dEVICETYPECNAME"),null,null,null,null,false,true);	
xf._d('input7','text',xf._q("data('bizData1')/dETECTIONRANGECNAME"),null,null,null,null,false,true);	
xf._d('input8','text',xf._q("data('bizData1')/rANGEIDCNAME"),null,null,null,null,false,true);	
xf._d('input9','text',xf._q("data('bizData1')/pROBLEMPRIORCNAME"),null,null,null,null,false,true);	
xf._d('input10','text',xf._q("data('bizData1')/pROBLEMTYPECNAME"),null,null,null,null,false,true);	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData1')/mANUFACTURETYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default106"><row id="default107"><cell id="default108">1</cell><cell id="default109">设备厂商</cell></row><row id="default110"><cell id="default111">2</cell><cell id="default112">工具厂商</cell></row><row id="default113"><cell id="default114">3</cell><cell id="default118">第三方检测机构</cell></row></rows>',inputChangeable:false,disabled:false,readonly:true,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
