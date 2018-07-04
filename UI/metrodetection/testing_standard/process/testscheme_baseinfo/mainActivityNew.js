var mainActivityNew = {};

var testSchemeBaseInfoId = "";
var testSchemeBusinessType = "";
var testDectionId = "";

mainActivityNew.saveMoreClick = function(event) {
	// debugger;
	// alert("进入保存事件了");
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	testSchemeBaseInfoD.saveData();
	// alert("保存执行完了");
	testSchemeBaseInfoId = testSchemeBaseInfoD.getCurrentID();
	testSchemeBusinessType = testSchemeBaseInfoD.getValue("bUSINESSID");
	testDectionId = testSchemeBaseInfoD.getValue("dECTIONBASEDONID");
	// 保存后保存按钮变灰并禁用
	justep.xbl("saveMore").setDisabled(true);
	justep.xbl("saveMoreD").setDisabled(false);
	justep.xbl("gridSelect4").setDisabled(false);

	// 业务阶段编码通过业务类型过滤
	var businessStageD = justep.xbl("businessStageD");
	businessStageD.setFilter("filter0", "BUSINESS_STAGE_CODE.bUSINESSID="
			+ testSchemeBusinessType);
	businessStageD.refreshData();
//	var businessCD = justep.xbl("businessCD");
//	businessCD.setValue("businessStageName", "", 0);

	// 测试用例基本 信息用检测依据Id过滤
	var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
	testCaseBaseInfoD.setFilter("filter1", "tcbi.dECTIONBASEDONID="
			+ testDectionId);
	testCaseBaseInfoD.refreshData();
};

mainActivityNew.saveMoreDClick = function(event) {
	// alert("进入保存Dtail事件了");
	//debugger;
	var testSchemeCaseInfoD = justep.xbl("testSchemeCaseInfoD");
	var schemeCaseArray = new Array();
	var businessCD = justep.xbl("businessCD");
	var businessStage = businessCD.getValue("businessStage");

	for ( var j = 0; j < testSchemeCaseInfoD.getCount(); j++) {
		var idd = testSchemeCaseInfoD.getID(j);
		var testScheme2 = testSchemeCaseInfoD.getValue("tESTSCHEMEID", idd);
		if (testScheme2 == testSchemeBaseInfoId) {
			schemeCaseArray.push(idd);
		}
	}
	
		testSchemeCaseInfoD.deleteData(schemeCaseArray);
		testSchemeCaseInfoD.saveData();
	
	if (businessStage != "" && businessStage != null) {
		debugger;
		var testCaseGrid = justep.xbl("testCaseGrid").grid;
		var checkColIndex = testCaseGrid.getColIndexById("checkBox");
		var checkedIDs = testCaseGrid.getCheckedRows(checkColIndex);
		if (checkedIDs == null || checkedIDs == "") {
			alert("请选择用例！");
			return;
		}
		var checkedIDsArray = checkedIDs.split(",");
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var testCaseId = testCaseGrid.getValueById(id, "tESTCASEID");
			var versionId = testCaseGrid.getValueById(id, "tESTCASEVER");
			var detectionSort = testCaseGrid.getValueById(id, "aPPLYFOROBJECT");
			// alert("****对象类别***"+detectionSort);
			var deviceObject = testCaseGrid.getValueById(id,
					"aPPLYFORDEVICETYPE");
			// alert("****对象***"+deviceObject);
			testSchemeCaseInfoD.refreshData();
			testSchemeCaseInfoD.newData();
			// alert(testSchemeBaseInfoId+",=="+testSchemeBusinessType+",=="+testDectionId);
			testSchemeCaseInfoD.setValue("tESTSCHEMEID", testSchemeBaseInfoId);
			testSchemeCaseInfoD.setValue("bUSINESSID", testSchemeBusinessType);
			testSchemeCaseInfoD.setValue("bUSINESSSTAGE", businessStage);
			testSchemeCaseInfoD.setValue("aPPLYFOROBJECT", detectionSort);
			testSchemeCaseInfoD.setValue("aPPLYFORDEVICETYPE", deviceObject);
			testSchemeCaseInfoD.setValue("tESTCASEVER", versionId);
			testSchemeCaseInfoD.setValue("tESTCASEID", testCaseId);
			// alert("第"+(i+1)+"次");
			 testSchemeCaseInfoD.saveData();
		}

		//testSchemeCaseInfoD.saveData();
		// alert("victory");
		// 保存后保存按钮变灰并禁用
		justep.xbl("saveMoreD").setDisabled(true);
	} else {
		alert("请重新选业务阶段！");
	}
};

mainActivityNew.testSchemeBaseInfoDAfterNew = function(event) {
	// debugger;
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	testSchemeBaseInfoD.setValue("vALIDSTATE", 1);
	testSchemeBaseInfoD.setValue("vALIDSTATECNAME", "未应用");
};

mainActivityNew.testSchemeBaseInfoDValueChanging = function(event) {
	// debugger;
	if (event.value != event.originalValue) {
		justep.xbl("saveMore").setDisabled(false);
	}
};

mainActivityNew.testCaseGrid_calMarkRender = function(event) {
	var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
	var indexAndRelationD = justep.xbl("indexAndRelationD");
	indexAndRelationD.refreshData();
	var indexTotal = indexAndRelationD.getCount();
	var id = event.rowId;
	var ver = testCaseBaseInfoD.getValue("tESTCASEVER", id);
	var testId = testCaseBaseInfoD.getValue("tESTCASEID", id);
	var html = "";
	for ( var j = 0; j < indexTotal; j++) {
		var indexId = indexAndRelationD.getID(j);
		var ver1 = indexAndRelationD.getValue("tESTCASEVER", indexId);
		var testId1 = indexAndRelationD.getValue("tESTCASEID", indexId);
		// alert(indexId+",-"+ver1+",-"+testId1);
		if (ver == ver1 && testId == testId1) {
			html = "<a href=\"#\" id=\"btnselect\" onclick=\"mainActivityNew.chakan('"
					+ id + "'," + ver + ",'" + testId + "')\" >查看指标</a>";
			break;
		}
	}

	return html;
};

mainActivityNew.chakan = function(id, ver, testId) {
	justep.xbl("relationWD").open({
		"id" : id,
		"ver" : ver,
		"testId" : testId
	});
};

mainActivityNew.gridSelect1Closeup = function(event) {
	debugger;
	var testSchemeBaseInfoD = justep.xbl("testSchemeBaseInfoD");
	var dectionId = testSchemeBaseInfoD.getValue("dECTIONBASEDONID",
			justep.Context.getProcessData1());
	if (dectionId != null && dectionId != "") {
		var testCaseBaseInfoD = justep.xbl("testCaseBaseInfoD");
		testCaseBaseInfoD.setFilter("caseFilter1", "tcbi.dECTIONBASEDONID="
				+ dectionId);
		testCaseBaseInfoD.refreshData();
	}
};
