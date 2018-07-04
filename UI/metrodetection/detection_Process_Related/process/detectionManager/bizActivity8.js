var bizActivity8 = {};

//获得项目Id，并进行过滤。
bizActivity8.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
	var applyId = justep.Context.getProcessData1();
	//alert(applyId);
	var testProjectInfoBD= justep.xbl("testProjectInfoBD");
	testProjectInfoBD.setFilter("filter1", "TEST_PROJECT_INFO.aPPLICATIONNO="+applyId);
	testProjectInfoBD.refreshData();
	var projectId = testProjectInfoBD.getCurrentID();
	if( projectId !='' && projectId != null){
		//alert(5);
		var projectTaskTestResBD = justep.xbl("projectTaskTestResBD");
		projectTaskTestResBD.setFilter("filter0", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId);
		projectTaskTestResBD.refreshData();
		
		var taskExeProblemBD = justep.xbl("taskExeProblemBD");
		taskExeProblemBD.setFilter("filter2", "tpti.pROJECTID="+projectId);
		taskExeProblemBD.refreshData();
		
		var statisticsBD = justep.xbl("statisticsBD");
		statisticsBD.setFilter("filter3", "PROCESS_RESULT_ANALYSIS_VIEW.PROJECT_IDID="+projectId);
		statisticsBD.refreshData();
		
		var subCaseExeSituBD = justep.xbl("subCaseExeSituBD");
		subCaseExeSituBD.setFilter("filter4", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId);
		subCaseExeSituBD.refreshData();
		
		var subCaseStepExeSituatBD = justep.xbl("subCaseStepExeSituatBD");
		subCaseStepExeSituatBD.setFilter("filter5", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId);
		subCaseStepExeSituatBD.refreshData();
	}
	
};

bizActivity8.grid3_2RowDblClick = function(event){
	var tabPanelSubCase = justep.xbl("tabPanelSubCase");
	tabPanelSubCase.setTabActive("subCaseStepExeSituation");
	var applyId = justep.Context.getProcessData1();
	//alert(applyId);
	var testProjectInfoBD= justep.xbl("testProjectInfoBD");
	testProjectInfoBD.setFilter("filter11", "TEST_PROJECT_INFO.aPPLICATIONNO="+applyId);
	testProjectInfoBD.refreshData();
	var subCaseExeSituBD = justep.xbl("subCaseExeSituBD");
	//alert(subCaseStepExeSituatBD.getCurrentID());
	var taskId = subCaseExeSituBD.getValue("tASKID", subCaseExeSituBD.getCurrentID());
	//alert(taskId);
	var testVer = subCaseExeSituBD.getValue("tESTCASEVER", subCaseExeSituBD.getCurrentID());
	//alert(testVer);
	var testId = subCaseExeSituBD.getValue("tESTCASEID", subCaseExeSituBD.getCurrentID());
	//alert(testId);
	var subTestId = subCaseExeSituBD.getValue("sUBTESTCASEID", subCaseExeSituBD.getCurrentID());
	//alert(subTestId);
	var projectId = testProjectInfoBD.getCurrentID();
	if( projectId !='' && projectId != null){
		var subCaseStepExeSituatBD = justep.xbl("subCaseStepExeSituatBD");
		subCaseStepExeSituatBD.setFilter("filter12", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId+" and TEST_TASK_EXECUTE_STEP.tASKID="+taskId+" and TEST_TASK_EXECUTE_STEP.tESTCASEVER="+testVer+" and TEST_TASK_EXECUTE_STEP.tESTCASEID='"+testId+"'"+" and TEST_TASK_EXECUTE_STEP.sUBTESTCASEID='"+subTestId+"'");
		subCaseStepExeSituatBD.refreshData();
	}
	justep.xbl("tabPanelSubCase").setDisabled("subCaseStepExeSituation", false);
};

bizActivity8.grid5_3RowDblClick = function(event){
	var tabPanelSubCase = justep.xbl("tabPanelSubCase");
	tabPanelSubCase.setTabActive("subCaseExeSituation");
	var applyId = justep.Context.getProcessData1();
	//alert(applyId);
	var testProjectInfoBD= justep.xbl("testProjectInfoBD");
	testProjectInfoBD.setFilter("filter9", "TEST_PROJECT_INFO.aPPLICATIONNO="+applyId);
	testProjectInfoBD.refreshData();
	var statisticsBD = justep.xbl("statisticsBD");
	//alert(statisticsBD.getCurrentID());
	var taskId = statisticsBD.getValue("TASK_IDID", statisticsBD.getCurrentID());
	//alert(taskId);
	var testVer = statisticsBD.getValue("TEST_CASE_VERCASEVER", statisticsBD.getCurrentID());
	//alert(testVer);
	var testId = statisticsBD.getValue("TEST_CASE_IDCASEID", statisticsBD.getCurrentID());
	//alert(testId);
	var projectId = testProjectInfoBD.getCurrentID();
	if( projectId !='' && projectId != null){
		var subCaseExeSituBD = justep.xbl("subCaseExeSituBD");
		subCaseExeSituBD.setFilter("filter10", "TEST_PROJECT_TASK_INFO.pROJECTID="+projectId+" and ttesc.tASKID="+taskId+" and ttesc.tESTCASEVER="+testVer+" and ttesc.tESTCASEID='"+testId+"'");
		subCaseExeSituBD.refreshData();
	}
	justep.xbl("tabPanelSubCase").setDisabled("subCaseExeSituation", false);
};

