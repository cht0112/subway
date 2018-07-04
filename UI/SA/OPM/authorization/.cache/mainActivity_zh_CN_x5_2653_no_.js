
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/buttonBar.xbl.xml#buttonBar"] = _xbl_JSClassDefine_buttonBar;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/trigger.xbl.xml#trigger"] = _xbl_JSClassDefine_trigger;
justep.XBLObject._classes["/UI/system/components/splitter.xbl.xml#splitter"] = _xbl_JSClassDefine_splitter;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_buttonBar(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_buttonBar.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL: function(){
					this.$el = $(this.domNode);
					this.expandable = this.$el.attr('expandable') == 'true';
					if(this.expandable){
						this.expanded = this.$el.attr('expanded') == 'true';
						this.expandedLabel = this.$el.attr('expanded-label');
						this.collapsedLabel = this.$el.attr('collapsed-label');
						this.iconExpanded = this.$el.attr('icon-expanded') || 'icon-system-plus-circle';
						this.iconCollapsed= this.$el.attr('icon-collapsed') || 'icon-system-minus-circle';
						this.btn = justep.xbl(this.domNode.id + '-extend');
						this.expandedItems = $('li.extend ~ li', this.$el); 
					}
				},
				toggle: function(){
					this.expandable && this.extend(!this.expanded);
				},
				extend: function(value){
					if(this.expandable && this.expanded != value){
						this.expanded = value;
						this.btn.setLabel(this.expanded? this.collapsedLabel : this.expandedLabel);
						if(this.expanded){
							this.expandedItems.show();
							$('.icon', this.btn.element).removeClass(this.iconExpanded).addClass(this.iconCollapsed);
						}else{
							this.expandedItems.hide();
							$('.icon', this.btn.element).removeClass(this.iconCollapsed).addClass(this.iconExpanded);
						}	
					}
				}
			}));

