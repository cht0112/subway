
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

	var ids=[{id:'6a99976926f7497bb29af343ce4534be', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'06e36e55ef7544349155dd106b9a6c00', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grdMain', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMas', name:'xforms:trigger', children:[{id:'6234e783d8494d61b8f046be436aa7ff', name:'xforms:label'}]},{id:'trigger2', name:'xforms:trigger', children:[{id:'default23', name:'xforms:label'}]}]},{id:'iptError_date_time', name:'xforms:input'},{id:'iptSystem_type', name:'xforms:input'},{id:'iptModel_name', name:'xforms:input'},{id:'iptError_type', name:'xforms:input'},{id:'iptDection_object', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'},{id:'textarea2', name:'xforms:textarea'},{id:'textarea3', name:'xforms:textarea'},{id:'windowDialog1', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'windowDialog2', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'MODULE_NAME', name:'xforms:input'},{id:'textarea4', name:'xforms:textarea'},{id:'textarea5', name:'xforms:textarea'},{id:'textarea6', name:'xforms:textarea'},{id:'textarea7', name:'xforms:textarea'},{id:'input1', name:'xforms:input'},{id:'input3', name:'xforms:input'},{id:'input4', name:'xforms:input'}]}]},{id:'filter-pattern-07c20108-3652-49e1-9ad7-76bce456332e', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'a1744f1770df4190bdf820123c34c30b', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1898632690', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1837016373', name:'xforms:dialog'}]},{id:'filter-dialog-0b764330-1d97-4ebe-a98a-dad4bf3bd673', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N537542794', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'grdMain');xf._a(null,'saveMas');xf._a('saveMas','6234e783d8494d61b8f046be436aa7ff');xf._a(null,'trigger2');xf._a('trigger2','default23');xf._a(null,'iptError_date_time');xf._a(null,'iptSystem_type');xf._a(null,'iptModel_name');xf._a(null,'iptError_type');xf._a(null,'iptDection_object');xf._a(null,'textarea1');xf._a(null,'textarea2');xf._a(null,'textarea3');xf._a(null,'MODULE_NAME');xf._a(null,'textarea4');xf._a(null,'textarea5');xf._a(null,'textarea6');xf._a(null,'textarea7');xf._a(null,'input1');xf._a(null,'input3');xf._a(null,'input4');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/system_problem_no",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','system_problem_no')))));	
