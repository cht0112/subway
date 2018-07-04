
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter"] = _xbl_JSClassDefine_extOrgFilter;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"] = _xbl_JSClassDefine_extDateFilter;justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
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

_xbl_JSClassDefine_extOrgFilter.prototype.ClassName='_xbl_JSClassDefine_extOrgFilter';
_xbl_JSClassDefine_extOrgFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_extOrgFilter',key:'da4ebdbfbb9dcd4e38d74d66c1d70c6f',time:1528079852},m:'5a3ae9d0de7c2ade472aaae347dae942'};
function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'da4ebdbfbb9dcd4e38d74d66c1d70c6f',time:1528079852},m:'816e9784e535e4754a508de0b7654adc'};
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
			},	_getSpace : function(){
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
							td.attr("wraped", true);}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			}   	
		}));

_xbl_JSClassDefine_tableLayout.prototype.ClassName='_xbl_JSClassDefine_tableLayout';
_xbl_JSClassDefine_tableLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_tableLayout',key:'da4ebdbfbb9dcd4e38d74d66c1d70c6f',time:1528079852},m:'eafa61c4ec076322b9ba5d04ef87b10f'};
function _xbl_JSClassDefine_extDateFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_extDateFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Object.extend(this, new appCommon.component.ExtDateFilter(this));
				}
			}));

_xbl_JSClassDefine_extDateFilter.prototype.ClassName='_xbl_JSClassDefine_extDateFilter';
_xbl_JSClassDefine_extDateFilter.prototype.__code__={v:{name:'_xbl_JSClassDefine_extDateFilter',key:'da4ebdbfbb9dcd4e38d74d66c1d70c6f',time:1528079852},m:'036d608434b613cfa19f1f5012387739'};
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

_xbl_JSClassDefine_toolbars.prototype.ClassName='_xbl_JSClassDefine_toolbars';
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'da4ebdbfbb9dcd4e38d74d66c1d70c6f',time:1528079852},m:'df71e10c0e8414048f8b60e6027e98ed'};
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
_xbl_JSClassDefine_bizDataFilterDialog.prototype.__code__={v:{name:'_xbl_JSClassDefine_bizDataFilterDialog',key:'da4ebdbfbb9dcd4e38d74d66c1d70c6f',time:1528079852},m:'15c6b0388f2fc685a4ceeb8c6ff58837'};
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

