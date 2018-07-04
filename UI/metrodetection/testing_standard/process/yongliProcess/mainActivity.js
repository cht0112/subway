var mainActivity = {};
var caseId = "";
var casever = "";
var subId = "";
var caseName="";
mainActivity.insertClick = function(event){
	debugger;
	//用于回显
	var deviceObject = justep.xbl("gridSelect3").getValue("aPPLYFORDEVICETYPE");
	var zbusjData = justep.xbl("zbusjData");
	if(deviceObject != "" && deviceObject != null && deviceObject.length != 0){
		zbusjData.setFilter("filter1", "INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE="+deviceObject);
		zbusjData.refreshData();
		var zbhylysgxData = justep.xbl("zbhylysgxData");
		//alert(csjbxxbizData.getCount()+"csjbxxbizData的数量");
		var count = zbhylysgxData.getTotal();
		//alert(count+"总数");
		for(var i = 0;i < count;i++){
			var a = zbhylysgxData.getRowId(i);
			//alert(a);
			var testSubCaseId = zbhylysgxData.getValue("sUBTESTCASEID",a);
			if(testSubCaseId != subId){
				continue;
			}
			//var testBusinessId = zbhylysgxData.getValue("bUSINESSID");
			var indexBaseNo = zbhylysgxData.getValue("iNDEXNO",a);
			//alert(indexBaseNo);
		
			for(var j=0;j<zbusjData.getCount();j++){
				var idd = zbusjData.getRowId(j);
				//alert(id);
				if(idd == indexBaseNo){
					//alert("If");
					zbusjData.setValue("calcCheckBox",true,idd);
				}
//				else{
//					zbusjData.setValue("calcCheckBox",false,id);
//				}
			}
		}
	}
	
	justep.xbl("tabPanel1").setTabActive("tabPage2");
	
	var newData = justep.xbl("zbhylysgxData").newData();
	//justep.xbl("zbhylysgxData").newData();
	justep.xbl("zbhylysgxData").setValue("tESTCASEID",caseId);
	justep.xbl("zbhylysgxData").setValue("tESTCASEVER",casever);
	justep.xbl("zbhylysgxData").setValue("sUBTESTCASEID",subId);
	//justep.xbl("input1").setValue();
	justep.xbl("csyljbxxData").setValue("tESTCASENAME",caseName );
	justep.xbl("csyljbxxData").refreshData();
	//justep.xbl("ywlxdata").newData();
	
};

//对树的操作
mainActivity.gridTreeRowClick = function(event){
	var test = justep.xbl("gridData");
	var temp = test.getCurrentID();
	var isPar = "";
	var isParPar="";
	if(temp != null && temp != ""){
		isPar = test.getValue("fPARENTID",temp);
		isParPar = test.getValue("fPARENTID",isPar);
	}
	var rightData = justep.xbl("zbhylysgxData");
	//得到子用例，
	if(isParPar != "" && isParPar != null) {
		//alert(temp);
		rightData.setFilter("filter0", "riac.sUBTESTCASEID='"+temp+"'");
		rightData.refreshData();
		justep.xbl("tabPanel1").setTabActive("tabPage1");
		var id = document.getElementById("insertTrigger");
		id.disabled = false;
		var insertPic = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
		$("#insertTrigger").attr('src',insertPic);
		justep.xbl('insertTrigger').setDisabled(false);
		var subCaseData = justep.xbl("ceszyljbxxData");
		var caseData = justep.xbl("csyljbxxData");
		caseData.loadData();
		//alert(caseData.getTotal());
		subCaseData.loadData();
		//alert(subCaseData.getCount());
		subCaseData.setFilter("filter1", "SUB_TEST_CASE_BASE_INFO.sUBTESTCASEID='"+temp+"'");
		subCaseData.refreshData();
		caseId = subCaseData.getValue("tESTCASEID");
		//alert(caseId);
		casever = subCaseData.getValue("tESTCASEVER");
		//alert(casever);
		subId = subCaseData.getValue("sUBTESTCASEID");
		caseData.setFilter("filter2", "TEST_CASE_BASE_INFO.tESTCASEVER="+casever+" and TEST_CASE_BASE_INFO.tESTCASEID='"+caseId+"'");
		caseData.refreshData();
		var caseName = caseData.getValue("tESTCASENAME");
		//alert(caseName);
		//alert(caseId);
		//alert(casever);
	} else{
		var id = document.getElementById("insertTrigger");
		id.disabled = true;
		var insertPic = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
		$("#insertTrigger").attr('src',insertPic);
		justep.xbl('insertTrigger').setDisabled(true);
	}
	
};
function assetDelete(event){
	var data = justep.xbl('zbhylysgxData');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
		for (var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
		}
	}
}
//添加完后，在列表显示
mainActivity.grid3RowDblClick = function(event){
justep.xbl("tabPanel1").setTabActive("tabPage2");
};

