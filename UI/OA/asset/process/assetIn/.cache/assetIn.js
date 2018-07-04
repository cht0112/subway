
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
_xbl_JSClassDefine_extDateFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({initXBL : function() {
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

	var ids=[{id:'wMain', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrAssetInList', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insert', name:'xforms:trigger', children:[{id:'dd5a9c82f65a4df78aeae6cf42981e32', name:'xforms:label'}]},{id:'3001684d2f0943f5879ff128d5a489aa', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'extDateFilter', name:'/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter', children:[{id:'extDateFilter_select_325848603', name:'xforms:gridselect1', children:[{id:'36b0326897414902bc2b5046e98c496d', name:'xforms:value'},{id:'230680df619e4911bf59d9fed9b62b7f', name:'xforms:label'}]},{id:'extDateFilter_dialog_325848603', name:'xforms:dialog', children:[{id:'127820721ae84a3081d1251ec2baff82', name:'xforms:input'},{id:'54dfd62bc969440e85d1e2b1cd218570', name:'xforms:input'}]}]},{id:'gridFilterMode', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'gridFilterMode_select_225007748', name:'xforms:gridselect', children:[{id:'default1', name:'xforms:value'},{id:'xuiLabel3', name:'xforms:label'}]}]},{id:'gridFilterState', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'gridFilterState_select_1346156592', name:'xforms:gridselect', children:[{id:'default15', name:'xforms:value'},{id:'xuiLabel2', name:'xforms:label'}]}]},{id:'grdAssetInList', name:'xforms:grid'}]},{id:'filter-dialog-6f8da0bd-a5fa-4ba1-806f-29ef654bbf00', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_178666694', name:'xforms:dialog'}]},{id:'filter-pattern-808180ee-c955-4f37-99e9-71aa82e848b8', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'160a6542f1384aa6b2a374a1cc7e64af', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_112513539', name:'xforms:menu'}]},{id:'GLOBAL_ID_668262683', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'insert');xf._a('insert','dd5a9c82f65a4df78aeae6cf42981e32');xf._a(null,'extDateFilter_select_325848603');xf._a('extDateFilter_select_325848603','230680df619e4911bf59d9fed9b62b7f');xf._a('extDateFilter_select_325848603','xf-itemset-0');xf._a(null,'127820721ae84a3081d1251ec2baff82');xf._a(null,'54dfd62bc969440e85d1e2b1cd218570');xf._a(null,'gridFilterMode_select_225007748');xf._a('gridFilterMode_select_225007748','xuiLabel3');xf._a('gridFilterMode_select_225007748','default2');xf._a(null,'gridFilterState_select_1346156592');xf._a('gridFilterState_select_1346156592','xuiLabel2');xf._a('gridFilterState_select_1346156592','default16');xf._a(null,'grdAssetInList');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dAssetInM')",xf._f('instance',xf._i("dAssetInM")));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dAssetInM')/version",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetInM')/fDate",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fDate')))));	
