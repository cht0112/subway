var relationIndex = {};

relationIndex.gridSelect6Closeup = function(event) {
	//debugger;
	if(event.valueChanged){
		justep.xbl("insertTrigger").setDisabled(false);
	}
};

relationIndex.gridSelect6Dropdown = function(event) {
	// debugger;
	var subTestCaseD = justep.xbl("subTestCaseD");
	// subTestCaseD.getValue("iNDEXVALUE");
};

relationIndex.saveRalationClick = function(event) {
	// debugger;
	// alert(4);
	var indexValueD = justep.xbl("indexValueD");
	var relationIndexD = justep.xbl("relationIndexD");
	var caseIndexGrid = justep.xbl("grid1").grid;
	var checkColIndex = caseIndexGrid.getColIndexById("checkBox");
	var checkedIDs = caseIndexGrid.getCheckedRows(checkColIndex);
	if (checkedIDs != null && checkedIDs != "") {
		// alert("4456456");
		var checkedIDsArray = checkedIDs.split(",");
		// alert(checkedIDsArray.length+"==checkedIDsArray=="+checkedIDsArray.toString());
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var id = checkedIDsArray[i];
			var caseVer = caseIndexGrid.getValueById(id, "tESTCASEVER");
			var caseId = caseIndexGrid.getValueById(id, "tESTCASEID");
			var subCaseId = caseIndexGrid.getValueById(id, "sUBTESTCASEID");
			var device = caseIndexGrid.getValueById(id, "aPPLYFORDEVICETYPE");
			var indexNo = caseIndexGrid.getValueById(id, "indexNo");
			var calBusinessId = caseIndexGrid.getValueById(id, "calBusinessId");
			var businessId = caseIndexGrid.getValueById(id, "businessId");
			if(caseVer != null && caseVer != "" && caseId != null && caseId != ""){
				relationIndexD.setFilter("filterRelationIndex", "riac.tESTCASEVER="
					+ caseVer + " and riac.tESTCASEID='" + caseId + "'"
					+ " and riac.sUBTESTCASEID='" + subCaseId + "'");
				relationIndexD.refreshData();
				if (relationIndexD.getCount() > 0) {
					var relationArray = new Array();
					for ( var s = 0; s < relationIndexD.getCount(); s++) {
						relationArray[s] = relationIndexD.getID(s);
					}
					relationIndexD.deleteData(relationArray);
					relationIndexD.saveData();
				}
			}
			

			// alert(caseVer+"===="+caseId+"===="+subCaseId+"==="+device+"==="+indexNo+"==="+calBusinessId);
			if (indexNo != null && indexNo != "" && businessId != null
					&& businessId != "") {
				// typeof(indexNo);
				var indexArray = indexNo.split(",");
				var businessIdArray = businessId.split(",");
				relationIndexD.refreshData();
				for ( var j = 0; j < indexArray.length; j++) {
					
					relationIndexD.newData();

					relationIndexD.setValue("tESTCASEVER", caseVer);
					relationIndexD.setValue("tESTCASEID", caseId);
					relationIndexD.setValue("sUBTESTCASEID", subCaseId);
					relationIndexD.setValue("iNDEXNO", indexArray[j]);
					relationIndexD.setValue("bUSINESSID", businessIdArray[j]);
				}
				relationIndexD.saveData();
			}
		}
		// relationIndexD.saveData();
		justep.xbl("insertTrigger").setDisabled(true);
	}

};

relationIndex.grid1RowDblClick = function(event) {
	//debugger;
	var id = event.rowId;
	var indexId = event.grid.getValueById(id, "iNDEXID1");
	var device = event.grid.getValueById(id, "aPPLYFORDEVICETYPE");
	var indexValueD = justep.xbl("indexValueD");
	indexValueD.setFilter("filterIndexValue", "INDEX_SYSTEM_VALUE.iNDEXID="
			+ indexId + " and INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE=" + device);
	indexValueD.refreshData();
	//indexValueD.getCount();
	//alert(indexValueD.getCount());
};

/**
 * name:bizData#onAfterRefresh description: <b>[回调型事件]</b>业务数据刷新后
 * 
 * @param event
 *            它的结构如下:<br/>{"source":组件的js对象}
 */
relationIndex.subTestCaseDAfterRefresh = function(event) {
	debugger;
	var subTestCaseD = justep.xbl("subTestCaseD");
	var relationIndexD = justep.xbl("relationIndexD");
	var subTestCaseCount = subTestCaseD.getCount();
	for ( var i = 0; i < subTestCaseCount; i++) {
		var id = subTestCaseD.getID(i);
		var caseVer = subTestCaseD.getValue("tESTCASEVER", id);
		var caseId = subTestCaseD.getValue("tESTCASEID", id);
		var subCaseId = subTestCaseD.getValue("sUBTESTCASEID", id);
		if(caseVer != null && caseVer != "" && caseId != null && caseId != "" && subCaseId != null && subCaseId != ""){
			relationIndexD.setFilter("filterRelationIndex", "riac.tESTCASEVER="+ caseVer + " and riac.tESTCASEID='" + caseId + "'"+ " and riac.sUBTESTCASEID='" + subCaseId + "'");
			relationIndexD.refreshData();
			if (relationIndexD.getCount() > 0) {
				subTestCaseD.setValue("checkBox", 1, id);
				var indexNoArray = new Array();
				var businessIdArray = new Array();
				var businessNameArray = new Array();
				for ( var j = 0; j < relationIndexD.getCount(); j++) {
					var idd = relationIndexD.getID(j);
					indexNoArray[j] = relationIndexD.getValue("iNDEXNO", idd);
					businessIdArray[j] = relationIndexD.getValue("bUSINESSID", idd);
					businessNameArray[j] = relationIndexD.getValue("iNDEXVALUE", idd);
				}
				subTestCaseD.setValue("indexNo", indexNoArray.toString(), id);
				subTestCaseD.setValue("calBusinessId",businessNameArray.toString(), id);
				subTestCaseD.setValue("businessId", businessIdArray.toString(), id);
		}
		}
		
	}
};

/**
 * name:grid#onRowValueChanged description:
 * 行级值改变后触发。加载数据时，每渲染完一行后触发。非加载数据时，单元格值改变后触发。
 * 
 * @param event
 *            事件属性:<br/>{"source":XFGrid对象,
 *            "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
 */
relationIndex.grid1RowValueChanged = function(event) {
	// alert("33");
	justep.xbl("insertTrigger").setDisabled(false);
};

relationIndex.model1Load = function(event){
	//debugger;
	var subTestCaseD = justep.xbl("subTestCaseD");
	subTestCaseD.setFilter("filterSubTestCase", "SUB_TEST_CASE_BASE_INFO.iNDEXNAME is not null");
	subTestCaseD.refreshData();
};
