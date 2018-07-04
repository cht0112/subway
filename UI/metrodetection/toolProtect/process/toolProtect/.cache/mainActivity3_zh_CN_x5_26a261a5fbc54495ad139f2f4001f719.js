
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/splitter.xbl.xml#splitter"] = _xbl_JSClassDefine_splitter;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

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
				}	var splitter = this.handlerEl[0];
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

	var ids=[{id:'22fb35ae69f341569bc54e900bbc5c2c', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'HSplitter1', name:'/UI/system/components/splitter.xbl.xml#splitter', children:[{id:'grid1', name:'xforms:grid'},{id:'grid2', name:'xforms:grid'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'grid1');xf._a(null,'grid2');function init() {	
var begin = new Date().getTime();	
xf._b("instance('laboratoryData')",xf._f('instance',xf._i("laboratoryData")));	
xf._b("true()",xf._f('true'));	
xf._b("instance('laboratoryData')/tOOLTYPEID",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','tOOLTYPEID')))));	
xf._b("instance('laboratoryData')/uSESTATECODE",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','uSESTATECODE')))));	
xf._b("instance('laboratoryData')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('laboratoryData')/tOOLRESOURCE",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','tOOLRESOURCE')))));	
xf._b("instance('laboratoryData')/iNDATE",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','iNDATE')))));	
xf._b("instance('laboratoryData')/iNPRICE",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','iNPRICE')))));	
xf._b("instance('laboratoryData')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("instance('laboratoryData')/rECIVESTATE",xf._g(xf._f('instance',xf._i("laboratoryData")),xf._h(false, xf._k("child",xf._j('','rECIVESTATE')))));	
xf._b("instance('proData')",xf._f('instance',xf._i("proData")));	
xf._b("instance('proData')/TSTART",xf._g(xf._f('instance',xf._i("proData")),xf._h(false, xf._k("child",xf._j('','TSTART')))));	
xf._b("instance('proData')/TEND",xf._g(xf._f('instance',xf._i("proData")),xf._h(false, xf._k("child",xf._j('','TEND')))));	
xf._b("instance('proData')/ROOMID",xf._g(xf._f('instance',xf._i("proData")),xf._h(false, xf._k("child",xf._j('','ROOMID')))));	
xf._b("instance('proData')/TOOLNO",xf._g(xf._f('instance',xf._i("proData")),xf._h(false, xf._k("child",xf._j('','TOOLNO')))));	
xf._b("instance('proData')/LINEID",xf._g(xf._f('instance',xf._i("proData")),xf._h(false, xf._k("child",xf._j('','LINEID')))));	
xf._b("tOOLCNAME",xf._h(false, xf._k("child",xf._j('','tOOLCNAME'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("TNAME",xf._h(false, xf._k("child",xf._j('','TNAME'))));	
xf._b("TPERSONNAME",xf._h(false, xf._k("child",xf._j('','TPERSONNAME'))));	
xf._b("TSTART",xf._h(false, xf._k("child",xf._j('','TSTART'))));	
xf._b("TEND",xf._h(false, xf._k("child",xf._j('','TEND'))));	
xf._b("TEXECUTE",xf._h(false, xf._k("child",xf._j('','TEXECUTE'))));	
xf._b("TCHECK",xf._h(false, xf._k("child",xf._j('','TCHECK'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('tree', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('laboratoryData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-0','model1',"instance('laboratoryData')",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('laboratoryData')/tOOLTYPEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('laboratoryData')/uSESTATECODE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('laboratoryData')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('laboratoryData')/tOOLRESOURCE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('laboratoryData')/iNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('laboratoryData')/iNPRICE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('laboratoryData')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('laboratoryData')/rECIVESTATE","xsd:integer",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity3.model1Load(event)}));xf._p(justep('model1'),"onload",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
new xforms.XFGrid({id:'grid1',instance:'laboratoryData',systemColumnsPro:'tOOLENAME,tOOLTYPEID,tOOLMODEL,tOOLSTANDARDS,tOOLID,uSESTATECODE,tOOLUNIT,mANUFACTUREID,tOOLRESOURCE,iNDATE,iNPRICE,sHAREDFLAG,mEMO,aSSETSORTCODE,rECIVESTATE',onInit:null,type:'grid',smartRender:20,delay:false,ids:'tOOLCNAME,space-column',headNames:'工具名称,&nbsp;',widths:'178,*',types:'ed,ro',hiddenColumns:'',aligns:'center,',serverSort:true,sorts:'na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:'mainActivity3.grid1RowClick',onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
new xforms.XFGrid({id:'grid2',instance:'proData',systemColumnsPro:'FID,FPARENTID,TPERSON,ROOMID,ROOMAREA,TOOLNO,LINEID,TASKID',onInit:null,type:'treegrid',smartRender:20,delay:false,ids:'TNAME,TPERSONNAME,TSTART,TEND,TEXECUTE,TCHECK,space-column',headNames:'名称,执行人,开始时间,结束时间,执行状态,检查结果,&nbsp;',widths:'230,129,149,129,110,105,*',types:'tree,ed,ed,ed,ed,ed,ro',hiddenColumns:'',aligns:'left,center,center,center,center,center,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:false,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var proData_part_loaded = false;	
function load_proData_part(callback){if (proData_part_loaded) return;proData_part_loaded = true;	
new xforms.XFInstance2('proData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-9','model1',"instance('proData')",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('proData')/TSTART","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('proData')/TEND","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('proData')/ROOMID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('proData')/TOOLNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('proData')/LINEID","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var proData_part_init_loaded = false;	
function load_proData_part_init(){if (proData_part_init_loaded) return;proData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var __actions__ = {	
};	
