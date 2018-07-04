
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/buttonBar.xbl.xml#buttonBar"] = _xbl_JSClassDefine_buttonBar;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
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
_xbl_JSClassDefine_buttonBar.prototype.__code__={v:{name:'_xbl_JSClassDefine_buttonBar',key:'a7f5d679e373a81d438c104604ce94fd',time:1528168382},m:'4b95ce20706382b13cb88adda1ac965f'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'a7f5d679e373a81d438c104604ce94fd',time:1528168382},m:'531560e6d045fe8a5856dc31066e804b'};
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

_xbl_JSClassDefine_tableLayout.prototype.ClassName='_xbl_JSClassDefine_tableLayout';
_xbl_JSClassDefine_tableLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_tableLayout',key:'a7f5d679e373a81d438c104604ce94fd',time:1528168382},m:'e2218b25b8931af54303b9cc0532d311'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'a7f5d679e373a81d438c104604ce94fd',time:1528168382},m:'d4a61eb7cb117ee2cb317d4645fb7c42'};
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
_xbl_JSClassDefine_trigger.prototype.__code__={v:{name:'_xbl_JSClassDefine_trigger',key:'a7f5d679e373a81d438c104604ce94fd',time:1528168382},m:'6bc4339ef88383a8044e34ed5ace56d9'};
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
_xbl_JSClassDefine_splitter.prototype.__code__={v:{name:'_xbl_JSClassDefine_splitter',key:'a7f5d679e373a81d438c104604ce94fd',time:1528168382},m:'2e051977905551748210381ac318e20f'};
	var ids=[{id:'docSetting', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'newNameSpaceDlg', name:'xforms:dialog', children:[{id:'c74ca00e41134d33847bf612ff97e570', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'d266ada3524741e78bde57e4057ed1e8', name:'xforms:input'},{id:'8354d7d4f7eb4fe99d2bf7146f064a6f', name:'xforms:input'},{id:'btnOK', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'btnCancel', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]}]}]},{id:'splitter', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'border1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'buttonBar1', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'trigger2', name:'xforms:trigger', children:[{id:'default1', name:'xforms:label'}]},{id:'trigger3', name:'xforms:trigger', children:[{id:'default2', name:'xforms:label'}]},{id:'trigger4', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default3', name:'xforms:label'}]},{id:'trigger5', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default4', name:'xforms:label'}]}]},{id:'nameSpaceTreeGrid', name:'xforms:grid'}]},{id:'border2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'221c80cad6f4491f8f712a52e77e6f4d', name:'xforms:input'},{id:'cf36a38f9510492eafb49568d108d40d', name:'xforms:input'},{id:'trigger1', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]}]}]},{id:'docNodeListGrid', name:'xforms:grid'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='a7f5d679e373a81d438c104604ce94fd';
xforms.Core.fileName='form.js';	
xf._a(null,'d266ada3524741e78bde57e4057ed1e8');xf._a(null,'8354d7d4f7eb4fe99d2bf7146f064a6f');xf._a(null,'btnOK');xf._a('btnOK','xuiLabel2');xf._a(null,'btnCancel');xf._a('btnCancel','xuiLabel1');xf._a(null,'trigger2');xf._a('trigger2','default1');xf._a(null,'trigger3');xf._a('trigger3','default2');xf._a(null,'trigger4');xf._a('trigger4','default3');xf._a(null,'trigger5');xf._a('trigger5','default4');xf._a(null,'nameSpaceTreeGrid');xf._a(null,'221c80cad6f4491f8f712a52e77e6f4d');xf._a(null,'cf36a38f9510492eafb49568d108d40d');xf._a(null,'trigger1');xf._a('trigger1','xf-label-6');xf._a(null,'docNodeListGrid');function init() {	
var begin = new Date().getTime();	
xf._b("instance('nameSpace')/sDisplayName",xf._g(xf._f('instance',xf._i("nameSpace")),xf._h(false, xf._k("child",xf._j('','sDisplayName')))));	
xf._b("instance('nameSpace')/sPort",xf._g(xf._f('instance',xf._i("nameSpace")),xf._h(false, xf._k("child",xf._j('','sPort')))));	
xf._b("instance('nameSpace')/sFlag",xf._g(xf._f('instance',xf._i("nameSpace")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('nameSpace')/version",xf._g(xf._f('instance',xf._i("nameSpace")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('docNode')/sSize",xf._g(xf._f('instance',xf._i("docNode")),xf._h(false, xf._k("child",xf._j('','sSize')))));	
xf._b("instance('docNode')/sCreateTime",xf._g(xf._f('instance',xf._i("docNode")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('docNode')/sLastWriteTime",xf._g(xf._f('instance',xf._i("docNode")),xf._h(false, xf._k("child",xf._j('','sLastWriteTime')))));	
xf._b("instance('docNode')/sDocLiveVersionID",xf._g(xf._f('instance',xf._i("docNode")),xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID')))));	
xf._b("instance('docNode')/sFinishTime",xf._g(xf._f('instance',xf._i("docNode")),xf._h(false, xf._k("child",xf._j('','sFinishTime')))));	
xf._b("instance('docNode')/sFlag",xf._g(xf._f('instance',xf._i("docNode")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('docNode')/version",xf._g(xf._f('instance',xf._i("docNode")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('buttonState')/new",xf._g(xf._f('instance',xf._i("buttonState")),xf._h(false, xf._k("child",xf._j('','new')))));	
xf._b("instance('buttonState')/new = 'false'",xf._l(xf._g(xf._f('instance',xf._i("buttonState")),xf._h(false, xf._k("child",xf._j('','new')))), '=',xf._i("false")));	
xf._b("instance('buttonState')/delete",xf._g(xf._f('instance',xf._i("buttonState")),xf._h(false, xf._k("child",xf._j('','delete')))));	
xf._b("instance('buttonState')/delete = 'false'",xf._l(xf._g(xf._f('instance',xf._i("buttonState")),xf._h(false, xf._k("child",xf._j('','delete')))), '=',xf._i("false")));	
xf._b("instance('tmpNameSpace')/sDisplayName",xf._g(xf._f('instance',xf._i("tmpNameSpace")),xf._h(false, xf._k("child",xf._j('','sDisplayName')))));	
xf._b("instance('tmpNameSpace')/sUrl",xf._g(xf._f('instance',xf._i("tmpNameSpace")),xf._h(false, xf._k("child",xf._j('','sUrl')))));	
xf._b("sDisplayName",xf._h(false, xf._k("child",xf._j('','sDisplayName'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('nameSpace')/sUrl",xf._g(xf._f('data',xf._i("nameSpace")),xf._h(false, xf._k("child",xf._j('','sUrl')))));	
xf._b("sDocName",xf._h(false, xf._k("child",xf._j('','sDocName'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('tree', 'null');var xf_model_docSettingModel = new xforms.XFModel('docSettingModel',null);	
new xforms.XFInstance2('nameSpace','docSettingModel',null,null,null,null,null,null,null,null,null,'文档配置','whereVersion');	
xf._c('xf-bind-0','docSettingModel',"instance('nameSpace')/sDisplayName",null,null,null,null,null,null,null);	
xf._c('xf-bind-1','docSettingModel',"instance('nameSpace')/sPort","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','docSettingModel',"instance('nameSpace')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','docSettingModel',"instance('nameSpace')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('docNode','docSettingModel',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-4','docSettingModel',"instance('docNode')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-5','docSettingModel',"instance('docNode')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','docSettingModel',"instance('docNode')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','docSettingModel',"instance('docNode')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','docSettingModel',"instance('docNode')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','docSettingModel',"instance('docNode')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','docSettingModel',"instance('docNode')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('tmpNameSpace','docSettingModel',null,'<rows><row id="tmpNameSpaceRow"><cell></cell><cell></cell><cell>1</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('tmpNameSpace','sDisplayName,sUrl,sAccessMode');	
new xforms.XFInstance2('buttonState','docSettingModel',null,'<rows><row id="buttonStateRow"><cell>true</cell><cell>false</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('buttonState','new,delete');	
xf._c('xf-bind-11','docSettingModel',"instance('buttonState')/new",null,"instance('buttonState')/new = 'false'",null,null,null,null,null);	
xf._c('xf-bind-12','docSettingModel',"instance('buttonState')/delete",null,"instance('buttonState')/delete = 'false'",null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docSetting.docSettingModelLoad(event)}));xf._p(justep('docSettingModel'),"onload",null,function(evt) { xforms.run(xf_action_action1,'docSettingModel', evt,false)});	
new xforms.XFDialog('newNameSpaceDlg',"新建",'modal',true,false,true,true,false,null,'396','150',null,null,null,null);	
xf._d('d266ada3524741e78bde57e4057ed1e8','text',xf._q("instance('tmpNameSpace')/sDisplayName"),null,null,null,null,false,false);	
xf._d('8354d7d4f7eb4fe99d2bf7146f064a6f','text',xf._q("instance('tmpNameSpace')/sUrl"),null,null,null,null,false,false);	
var xf_trigger_btnOK=new xforms.XFTrigger('btnOK',null,null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDocSetting();}));xf._p(justep('btnOK'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'btnOK', evt,false)});	
var xf_trigger_btnCancel=new xforms.XFTrigger('btnCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){cancleNewDocSetting();}));xf._p(justep('btnCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'btnCancel', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',xf._q("instance('buttonState')/new"),null,null,false,false,false,null,null,"icon-system-plus");	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){openNewDialog();}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'trigger2', evt,false)});	
var xf_trigger_trigger3=new xforms.XFTrigger('trigger3',xf._q("instance('buttonState')/delete"),null,null,false,false,false,null,null,"icon-system-cancel");	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){deleteDocSetting();}));xf._p(justep('trigger3'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trigger3', evt,false)});	
var xf_trigger_trigger4=new xforms.XFTrigger('trigger4',null,null,null,false,false,false,"nameSpace","save",null);	
var xf_trigger_trigger5=new xforms.XFTrigger('trigger5',null,null,null,false,false,false,"nameSpace","refresh",null);	
new xforms.XFGrid({id:'nameSpaceTreeGrid',instance:'nameSpace',systemColumnsPro:'sHost,sPort,sFlag,version,sAccessMode,sUrl',onInit:null,type:'tree',smartRender:null,delay:false,ids:'sDisplayName,space-column',headNames:'名称,&nbsp;',widths:'*,*',types:'tree,ro',hiddenColumns:'',aligns:',',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'showNodeImg',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:false,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
xf._d('221c80cad6f4491f8f712a52e77e6f4d','text',xf._q("instance('nameSpace')/sDisplayName"),null,null,null,null,false,false);	
xf._d('cf36a38f9510492eafb49568d108d40d','text',xf._q("data('nameSpace')/sUrl"),null,null,null,null,false,false);	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docSetting.trigger1Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_5,'trigger1', evt,false)});	
new xforms.XFGrid({id:'docNodeListGrid',instance:'docNode',systemColumnsPro:'sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',onInit:null,type:'grid',smartRender:null,delay:false,ids:'sDocName,space-column',headNames:'名称,&nbsp;',widths:'100,*',types:'ro,ro',hiddenColumns:'',aligns:',',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var __actions__ = {	
};	
