
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
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);	xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
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

	var ids=[{id:'d8e489f14223477a99c02f3163808350', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'614f5dc078e54a82bd41122342325592', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'e6dd4517310045e49ae811cc1473f169', name:'xforms:label'}]},{id:'a4385fab5a3943f3a7b94078e9a3a458', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grdMaster', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMore1', name:'xforms:trigger', children:[{id:'8712d651a18d44f7801400962d1cb1eb', name:'xforms:label'}]},{id:'saveMore', name:'xforms:trigger', children:[{id:'1bfcd61ab15149edb8714afb6c8e1426', name:'xforms:label'}]}]},{id:'iptINDEXIDCNAME', name:'xforms:input'},{id:'iptINDEXIDDEFINITION', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default34', name:'xforms:value'}]},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'xuiLabel4', name:'xforms:label'},{id:'default48', name:'xforms:value'}]},{id:'textarea1', name:'xforms:textarea'},{id:'tbsDetail', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMore', name:'xforms:trigger', children:[{id:'ff6da81bd43f4d5ba9840f6f21dcb50d', name:'xforms:label'}]},{id:'saveMore1', name:'xforms:trigger', children:[{id:'dd9522fe1d2b43e89bcd65b24ffbb5ac', name:'xforms:label'}]},{id:'remove2', name:'xforms:trigger', children:[{id:'52d9608fb3d347c2853fcaf638ef4cbc', name:'xforms:label'}]}]},{id:'grdDetail', name:'xforms:grid'}]}]},{id:'filter-dialog-a2565f21-73f2-47e7-8ca9-868c27ea692d', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1314390503', name:'xforms:dialog'}]},{id:'filter-pattern-83e49d2c-3549-460d-88c2-b433c86dcb70', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'6a695192a9814e7c8eee7c2b4727f6b5', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_883030108', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1515282350', name:'xforms:dialog'}]},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'xuiLabel5', name:'xforms:label'},{id:'default66', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'xuiLabel6', name:'xforms:label'},{id:'default68', name:'xforms:value'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','614f5dc078e54a82bd41122342325592');xf._a(null,'removeTrigger');xf._a('removeTrigger','e6dd4517310045e49ae811cc1473f169');xf._a(null,'grdMaster');xf._a(null,'insertMore1');xf._a('insertMore1','8712d651a18d44f7801400962d1cb1eb');xf._a(null,'saveMore');xf._a('saveMore','1bfcd61ab15149edb8714afb6c8e1426');xf._a(null,'iptINDEXIDCNAME');xf._a(null,'iptINDEXIDDEFINITION');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel3');xf._a('gridSelect1','default35');xf._a(null,'gridSelect2');xf._a('gridSelect2','xuiLabel4');xf._a('gridSelect2','default49');xf._a(null,'textarea1');xf._a(null,'insertMore');xf._a('insertMore','ff6da81bd43f4d5ba9840f6f21dcb50d');xf._a(null,'saveMore1');xf._a('saveMore1','dd9522fe1d2b43e89bcd65b24ffbb5ac');xf._a(null,'remove2');xf._a('remove2','52d9608fb3d347c2853fcaf638ef4cbc');xf._a(null,'grdDetail');xf._a(null,'gridSelect3');xf._a('gridSelect3','xuiLabel5');xf._a('gridSelect3','default67');xf._a(null,'gridSelect4');xf._a('gridSelect4','xuiLabel6');xf._a('gridSelect4','default69');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataDetail')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("true()",xf._f('true'));	
