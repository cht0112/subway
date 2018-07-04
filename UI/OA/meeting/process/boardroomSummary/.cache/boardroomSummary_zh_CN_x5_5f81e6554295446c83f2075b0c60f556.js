
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter"] = _xbl_JSClassDefine_extOrgFilter;
justep.XBLObject._classes["/UI/appCommon/components/filter.xbl.xml#gridFilter"] = _xbl_JSClassDefine_gridFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_extOrgFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_extOrgFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.ExtOrgFilter(this));
				}
			}));

function _xbl_JSClassDefine_gridFilter(obj) {
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
					});		return;
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
						}			else {
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

	var ids=[{id:'ca4887e32b89480f895aa00f4c0e768e', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrCondition', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'insertTrigger', name:'xforms:trigger', children:[{id:'a3377df1ded344e784aeff4afcfcd37a', name:'xforms:label'}]},{id:'b1652afd850e4b10a6b548f6d8acf03b', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'gridFilter', name:'/UI/appCommon/components/filter.xbl.xml#gridFilter', children:[{id:'gridFilter_select_215365875', name:'xforms:gridselect', children:[{id:'default9', name:'xforms:value'},{id:'xuiLabel2', name:'xforms:label'}]}]},{id:'extOrgFilter', name:'/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter', children:[{id:'extOrgFilter_select_670154044', name:'xforms:treeselect', children:[{id:'f1855c79320043079f99679745ad58f6', name:'xforms:label'},{id:'dde36255eca142ca8802419a88bf35a6', name:'xforms:value'}]}]}]},{id:'grdSummary', name:'xforms:grid'}]},{id:'dlgSummaryInfo', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'wDlgRangeIssue', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'insertTrigger');xf._a('insertTrigger','a3377df1ded344e784aeff4afcfcd37a');xf._a(null,'gridFilter_select_215365875');xf._a('gridFilter_select_215365875','xuiLabel2');xf._a('gridFilter_select_215365875','default10');xf._a(null,'extOrgFilter_select_670154044');xf._a('extOrgFilter_select_670154044','f1855c79320043079f99679745ad58f6');xf._a('extOrgFilter_select_670154044','xf-itemset-1');xf._a(null,'grdSummary');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dSummary')",xf._f('instance',xf._i("dSummary")));	
xf._b("true()",xf._f('true'));	
xf._b("instance('dSummary')/recNO",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','recNO')))));	
xf._b("instance('dSummary')/version",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dSummary')/fBeginTime",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))));	
xf._b("instance('dSummary')/fEndTime",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fEndTime')))));	
xf._b("instance('dSummary')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))));	
xf._b("instance('dSummary')/fCreateTime",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dSummary')/fUpdateTime",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dSummary')/fExtendDate1",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dSummary')/fExtendDate2",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dSummary')/fExtendDate3",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dSummary')/fExtendDate4",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dSummary')/fExtendDate5",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dSummary')/fExtendNum1",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dSummary')/fExtendNum2",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dSummary')/fExtendNum3",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dSummary')/fExtendNum4",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dSummary')/fExtendNum5",xf._g(xf._f('instance',xf._i("dSummary")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dIssue')/version",xf._g(xf._f('instance',xf._i("dIssue")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dArrange')/version",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dArrange')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))));	
xf._b("instance('dArrange')/fBeginTime",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))));	
xf._b("instance('dArrange')/fEndTime",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fEndTime')))));	
xf._b("instance('dArrange')/fArrTime",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fArrTime')))));	
xf._b("instance('dArrange')/fEffect",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fEffect')))));	
xf._b("instance('dArrange')/fExtendDate1",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dArrange')/fExtendDate2",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dArrange')/fExtendDate3",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dArrange')/fExtendDate4",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dArrange')/fExtendDate5",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dArrange')/fExtendNum1",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dArrange')/fExtendNum2",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dArrange')/fExtendNum3",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dArrange')/fExtendNum4",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dArrange')/fExtendNum5",xf._g(xf._f('instance',xf._i("dArrange")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
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
xf._b("instance('summaryDetail')/version",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('summaryDetail')/fBeginTime",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fBeginTime')))));	
xf._b("instance('summaryDetail')/fEndTime",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fEndTime')))));	
xf._b("instance('summaryDetail')/fMeetPsnNum",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fMeetPsnNum')))));	
xf._b("instance('summaryDetail')/fCreateTime",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('summaryDetail')/fUpdateTime",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('summaryDetail')/fExtendDate1",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('summaryDetail')/fExtendDate2",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('summaryDetail')/fExtendDate3",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('summaryDetail')/fExtendDate4",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('summaryDetail')/fExtendDate5",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('summaryDetail')/fExtendNum1",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('summaryDetail')/fExtendNum2",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('summaryDetail')/fExtendNum3",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('summaryDetail')/fExtendNum4",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('summaryDetail')/fExtendNum5",xf._g(xf._f('instance',xf._i("summaryDetail")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('gridFilter_data_215365875')/value",xf._g(xf._f('instance',xf._i("gridFilter_data_215365875")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('gridFilter_data_215365875')/label",xf._g(xf._f('instance',xf._i("gridFilter_data_215365875")),xf._h(false, xf._k("child",xf._j('','label')))));	
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
xf._b("instance('extOrgFilter_orgData_670154044')/sValidState",xf._g(xf._f('instance',xf._i("extOrgFilter_orgData_670154044")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('extOrgFilter_data_670154044')/value",xf._g(xf._f('instance',xf._i("extOrgFilter_data_670154044")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('extOrgFilter_data_670154044')/label",xf._g(xf._f('instance',xf._i("extOrgFilter_data_670154044")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'本人'",xf._i("本人"));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sFID",xf._h(false, xf._k("child",xf._j('','sFID'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sLongName",xf._h(false, xf._k("child",xf._j('','sLongName'))));	
xf._b("sFName",xf._h(false, xf._k("child",xf._j('','sFName'))));	
xf._b("sFCode",xf._h(false, xf._k("child",xf._j('','sFCode'))));	
xf._b("sParent",xf._h(false, xf._k("child",xf._j('','sParent'))));	
xf._b("sNodeKind",xf._h(false, xf._k("child",xf._j('','sNodeKind'))));	
xf._b("sValidState",xf._h(false, xf._k("child",xf._j('','sValidState'))));	
xf._b("sPersonID",xf._h(false, xf._k("child",xf._j('','sPersonID'))));	
xf._b("recNO",xf._h(false, xf._k("child",xf._j('','recNO'))));	
xf._b("fIssueStateName",xf._h(false, xf._k("child",xf._j('','fIssueStateName'))));	
xf._b("fMeetName",xf._h(false, xf._k("child",xf._j('','fMeetName'))));	
xf._b("fBeginTime",xf._h(false, xf._k("child",xf._j('','fBeginTime'))));	
xf._b("fEndTime",xf._h(false, xf._k("child",xf._j('','fEndTime'))));	
xf._b("fBoardroom",xf._h(false, xf._k("child",xf._j('','fBoardroom'))));	
xf._b("fUseDeptName",xf._h(false, xf._k("child",xf._j('','fUseDeptName'))));	
xf._b("fUsePsnName",xf._h(false, xf._k("child",xf._j('','fUsePsnName'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("not(call('justep.XData.canDo','dSummary','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dSummary"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dSummary','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dSummary"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');xforms.Schema.registerPrefix('dateTime', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dSummary','mdMain',null,null,null,null,null,null,null,null,'recNO',null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dSummary')",null,"true()",null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dSummary')/recNO","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dSummary')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dSummary')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dSummary')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dSummary')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dSummary')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dSummary')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dSummary')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dSummary')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dSummary')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dSummary')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dSummary')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dSummary')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dSummary')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dSummary')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dSummary')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dSummary')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('dBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dBoardroom',null);	
xf._c('xf-bind-35','mdMain',"instance('dBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mdMain',"instance('dBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdMain',"instance('dBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdMain',"instance('dBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-39','mdMain',"instance('dBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdMain',"instance('dBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdMain',"instance('dBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-42','mdMain',"instance('dBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-43','mdMain',"instance('dBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-44','mdMain',"instance('dBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-45','mdMain',"instance('dBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-46','mdMain',"instance('dBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-47','mdMain',"instance('dBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-48','mdMain',"instance('dBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-49','mdMain',"instance('dBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
new xforms.XFInstance2('commData','mdMain',null,'<rows><row><cell></cell><cell></cell><cell></cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('commData','roomIDs,roomNames,persons,keyword');	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action2,'mdMain', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dIssue_part_loaded = false;	
function load_dIssue_part(callback){if (dIssue_part_loaded) return;dIssue_part_loaded = true;	
new xforms.XFInstance2('dIssue','mdMain',null,null,'false','fMasterID','dSummary',null,null,null,null,null,'whereVersion');new SimpleStore('dIssue',null);	
xf._c('xf-bind-18','mdMain',"instance('dIssue')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dIssue_part_init_loaded = false;	
function load_dIssue_part_init(){if (dIssue_part_init_loaded) return;dIssue_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var dArrange_part_loaded = false;	
function load_dArrange_part(callback){if (dArrange_part_loaded) return;dArrange_part_loaded = true;	
new xforms.XFInstance2('dArrange','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dArrange',null);	
xf._c('xf-bind-19','mdMain',"instance('dArrange')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dArrange')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dArrange')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdMain',"instance('dArrange')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dArrange')/fArrTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dArrange')/fEffect","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dArrange')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdMain',"instance('dArrange')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdMain',"instance('dArrange')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-28','mdMain',"instance('dArrange')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdMain',"instance('dArrange')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdMain',"instance('dArrange')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdMain',"instance('dArrange')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-32','mdMain',"instance('dArrange')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdMain',"instance('dArrange')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdMain',"instance('dArrange')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dArrange_part_init_loaded = false;	
function load_dArrange_part_init(){if (dArrange_part_init_loaded) return;dArrange_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var summaryDetail_part_loaded = false;	
function load_summaryDetail_part(callback){if (summaryDetail_part_loaded) return;summaryDetail_part_loaded = true;	
new xforms.XFInstance2('summaryDetail','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('summaryDetail',null);	
xf._c('xf-bind-50','mdMain',"instance('summaryDetail')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-51','mdMain',"instance('summaryDetail')/fBeginTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-52','mdMain',"instance('summaryDetail')/fEndTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-53','mdMain',"instance('summaryDetail')/fMeetPsnNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-54','mdMain',"instance('summaryDetail')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-55','mdMain',"instance('summaryDetail')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-56','mdMain',"instance('summaryDetail')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-57','mdMain',"instance('summaryDetail')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-58','mdMain',"instance('summaryDetail')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-59','mdMain',"instance('summaryDetail')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-60','mdMain',"instance('summaryDetail')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-61','mdMain',"instance('summaryDetail')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-62','mdMain',"instance('summaryDetail')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-63','mdMain',"instance('summaryDetail')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-64','mdMain',"instance('summaryDetail')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-65','mdMain',"instance('summaryDetail')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var summaryDetail_part_init_loaded = false;	
function load_summaryDetail_part_init(){if (summaryDetail_part_init_loaded) return;summaryDetail_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vToolbar');	
new xforms.XFGrid({id:'grdSummary',instance:'dSummary',systemColumnsPro:'version,fArrangeID,fCompereID,fCompere,fMeetPsns,fMeetPsnNum,fContent,fAttachment,fIssueRange,fIssueState,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fBoardroomID,fUseOgnId,fUseOrgName,fUseDeptID,fUsePsnID,fUsePsnFID,fUsePsnFName,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNO,fIssueStateName,fMeetName,fBeginTime,fEndTime,fBoardroom,fUseDeptName,fUsePsnName,fRemark,space-column',headNames:'序号,状态,会议主题,开始时间,结束时间,会议室,使用部门,使用人,备注,&nbsp;',widths:'30,45,120,100,100,110,100,60,*,*',types:'cntr,ro,html,dateTime,dateTime,ed,ed,ed,ro,ro',hiddenColumns:'fIssueStateName,fMeetName',aligns:'center,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fMeetName','grdSummary_fMeetNameRender');this.grid.bindColFormat(null,'fBeginTime','yyyy-MM-dd hh:mm');this.grid.bindColFormat(null,'fEndTime','yyyy-MM-dd hh:mm');}});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vToolbar(){if (justep("vToolbar").getAttribute('loaded') && justep("vToolbar").getAttribute('loaded') == 'true') return;justep("vToolbar").setAttribute('loaded', 'true');	
if(typeof(load_vToolbar_html) == 'function')load_vToolbar_html();	
var xf_trigger_insertTrigger=new xforms.XFTrigger('insertTrigger',null,"/UI/system/images/standardToolbar/standard/insert.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trigger2DOMActivate(event)}));xf._p(justep('insertTrigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'insertTrigger', evt,false)});	
var xf_model_gridFilter_model_215365875 = new xforms.XFModel('gridFilter_model_215365875',null);	
new xforms.XFInstance2('gridFilter_data_215365875','gridFilter_model_215365875',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('gridFilter_data_215365875','value,label');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.Filter.setFilterCondition("gridFilter", justep.xbl("dSummary"), "fBoardroomID", "", appCommon.component.Filter.getDefaultValueBinding("gridFilter_defaultValue_215365875"), true, ",", "", false);}));xf._p(justep('gridFilter_model_215365875'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'gridFilter_model_215365875', evt,false)});	
new xforms.XFExtSelect({id:'gridFilter_select_215365875',type:'gridselect',defaultLabelRef:null,allSelectedLabelRef:xf._q("'全部'"),ref:xf._q("instance('gridFilter_data_215365875')/value"),labelRef:xf._q("instance('gridFilter_data_215365875')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'dBoardroom',columns:'fName,OA_MT_Boardroom,__c_,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OA_MT_Boardroom,version,fType,fHoldNum,fUse,fFloor,fBaseConfig,fEquipment,fDescription,fPicture,fUseStatus,fUseStatusName,fDuptOgnID,fDuptOgnName,fDuptOgnFID,fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fDisUseTime,fAddress,fCode,fRemark,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',valueColumn:'OA_MT_Boardroom',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_extOrgFilter_model_670154044 = new xforms.XFModel('extOrgFilter_model_670154044',null);	
new xforms.XFInstance2('extOrgFilter_data_670154044','extOrgFilter_model_670154044',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('extOrgFilter_data_670154044','value,label');	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtOrgFilter.setFilterCondition("extOrgFilter", justep.xbl("dSummary"), "fCreatePsnID", "fCreatePsnFID", "", "本人", "", false);}));xf._p(justep('extOrgFilter_model_670154044'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_3,'extOrgFilter_model_670154044', evt,false)});	
new xforms.XFExtSelect({id:'extOrgFilter_select_670154044',type:'treeselect',defaultLabelRef:xf._q("'本人'"),allSelectedLabelRef:null,ref:xf._q("instance('extOrgFilter_data_670154044')/value"),labelRef:xf._q("instance('extOrgFilter_data_670154044')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'extOrgFilter_orgData_670154044',columns:'sName,__c_,sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',valueColumn:'sFID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,',aligns:',,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1858348610',onRowHasChildren:func_1838131822,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_vToolbar_xblinit(){if (justep("vToolbar").getAttribute('xblloaded') && justep("vToolbar").getAttribute('xblloaded') == 'true') return;justep("vToolbar").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('gridFilter_model_215365875').xformsObject.construct_part();	
if(xforms.ready)justep('extOrgFilter_model_670154044').xformsObject.construct_part();	
}	
var extOrgFilter_orgData_670154044_part_loaded = false;	
function load_extOrgFilter_orgData_670154044_part(callback){if (extOrgFilter_orgData_670154044_part_loaded) return;extOrgFilter_orgData_670154044_part_loaded = true;	
new xforms.XFInstance2('extOrgFilter_orgData_670154044','extOrgFilter_model_670154044',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-66','extOrgFilter_model_670154044',"instance('extOrgFilter_orgData_670154044')/sValidState","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var extOrgFilter_orgData_670154044_part_init_loaded = false;	
function load_extOrgFilter_orgData_670154044_part_init(){if (extOrgFilter_orgData_670154044_part_init_loaded) return;extOrgFilter_orgData_670154044_part_init_loaded = true;	
if(xforms.ready)justep('extOrgFilter_model_670154044').xformsObject.construct_part();}	
var __actions__ = {	
};	