_xbl_JSClassDefine_buttonBar.prototype.ClassName='_xbl_JSClassDefine_buttonBar';
_xbl_JSClassDefine_buttonBar.prototype.__code__={v:{name:'_xbl_JSClassDefine_buttonBar',key:'37d223ff7c58255c6f8ea244982edcce',time:1528078032},m:'f15221cb97e23cf5892363954869e4a4'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'37d223ff7c58255c6f8ea244982edcce',time:1528078032},m:'cd525c6571471a31e6f8f54c7fa3607c'};
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
_xbl_JSClassDefine_tabs.prototype.__code__={v:{name:'_xbl_JSClassDefine_tabs',key:'37d223ff7c58255c6f8ea244982edcce',time:1528078032},m:'fe8814f5c9ba56aaff7de2f86f74d136'};
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
_xbl_JSClassDefine_windowDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_windowDialog',key:'37d223ff7c58255c6f8ea244982edcce',time:1528078032},m:'32b053a05835a29a3a504ebf02c5bc2c'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'37d223ff7c58255c6f8ea244982edcce',time:1528078032},m:'83a14f003189e40e8c196038ce8305da'};
function _xbl_JSClassDefine_trigger(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_trigger.prototype = justep.Object.extend(new justep.XBLObject(), eval({	
			"initXBL" : function() {
				this.$el = $(this.domNode);
				justep.Utils.proxable(this, this.domNode.xformsObject, xforms.XFTrigger);
			},
			"initXBL2" : function() {
				this.domNode.xformsObject.initOperation();
			}
		}));

_xbl_JSClassDefine_trigger.prototype.ClassName='_xbl_JSClassDefine_trigger';
_xbl_JSClassDefine_trigger.prototype.__code__={v:{name:'_xbl_JSClassDefine_trigger',key:'37d223ff7c58255c6f8ea244982edcce',time:1528078032},m:'8585d07d352bd30b247a7903157bb367'};
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
_xbl_JSClassDefine_splitter.prototype.__code__={v:{name:'_xbl_JSClassDefine_splitter',key:'37d223ff7c58255c6f8ea244982edcce',time:1528078032},m:'ac0e0d1e0f589b6179f9a6a91ac09382'};
	var ids=[{id:'86a42e5c7ecb4b29bc70e012faf080fe', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'HSplitter1', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'buttonBar1', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'imageSearchOrg', name:'xforms:trigger', children:[{id:'xuiLabel5', name:'xforms:label'}]}]},{id:'gridOrgTree', name:'xforms:grid'}]},{id:'tabPanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'borderLayout2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'buttonBar4', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'btnInsertAuthorize', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'btnDeleteAuthorize', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'btnNextPageAuthorize', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default6', name:'xforms:label'}]},{id:'trigger4', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default7', name:'xforms:label'}]},{id:'buttonBar6', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar'}]},{id:'buttonBar5', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'imageSearchAuthorize', name:'xforms:trigger', children:[{id:'xuiLabel6', name:'xforms:label'}]}]},{id:'gridAuthorize', name:'xforms:grid'}]},{id:'borderLayout3', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'buttonBar2', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'btnNextPagePermission', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default4', name:'xforms:label'}]},{id:'btnAllPagePermission', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default5', name:'xforms:label'}]},{id:'buttonBar7', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar'}]},{id:'buttonBar3', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'imageSearchPermission', name:'xforms:trigger', children:[{id:'xuiLabel7', name:'xforms:label'}]}]},{id:'gridAuthorizePermission', name:'xforms:grid'}]}]}]},{id:'wdSelectRoles', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wdSearchOrg', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='37d223ff7c58255c6f8ea244982edcce';
xforms.Core.fileName='form.js';	
xf._a(null,'imageSearchOrg');xf._a('imageSearchOrg','xuiLabel5');xf._a(null,'gridOrgTree');xf._a(null,'btnInsertAuthorize');xf._a('btnInsertAuthorize','xuiLabel1');xf._a(null,'btnDeleteAuthorize');xf._a('btnDeleteAuthorize','xuiLabel2');xf._a(null,'btnNextPageAuthorize');xf._a('btnNextPageAuthorize','default6');xf._a(null,'trigger4');xf._a('trigger4','default7');xf._a(null,'imageSearchAuthorize');xf._a('imageSearchAuthorize','xuiLabel6');xf._a(null,'gridAuthorize');xf._a(null,'btnNextPagePermission');xf._a('btnNextPagePermission','default4');xf._a(null,'btnAllPagePermission');xf._a('btnAllPagePermission','default5');xf._a(null,'imageSearchPermission');xf._a('imageSearchPermission','xuiLabel7');xf._a(null,'gridAuthorizePermission');function init() {	
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
xf._b("instance('dAuthorize')/sCreateTime",xf._g(xf._f('instance',xf._i("dAuthorize")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('dAuthorize')/version",xf._g(xf._f('instance',xf._i("dAuthorize")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAuthorizePermission')/sPermissionKind",xf._g(xf._f('instance',xf._i("dAuthorizePermission")),xf._h(false, xf._k("child",xf._j('','sPermissionKind')))));	
xf._b("instance('dAuthorizePermission')/sSequence",xf._g(xf._f('instance',xf._i("dAuthorizePermission")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('dAuthorizePermission')/sValidState",xf._g(xf._f('instance',xf._i("dAuthorizePermission")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dAuthorizePermission')/version",xf._g(xf._f('instance',xf._i("dAuthorizePermission")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("calcCheckBox",xf._h(false, xf._k("child",xf._j('','calcCheckBox'))));	
xf._b("calcIndex",xf._h(false, xf._k("child",xf._j('','calcIndex'))));	
xf._b("roleRoleKind",xf._h(false, xf._k("child",xf._j('','roleRoleKind'))));	
xf._b("roleName",xf._h(false, xf._k("child",xf._j('','roleName'))));	
xf._b("roleCatalog",xf._h(false, xf._k("child",xf._j('','roleCatalog'))));	
xf._b("roleParentRolesNames",xf._h(false, xf._k("child",xf._j('','roleParentRolesNames'))));	
xf._b("sOrgFName",xf._h(false, xf._k("child",xf._j('','sOrgFName'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("sPermissionKind",xf._h(false, xf._k("child",xf._j('','sPermissionKind'))));	
xf._b("sActivityFName",xf._h(false, xf._k("child",xf._j('','sActivityFName'))));	
xf._b("actionsLabel",xf._h(false, xf._k("child",xf._j('','actionsLabel'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('ch', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dOrgTree','model1',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
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
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action6,'model1', evt,false)});	
var xf_trigger_imageSearchOrg=new xforms.XFTrigger('imageSearchOrg',null,null,null,false,false,false,null,null,"icon-system-search");	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.imageSearchOrgClick(event)}));xf._p(justep('imageSearchOrg'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action5,'imageSearchOrg', evt,false)});	
new xforms.XFGrid({id:'gridOrgTree',instance:'dOrgTree',systemColumnsPro:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version,ognName,dptName,posName,operatorState,personID,personName,personCode,personNumb,personLoginName,personPassword,personMainOrgID,personIDCard,personValidState,personVersion,personSex,nATION,eDUCATIONID,pOSITIONALTITLE,EDUCATION_CODE,eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,pOSITIONALTITLEIDCNAME',onInit:null,type:'tree',smartRender:null,delay:true,ids:'sName',headNames:'名称',widths:'*',types:'tree',hiddenColumns:'',aligns:'',serverSort:true,sorts:'na',fixColumnSize:null,nodeImgCallback:'mainActivity.gridOrgTreeShowNodeImg',multiSelection:'',checkedRef:'',filters:'\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:'func_7195271',onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:'func_253700579',onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'sName','true');}});	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.tabAuthorizeSelect(event)}));xf._p(justep('tabAuthorize'),"xforms-select",null,function(evt) { xforms.run(xf_action_action3,'tabAuthorize', evt,false)});	
var xf_trigger_btnInsertAuthorize=new xforms.XFTrigger('btnInsertAuthorize',null,null,null,false,false,false,null,null,"icon-system-plus");	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnInsertAuthorizeClick(event)}));xf._p(justep('btnInsertAuthorize'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'btnInsertAuthorize', evt,false)});	
var xf_trigger_btnDeleteAuthorize=new xforms.XFTrigger('btnDeleteAuthorize',null,null,null,false,false,false,null,null,"icon-system-minus");	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.btnDeleteAuthorizeClick(event)}));xf._p(justep('btnDeleteAuthorize'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnDeleteAuthorize', evt,false)});	
var xf_trigger_btnNextPageAuthorize=new xforms.XFTrigger('btnNextPageAuthorize',null,null,null,false,false,false,"dAuthorize","loadNextPage","icon-system-angle-right");	
var xf_trigger_trigger4=new xforms.XFTrigger('trigger4',null,null,null,false,false,false,"dAuthorize","loadAllPage","icon-system-angle-double-right");	
var xf_trigger_imageSearchAuthorize=new xforms.XFTrigger('imageSearchAuthorize',null,null,null,false,false,false,null,null,"icon-system-search");	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.imageSearchAuthorizeClick(event)}));xf._p(justep('imageSearchAuthorize'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action7,'imageSearchAuthorize', evt,false)});	
new xforms.XFGrid({id:'gridAuthorize',instance:'dAuthorize',systemColumnsPro:'sOrgID,sOrgFID,sOrgName,sAuthorizeRoleID,sDescription,sCreatorFID,sCreatorFName,sCreateTime,version,roleDescription',onInit:null,type:'grid',smartRender:null,delay:false,ids:'calcCheckBox,calcIndex,roleRoleKind,roleName,roleCatalog,roleParentRolesNames,sOrgFName,space-column',headNames:'#master_checkbox,序号,类型,角色,角色分类,父角色,授权组织,&nbsp;',widths:'30,30,30,120,80,120,350,*',types:'ch,cntr,html,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,center,,,,,',serverSort:true,sorts:'na,na,str,str,str,str,str,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'30',hdrRowH:'30',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:'mainActivity.gridAuthorizeRowValueChanged',groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'roleRoleKind','mainActivity.gridAuthorizeRoleRoleKindRender');}});	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.tabPermissionSelect(event)}));xf._p(justep('tabPermission'),"xforms-select",null,function(evt) { xforms.run(xf_action_action4,'tabPermission', evt,false)});	
var xf_trigger_btnNextPagePermission=new xforms.XFTrigger('btnNextPagePermission',null,null,null,false,false,false,"dAuthorizePermission","loadNextPage","icon-system-angle-right");	
var xf_trigger_btnAllPagePermission=new xforms.XFTrigger('btnAllPagePermission',null,null,null,false,false,false,"dAuthorizePermission","loadAllPage","icon-system-angle-double-right");	
var xf_trigger_imageSearchPermission=new xforms.XFTrigger('imageSearchPermission',null,null,null,false,false,false,null,null,"icon-system-search");	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.imageSearchPermissionClick(event)}));xf._p(justep('imageSearchPermission'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action8,'imageSearchPermission', evt,false)});	
new xforms.XFGrid({id:'gridAuthorizePermission',instance:'dAuthorizePermission',systemColumnsPro:'sPermissionRoleID,sProcess,sActivity,sActionsNames,sActions,sSemanticDP,sDescription,sSequence,sValidState,version,roleCode',onInit:null,type:'grid',smartRender:null,delay:false,ids:'calcIndex,sPermissionKind,sActivityFName,actionsLabel,roleName,space-column',headNames:'序号,类型,功能权限,动作策略/数据策略,角色,&nbsp;',widths:'30,30,350,200,100,*',types:'cntr,html,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,,,,',serverSort:true,sorts:'na,str,str,na,str,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'30',hdrRowH:'30',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sPermissionKind','mainActivity.gridAuthorizePermissionSPermissionKindRender');}});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dAuthorize_part_loaded = false;	
function load_dAuthorize_part(callback){if (dAuthorize_part_loaded) return;dAuthorize_part_loaded = true;	
new xforms.XFInstance2('dAuthorize','model1',null,null,null,null,null,null,null,null,'calcCheckBox,calcIndex',null,'whereVersion');	
xf._c('xf-bind-10','model1',"instance('dAuthorize')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('dAuthorize')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dAuthorize_part_init_loaded = false;	
function load_dAuthorize_part_init(){if (dAuthorize_part_init_loaded) return;dAuthorize_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var dAuthorizePermission_part_loaded = false;	
function load_dAuthorizePermission_part(callback){if (dAuthorizePermission_part_loaded) return;dAuthorizePermission_part_loaded = true;	
new xforms.XFInstance2('dAuthorizePermission','model1',null,null,null,null,null,null,null,null,'calcIndex',null,'whereVersion');	
xf._c('xf-bind-12','model1',"instance('dAuthorizePermission')/sPermissionKind","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('dAuthorizePermission')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('dAuthorizePermission')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('dAuthorizePermission')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dAuthorizePermission_part_init_loaded = false;	
function load_dAuthorizePermission_part_init(){if (dAuthorizePermission_part_init_loaded) return;dAuthorizePermission_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var __actions__ = {	
};	
