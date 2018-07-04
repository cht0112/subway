
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/orgSelect.xbl.xml#orgSelect"] = _xbl_JSClassDefine_orgSelect;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/report.xbl.xml#report"] = _xbl_JSClassDefine_report;
justep.XBLObject._classes["/UI/system/components/chart.xbl.xml#chart"] = _xbl_JSClassDefine_chart;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/reportData.xbl.xml#data"] = _xbl_JSClassDefine_data;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'510a5bc174c84db48c5fdb81c54ef18e',time:1528079860},m:'c40c253de6098c5ad5fcada5cd881c8a'};
function _xbl_JSClassDefine_orgSelect(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_orgSelect.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"initXBL" : function() {
					this.__attribute_node = this.getElementByXblID('attribute');
					this.__data_id = this.__attribute_node?this.__attribute_node.getAttribute('data-id'):'';
					this.__grid_id = this.__attribute_node?this.__attribute_node.getAttribute('grid-id'):'';
					this.__data_obj = this.__data_id?justep.xbl(this.__data_id):null;
					this.__grid_obj = this.__grid_id?xforms(this.__grid_id):null;
					if(this.domNode.getAttribute("onDropdown")) this.__onDropdown = justep.Function.get(this.domNode.getAttribute("onDropdown")); else this.__onDropdown = null;
					if(this.domNode.getAttribute("onRowExpand")) this.__onRowExpand = justep.Function.get(this.domNode.getAttribute("onRowExpand")); else this.__onRowExpand = null;
					this.hasDisable = 'true'==this.domNode.getAttribute("include-disable-org");
					this.selectableOrgTypes = this.domNode.getAttribute('selectable-org-types');
					this.selectableOrgTypes = this.selectableOrgTypes?this.selectableOrgTypes.split(','):null;
					this.showOrgTypes = this.domNode.getAttribute('show-org-types');
					this.showOrgTypes = this.showOrgTypes?this.showOrgTypes.split(','):[];
					var filter = '';
					for(var i=0;i<this.showOrgTypes.length;i++){
						var nodeType = this.showOrgTypes[i];
						var s = justep.String.trim(nodeType);
						if(s) filter += (filter!=''?",":"")+"'"+s+"'";
					}
					this.showOrgTypeFilter = filter!=''?'SA_OPOrg.sOrgKindID in ('+filter+')':'';
					this.manageCodes =  justep.String.trim(this.domNode.getAttribute('manage-codes'));
					if(this.__grid_obj){
				        if(this.__onRowExpand)
							this.__select_obj.attachEvent("onRowExpand", this.__onRowExpand, this);
						this.__grid_obj.attachEvent("onShowNodeImg", this._doShowNodeImg, this);
						this.__grid_obj.attachEvent("onDropdown", this._doDropdown, this);
						this.__grid_obj.attachEvent("onRowDisabled", this._doSelectNodeFilter, this);
					}
					if(this.__data_obj){
						this.__data_obj.attachEvent("onRefreshCreateParam", this._doCreateParam, this);
					}
				},
				"_doCreateParam" : function(event){
					var queryParam = event.param;
					var data = this.__data_obj;
					var filter = this._getFilter();
					var userFilter = data.buildFilter();
					if(userFilter) filter = filter?'('+userFilter+') AND ('+filter+')':userFilter;
					if(filter) queryParam.setString('filter', filter);
					else queryParam.deleteParam('filter');

					if(justep.XData.IS_TREE_ROOT==this.__data_obj.defTreeOption.loadTreeParent && this.manageCodes){
						queryParam.setString('manageCodes', this.manageCodes);
					}else queryParam.deleteParam('manageCodes');
				},
				"_doSelectNodeFilter" : function(event){
					if(null==this.selectableOrgTypes) return true;
					var id = event.rowId;
					var data = this.__data_obj;
					var kind = data.getValue('sOrgKindID',id);
					if(kind){
						kind = kind.toUpperCase();
						var len = this.selectableOrgTypes.length;
						for(var i=0;i<len;i++){
							var s = this.selectableOrgTypes[i].toUpperCase();
							if(kind==s) return true;
						}
					}
					return false;
				},
				"_getFilter" : function(){
					var orgFilter = this.showOrgTypeFilter;
					if(orgFilter==""){
						orgFilter += !this.hasDisable?'SA_OPOrg.sValidState=1':'';
					}
					else{
						orgFilter += !this.hasDisable?' AND SA_OPOrg.sValidState=1':'';
					}
					return orgFilter;
				},
				"_doDropdown" : function(event){
					if(this.__onDropdown) this.__onDropdown(event);
					if(!event.source.isLoadData){
						event.source.isLoadData = this.__data_obj.refreshData();
					}
				},
				"_doShowNodeImg" : function(event){
					var data = justep.xbl(event.instance.element.id);
					if(!data) return;
					var orgKind = !event.grid._isVirtualRoot(event.rowId)?data.getValue('sOrgKindID', event.rowId):'root';
					var ValidState = !event.grid._isVirtualRoot(event.rowId)?(1==data.getValue('sValidState', event.rowId)):true;
					return justep.Resource.getOrgImgURL(orgKind, !ValidState);
				},	"getData" : function(){
					return this.__data_obj;
				},
				"getTreeSelect" : function(){
					return this.__grid_obj;
				},
				"getSelect" : function(){
					return this.__grid_obj;
				}
			}));

