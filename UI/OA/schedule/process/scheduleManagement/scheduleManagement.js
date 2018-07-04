function data2ValueChanged(event) {
}
var dlgOperator = "";
var MasterID = "";

// ////////////startActivity/////////////////////////////////
/**
 * *********************model事件********************************************
 */
function dateFilter1Changed(event) {
	prepareFilter();
}
function mdMainload(event) {
	prepareFilter();
}

function orgFilter1Changed(event) {
	prepareFilter();
}
function query_keywordxforms_value_changed(event) {
	prepareFilter();
}
function prepareFilter() {

}

function scheduleDialogReturn(params) {
	if (params.data && params.data == "ok") {
		prepareFilter();
	}
}

// 安排日程
function callDeleteSchedule(fID) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	var action = "deleteScheduleAction";
	param.setString('fID', fID);
	var r = justep.Request.sendBizRequest(process, activity, action, param,
			null, null, true);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "删除日程失败"));
	}
	return true;
}

function deleteSchedule() {
	var ensureDelete = confirm('确实要删除选 中的日程吗？');
	if (ensureDelete) {
		var mainInstance = justep.xbl("dList");
		var index = mainInstance.getIndex();
		var fID = mainInstance.getRowId();
		var fCreatePsnID = mainInstance.getValue('fCreatePsnID', index);
		var sysCreatePsnID = justep.Context.getCurrentPersonID();
		if (fCreatePsnID == sysCreatePsnID) {
			callDeleteSchedule(fID);
			justep.xbl("dList").refreshData();
			alert('删除成功');
		} else {
			alert("您沒有刪除权限");
		}
	}
}

function grid1RowDblclick(event) {
	MasterID = justep.xbl("dList").getValue("rowid");
	dlgOperator = "view";
	var scheduleArrangeDlg = justep.xbl("dlgScheduleArrange");
	scheduleArrangeDlg.initEveryTimes = true;
	scheduleArrangeDlg.open();
}
function showSchedule(operator, gridID, title) {
	dlgOperator = operator;
	MasterID = gridID;
	var scheduleArrangeDlg = justep.xbl("dlgScheduleArrange");
	if (scheduleArrangeDlg) {
		scheduleArrangeDlg.open();
	}
}

function openMyScheduleDialog(data) {
	var fid = data.rowId;
	var html = "<a href=\"javascript:openAndViewMySchedule('" + fid + "')\">"
			+ data.value + "</a>";
	return html;
}

function openAndViewMySchedule(fID) {
	MasterID = fID;
	dlgOpetator = "view";
	showSchedule("view", MasterID, "日程编辑");
}

// 接收对话框返回
function dlgScheduleArrangeReceive(obj) {
	var id = obj.data;
	var data = justep.xbl("dList");
	var len = data.getCount();
	for (i = 0; i < len; i++) {
		var rID = data.getRowId(i);
		if (rID == id) {
			appCommon.DataUtils.refreshDataByRowIds(data, id, null);
			return;
		}
	}
	data.refreshData();
}
// 给对话框传值
function dlgScheduleArrangeSend(event) {
	var params = {
		"operator" : dlgOperator,
		"scheduleID" : MasterID,
		"executor" : "",
		"title" : "日程安排"
	};
	return params;
}
function hasPermissionToHandle(id) {
	var eventCreatePsnID = scheduler.getEvent(id).createPsnID;
	var sysCreatePsnID = justep.Context.getCurrentPersonID();
	return (eventCreatePsnID == sysCreatePsnID);
}