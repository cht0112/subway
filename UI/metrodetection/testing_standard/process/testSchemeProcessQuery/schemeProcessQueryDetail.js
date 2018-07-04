var schemeProcessQueryDetail = {};

schemeProcessQueryDetail.tabProcessChartSelect = function(event){	
	load_part("vProcessChart");
	var mainData = justep.xbl("dataMain");
	var pi = mainData.getValue("sFlowID");
	justep.xbl('processChart').loadByPI(pi);
};


schemeProcessQueryDetail.gridMainRowDblClick = function(event){	 
	  var tabs = justep.xbl("tabs").tabbar;
	  tabs.setTabActive("tabDetail");
};

schemeProcessQueryDetail.model1ModelConstructDone = function(event){
	//debugger;
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dataMain');
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	if (operator == "view") {
		data.filters.setFilter("buyApplyFilter", "SA_Task='" + id + "'");
		data.refreshData();
		var processData1 = data.getValue("sData1", data.getCurrentID());
		testSchemeBaseInfoD.setFilter("testApplicationDataFilter","TEST_SCHEME_BASE_INFO ="+processData1);
		testSchemeBaseInfoD.refreshData();
		var schemeId = testSchemeBaseInfoD.getCurrentID();
		//alert(schemeId);
		var testSchemeCaseInfoD = justep.xbl("testSchemeCaseInfoD");
		var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
		testSchemeCaseInfoD.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+schemeId);
		testSchemeCaseInfoD.refreshData();
		//var businessStage = testSchemeCaseInfoD.getValue("bUSINESSSTAGE", 0);
		//var businessStageName = testSchemeCaseInfoD.getValue("bUSINESSSTAGECNAME", 0);
		//alert("==businessStage==: "+businessStage);
		//alert("==businessStage==: "+businessStageName);
//		if(businessStage != null && businessStage != ""){
//			var businessCD =justep.xbl("businessCD");
//			businessCD.setValue("businessId", businessStage);
//			businessCD.setValue("businessStageName", businessStageName);
//		}
//		for(var i=0;i<testSchemeCaseInfoD.getCount();i++){
//			var a = testSchemeCaseInfoD.getRowId(i);
//			//alert(a);
//			var tsetCaseId = testSchemeCaseInfoD.getValue("tESTCASEID");
//			//alert(tsetCaseId);
//			var testCaseVer = testSchemeCaseInfoD.getValue("tESTCASEVER");
//			//alert(testCaseVer);
//			alert(testCaseBaseInfoD.getCount());
//			for(var j=0;j<testCaseBaseInfoD.getCount();j++){
//				var id = testCaseBaseInfoD.getRowId(j);
//				//alert(id);
//				var testCaseId2 = testCaseBaseInfoD.getValue("tESTCASEID",id);
//				//alert(testCaseId2);
//				var testCaseVer2 = testCaseBaseInfoD.getValue("tESTCASEVER",id);
//				if((tsetCaseId==testCaseId2)&&(testCaseVer==testCaseVer2)){
//					//alert("If");
//					testCaseBaseInfoD.setValue("checkBox",true,id);
//				}
//			}
//		}
		
//		alert(testApplicationData.getCount());
//		alert(data.getCount());
	}	
};

var flag = true;
schemeProcessQueryDetail.trigger1Click = function(event){
//debugger;
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dataMain');
	//var testApplicationData = justep.xbl("testApplicationData");
	var sFlowID = id;
	if(flag){
		load_part("view2");
		$('#view2').css('display','block');
		$('#view2').css('border-color','#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0');
		$('#view2').css('border-style','double double double double');
		$('#view2').css('border-width','1px 1px 1px 1px');
		if (operator == "view") {	
			var report = justep.xbl("report1");
			var reportData = justep.xbl("reportData");
			reportData.setStringVar("sFlowID", sFlowID);
			report.refresh();
		}
		var cc = justep.Request.convertURL(
			"/UI/metrodetection/detection_Process_Related/process/detectionProcessQuery/images/move_up.gif");
		$("#trigger1").attr("src", cc);
		flag=false;
	}else{
		$('#view2').css('display','none');
		var cc = justep.Request.convertURL(
			"/UI/metrodetection/detection_Process_Related/process/detectionProcessQuery/images/move_down.gif");
		$("#trigger1").attr("src", cc);
		flag=true;
	}
};

