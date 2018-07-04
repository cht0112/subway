
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter"] = _xbl_JSClassDefine_extOrgFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"] = _xbl_JSClassDefine_extDateFilter;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"] = _xbl_JSClassDefine_smartFilter;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_extOrgFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_extOrgFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.ExtOrgFilter(this));
				}
			}));

_xbl_JSClassDefine_extOrgFilter.prototype.ClassName='_xbl_JSClassDefine_extOrgFilter';
_xbl_JSClassDefine_extOrgFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_extOrgFilter',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'df1ae90fafbaa72f093662765e11f437'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'e5b4b16d1e4b4ddcd583a1e557513696'};
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

_xbl_JSClassDefine_windowDialog.prototype.ClassName='_xbl_JSClassDefine_windowDialog';
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'80a914d181d4f1f472e22fa53b593bbd'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'560b3f80513a0c7fc326eb3fd1cc18f2'};
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
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			}   	
		}));

_xbl_JSClassDefine_tableLayout.prototype.ClassName='_xbl_JSClassDefine_tableLayout';
_xbl_JSClassDefine_tableLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_tableLayout',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'f3f54c1558ba3d2eeda69658496be985'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'868ce416fcbe5e23e86a8fae267e105a'};
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
_xbl_JSClassDefine_extDateFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_extDateFilter',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'963bea36182e66804d355fcf73454ab3'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'800eaf3e7a016e210564c38cfc4d6dcb'};
function _xbl_JSClassDefine_smartFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_smartFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.SmartFilter(this));
				}
			}));

