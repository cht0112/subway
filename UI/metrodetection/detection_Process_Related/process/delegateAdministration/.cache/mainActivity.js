
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/excel.xbl.xml#export"] = _xbl_JSClassDefine_export;
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
				if (typeof(data) == "string") {	data = justep.xbl(data);
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

function _xbl_JSClassDefine_export(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_export.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
				justep.Object.extend(this, new justep.ExportExcel(this));
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
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

	var ids=[{id:'615d0867bd8b4aea9eb3d2d2e40b9af6', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'e606296c37f04f1bbbf4c3fcf1e40d6e', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'ab56d2247647462aa3d760759540ba09', name:'xforms:label'}]},{id:'70a02b7142f94d1da2789b28daea647e', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'excelExport1', name:'/UI/system/components/excel.xbl.xml#export', children:[{id:'trigger-excelExport1', name:'xforms:trigger', children:[{id:'cd44a2b4e6f243e79d9291cb2dc6ae54', name:'xforms:label'}]}]}]},{id:'grdMaster', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMas', name:'xforms:trigger', children:[{id:'3a97d70a2b0746d6aeb4a297a143c089', name:'xforms:label'}]},{id:'saveMas', name:'xforms:trigger', children:[{id:'0a6579300926466b88f0fb6a5cbe086b', name:'xforms:label'}]}]},{id:'iptMANUFACTUREIDCNAME', name:'xforms:input'},{id:'iptMANUFACTUREIDENAME', name:'xforms:input'},{id:'iptMANUFACTUREADDRESS', name:'xforms:input'},{id:'iptMANUFACTUREPOSTCODE', name:'xforms:input'},{id:'iptCONTACTTELEPHONE', name:'xforms:input'},{id:'iptCONTACTMOBILE', name:'xforms:input'},{id:'iptFAXNUMBER', name:'xforms:input'},{id:'iptCONTACTEMAIL', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default12', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default35', name:'xforms:label'},{id:'default36', name:'xforms:value'}]},{id:'input1', name:'xforms:input'}]}]},{id:'filter-dialog-d548be8a-32e8-4ff1-b738-9b280786d711', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1093498233', name:'xforms:dialog'}]},{id:'filter-pattern-e3c03046-0963-48a5-b1b2-4eb3c35565aa', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'69869262da6b46bbbc29f1149ea90a58', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1722615456', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1471147747', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','e606296c37f04f1bbbf4c3fcf1e40d6e');xf._a(null,'removeTrigger');xf._a('removeTrigger','ab56d2247647462aa3d760759540ba09');xf._a(null,'trigger-excelExport1');xf._a('trigger-excelExport1','cd44a2b4e6f243e79d9291cb2dc6ae54');xf._a(null,'grdMaster');xf._a(null,'insertMas');xf._a('insertMas','3a97d70a2b0746d6aeb4a297a143c089');xf._a(null,'saveMas');xf._a('saveMas','0a6579300926466b88f0fb6a5cbe086b');xf._a(null,'iptMANUFACTUREIDCNAME');xf._a(null,'iptMANUFACTUREIDENAME');xf._a(null,'iptMANUFACTUREADDRESS');xf._a(null,'iptMANUFACTUREPOSTCODE');xf._a(null,'iptCONTACTTELEPHONE');xf._a(null,'iptCONTACTMOBILE');xf._a(null,'iptFAXNUMBER');xf._a(null,'iptCONTACTEMAIL');xf._a(null,'textarea1');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel3');xf._a('gridSelect1','default15');xf._a(null,'gridSelect2');xf._a('gridSelect2','default35');xf._a('gridSelect2','default37');xf._a(null,'input1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMaster')/mANUFACTUREIDCNAME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'厂商中文名称不能为空!'",xf._i("厂商中文名称不能为空!"));	
