acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var operator = data.operator;
	var cardID = data.cardID;
	var dInventoryRecord = justep.xbl("dInventoryRecord");
	if(operator=="view"){
		dInventoryRecord.filters.setFilter("inventoryRecorFilter", "OA_AS_InventoryD.fAssetID='" + cardID + "'");
		dInventoryRecord.refreshData();
	}
}