acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var kwid = data.kwid;
	
	var data = justep.xbl('dReaded');
	data.filters.setFilter("readerFilter", "OA_KM_READERS.fKWID='" + kwid + "'");
	data.refreshData();
}