xf._b("instance('dataMaster')/cONTACTTELEPHONE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("'联系电话不能为空!'",xf._i("联系电话不能为空!"));	
xf._b("instance('dataMaster')/mANUFACTURETYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE')))));	
xf._b("'厂商类型不能为空!'",xf._i("厂商类型不能为空!"));	
xf._b("instance('dataMaster')/mANUFACTURETYPE1",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE1')))));	
xf._b("instance('dataMaster')/mANUFACTUREPOSTCODE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("instance('hrData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('hrData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('hrData')/oFFICEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('hrData')/pOSITIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('hrData')/dEGREEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('hrData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('hrData')/pOLITICALID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('hrData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('hrData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("mANUFACTUREIDCNAME",xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME'))));	
xf._b("mANUFACTURETYPE_1",xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE_1'))));	
xf._b("cONTACTOR",xf._h(false, xf._k("child",xf._j('','cONTACTOR'))));	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))));	
xf._b("mANUFACTUREADDRESS",xf._h(false, xf._k("child",xf._j('','mANUFACTUREADDRESS'))));	
xf._b("data('dataMaster')/mANUFACTUREIDCNAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDCNAME')))));	
xf._b("data('dataMaster')/mANUFACTUREIDENAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREIDENAME')))));	
xf._b("data('dataMaster')/mANUFACTUREADDRESS",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREADDRESS')))));	
xf._b("data('dataMaster')/mANUFACTUREPOSTCODE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREPOSTCODE')))));	
xf._b("data('dataMaster')/cONTACTTELEPHONE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE')))));	
xf._b("data('dataMaster')/cONTACTMOBILE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE')))));	
xf._b("data('dataMaster')/fAXNUMBER",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','fAXNUMBER')))));	
xf._b("data('dataMaster')/cONTACTEMAIL",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL')))));	
xf._b("data('dataMaster')/mEMO",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('dataMaster')/mANUFACTURETYPE1",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTURETYPE1')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('dataMaster')/oPERATOR_ID",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','oPERATOR_ID')))));	
xf._b("data('dataMaster')/cONTACTOR",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','cONTACTOR')))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
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
xf._b("not(call('justep.XData.canDo','dataMaster','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMaster','mdDefault',null,null,null,null,null,null,null,null,'recCB',null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMaster')/mANUFACTUREIDCNAME",null,null,"true()",null,null,null,"'厂商中文名称不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMaster')/cONTACTTELEPHONE",null,null,"true()",null,null,null,"'联系电话不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMaster')/mANUFACTURETYPE",null,null,"true()",null,null,null,"'厂商类型不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMaster')/mANUFACTURETYPE1",null,null,"true()",null,null,null,"'厂商类型不能为空!'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMaster')/mANUFACTURETYPE1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMaster')/mANUFACTUREPOSTCODE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action5,'mdDefault', evt,false)});	
new xforms.XFInstance2('hrData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-6','mdDefault',"instance('hrData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('hrData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('hrData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('hrData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('hrData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('hrData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('hrData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('hrData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('hrData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_1093498233',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N181298273');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N181298273", "");}));xf._p(justep('GLOBAL_ID_1093498233'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_1093498233', evt,false)});	
var xf_menu_GLOBAL_ID_N1722615456 = new xforms.XFMenu('GLOBAL_ID_N1722615456','context');xf_menu_GLOBAL_ID_N1722615456.menu.addContextZone('69869262da6b46bbbc29f1149ea90a58');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1722615456.hide()});xf_menu_GLOBAL_ID_N1722615456.menu.setOpenMode('web');	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1471147747");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1722615456'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N1722615456', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1471147747',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_206879364');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_206879364", "");}));xf._p(justep('GLOBAL_ID_N1471147747'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N1471147747', evt,false)});	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_206879364');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1471147747'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_N1471147747', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.assetDelete(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'removeTrigger', evt,false)});	
var xf_trigger_trigger_excelExport1=new xforms.XFTrigger('trigger-excelExport1',null,"/UI/system/components/excel/images/export.gif","/UI/system/components/excel/images/unexport.gif",false,false);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.XBLObject.getXBLObject(event.target).exportExcel();}));xf._p(justep('trigger-excelExport1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'trigger-excelExport1', evt,false)});	
new xforms.XFGrid({id:'grdMaster',instance:'dataMaster',systemColumnsPro:'mANUFACTUREIDENAME,mANUFACTURETYPE1,mANUFACTUREPOSTCODE,cONTACTMOBILE,fAXNUMBER,cONTACTEMAIL,mEMO,oPERATOR_ID',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,mANUFACTUREIDCNAME,mANUFACTURETYPE_1,cONTACTOR,cONTACTTELEPHONE,mANUFACTUREADDRESS',headNames:'#master_checkbox,厂商名称,厂商类型,联系人,联系电话,厂商地址',widths:'30,172,118,98,124,270',types:'checkbox,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMasterRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_insertMas=new xforms.XFTrigger('insertMas',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'insertMas', evt,false)});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveMasClick(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'saveMas', evt,false)});	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptMANUFACTUREIDCNAME','text',xf._q("data('dataMaster')/mANUFACTUREIDCNAME"),null,null,null,null,false,false);	
xf._d('iptMANUFACTUREIDENAME','text',xf._q("data('dataMaster')/mANUFACTUREIDENAME"),null,null,null,null,false,false);	
xf._d('iptMANUFACTUREADDRESS','text',xf._q("data('dataMaster')/mANUFACTUREADDRESS"),null,null,null,null,false,false);	
xf._d('iptMANUFACTUREPOSTCODE','text',xf._q("data('dataMaster')/mANUFACTUREPOSTCODE"),"^[0-9]*[0-9][0-9]*$",null,null,null,false,false);	
xf._d('iptCONTACTTELEPHONE','text',xf._q("data('dataMaster')/cONTACTTELEPHONE"),null,null,null,null,false,false);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptCONTACTTELEPHONE'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action4,'iptCONTACTTELEPHONE', evt,false)});	
xf._d('iptCONTACTMOBILE','text',xf._q("data('dataMaster')/cONTACTMOBILE"),null,null,null,null,false,false);	
xf._d('iptFAXNUMBER','text',xf._q("data('dataMaster')/fAXNUMBER"),null,null,null,null,false,false);	
xf._d('iptCONTACTEMAIL','text',xf._q("data('dataMaster')/cONTACTEMAIL"),null,null,null,null,false,false);	
xf._d('textarea1','textarea',xf._q("data('dataMaster')/mEMO"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/mANUFACTURETYPE1"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:'#text_search,',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default44"><row id="default45"><cell id="default46">1</cell><cell id="default49">设备厂商</cell></row><row id="default50"><cell id="default51">2</cell><cell id="default52">工具厂商</cell></row><row id="default53"><cell id="default54">3</cell><cell id="default55">第三方检测机构</cell></row><row id="default56"><cell id="default57">4</cell><cell id="default58">检测中心实验室</cell></row><row id="default59"><cell id="default60">5</cell><cell id="default61">加工单位</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity.gridSelect1Closeup'});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/oPERATOR_ID"),labelRef:xf._q("data('dataMaster')/cONTACTOR"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'hrData',columns:'HR_BASE_INFO,oPERATORNAME,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'HR_BASE_INFO,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',valueColumn:'HR_BASE_INFO',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
xforms.refresh(justep("view1"));	
justep.XBLObject.loadXBL(justep("view1"));}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
xf._d('input1','text',xf._q("data('dataMaster')/cONTACTOR"),null,null,null,null,false,false);	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
xforms.refresh(justep("view2"));	
justep.XBLObject.loadXBL(justep("view2"));}	
var __actions__ = {	
};	
		function load_view1_html(){var a = [];a.push('<table cellpadding="0" cellspacing="0" class="component_E1635FC7 gridSelect xforms-control xforms-gridselect1 xforms-appearance-minimal xui-select" id="gridSelect2" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="position:absolute;top:7px;width:210px;left:5px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<div class="xforms-control xforms-ext-select" onmouseout="xforms.Core.setClass(this,\'ext-select-mouse-over\',false)" onmouseover="xforms.Core.setClass(this,\'ext-select-mouse-over\',true)" >');a.push('<table border="0px" cellpadding="0px" cellspacing="0px" style="width:100%;height:100%;border:none;table-layout:fixed;" >');a.push('<tr style="border:none" >');a.push('<td style="width:100%;height:100%;border:none;" >');a.push('<input accesskey="" class="xforms-ext-select-input" tabindex="5" >');a.push('</input>');a.push('</td>');a.push('<td style="border:none" width="20px" >');a.push('<img align="absMiddle" src="/x5/$v2229_d2788937568234ce69da78a323a979b1f/form/images/combo_select.gif?language=zh_CN" style="margin-left:3px" >');a.push('</img>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');justep('view1').innerHTML = a.join('');}function load_view2_html(){var a = [];a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-input xforms-appearance-minimal xui-input" id="input1" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="position:absolute;top:7px;left:33px;width:210px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<input accesskey="" class="xforms-value" tabindex="5" type="text" >');a.push('</input>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('<td class="xui-ie-input-bug" >');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');justep('view2').innerHTML = a.join('');}