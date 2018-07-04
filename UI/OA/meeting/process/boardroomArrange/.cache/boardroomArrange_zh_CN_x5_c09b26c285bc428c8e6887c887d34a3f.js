
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/filter.xbl.xml#gridFilter"] = _xbl_JSClassDefine_gridFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"] = _xbl_JSClassDefine_smartFilter;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_gridFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_gridFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.GridFilter(this));
				}
			}));

function _xbl_JSClassDefine_window(obj) {
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
						td = $(td);	if(!td.attr("wraped")){
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

function _xbl_JSClassDefine_smartFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_smartFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.SmartFilter(this));
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
			    this.__nextButton = '';
			    this.__lastButton = '';
			    this.__extendArea = '';
				justep.Object.extend(this, new justep.PageNavigator(this));
				this.attachStoreEvent();
				this.refresh();
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

	var ids=[{id:'48ec738cd9ba4d5a8bf713383548286c', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table2', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrListBar', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'3c4b42fe7caf42efa3056235e42d5d01', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'gridFilter', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'gridFilter_select_1266668013', name:'xforms:gridselect', children:[{id:'default7', name:'xforms:value'},{id:'xuiLabel7', name:'xforms:label'}]}]},{id:'statusFilter', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'statusFilter_select_1260464132', name:'xforms:gridselect', children:[{id:'default19', name:'xforms:value'},{id:'xuiLabel8', name:'xforms:label'}]},{id:'statusFilter_defaultValue_1260464132', name:'xforms:output'}]},{id:'smartFilter', name:'/UI/appCommon/components/smartFilter.xbl.xml#smartFilter', children:[{id:'smartFilter_input_1156623714', name:'xforms:input'}]},{id:'trgArrange', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'trgRearrange', name:'xforms:trigger', children:[{id:'xuiLabel4', name:'xforms:label'}]},{id:'trgCancel', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]},{id:'trgSearch', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]}]},{id:'dlgBoardroomInfo', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'dlgArrangeInfo', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'gridBoardroom', name:'xforms:grid'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'gridFilter_select_1266668013');xf._a('gridFilter_select_1266668013','xuiLabel7');xf._a('gridFilter_select_1266668013','default8');xf._a(null,'statusFilter_select_1260464132');xf._a('statusFilter_select_1260464132','xuiLabel8');xf._a('statusFilter_select_1260464132','default20');xf._a(null,'statusFilter_defaultValue_1260464132');xf._a(null,'smartFilter_input_1156623714');xf._a(null,'trgArrange');xf._a('trgArrange','xuiLabel2');xf._a(null,'trgRearrange');xf._a('trgRearrange','xuiLabel4');xf._a(null,'trgCancel');xf._a('trgCancel','xuiLabel3');xf._a(null,'trgSearch');xf._a('trgSearch','xuiLabel1');xf._a(null,'gridBoardroom');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dList')/fBeginTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dList')/fEndTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fEndTime')))));	
