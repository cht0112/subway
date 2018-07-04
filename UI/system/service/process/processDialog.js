noticeQuerySwitch = false;
noticeSavedOrgPerson = "<rows></rows>";
toQuerySwitch = false;
toSavedOrgPerson = "<rows></rows>";
returnKeydown = false;

function getNodeText(element) {
	if (element) {
		return element.text || element.textContent || "";
	}
	return "";
}

function setNodeText(element, text) {
	if (element) {
		if (typeof(element.text) != "undefined") {
			element.text = text;
		} else if (typeof(element.textContent) != "undefined") {
			element.textContent = text;
		}
	}
}

function noticeDataExecuteorsGridRowDBClick(event){
	var selectButton = document.getElementById("notice_select_to_left");
	if (selectButton) {
		selectButton.click();
	}
}

function noticeDataOrgPersonRowDBClick(event){
	var insOrgPerson = justep("notice_org_person").xformsObject;
	var rowId = insOrgPerson.store.selectRowID;
	if (!insOrgPerson.store.isCheckedRow_treegrid(rowId)) {
		loadAndCheckAllSubItem('notice', 'notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last', rowId);
		InitOrgPersonChecked("notice_org_person", "notice_executors");
	} else {
		UnCheckNode('notice', 'notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last', rowId);
	}
}

function noticeDataOrgPersonRowExpand(event){
	var insNoticeOrgPerson = justep("notice_org_person").xformsObject;
	var kind = insNoticeOrgPerson.store.getValueById(event.rowId, "kind").toUpperCase();
	var loaded = insNoticeOrgPerson.store.getValueById(event.rowId, "loaded").toUpperCase();
	if ((kind != "PSM") && (loaded == "FALSE")) {
		var id = insNoticeOrgPerson.store.getValueById(event.rowId, "id");
		if (id != "00000000-0000-0000-0000-000000000000") {
			var param = "<form><data><org-id>" + id + "</org-id></data></form>";
			var xmlHttpRequest = justep.Request.sendHttpRequest("/system/service/process/processDialogOrgChildren.j", param);
			
   			if (!justep.Request.isSuccess(xmlHttpRequest)){
   				return;
   			}
   			
			var dataId = insNoticeOrgPerson.store.getValueById(event.rowId, "data_id");
			var childData = generateOrgPersonData2Grid(event.rowId, xmlHttpRequest.responseXML.documentElement, dataId, false);
			insNoticeOrgPerson.loadData(null, childData, null, true);
	
			insNoticeOrgPerson.store.setValueById(event.rowId, "loaded", "true");
		}
	}
	
	var control = event.source;
	control.setNodeLoadSuccess(event.rowId);
	
	checkExpandRow("notice_org_person", "notice_executors");
}

function toDataExecutorsGridRowDBClick(event){
	UnselectOrgPerson('to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last');
}

function toDataOrgPersonTreeRowDBClick(event){
	var insOrgPerson = justep("to_org_person").xformsObject;
	var rowId = insOrgPerson.store.selectRowID;
	if (!insOrgPerson.store.isCheckedRow_treegrid(rowId)) {
		loadAndCheckAllSubItem('to', 'to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last', rowId);
		InitOrgPersonChecked("to_org_person", "to_executors");
	} else {
		UnCheckNode('to', 'to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last', rowId);
	}
}

function toDataOrgPersonTreeRowExpand(event){
	var insToOrgPerson = justep("to_org_person").xformsObject;
	var kind = insToOrgPerson.store.getValueById(event.rowId, "kind").toUpperCase();
	var loaded = insToOrgPerson.store.getValueById(event.rowId, "loaded").toUpperCase();
	if ((kind != "PSM") && (loaded == "FALSE")) {
		var id = insToOrgPerson.store.getValueById(event.rowId, "id");
		if (id != "00000000-0000-0000-0000-000000000000") {
			var param = "<form><data><org-id>" + id + "</org-id></data></form>";
			var xmlHttpRequest = justep.Request.sendHttpRequest("/system/service/process/processDialogOrgChildren.j", param);
			
   			if (!justep.Request.isSuccess(xmlHttpRequest)){
   				return;
   			}
			
			
			var dataId = insToOrgPerson.store.getValueById(event.rowId, "data_id");
			var childData = generateOrgPersonData2Grid(event.rowId, xmlHttpRequest.responseXML.documentElement, dataId, false);
			insToOrgPerson.loadData(null, childData, null, true);

			insToOrgPerson.store.setValueById(event.rowId, "loaded", "true");
		}
	}

	var control = event.source;
	control.setNodeLoadSuccess(event.rowId);
	
	checkExpandRow("to_org_person", "to_executors");
}

function toDataOrgPersonTreeRowChecked(event) {
	if (event.checked) {
		loadAndCheckAllSubItem('to', 'to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last', event.rowId);
	} else {
		UnCheckRow('to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last', event.rowId);
	}
	RefreshSelectButtonState("to_executors", "to_org_person", "to_select_to_left", "all_to_select_to_left", "to_select_to_right", "all_to_select_to_right");
	RefreshMoveButtonState("to_executors", "to_move_to_first", "to_move_to_prev", "to_move_to_next", "to_move_to_last");
}

function noticeDataOrgPersonTreeRowChecked(event) {
	if (event.checked) {
		loadAndCheckAllSubItem('notice', 'notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last', event.rowId);
	} else {
		UnCheckRow('notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last', event.rowId);
	}
	RefreshSelectButtonState("notice_executors", "notice_org_person", "notice_select_to_left", "all_notice_select_to_left", "notice_select_to_right", "all_notice_select_to_right");
	RefreshMoveButtonState("notice_executors", "notice_move_to_first", "notice_move_to_prev", "notice_move_to_next", "notice_move_to_last");
}

function SelectCheckedRow(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, rowId) {
	var insData = justep(dataInstance).xformsObject;
	var executorKind = insData.store.getValueById(insData.store.selectRowID, "executor_kinds").toUpperCase();

	var nodeKind = "PSM";
	if (executorKind == "POS") {
		nodeKind = "POS";
	} else if (executorKind == "DPT") {
		nodeKind = "DPT";
	} else if (executorKind == "OGN") {
		nodeKind = "OGN";
	}

	var insOrgPerson = justep(orgInstance).xformsObject;
	var insExecutor = justep(executorInstance).xformsObject;
	
	var kind = insOrgPerson.store.getValueById(rowId, "kind");
	if (kind.toUpperCase() == nodeKind) {
		var selectable = insOrgPerson.store.getValueById(rowId, "selectable").toUpperCase();
		if (selectable == "TRUE") {
			var fId = insOrgPerson.store.getValueById(rowId, "fid");
			var arrValue = [fId];
			var arrField = ["fid"];
			
			if (findRow(insExecutor, arrValue, arrField) == "0") {
				var fName = insOrgPerson.store.getValueById(rowId, "fname");
				var name = insOrgPerson.store.getValueById(rowId, "name");
				var dataId = insOrgPerson.store.getValueById(rowId, "data_id");
				var rowData = rowData = [fId, fName, name, kind, "false", dataId];
				
				var rowCount = insExecutor.store.getRowsNum();
				insExecutor.store.addRowPro(new justep.UUID().valueOf(), rowData, rowCount);
				insExecutor.store.setIndex(rowCount);
			}
		}
	}
}

function loadAndCheckAllSubItem(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, rowId) {
	SelectCheckedRow(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, rowId);

	var insToOrgPerson = justep(orgInstance).xformsObject;
	insToOrgPerson.store.setItemChecked_treegrid(rowId, true, false);
	var kind = insToOrgPerson.store.getValueById(rowId, "kind").toUpperCase();
	if ((kind != "PSM")) {
		var condition = "";
		if (dataInstance == "to") {
			var conditionInput = document.getElementById("to_query_input");
			condition = conditionInput.value;
		} else if (dataInstance == "notice") {
			var conditionInput = document.getElementById("notice_query_input");
			condition = conditionInput.value;
		}
		
		var loaded = insToOrgPerson.store.getValueById(rowId, "loaded").toUpperCase();
		if ((loaded == "FALSE" && condition == "")) {
			var id = insToOrgPerson.store.getValueById(rowId, "id");
			if (id != "00000000-0000-0000-0000-000000000000") {
				var param = "<form><data><org-id>" + id + "</org-id></data></form>";
				var xmlHttpRequest = justep.Request.sendHttpRequest("/system/service/process/processDialogOrgChildren.j", param);
				
	   			if (!justep.Request.isSuccess(xmlHttpRequest)){
	   				return;
	   			}
				
				var dataId = insToOrgPerson.store.getValueById(rowId, "data_id");
				
				var childData = generateOrgPersonData2Grid(rowId, xmlHttpRequest.responseXML.documentElement, dataId, false);
				insToOrgPerson.loadData(null, childData, null, true);
	
				insToOrgPerson.store.setValueById(rowId, "loaded", "true");
			}
		}
	}
	
	var subData = insToOrgPerson.store.getAllSubItems(rowId);
	if (subData != "") {
		var subItems = subData.split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItem = subItems[i];
			if (subItem != "") {
				insToOrgPerson.store.setItemChecked_treegrid(subItem, true, false);
				var kind = insToOrgPerson.store.getValueById(subItem, "kind").toUpperCase();
				if ((kind != "PSM")) {
					loadAndCheckAllSubItem(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, subItem);
				} else {
					SelectCheckedRow(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, subItem);
				}
			}
		}
	}
}

