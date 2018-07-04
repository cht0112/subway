var processExecuteList = {};
processExecuteList.windowReceiverReceive = function(event){
	var dataModel = event.data.dataModel;
	var executeConcept = event.data.executeConcept;
	var bizID = event.data.bizID;
	justep.xbl("rdExecuteList").setStringVar("dataModel", dataModel);
	justep.xbl("rdExecuteList").setStringVar("executeConcept", executeConcept);
	justep.xbl("rdExecuteList").setStringVar("bizID", bizID);
	justep.xbl("reportExecuteList").refresh();
};
