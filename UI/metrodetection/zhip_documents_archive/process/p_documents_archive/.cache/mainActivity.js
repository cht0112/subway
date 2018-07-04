
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

	var ids=[{id:'8df05b8528e948ca81b8302e81de5557', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'ef39dfd3b1b246d5b052211c2b82b3d5', name:'xforms:label'}]},{id:'c909fccf5a03489c9762a40ec302975b', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grdMain', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger1', name:'xforms:trigger', children:[{id:'048e5aee09cc43338cccaf49a1af61ba', name:'xforms:label'}]}]},{id:'iptP_FILE_NAME', name:'xforms:input'},{id:'iptFILE_VER', name:'xforms:input'},{id:'iptLOCATION_CABINET_ID', name:'xforms:input'},{id:'iptARCHIVE_DATE', name:'xforms:input'},{id:'iptINPUT_OPERATOR', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'},{id:'textarea2', name:'xforms:textarea'},{id:'textarea3', name:'xforms:textarea'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default20', name:'xforms:label'},{id:'default23', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default49', name:'xforms:label'},{id:'default52', name:'xforms:value'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default65', name:'xforms:label'},{id:'default66', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default7', name:'xforms:label'},{id:'default8', name:'xforms:value'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default69', name:'xforms:label'},{id:'default70', name:'xforms:value'}]},{id:'gridSelect6', name:'xforms:gridselect1', children:[{id:'default47', name:'xforms:label'},{id:'default90', name:'xforms:value'}]},{id:'gridSelect7', name:'xforms:gridselect1', children:[{id:'default101', name:'xforms:label'},{id:'default102', name:'xforms:value'}]},{id:'gridSelect8', name:'xforms:gridselect1', children:[{id:'default1', name:'xforms:label'},{id:'default2', name:'xforms:value'}]}]}]},{id:'filter-pattern-cf2abe99-3935-41ba-b7ad-bba3e351fb4f', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'4fc5fc49d192459b9c8e36c6e4c8e62a', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_605698209', name:'xforms:menu'}]},{id:'GLOBAL_ID_N388031210', name:'xforms:dialog'}]},{id:'filter-dialog-4aadf216-1b13-4284-a0ae-77267e4aece5', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N82000319', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','ef39dfd3b1b246d5b052211c2b82b3d5');xf._a(null,'grdMain');xf._a(null,'insertTrigger1');xf._a('insertTrigger1','048e5aee09cc43338cccaf49a1af61ba');xf._a(null,'iptP_FILE_NAME');xf._a(null,'iptFILE_VER');xf._a(null,'iptLOCATION_CABINET_ID');xf._a(null,'iptARCHIVE_DATE');xf._a(null,'iptINPUT_OPERATOR');xf._a(null,'textarea1');xf._a(null,'textarea2');xf._a(null,'textarea3');xf._a(null,'gridSelect1');xf._a('gridSelect1','default20');xf._a('gridSelect1','default26');xf._a(null,'gridSelect2');xf._a('gridSelect2','default49');xf._a('gridSelect2','default53');xf._a(null,'gridSelect3');xf._a('gridSelect3','default65');xf._a('gridSelect3','default67');xf._a(null,'gridSelect4');xf._a('gridSelect4','default7');xf._a('gridSelect4','default9');xf._a(null,'gridSelect5');xf._a('gridSelect5','default69');xf._a('gridSelect5','default71');xf._a(null,'gridSelect6');xf._a('gridSelect6','default47');xf._a('gridSelect6','default91');xf._a(null,'gridSelect7');xf._a('gridSelect7','default101');xf._a('gridSelect7','default103');xf._a(null,'gridSelect8');xf._a('gridSelect8','default1');xf._a('gridSelect8','default6');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("true()",xf._f('true'));	
xf._b("'文件科目不能为空!'",xf._i("文件科目不能为空!"));	
xf._b("instance('dataMain')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("'文件类型不能为空!'",xf._i("文件类型不能为空!"));	
xf._b("instance('dataMain')/pFILENAME",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pFILENAME')))));	
xf._b("'文件名称不能为空!'",xf._i("文件名称不能为空!"));	
xf._b("instance('dataMain')/fILEVER",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fILEVER')))));	
xf._b("'文件版本不能为空!'",xf._i("文件版本不能为空!"));	
xf._b("instance('dataMain')/lOCATIONROOMID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lOCATIONROOMID')))));	
xf._b("'存档房间不能为空!'",xf._i("存档房间不能为空!"));	
xf._b("instance('dataMain')/aRCHIVEDATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE')))));	
xf._b("'存档日期不能为空!'",xf._i("存档日期不能为空!"));	
xf._b("instance('dataMain')/aRCHIVEOPERATOR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aRCHIVEOPERATOR')))));	
xf._b("'存档人不能为空!'",xf._i("存档人不能为空!"));	
xf._b("instance('dataMain')/iNPUTOPERATOR",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','iNPUTOPERATOR')))));	
xf._b("'记录人不能为空!'",xf._i("记录人不能为空!"));	
xf._b("instance('dataMain')/aLLOWBORROW",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aLLOWBORROW')))));	
xf._b("'可借状态不能为空!'",xf._i("可借状态不能为空!"));	
xf._b("instance('dataMain')/dESTROYSTATE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dESTROYSTATE')))));	
xf._b("'销毁状态不能为空!'",xf._i("销毁状态不能为空!"));	
xf._b("instance('dataMain')/rOOMTYPE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("'房间类型不能为空!'",xf._i("房间类型不能为空!"));	
xf._b("instance('dataMain')/sECRETLEVEL",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("'涉密级别不能为空!'",xf._i("涉密级别不能为空!"));	
xf._b("instance('leixing')/dOCUMENTCATEGORY",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("instance('leixing')/dOCUMENTTYPE",xf._g(xf._f('instance',xf._i("leixing")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("instance('archiveOperatorData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('archiveOperatorData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('archiveOperatorData')/oFFICEID",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('archiveOperatorData')/pOSITIONID",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('archiveOperatorData')/dEGREEID",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('archiveOperatorData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('archiveOperatorData')/pOLITICALID",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('archiveOperatorData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('archiveOperatorData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("archiveOperatorData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
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
xf._b("instance('roomData')/rOOMTYPE",xf._g(xf._f('instance',xf._i("roomData")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("instance('roomData')/MANUFACTURE_ID",xf._g(xf._f('instance',xf._i("roomData")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("instance('roomData')/IS_DELEGATE",xf._g(xf._f('instance',xf._i("roomData")),xf._h(false, xf._k("child",xf._j('','IS_DELEGATE')))));	
xf._b("pFILENAME",xf._h(false, xf._k("child",xf._j('','pFILENAME'))));	
xf._b("dOCUMENTCATEGORYCNAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYCNAME'))));	
xf._b("dOCUMENTTYPECNAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPECNAME'))));	
xf._b("aLLOWBORROWNAME",xf._h(false, xf._k("child",xf._j('','aLLOWBORROWNAME'))));	
xf._b("sECRETLEVELCNAME",xf._h(false, xf._k("child",xf._j('','sECRETLEVELCNAME'))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("oPERATORNAME1",xf._h(false, xf._k("child",xf._j('','oPERATORNAME1'))));	
xf._b("rOOMCNAME",xf._h(false, xf._k("child",xf._j('','rOOMCNAME'))));	
xf._b("aRCHIVEDATE",xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE'))));	
xf._b("dESTROYSTATENAME",xf._h(false, xf._k("child",xf._j('','dESTROYSTATENAME'))));	
xf._b("data('dataMain')/pFILENAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pFILENAME')))));	
xf._b("data('dataMain')/fILEVER",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fILEVER')))));	
xf._b("data('dataMain')/lOCATIONCABINETID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lOCATIONCABINETID')))));	
xf._b("data('dataMain')/aRCHIVEDATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aRCHIVEDATE')))));	
xf._b("data('dataMain')/oPERATORNAME1",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','oPERATORNAME1')))));	
xf._b("data('dataMain')/pFILEPROPERTY",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pFILEPROPERTY')))));	
xf._b("data('dataMain')/pFILEDESC",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','pFILEDESC')))));	
xf._b("data('dataMain')/mEMO",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('dataMain')/aLLOWBORROW",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aLLOWBORROW')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('dataMain')/dESTROYSTATE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dESTROYSTATE')))));	
xf._b("data('dataMain')/sECRETLEVEL",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sECRETLEVEL')))));	
xf._b("data('dataMain')/dOCUMENTCATEGORY",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY')))));	
xf._b("DOCUMENT_CATEGORY_CODE",xf._h(false, xf._k("child",xf._j('','DOCUMENT_CATEGORY_CODE'))));	
xf._b("dOCUMENTCATEGORYENAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORYENAME'))));	
xf._b("data('dataMain')/dOCUMENTTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE')))));	
xf._b("DOCUMENT_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','DOCUMENT_TYPE_CODE'))));	
xf._b("dOCUMENTCATEGORY",xf._h(false, xf._k("child",xf._j('','dOCUMENTCATEGORY'))));	
xf._b("dOCUMENTTYPE",xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPE'))));	
xf._b("dOCUMENTTYPEENAME",xf._h(false, xf._k("child",xf._j('','dOCUMENTTYPEENAME'))));	
xf._b("data('dataMain')/aRCHIVEOPERATOR",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','aRCHIVEOPERATOR')))));	
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
xf._b("data('dataMain')/lOCATIONROOMID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','lOCATIONROOMID')))));	
xf._b("DETECTION_ROOM_INFO",xf._h(false, xf._k("child",xf._j('','DETECTION_ROOM_INFO'))));	
xf._b("rOOMTYPE",xf._h(false, xf._k("child",xf._j('','rOOMTYPE'))));	
xf._b("rOOMENAME",xf._h(false, xf._k("child",xf._j('','rOOMENAME'))));	
xf._b("iMAGE",xf._h(false, xf._k("child",xf._j('','iMAGE'))));	
xf._b("MANUFACTURE_ID",xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID'))));	
xf._b("IS_DELEGATE",xf._h(false, xf._k("child",xf._j('','IS_DELEGATE'))));	
xf._b("data('dataMain')/rOOMTYPE",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("rOOMTYPECNAME",xf._h(false, xf._k("child",xf._j('','rOOMTYPECNAME'))));	
xf._b("ROOM_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','ROOM_TYPE_CODE'))));	
xf._b("rOOMTYPEENAME",xf._h(false, xf._k("child",xf._j('','rOOMTYPEENAME'))),'','');	
xf._b("not(call('justep.XData.canDo','dataMain','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dataMain','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/dOCUMENTCATEGORY",null,null,"true()",null,null,null,"'文件科目不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/dOCUMENTTYPE",null,null,"true()",null,null,null,"'文件类型不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/pFILENAME",null,null,"true()",null,null,null,"'文件名称不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/fILEVER",null,null,"true()",null,null,null,"'文件版本不能为空!'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/lOCATIONROOMID",null,null,"true()",null,null,null,"'存档房间不能为空!'");	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/aRCHIVEDATE",null,null,"true()",null,null,null,"'存档日期不能为空!'");	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/aRCHIVEOPERATOR",null,null,"true()",null,null,null,"'存档人不能为空!'");	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/iNPUTOPERATOR",null,null,null,null,null,null,"'记录人不能为空!'");	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/aLLOWBORROW",null,null,"true()",null,null,null,"'可借状态不能为空!'");	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/dESTROYSTATE",null,null,"true()",null,null,null,"'销毁状态不能为空!'");	
xf._c('xf-bind-10','mdDefault',"instance('dataMain')/rOOMTYPE",null,null,"true()",null,null,null,"'房间类型不能为空!'");	
xf._c('xf-bind-11','mdDefault',"instance('dataMain')/sECRETLEVEL",null,null,"true()",null,null,null,"'涉密级别不能为空!'");	
xf._c('xf-bind-12','mdDefault',"instance('dataMain')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('dataMain')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dataMain')/sECRETLEVEL","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dataMain')/lOCATIONROOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dataMain')/aRCHIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdDefault',"instance('dataMain')/aLLOWBORROW","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dataMain')/dESTROYSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('dataMain')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('kemu','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('leixing','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-20','mdDefault',"instance('leixing')/dOCUMENTCATEGORY","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('leixing')/dOCUMENTTYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('sysOperData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-31','mdDefault',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdDefault',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdDefault',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('hrPerData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('hrPerData',null);	
xf._c('xf-bind-34','mdDefault',"instance('hrPerData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdDefault',"instance('hrPerData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdDefault',"instance('hrPerData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdDefault',"instance('hrPerData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdDefault',"instance('hrPerData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdDefault',"instance('hrPerData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdDefault',"instance('hrPerData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdDefault',"instance('hrPerData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdDefault',"instance('hrPerData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('roomtypeData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'mdDefault', evt,false)});	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_605698209 = new xforms.XFMenu('GLOBAL_ID_605698209','context');xf_menu_GLOBAL_ID_605698209.menu.addContextZone('4fc5fc49d192459b9c8e36c6e4c8e62a');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_605698209.hide()});xf_menu_GLOBAL_ID_605698209.menu.setOpenMode('web');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N388031210");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_605698209'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_605698209', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N388031210',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1018271038');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1018271038", "");}));xf._p(justep('GLOBAL_ID_N388031210'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N388031210', evt,false)});	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1018271038');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N388031210'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N388031210', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N82000319',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1498428636');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1498428636", "");}));xf._p(justep('GLOBAL_ID_N82000319'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N82000319', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var archiveOperatorData_part_loaded = false;	
function load_archiveOperatorData_part(callback){if (archiveOperatorData_part_loaded) return;archiveOperatorData_part_loaded = true;	
new xforms.XFInstance2('archiveOperatorData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-22','mdDefault',"instance('archiveOperatorData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('archiveOperatorData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdDefault',"instance('archiveOperatorData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdDefault',"instance('archiveOperatorData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdDefault',"instance('archiveOperatorData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdDefault',"instance('archiveOperatorData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdDefault',"instance('archiveOperatorData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdDefault',"instance('archiveOperatorData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdDefault',"instance('archiveOperatorData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var archiveOperatorData_part_init_loaded = false;	
function load_archiveOperatorData_part_init(){if (archiveOperatorData_part_init_loaded) return;archiveOperatorData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
var roomData_part_loaded = false;	
function load_roomData_part(callback){if (roomData_part_loaded) return;roomData_part_loaded = true;	
new xforms.XFInstance2('roomData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-43','mdDefault',"instance('roomData')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdDefault',"instance('roomData')/MANUFACTURE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdDefault',"instance('roomData')/IS_DELEGATE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var roomData_part_init_loaded = false;	
function load_roomData_part_init(){if (roomData_part_init_loaded) return;roomData_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
new xforms.XFGrid({id:'grdMain',instance:'dataMain',systemColumnsPro:'dOCUMENTCATEGORY,dOCUMENTTYPE,fILEVER,sECRETLEVEL,pFILEPROPERTY,pFILEDESC,lOCATIONROOMID,lOCATIONCABINETID,aRCHIVEOPERATOR,iNPUTOPERATOR,aLLOWBORROW,dESTROYSTATE,mEMO,rOOMTYPE',onInit:null,type:'grid',smartRender:null,delay:false,ids:'pFILENAME,dOCUMENTCATEGORYCNAME,dOCUMENTTYPECNAME,aLLOWBORROWNAME,sECRETLEVELCNAME,oPERATORNAME,oPERATORNAME1,rOOMCNAME,aRCHIVEDATE,dESTROYSTATENAME',headNames:'文件名称,文档科目,文档类型,可借状态,涉密级别,存档人,记录人,存档房间,存档日期,销毁状态',widths:'100,100,100,100,100,100,100,100,100,100',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:',,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'aRCHIVEDATE','yyyy-MM-dd');}});	
var xf_trigger_insertTrigger1=new xforms.XFTrigger('insertTrigger1',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemClick1(event)}));xf._p(justep('insertTrigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'insertTrigger1', evt,false)});	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptP_FILE_NAME','text',xf._q("data('dataMain')/pFILENAME"),null,null,null,null,false,false);	
xf._d('iptFILE_VER','text',xf._q("data('dataMain')/fILEVER"),null,null,null,null,false,false);	
xf._d('iptLOCATION_CABINET_ID','text',xf._q("data('dataMain')/lOCATIONCABINETID"),null,null,null,null,false,false);	
xf._d('iptARCHIVE_DATE','text',xf._q("data('dataMain')/aRCHIVEDATE"),null,null,null,"yyyy-MM-dd",true,false);	
xf._d('iptINPUT_OPERATOR','text',xf._q("data('dataMain')/oPERATORNAME1"),null,null,null,null,true,false);	
xf._d('textarea1','textarea',xf._q("data('dataMain')/pFILEPROPERTY"),null,null,null,null,false,false);	
xf._d('textarea2','textarea',xf._q("data('dataMain')/pFILEDESC"),null,null,null,null,false,false);	
xf._d('textarea3','textarea',xf._q("data('dataMain')/mEMO"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/aLLOWBORROW"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default31"><row id="default33"><cell id="default34">1</cell><cell id="default35">正常</cell></row><row id="default36"><cell id="default38">2</cell><cell id="default40">已外借</cell></row></rows>',inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dESTROYSTATE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default56"><row id="default57"><cell id="default58">1</cell><cell id="default59">正常</cell></row><row id="default60"><cell id="default61">2</cell><cell id="default62">销毁</cell></row></rows>',inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/sECRETLEVEL"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default21"><row id="default24"><cell id="default75">1</cell><cell id="default76">普通</cell></row><row id="default79"><cell id="default80">2</cell><cell id="default83">秘密</cell></row><row id="default84"><cell id="default85">3</cell><cell id="default86">机密</cell></row><row id="default87"><cell id="default88">4</cell><cell id="default89">绝密</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dOCUMENTCATEGORY"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'kemu',columns:'DOCUMENT_CATEGORY_CODE,dOCUMENTCATEGORYCNAME,dOCUMENTCATEGORYENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DOCUMENT_CATEGORY_CODE,dOCUMENTCATEGORYENAME',valueColumn:'DOCUMENT_CATEGORY_CODE',labelColumn:'dOCUMENTCATEGORYCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/dOCUMENTTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'leixing',columns:'DOCUMENT_TYPE_CODE,dOCUMENTTYPECNAME,dOCUMENTCATEGORY,dOCUMENTTYPE,dOCUMENTTYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DOCUMENT_TYPE_CODE,dOCUMENTCATEGORY,dOCUMENTTYPE,dOCUMENTTYPEENAME',valueColumn:'DOCUMENT_TYPE_CODE',labelColumn:'dOCUMENTTYPECNAME',extColumn:null,labels:',,,,',aligns:',,,,',types:'ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivity.gridSelect5Dropdown',onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/aRCHIVEOPERATOR"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'archiveOperatorData',columns:'HR_BASE_INFO,oPERATORNAME,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'HR_BASE_INFO,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',valueColumn:'HR_BASE_INFO',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/lOCATIONROOMID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'roomData',columns:'DETECTION_ROOM_INFO,rOOMCNAME,rOOMTYPE,rOOMENAME,iMAGE,mEMO,MANUFACTURE_ID,IS_DELEGATE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_ROOM_INFO,rOOMTYPE,rOOMENAME,iMAGE,mEMO,MANUFACTURE_ID,IS_DELEGATE',valueColumn:'DETECTION_ROOM_INFO',labelColumn:'rOOMCNAME',extColumn:null,labels:',,,,,,,',aligns:',,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'mainActivity.gridSelect7Dropdown',onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/rOOMTYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'roomtypeData',columns:'ROOM_TYPE_CODE,rOOMTYPECNAME,rOOMTYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'ROOM_TYPE_CODE,rOOMTYPEENAME',valueColumn:'ROOM_TYPE_CODE',labelColumn:'rOOMTYPECNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default15"><row id="default39"><cell id="default107">1</cell><cell id="default108">会议室</cell></row><row id="default109"><cell id="default110">2</cell><cell id="default111">检测室</cell></row><row id="default112"><cell id="default113">3</cell><cell id="default114">办公室</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		