function UnCheckRow(orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, rowId) {
	var insOrgPerson = justep(orgInstance).xformsObject;
	var fId = insOrgPerson.store.getValueById(rowId, "fid");
	
	if (fId == "00000000-0000-0000-0000-000000000000") {
		var subItemData = insOrgPerson.store.getSubItems(rowId);
		if (subItemData != "") {
			var subItems = subItemData.split(",");
			for (var i = 0; i < subItems.length; i++) {
				var subItem = subItems[i];
				if (subItem != "") {
					UnCheckRow(orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, subItem);
				}
			}
		}
	} else {
		var insExecutors = justep(executorInstance).xformsObject;
		var rowData = insExecutors.store.getAllRowIds();
		if (rowData != "") {
			var rowItems = rowData.split(",");
			for (var i = 0; i < rowItems.length; i++) {
				var rowItem = rowItems[i];
				if (rowItem != "") {
					var value = insExecutors.store.getValueById(rowItem, "fid");
					if (value.length >= fId.length) {
						if (value.substring(0, fId.length) == fId) {
							insExecutors.store.deleteRow(rowItem);
						}
					}
				}
			}
			insExecutors.store._syncBuffer();
			
			var rowCount = insExecutors.store.getRowsNum();
			if (rowCount > 0) {
				insExecutors.store.setIndex(rowCount);
			}
		}
	}
}

function checkRowByFid(instance, fid, first) {
	var rowId = findRow(instance, [fid], ["fid"], true, false);
	if (rowId != "0") {
		var allSelected = true;
		if (!first) {
			var subData = instance.store.getSubItems(rowId);
			if (subData != "") {
				var subItems = subData.split(",");
				for (var i = 0; i < subItems.length; i++) {
					var subItem = subItems[i];
					if (!instance.store.isCheckedRow_treegrid(subItem)) {
						allSelected = false;
						break;
					}
				}
			} else {
				allSelected = false;
			}
		}
		
		if (first) {
			instance.store.setItemChecked_treegrid(rowId, true, false);
		} else {
			if (allSelected) {
				instance.store.setItemChecked_treegrid(rowId, true, false);
			} else {
				instance.store.setItemChecked_treegrid(rowId, false, true);
			}
		}
	}
	
	var lastIndex = fid.lastIndexOf("/");
	if (lastIndex != -1) {
		fid = fid.substring(0, lastIndex);
		checkRowByFid(instance, fid, false);
	}
}

function checkExpandRow(orgInstance, executorInstance) {
	var insOrgPerson = justep(orgInstance).xformsObject;
	var insExecutors = justep(executorInstance).xformsObject;
	var rowData = insExecutors.store.getAllRowIds();
	if (rowData != "") {
		var rowItems = rowData.split(",");
		for (var i = 0; i < rowItems.length; i++) {
			var rowItem = rowItems[i];
			if (rowItem != "") {
				var fId = insExecutors.store.getValueById(rowItem, "fid");
				checkRowByFid(insOrgPerson, fId, true);
			}
		}
	}
	
	checkRootNode(insOrgPerson, false);
}

function checkRootNode(instance, halfCheck) {
	var rowId = "00000000-0000-0000-0000-000000000000";
	if (rowId != "0") {
		instance.store.setItemChecked_treegrid(rowId, true, true);
		var allSelected = true;
		var subData = instance.store.getSubItems(rowId);
		if (subData != "") {
			var subItems = subData.split(",");
			for (var i = 0; i < subItems.length; i++) {
				var subItem = subItems[i];
				if (!instance.store.isCheckedRow_treegrid(subItem)) {
					allSelected = false;
					break;
				}
			}
		}
		if (allSelected) {
			instance.store.setItemChecked_treegrid(rowId, true, false);
		} else {
			instance.store.setItemChecked_treegrid(rowId, false, halfCheck);
		}
	}
}

function UnCheckNode(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId, rowId) {
	var insOrgPerson = justep(orgInstance).xformsObject;
	
	var insExecutors = justep(executorInstance).xformsObject;
	
	var fId = insOrgPerson.store.getValueById(rowId, "fid");
	var execRowId = findRow(insExecutors, [fId], ["fid"], true, false);
	if (execRowId != "0") {
		insExecutors.store.deleteRow(execRowId);
	}

	var subData = insOrgPerson.store.getAllSubItems(rowId);
	if (subData != "") {
		var subItems = subData.split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItem = subItems[i];
			
			var fId = insOrgPerson.store.getValueById(subItem, "fid");
			var execRowId = findRow(insExecutors, [fId], ["fid"], true, false);
			if (execRowId != "0") {
				insExecutors.store.deleteRow(execRowId);
			}
		}
	}
	insExecutors.store._syncBuffer();
	
	InitOrgPersonChecked(orgInstance, executorInstance);
}

function onActivityRowDblClicked(data) {
	var insActivityTree = data.instance;
	var rowId = data.rowId;
	var state = insActivityTree.store.getValueById(rowId, "selected");
	if (state == "0") {
		state = "1";
	} else {
		state = "0";
	}
	insActivityTree.store.setValueById(rowId, "selected", state);

	updateTreeCheckState(insActivityTree, rowId);
}

function InitOrgPersonChecked(orgInstance, executorInstance) {
	var insOrgPerson = justep(orgInstance).xformsObject;
	var rowData = insOrgPerson.store.getAllSubItems();
	if (rowData != "") {
		var rowItems = rowData.split(",");
		for (var i = 0; i < rowItems.length; i++) {
			var rowItem = rowItems[i];
			if (rowItem != "") {
				insOrgPerson.store.setItemChecked_treegrid(rowItem, false, false);
			}
		}
		
		var insExecutors = justep(executorInstance).xformsObject;
		var rowData = insExecutors.store.getAllRowIds();
		if (rowData != "") {
			var rowItems = rowData.split(",");
			for (var i = 0; i < rowItems.length; i++) {
				var rowItem = rowItems[i];
				if (rowItem != "") {
					var fId = insExecutors.store.getValueById(rowItem, "fid");
					checkRowByFid(insOrgPerson, fId, true);
				}
			}
		}
		checkRootNode(insOrgPerson, rowData != "");
	}
}

function UnSelectButtonClick(id) {
	var selectButton = document.getElementById(id);
	if (selectButton) {
		selectButton.click();
	}
}

/*获得单元格数据，包括被过滤掉的行*/
function myGetValueById(instance, rowId, cellName) {
	var cellValue = null;
	
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}
	
	if (instance.store.rowsAr[rowId] != null) {
		cellValue = instance.store.getValueById(rowId, cellName);
	}
	
	return cellValue;
}

/** 产生执行者类型 **/
function executorKindCallback(executor) {
	if (executor.value.toLowerCase() == "dpt") {
		return "部门";
	} else if (executor.value.toLowerCase() == "pos") {
		return "岗位";
	} else if (executor.value.toLowerCase() == "grp") {
		return "工作组";
	} else if (executor.value.toLowerCase() == "ogn") {
		return "机构";
	} else {
		return "人员";
	}
}

/** 刷新选择按钮状态 **/
function RefreshSelectButtonState(executorInstance, orgInstance, leftId, allLeftId, rightId, allRightId) {
	return;
	var insExecutors = justep(executorInstance).xformsObject;
	var rowCount = insExecutors.store.getRowsNum();
	var selectToLeft = document.getElementById(leftId);
	selectToLeft.disabled = rowCount < 1;
	var selectToLeftAll = document.getElementById(allLeftId);
	selectToLeftAll.disabled = rowCount < 1;

	var insOrgPerson = justep(orgInstance).xformsObject;
	var rowIndex = insOrgPerson.store.getRowIndex(insOrgPerson.store.selectRowID);
	var selectToRight = document.getElementById(rightId);
	selectToRight.disabled = rowIndex < 0;
	var selectToRightAll = document.getElementById(allRightId);
	selectToRightAll.disabled = rowIndex < 0;
}

/** 刷新移动按钮状态 **/
function RefreshMoveButtonState(executorInstance, firstId, prevId, nextId, lastId) {
	var insExecutors = justep(executorInstance).xformsObject;
	var rowCount = insExecutors.store.getRowsNum();
	var rowIndex = insExecutors.store.getRowIndex(insExecutors.store.selectRowID);
	
	var moveToFirst = document.getElementById(firstId);
	moveToFirst.disabled = rowIndex <= 0;
	var moveToPrev = document.getElementById(prevId);
	moveToPrev.disabled = rowIndex <= 0;
	var moveToNext = document.getElementById(nextId);
	moveToNext.disabled = rowIndex >= (rowCount - 1);
	var moveToLast = document.getElementById(lastId);
	moveToLast.disabled = rowIndex >= (rowCount - 1);
}		

