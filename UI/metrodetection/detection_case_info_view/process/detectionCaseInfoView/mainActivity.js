var mainActivity = {};

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
mainActivity.grdMainRowClick = function(event){
	//$('#vDetail').show();
	var tempData = justep.xbl("tempData");
	var disStyle = tempData.getValue("name");
	var rowId = event.rowID;
	var dataMain = null;
	if(disStyle == "version") {
		dataMain = justep.xbl("caseTree");
	} else if(disStyle == "case") {
		dataMain = justep.xbl("caseTreeV");
	} else if(disStyle == "detObj") {
		dataMain = justep.xbl("caseTreeObj");
	} else if(disStyle == "detObjCase") {
		dataMain = justep.xbl("caseTreeObjV");
	}
	var vali = dataMain.getValue("fPARENTID", rowId);
	var lev = dataMain.getValue("tREESN", rowId);
	var rowVer = dataMain.getValue("cASEVERSION", rowId);
	var caseIdVali = dataMain.getValue("cASEID", rowId);
	var cData = justep.xbl("caseData");
	var detectionCaseData = justep.xbl("caseDetectionInfo");
	var subCaseData = justep.xbl("subCaseData");
	var stepData = justep.xbl("subCaseStepData");
	if(rowId == 'root') {
		$('#div4').hide();
	} else {
		$('#div4').show();
		if(caseIdVali != "") {
			if(lev == 2) {//用例
				$("#label5").hide();
				$("#subcaseView").hide();
				var caseId = dataMain.getValue("cASEID", rowId);
				//用例信息和用例检测信息
				cData.setFilter("filter0", "tcbi.tESTCASEID='"+caseId+"'and tcbi.tESTCASEVER="+rowVer);
				detectionCaseData.setFilter("filter2", "tcdi.tESTCASEID='"+caseId+"' and tcdi.tESTCASEVER="+rowVer);
				cData.refreshData();
				detectionCaseData.refreshData();
			} else if(lev == 3) {//子用例
				$("#label5").show();
				$("#subcaseView").show();
				$("#tabPanel1").show();
				$("#view1").show();
				var caseId = dataMain.getValue("cASEID", rowId);
				var subCaseId = rowId.split("!=!")[1];
				//用例信息和用例检测信息
				cData.setFilter("filter0", "tcbi.tESTCASEID='"+caseId+"' and tcbi.tESTCASEVER="+rowVer);
				detectionCaseData.setFilter("filter2", "tcdi.tESTCASEID='"+caseId+"' and tcdi.tESTCASEVER="+rowVer);
				cData.refreshData();
				detectionCaseData.refreshData();
				//子用例信息
				subCaseData.setFilter("filter4", "stcbi.sUBTESTCASEID='"+subCaseId+"'" + " and stcbi.tESTCASEID='"+caseId+"' and stcbi.tESTCASEVER="+rowVer);
				subCaseData.refreshData();
				//子用例执行步骤
				stepData.setFilter("filterStep", "SUB_TEST_CASE_STEP_INFO.sUBTESTCASEID='"+subCaseId+"'" + " and SUB_TEST_CASE_STEP_INFO.tESTCASEID='"+caseId+"' and " + 
									"SUB_TEST_CASE_STEP_INFO.tESTCASEVER="+rowVer);
				var c = stepData.getCount();
				stepData.refreshData();
			}
		} else {
			//alert('这是第二级');
		}
		/*if(vali == 'root') {//用例点击时
			$("#subcaseView").hide();
			$("#label5").hide();
			//用例信息和用例检测信息
			cData.setFilter("filter0", "tcbi.tESTCASEID='"+rowId+"'and tcdi.tESTCASEVER="+rowVer);
			detectionCaseData.setFilter("filter2", "tcdi.tESTCASEID='"+rowId+"'");
			cData.refreshData();
			detectionCaseData.refreshData();
		} else {//子用例点击时
			//alert("子用例id："+vali + "用例id：" + rowId);
			$("#label5").show();
			$("#subcaseView").show();
			$("#tabPanel1").show();
			$("#view1").show();
			//用例信息和用例检测信息
			cData.setFilter("filter0", "tcbi.tESTCASEID='"+vali+"'");
			detectionCaseData.setFilter("filter2", "tcdi.tESTCASEID='"+vali+"'");
			cData.refreshData();
			detectionCaseData.refreshData();
			//子用例信息
			subCaseData.setFilter("filter4", "stcbi.sUBTESTCASEID='"+rowId+"'" + " and stcbi.tESTCASEID='"+vali+"'");
			subCaseData.refreshData();
			//子用例执行步骤
			stepData.setFilter("filterStep", "SUB_TEST_CASE_STEP_INFO.sUBTESTCASEID='"+rowId+"'" + " and SUB_TEST_CASE_STEP_INFO.tESTCASEID='"+vali+"'");
			var c = stepData.getCount();
			stepData.refreshData();
		}*/
	}
	
	
	
};
/**
	步骤数据准备信息
**/
mainActivity.tabPage2Select = function(event){
	var stepData = justep.xbl("subCaseStepData");
	var stepId = stepData.getCurrentID();
	var stepPrePareData = justep.xbl("stepPrepareData");
	var rowId = stepData.getValue("sUBTESTCASEID", stepId);
	var vali = stepData.getValue("tESTCASEID", stepId);
	
	var stepId = stepData.getValue("sUBTESTCASESTEPID", stepId);
	if(stepId != null && stepId != "") {
		stepPrePareData.setFilter("filterStepData", "SUB_TEST_CASE_DATA_INFO.sUBTESTCASESTEPID="+stepId + " and SUB_TEST_CASE_DATA_INFO.sUBTESTCASEID='"+rowId+"' and SUB_TEST_CASE_DATA_INFO.tESTCASEID='"+vali+"'");
		stepPrePareData.refreshData();
	}
};

