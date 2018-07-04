acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var operator = data.operator;
	var cardID = data.cardID;
	var dRepairRecord = justep.xbl("dRepairRecord");
	if(operator=="view"){
		dRepairRecord.filters.setFilter("repairRecordFilter", "OA_AS_RepairApply.fAssetID='" + cardID + "'");
		dRepairRecord.refreshData();
	}
}