/** 选择当前组织机构 **/
function SelectOrgPerson(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insData = justep(dataInstance).xformsObject;
	var executorKind = insData.store.getValueById(insData.store.selectRowID, "executor_kinds").toUpperCase();

	var nodeKind = "PSM";
	if (executorKind == "POS") {
		nodeKind = "POS";
	} else if (executorKind == "DPT") {
		nodeKind = "DPT";
	} else if (executorKind == "OGN") {
		nodeKind = "OGN";
	}

	var insOrgPerson = justep(orgInstance).xformsObject;
	var insExecutor = justep(executorInstance).xformsObject;
	
	var kind = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "kind");
	if (kind.toUpperCase() == nodeKind) {
		var selectable = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "selectable").toUpperCase();
		if (selectable == "TRUE") {
			var fId = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "fid");
			var arrValue = [fId];
			var arrField = ["fid"];
			
			if (findRow(insExecutor, arrValue, arrField) == "0") {
				var fName = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "fName");
				var name = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "name");
				var dataId = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "data_id");
				var rowData = rowData = [fId, fName, name, kind, "false", dataId];
				
				var rowCount = insExecutor.store.getRowsNum();
				insExecutor.store.addRowPro(new justep.UUID().valueOf(), rowData, rowCount);
				insExecutor.store.setIndex(rowCount);
				
				checkRowByFid(insOrgPerson, fId, true);
				var rowId = findRow(insOrgPerson, ["00000000-0000-0000-0000-000000000000"], ["fid"], true, false);
				if (rowId != "0") {
					if (!insOrgPerson.store.isCheckedRow_treegrid(rowId)) {
						insOrgPerson.store.setItemChecked_treegrid(rowId, false, true);
					}
				}
			}
		}
	} else {
		var subData = insOrgPerson.store.getSubItems(insOrgPerson.store.selectRowID);
		if (subData != "") {
			var subItems = subData.toString().split(",");
			for (var i = 0; i < subItems.length; i++) {
				var subItemId = subItems[i];
				var subKind = insOrgPerson.store.getValueById(subItemId, "kind");
				if (subKind.toUpperCase() == nodeKind) {
					var selectable = insOrgPerson.store.getValueById(subItemId, "selectable").toUpperCase();
					if (selectable == "TRUE") {
						var fId = insOrgPerson.store.getValueById(subItemId, "fid");
						var arrValue = [fId];
						var arrField = ["fid"];

						if (findRow(insExecutor, arrValue, arrField) == "0") {
							var fName = insOrgPerson.store.getValueById(subItemId, "fname");
							var name = insOrgPerson.store.getValueById(subItemId, "name");
							var dataId = insOrgPerson.store.getValueById(subItemId, "data_id");
							var rowData = rowData = [fId, fName, name, subKind, "false", dataId];

							var rowCount = insExecutor.store.getRowsNum();
							insExecutor.store.addRowPro(new justep.UUID().valueOf(), rowData, rowCount);
							insExecutor.store.setIndex(rowCount);
							
							checkRowByFid(insOrgPerson, fId, true);
						}
					}
				}
			}
			var rowId = findRow(insOrgPerson, ["00000000-0000-0000-0000-000000000000"], ["fid"], true, false);
			if (rowId != "0") {
				if (!insOrgPerson.store.isCheckedRow_treegrid(rowId)) {
					insOrgPerson.store.setItemChecked_treegrid(rowId, false, true);
				}
			}
		}
	}
	
	RefreshSelectButtonState(executorInstance, orgInstance, leftId, allLeftId, rightId, allRightId);
	RefreshMoveButtonState(executorInstance, firstId, prevId, nextId, lastId);
}

/** 选择所有组织机构 **/
function SelectAllOrgPerson(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insData = justep(dataInstance).xformsObject;
	var executorKind = insData.store.getValueById(insData.store.selectRowID, "executor_kinds").toUpperCase();

	var nodeKind = "PSM";
	if (executorKind == "POS") {
		nodeKind = "POS";
	} else if (executorKind == "DPT") {
		nodeKind = "DPT";
	} else if (executorKind == "OGN") {
		nodeKind = "OGN";
	}

	var insOrgPerson = justep(orgInstance).xformsObject;
	var insExecutor = justep(executorInstance).xformsObject;
	
	var kind = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "kind");
	if (kind.toUpperCase() == nodeKind) {
		var selectable = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "selectable").toUpperCase();
		if (selectable == "TRUE") {
			var fId = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "fid");
			var arrValue = [fId];
			var arrField = ["fid"];
			
			if (findRow(insExecutor, arrValue, arrField) == "0") {
				var fName = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "fname");
				var name = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "name");
				var dataId = insOrgPerson.store.getValueById(insOrgPerson.store.selectRowID, "data_id");
				var rowData = rowData = [fId, fName, name, kind, "false", dataId];
				
				var rowCount = insExecutor.store.getRowsNum();
				insExecutor.store.addRowPro(new justep.UUID().valueOf(), rowData, rowCount);
				insExecutor.store.setIndex(rowCount);
			}
		}
	}

	var subData = insOrgPerson.store.getAllSubItems(insOrgPerson.store.selectRowID);
	if (subData != "") {
		var subItems = subData.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			
			var kind = insOrgPerson.store.getValueById(subItemId, "kind");
			if (kind.toUpperCase() == nodeKind) {
				var selectable = insOrgPerson.store.getValueById(subItemId, "selectable").toUpperCase();
				if (selectable == "TRUE") {
					var fId = insOrgPerson.store.getValueById(subItemId, "fid");
					var arrValue = [fId];
					var arrField = ["fid"];
					
					if (findRow(insExecutor, arrValue, arrField) == "0") {
						var fName = insOrgPerson.store.getValueById(subItemId, "fname");
						var name = insOrgPerson.store.getValueById(subItemId, "name");
						var dataId = insOrgPerson.store.getValueById(subItemId, "data_id");
						var rowData = rowData = [fId, fName, name, kind, "false", dataId];
						
						var rowCount = insExecutor.store.getRowsNum();
						insExecutor.store.addRowPro(new justep.UUID().valueOf(), rowData, rowCount);
						insExecutor.store.setIndex(rowCount);
					}
				}
			}
		}
	}
	
	RefreshSelectButtonState(executorInstance, orgInstance, leftId, allLeftId, rightId, allRightId);
	RefreshMoveButtonState(executorInstance, firstId, prevId, nextId, lastId);
}

/** 取消选择当前组织机构 **/
function UnselectOrgPerson(orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insExecutors = justep(executorInstance).xformsObject;
	
	var fId = insExecutors.store.getValueById(insExecutors.store.selectRowID, "fid");
	var insOrgPerson = justep(orgInstance).xformsObject;
	var rowId = findRow(insOrgPerson, [fId], ["fid"], true, false);
	if (insOrgPerson.store.isCheckedRow_treegrid(rowId)) {
		insOrgPerson.store.setItemChecked_treegrid(rowId, false, false);
	}
	
	var rowIndex = insExecutors.store.getRowIndex(insExecutors.store.selectRowID);
	insExecutors.store.deleteRow(insExecutors.store.selectRowID);
	insExecutors.store._syncBuffer();
	insExecutors.store.setIndex(rowIndex);
	
	RefreshSelectButtonState(executorInstance, orgInstance, leftId, allLeftId, rightId, allRightId);
	RefreshMoveButtonState(executorInstance, firstId, prevId, nextId, lastId);
	
	InitOrgPersonChecked(orgInstance, executorInstance);
}

/** 取消选择所有组织机构(to) **/
function UnselectAllOrgPerson(orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insExecutors = justep(executorInstance).xformsObject;
	for (var i = insExecutors.store.rowsBuffer.length - 1; i >= 0; i--) {
		insExecutors.store.deleteRow(insExecutors.store.rowsBuffer[i].idd);
	}
	insExecutors.store._syncBuffer();
	
	RefreshSelectButtonState(executorInstance, orgInstance, leftId, allLeftId, rightId, allRightId);
	RefreshMoveButtonState(executorInstance, firstId, prevId, nextId, lastId);
}

/** 检查notice是否有执行者 **/
function refreshAndCheckNoticeStatus() {
	var strRet = "";
	
	var insNoticeData = justep("notice").xformsObject;
	var subData = insNoticeData.store.getAllRowIds(",");
	if (subData != "") {
		var subItems = subData.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			var dataId = insNoticeData.store.getValueById(subItemId, "data_id");
			if (findRow("notice_executors", [dataId], ["data_id"], true, true) == "0") {
				strRet = insNoticeData.store.getValueById(subItemId, "name");
				break;
			}
		}
	}
	
	return strRet;
}

/** 更新to选择状态并检查是否有执行者 **/					
function refreshAndCheckToSelectStatus() {
	var strRet = "";

	var insActivityChildren = justep("activity_children").xformsObject;
	var subData = insActivityChildren.store.getAllRowIds(",");
	if (subData != "") {
		var insToData = justep("to").xformsObject;
	
		var subItems = subData.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			var activityId = insActivityChildren.store.getValueById(subItemId, "activity_id");
			var selected = insActivityChildren.store.getValueById(subItemId, "selected"); 
			
			var targetRowID = findRow(insToData, [activityId], ["activity_id"], true, true);
			if (targetRowID != "0") {
				var targetSelected = selected == "1" ? "true" : "false";
				insToData.store.setValueById(targetRowID, "selected", targetSelected);
				
				var targetReadonly = insToData.store.getValueById(targetRowID, "readonly");
				if (targetSelected == "true" && targetReadonly == "false") {
					var targetDataId = insToData.store.getValueById(targetRowID, "data_id");
					if (findRow("to_executors", [targetDataId], ["data_id"], true, true) == "0") {
						strRet = insActivityChildren.store.getValueById(subItemId, "name");
						break;
					}
				}
			}
		}
	}
	
	return strRet;
}

