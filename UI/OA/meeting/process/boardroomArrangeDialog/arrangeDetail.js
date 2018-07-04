var arrangeDetail = {};
acceptParentParamsFun = "acceptData";
var haveMeetPsns = false;
var dlgOperator = "";

var outPsnCount = 0;

function treePsmSelectDropdown(event){
	var data = justep.xbl('dArrange');
	var psmData = justep.xbl('dOrgPsm');
	var deptID = data.getValue("fUseOgnId");
	psmData.filters.setFilter("psmFilter","SA_OPOrg.sFID like '%/"+ deptID + ".%'");
	psmData.refreshData();
}

function taOutPsnsxforms_value_changed(event)
{	
	var outPsns = justep.xbl("dArrange").getValue("fOutPsns");
	var psnNum = Number(justep.xbl("dArrange").getValue("fMeetPsnNum"));
	if(outPsns != "" && outPsns != null)
		{
			var psnArray = outPsns.split(",");
			psnNum = psnArray.length + psnNum - outPsnCount;
			outPsnCount = psnArray.length;
			if(outPsns.length > 1020)
			{
				outPsns = outPsns.substring(0,1020) + "...";
				justep.xbl("dArrange").setValue("fOutPsns", outPsns);
			}
		}
	else
		{
			psnNum =  psnNum - outPsnCount;
			outPsnCount = 0;
		}
	justep.xbl("dArrange").setValue("fMeetPsnNum",psnNum);
}
function trgSelectPsnDOMActivate(event)
{	
	addConventioneer();
}
function triCancelDOMActivate(event)
{	
	windowCancel();
}
function triRefreshDOMActivate(event)
{	
	 windowRefresh();
}
function triEnsureDOMActivate(event)
{
	var data = justep.xbl("dArrange");
	var checkResult = checkBoardroomUsed(data);
	if(checkResult == "false"){
		data.saveData();
		var fMeetPsns = data.getValue("fMeetPsns");
		if ((fMeetPsns != null) && (fMeetPsns != ""))// 有参会人员
		{
			// TODO 调用接口，生成日程
			var scheduleInfo = setScheduleInfo();
			callAddSchedule(scheduleInfo);
			
		}else if (haveMeetPsns == true)// 修改前有参会人员，修改后没有
		{
			callDeleteScheduleByBiz();// 删除日程
		}
		var rowid = data.getRowId();
		windowEnsure(rowid);
	}
}

function checkBoardroomUsed(data)
{
	var process  = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString('fBoardroomID',	data.getValue("fBoardroomID"));
	param.setString('fBeginTime',	data.getValue("fBeginTime"));
	param.setString('fEndTime',		data.getValue("fEndTime"));
	param.setString('fArrangeID',	data.getCurrentRowId());
	var action = "checkBoardroomUsedAction";
	var r = justep.Request.sendBizRequest(
			process,
			activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "会议室占用检查失败!"));
	}
	if(justep.XML.getNodeText(r.responseXML, "/root/data/*") == "true")
		alert("会议室在该时段已经被占用!");
	return (justep.XML.getNodeText(r.responseXML, "/root/data/*"));
}

