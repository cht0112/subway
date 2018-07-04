
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/blob.xbl.xml#image"] = _xbl_JSClassDefine_image;
justep.XBLObject._classes["/UI/system/components/blob.xbl.xml#blob"] = _xbl_JSClassDefine_blob;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_image(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_image.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function(){
				this.stretch = "false"==this.domNode.getAttribute("stretch")? false: true;
				var blob_object = this.getElementByXblID('blob');
			}, 
			"setDisabled" : function(disabled){
				var blob_object = this.getElementByXblID('blob');
				if(blob_object && blob_object.xblObject){
					blob_object.xblObject.disabled = disabled;
				}
			},
			"getDisabled" : function(){
				var blob_object = this.getElementByXblID('blob');
				if(blob_object && blob_object.xblObject){
					return blob_object.xblObject.disabled;
				}
			},
			"doSubmit" : function(event){
				var func = this.domNode.getAttribute('onSubmit');
				if(func) func = justep.Function.get(func);
				if(!func){
					return justep.Blob.imgFileTest(event);
				}else{
					return func(event);
				}
			},
			"doRefresh" : function(event){
				this.setImgSrc(event.url);
				var func = this.domNode.getAttribute('onRefresh');
				if(func){
					func = justep.Function.get(func);
					if(func) func(event);
				}
			},
			"refresh" : function(rowid){
				var blob_object = justep.XBLObject.getXBLObject(this.getElementByXblID('blob'));
				if(blob_object){
					blob_object.refresh(rowid);
				}
			},
			"setImgSrc" : function(src){
				if(!src) return;
				var blob_object = this.getElementByXblID('blob');
				var imgWidth = $(blob_object).innerWidth();
				var imgHeight = $(blob_object).innerHeight();
				var img = $('#img-'+this.domNode.id);
				if (!this.stretch) {
					tempImage = new Image();  
					tempImage.onload = function() {
						/* tempImage用于获取高度和宽度 */
						if(imgWidth && imgHeight){
							var scaleH = tempImage.width / imgWidth;
							var scaleV = tempImage.height / imgHeight;
							var scale = 1;
							if (scaleH > scaleV) {
								scale = scaleH;
							}
							else {
								scale = scaleV;
							}
							img.height(tempImage.height/scale).width(tempImage.width/scale);
						}
						img.attr('src',src);
						tempImage = null;
					}
					tempImage.onerror = function() {
						img.attr('src',src);
						tempImage = null;
					}
					tempImage.src = src;
				}else {
					if(imgWidth && imgHeight) img.height(imgHeight).width(imgWidth);
					img.attr('src',src);
				}
			}
		}));

function _xbl_JSClassDefine_blob(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_blob.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
				justep.Object.extend(this, new justep.Blob(this));
				this.attachStoreEvent();
				this.refresh();
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

function _xbl_JSClassDefine_dialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_dialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var dialog = new justep.Dialog(node.getAttribute("id"),node.getAttribute("title"),node.getAttribute("modal")=="true",node.getAttribute("status"),node.getAttribute("width"),node.getAttribute("height"),node.getAttribute("left"),node.getAttribute("top")
					,node.getAttribute("onInit"),node.getAttribute("onOpen"),node.getAttribute("onClose")
				);
				dialog.setClosable(node.getAttribute("closable")!="false");
				dialog.setMinmaxable(node.getAttribute("minmaxable")!="false");
				dialog.setResizable(node.getAttribute("resizable")!="false");
				dialog.setNeighbor(node.getAttribute("neighbor"));
				dialog.setAutoSize(node.getAttribute("auto-size")=="true");
				dialog.setShowTitle(node.getAttribute("show-title")!="false");
				justep.Object.extend(this, dialog);
			} 
		}));