/** 生成返回数据（其他） **/
function generateOtherData() {
	var strRet = "";

	var insOtherData = justep("other_data").xformsObject;
	var xmlDoc = insOtherData.getDoc();
	var xmlData = xforms.Writer.toString(xmlDoc);
	
	var obj = justep.XML.fromString(xmlData);
	var root = justep.XML.eval(obj, "/form/data/process-context", "single");
	for (var i = 0; i < $(root).children().length; i++) {
		var child = $(root).children()[i];
		strRet += justep.XML.toString(child);
	}

	return strRet;
}
				
/** 生成ProcessControl详细 **/
function generateProcessControlInfo() {
	var strRet = "";

	var insProcessControlInfo = justep("process_control_info").xformsObject;
	var xmlDoc = insProcessControlInfo.getDoc();
	var xmlData = xforms.Writer.toString(xmlDoc);
	var obj = justep.XML.fromString(xmlData);
	var root = justep.XML.eval(obj, "/form/data", "single");
			for (var i = 0; i < $(root).children().length; i++) {
				var child = $(root).children()[i];
				strRet += justep.XML.toString(child);
			}
			
			return strRet;
		}
   			
   		/** 生成环节信息（详细） **/
function generateRunnableActivityChildren(instance, parentId) {
	var strRet = "";

	var subData = instance.store.getSubItems(parentId);
	if (subData != "") {
		var subItems = subData.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			
			var isActivity = instance.store.getValueById(subItemId, "is_activity");
			if (isActivity == "false") {
				strRet += "<item operator=\"" + instance.store.getValueById(subItemId, "operator") +
					"\" selected=\"" + instance.store.getValueById(subItemId, "selected") + "\">";
				strRet += generateRunnableActivityChildren(instance, subItemId);
				strRet += "</item>";
			} else {
				strRet += "<activity activity=\"" + instance.store.getValueById(subItemId, "activity") +
					"\" name=\"" + instance.store.getValueById(subItemId, "name") + "\" optional=\"" +
					instance.store.getValueById(subItemId, "optional") + "\" selected=\"" +
					instance.store.getValueById(subItemId, "selected") + "\">";
				strRet += "</activity>"; 
			}
		}
	}

	return strRet;
}
				
/** 生成环节信息 **/
function generateRunnableActivities() {
	var strRet = "<runnable-activities>";

	if (justep("activity_root")) {
		var insActivityRoot = justep("activity_root").xformsObject;

		strRet += "<item operator=\"" + insActivityRoot.store.getValueByName("operator", insActivityRoot.store.getRowIndex(insActivityRoot.store.selectRowID)) +
			"\" selected=\"" + insActivityRoot.store.getValueByName("selected", insActivityRoot.store.getRowIndex(insActivityRoot.store.selectRowID)) + "\">";

		
		var insActivityChildren = justep("activity_children").xformsObject;
		strRet += generateRunnableActivityChildren(insActivityChildren, "0");
		
		strRet += "</item>";
	}
								
	strRet += "</runnable-activities>";

	return strRet;
}

/** 生成TaskRelationValue数据 **/
function generateTaskRelationValue(instance, rowId, dataBak) {
	var dataId = instance.store.getValueById(rowId, "data_id");
	
	var insBak = justep(dataBak).xformsObject;
	var xmlDoc = insBak.getDoc();
	var xmlData = xforms.Writer.toString(xmlDoc);
	var obj = justep.XML.fromString(xmlData);
	var taskRelationEls = justep.XML.eval(obj, "/form/data/task-relation-value[@id='" + dataId + "']");
	if (taskRelationEls.length > 0) {
		var taskRelationEl = taskRelationEls[0];
		
		var sEURL = justep.XML.eval(taskRelationEl, "sEURL", "single");
		if (sEURL != null) {
			setNodeText(sEURL, instance.store.getValueById(rowId, "eurl"));
		}
		var sLock = justep.XML.eval(taskRelationEl, "sLock", "single");
		if (sLock != null) {
			setNodeText(sLock, instance.store.getValueById(rowId, "lock"));
		}
		var sWarningTime = justep.XML.eval(taskRelationEl, "sWarningTime", "single");
		if (sWarningTime != null) {
			setNodeText(sWarningTime, instance.store.getValueById(rowId, "warning_time"));
		}
		var sExecuteMode = justep.XML.eval(taskRelationEl, "sExecuteMode", "single");
		if (sExecuteMode != null) {
			setNodeText(sExecuteMode, instance.store.getValueById(rowId, "execute_mode"));
		}
		var sEmergencyName = justep.XML.eval(taskRelationEl, "sEmergencyName", "single");
		if (sEmergencyName != null) {
			setNodeText(sEmergencyName, instance.store.getValueById(rowId, "emergency_name"));
		}
		var sExecuteMode2 = justep.XML.eval(taskRelationEl, "sExecuteMode2", "single");
		if (sExecuteMode2 != null) {
			setNodeText(sExecuteMode2, instance.store.getValueById(rowId, "execute_mode2"));
		}
		var sName = justep.XML.eval(taskRelationEl, "sName", "single");
		if (sName != null) {
			setNodeText(sName, instance.store.getValueById(rowId, "name"));
		}
		
		var sContent = justep.XML.eval(taskRelationEl, "sContent", "single");
		if (sContent != null) {
			setNodeText(sContent, instance.store.getValueById(rowId, "content"));
		}
		var sPreemptMode = justep.XML.eval(taskRelationEl, "sPreemptMode", "single");
		if (sPreemptMode != null) {
			setNodeText(sPreemptMode, instance.store.getValueById(rowId, "preempt_mode"));
		}
		var sActivity = justep.XML.eval(taskRelationEl, "sActivity", "single");
		if (sActivity != null) {
			setNodeText(sActivity, instance.store.getValueById(rowId, "activity2"));
		}
		var sCreateTime = justep.XML.eval(taskRelationEl, "sCreateTime", "single");
		if (sCreateTime != null) {
			setNodeText(sCreateTime, instance.store.getValueById(rowId, "create_time"));
		}
		var sLimitTime = justep.XML.eval(taskRelationEl, "sLimitTime", "single");
		if (sLimitTime != null) {
			setNodeText(sLimitTime, instance.store.getValueById(rowId, "limit_time"));
		}
		var sEmergencyID = justep.XML.eval(taskRelationEl, "sEmergencyID", "single");
		if (sEmergencyID != null) {
			setNodeText(sEmergencyID, instance.store.getValueById(rowId, "emergency_id"));
		}
		var sCURL = justep.XML.eval(taskRelationEl, "sCURL", "single");
		if (sCURL != null) {
			setNodeText(sCURL, instance.store.getValueById(rowId, "curl"));
		}
		var sProcess = justep.XML.eval(taskRelationEl, "sProcess", "single");
		if (sProcess != null) {
			setNodeText(sProcess, instance.store.getValueById(rowId, "process2"));
		}
		var sLastModifyTime = justep.XML.eval(taskRelationEl, "sLastModifyTime", "single");
		if (sLastModifyTime != null) {
			setNodeText(sLastModifyTime, instance.store.getValueById(rowId, "last_modify_time"));
		}
		var sCatalogID = justep.XML.eval(taskRelationEl, "sCatalogID", "single");
		if (sCatalogID != null) {
			setNodeText(sCatalogID, instance.store.getValueById(rowId, "catalog_id"));
		}

		return justep.XML.toString(taskRelationEl);
	}
	
	return "";
}

/** 生成ExecutorRange数据 **/
function generateExecutorsOrRange(instance, dataId, isRange, ns) {
	var strRet = "";
	
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}

	var rowId = findRow(instance, [dataId], ["data_id"], false, true);
	if (rowId != "0") {
		if (typeof(isRange) == "boolean" && isRange == true) {
			if (typeof(ns) == "undefined") {
				strRet += "<executor-range>";
			} else {
				strRet += "<executor-range " + ns + ">";
			}
		} else {
			if (typeof(ns) == "undefined") {
				strRet += "<executors>";
			} else {
				strRet += "<executors " + ns + ">";
			}
		}
		
		subItems = rowId.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			
			strRet += "<org-unit>";
			strRet += "<fid>" + myGetValueById(instance, subItemId, "fid") + "</fid>";
			
			strRet += "<fname>" + myGetValueById(instance, subItemId, "fname") + "</fname>";
			
			var isManager = myGetValueById(instance, subItemId, "responsible").toUpperCase();
			
			if (isManager == "FALSE" || isManager == "0") {
				strRet += "<responsible>false</responsible>";
			} else {
				strRet += "<responsible>true</responsible>";
			}
			
			strRet += "<name>" + myGetValueById(instance, subItemId, "name") + "</name>";
			
			strRet += "<kind>" + myGetValueById(instance, subItemId, "kind") + "</kind>";
			
			strRet += "</org-unit>";
		} 
		
		if (typeof(isRange) == "boolean" && isRange == true) {
			strRet += "</executor-range>";
		} else {
			strRet += "</executors>";
		}
	}
	
	return strRet;
}
				
