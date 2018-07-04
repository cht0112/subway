
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/buttonBar.xbl.xml#buttonBar"] = _xbl_JSClassDefine_buttonBar;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu"] = _xbl_JSClassDefine_bizDataFilterMenu;
justep.XBLObject._classes["/UI/system/components/menu.xbl.xml#menu"] = _xbl_JSClassDefine_menu;
justep.XBLObject._classes["/UI/system/components/pagination.xbl.xml#pagination"] = _xbl_JSClassDefine_pagination;
justep.XBLObject._classes["/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern"] = _xbl_JSClassDefine_bizDataFilterPattern;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/trigger.xbl.xml#trigger"] = _xbl_JSClassDefine_trigger;
justep.XBLObject._classes["/UI/system/components/splitter.xbl.xml#splitter"] = _xbl_JSClassDefine_splitter;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/menuButton.xbl.xml#menuButton"] = _xbl_JSClassDefine_menuButton;
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
_xbl_JSClassDefine_buttonBar.prototype.__code__={v:{name:'_xbl_JSClassDefine_buttonBar',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'26b90e9e488922e775accac5143f8353'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'8b7bbc57978e7ce26d8e75cc7cd11d24'};
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

_xbl_JSClassDefine_dialog.prototype.ClassName='_xbl_JSClassDefine_dialog';
_xbl_JSClassDefine_dialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_dialog',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'32047ce888c2df2e50e382249bec105f'};
function _xbl_JSClassDefine_bizDataFilterMenu(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_bizDataFilterMenu.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL": function() {
				justep.supportCustomOperation(this);
				justep.Utils.proxable(this, new justep.BizDataFilterMenu(this), justep.BizDataFilterMenu);
			}
		}));