function setScheduleInfo() {
	var ins = justep.xbl("dArrange");
	var operator = dlgOperator;
	var conventionInstance = justep.xbl("dPerson");
	conventionInstance.refreshData();
	var scheduleInfo = "";
	scheduleInfo += "<schedule>" + "<fTitle>" + ins.getValue("fMeetName")
			+ "</fTitle>" + "<fBeginTime>" + ins.getValue("fBeginTime")
			+ "</fBeginTime>" + "<fEndTime>" + ins.getValue("fEndTime")
			+ "</fEndTime>" + "<fContent>" + ins.getValue("fRemark")
			+ "</fContent>" + "<Executors>";
	var len = conventionInstance.getCount();
	if (len > 0) {
		for (var i = 0; i < len; i++) {
			var id = conventionInstance.getRowId(i);
			scheduleInfo += "<Executor>" + "<fExecutorID>"
					+ conventionInstance.getValue("fPersonID", id)
					+ "</fExecutorID>" + "<fExecutorName>"
					+ conventionInstance.getValue("fPersonName", id)
					+ "</fExecutorName>" + "</Executor>";
		}
	} else {
		scheduleInfo += "<Executor>" + "<ExecutorID>" + "" + "</ExecutorID>"
				+ "<ExecutorName>" + "" + "</ExecutorName>" + "</Executor>";
	}
	scheduleInfo += "</Executors>" + "<fIsShared>" + "1" + "</fIsShared>"
			+ "<fIsRemind>" + "1" + "</fIsRemind>" + "<fRemindTime>"
			+ ins.getValue("fBeginTime") + "</fRemindTime>"
			+ "<fCreatePsnID>" + ins.getValue("fArrPsnID")
			+ "</fCreatePsnID>" + "<fCreatePsnName>"
			+ ins.getValue("fArrPsnName") + "</fCreatePsnName>"
			+ "<fCreateTime>" + ins.getValue("fArrTime")
			+ "</fCreateTime>" + "<fCreateURL>"
			+ ins.getValue("fArrPsnFID") + "</fCreateURL>";
	if (operator != "new") {
		scheduleInfo += "<fBizID>" + ins.getRowId() + "</fBizID>"
				+ "<fBizType>" + "会议安排" + "</fBizType>";
	} else {
		scheduleInfo += "<fBizID>" + ins.getRowId() + "</fBizID>"
				+ "<fBizType>" + "会议安排" + "</fBizType>";
	}
	scheduleInfo += "</schedule>";
	return scheduleInfo;
}


function callAddSchedule(scheduleInfo) {
	var process  = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var action = "newScheduleByMeetingAction";
	var xmlStr = 
			'<jscheme:xml xmlns:jscheme="http://www.justep.com/xbiz#">'
			+ "<root>"
			+ scheduleInfo
			+ "</root>"
			+ "</jscheme:xml>" ;
	var doc = "<input name=\"instance\">" + action
			+ "</input><output name=\"data\"/>";
	var param = new justep.Request.ActionParam();
	param.setXml('cmd',xmlStr);
	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "新建日程失败!"));
	}
}
function callDeleteScheduleByBiz() {
	var instance = justep.xbl("dArrange");
	var fBizID = instance.getValue("rowid");
	var process  = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var action = "deleteScheduleByBizAction";
	var param = new justep.Request.ActionParam();
	param.setString('fBizID',fBizID);
	param.setString('fBizType',"会议安排");

	var r = justep.Request.sendBizRequest(
			process,
			activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "删除日程失败!"));
	}
	return true;
}

// 清除参会人员
function clearExecutors() {
	var insSub = justep.xbl('dExecutor');
	var len = insSub.getCount();
	if (len > 0) {
		var rowids = "";
		for (var i = 0; i < len; i++) {
			if (rowids == "") {
				rowids = insSub.getValue("rowid", i);
			} else {
				rowids += "," + insSub.getValue("rowid", i);
			}
		}
		bizProcess.deleteData('dExecutor', null, rowids);
	}
	justep.xbl("dSchedule").setValue("fExecutors", "");
}

// 选人对框
function addConventioneer() {
	var dlgConv = justep.xbl("dlgMeetPsn");
	if(dlgConv)
	{
		dlgConv.initEveryTime = true;
		dlgConv.open();
	}
}

function acceptData(data) {
	var fID = data.arrangeID;
	var operator = data.operator;
	dlgOperator = data.operator;
	var dataArrange = justep.xbl('dArrange');
	var sData1 = justep.Context.getProcessData1();
	if (operator == 'new') {
		dataArrange.newData();
		dataArrange.setValue("fBoardroomID",fID);
	} else {
		dataArrange.filters.setFilter("arrangeFilter", "OA_MT_RoomArrange ='" + fID + "'");
	    dataArrange.refreshConfirm = false;
	    dataArrange.refreshData();
	    var fMeetPsns = dataArrange.getValue("fMeetPsnNum");
	    if ((fMeetPsns != null) && (fMeetPsns != ""))
			haveMeetPsns = true;
	}
}