function _xbl_JSClassDefine_windowReceiver(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowReceiver.prototype = justep.Object.extend(new justep.XBLObject(), eval);

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

	var ids=[{id:'31d625217894440cbcdf4b2b6c763f77', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'rOOMAREA', name:'xforms:input'},{id:'blobImage1', name:'/UI/system/components/blob.xbl.xml#image', children:[{id:'blob-blobImage1', name:'/UI/system/components/blob.xbl.xml#blob', children:[{id:'dlg-blob-blobImage1', name:'/UI/system/components/dialog.xbl.xml#dialog'}]}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'xuiLabel4', name:'xforms:label'},{id:'default26', name:'xforms:value'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'xuiLabel5', name:'xforms:label'},{id:'default37', name:'xforms:value'}]},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'xuiLabel2', name:'xforms:label'},{id:'default4', name:'xforms:value'}]},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'}]},{id:'filter-pattern-6c5b8b17-c039-4037-96a2-5289a5b41910', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'5ce435e916ad4441a0deda0bbb462d5c', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1038401608', name:'xforms:menu'}]},{id:'GLOBAL_ID_N772904657', name:'xforms:dialog'}]},{id:'filter-dialog-602aaab2-5d23-469a-ac7a-4eee72cd56ff', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1244770947', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'rOOMAREA');xf._a(null,'gridSelect4');xf._a('gridSelect4','xuiLabel4');xf._a('gridSelect4','default27');xf._a(null,'gridSelect5');xf._a('gridSelect5','xuiLabel5');xf._a('gridSelect5','default38');xf._a(null,'gridSelect1');xf._a('gridSelect1','xuiLabel2');xf._a('gridSelect1','default5');function init() {	
var begin = new Date().getTime();	
xf._b("instance('bizData1')/rOOMID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','rOOMID')))));	
xf._b("instance('bizData1')/rOOMAREA",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','rOOMAREA')))));	
xf._b("true()",xf._f('true'));	
xf._b("'区域不能为空'",xf._i("区域不能为空"));	
xf._b("instance('bizData1')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("'应用检测对象类型不能为空'",xf._i("应用检测对象类型不能为空"));	
xf._b("instance('bizData1')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("'应用检测对象不能为空'",xf._i("应用检测对象不能为空"));	
xf._b("instance('bizData1')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("'应用检测方面类型不能为空'",xf._i("应用检测方面类型不能为空"));	
xf._b("instance('bizData1')/iMAGE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','iMAGE')))));	
xf._b("instance('bizData1')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('bizData1')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('bizData1')/dEVICETYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('bizData1')/DETECTION_RANGE_TYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE')))));	
xf._b("instance('bizData2')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('bizData2')/dEVICETYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("data('bizData1')/rOOMAREA",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','rOOMAREA')))));	
xf._b("data('bizData1')/aPPLYFOROBJECT",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("data('bizData1')/dETECTIONOBJECTCNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME')))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("DETECTION_OBJECT_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE'))));	
xf._b("dETECTIONOBJECTENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTENAME'))));	
xf._b("data('bizData1')/aPPLYFORRANGE",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("data('bizData1')/dETECTIONRANGECNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME')))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("DETECTION_RANGE_TYPE",xf._h(false, xf._k("child",xf._j('','DETECTION_RANGE_TYPE'))));	
xf._b("dETECTIONRANGEENAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEENAME'))));	
xf._b("data('bizData1')/aPPLYFORDEVICETYPE",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("data('bizData1')/dEVICETYPECNAME",xf._g(xf._f('data',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME')))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dEVICETYPE",xf._h(false, xf._k("child",xf._j('','dEVICETYPE'))));	
xf._b("dETECTIONOBJECTTYPE",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE'))));	
xf._b("dEVICETYPEENAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPEENAME'))));	
xf._b("not(call('justep.XData.canDo','bizData1','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','bizData1','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("bizData1"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData1',null);	
xf._c('xf-bind-0','model1',"instance('bizData1')/rOOMID",null,null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('bizData1')/rOOMAREA",null,null,"true()",null,null,null,"'区域不能为空'");	
xf._c('xf-bind-2','model1',"instance('bizData1')/aPPLYFOROBJECT",null,null,"true()",null,null,null,"'应用检测对象类型不能为空'");	
xf._c('xf-bind-3','model1',"instance('bizData1')/aPPLYFORDEVICETYPE",null,null,"true()",null,null,null,"'应用检测对象不能为空'");	
xf._c('xf-bind-4','model1',"instance('bizData1')/aPPLYFORRANGE",null,null,"true()",null,null,null,"'应用检测方面类型不能为空'");	
xf._c('xf-bind-5','model1',"instance('bizData1')/iMAGE",null,null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('bizData1')/rOOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('bizData1')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('bizData1')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('bizData1')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('bizData1')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('bizData1')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('bizData1')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('bizData1')/DETECTION_RANGE_TYPE","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
var xf_menu_GLOBAL_ID_N1038401608 = new xforms.XFMenu('GLOBAL_ID_N1038401608','context');xf_menu_GLOBAL_ID_N1038401608.menu.addContextZone('5ce435e916ad4441a0deda0bbb462d5c');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1038401608.hide()});xf_menu_GLOBAL_ID_N1038401608.menu.setOpenMode('web');	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N772904657");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1038401608'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'GLOBAL_ID_N1038401608', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N772904657',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1991852696');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N1991852696", "");}));xf._p(justep('GLOBAL_ID_N772904657'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_1,'GLOBAL_ID_N772904657', evt,false)});	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N1991852696');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N772904657'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_2,'GLOBAL_ID_N772904657', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1244770947',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1965801779');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1965801779", "");}));xf._p(justep('GLOBAL_ID_1244770947'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_1244770947', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var bizData2_part_loaded = false;	
function load_bizData2_part(callback){if (bizData2_part_loaded) return;bizData2_part_loaded = true;	
new xforms.XFInstance2('bizData2','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-14','model1',"instance('bizData2')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('bizData2')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var bizData2_part_init_loaded = false;	
function load_bizData2_part_init(){if (bizData2_part_init_loaded) return;bizData2_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var bizData3_part_loaded = false;	
function load_bizData3_part(callback){if (bizData3_part_loaded) return;bizData3_part_loaded = true;	
new xforms.XFInstance2('bizData3','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var bizData3_part_init_loaded = false;	
function load_bizData3_part_init(){if (bizData3_part_init_loaded) return;bizData3_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var bizData4_part_loaded = false;	
function load_bizData4_part(callback){if (bizData4_part_loaded) return;bizData4_part_loaded = true;	
new xforms.XFInstance2('bizData4','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
if(callback)callback();}	
var bizData4_part_init_loaded = false;	
function load_bizData4_part_init(){if (bizData4_part_init_loaded) return;bizData4_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xf._d('rOOMAREA','text',xf._q("data('bizData1')/rOOMAREA"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData1')/aPPLYFOROBJECT"),labelRef:xf._q("data('bizData1')/dETECTIONOBJECTCNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData3',columns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTCNAME,dETECTIONOBJECTENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_OBJECT_TYPE,dETECTIONOBJECTENAME',valueColumn:'DETECTION_OBJECT_TYPE',labelColumn:'dETECTIONOBJECTCNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'mainActivity5.gridSelect4Closeup'});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData1')/aPPLYFORRANGE"),labelRef:xf._q("data('bizData1')/dETECTIONRANGECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData4',columns:'DETECTION_RANGE_TYPE,dETECTIONRANGECNAME,dETECTIONRANGEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'DETECTION_RANGE_TYPE,dETECTIONRANGEENAME',valueColumn:'DETECTION_RANGE_TYPE',labelColumn:'dETECTIONRANGECNAME',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('bizData1')/aPPLYFORDEVICETYPE"),labelRef:xf._q("data('bizData1')/dEVICETYPECNAME"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData2',columns:'dEVICETYPECNAME,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME',valueColumn:'dEVICETYPE',labelColumn:'dEVICETYPECNAME',extColumn:null,labels:',,,',aligns:',,,',types:'ro,ro,ro,ro',widths:{widths:"*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:true,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		