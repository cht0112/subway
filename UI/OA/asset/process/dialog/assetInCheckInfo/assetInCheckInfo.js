acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var assetInID = data.assetInID;
	var dataDlg = justep.xbl("mainData");
	dataDlg.filters.setFilter("assetCheckFilter", "OA_AS_CheckM='" + assetInID + "'");
	dataDlg.refreshData();
}