/** 生成具体的流转数据 **/
function generateDataInfo(data, dataExecutors, dataBak) {
	var strRet = "";
	
	if (justep(data) && justep(dataExecutors)) {
		var insData = justep(data).xformsObject;
		var insExecutors = justep(dataExecutors).xformsObject;
		
		var subData = insData.store.getAllRowIds(",");
		if (subData != "") {
			var subItems = subData.toString().split(",");
			for (var i = 0; i < subItems.length; i++) {
				var subItemId = subItems[i];
				var dataId = insData.store.getValueById(subItemId, "data_id");
				var selected = insData.store.getValueById(subItemId, "selected");
				if ("true" == selected){
					strRet += "<process-control-item selected=\"" + insData.store.getValueById(subItemId, "selected") +
					"\" id=\"" + insData.store.getValueById(subItemId, "data_id") + "\" readonly=\"" +
					insData.store.getValueById(subItemId, "readonly") + "\" is-end=\"" +
					insData.store.getValueById(subItemId, "is_end") + "\">";

					strRet += "<unit>" + insData.store.getValueById(subItemId, "activity") + "</unit>";
					strRet += "<passed-activities>" + insData.store.getValueById(subItemId, "passed_activities") + "</passed-activities>";
					strRet += "<task-assign-mode>" + insData.store.getValueById(subItemId, "task_assign_mode") + "</task-assign-mode>";
					strRet += "<process>" + insData.store.getValueById(subItemId, "process") + "</process>";
					
					strRet += "<template>" + insData.store.getValueById(subItemId, "template") + "</template>";
					strRet += "<executor-kinds>" + insData.store.getValueById(subItemId, "executor_kinds") + "</executor-kinds>";
					
					strRet += generateTaskRelationValue(insData, subItemId, dataBak);
					strRet += generateExecutorsOrRange(insExecutors, dataId);
			
					strRet += "</process-control-item>";
				}
			}
		}
	}
	
	return strRet;
}
				
/** 生成Notice节点 **/
function generateNoticeData() {
	var strRet = "<notice>";
	strRet += generateDataInfo("notice", "notice_executors", "original_notice");
	strRet += "</notice>";
	return strRet;
}
				
/** 生成To节点 **/
function generateToData() {
	var strRet = "<to>";
	strRet += generateDataInfo("to", "to_executors", "original_to");
	strRet += "</to>";
	
	return strRet;
}
				
/** 生成ProcessControl节点 **/
function generateProcessControl() {
	var strRet = "";
	
	strRet += generateProcessControlInfo();
	strRet += generateRunnableActivities();
	strRet += generateNoticeData();
	strRet += generateToData();
	
	return strRet;
}
			
/** 生成返回数据 **/
function generateJSReturnData() {
	var strRet = "<process-control xmlns=\"\">";
	strRet += generateProcessControl();
	strRet += "</process-control>";
	/*
	var strRet = "<form xmlns=\"\">";
	strRet += "<process-context>";

	strRet += generateOtherData();
	
	strRet += "<process-control>";
	strRet += generateProcessControl();
	strRet += "</process-control>";

	strRet += "</process-context>";
	strRet += "</form>";
	*/
	return strRet;
}

/** 将组织机构数据转换为 Grid 格式 **/
function generateOrgPersonData2Grid(parentId, node, id, onlyContent) {
	var strRet = "";

	if (!onlyContent) {
		strRet = "<rows parent=\"" + parentId + "\">";
	}

	if (node != null) {
		var childNodes = justep.XML.eval(node, "org-unit");
		if (childNodes.length > 0) {
			for (var i = 0; i < childNodes.length; i++) {
				var childNode = childNodes[i];
			
				strRet = strRet + "<row id=\"" + new justep.UUID().valueOf() + "_" + i + "\">";

				strRet = strRet + "<cell>";
				var oldNameE = justep.XML.eval(childNode, "name", "single");
				if (oldNameE != null && typeof(oldNameE) != "undefined") {
					strRet = strRet + getNodeText(oldNameE);
				}
				strRet = strRet + "</cell>";
				
				strRet = strRet + "<cell>";
				var oldFidE = justep.XML.eval(childNode, "fid", "single");
				if (oldFidE != null && typeof(oldFidE) != "undefined") {
					strRet = strRet + getNodeText(oldFidE);
				}
				strRet = strRet + "</cell>";

				strRet = strRet + "<cell>";
				var oldFnameE = justep.XML.eval(childNode, "fname", "single");
				if (oldFnameE != null && typeof(oldFnameE) != "undefined") {
					strRet = strRet + getNodeText(oldFnameE);
				}
				strRet = strRet + "</cell>";

				strRet = strRet + "<cell>";
				var oldIdE = justep.XML.eval(childNode, "id", "single");
				if (oldIdE != null && typeof(oldIdE) != "undefined") {
					strRet = strRet + getNodeText(oldIdE);
				}
				strRet = strRet + "</cell>";

				strRet = strRet + "<cell>";
				var oldKindE = justep.XML.eval(childNode, "kind", "single");
				if (oldKindE != null && typeof(oldKindE) != "undefined") {
					strRet = strRet + getNodeText(oldKindE);
				}
				strRet = strRet + "</cell>";
				
				strRet = strRet + "<cell>";
				var oldLoadedE = justep.XML.eval(childNode, "loaded", "single");
				if (oldLoadedE != null && typeof(oldLoadedE) != "undefined") {
					strRet = strRet + getNodeText(oldLoadedE);
				}
				strRet = strRet + "</cell>";

				strRet = strRet + "<cell>";
				var oldSelectableE = justep.XML.eval(childNode, "selectable", "single");
				if (oldSelectableE != null && typeof(oldSelectableE) != "undefined") {
					strRet = strRet + getNodeText(oldSelectableE);
				}
				strRet = strRet + "</cell>";

				strRet = strRet + "<cell>" + id + "</cell>";
				
				strRet = strRet + generateOrgPersonData2Grid("", childNode, id, true);

				strRet = strRet + "</row>";
			}
		}
	}

	if (!onlyContent) {
		strRet = strRet + "</rows>";
	}

	return strRet;
}

/** 根据条件过滤组织机构 **/
function queryOrgPerson(orgInstanceId, conditionInputId, queryType, dataInstanceId, executorRangeInstanceId, orgTreeId, executorInstanceId, leftId, allLeftId, rightId, allRightId) {

	var insOrgPerson = justep(orgInstanceId).xformsObject;

	var conditionInput = document.getElementById(conditionInputId);
	var condition = conditionInput.value;
	if (condition != "") {
		if (queryType == "to") {
			if (!toQuerySwitch) {
				toQuerySwitch = true;
				
      			var xmlDoc = insOrgPerson.store.getDoc();
       			toSavedOrgPerson = xmlDoc.replace(/<\?xml version="1\.0"\?>/,"");
			}
		} else if (queryType == "notice") {
			if (!noticeQuerySwitch) {
				noticeQuerySwitch = true;
				
      			var xmlDoc = insOrgPerson.store.getDoc();
       			noticeSavedOrgPerson = xmlDoc.replace(/<\?xml version="1\.0"\?>/,"");
			}
		}

		insOrgPerson.store.clearAllPro();
			
   		var insData = justep(dataInstanceId).xformsObject;
   		var dataId = insData.store.getValueById(insData.store.selectRowID, "data_id");
		var executorRange = generateExecutorsOrRange(executorRangeInstanceId, dataId, true);
			
		var param = "<root><range>" + executorRange + "</range><condition>" + condition + "</condition></root>";
   		var xmlHttpRequest = justep.Request.sendHttpRequest("/system/service/process/processDialogFilterOrg.j", param);
   		if (!justep.Request.isSuccess(xmlHttpRequest)){
   			return;
   		}
   			
   		var rdfEls = xmlHttpRequest.responseXML.documentElement;
   			
		if (rdfEls) {
			var data1 = generateOrgPersonData2Grid("0", rdfEls, dataId, true);
			var data2 = "<rows parent=\"0\">" +
				"<row id=\"00000000-0000-0000-0000-000000000000\">" +
				"<cell>组织机构</cell>" +
				"<cell>00000000-0000-0000-0000-000000000000</cell>" +
				"<cell>组织机构</cell>" +
				"<cell>00000000-0000-0000-0000-000000000000</cell>" +
				"<cell>-1</cell>" +
				"<cell>true</cell>" +
				"<cell>false</cell>" +
				"<cell>00000000-0000-0000-0000-000000000000</cell>" +
				data1 +
				"</row>" +
				"</rows>";
			
			insOrgPerson.loadData(null, data2, null, false);
		}									                                              			
	} else {
		var querySwitch = false;
		if (queryType == "to") {
			querySwitch = toQuerySwitch;
		} else if (queryType == "notice") {
			querySwitch = noticeQuerySwitch;
		}			
	
		if (querySwitch) {
			insOrgPerson.store.clearAllPro();
			
			if (queryType == "to") {
				toQuerySwitch = false;
     			insOrgPerson.loadData(null, toSavedOrgPerson, null, false);
	 			toSavedOrgPerson = "<rows></rows>";
	 		} else if (queryType == "notice") {
	 			noticeQuerySwitch = false;
     			insOrgPerson.loadData(null, noticeSavedOrgPerson, null, false);
	 			noticeSavedOrgPerson = "<rows></rows>";
	 		}
                             			
			var treeOrgPerson = justep(orgTreeId).xformsObject;
			var colIndex = treeOrgPerson.grid.getColIndexById("data_id");
			treeOrgPerson.grid.filterByPro(colIndex, function(val) {
				var insData = justep(dataInstanceId).xformsObject;
				var dataId = insData.store.getValueById(insData.store.selectRowID, "data_id");
				return val == dataId;
			});
		}
	}
	
	insOrgPerson.store.expandAll();
	
	if (condition != "") {
		selectFilterNode(insOrgPerson, condition);
	} else {
		insOrgPerson.store.setIndex(0);
	}
	
	RefreshSelectButtonState(executorInstanceId, orgInstanceId, leftId, allLeftId, rightId, allRightId);

	InitOrgPersonChecked(orgInstanceId, executorInstanceId);
	
	if (returnKeydown) {
		returnKeydown = false;
		conditionInput.select();
	}
}		

