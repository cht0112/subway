
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/splitter.xbl.xml#splitter"] = _xbl_JSClassDefine_splitter;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
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

	var ids=[{id:'d94ff526d7004ad3bc6834cb998c18d6', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'HSplitter1', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'gridObjV', name:'xforms:grid'},{id:'gridObj', name:'xforms:grid'},{id:'grid4', name:'xforms:grid'},{id:'grdMain', name:'xforms:grid'}]},{id:'tESTCASEVER', name:'xforms:input'},{id:'tESTCASEID', name:'xforms:input'},{id:'tESTCASENAME', name:'xforms:input'},{id:'tESTCASEPRIOR', name:'xforms:input'},{id:'tESTCASEDESC', name:'xforms:input'},{id:'grid1', name:'xforms:grid'},{id:'input1', name:'xforms:input'},{id:'tabPanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'grid2', name:'xforms:grid'},{id:'grid3', name:'xforms:grid'}]},{id:'sUBTESTCASETIME', name:'xforms:input'},{id:'sUBTESTCASEPRIOR', name:'xforms:input'},{id:'sUBTESTCASEID', name:'xforms:input'},{id:'sUBTESTCASENAME', name:'xforms:input'},{id:'sUBTESTCASEORDER', name:'xforms:input'},{id:'tIMEUNITID', name:'xforms:input'}]},{id:'radio1', name:'xforms:select1', children:[{id:'selectItem1', name:'xforms:item', children:[{id:'default24', name:'xforms:label'},{id:'default25', name:'xforms:value'}]},{id:'selectItem2', name:'xforms:item', children:[{id:'default26', name:'xforms:label'},{id:'default27', name:'xforms:value'}]},{id:'selectItem3', name:'xforms:item', children:[{id:'default35', name:'xforms:label'},{id:'default36', name:'xforms:value'}]},{id:'selectItem4', name:'xforms:item', children:[{id:'default37', name:'xforms:label'},{id:'default38', name:'xforms:value'}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'gridObjV');xf._a(null,'gridObj');xf._a(null,'grid4');xf._a(null,'grdMain');xf._a(null,'tESTCASEVER');xf._a(null,'tESTCASEID');xf._a(null,'tESTCASENAME');xf._a(null,'tESTCASEPRIOR');xf._a(null,'tESTCASEDESC');xf._a(null,'grid1');xf._a(null,'input1');xf._a(null,'grid2');xf._a(null,'grid3');xf._a(null,'sUBTESTCASETIME');xf._a(null,'sUBTESTCASEPRIOR');xf._a(null,'sUBTESTCASEID');xf._a(null,'sUBTESTCASENAME');xf._a(null,'sUBTESTCASEORDER');xf._a(null,'tIMEUNITID');xf._a(null,'radio1');xf._a('radio1','selectItem1');xf._a('selectItem1','default24');xf._a('radio1','selectItem2');xf._a('selectItem2','default26');xf._a('radio1','selectItem3');xf._a('selectItem3','default35');xf._a('radio1','selectItem4');xf._a('selectItem4','default37');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')/sHIJIAN",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','sHIJIAN')))));	