_xbl_JSClassDefine_bizDataFilterMenu.prototype.ClassName='_xbl_JSClassDefine_bizDataFilterMenu';
_xbl_JSClassDefine_bizDataFilterMenu.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterMenu',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'30177e35c02061ce47bb054effb0e38a'};
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
				},	refreshMenuItemset: function(itemsetID){
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
_xbl_JSClassDefine_menu.prototype.__code__={v:{name:'_xbl_JSClassDefine_menu',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'a541ea72ed109d2fcf93f71e55fee31d'};
function _xbl_JSClassDefine_pagination(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_pagination.prototype = justep.Object.extend(new justep.XBLObject(), eval({ 
			"initXBL" : function() {
				var el = $(this.domNode),
					config = {
						el: el,
						dataId: el.attr('data'),
						items: el.attr('items'),
						align: el.attr('align'),
						firstLabel: el.attr('first-label'),
						preLabel: el.attr('pre-label'),
						nextLabel: el.attr('next-label'),
						lastLabel: el.attr('last-label'),
						pageCount: el.attr('page-count')
					};
				justep.Object.extend(this, justep.Pagination, null, true);
				justep.Pagination.call(this, config);
			}
		}));

_xbl_JSClassDefine_pagination.prototype.ClassName='_xbl_JSClassDefine_pagination';
_xbl_JSClassDefine_pagination.prototype.__code__={v:{name:'_xbl_JSClassDefine_pagination',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'1463d9876eeeb3bc81983bfe4f8aa6aa'};
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
_xbl_JSClassDefine_bizDataFilterPattern.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterPattern',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'8a739e8113d69c3cd1bde92f1edbf221'};
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
_xbl_JSClassDefine_borderLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_borderLayout',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'943b3f21119f22329e8ce94eff7fdd72'};
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
_xbl_JSClassDefine_trigger.prototype.__code__={v:{name:'_xbl_JSClassDefine_trigger',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'4137ff69f7546c05c33f77a6471b34cb'};
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
_xbl_JSClassDefine_splitter.prototype.__code__={v:{name:'_xbl_JSClassDefine_splitter',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'9587a5b0a3a36079af0c37d910dc6392'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'6b654cc4ca6aee23e09876846af78a78'};
function _xbl_JSClassDefine_menuButton(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_menuButton.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL: function(){
					var me = this;
					this.$node = $(this.domNode);
					this.$head = $(">.head", this.$node);
					this.$list = $(".list", this.$node);
					this.$menu = $("#" + this.domNode.id + "-menu");
					$("body").append(this.$menu);
					this.$listHead = $(">.head", this.$list);
					this.$listBody = $(">ul", this.$list);
					this.mode = this.$node.attr("mode") || '';

					var onLabelClick = justep.Function.get(this.$node.attr("onLabelClick"));
					if(onLabelClick){
						this.$head.click(onLabelClick);
						this.$listHead.click(function(event){
							me.close();
							onLabelClick.call(null, event);
						});
					}
					(onLabelClick? $('.arr', this.$head) : this.$head).click(function(){
						me.open();
						return false;
					});

					(onLabelClick? $('.arr', this.$listHead) : this.$listHead).click(function(){
						me.close();
						return false;
					});
					this.$listBody.click(function(){
						me.close();
						return false;
					});
					this.$overlay = $('>.overlay', this.$menu).click(function(){
						me.close();
					});
				},
				"initXBL2" : function() {
					/*item class*/
					function OpItem(owner, name, el, operationOwner, operation){
						this.owner = owner;
						this.name = name;
						this.$el = $(el);
						var me = this;

						this.operationNotify = function(event){
							if(event.type == 'change'){
								var name = event.property;
								if(name=='label'){
									me.setLabel(event.value);
								}
								if(name=='enable'){
									me.setDisabled(!event.value);
								}
							}
						};

						this.operationOwner = justep.xbl(operationOwner);
						if(this.operationOwner){
							this.operation = this.operationOwner.getOperation(operation);;
							this.operation.registerObserver(this);
						} 
						this.method = function(){
							if(me.operation) me.operation.execute();
						};						
						this.setDisabled = function(value){
							if(value){
								this.$el.attr('disabled', 'disabled');
							}else{
								this.$el.removeAttr('disabled');
							}
						};	
						this.setLabel = function(value){
							$('.label', this.$el).html(value);
						};
						if(!justep.String.trim($('.label', this.$el).html()))
							this.setLabel(this.operation.getLabel());
						if(!justep.String.trim($('.label', this.$el).html()))
							this.setLabel(this.operation.getLabel());
						this.setDisabled(!this.operation.getEnable());
						if($('.icon', this.$el).attr('class') == 'icon empty-icon' && this.operation.getIconClass())
							$('.icon', this.$el).attr('class', 'icon ' + this.operation.getIconClass());
					}
					function Item(owner, name, el, method){
						this.owner = owner;
						this.name = name;
						this.$el = $(el);
						eval('this.method = function(event){' + method +'(event);}');
						this.setDisabled = function(value){
							if(value){
								this.$el.attr('disabled', 'disabled');
							}else{
								this.$el.removeAttr('disabled');
							}
						};	
					}
					/*init item*/
					this.items = {};
					var me = this;
					$('>ul>li>a', this.$list).each(function(){
						var name = $(this).attr('name');
						if(!me.items[name]){
							var obj;
							var method = $(this).attr('method');
							var operationOwner = $(this).attr('operation-owner');
							var operation = $(this).attr('operation');
							if(operationOwner && operation){
								obj = new OpItem(me, name, this, operationOwner, operation); 
							}else if(method){
								obj = new Item(me, name, this, method); 
							}
							me.items[name] = obj;
						}
					});
				},
				open: function(){
					this.$listHead.width(this.$head.width());
					/*清空上次计算的样式*/
					this.$listBody.attr('style', ' ');
					var cls = 'dropdown';
					if(this.mode == 'auto'){
						/*通过显示计算区域大小*/
						var oriStyle = this.$node.attr("style") || ' ';
						this.$node.attr('style', oriStyle + ';overflow: hidden');
						this.$list.addClass('test');
						var w = Math.max(this.$listBody.outerWidth(), this.$listHead.outerWidth()),
							h = this.$listBody.outerHeight() + this.$listHead.outerHeight();
						this.$list.removeClass('test');
						this.$node.attr('style', oriStyle);
						if((this.$node.offset().top - $(document).scrollTop() + h) > $(window).height())
							cls = 'dropup';
						if((this.$node.offset().left - $(document).scrollLeft() + w) > $(window).width())
							cls += ' left';
					}else{
						if(this.mode.indexOf('up') != -1){
							cls = 'dropup';
						}
						if(this.mode.indexOf('left') != -1){
							cls += ' left';
						}
					}
					this.$menu.css(this.$head.offset());
					this.$list.addClass(cls);
					this.$overlay.show();

					/* 计算最小宽度 */
					this.$listBody.width(
						Math.max(this.$listBody.outerWidth(), this.$listHead.outerWidth())
						- (this.$listBody.outerWidth() - this.$listBody.width()) 
					);

					/* 计算偏移位置*/
					this.$listBody.css(((cls.indexOf('dropdown') != -1)? 'top' : 'bottom'), this.$listHead.innerHeight());
				},
				close: function(){
					this.$list.removeClass("dropdown dropup left");
					this.$overlay.hide();
				},
				setDisabled: function(name, value){
					this.getItem(name) && this.getItem(name).setDisabled(value);
				},
				getItem: function(name){
					return this.items[name];
				},
				execItem: function(name, event){
					var item = this.getItem(name);
					if(!item || item.$el.attr('disabled')) return;
					if(item.method)
						item.method(event);
				}
			}));

_xbl_JSClassDefine_menuButton.prototype.ClassName='_xbl_JSClassDefine_menuButton';
_xbl_JSClassDefine_menuButton.prototype.__code__={v:{name:'_xbl_JSClassDefine_menuButton',key:'23ad76ce38f07e9138ff3513f05ce1c6',time:1528168399},m:'3f4ab465be75dfcf9b86b0bb3650146a'};
	var ids=[{id:'docCenter', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'splitter', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'docNodeTreePart', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'758ed501d0234eada14c2f7871902829', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'newDirMenu', name:'xforms:menu'}]},{id:'buttonBar2', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'trigger10', name:'xforms:trigger', children:[{id:'default19', name:'xforms:label'}]},{id:'trigger11', name:'xforms:trigger', children:[{id:'default20', name:'xforms:label'}]},{id:'dirMoreBtns', name:'/UI/system/components/menuButton.xbl.xml#menuButton'}]},{id:'docNodeTreeGrid', name:'xforms:grid'}]},{id:'docNodeListPart', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'buttonBar1', name:'/UI/system/components/buttonBar.xbl.xml#buttonBar', children:[{id:'trigger1', name:'xforms:trigger', children:[{id:'default1', name:'xforms:label'}]},{id:'editDocTrigger', name:'xforms:trigger', children:[{id:'default2', name:'xforms:label'}]},{id:'trigger2', name:'xforms:trigger', children:[{id:'default3', name:'xforms:label'}]},{id:'trigger3', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default4', name:'xforms:label'}]},{id:'trigger4', name:'/UI/system/components/trigger.xbl.xml#trigger', children:[{id:'default5', name:'xforms:label'}]},{id:'docMoreBtns', name:'/UI/system/components/menuButton.xbl.xml#menuButton'},{id:'bizDataFilterMenu1', name:'/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu'}]},{id:'div1', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'newDocMenu', name:'xforms:menu'}]},{id:'div2', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'editDocMenu', name:'xforms:menu'}]},{id:'docNodeListGrid', name:'xforms:grid'},{id:'pagination1', name:'/UI/system/components/pagination.xbl.xml#pagination'}]}]},{id:'uploadDirProgress', name:'/UI/system/components/dialog.xbl.xml#dialog'},{id:'downProgess', name:'/UI/system/components/dialog.xbl.xml#dialog'},{id:'filter-pattern-bizDataFilterMenu1', name:'/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern', children:[{id:'5d3dbb25b8eb47509f7ecb70fdc735f9', name:'/UI/system/components/menu.xbl.xml#menu', children:[{id:'GLOBAL_ID_N102603760', name:'xforms:menu'}]},{id:'GLOBAL_ID_1724624184', name:'xforms:dialog'}]},{id:'filter-dialog-bizDataFilterMenu1', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_857538961', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='23ad76ce38f07e9138ff3513f05ce1c6';
xforms.Core.fileName='form.js';	
xf._a(null,'trigger10');xf._a('trigger10','default19');xf._a(null,'trigger11');xf._a('trigger11','default20');xf._a(null,'docNodeTreeGrid');xf._a(null,'trigger1');xf._a('trigger1','default1');xf._a(null,'editDocTrigger');xf._a('editDocTrigger','default2');xf._a(null,'trigger2');xf._a('trigger2','default3');xf._a(null,'trigger3');xf._a('trigger3','default4');xf._a(null,'trigger4');xf._a('trigger4','default5');xf._a(null,'docNodeListGrid');function init() {	
var begin = new Date().getTime();	
xf._b("instance('docNodeTree')/sSize",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sSize')))));	
xf._b("instance('docNodeTree')/sCreateTime",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('docNodeTree')/sLastWriteTime",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sLastWriteTime')))));	
xf._b("instance('docNodeTree')/sDocLiveVersionID",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID')))));	
xf._b("instance('docNodeTree')/sFinishTime",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sFinishTime')))));	
xf._b("instance('docNodeTree')/sFlag",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('docNodeTree')/version",xf._g(xf._f('instance',xf._i("docNodeTree")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('docNodeList')/sSize",xf._g(xf._f('instance',xf._i("docNodeList")),xf._h(false, xf._k("child",xf._j('','sSize')))));	
xf._b("instance('docNodeList')/sCreateTime",xf._g(xf._f('instance',xf._i("docNodeList")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('docNodeList')/sLastWriteTime",xf._g(xf._f('instance',xf._i("docNodeList")),xf._h(false, xf._k("child",xf._j('','sLastWriteTime')))));	
xf._b("instance('docNodeList')/sDocLiveVersionID",xf._g(xf._f('instance',xf._i("docNodeList")),xf._h(false, xf._k("child",xf._j('','sDocLiveVersionID')))));	
xf._b("instance('docNodeList')/sFinishTime",xf._g(xf._f('instance',xf._i("docNodeList")),xf._h(false, xf._k("child",xf._j('','sFinishTime')))));	
xf._b("instance('docNodeList')/sFlag",xf._g(xf._f('instance',xf._i("docNodeList")),xf._h(false, xf._k("child",xf._j('','sFlag')))));	
xf._b("instance('docNodeList')/version",xf._g(xf._f('instance',xf._i("docNodeList")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('permissions')/newDir",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','newDir')))));	
xf._b("instance('permissions')/newDir != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','newDir')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/deleteDir",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','deleteDir')))));	
xf._b("instance('permissions')/deleteDir != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','deleteDir')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/editDir",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','editDir')))));	
xf._b("instance('permissions')/editDir != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','editDir')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/manageDir",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','manageDir')))));	
xf._b("instance('permissions')/manageDir != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','manageDir')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/downloadDir",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','downloadDir')))));	
xf._b("instance('permissions')/downloadDir != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','downloadDir')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/newDoc",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','newDoc')))));	
xf._b("instance('permissions')/newDoc != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','newDoc')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/editDoc",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','editDoc')))));	
xf._b("instance('permissions')/editDoc != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','editDoc')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/deleteDoc",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','deleteDoc')))));	
xf._b("instance('permissions')/deleteDoc != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','deleteDoc')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/manageDoc",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','manageDoc')))));	
xf._b("instance('permissions')/manageDoc != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','manageDoc')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/downloadDoc",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','downloadDoc')))));	
xf._b("instance('permissions')/downloadDoc != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','downloadDoc')))), '!=',xf._i("true")));	
xf._b("instance('permissions')/browseDoc",xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','browseDoc')))));	
xf._b("instance('permissions')/browseDoc != 'true'",xf._l(xf._g(xf._f('instance',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','browseDoc')))), '!=',xf._i("true")));	
xf._b("data('permissions')/newDir",xf._g(xf._f('data',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','newDir')))));	
xf._b("data('permissions')/editDir",xf._g(xf._f('data',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','editDir')))));	
xf._b("sDocName",xf._h(false, xf._k("child",xf._j('','sDocName'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('permissions')/newDoc",xf._g(xf._f('data',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','newDoc')))));	
xf._b("data('permissions')/editDoc",xf._g(xf._f('data',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','editDoc')))));	
xf._b("data('permissions')/downloadDoc",xf._g(xf._f('data',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','downloadDoc')))));	
xf._b("data('permissions')/browseDoc",xf._g(xf._f('data',xf._i("permissions")),xf._h(false, xf._k("child",xf._j('','browseDoc')))));	
xf._b("sEditorFID",xf._h(false, xf._k("child",xf._j('','sEditorFID'))));	
xf._b("sSize",xf._h(false, xf._k("child",xf._j('','sSize'))));	
xf._b("sCreateTime",xf._h(false, xf._k("child",xf._j('','sCreateTime'))));	
xf._b("sCreatorName",xf._h(false, xf._k("child",xf._j('','sCreatorName'))));	
xf._b("sCreatorDeptName",xf._h(false, xf._k("child",xf._j('','sCreatorDeptName'))));	
xf._b("sEditorName",xf._h(false, xf._k("child",xf._j('','sEditorName'))));	
xf._b("sLastWriterName",xf._h(false, xf._k("child",xf._j('','sLastWriterName'))));	
xf._b("sLastWriteTime",xf._h(false, xf._k("child",xf._j('','sLastWriteTime'))));	
xf._b("sParentID",xf._h(false, xf._k("child",xf._j('','sParentID'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_docCenterModel = new xforms.XFModel('docCenterModel',null);	
new xforms.XFInstance2('docNodeList','docCenterModel',null,null,null,'sParentID','docNodeTree',null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-7','docCenterModel',"instance('docNodeList')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-8','docCenterModel',"instance('docNodeList')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','docCenterModel',"instance('docNodeList')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','docCenterModel',"instance('docNodeList')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','docCenterModel',"instance('docNodeList')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-12','docCenterModel',"instance('docNodeList')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','docCenterModel',"instance('docNodeList')/version","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('newDirMenuItems','docCenterModel',null,'<rows><row id="createDirItem"><cell>新建文件夹</cell><cell>createDir</cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('newDirMenuItems','sLabel,sProgramID,sNewFilename');	
new xforms.XFInstance2('newDocMenuItems','docCenterModel',null,'<rows><row id="uploadDocItem"><cell>上传本地文件</cell><cell>uploadDoc</cell><cell></cell></row><row><cell>---------------------------------</cell><cell>-</cell><cell>-</cell></row><row id="wordDocumentItem"><cell>新建 Word 文档</cell><cell>Word.Application</cell><cell>新建 Microsoft Word 文档</cell></row><row id="excelSheetItem"><cell>新建 Excel 工作表</cell><cell>Excel.Application</cell><cell>新建 Microsoft Excel 工作表</cell></row><row id="PowerPointItem"><cell>新建 PowerPoint 演示文稿</cell><cell>PowerPoint.Application</cell><cell>新建 Microsoft PowerPoint 演示文稿</cell></row><row id="MSProjectProjectItem"><cell>新建 Project 项目</cell><cell>MSProject.Application</cell><cell>新建 Microsoft Project 项目</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('newDocMenuItems','sLabel,sProgramID,sNewFilename');	
new xforms.XFInstance2('editDocMenuItems','docCenterModel',null,'<rows><row id="editDocItem"><cell>编辑</cell><cell>OpenOffice</cell><cell></cell></row><row><cell>--------------------------</cell><cell>-</cell><cell>-</cell></row><row id="reuploadDocItem"><cell>重新上传文件</cell><cell>reuploadDoc</cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('editDocMenuItems','sLabel,sProgramID,sNewFilename');	
new xforms.XFInstance2('permissions','docCenterModel',null,'<rows><row id="permissionsRow"><cell></cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('permissions','newDir,deleteDir,editDir,manageDir,downloadDir,newDoc,editDoc,deleteDoc,manageDoc,downloadDoc,browseDoc');	
xf._c('xf-bind-14','docCenterModel',"instance('permissions')/newDir",null,"instance('permissions')/newDir != 'true'",null,null,null,null,null);	
xf._c('xf-bind-15','docCenterModel',"instance('permissions')/deleteDir",null,"instance('permissions')/deleteDir != 'true'",null,null,null,null,null);	
xf._c('xf-bind-16','docCenterModel',"instance('permissions')/editDir",null,"instance('permissions')/editDir != 'true'",null,null,null,null,null);	
xf._c('xf-bind-17','docCenterModel',"instance('permissions')/manageDir",null,"instance('permissions')/manageDir != 'true'",null,null,null,null,null);	
xf._c('xf-bind-18','docCenterModel',"instance('permissions')/downloadDir",null,"instance('permissions')/downloadDir != 'true'",null,null,null,null,null);	
xf._c('xf-bind-19','docCenterModel',"instance('permissions')/newDoc",null,"instance('permissions')/newDoc != 'true'",null,null,null,null,null);	
xf._c('xf-bind-20','docCenterModel',"instance('permissions')/editDoc",null,"instance('permissions')/editDoc != 'true'",null,null,null,null,null);	
xf._c('xf-bind-21','docCenterModel',"instance('permissions')/deleteDoc",null,"instance('permissions')/deleteDoc != 'true'",null,null,null,null,null);	
xf._c('xf-bind-22','docCenterModel',"instance('permissions')/manageDoc",null,"instance('permissions')/manageDoc != 'true'",null,null,null,null,null);	
xf._c('xf-bind-23','docCenterModel',"instance('permissions')/downloadDoc",null,"instance('permissions')/downloadDoc != 'true'",null,null,null,null,null);	
xf._c('xf-bind-24','docCenterModel',"instance('permissions')/browseDoc",null,"instance('permissions')/browseDoc != 'true'",null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docCenter.docCenterModelLoad(event)}));xf._p(justep('docCenterModel'),"onload",null,function(evt) { xforms.run(xf_action_action1,'docCenterModel', evt,false)});	
var xf_menu_newDirMenu = new xforms.XFMenu('newDirMenu','context');xf_menu_newDirMenu.menu.addContextZone('758ed501d0234eada14c2f7871902829');xforms.Event.attach(document.body, "click", function(){xf_menu_newDirMenu.hide()});xf_menu_newDirMenu.menu.setOpenMode('web');	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){newDir(event);}));xf._p(justep('newDirMenu'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'newDirMenu', evt,false)});	
var xf_trigger_trigger10=new xforms.XFTrigger('trigger10',xf._q("data('permissions')/newDir"),null,null,false,false,false,null,null,"icon-system-plus");	
var xf_action_action14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docCenter.trigger1Click(event)}));xf._p(justep('trigger10'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action14,'trigger10', evt,false)});	
var xf_trigger_trigger11=new xforms.XFTrigger('trigger11',xf._q("data('permissions')/editDir"),null,null,false,false,false,null,null,null);	
var xf_action_action15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docCenter.trigger3Click(event)}));xf._p(justep('trigger11'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action15,'trigger11', evt,false)});	
new xforms.XFGrid({id:'docNodeTreeGrid',instance:'docNodeTree',systemColumnsPro:'sParentID,sSequence,sSize,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sCreatorName,sCreatorDeptName,sCreateTime,sEditorFID,sEditorName,sEditorDeptName,sLastWriterFID,sLastWriterName,sLastWriterDeptName,sLastWriteTime,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',onInit:'onTreeInit',type:'tree',smartRender:null,delay:true,ids:'sDocName',headNames:'名称',widths:'*',types:'tree',hiddenColumns:'',aligns:'',serverSort:true,sorts:'str',fixColumnSize:null,nodeImgCallback:'showNodeImg',multiSelection:'',checkedRef:'',filters:'\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:'docCenter.docNodeTreeGridBeforeIndexChanged',afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:'func_1324073657',onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'sDocName','true');}});	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',xf._q("data('permissions')/newDoc"),null,null,false,false,false,null,null,"icon-system-plus");	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docCenter.trigger5Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trigger1', evt,false)});	
var xf_trigger_editDocTrigger=new xforms.XFTrigger('editDocTrigger',xf._q("data('permissions')/editDoc"),null,null,false,false,false,null,null,"icon-system-edit-alt");	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docCenter.editDocTriggerClick(event)}));xf._p(justep('editDocTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'editDocTrigger', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',xf._q("data('permissions')/downloadDoc"),null,null,false,false,false,null,null,"icon-system-download");	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){docCenter.trigger11Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trigger2', evt,false)});	
var xf_trigger_trigger3=new xforms.XFTrigger('trigger3',xf._q("data('permissions')/browseDoc"),null,null,false,false,false,"bizDataFilterMenu1","show","icon-system-search");	
var xf_trigger_trigger4=new xforms.XFTrigger('trigger4',null,null,null,false,false,false,"docNodeList","refresh",null);	
var xf_menu_newDocMenu = new xforms.XFMenu('newDocMenu','context');xf_menu_newDocMenu.menu.addContextZone('div1');xforms.Event.attach(document.body, "click", function(){xf_menu_newDocMenu.hide()});xf_menu_newDocMenu.menu.setOpenMode('web');	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){officeHandler(event);}));xf._p(justep('newDocMenu'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action8,'newDocMenu', evt,false)});	
var xf_menu_editDocMenu = new xforms.XFMenu('editDocMenu','context');xf_menu_editDocMenu.menu.addContextZone('div2');xforms.Event.attach(document.body, "click", function(){xf_menu_editDocMenu.hide()});xf_menu_editDocMenu.menu.setOpenMode('web');	
var xf_action_action9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){officeHandler(event);}));xf._p(justep('editDocMenu'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action9,'editDocMenu', evt,false)});	
new xforms.XFGrid({id:'docNodeListGrid',instance:'docNodeList',systemColumnsPro:'sSequence,sKind,sDocPath,sDocDisplayPath,sCreatorFID,sEditorDeptName,sLastWriterFID,sLastWriterDeptName,sFileID,sDescription,sDocLiveVersionID,sDocSerialNumber,sKeywords,sClassification,sFinishTime,sNameSpace,sFlag,version,sCacheName,sRevisionCacheName',onInit:'onTreeInit',type:'grid',smartRender:null,delay:false,ids:'sEditorFID,sDocName,sSize,sCreateTime,sCreatorName,sCreatorDeptName,sEditorName,sLastWriterName,sLastWriteTime,sParentID,space-column',headNames:'锁定,名称,大小(KB),创建时间,创建人,创建人部门,当前修改人,最后修改人,最后修改时间,sParentID,&nbsp;',widths:'35,300,80,120,100,150,100,80,120,*,*',types:'html,ro,html,dateTime,ro,ro,ro,ro,dateTime,ro,ro',hiddenColumns:'sParentID',aligns:'center,left,right,,left,left,left,left,left,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:'30',hdrRowH:'30',hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'browseDoc',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'sEditorFID','imageCellFun');this.grid.bindColReadonly(null,'sEditorFID','true');this.grid.bindColHTMLCallback(null,'sSize','transB2KB');this.grid.bindColReadonly(null,'sSize','true');this.grid.bindColReadonly(null,'sCreateTime','true');this.grid.bindColReadonly(null,'sLastWriteTime','true');}});	
var xf_menu_GLOBAL_ID_N102603760 = new xforms.XFMenu('GLOBAL_ID_N102603760','context');xf_menu_GLOBAL_ID_N102603760.menu.addContextZone('5d3dbb25b8eb47509f7ecb70fdc735f9');xforms.Event.attach(document.body, "click", function(){xf_menu_GLOBAL_ID_N102603760.hide()});xf_menu_GLOBAL_ID_N102603760.menu.setOpenMode('web');	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){									var menuItemId = event.getData().itemId;									if (menuItemId == "glglms") {										var dialog = xforms("GLOBAL_ID_1724624184");										if(dialog) {											event.getData().menuitem.dhtmlxMenu.$needLoad=true;											dialog.open();																					}									} else if (menuItemId == "qkdqgl") {										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.clear();										data.filters.deleteFilter(data.advanceFilter.filterName);										data.refreshData();									} else if (menuItemId == "zdycx"){										var dlgId = event.getData().menuitem.dhtmlxMenu.filterDlgId;										var dataId = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(dataId) == "object") {											dataId = dataId.id;										}										if(dlgId) justep.xbl(dlgId).show(dataId);									} else {										var advanceFilter = generateFilterText(event.getData().menuitem.filterExpr);										var data = event.getData().menuitem.dhtmlxMenu.filterData;										if (typeof(data) == "string") {											data = justep.xbl(data);										}										data.advanceFilter.setFilter(advanceFilter, true, true);									}}));xf._p(justep('GLOBAL_ID_N102603760'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_9,'GLOBAL_ID_N102603760', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1724624184',"过滤模式",'modal',true,false,true,true,false,null,'550','440',null,null,null,null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_691005286');									if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {										iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";									}justep.Request.callURL("/system/components/bizDataFilterPattern/bizDataFilterPattern.w?process=/SA/filterPattern/filterPatternProcess&activity=mainActivity", "GLOBAL_ID_691005286", "");}));xf._p(justep('GLOBAL_ID_1724624184'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_10,'GLOBAL_ID_1724624184', evt,false)});	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var iframe = document.getElementById('GLOBAL_ID_691005286');									if (iframe) {										var data = iframe.currData;										data.advanceFilter.setFilter(iframe.advanceFilter);									}}));xf._p(justep('GLOBAL_ID_1724624184'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_11,'GLOBAL_ID_1724624184', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_857538961',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_972205923');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_972205923", "");}));xf._p(justep('GLOBAL_ID_857538961'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_12,'GLOBAL_ID_857538961', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var docNodeTree_part_loaded = false;	
function load_docNodeTree_part(callback){if (docNodeTree_part_loaded) return;docNodeTree_part_loaded = true;	
new xforms.XFInstance2('docNodeTree','docCenterModel',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','docCenterModel',"instance('docNodeTree')/sSize","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-1','docCenterModel',"instance('docNodeTree')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-2','docCenterModel',"instance('docNodeTree')/sLastWriteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','docCenterModel',"instance('docNodeTree')/sDocLiveVersionID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','docCenterModel',"instance('docNodeTree')/sFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','docCenterModel',"instance('docNodeTree')/sFlag","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','docCenterModel',"instance('docNodeTree')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var docNodeTree_part_init_loaded = false;	
function load_docNodeTree_part_init(){if (docNodeTree_part_init_loaded) return;docNodeTree_part_init_loaded = true;	
if(xforms.ready)justep('docCenterModel').xformsObject.construct_part();}	
var __actions__ = {	
};	
