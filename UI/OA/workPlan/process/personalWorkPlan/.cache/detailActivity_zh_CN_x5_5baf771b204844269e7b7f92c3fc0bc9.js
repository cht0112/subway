
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/orgSelect.xbl.xml#orgSelect"] = _xbl_JSClassDefine_orgSelect;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

_xbl_JSClassDefine_window.prototype.ClassName='_xbl_JSClassDefine_window';
_xbl_JSClassDefine_window.prototype.__code__={v:{name:'_xbl_JSClassDefine_window',key:'d20a9933d680b2ccfc15d4808147f45e',time:1525315562},m:'adedbfb8e7b8b1b6d869b1fd110aae95'};
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
				},
				"getData" : function(){
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
_xbl_JSClassDefine_orgSelect.prototype.__code__={v:{name:'_xbl_JSClassDefine_orgSelect',key:'d20a9933d680b2ccfc15d4808147f45e',time:1525315562},m:'1417eb7f666c19423ff45c9f7fdf5d04'};
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
_xbl_JSClassDefine_toolbars.prototype.__code__={v:{name:'_xbl_JSClassDefine_toolbars',key:'d20a9933d680b2ccfc15d4808147f45e',time:1525315562},m:'27c915b238b84b66d477fd88a75af8b2'};
	var ids=[{id:'d2cd58ef79c74ba69c16c6e234cd3612', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'toolbars1', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'fPlanYear', name:'xforms:gridselect1', children:[{id:'7d30c0791bd6482f8cd6017382ebf06a', name:'xforms:label'},{id:'53de378dbbc24ce0ac74c3b97c08f8eb', name:'xforms:value'}]},{id:'fPlanMonth', name:'xforms:gridselect1', children:[{id:'e6e1f5b4dd6f4bc081926a2bc5d9dfe3', name:'xforms:label'},{id:'c538462f2b2348d6a3fc2c3d417941aa', name:'xforms:value'}]},{id:'fPlanWeek', name:'xforms:gridselect1', children:[{id:'1b0bd0b085c346f9a376ed6628946dca', name:'xforms:label'},{id:'cd08bfda63b8491e804bc6d7817dc381', name:'xforms:value'}]},{id:'fCBBM', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSelect1', name:'xforms:treeselect1', children:[{id:'ec61962af5104613980dfde043927afe', name:'xforms:label'},{id:'f6254029c4f04ab3881f06c9f10ac6d8', name:'xforms:value'}]}]},{id:'fCBR', name:'xforms:output'},{id:'fCreateTime', name:'xforms:input'},{id:'tbsDetail', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'grdDetail', name:'xforms:grid'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
justep.XBLObject.code='d20a9933d680b2ccfc15d4808147f45e';
xforms.Core.fileName='form.js';	
xf._a(null,'fPlanYear');xf._a('fPlanYear','7d30c0791bd6482f8cd6017382ebf06a');xf._a('fPlanYear','xf-itemset-0');xf._a(null,'fPlanMonth');xf._a('fPlanMonth','e6e1f5b4dd6f4bc081926a2bc5d9dfe3');xf._a('fPlanMonth','xf-itemset-1');xf._a(null,'fPlanWeek');xf._a('fPlanWeek','1b0bd0b085c346f9a376ed6628946dca');xf._a('fPlanWeek','xf-itemset-2');xf._a(null,'treeSelect1');xf._a('treeSelect1','ec61962af5104613980dfde043927afe');xf._a('treeSelect1','xf-itemset-3');xf._a(null,'fCBR');xf._a(null,'fCreateTime');xf._a(null,'grdDetail');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dataMain')",xf._f('instance',xf._i("dataMain")));	
xf._b("(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')",xf._l(xf._f('call',xf._i("justep.Context.getRequestParameter"),xf._i("activity-pattern")), '=',xf._i("detail")));	
xf._b("instance('dataMain')/fGZJHLX",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fGZJHLX')))));	
xf._b("instance('dataMain')/fPlanYear",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanYear')))));	
xf._b("true()",xf._f('true'));	
xf._b("'年度不能为空!'",xf._i("年度不能为空!"));	
xf._b("instance('dataMain')/fJHZT",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fJHZT')))));	
xf._b("'计划主题不能为空！'",xf._i("计划主题不能为空！"));	
xf._b("instance('dataMain')/version",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dataMain')/fJHKSRQ",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fJHKSRQ')))));	
xf._b("instance('dataMain')/fJHJSRQ",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fJHJSRQ')))));	
xf._b("instance('dataMain')/fApplyDate",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fApplyDate')))));	
xf._b("instance('dataMain')/fCreateTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dataMain')/fUpdateTime",xf._g(xf._f('instance',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dGZNR')/fWorkContent",xf._g(xf._f('instance',xf._i("dGZNR")),xf._h(false, xf._k("child",xf._j('','fWorkContent')))));	
xf._b("'工作内容必填!'",xf._i("工作内容必填!"));	
xf._b("instance('dGZNR')/version",xf._g(xf._f('instance',xf._i("dGZNR")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dGZNR')/fPlanTime",xf._g(xf._f('instance',xf._i("dGZNR")),xf._h(false, xf._k("child",xf._j('','fPlanTime')))));	
xf._b("data('dataMain')/fPlanYear",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanYear')))));	
xf._b("label",xf._h(false, xf._k("child",xf._j('','label'))));	
xf._b("value",xf._h(false, xf._k("child",xf._j('','value'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
xf._b("data('dataMain')/fPlanMonth",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanMonth')))));	
xf._b("data('dataMain')/fPlanWeek",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fPlanWeek')))));	
xf._b("instance('dOrgDept')/sValidState",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrgDept')/sLevel",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrgDept')/version",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dataMain')/fCreateDeptID",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateDeptID')))));	
xf._b("data('dataMain')/fCreateDeptName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateDeptName')))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("rowid",xf._h(false, xf._k("child",xf._j('','rowid'))));	
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
xf._b("data('dataMain')/fCreatePsnName",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreatePsnName')))));	
xf._b("data('dataMain')/fCreateTime",xf._g(xf._f('data',xf._i("dataMain")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("序号",xf._h(false, xf._k("child",xf._j('','序号'))));	
xf._b("fWorkContent",xf._h(false, xf._k("child",xf._j('','fWorkContent'))));	
xf._b("fFGLD",xf._h(false, xf._k("child",xf._j('','fFGLD'))));	
xf._b("fZRC",xf._h(false, xf._k("child",xf._j('','fZRC'))));	
xf._b("fZRR",xf._h(false, xf._k("child",xf._j('','fZRR'))));	
xf._b("fPlanTime",xf._h(false, xf._k("child",xf._j('','fPlanTime'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("fGZJHID",xf._h(false, xf._k("child",xf._j('','fGZJHID'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("not(call('justep.XData.canDo','dGZNR','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dGZNR"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dGZNR','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dGZNR"),xf._i("Delete"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dataMain','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dataMain"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('ed', 'null');var xf_model_mdDefault = new xforms.XFModel('mdDefault',null);	
new xforms.XFInstance2('dGZNR','mdDefault',null,null,null,'fGZJHID','dataMain',null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-10','mdDefault',"instance('dGZNR')/fWorkContent",null,null,"true()",null,null,null,"'工作内容必填!'");	
xf._c('xf-bind-11','mdDefault',"instance('dGZNR')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdDefault',"instance('dGZNR')/fPlanTime","xsd:date",null,null,null,null,null,null);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms_model_construct_done(event)}));xf._p(justep('mdDefault'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_xf_action_0,'mdDefault', evt,false)});	
new xforms.XFInstance2('yearData','mdDefault',null,'<rows><row><cell>2010</cell><cell>2010</cell></row><row><cell>2011</cell><cell>2011</cell></row><row><cell>2012</cell><cell>2012</cell></row><row><cell>2013</cell><cell>2013</cell></row><row><cell>2014</cell><cell>2014</cell></row><row><cell>2015</cell><cell>2015</cell></row><row><cell>2016</cell><cell>2016</cell></row><row><cell>2017</cell><cell>2017</cell></row><row><cell>2018</cell><cell>2018</cell></row><row><cell>2019</cell><cell>2019</cell></row><row><cell>2020</cell><cell>2020</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('yearData','label,value');	
new xforms.XFInstance2('monthData','mdDefault',null,'<rows><row><cell>1</cell><cell>1</cell></row><row><cell>2</cell><cell>2</cell></row><row><cell>3</cell><cell>3</cell></row><row><cell>4</cell><cell>4</cell></row><row><cell>5</cell><cell>5</cell></row><row><cell>6</cell><cell>6</cell></row><row><cell>7</cell><cell>7</cell></row><row><cell>8</cell><cell>8</cell></row><row><cell>9</cell><cell>9</cell></row><row><cell>10</cell><cell>10</cell></row><row><cell>11</cell><cell>11</cell></row><row><cell>12</cell><cell>12</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('monthData','label,value');	
new xforms.XFInstance2('weekData','mdDefault',null,'<rows><row><cell>第一周</cell><cell>第一周</cell></row><row><cell>第二周</cell><cell>第二周</cell></row><row><cell>第三周</cell><cell>第三周</cell></row><row><cell>第四周</cell><cell>第四周</cell></row><row><cell>第五周</cell><cell>第五周</cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('weekData','label,value');	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){detailActivity.mdDefaultXBLLoaded(event)}));xf._p(justep('mdDefault'),"xbl-loaded",null,function(evt) { xforms.run(xf_action_action2,'mdDefault', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dataMain_part_loaded = false;	
function load_dataMain_part(callback){if (dataMain_part_loaded) return;dataMain_part_loaded = true;	
new xforms.XFInstance2('dataMain','mdDefault',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dataMain',null);	
xf._c('xf-bind-0','mdDefault',"instance('dataMain')",null,"(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')",null,null,null,null,null);	
xf._c('xf-bind-1','mdDefault',"instance('dataMain')/fGZJHLX",null,null,null,null,null,null,null);	
xf._c('xf-bind-2','mdDefault',"instance('dataMain')/fPlanYear",null,null,"true()",null,null,null,"'年度不能为空!'");	
xf._c('xf-bind-3','mdDefault',"instance('dataMain')/fJHZT",null,null,"true()",null,null,null,"'计划主题不能为空！'");	
xf._c('xf-bind-4','mdDefault',"instance('dataMain')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdDefault',"instance('dataMain')/fJHKSRQ","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdDefault',"instance('dataMain')/fJHJSRQ","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdDefault',"instance('dataMain')/fApplyDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdDefault',"instance('dataMain')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdDefault',"instance('dataMain')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dataMain_part_init_loaded = false;	
function load_dataMain_part_init(){if (dataMain_part_init_loaded) return;dataMain_part_init_loaded = true;	
if(xforms.ready)justep('mdDefault').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vDetail');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vDetail(){if (justep("vDetail").getAttribute('loaded') && justep("vDetail").getAttribute('loaded') == 'true') return;justep("vDetail").setAttribute('loaded', 'true');	
if(typeof(load_vDetail_html) == 'function')load_vDetail_html();	
new xforms.XFExtSelect({id:'fPlanYear',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fPlanYear"),labelRef:xf._q("data('dataMain')/fPlanYear"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'yearData',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"100,#,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'fPlanMonth',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fPlanMonth"),labelRef:xf._q("data('dataMain')/fPlanMonth"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'monthData',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"100,#,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
new xforms.XFExtSelect({id:'fPlanWeek',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fPlanWeek"),labelRef:xf._q("data('dataMain')/fPlanWeek"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'weekData',columns:'label,value,__c_',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'value',valueColumn:'value',labelColumn:'label',extColumn:null,labels:',,',aligns:',,',types:'ro,ro,ro',widths:{widths:"100,#,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_model2 = new xforms.XFModel('model2',null);	
new xforms.XFExtSelect({id:'treeSelect1',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dataMain')/fCreateDeptID"),labelRef:xf._q("data('dataMain')/fCreateDeptName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dOrgDept',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'rowid',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_945863193',onRowHasChildren:func_852262957,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_fCBR=new xforms.XFOutput('fCBR',xf._q("data('dataMain')/fCreatePsnName"),null,null);	
xf._d('fCreateTime','text',xf._q("data('dataMain')/fCreateTime"),null,null,null,"format-dateTime('yyyy-MM-dd')",false,false);	
xforms.load_parts('vTbrGZNR');	
xforms.load_parts('vgrdGZNR');	
}	
function load_vDetail_xblinit(){if (justep("vDetail").getAttribute('xblloaded') && justep("vDetail").getAttribute('xblloaded') == 'true') return;justep("vDetail").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('model2').xformsObject.construct_part();	
}	
var dOrgDept_part_loaded = false;	
function load_dOrgDept_part(callback){if (dOrgDept_part_loaded) return;dOrgDept_part_loaded = true;	
new xforms.XFInstance2('dOrgDept','model2',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-13','model2',"instance('dOrgDept')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-14','model2',"instance('dOrgDept')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-15','model2',"instance('dOrgDept')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrgDept_part_init_loaded = false;	
function load_dOrgDept_part_init(){if (dOrgDept_part_init_loaded) return;dOrgDept_part_init_loaded = true;	
if(xforms.ready)justep('model2').xformsObject.construct_part();}	
function load_vTbrGZNR(){if (justep("vTbrGZNR").getAttribute('loaded') && justep("vTbrGZNR").getAttribute('loaded') == 'true') return;justep("vTbrGZNR").setAttribute('loaded', 'true');	
if(typeof(load_vTbrGZNR_html) == 'function')load_vTbrGZNR_html();	
}	
function load_vTbrGZNR_xblinit(){if (justep("vTbrGZNR").getAttribute('xblloaded') && justep("vTbrGZNR").getAttribute('xblloaded') == 'true') return;justep("vTbrGZNR").setAttribute('xblloaded', 'true');	
}	
function load_vgrdGZNR(){if (justep("vgrdGZNR").getAttribute('loaded') && justep("vgrdGZNR").getAttribute('loaded') == 'true') return;justep("vgrdGZNR").setAttribute('loaded', 'true');	
if(typeof(load_vgrdGZNR_html) == 'function')load_vgrdGZNR_html();	
new xforms.XFGrid({id:'grdDetail',instance:'dGZNR',systemColumnsPro:'version,fSponsor,fChargePerson,fChargePersonName,fParticipantsID,fParticipants,fAddress',onInit:null,type:'grid',smartRender:null,delay:false,ids:'序号,fWorkContent,fFGLD,fZRC,fZRR,fPlanTime,fRemark,fGZJHID,space-column',headNames:'序号,工作项目,分管领导,责任处,责任人,完成时限,备注,fGZJHID,&nbsp;',widths:'30,320,100,100,100,120,100,*,*',types:'cntr,ed,ed,ed,ed,ed,ed,ro,ro',hiddenColumns:'fGZJHID',aligns:'center,,,,,center,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColFormat(null,'fPlanTime','yyyy-MM-dd');}});	
}	
function load_vgrdGZNR_xblinit(){if (justep("vgrdGZNR").getAttribute('xblloaded') && justep("vgrdGZNR").getAttribute('xblloaded') == 'true') return;justep("vgrdGZNR").setAttribute('xblloaded', 'true');	
}	
var __actions__ = {	
};	
