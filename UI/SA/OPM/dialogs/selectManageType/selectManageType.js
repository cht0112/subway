var selectManageType = {};
selectManageType.refreshData = function() {
	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}
	var dManageType = justep.xbl("dManageType");
	if (!searchText)
		dManageType.setFilter("searchFilter", "");
	else
		dManageType.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPManageType.sName,SA_OPManageType.sCode", searchText));
	dManageType.refreshData();
};

selectManageType.receiverReceive = function(event) {
	$("#inputSearch").val("");
	$("#inputSearch").focus();

	var dManageType = justep.xbl("dManageType");
	if (event.data && event.data.filter)
		dManageType.setFilter("inputFilter", event.data.filter);
	else
		dManageType.setFilter("inputFilter", "");
	selectManageType.refreshData();
};

selectManageType.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		selectManageType.refreshData();
};

selectManageType.imageSearchClick = function(event) {
	selectManageType.refreshData();
};

selectManageType.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

selectManageType.btnOKClick = function(event) {
	var dManageType = justep.xbl("dManageType");
	var rowID = dManageType.getCurrentRowId();
	if (!rowID) {
		justep.OpmUtils.showWarning("请选择业务管理类型！");
		return;
	}
	var r = new SimpleStore(null, dManageType.getColumnIds());
	r.insert(rowID, 0, 0, dManageType.getRowData(rowID));
	justep.windowDialogReceiver.windowEnsure(r);
};
selectManageType.gridManageTypeRowDblClick = function(event){
	selectManageType.btnOKClick();
};
