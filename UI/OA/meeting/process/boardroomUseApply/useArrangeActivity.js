var useArrangeActivity = {};
function boardroomUseApplyProcessBeforeAdvanceQuery(event) {
	var checkResult = checkBoardroomUsed(justep.xbl("dUseApply"));
	var len = 0;
	if (checkResult == "true") {
		alert("会议室已经被占用!")
		// debugger;
		event.cancel = true;

		return false;
	}
}

function dUseApplyValueChanged(event) {
	if (event.column == "fArrDeptID") {
		var data = justep.xbl('dUseApply');
		data.setValue("fArrPsnID", "");
		data.setValue("fArrPsnName", "");
	}
}
function treePsmSelectDropdown(event) {
	var data = justep.xbl('dUseApply');
	var psmData = justep.xbl('dPsm');
	var deptID = data.getValue("fArrDeptID");
	psmData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/" + deptID
			+ ".%'");
	psmData.refreshData();
}
function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dUseApply');
	var sData1 = justep.Context.getProcessData1();
	if (sData1 == null || sData1 == undefined) {
		data.newData();
	} else {
		data.refreshData();
		if ((data.getValue("fArrBoardroomID") == "")
				|| (data.getValue("fArrBoardroomID") == null)) {
			data.setValue("fArrBoardroomID", data.getValue("fBoardroomID"));
			data.setValue("fArrBoardroom", data.getValue("fBoardroom"));
		}
		if ((data.getValue("fArrBeginTime") == "")
				|| (data.getValue("fArrBeginTime") == null))
			data.setValue("fArrBeginTime", data.getValue("fBeginTime"));
		if ((data.getValue("fArrEndTime") == "")
				|| (data.getValue("fArrEndTime") == null))
			data.setValue("fArrEndTime", data.getValue("fEndTime"));
		if ((data.getValue("fArrOgnID") == "")
				|| (data.getValue("fArrOgnID") == null)) {
			data.setValue("fArrOgnID", justep.Context.getCurrentOgnID());
			data.setValue("fArrOgnName", justep.Context.getCurrentOgnName());
		}
		if ((data.getValue("fArrDeptID") == "")
				|| (data.getValue("fArrDeptID") == null)) {
			data.setValue("fArrDeptID", justep.Context.getCurrentDeptID()
					|| justep.Context.getCurrentOgnID());
			data.setValue("fArrDeptName", justep.Context.getCurrentDeptName() || justep.Context.getCurrentOgnName());
		}
		if ((data.getValue("fArrPsnID") == "")
				|| (data.getValue("fArrPsnID") == null)) {
			data.setValue("fArrPsnID", justep.Context.getCurrentPersonID());
			data.setValue("fArrPsnName", justep.Context.getCurrentPersonName());
			data.setValue("fArrPsnFID", justep.Context
					.getCurrentPersonMemberFID());
			data.setValue("fArrPsnFName", justep.Context
					.getCurrentPersonMemberFName());
		}
		if ((data.getValue("fArrTime") == "")
				|| (data.getValue("fArrTime") == null))
			data.setValue("fArrTime", justep.Date.toString(justep.System
					.datetime(), justep.Date.STANDART_FORMAT));
	}
}

function checkBoardroomUsed(data) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString('fBoardroomID', data.getValue("fArrBoardroomID"));
	param.setString('fBeginTime', data.getValue("fArrBeginTime"));
	param.setString('fEndTime', data.getValue("fArrEndTime"));
	param.setString('fArrangeID', data.getCurrentRowId());
	var action = "checkBoardroomUsedAction";
	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "会议室占用检查失败!"));
	}
	return (justep.XML.getNodeText(r.responseXML, "/root/data/*"));
}

function trgSearchDOMActivate(event) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var roomID = justep.xbl("dUseApply").getValue("fBoardroomID");
	var url = "/OA/meeting/process/boardroomArrangeQuery/boardroomArrangeQuery.w?process="
			+ process + "&activity=" + activity + "&roomID=" + roomID;
	justep.Portal.openWindow("会议室安排查询", url);
}

function dUseApplyBeforeSave(event) {
	var psnID = justep.Context.getCurrentPersonID();
	var psnName = justep.Context.getCurrentPersonName();
	var time = justep.Date.toString(justep.System.datetime(),
			justep.Date.STANDART_FORMAT);
	var data = justep.xbl('dUseApply');

	data.setValue("fUpdatePsnID", psnID);
	data.setValue("fUpdatePsnName", psnName);
	data.setValue("fUpdateTime", time);
}

function tabFlowChartxforms_select(event) {
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dUseApply').getCurrentRowId();
	control.loadByData(process, bizData);
}

function trgDetailDOMActivate() {
	var roomID = justep.xbl("dUseApply").getValue("fArrBoardroomID");
	if (roomID == "" || roomID == null || roomID == undefined) {
		alert("请选择会议室!");
		return false;
	} else {
		var dlgRoom = justep.xbl("wDlgMeetingRoom");
		if (dlgRoom) {
			dlgRoom.initEveryTime = true;
			dlgRoom.open();
		}
	}
}
function wDlgMeetingRoomSend(event) {
	var params = {
		"operator" : "view",
		"boardroomID" : justep.xbl("dUseApply").getValue("fArrBoardroomID"),
		"title" : "会议室信息"
	};
	return params;
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
useArrangeActivity.treePsmSelectCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dUseApply');
	data.setValue("fArrPsnFID",sFID);
	data.setValue("fArrPsnFName",sFName);
};