//用检测对象过滤
mainActivity.gridSelect3Closeup = function(event){
	var csyljcxx2Data = justep.xbl("csyljcxx2Data");
	var csyljcxxData = justep.xbl("csyljcxxData");
	var detectionObject = csyljcxxData.getValue("aPPLYFOROBJECT");
	var deviceObject = csyljcxx2Data.getValue("aPPLYFORDEVICETYPE");
	//alert(deviceObject)
//	var detection = jcdxData.getValue("rowid");
//	if(detection != null && detection != ""){
//		jcdxData.setValue("rowid",detection);
//	}
	var indexBase = justep.xbl("zbusjData");
	if(deviceObject != "" && deviceObject != null && deviceObject.length != 0){
		indexBase.setFilter("filter1", "INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE="+deviceObject+" and INDEX_SYSTEM_VALUE.aPPLYFOROBJECT="+detectionObject);
		indexBase.refreshData();
		
		var zbhylysgxData = justep.xbl("zbhylysgxData");
		//alert(csjbxxbizData.getCount()+"csjbxxbizData的数量");
		var zbusjData = justep.xbl("zbusjData");
		zbusjData.refreshData();
		var count = zbhylysgxData.getTotal();
		//alert(count+"总数");
		for(var i = 0;i < count;i++){
			var a = zbhylysgxData.getRowId(i);
			//alert(a);
			var testSubCaseId = zbhylysgxData.getValue("sUBTESTCASEID",a);
			if(testSubCaseId != subId){
				continue;
			}
			//var testBusinessId = zbhylysgxData.getValue("bUSINESSID");
			var indexBaseNo = zbhylysgxData.getValue("iNDEXNO",a);
			//alert(indexBaseNo);
			
			for(var j=0;j<zbusjData.getCount();j++){
				var idd = zbusjData.getRowId(j);
				//alert(id);
				if(idd == indexBaseNo){
					//alert("If");
					zbusjData.setValue("calcCheckBox",true,idd);
				}
			}
		}
	}
	
};
//用检测对象类别过滤指标库数据表
mainActivity.gridSelect2Closeup = function(event){
	var Object = justep.xbl("jcdxlbData");
	var csyljcxxData = justep.xbl("csyljcxxData");
	var csyljcxx2Data = justep.xbl("csyljcxx2Data");
//	if(caseId != "" && caseId != null && caseId.length != 0){
//		csyljcxxData.setFilter("filter3", "TEST_CASE_DECTION_INFO.tESTCASEID='"+caseId+"' and TEST_CASE_DECTION_INFO.tESTCASEVER="+casever);
//		csyljcxxData.refreshData();
//	}
	//var gridSelect2 = justep.xbl("gridSelect2");
	//var gridSelect2Value = gridSelect2.getValue("aPPLYFOROBJECT");
	//alert(gridSelect2Value);
	var temp = justep.xbl("csyljcxxData");
	var gridSelect2Value = temp.getValue("aPPLYFOROBJECT");
	//alert(gridSelect2Value);
	if(gridSelect2Value != null && gridSelect2Value != ""){
		//alert(gridSelect2Value);
		csyljcxx2Data.setFilter("filter4", "TEST_CASE_DECTION_INFO.aPPLYFOROBJECT="+gridSelect2Value+
		" and TEST_CASE_DECTION_INFO.tESTCASEID='"+caseId+"' and TEST_CASE_DECTION_INFO.tESTCASEVER="+casever);
		csyljcxx2Data.refreshData();
		//alert(csyljcxx2Data.getCount());
		//alert(csyljcxx2Data.getValue("aPPLYFORDEVICETYPE",csyljcxx2Data.getCurrentId())+"@@@@@");
//		var device = justep.xbl("jcdxData");
//		device.setValue("dEVICETYPE",csyljcxx2Data.getValue("aPPLYFORDEVICETYPE",csyljcxx2Data.getCurrentId()));
//		device.refreshData();
	}
};