function selectFilterNode(orgPersonInstance, condition) {
	var subData = orgPersonInstance.store.getAllRowIds(",");
	if (subData != "") {
		var subItems = subData.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItem = subItems[i];
			var nodeName = orgPersonInstance.store.getValueById(subItem, "name");
			var nodeKind = orgPersonInstance.store.getValueById(subItem, "kind");

			if ((strContains(nodeName, condition, true) || strContains(justep.String.makeFirstPY(nodeName), condition, true)) && nodeKind.toUpperCase() == "PSM") {
				orgPersonInstance.store.setIndex(i);
				break;
			}
		}
	}
}

function strContains(string,substr,isIgnoreCase)
{
    if(isIgnoreCase) {
     string=string.toLowerCase();
     substr=substr.toLowerCase();
    }
    var startChar=substr.substring(0,1);
    var strLen=substr.length;
    for(var j=0;j<string.length-strLen+1;j++)
    {
        if(string.charAt(j)==startChar)/*如果匹配起始字符,开始查找*/
        {
        	if(string.substring(j,j+strLen)==substr)/*如果从j开始的字符与str匹配，那ok*/
            {
            	return true;
            }   
        }
    }
	return false;
}

/** 快速查询回车操作（环节） **/
function to_filter_input_keydown(evt) {
	var keycode = evt.keyCode || evt.which || evt.charCode;
	if (keycode == 13) {
		returnKeydown = true;
    	var queryButton = document.getElementById("to_query_button");
    	if (queryButton) {
    		queryButton.click();
   		}
	}
}

/** 快速查询回车操作（通知） **/
function notice_filter_input_keydown(evt) {
	var keycode = evt.keyCode || evt.which || evt.charCode;
	if (keycode == 13) {
		returnKeydown = true;
    	var queryButton = document.getElementById("notice_query_button");
    	if (queryButton) {
    		queryButton.click();
   		}
	}
}

/** 当环节的复选框选中时触发 */
function onActivityRowChecked(event){
	var insActivityTree = event.instance;
	var rowId = event.rowId;
	updateTreeCheckState(insActivityTree, rowId);
}

/** 设置环节数据的图标 **/
function onActivityShowNodeImg(data){
	var instance = data.instance;
	var operator = instance.store.getValueById(data.rowId, "operator");
	if (operator == "and") {
		return "/UI/system/images/process/processdata_item_check.png";
	} else if (operator == "xor") {
		return "/UI/system/images/process/processdata_item_radio.png";
	} else {
		var optional = instance.store.getValueById(data.rowId, "optional");
		if (optional == "true") {
			return "/UI/system/images/process/processdata_activity_optional.png";
		} else {
			return "/UI/system/images/process/processdata_activity.png";
		}
	}
}

/** 环节选中行变化时触发 */
function activityRowIndexChanged(evt){
	if (typeof(toReady) != "undefined") {
		var insActivity = justep("activity_children").xformsObject;
		var activityId = insActivity.store.getValueById(evt.getData().rowId, "activity_id");
	
		if (activityId != "") {
			var insToData = justep("to").xformsObject;
			var index = insToData.getIndex(['activity_id'], activityId);
			insToData.store.setIndex(index);
		} else {
			var subData = insActivity.store.getSubItems(evt.getData().rowId);
			if (subData != "") {
				var subItems = subData.toString().split(",");
				var subItemId = subItems[0];
				var index = insActivity.store.getRowIndex(subItemId);
				insActivity.store.setIndex(index);
			}
		}
		
		var insToOrgPerson = justep("to_org_person").xformsObject;
		insToOrgPerson.setIndex(0);
		
		var insToExecutors = justep("to_executors").xformsObject;
		if (insToExecutors.store.rowsBuffer[0] != null) {
			insToExecutors.setIndex(insToExecutors.store.rowsBuffer[0].rowIndex);
		}
		
		RefreshSelectButtonState("to_executors", "to_org_person", "to_select_to_left", "all_to_select_to_left", "to_select_to_right", "all_to_select_to_right");
		RefreshMoveButtonState("to_executors", "to_move_to_first", "to_move_to_prev", "to_move_to_next", "to_move_to_last");
		
		InitOrgPersonChecked("to_org_person", "to_executors");
	}
}

/** 设置组织机构的图标 **/
function org_person_tree_getNodeImage(data) {
	var instance = data.instance;
	var kind = instance.store.getValueById(data.rowId, "kind");
	if (kind == "ogn") {
		return "/UI/system/images/org/org.gif";
	} else if (kind == "dpt") {
		return "/UI/system/images/org/dept.gif";
	} else if (kind == "pos") {
		return "/UI/system/images/org/pos.gif";
	} else if (kind == "psm") {
		return "/UI/system/images/org/person.gif";
	} else {
		return "/UI/system/images/org/roleType.gif";
	}
}

function findCollapsedTreeNode(instance, value, fields, single, rowId) {
	var result = "0";
	
	var subData = instance.store.getSubItems(rowId);
	if (subData != "") {
		var subItems = subData.split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItem = subItems[i];
			var str = "";
			for (var c = 0; c < fields.length; c++) {
				if (c > 0) {
					str += ",";
				}
				str += instance.store.getValueById(subItem, fields[c]);
			}
			
			if (value == str.toLowerCase()) {
				if (single) {
					result = subItem;
					break;
				} else {
					if (result == "0") {
						result = subItem;
					} else {
						result += ("," + subItem);
					}
				}
			}
			
			if (instance.store.canExpand(subItem)) {
				var subResult = findCollapsedTreeNode(instance, value, fields, single, subItem);
				if (subResult != "0") {
					if (result == "0") {
						result = subResult;
					} else {
						result += ("," + subResult);
					}
				}
			}
		}
	}
	
	return result;
}

/** 根据指定字段、数据查找行ID, 多个","分隔  **/
function findRow(instance, values, fields, single, allData) {
	var rowId = "0";
	
	if (!values || values.length == 0 ||
		!fields || fields.length == 0 ||
		values.length != fields.length) {
		return rowId;
	}
	
	var value = values.toString().toLowerCase();
	var onlyOne = true;
	if (typeof(single) != "undefined") {
		onlyOne = single;
	}
	
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}
	
	if (!allData) {
		for (var r = 0; r < instance.store.rowsBuffer.length; r++) {
			var str = "";
			for (var c = 0; c < fields.length; c++) {
				if (c > 0) {
					str = str + ",";
				}
				str = str + instance.store.getValueById(instance.store.rowsBuffer[r].idd, fields[c]);
			}
			
			if (value == str.toLowerCase()) {
				if (onlyOne) {
					rowId = instance.store.rowsBuffer[r].idd;
					break;
				} else {
					if (rowId == "0") {
						rowId = instance.store.rowsBuffer[r].idd;
					} else {
						rowId += ("," + instance.store.rowsBuffer[r].idd);
					}
				}
			}
			
			if (instance.store.isTreeGrid()) {
				if (instance.store.canExpand(instance.store.rowsBuffer[r].idd)) {
					var subRowId = findCollapsedTreeNode(instance, value, fields, onlyOne, instance.store.rowsBuffer[r].idd);
					if (subRowId != "0") {
						if (onlyOne) {
							rowId = subRowId;
							break;
						} else {
							if (rowId == "0") {
								rowId = subRowId;
							} else {
								rowId += ("," + subRowId);
							}
						}
					}
				}
			}
		}
	} else { 
		var rowArrs = [];
		var idx = 0;
		for (var p in instance.store.rowsAr) {
			var str = "";
			for (var c = 0; c < fields.length; c++) {
				if (c > 0) {
					str = str + ",";
				}
				if (instance.store.rowsAr[p] != null) {
					str = str + instance.store.getValueById(p, fields[c]);
				}
			}
			
			if (value.toLowerCase() == str.toLowerCase()) {
				if (onlyOne) {
					rowArrs[0] = p;
					break;
				} else {
					if (instance.kind == "simple-data") {
						rowArrs[idx] = p;
					} else {
						rowArrs[instance.store.rowsAr[p].rowIndex - 1] = p;
					}
				}
			}
			
			idx++;
		}
		for (var i = 0; i < rowArrs.length; i++) {
			if (typeof(rowArrs[i]) != "undefined") {
				if (rowId == "0") {
					rowId = rowArrs[i];
				} else {
					rowId += ("," + rowArrs[i]);
				}
			}
		}
	}
	
	return rowId;
}

