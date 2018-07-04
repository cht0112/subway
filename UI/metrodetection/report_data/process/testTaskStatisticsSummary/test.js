var test = {};


test.dataModelLoad = function(event){
	var startIn = justep.xbl("input1");
	var taskList = justep.xbl("ds1");
	var chartTestTaskSummaryRD = justep.xbl("chartTestTaskSummaryRD");
	var taskSummaryRD = justep.xbl("taskSummaryRD");
	var grid = justep.xbl("gridReport");
	var startDateTime = startIn.getValue("aCTUALSTARTDATE");
	//alert(typeof(startDate));
	
	//alert(startDateTime);
	//alert(startDate.split("T")[0]);
	var endIn = justep.xbl("input2");
	var endDateTime = endIn.getValue("aCTUALENDINGDATE");
	
	//alert(endDateTime);
	//var options = {};
	//var param = new justep.Request.ActionParam();
	if(startDateTime != "" && startDateTime != null){
		var startDate = startDateTime.split("T")[0];
		taskList.setStringVar('startDate', startDate);
		chartTestTaskSummaryRD.setStringVar('startDate', startDate);
		taskSummaryRD.setStringVar('startDate', startDate);
	}
	
	if(endDateTime != "" && endDateTime != null){
		var endTaskDate = endDateTime.split("T")[0];
		taskList.setStringVar('endTaskDate', endTaskDate);
		chartTestTaskSummaryRD.setStringVar('endTaskDate', endTaskDate);
		taskSummaryRD.setStringVar('endTaskDate', endTaskDate);
	}
	
	//options.parameters = param;
	//options.action = "taskQuery";
	debugger;
	//var res = justep.Request.sendBizRequest("/metrodetection/report_data/process/testTaskStatisticsSummary/testTaskStatisticsSummaryProcess", "", "taskQuery",param , null, null, null, null, null);
	//table = BizUtils.resultSet2Table(rsTask, (Model)null);
//	debugger;
//	taskList.setDataModel(res.responseText);
	grid.refresh();
	
};

