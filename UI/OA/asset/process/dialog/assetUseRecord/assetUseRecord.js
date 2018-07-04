acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var operator = data.operator;
	var cardID = data.cardID;
	var dUseRecord = justep.xbl("dUseRecord");
	if(operator=="view"){
		dUseRecord.filters.setFilter("useRecordFilter", "OA_AS_UseRecord.fAssetID='" + cardID + "'");
		dUseRecord.refreshData();
	}
}