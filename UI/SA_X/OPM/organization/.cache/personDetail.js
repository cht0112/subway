
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"] = _xbl_JSClassDefine_windowDialogReceiver;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_windowDialogReceiver(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowDialogReceiver.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var s = node.getAttribute('onReceive');
				if(s) justep.windowDialogReceiver.acceptParentParamsFun = s;
			},
			"windowEnsure" : function(data,noclose){
				justep.windowDialogReceiver.windowEnsure(data,noclose);
			}, 
			"windowCancel" : function(){
				justep.windowDialogReceiver.windowCancel();
			}, 
			"windowRefresh" : function(){
				justep.windowDialogReceiver.windowRefresh();
			}
		}));

function _xbl_JSClassDefine_window(obj) {
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
					} 		}
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
									info.enImg = img.attr("src");					if(info.enImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)
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

	var ids=[{id:'52a77387733442bab95ffe4ce9d2be9d', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'saveMas', name:'xforms:trigger', children:[{id:'acb574e9c1314b2d9a118f3dcbe2ad5b', name:'xforms:label'}]}]},{id:'inputMainOrgFName', name:'xforms:input'},{id:'inputName', name:'xforms:input'},{id:'inputLoginName', name:'xforms:input'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel3', name:'xforms:label'},{id:'default8', name:'xforms:value'}]},{id:'inputBirthday', name:'xforms:input'},{id:'inputNation', name:'xforms:input'},{id:'gridSelect2', name:'xforms:gridselect1', children:[{id:'xuiLabel4', name:'xforms:label'},{id:'default19', name:'xforms:value'}]},{id:'gridSelectPosition', name:'xforms:gridselect1', children:[{id:'xuiLabel5', name:'xforms:label'},{id:'default24', name:'xforms:value'}]},{id:'gridSelectDegree', name:'xforms:gridselect1', children:[{id:'xuiLabel6', name:'xforms:label'},{id:'default31', name:'xforms:value'}]},{id:'gridSelectEd', name:'xforms:gridselect1', children:[{id:'xuiLabel7', name:'xforms:label'},{id:'default48', name:'xforms:value'}]},{id:'gridSelectPoli', name:'xforms:gridselect1', children:[{id:'xuiLabel8', name:'xforms:label'},{id:'default63', name:'xforms:value'}]},{id:'inputProfessional', name:'xforms:input'},{id:'gridSelectPoTi', name:'xforms:gridselect1', children:[{id:'xuiLabel9', name:'xforms:label'},{id:'default72', name:'xforms:value'}]},{id:'inputEmailAddress', name:'xforms:input'},{id:'inputMObile', name:'xforms:input'},{id:'gridSelectOperatorState', name:'xforms:gridselect1', children:[{id:'xuiLabel10', name:'xforms:label'},{id:'default33', name:'xforms:value'}]},{id:'textarea2', name:'xforms:textarea'},{id:'inputPasswordTimeLimit', name:'xforms:input'},{id:'input2', name:'xforms:input'},{id:'receiver', name:'/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver'},{id:'input4', name:'xforms:input'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'tbsMaster2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertMas', name:'xforms:trigger', children:[{id:'636567f41b6f4b6884fc63c98f045127', name:'xforms:label'}]}]},{id:'grdDetail', name:'xforms:grid'}]},{id:'toolbars3', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTr', name:'xforms:trigger', children:[{id:'116f390e63984def9dd7af5517ab0398', name:'xforms:label'}]}]},{id:'grid1', name:'xforms:grid'},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default85', name:'xforms:label'},{id:'default89', name:'xforms:value'}]},{id:'input1', name:'xforms:input'},{id:'input3', name:'xforms:input'},{id:'textarea1', name:'xforms:textarea'},{id:'textarea3', name:'xforms:textarea'},{id:'textarea4', name:'xforms:textarea'}]},{id:'filter-dialog-7ce0073a-2bec-4a5d-bfb9-5bd11dc1e921', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N343220040', name:'xforms:dialog'}]},{id:'filter-pattern-be0dbb4a-7744-4f49-a199-ebf83bd738cf', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'25e77d2785f24e648f2b8c8b3ad2697f', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1599314385', name:'xforms:menu'}]},{id:'GLOBAL_ID_N712049927', name:'xforms:dialog'}]},{id:'gridSelect6', name:'xforms:gridselect1', children:[{id:'xuiLabel14', name:'xforms:label'},{id:'default115', name:'xforms:value'}]},{id:'gridSelect7', name:'xforms:gridselect1', children:[{id:'xuiLabel15', name:'xforms:label'},{id:'default128', name:'xforms:value'}]},{id:'gridSelect8', name:'xforms:gridselect1', children:[{id:'xuiLabel16', name:'xforms:label'},{id:'default136', name:'xforms:value'}]},{id:'filter-dialog-2850880c-ee74-459a-bda2-ce22fb11551c', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_555435348', name:'xforms:dialog'}]},{id:'filter-pattern-312f2285-e880-47dc-b570-6151561580ba', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'f7f46c5cfeba46868c77eebc84d3fcf4', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N139285660', name:'xforms:menu'}]},{id:'GLOBAL_ID_N168443569', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'saveMas');xf._a('saveMas','acb574e9c1314b2d9a118f3dcbe2ad5b');xf._a(null,'inputMainOrgFName');xf._a(null,'inputName');xf._a(null,'inputLoginName');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel3');xf._a('gridSelect1','default9');xf._a(null,'inputBirthday');xf._a(null,'inputNation');xf._a(null,'gridSelect2');xf._a('gridSelect2','xuiLabel4');xf._a('gridSelect2','default22');xf._a(null,'gridSelectPosition');xf._a('gridSelectPosition','xuiLabel5');xf._a('gridSelectPosition','default25');xf._a(null,'gridSelectDegree');xf._a('gridSelectDegree','xuiLabel6');xf._a('gridSelectDegree','default32');xf._a(null,'gridSelectEd');xf._a('gridSelectEd','xuiLabel7');xf._a('gridSelectEd','default49');xf._a(null,'gridSelectPoli');xf._a('gridSelectPoli','xuiLabel8');xf._a('gridSelectPoli','default64');xf._a(null,'inputProfessional');xf._a(null,'gridSelectPoTi');xf._a('gridSelectPoTi','xuiLabel9');xf._a('gridSelectPoTi','default73');xf._a(null,'inputEmailAddress');xf._a(null,'inputMObile');xf._a(null,'gridSelectOperatorState');xf._a('gridSelectOperatorState','xuiLabel10');xf._a('gridSelectOperatorState','default36');xf._a(null,'textarea2');xf._a(null,'inputPasswordTimeLimit');xf._a(null,'input2');xf._a(null,'input4');xf._a(null,'insertMas');xf._a('insertMas','636567f41b6f4b6884fc63c98f045127');xf._a(null,'grdDetail');xf._a(null,'insertTr');xf._a('insertTr','116f390e63984def9dd7af5517ab0398');xf._a(null,'grid1');xf._a(null,'gridSelect3');xf._a('gridSelect3','default85');xf._a('gridSelect3','default90');xf._a(null,'input1');xf._a(null,'input3');xf._a(null,'textarea1');xf._a(null,'textarea3');xf._a(null,'textarea4');xf._a(null,'gridSelect6');xf._a('gridSelect6','xuiLabel14');xf._a('gridSelect6','default116');xf._a(null,'gridSelect7');xf._a('gridSelect7','xuiLabel15');xf._a('gridSelect7','default129');xf._a(null,'gridSelect8');xf._a('gridSelect8','xuiLabel16');xf._a('gridSelect8','default137');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dPerson')/sName",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("true()",xf._f('true'));	
