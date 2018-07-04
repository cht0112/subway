function manageFilterGetCondition(event) {
	var customOrgFilter = "";
	var defFilter = event.defaultCondition;
	if (defFilter && defFilter != '') {
		var releaseOrgFilter = defFilter.replace(/fCreatePsnID/g,
				"fReleasePsnID").replace(/fCreatePsnFullID/g,
				"fReleasePsnFullID");
		customOrgFilter = "(" + defFilter + " or " + releaseOrgFilter + ")";
	} else {
		customOrgFilter = "(fCreatePsnID = "
				+ justep.Context.getCurrentPersonID() + " or fReleasePsnID = "
				+ justep.Context.getCurrentPersonID() + " )";
	}
	 //alert(customOrgFilter);
	event.handled = true;
	return customOrgFilter;
}

function trfFolderShowNodeImg(event) {
	return "/UI/OA/common/images/org.gif";
}

function hyperlink2Knowledge(data) {
	try {
		var value = data.value;// 当前行/列
		return '<a href="javascript:void(0)" onclick="viewKnowlegde(this);">'
				+ value + '</a>';
	} catch (e) {
		alert(e);
	}
}

function viewKnowlegde(gridElement) {
	var gridInfo = getGridInfoByElement(gridElement);
	var gridID = '';
	if (gridInfo) {
		gridID = gridInfo.rowId;
	}
	if (!gridID || gridID == '') {
		gridID = $('main').xfElement.getValueByName('rowid');
	}

	var process = "/OA/knowledge/process/publishKnowledge/publishKnowledgeProcess";
	var activity = "publishKWActivity";
	var url = "/OA/knowledge/process/publishKnowledge/publishKWActivity.w"
			+ "?process=" + process + "&activity=" + activity + "&KWID="
			+ gridID + "&operator=edit";

	justep.Portal.openWindow("知识发布", url);
}

function openPublishKnowledgeByNew() {
	var process = "/OA/knowledge/process/publishKnowledge/publishKnowledgeProcess";
	var activity = "publishKWActivity";
	var url = "/OA/knowledge/process/publishKnowledge/publishKWActivity.w"
			+ "?process=" + process + "&activity=" + activity + "&operator=new";

	justep.Portal.openWindow("知识发布", url);
}

// 发布知识
function relaseKnowledge() {
	var data = justep.xbl('dKnowledge');
	if (data) {
		try {
		
			var kwid = data.getCurrentRowId();
			if (kwid != undefined && kwid != '') {
				appCommon.DataUtils.refreshDataByRowIds(data, kwid);
				var releaseStatus = data.getValue("fReleaseStatus", kwid);
				if (releaseStatus == '1') {
					alert("该知识已经发布!");
					return;
				}
				var cfm = window.confirm('确定要发布吗?');
				if (cfm) {
					var fReleaseOgnID = justep.Context.getCurrentOgnID();
				var fReleaseOgnName = justep.Context.getCurrentOgnName();
				var fReleaseDeptID = justep.Context.getCurrentDeptID() || justep.Context.getCurrentOgnID();
				var fReleaseDeptName = justep.Context.getCurrentDeptName() || justep.Context.getCurrentOgnName();
				var fReleasePsnID = justep.Context.getCurrentPersonID();
				var fReleasePsnName = justep.Context.getCurrentPersonMemberNameWithAgent();
				                                     
				var fReleasePsnFID = justep.Context.getCurrentPersonMemberFID();
				var fReleasePsnFName = justep.Context.getCurrentPersonMemberFNameWithAgent();
				var fReleaseTime = justep.Date.toString(justep.System
						.datetime(), justep.Date.STANDART_FORMAT);
				data.setRowData(kwid, [fReleaseOgnID, fReleaseOgnName,
						fReleaseDeptID, fReleaseDeptName, fReleasePsnID,
						fReleasePsnName, fReleasePsnFID, fReleasePsnFName,
						fReleaseTime, '1', '已发布'], ['fReleaseOgnID',
						'fReleaseOgnName', 'fReleaseDeptID',
						'fReleaseDeptName', 'fReleasePsnID',
						'fReleasePsnName', 'fReleasePsnFID',
						'fReleasePsnFName', 'fReleaseTime',
						'fReleaseStatus', 'fReleaseStatusName']);
					data.saveData();
					alert("发布成功!");
				}
			} else {
				alert("当前没有可供发布的知识!");
				return;
			}
		} catch (e) {
			alert("发布知识出错!");
		}
	}
}

// 取消发布知识
function cancelRelaseKnowledge() {
	var data = justep.xbl('dKnowledge');
	if (data) {
		try {
			var kwid = data.getCurrentRowId();
			if (kwid != undefined && kwid != '') {
				appCommon.DataUtils.refreshDataByRowIds(data, kwid);
				var releaseStatus = data.getValue("fReleaseStatus", kwid);
				if (releaseStatus == '0') {
					alert("该知识还未发布!");
					return;
				} else if (releaseStatus == '2') {
					alert("该知识已经取消发布!");
					return;
				}
				var cfm = window.confirm('确定要取消发布吗?');
				if (cfm) {
					data.setValue("fReleaseStatus", "2");
					data.setValue("fReleaseStatusName", "已取消");
					data.saveData();
					alert('取消发布成功!');
				}
			} else {
				alert("当前没有可供取消的知识!");
				return;
			}
		} catch (e) {
			alert("取消发布失败! ");
		}
	}
}

// 能否删除知识
function canDeleteKW() {
	try {
		var currentPsnID = justep.Context.getCurrentPersonID();
		var data = justep.xbl('dKnowledge');
		var createPsnID = data.getValue('fCreatePsnID');
		var releaseStatus = data.getValue('fReleaseStatus');
		var bizState = data.getValue('fBizState');

		if (currentPsnID == createPsnID && releaseStatus == '0'
				&& bizState == '') {
			return false;
		}
	} catch (e) {
	}

	return true;
}