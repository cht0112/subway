
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/filter.xbl.xml#gridFilter"] = _xbl_JSClassDefine_gridFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"] = _xbl_JSClassDefine_extDateFilter;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_gridFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_gridFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.GridFilter(this));
				}
			}));

_xbl_JSClassDefine_gridFilter.prototype.ClassName='_xbl_JSClassDefine_gridFilter';
_xbl_JSClassDefine_gridFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_gridFilter',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'53b0017a002e74a330af0e5be95b0f69'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'2485fcf58bea2e58e6a397430f41ff0c'};
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

_xbl_JSClassDefine_menu.prototype.ClassName='_xbl_JSClassDefine_menu';
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'f6f7c04024badf4fbeb3563cfd730120'};
function _xbl_JSClassDefine_tableLayout(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_tableLayout.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			   	if(!this.domNode.id || this.domNode.id ==""){
					this.domNode.id = (new UUID()).valueOf();
			   	}
			   	var id = this.domNode.id; 
			   	this.el = $("#" + id);
			   	this.trs = $(">tbody tr", this.el);
			   	this.spacing = this._getSpace();
			   	/*为了兼容ie789, cellpadding都强设为0*/
			   	this.el.attr("cellpadding", "0");
			   	$(">tbody>tr>td", this.el).css("padding", "0");
			   	this.padding = this._getPadding();
		   		this.onWindowResize();
			},
			_getSpace : function(){
				/*默认2是为了解决ie下无法获得默认值的问题*/
				var spacing = this.el.attr("cellspacing") || (!justep.Browser.IE?this.el.css("border-spacing"):null) || "2px";
			   	spacing = spacing.split(" ");
			   	return parseInt(spacing[1] || spacing[0]) || 0;  
			},
			_getPadding : function(){
				/*默认是为了解决ie下无法获得默认值的问题，ie7默认是2px,ie89默认是1px*/
				var ret = parseInt(this.el.attr("cellpadding"));
				return ret || (ret===0 ? 0 : (justep.Browser.IE7 ? "2" : "1")); 
			},
			onWindowResize : function(){
				if(!justep.Browser.IE){
					$(">tbody >tr", this.el).each(function(index, tr){
						var td = $(tr.children[0]);
						tr = $(tr);
						var h = tr.attr('height') || tr.get(0).style["height"],
							hd = td.attr('height') || td.get(0).style["height"];
						if((h == null || h == '') && (hd == null || hd == '')){
							td.get(0).height = '100%';
							td.get(0).style["height"] = '100%';
						}
					});
					return;
				}	
				var el = this.el;
				if(el.parent().get(0).tagName.toLowerCase()=="td"){
					el = el.parent();
				}
				var h = el.height(),that = this,
					a = [], b = this.spacing*(this.trs.length + 1);
				this.trs.each(function(index, tr){
					var td = $(tr.children[0]);
					tr = $(tr);
					var h = tr.get(0).height || tr.get(0).style["height"],
						hd = td.get(0).height || td.get(0).style["height"];
					/*为了兼容已有应用*/ 
					if(h=='100%') {
						h=null;
						tr.get(0).height = null;
						tr.get(0).style["height"] = null;
					}
					if(hd=='100%') {
						hd=null;
						td.get(0).height = null;
						td.get(0).style["height"] = null;
					}
					if(!tr.attr("noheight") && ((h!=null && h!=''&& h!='auto') || (hd!=null && hd!=''&& hd!='auto'))){
						var mh = Math.max(
							parseInt(tr.get(0).height)||0,
							parseInt(tr.get(0).style["height"])||0,
							(parseInt(td.get(0).height) + that.padding*2)||0,
							(parseInt(td.get(0).style["height"]) + that.padding*2)||0
						);
						b += mh;
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));/*这是防止td被内容撑开*/
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}	 
					}else{
						tr.attr("noheight", true);/*noheight这个笔记是为了解决ie7执行多次resize的问题*/
						a.push(tr);
					}
				});
				if(a[0]){
					a[0].get(0).setAttribute("height", (h-b)+"px");
					if(a[0].get(0).children[0]){
						/*第一个td*/
						var mh = h-b-this.padding*2; 
						a[0].get(0).children[0].setAttribute("height", (h-b-this.padding*2)+"px");
						var td = $(a[0].get(0).children[0]);
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			},   	
			resize2 : function(){
				var h = this.el.parent().height(),that = this,
					w = this.el.parent().width(),
					a = [], b = this.spacing*(this.trs.length + 1);
				this.el.width(w);
				this.trs.each(function(index, tr){
					var td = $(tr.children[0]);
					tr = $(tr);
					var h = tr.get(0).style["height"] || tr.attr('height'),
						hd = td.get(0).style["height"] || tr.attr('height');
					/*为了兼容已有应用*/ 
					if(h=='100%') h=null;
					if(hd=='100%') hd=null;
					if(!tr.attr("noheight") && ((h!=null && h!=''&& h!='auto') || (hd!=null && hd!=''&& hd!='auto'))){
						b += tr.outerHeight();
						/*这是防止td被内容撑开*/
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(td.height()));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(td.height());
						}	 
					}else{
						tr.attr("noheight", true);/*noheight这个笔记是为了解决ie7执行多次resize的问题*/
						a.push(tr);
					}
				});
				if(a[0]){
					a[0].get(0).setAttribute("height", (h-b)+"px");
					/*第一个td*/
					var td;
					if(td = a[0].get(0).children[0]){
						var mh = h-b-this.padding*2; 
						td.setAttribute("height", mh+"px");
						td = $(td);
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));
							td.attr("wraped", true);			}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			}   	
		}));