/** 根据节点选择重置环节状态  **/
function updateTreeCheckState(instance, rowId, init) {
	var checkColId = "selected";
	var operatorColId = "operator";
	var optionalColId = "optional";
	var activityColId = "activity_id";
	var defaultColId = "selected";

	if (init) {
		var initedCount = 0;
		var firstMust = "";
		var subData = instance.store.getSubItems();
		var subItems = subData.toString().split(",");
		var flowToData = xforms("to");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			var optional = instance.store.getValueById(subItemId, optionalColId);
			if ((firstMust == "") && (optional != "true")) {
				firstMust = subItemId;
			}
			
			var activity = instance.store.getValueById(subItemId, activityColId);
			var arrValue = [activity];
			var arrField = [activityColId];
			var flowToRowId = findRow(flowToData, arrValue, arrField);
			if (flowToRowId != "0") {
				var selected = flowToData.store.getValueById(flowToRowId, defaultColId);
				if (selected == "true") {
					instance.store.setValueById(subItemId, checkColId, "1");
					initParentTreeCheckState(instance, subItemId, checkColId, operatorColId, optionalColId, activityColId, defaultColId);
					initedCount++;
				}
			}
			if (instance.store.hasChildren(subItemId)) {
				initedCount += initChildTreeCheckState(instance, subItemId, checkColId, operatorColId, optionalColId, activityColId, defaultColId);
			}
		}
		if (initedCount == 0) {
			if (firstMust == "") {
				firstMust = subItems[0];
			}
			
			instance.store.setValueById(firstMust, checkColId, "1");
			updateTreeCheckState(instance, firstMust);
		}
	} else {
		if (instance.store.selectRowID != rowId) {
			instance.store.selectRowById(rowId, "", true, true);
		}
	
		var currSelectedState = instance.store.getValueById(rowId, checkColId);
		var needChange = true;
		
		var optional = instance.store.getValueById(rowId, optionalColId);
		if (optional == "true" && currSelectedState == "0") {
			var parentId = instance.store.getParentId(rowId);
			
			var operator = "";
			if (parentId != "0") {
				operator = instance.store.getValueById(parentId, operatorColId);
			} else {
				var rootActivity = xforms("activity_root");
				operator = rootActivity.store.getValueByName(operatorColId, 0);
			}
			
			if (operator == "and") {
				var subData = instance.store.getSubItems(parentId);
				if (subData != "") {
					var subItems = subData.toString().split(",");
					for (var i = 0; i < subItems.length; i++) {
						var subItemId = subItems[i];
						var optional = instance.store.getValueById(subItemId, optionalColId);
						var selected = instance.store.getValueById(subItemId, checkColId);
						if (optional == "false" || optional == "" || selected != "0") {
							needChange = false;
							updateChildState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, currSelectedState);
							break;
						}
					}
				}
			}
		}
		
		if (needChange) {
			updateSiblingState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, currSelectedState);
			updateParentState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, currSelectedState);
			updateChildState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, currSelectedState);
		}
	}
}

/** 根据节点选择重置环节状态（处理父节点） **/
function updateParentState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, state) {
	var parentId = instance.store.getParentId(rowId);
	if (parentId != "0") {
		instance.store.setValueById(parentId, checkColId, state);
		
		var optional = instance.store.getValueById(parentId, optionalColId);
		if (!(optional == "true" && state == "0")) {
			updateSiblingState(instance, parentId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, state);
		}
		
		updateParentState(instance, parentId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, state);
	}
}

/** 根据节点选择重置环节状态（处理兄弟节点） **/
function updateSiblingState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, state) {
	var rowIdx = instance.store.getRowIndex(rowId);
	var rowLevel = instance.store.getLevel(rowId);

	var parentId = instance.store.getParentId(rowId);
	
	var operator = "";
	
	if (parentId != "0") {
		operator = instance.store.getValueById(parentId, operatorColId);
	} else {
		var rootActivity = xforms("activity_root");
		operator = rootActivity.store.getValueByName(operatorColId, 0);
	}
	
	var subData = instance.store.getSubItems(parentId);
	if (subData != "") {
		var subItems = subData.toString().split(",");
		if (operator == "and") {
			for (var i = 0; i < subItems.length; i++) {
				var subItemId = subItems[i]; 
				if (subItemId != rowId) {
					if (instance.store.getValueById(subItemId, checkColId) != state) {
						var mustNeed = true;
						
						if (state == "1") {
							var optional = instance.store.getValueById(subItemId, optionalColId);
							if (optional == "true") {
								mustNeed = false;
							}
						}
					
						if (mustNeed) {
							instance.store.setValueById(subItemId, checkColId, state);
							updateChildState(instance, subItemId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, state);
						}
					}
				}
			}
		} else if (operator == "xor") {
			if (state == "1") {
				for (var i = 0; i < subItems.length; i++) {
					var subItemId = subItems[i];
					if (subItemId != rowId) {
						instance.store.setValueById(subItemId, checkColId, "0");
						updateChildState(instance, subItemId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, "0");
					}
				}
			}
		} else {
			alert("不支持的流转操作符，目前只支持“and”和“xor”。");
		}
	} 
}

/** 根据节点选择重置环节状态（处理子节点） **/
function updateChildState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, state) {
	var childCount = instance.store.hasChildren(rowId);

	if (childCount > 0) {
		if (state == "1") {
			var operator = instance.store.getValueById(rowId, operatorColId);
			
			if (operator == "and") {
				var bHaveChecked = false;
				
				var flowToData = xforms("to");
				var arrField = [activityColId];
				
				for (var i = 0; i < childCount; i++) {
					var childRowId = instance.store.getChildItemIdByIndex(rowId, i);
					
					var activityValue = instance.store.getValueById(childRowId, activityColId);
					var arrValue = [activityValue];
					var flowToRowId = findRow(flowToData, arrValue, arrField);
					if (flowToRowId != "0") {
							instance.store.setValueById(childRowId, checkColId, "1");
							updateChildState(instance, childRowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, "1");
					} else {
						instance.store.setValueById(childRowId, checkColId, "1");
						updateChildState(instance, childRowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, "1");
					}
				}
			} else if (operator == "xor") {
				var bHaveChecked = false;
				
				for (var i = 0; i < childCount; i++) {
					var childRowId = instance.store.getChildItemIdByIndex(rowId, i);
					instance.store.setValueById(childRowId, checkColId, "0");
				}
				
				if (!bHaveChecked) {
					var flowToData = xforms("to");
					var arrField = [activityColId];
					for (var i = 0; i < childCount; i++) {
						var childRowId = instance.store.getChildItemIdByIndex(rowId, i);
						var activityValue = instance.store.getValueById(childRowId, activityColId);
						
						var arrValue = [activityValue];
						var flowToRowId = findRow(flowToData, arrValue, arrField);
						if (flowToRowId != "0") {
							var selected = flowToData.store.getValueById(flowToRowId, defaultColId);
							if (selected == "true") {
								instance.store.setValueById(childRowId, checkColId, "1");
								updateChildState(instance, childRowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, "1");
								bHaveChecked = true;
								break;
							}
						}
					}
				}

				if (!bHaveChecked) {
					var childRowId = instance.store.getChildItemIdByIndex(rowId, 0);
					instance.store.setValueById(childRowId, checkColId, "1");
					updateChildState(instance, childRowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId, "1");
				}
			} else {
				alert("不支持的流转操作符，目前只支持“and”和“xor”。");
			}
		} else {
			for (var i = 0; i < childCount; i++) {
				var childRowId = instance.store.getChildItemIdByIndex(rowId, i);
				instance.store.setValueById(childRowId, checkColId, "0");
				updateChildState(instance, childRowId, checkColId, operatorColId, activityColId, defaultColId, "0");
			}
		}
	}
}

/** 初始化子节点状态 **/
function initChildTreeCheckState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId) {
	var iCount = 0;
	var subData = instance.store.getSubItems(rowId);
	var subItems = subData.toString().split(",");
	var flowToData = xforms("to");
	for (var i = 0; i < subItems.length; i++) {
		var subItemId = subItems[i];
		var activity = instance.store.getValueById(subItemId, activityColId);
		var arrValue = [activity];
		var arrField = [activityColId];
		var flowToRowId = findRow(flowToData, arrValue, arrField);
		if (flowToRowId != "0") {
			var selected = flowToData.store.getValueById(flowToRowId, defaultColId);
			if (selected == "true") {
				instance.store.setValueById(subItemId, checkColId, "1");
				initParentTreeCheckState(instance, subItemId, checkColId, operatorColId, optionalColId, activityColId, defaultColId);
				iCount++;
			}
		}
		if (instance.store.hasChildren(subItemId)) {
			iCount += initChildTreeCheckState(instance, subItemId, checkColId, operatorColId, optionalColId, activityColId, defaultColId);
		}
	}
	return iCount;
}

/** 根据子节点状态设置父节点状态 **/
function initParentTreeCheckState(instance, rowId, checkColId, operatorColId, optionalColId, activityColId, defaultColId) {
	var parentId = instance.store.getParentId(rowId);
	if (parentId != "0") {
		instance.store.setValueById(parentId, checkColId, "1");
		initParentTreeCheckState(instance, parentId, checkColId, operatorColId, optionalColId, activityColId, defaultColId)
	}
}

/** 移动行位置 **/
function moveRow(instance, targetIndex, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.store.selectRowID;
	}

	var sourceData = [];

	var sourceIndex = instance.store.getRowIndex(sourceId);
	for (var i = 0; i < instance.store.getColumnsNum(); i++) {
		var cd = instance.store.getValueByIndex(i, sourceIndex);
		sourceData[i] = cd;
	}

	instance.store.deleteRow(sourceId);
	instance.store._syncBuffer();

	instance.store.addRowPro(sourceId, sourceData, targetIndex);
	instance.store.setIndex(targetIndex);
}

