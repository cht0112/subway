
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
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

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'ce059b4691d46830273e966754d1142b',time:1529388087},m:'a73b966936b71ce27a6efe0b60b269c7'};
function _xbl_JSClassDefine_tabs(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_tabs.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				this.tabbar = new justep.JSTabbar(this.domNode.id);
				justep.Utils.proxable(this, this.tabbar, justep.JSTabbar);
			}
		}));

_xbl_JSClassDefine_tabs.prototype.ClassName='_xbl_JSClassDefine_tabs';
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'ce059b4691d46830273e966754d1142b',time:1529388087},m:'c4f04b25423f86df65c380aeea35a4c7'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'ce059b4691d46830273e966754d1142b',time:1529388087},m:'6cf4db3a50543e03a6e4cbb12a4e6629'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'ce059b4691d46830273e966754d1142b',time:1529388087},m:'daa921bd536b9a20d6c6afcadb0d3ef3'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'ce059b4691d46830273e966754d1142b',time:1529388087},m:'1f90da5a14b2441101b74657da5a7a3e'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'ce059b4691d46830273e966754d1142b',time:1529388087},m:'6fdb3695c1018128001e18d1ad1699fa'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'ce059b4691d46830273e966754d1142b',time:1529388087},m:'fe924efd5bbc54eea6c6cd499f109b2f'};
	var ids=[{id:'82220bfa9222449bb8a1781dadee0da2', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabPanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'grid2', name:'xforms:grid'},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTr', name:'xforms:trigger', children:[{id:'454b9fc071774ca2bfbd1aea3868af65', name:'xforms:label'}]},{id:'removeStandard', name:'xforms:trigger', children:[{id:'7e3e69ca79864ed293524f518747093e', name:'xforms:label'}]},{id:'860abb32fc9844fa93d52ea77e996fe2', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'input2', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'default4', name:'xforms:label'},{id:'default5', name:'xforms:value'}]},{id:'input3', name:'xforms:input'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'default7', name:'xforms:label'},{id:'default8', name:'xforms:value'}]},{id:'treeSelect1', name:'xforms:treeselect1', children:[{id:'default10', name:'xforms:label'},{id:'default11', name:'xforms:value'}]},{id:'input4', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'}]},{id:'filter-pattern-f7dc16ad-fd11-4eae-a366-663628fc4f6b', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'166fd7de9f7b4da893c6e449758d75b8', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_1243543328', name:'xforms:menu'}]},{id:'GLOBAL_ID_49816285', name:'xforms:dialog'}]},{id:'filter-dialog-5a78c093-1a56-4e5a-9a9a-ac0cb2361941', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1707056816', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='ce059b4691d46830273e966754d1142b';
xforms.Core.fileName='form.js';	
xf._a(null,'grid2');xf._a(null,'insertTr');xf._a('insertTr','454b9fc071774ca2bfbd1aea3868af65');xf._a(null,'removeStandard');xf._a('removeStandard','7e3e69ca79864ed293524f518747093e');xf._a(null,'input2');xf._a(null,'gridSelect1');xf._a('gridSelect1','default4');xf._a('gridSelect1','default6');xf._a(null,'input3');xf._a(null,'gridSelect2');xf._a('gridSelect2','default7');xf._a('gridSelect2','default9');xf._a(null,'treeSelect1');xf._a('treeSelect1','default10');xf._a('treeSelect1','default12');xf._a(null,'input4');xf._a(null,'textarea1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dectionStandardTableD')/CITYCODE",xf._g(xf._f('instance',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','CITYCODE')))));	
xf._b("true()",xf._f('true'));	
xf._b("'数据不能为空'",xf._i("数据不能为空"));	
xf._b("instance('dectionStandardTableD')/PUBLISH_DATE",xf._g(xf._f('instance',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','PUBLISH_DATE')))));	
xf._b("instance('dectionStandardTableD')/STANDARD_E_FILE_ID",xf._g(xf._f('instance',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','STANDARD_E_FILE_ID')))));	
xf._b("instance('dectionStandardTableD')/STANDARD_FILE_VER",xf._g(xf._f('instance',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','STANDARD_FILE_VER')))));	
xf._b("instance('dectionStandardTableD')/STANDARD_FILE_DESC",xf._g(xf._f('instance',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','STANDARD_FILE_DESC')))));	
xf._b("instance('dectionStandardTableD')/DECTION_STANDARD_TYPE",xf._g(xf._f('instance',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','DECTION_STANDARD_TYPE')))));	
xf._b("instance('dectionStandardTableD')/CITY_CODE",xf._g(xf._f('instance',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','CITY_CODE')))));	
xf._b("instance('docNodeD')/sSize",xf._g(xf._f('instance',xf._i("docNodeD")),xf._h(false, xf._k("child",xf._j('','sSize')))));	
xf._b("instance('docNodeD')/sCreateTime",xf._g(xf._f('instance',xf._i("docNodeD")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('docNodeD')/sLastWriteTime",xf._g(xf._f('instance',xf._i("docNodeD")),xf._h(false, xf._k("child",xf._j('','sLastWriteTime')))));	
xf._b("instance('docNodeD')/sDocLiveVersionID",xf._g(xf._f('instance',xf._i("docNodeD")),xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID')))));	
xf._b("instance('docNodeD')/sFinishTime",xf._g(xf._f('instance',xf._i("docNodeD")),xf._h(false, xf._k("child",xf._j('','sFinishTime')))));	
xf._b("instance('docNodeD')/sFlag",xf._g(xf._f('instance',xf._i("docNodeD")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('docNodeD')/version",xf._g(xf._f('instance',xf._i("docNodeD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("calCheckbox",xf._h(false, xf._k("child",xf._j('','calCheckbox'))));	
xf._b("calSeq",xf._h(false, xf._k("child",xf._j('','calSeq'))));	
xf._b("DECTION_STANDARD_ID",xf._h(false, xf._k("child",xf._j('','DECTION_STANDARD_ID'))));	
xf._b("sDocName",xf._h(false, xf._k("child",xf._j('','sDocName'))));	
xf._b("dECTIONTYPENAME",xf._h(false, xf._k("child",xf._j('','dECTIONTYPENAME'))));	
xf._b("cITYCODECNAME",xf._h(false, xf._k("child",xf._j('','cITYCODECNAME'))));	
xf._b("PUBLISH_DATE",xf._h(false, xf._k("child",xf._j('','PUBLISH_DATE'))));	
xf._b("STANDARD_FILE_DESC",xf._h(false, xf._k("child",xf._j('','STANDARD_FILE_DESC'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dectionStandardTableD')/DECTION_STANDARD_ID",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','DECTION_STANDARD_ID')))));	
xf._b("data('dectionStandardTableD')/DECTION_STANDARD_TYPE",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','DECTION_STANDARD_TYPE')))));	
xf._b("data('dectionStandardTableD')/dECTIONTYPENAME",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','dECTIONTYPENAME')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("data('dectionStandardTableD')/PUBLISH_DATE",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','PUBLISH_DATE')))));	
xf._b("data('dectionStandardTableD')/CITYCODE",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','CITYCODE')))));	
xf._b("data('dectionStandardTableD')/cITYCODECNAME",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','cITYCODECNAME')))));	
xf._b("CITY_CODE",xf._h(false, xf._k("child",xf._j('','CITY_CODE'))));	
xf._b("cITYCODEENAME",xf._h(false, xf._k("child",xf._j('','cITYCODEENAME'))));	
xf._b("data('dectionStandardTableD')/STANDARD_E_FILE_ID",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','STANDARD_E_FILE_ID')))));	
xf._b("data('dectionStandardTableD')/sDocName",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','sDocName')))));	
xf._b("SA_DocNode",xf._h(false, xf._k("child",xf._j('','SA_DocNode'))));	
xf._b("sParentID",xf._h(false, xf._k("child",xf._j('','sParentID'))));	
xf._b("sSequence",xf._h(false, xf._k("child",xf._j('','sSequence'))));	
xf._b("sSize",xf._h(false, xf._k("child",xf._j('','sSize'))));	
xf._b("sKind",xf._h(false, xf._k("child",xf._j('','sKind'))));	
xf._b("sDocPath",xf._h(false, xf._k("child",xf._j('','sDocPath'))));	
xf._b("sDocDisplayPath",xf._h(false, xf._k("child",xf._j('','sDocDisplayPath'))));	
xf._b("sCreatorFID",xf._h(false, xf._k("child",xf._j('','sCreatorFID'))));	
xf._b("sCreatorName",xf._h(false, xf._k("child",xf._j('','sCreatorName'))));	
xf._b("sCreatorDeptName",xf._h(false, xf._k("child",xf._j('','sCreatorDeptName'))));	
xf._b("sCreateTime",xf._h(false, xf._k("child",xf._j('','sCreateTime'))));	
xf._b("sEditorFID",xf._h(false, xf._k("child",xf._j('','sEditorFID'))));	
xf._b("sEditorName",xf._h(false, xf._k("child",xf._j('','sEditorName'))));	
xf._b("sEditorDeptName",xf._h(false, xf._k("child",xf._j('','sEditorDeptName'))));	
xf._b("sLastWriterFID",xf._h(false, xf._k("child",xf._j('','sLastWriterFID'))));	
xf._b("sLastWriterName",xf._h(false, xf._k("child",xf._j('','sLastWriterName'))));	
xf._b("sLastWriterDeptName",xf._h(false, xf._k("child",xf._j('','sLastWriterDeptName'))));	
xf._b("sLastWriteTime",xf._h(false, xf._k("child",xf._j('','sLastWriteTime'))));	
xf._b("sFileID",xf._h(false, xf._k("child",xf._j('','sFileID'))));	
xf._b("sDescription",xf._h(false, xf._k("child",xf._j('','sDescription'))));	
xf._b("sDocLiveVersionID",xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID'))));	
xf._b("sDocSerialNumber",xf._h(false, xf._k("child",xf._j('','sDocSerialNumber'))));	
xf._b("sKeywords",xf._h(false, xf._k("child",xf._j('','sKeywords'))));	
xf._b("sClassification",xf._h(false, xf._k("child",xf._j('','sClassification'))));	
xf._b("sFinishTime",xf._h(false, xf._k("child",xf._j('','sFinishTime'))));	
xf._b("sNameSpace",xf._h(false, xf._k("child",xf._j('','sNameSpace'))));	
xf._b("sFlag",xf._h(false, xf._k("child",xf._j('','sFlag'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("sCacheName",xf._h(false, xf._k("child",xf._j('','sCacheName'))));	
xf._b("sRevisionCacheName",xf._h(false, xf._k("child",xf._j('','sRevisionCacheName'))));	
xf._b("data('dectionStandardTableD')/STANDARD_FILE_VER",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','STANDARD_FILE_VER')))));	
xf._b("data('dectionStandardTableD')/STANDARD_FILE_DESC",xf._g(xf._f('data',xf._i("dectionStandardTableD")),xf._h(false, xf._k("child",xf._j('','STANDARD_FILE_DESC')))));	
xf._b("not(call('justep.XData.canDo','dectionStandardTableD','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dectionStandardTableD"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dectionStandardTableD','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dectionStandardTableD"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dectionStandardTableD','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dectionStandardTableD"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dectionStandardTableD','First'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dectionStandardTableD"),xf._i("First"))));	
xf._b("not(call('justep.XData.canDo','dectionStandardTableD','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dectionStandardTableD"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','dectionStandardTableD','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dectionStandardTableD"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','dectionStandardTableD','Last'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dectionStandardTableD"),xf._i("Last"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dectionStandardTableD','model1',null,null,null,null,null,null,null,null,'calSeq,calCheckbox',null,'whereAll');	
xf._c('xf-bind-0','model1',"instance('dectionStandardTableD')/CITYCODE",null,null,"true()",null,null,null,"'数据不能为空'");	
xf._c('xf-bind-1','model1',"instance('dectionStandardTableD')/PUBLISH_DATE",null,null,"true()",null,null,null,"'数据不能为空'");	
xf._c('xf-bind-2','model1',"instance('dectionStandardTableD')/STANDARD_E_FILE_ID",null,null,"true()",null,null,null,"'数据不能为空'");	
xf._c('xf-bind-3','model1',"instance('dectionStandardTableD')/STANDARD_FILE_VER",null,null,"true()",null,null,null,"'数据不能为空'");	
xf._c('xf-bind-4','model1',"instance('dectionStandardTableD')/STANDARD_FILE_DESC",null,null,"true()",null,null,null,"'数据不能为空'");	
xf._c('xf-bind-5','model1',"instance('dectionStandardTableD')/DECTION_STANDARD_TYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dectionStandardTableD')/CITYCODE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('dectionStandardTableD')/PUBLISH_DATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('dectionStandardTableD')/CITY_CODE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('cityCodeD','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('cityCodeD',null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){dectionStandard.model1Ready(event)}));xf._p(justep('model1'),"xforms-ready",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
xforms.load_parts('view1');	
var xf_menu_GLOBAL_ID_1243543328 = new xforms.XFMenu('GLOBAL_ID_1243543328','context');xf_menu_GLOBAL_ID_1243543328.menu.addContextZone('166fd7de9f7b4da893c6e449758d75b8');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_1243543328.hide()});xf_menu_GLOBAL_ID_1243543328.menu.setOpenMode('web');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_49816285");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_1243543328'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_1243543328', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_49816285',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N716696016');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N716696016", "");}));xf._p(justep('GLOBAL_ID_49816285'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_49816285', evt,false)});	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N716696016');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_49816285'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_49816285', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1707056816',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1479698077');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1479698077", "");}));xf._p(justep('GLOBAL_ID_N1707056816'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N1707056816', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var docNodeD_part_loaded = false;	
function load_docNodeD_part(callback){if (docNodeD_part_loaded) return;docNodeD_part_loaded = true;	
new xforms.XFInstance2('docNodeD','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('docNodeD',null);	
xf._c('xf-bind-9','model1',"instance('docNodeD')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('docNodeD')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('docNodeD')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('docNodeD')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('docNodeD')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('docNodeD')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('docNodeD')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var docNodeD_part_init_loaded = false;	
function load_docNodeD_part_init(){if (docNodeD_part_init_loaded) return;docNodeD_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xforms.load_parts('view3');	
xforms.load_parts('view2');	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
new xforms.XFGrid({id:'grid2',instance:'dectionStandardTableD',systemColumnsPro:'DECTION_STANDARD_TYPE,CITYCODE,STANDARD_E_FILE_ID,STANDARD_FILE_VER,CITY_CODE,SA_DocNode',onInit:null,type:'grid',smartRender:20,delay:false,ids:'calCheckbox,calSeq,DECTION_STANDARD_ID,sDocName,dECTIONTYPENAME,cITYCODECNAME,PUBLISH_DATE,STANDARD_FILE_DESC,space-column',headNames:'#master_checkbox,序号,标准编码,文件名称,标准类型,标准所属城市,标准发布时间,标准内容描述,&nbsp;',widths:'37,30,130,100,121,100,112,137,*',types:'checkbox,cntr,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'dectionStandard.grid2RowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_insertTr=new xforms.XFTrigger('insertTr',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){dectionStandard.insertTrClick(event)}));xf._p(justep('insertTr'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'insertTr', evt,false)});	
var xf_trigger_removeStandard=new xforms.XFTrigger('removeStandard',null,"/UI/system/images/standardToolbar/standard/remove.gif",null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){dectionStandard.removeStandardClick(event)}));xf._p(justep('removeStandard'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'removeStandard', evt,false)});	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
xf._d('input2','text',xf._q("data('dectionStandardTableD')/DECTION_STANDARD_ID"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dectionStandardTableD')/DECTION_STANDARD_TYPE"),labelRef:xf._q("data('dectionStandardTableD')/dECTIONTYPENAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default69"><row id="default70"><cell id="default71">1</cell><cell id="default72">国际</cell></row><row id="default73"><cell id="default74">2</cell><cell id="default75">国标</cell></row><row id="default76"><cell id="default77">3</cell><cell id="default78">行标</cell></row><row id="default79"><cell id="default80">4</cell><cell id="default81">地标</cell></row><row id="default82"><cell id="default83">5</cell><cell id="default84">企业标准</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('input3','text',xf._q("data('dectionStandardTableD')/PUBLISH_DATE"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dectionStandardTableD')/CITYCODE"),labelRef:xf._q("data('dectionStandardTableD')/cITYCODECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'cityCodeD',columns:'CITY_CODE,cITYCODECNAME,__c_,cITYCODEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'CITY_CODE,cITYCODEENAME',valueColumn:'CITY_CODE',labelColumn:'cITYCODECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"#,#,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'treeSelect1',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dectionStandardTableD')/STANDARD_E_FILE_ID"),labelRef:xf._q("data('dectionStandardTableD')/sDocName"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'docNodeD',columns:'SA_DocNode,sDocName,__c_,sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',valueColumn:'SA_DocNode',labelColumn:'sDocName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:'tree',delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'dectionStandard.treeSelect1Closeup'});	
xf._d('input4','text',xf._q("data('dectionStandardTableD')/STANDARD_FILE_VER"),null,null,null,null,false,false);	
xf._d('textarea1','textarea',xf._q("data('dectionStandardTableD')/STANDARD_FILE_DESC"),null,null,null,null,false,false);	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