_xbl_JSClassDefine_pageNavigator.prototype.ClassName='_xbl_JSClassDefine_pageNavigator';
_xbl_JSClassDefine_pageNavigator.prototype.__code__={v:{name:'_xbl_JSClassDefine_pageNavigator',key:'da4ebdbfbb9dcd4e38d74d66c1d70c6f',time:1528079852},m:'13eed3dd981c928972b92450dccf78af'};
	var ids=[{id:'06b59c649b7a4b4eab6d4477a8615c57', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrAssetCard', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'126611c8a6f94e1abee32c8ccabc61f0', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'extDateFilter1', name:'/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter', children:[{id:'extDateFilter1_select_1923824713', name:'xforms:gridselect1', children:[{id:'01ea58fc8f3240918643f818bdff9d89', name:'xforms:value'},{id:'f9e5ba2a43464852aa3c68b04d6645e4', name:'xforms:label'}]},{id:'extDateFilter1_dialog_1923824713', name:'xforms:dialog', children:[{id:'580999ed70bf4388ba0b325fdbd493a5', name:'xforms:input'},{id:'3dbd72410abd4553941e8b4d7d4e972c', name:'xforms:input'}]}]},{id:'extOrgFilter1', name:'/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter', children:[{id:'extOrgFilter1_manageTypeCodes_1069357656', name:'xforms:output'},{id:'extOrgFilter1_select_1069357656', name:'xforms:treeselect', children:[{id:'60f7ac1a591f41c880f7037895f8736b', name:'xforms:label'},{id:'66a3615b1b1a494683d4f0b27adc1109', name:'xforms:value'}]}]},{id:'trgConfirm', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]}]},{id:'grdAssetCard', name:'xforms:grid'}]},{id:'filter-dialog-d9e49817-4adc-43fb-8cf5-236b15b51ce0', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_551013643', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='da4ebdbfbb9dcd4e38d74d66c1d70c6f';
xforms.Core.fileName='form.js';	
xf._a(null,'extDateFilter1_select_1923824713');xf._a('extDateFilter1_select_1923824713','f9e5ba2a43464852aa3c68b04d6645e4');xf._a('extDateFilter1_select_1923824713','xf-itemset-0');xf._a(null,'580999ed70bf4388ba0b325fdbd493a5');xf._a(null,'3dbd72410abd4553941e8b4d7d4e972c');xf._a(null,'extOrgFilter1_manageTypeCodes_1069357656');xf._a(null,'extOrgFilter1_select_1069357656');xf._a('extOrgFilter1_select_1069357656','60f7ac1a591f41c880f7037895f8736b');xf._a('extOrgFilter1_select_1069357656','xf-itemset-1');xf._a(null,'trgConfirm');xf._a('trgConfirm','xuiLabel1');xf._a(null,'grdAssetCard');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dAssetCard')/version",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetCard')/fOriginValue",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fOriginValue')))));	
xf._b("instance('dAssetCard')/fRemainValue",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fRemainValue')))));	
xf._b("instance('dAssetCard')/fServiceYear",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fServiceYear')))));	
xf._b("instance('dAssetCard')/fBgDepreYear",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fBgDepreYear')))));	
xf._b("instance('dAssetCard')/fBgDepreMonth",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fBgDepreMonth')))));	
xf._b("instance('dAssetCard')/fAddDepreValue",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fAddDepreValue')))));	
xf._b("instance('dAssetCard')/fFactoryDate",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fFactoryDate')))));	
xf._b("instance('dAssetCard')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetCard')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetCard')/fArrangeDate",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fArrangeDate')))));	
xf._b("instance('dAssetCard')/fChecked",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fChecked')))));	
xf._b("instance('dAssetCard')/fExtendDate1",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dAssetCard')/fExtendDate2",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dAssetCard')/fExtendDate3",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dAssetCard')/fExtendDate4",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dAssetCard')/fExtendDate5",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dAssetCard')/fExtendNum1",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dAssetCard')/fExtendNum2",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dAssetCard')/fExtendNum3",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dAssetCard')/fExtendNum4",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dAssetCard')/fExtendNum5",xf._g(xf._f('instance',xf._i("dAssetCard")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('extDateFilter1_data_1923824713')/beginDate",xf._g(xf._f('instance',xf._i("extDateFilter1_data_1923824713")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('extDateFilter1_data_1923824713')/endDate",xf._g(xf._f('instance',xf._i("extDateFilter1_data_1923824713")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("instance('extDateFilter1_data_1923824713')/value",xf._g(xf._f('instance',xf._i("extDateFilter1_data_1923824713")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('extDateFilter1_data_1923824713')/label",xf._g(xf._f('instance',xf._i("extDateFilter1_data_1923824713")),xf._h(false, xf._k("child",xf._j('','label')))));	
xf._b("'全部'",xf._i("全部"));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))),'','');	
xf._b("'systemManagement,assetManagement'",xf._i("systemManagement,assetManagement"));	
xf._b("instance('extOrgFilter1_orgData_1069357656')/sValidState",xf._g(xf._f('instance',xf._i("extOrgFilter1_orgData_1069357656")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('extOrgFilter1_data_1069357656')/value",xf._g(xf._f('instance',xf._i("extOrgFilter1_data_1069357656")),xf._h(false, xf._k("child",xf._j('','value')))));	
xf._b("instance('extOrgFilter1_data_1069357656')/label",xf._g(xf._f('instance',xf._i("extOrgFilter1_data_1069357656")),xf._h(false, xf._k("child",xf._j('','label')))));	
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
xf._b("ch",xf._h(false, xf._k("child",xf._j('','ch'))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fStatusName",xf._h(false, xf._k("child",xf._j('','fStatusName'))));	
xf._b("fAssetConfirm",xf._h(false, xf._k("child",xf._j('','fAssetConfirm'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fKind",xf._h(false, xf._k("child",xf._j('','fKind'))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("fSpecType",xf._h(false, xf._k("child",xf._j('','fSpecType'))));	
xf._b("fSourceName",xf._h(false, xf._k("child",xf._j('','fSourceName'))));	
xf._b("fDutyPsnName",xf._h(false, xf._k("child",xf._j('','fDutyPsnName'))));	
xf._b("fOriginValue",xf._h(false, xf._k("child",xf._j('','fOriginValue'))));	
xf._b("fDetailInfo",xf._h(false, xf._k("child",xf._j('','fDetailInfo'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action1,'mdMain', evt,false)});	
var xf_model_extDateFilter1_model_1923824713 = new xforms.XFModel('extDateFilter1_model_1923824713',null);	
xf._c('xf-bind-22','extDateFilter1_model_1923824713',"instance('extDateFilter1_data_1923824713')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-23','extDateFilter1_model_1923824713',"instance('extDateFilter1_data_1923824713')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('extDateFilter1_data_1923824713','extDateFilter1_model_1923824713',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('extDateFilter1_data_1923824713','value,label,beginDate,endDate');	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtDateFilter.setFilterCondition("extDateFilter1", justep.xbl("dAssetCard"), "single", "fCreateTime", "", "", "0", null, null, "", false);}));xf._p(justep('extDateFilter1_model_1923824713'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_1,'extDateFilter1_model_1923824713', evt,false)});	
new xforms.XFExtSelect({id:'extDateFilter1_select_1923824713',type:'gridselect1',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("instance('extDateFilter1_data_1923824713')/value"),labelRef:xf._q("instance('extDateFilter1_data_1923824713')/label"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:null,columns:'label,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'',valueColumn:'rowid',labelColumn:'label',extColumn:null,labels:',',aligns:',',types:'ro,ro',widths:{widths:"#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:'<rows><row id="0"><cell>全部</cell></row><row id="1"><cell>今天</cell></row><row id="2"><cell>昨天</cell></row><row id="3"><cell>本周</cell></row><row id="4"><cell>上周</cell></row><row id="5"><cell>本月</cell></row><row id="6"><cell>上月</cell></row><row id="7"><cell>今年</cell></row><row id="8"><cell>去年</cell></row><row id="9"><cell>自定义...</cell></row></rows>',inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFDialog('extDateFilter1_dialog_1923824713',"自定义",'model',true,false,true,true,false,null,'250','135',null,null,null,null);	
xf._d('580999ed70bf4388ba0b325fdbd493a5','text',xf._q("instance('extDateFilter1_data_1923824713')/beginDate"),null,null,null,null,false,false);	
xf._d('3dbd72410abd4553941e8b4d7d4e972c','text',xf._q("instance('extDateFilter1_data_1923824713')/endDate"),null,null,null,null,false,false);	
var xf_output_extOrgFilter1_manageTypeCodes_1069357656=new xforms.XFOutput('extOrgFilter1_manageTypeCodes_1069357656',xf._q("'systemManagement,assetManagement'"),null,null);	
var xf_model_extOrgFilter1_model_1069357656 = new xforms.XFModel('extOrgFilter1_model_1069357656',null);	
new xforms.XFInstance2('extOrgFilter1_data_1069357656','extOrgFilter1_model_1069357656',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('extOrgFilter1_data_1069357656','value,label');	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){appCommon.component.ExtOrgFilter.setFilterCondition("extOrgFilter1", justep.xbl("dAssetCard"), "fDutyPsnID", "sMainOrgFID", "", "本人", "", false);}));xf._p(justep('extOrgFilter1_model_1069357656'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'extOrgFilter1_model_1069357656', evt,false)});	
new xforms.XFExtSelect({id:'extOrgFilter1_select_1069357656',type:'treeselect',defaultLabelRef:xf._q("'本人'"),allSelectedLabelRef:null,ref:xf._q("instance('extOrgFilter1_data_1069357656')/value"),labelRef:xf._q("instance('extOrgFilter1_data_1069357656')/label"),extRef:null,valueSeparator:',',labelSeparator:',',extSeparator:null,dataId:'extOrgFilter1_orgData_1069357656',columns:'sName,__c_,sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sOrgKindID,sCode,sLongName,sFName,sFCode,sFID,sParent,sNodeKind,sValidState,sPersonID',valueColumn:'sFID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,',aligns:',,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1461623479',onRowHasChildren:func_308470829,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_trigger_trgConfirm=new xforms.XFTrigger('trgConfirm',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){myAssetActivity.trgConfirmClick(event)}));xf._p(justep('trgConfirm'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trgConfirm', evt,false)});	
xforms.load_parts('vAssetCard');	
new xforms.XFDialog('GLOBAL_ID_551013643',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1464734448');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1464734448", "");}));xf._p(justep('GLOBAL_ID_551013643'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_4,'GLOBAL_ID_551013643', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dAssetCard_part_loaded = false;	
function load_dAssetCard_part(callback){if (dAssetCard_part_loaded) return;dAssetCard_part_loaded = true;	
new xforms.XFInstance2('dAssetCard','mdMain',null,null,null,null,null,null,null,null,'recNo,ch',null,'whereVersion');	
xf._c('xf-bind-0','mdMain',"instance('dAssetCard')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dAssetCard')/fOriginValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dAssetCard')/fRemainValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dAssetCard')/fServiceYear","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dAssetCard')/fBgDepreYear","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dAssetCard')/fBgDepreMonth","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dAssetCard')/fAddDepreValue","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dAssetCard')/fFactoryDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dAssetCard')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dAssetCard')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dAssetCard')/fArrangeDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dAssetCard')/fChecked","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dAssetCard')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dAssetCard')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dAssetCard')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dAssetCard')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dAssetCard')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dAssetCard')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dAssetCard')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dAssetCard')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dAssetCard')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dAssetCard')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dAssetCard_part_init_loaded = false;	
function load_dAssetCard_part_init(){if (dAssetCard_part_init_loaded) return;dAssetCard_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var extOrgFilter1_orgData_1069357656_part_loaded = false;	
function load_extOrgFilter1_orgData_1069357656_part(callback){if (extOrgFilter1_orgData_1069357656_part_loaded) return;extOrgFilter1_orgData_1069357656_part_loaded = true;	
new xforms.XFInstance2('extOrgFilter1_orgData_1069357656','extOrgFilter1_model_1069357656',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-24','extOrgFilter1_model_1069357656',"instance('extOrgFilter1_orgData_1069357656')/sValidState","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var extOrgFilter1_orgData_1069357656_part_init_loaded = false;	
function load_extOrgFilter1_orgData_1069357656_part_init(){if (extOrgFilter1_orgData_1069357656_part_init_loaded) return;extOrgFilter1_orgData_1069357656_part_init_loaded = true;	
if(xforms.ready)justep('extOrgFilter1_model_1069357656').xformsObject.construct_part();}	
function load_vAssetCard(){if (justep("vAssetCard").getAttribute('loaded') && justep("vAssetCard").getAttribute('loaded') == 'true') return;justep("vAssetCard").setAttribute('loaded', 'true');	
if(typeof(load_vAssetCard_html) == 'function')load_vAssetCard_html();	
new xforms.XFGrid({id:'grdAssetCard',instance:'dAssetCard',systemColumnsPro:'version,fKindID,fUnitID,fUnit,fStatus,fRemainValue,fServiceYear,fDutyOgnID,fDutyOgnName,fDutyOgnFID,fDutyDeptID,fDutyDeptName,fDutyPosID,fDutyPosName,fDutyPsnID,fDutyPsnFID,fDutyPsnFName,fBgDepreYear,fBgDepreMonth,fAddDepreValue,fFactory,fFactoryDate,fSupplier,fSource,fCheckID,fCheckNO,fBuyApplyID,fBuyApplyNO,fAssetInID,fAssetInNO,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fArrangeDate,fChecked,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5,sMainOrgFID',onInit:null,type:'grid',smartRender:null,delay:false,ids:'ch,recNo,fStatusName,fAssetConfirm,fCode,fKind,fName,fSpecType,fSourceName,fDutyPsnName,fOriginValue,fDetailInfo,fRemark,space-column',headNames:'#master_checkbox,序号,状态,资产确认,资产编号,资产类别,名称,规格型号,资产来源,责任人,资产原值,详细配置,备注,&nbsp;',widths:'30,30,40,60,100,80,120,80,60,80,80,120,120,*',types:'checkbox,cntr,ro,ro,html,ro,ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,center,,,,,,,,,right,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'ch',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'grdAssetCardRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColHTMLCallback(null,'fCode','grdAssetCard_fCodeRender');this.grid.bindColFormat(null,'fOriginValue','0,000.00');}});	
}	
function load_vAssetCard_xblinit(){if (justep("vAssetCard").getAttribute('xblloaded') && justep("vAssetCard").getAttribute('xblloaded') == 'true') return;justep("vAssetCard").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
