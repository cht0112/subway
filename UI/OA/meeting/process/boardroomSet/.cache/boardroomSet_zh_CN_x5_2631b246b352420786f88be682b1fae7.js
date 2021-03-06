
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
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
									if(info.disImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)info.disImg = justep.Request.convertURL(info.disImg, true);
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

	var ids=[{id:'8fd8519dcbd041c8af4a208262d148f5', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'9ca17db3a47841ee91feb46d2f7986b9', name:'xforms:trigger', children:[{id:'3b43f4a379a54da387c06d8194c0d135', name:'xforms:label'}]},{id:'9337df8a1bdc4eb5bb3042d1775eb853', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'trgStartUse', name:'xforms:trigger', children:[{id:'49f03a3076bf43ed9587f89e41e2113c', name:'xforms:label'}]},{id:'trgAllUse', name:'xforms:trigger', children:[{id:'ada229e579d44915be671959b501f60b', name:'xforms:label'}]},{id:'trgStopUse', name:'xforms:trigger', children:[{id:'2bd58f1c14fc42179768ca9bc6bcaaa1', name:'xforms:label'}]}]},{id:'grdBoardroom', name:'xforms:grid'}]},{id:'dlgBoardroomInfo', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'filter-dialog-cfb820bb-3a0c-4e5d-b590-f75d2117b1d5', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1805758861', name:'xforms:dialog'}]},{id:'filter-pattern-72f8d23a-8c24-4620-a2b8-d9a6812f487c', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'f327108898824ba891162a0c23c111aa', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1247146645', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1961625965', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'9ca17db3a47841ee91feb46d2f7986b9');xf._a('9ca17db3a47841ee91feb46d2f7986b9','3b43f4a379a54da387c06d8194c0d135');xf._a(null,'trgStartUse');xf._a('trgStartUse','49f03a3076bf43ed9587f89e41e2113c');xf._a(null,'trgAllUse');xf._a('trgAllUse','ada229e579d44915be671959b501f60b');xf._a(null,'trgStopUse');xf._a('trgStopUse','2bd58f1c14fc42179768ca9bc6bcaaa1');xf._a(null,'grdBoardroom');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dList')/version",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dList')/fHoldNum",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fHoldNum')))));	