xf._b("'名称不能为空！'",xf._i("名称不能为空！"));	
xf._b("instance('dPerson')/sPasswordModifyTime",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sPasswordModifyTime')))));	
xf._b("instance('dPerson')/sLoginName",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sLoginName')))));	
xf._b("'登录名不能为空！'",xf._i("登录名不能为空！"));	
xf._b("instance('dPerson')/sNumb",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sNumb')))));	
xf._b("instance('dPerson')/sPasswordTimeLimit",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sPasswordTimeLimit')))));	
xf._b("instance('dPerson')/sSequence",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('dPerson')/sValidState",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dPerson')/sBirthday",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sBirthday')))));	
xf._b("instance('dPerson')/sJoinDate",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sJoinDate')))));	
xf._b("instance('dPerson')/version",xf._g(xf._f('instance',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dMainOrg')/sFName",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','sFName')))));	
xf._b("instance('dMainOrg')/sValidState",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dMainOrg')/sLevel",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dMainOrg')/version",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dMainOrg')/personNumb",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('dMainOrg')/personValidState",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('dMainOrg')/personVersion",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('dMainOrg')/eDUCATIONID",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('dMainOrg')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('dMainOrg')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('dMainOrg')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('myData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("'性别不能为空'",xf._i("性别不能为空"));	
xf._b("instance('myData')/oFFICEID",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("'职位不能为空'",xf._i("职位不能为空"));	
xf._b("instance('myData')/dEGREEID",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("'学位不能为空'",xf._i("学位不能为空"));	
xf._b("instance('myData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("'学历不能为空'",xf._i("学历不能为空"));	
xf._b("instance('myData')/pOLITICALID",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("'政治面貌不能为空'",xf._i("政治面貌不能为空"));	
xf._b("instance('myData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("'操作员状态不能为空'",xf._i("操作员状态不能为空"));	
xf._b("instance('myData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('myData')/pOSITIONID",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('myData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('myData')/OFFICE_TYPE_CODE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','OFFICE_TYPE_CODE')))));	
xf._b("instance('myData')/POSITION_TYPE_CODE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','POSITION_TYPE_CODE')))));	
xf._b("instance('myData')/ACADEMIC_DEGREE_CODE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','ACADEMIC_DEGREE_CODE')))));	
xf._b("instance('myData')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('myData')/POLITICAL_AFFILIATION_CODE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','POLITICAL_AFFILIATION_CODE')))));	
xf._b("instance('myData')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('yyjcdx')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("yyjcdx")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('yyjcdx')/dEVICETYPE",xf._g(xf._f('instance',xf._i("yyjcdx")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('bizData2')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('bizData2')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('bizData2')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("instance('bizData2')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('bizData2')/DETECTION_RANGE_TYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE')))));	
xf._b("instance('educationJobD')/eXPERIENCETYPE",xf._g(xf._f('instance',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCETYPE')))));	
xf._b("instance('educationJobD')/eXPERIENCESTARTDATE",xf._g(xf._f('instance',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCESTARTDATE')))));	
xf._b("instance('educationJobD')/eXPERIENCEENDDATE",xf._g(xf._f('instance',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCEENDDATE')))));	
xf._b("data('dMainOrg')/sName",xf._g(xf._f('data',xf._i("dMainOrg")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dPerson')/sName",xf._g(xf._f('data',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sName')))));	
xf._b("data('dPerson')/sLoginName",xf._g(xf._f('data',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sLoginName')))));	
xf._b("data('myData')/oPERATORSEX",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('myData')/oPERATORBIRTHDAY",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("data('myData')/nATION",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','nATION')))));	
xf._b("data('myData')/oFFICEID",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("data('myData')/oFFICEIDCNAME",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oFFICEIDCNAME')))));	
xf._b("oFFICEIDCNAME",xf._h(false, xf._k("child",xf._j('','oFFICEIDCNAME'))));	
xf._b("OFFICE_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','OFFICE_TYPE_CODE'))));	
xf._b("oFFICEIDENAME",xf._h(false, xf._k("child",xf._j('','oFFICEIDENAME'))));	
xf._b("data('myData')/pOSITIONID",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("data('myData')/pOSITIONIDCNAME",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOSITIONIDCNAME')))));	
xf._b("pOSITIONIDCNAME",xf._h(false, xf._k("child",xf._j('','pOSITIONIDCNAME'))));	
xf._b("POSITION_TYPE_CODE",xf._h(false, xf._k("child",xf._j('','POSITION_TYPE_CODE'))));	
xf._b("pOSITIONIDENAME",xf._h(false, xf._k("child",xf._j('','pOSITIONIDENAME'))));	
xf._b("data('myData')/dEGREEID",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("data('myData')/dEGREEIDCNAME",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','dEGREEIDCNAME')))));	
xf._b("dEGREEIDCNAME",xf._h(false, xf._k("child",xf._j('','dEGREEIDCNAME'))));	
xf._b("ACADEMIC_DEGREE_CODE",xf._h(false, xf._k("child",xf._j('','ACADEMIC_DEGREE_CODE'))));	
xf._b("dEGREEIDENAME",xf._h(false, xf._k("child",xf._j('','dEGREEIDENAME'))));	
xf._b("data('myData')/eDUCATIONID",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("data('myData')/eDUCATIONIDCNAME",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONIDCNAME')))));	
xf._b("eDUCATIONIDCNAME",xf._h(false, xf._k("child",xf._j('','eDUCATIONIDCNAME'))));	
xf._b("EDUCATION_CODE",xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE'))));	
xf._b("eDUCATIONIDENAME",xf._h(false, xf._k("child",xf._j('','eDUCATIONIDENAME'))));	
xf._b("data('myData')/pOLITICALID",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("data('myData')/pOLITICALIDCNAME",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOLITICALIDCNAME')))));	
xf._b("pOLITICALIDCNAME",xf._h(false, xf._k("child",xf._j('','pOLITICALIDCNAME'))));	
xf._b("POLITICAL_AFFILIATION_CODE",xf._h(false, xf._k("child",xf._j('','POLITICAL_AFFILIATION_CODE'))));	
xf._b("pOLITICALIDENAME",xf._h(false, xf._k("child",xf._j('','pOLITICALIDENAME'))));	
xf._b("data('myData')/pROFESSIONAL",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pROFESSIONAL')))));	
xf._b("data('myData')/pOSITIONALTITLE",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("data('myData')/pOSITIONALTITLEIDCNAME",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLEIDCNAME')))));	
xf._b("pOSITIONALTITLEIDCNAME",xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLEIDCNAME'))));	
xf._b("POSITIONAL_TITLE_CODE",xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE'))));	
xf._b("pOSITIONALTITLEIDENAME",xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLEIDENAME'))));	
xf._b("data('myData')/eMAILADDRESS",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','eMAILADDRESS')))));	
xf._b("data('myData')/mOBILE",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','mOBILE')))));	
xf._b("data('myData')/oPERATORSTATE",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("data('myData')/mEMO",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('dPerson')/sPasswordTimeLimit",xf._g(xf._f('data',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sPasswordTimeLimit')))));	
xf._b("data('dPerson')/sPasswordModifyTime",xf._g(xf._f('data',xf._i("dPerson")),xf._h(false, xf._k("child",xf._j('','sPasswordModifyTime')))));	
xf._b("data('myData')/cARDID",xf._g(xf._f('data',xf._i("myData")),xf._h(false, xf._k("child",xf._j('','cARDID')))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("oPERATORID",xf._h(false, xf._k("child",xf._j('','oPERATORID'))));	
xf._b("eXPERIENCETYPECNAME",xf._h(false, xf._k("child",xf._j('','eXPERIENCETYPECNAME'))));	
xf._b("eXPERIENCEPLACE",xf._h(false, xf._k("child",xf._j('','eXPERIENCEPLACE'))));	
xf._b("eXPERIENCEDESCRIPTION",xf._h(false, xf._k("child",xf._j('','eXPERIENCEDESCRIPTION'))));	
xf._b("eXPERIENCESTARTDATE",xf._h(false, xf._k("child",xf._j('','eXPERIENCESTARTDATE'))));	
xf._b("eXPERIENCEENDDATE",xf._h(false, xf._k("child",xf._j('','eXPERIENCEENDDATE'))));	
xf._b("data('educationJobD')/eXPERIENCETYPE",xf._g(xf._f('data',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCETYPE')))));	
xf._b("data('educationJobD')/eXPERIENCETYPECNAME",xf._g(xf._f('data',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCETYPECNAME')))));	
xf._b("data('educationJobD')/eXPERIENCEENDDATE",xf._g(xf._f('data',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCEENDDATE')))));	
xf._b("data('educationJobD')/eXPERIENCESTARTDATE",xf._g(xf._f('data',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCESTARTDATE')))));	
xf._b("data('educationJobD')/eXPERIENCEPLACE",xf._g(xf._f('data',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCEPLACE')))));	
xf._b("data('educationJobD')/eXPERIENCEDESCRIPTION",xf._g(xf._f('data',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','eXPERIENCEDESCRIPTION')))));	
xf._b("data('educationJobD')/mEMO",xf._g(xf._f('data',xf._i("educationJobD")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("not(call('justep.XData.canDo','bizData2','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData2"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','bizData2','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData2"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','bizData2','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData2"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','bizData2','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData2"),xf._i("Next"))));	
xf._b("data('bizData2')/aPPLYFOROBJECT",xf._g(xf._f('data',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("data('bizData2')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('bizData2')/aPPLYFORDEVICETYPE",xf._g(xf._f('data',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("data('bizData2')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("data('bizData2')/aPPLYFORRANGE",xf._g(xf._f('data',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("data('bizData2')/dETECTIONRANGECNAME",xf._g(xf._f('data',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME')))));	
xf._b("DETECTION_RANGE_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE'))));	
xf._b("dETECTIONRANGEENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEENAME'))));	
xf._b("not(call('justep.XData.canDo','myData','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("myData"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','myData','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("myData"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','myData','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("myData"),xf._i("Next"))));	
xf._b("not(call('justep.XData.canDo','educationJobD','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("educationJobD"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','educationJobD','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("educationJobD"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','educationJobD','Pre'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("educationJobD"),xf._i("Pre"))));	
xf._b("not(call('justep.XData.canDo','educationJobD','Next'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("educationJobD"),xf._i("Next"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('select', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dPerson','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dPerson',null);	
xf._c('xf-bind-0','model1',"instance('dPerson')/sName",null,null,"true()",null,null,null,"'名称不能为空！'");	
xf._c('xf-bind-1','model1',"instance('dPerson')/sPasswordModifyTime",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dPerson')/sLoginName",null,null,"true()",null,null,null,"'登录名不能为空！'");	
xf._c('xf-bind-3','model1',"instance('dPerson')/sNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dPerson')/sPasswordTimeLimit","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('dPerson')/sPasswordModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dPerson')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('dPerson')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('dPerson')/sBirthday","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('dPerson')/sJoinDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('dPerson')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('yyjcdx','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-43','model1',"instance('yyjcdx')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','model1',"instance('yyjcdx')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('yyjcdxlx','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('yyjcfmlx','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
new xforms.XFInstance2('bizData2','model1',null,null,null,'oPERATORID','myData',null,null,null,null,null,'whereAll');	
xf._c('xf-bind-45','model1',"instance('bizData2')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-46','model1',"instance('bizData2')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-47','model1',"instance('bizData2')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-48','model1',"instance('bizData2')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-49','model1',"instance('bizData2')/DETECTION_RANGE_TYPE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){personDetail.model1XBLLoaded(event)}));xf._p(justep('model1'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action5,'model1', evt,false)});	
new xforms.XFInstance2('educationJobD','model1',null,null,null,'oPERATORID','myData',null,null,null,null,null,'whereAll');	
xf._c('xf-bind-50','model1',"instance('educationJobD')/eXPERIENCETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-51','model1',"instance('educationJobD')/eXPERIENCESTARTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-52','model1',"instance('educationJobD')/eXPERIENCEENDDATE","xsd:date",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_N343220040',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1297810141');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1297810141", "");}));xf._p(justep('GLOBAL_ID_N343220040'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_N343220040', evt,false)});	
var xf_menu_GLOBAL_ID_N1599314385 = new xforms.XFMenu('GLOBAL_ID_N1599314385','context');xf_menu_GLOBAL_ID_N1599314385.menu.addContextZone('25e77d2785f24e648f2b8c8b3ad2697f');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1599314385.hide()});xf_menu_GLOBAL_ID_N1599314385.menu.setOpenMode('web');	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N712049927");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1599314385'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N1599314385', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N712049927',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N758373275');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N758373275", "");}));xf._p(justep('GLOBAL_ID_N712049927'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N712049927', evt,false)});	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N758373275');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N712049927'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_N712049927', evt,false)});	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData2')/aPPLYFOROBJECT"),labelRef:xf._q("data('bizData2')/dETECTIONOBJECTCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'yyjcdxlx',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'personDetail.gridSelect6Closeup'});	
new xforms.XFExtSelect({id:'gridSelect7',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData2')/aPPLYFORDEVICETYPE"),labelRef:xf._q("data('bizData2')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'yyjcdx',columns:'dEVICETYPECNAME,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect8',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData2')/aPPLYFORRANGE"),labelRef:xf._q("data('bizData2')/dETECTIONRANGECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'yyjcfmlx',columns:'DETECTION_RANGE_TYPE,dETECTIONRANGECNAME,dETECTIONRANGEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_RANGE_TYPE,dETECTIONRANGEENAME',valueColumn:'DETECTION_RANGE_TYPE',labelColumn:'dETECTIONRANGECNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFDialog('GLOBAL_ID_555435348',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_764893631');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_764893631", "");}));xf._p(justep('GLOBAL_ID_555435348'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_555435348', evt,false)});	
var xf_menu_GLOBAL_ID_N139285660 = new xforms.XFMenu('GLOBAL_ID_N139285660','context');xf_menu_GLOBAL_ID_N139285660.menu.addContextZone('f7f46c5cfeba46868c77eebc84d3fcf4');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N139285660.hide()});xf_menu_GLOBAL_ID_N139285660.menu.setOpenMode('web');	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N168443569");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N139285660'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N139285660', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N168443569',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1989029200');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1989029200", "");}));xf._p(justep('GLOBAL_ID_N168443569'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_N168443569', evt,false)});	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1989029200');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N168443569'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_N168443569', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dMainOrg_part_loaded = false;	
function load_dMainOrg_part(callback){if (dMainOrg_part_loaded) return;dMainOrg_part_loaded = true;	
new xforms.XFInstance2('dMainOrg','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dMainOrg',null);	
xf._c('xf-bind-11','model1',"instance('dMainOrg')/sFName",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('dMainOrg')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('dMainOrg')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('dMainOrg')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('dMainOrg')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('dMainOrg')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('dMainOrg')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('dMainOrg')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('dMainOrg')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('dMainOrg')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('dMainOrg')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dMainOrg_part_init_loaded = false;	
function load_dMainOrg_part_init(){if (dMainOrg_part_init_loaded) return;dMainOrg_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var myData_part_loaded = false;	
function load_myData_part(callback){if (myData_part_loaded) return;myData_part_loaded = true;	
new xforms.XFInstance2('myData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('myData',null);	
xf._c('xf-bind-22','model1',"instance('myData')/oPERATORSEX",null,null,"true()",null,null,null,"'性别不能为空'");	
xf._c('xf-bind-23','model1',"instance('myData')/oFFICEID",null,null,"true()",null,null,null,"'职位不能为空'");	
xf._c('xf-bind-24','model1',"instance('myData')/dEGREEID",null,null,"true()",null,null,null,"'学位不能为空'");	
xf._c('xf-bind-25','model1',"instance('myData')/eDUCATIONID",null,null,"true()",null,null,null,"'学历不能为空'");	
xf._c('xf-bind-26','model1',"instance('myData')/pOLITICALID",null,null,"true()",null,null,null,"'政治面貌不能为空'");	
xf._c('xf-bind-27','model1',"instance('myData')/oPERATORSTATE",null,null,"true()",null,null,null,"'操作员状态不能为空'");	
xf._c('xf-bind-28','model1',"instance('myData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('myData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-30','model1',"instance('myData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('myData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('myData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('myData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','model1',"instance('myData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','model1',"instance('myData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-36','model1',"instance('myData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-37','model1',"instance('myData')/OFFICE_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('myData')/POSITION_TYPE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('myData')/ACADEMIC_DEGREE_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','model1',"instance('myData')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('myData')/POLITICAL_AFFILIATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('myData')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var myData_part_init_loaded = false;	
function load_myData_part_init(){if (myData_part_init_loaded) return;myData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var officeIdData_part_loaded = false;	
function load_officeIdData_part(callback){if (officeIdData_part_loaded) return;officeIdData_part_loaded = true;	
new xforms.XFInstance2('officeIdData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var officeIdData_part_init_loaded = false;	
function load_officeIdData_part_init(){if (officeIdData_part_init_loaded) return;officeIdData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var positionIdData_part_loaded = false;	
function load_positionIdData_part(callback){if (positionIdData_part_loaded) return;positionIdData_part_loaded = true;	
new xforms.XFInstance2('positionIdData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var positionIdData_part_init_loaded = false;	
function load_positionIdData_part_init(){if (positionIdData_part_init_loaded) return;positionIdData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var dgreeData_part_loaded = false;	
function load_dgreeData_part(callback){if (dgreeData_part_loaded) return;dgreeData_part_loaded = true;	
new xforms.XFInstance2('dgreeData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var dgreeData_part_init_loaded = false;	
function load_dgreeData_part_init(){if (dgreeData_part_init_loaded) return;dgreeData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var educationData_part_loaded = false;	
function load_educationData_part(callback){if (educationData_part_loaded) return;educationData_part_loaded = true;	
new xforms.XFInstance2('educationData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var educationData_part_init_loaded = false;	
function load_educationData_part_init(){if (educationData_part_init_loaded) return;educationData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var poliData_part_loaded = false;	
function load_poliData_part(callback){if (poliData_part_loaded) return;poliData_part_loaded = true;	
new xforms.XFInstance2('poliData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var poliData_part_init_loaded = false;	
function load_poliData_part_init(){if (poliData_part_init_loaded) return;poliData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var posiTiData_part_loaded = false;	
function load_posiTiData_part(callback){if (posiTiData_part_loaded) return;posiTiData_part_loaded = true;	
new xforms.XFInstance2('posiTiData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var posiTiData_part_init_loaded = false;	
function load_posiTiData_part_init(){if (posiTiData_part_init_loaded) return;posiTiData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_saveMas=new xforms.XFTrigger('saveMas',null,"/UI/system/images/standardToolbar/standard/save.gif","/UI/system/images/standardToolbar/standard/un_save.gif",false,false);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){personDetail.image1Click(event)}));xf._p(justep('saveMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'saveMas', evt,false)});	
xforms.load_parts('grdMaster');	
var xf_trigger_insertMas=new xforms.XFTrigger('insertMas',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){personDetail.inserMore(event)}));xf._p(justep('insertMas'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'insertMas', evt,false)});	
new xforms.XFGrid({id:'grdDetail',instance:'bizData2',systemColumnsPro:'aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,DETECTION_OBJECT_TYPE,DEVICE_TYPE_CODE,DETECTION_RANGE_TYPE',onInit:null,type:'grid',smartRender:20,delay:false,ids:'dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,oPERATORID',headNames:'应用检测对象类型,应用检测对象,应用检测方面定义,oPERATORID',widths:'147,140,135,*',types:'select,select,select,ro',hiddenColumns:'oPERATORID',aligns:',,,',serverSort:true,sorts:'na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColEditor(null,'dETECTIONOBJECTCNAME','gridSelect6');this.grid.bindEnterSelected(null,'dETECTIONOBJECTCNAME','false');this.grid.bindColEditor(null,'dEVICETYPECNAME','gridSelect7');this.grid.bindColEditor(null,'dETECTIONRANGECNAME','gridSelect8');}});	
xforms.load_parts('view2');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_grdMaster(){if (justep("grdMaster").getAttribute('loaded') && justep("grdMaster").getAttribute('loaded') == 'true') return;justep("grdMaster").setAttribute('loaded', 'true');	
if(typeof(load_grdMaster_html) == 'function')load_grdMaster_html();	
xf._d('inputMainOrgFName','text',xf._q("data('dMainOrg')/sName"),null,null,null,null,false,true);	
xf._d('inputName','text',xf._q("data('dPerson')/sName"),null,null,null,null,false,false);	
xf._d('inputLoginName','text',xf._q("data('dPerson')/sLoginName"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/oPERATORSEX"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default11"><row id="default12"><cell id="default13">0</cell><cell id="default14">女</cell></row><row id="default15"><cell id="default16">1</cell><cell id="default17">男</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('inputBirthday','text',xf._q("data('myData')/oPERATORBIRTHDAY"),null,null,null,"yyyy-MM-dd",false,false);	
xf._d('inputNation','text',xf._q("data('myData')/nATION"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect2',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/oFFICEID"),labelRef:xf._q("data('myData')/oFFICEIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'officeIdData',columns:'OFFICE_TYPE_CODE,oFFICEIDCNAME,oFFICEIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OFFICE_TYPE_CODE,oFFICEIDENAME',valueColumn:'OFFICE_TYPE_CODE',labelColumn:'oFFICEIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelectPosition',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/pOSITIONID"),labelRef:xf._q("data('myData')/pOSITIONIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'positionIdData',columns:'POSITION_TYPE_CODE,pOSITIONIDCNAME,pOSITIONIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'POSITION_TYPE_CODE,pOSITIONIDENAME',valueColumn:'POSITION_TYPE_CODE',labelColumn:'pOSITIONIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelectDegree',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/dEGREEID"),labelRef:xf._q("data('myData')/dEGREEIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'dgreeData',columns:'ACADEMIC_DEGREE_CODE,dEGREEIDCNAME,dEGREEIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'ACADEMIC_DEGREE_CODE,dEGREEIDENAME',valueColumn:'ACADEMIC_DEGREE_CODE',labelColumn:'dEGREEIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelectEd',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/eDUCATIONID"),labelRef:xf._q("data('myData')/eDUCATIONIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'educationData',columns:'EDUCATION_CODE,eDUCATIONIDCNAME,eDUCATIONIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'EDUCATION_CODE,eDUCATIONIDENAME',valueColumn:'EDUCATION_CODE',labelColumn:'eDUCATIONIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelectPoli',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/pOLITICALID"),labelRef:xf._q("data('myData')/pOLITICALIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'poliData',columns:'POLITICAL_AFFILIATION_CODE,pOLITICALIDCNAME,pOLITICALIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'POLITICAL_AFFILIATION_CODE,pOLITICALIDENAME',valueColumn:'POLITICAL_AFFILIATION_CODE',labelColumn:'pOLITICALIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('inputProfessional','text',xf._q("data('myData')/pROFESSIONAL"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelectPoTi',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/pOSITIONALTITLE"),labelRef:xf._q("data('myData')/pOSITIONALTITLEIDCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'posiTiData',columns:'POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME,pOSITIONALTITLEIDENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDENAME',valueColumn:'POSITIONAL_TITLE_CODE',labelColumn:'pOSITIONALTITLEIDCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('inputEmailAddress','text',xf._q("data('myData')/eMAILADDRESS"),null,null,null,null,false,false);	
xf._d('inputMObile','text',xf._q("data('myData')/mOBILE"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelectOperatorState',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('myData')/oPERATORSTATE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default38"><row id="default39"><cell id="default40">1</cell><cell id="default41">正常</cell></row><row id="default42"><cell id="default43">2</cell><cell id="default44">工作</cell></row><row id="default50"><cell id="default51">3</cell><cell id="default52">病假</cell></row><row id="default53"><cell id="default54">4</cell><cell id="default55">年假</cell></row><row id="default56"><cell id="default57">5</cell><cell id="default58">事假</cell></row><row id="default59"><cell id="default65">6</cell><cell id="default66">公出</cell></row><row id="default67"><cell id="default68">7</cell><cell id="default74">离职</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea2','textarea',xf._q("data('myData')/mEMO"),null,null,null,null,false,false);	
xf._d('inputPasswordTimeLimit','text',xf._q("data('dPerson')/sPasswordTimeLimit"),null,null,null,null,false,true);	
xf._d('input2','text',xf._q("data('dPerson')/sPasswordModifyTime"),null,null,null,"yyyy-MM-dd hh:mm",false,false);	
xf._d('input4','text',xf._q("data('myData')/cARDID"),null,null,null,null,false,false);	
}	
function load_grdMaster_xblinit(){if (justep("grdMaster").getAttribute('xblloaded') && justep("grdMaster").getAttribute('xblloaded') == 'true') return;justep("grdMaster").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
var xf_trigger_insertTr=new xforms.XFTrigger('insertTr',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){personDetail.insert1(event)}));xf._p(justep('insertTr'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'insertTr', evt,false)});	
new xforms.XFGrid({id:'grid1',instance:'educationJobD',systemColumnsPro:'eXPERIENCETYPE,mEMO',onInit:null,type:'grid',smartRender:20,delay:false,ids:'eXPERIENCETYPECNAME,eXPERIENCEPLACE,eXPERIENCEDESCRIPTION,eXPERIENCESTARTDATE,eXPERIENCEENDDATE,oPERATORID',headNames:'信息类型,地点,内容说明,起始日期,结束日期,oPERATORID',widths:'100,108,86,114,119,*',types:'ed,ed,ed,ed,ed,ro',hiddenColumns:'oPERATORID',aligns:',,,,,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'personDetail.grid1RowDblClick',onLastEditorPressEnter:null,initFun:function(){}});	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('educationJobD')/eXPERIENCETYPE"),labelRef:xf._q("data('educationJobD')/eXPERIENCETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default173"><row id="default174"><cell id="default175">1</cell><cell id="default176">教育信息</cell></row><row id="default177"><cell id="default178">2</cell><cell id="default179">培训信息</cell></row><row id="default180"><cell id="default181">3</cell><cell id="default182">工作信息</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('input1','text',xf._q("data('educationJobD')/eXPERIENCEENDDATE"),null,null,null,null,false,false);	
xf._d('input3','text',xf._q("data('educationJobD')/eXPERIENCESTARTDATE"),null,null,null,null,false,false);	
xf._d('textarea1','textarea',xf._q("data('educationJobD')/eXPERIENCEPLACE"),null,null,null,null,false,false);	
xf._d('textarea3','textarea',xf._q("data('educationJobD')/eXPERIENCEDESCRIPTION"),null,null,null,null,false,false);	
xf._d('textarea4','textarea',xf._q("data('educationJobD')/mEMO"),null,null,null,null,false,false);	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		