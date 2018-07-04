
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/filter.xbl.xml#gridFilter"] = _xbl_JSClassDefine_gridFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
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
_xbl_JSClassDefine_gridFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_gridFilter',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'cf3f8f63a5417c9739cc8d1d9e2ec773'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'c38e24e8c96885d8939f30cb2e01dd93'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'93eb750af1d0a285019d75ff48c16590'};
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
_xbl_JSClassDefine_tableLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_tableLayout',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'603e5608ac1f689b1f02dbb199ea97d5'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'66623ea3b01f92c4a831f288b55818b8'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'483d28c28cfbd61977d8f91efaf860e2'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'b7e9e3fc7e7003f38a4ec2fe2abd30d6'};
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
			    this.__prevButton = '';    this.__nextButton = '';
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'e2ff620b383c78e752a78a4e4d6c9c08',time:1528079681},m:'60efbae901b4322f3aaa0c3e1b9b485b'};
	var ids=[{id:'b04d71c5935e4239a2c703f33b0ea5a6', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrAssetAccount', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'08edfc119e6a4363b11040a6096de557', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'grdFilterKind', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'grdFilterKind_select_771871384', name:'xforms:gridselect', children:[{id:'default4', name:'xforms:value'},{id:'xuiLabel1', name:'xforms:label'}]},{id:'grdFilterKind_defaultValue_771871384', name:'xforms:output'}]},{id:'grdFilterStatus', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'grdFilterStatus_select_511510174', name:'xforms:gridselect', children:[{id:'default15', name:'xforms:value'},{id:'xuiLabel2', name:'xforms:label'}]},{id:'grdFilterStatus_defaultValue_511510174', name:'xforms:output'}]}]},{id:'grdAssetAccount', name:'xforms:grid'}]},{id:'filter-dialog-c2d7e1b8-9156-4c71-9557-4e1a3c6467f0', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_506161618', name:'xforms:dialog'}]},{id:'filter-pattern-d28e54ba-e1ee-46ea-b68e-44553c2ade04', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'e4761e8bcfe04f8785aa12e967c3c623', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1756158231', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1979462499', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='e2ff620b383c78e752a78a4e4d6c9c08';
xforms.Core.fileName='form.js';	
xf._a(null,'grdFilterKind_select_771871384');xf._a('grdFilterKind_select_771871384','xuiLabel1');xf._a('grdFilterKind_select_771871384','default5');xf._a(null,'grdFilterKind_defaultValue_771871384');xf._a(null,'grdFilterStatus_select_511510174');xf._a('grdFilterStatus_select_511510174','xuiLabel2');xf._a('grdFilterStatus_select_511510174','default16');xf._a(null,'grdFilterStatus_defaultValue_511510174');xf._a(null,'grdAssetAccount');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dAssetAccount')/version",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetAccount')/fOriginValue",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fOriginValue')))));	
xf._b("instance('dAssetAccount')/fRemainValue",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fRemainValue')))));	
xf._b("instance('dAssetAccount')/fServiceYear",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fServiceYear')))));	
xf._b("instance('dAssetAccount')/fBgDepreYear",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fBgDepreYear')))));	
xf._b("instance('dAssetAccount')/fBgDepreMonth",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fBgDepreMonth')))));	
xf._b("instance('dAssetAccount')/fAddDepreValue",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fAddDepreValue')))));	
xf._b("instance('dAssetAccount')/fFactoryDate",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fFactoryDate')))));	
xf._b("instance('dAssetAccount')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetAccount')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetAccount')/fArrangeDate",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fArrangeDate')))));	
xf._b("instance('dAssetAccount')/fChecked",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fChecked')))));	
xf._b("instance('dAssetAccount')/fExtendDate1",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dAssetAccount')/fExtendDate2",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dAssetAccount')/fExtendDate3",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dAssetAccount')/fExtendDate4",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dAssetAccount')/fExtendDate5",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dAssetAccount')/fExtendNum1",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dAssetAccount')/fExtendNum2",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dAssetAccount')/fExtendNum3",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dAssetAccount')/fExtendNum4",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dAssetAccount')/fExtendNum5",xf._g(xf._f('instance',xf._i("dAssetAccount")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dKind')/version",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dKind')/fLevel",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dKind')/fCreateTime",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dKind')/fUpdateTime",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('grdFilterKind_data_771871384')/value",xf._g(xf._f('instance',xf._i("grdFilterKind_data_771871384")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('grdFilterKind_data_771871384')/label",xf._g(xf._f('instance',xf._i("grdFilterKind_data_771871384")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'资产类别'",xf._i("资产类别"));	
xf._b("'全部'",xf._i("全部"));	
xf._b("OA_AS_Kind",xf._h(false, xf._k("child",xf._j('','OA_AS_Kind'))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fDescription",xf._h(false, xf._k("child",xf._j('','fDescription'))));	
xf._b("fSequence",xf._h(false, xf._k("child",xf._j('','fSequence'))));	
xf._b("fUseStatus",xf._h(false, xf._k("child",xf._j('','fUseStatus'))));	
xf._b("fUseStatusName",xf._h(false, xf._k("child",xf._j('','fUseStatusName'))));	
xf._b("fParentCode",xf._h(false, xf._k("child",xf._j('','fParentCode'))));	
xf._b("fLevel",xf._h(false, xf._k("child",xf._j('','fLevel'))));	
xf._b("fURL",xf._h(false, xf._k("child",xf._j('','fURL'))));	
xf._b("fCreateOgnID",xf._h(false, xf._k("child",xf._j('','fCreateOgnID'))));	
xf._b("fCreateOgnName",xf._h(false, xf._k("child",xf._j('','fCreateOgnName'))));	
xf._b("fCreateDeptID",xf._h(false, xf._k("child",xf._j('','fCreateDeptID'))));	
xf._b("fCreateDeptName",xf._h(false, xf._k("child",xf._j('','fCreateDeptName'))));	
xf._b("fCreatePsnID",xf._h(false, xf._k("child",xf._j('','fCreatePsnID'))));	
xf._b("fCreatePsnName",xf._h(false, xf._k("child",xf._j('','fCreatePsnName'))));	
xf._b("fCreatePsnFID",xf._h(false, xf._k("child",xf._j('','fCreatePsnFID'))));	
xf._b("fCreateTime",xf._h(false, xf._k("child",xf._j('','fCreateTime'))));	
xf._b("fUpdatePsnID",xf._h(false, xf._k("child",xf._j('','fUpdatePsnID'))));	
xf._b("fUpdatePsnName",xf._h(false, xf._k("child",xf._j('','fUpdatePsnName'))));	
xf._b("fUpdateTime",xf._h(false, xf._k("child",xf._j('','fUpdateTime'))));	
xf._b("lINKCODE",xf._h(false, xf._k("child",xf._j('','lINKCODE'))));	
xf._b("'1'",xf._i("1"));	
xf._b("instance('grdFilterStatus_data_511510174')/value",xf._g(xf._f('instance',xf._i("grdFilterStatus_data_511510174")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('grdFilterStatus_data_511510174')/label",xf._g(xf._f('instance',xf._i("grdFilterStatus_data_511510174")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'闲置,占用'",xf._i("闲置,占用"));	
xf._b("value",xf._h(false, xf._k("child",xf._j('','value'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("'0,1'",xf._i("0,1"));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fStatusName",xf._h(false, xf._k("child",xf._j('','fStatusName'))));	
xf._b("fKind",xf._h(false, xf._k("child",xf._j('','fKind'))));	
xf._b("fSpecType",xf._h(false, xf._k("child",xf._j('','fSpecType'))));	
xf._b("fSourceName",xf._h(false, xf._k("child",xf._j('','fSourceName'))));	
xf._b("fOriginValue",xf._h(false, xf._k("child",xf._j('','fOriginValue'))));	
xf._b("fRemainValue",xf._h(false, xf._k("child",xf._j('','fRemainValue'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("fDetailInfo",xf._h(false, xf._k("child",xf._j('','fDetailInfo'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dKind','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dKind',null);	
xf._c('xf-bind-22','mdMain',"instance('dKind')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dKind')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dKind')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dKind')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
new xforms.XFInstance2('dAssetStatus','mdMain',null,'<rows id="default19"><row id="default20"><cell id="default21">闲置</cell><cell id="default22">0</cell></row><row id="default23"><cell id="default24">占用</cell><cell id="default25">1</cell></row><row id="default26"><cell id="default27">报废</cell><cell id="default28">2</cell></row><row id="default29"><cell id="default30">处理</cell><cell id="default31">3</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dAssetStatus','label,value');	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action1,'mdMain', evt,false)});	
var xf_model_grdFilterKind_model_771871384 = new xforms.XFModel('grdFilterKind_model_771871384',null);	
new xforms.XFInstance2('grdFilterKind_data_771871384','grdFilterKind_model_771871384',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('grdFilterKind_data_771871384','value,label');	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("grdFilterKind", justep.xbl("dAssetAccount"), "fKindID", "", appCommon.component.Filter.getDefaultValueBinding("grdFilterKind_defaultValue_771871384"), true, ",", "", false);}));xf._p(justep('grdFilterKind_model_771871384'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'grdFilterKind_model_771871384', evt,false)});	
new xforms.XFExtSelect({id:'grdFilterKind_select_771871384',type:'gridselect',defaultLabelRef:xf._q("'资产类别'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('grdFilterKind_data_771871384')/value"),labelRef:xf._q("instance('grdFilterKind_data_771871384')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dKind',columns:'fName,OA_AS_Kind,__c_,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OA_AS_Kind,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',valueColumn:'OA_AS_Kind',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_grdFilterKind_defaultValue_771871384=new xforms.XFOutput('grdFilterKind_defaultValue_771871384',xf._q("'1'"),null,null);	
var xf_model_grdFilterStatus_model_511510174 = new xforms.XFModel('grdFilterStatus_model_511510174',null);	
new xforms.XFInstance2('grdFilterStatus_data_511510174','grdFilterStatus_model_511510174',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('grdFilterStatus_data_511510174','value,label');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("grdFilterStatus", justep.xbl("dAssetAccount"), "fStatus", "", appCommon.component.Filter.getDefaultValueBinding("grdFilterStatus_defaultValue_511510174"), true, ",", "", false);}));xf._p(justep('grdFilterStatus_model_511510174'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'grdFilterStatus_model_511510174', evt,false)});	
new xforms.XFExtSelect({id:'grdFilterStatus_select_511510174',type:'gridselect',defaultLabelRef:xf._q("'闲置,占用'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('grdFilterStatus_data_511510174')/value"),labelRef:xf._q("instance('grdFilterStatus_data_511510174')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dAssetStatus',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'checkbox,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_grdFilterStatus_defaultValue_511510174=new xforms.XFOutput('grdFilterStatus_defaultValue_511510174',xf._q("'0,1'"),null,null);	
xforms.load_parts('vAssetAccount');	
new xforms.XFDialog('GLOBAL_ID_506161618',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N373678053');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N373678053", "");}));xf._p(justep('GLOBAL_ID_506161618'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_506161618', evt,false)});	
var xf_menu_GLOBAL_ID_1756158231 = new xforms.XFMenu('GLOBAL_ID_1756158231','context');xf_menu_GLOBAL_ID_1756158231.menu.addContextZone('e4761e8bcfe04f8785aa12e967c3c623');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1756158231.hide()});xf_menu_GLOBAL_ID_1756158231.menu.setOpenMode('web');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1979462499");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1756158231'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_1756158231', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1979462499',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N244481408');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N244481408", "");}));xf._p(justep('GLOBAL_ID_N1979462499'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N1979462499', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N244481408');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1979462499'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N1979462499', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dAssetAccount_part_loaded = false;	
function load_dAssetAccount_part(callback){if (dAssetAccount_part_loaded) return;dAssetAccount_part_loaded = true;	
new xforms.XFInstance2('dAssetAccount','mdMain',null,null,null,null,null,null,null,null,'recNo',null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dAssetAccount')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dAssetAccount')/fOriginValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dAssetAccount')/fRemainValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dAssetAccount')/fServiceYear","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dAssetAccount')/fBgDepreYear","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dAssetAccount')/fBgDepreMonth","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dAssetAccount')/fAddDepreValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dAssetAccount')/fFactoryDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dAssetAccount')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dAssetAccount')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dAssetAccount')/fArrangeDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dAssetAccount')/fChecked","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dAssetAccount')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dAssetAccount')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dAssetAccount')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dAssetAccount')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dAssetAccount')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dAssetAccount')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dAssetAccount')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dAssetAccount')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dAssetAccount')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dAssetAccount')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dAssetAccount_part_init_loaded = false;	
function load_dAssetAccount_part_init(){if (dAssetAccount_part_init_loaded) return;dAssetAccount_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_vAssetAccount(){if (justep("vAssetAccount").getAttribute('loaded') && justep("vAssetAccount").getAttribute('loaded') == 'true') return;justep("vAssetAccount").setAttribute('loaded', 'true');	
if(typeof(load_vAssetAccount_html) == 'function')load_vAssetAccount_html();	
new xforms.XFGrid({id:'grdAssetAccount',instance:'dAssetAccount',systemColumnsPro:'version,fKindID,fUnitID,fUnit,fStatus,fServiceYear,fDutyOgnID,fDutyOgnName,fDutyOgnFID,fDutyDeptID,fDutyDeptName,fDutyPosID,fDutyPosName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fBgDepreYear,fBgDepreMonth,fAddDepreValue,fFactory,fFactoryDate,fSupplier,fSource,fCheckID,fCheckNO,fBuyApplyID,fBuyApplyNO,fAssetInID,fAssetInNO,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fArrangeDate,fChecked,fAssetConfirm,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fStatusName,fCode,fKind,fName,fSpecType,fSourceName,fOriginValue,fRemainValue,fCreateTime,fDetailInfo,fRemark,space-column',headNames:'序号,状态,资产编号,资产类别,资产名称,规格型号,资产来源,资产原值,资产净残值,创建时间,详细配置,备注,&nbsp;',widths:'30,40,100,110,120,80,60,80,80,120,150,150,*',types:'cntr,ro,html,ro,ro,ro,ro,ro,ro,dateTime,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,,right,right,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'grdAssetAccountRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fCode','grdAssetAccount_fCodeRender');this.grid.bindColFormat(null,'fOriginValue','0,000.00');this.grid.bindColFormat(null,'fRemainValue','0,000.00');this.grid.bindColReadonly(null,'fCreateTime','true');}});	
}	
function load_vAssetAccount_xblinit(){if (justep("vAssetAccount").getAttribute('xblloaded') && justep("vAssetAccount").getAttribute('xblloaded') == 'true') return;justep("vAssetAccount").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