bizActivity8.subCaseExeSituationSelect = function(event){
//	var applyId = justep.Context.getProcessData1();
//	//alert(applyId);
//	var testProjectInfoBD= justep.xbl("testProjectInfoBD");
//	testProjectInfoBD.setFilter("filter9", "TEST_PROJECT_INFO.aPPLICATIONNO="+applyId);
//	testProjectInfoBD.refreshData();
//	var statisticsBD = justep.xbl("statisticsBD");
//	alert(statisticsBD.getCurrentID());
//	var taskId = statisticsBD.getValue("TASK_IDID", statisticsBD.getCurrentID());
//	alert(taskId);
//	var testVer = statisticsBD.getValue("TEST_CASE_VERCASEVER", statisticsBD.getCurrentID());
//	alert(testVer);
//	var testId = statisticsBD.getValue("TEST_CASE_IDCASEID", statisticsBD.getCurrentID());
//	alert(testId);
//	var projectId = testProjectInfoBD.getCurrentID();
//	if( projectId !='' && projectId != null){
//		var subCaseExeSituBD = justep.xbl("subCaseExeSituBD");
//		//subCaseExeSituBD.setFilter("filter13", "1=1");
//		//subCaseExeSituBD.refreshData();
//		//alert(subCaseExeSituBD.getCount()+"===数量=");
//		subCaseExeSituBD.setFilter("filter10", "ttesc.pROJECTID="+projectId+" and ttesc.tASKID="+taskId+" and ttesc.tESTCASEVER="+testVer+" and ttesc.tESTCASEID='"+testId+"'");
//		subCaseExeSituBD.refreshData();
//		alert(subCaseExeSituBD.getCount()+"===数量2222=");
//	}
	justep.xbl("subCaseExeSituBD").refreshData();
};

bizActivity8.subCaseStepExeSituationSelect = function(event){
//	var applyId = justep.Context.getProcessData1();
//	//alert(applyId);
//	var testProjectInfoBD= justep.xbl("testProjectInfoBD");
//	testProjectInfoBD.setFilter("filter7", "TEST_PROJECT_INFO.aPPLICATIONNO="+applyId);
//	testProjectInfoBD.refreshData();
//	var subCaseExeSituBD = justep.xbl("subCaseExeSituBD");
//	//alert(subCaseStepExeSituatBD.getCurrentID());
//	var taskId = subCaseExeSituBD.getValue("tASKID", subCaseExeSituBD.getCurrentID());
//	//alert(taskId);
//	var testVer = subCaseExeSituBD.getValue("tESTCASEVER", subCaseExeSituBD.getCurrentID());
//	//alert(testVer);
//	var testId = subCaseExeSituBD.getValue("tESTCASEID", subCaseExeSituBD.getCurrentID());
//	//alert(testId);
//	var subTestId = subCaseExeSituBD.getValue("sUBTESTCASEID", subCaseExeSituBD.getCurrentID());
//	//alert(subTestId);
//	var projectId = testProjectInfoBD.getCurrentID();
//	if( projectId !='' && projectId != null){
//		var subCaseStepExeSituatBD = justep.xbl("subCaseStepExeSituatBD");
//		subCaseStepExeSituatBD.setFilter("filter8", "TEST_TASK_EXECUTE_STEP.pROJECTID="+projectId+" and TEST_TASK_EXECUTE_STEP.tASKID="+taskId+" and TEST_TASK_EXECUTE_STEP.tESTCASEVER="+testVer+" and TEST_TASK_EXECUTE_STEP.tESTCASEID='"+testId+"'"+" and TEST_TASK_EXECUTE_STEP.sUBTESTCASEID='"+subTestId+"'");
//		subCaseStepExeSituatBD.refreshData();
//	}
};


bizActivity8.subCaseExeResSelect = function(event){
	justep.xbl("statisticsBD").refreshData();
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/

bizActivity8.statisticsBDAfterRefresh = function(event){
	//debugger;
	 var data = justep.xbl('statisticsBD');
   var total = data.getTotal();
   //alert(total);
   var grid = justep.xbl('grid5_3');
   for(var i=0;i<total;i++){
    var rowid = data.getID(i);
   // alert(rowid);
    grid.grid.setCellTextStyle(rowid,1,"color: red");
   }        
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
bizActivity8.subCaseExeSituBDAfterRefresh = function(event){
	//debugger;
	//alert(5);
	var data = justep.xbl('subCaseExeSituBD');
   var total = data.getTotal();
   //alert(total);
   var grid = justep.xbl('grid3_2');
   for(var i=0;i<total;i++){
    var rowid = data.getID(i);
   // alert(rowid);
    grid.grid.setCellTextStyle(rowid,1,"color: red");
   }     
};


/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
bizActivity8.subCaseStepExeSituatBDAfterRefresh = function(event){
	var data = justep.xbl('subCaseStepExeSituatBD');
   var total = data.getTotal();
   //alert(total);
   var grid = justep.xbl('grid4_2');
   for(var i=0;i<total;i++){
    var rowid = data.getID(i);
   // alert(rowid);
    grid.grid.setCellTextStyle(rowid,1,"color: red");
//    debugger;
   }     
};



/**
	name:process#onAfterAdvance
	description: <b>[回调型事件]</b>流转之后
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
bizActivity8.flwAfterAdvance = function(event){
	debugger;
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setInteger("schemeId", parseInt(justep.Context.getProcessData1()));
	justep.Request.sendBizRequest(process, activity, "changeSchemeStateAction", param, null, null, null, null, null);
};
