
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/splitter.xbl.xml#splitter"] = _xbl_JSClassDefine_splitter;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
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
				this.state = 1;
				if(this.status=='show-first' || this.status=='show-left' || this.status=='show-top'){
				   	this.state = 0;
				}else if(this.status=="show-second" || this.status=='show-top' || this.status=='show-bottom'){
				   	this.state = 2;
				}
				this.spacing = 5;
				this.resizable = this.domNode.getAttribute('resizable')?this.domNode.getAttribute('resizable')=="true": true;
			   	this.isHorz = this.el.attr("mode") === 'horz';
			   	this.hasHandler = this.el.attr("has-drag-bar") === 'true';
			   	this.hasArrowBtn = this.el.attr("has-arrow-button") === 'true';
			   	this.fixSize = this.el.attr("fix-size") || '50%';
			   	this.isAnchor = this.fixSize.indexOf('%') != -1;/*是百分比的*/

			   	this.rootEl = $(">div" + baseCls + "root", this.el);
			   	var s = ">div" + baseCls + "root >div";
			   	this.leftEl = this.isHorz ? $(s + baseCls + "left", this.el) : $(s + baseCls + "top", this.el);
			   	this.rightEl = this.isHorz ? $(s + baseCls + "right", this.el) : $(s + baseCls + "bottom", this.el);
			   	this.handlerEl = $(s + baseCls + "handler", this.el);
			   	var that = this;
			   	if(this.hasHandler && this.hasArrowBtn){
				   	$("#" + id+" > "+baseCls + "root > "+baseCls + "handler >"+baseCls + "btn "+baseCls + "resize-btn").css('cursor', 'pointer').bind('mousedown', function(evt){
				   		that.splitBtnClick = true;
				   		setTimeout(function(){
				   			that.splitBtnClick = false;
				   		}, 50);
				   		that._onResizeBtnClick($(evt.srcElement).attr("role"));
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

				//为了解决 当前套在tab次页下时，初次有不显示的缺陷
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
					lw = this.calcWidth;
					rw = l - lw;
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

function _xbl_JSClassDefine_bizDataFilterDialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}_xbl_JSClassDefine_bizDataFilterDialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
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

	var ids=[{id:'4ea78c77daae45208e5e011364961a19', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table4', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'HSplitter1', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'table2', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'toolbars2', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'wdSearchOrg', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'gridOrgTree', name:'xforms:grid'}]},{id:'table3', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'btnInsertMore', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'e3467eab615b48ff825d96423d321c3e', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'newItemsMenu', name:'xforms:menu', children:[{id:'newDpt', name:'xforms:menuitem'},{id:'split', name:'xforms:menuitem'},{id:'newPerson', name:'xforms:menuitem'},{id:'assignPerson', name:'xforms:menuitem'}]}]},{id:'btnEdit', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'btnLogicDelete', name:'xforms:trigger', children:[{id:'xuiLabel5', name:'xforms:label'}]},{id:'btnSort', name:'xforms:trigger', children:[{id:'xuiLabel6', name:'xforms:label'}]},{id:'btnMove', name:'xforms:trigger', children:[{id:'xuiLabel7', name:'xforms:label'}]},{id:'btnResetPassword', name:'xforms:trigger', children:[{id:'xuiLabel8', name:'xforms:label'}]}]},{id:'wdOrgDetail', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdPersonDetail', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdSelectMoveToOrg', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdSortOrgs', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdAssignPerson', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'gridOrgList', name:'xforms:grid'},{id:'wdChangeMainOrg', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]}]},{id:'filter-dialog-1e364fce-4beb-4486-b389-2ca373d882fc', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1770016357', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'gridOrgTree');xf._a(null,'btnInsertMore');xf._a('btnInsertMore','xuiLabel1');xf._a(null,'btnEdit');xf._a('btnEdit','xuiLabel2');xf._a(null,'btnLogicDelete');xf._a('btnLogicDelete','xuiLabel5');xf._a(null,'btnSort');xf._a('btnSort','xuiLabel6');xf._a(null,'btnMove');xf._a('btnMove','xuiLabel7');xf._a(null,'btnResetPassword');xf._a('btnResetPassword','xuiLabel8');xf._a(null,'gridOrgList');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dOrgTree')/sValidState",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrgTree')/sLevel",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrgTree')/version",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dOrgTree')/personNumb",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('dOrgTree')/personValidState",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('dOrgTree')/personVersion",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('dOrgTree')/eDUCATIONID",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('dOrgTree')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('dOrgTree')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('dOrgTree')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("dOrgTree")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("instance('dOrgList')/sValidState",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrgList')/sLevel",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrgList')/version",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dOrgList')/personNumb",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','personNumb')))));	
