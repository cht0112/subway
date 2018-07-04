var testProcessMonitor = {};

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
testProcessMonitor.grid1RowClick = function(event){
	var testProcessMonitorTreeD = justep.xbl("testProcessMonitorTreeD");
	var testTaskExeSubCaseD = justep.xbl("testTaskExeSubCaseD");
	var testExeStepD = justep.xbl("testExeStepD");
	var tabPanel = justep.xbl("tabPanel1");
	tabPanel.setVisable("projectTaskInfo",true);
	tabPanel.setVisable("taskExeSubCase",false);
	tabPanel.setVisable("taskExeStep",false);
	var testProcessMonitorTreeId = testProcessMonitorTreeD.getCurrentID();
	//alert(testProcessMonitorTreeD.getCurrentID());
	var parent = testProcessMonitorTreeD.getValue("PARENT", testProcessMonitorTreeId);
	//判断树的节点是否是项目，如果是则执行if
	if(parent != '' && parent != null && parent == "root"){
		var projectTaskInfoD = justep.xbl("projectTaskInfoD");
		//var protedtTaskInfoFid = projectTaskInfoD.getCurrentID();
		//alert(protedtTaskInfoFid);
		var projectId = testProcessMonitorTreeD.getValue("ID", testProcessMonitorTreeId);
		//alert(projectId);
		projectTaskInfoD.setFilter("filter1", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId);
		projectTaskInfoD.refreshData();
	}
	
	//判断树的节点是否是任务，如果是则执行if
	if(parent != '' && parent != null){
		var superParent = testProcessMonitorTreeD.getValue("PARENT", parent);
		if(superParent != '' && superParent != null && superParent == "root"){
			var taskId = testProcessMonitorTreeD.getValue("ID", testProcessMonitorTreeId);
			var projectId = testProcessMonitorTreeD.getValue("ID", parent);
			//alert(taskId+"==taskId");
			//alert(projectId+"===projectId");
			tabPanel.setVisable(tabPanel.getActiveID(),false);
			tabPanel.setVisable("taskExeSubCase", true);
			tabPanel.setTabActive("taskExeSubCase");
			testTaskExeSubCaseD.setFilter("filter0", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId+" and ttesc.tASKID="+taskId);
			testTaskExeSubCaseD.refreshData();
		}
	}
	
	//判断树的节点是否是用例，如果是则执行if
	var child = testProcessMonitorTreeD.getValue("CHILD", testProcessMonitorTreeId);
	if(parent != '' && parent != null && child == 0){
		var ceseId = testProcessMonitorTreeD.getValue("ID", testProcessMonitorTreeId);
		//alert(ceseId);
		var taskId = testProcessMonitorTreeD.getValue("ID", parent);
		//alert(taskId);
		var superParent = testProcessMonitorTreeD.getValue("PARENT", parent);
		var projectId = testProcessMonitorTreeD.getValue("ID", superParent);
		//alert(projectId);
		tabPanel.setVisable(tabPanel.getActiveID(),false);
		tabPanel.setVisable("taskExeStep", true);
		tabPanel.setTabActive("taskExeStep");
		testExeStepD.setFilter("filter2", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId+" and TEST_TASK_EXECUTE_STEP.tASKID="+taskId+" and TEST_TASK_EXECUTE_STEP.tESTCASEID='"+ceseId+"'");
		testExeStepD.refreshData();
	}
};

testProcessMonitor.grid4_eXECUTEDATETIMERender = function(event){
	var disVal = "<div></div>";
	var curVal = event.value;
	if(curVal == "1970-01-01 00:00:00") {
		return disVal;
	} else if(curVal == "1900-01-01 00:00:00") {
		return disVal;
	}
};
