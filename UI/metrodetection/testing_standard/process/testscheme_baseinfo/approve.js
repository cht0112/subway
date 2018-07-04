var approve = {};


approve.enableClick = function(event){
	//alert(3);
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	//alert(testSchemeBaseInfoD);
	testSchemeBaseInfoD.refreshData();
	testSchemeBaseInfoD.setValue("vALIDSTATE",2);
	testSchemeBaseInfoD.setValue("vALIDSTATECNAME","应用");
	testSchemeBaseInfoD.saveData();
};



approve.forbiddenClick = function(event){
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	testSchemeBaseInfoD.refreshData();
	testSchemeBaseInfoD.setValue("vALIDSTATE",3);
	testSchemeBaseInfoD.setValue("vALIDSTATECNAME","废弃");
	testSchemeBaseInfoD.saveData();
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
approve.testCaseBaseInfoDAfterRefresh = function(event){
	//debugger;
	var id = justep.Context.getProcessData1();
	//alert(id);
	var testSchemeCaseInfoD = justep.xbl("testSchemeCaseInfoD");
	var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
	testSchemeCaseInfoD.setFilter("filter0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+id);
	testSchemeCaseInfoD.refreshData();
	var businessStage = testSchemeCaseInfoD.getValue("bUSINESSSTAGE", 0);
	var businessStageName = testSchemeCaseInfoD.getValue("bUSINESSSTAGECNAME", 0);
	//alert("==businessStage==: "+businessStage);
	//alert("==businessStage==: "+businessStageName);
	if(businessStage != null && businessStage != ""){
		var businessCD =justep.xbl("businessCD");
		businessCD.setValue("businessId", businessStage);
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


approve.testCaseGrid_calmarkRender = function(event){
	//debugger;
	var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
	var indexAndRelationD = justep.xbl("indexAndRelationD");
	indexAndRelationD.refreshData();
	var indexTotal = indexAndRelationD.getTotal();
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
				html = "<a href=\"#\" id=\"btnselect\" onclick=\"approve.chakan('"
				+ id + "',"+ver+",'"+testId+"')\" >查看指标</a>";
				break;
			}
		}
//		html = "<a href=\"#\" id=\"btnselect\" onclick=\"approve.chakan('"
//				+ id + "',"+ver+",'"+testId+"')\" >查看指标</a>";
//				//alert(html);

	return html;
};
approve.chakan = function (id,ver,testId) {
	//alert(4);
	justep.xbl("relationWD").open({"id":id,"ver":ver,"testId":testId});
};

approve.model1Load = function(event){
	//debugger
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
