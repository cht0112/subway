var detail = {};
detail.windowReceiverReceive = function(event){
	var operator = event.data.operator;
	var data = justep.xbl('detailData');
	if (operator == "new") {
		data.loadXML("");
		data.newData();
	} else if (operator == "edit") {
		var id = event.data.id;
		data.filters.setFilter("idFilter", data.getConceptAliasName() + "='" + id + "'");
		data.refreshData();
	}
};


detail.triggerOKClick = function(event){
	xforms.blur(true);
	var data = justep.xbl('detailData');
	if (data.saveData())
		justep.windowReceiver.windowEnsure({
			id : data.getCurrentRowId()
		});
};

detail.triggerCancelClick = function(event){
	justep.windowReceiver.windowCancel();
};