_xbl_JSClassDefine_tableLayout.prototype.ClassName='_xbl_JSClassDefine_tableLayout';
_xbl_JSClassDefine_tableLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_tableLayout',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'2933dc6c74fcbe06d55a2c27c284b56c'};
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

_xbl_JSClassDefine_bizDataFilterPattern.prototype.ClassName='_xbl_JSClassDefine_bizDataFilterPattern';
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'d59c6a5f710bec19fa07bbb514bff782'};
function _xbl_JSClassDefine_extDateFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_extDateFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.ExtDateFilter(this));
				}
			}));

_xbl_JSClassDefine_extDateFilter.prototype.ClassName='_xbl_JSClassDefine_extDateFilter';
_xbl_JSClassDefine_extDateFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_extDateFilter',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'4397c8e1a296b4fa2823f083719d2f79'};
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
				if (this.__dragObject) {					this.__dragObject.obj.style.top = posY - 0 + 4;
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

_xbl_JSClassDefine_toolbars.prototype.ClassName='_xbl_JSClassDefine_toolbars';
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'a8109345b85888a277e6a3408d8e9aa6'};
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

_xbl_JSClassDefine_bizDataFilterDialog.prototype.ClassName='_xbl_JSClassDefine_bizDataFilterDialog';
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'c42694d676ae17ddff0cf32e1880fa10'};
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

