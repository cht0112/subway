var useApply = {};
var outPsnCount = 0;
acceptParentParamsFun = "acceptData";
var haveMeetPsns = false;
var dlgOperator = "";

function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dUseApply');
	var sData1 = justep.Context.getProcessData1();
	if (sData1 == null || sData1 == undefined) {
		data.newData();
		var roomID = justep.Request.URLParams.roomID;
		if (roomID != "" && roomID != null && roomID != undefined) {
			var dBoardroom = justep.xbl("dBoardroom");
			for ( var i = 0; i < dBoardroom.getCount(); i++) {
				var rid = dBoardroom.getRowId(i);
				if (dBoardroom.getValue("rowid", rid) == roomID) {
					data.setValue("fBoardroomID", dBoardroom.getValue("rowid",
							rid));
					data.setValue("fBoardroom", dBoardroom.getValue("fName",
							rid));
				}
			}
		}
		var date = justep.Request.URLParams.date;
		var time = justep.Request.URLParams.time;
		if (date && date != "" && time && time != "") {
			/*
			 * data.setValue("fBeginTime", justep.Date
			 * .toString(justep.Date.fromString(date + " " + time + ":00:00",
			 * "yyyy-MM-dd hh:mm:ss"), justep.Date.STANDART_FORMAT));
			 * data.setValue("fEndTime", justep.Date .toString(
			 * justep.Date.fromString(date + " " + (time * 1 + 1) + ":00:00",
			 * "yyyy-MM-dd hh:mm:ss"), justep.Date.STANDART_FORMAT));
			 */
			if (time < 10)
				time = "0" + time
			data.setValue("fBeginTime", date + "T" + setZero(time, 2)
					+ ":00:00.000Z");
			data.setValue("fEndTime", date + "T" + setZero((time * 1 + 1), 2)
					+ ":00:00.000Z");
		}
	} else {
		data.refreshData();
	}
}

function setZero(value, scope) {
	value = value + "";
	var len = scope - value.length;
	for ( var i = 0; i < len; i++)
		value = "0" + value;
	return value;
}

function treeSelect2Dropdown(event) {
	var data = justep.xbl('dUseApply');
	var psmData = justep.xbl('dPsm');
	var deptID = data.getValue("fApplyDeptID");
	psmData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/" + deptID
			+ ".%'");
	psmData.refreshData();

}
function taOutPsnsxforms_value_changed(event) {
	var outPsns = justep.xbl("dUseApply").getValue("fOutPsns");
	var psnNum = Number(justep.xbl("dUseApply").getValue("fMeetPsnNum"));
	// var psnNum = justep.xbl("dUseApply").getValue("fMeetPsns").length;
	if (outPsns != "" && outPsns != null) {
		var psnArray = outPsns.split(",");
		psnNum = psnArray.length + psnNum - outPsnCount;
		outPsnCount = psnArray.length;
		if (outPsns.length > 1020) {
			outPsns = outPsns.substring(0, 1020) + "...";
			justep.xbl("dUseApply").setValue("fOutPsns", outPsns);
		}
	} else {
		psnNum = psnNum - outPsnCount;
		outPsnCount = 0;
	}
	justep.xbl("dUseApply").setValue("fMeetPsnNum", psnNum);
}

function trgDetailDOMActivate(event) {
	var roomID = justep.xbl("dUseApply").getValue("fBoardroomID");
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
		"boardroomID" : justep.xbl("dUseApply").getValue("fBoardroomID"),
		"title" : "会议室信息"
	};
	return params;
}

function trgSelectPsnDOMActivate(event) {
	var dlgConv = justep.xbl("wDlgMeetPsn");
	if (dlgConv) {
		dlgConv.initEveryTime = true;
		dlgConv.open();
	}
}

