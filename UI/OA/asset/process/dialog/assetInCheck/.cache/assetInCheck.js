
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

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
			"initXFormEvent" : function(){				var id = this.domNode.id;
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
								img.attr("src", info.enImg);								a.unbind("click");
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
			    this.__nextButton = '';   this.__lastButton = '';
			    this.__extendArea = '';
				justep.Object.extend(this, new justep.PageNavigator(this));
				this.attachStoreEvent();
				this.refresh();
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

	var ids=[{id:'f64bcd348f754986b8bb58e02d2dbbfc', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'iptDate', name:'xforms:input'},{id:'optNO', name:'xforms:output'},{id:'taCheckDepts', name:'xforms:textarea'},{id:'taCheckPsns', name:'xforms:textarea'},{id:'taRemark', name:'xforms:textarea'},{id:'tbrAssetCheck', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'1b840dd864e24d439ab62393b1365bbd', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'}]},{id:'grdAssetCheck', name:'xforms:grid'},{id:'trgOK', name:'xforms:trigger', children:[{id:'e0e9a54a7ecd4c13af1878257de21f0d', name:'xforms:label'}]},{id:'trgCancel', name:'xforms:trigger', children:[{id:'b6e5948e286d45568f34477184447ce2', name:'xforms:label'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 		
xforms.Core.fileName='form.js';	
xf._a(null,'iptDate');xf._a(null,'optNO');xf._a(null,'taCheckDepts');xf._a(null,'taCheckPsns');xf._a(null,'taRemark');xf._a(null,'grdAssetCheck');xf._a(null,'trgOK');xf._a('trgOK','e0e9a54a7ecd4c13af1878257de21f0d');xf._a(null,'trgCancel');xf._a('trgCancel','b6e5948e286d45568f34477184447ce2');function init() {	
var begin = new Date().getTime();	
xf._b("instance('mainData')/version",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('mainData')/fDate",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fDate')))));	
xf._b("instance('mainData')/fCreateTime",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('mainData')/fUpdateTime",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('mainData')/fExtendDate1",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('mainData')/fExtendDate2",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('mainData')/fExtendDate3",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('mainData')/fExtendDate4",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('mainData')/fExtendDate5",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('mainData')/fExtendNum1",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('mainData')/fExtendNum2",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('mainData')/fExtendNum3",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('mainData')/fExtendNum4",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('mainData')/fExtendNum5",xf._g(xf._f('instance',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('subData')/version",xf._g(xf._f('instance',xf._i("subData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('mainData')/fDate",xf._g(xf._f('data',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fDate')))));	
xf._b("data('mainData')/fNO",xf._g(xf._f('data',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fNO')))));	
xf._b("data('mainData')/fCheckDepts",xf._g(xf._f('data',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fCheckDepts')))));	
xf._b("data('mainData')/fCheckPsns",xf._g(xf._f('data',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fCheckPsns')))));	
xf._b("data('mainData')/fRemark",xf._g(xf._f('data',xf._i("mainData")),xf._h(false, xf._k("child",xf._j('','fRemark')))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fCheckItem",xf._h(false, xf._k("child",xf._j('','fCheckItem'))));	
xf._b("fCheckPsn",xf._h(false, xf._k("child",xf._j('','fCheckPsn'))));	
xf._b("fDescription",xf._h(false, xf._k("child",xf._j('','fDescription'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("fMasterID",xf._h(false, xf._k("child",xf._j('','fMasterID'))));	
xf._b("not(call('justep.XData.canDo','subData','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("subData"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','subData','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("subData"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFInstance2('mainData','model1',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('mainData',null);	
xf._c('xf-bind-0','model1',"instance('mainData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','model1',"instance('mainData')/fDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-2','model1',"instance('mainData')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','model1',"instance('mainData')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('mainData')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('mainData')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-6','model1',"instance('mainData')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','model1',"instance('mainData')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','model1',"instance('mainData')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','model1',"instance('mainData')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-10','model1',"instance('mainData')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-11','model1',"instance('mainData')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','model1',"instance('mainData')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','model1',"instance('mainData')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('subData','model1',null,null,null,'fMasterID','mainData',null,null,null,'recNo',null,'whereVersion');	
xf._c('xf-bind-14','model1',"instance('subData')/version","xsd:integer",null,null,null,null,null,null);	
xf._d('iptDate','text',xf._q("data('mainData')/fDate"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_output_optNO=new xforms.XFOutput('optNO',xf._q("data('mainData')/fNO"),null,null);	
xf._d('taCheckDepts','textarea',xf._q("data('mainData')/fCheckDepts"),null,null,null,null,false,false);	
xf._d('taCheckPsns','textarea',xf._q("data('mainData')/fCheckPsns"),null,null,null,null,false,false);	
xf._d('taRemark','textarea',xf._q("data('mainData')/fRemark"),null,null,null,null,false,false);	
new xforms.XFGrid({id:'grdAssetCheck',instance:'subData',systemColumnsPro:'version,fCheckPsnID',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fCheckItem,fCheckPsn,fDescription,fRemark,fMasterID',headNames:'序号,验收项,验收人,情况说明,备注,fMasterID',widths:'30,120,80,150,144,*',types:'cntr,ed,ro,ed,ed,ro',hiddenColumns:'fMasterID',aligns:'center,,,,,',serverSort:true,sorts:'na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){}});	
var xf_trigger_trgOK=new xforms.XFTrigger('trgOK',null,null,null,false,false);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgOKDOMActivate(event)}));xf._p(justep('trgOK'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trgOK', evt,false)});	
var xf_trigger_trgCancel=new xforms.XFTrigger('trgCancel',null,null,null,false,false);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgCancelDOMActivate(event)}));xf._p(justep('trgCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'trgCancel', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var __actions__ = {	
};	
		