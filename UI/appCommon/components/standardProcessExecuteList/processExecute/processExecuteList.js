var processExecuteList = {};

processExecuteList.model1ModelConstructDone = function(event){
	var rdTask = justep.xbl("rdTask"); 
	rdTask.setIntegerVar("offset", 0);
	rdTask.setIntegerVar("limit", -1);
};

processExecuteList.windowReceiverReceive = function(event){
	var sData1 = event.data.sData1;
	var filter = "(SA_Task.sFlowID = (select x from SA_Task x where x.sData1 = '" + sData1 + "' and x.sParent is null))";
	filter = filter + " and (SA_Task.sExecutorPersonID is not null) "; 
	filter = filter + " and (SA_Task.sActualFinishTime is not null) "; 
	filter = filter + " and (SA_Task.sKindID in ('tkTask', 'tkExecutor')) "; 
	justep.xbl("rdTask").setStringVar("filter", filter);
	justep.xbl("rdTask").setStringVar("orderBy", "SA_Task.sActualFinishTime asc");
	justep.xbl("reportTaskList").refresh();
};