xf._b("'应用检测对象类别不能为空!'",xf._i("应用检测对象类别不能为空!"));	
xf._b("instance('dataDetail')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("'应用检测对象不能为空!'",xf._i("应用检测对象不能为空!"));	
xf._b("instance('dataDetail')/iNDEXID",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','iNDEXID')))));	
xf._b("instance('dataDetail')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('dataDetail')/dEVICETYPE",xf._g(xf._f('instance',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('jcfmData')/dETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("jcfmData")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("instance('jcfmData')/dETECTIONRANGEID",xf._g(xf._f('instance',xf._i("jcfmData")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("instance('jcdxdyData')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("jcdxdyData")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('jcdxdyData')/dEVICETYPE",xf._g(xf._f('instance',xf._i("jcdxdyData")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('zbsjD')/iNDEXSYSTEMNO",xf._g(xf._f('instance',xf._i("zbsjD")),xf._h(false, xf._k("child",xf._j('','iNDEXSYSTEMNO')))));	
xf._b("instance('zbsjD')/bUSINESSID",xf._g(xf._f('instance',xf._i("zbsjD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('zbsjD')/iNDEXID",xf._g(xf._f('instance',xf._i("zbsjD")),xf._h(false, xf._k("child",xf._j('','iNDEXID')))));	
xf._b("instance('zbsjD')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("zbsjD")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('zbsjD')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("zbsjD")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('dataMaster')/iNDEXIDCNAME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEXIDCNAME')))));	
xf._b("'指标名称不能为空!'",xf._i("指标名称不能为空!"));	
xf._b("instance('dataMaster')/iNDEXIDDEFINITION",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEXIDDEFINITION')))));	
xf._b("'指标定义不能为空!'",xf._i("指标定义不能为空!"));	
xf._b("instance('dataMaster')/dETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("'指标检测方面列别不能为空!'",xf._i("指标检测方面列别不能为空!"));	
xf._b("instance('dataMaster')/dETECTIONRANGEID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("'检测方面不能为空!'",xf._i("检测方面不能为空!"));	
xf._b("instance('dataMaster')/DETECTION_RANGE_TYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE')))));	
xf._b("recCC",xf._h(false, xf._k("child",xf._j('','recCC'))));	
xf._b("iNDEXIDCNAME",xf._h(false, xf._k("child",xf._j('','iNDEXIDCNAME'))));	
xf._b("iNDEXIDDEFINITION",xf._h(false, xf._k("child",xf._j('','iNDEXIDDEFINITION'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("rANGEIDCNAME",xf._h(false, xf._k("child",xf._j('','rANGEIDCNAME'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("data('dataMaster')/iNDEXIDCNAME",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEXIDCNAME')))));	
xf._b("data('dataMaster')/iNDEXIDDEFINITION",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEXIDDEFINITION')))));	
xf._b("data('dataMaster')/dETECTIONRANGETYPE",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("DETECTION_RANGE_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE'))));	
xf._b("dETECTIONRANGEENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEENAME'))));	
xf._b("data('dataMaster')/dETECTIONRANGEID",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("dETECTIONRANGEID",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID'))));	
xf._b("dETECTIONRANGETYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE'))));	
xf._b("rANGEIDENAME",xf._h(false, xf._k("child",xf._j('','rANGEIDENAME'))));	
xf._b("data('dataMaster')/mEMO",xf._g(xf._f('data',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("recC",xf._h(false, xf._k("child",xf._j('','recC'))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("not(call('justep.XData.canDo','dataMaster','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMaster','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMaster"),xf._i("Last"))));	
xf._b("data('dataDetail')/aPPLYFOROBJECT",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("data('dataDetail')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('dataDetail')/aPPLYFORDEVICETYPE",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("data('dataDetail')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("dataDetail")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('select', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataDetail','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','mdDefault',"instance('dataDetail')/aPPLYFOROBJECT",null,null,"true()",null,null,null,"'应用检测对象类别不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataDetail')/aPPLYFORDEVICETYPE",null,null,"true()",null,null,null,"'应用检测对象不能为空!'");	
xf._c('xf-bind-2','mdDefault',"instance('dataDetail')/iNDEXID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdDefault',"instance('dataDetail')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataDetail')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataDetail')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataDetail')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('jcfmdylbData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('jcfmdylbData',null);	
new xforms.XFInstance2('jcfmData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('jcfmData',null);	
xf._c('xf-bind-7','mdDefault',"instance('jcfmData')/dETECTIONRANGETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('jcfmData')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('jcdxdylbData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('jcdxdyData','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-9','mdDefault',"instance('jcdxdyData')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('jcdxdyData')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('zbsjD','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('zbsjD',null);	
xf._c('xf-bind-11','mdDefault',"instance('zbsjD')/iNDEXSYSTEMNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('zbsjD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdDefault',"instance('zbsjD')/iNDEXID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('zbsjD')/aPPLYFOROBJECT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('zbsjD')/aPPLYFORDEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dataMaster','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-16','mdDefault',"instance('dataMaster')/iNDEXIDCNAME",null,null,"true()",null,null,null,"'指标名称不能为空!'");	
xf._c('xf-bind-17','mdDefault',"instance('dataMaster')/iNDEXIDDEFINITION",null,null,"true()",null,null,null,"'指标定义不能为空!'");	
xf._c('xf-bind-18','mdDefault',"instance('dataMaster')/dETECTIONRANGETYPE",null,null,"true()",null,null,null,"'指标检测方面列别不能为空!'");	
xf._c('xf-bind-19','mdDefault',"instance('dataMaster')/dETECTIONRANGEID",null,null,"true()",null,null,null,"'检测方面不能为空!'");	
xf._c('xf-bind-20','mdDefault',"instance('dataMaster')/dETECTIONRANGETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('dataMaster')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdDefault',"instance('dataMaster')/DETECTION_RANGE_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdDefault',"instance('dataMaster')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N1314390503',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1474900501');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1474900501", "");}));xf._p(justep('GLOBAL_ID_N1314390503'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_N1314390503', evt,false)});	
var xf_menu_GLOBAL_ID_883030108 = new xforms.XFMenu('GLOBAL_ID_883030108','context');xf_menu_GLOBAL_ID_883030108.menu.addContextZone('6a695192a9814e7c8eee7c2b4727f6b5');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_883030108.hide()});xf_menu_GLOBAL_ID_883030108.menu.setOpenMode('web');	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1515282350");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_883030108'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_14,'GLOBAL_ID_883030108', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1515282350',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N556024762');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N556024762", "");}));xf._p(justep('GLOBAL_ID_N1515282350'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_15,'GLOBAL_ID_N1515282350', evt,false)});	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N556024762');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1515282350'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_16,'GLOBAL_ID_N1515282350', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataDetail')/aPPLYFOROBJECT"),labelRef:xf._q("data('dataDetail')/dETECTIONOBJECTCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'jcdxdylbData',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'indexActivity.gridSelect3Closeup'});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataDetail')/aPPLYFORDEVICETYPE"),labelRef:xf._q("data('dataDetail')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'jcdxdyData',columns:'dEVICETYPECNAME,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'indexActivity.gridSelect4Closeup'});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.newItemClick(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'insertTrigger', evt,false)});	
var xf_trigger_removeTrigger=new xforms.XFTrigger('removeTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.assetDelete(event)}));xf._p(justep('removeTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'removeTrigger', evt,false)});	
new xforms.XFGrid({id:'grdMaster',instance:'dataMaster',systemColumnsPro:'dETECTIONRANGETYPE,dETECTIONRANGEID,DETECTION_RANGE_TYPE',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCC,iNDEXIDCNAME,iNDEXIDDEFINITION,dETECTIONRANGECNAME,rANGEIDCNAME,mEMO',headNames:'#master_checkbox,指标名称,指标定义,检测方面类别,检测方面,备注',widths:'30,135,135,143,148,143',types:'checkbox,ro,ro,ro,ro,ed',hiddenColumns:'mEMO',aligns:'center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'indexActivity.grdMasterRowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_insertMore1=new xforms.XFTrigger('insertMore1',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.insertMore1Click(event)}));xf._p(justep('insertMore1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'insertMore1', evt,false)});	
var xf_trigger_saveMore=new xforms.XFTrigger('saveMore',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.saveMore(event)}));xf._p(justep('saveMore'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'saveMore', evt,false)});	
xforms.load_parts('vDetail');	
var xf_trigger_insertMore=new xforms.XFTrigger('insertMore',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.inserMore(event)}));xf._p(justep('insertMore'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_10,'insertMore', evt,false)});	
var xf_trigger_saveMore1=new xforms.XFTrigger('saveMore1',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.saveMore1(event)}));xf._p(justep('saveMore1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_11,'saveMore1', evt,false)});	
var xf_trigger_remove2=new xforms.XFTrigger('remove2',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false);	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.setDelete(event)}));xf._p(justep('remove2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_12,'remove2', evt,false)});	
new xforms.XFGrid({id:'grdDetail',instance:'dataDetail',systemColumnsPro:'iNDEXID,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,DETECTION_OBJECT_TYPE,DEVICE_TYPE_CODE,dEVICETYPE',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recC,dETECTIONOBJECTCNAME,dEVICETYPECNAME',headNames:'#master_checkbox,应用检测对象类别,应用检测对象',widths:'30,173,207',types:'checkbox,select,select',hiddenColumns:'',aligns:'center,,',serverSort:true,sorts:'na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColEditor(null,'dETECTIONOBJECTCNAME','gridSelect3');this.grid.bindColEditor(null,'dEVICETYPECNAME','gridSelect4');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptINDEXIDCNAME','text',xf._q("data('dataMaster')/iNDEXIDCNAME"),null,null,null,null,false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptINDEXIDCNAME'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action1,'iptINDEXIDCNAME', evt,false)});	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.iptINDEXIDCNAMEFocus(event)}));xf._p(justep('iptINDEXIDCNAME'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action4,'iptINDEXIDCNAME', evt,false)});	
xf._d('iptINDEXIDDEFINITION','text',xf._q("data('dataMaster')/iNDEXIDDEFINITION"),null,null,null,null,false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('iptINDEXIDDEFINITION'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action2,'iptINDEXIDDEFINITION', evt,false)});	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.iptINDEXIDDEFINITIONFocus(event)}));xf._p(justep('iptINDEXIDDEFINITION'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action5,'iptINDEXIDDEFINITION', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/dETECTIONRANGETYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'jcfmdylbData',columns:'DETECTION_RANGE_TYPE,dETECTIONRANGECNAME,dETECTIONRANGEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_RANGE_TYPE,dETECTIONRANGEENAME',valueColumn:'DETECTION_RANGE_TYPE',labelColumn:'dETECTIONRANGECNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'indexActivity.gridSelect1Closeup'});	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMaster')/dETECTIONRANGEID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'jcfmData',columns:'rANGEIDCNAME,dETECTIONRANGETYPE,dETECTIONRANGEID,rANGEIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONRANGETYPE,dETECTIONRANGEID,rANGEIDENAME',valueColumn:'dETECTIONRANGEID',labelColumn:'rANGEIDCNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'indexActivity.gridSelect2Closeup'});	
xf._d('textarea1','textarea',xf._q("data('dataMaster')/mEMO"),null,null,null,null,false,false);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){(event)}));xf._p(justep('textarea1'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action3,'textarea1', evt,false)});	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){indexActivity.textarea1Focus(event)}));xf._p(justep('textarea1'),"DOMFocusIn",null,function(evt) { xforms.run(xf_action_action6,'textarea1', evt,false)});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		