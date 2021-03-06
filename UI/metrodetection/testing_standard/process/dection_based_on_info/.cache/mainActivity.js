
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
			    this.__attribute_node = this.getElementByXblID('attribute');this.__limit = 20;
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

	var ids=[{id:'4d88c6c7d28447b1a86f90ef495c07a7', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'683bfda112904eb786247333457385a9', name:'xforms:label'}]},{id:'removeTrigger', name:'xforms:trigger', children:[{id:'b0df1597c6764941a075f7da22962eab', name:'xforms:label'}]},{id:'b4383577f15c4a3388f95135561967a3', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grid1', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMain2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTr', name:'xforms:trigger', children:[{id:'42b7ff16c817408ea984dba965132db8', name:'xforms:label'}]},{id:'saveTr', name:'xforms:trigger', children:[{id:'5f47409879cc4abc8cea2f8fe0053bab', name:'xforms:label'}]}]},{id:'iptDECTIONBASEDONNAME', name:'xforms:input'},{id:'iptVALIDDATETIME', name:'xforms:input'},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'xuiLabel7', name:'xforms:label'},{id:'default49', name:'xforms:value'}]},{id:'grid2', name:'xforms:grid'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertSubTr', name:'xforms:trigger', children:[{id:'79a9af9bbb894cc7973b8aa53b4aa3f0', name:'xforms:label'}]},{id:'removeDetailTrigger', name:'xforms:trigger', children:[{id:'184ce91df50d48c7bfa32ebf10f9651e', name:'xforms:label'}]},{id:'0779d24b82e2449991054706ceab15ce', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'dectionStandardWD', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]},{id:'filter-dialog-c008deda-59f9-4645-9927-a340d9f34f4b', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1321287669', name:'xforms:dialog'}]},{id:'filter-pattern-0fd42187-99c3-4aa2-b60a-373e236a5742', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'46ad028d550242a58a2d9ed0ad6d0e4c', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N2027365215', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1962037748', name:'xforms:dialog'}]},{id:'filter-pattern-451564ab-1b4b-484a-ba8f-445f0858f878', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'1747e196d6a64c89aac94307b14f6b97', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N2134992722', name:'xforms:menu'}]},{id:'GLOBAL_ID_415386954', name:'xforms:dialog'}]},{id:'filter-dialog-7936b5bf-c543-4c9d-8b20-5d2a03564301', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_2110004232', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','683bfda112904eb786247333457385a9');xf._a(null,'removeTrigger');xf._a('removeTrigger','b0df1597c6764941a075f7da22962eab');xf._a(null,'grid1');xf._a(null,'insertTr');xf._a('insertTr','42b7ff16c817408ea984dba965132db8');xf._a(null,'saveTr');xf._a('saveTr','5f47409879cc4abc8cea2f8fe0053bab');xf._a(null,'iptDECTIONBASEDONNAME');xf._a(null,'iptVALIDDATETIME');xf._a(null,'gridSelect4');xf._a('gridSelect4','xuiLabel7');xf._a('gridSelect4','default50');xf._a(null,'grid2');xf._a(null,'insertSubTr');xf._a('insertSubTr','79a9af9bbb894cc7973b8aa53b4aa3f0');xf._a(null,'removeDetailTrigger');xf._a('removeDetailTrigger','184ce91df50d48c7bfa32ebf10f9651e');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/vALIDDATETIME",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','vALIDDATETIME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'依据生效时间不能为空!'",xf._i("依据生效时间不能为空!"));	
xf._b("instance('dataMain')/vALIDSTATE1",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE1')))));	
xf._b("instance('dataMain')/version1",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','version1')))));	
xf._b("instance('dataMain')/VALID_STATE_CODE",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','VALID_STATE_CODE')))));	
xf._b("instance('saDocnodeD')/sSize",xf._g(xf._f('instance',xf._i("saDocnodeD")),xf._h(false, xf._k("child",xf._j('','sSize')))));	
xf._b("instance('saDocnodeD')/sCreateTime",xf._g(xf._f('instance',xf._i("saDocnodeD")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('saDocnodeD')/sLastWriteTime",xf._g(xf._f('instance',xf._i("saDocnodeD")),xf._h(false, xf._k("child",xf._j('','sLastWriteTime')))));	
xf._b("instance('saDocnodeD')/sDocLiveVersionID",xf._g(xf._f('instance',xf._i("saDocnodeD")),xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID')))));	
xf._b("instance('saDocnodeD')/sFinishTime",xf._g(xf._f('instance',xf._i("saDocnodeD")),xf._h(false, xf._k("child",xf._j('','sFinishTime')))));	
xf._b("instance('saDocnodeD')/sFlag",xf._g(xf._f('instance',xf._i("saDocnodeD")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('saDocnodeD')/version",xf._g(xf._f('instance',xf._i("saDocnodeD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dectionStandardD')/DECTION_BASED_ON_ID",xf._g(xf._f('instance',xf._i("dectionStandardD")),xf._h(false, xf._k("child",xf._j('','DECTION_BASED_ON_ID')))));	
xf._b("instance('dectionStandardD')/PUBLISH_DATE",xf._g(xf._f('instance',xf._i("dectionStandardD")),xf._h(false, xf._k("child",xf._j('','PUBLISH_DATE')))));	
xf._b("instance('dectionStandardD')/DECTION_STANDARD_TYPE",xf._g(xf._f('instance',xf._i("dectionStandardD")),xf._h(false, xf._k("child",xf._j('','DECTION_STANDARD_TYPE')))));	
xf._b("instance('dectionStandardD')/CITY_CODE",xf._g(xf._f('instance',xf._i("dectionStandardD")),xf._h(false, xf._k("child",xf._j('','CITY_CODE')))));	
xf._b("instance('dectionSchemeD')/bUSINESSID",xf._g(xf._f('instance',xf._i("dectionSchemeD")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('dectionSchemeD')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("dectionSchemeD")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("instance('dectionSchemeD')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("dectionSchemeD")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("instance('dectionSchemeD')/vALIDSTATE",xf._g(xf._f('instance',xf._i("dectionSchemeD")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("instance('dectionSchemeD')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("dectionSchemeD")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("dECTIONBASEDONNAME",xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME'))));	
xf._b("vALIDDATETIME",xf._h(false, xf._k("child",xf._j('','vALIDDATETIME'))));	
xf._b("vALIDSTATECNAME",xf._h(false, xf._k("child",xf._j('','vALIDSTATECNAME'))));	
xf._b("version1",xf._h(false, xf._k("child",xf._j('','version1'))));	
xf._b("data('dataMain')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("data('dataMain')/vALIDDATETIME",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','vALIDDATETIME')))));	
xf._b("data('dataMain')/vALIDSTATE1",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE1')))));	
xf._b("VALID_STATE_CODE",xf._h(false, xf._k("child",xf._j('','VALID_STATE_CODE'))));	
xf._b("vALIDSTATEENAME",xf._h(false, xf._k("child",xf._j('','vALIDSTATEENAME'))));	
xf._b("calCheckBox",xf._h(false, xf._k("child",xf._j('','calCheckBox'))));	
xf._b("calSeq",xf._h(false, xf._k("child",xf._j('','calSeq'))));	
xf._b("sDocName",xf._h(false, xf._k("child",xf._j('','sDocName'))));	
xf._b("DECTION_STANDARD_ID",xf._h(false, xf._k("child",xf._j('','DECTION_STANDARD_ID'))));	
xf._b("cITYCODECNAME",xf._h(false, xf._k("child",xf._j('','cITYCODECNAME'))));	
xf._b("sTANDARDTYPENAME",xf._h(false, xf._k("child",xf._j('','sTANDARDTYPENAME'))));	
xf._b("PUBLISH_DATE",xf._h(false, xf._k("child",xf._j('','PUBLISH_DATE'))));	
xf._b("not(call('justep.XData.canDo','dataMain','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')/vALIDDATETIME",null,null,"true()",null,null,null,"'依据生效时间不能为空!'");	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/vALIDSTATE1",null,null,"true()",null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/vALIDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/vALIDSTATE1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/version1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/VALID_STATE_CODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('saDocnodeD','mdDefault',null,null,null,null,null,null,null,null,'calSeq,calCheck',null,'whereVersion');	
xf._c('xf-bind-6','mdDefault',"instance('saDocnodeD')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('saDocnodeD')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('saDocnodeD')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('saDocnodeD')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdDefault',"instance('saDocnodeD')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdDefault',"instance('saDocnodeD')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('saDocnodeD')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dectionStandardD','mdDefault',null,null,null,null,null,null,null,null,'calCheckBox,calSeq',null,'whereAll');	
xf._c('xf-bind-13','mdDefault',"instance('dectionStandardD')/DECTION_BASED_ON_ID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdDefault',"instance('dectionStandardD')/PUBLISH_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdDefault',"instance('dectionStandardD')/DECTION_STANDARD_TYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdDefault',"instance('dectionStandardD')/CITY_CODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('dectionSchemeD','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('dectionSchemeD',null);	
xf._c('xf-bind-17','mdDefault',"instance('dectionSchemeD')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdDefault',"instance('dectionSchemeD')/dECTIONBASEDONID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdDefault',"instance('dectionSchemeD')/mAKEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdDefault',"instance('dectionSchemeD')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdDefault',"instance('dectionSchemeD')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_1321287669',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1253188110');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1253188110", "");}));xf._p(justep('GLOBAL_ID_1321287669'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_1321287669', evt,false)});	
var xf_menu_GLOBAL_ID_N2027365215 = new xforms.XFMenu('GLOBAL_ID_N2027365215','context');xf_menu_GLOBAL_ID_N2027365215.menu.addContextZone('46ad028d550242a58a2d9ed0ad6d0e4c');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N2027365215.hide()});xf_menu_GLOBAL_ID_N2027365215.menu.setOpenMode('web');	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1962037748");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N2027365215'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_N2027365215', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1962037748',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_876292446');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";						}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_876292446", "");}));xf._p(justep('GLOBAL_ID_N1962037748'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N1962037748', evt,false)});	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_876292446');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1962037748'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N1962037748', evt,false)});	
var xf_menu_GLOBAL_ID_N2134992722 = new xforms.XFMenu('GLOBAL_ID_N2134992722','context');xf_menu_GLOBAL_ID_N2134992722.menu.addContextZone('1747e196d6a64c89aac94307b14f6b97');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N2134992722.hide()});xf_menu_GLOBAL_ID_N2134992722.menu.setOpenMode('web');	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_415386954");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N2134992722'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_N2134992722', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_415386954',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1206120314');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1206120314", "");}));xf._p(justep('GLOBAL_ID_415386954'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_415386954', evt,false)});	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1206120314');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_415386954'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_415386954', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_2110004232',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N467083448');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N467083448", "");}));xf._p(justep('GLOBAL_ID_2110004232'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_13,'GLOBAL_ID_2110004232', evt,false)});	
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
new xforms.XFGrid({id:'grid1',instance:'dataMain',systemColumnsPro:'vALIDSTATE1,VALID_STATE_CODE',onInit:null,type:'grid',smartRender:20,delay:false,ids:'recCB,dECTIONBASEDONNAME,vALIDDATETIME,vALIDSTATECNAME,version1',headNames:'#master_checkbox,检测依据文件名称,依据生效时间,依据有效状态,版本',widths:'30,118,126,111,100',types:'checkbox,ro,ro,ro,ed',hiddenColumns:'',aligns:'center,,,,',serverSort:true,sorts:'na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.grdMainRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'vALIDDATETIME','yyyy-MM-dd');}});	
var xf_trigger_insertTr=new xforms.XFTrigger('insertTr',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newInsertClick(event)}));xf._p(justep('insertTr'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'insertTr', evt,false)});	
var xf_trigger_saveTr=new xforms.XFTrigger('saveTr',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.saveTrClick(event)}));xf._p(justep('saveTr'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'saveTr', evt,false)});	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('iptDECTIONBASEDONNAME','text',xf._q("data('dataMain')/dECTIONBASEDONNAME"),null,null,null,null,false,false);	
xf._d('iptVALIDDATETIME','text',xf._q("data('dataMain')/vALIDDATETIME"),null,null,null,"yyyy-MM-dd",false,false);	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/vALIDSTATE1"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'vALIDSTATECNAME,VALID_STATE_CODE,vALIDSTATEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'VALID_STATE_CODE,vALIDSTATEENAME',valueColumn:'VALID_STATE_CODE',labelColumn:'vALIDSTATECNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFGrid({id:'grid2',instance:'dectionStandardD',systemColumnsPro:'DECTION_BASED_ON_ID,SID,DECTION_STANDARD_ON_INFO,DECTION_STANDARD_TYPE,CITY_CODE',onInit:null,type:'grid',smartRender:20,delay:false,ids:'calCheckBox,calSeq,sDocName,DECTION_STANDARD_ID,cITYCODECNAME,sTANDARDTYPENAME,PUBLISH_DATE',headNames:'#master_checkbox,序号,文件名称,依赖标准编号,依赖标准所属城市,依赖标准类型,依赖标准发布时间',widths:'44,30,100,115,118,100,130',types:'checkbox,cntr,ed,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_insertSubTr=new xforms.XFTrigger('insertSubTr',null,"/UI/system/images/standardToolbar/standard/insert.gif","/UI/system/images/standardToolbar/standard/un_insert.gif",false,false);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.InsertSubClick(event)}));xf._p(justep('insertSubTr'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'insertSubTr', evt,false)});	
var xf_trigger_removeDetailTrigger=new xforms.XFTrigger('removeDetailTrigger',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.removeDetailClick(event)}));xf._p(justep('removeDetailTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'removeDetailTrigger', evt,false)});	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		