/** 移动到第一行 **/
function moveRowFirst(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.store.selectRowID;
	}
	
	var sourceIndex = instance.store.getRowIndex(sourceId);
	if (sourceIndex > 0) {
		moveRow(instance, 0, sourceId);
	}
}

/** 向上移动一行 **/
function moveRowUp(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.store.selectRowID;
	}
	
	var sourceIndex = instance.store.getRowIndex(sourceId);
	if (sourceIndex > 0) {
		moveRow(instance, sourceIndex - 1, sourceId);
	}
}

/** 向下移动一行 **/
function moveRowDown(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.store.selectRowID;
	}
	
	var sourceIndex = instance.store.getRowIndex(sourceId);
	if (sourceIndex < instance.store.getRowsNum() - 1) {
		moveRow(instance, sourceIndex + 1, sourceId);
	}
}

/** 移动到最后一行 **/
function moveRowLast(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.store.selectRowID;
	}
	
	var sourceIndex = instance.store.getRowIndex(sourceId);
	var rowCount = instance.store.getRowsNum();
	if (sourceIndex < rowCount - 1) {
		moveRow(instance, rowCount - 1, sourceId);
	}
}

function closeDialogAction() {

	var isValidate = true;

	var hasToData = justep("to") != null;
	if (hasToData) {
		var insActivityChildren = justep("activity_children").xformsObject;
		var xmlDoc = insActivityChildren.store.getDoc();
		var xmlData = xforms.Writer.toString(xmlDoc);
					
		var obj = justep.XML.fromString(xmlData);
		var selectedNodes = justep.XML.eval(obj, "//row[cell[4]='1']");
		
		if (selectedNodes.length > 0) {
			isValidate = true;
		} else {
			isValidate = false;
			alert("至少要选择一个环节进行流转！");
		}
		
		if (isValidate) {
			var errorActivity = refreshAndCheckToSelectStatus();
			if (errorActivity != "") {
				isValidate = false;
				alert("流转环节“" + errorActivity + "”必须选择执行者！");
			}
		}
	}
	
	
	if (isValidate) {
		var hasNoticeData = justep("notice") != null;
		if (hasNoticeData) {
			var errorNotice = refreshAndCheckNoticeStatus();
			if (errorNotice != "") {
				isValidate = false;
				alert("通知“" + errorNotice + "”必须选择执行者！");
			}
		}
	}
	
	
	if (isValidate) {
		var toGridExecutors = xforms("to_executors_grid");
		if (toGridExecutors != null) {
			var colIndex = toGridExecutors.grid.getColIndexById("data_id");
			toGridExecutors.grid.filterByPro(colIndex);
		}
		var noticeGridExecutors = xforms("notice_executors_grid");
		if (noticeGridExecutors != null) {
			var colIndex = noticeGridExecutors.grid.getColIndexById("data_id");
			noticeGridExecutors.grid.filterByPro(colIndex);
		}
		
		var param = generateJSReturnData();
		window.frameElement.callback(true, param);
	}			
}

function cancelDialogAction() {
	window.frameElement.callback(false);
}

function noticeQueryAction() {
	queryOrgPerson('notice_org_person', 'notice_query_input', 'notice', 'notice', 'notice_executor_range', 'notice_org_person_tree', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right');
}

function noticeSelectToRightAction() {
	SelectOrgPerson('notice', 'notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last');
}

function noticeSelectToLeftAction() {
	UnselectOrgPerson('notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last');
}

function allNoticeSelectToRightAction() {
	SelectAllOrgPerson('notice', 'notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last');
}

function allNoticeSelectToLeftAction() {
	UnselectAllOrgPerson('notice_org_person', 'notice_executors', 'notice_select_to_left', 'all_notice_select_to_left', 'notice_select_to_right', 'all_notice_select_to_right', 'notice_move_to_first', 'notice_move_to_prev', 'notice_move_to_next', 'notice_move_to_last');
}

function noticeMoveToFirstAction() {
	moveRowFirst('notice_executors');
}

function noticeMoveToPrevAction() {
	moveRowUp('notice_executors');
}

function noticeMoveToNextAction() {
	moveRowDown('notice_executors');
}

function noticeMoveToLastAction() {
	moveRowLast('notice_executors');
}

function toQueryAction() {
	queryOrgPerson('to_org_person', 'to_query_input', 'to', 'to', 'to_executor_range', 'to_org_person_tree', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right');
}

function toSelectToRightAction() {
	SelectOrgPerson('to', 'to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last');
}

function toSelectToLeftAction() {
	UnselectOrgPerson('to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last');
}

function allToSelectToRightAction() {
	SelectAllOrgPerson('to', 'to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last');
}

function allToSelectToLeftAction() {
	UnselectAllOrgPerson('to_org_person', 'to_executors', 'to_select_to_left', 'all_to_select_to_left', 'to_select_to_right', 'all_to_select_to_right', 'to_move_to_first', 'to_move_to_prev', 'to_move_to_next', 'to_move_to_last');
}

function toMoveToFirstAction() {
	moveRowFirst('to_executors');
}

function toMoveToPrevAction() {
	moveRowUp('to_executors');
}

function toMoveToNextAction() {
	moveRowDown('to_executors');
}

function toMoveToLastAction() {
	moveRowLast('to_executors');
}
function onReady(){
	var insActivityChildren = xforms("activity_children");
	 
	if (insActivityChildren.store.getRowsNum() > 0) {
		updateTreeCheckState(insActivityChildren, null, true);
	}
	
	insActivityChildren.store.expandAll();
	
	var values = ["1", "true"];
	var fields = ["selected", "is_activity"];
	var rowId = findRow(insActivityChildren, values, fields, true);
	if (rowId != "0") {
		var index = insActivityChildren.store.getRowIndex(rowId);
		insActivityChildren.store.setIndex(index);
		
		var activityId = insActivityChildren.store.getValueById(rowId, "activity_id");
		var insToData = justep("to").xformsObject;
		var index = insToData.getIndex(['activity_id'], activityId);
		insToData.store.setIndex(index);
	}

	var treeToOrgPerson = xforms("to_org_person_tree");
	var colIndex = treeToOrgPerson.grid.getColIndexById("data_id");
	
	treeToOrgPerson.grid.filterByPro(colIndex, function(val) {
		var insToData = xforms("to");
		var dataId = insToData.store.getValueById(insToData.store.selectRowID, "data_id");
		return val == dataId;
	});
	treeToOrgPerson.grid.expandAll();

	var gridExecutors = xforms("to_executors_grid");
	var colIndex = gridExecutors.grid.getColIndexById("data_id");
	gridExecutors.grid.filterByPro(colIndex, function(val) {
		var insToData = xforms("to");
		var dataId = insToData.store.getValueById(insToData.store.selectRowID, "data_id");
		return val == dataId;
	});
	toReady = true;
	
	RefreshSelectButtonState("to_executors", "to_org_person", "to_select_to_left", "all_to_select_to_left", "to_select_to_right", "all_to_select_to_right");
	RefreshMoveButtonState("to_executors", "to_move_to_first", "to_move_to_prev", "to_move_to_next", "to_move_to_last");

	InitOrgPersonChecked("to_org_person", "to_executors");
	
	var toQueryButton = document.getElementById("to_query_button");
	if (toQueryButton) {
		xforms.Event.attach(toQueryButton, "click", toQueryAction);
	}
	
	var toSelectToRightButton = document.getElementById("to_select_to_right");
	if (toSelectToRightButton) {
		xforms.Event.attach(toSelectToRightButton, "click", toSelectToRightAction);
	}
	
	var toSelectToLeftButton = document.getElementById("to_select_to_left");
	if (toSelectToLeftButton) {
		xforms.Event.attach(toSelectToLeftButton, "click", toSelectToLeftAction);
	}
	
	var allToSelectToRightButton = document.getElementById("all_to_select_to_right");
	if (allToSelectToRightButton) {
		xforms.Event.attach(allToSelectToRightButton, "click", allToSelectToRightAction);
	}
	
	var allToSelectToLeftButton = document.getElementById("all_to_select_to_left");
	if (allToSelectToLeftButton) {
		xforms.Event.attach(allToSelectToLeftButton, "click", allToSelectToLeftAction);
	}
	
	var toMoveToFirstButton = document.getElementById("to_move_to_first");
	if (toMoveToFirstButton) {
		xforms.Event.attach(toMoveToFirstButton, "click", toMoveToFirstAction);
	}
	
	var toMoveToPrevButton = document.getElementById("to_move_to_prev");
	if (toMoveToPrevButton) {
		xforms.Event.attach(toMoveToPrevButton, "click", toMoveToPrevAction);
	}
	
	var toMoveToNextButton = document.getElementById("to_move_to_next");
	if (toMoveToNextButton) {
		xforms.Event.attach(toMoveToNextButton, "click", toMoveToNextAction);
	}
	
	var toMoveToLastButton = document.getElementById("to_move_to_last");
	if (toMoveToLastButton) {
		xforms.Event.attach(toMoveToLastButton, "click", toMoveToLastAction);
	}
}