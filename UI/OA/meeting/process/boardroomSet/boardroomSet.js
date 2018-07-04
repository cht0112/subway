var dlgOperator = "";
var BoardroomID = "";
var dlgTitle = "会议室信息";

function trigger2DOMActivate(event) {
	openBoardroomInfoDialogByNew("new", "");
}

function gridBoardroom_fNameRender(data) {
	var fid = data.rowId;
	var html = "<a href=\"javascript:openBoardroomInfo('" + fid + "')\">"
			+ data.value + "</a>";
	return html;
}

// 启用
function startUseFun() {
	try {
		var data = justep.xbl('dList');
		var id = data.getCurrentRowId();

		data.setValue("fUseStatus", '1', id);
		data.setValue("fUseStatusName", '启用', id);
		data.saveData();
	} catch (e) {
		alert("对不起,启用失败!");
	}
}

// 全部启用
function useAllFun() {
	try {
		var data = justep.xbl('dList');
		var len = data.getCount();

		for ( var i = 0; i < len; i++) {
			var id = data.getRowId(i);
			var useFlag = data.getValue("fUseStatus", id);
			if (useFlag == '0' || useFlag == '') {
				data.setValue("fUseStatus", '1', id);
				data.setValue("fUseStatusName", '启用', id);
			}
		}
		data.saveData();
	} catch (e) {
		alert("对不起,全部启用失败!");
	}
}

// 停用
function stopUseFun() {
	try {
		var data = justep.xbl('dList');
		var id = data.getCurrentRowId();

		data.setValue("fUseStatus", '2', id);
		data.setValue("fUseStatusName", '停用', id);
		data.saveData();
	} catch (e) {
		alert("对不起,停用失败!");
	}
}
function openBoardroomInfoDialogByNew(operator, fID) {
	dlgOperator = operator;
	BoardroomID = fID;
	var boardroomInfoDlg = justep.xbl("dlgBoardroomInfo");
	if (!boardroomInfoDlg) {
		alert("对象 不存在!");
		return;
	}
	boardroomInfoDlg.initEveryTimes = true;
	boardroomInfoDlg.open();
}

function openBoardroomInfo(fID) {
	BoardroomID = fID;
	dlgOperator = "edit";
	var boardroomInfoDlg = justep.xbl("dlgBoardroomInfo");
	if (!boardroomInfoDlg) {
		alert("对象 不存在!");
		return;
	}
	boardroomInfoDlg.initEveryTimes = true;
	boardroomInfoDlg.open();
}
function dlgBoardroomInfoReceive(obj) {
	var id = obj.data;
	var data = justep.xbl("dList");
	var len = data.getCount();
	/*
	 * for (i = 0; i < len; i++) { var rID = data.getRowId(i); if (rID == id) {
	 * appCommon.DataUtils.refreshDataByRowIds(data, id, null); return; } }
	 */
	data.refreshData();
}
function dlgBoardroomInfoSend(event) {
	var params = {
		"operator" : dlgOperator,
		"boardroomID" : BoardroomID,
		"title" : dlgTitle
	};
	return params;
}