_xbl_JSClassDefine_smartFilter.prototype.ClassName='_xbl_JSClassDefine_smartFilter';
_xbl_JSClassDefine_smartFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_smartFilter',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'1528156edf774979032bf737848d38df'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'b7b13bcbed21be7926aa9a2c44531b55'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'fa528d7ba60a83c1d19a60b7b9ad13f6',time:1525315554},m:'82dd44d886657ea8bd7415426297512a'};
	var ids=[{id:'62e130734850402daaaa6e10833cd330', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table1', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'trgAdd', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'e90ac46341d0461da5da9b511b28960e', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'extDateFilter1', name:'/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter', children:[{id:'extDateFilter1_select_535671392', name:'xforms:gridselect1', children:[{id:'78404dd6f978482f884fbc3e9e6f81ce', name:'xforms:value'},{id:'bf4a39769f90412eabbf4311f65c8c53', name:'xforms:label'}]},{id:'extDateFilter1_dialog_535671392', name:'xforms:dialog', children:[{id:'3113e5d4320a4c02915b33a35070fdb7', name:'xforms:input'},{id:'fa905d51bae04d03a6fb9fa9919db4c8', name:'xforms:input'}]}]},{id:'extOrgFilter1', name:'/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter', children:[{id:'extOrgFilter1_manageTypeCodes_1742740860', name:'xforms:output'},{id:'extOrgFilter1_select_1742740860', name:'xforms:treeselect', children:[{id:'1eedab1d6a654fa389b30b38c063eb91', name:'xforms:label'},{id:'d178c3f0a9024c688ae7806a23b387da', name:'xforms:value'}]}]},{id:'smartFilter1', name:'/UI/appCommon/components/smartFilter.xbl.xml#smartFilter', children:[{id:'smartFilter1_input_937665291', name:'xforms:input'}]}]},{id:'grid1', name:'xforms:grid'}]},{id:'dlgSelectPsn', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'filter-dialog-a5aa1d62-8e8b-40be-bd52-dec73a0dab62', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N727386701', name:'xforms:dialog'}]},{id:'filter-pattern-ac61e281-551e-4fe2-9434-db38d74069b6', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'d29199b867b24ef7bfeee511fcbe8719', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_63902654', name:'xforms:menu'}]},{id:'GLOBAL_ID_844806845', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='fa528d7ba60a83c1d19a60b7b9ad13f6';
xforms.Core.fileName='form.js';	
xf._a(null,'trgAdd');xf._a('trgAdd','xuiLabel1');xf._a(null,'extDateFilter1_select_535671392');xf._a('extDateFilter1_select_535671392','bf4a39769f90412eabbf4311f65c8c53');xf._a('extDateFilter1_select_535671392','xf-itemset-0');xf._a(null,'3113e5d4320a4c02915b33a35070fdb7');xf._a(null,'fa905d51bae04d03a6fb9fa9919db4c8');xf._a(null,'extOrgFilter1_manageTypeCodes_1742740860');xf._a(null,'extOrgFilter1_select_1742740860');xf._a('extOrgFilter1_select_1742740860','1eedab1d6a654fa389b30b38c063eb91');xf._a('extOrgFilter1_select_1742740860','xf-itemset-1');xf._a(null,'smartFilter1_input_937665291');xf._a(null,'grid1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('bizData1')",xf._f('instance',xf._i("bizData1")));	
xf._b("true()",xf._f('true'));	
xf._b("instance('bizData1')/version",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('bizData1')/fJHKSRQ",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','fJHKSRQ')))));	
xf._b("instance('bizData1')/fJHJSRQ",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','fJHJSRQ')))));	
xf._b("instance('bizData1')/fApplyDate",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("instance('bizData1')/fCreateTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('bizData1')/fUpdateTime",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('extDateFilter1_data_535671392')/beginDate",xf._g(xf._f('instance',xf._i("extDateFilter1_data_535671392")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('extDateFilter1_data_535671392')/endDate",xf._g(xf._f('instance',xf._i("extDateFilter1_data_535671392")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("instance('extDateFilter1_data_535671392')/value",xf._g(xf._f('instance',xf._i("extDateFilter1_data_535671392")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('extDateFilter1_data_535671392')/label",xf._g(xf._f('instance',xf._i("extDateFilter1_data_535671392")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'全部'",xf._i("全部"));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("'workPlanManagement'",xf._i("workPlanManagement"));	
xf._b("instance('extOrgFilter1_orgData_1742740860')/sValidState",xf._g(xf._f('instance',xf._i("extOrgFilter1_orgData_1742740860")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('extOrgFilter1_data_1742740860')/value",xf._g(xf._f('instance',xf._i("extOrgFilter1_data_1742740860")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('extOrgFilter1_data_1742740860')/label",xf._g(xf._f('instance',xf._i("extOrgFilter1_data_1742740860")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'本人'",xf._i("本人"));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sFID",xf._h(false, xf._k("child",xf._j('','sFID'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sLongName",xf._h(false, xf._k("child",xf._j('','sLongName'))));	
xf._b("sFName",xf._h(false, xf._k("child",xf._j('','sFName'))));	
xf._b("sFCode",xf._h(false, xf._k("child",xf._j('','sFCode'))));	
xf._b("sParent",xf._h(false, xf._k("child",xf._j('','sParent'))));	
xf._b("sNodeKind",xf._h(false, xf._k("child",xf._j('','sNodeKind'))));	
xf._b("sValidState",xf._h(false, xf._k("child",xf._j('','sValidState'))));	
xf._b("sPersonID",xf._h(false, xf._k("child",xf._j('','sPersonID'))));	
xf._b("instance('smartFilter1_data_937665291')/value",xf._g(xf._f('instance',xf._i("smartFilter1_data_937665291")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fPlanYear",xf._h(false, xf._k("child",xf._j('','fPlanYear'))));	
xf._b("fPlanMonth",xf._h(false, xf._k("child",xf._j('','fPlanMonth'))));	
xf._b("fPlanWeek",xf._h(false, xf._k("child",xf._j('','fPlanWeek'))));	
xf._b("fJHZT",xf._h(false, xf._k("child",xf._j('','fJHZT'))));	
xf._b("fCreatePsnName",xf._h(false, xf._k("child",xf._j('','fCreatePsnName'))));	
xf._b("fCreateTime",xf._h(false, xf._k("child",xf._j('','fCreateTime'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("not(call('justep.XData.canDo','bizData1','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','bizData1','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','model1',"instance('bizData1')",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('bizData1')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('bizData1')/fJHKSRQ","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('bizData1')/fJHJSRQ","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('bizData1')/fApplyDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('bizData1')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('bizData1')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N727386701',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1627745762');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1627745762", "");}));xf._p(justep('GLOBAL_ID_N727386701'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_N727386701', evt,false)});	
var xf_menu_GLOBAL_ID_63902654 = new xforms.XFMenu('GLOBAL_ID_63902654','context');xf_menu_GLOBAL_ID_63902654.menu.addContextZone('d29199b867b24ef7bfeee511fcbe8719');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_63902654.hide()});xf_menu_GLOBAL_ID_63902654.menu.setOpenMode('web');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_844806845");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_63902654'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_63902654', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_844806845',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_2084114791');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_2084114791", "");}));xf._p(justep('GLOBAL_ID_844806845'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_844806845', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_2084114791');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_844806845'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_844806845', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_trgAdd=new xforms.XFTrigger('trgAdd',null,"/UI/OA/common/images/insert.gif","/UI/OA/common/images/un_insert.gif",false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgAddDOMActivate(event)}));xf._p(justep('trgAdd'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trgAdd', evt,false)});	
var xf_model_extDateFilter1_model_535671392 = new xforms.XFModel('extDateFilter1_model_535671392',null);	
xf._c('xf-bind-7','extDateFilter1_model_535671392',"instance('extDateFilter1_data_535671392')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','extDateFilter1_model_535671392',"instance('extDateFilter1_data_535671392')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('extDateFilter1_data_535671392','extDateFilter1_model_535671392',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('extDateFilter1_data_535671392','value,label,beginDate,endDate');	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtDateFilter.setFilterCondition("extDateFilter1", justep.xbl("bizData1"), "single", "fCreateTime", "", "", "0", null, null, "", false);}));xf._p(justep('extDateFilter1_model_535671392'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'extDateFilter1_model_535671392', evt,false)});	
new xforms.XFExtSelect({id:'extDateFilter1_select_535671392',type:'gridselect1',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("instance('extDateFilter1_data_535671392')/value"),labelRef:xf._q("instance('extDateFilter1_data_535671392')/label"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:null,columns:'label,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="0"><cell>全部</cell></row><row id="1"><cell>今天</cell></row><row id="2"><cell>昨天</cell></row><row id="3"><cell>本周</cell></row><row id="4"><cell>上周</cell></row><row id="5"><cell>本月</cell></row><row id="6"><cell>上月</cell></row><row id="7"><cell>今年</cell></row><row id="8"><cell>去年</cell></row><row id="9"><cell>自定义...</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFDialog('extDateFilter1_dialog_535671392',"自定义",'model',true,false,true,true,false,null,'250','135',null,null,null,null);	
xf._d('3113e5d4320a4c02915b33a35070fdb7','text',xf._q("instance('extDateFilter1_data_535671392')/beginDate"),null,null,null,null,false,false);	
xf._d('fa905d51bae04d03a6fb9fa9919db4c8','text',xf._q("instance('extDateFilter1_data_535671392')/endDate"),null,null,null,null,false,false);	
var xf_output_extOrgFilter1_manageTypeCodes_1742740860=new xforms.XFOutput('extOrgFilter1_manageTypeCodes_1742740860',xf._q("'workPlanManagement'"),null,null);	
var xf_model_extOrgFilter1_model_1742740860 = new xforms.XFModel('extOrgFilter1_model_1742740860',null);	
new xforms.XFInstance2('extOrgFilter1_data_1742740860','extOrgFilter1_model_1742740860',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('extOrgFilter1_data_1742740860','value,label');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtOrgFilter.setFilterCondition("extOrgFilter1", justep.xbl("bizData1"), "fCreatePsnID", "fCreatePsnFID", "", "本人", "", false);}));xf._p(justep('extOrgFilter1_model_1742740860'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'extOrgFilter1_model_1742740860', evt,false)});	
new xforms.XFExtSelect({id:'extOrgFilter1_select_1742740860',type:'treeselect',defaultLabelRef:xf._q("'本人'"),allSelectedLabelRef:null,ref:xf._q("instance('extOrgFilter1_data_1742740860')/value"),labelRef:xf._q("instance('extOrgFilter1_data_1742740860')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'extOrgFilter1_orgData_1742740860',columns:'sName,__c_,sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',valueColumn:'sFID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,',aligns:',,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_435901124',onRowHasChildren:func_1407496152,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_smartFilter1_model_937665291 = new xforms.XFModel('smartFilter1_model_937665291',null);	
new xforms.XFInstance2('smartFilter1_data_937665291','smartFilter1_model_937665291',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('smartFilter1_data_937665291','value');	
xf._d('smartFilter1_input_937665291','text',xf._q("instance('smartFilter1_data_937665291')/value"),null,null,null,null,false,false);	
new xforms.XFGrid({id:'grid1',instance:'bizData1',systemColumnsPro:'sequence,version,fGZNR,fJHKSRQ,fJHJSRQ,fCBR,fCBRID,fFZR,fFZRID,fBZ,fCBBM,fCBBMID,fGZJHLX,fCBRBM,fFZRBM,fDD,fNO,fBizState,fBizStateName,fApplyOgnID,fApplyOgnName,fApplyDeptID,fApplyDeptName,fApplyPosID,fApplyPosName,fApplyPsnID,fApplyPsnName,fApplyPsnFID,fApplyPsnFName,fApplyDate,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnFID,fCreatePsnFName,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fCurrentActivities,fCurrentExecutors',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fPlanYear,fPlanMonth,fPlanWeek,fJHZT,fCreatePsnName,fCreateTime,space-column',headNames:'序号,年度,月份,周,计划主题,提交人员,编制时间,&nbsp;',widths:'30,60,40,60,300,100,120,*',types:'cntr,ro,ro,ro,html,ro,dateTime,ro',hiddenColumns:'',aligns:'center,center,center,center,,center,center,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fJHZT','grid1FJHZTRender');this.grid.bindColFormat(null,'fCreateTime','yyyy-MM-dd hh:mm');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('extDateFilter1_model_535671392').xformsObject.construct_part();	
if(xforms.ready)justep('extOrgFilter1_model_1742740860').xformsObject.construct_part();	
if(xforms.ready)justep('smartFilter1_model_937665291').xformsObject.construct_part();	
}	
var extOrgFilter1_orgData_1742740860_part_loaded = false;	
function load_extOrgFilter1_orgData_1742740860_part(callback){if (extOrgFilter1_orgData_1742740860_part_loaded) return;extOrgFilter1_orgData_1742740860_part_loaded = true;	
new xforms.XFInstance2('extOrgFilter1_orgData_1742740860','extOrgFilter1_model_1742740860',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-9','extOrgFilter1_model_1742740860',"instance('extOrgFilter1_orgData_1742740860')/sValidState","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var extOrgFilter1_orgData_1742740860_part_init_loaded = false;	
function load_extOrgFilter1_orgData_1742740860_part_init(){if (extOrgFilter1_orgData_1742740860_part_init_loaded) return;extOrgFilter1_orgData_1742740860_part_init_loaded = true;	
if(xforms.ready)justep('extOrgFilter1_model_1742740860').xformsObject.construct_part();}	
var __actions__ = {	
};	