xf._b("instance('dList')/fCreateTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dList')/fUpdateTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dList')/fDisUseTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fDisUseTime')))));	
xf._b("instance('dList')/fExtendDate1",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dList')/fExtendDate2",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dList')/fExtendDate3",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dList')/fExtendDate4",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dList')/fExtendDate5",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dList')/fExtendNum1",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dList')/fExtendNum2",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dList')/fExtendNum3",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dList')/fExtendNum4",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dList')/fExtendNum5",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dBtnStatus')/startUse",xf._g(xf._f('instance',xf._i("dBtnStatus")),xf._h(false, xf._k("child",xf._j('','startUse')))));	
xf._b("instance('dList')/fUseStatus = '1'",xf._l(xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fUseStatus')))), '=',xf._i("1")));	
xf._b("instance('dBtnStatus')/stopUse",xf._g(xf._f('instance',xf._i("dBtnStatus")),xf._h(false, xf._k("child",xf._j('','stopUse')))));	
xf._b("not(instance('dList')/fUseStatus = '1')",xf._f('not',xf._l(xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fUseStatus')))), '=',xf._i("1"))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fUseStatusName",xf._h(false, xf._k("child",xf._j('','fUseStatusName'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("fType",xf._h(false, xf._k("child",xf._j('','fType'))));	
xf._b("fHoldNum",xf._h(false, xf._k("child",xf._j('','fHoldNum'))));	
xf._b("fUse",xf._h(false, xf._k("child",xf._j('','fUse'))));	
xf._b("fFloor",xf._h(false, xf._k("child",xf._j('','fFloor'))));	
xf._b("fAddress",xf._h(false, xf._k("child",xf._j('','fAddress'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("not(call('justep.XData.canDo','dList','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dList"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dList','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dList"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dList','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dList')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dList')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dList')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dList')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dList')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dList')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dList')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dList')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dList')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dList')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dList')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dList')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dList')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dList')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dList')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dBtnStatus','mdMain',null,'<rows><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dBtnStatus','startUse,stopUse');	
xf._c('xf-bind-15','mdMain',"instance('dBtnStatus')/startUse",null,"instance('dList')/fUseStatus = '1'",null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dBtnStatus')/stopUse",null,"not(instance('dList')/fUseStatus = '1')",null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N1805758861',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_431980880');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_431980880", "");}));xf._p(justep('GLOBAL_ID_N1805758861'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N1805758861', evt,false)});	
var xf_menu_GLOBAL_ID_1247146645 = new xforms.XFMenu('GLOBAL_ID_1247146645','context');xf_menu_GLOBAL_ID_1247146645.menu.addContextZone('f327108898824ba891162a0c23c111aa');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1247146645.hide()});xf_menu_GLOBAL_ID_1247146645.menu.setOpenMode('web');	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1961625965");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1247146645'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_1247146645', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1961625965',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1611695038');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1611695038", "");}));xf._p(justep('GLOBAL_ID_N1961625965'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N1961625965', evt,false)});	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1611695038');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1961625965'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_N1961625965', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vToolbar');	
new xforms.XFGrid({id:'grdBoardroom',instance:'dList',systemColumnsPro:'version,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fUseStatusName,fCode,fName,fType,fHoldNum,fUse,fFloor,fAddress,fRemark,space-column',headNames:'序号,启用标识,编码,名称,会议室类型,容纳人数,主要用途,所在楼层,地址,备注,&nbsp;',widths:'30,60,80,100,100,60,100,80,100,*,*',types:'cntr,ro,ro,html,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fName','gridBoardroom_fNameRender');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vToolbar(){if (justep("vToolbar").getAttribute('loaded') && justep("vToolbar").getAttribute('loaded') == 'true') return;justep("vToolbar").setAttribute('loaded', 'true');	
if(typeof(load_vToolbar_html) == 'function')load_vToolbar_html();	
var xf_trigger_9ca17db3a47841ee91feb46d2f7986b9=new xforms.XFTrigger('9ca17db3a47841ee91feb46d2f7986b9',null,"/UI/appCommon/images/insert.gif","/UI/appCommon/images/un_insert.gif",false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trigger2DOMActivate(event)}));xf._p(justep('9ca17db3a47841ee91feb46d2f7986b9'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'9ca17db3a47841ee91feb46d2f7986b9', evt,false)});	
var xf_trigger_trgStartUse=new xforms.XFTrigger('trgStartUse',xf._q("instance('dBtnStatus')/startUse"),"/UI/appCommon/images/start_use.gif","/UI/appCommon/images/un_start_use.gif",false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){startUseFun(event)}));xf._p(justep('trgStartUse'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'trgStartUse', evt,false)});	
var xf_trigger_trgAllUse=new xforms.XFTrigger('trgAllUse',null,"/UI/appCommon/images/all_use.gif","/UI/appCommon/images/all_use.gif",false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){useAllFun(event)}));xf._p(justep('trgAllUse'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'trgAllUse', evt,false)});	
var xf_trigger_trgStopUse=new xforms.XFTrigger('trgStopUse',xf._q("instance('dBtnStatus')/stopUse"),"/UI/appCommon/images/stop_use.gif","/UI/appCommon/images/un_stop_use.gif",false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){stopUseFun(event)}));xf._p(justep('trgStopUse'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'trgStopUse', evt,false)});	
}	
function load_vToolbar_xblinit(){if (justep("vToolbar").getAttribute('xblloaded') && justep("vToolbar").getAttribute('xblloaded') == 'true') return;justep("vToolbar").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
