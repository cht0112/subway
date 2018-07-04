var selectAuthorizePermissions = {};

selectAuthorizePermissions._inputParams = {};
selectAuthorizePermissions._defaultInputParams = {
	orgFID : null,
	filter : ""
};

selectAuthorizePermissions.receiverReceive = function(event) {
	for (o in selectAuthorizePermissions._defaultInputParams)
		selectAuthorizePermissions._inputParams[o] = selectAuthorizePermissions._defaultInputParams[o];

	selectAuthorizePermissions._inputParams.orgFID = event.data.orgFID;
	if (event.data.filter)
		selectAuthorizePermissions._inputParams.filter = event.data.filter;

	$("#inputSearch").val("");
	$("#inputSearch").focus();

	var dPermission = justep.xbl("dPermission");
	dPermission.setFilter("inputFilter", selectAuthorizePermissions._inputParams.filter);
	selectAuthorizePermissions.refreshData();
};

selectAuthorizePermissions.refreshData = function() {
	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}
	var dPermission = justep.xbl("dPermission");
	if (!searchText)
		dPermission.setFilter("searchFilter", "");
	else
		dPermission.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPPermission.sActivityFName", searchText));
	dPermission.refreshData();
};

selectAuthorizePermissions.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		selectAuthorizePermissions.refreshData();
};

selectAuthorizePermissions.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

selectAuthorizePermissions.btnOKClick = function(event) {
	var gridPermission = justep.xbl("gridPermission").grid;
	var checkColIndex = gridPermission.getColIndexById("calcCheckBox");
	var selectedRowIDs = gridPermission.getCheckedRows(checkColIndex);
	selectedRowIDs = selectedRowIDs ? selectedRowIDs.split(",") : [];
	if (selectedRowIDs.length == 0) {
		justep.OpmUtils.showWarning("请勾选要选择的数据！");
		return;
	}
	var r = new SimpleStore(null, gridPermission.getColumnIds());
	for ( var i = 0; i < selectedRowIDs.length; i++) {
		r.insert(selectedRowIDs[i], 0, 0, gridPermission.getRowValue(selectedRowIDs[i]));
	}
	justep.windowDialogReceiver.windowEnsure(r);
};
selectAuthorizePermissions.imageSearchClick = function(event) {
	selectAuthorizePermissions.refreshData();
};
selectAuthorizePermissions.dPermissionRefreshCreateParam = function(event) {
	event.param.setString("orgFID",	selectAuthorizePermissions._inputParams.orgFID);
	event.param.setBoolean("includeInherited", true);
};
