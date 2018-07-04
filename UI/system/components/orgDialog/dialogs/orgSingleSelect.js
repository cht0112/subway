var orgSingleSelect = {};

// 当前显示模式: tree | list
_currentMode = null;

/**********************************************************************************
对话框入参格式
	{
		"filter": 					过滤条件									string			
		"rootFilter": 				根过滤条件 								string			
		"manageCodes": 				管理权限									string			
		"orgKinds":					可以选择的组织单元类型（逗号分隔）			string			
		"includeDisabledOrg":		是否包含禁用的组织单元 					boolean
		"listMode":					列表模式									boolean
		"showCommonGroup":			是否显示常用组							boolean
		"showVirtualRoot":			是否显示虚根								boolean
	}
***********************************************************************************/

_inputParams = _defaultParams = {
	"filter": "",
	"rootFilter": "SA_OPOrg.sParent is null",
	"manageCodes": "",
	"orgKinds": "",
	"includeDisabledOrg": false,
	"listMode": false,
	"showCommonGroup": false,
	"showVirtualRoot": false
};

orgSingleSelect.receiverReceive = function(event) {
	var dOrgTree = justep.xbl("dOrgTree");
	var dOrgList = justep.xbl("dOrgList");
	
	// 初始化参数
	_inputParams = justep.OrgDialogUtils.initInputParam(_defaultParams, event.data);

	// 初始化界面组件
	$("#inputSearch").val("");
	justep.xbl("dOrgTree").defTreeOption.option.virtualRootLabel = (_inputParams.showVirtualRoot == true) ? (new justep.Message(justep.Message.JUSTEP231060)).getMessage() : "";

	// 初始化显示模式
	justep.OrgDialogUtils.setCurrentMode("tree");

	// 初始化数据集
	justep.OrgDialogUtils.initOrgTree();
	justep.OrgDialogUtils.initOrgList();

	// 初始刷新
	_inputParams.listMode ? justep.OrgDialogUtils.refreshOrgList() : justep.OrgDialogUtils.refreshOrgTree();

	// 默认焦点
	$("#inputSearch").focus();
};

orgSingleSelect.dOrgTreeRefreshCreateParam = function(event) {
	justep.OrgDialogUtils.doOrgTreeRefreshCreateParam(event);
};

orgSingleSelect.dOrgListRefreshCreateParam = function(event){
	justep.OrgDialogUtils.doOrgListRefreshCreateParam(event);
};

orgSingleSelect.btnSearchClick = function(event) {
	justep.OrgDialogUtils.setCurrentMode($("#inputSearch").val() ? "list" : "tree");
	if (_currentMode == "list") {
		justep.OrgDialogUtils.refreshOrgList();
	}
};

orgSingleSelect.inputSearchKeydown = function(event) {
	if (event.keyCode == 13) {
		orgSingleSelect.btnSearchClick(event);
	};
};

orgSingleSelect.gridOrgTreeRowHasChildren = function(event){
	return (event.cell.getValueByColId("sOrgKindID") != "psm");
};

orgSingleSelect.gridOrgTreeShowNodeImg = function(event) {
	return justep.OrgDialogUtils.getOrgTreeGridImage(event.grid, event.rowId);
};

orgSingleSelect.gridOrgTreeCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

orgSingleSelect.gridOrgTreeRowDblClick = function(event) {
	orgSingleSelect.btnOkClick();
};

orgSingleSelect.gridOrgListCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

orgSingleSelect.gridOrgList_sOrgKindIDRender = function(event) {
	return justep.Org.OrgKinds.getLabel(event.value);
};

orgSingleSelect.gridOrgListRowDblClick = function(event) {
	orgSingleSelect.btnOkClick();
};

orgSingleSelect.btnOkClick = function(event) {
	var data = justep.OrgDialogUtils.getCurrentData();
	if (orgSingleSelect.canSelect()) {
		var rowID = data.getRowId();
		var r = justep.xbl("receiver").getMappingData(data.id, [rowID]);
		// 常用组：ID转换
		r[0].rowid = justep.Org.OrgCommonGroup.getOrgIDOfGroupOrgID(r[0].rowid);
		r[0].sParent = justep.Org.OrgUtils.getOrgID(justep.Org.OrgUtils.getParentPath(r[0].sFID));
		justep.xbl("receiver").windowEnsure(r);
	}
};

orgSingleSelect.btnCancelClick = function(event) {
	justep.xbl("receiver").windowCancel();
};

orgSingleSelect.canSelect = function() {
	var data = justep.OrgDialogUtils.getCurrentData();
	return justep.OrgDialogUtils.canSelect(data.getID(), data.getValue("sOrgKindID"));
};


