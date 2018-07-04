
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
				this.tabbar= new justep.JSTabbar(this.domNode.id);
				$.extend(this,this.tabbar);
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

//				area.css({overflow:'hidden'});	
//				area.css({overflow:'auto'});
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
					//todo: 相似组件以后可以集中统一触发一次 
					//xforms.XMLEvents.dispatch(justep.xbl(model), "xforms-refresh");
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

	var ids=[{id:'7b4c39ee7c024c1e9ae473e0940c8faf', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'4e42c50dc3a548c0b50b3d15f269a46c', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'a1ebf7b43fb44f9bb2a520bca3a1a847', name:'xforms:label'}]},{id:'b1d2b50b20854da880ade7b5a0b85175', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'trigger1', name:'xforms:trigger', children:[{id:'default35', name:'xforms:label'}]},{id:'trigger2', name:'xforms:trigger', children:[{id:'default37', name:'xforms:label'}]},{id:'trigger3', name:'xforms:trigger', children:[{id:'default38', name:'xforms:label'}]},{id:'trigger4', name:'xforms:trigger', children:[{id:'default60', name:'xforms:label'}]}]},{id:'grdMaster', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMas', name:'xforms:trigger', children:[{id:'f407b5f8c1b74d79a744dedb82c10c23', name:'xforms:label'}]}]},{id:'iptDEVICESTYLEok', name:'xforms:input'},{id:'iptDEVICEIDok', name:'xforms:input'},{id:'iptSOFTWAREVERSIONok', name:'xforms:input'},{id:'iptHARDWAREVERSIONok', name:'xforms:input'},{id:'iptINDEEDRECEIVEDATEok', name:'xforms:input'},{id:'iptRETURNDATEok', name:'xforms:input'},{id:'gridSelect1ok', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default8', name:'xforms:value'}]},{id:'gridSelect4ok', name:'xforms:gridselect1', children:[{id:'xuiLabel6', name:'xforms:label'},{id:'default94', name:'xforms:value'}]},{id:'radio1ok', name:'xforms:select1', children:[{id:'selectItem1', name:'xforms:item', children:[{id:'xuiLabel7', name:'xforms:label'},{id:'default20', name:'xforms:value'}]},{id:'selectItem2', name:'xforms:item', children:[{id:'xuiLabel8', name:'xforms:label'},{id:'default21', name:'xforms:value'}]}]},{id:'gridSelect5ok', name:'xforms:gridselect1', children:[{id:'xuiLabel9', name:'xforms:label'},{id:'default14', name:'xforms:value'}]},{id:'textarea2ok', name:'xforms:textarea'},{id:'input1', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default19', name:'xforms:label'},{id:'default33', name:'xforms:value'}]},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMas', name:'xforms:trigger', children:[{id:'72d365c6d4ae4b879aa43995ff992f9c', name:'xforms:label'}]},{id:'remove', name:'xforms:trigger', children:[{id:'f780279c20c34698b3a903aaa54b6c3b', name:'xforms:label'}]}]},{id:'grdDetail', name:'xforms:grid'}]}]},{id:'yijiaoDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'fanhuanDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'neibuguihuanDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'chaxunDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'filter-dialog-d2349821-b0aa-4a62-9157-a4343f0d3fe5', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1662653515', name:'xforms:dialog'}]},{id:'filter-pattern-23d287b5-013d-4e76-8eee-2c8408224f77', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'8ab6fb2f2366449ca34c6abe234431c1', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_156092536', name:'xforms:menu'}]},{id:'GLOBAL_ID_826573524', name:'xforms:dialog'}]},{id:'filter-dialog-21e642d8-5d96-43a3-bee9-8590380675e3', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1851210833', name:'xforms:dialog'}]},{id:'filter-pattern-ca06a2d6-98fd-4abc-b36c-afacde2c3bb8', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'bac4c2b3c8404bbd9bdc4d816c5b9027', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N930330889', name:'xforms:menu'}]},{id:'GLOBAL_ID_496929784', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','4e42c50dc3a548c0b50b3d15f269a46c');xf._a(null,'removeTrigger');xf._a('removeTrigger','a1ebf7b43fb44f9bb2a520bca3a1a847');xf._a(null,'trigger1');xf._a('trigger1','default35');xf._a(null,'trigger2');xf._a('trigger2','default37');xf._a(null,'trigger3');xf._a('trigger3','default38');xf._a(null,'trigger4');xf._a('trigger4','default60');xf._a(null,'grdMaster');xf._a(null,'saveMas');xf._a('saveMas','f407b5f8c1b74d79a744dedb82c10c23');xf._a(null,'iptDEVICESTYLEok');xf._a(null,'iptDEVICEIDok');xf._a(null,'iptSOFTWAREVERSIONok');xf._a(null,'iptHARDWAREVERSIONok');xf._a(null,'iptINDEEDRECEIVEDATEok');xf._a(null,'iptRETURNDATEok');xf._a(null,'gridSelect1ok');xf._a('gridSelect1ok','xuiLabel3');xf._a('gridSelect1ok','default9');xf._a(null,'gridSelect4ok');xf._a('gridSelect4ok','xuiLabel6');xf._a('gridSelect4ok','default95');xf._a(null,'radio1ok');xf._a('radio1ok','selectItem1');xf._a('selectItem1','xuiLabel7');xf._a('radio1ok','selectItem2');xf._a('selectItem2','xuiLabel8');xf._a(null,'gridSelect5ok');xf._a('gridSelect5ok','xuiLabel9');xf._a('gridSelect5ok','default15');xf._a(null,'textarea2ok');xf._a(null,'input1');xf._a(null,'gridSelect1');xf._a('gridSelect1','default19');xf._a('gridSelect1','default34');xf._a(null,'insertMas');xf._a('insertMas','72d365c6d4ae4b879aa43995ff992f9c');xf._a(null,'remove');xf._a('remove','f780279c20c34698b3a903aaa54b6c3b');xf._a(null,'grdDetail');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMaster')/dEVICETYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("true()",xf._f('true'));	
