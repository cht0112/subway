
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
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

	var ids=[{id:'wMain', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'tbrAssetInM', name:'/UI/system/components/toolbars.xbl.xml#toolbars'},{id:'optNO', name:'xforms:output'},{id:'orgSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSltDept', name:'xforms:treeselect1', children:[{id:'3cb14a8c57ca4af2aa635551aa55ba23', name:'xforms:label'},{id:'99f13cac127047cea90e62d28857bd76', name:'xforms:value'}]}]},{id:'psmSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeSltPsm', name:'xforms:treeselect1', children:[{id:'56f8503cde2847f398e46a5fe308d4d9', name:'xforms:value'},{id:'6feca57604964cc890eac2235cb43b31', name:'xforms:label'}]}]},{id:'iptDate', name:'xforms:input'},{id:'grdsMode', name:'xforms:gridselect1', children:[{id:'2a4363353ce74b4a8ad35ac45bc78a3f', name:'xforms:label'},{id:'3dcf169ba96142718917698881dba9b7', name:'xforms:value'}]},{id:'optState', name:'xforms:output'},{id:'optAmount', name:'xforms:output'},{id:'taRemark', name:'xforms:textarea'},{id:'tbrAssetInD', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'trgdeleteBtn', name:'xforms:trigger', children:[{id:'0ac0f2125dfc408da2837e3a969d8f43', name:'xforms:label'}]},{id:'trgInsertBtn', name:'xforms:trigger', children:[{id:'5a55a77530264a8a98b2156c941a1df9', name:'xforms:label'}]},{id:'trgCheck', name:'xforms:trigger', children:[{id:'dc435016ab6043b08a6176fe6356efd9', name:'xforms:label'}]},{id:'trgIn', name:'xforms:trigger', children:[{id:'4aca745d73a14a0f84cee91bb081c831', name:'xforms:label'}]}]},{id:'grdAssetInD', name:'xforms:grid'},{id:'gsAssetKind', name:'xforms:gridselect1', children:[{id:'9f1e48b3a627494d9949d4c735377d89', name:'xforms:label'},{id:'1a4126284b0a44ef80e4487bd8a82190', name:'xforms:value'}]},{id:'gsAssetUnit', name:'xforms:gridselect1', children:[{id:'2b480587e20d4a4ab12dc61ef38fdb30', name:'xforms:label'},{id:'456a65dd30a746a194864a433d2166b4', name:'xforms:value'}]},{id:'dlgBuyApply', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'dlgInDate', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'dlgInCheck', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'dlgInCheckInfo', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'optNO');xf._a(null,'treeSltDept');xf._a('treeSltDept','3cb14a8c57ca4af2aa635551aa55ba23');xf._a('treeSltDept','xf-itemset-0');xf._a(null,'treeSltPsm');xf._a('treeSltPsm','6feca57604964cc890eac2235cb43b31');xf._a('treeSltPsm','xf-itemset-1');xf._a(null,'iptDate');xf._a(null,'grdsMode');xf._a('grdsMode','2a4363353ce74b4a8ad35ac45bc78a3f');xf._a('grdsMode','xf-itemset-2');xf._a(null,'optState');xf._a(null,'optAmount');xf._a(null,'taRemark');xf._a(null,'trgdeleteBtn');xf._a('trgdeleteBtn','0ac0f2125dfc408da2837e3a969d8f43');xf._a(null,'trgInsertBtn');xf._a('trgInsertBtn','5a55a77530264a8a98b2156c941a1df9');xf._a(null,'trgCheck');xf._a('trgCheck','dc435016ab6043b08a6176fe6356efd9');xf._a(null,'trgIn');xf._a('trgIn','4aca745d73a14a0f84cee91bb081c831');xf._a(null,'grdAssetInD');xf._a(null,'gsAssetKind');xf._a('gsAssetKind','9f1e48b3a627494d9949d4c735377d89');xf._a('gsAssetKind','xf-itemset-3');xf._a(null,'gsAssetUnit');xf._a('gsAssetUnit','2b480587e20d4a4ab12dc61ef38fdb30');xf._a('gsAssetUnit','xf-itemset-4');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dAssetInM')/version",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetInM')/fDate",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fDate')))));	
