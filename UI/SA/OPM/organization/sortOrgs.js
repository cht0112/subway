var sortOrgs = {};
sortOrgs.getSortData = function() {
	return justep.xbl("dSortOrgs");
};
sortOrgs.btnMoveTopClick = function(event) {
	var store = sortOrgs.getSortData().getStore();

	var rowID = store.getSelectedRowId();
	var index = store.getIndex(rowID);
	if (rowID) sortOrgs.getSortData().getStore().moveRowPro(0 - index, rowID);
};
sortOrgs.btnMoveUpClick = function(event) {
	var store = sortOrgs.getSortData().getStore();

	var rowID = store.getSelectedRowId();
	if (rowID) sortOrgs.getSortData().getStore().moveRowPro(-1, rowID);
};
sortOrgs.btnMoveDownClick = function(event) {
	var store = sortOrgs.getSortData().getStore();

	var rowID = store.getSelectedRowId();
	if (rowID) sortOrgs.getSortData().getStore().moveRowPro(1, rowID);
};
sortOrgs.btnMoveBottomClick = function(event) {
	var store = sortOrgs.getSortData().getStore();

	var rowID = store.getSelectedRowId();
	var index = store.getIndex(rowID);
	var count = store.getRowsNum();
	if (rowID) sortOrgs.getSortData().getStore().moveRowPro(count - index - 1, rowID);
};
sortOrgs.receiverReceive = function(event) {
	var data = sortOrgs.getSortData();
	
	if (!event.data.parentID) data.setFilter("parentFilter", "SA_OPOrg.sParent is null");
	else data.setFilter("parentFilter", "SA_OPOrg.sParent = '" + event.data.parentID + "'");
	
	data.refreshData();
};
sortOrgs.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};
sortOrgs.btnOKClick = function(event) {
	justep.windowDialogReceiver.windowEnsure(sortOrgs.getSortData().getStore());
};
sortOrgs.gridSortOrgSOrgKindIDRender = function(event) {
	return "<img src='" + justep.Request.convertURL(justep.Org.OrgKinds.getImageURL(event.value)) + "' alt='" + justep.Org.OrgKinds.getLabel(event.value) + "'/>";
};
