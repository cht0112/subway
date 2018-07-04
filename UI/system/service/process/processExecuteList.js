var processExecuteList = {};

processExecuteList.windowReceiverReceive = function(event){
	var task = event.data.task;

	var rdTask = justep.xbl("rdTask"); 
	rdTask.setIntegerVar("offset", 0);
	rdTask.setIntegerVar("limit", -1);

	rdTask.setStringVar("filter", "(SA_Task.sFlowID = (select x.sFlowID from SA_Task x where x = '" + task + "'))");
	
	justep.xbl("reportTaskList").refresh();
};