mainActivity.model1Load = function(event){
	var tempData = justep.xbl("tempData");
	tempData.setValue("name", "version");
	$('#grid4').hide();
	$('#gridObj').hide();
	$('#gridObjV').hide();
	var cData = justep.xbl("caseData");
	var detectionCaseData = justep.xbl("caseDetectionInfo");
	var stepData = justep.xbl("subCaseStepData");
	cData.loadData();
	var fId = cData.getID(0);
	var rowId = cData.getValue("tESTCASEID", fId);
	var rowVer = cData.getValue("tESTCASEVER", fId);
	//用例信息和用例检测信息
	cData.setFilter("filter0", "tcbi.tESTCASEID='"+rowId+"'");
	detectionCaseData.setFilter("filter2", "tcdi.tESTCASEID='"+rowId+"' and tcdi.tESTCASEVER="+rowVer);
	cData.refreshData();
	detectionCaseData.refreshData();
	stepData.loadData();
	
	//var subCaseData = justep.xbl("subCaseData");
	//subCaseData.attr("required",false);
	//$("#subcaseView").hide();
	$("#label5").hide();
	$("#tabPanel1").hide();
	$("#view1").hide();
};

mainActivity.selectItem2Select = function(event){
	$('#grdMain').hide();
	$('#gridObj').hide();
	$('#gridObjV').hide();
	$('#grid4').show();
	var tempData = justep.xbl("tempData");
	tempData.setValue("name", "case");
};

mainActivity.selectItem1Select = function(event){
	$('#grid4').hide();
	$('#gridObj').hide();
	$('#gridObjV').hide();
	$('#grdMain').show();
	var tempData = justep.xbl("tempData");
	tempData.setValue("name", "version");
};

mainActivity.selectItem3Select = function(event){
	$('#grid4').hide();
	$('#grdMain').hide();
	$('#gridObjV').hide();
	$('#gridObj').show();
	var tempData = justep.xbl("tempData");
	tempData.setValue("name", "detObj");
};

mainActivity.selectItem4Select = function(event){
	$('#grid4').hide();
	$('#grdMain').hide();
	$('#gridObj').hide();
	$('#gridObjV').show();
	var tempData = justep.xbl("tempData");
	tempData.setValue("name", "detObjCase");
};