xf._b("instance('dataMain')/cASEVERSION",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','cASEVERSION')))));	
xf._b("instance('dataMain')/tASKID",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','tASKID')))));	
xf._b("instance('caseData')/tESTCASEVER",xf._g(xf._f('instance',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('caseData')/mAKEDATETIME",xf._g(xf._f('instance',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','mAKEDATETIME')))));	
xf._b("instance('caseData')/dECTIONBASEDONID",xf._g(xf._f('instance',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONID')))));	
xf._b("instance('caseData')/dboi",xf._g(xf._f('instance',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','dboi')))));	
xf._b("instance('caseData')/vALIDDATETIME",xf._g(xf._f('instance',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','vALIDDATETIME')))));	
xf._b("instance('caseData')/vALIDSTATE",xf._g(xf._f('instance',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','vALIDSTATE')))));	
xf._b("instance('caseData')/version",xf._g(xf._f('instance',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('caseDetectionInfo')/tESTCASEVER",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('caseDetectionInfo')/aPPLYFOROBJECT",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','aPPLYFOROBJECT')))));	
xf._b("instance('caseDetectionInfo')/aPPLYFORDEVICETYPE",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','aPPLYFORDEVICETYPE')))));	
xf._b("instance('caseDetectionInfo')/aPPLYFORRANGE",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','aPPLYFORRANGE')))));	
xf._b("instance('caseDetectionInfo')/aPPLYFORSUBRANGE",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','aPPLYFORSUBRANGE')))));	
xf._b("instance('caseDetectionInfo')/dETECTIONOBJECTTYPE",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTTYPE')))));	
xf._b("instance('caseDetectionInfo')/dEVICETYPE",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("instance('caseDetectionInfo')/dot",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','dot')))));	
xf._b("instance('caseDetectionInfo')/dETECTIONRANGETYPE",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGETYPE')))));	
xf._b("instance('caseDetectionInfo')/dETECTIONRANGEID",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','dETECTIONRANGEID')))));	
xf._b("instance('caseDetectionInfo')/drt",xf._g(xf._f('instance',xf._i("caseDetectionInfo")),xf._h(false, xf._k("child",xf._j('','drt')))));	
xf._b("instance('subCaseData')/tESTCASEVER",xf._g(xf._f('instance',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('subCaseData')/sUBTESTCASEPRIOR",xf._g(xf._f('instance',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEPRIOR')))));	
xf._b("instance('subCaseData')/sUBTESTCASEORDER",xf._g(xf._f('instance',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEORDER')))));	
xf._b("instance('subCaseData')/sUBTESTCASETIME",xf._g(xf._f('instance',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASETIME')))));	
xf._b("instance('subCaseData')/tIMEUNITID",xf._g(xf._f('instance',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','tIMEUNITID')))));	
xf._b("instance('subCaseData')/tuc",xf._g(xf._f('instance',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','tuc')))));	
xf._b("instance('subCaseStepData')/tESTCASEVER",xf._g(xf._f('instance',xf._i("subCaseStepData")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('subCaseStepData')/sUBTESTCASESTEPID",xf._g(xf._f('instance',xf._i("subCaseStepData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID')))));	
xf._b("instance('subCaseStepData')/sUBTESTCASESTEPPRIOR",xf._g(xf._f('instance',xf._i("subCaseStepData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPPRIOR')))));	
xf._b("instance('stepPrepareData')/tESTCASEVER",xf._g(xf._f('instance',xf._i("stepPrepareData")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("instance('stepPrepareData')/sUBTESTCASESTEPID",xf._g(xf._f('instance',xf._i("stepPrepareData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID')))));	
xf._b("instance('stepPrepareData')/sUBTESTCASESTEPSENDFLAG",xf._g(xf._f('instance',xf._i("stepPrepareData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPSENDFLAG')))));	
xf._b("instance('stepPrepareData')/sUBTESTCASESTEPDATANUMBER",xf._g(xf._f('instance',xf._i("stepPrepareData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPDATANUMBER')))));	
xf._b("instance('caseTree')/sHIJIAN",xf._g(xf._f('instance',xf._i("caseTree")),xf._h(false, xf._k("child",xf._j('','sHIJIAN')))));	
xf._b("instance('caseTree')/cASEVERSION",xf._g(xf._f('instance',xf._i("caseTree")),xf._h(false, xf._k("child",xf._j('','cASEVERSION')))));	
xf._b("instance('caseTree')/tREESN",xf._g(xf._f('instance',xf._i("caseTree")),xf._h(false, xf._k("child",xf._j('','tREESN')))));	
xf._b("instance('caseTreeV')/sHIJIAN",xf._g(xf._f('instance',xf._i("caseTreeV")),xf._h(false, xf._k("child",xf._j('','sHIJIAN')))));	
xf._b("instance('caseTreeV')/cASEVERSION",xf._g(xf._f('instance',xf._i("caseTreeV")),xf._h(false, xf._k("child",xf._j('','cASEVERSION')))));	
xf._b("instance('caseTreeV')/tREESN",xf._g(xf._f('instance',xf._i("caseTreeV")),xf._h(false, xf._k("child",xf._j('','tREESN')))));	
xf._b("instance('caseTreeObj')/sHIJIAN",xf._g(xf._f('instance',xf._i("caseTreeObj")),xf._h(false, xf._k("child",xf._j('','sHIJIAN')))));	
xf._b("instance('caseTreeObj')/cASEVERSION",xf._g(xf._f('instance',xf._i("caseTreeObj")),xf._h(false, xf._k("child",xf._j('','cASEVERSION')))));	
xf._b("instance('caseTreeObj')/tREESN",xf._g(xf._f('instance',xf._i("caseTreeObj")),xf._h(false, xf._k("child",xf._j('','tREESN')))));	
xf._b("instance('caseTreeObjV')/sHIJIAN",xf._g(xf._f('instance',xf._i("caseTreeObjV")),xf._h(false, xf._k("child",xf._j('','sHIJIAN')))));	
xf._b("instance('caseTreeObjV')/cASEVERSION",xf._g(xf._f('instance',xf._i("caseTreeObjV")),xf._h(false, xf._k("child",xf._j('','cASEVERSION')))));	
xf._b("instance('caseTreeObjV')/tREESN",xf._g(xf._f('instance',xf._i("caseTreeObjV")),xf._h(false, xf._k("child",xf._j('','tREESN')))));	
xf._b("tESTCASENAME",xf._h(false, xf._k("child",xf._j('','tESTCASENAME'))));	
xf._b("data('caseData')/tESTCASEVER",xf._g(xf._f('data',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','tESTCASEVER')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('caseData')/tESTCASEID",xf._g(xf._f('data',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','tESTCASEID')))));	
xf._b("data('caseData')/tESTCASENAME",xf._g(xf._f('data',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','tESTCASENAME')))));	
xf._b("data('caseData')/tESTCASEPRIOR",xf._g(xf._f('data',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','tESTCASEPRIOR')))));	
xf._b("data('caseData')/tESTCASEDESC",xf._g(xf._f('data',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','tESTCASEDESC')))));	
xf._b("dETECTIONOBJECTCNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONOBJECTCNAME'))));	
xf._b("dEVICETYPECNAME",xf._h(false, xf._k("child",xf._j('','dEVICETYPECNAME'))));	
xf._b("dETECTIONRANGECNAME",xf._h(false, xf._k("child",xf._j('','dETECTIONRANGECNAME'))));	
xf._b("rANGEIDCNAME",xf._h(false, xf._k("child",xf._j('','rANGEIDCNAME'))));	
xf._b("data('caseData')/dECTIONBASEDONNAME",xf._g(xf._f('data',xf._i("caseData")),xf._h(false, xf._k("child",xf._j('','dECTIONBASEDONNAME')))));	
xf._b("sUBTESTCASEID",xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID'))));	
xf._b("sUBTESTCASESTEPID",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPID'))));	
xf._b("sUBTESTCASESTEPDESC",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPDESC'))));	
xf._b("sUBTESTCASESTEPPRIOR",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPPRIOR'))));	
xf._b("sUBTESTCASESTEPSENDFLAG",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPSENDFLAG'))));	
xf._b("sUBTESTCASESTEPDATANUMBER",xf._h(false, xf._k("child",xf._j('','sUBTESTCASESTEPDATANUMBER'))));	
xf._b("data('subCaseData')/sUBTESTCASETIME",xf._g(xf._f('data',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASETIME')))));	
xf._b("data('subCaseData')/sUBTESTCASEPRIOR",xf._g(xf._f('data',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEPRIOR')))));	
xf._b("data('subCaseData')/sUBTESTCASEID",xf._g(xf._f('data',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEID')))));	
xf._b("data('subCaseData')/sUBTESTCASENAME",xf._g(xf._f('data',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASENAME')))));	
xf._b("data('subCaseData')/sUBTESTCASEORDER",xf._g(xf._f('data',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','sUBTESTCASEORDER')))));	
xf._b("data('subCaseData')/tIMEUNITCNAME",xf._g(xf._f('data',xf._i("subCaseData")),xf._h(false, xf._k("child",xf._j('','tIMEUNITCNAME')))));	
xf._b("data('tempData')/name",xf._g(xf._f('data',xf._i("tempData")),xf._h(false, xf._k("child",xf._j('','name')))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('tree', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('dataMain','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','model1',"instance('dataMain')/sHIJIAN","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('dataMain')/cASEVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('dataMain')/tASKID","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
new xforms.XFInstance2('caseTree','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('caseTree',null);	
xf._c('xf-bind-34','model1',"instance('caseTree')/sHIJIAN","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-35','model1',"instance('caseTree')/cASEVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','model1',"instance('caseTree')/tREESN","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('tempData','model1',null,'<rows id="default31"><row id="default32"><cell id="default33"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('tempData','name');	
new xforms.XFInstance2('caseTreeV','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('caseTreeV',null);	
xf._c('xf-bind-37','model1',"instance('caseTreeV')/sHIJIAN","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('caseTreeV')/cASEVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('caseTreeV')/tREESN","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('caseTreeObj','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('caseTreeObj',null);	
xf._c('xf-bind-40','model1',"instance('caseTreeObj')/sHIJIAN","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('caseTreeObj')/cASEVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('caseTreeObj')/tREESN","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('caseTreeObjV','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('caseTreeObjV',null);	
xf._c('xf-bind-43','model1',"instance('caseTreeObjV')/sHIJIAN","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','model1',"instance('caseTreeObjV')/cASEVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','model1',"instance('caseTreeObjV')/tREESN","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var caseData_part_loaded = false;	
function load_caseData_part(callback){if (caseData_part_loaded) return;caseData_part_loaded = true;	
new xforms.XFInstance2('caseData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('caseData',null);	
xf._c('xf-bind-3','model1',"instance('caseData')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('caseData')/mAKEDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('caseData')/dECTIONBASEDONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('caseData')/dboi","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('caseData')/vALIDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('caseData')/vALIDSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('caseData')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var caseData_part_init_loaded = false;	
function load_caseData_part_init(){if (caseData_part_init_loaded) return;caseData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var caseDetectionInfo_part_loaded = false;	
function load_caseDetectionInfo_part(callback){if (caseDetectionInfo_part_loaded) return;caseDetectionInfo_part_loaded = true;	
new xforms.XFInstance2('caseDetectionInfo','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('caseDetectionInfo',null);	
xf._c('xf-bind-10','model1',"instance('caseDetectionInfo')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('caseDetectionInfo')/aPPLYFOROBJECT","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('caseDetectionInfo')/aPPLYFORDEVICETYPE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('caseDetectionInfo')/aPPLYFORRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('caseDetectionInfo')/aPPLYFORSUBRANGE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','model1',"instance('caseDetectionInfo')/dETECTIONOBJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('caseDetectionInfo')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('caseDetectionInfo')/dot","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('caseDetectionInfo')/dETECTIONRANGETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('caseDetectionInfo')/dETECTIONRANGEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('caseDetectionInfo')/drt","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var caseDetectionInfo_part_init_loaded = false;	
function load_caseDetectionInfo_part_init(){if (caseDetectionInfo_part_init_loaded) return;caseDetectionInfo_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var subCaseData_part_loaded = false;	
function load_subCaseData_part(callback){if (subCaseData_part_loaded) return;subCaseData_part_loaded = true;	
new xforms.XFInstance2('subCaseData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('subCaseData',null);	
xf._c('xf-bind-21','model1',"instance('subCaseData')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('subCaseData')/sUBTESTCASEPRIOR","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('subCaseData')/sUBTESTCASEORDER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','model1',"instance('subCaseData')/sUBTESTCASETIME","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-25','model1',"instance('subCaseData')/tIMEUNITID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-26','model1',"instance('subCaseData')/tuc","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var subCaseData_part_init_loaded = false;	
function load_subCaseData_part_init(){if (subCaseData_part_init_loaded) return;subCaseData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var subCaseStepData_part_loaded = false;	
function load_subCaseStepData_part(callback){if (subCaseStepData_part_loaded) return;subCaseStepData_part_loaded = true;	
new xforms.XFInstance2('subCaseStepData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('subCaseStepData',null);	
xf._c('xf-bind-27','model1',"instance('subCaseStepData')/tESTCASEVER","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-28','model1',"instance('subCaseStepData')/sUBTESTCASESTEPID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','model1',"instance('subCaseStepData')/sUBTESTCASESTEPPRIOR","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var subCaseStepData_part_init_loaded = false;	
function load_subCaseStepData_part_init(){if (subCaseStepData_part_init_loaded) return;subCaseStepData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var stepPrepareData_part_loaded = false;	
function load_stepPrepareData_part(callback){if (stepPrepareData_part_loaded) return;stepPrepareData_part_loaded = true;	
new xforms.XFInstance2('stepPrepareData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('stepPrepareData',null);	
xf._c('xf-bind-30','model1',"instance('stepPrepareData')/tESTCASEVER","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','model1',"instance('stepPrepareData')/sUBTESTCASESTEPID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-32','model1',"instance('stepPrepareData')/sUBTESTCASESTEPSENDFLAG","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','model1',"instance('stepPrepareData')/sUBTESTCASESTEPDATANUMBER","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var stepPrepareData_part_init_loaded = false;	
function load_stepPrepareData_part_init(){if (stepPrepareData_part_init_loaded) return;stepPrepareData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
new xforms.XFGrid({id:'gridObjV',instance:'caseTreeObjV',systemColumnsPro:'fID,fPARENTID,sHIJIAN,sTARTTIME,eNDTIME,qZRW,oPERATORNAME,rOOMNAME,tOOLNAME,cASEID,cASEVERSION,tREESN',onInit:null,type:'tree',smartRender:20,delay:false,ids:'tESTCASENAME',headNames:'用例信息',widths:'178',types:'tree',hiddenColumns:'',aligns:'',serverSort:true,sorts:'na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0',sysColumns:'',treeColumnReadonly:false,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:'mainActivity.grdMainRowClick',onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
new xforms.XFGrid({id:'gridObj',instance:'caseTreeObj',systemColumnsPro:'fID,fPARENTID,sHIJIAN,sTARTTIME,eNDTIME,qZRW,oPERATORNAME,rOOMNAME,tOOLNAME,cASEID,cASEVERSION,tREESN',onInit:null,type:'tree',smartRender:20,delay:false,ids:'tESTCASENAME',headNames:'用例信息',widths:'178',types:'tree',hiddenColumns:'',aligns:'',serverSort:true,sorts:'na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0',sysColumns:'',treeColumnReadonly:false,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:'mainActivity.grdMainRowClick',onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
new xforms.XFGrid({id:'grid4',instance:'caseTreeV',systemColumnsPro:'fID,fPARENTID,sHIJIAN,sTARTTIME,eNDTIME,qZRW,oPERATORNAME,rOOMNAME,tOOLNAME,cASEID,cASEVERSION,tREESN',onInit:null,type:'tree',smartRender:null,delay:false,ids:'tESTCASENAME',headNames:'测试用例名称',widths:'178',types:'tree',hiddenColumns:'',aligns:'',serverSort:true,sorts:'na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0',sysColumns:'',treeColumnReadonly:false,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:'mainActivity.grdMainRowClick',onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
new xforms.XFGrid({id:'grdMain',instance:'caseTree',systemColumnsPro:'fID,fPARENTID,sHIJIAN,sTARTTIME,eNDTIME,qZRW,oPERATORNAME,rOOMNAME,tOOLNAME,cASEID,cASEVERSION,tREESN',onInit:null,type:'tree',smartRender:null,delay:false,ids:'tESTCASENAME',headNames:'测试用例名称',widths:'178',types:'tree',hiddenColumns:'',aligns:'',serverSort:true,sorts:'na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0',sysColumns:'',treeColumnReadonly:false,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:'mainActivity.grdMainRowClick',onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
xforms.load_parts('vDetail');	
xforms.load_parts('view2');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
xf._d('tESTCASEVER','text',xf._q("data('caseData')/tESTCASEVER"),null,null,null,null,false,true);	
xf._d('tESTCASEID','text',xf._q("data('caseData')/tESTCASEID"),null,null,null,null,false,true);	
xf._d('tESTCASENAME','text',xf._q("data('caseData')/tESTCASENAME"),null,null,null,null,false,true);	
xf._d('tESTCASEPRIOR','text',xf._q("data('caseData')/tESTCASEPRIOR"),null,null,null,null,false,true);	
xf._d('tESTCASEDESC','text',xf._q("data('caseData')/tESTCASEDESC"),null,null,null,null,false,true);	
new xforms.XFGrid({id:'grid1',instance:'caseDetectionInfo',systemColumnsPro:'tESTCASEVER,tESTCASEID,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,aPPLYFORSUBRANGE,dtc,dETECTIONOBJECTTYPE,dEVICETYPE,dEVICETYPEENAME,dot,dETECTIONOBJECTENAME,drc,dETECTIONRANGETYPE,dETECTIONRANGEID,rANGEIDENAME,drt,dETECTIONRANGEENAME',onInit:null,type:'grid',smartRender:20,delay:false,ids:'dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,rANGEIDCNAME',headNames:'应用检测对象类型,应用检测对象,应用检测方面类型,应用检测方面',widths:'124,125,129,114',types:'ed,ed,ed,ed',hiddenColumns:'',aligns:',,,',serverSort:true,sorts:'na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
xf._d('input1','text',xf._q("data('caseData')/dECTIONBASEDONNAME"),null,null,null,null,false,false);	
xforms.load_parts('subcaseView');	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
function load_subcaseView(){if (justep("subcaseView").getAttribute('loaded') && justep("subcaseView").getAttribute('loaded') == 'true') return;justep("subcaseView").setAttribute('loaded', 'true');	
if(typeof(load_subcaseView_html) == 'function')load_subcaseView_html();	
new xforms.XFGrid({id:'grid2',instance:'subCaseStepData',systemColumnsPro:'tESTCASEVER,tESTCASEID',onInit:null,type:'grid',smartRender:20,delay:false,ids:'sUBTESTCASEID,sUBTESTCASESTEPID,sUBTESTCASESTEPDESC,sUBTESTCASESTEPPRIOR',headNames:'测试子用例ID,测试子用例步骤ID,测试子用例步骤描述,测试子用例步骤级别',widths:'126,152,134,177',types:'ed,ed,ed,ed',hiddenColumns:'',aligns:',,,',serverSort:true,sorts:'na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
new xforms.XFGrid({id:'grid3',instance:'stepPrepareData',systemColumnsPro:'tESTCASEVER,tESTCASEID,sUBTESTCASEID,sUBTESTCASESTEPID',onInit:null,type:'grid',smartRender:20,delay:false,ids:'sUBTESTCASESTEPSENDFLAG,sUBTESTCASESTEPDATANUMBER',headNames:'测试子用例数据发送方式,测试子用例数据数量',widths:'181,203',types:'ed,ed',hiddenColumns:'',aligns:',',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
xforms.load_parts('view1');	
}	
function load_subcaseView_xblinit(){if (justep("subcaseView").getAttribute('xblloaded') && justep("subcaseView").getAttribute('xblloaded') == 'true') return;justep("subcaseView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xf._d('sUBTESTCASETIME','text',xf._q("data('subCaseData')/sUBTESTCASETIME"),null,null,null,null,false,false);	
xf._d('sUBTESTCASEPRIOR','text',xf._q("data('subCaseData')/sUBTESTCASEPRIOR"),null,null,null,null,false,false);	
xf._d('sUBTESTCASEID','text',xf._q("data('subCaseData')/sUBTESTCASEID"),null,null,null,null,false,false);	
xf._d('sUBTESTCASENAME','text',xf._q("data('subCaseData')/sUBTESTCASENAME"),null,null,null,null,false,false);	
xf._d('sUBTESTCASEORDER','text',xf._q("data('subCaseData')/sUBTESTCASEORDER"),null,null,null,null,false,false);	
xf._d('tIMEUNITID','text',xf._q("data('subCaseData')/tIMEUNITCNAME"),null,null,null,null,false,false);	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
var xf_select1_radio1=new xforms.XFSelect('radio1',false,true,xf._q("data('tempData')/name"),true,false,false,'',0);	
var xf_item_selectItem1=new xforms.XFItem('selectItem1',null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem1Select(event)}));xf._p(justep('selectItem1'),"xforms-select",null,function(evt) { xforms.run(xf_action_action3,'selectItem1', evt,false)});	
var xf_item_selectItem2=new xforms.XFItem('selectItem2',null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem2Select(event)}));xf._p(justep('selectItem2'),"xforms-select",null,function(evt) { xforms.run(xf_action_action2,'selectItem2', evt,false)});	
var xf_item_selectItem3=new xforms.XFItem('selectItem3',null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem3Select(event)}));xf._p(justep('selectItem3'),"xforms-select",null,function(evt) { xforms.run(xf_action_action4,'selectItem3', evt,false)});	
var xf_item_selectItem4=new xforms.XFItem('selectItem4',null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.selectItem4Select(event)}));xf._p(justep('selectItem4'),"xforms-select",null,function(evt) { xforms.run(xf_action_action5,'selectItem4', evt,false)});	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		