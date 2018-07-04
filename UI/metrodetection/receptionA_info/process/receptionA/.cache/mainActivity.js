
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/smartFilter.xbl.xml#smartFilter"] = _xbl_JSClassDefine_smartFilter;
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
					}		},
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
								img.attr("src", info.disImg);				a.unbind("click");
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

	var ids=[{id:'149f648de54c46d287554cde76ed3939', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'01ef58a444e9485896087e9fcc3abd89', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'3951e2921aed46929de801be361169a5', name:'xforms:label'}]},{id:'74c44be510234630b39ef615c1620f00', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'excelExport1', name:'/UI/system/components/excel.xbl.xml#export', children:[{id:'trigger-excelExport1', name:'xforms:trigger', children:[{id:'2ec394688b5048c88ecd66c36e204668', name:'xforms:label'}]}]},{id:'smartFilter1', name:'/UI/system/components/smartFilter.xbl.xml#smartFilter', children:[{id:'smartFilter1_input_528467079', name:'xforms:input'}]},{id:'trigger1', name:'xforms:trigger', children:[{id:'default11', name:'xforms:label'}]}]},{id:'grdMain', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'iptVISITOR', name:'xforms:input'},{id:'iptVISIT_DATE', name:'xforms:input'},{id:'iptVISITOR_PERSON', name:'xforms:input'},{id:'iptRECEPT_UNIT', name:'xforms:input'},{id:'iptRECEPT_LEADER', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'},{id:'textarea2', name:'xforms:textarea'}]}]},{id:'filter-pattern-5ce3680e-931f-48a9-aec6-74aae423cdfe', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'a4ca5c2eca9540ea8ad4e37e4c3f1178', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_2027196052', name:'xforms:menu'}]},{id:'GLOBAL_ID_1009340897', name:'xforms:dialog'}]},{id:'filter-dialog-b7a3bdc5-721f-4970-86a8-42f808840aac', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_306539502', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','01ef58a444e9485896087e9fcc3abd89');xf._a(null,'removeTrigger');xf._a('removeTrigger','3951e2921aed46929de801be361169a5');xf._a(null,'trigger-excelExport1');xf._a('trigger-excelExport1','2ec394688b5048c88ecd66c36e204668');xf._a(null,'smartFilter1_input_528467079');xf._a(null,'trigger1');xf._a('trigger1','default11');xf._a(null,'grdMain');xf._a(null,'iptVISITOR');xf._a(null,'iptVISIT_DATE');xf._a(null,'iptVISITOR_PERSON');xf._a(null,'iptRECEPT_UNIT');xf._a(null,'iptRECEPT_LEADER');xf._a(null,'textarea1');xf._a(null,'textarea2');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/VISITOR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VISITOR')))));	
