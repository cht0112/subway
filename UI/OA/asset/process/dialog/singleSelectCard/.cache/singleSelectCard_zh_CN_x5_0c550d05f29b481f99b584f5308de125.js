
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
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
						/*这是防止td被内容撑开*/				if(!td.attr("wraped")){
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

	var ids=[{id:'1bc1f41bb72f4b34af15db5a598dfbb1', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'tbrAssetCard', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'0d99ca32f51e4d9b866cfb14ccdb2c48', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'grdSltStatus', name:'xforms:gridselect', children:[{id:'xuiLabel1', name:'xforms:label'},{id:'default22', name:'xforms:value'}]},{id:'grdSltKind', name:'xforms:gridselect', children:[{id:'xuiLabel2', name:'xforms:label'},{id:'default24', name:'xforms:value'}]}]},{id:'grdAssetCard', name:'xforms:grid'},{id:'trgOK', name:'xforms:trigger', children:[{id:'xuiLabel4', name:'xforms:label'}]},{id:'trgCancel', name:'xforms:trigger', children:[{id:'xuiLabel5', name:'xforms:label'}]}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'grdSltStatus');xf._a('grdSltStatus','xuiLabel1');xf._a('grdSltStatus','default23');xf._a(null,'grdSltKind');xf._a('grdSltKind','xuiLabel2');xf._a('grdSltKind','default25');xf._a(null,'grdAssetCard');xf._a(null,'trgOK');xf._a('trgOK','xuiLabel4');xf._a(null,'trgCancel');xf._a('trgCancel','xuiLabel5');function init() {	
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
xf._b("instance('dKind')/version",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dKind')/fLevel",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dKind')/fCreateTime",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dKind')/fUpdateTime",xf._g(xf._f('instance',xf._i("dKind")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("data('dTemp')/status",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','status')))));	
xf._b("'资产状态'",xf._i("资产状态"));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("value",xf._h(false, xf._k("child",xf._j('','value'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("data('dTemp')/kindID",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','kindID')))));	
xf._b("data('dTemp')/kind",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','kind')))));	
xf._b("'资产类别'",xf._i("资产类别"));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("fCode",xf._h(false, xf._k("child",xf._j('','fCode'))));	
xf._b("fDescription",xf._h(false, xf._k("child",xf._j('','fDescription'))));	
xf._b("fSequence",xf._h(false, xf._k("child",xf._j('','fSequence'))));	
xf._b("fUseStatus",xf._h(false, xf._k("child",xf._j('','fUseStatus'))));	
xf._b("fUseStatusName",xf._h(false, xf._k("child",xf._j('','fUseStatusName'))));	
xf._b("fParentCode",xf._h(false, xf._k("child",xf._j('','fParentCode'))));	
xf._b("fLevel",xf._h(false, xf._k("child",xf._j('','fLevel'))));	
xf._b("fURL",xf._h(false, xf._k("child",xf._j('','fURL'))));	
xf._b("fCreateOgnID",xf._h(false, xf._k("child",xf._j('','fCreateOgnID'))));	
xf._b("fCreateOgnName",xf._h(false, xf._k("child",xf._j('','fCreateOgnName'))));	
xf._b("fCreateDeptID",xf._h(false, xf._k("child",xf._j('','fCreateDeptID'))));	
xf._b("fCreateDeptName",xf._h(false, xf._k("child",xf._j('','fCreateDeptName'))));	
xf._b("fCreatePsnID",xf._h(false, xf._k("child",xf._j('','fCreatePsnID'))));	
xf._b("fCreatePsnName",xf._h(false, xf._k("child",xf._j('','fCreatePsnName'))));	
xf._b("fCreatePsnFID",xf._h(false, xf._k("child",xf._j('','fCreatePsnFID'))));	
xf._b("fCreateTime",xf._h(false, xf._k("child",xf._j('','fCreateTime'))));	
xf._b("fUpdatePsnID",xf._h(false, xf._k("child",xf._j('','fUpdatePsnID'))));	
xf._b("fUpdatePsnName",xf._h(false, xf._k("child",xf._j('','fUpdatePsnName'))));	
xf._b("fUpdateTime",xf._h(false, xf._k("child",xf._j('','fUpdateTime'))));	
xf._b("lINKCODE",xf._h(false, xf._k("child",xf._j('','lINKCODE'))));	
xf._b("recNo",xf._h(false, xf._k("child",xf._j('','recNo'))));	
xf._b("fStatusName",xf._h(false, xf._k("child",xf._j('','fStatusName'))));	
xf._b("fKind",xf._h(false, xf._k("child",xf._j('','fKind'))));	
xf._b("fSpecType",xf._h(false, xf._k("child",xf._j('','fSpecType'))));	
xf._b("fUnit",xf._h(false, xf._k("child",xf._j('','fUnit'))));	
xf._b("fServiceYear",xf._h(false, xf._k("child",xf._j('','fServiceYear'))));	
xf._b("fRemainValue",xf._h(false, xf._k("child",xf._j('','fRemainValue'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dAssetStatus','mdMain',null,'<rows id="default5"><row id="default6"><cell id="default11">闲置</cell><cell id="default12">0</cell></row><row id="default16"><cell id="default17">占用</cell><cell id="default18">1</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dAssetStatus','label,value');	
new xforms.XFInstance2('dTemp','mdMain',null,'<rows id="default3"><row id="default4"><cell id="default10">0</cell><cell id="default13"></cell><cell id="default14"></cell><cell id="default19"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dTemp','status,kindID,kind,like');	
new xforms.XFExtSelect({id:'grdSltStatus',type:'gridselect',defaultLabelRef:xf._q("'资产状态'"),allSelectedLabelRef:null,ref:xf._q("data('dTemp')/status"),labelRef:null,extRef:null,valueSeparator:',',labelSeparator:null,extSeparator:null,dataId:'dAssetStatus',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'checkbox,ro,ro',widths:{widths:"#,#,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'grdSltStatusCloseup'});	
new xforms.XFExtSelect({id:'grdSltKind',type:'gridselect',defaultLabelRef:xf._q("'资产类别'"),allSelectedLabelRef:null,ref:xf._q("data('dTemp')/kindID"),labelRef:xf._q("data('dTemp')/kind"),extRef:null,valueSeparator:',',labelSeparator:null,extSeparator:null,dataId:'dKind',columns:'fName,rowid,__c_,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'rowid,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',valueColumn:'rowid',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,',types:'checkbox,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'grdSltKindCloseup'});	
xforms.load_parts('vAssetCard');	
var xf_trigger_trgOK=new xforms.XFTrigger('trgOK',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgOKDOMActivate(event)}));xf._p(justep('trgOK'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trgOK', evt,false)});	
var xf_trigger_trgCancel=new xforms.XFTrigger('trgCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgCancelDOMActivate(event)}));xf._p(justep('trgCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action4,'trgCancel', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dAssetCard_part_loaded = false;	
function load_dAssetCard_part(callback){if (dAssetCard_part_loaded) return;dAssetCard_part_loaded = true;	
new xforms.XFInstance2('dAssetCard','mdMain',null,null,null,null,null,null,null,null,'recNo',null,'whereVersion');	
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
var dKind_part_loaded = false;	
function load_dKind_part(callback){if (dKind_part_loaded) return;dKind_part_loaded = true;	
new xforms.XFInstance2('dKind','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dKind',null);	
xf._c('xf-bind-22','mdMain',"instance('dKind')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dKind')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','mdMain',"instance('dKind')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dKind')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dKind_part_init_loaded = false;	
function load_dKind_part_init(){if (dKind_part_init_loaded) return;dKind_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_vAssetCard(){if (justep("vAssetCard").getAttribute('loaded') && justep("vAssetCard").getAttribute('loaded') == 'true') return;justep("vAssetCard").setAttribute('loaded', 'true');	
if(typeof(load_vAssetCard_html) == 'function')load_vAssetCard_html();	
new xforms.XFGrid({id:'grdAssetCard',instance:'dAssetCard',systemColumnsPro:'version,fKindID,fUnitID,fStatus,fOriginValue,fDutyOgnID,fDutyOgnName,fDutyOgnFID,fDutyDeptID,fDutyDeptName,fDutyPosID,fDutyPosName,fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,fBgDepreYear,fBgDepreMonth,fAddDepreValue,fFactory,fFactoryDate,fSupplier,fSource,fSourceName,fDetailInfo,fCheckID,fCheckNO,fBuyApplyID,fBuyApplyNO,fAssetInID,fAssetInNO,fRemark,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePosID,fCreatePosName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,fArrangeDate,fChecked,fAssetConfirm,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendStr5,fExtendStr6,fExtendStr7,fExtendStr8,fExtendStr9,fExtendDate1,fExtendDate2,fExtendDate3,fExtendDate4,fExtendDate5,fExtendNum1,fExtendNum2,fExtendNum3,fExtendNum4,fExtendNum5',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recNo,fStatusName,fCode,fKind,fName,fSpecType,fUnit,fServiceYear,fRemainValue,space-column',headNames:'序号,状态,资产编号,资产类别,名称,规格型号,单位,耐用年限,资产净残值,&nbsp;',widths:'30,40,90,100,101,80,35,55,90,*',types:'cntr,ro,ro,ro,ro,ro,ro,ro,ro,ro',hiddenColumns:'',aligns:'center,,,,,,center,right,right,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'grdAssetCardRowDblClick',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'fRemainValue','0,000.00');}});	
}	
function load_vAssetCard_xblinit(){if (justep("vAssetCard").getAttribute('xblloaded') && justep("vAssetCard").getAttribute('xblloaded') == 'true') return;justep("vAssetCard").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
