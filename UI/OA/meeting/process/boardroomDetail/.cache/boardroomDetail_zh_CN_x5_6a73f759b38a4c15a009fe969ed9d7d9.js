
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/attachmentImage.xbl.xml#attachmentImage"] = _xbl_JSClassDefine_attachmentImage;
justep.XBLObject._classes["/UI/system/components/orgSelect.xbl.xml#orgSelect"] = _xbl_JSClassDefine_orgSelect;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

function _xbl_JSClassDefine_attachmentImage(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_attachmentImage.prototype = justep.Object.extend(new justep.XBLObject(), eval({
		    "initXBL" : function() {
				this._id = this.domNode.id;
				justep.Object.extend(this, new justep.attachmentImage());
				this.runtime = this.domNode.getAttribute("runtime")==null||this.domNode.getAttribute("runtime")=='' ?'flash':this.domNode.getAttribute("runtime");
				this.imgID = this._id+"_image";
				this.limitSize = this.domNode.getAttribute("limit-size");
				this.stretch = "false"==this.domNode.getAttribute("stretch")? false: true;
				this.rootPath = this.domNode.getAttribute("root-path");
				if(!this.rootPath){
					this.rootPath = "/defaultDocNameSpace";
				}
				this.subPath = this.domNode.getAttribute("sub-path")==null? '' : this.domNode.getAttribute("sub-path");
				this.relationXPath = this.domNode.getAttribute("ref");
				this.disabled = this.domNode.getAttribute('disabled');
				this.ownerData = this.relationXPath.match(/data\('(\S*)\'\)/i)[1];
				this.relation = this.relationXPath.match(/data\('\S*\'\)\/(\S*)/)[1];
                this.ctrl= document.getElementById("ctrl_"+this._id);
				this.editButton = document.getElementById("btn_edit_" + this._id);
				this.deleteButton = document.getElementById("btn_del_" + this._id);	
				this.extensionFilter = this.domNode.getAttribute("extension-filter");
				this.process = justep.Context.getCurrentProcess();
				this.activity = justep.Context.getCurrentActivity();
				this.keyId = this.domNode.getAttribute("keyId");
                dhtmlxEventable(this);
                this.addEvents();
                this.refreshButton();
                this.setAutoLoad("false" == this.domNode.getAttribute("auto-load")? false: true);
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
					this.selectableOrgTypes = this.selectableOrgTypes?this.selectableOrgTypes.split(','):null;	this.showOrgTypes = this.domNode.getAttribute('show-org-types');
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

	var ids=[{id:'a56c455a2c0442a7bd62b08e0aadd703', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'fCode', name:'xforms:input'},{id:'fName', name:'xforms:input'},{id:'BizFile', name:'/UI/system/components/attachmentImage.xbl.xml#attachmentImage'},{id:'gridSelect1', name:'xforms:gridselect1', children:[{id:'900b38556ca841778d703419b942a51d', name:'xforms:label'},{id:'cf71b20638e54172bfc48e8c75151596', name:'xforms:value'}]},{id:'fHoldNum', name:'xforms:input'},{id:'fUse', name:'xforms:input'},{id:'fAddress', name:'xforms:input'},{id:'fFloor', name:'xforms:input'},{id:'fBaseConfig', name:'xforms:input'},{id:'fEquipment', name:'xforms:input'},{id:'fDescription', name:'xforms:textarea'},{id:'orgDeptSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treeDeptSelect', name:'xforms:treeselect1', children:[{id:'f1c8ac1aaa8e40359d17ebb2e27b69e5', name:'xforms:label'},{id:'b0e52d83b7e5403bbb7e6420c8665c3a', name:'xforms:value'}]}]},{id:'orgPsmSelect', name:'/UI/system/components/orgSelect.xbl.xml#orgSelect', children:[{id:'treePsmSelect', name:'xforms:treeselect1', children:[{id:'default9', name:'xforms:value'},{id:'default10', name:'xforms:label'}]}]},{id:'triRefresh', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'triEnsure', name:'xforms:trigger', children:[{id:'xuiLabel3', name:'xforms:label'}]},{id:'triCancel', name:'xforms:trigger', children:[{id:'xuiLabel4', name:'xforms:label'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'fCode');xf._a(null,'fName');xf._a(null,'gridSelect1');xf._a('gridSelect1','900b38556ca841778d703419b942a51d');xf._a('gridSelect1','xf-itemset-0');xf._a(null,'fHoldNum');xf._a(null,'fUse');xf._a(null,'fAddress');xf._a(null,'fFloor');xf._a(null,'fBaseConfig');xf._a(null,'fEquipment');xf._a(null,'fDescription');xf._a(null,'treeDeptSelect');xf._a('treeDeptSelect','f1c8ac1aaa8e40359d17ebb2e27b69e5');xf._a('treeDeptSelect','xf-itemset-1');xf._a(null,'treePsmSelect');xf._a('treePsmSelect','default10');xf._a('treePsmSelect','xf-itemset-2');xf._a(null,'triRefresh');xf._a('triRefresh','xuiLabel2');xf._a(null,'triEnsure');xf._a('triEnsure','xuiLabel3');xf._a(null,'triCancel');xf._a('triCancel','xuiLabel4');function init() {	
var begin = new Date().getTime();	
xf._b("instance('dBoardroom')/fName",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fName')))));	
xf._b("true()",xf._f('true'));	
xf._b("'名称不能为空!'",xf._i("名称不能为空!"));	
xf._b("instance('dBoardroom')/fType",xf._g(xf._f('instance',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fType')))));	
xf._b("'类型不能为空!'",xf._i("类型不能为空!"));	
xf._b("instance('dBoardroom')",xf._f('instance',xf._i("dBoardroom")));	
xf._b("call('justep.Context.getCurrentPersonID') != data('dBoardroom')/fCreatePsnID and data('dBoardroom')/fCreatePsnID !=''",xf._l(xf._l(xf._f('call',xf._i("justep.Context.getCurrentPersonID")), '!=',xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fCreatePsnID'))))), 'and',xf._l(xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fCreatePsnID')))), '!=',xf._i(""))));	
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
xf._b("instance('dType')/version",xf._g(xf._f('instance',xf._i("dType")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('dType')/fLevel",xf._g(xf._f('instance',xf._i("dType")),xf._h(false, xf._k("child",xf._j('','fLevel')))));	
xf._b("instance('dType')/fCreateTime",xf._g(xf._f('instance',xf._i("dType")),xf._h(false, xf._k("child",xf._j('','fCreateTime')))));	
xf._b("instance('dType')/fUpdateTime",xf._g(xf._f('instance',xf._i("dType")),xf._h(false, xf._k("child",xf._j('','fUpdateTime')))));	
xf._b("data('dBoardroom')/fCode",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fCode')))));	
xf._b("data('dBoardroom')/fName",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fName')))));	
xf._b("data('dBoardroom')/fType",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fType')))));	
xf._b("fName",xf._h(false, xf._k("child",xf._j('','fName'))));	
xf._b("fID",xf._h(false, xf._k("child",xf._j('','fID'))));	
xf._b("__c_",xf._h(false, xf._k("child",xf._j('','__c_'))));	
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
xf._b("data('dBoardroom')/fHoldNum",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fHoldNum')))));	
xf._b("data('dBoardroom')/fUse",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fUse')))));	
xf._b("data('dBoardroom')/fAddress",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fAddress')))));	
xf._b("data('dBoardroom')/fFloor",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fFloor')))));	
xf._b("data('dBoardroom')/fBaseConfig",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fBaseConfig')))));	
xf._b("data('dBoardroom')/fEquipment",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fEquipment')))));	
xf._b("data('dBoardroom')/fDescription",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDescription')))));	
xf._b("instance('dOrgDept')/sValidState",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrgDept')/sLevel",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrgDept')/version",xf._g(xf._f('instance',xf._i("dOrgDept")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dBoardroom')/fDutyDeptID",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDutyDeptID')))));	
xf._b("data('dBoardroom')/fDutyDeptName",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDutyDeptName')))));	
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
xf._b("instance('dOrgPsm')/sValidState",xf._g(xf._f('instance',xf._i("dOrgPsm")),xf._h(false, xf._k("child",xf._j('','sValidState')))));	
xf._b("instance('dOrgPsm')/sLevel",xf._g(xf._f('instance',xf._i("dOrgPsm")),xf._h(false, xf._k("child",xf._j('','sLevel')))));	
xf._b("instance('dOrgPsm')/version",xf._g(xf._f('instance',xf._i("dOrgPsm")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("data('dBoardroom')/fDutyPsnID",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDutyPsnID')))));	
xf._b("data('dBoardroom')/fDutyPsnName",xf._g(xf._f('data',xf._i("dBoardroom")),xf._h(false, xf._k("child",xf._j('','fDutyPsnName')))));	
xf._b("data('selectFilter')/canSelect",xf._g(xf._f('data',xf._i("selectFilter")),xf._h(false, xf._k("child",xf._j('','canSelect')))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');var xf_model_mdMain = new xforms.XFModel('mdMain',null);	
new xforms.XFInstance2('dType','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-18','mdMain',"instance('dType')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mdMain',"instance('dType')/fLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mdMain',"instance('dType')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-21','mdMain',"instance('dType')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
new xforms.XFInstance2('selectFilter','mdMain',null,'<rows><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('selectFilter','canSelect');	
xforms.load_parts('rootView');	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var dBoardroom_part_loaded = false;	
function load_dBoardroom_part(callback){if (dBoardroom_part_loaded) return;dBoardroom_part_loaded = true;	
new xforms.XFInstance2('dBoardroom','mdMain',null,null,null,null,null,null,null,null,null,null,'whereVersion');new SimpleStore('dBoardroom',null);	
xf._c('xf-bind-0','mdMain',"instance('dBoardroom')/fName",null,null,"true()",null,null,null,"'名称不能为空!'");	
xf._c('xf-bind-1','mdMain',"instance('dBoardroom')/fType",null,null,"true()",null,null,null,"'类型不能为空!'");	
xf._c('xf-bind-2','mdMain',"instance('dBoardroom')",null,"call('justep.Context.getCurrentPersonID') != data('dBoardroom')/fCreatePsnID and data('dBoardroom')/fCreatePsnID !=''",null,null,null,null,null);	
xf._c('xf-bind-3','mdMain',"instance('dBoardroom')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-4','mdMain',"instance('dBoardroom')/fHoldNum","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-5','mdMain',"instance('dBoardroom')/fCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','mdMain',"instance('dBoardroom')/fUpdateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','mdMain',"instance('dBoardroom')/fDisUseTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mdMain',"instance('dBoardroom')/fExtendDate1","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-9','mdMain',"instance('dBoardroom')/fExtendDate2","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-10','mdMain',"instance('dBoardroom')/fExtendDate3","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-11','mdMain',"instance('dBoardroom')/fExtendDate4","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-12','mdMain',"instance('dBoardroom')/fExtendDate5","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-13','mdMain',"instance('dBoardroom')/fExtendNum1","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-14','mdMain',"instance('dBoardroom')/fExtendNum2","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-15','mdMain',"instance('dBoardroom')/fExtendNum3","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-16','mdMain',"instance('dBoardroom')/fExtendNum4","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-17','mdMain',"instance('dBoardroom')/fExtendNum5","xsd:float",null,null,null,null,null,null);	
if(callback)callback();}	
var dBoardroom_part_init_loaded = false;	
function load_dBoardroom_part_init(){if (dBoardroom_part_init_loaded) return;dBoardroom_part_init_loaded = true;	
if(xforms.ready)justep('mdMain').xformsObject.construct_part();}	
function load_rootView(){if (justep("rootView").getAttribute('loaded') && justep("rootView").getAttribute('loaded') == 'true') return;justep("rootView").setAttribute('loaded', 'true');	
if(typeof(load_rootView_html) == 'function')load_rootView_html();	
xforms.load_parts('vBoardroom');	
}	
function load_rootView_xblinit(){if (justep("rootView").getAttribute('xblloaded') && justep("rootView").getAttribute('xblloaded') == 'true') return;justep("rootView").setAttribute('xblloaded', 'true');	
}	
function load_vBoardroom(){if (justep("vBoardroom").getAttribute('loaded') && justep("vBoardroom").getAttribute('loaded') == 'true') return;justep("vBoardroom").setAttribute('loaded', 'true');	
if(typeof(load_vBoardroom_html) == 'function')load_vBoardroom_html();	
xf._d('fCode','text',xf._q("data('dBoardroom')/fCode"),null,null,null,null,false,false);	
xf._d('fName','text',xf._q("data('dBoardroom')/fName"),null,null,null,null,false,false);	
new xforms.XFExtSelect({id:'gridSelect1',type:'gridselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dBoardroom')/fType"),labelRef:null,extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dType',columns:'fID,fName,__c_,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'fID,version,fCode,fDescription,fSequence,fUseStatus,fUseStatusName,fParentCode,fLevel,fURL,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreateTime,fUpdatePsnID,fUpdatePsnName,fUpdateTime',valueColumn:'fName',labelColumn:'fName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,,,,',types:'ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'200',dropdownWidth:'',appearance:null,delay:false,autoLoadData:true,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:null,onRowHasChildren:null,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
xf._d('fHoldNum','text',xf._q("data('dBoardroom')/fHoldNum"),null,null,null,null,false,false);	
xf._d('fUse','text',xf._q("data('dBoardroom')/fUse"),null,null,null,null,false,false);	
xf._d('fAddress','text',xf._q("data('dBoardroom')/fAddress"),null,null,null,null,false,false);	
xf._d('fFloor','text',xf._q("data('dBoardroom')/fFloor"),null,null,null,null,false,false);	
xf._d('fBaseConfig','text',xf._q("data('dBoardroom')/fBaseConfig"),null,null,null,null,false,false);	
xf._d('fEquipment','text',xf._q("data('dBoardroom')/fEquipment"),null,null,null,null,false,false);	
xf._d('fDescription','textarea',xf._q("data('dBoardroom')/fDescription"),null,null,null,null,false,false);	
var xf_model_model2 = new xforms.XFModel('model2',null);	
new xforms.XFExtSelect({id:'treeDeptSelect',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dBoardroom')/fDutyDeptID"),labelRef:xf._q("data('dBoardroom')/fDutyDeptName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dOrgDept',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'rowid',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'100',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_825119899',onRowHasChildren:func_1844627093,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:null,onCloseup:null});	
var xf_model_model3 = new xforms.XFModel('model3',null);	
new xforms.XFExtSelect({id:'treePsmSelect',type:'treeselect1',defaultLabelRef:null,allSelectedLabelRef:null,ref:xf._q("data('dBoardroom')/fDutyPsnID"),labelRef:xf._q("data('dBoardroom')/fDutyPsnName"),extRef:null,valueSeparator:null,labelSeparator:null,extSeparator:null,dataId:'dOrgPsm',columns:'sName,__c_,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',headerH:null,rowH:null,dropdownClass:null,hiddenColumns:'sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPhone,sFax,sAddress,sZip,sDescription,sPersonID,sNodeKind,version',valueColumn:'sPersonID',labelColumn:'sName',extColumn:null,labels:',,,,,,,,,,,,,,,,,,,',aligns:',,,,,,,,,,,,,,,,,,,',types:'tree,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro',widths:{widths:"#,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*",total:0},height:'100',dropdownWidth:'',appearance:null,delay:true,autoLoadData:false,independence:false,delayCreateGrid:false,cascade:false,dataXML:null,inputChangeable:false,disabled:false,readonly:false,smartRender:null,onAfterRowFill:null,onRowDisabled:null,onShowNodeImg:null,onRowExpand:'func_572372208',onRowHasChildren:func_771659494,onKeyDown:null,onKeyUp:null,onKeyPress:null,onDropdown:'treePsmSelectDropdown',onCloseup:'boardroomDetail.treePsmSelectCloseup'});	
var xf_trigger_triRefresh=new xforms.XFTrigger('triRefresh',null,null,null,false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){triRefreshDOMActivate(event)}));xf._p(justep('triRefresh'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'triRefresh', evt,false)});	
var xf_trigger_triEnsure=new xforms.XFTrigger('triEnsure',xf._q("data('selectFilter')/canSelect"),null,null,false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){triEnsureDOMActivate(event)}));xf._p(justep('triEnsure'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'triEnsure', evt,false)});	
var xf_trigger_triCancel=new xforms.XFTrigger('triCancel',null,null,null,false,false,false,null,null,null);	
var xf_action_action3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){triCancelDOMActivate(event)}));xf._p(justep('triCancel'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action3,'triCancel', evt,false)});	
}	
function load_vBoardroom_xblinit(){if (justep("vBoardroom").getAttribute('xblloaded') && justep("vBoardroom").getAttribute('xblloaded') == 'true') return;justep("vBoardroom").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('model2').xformsObject.construct_part();	
if(xforms.ready)justep('model3').xformsObject.construct_part();	
}	
var dOrgDept_part_loaded = false;	
function load_dOrgDept_part(callback){if (dOrgDept_part_loaded) return;dOrgDept_part_loaded = true;	
new xforms.XFInstance2('dOrgDept','model2',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-22','model2',"instance('dOrgDept')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-23','model2',"instance('dOrgDept')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-24','model2',"instance('dOrgDept')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrgDept_part_init_loaded = false;	
function load_dOrgDept_part_init(){if (dOrgDept_part_init_loaded) return;dOrgDept_part_init_loaded = true;	
if(xforms.ready)justep('model2').xformsObject.construct_part();}	
var dOrgPsm_part_loaded = false;	
function load_dOrgPsm_part(callback){if (dOrgPsm_part_loaded) return;dOrgPsm_part_loaded = true;	
new xforms.XFInstance2('dOrgPsm','model3',null,null,null,null,null,null,'sNodeKind',null,null,null,'whereVersion');	
xf._c('xf-bind-25','model3',"instance('dOrgPsm')/sValidState","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-26','model3',"instance('dOrgPsm')/sLevel","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-27','model3',"instance('dOrgPsm')/version","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var dOrgPsm_part_init_loaded = false;	
function load_dOrgPsm_part_init(){if (dOrgPsm_part_init_loaded) return;dOrgPsm_part_init_loaded = true;	
if(xforms.ready)justep('model3').xformsObject.construct_part();}	
var __actions__ = {	
};	