xf._b("instance('dAssetInM')/fAmount",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fAmount')))));	
xf._b("instance('dAssetInM')/fState",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fState')))));	
xf._b("instance('dAssetInM')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetInM')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetInM')/fExtendDate1",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dAssetInM')/fExtendDate2",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dAssetInM')/fExtendDate3",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dAssetInM')/fExtendDate4",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dAssetInM')/fExtendDate5",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dAssetInM')/fExtendNum1",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dAssetInM')/fExtendNum2",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dAssetInM')/fExtendNum3",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dAssetInM')/fExtendNum4",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dAssetInM')/fExtendNum5",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dAssetInMode')/version",xf._g(xf._f('instance',xf._i("dAssetInMode")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetInMode')/fLevel",xf._g(xf._f('instance',xf._i("dAssetInMode")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dAssetInMode')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetInMode")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetInMode')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetInMode")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('extDateFilter_data_325848603')/beginDate",xf._g(xf._f('instance',xf._i("extDateFilter_data_325848603")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('extDateFilter_data_325848603')/endDate",xf._g(xf._f('instance',xf._i("extDateFilter_data_325848603")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("instance('extDateFilter_data_325848603')/value",xf._g(xf._f('instance',xf._i("extDateFilter_data_325848603")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('extDateFilter_data_325848603')/label",xf._g(xf._f('instance',xf._i("extDateFilter_data_325848603")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'全部'",xf._i("全部"));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("instance('gridFilterMode_data_225007748')/value",xf._g(xf._f('instance',xf._i("gridFilterMode_data_225007748")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('gridFilterMode_data_225007748')/label",xf._g(xf._f('instance',xf._i("gridFilterMode_data_225007748")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
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
xf._b("instance('gridFilterState_data_1346156592')/value",xf._g(xf._f('instance',xf._i("gridFilterState_data_1346156592")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('gridFilterState_data_1346156592')/label",xf._g(xf._f('instance',xf._i("gridFilterState_data_1346156592")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("value",xf._h(false, xf._k("child",xf._j('','value'))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fNO",xf._h(false, xf._k("child",xf._j('','fNO'))));	
xf._b("fDutyDeptName",xf._h(false, xf._k("child",xf._j('','fDutyDeptName'))));	
xf._b("fDutyPsnName",xf._h(false, xf._k("child",xf._j('','fDutyPsnName'))));	
xf._b("fDate",xf._h(false, xf._k("child",xf._j('','fDate'))));	
xf._b("fMode",xf._h(false, xf._k("child",xf._j('','fMode'))));	
xf._b("fStateName",xf._h(false, xf._k("child",xf._j('','fStateName'))));	
xf._b("fAmount",xf._h(false, xf._k("child",xf._j('','fAmount'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("not(call('justep.XData.canDo','dAssetInM','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dAssetInM"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dAssetInM','mdMain',null,null,null,null,null,null,null,null,'recNo',null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dAssetInM')",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dAssetInM')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dAssetInM')/fDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dAssetInM')/fAmount","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dAssetInM')/fState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dAssetInM')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dAssetInM')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dAssetInM')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dAssetInM')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dAssetInM')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dAssetInM')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dAssetInM')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dAssetInM')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dAssetInM')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dAssetInM')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dAssetInM')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dAssetInM')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action2,'mdMain', evt,false)});	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_178666694',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1345520100');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1345520100", "");}));xf._p(justep('GLOBAL_ID_178666694'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_178666694', evt,false)});	
var xf_menu_GLOBAL_ID_112513539 = new xforms.XFMenu('GLOBAL_ID_112513539','context');xf_menu_GLOBAL_ID_112513539.menu.addContextZone('160a6542f1384aa6b2a374a1cc7e64af');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_112513539.hide()});xf_menu_GLOBAL_ID_112513539.menu.setOpenMode('web');	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_668262683");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_112513539'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_112513539', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_668262683',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_877072924');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_877072924", "");}));xf._p(justep('GLOBAL_ID_668262683'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_668262683', evt,false)});	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_877072924');if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_668262683'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_668262683', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dAssetInMode_part_loaded = false;	
function load_dAssetInMode_part(callback){if (dAssetInMode_part_loaded) return;dAssetInMode_part_loaded = true;	
new xforms.XFInstance2('dAssetInMode','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dAssetInMode',null);	
xf._c('xf-bind-17','mdMain',"instance('dAssetInMode')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dAssetInMode')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dAssetInMode')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dAssetInMode')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dAssetInMode_part_init_loaded = false;	
function load_dAssetInMode_part_init(){if (dAssetInMode_part_init_loaded) return;dAssetInMode_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var dAssetInStatus_part_loaded = false;	
function load_dAssetInStatus_part(callback){if (dAssetInStatus_part_loaded) return;dAssetInStatus_part_loaded = true;	
new xforms.XFInstance2('dAssetInStatus','mdMain',null,'<rows id="default8"><row id="default9"><cell id="default10">未完成</cell><cell id="default11">0</cell></row><row id="default12"><cell id="default13">已完成</cell><cell id="default14">1</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dAssetInStatus','label,value');	
if(callback)callback();}	
var dAssetInStatus_part_init_loaded = false;	
function load_dAssetInStatus_part_init(){if (dAssetInStatus_part_init_loaded) return;dAssetInStatus_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_insert=new xforms.XFTrigger('insert',null,"/UI/appCommon/images/insert.gif","/UI/appCommon/images/un_insert.gif",false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){insertDOMActivate(event)}));xf._p(justep('insert'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'insert', evt,false)});	
xforms.load_parts('vFilter');	
new xforms.XFGrid({id:'grdAssetInList',instance:'dAssetInM',systemColumnsPro:'version,fDutyOgnID,fDutyOgnName,fDutyOgnFID,fDutyDeptID,fDutyPosID,fDutyPosName,fDutyPsnID,fDutyPsnFID,fDutyPsnFName,fModeID,fState,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fNO,fDutyDeptName,fDutyPsnName,fDate,fMode,fStateName,fAmount,fRemark',headNames:'序号,单据号,责任部门,责任人,入库日期,入库方式,入库状态,总金额,备注',widths:'30,120,100,70,70,70,70,100,184',types:'cntr,html,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,,right,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'grdAssetInListRowDblclick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fNO','grdAssetInList_fNORender');this.grid.bindColFormat(null,'fAmount','0,000.00');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vFilter(){if (justep("vFilter").getAttribute('loaded') && justep("vFilter").getAttribute('loaded') == 'true') return;justep("vFilter").setAttribute('loaded', 'true');	
if(typeof(load_vFilter_html) == 'function')load_vFilter_html();	
var xf_model_extDateFilter_model_325848603 = new xforms.XFModel('extDateFilter_model_325848603',null);	
xf._c('xf-bind-21','extDateFilter_model_325848603',"instance('extDateFilter_data_325848603')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-22','extDateFilter_model_325848603',"instance('extDateFilter_data_325848603')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('extDateFilter_data_325848603','extDateFilter_model_325848603',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('extDateFilter_data_325848603','value,label,beginDate,endDate');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtDateFilter.setFilterCondition("extDateFilter", justep.xbl("dAssetInM"), "single", "fDate", "", "", "0", null, null, "", false); }));xf._p(justep('extDateFilter_model_325848603'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'extDateFilter_model_325848603', evt,false)});	
new xforms.XFExtSelect({id:'extDateFilter_select_325848603',type:'gridselect1',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("instance('extDateFilter_data_325848603')/value"),labelRef:xf._q("instance('extDateFilter_data_325848603')/label"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:null,columns:'label',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:'',aligns:'',types:'ro',widths:{widths:"*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="0"><cell>全部</cell></row><row id="1"><cell>今天</cell></row><row id="2"><cell>昨天</cell></row><row id="3"><cell>本周</cell></row><row id="4"><cell>上周</cell></row><row id="5"><cell>本月</cell></row><row id="6"><cell>上月</cell></row><row id="7"><cell>今年</cell></row><row id="8"><cell>去年</cell></row><row id="9"><cell>自定义...</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFDialog('extDateFilter_dialog_325848603',"自定义",'model',true,false,true,true,false,null,'250','135',null,null,null,null);	
xf._d('127820721ae84a3081d1251ec2baff82','text',xf._q("instance('extDateFilter_data_325848603')/beginDate"),null,null,null,null,false,false);	
xf._d('54dfd62bc969440e85d1e2b1cd218570','text',xf._q("instance('extDateFilter_data_325848603')/endDate"),null,null,null,null,false,false);	
var xf_model_gridFilterMode_model_225007748 = new xforms.XFModel('gridFilterMode_model_225007748',null);	
new xforms.XFInstance2('gridFilterMode_data_225007748','gridFilterMode_model_225007748',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('gridFilterMode_data_225007748','value,label');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("gridFilterMode", justep.xbl("dAssetInM"), "fMode", "", appCommon.component.Filter.getDefaultValueBinding("gridFilterMode_defaultValue_225007748"), true, ",", "", false); }));xf._p(justep('gridFilterMode_model_225007748'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_3,'gridFilterMode_model_225007748', evt,false)});	
new xforms.XFExtSelect({id:'gridFilterMode_select_225007748',type:'gridselect',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('gridFilterMode_data_225007748')/value"),labelRef:xf._q("instance('gridFilterMode_data_225007748')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dAssetInMode',columns:'fName,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',valueColumn:'fName',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_gridFilterState_model_1346156592 = new xforms.XFModel('gridFilterState_model_1346156592',null);	
new xforms.XFInstance2('gridFilterState_data_1346156592','gridFilterState_model_1346156592',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('gridFilterState_data_1346156592','value,label');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("gridFilterState", justep.xbl("dAssetInM"), "fState", "", appCommon.component.Filter.getDefaultValueBinding("gridFilterState_defaultValue_1346156592"), true, ",", "assetIn.gridFilterStateGetCondition", false); }));xf._p(justep('gridFilterState_model_1346156592'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_4,'gridFilterState_model_1346156592', evt,false)});	
new xforms.XFExtSelect({id:'gridFilterState_select_1346156592',type:'gridselect',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('gridFilterState_data_1346156592')/value"),labelRef:xf._q("instance('gridFilterState_data_1346156592')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dAssetInStatus',columns:'label,value',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'checkbox,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_vFilter_xblinit(){if (justep("vFilter").getAttribute('xblloaded') && justep("vFilter").getAttribute('xblloaded') == 'true') return;justep("vFilter").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('extDateFilter_model_325848603').xformsObject.construct_part();	
if(xforms.ready)justep('gridFilterMode_model_225007748').xformsObject.construct_part();	
if(xforms.ready)justep('gridFilterState_model_1346156592').xformsObject.construct_part();	
}	
var __actions__ = {	
};	
		