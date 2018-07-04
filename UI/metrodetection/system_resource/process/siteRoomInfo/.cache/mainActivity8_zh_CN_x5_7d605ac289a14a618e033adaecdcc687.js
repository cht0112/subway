
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/blob.xbl.xml#image"] = _xbl_JSClassDefine_image;
justep.XBLObject._classes["/UI/system/components/blob.xbl.xml#blob"] = _xbl_JSClassDefine_blob;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
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
					var tempImage = new Image();  
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
					};
					tempImage.onerror = function() {
						img.attr('src',src);
						tempImage = null;
					};
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
_xbl_JSClassDefine_windowReceiver.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				this.domNode._xblObject.initXBL();
			},
			"initXBL2" : function() {
				this.domNode._xblObject.initXBL2();
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

	var ids=[{id:'ee1220e094d04bd1ab9ab1f440930e04', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'blobImage1', name:'/UI/system/components/blob.xbl.xml#image', children:[{id:'blob-blobImage1', name:'/UI/system/components/blob.xbl.xml#blob', children:[{id:'dlg-blob-blobImage1', name:'/UI/system/components/dialog.xbl.xml#dialog', children:[{id:'729d6b6213cb48419e1e997412ee052c', name:'xforms:trigger', children:[{id:'15d3141b5dc54006901de4348cd6a957', name:'xforms:label'}]},{id:'1797085b3c9644e59186b12b17fc713d', name:'xforms:trigger', children:[{id:'28e0ffc87c6746799f996160ea5e7459', name:'xforms:label'}]}]}]}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'729d6b6213cb48419e1e997412ee052c');xf._a('729d6b6213cb48419e1e997412ee052c','15d3141b5dc54006901de4348cd6a957');xf._a(null,'1797085b3c9644e59186b12b17fc713d');xf._a('1797085b3c9644e59186b12b17fc713d','28e0ffc87c6746799f996160ea5e7459');function init() {	
var begin = new Date().getTime();	
xf._b("instance('bizData1')/rOOMTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','rOOMTYPE')))));	
xf._b("instance('bizData1')/MANUFACTURE_ID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','MANUFACTURE_ID')))));	
xf._b("instance('bizData1')/IS_DELEGATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','IS_DELEGATE')))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var bizData1_part_loaded = false;	
function load_bizData1_part(callback){if (bizData1_part_loaded) return;bizData1_part_loaded = true;	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData1',null);	
xf._c('xf-bind-0','model1',"instance('bizData1')/rOOMTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('bizData1')/MANUFACTURE_ID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('bizData1')/IS_DELEGATE","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var bizData1_part_init_loaded = false;	
function load_bizData1_part_init(){if (bizData1_part_init_loaded) return;bizData1_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
var xf_trigger_729d6b6213cb48419e1e997412ee052c=new xforms.XFTrigger('729d6b6213cb48419e1e997412ee052c',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.xbl('blob-blobImage1').dialogCancel();}));xf._p(justep('729d6b6213cb48419e1e997412ee052c'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_0,'729d6b6213cb48419e1e997412ee052c', evt,false)});	
var xf_trigger_1797085b3c9644e59186b12b17fc713d=new xforms.XFTrigger('1797085b3c9644e59186b12b17fc713d',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.xbl('blob-blobImage1').dialogOk();}));xf._p(justep('1797085b3c9644e59186b12b17fc713d'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'1797085b3c9644e59186b12b17fc713d', evt,false)});	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