xf._b("'检测对象不能为空!'",xf._i("检测对象不能为空!"));	
xf._b("instance('dataMaster')/dECTIONTYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dECTIONTYPE')))));	
xf._b("'检测类型不能为空!'",xf._i("检测类型不能为空!"));	
xf._b("instance('dataMaster')/sOFTWAREVERSION",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sOFTWAREVERSION')))));	
xf._b("'软件版本不能为空!'",xf._i("软件版本不能为空!"));	
xf._b("instance('dataMaster')/hARDWAREVERSION",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','hARDWAREVERSION')))));	
xf._b("'硬件版本不能为空!'",xf._i("硬件版本不能为空!"));	
xf._b("instance('dataMaster')/dEADLINERECEIVEDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEADLINERECEIVEDATE')))));	
xf._b("'最晚进场日期不能为空!'",xf._i("最晚进场日期不能为空!"));	
xf._b("instance('dataMaster')/iNDEEDRECEIVEDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE')))));	
xf._b("'实际进场日期不能为空!'",xf._i("实际进场日期不能为空!"));	
xf._b("instance('dataMaster')/rETURNDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("'预计归还日期不能为空!'",xf._i("预计归还日期不能为空!"));	
xf._b("instance('dataMaster')/iNDEEDRETURNDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE')))));	
xf._b("'实际归还日期不能为空!'",xf._i("实际归还日期不能为空!"));	
xf._b("instance('dataMaster')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("'是否允许资源共用不能为空!'",xf._i("是否允许资源共用不能为空!"));	
xf._b("instance('dataMaster')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("'供应商名称不能为空!'",xf._i("供应商名称不能为空!"));	
xf._b("instance('dataMaster')/dEVICEID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("'设备ID不能为空!'",xf._i("设备ID不能为空!"));	
xf._b("instance('dataMaster')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("'检测申请不能为空!'",xf._i("检测申请不能为空!"));	
xf._b("instance('dataMaster')/TEST_CONTRACT_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TEST_CONTRACT_INFO')))));	
xf._b("instance('dataMaster')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('dataMaster')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('dataMaster')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('dataDetail')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("'样品序号不能为空!'",xf._i("样品序号不能为空!"));	
xf._b("instance('dataDetail')/mODELNAME",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','mODELNAME')))));	
xf._b("'模块名称不能为空!'",xf._i("模块名称不能为空!"));	
xf._b("instance('dataDetail')/mODELNUMBER",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','mODELNUMBER')))));	
xf._b("instance('hetong')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("hetong")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('hetong')/cONTRACTDATE",xf._g(xf._f('instance',xf._i("hetong")),xf._h(false, xf._k("child",xf._j('','cONTRACTDATE')))));	
xf._b("instance('hetong')/eXPECTENDINGDATE",xf._g(xf._f('instance',xf._i("hetong")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("instance('hetong')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("hetong")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('xiangmuming')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('xiangmuming')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('xiangmuming')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('xiangmuming')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('xiangmuming')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('xiangmuming')/lINEID",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('xiangmuming')/bUSINESSID",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('xiangmuming')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('xiangmuming')/pROJECTDATE",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('xiangmuming')/eNDINGDATE",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('xiangmuming')/mAKEDATE",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('xiangmuming')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("xiangmuming")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('gongyingshang')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("gongyingshang")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("instance('gongyingshang')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("gongyingshang")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('jianceduixiang')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("jianceduixiang")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('jianceduixiang')/dEVICETYPE",xf._g(xf._f('instance',xf._i("jianceduixiang")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('jianceshenqing')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('jianceshenqing')/pRODUCTMANUFACTUREID",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','pRODUCTMANUFACTUREID')))));	
xf._b("instance('jianceshenqing')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('jianceshenqing')/dEVICETYPE",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('jianceshenqing')/bUSINESSID",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('jianceshenqing')/lINEID",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('jianceshenqing')/aPPLICATIONDATE",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONDATE')))));	
xf._b("instance('jianceshenqing')/eXPECTENDINGDATE",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','eXPECTENDINGDATE')))));	
xf._b("instance('jianceshenqing')/rECEIPTDATE",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','rECEIPTDATE')))));	
xf._b("instance('jianceshenqing')/COMPANY_PROMISE",xf._g(xf._f('instance',xf._i("jianceshenqing")),xf._h(false, xf._k("child",xf._j('','COMPANY_PROMISE')))));	
xf._b("instance('bizData3')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('bizData3')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('bizData3')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('bizData3')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('bizData3')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('bizData3')/lINEID",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('bizData3')/bUSINESSID",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('bizData3')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('bizData3')/pROJECTDATE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('bizData3')/eNDINGDATE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('bizData3')/mAKEDATE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('bizData3')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("bizData3")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('bizData1')/sDistributeTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sDistributeTime')))));	
xf._b("instance('bizData1')/sCreateTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('bizData1')/sLastModifyTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sLastModifyTime')))));	
xf._b("instance('bizData1')/sLimitTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("instance('bizData1')/sWarningTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xf._b("instance('bizData1')/sExecuteTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sExecuteTime')))));	
xf._b("instance('bizData1')/sExpectStartTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sExpectStartTime')))));	
xf._b("instance('bizData1')/sExpectFinishTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sExpectFinishTime')))));	
xf._b("instance('bizData1')/sActualStartTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sActualStartTime')))));	
xf._b("instance('bizData1')/sActualFinishTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sActualFinishTime')))));	
xf._b("instance('bizData1')/sSequence",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('bizData1')/version",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('bizData1')/sEDField21",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEDField21')))));	
xf._b("instance('bizData1')/sEDField22",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEDField22')))));	
xf._b("instance('bizData1')/sEDField23",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEDField23')))));	
xf._b("instance('bizData1')/sEDField24",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEDField24')))));	
xf._b("instance('bizData1')/sEIField41",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEIField41')))));	
xf._b("instance('bizData1')/sEIField42",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEIField42')))));	
xf._b("instance('bizData1')/sEIField43",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEIField43')))));	
xf._b("instance('bizData1')/sEIField44",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sEIField44')))));	
xf._b("instance('bizData1')/sENField11",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sENField11')))));	
xf._b("instance('bizData1')/sENField12",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sENField12')))));	
xf._b("instance('bizData1')/sENField13",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sENField13')))));	
xf._b("instance('bizData1')/sENField14",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sENField14')))));	
xf._b("instance('bizData1')/sWithdraw",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sWithdraw')))));	
xf._b("instance('bizData2')/oPERATEDATETIME",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','oPERATEDATETIME')))));	
xf._b("instance('bizData2')/oPERATETYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','oPERATETYPE')))));	
xf._b("instance('bizData2')/pROJECTID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('bizData2')/oPERATERESULTSTATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','oPERATERESULTSTATE')))));	
xf._b("instance('bizData2')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('bizData4')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('bizData4')/pROJECTID",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('bizData4')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('bizData4')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('bizData5')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("bizData5")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('bizData5')/mODELNUMBER",xf._g(xf._f('instance',xf._i("bizData5")),xf._h(false, xf._k("child",xf._j('','mODELNUMBER')))));	
xf._b("instance('bizData6')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("bizData6")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('bizData6')/mODELNUMBER",xf._g(xf._f('instance',xf._i("bizData6")),xf._h(false, xf._k("child",xf._j('','mODELNUMBER')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("typ",xf._h(false, xf._k("child",xf._j('','typ'))));	
xf._b("dEVICEID",xf._h(false, xf._k("child",xf._j('','dEVICEID'))));	
xf._b("iNDEEDRECEIVEDATE",xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE'))));	
xf._b("data('dataMaster')/dEVICESTYLE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICESTYLE')))));	
xf._b("data('dataMaster')/dEVICEID",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("data('dataMaster')/sOFTWAREVERSION",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sOFTWAREVERSION')))));	
xf._b("data('dataMaster')/hARDWAREVERSION",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','hARDWAREVERSION')))));	
xf._b("data('dataMaster')/iNDEEDRECEIVEDATE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE')))));	
xf._b("data('dataMaster')/rETURNDATE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("data('dataMaster')/dECTIONTYPE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dECTIONTYPE')))));	
xf._b("cONTRACT_CODE",xf._h(false, xf._k("child",xf._j('','cONTRACT_CODE'))));	
xf._b("TEST_CONTRACT_INFO",xf._h(false, xf._k("child",xf._j('','TEST_CONTRACT_INFO'))));	
xf._b("data('dataMaster')/mANUFACTUREID",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("data('dataMaster')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
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
xf._b("data('dataMaster')/sHAREDFLAG",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("data('dataMaster')/dEVICETYPE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('dataMaster')/mEMO1",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mEMO1')))));	
xf._b("data('dataMaster')/dEADLINERECEIVEDATE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEADLINERECEIVEDATE')))));	
xf._b("data('dataMaster')/aPPLICATIONNO",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sData1",xf._h(false, xf._k("child",xf._j('','sData1'))));	
xf._b("sParent",xf._h(false, xf._k("child",xf._j('','sParent'))));	
xf._b("sContent",xf._h(false, xf._k("child",xf._j('','sContent'))));	
xf._b("sRemark",xf._h(false, xf._k("child",xf._j('','sRemark'))));	
xf._b("sFlowID",xf._h(false, xf._k("child",xf._j('','sFlowID'))));	
xf._b("sSourceID",xf._h(false, xf._k("child",xf._j('','sSourceID'))));	
xf._b("sFrontID",xf._h(false, xf._k("child",xf._j('','sFrontID'))));	
xf._b("sCatalogID",xf._h(false, xf._k("child",xf._j('','sCatalogID'))));	
xf._b("sKindID",xf._h(false, xf._k("child",xf._j('','sKindID'))));	
xf._b("sResponsible",xf._h(false, xf._k("child",xf._j('','sResponsible'))));	
xf._b("sExecuteMode2",xf._h(false, xf._k("child",xf._j('','sExecuteMode2'))));	
xf._b("sExecuteMode",xf._h(false, xf._k("child",xf._j('','sExecuteMode'))));	
xf._b("sPreemptMode",xf._h(false, xf._k("child",xf._j('','sPreemptMode'))));	
xf._b("sRemindMode",xf._h(false, xf._k("child",xf._j('','sRemindMode'))));	
xf._b("sTypeID",xf._h(false, xf._k("child",xf._j('','sTypeID'))));	
xf._b("sTypeName",xf._h(false, xf._k("child",xf._j('','sTypeName'))));	
xf._b("sImportanceID",xf._h(false, xf._k("child",xf._j('','sImportanceID'))));	
xf._b("sImportanceName",xf._h(false, xf._k("child",xf._j('','sImportanceName'))));	
xf._b("sEmergencyID",xf._h(false, xf._k("child",xf._j('','sEmergencyID'))));	
xf._b("sEmergencyName",xf._h(false, xf._k("child",xf._j('','sEmergencyName'))));	
xf._b("sCURL",xf._h(false, xf._k("child",xf._j('','sCURL'))));	
xf._b("sEURL",xf._h(false, xf._k("child",xf._j('','sEURL'))));	
xf._b("sDistributeTime",xf._h(false, xf._k("child",xf._j('','sDistributeTime'))));	
xf._b("sCreateTime",xf._h(false, xf._k("child",xf._j('','sCreateTime'))));	
xf._b("sLastModifyTime",xf._h(false, xf._k("child",xf._j('','sLastModifyTime'))));	
xf._b("sLimitTime",xf._h(false, xf._k("child",xf._j('','sLimitTime'))));	
xf._b("sWarningTime",xf._h(false, xf._k("child",xf._j('','sWarningTime'))));	
xf._b("sExecuteTime",xf._h(false, xf._k("child",xf._j('','sExecuteTime'))));	
xf._b("sExpectStartTime",xf._h(false, xf._k("child",xf._j('','sExpectStartTime'))));	
xf._b("sExpectFinishTime",xf._h(false, xf._k("child",xf._j('','sExpectFinishTime'))));	
xf._b("sActualStartTime",xf._h(false, xf._k("child",xf._j('','sActualStartTime'))));	
xf._b("sActualFinishTime",xf._h(false, xf._k("child",xf._j('','sActualFinishTime'))));	
xf._b("sCreatorFID",xf._h(false, xf._k("child",xf._j('','sCreatorFID'))));	
xf._b("sCreatorFName",xf._h(false, xf._k("child",xf._j('','sCreatorFName'))));	
xf._b("sExecutorFID",xf._h(false, xf._k("child",xf._j('','sExecutorFID'))));	
xf._b("sExecutorFName",xf._h(false, xf._k("child",xf._j('','sExecutorFName'))));	
xf._b("sCreatorPersonID",xf._h(false, xf._k("child",xf._j('','sCreatorPersonID'))));	
xf._b("sCreatorPersonName",xf._h(false, xf._k("child",xf._j('','sCreatorPersonName'))));	
xf._b("sCreatorPosID",xf._h(false, xf._k("child",xf._j('','sCreatorPosID'))));	
xf._b("sCreatorPosName",xf._h(false, xf._k("child",xf._j('','sCreatorPosName'))));	
xf._b("sCreatorDeptID",xf._h(false, xf._k("child",xf._j('','sCreatorDeptID'))));	
xf._b("sCreatorDeptName",xf._h(false, xf._k("child",xf._j('','sCreatorDeptName'))));	
xf._b("sCreatorOgnID",xf._h(false, xf._k("child",xf._j('','sCreatorOgnID'))));	
xf._b("sCreatorOgnName",xf._h(false, xf._k("child",xf._j('','sCreatorOgnName'))));	
xf._b("sExecutorPersonID",xf._h(false, xf._k("child",xf._j('','sExecutorPersonID'))));	
xf._b("sExecutorPersonName",xf._h(false, xf._k("child",xf._j('','sExecutorPersonName'))));	
xf._b("sExecutorPosID",xf._h(false, xf._k("child",xf._j('','sExecutorPosID'))));	
xf._b("sExecutorPosName",xf._h(false, xf._k("child",xf._j('','sExecutorPosName'))));	
xf._b("sExecutorDeptID",xf._h(false, xf._k("child",xf._j('','sExecutorDeptID'))));	
xf._b("sExecutorDeptName",xf._h(false, xf._k("child",xf._j('','sExecutorDeptName'))));	
xf._b("sExecutorOgnID",xf._h(false, xf._k("child",xf._j('','sExecutorOgnID'))));	
xf._b("sExecutorOgnName",xf._h(false, xf._k("child",xf._j('','sExecutorOgnName'))));	
xf._b("sExecutorNames",xf._h(false, xf._k("child",xf._j('','sExecutorNames'))));	
xf._b("sCustomerID",xf._h(false, xf._k("child",xf._j('','sCustomerID'))));	
xf._b("sCustomerName",xf._h(false, xf._k("child",xf._j('','sCustomerName'))));	
xf._b("sProjectID",xf._h(false, xf._k("child",xf._j('','sProjectID'))));	
xf._b("sProjectName",xf._h(false, xf._k("child",xf._j('','sProjectName'))));	
xf._b("sPlanID",xf._h(false, xf._k("child",xf._j('','sPlanID'))));	
xf._b("sPlanName",xf._h(false, xf._k("child",xf._j('','sPlanName'))));	
xf._b("sData2",xf._h(false, xf._k("child",xf._j('','sData2'))));	
xf._b("sData3",xf._h(false, xf._k("child",xf._j('','sData3'))));	
xf._b("sData4",xf._h(false, xf._k("child",xf._j('','sData4'))));	
xf._b("sVariable",xf._h(false, xf._k("child",xf._j('','sVariable'))));	
xf._b("sActive",xf._h(false, xf._k("child",xf._j('','sActive'))));	
xf._b("sStatusID",xf._h(false, xf._k("child",xf._j('','sStatusID'))));	
xf._b("sStatusName",xf._h(false, xf._k("child",xf._j('','sStatusName'))));	
xf._b("sAIActive",xf._h(false, xf._k("child",xf._j('','sAIActive'))));	
xf._b("sAIID",xf._h(false, xf._k("child",xf._j('','sAIID'))));	
xf._b("sAIStatusID",xf._h(false, xf._k("child",xf._j('','sAIStatusID'))));	
xf._b("sAIStatusName",xf._h(false, xf._k("child",xf._j('','sAIStatusName'))));	
xf._b("sSequence",xf._h(false, xf._k("child",xf._j('','sSequence'))));	
xf._b("sLock",xf._h(false, xf._k("child",xf._j('','sLock'))));	
xf._b("sHints",xf._h(false, xf._k("child",xf._j('','sHints'))));	
xf._b("sShortcut",xf._h(false, xf._k("child",xf._j('','sShortcut'))));	
xf._b("sProcess",xf._h(false, xf._k("child",xf._j('','sProcess'))));	
xf._b("sActivity",xf._h(false, xf._k("child",xf._j('','sActivity'))));	
xf._b("sProcessName",xf._h(false, xf._k("child",xf._j('','sProcessName'))));	
xf._b("sActivityName",xf._h(false, xf._k("child",xf._j('','sActivityName'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("sProcessTemplateID",xf._h(false, xf._k("child",xf._j('','sProcessTemplateID'))));	
xf._b("sProcessTemplateItemSequence",xf._h(false, xf._k("child",xf._j('','sProcessTemplateItemSequence'))));	
xf._b("sTempPermissionID",xf._h(false, xf._k("child",xf._j('','sTempPermissionID'))));	
xf._b("sESField01",xf._h(false, xf._k("child",xf._j('','sESField01'))));	
xf._b("sESField02",xf._h(false, xf._k("child",xf._j('','sESField02'))));	
xf._b("sESField03",xf._h(false, xf._k("child",xf._j('','sESField03'))));	
xf._b("sESField04",xf._h(false, xf._k("child",xf._j('','sESField04'))));	
xf._b("sESField05",xf._h(false, xf._k("child",xf._j('','sESField05'))));	
xf._b("sESField06",xf._h(false, xf._k("child",xf._j('','sESField06'))));	
xf._b("sESField07",xf._h(false, xf._k("child",xf._j('','sESField07'))));	
xf._b("sESField08",xf._h(false, xf._k("child",xf._j('','sESField08'))));	
xf._b("sEDField21",xf._h(false, xf._k("child",xf._j('','sEDField21'))));	
xf._b("sEDField22",xf._h(false, xf._k("child",xf._j('','sEDField22'))));	
xf._b("sEDField23",xf._h(false, xf._k("child",xf._j('','sEDField23'))));	
xf._b("sEDField24",xf._h(false, xf._k("child",xf._j('','sEDField24'))));	
xf._b("sETField31",xf._h(false, xf._k("child",xf._j('','sETField31'))));	
xf._b("sETField32",xf._h(false, xf._k("child",xf._j('','sETField32'))));	
xf._b("sETField33",xf._h(false, xf._k("child",xf._j('','sETField33'))));	
xf._b("sETField34",xf._h(false, xf._k("child",xf._j('','sETField34'))));	
xf._b("sEIField41",xf._h(false, xf._k("child",xf._j('','sEIField41'))));	
xf._b("sEIField42",xf._h(false, xf._k("child",xf._j('','sEIField42'))));	
xf._b("sEIField43",xf._h(false, xf._k("child",xf._j('','sEIField43'))));	
xf._b("sEIField44",xf._h(false, xf._k("child",xf._j('','sEIField44'))));	
xf._b("sEBField51",xf._h(false, xf._k("child",xf._j('','sEBField51'))));	
xf._b("sEBField52",xf._h(false, xf._k("child",xf._j('','sEBField52'))));	
xf._b("sEBField53",xf._h(false, xf._k("child",xf._j('','sEBField53'))));	
xf._b("sEBField54",xf._h(false, xf._k("child",xf._j('','sEBField54'))));	
xf._b("sENField11",xf._h(false, xf._k("child",xf._j('','sENField11'))));	
xf._b("sENField12",xf._h(false, xf._k("child",xf._j('','sENField12'))));	
xf._b("sENField13",xf._h(false, xf._k("child",xf._j('','sENField13'))));	
xf._b("sENField14",xf._h(false, xf._k("child",xf._j('','sENField14'))));	
xf._b("sSummary",xf._h(false, xf._k("child",xf._j('','sSummary'))));	
xf._b("sActivityNames",xf._h(false, xf._k("child",xf._j('','sActivityNames'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sWithdraw",xf._h(false, xf._k("child",xf._j('','sWithdraw'))));	
xf._b("CC",xf._h(false, xf._k("child",xf._j('','CC'))));	
xf._b("mODELNAME",xf._h(false, xf._k("child",xf._j('','mODELNAME'))));	
xf._b("mODELSTYLE",xf._h(false, xf._k("child",xf._j('','mODELSTYLE'))));	
xf._b("mODELNUMBER",xf._h(false, xf._k("child",xf._j('','mODELNUMBER'))));	
xf._b("sAMPLEDEVICENO",xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO'))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Last"))));	
xf._b("not(call('justep.XData.canDo','dataDetail','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataDetail"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dataDetail','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataDetail"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataDetail','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataDetail"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataDetail','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataDetail"),xf._i("Next"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('inputbtn', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMaster','mdDefault',null,null,null,null,null,null,null,null,'recCB',null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMaster')/dEVICETYPE",null,null,"true()",null,null,null,"'检测对象不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMaster')/dECTIONTYPE",null,null,"true()",null,null,null,"'检测类型不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMaster')/sOFTWAREVERSION",null,null,"true()",null,null,null,"'软件版本不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMaster')/hARDWAREVERSION",null,null,"true()",null,null,null,"'硬件版本不能为空!'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMaster')/dEADLINERECEIVEDATE",null,null,"true()",null,null,null,"'最晚进场日期不能为空!'");	
xf._c('xf-bind-5','mdDefault',"instance('dataMaster')/iNDEEDRECEIVEDATE",null,null,"true()",null,null,null,"'实际进场日期不能为空!'");	
xf._c('xf-bind-6','mdDefault',"instance('dataMaster')/rETURNDATE",null,null,"true()",null,null,null,"'预计归还日期不能为空!'");	
xf._c('xf-bind-7','mdDefault',"instance('dataMaster')/iNDEEDRETURNDATE",null,null,"true()",null,null,null,"'实际归还日期不能为空!'");	
xf._c('xf-bind-8','mdDefault',"instance('dataMaster')/sHAREDFLAG",null,null,"true()",null,null,null,"'是否允许资源共用不能为空!'");	
xf._c('xf-bind-9','mdDefault',"instance('dataMaster')/mANUFACTUREID",null,null,"true()",null,null,null,"'供应商名称不能为空!'");	
xf._c('xf-bind-10','mdDefault',"instance('dataMaster')/dEVICEID",null,null,"true()",null,null,null,"'设备ID不能为空!'");	
xf._c('xf-bind-11','mdDefault',"instance('dataMaster')/aPPLICATIONNO",null,null,"true()",null,null,null,"'检测申请不能为空!'");	
xf._c('xf-bind-12','mdDefault',"instance('dataMaster')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMaster')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMaster')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMaster')/dECTIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMaster')/sOFTWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('dataMaster')/hARDWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dataMaster')/dEADLINERECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('dataMaster')/iNDEEDRECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('dataMaster')/rETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('dataMaster')/iNDEEDRETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('dataMaster')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('dataMaster')/TEST_CONTRACT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('dataMaster')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('dataMaster')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('dataMaster')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dataDetail','mdDefault',null,null,null,'sAMPLEDEVICENO','dataMaster',null,null,null,'CC',null,'whereAll');	
xf._c('xf-bind-27','mdDefault',"instance('dataDetail')/sAMPLEDEVICENO",null,null,"true()",null,null,null,"'样品序号不能为空!'");	
xf._c('xf-bind-28','mdDefault',"instance('dataDetail')/mODELNAME",null,null,"true()",null,null,null,"'模块名称不能为空!'");	
xf._c('xf-bind-29','mdDefault',"instance('dataDetail')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('dataDetail')/mODELNUMBER","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hetong','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-31','mdDefault',"instance('hetong')/mANUFACTUREID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('hetong')/cONTRACTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('hetong')/eXPECTENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdDefault',"instance('hetong')/aPPLICATIONNO","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('xiangmuming','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-35','mdDefault',"instance('xiangmuming')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('xiangmuming')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('xiangmuming')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('xiangmuming')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('xiangmuming')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('xiangmuming')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('xiangmuming')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('xiangmuming')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdDefault',"instance('xiangmuming')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('xiangmuming')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('xiangmuming')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdDefault',"instance('xiangmuming')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('gongyingshang','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-47','mdDefault',"instance('gongyingshang')/mANUFACTURETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdDefault',"instance('gongyingshang')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('jianceduixiang','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-49','mdDefault',"instance('jianceduixiang')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdDefault',"instance('jianceduixiang')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action2,'mdDefault', evt,false)});	
new xforms.XFInstance2('jianceshenqing','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('jianceshenqing',null);	
xf._c('xf-bind-51','mdDefault',"instance('jianceshenqing')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdDefault',"instance('jianceshenqing')/pRODUCTMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdDefault',"instance('jianceshenqing')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdDefault',"instance('jianceshenqing')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-55','mdDefault',"instance('jianceshenqing')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdDefault',"instance('jianceshenqing')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdDefault',"instance('jianceshenqing')/aPPLICATIONDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdDefault',"instance('jianceshenqing')/eXPECTENDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdDefault',"instance('jianceshenqing')/rECEIPTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-60','mdDefault',"instance('jianceshenqing')/COMPANY_PROMISE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('bizData1',null);	
xf._c('xf-bind-73','mdDefault',"instance('bizData1')/sDistributeTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-74','mdDefault',"instance('bizData1')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-75','mdDefault',"instance('bizData1')/sLastModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-76','mdDefault',"instance('bizData1')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-77','mdDefault',"instance('bizData1')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-78','mdDefault',"instance('bizData1')/sExecuteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-79','mdDefault',"instance('bizData1')/sExpectStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-80','mdDefault',"instance('bizData1')/sExpectFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-81','mdDefault',"instance('bizData1')/sActualStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-82','mdDefault',"instance('bizData1')/sActualFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-83','mdDefault',"instance('bizData1')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-84','mdDefault',"instance('bizData1')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-85','mdDefault',"instance('bizData1')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-86','mdDefault',"instance('bizData1')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-87','mdDefault',"instance('bizData1')/sEDField23","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-88','mdDefault',"instance('bizData1')/sEDField24","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-89','mdDefault',"instance('bizData1')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-90','mdDefault',"instance('bizData1')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-91','mdDefault',"instance('bizData1')/sEIField43","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-92','mdDefault',"instance('bizData1')/sEIField44","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-93','mdDefault',"instance('bizData1')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-94','mdDefault',"instance('bizData1')/sENField12","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-95','mdDefault',"instance('bizData1')/sENField13","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-96','mdDefault',"instance('bizData1')/sENField14","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-97','mdDefault',"instance('bizData1')/sWithdraw","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData2',null);	
xf._c('xf-bind-98','mdDefault',"instance('bizData2')/oPERATEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-99','mdDefault',"instance('bizData2')/oPERATETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-100','mdDefault',"instance('bizData2')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-101','mdDefault',"instance('bizData2')/oPERATERESULTSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-102','mdDefault',"instance('bizData2')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData4','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData4',null);	
xf._c('xf-bind-103','mdDefault',"instance('bizData4')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-104','mdDefault',"instance('bizData4')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-105','mdDefault',"instance('bizData4')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-106','mdDefault',"instance('bizData4')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData5','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData5',null);	
xf._c('xf-bind-107','mdDefault',"instance('bizData5')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-108','mdDefault',"instance('bizData5')/mODELNUMBER","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData6','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData6',null);	
xf._c('xf-bind-109','mdDefault',"instance('bizData6')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-110','mdDefault',"instance('bizData6')/mODELNUMBER","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_1662653515',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1638984176');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1638984176", "");}));xf._p(justep('GLOBAL_ID_1662653515'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_1662653515', evt,false)});	
var xf_menu_GLOBAL_ID_156092536 = new xforms.XFMenu('GLOBAL_ID_156092536','context');xf_menu_GLOBAL_ID_156092536.menu.addContextZone('8ab6fb2f2366449ca34c6abe234431c1');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_156092536.hide()});xf_menu_GLOBAL_ID_156092536.menu.setOpenMode('web');	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_826573524");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_156092536'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_156092536', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_826573524',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1340971006');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1340971006", "");}));xf._p(justep('GLOBAL_ID_826573524'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_826573524', evt,false)});	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1340971006');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_826573524'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_826573524', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1851210833',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1489355021');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1489355021", "");}));xf._p(justep('GLOBAL_ID_N1851210833'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_14,'GLOBAL_ID_N1851210833', evt,false)});	
var xf_menu_GLOBAL_ID_N930330889 = new xforms.XFMenu('GLOBAL_ID_N930330889','context');xf_menu_GLOBAL_ID_N930330889.menu.addContextZone('bac4c2b3c8404bbd9bdc4d816c5b9027');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N930330889.hide()});xf_menu_GLOBAL_ID_N930330889.menu.setOpenMode('web');	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_496929784");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N930330889'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_15,'GLOBAL_ID_N930330889', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_496929784',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N432681075');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N432681075", "");}));xf._p(justep('GLOBAL_ID_496929784'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_16,'GLOBAL_ID_496929784', evt,false)});	
var xf_action_xf_action_17=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N432681075');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_496929784'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_17,'GLOBAL_ID_496929784', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var bizData3_part_loaded = false;	
function load_bizData3_part(callback){if (bizData3_part_loaded) return;bizData3_part_loaded = true;	
new xforms.XFInstance2('bizData3','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData3',null);	
xf._c('xf-bind-61','mdDefault',"instance('bizData3')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-62','mdDefault',"instance('bizData3')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-63','mdDefault',"instance('bizData3')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-64','mdDefault',"instance('bizData3')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-65','mdDefault',"instance('bizData3')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-66','mdDefault',"instance('bizData3')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-67','mdDefault',"instance('bizData3')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-68','mdDefault',"instance('bizData3')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-69','mdDefault',"instance('bizData3')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-70','mdDefault',"instance('bizData3')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-71','mdDefault',"instance('bizData3')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-72','mdDefault',"instance('bizData3')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var bizData3_part_init_loaded = false;	
function load_bizData3_part_init(){if (bizData3_part_init_loaded) return;bizData3_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.assetDelete(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'removeTrigger', evt,false)});	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,null,null,false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger1Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trigger1', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,null,null,false,false);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trigger2', evt,false)});	
var xf_trigger_trigger3=new xforms.XFTrigger('trigger3',null,null,null,false,false);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger3Click(event)}));xf._p(justep('trigger3'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trigger3', evt,false)});	
var xf_trigger_trigger4=new xforms.XFTrigger('trigger4',null,null,null,false,false);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger4Click(event)}));xf._p(justep('trigger4'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action5,'trigger4', evt,false)});	
new xforms.XFGrid({id:'grdMaster',instance:'dataMaster',systemColumnsPro:'aPPLICATIONNO,mANUFACTUREID,dEVICETYPE,dEVICESTYLE,dECTIONTYPE,sOFTWAREVERSION,hARDWAREVERSION,dEADLINERECEIVEDATE,rETURNDATE,iNDEEDRETURNDATE,sHAREDFLAG,mEMO1,TEST_CONTRACT_INFO,cONTRACTNAME,TEST_PROJECT_INFO,AFC_MANUFACTURER_INFO,DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,pROJECTNAME,mANUFACTUREIDCNAME,dEVICETYPECNAME,typ,dEVICEID,iNDEEDRECEIVEDATE',headNames:'#master_checkbox,项目名称,供应商名称,检测对象,检测类型,设备ID,实际进场日期',widths:'30,100,100,100,100,100,100',types:'checkbox,ro,ro,ed,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMasterRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'iNDEEDRECEIVEDATE','yyyy-MM-dd');}});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveMore(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'saveMas', evt,false)});	
xforms.load_parts('vDetail');	
var xf_trigger_insertMas=new xforms.XFTrigger('insertMas',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.insertMasClick(event)}));xf._p(justep('insertMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'insertMas', evt,false)});	
var xf_trigger_remove=new xforms.XFTrigger('remove',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.setDelete(event)}));xf._p(justep('remove'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_9,'remove', evt,false)});	
new xforms.XFGrid({id:'grdDetail',instance:'dataDetail',systemColumnsPro:null,onInit:null,type:'grid',smartRender:null,delay:false,ids:'CC,mODELNAME,mODELSTYLE,mODELNUMBER,mEMO,sAMPLEDEVICENO',headNames:'#master_checkbox,模块名称,模块型号,模块数量,备注,sAMPLEDEVICENO',widths:'30,107,106,100,184,*',types:'checkbox,inputbtn,ed,ed,ed,ro',hiddenColumns:'sAMPLEDEVICENO',aligns:'center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindInputbtnEditDoneCallback(null,'mODELNAME','mainActivity.grdDetail_mODELNAMEEditDone');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptDEVICESTYLEok','text',xf._q("data('dataMaster')/dEVICESTYLE"),null,null,null,null,false,false);	
xf._d('iptDEVICEIDok','text',xf._q("data('dataMaster')/dEVICEID"),null,null,null,null,false,false);	
xf._d('iptSOFTWAREVERSIONok','text',xf._q("data('dataMaster')/sOFTWAREVERSION"),null,null,null,null,false,false);	
xf._d('iptHARDWAREVERSIONok','text',xf._q("data('dataMaster')/hARDWAREVERSION"),null,null,null,null,false,false);	
xf._d('iptINDEEDRECEIVEDATEok','text',xf._q("data('dataMaster')/iNDEEDRECEIVEDATE"),null,null,null,"yyyy-MM-dd",false,false);	
xf._d('iptRETURNDATEok','text',xf._q("data('dataMaster')/rETURNDATE"),null,null,null,"yyyy-MM-dd",false,false);	
new xforms.XFExtSelect({id:'gridSelect1ok',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/dECTIONTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'TEST_CONTRACT_INFO,cONTRACT_CODE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'TEST_CONTRACT_INFO',valueColumn:'TEST_CONTRACT_INFO',labelColumn:'cONTRACT_CODE',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default78"><row id="default79"><cell id="default80">1</cell><cell id="default81">软件</cell></row><row id="default82"><cell id="default83">2</cell><cell id="default84">硬件</cell></row><row id="default85"><cell id="default86">3</cell><cell id="default87">全部</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4ok',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/mANUFACTUREID"),labelRef:xf._q("data('dataMaster')/mANUFACTUREIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'gongyingshang',columns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDCNAME,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'AFC_MANUFACTURER_INFO,mANUFACTUREIDENAME,mANUFACTURETYPE,mANUFACTUREADDRESS,mANUFACTUREPOSTCODE,cONTACTTELEPHONE,cONTACTOR,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',valueColumn:'AFC_MANUFACTURER_INFO',labelColumn:'mANUFACTUREIDCNAME',extColumn:null,labels:',,,,,,,,,,,,',aligns:',,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_select1_radio1ok=new xforms.XFSelect('radio1ok',false,true,xf._q("data('dataMaster')/sHAREDFLAG"),true,false,false,'',0);	
var xf_item_selectItem1=new xforms.XFItem('selectItem1',null,null);	
var xf_item_selectItem2=new xforms.XFItem('selectItem2',null,null);	
new xforms.XFExtSelect({id:'gridSelect5ok',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/dEVICETYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'jianceduixiang',columns:'dEVICETYPECNAME,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea2ok','textarea',xf._q("data('dataMaster')/mEMO1"),null,null,null,null,false,false);	
xf._d('input1','text',xf._q("data('dataMaster')/dEADLINERECEIVEDATE"),null,null,null,"yyyy-MM-dd",false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/aPPLICATIONNO"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'sName,sParent,sContent,sRemark,sFlowID,sSourceID,sFrontID,sCatalogID,sKindID,sResponsible,sExecuteMode2,sExecuteMode,sPreemptMode,sRemindMode,sTypeID,sTypeName,sImportanceID,sImportanceName,sEmergencyID,sEmergencyName,sCURL,sEURL,sDistributeTime,sCreateTime,sLastModifyTime,sLimitTime,sWarningTime,sExecuteTime,sExpectStartTime,sExpectFinishTime,sActualStartTime,sActualFinishTime,sCreatorFID,sCreatorFName,sExecutorFID,sExecutorFName,sCreatorPersonID,sCreatorPersonName,sCreatorPosID,sCreatorPosName,sCreatorDeptID,sCreatorDeptName,sCreatorOgnID,sCreatorOgnName,sExecutorPersonID,sExecutorPersonName,sExecutorPosID,sExecutorPosName,sExecutorDeptID,sExecutorDeptName,sExecutorOgnID,sExecutorOgnName,sExecutorNames,sCustomerID,sCustomerName,sProjectID,sProjectName,sPlanID,sPlanName,sData1,sData2,sData3,sData4,sVariable,sActive,sStatusID,sStatusName,sAIActive,sAIID,sAIStatusID,sAIStatusName,sSequence,sLock,sHints,sShortcut,sProcess,sActivity,sProcessName,sActivityName,version,sProcessTemplateID,sProcessTemplateItemSequence,sTempPermissionID,sESField01,sESField02,sESField03,sESField04,sESField05,sESField06,sESField07,sESField08,sEDField21,sEDField22,sEDField23,sEDField24,sETField31,sETField32,sETField33,sETField34,sEIField41,sEIField42,sEIField43,sEIField44,sEBField51,sEBField52,sEBField53,sEBField54,sENField11,sENField12,sENField13,sENField14,sSummary,sActivityNames,sCode,sWithdraw',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sParent,sContent,sRemark,sFlowID,sSourceID,sFrontID,sCatalogID,sKindID,sResponsible,sExecuteMode2,sExecuteMode,sPreemptMode,sRemindMode,sTypeID,sTypeName,sImportanceID,sImportanceName,sEmergencyID,sEmergencyName,sCURL,sEURL,sDistributeTime,sCreateTime,sLastModifyTime,sLimitTime,sWarningTime,sExecuteTime,sExpectStartTime,sExpectFinishTime,sActualStartTime,sActualFinishTime,sCreatorFID,sCreatorFName,sExecutorFID,sExecutorFName,sCreatorPersonID,sCreatorPersonName,sCreatorPosID,sCreatorPosName,sCreatorDeptID,sCreatorDeptName,sCreatorOgnID,sCreatorOgnName,sExecutorPersonID,sExecutorPersonName,sExecutorPosID,sExecutorPosName,sExecutorDeptID,sExecutorDeptName,sExecutorOgnID,sExecutorOgnName,sExecutorNames,sCustomerID,sCustomerName,sProjectID,sProjectName,sPlanID,sPlanName,sData1,sData2,sData3,sData4,sVariable,sActive,sStatusID,sStatusName,sAIActive,sAIID,sAIStatusID,sAIStatusName,sSequence,sLock,sHints,sShortcut,sProcess,sActivity,sProcessName,sActivityName,version,sProcessTemplateID,sProcessTemplateItemSequence,sTempPermissionID,sESField01,sESField02,sESField03,sESField04,sESField05,sESField06,sESField07,sESField08,sEDField21,sEDField22,sEDField23,sEDField24,sETField31,sETField32,sETField33,sETField34,sEIField41,sEIField42,sEIField43,sEIField44,sEBField51,sEBField52,sEBField53,sEBField54,sENField11,sENField12,sENField13,sENField14,sSummary,sActivityNames,sCode,sWithdraw',valueColumn:'sData1',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		