var testSckemaActivity = {};

testSckemaActivity._inputParams = {};
testSckemaActivity._defaultInputParams = {
	yuId : null,
	businessId : null,
	testSchemeId : null
};

//接受
testSckemaActivity.windowReceiver1Receive = function(event) {
	for (o in testSckemaActivity._defaultInputParams)
		testSckemaActivity._inputParams[o] = testSckemaActivity._defaultInputParams[o];

	// personDetail._inputParams.openMode = event.data.openMode;
	if (event.data.yuId)
		testSckemaActivity._inputParams.yuId = event.data.yuId;
	if (event.data.businessId)
		testSckemaActivity._inputParams.businessId = event.data.businessId;
	if (event.data.testSchemeId)
		testSckemaActivity._inputParams.testSchemeId = event.data.testSchemeId;
	//alert(testSckemaActivity._inputParams.testSchemeId);
	var busiTypeData = justep.xbl("busiTypeData");
	// alert(busiTypeData.getTotal());
	busiTypeData.setFilter("filter1", "BUSINESS_STAGE_CODE.bUSINESSID="
			+ testSckemaActivity._inputParams.businessId);
	busiTypeData.refreshData();
	var jcfaylData = justep.xbl("jcfaylData");
	// alert(jcfaylData);
	//jcfaylData.refreshData();
	jcfaylData.newData();
	
	// jcfaylData.setValue("tESTSCHEMEID",
	// testSckemaActivity._inputParams.testSchemeId);
	// jcfaylData.setValue("bUSINESSID",
	// testSckemaActivity._inputParams.businessId);
	// jcfaylData.refreshData();
	// alert(jcfaylData.getValue("tESTSCHEMEID"));
	var csjbxxbizData = justep.xbl("csjbxxbizData");
	// alert(csjbxxbizData.getTotal());
	csjbxxbizData.setFilter("filter0", "tcbi.dECTIONBASEDONID="
			+ testSckemaActivity._inputParams.yuId);
	csjbxxbizData.refreshData();
	var cacheData = justep.xbl("cacheData");
	cacheData.newData();
	//cacheData.setValue("bUSINESSTAGE",1);
	//var businessStage = justep.xbl("gridSelect1");
	//businessStage.setValue("bUSINESSTAGE", testSckemaActivity._inputParams.businessId);
	//jcfaylData.
};
//保存
testSckemaActivity.image1Click = function(event) {
	debugger;
	var jcfaylData = justep.xbl("jcfaylData");
	jcfaylData.setValue("tESTSCHEMEID",
			testSckemaActivity._inputParams.testSchemeId);
	jcfaylData.setValue("bUSINESSID",
			testSckemaActivity._inputParams.businessId);
	
	// jcfaylData.refreshData();
	 //alert(testSckemaActivity._inputParams.testSchemeId);

	var cacheData = justep.xbl("cacheData");
	var busStageId = cacheData.getValue("bUSINESSTAGE");
	//alert(busStageId);

//	var dAgent = justep.xbl("dAgent");
//	if (!dAgent.saveData())
//		return;
//
	var gridCsjb = justep.xbl("gridCsjb").grid;
	//alert(gridCsjb);
	var checkColIndex = gridCsjb.getColIndexById("calcCheckBox");
	
	var checkedIDs = gridCsjb.getCheckedRows(checkColIndex);
	//alert(checkedIDs);
//	
//	if (!checkedIDs) {
//		alert("请勾选数据！");
//		return;
//	}
//	if (!confirm("确实要保存当前数据吗？"))
//		return;
//	var agents = new justep.Request.MapParam();
	var checkedIDsArray = checkedIDs.split(",");
	//alert(checkedIDsArray.length);
	for ( var i = 0; i < checkedIDsArray.length; i++) {
		//alert(i+"****");
		var id = checkedIDsArray[i];
		//alert(id);
		var testCaseId = gridCsjb.getValueById(id, "tESTCASEID");
		var versionId = gridCsjb.getValueById(id, "tESTCASEVER");
		var flag = true;
		for(var j = 0;j < jcfaylData.getCount();j++){
			var idd = jcfaylData.getRowId(j);
			//alert("&&&&&&idd&&&&&&&"+idd);
			var testCaseId2 = jcfaylData.getValue("tESTCASEID",idd);
			var version2 = jcfaylData.getValue("tESTCASEVER",idd);
			//alert("version==="+version2);
			//alert("&&&&&&testCaseId2&&&&&&&"+testCaseId2);
			var businesStage2 = jcfaylData.getValue("bUSINESSSTAGE",idd);
			var testScheme2 = jcfaylData.getValue("tESTSCHEMEID",idd);
			if((testCaseId==testCaseId2)&&(versionId==version2)&&(businesStage2==busStageId)&&(testScheme2==testSckemaActivity._inputParams.testSchemeId)){
				//alert("If");
				flag = false;
			}
		}
		if(!flag){
			continue;
		}
		//alert(versionId);
		var detectionSort = gridCsjb.getValueById(id, "aPPLYFOROBJECT");
		//alert("****对象类别***"+detectionSort);
		var deviceObject = gridCsjb.getValueById(id, "aPPLYFORDEVICETYPE");
		//alert("****对象***"+deviceObject);
		if(flag){
			jcfaylData.newData();
			jcfaylData.setValue("tESTSCHEMEID",
					testSckemaActivity._inputParams.testSchemeId);
			jcfaylData.setValue("bUSINESSID",
					testSckemaActivity._inputParams.businessId);
		}
		
		jcfaylData.setValue("bUSINESSSTAGE", busStageId);
		jcfaylData.setValue("aPPLYFOROBJECT", detectionSort);
		jcfaylData.setValue("aPPLYFORDEVICETYPE", deviceObject);
		jcfaylData.setValue("tESTCASEVER", versionId);
		jcfaylData.setValue("tESTCASEID", testCaseId);
		
		//alert("第"+(i+1)+"次");
		
//		agents.put(id, new justep.Request.SimpleParam(version,
//				justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	}
	jcfaylData.saveData();
	var save = document.getElementById("saveMas");
	save.disabled=true;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src",tt);
};

testSckemaActivity.gridSelect1Closeup = function(event){
	//alert(testSckemaActivity._inputParams.testSchemeId+"项目Id");
	var b = justep.xbl("gridSelect1");
	var bValue = b.getValue("bUSINESSTAGE");
	//alert(bValue+"业务阶段Id");
	var csjbxxbizData = justep.xbl("csjbxxbizData");
	//alert(csjbxxbizData.getCount()+"csjbxxbizData的数量");
	var jcfaylData = justep.xbl("jcfaylData");
	if(bValue != null && bValue != ""){
		//jcfaylData.refreshData();
		jcfaylData.setFilter("filter0", "TEST_SCHEME_CASE_INFO.bUSINESSSTAGE="+bValue+" and TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+testSckemaActivity._inputParams.testSchemeId);
		jcfaylData.refreshData();
		//jcfaylData.setFilter("filter1", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+testSckemaActivity._inputParams.testSchemeId);
		//jcfaylData.refreshData();
		var count = jcfaylData.getCount();
		//alert(count+"总数");
		for(var i = 0;i < count;i++){
			var a = jcfaylData.getCurrentID();
			//alert(a);
			var tsetCaseId = jcfaylData.getValue("tESTCASEID");
			//alert(tsetCaseId);
			var testCaseVer = jcfaylData.getValue("tESTCASEVER");
			//alert(testCaseVer);
			
			for(var j=0;j<csjbxxbizData.getCount();j++){
				var id = csjbxxbizData.getRowId(j);
				//alert(id);
				var testCaseId2 = csjbxxbizData.getValue("tESTCASEID",id);
				//alert(testCaseId2);
				var testCaseVer2 = csjbxxbizData.getValue("tESTCASEVER",id);
				if((tsetCaseId==testCaseId2)&&(testCaseVer==testCaseVer2)){
					//alert("If");
					csjbxxbizData.setValue("calcCheckBox",true,id);
				}
			}
			jcfaylData.next();
		}
	}
	
};