function wDlgMeetPsnReceive(evt) {
	var personCount = 0;
	var sNames = "";
	var sPersonIDs = "";
	var dPerson = justep.xbl('dUsePerson');
	var sPersonIDs = "";
	var plannames = evt.data.getSimpleStore();
	for ( var i = 0; i < plannames.getRowsNum(); i++) {
		var rowID = plannames.getRowId(i);
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		var fOrgKind = 'psn';
		/*
		 * var fOrgFullID =
		 * plannames.getValueByName('sOrgID__SA_SA_OPOrg__sFID', i); fOrgFullID =
		 * fOrgFullID + "/" + sPersonId + ".psn";
		 */
		var fOrgFullID = plannames.getValueByName('sFID', i);
		/*
		 * var fOrgFullName =
		 * plannames.getValueByName('sOrgID__SA_OPOrg__sFName', i); fOrgFullName =
		 * fOrgFullName + "/" + sName;
		 */
		var fOrgFullName = plannames.getValueByName('sFName', i);
		if (sPersonIDs.indexOf(rowID + ",") != -1)
			continue;
		sPersonIDs += rowID + ",";
		sNames += sName + ",";
		dPerson.newData();
		dPerson.instance.setValueByName('fOrgKind', fOrgKind);
		dPerson.instance.setValueByName('fOrgID', sPersonId);
		dPerson.instance.setValueByName('fOrgName', sName);
		dPerson.instance.setValueByName('fPersonID', sPersonId);
		dPerson.instance.setValueByName('fPersonName', sName);
		dPerson.instance.setValueByName('fRangeURL', fOrgFullID);
		dPerson.instance.setValueByName('fRangeURLName', fOrgFullName);
		dPerson.instance.setValueByName('version', 0);
	}
	if (sNames != "") {
		sNames = sNames.substring(0, sNames.length - 1);
		if (sNames.length > 1020) {
			sNames = sNames.substring(0, 1020) + "...";
		}
	}
	var outPsns = justep.xbl("dUseApply").getValue("fOutPsns");
	if (outPsns != "" && outPsns != null) {
		var psnArray = outPsns.split(",");
		personCount = psnArray.length + plannames.getRowsNum();
	} else {
		personCount = plannames.getRowsNum();
	}
	justep.xbl("dUseApply").setValue("fMeetPsns", sNames);
	justep.xbl("dUseApply").setValue("fMeetPsnNum", personCount);
}
function wDlgMeetPsnSend(event) {
	return {
		getSimpleStore : function() {
			var store = new SimpleStore("spcdata", "sName");
			return store;
		},
		getShowAlias : function() {
			return null;
		},
		selectKind : 'psm',
		viewKind : 'ogn,dpt,pos'
	};
}
function tabFlowChartxforms_select(event) {
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dUseApply').getCurrentRowId();
	control.loadByData(process, bizData);
}



function checkBoardroomUsed(data) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString('fBoardroomID', data.getValue("fBoardroomID"));
	param.setString('fBeginTime', data.getValue("fBeginTime"));
	param.setString('fEndTime', data.getValue("fEndTime"));
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

function dUseApplyValueChanged(event) {
	var data = justep.xbl('dUseApply');
	if (event.column == "fApplyDeptID") {
		data.setValue("fApplyPsnID", "");
		data.setValue("fApplyPsnName", "");
	}
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
	if ((data.getValue("fCreatePsnID") == "")
			|| (data.getValue("fCreatePsnID") == null))
		data.setValue("fCreatePsnID", psnID);
	if ((data.getValue("fCreatePsnName") == "")
			|| (data.getValue("fCreatePsnName") == null))
		data.setValue("fCreatePsnName", psnName);
	if ((data.getValue("fCreateTime") == "")
			|| (data.getValue("fCreateTime") == null))
		data.setValue("fCreateTime", time);
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
useApply.treeSelect2Closeup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dUseApply');
	data.setValue("fApplyPsnFID",sFID);
	data.setValue("fApplyPsnFName",sFName);
};

/**
	name:process#onBeforeAdvanceQuery
	description: <b>[回调型事件]</b>流转查询之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"cancel":false}
*/
useApply.boardroomUseApplyProcessBeforeAdvanceQuery = function(data){
	var checkResult = checkBoardroomUsed(justep.xbl("dUseApply"));
	var len = 0;
	if (checkResult == "true") {
		if (!confirm("会议室已经被占用,确定申请该会议室吗?")) {
			data.cancel = true;
		}
	}
};