xf._b("instance('dAssetInM')/fAmount",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fAmount')))));	
xf._b("instance('dAssetInM')/fState",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fState')))));	
xf._b("instance('dAssetInM')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetInM')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetInM')/fExtendDate1",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate1')))));	
xf._b("instance('dAssetInM')/fExtendDate2",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate2')))));	
xf._b("instance('dAssetInM')/fExtendDate3",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate3')))));	
xf._b("instance('dAssetInM')/fExtendDate4",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate4')))));	
xf._b("instance('dAssetInM')/fExtendDate5",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendDate5')))));	
xf._b("instance('dAssetInM')/fExtendNum1",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum1')))));	
xf._b("instance('dAssetInM')/fExtendNum2",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum2')))));	
xf._b("instance('dAssetInM')/fExtendNum3",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum3')))));	
xf._b("instance('dAssetInM')/fExtendNum4",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum4')))));	
xf._b("instance('dAssetInM')/fExtendNum5",xf._g(xf._f('instance',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fExtendNum5')))));	
xf._b("instance('dAssetInD')/version",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetInD')/fAmount",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fAmount')))));	
xf._b("instance('dAssetInD')/fIsCheck",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fIsCheck')))));	
xf._b("instance('dAssetInD')/fIsIn",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fIsIn')))));	
xf._b("instance('dAssetInD')/fDate",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fDate')))));	
xf._b("instance('dAssetInD')/fChecked",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fChecked')))));	
xf._b("instance('dAssetInD')/fSHKSSJ",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fSHKSSJ')))));	
xf._b("instance('dAssetInD')/fSHJSSJ",xf._g(xf._f('instance',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fSHJSSJ')))));	
xf._b("instance('dMode')/version",xf._g(xf._f('instance',xf._i("dMode")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dMode')/fLevel",xf._g(xf._f('instance',xf._i("dMode")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dMode')/fCreateTime",xf._g(xf._f('instance',xf._i("dMode")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dMode')/fUpdateTime",xf._g(xf._f('instance',xf._i("dMode")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetKind')/version",xf._g(xf._f('instance',xf._i("dAssetKind")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetKind')/fLevel",xf._g(xf._f('instance',xf._i("dAssetKind")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dAssetKind')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetKind")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetKind')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetKind")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("instance('dAssetUnit')/version",xf._g(xf._f('instance',xf._i("dAssetUnit")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dAssetUnit')/fLevel",xf._g(xf._f('instance',xf._i("dAssetUnit")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dAssetUnit')/fCreateTime",xf._g(xf._f('instance',xf._i("dAssetUnit")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dAssetUnit')/fUpdateTime",xf._g(xf._f('instance',xf._i("dAssetUnit")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("data('dAssetInM')/fNO",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fNO')))));	
xf._b("instance('dOrg')/sValidState",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrg')/sLevel",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrg')/version",xf._g(xf._f('instance',xf._i("dOrg")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dAssetInM')/fDutyDeptID",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fDutyDeptID')))));	
xf._b("data('dAssetInM')/fDutyDeptName",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fDutyDeptName')))));	
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
xf._b("instance('dPsm')/sValidState",xf._g(xf._f('instance',xf._i("dPsm")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dPsm')/sLevel",xf._g(xf._f('instance',xf._i("dPsm")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dPsm')/version",xf._g(xf._f('instance',xf._i("dPsm")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dAssetInM')/fDutyPsnID",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fDutyPsnID')))));	
xf._b("data('dAssetInM')/fDutyPsnName",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fDutyPsnName')))));	
xf._b("data('dAssetInM')/fDate",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fDate')))));	
xf._b("data('dAssetInM')/fModeID",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fModeID')))));	
xf._b("data('dAssetInM')/fMode",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fMode')))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("OA_AS_InMode",xf._h(false, xf._k("child",xf._j('','OA_AS_InMode'))));	
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
xf._b("data('dAssetInM')/fStateName",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fStateName')))));	
xf._b("data('dAssetInM')/fAmount",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fAmount')))));	
xf._b("data('dAssetInM')/fRemark",xf._g(xf._f('data',xf._i("dAssetInM")),xf._h(false, xf._k("child",xf._j('','fRemark')))));	
xf._b("recCB",xf._h(false, xf._k("child",xf._j('','recCB'))));	
xf._b("序号",xf._h(false, xf._k("child",xf._j('','序号'))));	
xf._b("fKind",xf._h(false, xf._k("child",xf._j('','fKind'))));	
xf._b("fSpecType",xf._h(false, xf._k("child",xf._j('','fSpecType'))));	
xf._b("fUnit",xf._h(false, xf._k("child",xf._j('','fUnit'))));	
xf._b("fAmount",xf._h(false, xf._k("child",xf._j('','fAmount'))));	
xf._b("fDate",xf._h(false, xf._k("child",xf._j('','fDate'))));	
xf._b("fIsInName",xf._h(false, xf._k("child",xf._j('','fIsInName'))));	
xf._b("fIsCheckName",xf._h(false, xf._k("child",xf._j('','fIsCheckName'))));	
xf._b("fBuyApplyNO",xf._h(false, xf._k("child",xf._j('','fBuyApplyNO'))));	
xf._b("fCheckNO",xf._h(false, xf._k("child",xf._j('','fCheckNO'))));	
xf._b("fServicTag",xf._h(false, xf._k("child",xf._j('','fServicTag'))));	
xf._b("fESCode",xf._h(false, xf._k("child",xf._j('','fESCode'))));	
xf._b("fSHKSSJ",xf._h(false, xf._k("child",xf._j('','fSHKSSJ'))));	
xf._b("fSHJSSJ",xf._h(false, xf._k("child",xf._j('','fSHJSSJ'))));	
xf._b("fRemark",xf._h(false, xf._k("child",xf._j('','fRemark'))));	
xf._b("fMasterID",xf._h(false, xf._k("child",xf._j('','fMasterID'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('dAssetInD')/fKindID",xf._g(xf._f('data',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fKindID')))));	
xf._b("data('dAssetInD')/fKind",xf._g(xf._f('data',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fKind')))));	
xf._b("OA_AS_Kind",xf._h(false, xf._k("child",xf._j('','OA_AS_Kind'))));	
xf._b("lINKCODE",xf._h(false, xf._k("child",xf._j('','lINKCODE'))));	
xf._b("data('dAssetInD')/fUnitID",xf._g(xf._f('data',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fUnitID')))));	
xf._b("data('dAssetInD')/fUnit",xf._g(xf._f('data',xf._i("dAssetInD")),xf._h(false, xf._k("child",xf._j('','fUnit')))));	
xf._b("OA_AS_Unit",xf._h(false, xf._k("child",xf._j('','OA_AS_Unit'))));	
xf._b("not(call('justep.XData.canDo','dAssetInD','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dAssetInD"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dAssetInM','Insert'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dAssetInM"),xf._i("Insert"))));	
xf._b("not(call('justep.XData.canDo','dAssetInM','Save'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dAssetInM"),xf._i("Save"))));	
xf._b("not(call('justep.XData.canDo','dAssetInM','Delete'))",xf._f('not',xf._f('call',xf._i("justep.XData.canDo"),xf._i("dAssetInM"),xf._i("Delete"))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('ro', 'null');xforms.Schema.registerPrefix('checkbox', 'null');xforms.Schema.registerPrefix('select', 'null');xforms.Schema.registerPrefix('ed', 'null');xforms.Schema.registerPrefix('html', 'null');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dAssetInD','mdMain',null,null,null,'fMasterID','dAssetInM',null,null,null,'recCB',null,'whereVersion');	
xf._c('xf-bind-16','mdMain',"instance('dAssetInD')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dAssetInD')/fAmount","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-18','mdMain',"instance('dAssetInD')/fIsCheck","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dAssetInD')/fIsIn","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dAssetInD')/fDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dAssetInD')/fChecked","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-22','mdMain',"instance('dAssetInD')/fSHKSSJ","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-23','mdMain',"instance('dAssetInD')/fSHJSSJ","xsd:date",null,null,null,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mdMainxforms_model_construct_done(event)}));xf._p(justep('mdMain'),"xforms-model-construct-done",null,function(evt) { xforms.run(xf_action_action2,'mdMain', evt,false)});	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dAssetInM_part_loaded = false;	
function load_dAssetInM_part(callback){if (dAssetInM_part_loaded) return;dAssetInM_part_loaded = true;	
new xforms.XFInstance2('dAssetInM','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dAssetInM',null);	
xf._c('xf-bind-0','mdMain',"instance('dAssetInM')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-1','mdMain',"instance('dAssetInM')/fDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-2','mdMain',"instance('dAssetInM')/fAmount","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dAssetInM')/fState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dAssetInM')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dAssetInM')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dAssetInM')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dAssetInM')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dAssetInM')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dAssetInM')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dAssetInM')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dAssetInM')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dAssetInM')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dAssetInM')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dAssetInM')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dAssetInM')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dAssetInM_part_init_loaded = false;	
function load_dAssetInM_part_init(){if (dAssetInM_part_init_loaded) return;dAssetInM_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var dMode_part_loaded = false;	
function load_dMode_part(callback){if (dMode_part_loaded) return;dMode_part_loaded = true;	
new xforms.XFInstance2('dMode','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dMode',null);	
xf._c('xf-bind-24','mdMain',"instance('dMode')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-25','mdMain',"instance('dMode')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','mdMain',"instance('dMode')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-27','mdMain',"instance('dMode')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dMode_part_init_loaded = false;	
function load_dMode_part_init(){if (dMode_part_init_loaded) return;dMode_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var dAssetKind_part_loaded = false;	
function load_dAssetKind_part(callback){if (dAssetKind_part_loaded) return;dAssetKind_part_loaded = true;	
new xforms.XFInstance2('dAssetKind','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dAssetKind',null);	
xf._c('xf-bind-28','mdMain',"instance('dAssetKind')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-29','mdMain',"instance('dAssetKind')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-30','mdMain',"instance('dAssetKind')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-31','mdMain',"instance('dAssetKind')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dAssetKind_part_init_loaded = false;	
function load_dAssetKind_part_init(){if (dAssetKind_part_init_loaded) return;dAssetKind_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
var dAssetUnit_part_loaded = false;	
function load_dAssetUnit_part(callback){if (dAssetUnit_part_loaded) return;dAssetUnit_part_loaded = true;	
new xforms.XFInstance2('dAssetUnit','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dAssetUnit',null);	
xf._c('xf-bind-32','mdMain',"instance('dAssetUnit')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-33','mdMain',"instance('dAssetUnit')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-34','mdMain',"instance('dAssetUnit')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-35','mdMain',"instance('dAssetUnit')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
if(callback)callback();}	
var dAssetUnit_part_init_loaded = false;	
function load_dAssetUnit_part_init(){if (dAssetUnit_part_init_loaded) return;dAssetUnit_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
var xf_output_optNO=new xforms.XFOutput('optNO',xf._q("data('dAssetInM')/fNO"),null,null);	
var xf_model_mdOrg = new xforms.XFModel('mdOrg',null);	
new xforms.XFExtSelect({id:'treeSltDept',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dAssetInM')/fDutyDeptID"),labelRef:xf._q("data('dAssetInM')/fDutyDeptName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dOrg',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'rowid',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_1987499437',onRowHasChildren:func_1175224623,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_mdPsm = new xforms.XFModel('mdPsm',null);	
new xforms.XFExtSelect({id:'treeSltPsm',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dAssetInM')/fDutyPsnID"),labelRef:xf._q("data('dAssetInM')/fDutyPsnName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dPsm',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'sPersonID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_260451865',onRowHasChildren:func_190598585,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'treeSltPsmDropdown',onCloseup:'assetInDetail.treeSltPsmCloseup'});	
xf._d('iptDate','text',xf._q("data('dAssetInM')/fDate"),null,null,null,"yyyy-MM-dd",false,false);	
new xforms.XFExtSelect({id:'grdsMode',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dAssetInM')/fModeID"),labelRef:xf._q("data('dAssetInM')/fMode"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dMode',columns:'fName,OA_AS_InMode,__c_,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OA_AS_InMode,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',valueColumn:'OA_AS_InMode',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_output_optState=new xforms.XFOutput('optState',xf._q("data('dAssetInM')/fStateName"),null,null);	
var xf_output_optAmount=new xforms.XFOutput('optAmount',xf._q("data('dAssetInM')/fAmount"),null,'format-number(\'0,000.00\')');	
xf._d('taRemark','textarea',xf._q("data('dAssetInM')/fRemark"),null,null,null,null,false,false);	
var xf_trigger_trgdeleteBtn=new xforms.XFTrigger('trgdeleteBtn',null,"/UI/appCommon/images/remove.gif","/UI/appCommon/images/un_remove.gif",false,false,false,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){assetDelete(event)}));xf._p(justep('trgdeleteBtn'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_1,'trgdeleteBtn', evt,false)});	
var xf_trigger_trgInsertBtn=new xforms.XFTrigger('trgInsertBtn',null,"/UI/appCommon/images/search.png","/UI/appCommon/images/un_search.png",false,false,false,null,null,null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){trgInsertBtnDOMActivate(event)}));xf._p(justep('trgInsertBtn'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_2,'trgInsertBtn', evt,false)});	
var xf_trigger_trgCheck=new xforms.XFTrigger('trgCheck',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){assetInCheck(event)}));xf._p(justep('trgCheck'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'trgCheck', evt,false)});	
var xf_trigger_trgIn=new xforms.XFTrigger('trgIn',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){assetIn(event)}));xf._p(justep('trgIn'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'trgIn', evt,false)});	
new xforms.XFGrid({id:'grdAssetInD',instance:'dAssetInD',systemColumnsPro:'version,fKindID,fUnitID,fBuyApplyID,fBuyDetailID,fIsCheck,fCheckID,fIsIn,fChecked',onInit:null,type:'grid',smartRender:null,delay:false,ids:'recCB,序号,fKind,fCode,fName,fSpecType,fUnit,fAmount,fDate,fIsInName,fIsCheckName,fBuyApplyNO,fCheckNO,fServicTag,fESCode,fSHKSSJ,fSHJSSJ,fRemark,fMasterID,space-column',headNames:'#master_checkbox,序号,资产类别,资产编号,资产名称,规格型号,单位,金额(元),入库日期,入库状态,验收状态,采购单,验收单,ServicTag,ExpressServiceCode,服务开始时间,服务结束时间,备注,fMasterID,&nbsp;',widths:'30,30,80,120,120,80,35,100,70,55,55,120,120,100,100,100,100,150,*,*',types:'checkbox,cntr,select,ed,ed,ed,select,ed,ro,ro,ro,html,html,ed,ed,ed,ed,ed,ro,ro',hiddenColumns:'fServicTag,fESCode,fSHKSSJ,fSHJSSJ,fMasterID',aligns:'center,center,,,,,center,right,,,,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:null,contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'hide-column,save-layout,group-column,adjust-column',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColEditor(null,'fKind','gsAssetKind');this.grid.bindColEditor(null,'fUnit','gsAssetUnit');this.grid.bindColFormat(null,'fAmount','0,000.00');this.grid.bindColHTMLCallback(null,'fBuyApplyNO','grdAssetInD_fBuyApplyNORender');this.grid.bindColHTMLCallback(null,'fCheckNO','grdAssetInD_fCheckNORender');}});	
new xforms.XFExtSelect({id:'gsAssetKind',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dAssetInD')/fKindID"),labelRef:xf._q("data('dAssetInD')/fKind"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dAssetKind',columns:'fName,OA_AS_Kind,__c_,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OA_AS_Kind,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime,lINKCODE',valueColumn:'OA_AS_Kind',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'100',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:'gsAssetKindCloseup'});	
new xforms.XFExtSelect({id:'gsAssetUnit',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dAssetInD')/fUnitID"),labelRef:xf._q("data('dAssetInD')/fUnit"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dAssetUnit',columns:'fName,OA_AS_Unit,__c_,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'OA_AS_Unit,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',valueColumn:'OA_AS_Unit',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'100',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('mdOrg').xformsObject.construct_part();	
if(xforms.ready)justep('mdPsm').xformsObject.construct_part();	
}	
var dOrg_part_loaded = false;	
function load_dOrg_part(callback){if (dOrg_part_loaded) return;dOrg_part_loaded = true;	
new xforms.XFInstance2('dOrg','mdOrg',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-36','mdOrg',"instance('dOrg')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','mdOrg',"instance('dOrg')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-38','mdOrg',"instance('dOrg')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrg_part_init_loaded = false;	
function load_dOrg_part_init(){if (dOrg_part_init_loaded) return;dOrg_part_init_loaded = true;	
if(xforms.ready)justep('mdOrg').xformsObject.construct_part();}	
var dPsm_part_loaded = false;	
function load_dPsm_part(callback){if (dPsm_part_loaded) return;dPsm_part_loaded = true;	
new xforms.XFInstance2('dPsm','mdPsm',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-39','mdPsm',"instance('dPsm')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-40','mdPsm',"instance('dPsm')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-41','mdPsm',"instance('dPsm')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dPsm_part_init_loaded = false;	
function load_dPsm_part_init(){if (dPsm_part_init_loaded) return;dPsm_part_init_loaded = true;	
if(xforms.ready)justep('mdPsm').xformsObject.construct_part();}	
var __actions__ = {	
};	