_xbl_JSClassDefine_pageNavigator.prototype.ClassName='_xbl_JSClassDefine_pageNavigator';
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'30dbb15b53321b2a93045be094df27ab',time:1528079671},m:'a733d1b9b845e208d674fcbaaea1edf0'};
	var ids=[{id:'4b747e02f2b745bfa776278ad88e69c4', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrAssetCard', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insert', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'bc81d128177b48598530f473058eda5e', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'trgClear', name:'xforms:trigger', children:[{id:'xuiLabel5', name:'xforms:label'}]}]},{id:'extDateFilter1', name:'/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter', children:[{id:'extDateFilter1_select_874742148', name:'xforms:gridselect1', children:[{id:'a6f749371ea7414289d2e0e81f8f1982', name:'xforms:value'},{id:'e8bafefbb9c64f728db192e39c63b076', name:'xforms:label'}]},{id:'extDateFilter1_dialog_874742148', name:'xforms:dialog', children:[{id:'da74cb498a5649bbaa755e9df539e208', name:'xforms:input'},{id:'d2e95291c01548f98e3faebabf66ca77', name:'xforms:input'}]}]},{id:'gridFilterStatus', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'gridFilterStatus_select_509068601', name:'xforms:gridselect', children:[{id:'default19', name:'xforms:value'},{id:'xuiLabel2', name:'xforms:label'}]},{id:'gridFilterStatus_defaultValue_509068601', name:'xforms:output'}]},{id:'grdAssetCard', name:'xforms:grid'}]},{id:'filter-dialog-67eec0ca-cf97-44d1-a861-acca3f682abd', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1294713437', name:'xforms:dialog'}]},{id:'filter-pattern-2c70201b-f3b2-4e9a-9390-347f274e0ebe', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'2e1639e6b44b467cbfaf3722aa9258e8', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_2101325774', name:'xforms:menu'}]},{id:'GLOBAL_ID_865534220', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='30dbb15b53321b2a93045be094df27ab';
xforms.Core.fileName='form.js';	
xf._a(null,'insert');xf._a('insert','xuiLabel1');xf._a(null,'trgClear');xf._a('trgClear','xuiLabel5');xf._a(null,'extDateFilter1_select_874742148');xf._a('extDateFilter1_select_874742148','e8bafefbb9c64f728db192e39c63b076');xf._a('extDateFilter1_select_874742148','xf-itemset-0');xf._a(null,'da74cb498a5649bbaa755e9df539e208');xf._a(null,'d2e95291c01548f98e3faebabf66ca77');xf._a(null,'gridFilterStatus_select_509068601');xf._a('gridFilterStatus_select_509068601','xuiLabel2');xf._a('gridFilterStatus_select_509068601','default20');xf._a(null,'gridFilterStatus_defaultValue_509068601');xf._a(null,'grdAssetCard');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dAssetCard')/fDetailInfo",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fDetailInfo')))));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dAssetCard')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetCard')/fRemark",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fRemark')))));	
xf._b("instance('dAssetCard')/version",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetCard')/fOriginValue",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fOriginValue')))));	
xf._b("instance('dAssetCard')/fRemainValue",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fRemainValue')))));	
xf._b("instance('dAssetCard')/fServiceYear",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fServiceYear')))));	
xf._b("instance('dAssetCard')/fBgDepreYear",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fBgDepreYear')))));	
xf._b("instance('dAssetCard')/fBgDepreMonth",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fBgDepreMonth')))));	
xf._b("instance('dAssetCard')/fAddDepreValue",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fAddDepreValue')))));	
xf._b("instance('dAssetCard')/fFactoryDate",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fFactoryDate')))));	
xf._b("instance('dAssetCard')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetCard')/fArrangeDate",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fArrangeDate')))));	
xf._b("instance('dAssetCard')/fChecked",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fChecked')))));	
xf._b("instance('dAssetCard')/fExtendDate1",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dAssetCard')/fExtendDate2",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dAssetCard')/fExtendDate3",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dAssetCard')/fExtendDate4",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dAssetCard')/fExtendDate5",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dAssetCard')/fExtendNum1",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dAssetCard')/fExtendNum2",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dAssetCard')/fExtendNum3",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dAssetCard')/fExtendNum4",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dAssetCard')/fExtendNum5",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('extDateFilter1_data_874742148')/beginDate",xf._g(xf._f('instance',xf._i("extDateFilter1_data_874742148")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('extDateFilter1_data_874742148')/endDate",xf._g(xf._f('instance',xf._i("extDateFilter1_data_874742148")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("instance('extDateFilter1_data_874742148')/value",xf._g(xf._f('instance',xf._i("extDateFilter1_data_874742148")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('extDateFilter1_data_874742148')/label",xf._g(xf._f('instance',xf._i("extDateFilter1_data_874742148")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'全部'",xf._i("全部"));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("instance('gridFilterStatus_data_509068601')/value",xf._g(xf._f('instance',xf._i("gridFilterStatus_data_509068601")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('gridFilterStatus_data_509068601')/label",xf._g(xf._f('instance',xf._i("gridFilterStatus_data_509068601")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'闲置,占用'",xf._i("闲置,占用"));	
xf._b("value",xf._h(false, xf._k("child",xf._j('','value'))));	
xf._b("'0,1'",xf._i("0,1"));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fStatusName",xf._h(false, xf._k("child",xf._j('','fStatusName'))));	
xf._b("fAssetConfirm",xf._h(false, xf._k("child",xf._j('','fAssetConfirm'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fKind",xf._h(false, xf._k("child",xf._j('','fKind'))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("fSpecType",xf._h(false, xf._k("child",xf._j('','fSpecType'))));	
xf._b("fDetailInfo",xf._h(false, xf._k("child",xf._j('','fDetailInfo'))));	
xf._b("fSourceName",xf._h(false, xf._k("child",xf._j('','fSourceName'))));	
xf._b("fDutyDeptName",xf._h(false, xf._k("child",xf._j('','fDutyDeptName'))));	
xf._b("fDutyPsnName",xf._h(false, xf._k("child",xf._j('','fDutyPsnName'))));	
xf._b("fExtendStr3",xf._h(false, xf._k("child",xf._j('','fExtendStr3'))));	
xf._b("fExtendStr1",xf._h(false, xf._k("child",xf._j('','fExtendStr1'))));	
xf._b("fExtendStr2",xf._h(false, xf._k("child",xf._j('','fExtendStr2'))));	
xf._b("fExtendStr4",xf._h(false, xf._k("child",xf._j('','fExtendStr4'))));	
xf._b("fExtendDate1",xf._h(false, xf._k("child",xf._j('','fExtendDate1'))));	
xf._b("fExtendDate2",xf._h(false, xf._k("child",xf._j('','fExtendDate2'))));	
xf._b("fOriginValue",xf._h(false, xf._k("child",xf._j('','fOriginValue'))));	
xf._b("fAddDepreValue",xf._h(false, xf._k("child",xf._j('','fAddDepreValue'))));	
xf._b("fRemainValue",xf._h(false, xf._k("child",xf._j('','fRemainValue'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("fCreateTime",xf._h(false, xf._k("child",xf._j('','fCreateTime'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("not(call('justep.XData.canDo','dAssetCard','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dAssetCard"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dAssetCard','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dAssetCard"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('txt', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dAssetStatus','mdMain',null,'<rows id="default6"><row id="default7"><cell id="default8">闲置</cell><cell id="default9">0</cell></row><row id="default10"><cell id="default11">占用</cell><cell id="default12">1</cell></row><row id="default13"><cell id="default14">报废</cell><cell id="default15">2</cell></row><row id="default16"><cell id="default17">处理</cell><cell id="default18">3</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dAssetStatus','label,value');	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action1,'mdMain', evt,false)});	
var xf_trigger_insert=new xforms.XFTrigger('insert',null,"/UI/appCommon/images/insert.gif","/UI/appCommon/images/un_insert.gif",false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){insertDOMActivate(event)}));xf._p(justep('insert'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'insert', evt,false)});	
var xf_trigger_trgClear=new xforms.XFTrigger('trgClear',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){assetCardActivity.trgClearClick(event)}));xf._p(justep('trgClear'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trgClear', evt,false)});	
xforms.load_parts('vFilter');	
xforms.load_parts('vAssetCard');	
new xforms.XFDialog('GLOBAL_ID_N1294713437',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N965958906');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N965958906", "");}));xf._p(justep('GLOBAL_ID_N1294713437'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N1294713437', evt,false)});	
var xf_menu_GLOBAL_ID_2101325774 = new xforms.XFMenu('GLOBAL_ID_2101325774','context');xf_menu_GLOBAL_ID_2101325774.menu.addContextZone('2e1639e6b44b467cbfaf3722aa9258e8');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_2101325774.hide()});xf_menu_GLOBAL_ID_2101325774.menu.setOpenMode('web');	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_865534220");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}					data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_2101325774'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_2101325774', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_865534220',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_2093569034');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_2093569034", "");}));xf._p(justep('GLOBAL_ID_865534220'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_865534220', evt,false)});	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_2093569034');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_865534220'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_865534220', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dAssetCard_part_loaded = false;	
function load_dAssetCard_part(callback){if (dAssetCard_part_loaded) return;dAssetCard_part_loaded = true;	
new xforms.XFInstance2('dAssetCard','mdMain',null,null,null,null,null,null,null,null,'recNo',null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dAssetCard')/fDetailInfo",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dAssetCard')/fCreateTime",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dAssetCard')/fRemark",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dAssetCard')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dAssetCard')/fOriginValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dAssetCard')/fRemainValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dAssetCard')/fServiceYear","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dAssetCard')/fBgDepreYear","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dAssetCard')/fBgDepreMonth","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dAssetCard')/fAddDepreValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dAssetCard')/fFactoryDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dAssetCard')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dAssetCard')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dAssetCard')/fArrangeDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dAssetCard')/fChecked","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dAssetCard')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dAssetCard')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dAssetCard')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dAssetCard')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dAssetCard')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dAssetCard')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dAssetCard')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdMain',"instance('dAssetCard')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dAssetCard')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dAssetCard')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dAssetCard_part_init_loaded = false;	
function load_dAssetCard_part_init(){if (dAssetCard_part_init_loaded) return;dAssetCard_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_vFilter(){if (justep("vFilter").getAttribute('loaded') && justep("vFilter").getAttribute('loaded') == 'true') return;justep("vFilter").setAttribute('loaded', 'true');	
if(typeof(load_vFilter_html) == 'function')load_vFilter_html();	
var xf_model_extDateFilter1_model_874742148 = new xforms.XFModel('extDateFilter1_model_874742148',null);	
xf._c('xf-bind-25','extDateFilter1_model_874742148',"instance('extDateFilter1_data_874742148')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-26','extDateFilter1_model_874742148',"instance('extDateFilter1_data_874742148')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('extDateFilter1_data_874742148','extDateFilter1_model_874742148',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('extDateFilter1_data_874742148','value,label,beginDate,endDate');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtDateFilter.setFilterCondition("extDateFilter1", justep.xbl("dAssetCard"), "single", "fCreateTime", "", "", "0", null, null, "", false); }));xf._p(justep('extDateFilter1_model_874742148'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_3,'extDateFilter1_model_874742148', evt,false)});	
new xforms.XFExtSelect({id:'extDateFilter1_select_874742148',type:'gridselect1',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("instance('extDateFilter1_data_874742148')/value"),labelRef:xf._q("instance('extDateFilter1_data_874742148')/label"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:null,columns:'label,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="0"><cell>全部</cell></row><row id="1"><cell>今天</cell></row><row id="2"><cell>昨天</cell></row><row id="3"><cell>本周</cell></row><row id="4"><cell>上周</cell></row><row id="5"><cell>本月</cell></row><row id="6"><cell>上月</cell></row><row id="7"><cell>今年</cell></row><row id="8"><cell>去年</cell></row><row id="9"><cell>自定义...</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFDialog('extDateFilter1_dialog_874742148',"自定义",'model',true,false,true,true,false,null,'250','135',null,null,null,null);	
xf._d('da74cb498a5649bbaa755e9df539e208','text',xf._q("instance('extDateFilter1_data_874742148')/beginDate"),null,null,null,null,false,false);	
xf._d('d2e95291c01548f98e3faebabf66ca77','text',xf._q("instance('extDateFilter1_data_874742148')/endDate"),null,null,null,null,false,false);	
var xf_model_gridFilterStatus_model_509068601 = new xforms.XFModel('gridFilterStatus_model_509068601',null);	
new xforms.XFInstance2('gridFilterStatus_data_509068601','gridFilterStatus_model_509068601',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('gridFilterStatus_data_509068601','value,label');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("gridFilterStatus", justep.xbl("dAssetCard"), "fStatus", "", appCommon.component.Filter.getDefaultValueBinding("gridFilterStatus_defaultValue_509068601"), true, ",", "", false); }));xf._p(justep('gridFilterStatus_model_509068601'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_4,'gridFilterStatus_model_509068601', evt,false)});	
new xforms.XFExtSelect({id:'gridFilterStatus_select_509068601',type:'gridselect',defaultLabelRef:xf._q("'闲置,占用'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('gridFilterStatus_data_509068601')/value"),labelRef:xf._q("instance('gridFilterStatus_data_509068601')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dAssetStatus',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'checkbox,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_gridFilterStatus_defaultValue_509068601=new xforms.XFOutput('gridFilterStatus_defaultValue_509068601',xf._q("'0,1'"),null,null);	
}	
function load_vFilter_xblinit(){if (justep("vFilter").getAttribute('xblloaded') && justep("vFilter").getAttribute('xblloaded') == 'true') return;justep("vFilter").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('extDateFilter1_model_874742148').xformsObject.construct_part();	
if(xforms.ready)justep('gridFilterStatus_model_509068601').xformsObject.construct_part();	
}	
function load_vAssetCard(){if (justep("vAssetCard").getAttribute('loaded') && justep("vAssetCard").getAttribute('loaded') == 'true') return;justep("vAssetCard").setAttribute('loaded', 'true');	
if(typeof(load_vAssetCard_html) == 'function')load_vAssetCard_html();	
new xforms.XFGrid({id:'grdAssetCard',instance:'dAssetCard',systemColumnsPro:'version,fKindID,fUnitID,fUnit,fStatus,fServiceYear,fDutyOgnID,fDutyOgnName,fDutyOgnFID,fDutyDeptID,fDutyPosID,fDutyPosName,fDutyPsnID,fDutyPsnFID,fDutyPsnFName,fBgDepreYear,fBgDepreMonth,fFactory,fFactoryDate,fSupplier,fSource,fCheckID,fCheckNO,fBuyApplyID,fBuyApplyNO,fAssetInID,fAssetInNO,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fArrangeDate,fChecked,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fStatusName,fAssetConfirm,fCode,fKind,fName,fSpecType,fDetailInfo,fSourceName,fDutyDeptName,fDutyPsnName,fExtendStr3,fExtendStr1,fExtendStr2,fExtendStr4,fExtendDate1,fExtendDate2,fOriginValue,fAddDepreValue,fRemainValue,fRemark,fCreateTime,space-column',headNames:'序号,状态,资产确认,资产编号,资产类别,名称,规格型号,详细配置,资产来源,责任部门,责任人,存放位置,Service Tag,Express Service Code,续保,开始时间,到期时间,资产原值,累计折旧,资产净残值,备注,创建时间,&nbsp;',widths:'30,30,60,100,100,120,92,255,61,100,57,99,100,151,59,68,66,80,80,80,120,120,*',types:'cntr,ro,ro,html,ro,ro,ro,txt,ro,ed,ed,ed,ed,ed,ed,ed,ed,ro,ro,ed,txt,dateTime,ro',hiddenColumns:'fExtendStr1,fExtendStr2,fExtendStr4,fExtendDate1,fExtendDate2',aligns:'center,,center,,center,,,,,center,,,,,center,center,center,right,right,right,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'grdAssetCardRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fCode','grdAssetCard_fCodeRender');this.grid.bindColFormat(null,'fOriginValue','0,000.00');this.grid.bindColFormat(null,'fAddDepreValue','0,000.00');this.grid.bindColFormat(null,'fRemainValue','0,000.00');}});	
}	
function load_vAssetCard_xblinit(){if (justep("vAssetCard").getAttribute('xblloaded') && justep("vAssetCard").getAttribute('xblloaded') == 'true') return;justep("vAssetCard").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