function dlgMeetPsnReceive(evt)
{	
var dSendMsg = justep.xbl('dArrange');
	var personCount = 0;
	var sNames = "";
	var sPersonIDs = "";
	var dPerson = justep.xbl('dPerson');
	var plannames = evt.data;
	for (var i = 0; i < plannames.getRowsNum(); i++) {
		var rowID = plannames.getRowId(i); 
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		var fOrgKind = 'psn';
		var fOrgFullID = plannames.getValueByName('sFID',i);
		var fOrgFullName = plannames.getValueByName('sFName',i);
		if(sPersonIDs.indexOf(rowID + ",") != -1)
			continue;
		sPersonIDs += sPersonId + ",";
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
	if(sNames != "")
	{
		sNames = sNames.substring(0,sNames.length - 1);
		sPersonId = sPersonId.substring(0,sPersonId.length-1);
		if(sNames.length > 1020)
			{
				sNames = sNames.substring(0,1020) + "...";
			}
	}
	var outPsns = justep.xbl("dArrange").getValue("fOutPsns");
	if(outPsns != "" && outPsns != null)
		{
			var psnArray = outPsns.split(",");
			personCount = psnArray.length + plannames.getRowsNum();
		}
	else{
		personCount = plannames.getRowsNum();
	}
	justep.xbl("dArrange").setValue("fMeetPsns",sNames);
	justep.xbl("dArrange").setValue("fExtendStr9",sPersonIDs);
	justep.xbl("dArrange").setValue("fMeetPsnNum",personCount);
	
}
function dlgMeetPsnSend(event)
{		
	//平台提供的人员选择框
	/*return {
			getSimpleStore : function() {
				var store = new SimpleStore("spcdata", "sName");
				return store;
			},
			getShowAlias : function() {
				return null;
			},
			selectKind : 'psm',
			viewKind : 'ogn,dpt,pos'
		};*/
	//appCommon提供的人员选择框
	var d = justep.xbl('dArrange');
	var selectedPersonIDs = [];
	selectedPersonIDs = d.getValue("fExtendStr9").split(",");
	var data = {
		"rootFilter" : "sParent is null",
		"fixedFilter" : "1=1",
		"manageTypeCodes" : "",
		"displayableOrgKinds" : "ogn,dpt,pos,psm",
		"selectableOrgKinds" : "psm",
		"onlyMainPsm" : true,
		"selectedPersonIDs" : selectedPersonIDs
	};
	return data;
}

function divRoomDOMActivate()
{
	var roomID = justep.xbl("dArrange").getValue("fBoardroomID");
	if(roomID == "" || roomID ==null || roomID == undefined)
	{
		alert("请选择会议室!");
		return false;
	}else{
		var dlgRoom = justep.xbl("wDlgMeetingRoom");
		if(dlgRoom)
		{
			dlgRoom.initEveryTime = true;
			dlgRoom.open();
		}
	 }
}
function wDlgMeetingRoomSend(event)
{	
	var params = {
		"operator" : "view",
		"boardroomID" : justep.xbl("dArrange").getValue("fBoardroomID"),
		"title" : "会议室信息"
	};
	return params;
}
function dArrangeValueChanged(event){
	if(event.column == "fUseOgnId"){
		var data = justep.xbl('dArrange');
		data.setValue("fUsePsnID","");
		data.setValue("fUsePsnName",""); 
	}
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
arrangeDetail.treePsmSelectCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dArrange');
	data.setValue("fUsePsnFID",sFID);
	data.setValue("fUsePsnFName",sFName);
};
