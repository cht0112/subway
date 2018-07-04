var compilation = {};

var testSchemeBaseInfoId = "";
var testSchemeBusinessType = "";
var testDectionId = "";

compilation.saveMoreClick = function(event){
	//debugger;
	//alert("进入保存事件了");
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	testSchemeBaseInfoD.saveData();
	//alert("保存执行完了");
    testSchemeBaseInfoId = testSchemeBaseInfoD.getCurrentID();
	//alert("==testSchemeBaseInfoId==:"+testSchemeBaseInfoId);
    testSchemeBusinessType = testSchemeBaseInfoD.getValue("bUSINESSID");
	//alert("==testSchemeBusinessType==:"+testSchemeBusinessType);
	testDectionId = testSchemeBaseInfoD.getValue("dECTIONBASEDONID");
	//alert("==testDectionId==:"+testDectionId);
	
	 //保存后保存按钮变灰并禁用
	justep.xbl("saveMore").setDisabled(true);
	
	//业务阶段编码通过业务类型过滤
	var businessStageD = justep.xbl("businessStageD");
	businessStageD.setFilter("filter0", "BUSINESS_STAGE_CODE.bUSINESSID="+testSchemeBusinessType);
	businessStageD.refreshData();
	
	//测试用例基本 信息用检测依据Id过滤
	var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
	testCaseBaseInfoD.setFilter("filter1", "tcbi.dECTIONBASEDONID="+testDectionId);
	testCaseBaseInfoD.refreshData();
	justep.xbl("saveMoreD").setDisabled(false);
};

compilation.saveMoreDClick = function(event){
	//alert("进入保存Dtail事件了");
	debugger;
	var testSchemeCaseInfoD = justep.xbl("testSchemeCaseInfoD");
	var schemeCaseArray = new Array();
	var businessCD = justep.xbl("businessCD");
	var businessStage = businessCD.getValue("businessStage");
	for(var j = 0;j < testSchemeCaseInfoD.getCount();j++){
		var idd = testSchemeCaseInfoD.getID(j);
		var testScheme2 = testSchemeCaseInfoD.getValue("tESTSCHEMEID",idd);
		if(testScheme2==testSchemeBaseInfoId){
				//alert("If");
				//flag = false;
				schemeCaseArray.push(idd);
		}
	}
	testSchemeCaseInfoD.deleteData(schemeCaseArray);
	testSchemeCaseInfoD.saveData();
	if(businessStage != "" && businessStage != null){
		
		var testCaseGrid = justep.xbl("testCaseGrid").grid;
		var checkColIndex = testCaseGrid.getColIndexById("checkBox");
		var checkedIDs = testCaseGrid.getCheckedRows(checkColIndex);
		if (checkedIDs == null || checkedIDs == "") {
			alert("请选择用例！");
			return;
		}
		var checkedIDsArray = checkedIDs.split(",");
		for(var i=0; i<checkedIDsArray.length;i++){
			//alert(i+"eee");
			var id = checkedIDsArray[i];
			var testCaseId = testCaseGrid.getValueById(id, "tESTCASEID");
			//alert(testCaseId);
			var versionId = testCaseGrid.getValueById(id, "tESTCASEVER");
			var detectionSort = testCaseGrid.getValueById(id, "aPPLYFOROBJECT");
			//alert("****对象类别***"+detectionSort);
			var deviceObject = testCaseGrid.getValueById(id, "aPPLYFORDEVICETYPE");
			//alert("****对象***"+deviceObject);
			testSchemeCaseInfoD.refreshData();
			testSchemeCaseInfoD.newData();
			testSchemeCaseInfoD.setValue("tESTSCHEMEID",testSchemeBaseInfoId);
			testSchemeCaseInfoD.setValue("bUSINESSID",testSchemeBusinessType);
			testSchemeCaseInfoD.setValue("bUSINESSSTAGE", businessStage);
			testSchemeCaseInfoD.setValue("aPPLYFOROBJECT", detectionSort);
			testSchemeCaseInfoD.setValue("aPPLYFORDEVICETYPE", deviceObject);
			testSchemeCaseInfoD.setValue("tESTCASEVER", versionId);
			testSchemeCaseInfoD.setValue("tESTCASEID", testCaseId);
			//alert("第"+(i+1)+"次");
			testSchemeCaseInfoD.saveData();
		}
		//testSchemeCaseInfoD.saveData();
		//alert("victory");
		 //保存后保存按钮变灰并禁用
		justep.xbl("saveMoreD").setDisabled(true);
	}else{
		alert("请重新选择业务阶段！");
	}
};

compilation.testSchemeBaseInfoDAfterNew = function(event){
	//debugger;
	//alert('eeeeee');
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	testSchemeBaseInfoD.setValue("vALIDSTATE",1);
	testSchemeBaseInfoD.setValue("vALIDSTATECNAME","未应用");
};



compilation.testSchemeBaseInfoDValueChanging = function(event){
	//debugger;
	if(event.value != event.originalValue){
		justep.xbl("saveMore").setDisabled(false);
	}
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
compilation.testCaseBaseInfoDAfterRefresh = function(event){
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

compilation.testCaseGrid_calmarkRender = function(event){
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
				html = "<a href=\"#\" id=\"btnselect\" onclick=\"compilation.chakan('"
				+ id + "',"+ver+",'"+testId+"')\" >查看指标</a>";
				break;
			}
		}
//		html = "<a href=\"#\" id=\"btnselect\" onclick=\"compilation.chakan('"
//				+ id + "',"+ver+",'"+testId+"')\" >查看指标</a>";
//				//alert(html);

	return html;
};

compilation.chakan = function (id,ver,testId) {
	//alert(4);
	justep.xbl("relationWD").open({"id":id,"ver":ver,"testId":testId});
};

compilation.model1Load = function(event){
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	testSchemeBaseInfoD.setFilter("filterProcess", "TEST_SCHEME_BASE_INFO="+justep.Context.getProcessData1());
	testSchemeBaseInfoD.refreshData();
	if(testSchemeBaseInfoD.getCount()>0){
		var dectionId = testSchemeBaseInfoD.getValue("dECTIONBASEDONID", justep.Context.getProcessData1());
		var businessId = testSchemeBaseInfoD.getValue("bUSINESSID", justep.Context.getProcessData1());
		var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
		testCaseBaseInfoD.setFilter("caseFilter1", "tcbi.dECTIONBASEDONID="+dectionId);
		testCaseBaseInfoD.refreshData();
		var businessStageD = justep.xbl("businessStageD");
		businessStageD.setFilter("filter0", "BUSINESS_STAGE_CODE.bUSINESSID="+businessId);
		businessStageD.refreshData();
	}
};

compilation.gridSelect1Closeup = function(event){
	debugger;
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	var dectionId = testSchemeBaseInfoD.getValue("dECTIONBASEDONID", justep.Context.getProcessData1());
	if(dectionId != null && dectionId != ""){
		var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
		testCaseBaseInfoD.setFilter("caseFilter1", "tcbi.dECTIONBASEDONID="+dectionId);
		testCaseBaseInfoD.refreshData();
	}
};