xf._b("instance('dataMain')/error_date_time",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','error_date_time')))));	
xf._b("instance('dataMain')/system_type",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','system_type')))));	
xf._b("instance('dataMain')/error_type",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','error_type')))));	
xf._b("instance('dataMain')/dection_object",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dection_object')))));	
xf._b("instance('dataMain')/error_id",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','error_id')))));	
xf._b("instance('bizData1')/sYSTEMTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sYSTEMTYPE')))));	
xf._b("instance('bizData1')/eRRORTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eRRORTYPE')))));	
xf._b("instance('bizData1')/dECTIONOBJECT",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dECTIONOBJECT')))));	
xf._b("instance('bizData1')/SYSTEM_TYPE_CODE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','SYSTEM_TYPE_CODE')))));	
xf._b("instance('bizData1')/ERROR_TYPE_CODE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','ERROR_TYPE_CODE')))));	
xf._b("instance('bizData4')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('bizData4')/dEVICETYPE",xf._g(xf._f('instance',xf._i("bizData4")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("error_date_time",xf._h(false, xf._k("child",xf._j('','error_date_time'))));	
xf._b("sYSTEMTYPECNAME",xf._h(false, xf._k("child",xf._j('','sYSTEMTYPECNAME'))));	
xf._b("model_name",xf._h(false, xf._k("child",xf._j('','model_name'))));	
xf._b("eRRORTYPECNAME",xf._h(false, xf._k("child",xf._j('','eRRORTYPECNAME'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dection_business",xf._h(false, xf._k("child",xf._j('','dection_business'))));	
xf._b("error_id",xf._h(false, xf._k("child",xf._j('','error_id'))));	
xf._b("data('dataMain')/error_date_time",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','error_date_time')))));	
xf._b("data('dataMain')/sYSTEMTYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sYSTEMTYPECNAME')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dataMain')/model_name",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','model_name')))));	
xf._b("data('dataMain')/eRRORTYPECNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','eRRORTYPECNAME')))));	
xf._b("data('dataMain')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("data('dataMain')/error_desc",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','error_desc')))));	
xf._b("data('dataMain')/memo",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','memo')))));	
xf._b("data('dataMain')/dection_business",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dection_business')))));	
xf._b("data('bizData1')/MODULE_NAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','MODULE_NAME')))));	
xf._b("data('bizData1')/dECTIONBUSINESS",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dECTIONBUSINESS')))));	
xf._b("data('bizData1')/eRRORDESC",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eRRORDESC')))));	
xf._b("data('bizData1')/eRRORSOLUTION",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eRRORSOLUTION')))));	
xf._b("data('bizData1')/mEMO",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('bizData1')/sYSTEMTYPECNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sYSTEMTYPECNAME')))));	
xf._b("data('bizData1')/eRRORTYPECNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eRRORTYPECNAME')))));	
xf._b("data('bizData1')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("not(call('justep.XData.canDo','dataMain','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/system_problem_no","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/error_date_time","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/system_type","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/error_type","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/dection_object","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/error_id","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData1',null);	
xf._c('xf-bind-6','mdDefault',"instance('bizData1')/sYSTEMTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('bizData1')/eRRORTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('bizData1')/dECTIONOBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('bizData1')/SYSTEM_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('bizData1')/ERROR_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData3','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData4','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-11','mdDefault',"instance('bizData4')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('bizData4')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_N1898632690 = new xforms.XFMenu('GLOBAL_ID_N1898632690','context');xf_menu_GLOBAL_ID_N1898632690.menu.addContextZone('a1744f1770df4190bdf820123c34c30b');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1898632690.hide()});xf_menu_GLOBAL_ID_N1898632690.menu.setOpenMode('web');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1837016373");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1898632690'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_N1898632690', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1837016373',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N607251718');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N607251718", "");}));xf._p(justep('GLOBAL_ID_N1837016373'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N1837016373', evt,false)});	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N607251718');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1837016373'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N1837016373', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N537542794',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1002996251');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1002996251", "");}));xf._p(justep('GLOBAL_ID_N537542794'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N537542794', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'system_problem_no,system_type,error_type,dection_object,error_desc,memo',onInit:null,type:'grid',smartRender:null,delay:false,ids:'error_date_time,sYSTEMTYPECNAME,model_name,eRRORTYPECNAME,dETECTIONOBJECTCNAME,dection_business,error_id',headNames:'出错日期时间,系统类型,模块名称,问题类型,检测对象,检测业务,解决问题编号',widths:'129,100,100,100,100,100,100',types:'ro,ro,ro,ro,ro,ro,ed',hiddenColumns:'',aligns:'center,center,center,center,center,center,center',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveMore(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'saveMas', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',null,null,null,false,false);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trigger2', evt,false)});	
xforms.load_parts('vDetail');	
xforms.load_parts('view1');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptError_date_time','text',xf._q("data('dataMain')/error_date_time"),null,null,null,null,true,false);	
xf._d('iptSystem_type','text',xf._q("data('dataMain')/sYSTEMTYPECNAME"),null,null,null,null,false,true);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptSystem_type'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action1,'iptSystem_type', evt,false)});	
xf._d('iptModel_name','text',xf._q("data('dataMain')/model_name"),null,null,null,null,false,true);	
xf._d('iptError_type','text',xf._q("data('dataMain')/eRRORTYPECNAME"),null,null,null,null,false,true);	
xf._d('iptDection_object','text',xf._q("data('dataMain')/dETECTIONOBJECTCNAME"),null,null,null,null,false,true);	
xf._d('textarea1','textarea',xf._q("data('dataMain')/error_desc"),null,null,null,null,false,true);	
xf._d('textarea2','textarea',xf._q("data('dataMain')/memo"),null,null,null,null,false,true);	
xf._d('textarea3','textarea',xf._q("data('dataMain')/dection_business"),null,null,null,null,false,true);	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xf._d('MODULE_NAME','text',xf._q("data('bizData1')/MODULE_NAME"),null,null,null,null,false,true);	
xf._d('textarea4','textarea',xf._q("data('bizData1')/dECTIONBUSINESS"),null,null,null,null,false,true);	
xf._d('textarea5','textarea',xf._q("data('bizData1')/eRRORDESC"),null,null,null,null,false,true);	
xf._d('textarea6','textarea',xf._q("data('bizData1')/eRRORSOLUTION"),null,null,null,null,false,true);	
xf._d('textarea7','textarea',xf._q("data('bizData1')/mEMO"),null,null,null,null,false,true);	
xf._d('input1','text',xf._q("data('bizData1')/sYSTEMTYPECNAME"),null,null,null,null,false,true);	
xf._d('input3','text',xf._q("data('bizData1')/eRRORTYPECNAME"),null,null,null,null,false,true);	
xf._d('input4','text',xf._q("data('bizData1')/dETECTIONOBJECTCNAME"),null,null,null,null,false,true);	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		