_xbl_JSClassDefine_orgSelect.prototype.ClassName='_xbl_JSClassDefine_orgSelect';
_xbl_JSClassDefine_orgSelect.prototype.__code__={v:{name:'_xbl_JSClassDefine_orgSelect',key:'510a5bc174c84db48c5fdb81c54ef18e',time:1528079860},m:'995d6e44dd1395ad85acf735184c6686'};
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
					});					return;
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

_xbl_JSClassDefine_tableLayout.prototype.ClassName='_xbl_JSClassDefine_tableLayout';
_xbl_JSClassDefine_tableLayout.prototype.__code__={v:{name:'_xbl_JSClassDefine_tableLayout',key:'510a5bc174c84db48c5fdb81c54ef18e',time:1528079860},m:'bcbc267934f692e40069666a02e0bc0c'};
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

_xbl_JSClassDefine_report.prototype.ClassName='_xbl_JSClassDefine_report';
_xbl_JSClassDefine_report.prototype.__code__={v:{name:'_xbl_JSClassDefine_report',key:'510a5bc174c84db48c5fdb81c54ef18e',time:1528079860},m:'7dee4556b4dbb2531188adccf40b9df3'};
function _xbl_JSClassDefine_chart(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_chart.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					justep.Utils.extend(this, justep.Chart, null, true);
					this.initComponent();
				},
				initXBL2 : function() {
					this.initContent();
				}
			}));

_xbl_JSClassDefine_chart.prototype.ClassName='_xbl_JSClassDefine_chart';
_xbl_JSClassDefine_chart.prototype.__code__={v:{name:'_xbl_JSClassDefine_chart',key:'510a5bc174c84db48c5fdb81c54ef18e',time:1528079860},m:'700e8dbcca36f65d89828c1e835e4ed4'};
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
					if (cur.tagName=="BODY") {	return null;
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'510a5bc174c84db48c5fdb81c54ef18e',time:1528079860},m:'f53575c8b3841d1c91ba816f5783a791'};
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
				}
				justep.Object.extend(this, new justep.ReportData(this.domNode.id,false));
			} 
		}));

