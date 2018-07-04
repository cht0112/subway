
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/report.xbl.xml#report"] = _xbl_JSClassDefine_report;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/reportData.xbl.xml#data"] = _xbl_JSClassDefine_data;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
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
				this.tabbar = new justep.JSTabbar(this.domNode.id);
				justep.Utils.proxable(this, this.tabbar, justep.JSTabbar);
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

function _xbl_JSClassDefine_report(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_report.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Utils.extend(this, justep.Report, null, true);
					this.initComponent();
				},
				initXBL2 : function() {
					this.initContent();
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

function _xbl_JSClassDefine_data(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_data.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			initXBL : function() {
				this._id = this.domNode.id;
				if (!this._id) {
					throw new Error("ReportData组件的id属性不能为空");
				}				justep.Object.extend(this, new justep.ReportData(this.domNode.id,false));
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

	var ids=[{id:'108372b11b084fba9b402e8a7432433c', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tabpanel1', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'table3', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'iptRoomBegin', name:'xforms:input'},{id:'iptRoomEnd', name:'xforms:input'},{id:'slcRoomBoardroom', name:'xforms:gridselect1', children:[{id:'xuiLabel4', name:'xforms:label'},{id:'default4', name:'xforms:value'}]},{id:'trgApply', name:'xforms:trigger', children:[{id:'xuiLabel5', name:'xforms:label'}]}]},{id:'table3', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'iptRoomDate', name:'xforms:input'},{id:'slcDateBoardroom', name:'xforms:gridselect', children:[{id:'xuiLabel7', name:'xforms:label'},{id:'default10', name:'xforms:value'}]}]},{id:'table2', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrListBar', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'cb4414dd2be4419aa4f50c78a800ae90', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'iptListBegin', name:'xforms:input'},{id:'iptListEnd', name:'xforms:input'},{id:'slcListRoom', name:'xforms:gridselect1', children:[{id:'xuiLabel6', name:'xforms:label'},{id:'default19', name:'xforms:value'}]}]},{id:'grdList', name:'xforms:grid'}]},{id:'weekArrage', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrReport', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'weekRoomDate', name:'xforms:input'},{id:'mixedChart', name:'/UI/system/components/report.xbl.xml#report'}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'iptRoomBegin');xf._a(null,'iptRoomEnd');xf._a(null,'slcRoomBoardroom');xf._a('slcRoomBoardroom','xuiLabel4');xf._a('slcRoomBoardroom','default5');xf._a(null,'trgApply');xf._a('trgApply','xuiLabel5');xf._a(null,'iptRoomDate');xf._a(null,'slcDateBoardroom');xf._a('slcDateBoardroom','xuiLabel7');xf._a('slcDateBoardroom','default11');xf._a(null,'iptListBegin');xf._a(null,'iptListEnd');xf._a(null,'slcListRoom');xf._a('slcListRoom','xuiLabel6');xf._a('slcListRoom','default20');xf._a(null,'grdList');xf._a(null,'weekRoomDate');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dArrange')/version",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','version')))),'','');	
xf._b("instance('dArrange')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))),'','');	
xf._b("instance('dArrange')/fBeginTime",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))),'','');	
xf._b("instance('dArrange')/fEndTime",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fEndTime')))),'','');	
xf._b("instance('dArrange')/fArrTime",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fArrTime')))),'','');	
xf._b("instance('dArrange')/fEffect",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fEffect')))),'','');	
xf._b("instance('dArrange')/fExtendDate1",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))),'','');	
xf._b("instance('dArrange')/fExtendDate2",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))),'','');	
xf._b("instance('dArrange')/fExtendDate3",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))),'','');	
xf._b("instance('dArrange')/fExtendDate4",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))),'','');	
xf._b("instance('dArrange')/fExtendDate5",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))),'','');	
xf._b("instance('dArrange')/fExtendNum1",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))),'','');	
xf._b("instance('dArrange')/fExtendNum2",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))),'','');	
xf._b("instance('dArrange')/fExtendNum3",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))),'','');	
xf._b("instance('dArrange')/fExtendNum4",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))),'','');	
xf._b("instance('dArrange')/fExtendNum5",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))),'','');	
xf._b("instance('dCondition')/dateBegin",xf._g(xf._f('instance',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','dateBegin')))),'','');	
xf._b("instance('dCondition')/dateEnd",xf._g(xf._f('instance',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','dateEnd')))),'','');	
xf._b("instance('dCondition')/roomDate",xf._g(xf._f('instance',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','roomDate')))),'','');	
xf._b("instance('dCondition')/listBegin",xf._g(xf._f('instance',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','listBegin')))),'','');	
xf._b("instance('dCondition')/listEnd",xf._g(xf._f('instance',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','listEnd')))),'','');	
xf._b("instance('dCondition')/weekDate",xf._g(xf._f('instance',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','weekDate')))),'','');	
xf._b("instance('dBoardroom')/version",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','version')))),'','');	
xf._b("instance('dBoardroom')/fHoldNum",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fHoldNum')))),'','');	
xf._b("instance('dBoardroom')/fCreateTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))),'','');	
xf._b("instance('dBoardroom')/fUpdateTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))),'','');	
xf._b("instance('dBoardroom')/fDisUseTime",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDisUseTime')))),'','');	
xf._b("instance('dBoardroom')/fExtendDate1",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))),'','');	
xf._b("instance('dBoardroom')/fExtendDate2",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))),'','');	
xf._b("instance('dBoardroom')/fExtendDate3",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))),'','');	
xf._b("instance('dBoardroom')/fExtendDate4",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))),'','');	
xf._b("instance('dBoardroom')/fExtendDate5",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))),'','');	
xf._b("instance('dBoardroom')/fExtendNum1",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))),'','');	
xf._b("instance('dBoardroom')/fExtendNum2",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))),'','');	
xf._b("instance('dBoardroom')/fExtendNum3",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))),'','');	
xf._b("instance('dBoardroom')/fExtendNum4",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))),'','');	
xf._b("instance('dBoardroom')/fExtendNum5",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))),'','');	
xf._b("instance('dList')/fBeginTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))),'','');	
xf._b("true()",xf._f('true'),'','');	
xf._b("instance('dList')/fEndTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fEndTime')))),'','');	
xf._b("instance('dList')/version",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','version')))),'','');	
xf._b("instance('dList')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))),'','');	
xf._b("instance('dList')/fArrTime",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fArrTime')))),'','');	
xf._b("instance('dList')/fEffect",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fEffect')))),'','');	
xf._b("instance('dList')/fExtendDate1",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))),'','');	
xf._b("instance('dList')/fExtendDate2",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))),'','');	
xf._b("instance('dList')/fExtendDate3",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))),'','');	
xf._b("instance('dList')/fExtendDate4",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))),'','');	
xf._b("instance('dList')/fExtendDate5",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))),'','');	
xf._b("instance('dList')/fExtendNum1",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))),'','');	
xf._b("instance('dList')/fExtendNum2",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))),'','');	
xf._b("instance('dList')/fExtendNum3",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))),'','');	
xf._b("instance('dList')/fExtendNum4",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))),'','');	
xf._b("instance('dList')/fExtendNum5",xf._g(xf._f('instance',xf._i("dList")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))),'','');	
xf._b("instance('dRoomBoardroom')/version",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','version')))),'','');	
xf._b("instance('dRoomBoardroom')/fHoldNum",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fHoldNum')))),'','');	
xf._b("instance('dRoomBoardroom')/fCreateTime",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))),'','');	
xf._b("instance('dRoomBoardroom')/fUpdateTime",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))),'','');	
xf._b("instance('dRoomBoardroom')/fDisUseTime",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fDisUseTime')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendDate1",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendDate2",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendDate3",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendDate4",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendDate5",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendNum1",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendNum2",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendNum3",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendNum4",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))),'','');	
xf._b("instance('dRoomBoardroom')/fExtendNum5",xf._g(xf._f('instance',xf._i("dRoomBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))),'','');	
xf._b("instance('dDateBoardroom')/version",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','version')))),'','');	
xf._b("instance('dDateBoardroom')/fHoldNum",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fHoldNum')))),'','');	
xf._b("instance('dDateBoardroom')/fCreateTime",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))),'','');	
xf._b("instance('dDateBoardroom')/fUpdateTime",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))),'','');	
xf._b("instance('dDateBoardroom')/fDisUseTime",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fDisUseTime')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendDate1",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendDate2",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendDate3",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendDate4",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendDate5",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendNum1",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendNum2",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendNum3",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendNum4",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))),'','');	
xf._b("instance('dDateBoardroom')/fExtendNum5",xf._g(xf._f('instance',xf._i("dDateBoardroom")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))),'','');	
xf._b("data('dCondition')/dateBegin",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','dateBegin')))));	
xf._b("data('dCondition')/dateEnd",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','dateEnd')))));	
xf._b("data('dCondition')/dateRoomID",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','dateRoomID')))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
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
xf._b("data('dCondition')/roomDate",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','roomDate')))));	
xf._b("data('dCondition')/roomIDs",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','roomIDs')))));	
xf._b("data('dCondition')/listBegin",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','listBegin')))));	
xf._b("data('dCondition')/listEnd",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','listEnd')))));	
xf._b("data('dCondition')/listRoomID",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','listRoomID')))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fBoardroom",xf._h(false, xf._k("child",xf._j('','fBoardroom'))));	
xf._b("fMeetName",xf._h(false, xf._k("child",xf._j('','fMeetName'))));	
xf._b("fBeginTime",xf._h(false, xf._k("child",xf._j('','fBeginTime'))));	
xf._b("fEndTime",xf._h(false, xf._k("child",xf._j('','fEndTime'))));	
xf._b("fUseOrgName",xf._h(false, xf._k("child",xf._j('','fUseOrgName'))));	
xf._b("fUsePsnName",xf._h(false, xf._k("child",xf._j('','fUsePsnName'))));	
xf._b("fPhone",xf._h(false, xf._k("child",xf._j('','fPhone'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dCondition')/weekDate",xf._g(xf._f('data',xf._i("dCondition")),xf._h(false, xf._k("child",xf._j('','weekDate')))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('xs', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action4,'mdMain', evt,false)});	
var xf_action_action10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('mdMain'),"onload",null,function(evt) { xforms.run(xf_action_action10,'mdMain', evt,false)});	
new xforms.XFInstance2('dArrange','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dArrange',null);	
xf._c('xf-bind-0','mdMain',"instance('dArrange')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dArrange')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dArrange')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dArrange')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dArrange')/fArrTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dArrange')/fEffect","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dArrange')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dArrange')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dArrange')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dArrange')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dArrange')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dArrange')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dArrange')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dArrange')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dArrange')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dArrange')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dCondition','mdMain',null,'<rows><row><cell></cell><cell></cell><cell></cell><cell></cell><cell></cell><cell></cell><cell></cell><cell></cell><cell></cell><cell></cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dCondition','dateBegin,dateEnd,dateRoomID,dateRoomName,roomDate,roomIDs,roomNames,listBegin,listEnd,listRoomID,weekDate,tempDateTimeOrcl,tempDateTimeSQL');	
xf._c('xf-bind-16','mdMain',"instance('dCondition')/dateBegin","xs:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dCondition')/dateEnd","xs:date",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dCondition')/roomDate","xs:date",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dCondition')/listBegin","xs:date",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dCondition')/listEnd","xs:date",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dCondition')/weekDate","xs:date",null,null,null,null,null,null);	
new xforms.XFInstance2('dBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dBoardroom',null);	
xf._c('xf-bind-22','mdMain',"instance('dBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdMain',"instance('dBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdMain',"instance('dBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdMain',"instance('dBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdMain',"instance('dBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdMain',"instance('dBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdMain',"instance('dBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdMain',"instance('dBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdMain',"instance('dBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdMain',"instance('dBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdMain',"instance('dBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdMain',"instance('dBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dList','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-37','mdMain',"instance('dList')/fBeginTime",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-38','mdMain',"instance('dList')/fEndTime",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-39','mdMain',"instance('dList')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdMain',"instance('dList')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdMain',"instance('dList')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdMain',"instance('dList')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdMain',"instance('dList')/fArrTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdMain',"instance('dList')/fEffect","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdMain',"instance('dList')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdMain',"instance('dList')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdMain',"instance('dList')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdMain',"instance('dList')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdMain',"instance('dList')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-50','mdMain',"instance('dList')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdMain',"instance('dList')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdMain',"instance('dList')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdMain',"instance('dList')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdMain',"instance('dList')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dRoomBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dRoomBoardroom',null);	
xf._c('xf-bind-55','mdMain',"instance('dRoomBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdMain',"instance('dRoomBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdMain',"instance('dRoomBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdMain',"instance('dRoomBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdMain',"instance('dRoomBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-60','mdMain',"instance('dRoomBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-61','mdMain',"instance('dRoomBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-62','mdMain',"instance('dRoomBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-63','mdMain',"instance('dRoomBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-64','mdMain',"instance('dRoomBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-65','mdMain',"instance('dRoomBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-66','mdMain',"instance('dRoomBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-67','mdMain',"instance('dRoomBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-68','mdMain',"instance('dRoomBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-69','mdMain',"instance('dRoomBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dDateBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dDateBoardroom',null);	
xf._c('xf-bind-70','mdMain',"instance('dDateBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-71','mdMain',"instance('dDateBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-72','mdMain',"instance('dDateBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-73','mdMain',"instance('dDateBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-74','mdMain',"instance('dDateBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-75','mdMain',"instance('dDateBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-76','mdMain',"instance('dDateBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-77','mdMain',"instance('dDateBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-78','mdMain',"instance('dDateBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-79','mdMain',"instance('dDateBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-80','mdMain',"instance('dDateBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-81','mdMain',"instance('dDateBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-82','mdMain',"instance('dDateBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-83','mdMain',"instance('dDateBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-84','mdMain',"instance('dDateBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vRoomBar');	
var xf_action_action5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){tabArrangexforms_select(event)}));xf._p(justep('tabArrange'),"xforms-select",null,function(evt) { xforms.run(xf_action_action5,'tabArrange', evt,false)});	
xforms.load_parts('vDateBar');	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){tabListxforms_select(event)}));xf._p(justep('tabList'),"xforms-select",null,function(evt) { xforms.run(xf_action_action2,'tabList', evt,false)});	
xforms.load_parts('vArrangeList');	
new xforms.XFGrid({id:'grdList',instance:'dList',systemColumnsPro:'version,fUseOgnId,fUseDeptID,fUseDeptName,fUsePsnID,fUsePsnFID,fUsePsnFName,fBoardroomID,fMeetPsns,fMeetPsnNum,fArrOgnID,fArrOgnName,fArrDeptID,fArrDeptName,fArrPsnFID,fArrPsnFName,fArrTime,fDescription,fEffect,fMTUseApplyID,fArrPsnID,fArrPsnName,fOutPsns,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fBoardroom,fMeetName,fBeginTime,fEndTime,fUseOrgName,fUsePsnName,fPhone,fRemark,space-column',headNames:'序号,会议室,会议主题,开始时间,结束时间,使用部门,使用人,电话,备注,&nbsp;',widths:'30,90,130,100,100,100,90,100,*,*',types:'cntr,ro,ro,dateTime,dateTime,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'fBeginTime','yyyy-MM-dd hh:mm');this.grid.bindColFormat(null,'fEndTime','yyyy-MM-dd hh:mm');}});	
xf._d('weekRoomDate','text',xf._q("data('dCondition')/weekDate"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_action_weekAction=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){weekRoomDateXformsValueChanged(event)}));xf._p(justep('weekRoomDate'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_weekAction,'weekRoomDate', evt,false)});	
xforms.load_parts('vWeekArrage');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vRoomBar(){if (justep("vRoomBar").getAttribute('loaded') && justep("vRoomBar").getAttribute('loaded') == 'true') return;justep("vRoomBar").setAttribute('loaded', 'true');	
if(typeof(load_vRoomBar_html) == 'function')load_vRoomBar_html();	
xf._d('iptRoomBegin','text',xf._q("data('dCondition')/dateBegin"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_action_action8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){iptRoomBeginxforms_value_changed(event)}));xf._p(justep('iptRoomBegin'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action8,'iptRoomBegin', evt,false)});	
xf._d('iptRoomEnd','text',xf._q("data('dCondition')/dateEnd"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_action_action9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){iptRoomEndxforms_value_changed(event)}));xf._p(justep('iptRoomEnd'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action9,'iptRoomEnd', evt,false)});	
new xforms.XFExtSelect({id:'slcRoomBoardroom',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dCondition')/dateRoomID"),labelRef:null,extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dRoomBoardroom',columns:'rowid,fName,__c_,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'rowid,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',valueColumn:'rowid',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'slcRoomBoardroomCloseup'});	
var xf_trigger_trgApply=new xforms.XFTrigger('trgApply',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgApplyDOMActivate(event)}));xf._p(justep('trgApply'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trgApply', evt,false)});	
}	
function load_vRoomBar_xblinit(){if (justep("vRoomBar").getAttribute('xblloaded') && justep("vRoomBar").getAttribute('xblloaded') == 'true') return;justep("vRoomBar").setAttribute('xblloaded', 'true');	
}	
function load_vDateBar(){if (justep("vDateBar").getAttribute('loaded') && justep("vDateBar").getAttribute('loaded') == 'true') return;justep("vDateBar").setAttribute('loaded', 'true');	
if(typeof(load_vDateBar_html) == 'function')load_vDateBar_html();	
xf._d('iptRoomDate','text',xf._q("data('dCondition')/roomDate"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){iptRoomDatexforms_value_changed(event)}));xf._p(justep('iptRoomDate'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action3,'iptRoomDate', evt,false)});	
new xforms.XFExtSelect({id:'slcDateBoardroom',type:'gridselect',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dCondition')/roomIDs"),labelRef:null,extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dDateBoardroom',columns:'fName,rowid,__c_,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'rowid,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',valueColumn:'rowid',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:'full',delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'slcDateBoardroomCloseup'});	
}	
function load_vDateBar_xblinit(){if (justep("vDateBar").getAttribute('xblloaded') && justep("vDateBar").getAttribute('xblloaded') == 'true') return;justep("vDateBar").setAttribute('xblloaded', 'true');	
}	
function load_vArrangeList(){if (justep("vArrangeList").getAttribute('loaded') && justep("vArrangeList").getAttribute('loaded') == 'true') return;justep("vArrangeList").setAttribute('loaded', 'true');	
if(typeof(load_vArrangeList_html) == 'function')load_vArrangeList_html();	
xf._d('iptListBegin','text',xf._q("data('dCondition')/listBegin"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_action_action6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){iptListBeginxforms_value_changed(event)}));xf._p(justep('iptListBegin'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action6,'iptListBegin', evt,false)});	
xf._d('iptListEnd','text',xf._q("data('dCondition')/listEnd"),null,null,null,"yyyy-MM-dd",false,false);	
var xf_action_action7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){iptListEndxforms_value_changed(event)}));xf._p(justep('iptListEnd'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_action7,'iptListEnd', evt,false)});	
new xforms.XFExtSelect({id:'slcListRoom',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dCondition')/listRoomID"),labelRef:null,extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dBoardroom',columns:'rowid,fName,__c_,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'rowid,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',valueColumn:'rowid',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'slcListRoomCloseup'});	
}	
function load_vArrangeList_xblinit(){if (justep("vArrangeList").getAttribute('xblloaded') && justep("vArrangeList").getAttribute('xblloaded') == 'true') return;justep("vArrangeList").setAttribute('xblloaded', 'true');	
}	
function load_vWeekArrage(){if (justep("vWeekArrage").getAttribute('loaded') && justep("vWeekArrage").getAttribute('loaded') == 'true') return;justep("vWeekArrage").setAttribute('loaded', 'true');	
if(typeof(load_vWeekArrage_html) == 'function')load_vWeekArrage_html();	
}	
function load_vWeekArrage_xblinit(){if (justep("vWeekArrage").getAttribute('xblloaded') && justep("vWeekArrage").getAttribute('xblloaded') == 'true') return;justep("vWeekArrage").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
