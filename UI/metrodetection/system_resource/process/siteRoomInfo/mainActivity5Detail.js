var mainActivity5Detail = {};
mainActivity5Detail.windowReceiverReceive = function(event){
	var operator = event.data.operator;
	var data = justep.xbl('detailData');
	if (operator == "new") {
		data.newData();
	} else if (operator == "edit") {
		var id = event.data.id;
		data.filters.setFilter("idFilter", data.getConceptAliasName() + "='" + id + "'");
		data.refreshData();
	}
};


mainActivity5Detail.triggerOKClick = function(event){
	xforms.blur(true);
	var data = justep.xbl('detailData');
	if (data.saveData())
		justep.windowReceiver.windowEnsure({
			id : data.getCurrentRowId()
		});
};

mainActivity5Detail.triggerCancelClick = function(event){
	justep.windowReceiver.windowCancel();
};