_xbl_JSClassDefine_data.prototype.ClassName='_xbl_JSClassDefine_data';
_xbl_JSClassDefine_data.prototype.__code__={v:{name:'_xbl_JSClassDefine_data',key:'510a5bc174c84db48c5fdb81c54ef18e',time:1528079860},m:'9b3f32377426fc71590126cca20b708a'};
	var ids=[{id:'58c82a5e9954436fa97e39081542a777', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'table1', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'iptBeginDate', name:'xforms:input'},{id:'iptEndDate', name:'xforms:input'},{id:'iptDay', name:'xforms:input'},{id:'orgSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSelect1', name:'xforms:treeselect', children:[{id:'e0b1fa2bd3fb424cb97994c2ef06ff64', name:'xforms:label'},{id:'77f5bb38437d4cb4a5062adc75e09f26', name:'xforms:value'}]}]},{id:'trgQuery', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'chartZT', name:'/UI/system/components/chart.xbl.xml#chart'},{id:'chartBT', name:'/UI/system/components/chart.xbl.xml#chart'},{id:'report', name:'/UI/system/components/report.xbl.xml#report'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='510a5bc174c84db48c5fdb81c54ef18e';
xforms.Core.fileName='form.js';	
xf._a(null,'iptBeginDate');xf._a(null,'iptEndDate');xf._a(null,'iptDay');xf._a(null,'treeSelect1');xf._a('treeSelect1','e0b1fa2bd3fb424cb97994c2ef06ff64');xf._a('treeSelect1','xf-itemset-0');xf._a(null,'trgQuery');xf._a('trgQuery','xuiLabel1');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dTemp')/beginDate",xf._g(xf._f('instance',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','beginDate')))),'','');	
xf._b("instance('dTemp')/endDate",xf._g(xf._f('instance',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','endDate')))),'','');	
xf._b("'结束时间数据格式不对'",xf._i("结束时间数据格式不对"));	
xf._b("instance('dTemp')/dayNum",xf._g(xf._f('instance',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','dayNum')))),'','');	
xf._b("data('dTemp')/beginDate",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("data('dTemp')/endDate",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("data('dTemp')/dayNum",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','dayNum')))));	
xf._b("instance('bizData1')/sValidState",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('bizData1')/sLevel",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('bizData1')/version",xf._g(xf._f('instance',xf._i("bizData1")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dTemp')/orgID",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','orgID')))));	
xf._b("'全部'",xf._i("全部"));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("sCode",xf._h(false, xf._k("child",xf._j('','sCode'))));	
xf._b("sLongName",xf._h(false, xf._k("child",xf._j('','sLongName'))));	
xf._b("sFName",xf._h(false, xf._k("child",xf._j('','sFName'))));	
xf._b("sFCode",xf._h(false, xf._k("child",xf._j('','sFCode'))));	
xf._b("sFID",xf._h(false, xf._k("child",xf._j('','sFID'))));	
xf._b("sOrgKindID",xf._h(false, xf._k("child",xf._j('','sOrgKindID'))));	
xf._b("sSequence",xf._h(false, xf._k("child",xf._j('','sSequence'))));	
xf._b("sValidState",xf._h(false, xf._k("child",xf._j('','sValidState'))));	
xf._b("sParent",xf._h(false, xf._k("child",xf._j('','sParent'))));	
xf._b("sLevel",xf._h(false, xf._k("child",xf._j('','sLevel'))));	
xf._b("sPhone",xf._h(false, xf._k("child",xf._j('','sPhone'))));	
xf._b("sFax",xf._h(false, xf._k("child",xf._j('','sFax'))));	
xf._b("sAddress",xf._h(false, xf._k("child",xf._j('','sAddress'))));	
xf._b("sZip",xf._h(false, xf._k("child",xf._j('','sZip'))));	
xf._b("sDescription",xf._h(false, xf._k("child",xf._j('','sDescription'))));	
xf._b("sPersonID",xf._h(false, xf._k("child",xf._j('','sPersonID'))));	
xf._b("sNodeKind",xf._h(false, xf._k("child",xf._j('','sNodeKind'))));	
xf._b("version",xf._h(false, xf._k("child",xf._j('','version'))));	
xf._b("data('dTemp')/query",xf._g(xf._f('data',xf._i("dTemp")),xf._h(false, xf._k("child",xf._j('','query')))));	
xf._b("call('justep.Context.isReadonlyMode')",xf._f('call',xf._i("justep.Context.isReadonlyMode")));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dTemp','mdMain',null,'<rows id="default6"><row id="default7"><cell id="default8"></cell><cell id="default9"></cell><cell id="default10"></cell><cell id="default11"></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('dTemp','beginDate,endDate,query,dayNum,orgID');	
xf._c('xf-bind-0','mdMain',"instance('dTemp')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dTemp')/endDate","xsd:date",null,null,null,null,null,"'结束时间数据格式不对'");	
xf._c('xf-bind-2','mdMain',"instance('dTemp')/dayNum","xsd:integer",null,null,null,null,null,null);	
var xf_action_action4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdMainXBLLoaded(event)}));xf._p(justep('mdMain'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action4,'mdMain', evt,false)});	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mdMainLoad(event)}));xf._p(justep('mdMain'),"onload",null,function(evt) { xforms.run(xf_action_action1,'mdMain', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vFilter');	
xforms.load_parts('vChartZT');	
xforms.load_parts('vChartBT');	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vFilter(){if (justep("vFilter").getAttribute('loaded') && justep("vFilter").getAttribute('loaded') == 'true') return;justep("vFilter").setAttribute('loaded', 'true');	
if(typeof(load_vFilter_html) == 'function')load_vFilter_html();	
xf._d('iptBeginDate','text',xf._q("data('dTemp')/beginDate"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('iptEndDate','text',xf._q("data('dTemp')/endDate"),null,null,null,"yyyy-MM-dd",false,true);	
xf._d('iptDay','text',xf._q("data('dTemp')/dayNum"),"^[0-9]*[1-9][0-9]*$",null,null,null,false,false);	
var xf_model_model1 = new xforms.XFModel('model1',null);	
new xforms.XFExtSelect({id:'treeSelect1',type:'treeselect',defaultLabelRef:xf._q("'全部'"),allSelectedLabelRef:null,ref:xf._q("data('dTemp')/orgID"),labelRef:null,extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'bizData1',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'rowid',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'250',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_866701699',onRowHasChildren:func_259433887,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_trigger_trgQuery=new xforms.XFTrigger('trgQuery',xf._q("data('dTemp')/query"),"/UI/appCommon/images/search.png",null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trgQueryClick(event)}));xf._p(justep('trgQuery'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'trgQuery', evt,false)});	
}	
function load_vFilter_xblinit(){if (justep("vFilter").getAttribute('xblloaded') && justep("vFilter").getAttribute('xblloaded') == 'true') return;justep("vFilter").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('model1').xformsObject.construct_part();	
}	
var bizData1_part_loaded = false;	
function load_bizData1_part(callback){if (bizData1_part_loaded) return;bizData1_part_loaded = true;	
new xforms.XFInstance2('bizData1','model1',null,null,null,null,null,null,'sNodeKind',null,null,'组织机构','whereVersion');	
xf._c('xf-bind-3','model1',"instance('bizData1')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','model1',"instance('bizData1')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','model1',"instance('bizData1')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var bizData1_part_init_loaded = false;	
function load_bizData1_part_init(){if (bizData1_part_init_loaded) return;bizData1_part_init_loaded = true;	
if(xforms.ready)justep('model1').xformsObject.construct_part();}	
function load_vChartZT(){if (justep("vChartZT").getAttribute('loaded') && justep("vChartZT").getAttribute('loaded') == 'true') return;justep("vChartZT").setAttribute('loaded', 'true');	
if(typeof(load_vChartZT_html) == 'function')load_vChartZT_html();	
}	
function load_vChartZT_xblinit(){if (justep("vChartZT").getAttribute('xblloaded') && justep("vChartZT").getAttribute('xblloaded') == 'true') return;justep("vChartZT").setAttribute('xblloaded', 'true');	
}	
function load_vChartBT(){if (justep("vChartBT").getAttribute('loaded') && justep("vChartBT").getAttribute('loaded') == 'true') return;justep("vChartBT").setAttribute('loaded', 'true');	
if(typeof(load_vChartBT_html) == 'function')load_vChartBT_html();	
}	
function load_vChartBT_xblinit(){if (justep("vChartBT").getAttribute('xblloaded') && justep("vChartBT").getAttribute('xblloaded') == 'true') return;justep("vChartBT").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
