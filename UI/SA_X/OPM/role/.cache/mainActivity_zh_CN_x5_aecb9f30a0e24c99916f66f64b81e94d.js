
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/splitter.xbl.xml#splitter"] = _xbl_JSClassDefine_splitter;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'410cf70307d2fa37d1acb1534e06e577',time:1528169791},m:'a38592b27f5555b904b5bcea62d02fa2'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'410cf70307d2fa37d1acb1534e06e577',time:1528169791},m:'a3a9522ad061be3745a9f7d09a0a318a'};
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'410cf70307d2fa37d1acb1534e06e577',time:1528169791},m:'efb94693697bcb2e4d2e2a799175d554'};
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

/*				area.css({overflow:'hidden'});	
				area.css({overflow:'auto'});
*/				
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

_xbl_JSClassDefine_borderLayout.prototype.ClassName='_xbl_JSClassDefine_borderLayout';
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'410cf70307d2fa37d1acb1534e06e577',time:1528169791},m:'8efe8a7dd4dd9afbfb0b66e83b79ed2b'};
function _xbl_JSClassDefine_toolbars(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_toolbars.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function(){	this.initXFormEvent();	
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
					else if (tmp.toLowerCase()=="td" || tmp.toLowerCase()=="th") {return cur;
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'410cf70307d2fa37d1acb1534e06e577',time:1528169791},m:'ab266c8ef8ba51a0c448e7ef54b335fd'};
function _xbl_JSClassDefine_splitter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_splitter.prototype = justep.Object.extend(new justep.XBLObject(), eval({

			"initXBL" : function() {
			   	if(!this.domNode.id || this.domNode.id ==""){
					this.domNode.id = (new UUID()).valueOf();	}
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
				   		this.arrowBtn.attr('role', dir);	}
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
				   			case 'down': dir = 'up'; break;
				   			case 'left': dir = 'right'; break;
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
				}},
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
					});					   	}
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
_xbl_JSClassDefine_splitter.prototype.__code__={v:{name:'_xbl_JSClassDefine_splitter',key:'410cf70307d2fa37d1acb1534e06e577',time:1528169791},m:'546a05b4de26491bc681976144145ef4'};
	var ids=[{id:'79b6d27bedad4555ab3251d449adb816', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'HSplitter2', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'toolbars3', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'btnInsertRole', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]},{id:'div1', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'newRolesMenu', name:'xforms:menu', children:[{id:'newFunRole', name:'xforms:menuitem'},{id:'newDataRole', name:'xforms:menuitem'}]}]},{id:'btnEditRole', name:'xforms:trigger', children:[{id:'xuiLabel7', name:'xforms:label'}]},{id:'btnDeleteRole', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'btnEnableRoles', name:'xforms:trigger', children:[{id:'fUsestateteName', name:'xforms:label'}]},{id:'btnDisableRoles', name:'xforms:trigger', children:[{id:'fDisUsestateName', name:'xforms:label'}]}]},{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'imageSearchRole', name:'xforms:trigger', children:[{id:'xuiLabel5', name:'xforms:label'}]}]},{id:'gridRole', name:'xforms:grid'}]},{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'toolbars4', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'btnInsertPermission', name:'xforms:trigger', children:[{id:'xuiLabel4', name:'xforms:label'}]},{id:'div2', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'newPermissionsMenu', name:'xforms:menu', children:[{id:'newFunPermission', name:'xforms:menuitem'},{id:'newDataPermission', name:'xforms:menuitem'}]}]},{id:'deletePermission', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]}]},{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'imageSearchPermission', name:'xforms:trigger', children:[{id:'xuiLabel6', name:'xforms:label'}]}]},{id:'gridPermission', name:'xforms:grid'}]}]},{id:'wdRoleDetail', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdDataPermissionDetail', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdSelectFunTree', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdselectProtectedActions', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='410cf70307d2fa37d1acb1534e06e577';
xforms.Core.fileName='form.js';	
xf._a(null,'btnInsertRole');xf._a('btnInsertRole','xuiLabel3');xf._a(null,'btnEditRole');xf._a('btnEditRole','xuiLabel7');xf._a(null,'btnDeleteRole');xf._a('btnDeleteRole','xuiLabel2');xf._a(null,'btnEnableRoles');xf._a('btnEnableRoles','fUsestateteName');xf._a(null,'btnDisableRoles');xf._a('btnDisableRoles','fDisUsestateName');xf._a(null,'imageSearchRole');xf._a('imageSearchRole','xuiLabel5');xf._a(null,'gridRole');xf._a(null,'btnInsertPermission');xf._a('btnInsertPermission','xuiLabel4');xf._a(null,'deletePermission');xf._a('deletePermission','xuiLabel1');xf._a(null,'imageSearchPermission');xf._a('imageSearchPermission','xuiLabel6');xf._a(null,'gridPermission');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dRole')/sSequence",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('dRole')/sValidState",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dRole')/version",xf._g(xf._f('instance',xf._i("dRole")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dPermission')/sPermissionKind",xf._g(xf._f('instance',xf._i("dPermission")),xf._h(false, xf._k("child",xf._j('','sPermissionKind')))));	
xf._b("instance('dPermission')/sSequence",xf._g(xf._f('instance',xf._i("dPermission")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('dPermission')/sValidState",xf._g(xf._f('instance',xf._i("dPermission")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dPermission')/version",xf._g(xf._f('instance',xf._i("dPermission")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("calcCheckBox",xf._h(false, xf._k("child",xf._j('','calcCheckBox'))));	
xf._b("calcIndex",xf._h(false, xf._k("child",xf._j('','calcIndex'))));	
xf._b("sRoleKind",xf._h(false, xf._k("child",xf._j('','sRoleKind'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sCatalog",xf._h(false, xf._k("child",xf._j('','sCatalog'))));	
xf._b("sParentRolesNames",xf._h(false, xf._k("child",xf._j('','sParentRolesNames'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("sPermissionKind",xf._h(false, xf._k("child",xf._j('','sPermissionKind'))));	
xf._b("sActivityFName",xf._h(false, xf._k("child",xf._j('','sActivityFName'))));	
xf._b("actionsLabel",xf._h(false, xf._k("child",xf._j('','actionsLabel'))));	
xf._b("false",xf._h(false, xf._k("child",xf._j('','false'))));	
xf._b("roleName",xf._h(false, xf._k("child",xf._j('','roleName'))));	
xf._b("actionPolicyNames",xf._h(false, xf._k("child",xf._j('','actionPolicyNames'))));	
xf._b("not(call('justep.XData.canDo','dRole','NextPage'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dRole"),xf._i("NextPage"))));	
xf._b("not(call('justep.XData.canDo','dRole','AllPage'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dRole"),xf._i("AllPage"))));	
xf._b("not(call('justep.XData.canDo','dPermission','NextPage'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dPermission"),xf._i("NextPage"))));	
xf._b("not(call('justep.XData.canDo','dPermission','AllPage'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dPermission"),xf._i("AllPage"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ch', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.model1ModelConstructDone(event)}));xf._p(justep('model1'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action4,'model1', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dRole_part_loaded = false;	
function load_dRole_part(callback){if (dRole_part_loaded) return;dRole_part_loaded = true;	
new xforms.XFInstance2('dRole','model1',null,null,null,null,null,null,null,null,'calcCheckBox,calcIndex',null,'whereVersion');	
xf._c('xf-bind-0','model1',"instance('dRole')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dRole')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dRole')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dRole_part_init_loaded = false;	
function load_dRole_part_init(){if (dRole_part_init_loaded) return;dRole_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var dPermission_part_loaded = false;	
function load_dPermission_part(callback){if (dPermission_part_loaded) return;dPermission_part_loaded = true;	
new xforms.XFInstance2('dPermission','model1',null,null,null,null,null,null,null,null,'calcCheckBox,calcIndex',null,'whereVersion');	
xf._c('xf-bind-3','model1',"instance('dPermission')/sPermissionKind","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dPermission')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('dPermission')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dPermission')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dPermission_part_init_loaded = false;	
function load_dPermission_part_init(){if (dPermission_part_init_loaded) return;dPermission_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_trigger_btnInsertRole=new xforms.XFTrigger('btnInsertRole',null,"/UI/SA/OPM/images/insert.gif","/UI/SA/OPM/images/un_insert.gif",false,false,false,null,null,null);	
var xf_action_insertRoleRoleAction=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnInsertRoleClick(event)}));xf._p(justep('btnInsertRole'),"DOMActivate",null,function(evt) { xforms.run(xf_action_insertRoleRoleAction,'btnInsertRole', evt,false)});	
var xf_menu_newRolesMenu = new xforms.XFMenu('newRolesMenu','context');xf_menu_newRolesMenu.menu.addContextZone('div1');xforms.Event.attach(document.body, "click", function(){xf_menu_newRolesMenu.hide()});xf_menu_newRolesMenu.menu.setOpenMode('win');	
var xf_menuitem_newFunRole = new xforms.XFMenuItem('newFunRole','','新建功能角色','false',null,0,null,'/UI/SA/OPM/images/funRole.gif','/UI/SA/OPM/images/un_funRole.gif');xf_menu_newRolesMenu.addItem(xf_menuitem_newFunRole);	
var xf_menuitem_newDataRole = new xforms.XFMenuItem('newDataRole','','新建数据角色','false',null,1,null,'/UI/SA/OPM/images/dataRole.gif','/UI/SA/OPM/images/un_dataRole.gif');xf_menu_newRolesMenu.addItem(xf_menuitem_newDataRole);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newRolesMenuClick(event)}));xf._p(justep('newRolesMenu'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'newRolesMenu', evt,false)});	
var xf_trigger_btnEditRole=new xforms.XFTrigger('btnEditRole',null,"/UI/SA/OPM/images/edit.gif","/UI/SA/OPM/images/un_edit.gif",false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnEditRoleClick(event)}));xf._p(justep('btnEditRole'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'btnEditRole', evt,false)});	
var xf_trigger_btnDeleteRole=new xforms.XFTrigger('btnDeleteRole',null,"/UI/SA/OPM/images/delete.gif","/UI/SA/OPM/images/un_delete.gif",false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnDeleteRoleClick(event)}));xf._p(justep('btnDeleteRole'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'btnDeleteRole', evt,false)});	
var xf_trigger_btnEnableRoles=new xforms.XFTrigger('btnEnableRoles',null,"/UI/SA/OPM/images/enable.gif","/UI/SA/OPM/images/un_enable.gif",false,false,false,null,null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnEnableRolesClick(event)}));xf._p(justep('btnEnableRoles'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action5,'btnEnableRoles', evt,false)});	
var xf_trigger_btnDisableRoles=new xforms.XFTrigger('btnDisableRoles',null,"/UI/SA/OPM/images/disable.gif","/UI/SA/OPM/images/un_disable.gif",false,false,false,null,null,null);	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnDisableRolesClick(event)}));xf._p(justep('btnDisableRoles'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action6,'btnDisableRoles', evt,false)});	
var xf_trigger_imageSearchRole=new xforms.XFTrigger('imageSearchRole',null,"/UI/system/images/search24.gif",null,false,false,false,null,null,null);	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.imageSearchRoleClick(event)}));xf._p(justep('imageSearchRole'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action8,'imageSearchRole', evt,false)});	
new xforms.XFGrid({id:'gridRole',instance:'dRole',systemColumnsPro:'sDescription,sSequence,sValidState,version,fZW,fGW',onInit:null,type:'grid',smartRender:null,delay:false,ids:'calcCheckBox,calcIndex,sRoleKind,sName,sCode,sCatalog,sParentRolesNames,space-column',headNames:'#master_checkbox,&nbsp;,&nbsp;,角色名称,编码,分类,继承,&nbsp;',widths:'30,30,30,100,60,80,120,*',types:'ch,cntr,html,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.gridRoleRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sRoleKind','mainActivity.gridRoleSRoleKindRender');this.grid.bindColReadonly(null,'sRoleKind','true');}});	
var xf_trigger_btnInsertPermission=new xforms.XFTrigger('btnInsertPermission',null,"/UI/SA/OPM/images/insert.gif","/UI/SA/OPM/images/un_insert.gif",false,false,false,null,null,null);	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnInsertPermissionClick(event)}));xf._p(justep('btnInsertPermission'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action7,'btnInsertPermission', evt,false)});	
var xf_menu_newPermissionsMenu = new xforms.XFMenu('newPermissionsMenu','context');xf_menu_newPermissionsMenu.menu.addContextZone('div2');xforms.Event.attach(document.body, "click", function(){xf_menu_newPermissionsMenu.hide()});xf_menu_newPermissionsMenu.menu.setOpenMode('win');	
var xf_menuitem_newFunPermission = new xforms.XFMenuItem('newFunPermission','','分配功能权限','false',null,2,null,'/UI/SA/OPM/images/funPermission.gif','/UI/SA/OPM/images/un_funPermission.gif');xf_menu_newPermissionsMenu.addItem(xf_menuitem_newFunPermission);	
var xf_menuitem_newDataPermission = new xforms.XFMenuItem('newDataPermission','','分配数据权限','false',null,3,null,'/UI/SA/OPM/images/dataPermission.gif','/UI/SA/OPM/images/un_dataPermission.gif');xf_menu_newPermissionsMenu.addItem(xf_menuitem_newDataPermission);	
var xf_action_action11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newPermissionsMenuClick(event)}));xf._p(justep('newPermissionsMenu'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action11,'newPermissionsMenu', evt,false)});	
var xf_trigger_deletePermission=new xforms.XFTrigger('deletePermission',null,"/UI/SA/OPM/images/delete.gif","/UI/SA/OPM/images/un_delete.gif",false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.deletePermissionClick(event)}));xf._p(justep('deletePermission'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'deletePermission', evt,false)});	
var xf_trigger_imageSearchPermission=new xforms.XFTrigger('imageSearchPermission',null,"/UI/system/images/search24.gif",null,false,false,false,null,null,null);	
var xf_action_action9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.imageSearchPermissionClick(event)}));xf._p(justep('imageSearchPermission'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action9,'imageSearchPermission', evt,false)});	
new xforms.XFGrid({id:'gridPermission',instance:'dPermission',systemColumnsPro:'sPermissionRoleID,sProcess,sActivity,sActionsNames,sActions,sSemanticDP,sDescription,sSequence,sValidState,version',onInit:null,type:'grid',smartRender:null,delay:false,ids:'calcCheckBox,calcIndex,sPermissionKind,sActivityFName,actionsLabel,roleName,actionPolicyNames,space-column',headNames:'#master_checkbox,&nbsp;,&nbsp;,业务功能,动作策略/数据策略,所属角色,动作策略Names,&nbsp;',widths:'30,30,30,300,120,60,60,*',types:'ch,cntr,html,html,html,ro,ro,ro',hiddenColumns:'actionPolicyNames',aligns:'center,center,center,,left,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:true,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:'mainActivity.gridPermissionRowValueChanged',groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sPermissionKind','mainActivity.gridPermissionSPermissionKindRender');this.grid.bindColHTMLCallback(null,'sActivityFName','mainActivity.generatePermissionNamePathUI');this.grid.bindColHTMLCallback(null,'actionsLabel','mainActivity.gridPermissionSActionsNamesRender');this.grid.bindColReadonly(null,'actionsLabel','false');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
