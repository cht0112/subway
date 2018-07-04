var selectMultiRoles = {};

selectMultiRoles._inputParams = {};
selectMultiRoles._defaultInputParams = {
	filter : "",
	managed : false
};

selectMultiRoles.receiverReceive = function(event) {
	for (o in selectMultiRoles._defaultInputParams)
		selectMultiRoles._inputParams[o] = selectMultiRoles._defaultInputParams[o];

	if (event.data.filter)
		selectMultiRoles._inputParams.filter = event.data.filter;
	if (event.data.managed)
		selectMultiRoles._inputParams.managed = event.data.managed;

	$("#inputSearch").val("");
	$("#inputSearch").focus();
	
	$(justep.xbl("gridRole").grid.getHeaderMasterCheckbox()).attr("checked", false);

	var dRole = justep.xbl("dRole");
	dRole.setFilter("inputFilter", selectMultiRoles._inputParams.filter);
	selectMultiRoles.refreshData();
};

selectMultiRoles.refreshData = function() {
	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}
	var dRole = justep.xbl("dRole");
	if (!searchText)
		dRole.setFilter("searchFilter", "");
	else
		dRole.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPRole.sName", searchText));
	dRole.refreshData();
};

selectMultiRoles.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		selectMultiRoles.refreshData();
};

selectMultiRoles.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

selectMultiRoles.btnOKClick = function(event) {
	var gridRole = justep.xbl("gridRole").grid;
	var checkColIndex = gridRole.getColIndexById("calcCheckBox");
	var selectedRowIDs = gridRole.getCheckedRows(checkColIndex);
	selectedRowIDs = selectedRowIDs ? selectedRowIDs.split(",") : [];
	if (selectedRowIDs.length == 0) {
		justep.OpmUtils.showWarning("请勾选要选择的数据！");
		return;
	}
	
	var r = new SimpleStore(null, gridRole.getColumnIds());
	for ( var i = 0; i < selectedRowIDs.length; i++) {
		r.insert(selectedRowIDs[i], 0, 0, gridRole.getRowValue(selectedRowIDs[i]));
	}
	justep.windowDialogReceiver.windowEnsure(r);
};
selectMultiRoles.imageSearchClick = function(event) {
	selectMultiRoles.refreshData();
};
selectMultiRoles.dRoleRefreshCreateParam = function(event) {
	event.param.setBoolean("managed", selectMultiRoles._inputParams.managed);
};
selectMultiRoles.gridRoleSRoleKindRender = function(event) {
	var rt = (event.cell.getValueByColId("sValidState") == "1") ? "" : "-disable";
	if (event.value == "fun")
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/funRole" + rt + ".gif", true) + "\" alt=\"功能角色\"/>";
	else
		return "<img src=\"" + justep.Request.convertURL("/UI/SA/OPM/images/dataRole" + rt + ".gif", true) + "\" alt=\"数据角色\"/>";
};
