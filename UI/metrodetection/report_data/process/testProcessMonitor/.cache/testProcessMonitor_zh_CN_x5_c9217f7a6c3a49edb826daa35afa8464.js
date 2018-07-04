
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/splitter.xbl.xml#splitter"] = _xbl_JSClassDefine_splitter;
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
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'8fc979965974edc27d0d695b5acd9b9f'};
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
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'b4220d655ca3d378b166bc0bd5f0ec0a'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'db6d5960944ffd4e2b2509ac70b14cd8'};
function _xbl_JSClassDefine_bizDataFilterPattern(obj) {if (obj) {
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'ff69379bc4f7eb9e19080fc9f4af4b15'};
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
							var manager = this.__dragObject.obj.parentNode;					manager.removeChild(this.__dragObject.obj);
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'ba2c8e80829ca103853d72d3a5c66696'};
function _xbl_JSClassDefine_splitter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_splitter.prototype = justep.Object.extend(new justep.XBLObject(), eval({

			"initXBL" : function() {
			   	if(!this.domNode.id || this.domNode.id ==""){
					this.domNode.id = (new UUID()).valueOf();
			   	}
			   	var baseCls = '.xui-splitter-';
			   	var id = this.domNode.id; 
			   	this.el = $("#" + id);
				this.status = this.el.attr("status") || "normal";
				this.fixType = this.el.attr("fix-type");
				this.state = 1;
				if(this.status=='show-first' || this.status=='show-left' || this.status=='show-top'){
				   	this.state = 0;
				}else if(this.status=="show-second" || this.status=='show-right' || this.status=='show-bottom'){
				   	this.state = 2;
				}
				this.spacing = 5;
				this.resizable = this.domNode.getAttribute('resizable')?this.domNode.getAttribute('resizable')=="true": true;
			   	this.isHorz = this.el.attr("mode") === 'horz';
			   	this.hasHandler = this.el.attr("has-drag-bar") === 'true';
			   	this.hasArrowBtn = this.el.attr("has-arrow-button") === 'true';
			   	this.fixSize = this.el.attr("fix-size") || '50%';
			   	this.isAnchor = this.fixSize.indexOf('%') != -1;/*是百分比的*/


				this.onRegionResize = justep.Function.get($(this.domNode).attr("onRegionResize"));

			   	this.rootEl = $(">div" + baseCls + "root", this.el);
			   	var s = ">div" + baseCls + "root >div";
			   	this.leftEl = this.isHorz ? $(s + baseCls + "left", this.el) : $(s + baseCls + "top", this.el);
			   	this.rightEl = this.isHorz ? $(s + baseCls + "right", this.el) : $(s + baseCls + "bottom", this.el);
			   	this.handlerEl = $(s + baseCls + "handler", this.el);
			   	var that = this;
			   	if(this.hasHandler && this.hasArrowBtn){
			   		this.arrowBtn = $("#" + id+" > "+baseCls + "root > "+baseCls + "handler >"+baseCls + "btn");
			   		if(this.state != 1){
				   		var dir = this.arrowBtn.attr("role");
				   		$('i', this.arrowBtn).removeClass('icon-system-' + dir + '-dir');
				   		switch(dir){
				   			case 'up': dir = 'down'; break;
				   			case 'down': dir = 'up'; break;
				   			case 'left': dir = 'right'; break;
				   			case 'right': dir = 'left'; break;
				   		}
				   		$('i', this.arrowBtn).addClass('icon-system-' + dir + '-dir');
				   		this.arrowBtn.attr('role', dir);
			   		}
				   	this.arrowBtn.css('cursor', 'pointer');
				   	this.arrowBtn.bind('mousedown', function(event){
				   		that.splitBtnClick = true;
				   		setTimeout(function(){
				   			that.splitBtnClick = false;
				   		}, 50);
				   		var dir = $(this).attr("role");
				   		that._onResizeBtnClick(dir);
				   		$('i', this).removeClass('icon-system-' + dir + '-dir');
				   		switch(dir){
				   			case 'up': dir = 'down'; break;
				   			case 'down': dir = 'up'; break; 			case 'left': dir = 'right'; break;
				   			case 'right': dir = 'left'; break;
				   		}
				   		$('i', this).addClass('icon-system-' + dir + '-dir');
				   		$(this).attr('role', dir);
				   		if(event.stopPropagation)
				   			event.stopPropagation();
				   	});
			   	}
			},
			_onResizeBtnClick: function(role){
				if(!this.isHorz){
					role = role==='up'?'left':'right';
				}
				if((this.state === 0 && role==='right')||(this.state === 2 && role==='left')){
					return;
				}
				var oldState = this.state;
				if(this.state === 1){
					if(role==='left'){
						this.state = 2;
					}else{
						this.state = 0;
					}
				}else{
					if(this.state === 0){
						if(role==='left'){
							this.state = 1;
						}
					}else{
						if(role==='right'){
							this.state = 1;
						}	
					}
				}
				if(this.state!=oldState){
					this.onWindowResize();
					justep.XBLObject.resize(this.domNode.id);
				}
			},
			_getBorderWidth: function(el, s){
				if(s == 'tb'){
					return (parseInt(el.css("padding-top"))||0) 
						+ (parseInt(el.css("padding-bottom"))||0) 
						+ (parseInt(el.css("border-top"))||0) 
						+ (parseInt(el.css("border-bottom"))||0);  
				}else{
					return (parseInt(el.css("padding-left"))||0)
						+ (parseInt(el.css("padding-right"))||0) 
						+ (parseInt(el.css("border-left"))||0)
						+ (parseInt(el.css("border-right"))||0);  
				}
			},
			moveToStart: function(){
				if(this.state != 2){
					this.state = 2;
					this.onWindowResize();
					justep.XBLObject.resize(this.domNode.id);
				}
			},
			moveToMiddle: function(){
				if(this.state != 1){
					this.state = 1;
					this.onWindowResize();
					justep.XBLObject.resize(this.domNode.id);
				}
			},
			moveToEnd: function(){
				if(this.state != 0){
					this.state = 0;
					this.onWindowResize();
					justep.XBLObject.resize(this.domNode.id);
				}
			},
			onWindowResize: function(){
				var el = this.rootEl;

				/*为了解决 当前套在tab次页下时，初次有不显示的缺陷*/
				if(justep.Browser.IE7){
					el.width(this.el.width());
					el.height(this.el.height());
				}
				var l = this.isHorz ? el.width() : el.height();
				if(this.hasHandler){
					l -= this.isHorz ? this.handlerEl.width() : this.handlerEl.height();
				}
				var lw = rw = 0;
				if(!this.isNotCalcWidth){
					var	f = parseFloat(this.fixSize);
					if(this.isAnchor){
						lw = Math.round(l*f*0.01);
					}else{
						lw = Math.round(f);
					}
					this.calcWidth = lw;
				}
				if(this.state === 1){
					if(this.fixType == 'right' || this.fixType == 'bottom'){
						rw = this.calcWidth;
						lw = l - rw;
					}else{
						lw = this.calcWidth;
						rw = l - lw;
					}
				}else if(this.state === 0){
					lw = l;
					rw = 0;
				}else if(this.state === 2){
					lw = 0;
					rw = l;
				}
				this.leftEl.css("overflow", "hidden");
				this.rightEl.css("overflow", "hidden");
				if(this.isHorz){
					this.leftEl.width(lw);
					this.rightEl.width(rw);
				}else{
					this.leftEl.height(lw);
					this.rightEl.height(rw);
				}

				if(this.hasHandler){
					if(this.isHorz){
						this.handlerEl.css("left", lw+"px");
					}else{
						this.handlerEl.css("top", lw+"px");
					}
				}
				var that = this;
				setTimeout(function(){
					that.leftEl.css("overflow", "auto");
					that.rightEl.css("overflow", "auto");
				}, 1);
			   	if(this.hasHandler && this.resizable && !this.mousedowned){
			   		this.mousedowned = true;
					this.handlerEl.bind("mousedown",function(){
						if(that.status=="normal"){
							if(!that.splitBtnClick) 
								that.buildDrag();
						}	
					});		
			   	}
			},
			buildDrag: function() {
				var me = this;
				if(!this.$H)
					this.$H = $("<div />").appendTo("body");
				if(xforms.Core.isIE){
					this.$H[0].setCapture();
				}
				var splitter = this.handlerEl[0];
				var pos = this.cumulativeOffset(splitter);
				this.$H.css({position:"absolute",backgroundColor:"#999999",zIndex:"99999",fontSize:"1px"
						,top:pos[1],left:pos[0],height:splitter.offsetHeight,width:splitter.offsetWidth});
				this.$H.show();		
				this.minPosition = this.rootEl.offset()[this.isHorz?"left":"top"];
				this.maxPosition = this.minPosition + (this.isHorz?this.rootEl.outerWidth():this.rootEl.outerHeight()) - this.spacing;
				me.orgPos = {
					x : pos[0],
					y : pos[1]
				};
				me.draging_call = function(e) {
					me.draging(e);
				};
				me.done_call = function(e) {
					me.done(e);
				};
				$(document).bind("mousemove",me.draging_call);
				$(document).bind("mouseup",me.done_call);
			},
			cumulativeOffset: function(element) {
				var valueT = 0, valueL = 0;
				do {
					valueT += element.offsetTop  || 0;
					valueL += element.offsetLeft || 0;
					element = element.offsetParent;
			    }while(element);
			    return [valueL, valueT];
			},
			draging: function(e) {
				var attr = this.isHorz? "pageX" : "pageY";
				this.$H.css(this.isHorz?"left":"top",Math.min(Math.max((e[attr]-2),this.minPosition),this.maxPosition));
			},
			done: function() {
				var dir = this.isHorz? "offsetWidth" : "offsetHeight";
				var pos = this.cumulativeOffset(this.$H[0]);  //current pos
				var offset = pos[this.isHorz?0:1] - this.orgPos[this.isHorz?"x":"y"]; //relative old pos
				var orgSize = this.leftEl[0][dir]; 	//first width
				var newSize = orgSize + offset;
				var parentSize = this.rootEl[0][dir];
				var f = newSize;
				var s = parentSize - newSize - this.spacing;
				f==0?this.leftEl.hide():this.leftEl.show();
				s==0?this.rightEl.hide():this.rightEl.show();
				var dir = this.isHorz? "width" : "hight";
				this.calcWidth = f;
				this.isNotCalcWidth = true;
				if(xforms.Core.isIE){
					this.$H[0].releaseCapture();
				}
				this.$H.hide();
				$(document).unbind("mousemove",this.draging_call);
				$(document).unbind("mouseup",this.done_call);
				if(this.onRegionResize)
					this.onRegionResize({source:this});
				this.onWindowResize();
				justep.XBLObject.resize(this.domNode.id);
			}
		}));