xf._b("true()",xf._f('true'));	
xf._b("'来访单位不能为空'",xf._i("来访单位不能为空"));	
xf._b("instance('dataMain')/VISIT_DATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VISIT_DATE')))));	
xf._b("'参观时间不能为空'",xf._i("参观时间不能为空"));	
xf._b("instance('dataMain')/VISITOR_PERSON",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VISITOR_PERSON')))));	
xf._b("instance('smartFilter1_data_528467079')/value",xf._g(xf._f('instance',xf._i("smartFilter1_data_528467079")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("VISITOR",xf._h(false, xf._k("child",xf._j('','VISITOR'))));	
xf._b("VISITOR_PERSON",xf._h(false, xf._k("child",xf._j('','VISITOR_PERSON'))));	
xf._b("VISIT_DATE",xf._h(false, xf._k("child",xf._j('','VISIT_DATE'))));	
xf._b("RECEPT_UNIT",xf._h(false, xf._k("child",xf._j('','RECEPT_UNIT'))));	
xf._b("RECEPT_LEADER",xf._h(false, xf._k("child",xf._j('','RECEPT_LEADER'))));	
xf._b("CONTENT_DESC",xf._h(false, xf._k("child",xf._j('','CONTENT_DESC'))));	
xf._b("data('dataMain')/VISITOR",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VISITOR')))));	
xf._b("data('dataMain')/VISIT_DATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VISIT_DATE')))));	
xf._b("data('dataMain')/VISITOR_PERSON",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VISITOR_PERSON')))));	
xf._b("data('dataMain')/RECEPT_UNIT",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','RECEPT_UNIT')))));	
xf._b("data('dataMain')/RECEPT_LEADER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','RECEPT_LEADER')))));	
xf._b("data('dataMain')/CONTENT_DESC",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','CONTENT_DESC')))));	
xf._b("data('dataMain')/MEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','MEMO')))));	
xf._b("not(call('justep.XData.canDo','dataMain','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMain','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/VISITOR",null,null,"true()",null,null,null,"'来访单位不能为空'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/VISIT_DATE",null,null,"true()",null,null,null,"'参观时间不能为空'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/VISIT_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/VISITOR_PERSON","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_2027196052 = new xforms.XFMenu('GLOBAL_ID_2027196052','context');xf_menu_GLOBAL_ID_2027196052.menu.addContextZone('a4ca5c2eca9540ea8ad4e37e4c3f1178');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_2027196052.hide()});xf_menu_GLOBAL_ID_2027196052.menu.setOpenMode('web');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1009340897");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_2027196052'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_2027196052', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1009340897',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_2109645769');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_2109645769", "");}));xf._p(justep('GLOBAL_ID_1009340897'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_1009340897', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_2109645769');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1009340897'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_1009340897', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_306539502',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_303599082');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_303599082", "");}));xf._p(justep('GLOBAL_ID_306539502'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_306539502', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.removeTrigger1Click(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'removeTrigger', evt,false)});	
var xf_trigger_trigger_excelExport1=new xforms.XFTrigger('trigger-excelExport1',null,"/UI/system/components/excel/images/export.gif","/UI/system/components/excel/images/unexport.gif",false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.XBLObject.getXBLObject(event.target).exportExcel();}));xf._p(justep('trigger-excelExport1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'trigger-excelExport1', evt,false)});	
var xf_model_smartFilter1_model_528467079 = new xforms.XFModel('smartFilter1_model_528467079',null);	
new xforms.XFInstance2('smartFilter1_data_528467079','smartFilter1_model_528467079',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('smartFilter1_data_528467079','value');	
xf._d('smartFilter1_input_528467079','text',xf._q("instance('smartFilter1_data_528467079')/value"),null,null,null,null,false,false);	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,"/UI/SA/OPM/images/search.gif",null,false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms.blur();justep.xbl('dataMain').refreshData();}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trigger1', evt,false)});	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'MEMO',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,VISITOR,VISITOR_PERSON,VISIT_DATE,RECEPT_UNIT,RECEPT_LEADER,CONTENT_DESC',headNames:'#master_checkbox,来访单位名称,访客人数,参观时间,接待单位,接待单位负责人,行程描述',widths:'30,144,52,118,143,88,172',types:'checkbox,ro,ro,dateTime,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('smartFilter1_model_528467079').xformsObject.construct_part();	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptVISITOR','text',xf._q("data('dataMain')/VISITOR"),null,null,null,null,false,false);	
xf._d('iptVISIT_DATE','text',xf._q("data('dataMain')/VISIT_DATE"),null,null,null,null,false,false);	
xf._d('iptVISITOR_PERSON','text',xf._q("data('dataMain')/VISITOR_PERSON"),null,null,null,null,false,false);	
xf._d('iptRECEPT_UNIT','text',xf._q("data('dataMain')/RECEPT_UNIT"),null,null,null,null,false,false);	
xf._d('iptRECEPT_LEADER','text',xf._q("data('dataMain')/RECEPT_LEADER"),null,null,null,null,false,false);	
xf._d('textarea1','textarea',xf._q("data('dataMain')/CONTENT_DESC"),null,null,null,null,false,false);	
xf._d('textarea2','textarea',xf._q("data('dataMain')/MEMO"),null,null,null,null,false,false);	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		