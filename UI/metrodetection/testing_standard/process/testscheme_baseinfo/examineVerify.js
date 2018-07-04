var examineVerify = {};


examineVerify.testCaseBaseInfoDAfterRefresh = function(event){
	debugger;
	var id = justep.Context.getProcessData1();
	//alert(id);
	var testSchemeCaseInfoD = justep.xbl("testSchemeCaseInfoD");
	var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
	testSchemeCaseInfoD.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+id);
	testSchemeCaseInfoD.refreshData();
	debugger;
	var businessStage = testSchemeCaseInfoD.getValue("bUSINESSSTAGE", 0);
	var businessStageName = testSchemeCaseInfoD.getValue("bUSINESSSTAGECNAME", 0);
	//alert("==businessStage==: "+businessStage);
	//alert("==businessStage==: "+businessStageName);
	if(businessStage != null && businessStage != ""){
		var businessCD =justep.xbl("businessCD");
		businessCD.setValue("businessStage", businessStage);
		businessCD.setValue("businessStageName", businessStageName);
	}
	for(var i=0;i<testSchemeCaseInfoD.getCount();i++){
		var a = testSchemeCaseInfoD.getRowId(i);
		//alert(a);
		var tsetCaseId = testSchemeCaseInfoD.getValue("tESTCASEID",a);
		//alert(tsetCaseId);
		var testCaseVer = testSchemeCaseInfoD.getValue("tESTCASEVER",a);
		//alert(testCaseVer);
		
		for(var j=0;j<testCaseBaseInfoD.getCount();j++){
			var id = testCaseBaseInfoD.getRowId(j);
			//alert(id);
			var testCaseId2 = testCaseBaseInfoD.getValue("tESTCASEID",id);
			//alert(testCaseId2);
			var testCaseVer2 = testCaseBaseInfoD.getValue("tESTCASEVER",id);
			if((tsetCaseId==testCaseId2)&&(testCaseVer==testCaseVer2)){
				//alert("If");
				testCaseBaseInfoD.setValue("checkBox",true,id);
			}
		}
	}
};

examineVerify.testCaseGrid_calmarkRender = function(event){
	var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
	var indexAndRelationD = justep.xbl("indexAndRelationD");
	indexAndRelationD.refreshData();
	var indexTotal = indexAndRelationD.getCount();
	//alert(testCaseBaseInfoD.getCount());
		var id = event.rowId;
		//alert(id);
		var ver = testCaseBaseInfoD.getValue("tESTCASEVER",id);
		//alert(ver);
		var testId = testCaseBaseInfoD.getValue("tESTCASEID",id);
		var html = "";
		for(var j=0;j<indexTotal;j++){
			var indexId = indexAndRelationD.getID(j);
			var ver1 = indexAndRelationD.getValue("tESTCASEVER",indexId);
			var testId1 = indexAndRelationD.getValue("tESTCASEID",indexId);
			if(ver==ver1 && testId==testId1){
				html = "<a href=\"#\" id=\"btnselect\" onclick=\"examineVerify.chakan('"
				+ id + "',"+ver+",'"+testId+"')\" >查看指标</a>";
				break;
			}
		}
//		html = "<a href=\"#\" id=\"btnselect\" onclick=\"examineVerify.chakan('"
//				+ id + "',"+ver+",'"+testId+"')\" >查看指标</a>";
//				//alert(html);

	return html;
};

examineVerify.chakan = function (id,ver,testId) {
	//alert(4);
	justep.xbl("relationWD").open({"id":id,"ver":ver,"testId":testId});
};

examineVerify.model1Load = function(event){
	debugger;
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	testSchemeBaseInfoD.setFilter("filterProcess", "TEST_SCHEME_BASE_INFO="+justep.Context.getProcessData1());
	testSchemeBaseInfoD.refreshData();
	if(testSchemeBaseInfoD.getCount()>0){
		var dectionId = testSchemeBaseInfoD.getValue("dECTIONBASEDONID", justep.Context.getProcessData1());
		var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
		testCaseBaseInfoD.setFilter("caseFilter1", "tcbi.dECTIONBASEDONID="+dectionId);
		testCaseBaseInfoD.refreshData();
	}
};