xf._b("instance('dList')/version",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dList')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))));	
xf._b("instance('dList')/fArrTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fArrTime')))));	
xf._b("instance('dList')/fEffect",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fEffect')))));	
xf._b("instance('dList')/fExtendDate1",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dList')/fExtendDate2",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dList')/fExtendDate3",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dList')/fExtendDate4",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dList')/fExtendDate5",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dList')/fExtendNum1",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dList')/fExtendNum2",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dList')/fExtendNum3",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dList')/fExtendNum4",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dList')/fExtendNum5",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dBoardroom')/version",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dBoardroom')/fHoldNum",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fHoldNum')))));	
xf._b("instance('dBoardroom')/fCreateTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dBoardroom')/fUpdateTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dBoardroom')/fDisUseTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDisUseTime')))));	
xf._b("instance('dBoardroom')/fExtendDate1",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dBoardroom')/fExtendDate2",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dBoardroom')/fExtendDate3",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dBoardroom')/fExtendDate4",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dBoardroom')/fExtendDate5",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dBoardroom')/fExtendNum1",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dBoardroom')/fExtendNum2",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dBoardroom')/fExtendNum3",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dBoardroom')/fExtendNum4",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dBoardroom')/fExtendNum5",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('gridFilter_data_1266668013')/value",xf._g(xf._f('instance',xf._i("gridFilter_data_1266668013")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('gridFilter_data_1266668013')/label",xf._g(xf._f('instance',xf._i("gridFilter_data_1266668013")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'选择会议室'",xf._i("选择会议室"));	
xf._b("'全部'",xf._i("全部"));	
xf._b("OA_MT_Boardroom",xf._h(false, xf._k("child",xf._j('','OA_MT_Boardroom'))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("fType",xf._h(false, xf._k("child",xf._j('','fType'))));	
xf._b("fHoldNum",xf._h(false, xf._k("child",xf._j('','fHoldNum'))));	
xf._b("fUse",xf._h(false, xf._k("child",xf._j('','fUse'))));	
xf._b("fFloor",xf._h(false, xf._k("child",xf._j('','fFloor'))));	
xf._b("fBaseConfig",xf._h(false, xf._k("child",xf._j('','fBaseConfig'))));	
xf._b("fEquipment",xf._h(false, xf._k("child",xf._j('','fEquipment'))));	
xf._b("fDescription",xf._h(false, xf._k("child",xf._j('','fDescription'))));	
xf._b("fPicture",xf._h(false, xf._k("child",xf._j('','fPicture'))));	
xf._b("fUseStatus",xf._h(false, xf._k("child",xf._j('','fUseStatus'))));	
xf._b("fUseStatusName",xf._h(false, xf._k("child",xf._j('','fUseStatusName'))));	
xf._b("fDuptOgnID",xf._h(false, xf._k("child",xf._j('','fDuptOgnID'))));	
xf._b("fDuptOgnName",xf._h(false, xf._k("child",xf._j('','fDuptOgnName'))));	
xf._b("fDuptOgnFID",xf._h(false, xf._k("child",xf._j('','fDuptOgnFID'))));	
xf._b("fDutyDeptID",xf._h(false, xf._k("child",xf._j('','fDutyDeptID'))));	
xf._b("fDutyDeptName",xf._h(false, xf._k("child",xf._j('','fDutyDeptName'))));	
xf._b("fDutyPsnID",xf._h(false, xf._k("child",xf._j('','fDutyPsnID'))));	
xf._b("fDutyPsnName",xf._h(false, xf._k("child",xf._j('','fDutyPsnName'))));	
xf._b("fDutyPsnFID",xf._h(false, xf._k("child",xf._j('','fDutyPsnFID'))));	
xf._b("fDutyPsnFName",xf._h(false, xf._k("child",xf._j('','fDutyPsnFName'))));	
xf._b("fCreateOgnID",xf._h(false, xf._k("child",xf._j('','fCreateOgnID'))));	
xf._b("fCreateOgnName",xf._h(false, xf._k("child",xf._j('','fCreateOgnName'))));	
xf._b("fCreateDeptID",xf._h(false, xf._k("child",xf._j('','fCreateDeptID'))));	
xf._b("fCreateDeptName",xf._h(false, xf._k("child",xf._j('','fCreateDeptName'))));	
xf._b("fCreatePosID",xf._h(false, xf._k("child",xf._j('','fCreatePosID'))));	
xf._b("fCreatePosName",xf._h(false, xf._k("child",xf._j('','fCreatePosName'))));	
xf._b("fCreatePsnID",xf._h(false, xf._k("child",xf._j('','fCreatePsnID'))));	
xf._b("fCreatePsnName",xf._h(false, xf._k("child",xf._j('','fCreatePsnName'))));	
xf._b("fCreatePsnFID",xf._h(false, xf._k("child",xf._j('','fCreatePsnFID'))));	
xf._b("fCreatePsnFName",xf._h(false, xf._k("child",xf._j('','fCreatePsnFName'))));	
xf._b("fCreateTime",xf._h(false, xf._k("child",xf._j('','fCreateTime'))));	
xf._b("fUpdatePsnID",xf._h(false, xf._k("child",xf._j('','fUpdatePsnID'))));	
xf._b("fUpdatePsnName",xf._h(false, xf._k("child",xf._j('','fUpdatePsnName'))));	
xf._b("fUpdateTime",xf._h(false, xf._k("child",xf._j('','fUpdateTime'))));	
xf._b("fDisUseTime",xf._h(false, xf._k("child",xf._j('','fDisUseTime'))));	
xf._b("fAddress",xf._h(false, xf._k("child",xf._j('','fAddress'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("fExtendStr1",xf._h(false, xf._k("child",xf._j('','fExtendStr1'))));	
xf._b("fExtendStr2",xf._h(false, xf._k("child",xf._j('','fExtendStr2'))));	
xf._b("fExtendStr3",xf._h(false, xf._k("child",xf._j('','fExtendStr3'))));	
xf._b("fExtendStr4",xf._h(false, xf._k("child",xf._j('','fExtendStr4'))));	
xf._b("fExtendStr5",xf._h(false, xf._k("child",xf._j('','fExtendStr5'))));	
xf._b("fExtendStr6",xf._h(false, xf._k("child",xf._j('','fExtendStr6'))));	
xf._b("fExtendStr7",xf._h(false, xf._k("child",xf._j('','fExtendStr7'))));	
xf._b("fExtendStr8",xf._h(false, xf._k("child",xf._j('','fExtendStr8'))));	
xf._b("fExtendStr9",xf._h(false, xf._k("child",xf._j('','fExtendStr9'))));	
xf._b("fExtendDate1",xf._h(false, xf._k("child",xf._j('','fExtendDate1'))));	
xf._b("fExtendDate2",xf._h(false, xf._k("child",xf._j('','fExtendDate2'))));	
xf._b("fExtendDate3",xf._h(false, xf._k("child",xf._j('','fExtendDate3'))));	
xf._b("fExtendDate4",xf._h(false, xf._k("child",xf._j('','fExtendDate4'))));	
xf._b("fExtendDate5",xf._h(false, xf._k("child",xf._j('','fExtendDate5'))));	
xf._b("fExtendNum1",xf._h(false, xf._k("child",xf._j('','fExtendNum1'))));	
xf._b("fExtendNum2",xf._h(false, xf._k("child",xf._j('','fExtendNum2'))));	
xf._b("fExtendNum3",xf._h(false, xf._k("child",xf._j('','fExtendNum3'))));	
xf._b("fExtendNum4",xf._h(false, xf._k("child",xf._j('','fExtendNum4'))));	
xf._b("fExtendNum5",xf._h(false, xf._k("child",xf._j('','fExtendNum5'))));	
xf._b("instance('statusFilter_data_1260464132')/value",xf._g(xf._f('instance',xf._i("statusFilter_data_1260464132")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('statusFilter_data_1260464132')/label",xf._g(xf._f('instance',xf._i("statusFilter_data_1260464132")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'已安排'",xf._i("已安排"));	
xf._b("value",xf._h(false, xf._k("child",xf._j('','value'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("'1'",xf._i("1"));	
xf._b("instance('smartFilter_data_1156623714')/value",xf._g(xf._f('instance',xf._i("smartFilter_data_1156623714")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fEffect",xf._h(false, xf._k("child",xf._j('','fEffect'))));	
xf._b("fBoardroom",xf._h(false, xf._k("child",xf._j('','fBoardroom'))));	
xf._b("fMeetName",xf._h(false, xf._k("child",xf._j('','fMeetName'))));	
xf._b("fUseOrgName",xf._h(false, xf._k("child",xf._j('','fUseOrgName'))));	
xf._b("fUsePsnName",xf._h(false, xf._k("child",xf._j('','fUsePsnName'))));	
xf._b("fBeginTime",xf._h(false, xf._k("child",xf._j('','fBeginTime'))));	
xf._b("fEndTime",xf._h(false, xf._k("child",xf._j('','fEndTime'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dBoardroom',null);	
xf._c('xf-bind-18','mdMain',"instance('dBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdMain',"instance('dBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdMain',"instance('dBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdMain',"instance('dBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdMain',"instance('dBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdMain',"instance('dBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdMain',"instance('dBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdMain',"instance('dBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdMain',"instance('dBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dFilter','mdMain',null,'<rows><row><cell></cell><cell>1</cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dFilter','roomIDs,status,keyword');	
new xforms.XFInstance2('dStatus','mdMain',null,'<rows id="default9"><row id="default10"><cell id="default11">已安排</cell><cell id="default12">1</cell></row><row id="default13"><cell id="default14">已取消</cell><cell id="default15">0</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dStatus','label,value');	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action6,'mdMain', evt,false)});	
xforms.load_parts('vToolbar');	
xforms.load_parts('vList');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dList_part_loaded = false;	
function load_dList_part(callback){if (dList_part_loaded) return;dList_part_loaded = true;	
new xforms.XFInstance2('dList','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dList')/fBeginTime",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dList')/fEndTime",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dList')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dList')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dList')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dList')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dList')/fArrTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dList')/fEffect","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dList')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dList')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dList')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dList')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dList')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dList')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dList')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dList')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dList')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dList')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dList_part_init_loaded = false;	
function load_dList_part_init(){if (dList_part_init_loaded) return;dList_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_vToolbar(){if (justep("vToolbar").getAttribute('loaded') && justep("vToolbar").getAttribute('loaded') == 'true') return;justep("vToolbar").setAttribute('loaded', 'true');	
if(typeof(load_vToolbar_html) == 'function')load_vToolbar_html();	
var xf_model_gridFilter_model_1266668013 = new xforms.XFModel('gridFilter_model_1266668013',null);	
new xforms.XFInstance2('gridFilter_data_1266668013','gridFilter_model_1266668013',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('gridFilter_data_1266668013','value,label');	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("gridFilter", justep.xbl("dList"), "fBoardroomID", "", appCommon.component.Filter.getDefaultValueBinding("gridFilter_defaultValue_1266668013"), true, ",", "", false);}));xf._p(justep('gridFilter_model_1266668013'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'gridFilter_model_1266668013', evt,false)});	
new xforms.XFExtSelect({id:'gridFilter_select_1266668013',type:'gridselect',defaultLabelRef:xf._q("'选择会议室'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('gridFilter_data_1266668013')/value"),labelRef:xf._q("instance('gridFilter_data_1266668013')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dBoardroom',columns:'fName,OA_MT_Boardroom,__c_,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OA_MT_Boardroom,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',valueColumn:'OA_MT_Boardroom',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'200px',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_statusFilter_model_1260464132 = new xforms.XFModel('statusFilter_model_1260464132',null);	
new xforms.XFInstance2('statusFilter_data_1260464132','statusFilter_model_1260464132',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('statusFilter_data_1260464132','value,label');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("statusFilter", justep.xbl("dList"), "fEffect", "", appCommon.component.Filter.getDefaultValueBinding("statusFilter_defaultValue_1260464132"), true, ",", "boardroomArrange.statusFilterGetCondition", false);}));xf._p(justep('statusFilter_model_1260464132'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'statusFilter_model_1260464132', evt,false)});	
new xforms.XFExtSelect({id:'statusFilter_select_1260464132',type:'gridselect',defaultLabelRef:xf._q("'已安排'"),allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('statusFilter_data_1260464132')/value"),labelRef:xf._q("instance('statusFilter_data_1260464132')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dStatus',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'checkbox,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_statusFilter_defaultValue_1260464132=new xforms.XFOutput('statusFilter_defaultValue_1260464132',xf._q("'1'"),null,null);	
var xf_model_smartFilter_model_1156623714 = new xforms.XFModel('smartFilter_model_1156623714',null);	
new xforms.XFInstance2('smartFilter_data_1156623714','smartFilter_model_1156623714',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('smartFilter_data_1156623714','value');	
xf._d('smartFilter_input_1156623714','text',xf._q("instance('smartFilter_data_1156623714')/value"),null,null,null,null,false,false);	
var xf_trigger_trgArrange=new xforms.XFTrigger('trgArrange',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgArrangeDOMActivate(event)}));xf._p(justep('trgArrange'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trgArrange', evt,false)});	
var xf_trigger_trgRearrange=new xforms.XFTrigger('trgRearrange',null,null,null,false,false,false,null,null,null);	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgRearrangeDOMActivate(event)}));xf._p(justep('trgRearrange'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action5,'trgRearrange', evt,false)});	
var xf_trigger_trgCancel=new xforms.XFTrigger('trgCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgCancelDOMActivate(event)}));xf._p(justep('trgCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trgCancel', evt,false)});	
var xf_trigger_trgSearch=new xforms.XFTrigger('trgSearch',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgSearchDOMActivate(event)}));xf._p(justep('trgSearch'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trgSearch', evt,false)});	
}	
function load_vToolbar_xblinit(){if (justep("vToolbar").getAttribute('xblloaded') && justep("vToolbar").getAttribute('xblloaded') == 'true') return;justep("vToolbar").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('gridFilter_model_1266668013').xformsObject.construct_part();	
if(xforms.ready)justep('statusFilter_model_1260464132').xformsObject.construct_part();	
if(xforms.ready)justep('smartFilter_model_1156623714').xformsObject.construct_part();	
}	
function load_vList(){if (justep("vList").getAttribute('loaded') && justep("vList").getAttribute('loaded') == 'true') return;justep("vList").setAttribute('loaded', 'true');	
if(typeof(load_vList_html) == 'function')load_vList_html();	
new xforms.XFGrid({id:'gridBoardroom',instance:'dList',systemColumnsPro:'version,fUseOgnId,fUseDeptID,fUseDeptName,fUsePsnID,fUsePsnFID,fUsePsnFName,fBoardroomID,fMeetPsns,fMeetPsnNum,fPhone,fArrOgnID,fArrOgnName,fArrDeptID,fArrDeptName,fArrPsnFID,fArrPsnFName,fArrTime,fDescription,fMTUseApplyID,fArrPsnID,fArrPsnName,fOutPsns,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fEffect,fBoardroom,fMeetName,fUseOrgName,fUsePsnName,fBeginTime,fEndTime,fRemark,space-column',headNames:'序号,状态,会议室,会议主题,使用部门,使用人,开始时间,结束时间,备注,&nbsp;',widths:'30,60,100,100,100,60,110,110,*,*',types:'cntr,html,html,html,ro,ro,dateTime,dateTime,ro,ro',hiddenColumns:'',aligns:'center,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fEffect','gridBoardroom_fEffectRender');this.grid.bindColHTMLCallback(null,'fBoardroom','gridBoardroom_fBoardroomRender');this.grid.bindColHTMLCallback(null,'fMeetName','gridBoardroom_fMeetNameRender');this.grid.bindColFormat(null,'fBeginTime','yyyy-MM-dd hh:mm');this.grid.bindColFormat(null,'fEndTime','yyyy-MM-dd hh:mm');}});	
}	
function load_vList_xblinit(){if (justep("vList").getAttribute('xblloaded') && justep("vList").getAttribute('xblloaded') == 'true') return;justep("vList").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