//保存
mainActivity.saveClick = function(event){
	var indexCase = justep.xbl("zbhylysgxData");
	var indexCase2 = justep.xbl("indexCaseData2");
	//var businessId = justep.xbl("ywlxdata").getValue("bUSINESSID");
//	alert(businessId+"***businessId***");
	var zbksjgrid = justep.xbl("zbksjgrid").grid;
	//alert(zbksjgrid);
	var checkColIndex = zbksjgrid.getColIndexById("calcCheckBox");
	var checkedIDs = zbksjgrid.getCheckedRows(checkColIndex);
	//alert(checkedIDs);
	var checkedIDsArray = checkedIDs.split(",");
	for(var i = 0;i < checkedIDsArray.length;i++){
	    var  id = checkedIDsArray[i];
//		alert("***id****: "+id);
	    var businessId = zbksjgrid.getValueById(id, "bUSINESSID");
	   // alert(businessId+" ****businessId***");
		var flag = false;
		
		for(var j = 0; j<indexCase.getCount(); j++){
			var indexCaseId = indexCase.getRowId(j);
			//alert(indexCaseId);
			var caseVer2 = indexCase.getValue("tESTCASEVER", indexCaseId);
			var caseId2 = indexCase.getValue("tESTCASEID", indexCaseId);
			var subId2 = indexCase.getValue("sUBTESTCASEID", indexCaseId);
			var businessId2 = indexCase.getValue("bUSINESSID", indexCaseId);
			var indexNo2 = indexCase.getValue("iNDEXNO", indexCaseId);
			if(caseId == caseId2 && casever == caseVer2 && subId == subId2 && businessId == businessId2 && id == indexNo2){
				flag = true;
				//alert('1111');
				break;
			}
		}
		if(flag){
			continue;
		}
		if(flag == false){
//			alert("进入");
//			alert(id+" **id**");
//			alert(businessId+" **businessId**");
			indexCase2.newData();
			indexCase2.setValue("tESTCASEVER",casever);
			indexCase2.setValue("tESTCASEID",caseId);
			indexCase2.setValue("sUBTESTCASEID",subId);
			indexCase2.setValue("iNDEXNO",id);
			indexCase2.setValue("bUSINESSID",businessId);
		}
		//indexCase.saveData();
	}
	indexCase2.saveData();
	alert('保存成功');
};

//点击详细时回显
mainActivity.tabPage2Select = function(event){
	
	//过滤检测对象类别
	var Object = justep.xbl("jcdxlbData");
	var detectionObject = Object.getCurrentID();
	//alert(detectionObject);
	var csyljcxxData = justep.xbl("csyljcxxData");
	if(caseId != "" && caseId != null && caseId.length != 0){
		csyljcxxData.setFilter("filter3", "TEST_CASE_DECTION_INFO.tESTCASEID='"+caseId+"' and TEST_CASE_DECTION_INFO.tESTCASEVER="+casever);
		csyljcxxData.refreshData();
		
		var gridSelect2Value = csyljcxxData.getValue("aPPLYFOROBJECT",csyljcxxData.getID(0));
		if(gridSelect2Value != null && gridSelect2Value != ""){
			var csyljcxx2Data = justep.xbl("csyljcxx2Data");
			csyljcxx2Data.setFilter("filter4", "TEST_CASE_DECTION_INFO.aPPLYFOROBJECT="+gridSelect2Value+
			" and TEST_CASE_DECTION_INFO.tESTCASEID='"+caseId+"' and TEST_CASE_DECTION_INFO.tESTCASEVER="+casever);
			csyljcxx2Data.refreshData();
		}
	}
	
	//回显
	//var deviceObject = justep.xbl("gridSelect3").getValue("aPPLYFORDEVICETYPE");
	var zbhylysgxData = justep.xbl("zbhylysgxData");
	//alert(csjbxxbizData.getCount()+"csjbxxbizData的数量");
	var csyljcxx2Data = justep.xbl("csyljcxx2Data");
	var csyljcxxData = justep.xbl("csyljcxxData");
	var detectionObject = csyljcxxData.getValue("aPPLYFOROBJECT");
	var deviceObject = csyljcxx2Data.getValue("aPPLYFORDEVICETYPE");
	//alert(deviceObject)
//	var detection = jcdxData.getValue("rowid");
//	if(detection != null && detection != ""){
//		jcdxData.setValue("rowid",detection);
//	}
	var zbusjData = justep.xbl("zbusjData");
	if(deviceObject != "" && deviceObject != null && deviceObject.length != 0){
		zbusjData.setFilter("filter1", "INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE="+deviceObject+" and INDEX_SYSTEM_VALUE.aPPLYFOROBJECT="+detectionObject);
		zbusjData.refreshData();
	}
	
	zbusjData.refreshData();
	var count = zbhylysgxData.getTotal();
	//alert(count+"总数");
	for(var i = 0;i < count;i++){
		var a = zbhylysgxData.getRowId(i);
		//alert(a);
		var testSubCaseId = zbhylysgxData.getValue("sUBTESTCASEID",a);
		if(testSubCaseId != subId){
			continue;
		}
		//var testBusinessId = zbhylysgxData.getValue("bUSINESSID");
		var indexBaseNo = zbhylysgxData.getValue("iNDEXNO",a);
		//alert(indexBaseNo);
		
		for(var j=0;j<zbusjData.getCount();j++){
			var idd = zbusjData.getRowId(j);
			//alert(id);
			if(idd == indexBaseNo){
				//alert("If");
				zbusjData.setValue("calcCheckBox",true,idd);
			}
//			else{
//				zbusjData.setValue("calcCheckBox",false,id);
//			}
		}
		//zbhylysgxData.next();
	}
	
};

mainActivity.tabPage1Select = function(event){
	justep.xbl("zbhylysgxData").refreshData();
};



mainActivity.trigger1Click = function(event){
	//alert(3);
	var relationIndexWD = justep.xbl("relationIndexWD");
	relationIndexWD.open();
};