_xbl_JSClassDefine_splitter.prototype.ClassName='_xbl_JSClassDefine_splitter';
_xbl_JSClassDefine_splitter.prototype.__code__={v:{name:'_xbl_JSClassDefine_splitter',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'c78d92fb42182f45950d5c8e13a128e9'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'20e014e4bccdb33d1295a90b7770e371'};
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
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'68721cdfa9d931d1c45ea0274e746a0c',time:1525315460},m:'1632ca196fb31f7a89be7a27f7a41539'};
	var ids=[{id:'6de54547fb1543c0b6bbac1f30b8577c', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'HSplitter1', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'grid1', name:'xforms:grid'},{id:'tabPanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'f87d1d55de47411cbb170229a7130efa', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grid2', name:'xforms:grid'},{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'bc5cb58711ec45bb874b8d9c80816c0b', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grid3', name:'xforms:grid'},{id:'toolbars3', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'da61dce2d63f4f8993cd816b2998cbf5', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grid4', name:'xforms:grid'}]}]},{id:'filter-pattern-00acef9e-e94b-42f3-8df9-0726ad844fa2', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'d971f240fe92479e9f2675363e466dfc', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_3940026', name:'xforms:menu'}]},{id:'GLOBAL_ID_N752188528', name:'xforms:dialog'}]},{id:'filter-dialog-cabcaefc-c65f-4626-a4f0-aaca381f0021', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N265424302', name:'xforms:dialog'}]},{id:'filter-pattern-d486a295-39f1-4be7-b97e-d13e1bb6dd32', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'6237eb5be0524d06b3b082ff55d36380', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_465913875', name:'xforms:menu'}]},{id:'GLOBAL_ID_N1559827760', name:'xforms:dialog'}]},{id:'filter-dialog-d006f9fd-7b90-41e4-b41c-79810acbd224', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_411718087', name:'xforms:dialog'}]},{id:'filter-pattern-1665bdb1-5210-4fa1-b03d-a66d5ee7548a', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'c8ed296afb49486c94ec505e43a68792', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N1547134269', name:'xforms:menu'}]},{id:'GLOBAL_ID_1462826117', name:'xforms:dialog'}]},{id:'filter-dialog-6b3853db-57a9-4a6d-8f7b-ef51bc25b72f', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1058588230', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='68721cdfa9d931d1c45ea0274e746a0c';
xforms.Core.fileName='form.js';	
xf._a(null,'grid1');xf._a(null,'grid2');xf._a(null,'grid3');xf._a(null,'grid4');function init() {	
var begin = new Date().getTime();	
xf._b("instance('testProcessMonitorTreeD')/CHILD",xf._g(xf._f('instance',xf._i("testProcessMonitorTreeD")),xf._h(false, xf._k("child",xf._j('','CHILD')))));	
xf._b("instance('testTaskExeSubCaseD')/tASKID",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('testTaskExeSubCaseD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('testTaskExeSubCaseD')/sUBTESTCASEPRIOR",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEPRIOR')))));	
xf._b("instance('testTaskExeSubCaseD')/sUBTESTCASEORDER",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEORDER')))));	
xf._b("instance('testTaskExeSubCaseD')/tIMEUNITID",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','tIMEUNITID')))));	
xf._b("instance('testTaskExeSubCaseD')/eXECUTEDATETIME",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','eXECUTEDATETIME')))));	
xf._b("instance('testTaskExeSubCaseD')/rEPORTDATE",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','rEPORTDATE')))));	
xf._b("instance('testTaskExeSubCaseD')/pROJECTID",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('testTaskExeSubCaseD')/tASKID1",xf._g(xf._f('instance',xf._i("testTaskExeSubCaseD")),xf._h(false, xf._k("child",xf._j('','tASKID1')))));	
xf._b("instance('projectTaskInfoD')/calculate5",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','calculate5')))));	
xf._b("instance('projectTaskInfoD')/pROJECTID",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('projectTaskInfoD')/tASKTYPE",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','tASKTYPE')))));	
xf._b("instance('projectTaskInfoD')/tASKID",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('projectTaskInfoD')/pLANSTARTDATE",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','pLANSTARTDATE')))));	
xf._b("instance('projectTaskInfoD')/pLANENDINGDATE",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','pLANENDINGDATE')))));	
xf._b("instance('projectTaskInfoD')/tESTTASKREASON",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','tESTTASKREASON')))));	
xf._b("instance('projectTaskInfoD')/aCTUALSTARTDATE",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','aCTUALSTARTDATE')))));	
xf._b("instance('projectTaskInfoD')/aCTUALENDINGDATE",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','aCTUALENDINGDATE')))));	
xf._b("instance('projectTaskInfoD')/tASKEXECUTE",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','tASKEXECUTE')))));	
xf._b("instance('projectTaskInfoD')/TEST_TASK_REASON_CODE",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','TEST_TASK_REASON_CODE')))));	
xf._b("instance('projectTaskInfoD')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("projectTaskInfoD")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('testExeStepD')/tASKID",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('testExeStepD')/tESTCASEVER",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('testExeStepD')/sUBTESTCASESTEPID",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID')))));	
xf._b("instance('testExeStepD')/sUBTESTCASESTEPPRIOR",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPPRIOR')))));	
xf._b("instance('testExeStepD')/eXECUTEDATETIME",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','eXECUTEDATETIME')))));	
xf._b("instance('testExeStepD')/rEPORTDATE",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','rEPORTDATE')))));	
xf._b("instance('testExeStepD')/pROJECTID",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('testExeStepD')/tASKID1",xf._g(xf._f('instance',xf._i("testExeStepD")),xf._h(false, xf._k("child",xf._j('','tASKID1')))));	
xf._b("NAME",xf._h(false, xf._k("child",xf._j('','NAME'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("calculate5",xf._h(false, xf._k("child",xf._j('','calculate5'))));	
xf._b("pLANOPERATORID",xf._h(false, xf._k("child",xf._j('','pLANOPERATORID'))));	
xf._b("pLANSTARTDATE",xf._h(false, xf._k("child",xf._j('','pLANSTARTDATE'))));	
xf._b("pLANENDINGDATE",xf._h(false, xf._k("child",xf._j('','pLANENDINGDATE'))));	
xf._b("tESTTASKAREA",xf._h(false, xf._k("child",xf._j('','tESTTASKAREA'))));	
xf._b("aCTUALOPERATORID",xf._h(false, xf._k("child",xf._j('','aCTUALOPERATORID'))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("序号",xf._h(false, xf._k("child",xf._j('','序号'))));	
xf._b("tESTCASEID",xf._h(false, xf._k("child",xf._j('','tESTCASEID'))));	
xf._b("sUBTESTCASEID",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID'))));	
xf._b("sUBTESTCASENAME",xf._h(false, xf._k("child",xf._j('','sUBTESTCASENAME'))));	
xf._b("sUBTESTCASETIME",xf._h(false, xf._k("child",xf._j('','sUBTESTCASETIME'))));	
xf._b("sUBTESTCASEEXECUTE",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEEXECUTE'))));	
xf._b("sUBTESTCASECHECK",xf._h(false, xf._k("child",xf._j('','sUBTESTCASECHECK'))));	
xf._b("aCTUALSUBTESTCASETIME",xf._h(false, xf._k("child",xf._j('','aCTUALSUBTESTCASETIME'))));	
xf._b("sUBTESTCASESTEPID",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID'))));	
xf._b("sUBTESTCASESTEPPRIOR",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPPRIOR'))));	
xf._b("sUBTESTCASESTEPEXECUTE",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPEXECUTE'))));	
xf._b("sUBTESTCASESTEPCHECK",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPCHECK'))));	
xf._b("eXECUTEDATETIME",xf._h(false, xf._k("child",xf._j('','eXECUTEDATETIME'))));	
xf._b("rEPORTDATE",xf._h(false, xf._k("child",xf._j('','rEPORTDATE'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('testProcessMonitorTreeD','model1',null,null,null,null,null,null,null,null,null,'项目信息','whereAll');	
xf._c('xf-bind-0','model1',"instance('testProcessMonitorTreeD')/CHILD","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('testTaskExeSubCaseD','model1',null,null,null,null,null,null,null,null,'序号',null,'whereAll');	
xf._c('xf-bind-1','model1',"instance('testTaskExeSubCaseD')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('testTaskExeSubCaseD')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('testTaskExeSubCaseD')/sUBTESTCASEPRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('testTaskExeSubCaseD')/sUBTESTCASEORDER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('testTaskExeSubCaseD')/tIMEUNITID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('testTaskExeSubCaseD')/eXECUTEDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('testTaskExeSubCaseD')/rEPORTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('testTaskExeSubCaseD')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('testTaskExeSubCaseD')/tASKID1","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('projectTaskInfoD','model1',null,null,null,null,null,null,null,null,'calculate5',null,'whereAll');	
xf._c('xf-bind-10','model1',"instance('projectTaskInfoD')/calculate5","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('projectTaskInfoD')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('projectTaskInfoD')/tASKTYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('projectTaskInfoD')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('projectTaskInfoD')/pLANSTARTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('projectTaskInfoD')/pLANENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('projectTaskInfoD')/tESTTASKREASON","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('projectTaskInfoD')/aCTUALSTARTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('projectTaskInfoD')/aCTUALENDINGDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('projectTaskInfoD')/tASKEXECUTE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('projectTaskInfoD')/TEST_TASK_REASON_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('projectTaskInfoD')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('testExeStepD','model1',null,null,null,null,null,null,null,null,'序号',null,'whereVersion');	
xf._c('xf-bind-22','model1',"instance('testExeStepD')/tASKID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('testExeStepD')/tESTCASEVER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('testExeStepD')/sUBTESTCASESTEPID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('testExeStepD')/sUBTESTCASESTEPPRIOR","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('testExeStepD')/eXECUTEDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-27','model1',"instance('testExeStepD')/rEPORTDATE","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('testExeStepD')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('testExeStepD')/tASKID1","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('view1');	
xforms.load_parts('view2');	
var xf_menu_GLOBAL_ID_3940026 = new xforms.XFMenu('GLOBAL_ID_3940026','context');xf_menu_GLOBAL_ID_3940026.menu.addContextZone('d971f240fe92479e9f2675363e466dfc');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_3940026.hide()});xf_menu_GLOBAL_ID_3940026.menu.setOpenMode('web');	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N752188528");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_3940026'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'GLOBAL_ID_3940026', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N752188528',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_9766423');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_9766423", "");}));xf._p(justep('GLOBAL_ID_N752188528'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_1,'GLOBAL_ID_N752188528', evt,false)});	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_9766423');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N752188528'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_2,'GLOBAL_ID_N752188528', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N265424302',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N449077124');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N449077124", "");}));xf._p(justep('GLOBAL_ID_N265424302'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_3,'GLOBAL_ID_N265424302', evt,false)});	
var xf_menu_GLOBAL_ID_465913875 = new xforms.XFMenu('GLOBAL_ID_465913875','context');xf_menu_GLOBAL_ID_465913875.menu.addContextZone('6237eb5be0524d06b3b082ff55d36380');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_465913875.hide()});xf_menu_GLOBAL_ID_465913875.menu.setOpenMode('web');	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_N1559827760");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_465913875'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_465913875', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1559827760',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N343889506');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_N343889506", "");}));xf._p(justep('GLOBAL_ID_N1559827760'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'GLOBAL_ID_N1559827760', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_N343889506');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_N1559827760'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'GLOBAL_ID_N1559827760', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_411718087',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_596513491');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_596513491", "");}));xf._p(justep('GLOBAL_ID_411718087'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_7,'GLOBAL_ID_411718087', evt,false)});	
var xf_menu_GLOBAL_ID_N1547134269 = new xforms.XFMenu('GLOBAL_ID_N1547134269','context');xf_menu_GLOBAL_ID_N1547134269.menu.addContextZone('c8ed296afb49486c94ec505e43a68792');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N1547134269.hide()});xf_menu_GLOBAL_ID_N1547134269.menu.setOpenMode('web');	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1462826117");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N1547134269'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_N1547134269', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1462826117',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1102729899');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_1102729899", "");}));xf._p(justep('GLOBAL_ID_1462826117'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_1462826117', evt,false)});	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_1102729899');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1462826117'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_1462826117', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1058588230',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1437691117');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1437691117", "");}));xf._p(justep('GLOBAL_ID_1058588230'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_1058588230', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
new xforms.XFGrid({id:'grid1',instance:'testProcessMonitorTreeD',systemColumnsPro:'PARENT,CHILD,ID',onInit:null,type:'tree',smartRender:20,delay:true,ids:'NAME,space-column',headNames:'项目信息,&nbsp;',widths:'138,*',types:'tree,ro',hiddenColumns:'',aligns:',',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:'func_1877088277',onRowClick:'testProcessMonitor.grid1RowClick',onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'NAME','true');}});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
xforms.load_parts('view3');	
xforms.load_parts('view4');	
xforms.load_parts('view5');	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
function load_view3(){if (justep("view3").getAttribute('loaded') && justep("view3").getAttribute('loaded') == 'true') return;justep("view3").setAttribute('loaded', 'true');	
if(typeof(load_view3_html) == 'function')load_view3_html();	
new xforms.XFGrid({id:'grid2',instance:'projectTaskInfoD',systemColumnsPro:'pROJECTID,tASKTYPE,tASKID,tESTTASKITERATIVE,tESTTASKREASON,aCTUALSTARTDATE,aCTUALENDINGDATE,tASKEXECUTE,tESTTASKFILE,tESTTASKRESULTFILE,taskExecuteName,tASKCHECK,TEST_TASK_REASON_CODE,tESTTASKREASONCNAME,tESTTASKREASONENAME,TEST_PROJECT_INFO,HR_BASE_INFO,oPERATORNAME',onInit:null,type:'grid',smartRender:20,delay:false,ids:'calculate5,pLANOPERATORID,pLANSTARTDATE,pLANENDINGDATE,tESTTASKAREA,aCTUALOPERATORID,pROJECTNAME,space-column',headNames:'序号,计划执行人,计划开始日期,计划结束日期,区域,任务执行人,项目名称,&nbsp;',widths:'30,113,123,121,205,106,188,*',types:'cntr,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'center,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view3_xblinit(){if (justep("view3").getAttribute('xblloaded') && justep("view3").getAttribute('xblloaded') == 'true') return;justep("view3").setAttribute('xblloaded', 'true');	
}	
function load_view4(){if (justep("view4").getAttribute('loaded') && justep("view4").getAttribute('loaded') == 'true') return;justep("view4").setAttribute('loaded', 'true');	
if(typeof(load_view4_html) == 'function')load_view4_html();	
new xforms.XFGrid({id:'grid3',instance:'testTaskExeSubCaseD',systemColumnsPro:'tASKID,tESTCASEVER,sUBTESTCASEPRIOR,sUBTESTCASEORDER,tIMEUNITID,eXECUTEDATETIME,sUBTESTCASEDESC,rEPORTDATE,mark,pROJECTID,tASKID1,tASKNAME',onInit:null,type:'grid',smartRender:20,delay:false,ids:'序号,tESTCASEID,sUBTESTCASEID,sUBTESTCASENAME,sUBTESTCASETIME,sUBTESTCASEEXECUTE,sUBTESTCASECHECK,aCTUALSUBTESTCASETIME,space-column',headNames:'序号,测试用例ID,测试子用例ID,测试子用例名称,测试子用例执行耗时,测试子用例执行情况,测试子用例检测情况,测试子用例实际执行耗时,&nbsp;',widths:'30,100,114,100,142,167,141,170,*',types:'cntr,ed,ed,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'center,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
}	
function load_view4_xblinit(){if (justep("view4").getAttribute('xblloaded') && justep("view4").getAttribute('xblloaded') == 'true') return;justep("view4").setAttribute('xblloaded', 'true');	
}	
function load_view5(){if (justep("view5").getAttribute('loaded') && justep("view5").getAttribute('loaded') == 'true') return;justep("view5").setAttribute('loaded', 'true');	
if(typeof(load_view5_html) == 'function')load_view5_html();	
new xforms.XFGrid({id:'grid4',instance:'testExeStepD',systemColumnsPro:'tASKID,tESTCASEVER,tESTCASEID,sUBTESTCASESTEPDESC,mark,pROJECTID,tASKID1,tASKNAME',onInit:null,type:'grid',smartRender:20,delay:false,ids:'序号,sUBTESTCASESTEPID,sUBTESTCASEID,sUBTESTCASESTEPPRIOR,sUBTESTCASESTEPEXECUTE,sUBTESTCASESTEPCHECK,eXECUTEDATETIME,rEPORTDATE,space-column',headNames:'序号,测试子用例步骤ID,测试子用例ID,测试子用例步骤级别,测试子用例步骤执行情况,测试子用例步骤检查情况,测试子用例步骤执行日期,上报日期,&nbsp;',widths:'30,107,110,134,144,148,141,101,*',types:'cntr,ed,ed,ed,ed,ed,html,ed,ro',hiddenColumns:'',aligns:'center,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'eXECUTEDATETIME','testProcessMonitor.grid4_eXECUTEDATETIMERender');}});	
}	
function load_view5_xblinit(){if (justep("view5").getAttribute('xblloaded') && justep("view5").getAttribute('xblloaded') == 'true') return;justep("view5").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
