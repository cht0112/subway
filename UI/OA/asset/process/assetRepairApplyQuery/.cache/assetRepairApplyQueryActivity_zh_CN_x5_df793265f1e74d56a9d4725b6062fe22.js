
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter"] = _xbl_JSClassDefine_extOrgFilter;
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

function _xbl_JSClassDefine_gridFilter(obj) {
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

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

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
						}else{			$(">div", td).height(td.height());
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

	var ids=[{id:'76027ac963bd41e0ac3ec39481c9e508', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrRepairApply', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'5e0e6afd874c42859fb2f9a859d8a263', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'standardProcessQueryBar_bizStateFilter', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'standardProcessQueryBar_bizStateFilter_select_1246124391', name:'xforms:gridselect', children:[{id:'a623eea98bdf4ff8b01194e2b604efa1', name:'xforms:value'},{id:'b0a2a3dd6a0f4cb8a498145b032c404a', name:'xforms:label'}]},{id:'standardProcessQueryBar_bizStateFilter_defaultValue_1246124391', name:'xforms:output'}]},{id:'standardProcessQueryBar_dateFilter', name:'/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter', children:[{id:'standardProcessQueryBar_dateFilter_select_718297121', name:'xforms:gridselect1', children:[{id:'9582962793ba41fcbb604e006d9f7623', name:'xforms:value'},{id:'a7c551a4544f44fa98a271d1eb60d9ea', name:'xforms:label'}]},{id:'standardProcessQueryBar_dateFilter_dialog_718297121', name:'xforms:dialog', children:[{id:'9e7229b1b2b34dbfb186719298634804', name:'xforms:input'},{id:'c7a8201d2b71418286a3a062fe478551', name:'xforms:input'}]}]},{id:'standardProcessQueryBar_orgFilter', name:'/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter', children:[{id:'standardProcessQueryBar_orgFilter_manageTypeCodes_1043630500', name:'xforms:output'},{id:'standardProcessQueryBar_orgFilter_select_1043630500', name:'xforms:treeselect', children:[{id:'d783d0d620fd4fcc9c8449f1e9992e36', name:'xforms:label'},{id:'d4aeeb3371de40fa9ace88443227ea3c', name:'xforms:value'}]}]}]},{id:'grdRepairApply', name:'xforms:grid'}]},{id:'filter-dialog-61ba0217-eb98-453f-ae95-f659fe228cba', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N825171855', name:'xforms:dialog'}]},{id:'filter-pattern-159eff1b-3d36-45fc-8588-d0323c106020', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'2aa9dedad5e54b89b2b463c85a2aaa98', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N848953944', name:'xforms:menu'}]},{id:'GLOBAL_ID_1351434279', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'standardProcessQueryBar_bizStateFilter_select_1246124391');xf._a('standardProcessQueryBar_bizStateFilter_select_1246124391','b0a2a3dd6a0f4cb8a498145b032c404a');xf._a('standardProcessQueryBar_bizStateFilter_select_1246124391','xf-itemset-0');xf._a(null,'standardProcessQueryBar_bizStateFilter_defaultValue_1246124391');xf._a(null,'standardProcessQueryBar_dateFilter_select_718297121');xf._a('standardProcessQueryBar_dateFilter_select_718297121','a7c551a4544f44fa98a271d1eb60d9ea');xf._a('standardProcessQueryBar_dateFilter_select_718297121','xf-itemset-1');xf._a(null,'9e7229b1b2b34dbfb186719298634804');xf._a(null,'c7a8201d2b71418286a3a062fe478551');xf._a(null,'standardProcessQueryBar_orgFilter_manageTypeCodes_1043630500');xf._a(null,'standardProcessQueryBar_orgFilter_select_1043630500');xf._a('standardProcessQueryBar_orgFilter_select_1043630500','d783d0d620fd4fcc9c8449f1e9992e36');xf._a('standardProcessQueryBar_orgFilter_select_1043630500','xf-itemset-2');xf._a(null,'grdRepairApply');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dRepairApply')/version",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dRepairApply')/fApplyDate",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("instance('dRepairApply')/fServiceYear",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fServiceYear')))));	
xf._b("instance('dRepairApply')/fUsedYear",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fUsedYear')))));	
xf._b("instance('dRepairApply')/fRemainValue",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fRemainValue')))));	
xf._b("instance('dRepairApply')/fRepairDate",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fRepairDate')))));	
xf._b("instance('dRepairApply')/fReturnDate",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fReturnDate')))));	
xf._b("instance('dRepairApply')/fRepairAmount",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fRepairAmount')))));	
xf._b("instance('dRepairApply')/fCreateTime",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dRepairApply')/fUpdateTime",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dRepairApply')/fExtendDate1",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dRepairApply')/fExtendDate2",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dRepairApply')/fExtendDate3",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dRepairApply')/fExtendDate4",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dRepairApply')/fExtendDate5",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dRepairApply')/fExtendNum1",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dRepairApply')/fExtendNum2",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dRepairApply')/fExtendNum3",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dRepairApply')/fExtendNum4",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dRepairApply')/fExtendNum5",xf._g(xf._f('instance',xf._i("dRepairApply")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('standardProcessQueryBar_bizStateFilter_data_1246124391')/value",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_bizStateFilter_data_1246124391")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('standardProcessQueryBar_bizStateFilter_data_1246124391')/label",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_bizStateFilter_data_1246124391")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'编辑中,处理中,已完成'",xf._i("编辑中,处理中,已完成"));	
xf._b("'全部'",xf._i("全部"));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("'bsEditing,bsExecuting,bsFinished'",xf._i("bsEditing,bsExecuting,bsFinished"));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_718297121')/beginDate",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_718297121")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_718297121')/endDate",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_718297121")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_718297121')/value",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_718297121")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('standardProcessQueryBar_dateFilter_data_718297121')/label",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_dateFilter_data_718297121")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("call('appCommon.component.StandardProcessQueryBar.getManageTypeCodes')",xf._f('call',xf._i("appCommon.component.StandardProcessQueryBar.getManageTypeCodes")));	
xf._b("instance('standardProcessQueryBar_orgFilter_orgData_1043630500')/sValidState",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_orgFilter_orgData_1043630500")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('standardProcessQueryBar_orgFilter_data_1043630500')/value",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_orgFilter_data_1043630500")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('standardProcessQueryBar_orgFilter_data_1043630500')/label",xf._g(xf._f('instance',xf._i("standardProcessQueryBar_orgFilter_data_1043630500")),xf._h(false, xf._k("child",xf._j('','label')))));	
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
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fBizStateName",xf._h(false, xf._k("child",xf._j('','fBizStateName'))));	
xf._b("fNO",xf._h(false, xf._k("child",xf._j('','fNO'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fKind",xf._h(false, xf._k("child",xf._j('','fKind'))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("fRepairType",xf._h(false, xf._k("child",xf._j('','fRepairType'))));	
xf._b("fRepairDate",xf._h(false, xf._k("child",xf._j('','fRepairDate'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("fRepairAmount",xf._h(false, xf._k("child",xf._j('','fRepairAmount'))));	
xf._b("fApplyDeptName",xf._h(false, xf._k("child",xf._j('','fApplyDeptName'))));	
xf._b("fApplyPsnName",xf._h(false, xf._k("child",xf._j('','fApplyPsnName'))));	
xf._b("fApplyDate",xf._h(false, xf._k("child",xf._j('','fApplyDate'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('date', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action1,'mdMain', evt,false)});	
var xf_model_standardProcessQueryBar_bizStateFilter_model_1246124391 = new xforms.XFModel('standardProcessQueryBar_bizStateFilter_model_1246124391',null);	
new xforms.XFInstance2('standardProcessQueryBar_bizStateFilter_data_1246124391','standardProcessQueryBar_bizStateFilter_model_1246124391',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('standardProcessQueryBar_bizStateFilter_data_1246124391','value,label');	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("standardProcessQueryBar_bizStateFilter", justep.xbl("dRepairApply"), "fBizState", "", appCommon.component.Filter.getDefaultValueBinding("standardProcessQueryBar_bizStateFilter_defaultValue_1246124391"), true, ",", "", false);}));xf._p(justep('standardProcessQueryBar_bizStateFilter_model_1246124391'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'standardProcessQueryBar_bizStateFilter_model_1246124391', evt,false)});	
new xforms.XFExtSelect({id:'standardProcessQueryBar_bizStateFilter_select_1246124391',type:'gridselect',defaultLabelRef:xf._q("'编辑中,处理中,已完成'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('standardProcessQueryBar_bizStateFilter_data_1246124391')/value"),labelRef:xf._q("instance('standardProcessQueryBar_bizStateFilter_data_1246124391')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:null,columns:'label,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'checkbox,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="bsEditing"><cell>编辑中</cell></row><row id="bsExecuting"><cell>处理中</cell></row><row id="bsFinished"><cell>已完成</cell></row><row id="bsAborted"><cell>已终止</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_standardProcessQueryBar_bizStateFilter_defaultValue_1246124391=new xforms.XFOutput('standardProcessQueryBar_bizStateFilter_defaultValue_1246124391',xf._q("'bsEditing,bsExecuting,bsFinished'"),null,null);	
var xf_model_standardProcessQueryBar_dateFilter_model_718297121 = new xforms.XFModel('standardProcessQueryBar_dateFilter_model_718297121',null);	
xf._c('xf-bind-20','standardProcessQueryBar_dateFilter_model_718297121',"instance('standardProcessQueryBar_dateFilter_data_718297121')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-21','standardProcessQueryBar_dateFilter_model_718297121',"instance('standardProcessQueryBar_dateFilter_data_718297121')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('standardProcessQueryBar_dateFilter_data_718297121','standardProcessQueryBar_dateFilter_model_718297121',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('standardProcessQueryBar_dateFilter_data_718297121','value,label,beginDate,endDate');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtDateFilter.setFilterCondition("standardProcessQueryBar_dateFilter", justep.xbl("dRepairApply"), "single", "fCreateTime", "", "", "0", null, null, "", false);}));xf._p(justep('standardProcessQueryBar_dateFilter_model_718297121'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'standardProcessQueryBar_dateFilter_model_718297121', evt,false)});	
new xforms.XFExtSelect({id:'standardProcessQueryBar_dateFilter_select_718297121',type:'gridselect1',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("instance('standardProcessQueryBar_dateFilter_data_718297121')/value"),labelRef:xf._q("instance('standardProcessQueryBar_dateFilter_data_718297121')/label"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:null,columns:'label,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="0"><cell>全部</cell></row><row id="1"><cell>今天</cell></row><row id="2"><cell>昨天</cell></row><row id="3"><cell>本周</cell></row><row id="4"><cell>上周</cell></row><row id="5"><cell>本月</cell></row><row id="6"><cell>上月</cell></row><row id="7"><cell>今年</cell></row><row id="8"><cell>去年</cell></row><row id="9"><cell>自定义...</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFDialog('standardProcessQueryBar_dateFilter_dialog_718297121',"自定义",'model',true,false,true,true,false,null,'250','135',null,null,null,null);	
xf._d('9e7229b1b2b34dbfb186719298634804','text',xf._q("instance('standardProcessQueryBar_dateFilter_data_718297121')/beginDate"),null,null,null,null,false,false);	
xf._d('c7a8201d2b71418286a3a062fe478551','text',xf._q("instance('standardProcessQueryBar_dateFilter_data_718297121')/endDate"),null,null,null,null,false,false);	
var xf_output_standardProcessQueryBar_orgFilter_manageTypeCodes_1043630500=new xforms.XFOutput('standardProcessQueryBar_orgFilter_manageTypeCodes_1043630500',xf._q("call('appCommon.component.StandardProcessQueryBar.getManageTypeCodes')"),null,null);	
var xf_model_standardProcessQueryBar_orgFilter_model_1043630500 = new xforms.XFModel('standardProcessQueryBar_orgFilter_model_1043630500',null);	
new xforms.XFInstance2('standardProcessQueryBar_orgFilter_data_1043630500','standardProcessQueryBar_orgFilter_model_1043630500',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('standardProcessQueryBar_orgFilter_data_1043630500','value,label');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtOrgFilter.setFilterCondition("standardProcessQueryBar_orgFilter", justep.xbl("dRepairApply"), "fCreatePsnID", "fCreatePsnFID", "OA_AS_RepairExecute", "本人", "", false);}));xf._p(justep('standardProcessQueryBar_orgFilter_model_1043630500'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_3,'standardProcessQueryBar_orgFilter_model_1043630500', evt,false)});	
new xforms.XFExtSelect({id:'standardProcessQueryBar_orgFilter_select_1043630500',type:'treeselect',defaultLabelRef:xf._q("'本人'"),allSelectedLabelRef:null,ref:xf._q("instance('standardProcessQueryBar_orgFilter_data_1043630500')/value"),labelRef:xf._q("instance('standardProcessQueryBar_orgFilter_data_1043630500')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'standardProcessQueryBar_orgFilter_orgData_1043630500',columns:'sName,__c_,sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',valueColumn:'sFID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,',aligns:',,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1096243201',onRowHasChildren:func_441796315,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xforms.load_parts('vRepairApply');	
new xforms.XFDialog('GLOBAL_ID_N825171855',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1371822876');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1371822876", "");}));xf._p(justep('GLOBAL_ID_N825171855'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N825171855', evt,false)});	
var xf_menu_GLOBAL_ID_N848953944 = new xforms.XFMenu('GLOBAL_ID_N848953944','context');xf_menu_GLOBAL_ID_N848953944.menu.addContextZone('2aa9dedad5e54b89b2b463c85a2aaa98');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N848953944.hide()});xf_menu_GLOBAL_ID_N848953944.menu.setOpenMode('web');	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1351434279");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N848953944'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N848953944', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1351434279',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_725491737');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_725491737", "");}));xf._p(justep('GLOBAL_ID_1351434279'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_1351434279', evt,false)});	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_725491737');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1351434279'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_1351434279', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dRepairApply_part_loaded = false;	
function load_dRepairApply_part(callback){if (dRepairApply_part_loaded) return;dRepairApply_part_loaded = true;	
new xforms.XFInstance2('dRepairApply','mdMain',null,null,null,null,null,null,null,null,'recNo',null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dRepairApply')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dRepairApply')/fApplyDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dRepairApply')/fServiceYear","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dRepairApply')/fUsedYear","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dRepairApply')/fRemainValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dRepairApply')/fRepairDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dRepairApply')/fReturnDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dRepairApply')/fRepairAmount","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dRepairApply')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dRepairApply')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dRepairApply')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dRepairApply')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dRepairApply')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dRepairApply')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dRepairApply')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dRepairApply')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dRepairApply')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dRepairApply')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dRepairApply')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dRepairApply')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dRepairApply_part_init_loaded = false;	
function load_dRepairApply_part_init(){if (dRepairApply_part_init_loaded) return;dRepairApply_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var standardProcessQueryBar_orgFilter_orgData_1043630500_part_loaded = false;	
function load_standardProcessQueryBar_orgFilter_orgData_1043630500_part(callback){if (standardProcessQueryBar_orgFilter_orgData_1043630500_part_loaded) return;standardProcessQueryBar_orgFilter_orgData_1043630500_part_loaded = true;	
new xforms.XFInstance2('standardProcessQueryBar_orgFilter_orgData_1043630500','standardProcessQueryBar_orgFilter_model_1043630500',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-22','standardProcessQueryBar_orgFilter_model_1043630500',"instance('standardProcessQueryBar_orgFilter_orgData_1043630500')/sValidState","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var standardProcessQueryBar_orgFilter_orgData_1043630500_part_init_loaded = false;	
function load_standardProcessQueryBar_orgFilter_orgData_1043630500_part_init(){if (standardProcessQueryBar_orgFilter_orgData_1043630500_part_init_loaded) return;standardProcessQueryBar_orgFilter_orgData_1043630500_part_init_loaded = true;	
if(xforms.ready)justep('standardProcessQueryBar_orgFilter_model_1043630500').xformsObject.construct_part();}	
function load_vRepairApply(){if (justep("vRepairApply").getAttribute('loaded') && justep("vRepairApply").getAttribute('loaded') == 'true') return;justep("vRepairApply").setAttribute('loaded', 'true');	
if(typeof(load_vRepairApply_html) == 'function')load_vRepairApply_html();	
new xforms.XFGrid({id:'grdRepairApply',instance:'dRepairApply',systemColumnsPro:'version,fApplyOgnID,fApplyOgnName,fApplyDeptID,fApplyPosID,fApplyPosName,fApplyPsnID,fApplyPsnFID,fApplyPsnFName,fAssetID,fKindID,fSpecType,fServiceYear,fUsedYear,fRepairTypeID,fRemainValue,fDescription,fRemark,fReturnDate,fBizState,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fCurrentActivities,fCurrentExecutors,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fBizStateName,fNO,fCode,fKind,fName,fRepairType,fRepairDate,fRepairAmount,fApplyDeptName,fApplyPsnName,fApplyDate,space-column',headNames:'序号,状态,单据号,资产编号,资产类别,资产名称,维修类型,送修日期,维修金额,申请部门,申请人,申请日期,&nbsp;',widths:'30,50,120,100,80,80,70,70,80,94,70,80,*',types:'cntr,ro,html,ro,ro,ro,ro,date,ro,ro,ro,date,ro',hiddenColumns:'',aligns:'center,,,,,,,,right,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'grdRepairApplyRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fNO','grdRepairApply_fNORender');this.grid.bindColReadonly(null,'fRepairDate','true');this.grid.bindColFormat(null,'fRepairAmount','0,000.00');this.grid.bindColReadonly(null,'fApplyDate','true');}});	
}	
function load_vRepairApply_xblinit(){if (justep("vRepairApply").getAttribute('xblloaded') && justep("vRepairApply").getAttribute('xblloaded') == 'true') return;justep("vRepairApply").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
