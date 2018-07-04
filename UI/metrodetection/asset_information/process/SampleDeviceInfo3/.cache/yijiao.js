
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowReceiver.xbl.xml#windowReceiver"] = _xbl_JSClassDefine_windowReceiver;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

function _xbl_JSClassDefine_windowReceiver(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowReceiver.prototype = justep.Object.extend(new justep.XBLObject(), eval);

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

	var ids=[{id:'2470fd90c7984c0088fe7697b2cd3ccb', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'windowReceiver', name:'/UI/system/components/windowReceiver.xbl.xml#windowReceiver'},{id:'borderLayout1', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout', children:[{id:'oPERATEDATETIME', name:'xforms:input'},{id:'dEVICEID', name:'xforms:input'},{id:'gridSelect3', name:'xforms:gridselect1', children:[{id:'default44', name:'xforms:label'},{id:'default40', name:'xforms:value'}]},{id:'gridSelect4', name:'xforms:gridselect1', children:[{id:'default53', name:'xforms:label'},{id:'default49', name:'xforms:value'}]},{id:'gridSelect5', name:'xforms:gridselect1', children:[{id:'default68', name:'xforms:label'},{id:'default69', name:'xforms:value'}]},{id:'textarea2', name:'xforms:textarea'},{id:'gridSelect6', name:'xforms:gridselect1', children:[{id:'default86', name:'xforms:label'},{id:'default88', name:'xforms:value'}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'oPERATEDATETIME');xf._a(null,'dEVICEID');xf._a(null,'gridSelect3');xf._a('gridSelect3','default44');xf._a('gridSelect3','default36');xf._a(null,'gridSelect4');xf._a('gridSelect4','default53');xf._a('gridSelect4','default59');xf._a(null,'gridSelect5');xf._a('gridSelect5','default68');xf._a('gridSelect5','default70');xf._a(null,'textarea2');xf._a(null,'gridSelect6');xf._a('gridSelect6','default86');xf._a('gridSelect6','default85');function init() {	
var begin = new Date().getTime();	
xf._b("instance('lvliData')/oPERATEDATETIME",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATEDATETIME')))));	
xf._b("true()",xf._f('true'));	
xf._b("'操作日期时间不能为空!'",xf._i("操作日期时间不能为空!"));	
xf._b("instance('lvliData')/oPERATORID",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATORID')))));	
xf._b("'操作员不能为空!'",xf._i("操作员不能为空!"));	
xf._b("instance('lvliData')/dEVICEID",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("'设备ID不能为空!'",xf._i("设备ID不能为空!"));	
xf._b("instance('lvliData')/oPERATETYPE",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATETYPE')))));	
xf._b("instance('lvliData')/pROJECTID",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('lvliData')/oPERATERESULTSTATE",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATERESULTSTATE')))));	
xf._b("instance('lvliData')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('sysOperData')/sValidState",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('sysOperData')/sLevel",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('sysOperData')/version",xf._g(xf._f('instance',xf._i("sysOperData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('cData')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('cData')/aPPLICATIONTYPE",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONTYPE')))));	
xf._b("instance('cData')/cHECKRESULT",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKRESULT')))));	
xf._b("instance('cData')/cHECKTIME",xf._g(xf._f('instance',xf._i("cData")),xf._h(false, xf._k("child",xf._j('','cHECKTIME')))));	
xf._b("instance('hrData')/oPERATORSEX",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSEX')))));	
xf._b("instance('hrData')/oPERATORBIRTHDAY",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY')))));	
xf._b("instance('hrData')/oFFICEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oFFICEID')))));	
xf._b("instance('hrData')/pOSITIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONID')))));	
xf._b("instance('hrData')/dEGREEID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','dEGREEID')))));	
xf._b("instance('hrData')/eDUCATIONID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','eDUCATIONID')))));	
xf._b("instance('hrData')/pOLITICALID",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOLITICALID')))));	
xf._b("instance('hrData')/pOSITIONALTITLE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE')))));	
xf._b("instance('hrData')/oPERATORSTATE",xf._g(xf._f('instance',xf._i("hrData")),xf._h(false, xf._k("child",xf._j('','oPERATORSTATE')))));	
xf._b("instance('dataMaster')/dEVICETYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICETYPE')))));	
xf._b("'检测对象不能为空!'",xf._i("检测对象不能为空!"));	
xf._b("instance('dataMaster')/dECTIONTYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dECTIONTYPE')))));	
xf._b("'检测类型不能为空!'",xf._i("检测类型不能为空!"));	
xf._b("instance('dataMaster')/sOFTWAREVERSION",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sOFTWAREVERSION')))));	
xf._b("'软件版本不能为空!'",xf._i("软件版本不能为空!"));	
xf._b("instance('dataMaster')/hARDWAREVERSION",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','hARDWAREVERSION')))));	
xf._b("'硬件版本不能为空!'",xf._i("硬件版本不能为空!"));	
xf._b("instance('dataMaster')/dEADLINERECEIVEDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEADLINERECEIVEDATE')))));	
xf._b("'最晚进场日期不能为空!'",xf._i("最晚进场日期不能为空!"));	
xf._b("instance('dataMaster')/iNDEEDRECEIVEDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEEDRECEIVEDATE')))));	
xf._b("'实际进场日期不能为空!'",xf._i("实际进场日期不能为空!"));	
xf._b("instance('dataMaster')/rETURNDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','rETURNDATE')))));	
xf._b("'预计归还日期不能为空!'",xf._i("预计归还日期不能为空!"));	
xf._b("instance('dataMaster')/iNDEEDRETURNDATE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','iNDEEDRETURNDATE')))));	
xf._b("'实际归还日期不能为空!'",xf._i("实际归还日期不能为空!"));	
xf._b("instance('dataMaster')/sHAREDFLAG",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sHAREDFLAG')))));	
xf._b("'是否允许资源共用不能为空!'",xf._i("是否允许资源共用不能为空!"));	
xf._b("instance('dataMaster')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("'供应商名称不能为空!'",xf._i("供应商名称不能为空!"));	
xf._b("instance('dataMaster')/dEVICEID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("instance('dataMaster')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('dataMaster')/sAMPLEDEVICENO1",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO1')))));	
xf._b("instance('dataMaster')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('dataMaster')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('dataMaster')/pROJECTID",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('dataMaster')/TEST_CONTRACT_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TEST_CONTRACT_INFO')))));	
xf._b("instance('dataMaster')/TEST_PROJECT_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO')))));	
xf._b("instance('dataMaster')/AFC_MANUFACTURER_INFO",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','AFC_MANUFACTURER_INFO')))));	
xf._b("instance('dataMaster')/DETECTION_OBJECT_TYPE",xf._g(xf._f('instance',xf._i("dataMaster")),xf._h(false, xf._k("child",xf._j('','DETECTION_OBJECT_TYPE')))));	
xf._b("instance('zhanyong')/sAMPLEDEVICENO",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','sAMPLEDEVICENO')))));	
xf._b("instance('zhanyong')/pROJECTID",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("instance('zhanyong')/oCCUPYSTARTDATETIME",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','oCCUPYSTARTDATETIME')))));	
xf._b("instance('zhanyong')/oCCUPYENDDATETIME",xf._g(xf._f('instance',xf._i("zhanyong")),xf._h(false, xf._k("child",xf._j('','oCCUPYENDDATETIME')))));	
xf._b("instance('bizData1')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('bizData1')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('bizData1')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('bizData1')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('bizData1')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('bizData1')/lINEID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('bizData1')/bUSINESSID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('bizData1')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('bizData1')/pROJECTDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('bizData1')/eNDINGDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('bizData1')/mAKEDATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('bizData1')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("instance('bizData2')/aPPLICATIONNO",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO')))));	
xf._b("instance('bizData2')/tESTSCHEMEID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID')))));	
xf._b("instance('bizData2')/pROJECTTYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','pROJECTTYPE')))));	
xf._b("instance('bizData2')/aSSIGNEDMANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID')))));	
xf._b("instance('bizData2')/nOTIFYTYPE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE')))));	
xf._b("instance('bizData2')/lINEID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','lINEID')))));	
xf._b("instance('bizData2')/bUSINESSID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','bUSINESSID')))));	
xf._b("instance('bizData2')/mANUFACTUREID",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','mANUFACTUREID')))));	
xf._b("instance('bizData2')/pROJECTDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','pROJECTDATE')))));	
xf._b("instance('bizData2')/eNDINGDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','eNDINGDATE')))));	
xf._b("instance('bizData2')/mAKEDATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','mAKEDATE')))));	
xf._b("instance('bizData2')/eXECUTESTATE",xf._g(xf._f('instance',xf._i("bizData2")),xf._h(false, xf._k("child",xf._j('','eXECUTESTATE')))));	
xf._b("data('lvliData')/oPERATEDATETIME",xf._g(xf._f('data',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATEDATETIME')))));	
xf._b("data('lvliData')/dEVICEID",xf._g(xf._f('data',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','dEVICEID')))));	
xf._b("data('lvliData')/oPERATERESULTSTATE",xf._g(xf._f('data',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATERESULTSTATE')))));	
xf._b("col_1",xf._h(false, xf._k("child",xf._j('','col_1'))));	
xf._b("col_0",xf._h(false, xf._k("child",xf._j('','col_0'))));	
xf._b("data('lvliData')/oPERATETYPE",xf._g(xf._f('data',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATETYPE')))));	
xf._b("data('lvliData')/oPERATORID",xf._g(xf._f('data',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','oPERATORID')))));	
xf._b("oPERATORNAME",xf._h(false, xf._k("child",xf._j('','oPERATORNAME'))));	
xf._b("HR_BASE_INFO",xf._h(false, xf._k("child",xf._j('','HR_BASE_INFO'))));	
xf._b("oPERATORSEX",xf._h(false, xf._k("child",xf._j('','oPERATORSEX'))));	
xf._b("oPERATORBIRTHDAY",xf._h(false, xf._k("child",xf._j('','oPERATORBIRTHDAY'))));	
xf._b("nATION",xf._h(false, xf._k("child",xf._j('','nATION'))));	
xf._b("oFFICEID",xf._h(false, xf._k("child",xf._j('','oFFICEID'))));	
xf._b("pOSITIONID",xf._h(false, xf._k("child",xf._j('','pOSITIONID'))));	
xf._b("dEGREEID",xf._h(false, xf._k("child",xf._j('','dEGREEID'))));	
xf._b("eDUCATIONID",xf._h(false, xf._k("child",xf._j('','eDUCATIONID'))));	
xf._b("pOLITICALID",xf._h(false, xf._k("child",xf._j('','pOLITICALID'))));	
xf._b("pROFESSIONAL",xf._h(false, xf._k("child",xf._j('','pROFESSIONAL'))));	
xf._b("pOSITIONALTITLE",xf._h(false, xf._k("child",xf._j('','pOSITIONALTITLE'))));	
xf._b("eMAILADDRESS",xf._h(false, xf._k("child",xf._j('','eMAILADDRESS'))));	
xf._b("mOBILE",xf._h(false, xf._k("child",xf._j('','mOBILE'))));	
xf._b("oPERATORSTATE",xf._h(false, xf._k("child",xf._j('','oPERATORSTATE'))));	
xf._b("Scode",xf._h(false, xf._k("child",xf._j('','Scode'))));	
xf._b("mEMO",xf._h(false, xf._k("child",xf._j('','mEMO'))));	
xf._b("cARDID",xf._h(false, xf._k("child",xf._j('','cARDID'))));	
xf._b("data('lvliData')/mEMO",xf._g(xf._f('data',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','mEMO')))));	
xf._b("data('lvliData')/pROJECTID",xf._g(xf._f('data',xf._i("lvliData")),xf._h(false, xf._k("child",xf._j('','pROJECTID')))));	
xf._b("pROJECTNAME",xf._h(false, xf._k("child",xf._j('','pROJECTNAME'))));	
xf._b("TEST_PROJECT_INFO",xf._h(false, xf._k("child",xf._j('','TEST_PROJECT_INFO'))));	
xf._b("aPPLICATIONNO",xf._h(false, xf._k("child",xf._j('','aPPLICATIONNO'))));	
xf._b("tESTSCHEMEID",xf._h(false, xf._k("child",xf._j('','tESTSCHEMEID'))));	
xf._b("pROJECTTYPE",xf._h(false, xf._k("child",xf._j('','pROJECTTYPE'))));	
xf._b("aSSIGNEDMANUFACTUREID",xf._h(false, xf._k("child",xf._j('','aSSIGNEDMANUFACTUREID'))));	
xf._b("cONTACTPERSON",xf._h(false, xf._k("child",xf._j('','cONTACTPERSON'))));	
xf._b("cONTACTMOBILE",xf._h(false, xf._k("child",xf._j('','cONTACTMOBILE'))));	
xf._b("cONTACTTELEPHONE",xf._h(false, xf._k("child",xf._j('','cONTACTTELEPHONE'))));	
xf._b("cONTACTEMAIL",xf._h(false, xf._k("child",xf._j('','cONTACTEMAIL'))));	
xf._b("nOTIFYTYPE",xf._h(false, xf._k("child",xf._j('','nOTIFYTYPE'))));	
xf._b("lINEID",xf._h(false, xf._k("child",xf._j('','lINEID'))));	
xf._b("bUSINESSID",xf._h(false, xf._k("child",xf._j('','bUSINESSID'))));	
xf._b("mANUFACTUREID",xf._h(false, xf._k("child",xf._j('','mANUFACTUREID'))));	
xf._b("pROJECTDATE",xf._h(false, xf._k("child",xf._j('','pROJECTDATE'))));	
xf._b("eNDINGDATE",xf._h(false, xf._k("child",xf._j('','eNDINGDATE'))));	
xf._b("pROJECTMANAGER",xf._h(false, xf._k("child",xf._j('','pROJECTMANAGER'))));	
xf._b("qAMANAGER",xf._h(false, xf._k("child",xf._j('','qAMANAGER'))));	
xf._b("tESTMANAGER",xf._h(false, xf._k("child",xf._j('','tESTMANAGER'))));	
xf._b("tECHMANAGER",xf._h(false, xf._k("child",xf._j('','tECHMANAGER'))));	
xf._b("mAKEDATE",xf._h(false, xf._k("child",xf._j('','mAKEDATE'))));	
xf._b("eXECUTESTATE",xf._h(false, xf._k("child",xf._j('','eXECUTESTATE'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('lvliData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('lvliData',null);	
xf._c('xf-bind-0','model1',"instance('lvliData')/oPERATEDATETIME",null,null,"true()",null,null,null,"'操作日期时间不能为空!'");	
xf._c('xf-bind-1','model1',"instance('lvliData')/oPERATORID",null,null,"true()",null,null,null,"'操作员不能为空!'");	
xf._c('xf-bind-2','model1',"instance('lvliData')/dEVICEID",null,null,"true()",null,null,null,"'设备ID不能为空!'");	
xf._c('xf-bind-3','model1',"instance('lvliData')/oPERATEDATETIME","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('lvliData')/oPERATETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('lvliData')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('lvliData')/oPERATERESULTSTATE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('lvliData')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('cData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('cData',null);	
xf._c('xf-bind-11','model1',"instance('cData')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('cData')/aPPLICATIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('cData')/cHECKRESULT","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model1',"instance('cData')/cHECKTIME","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('hrData','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-15','model1',"instance('hrData')/oPERATORSEX","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','model1',"instance('hrData')/oPERATORBIRTHDAY","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','model1',"instance('hrData')/oFFICEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','model1',"instance('hrData')/pOSITIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','model1',"instance('hrData')/dEGREEID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','model1',"instance('hrData')/eDUCATIONID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','model1',"instance('hrData')/pOLITICALID","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','model1',"instance('hrData')/pOSITIONALTITLE","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','model1',"instance('hrData')/oPERATORSTATE","xsd:float",null,null,null,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){yijiao.model1XBLLoaded(event)}));xf._p(justep('model1'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action1,'model1', evt,false)});	
new xforms.XFInstance2('dataMaster','model1',null,null,null,null,null,null,null,null,'recCB',null,'whereAll');new SimpleStore('dataMaster',null);	
xf._c('xf-bind-24','model1',"instance('dataMaster')/dEVICETYPE",null,null,"true()",null,null,null,"'检测对象不能为空!'");	
xf._c('xf-bind-25','model1',"instance('dataMaster')/dECTIONTYPE",null,null,"true()",null,null,null,"'检测类型不能为空!'");	
xf._c('xf-bind-26','model1',"instance('dataMaster')/sOFTWAREVERSION",null,null,"true()",null,null,null,"'软件版本不能为空!'");	
xf._c('xf-bind-27','model1',"instance('dataMaster')/hARDWAREVERSION",null,null,"true()",null,null,null,"'硬件版本不能为空!'");	
xf._c('xf-bind-28','model1',"instance('dataMaster')/dEADLINERECEIVEDATE",null,null,"true()",null,null,null,"'最晚进场日期不能为空!'");	
xf._c('xf-bind-29','model1',"instance('dataMaster')/iNDEEDRECEIVEDATE",null,null,"true()",null,null,null,"'实际进场日期不能为空!'");	
xf._c('xf-bind-30','model1',"instance('dataMaster')/rETURNDATE",null,null,"true()",null,null,null,"'预计归还日期不能为空!'");	
xf._c('xf-bind-31','model1',"instance('dataMaster')/iNDEEDRETURNDATE",null,null,"true()",null,null,null,"'实际归还日期不能为空!'");	
xf._c('xf-bind-32','model1',"instance('dataMaster')/sHAREDFLAG",null,null,"true()",null,null,null,"'是否允许资源共用不能为空!'");	
xf._c('xf-bind-33','model1',"instance('dataMaster')/mANUFACTUREID",null,null,"true()",null,null,null,"'供应商名称不能为空!'");	
xf._c('xf-bind-34','model1',"instance('dataMaster')/dEVICEID",null,null,"true()",null,null,null,"'设备ID不能为空!'");	
xf._c('xf-bind-35','model1',"instance('dataMaster')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','model1',"instance('dataMaster')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','model1',"instance('dataMaster')/dEVICETYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','model1',"instance('dataMaster')/dECTIONTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-39','model1',"instance('dataMaster')/sOFTWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','model1',"instance('dataMaster')/hARDWAREVERSION","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','model1',"instance('dataMaster')/dEADLINERECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-42','model1',"instance('dataMaster')/iNDEEDRECEIVEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-43','model1',"instance('dataMaster')/rETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-44','model1',"instance('dataMaster')/iNDEEDRETURNDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-45','model1',"instance('dataMaster')/sHAREDFLAG","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-46','model1',"instance('dataMaster')/sAMPLEDEVICENO1","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-47','model1',"instance('dataMaster')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-48','model1',"instance('dataMaster')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-49','model1',"instance('dataMaster')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-50','model1',"instance('dataMaster')/TEST_CONTRACT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-51','model1',"instance('dataMaster')/TEST_PROJECT_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-52','model1',"instance('dataMaster')/AFC_MANUFACTURER_INFO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-53','model1',"instance('dataMaster')/DETECTION_OBJECT_TYPE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');	
xf._c('xf-bind-58','model1',"instance('bizData1')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-59','model1',"instance('bizData1')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-60','model1',"instance('bizData1')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-61','model1',"instance('bizData1')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-62','model1',"instance('bizData1')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-63','model1',"instance('bizData1')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-64','model1',"instance('bizData1')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-65','model1',"instance('bizData1')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-66','model1',"instance('bizData1')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-67','model1',"instance('bizData1')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-68','model1',"instance('bizData1')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-69','model1',"instance('bizData1')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
new xforms.XFInstance2('bizData2','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('bizData2',null);	
xf._c('xf-bind-70','model1',"instance('bizData2')/aPPLICATIONNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-71','model1',"instance('bizData2')/tESTSCHEMEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-72','model1',"instance('bizData2')/pROJECTTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-73','model1',"instance('bizData2')/aSSIGNEDMANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-74','model1',"instance('bizData2')/nOTIFYTYPE","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-75','model1',"instance('bizData2')/lINEID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-76','model1',"instance('bizData2')/bUSINESSID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-77','model1',"instance('bizData2')/mANUFACTUREID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-78','model1',"instance('bizData2')/pROJECTDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-79','model1',"instance('bizData2')/eNDINGDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-80','model1',"instance('bizData2')/mAKEDATE","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-81','model1',"instance('bizData2')/eXECUTESTATE","xsd:integer",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var sysOperData_part_loaded = false;	
function load_sysOperData_part(callback){if (sysOperData_part_loaded) return;sysOperData_part_loaded = true;	
new xforms.XFInstance2('sysOperData','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('sysOperData',null);	
xf._c('xf-bind-8','model1',"instance('sysOperData')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('sysOperData')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('sysOperData')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var sysOperData_part_init_loaded = false;	
function load_sysOperData_part_init(){if (sysOperData_part_init_loaded) return;sysOperData_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
var zhanyong_part_loaded = false;	
function load_zhanyong_part(callback){if (zhanyong_part_loaded) return;zhanyong_part_loaded = true;	
new xforms.XFInstance2('zhanyong','model1',null,null,null,null,null,null,null,null,null,null,'whereAll');new SimpleStore('zhanyong',null);	
xf._c('xf-bind-54','model1',"instance('zhanyong')/sAMPLEDEVICENO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-55','model1',"instance('zhanyong')/pROJECTID","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','model1',"instance('zhanyong')/oCCUPYSTARTDATETIME","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-57','model1',"instance('zhanyong')/oCCUPYENDDATETIME","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var zhanyong_part_init_loaded = false;	
function load_zhanyong_part_init(){if (zhanyong_part_init_loaded) return;zhanyong_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('view1');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_view1(){if (justep("view1").getAttribute('loaded') && justep("view1").getAttribute('loaded') == 'true') return;justep("view1").setAttribute('loaded', 'true');	
if(typeof(load_view1_html) == 'function')load_view1_html();	
xforms.load_parts('view2');	
}	
function load_view1_xblinit(){if (justep("view1").getAttribute('xblloaded') && justep("view1").getAttribute('xblloaded') == 'true') return;justep("view1").setAttribute('xblloaded', 'true');	
}	
function load_view2(){if (justep("view2").getAttribute('loaded') && justep("view2").getAttribute('loaded') == 'true') return;justep("view2").setAttribute('loaded', 'true');	
if(typeof(load_view2_html) == 'function')load_view2_html();	
xf._d('oPERATEDATETIME','text',xf._q("data('lvliData')/oPERATEDATETIME"),null,null,null,"yyyy-MM-dd",true,false);	
xf._d('dEVICEID','text',xf._q("data('lvliData')/dEVICEID"),null,null,null,null,true,false);	
new xforms.XFExtSelect({id:'gridSelect3',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('lvliData')/oPERATERESULTSTATE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default43"><row id="default39"><cell id="default48">0</cell><cell id="default46">成功</cell></row><row id="default41"><cell id="default38">1</cell><cell id="default37">失败</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect4',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('lvliData')/oPERATETYPE"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:null,columns:'col_0,col_1',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'col_0',valueColumn:'col_0',labelColumn:'col_1',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows id="default64"><row id="default67"><cell id="default60">1</cell><cell id="default56">供应商移交</cell></row><row id="default51"><cell id="default63">2</cell><cell id="default57">返还供应商</cell></row><row id="default54"><cell id="default52">3</cell><cell id="default62">内部领用</cell></row><row id="default66"><cell id="default50">4</cell><cell id="default65">内部归还</cell></row></rows>',inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'gridSelect5',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('lvliData')/oPERATORID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'hrData',columns:'HR_BASE_INFO,oPERATORNAME,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'HR_BASE_INFO,oPERATORSEX,oPERATORBIRTHDAY,nATION,oFFICEID,pOSITIONID,dEGREEID,eDUCATIONID,pOLITICALID,pROFESSIONAL,pOSITIONALTITLE,eMAILADDRESS,mOBILE,oPERATORSTATE,Scode,mEMO,cARDID',valueColumn:'HR_BASE_INFO',labelColumn:'oPERATORNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('textarea2','textarea',xf._q("data('lvliData')/mEMO"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect6',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('lvliData')/pROJECTID"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:',',dataId:'bizData1',columns:'TEST_PROJECT_INFO,pROJECTNAME,aPPLICATIONNO,tESTSCHEMEID,pROJECTTYPE,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,qAMANAGER,tESTMANAGER,tECHMANAGER,mAKEDATE,eXECUTESTATE,mEMO',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'TEST_PROJECT_INFO,aPPLICATIONNO,tESTSCHEMEID,pROJECTTYPE,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,qAMANAGER,tESTMANAGER,tECHMANAGER,mAKEDATE,eXECUTESTATE,mEMO',valueColumn:'TEST_PROJECT_INFO',labelColumn:'pROJECTNAME',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:true,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_view2_xblinit(){if (justep("view2").getAttribute('xblloaded') && justep("view2").getAttribute('xblloaded') == 'true') return;justep("view2").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
		