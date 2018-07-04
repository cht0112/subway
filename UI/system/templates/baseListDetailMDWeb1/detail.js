var detail = {};

detail.detailDataSaveCommit = function(event){
	var data = justep.xbl('masterData');
	justep.windowReceiver.windowEnsure({
		id : data.getCurrentRowId()
	}, true);
};
detail.windowReceiverReceive = function(event){
	var operator = event.data.operator;
	var data = justep.xbl('masterData');
	if (operator == "new") {
		data.newData();
	} else if (operator == "edit") {
		var id = event.data.id;
		data.filters.setFilter("idFilter", data.getConceptAliasName() + "='" + id + "'");
		data.refreshData();
	}
}