xf._b("instance('dOrgList')/personValidState",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','personValidState')))));	
xf._b("instance('dOrgList')/personVersion",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','personVersion')))));	
xf._b("instance('dOrgList')/eDUCATIONID",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('dOrgList')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('dOrgList')/EDUCATION_CODE",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','EDUCATION_CODE')))));	
xf._b("instance('dOrgList')/POSITIONAL_TITLE_CODE",xf._g(xf._f('instance',xf._i("dOrgList")),xf._h(false, xf._k("child",xf._j('','POSITIONAL_TITLE_CODE')))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("calcIndex",xf._h(false, xf._k("child",xf._j('','calcIndex'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("ognName",xf._h(false, xf._k("child",xf._j('','ognName'))));	
xf._b("dptName",xf._h(false, xf._k("child",xf._j('','dptName'))));	
xf._b("eDUCATIONIDCNAME",xf._h(false, xf._k("child",xf._j('','eDUCATIONIDCNAME'))));	
xf._b("nATION",xf._h(false, xf._k("child",xf._j('','nATION'))));	
xf._b("pOSITIONALTITLEIDCNAME",xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLEIDCNAME'))));	
xf._b("operatorState",xf._h(false, xf._k("child",xf._j('','operatorState'))));	
xf._b("not(call('justep.XData.canDo','dOrgList','NextPage'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dOrgList"),xf._i("NextPage"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
var xf_action_action12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.model1ModelConstructDone(event)}));xf._p(justep('model1'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action12,'model1', evt,false)});	
xforms.load_parts('rootView');	
new xforms.XFDialog('GLOBAL_ID_1770016357',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1847091306');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1847091306", "");}));xf._p(justep('GLOBAL_ID_1770016357'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_8,'GLOBAL_ID_1770016357', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dOrgTree_part_loaded = false;	
function load_dOrgTree_part(callback){if (dOrgTree_part_loaded) return;dOrgTree_part_loaded = true;	
new xforms.XFInstance2('dOrgTree','model1',null,null,null,null,null,null,null,null,null,'组织机构','whereVersion');	
xf._c('xf-bind-0','model1',"instance('dOrgTree')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dOrgTree')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dOrgTree')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('dOrgTree')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('dOrgTree')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('dOrgTree')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('dOrgTree')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('dOrgTree')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('dOrgTree')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('dOrgTree')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrgTree_part_init_loaded = false;	
function load_dOrgTree_part_init(){if (dOrgTree_part_init_loaded) return;dOrgTree_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var dOrgList_part_loaded = false;	
function load_dOrgList_part(callback){if (dOrgList_part_loaded) return;dOrgList_part_loaded = true;	
new xforms.XFInstance2('dOrgList','model1',null,null,null,null,null,null,null,null,'calcIndex',null,'whereVersion');	
xf._c('xf-bind-10','model1',"instance('dOrgList')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('dOrgList')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('dOrgList')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('dOrgList')/personNumb","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('dOrgList')/personValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('dOrgList')/personVersion","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('dOrgList')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('dOrgList')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('dOrgList')/EDUCATION_CODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('dOrgList')/POSITIONAL_TITLE_CODE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrgList_part_init_loaded = false;	
function load_dOrgList_part_init(){if (dOrgList_part_init_loaded) return;dOrgList_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
new xforms.XFGrid({id:'gridOrgTree',instance:'dOrgTree',systemColumnsPro:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',onInit:null,type:'tree',smartRender:null,delay:true,ids:'sName',headNames:'名称',widths:'*',types:'tree',hiddenColumns:'',aligns:'',serverSort:true,sorts:'na',fixColumnSize:null,nodeImgCallback:'mainActivity.gridOrgTreeShowNodeImg',multiSelection:'',checkedRef:'',filters:'\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:'mainActivity.gridOrgTreeCellHint',cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:'func_1371864009',onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'sName','true');}});	
var xf_trigger_btnInsertMore=new xforms.XFTrigger('btnInsertMore',null,"/UI/SA/OPM/images/insertMore.gif","/UI/SA/OPM/images/un_insertMore.gif",false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnInsertMoreClick(event)}));xf._p(justep('btnInsertMore'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'btnInsertMore', evt,false)});	
var xf_menu_newItemsMenu = new xforms.XFMenu('newItemsMenu','context');xf_menu_newItemsMenu.menu.addContextZone('e3467eab615b48ff825d96423d321c3e');xforms.Event.attach(document.body, "click", function(){xf_menu_newItemsMenu.hide()});xf_menu_newItemsMenu.menu.setOpenMode('win');	
var xf_menuitem_newDpt = new xforms.XFMenuItem('newDpt','','新建用户组','false',null,0,null,'/UI/SA/OPM/images/newDpt.gif','/UI/SA/OPM/images/un_newDpt.gif');xf_menu_newItemsMenu.addItem(xf_menuitem_newDpt);	
var xf_menuitem_split = new xforms.XFMenuItem('split','','-------------','false',null,1,null,null,null);xf_menu_newItemsMenu.addItem(xf_menuitem_split);	
var xf_menuitem_newPerson = new xforms.XFMenuItem('newPerson','','新建人员','false',null,2,null,'/UI/SA/OPM/images/newPerson.gif','/UI/SA/OPM/images/un_newPerson.gif');xf_menu_newItemsMenu.addItem(xf_menuitem_newPerson);	
var xf_menuitem_assignPerson = new xforms.XFMenuItem('assignPerson','','分配人员','false',null,3,null,'/UI/SA/OPM/images/newPerson.gif','/UI/SA/OPM/images/un_newPerson.gif');xf_menu_newItemsMenu.addItem(xf_menuitem_assignPerson);	
var xf_action_action11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.newItemsMenuClick(event)}));xf._p(justep('newItemsMenu'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action11,'newItemsMenu', evt,false)});	
var xf_trigger_btnEdit=new xforms.XFTrigger('btnEdit',null,"/UI/SA/OPM/images/edit.gif","/UI/SA/OPM/images/un_edit.gif",false,false);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnEditClick(event)}));xf._p(justep('btnEdit'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnEdit', evt,false)});	
var xf_trigger_btnLogicDelete=new xforms.XFTrigger('btnLogicDelete',null,"/UI/SA/OPM/images/logicDelete.gif","/UI/SA/OPM/images/un_logicDelete.gif",false,false);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnLogicDeleteClick(event)}));xf._p(justep('btnLogicDelete'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action5,'btnLogicDelete', evt,false)});	
var xf_trigger_btnSort=new xforms.XFTrigger('btnSort',null,"/UI/SA/OPM/images/sort.gif","/UI/SA/OPM/images/un_sort.gif",false,false);	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnSortClick(event)}));xf._p(justep('btnSort'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action6,'btnSort', evt,false)});	
var xf_trigger_btnMove=new xforms.XFTrigger('btnMove',null,"/UI/SA/OPM/images/moveOrg.gif","/UI/SA/OPM/images/un_moveOrg.gif",false,false);	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnMoveClick(event)}));xf._p(justep('btnMove'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action7,'btnMove', evt,false)});	
var xf_trigger_btnResetPassword=new xforms.XFTrigger('btnResetPassword',null,"/UI/SA/OPM/images/resetPassword.gif","/UI/SA/OPM/images/un_resetPassword.gif",false,false);	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnResetPasswordClick(event)}));xf._p(justep('btnResetPassword'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action8,'btnResetPassword', evt,false)});	
new xforms.XFGrid({id:'gridOrgList',instance:'dOrgList',systemColumnsPro:'sLongName,sFName,sFCode,sFID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,posName,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,POSITIONAL_TITLE_CODE',onInit:null,type:'grid',smartRender:null,delay:false,ids:'calcIndex,sOrgKindID,sName,sCode,ognName,dptName,eDUCATIONIDCNAME,nATION,pOSITIONALTITLEIDCNAME,operatorState',headNames:'&nbsp;,&nbsp;,名称,编码,机构,用户组,学历,民族,职称,操作员状态',widths:'30,30,120,60,100,100,100,100,100,100',types:'cntr,html,ro,ro,ro,ro,ed,ed,ed,ed',hiddenColumns:'',aligns:'center,center,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'mainActivity.gridOrgListRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sOrgKindID','mainActivity.gridOrgListSOrgKindIDRender');this.grid.bindColReadonly(null,'sOrgKindID','true');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		