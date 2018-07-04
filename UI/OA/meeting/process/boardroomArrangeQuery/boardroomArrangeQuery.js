var boardroomArrangeQuery = {};
function mdMainxforms_model_construct_done(event) {
	var roomID = justep.Request.URLParams.roomID;
	var dCondition = justep.xbl("dCondition");
	var dArrange = justep.xbl("dArrange");
	var dRoom = justep.xbl("dBoardroom");

	var reportData = justep.xbl('dCondition');
	var now = new Date();
	var nowTime = justep.Date.toString(now, "yyyy-MM-dd");
	reportData.setValue("weekDate", nowTime);
	//weekRoomDateXformsValueChanged();

	var rid = dRoom.getCurrentRowId();
	if (roomID == "" || roomID == null || roomID == undefined)
		roomID = rid;
	now = new Date();
	var nowDayOfWeek = now.getDay();
	nowDayOfWeek -= 1;
	var nowDay = now.getDate();
	var nowMonth = now.getMonth();
	var nowYear = now.getYear();
	nowYear += (nowYear < 2000) ? 1900 : 0;
	var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
	var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));

	dCondition.setValue("dateBegin", justep.Date.toString(weekStartDate,
			"yyyy-MM-dd"));
	dCondition.setValue("dateEnd", justep.Date.toString(weekEndDate,
			"yyyy-MM-dd"));
	if (roomID != "" && roomID != null) {
		dCondition.setValue("roomIDs", roomID);
		dCondition.setValue("dateRoomID", roomID);
		dCondition.setValue("listRoomID", roomID);
	}
	dCondition.setValue("listBegin", justep.Date.toString(weekStartDate,
			"yyyy-MM-dd"));
	dCondition.setValue("listEnd", justep.Date.toString(weekEndDate,
			"yyyy-MM-dd"));
	dCondition.setValue("roomDate", justep.Date.toString(now, "yyyy-MM-dd"));
	if (roomID != "" && roomID != null) {
		dArrange.filters.setFilter("roomFilterSchedule", "fBoardroomID='"
				+ roomID + "'");
	}
	var dateFilterStr = "(:toDate('"
			+ justep.Date.toString(weekStartDate, "yyyy-MM-dd")
			+ "')<fArrTime)AND(:toDate('"
			+ justep.Date.toString(weekEndDate, "yyyy-MM-dd") + "')>fArrTime)";
	dArrange.filters.setFilter("dateFilterSchedule", dateFilterStr);
	dArrange.filters.setFilter("effectFilter", "fEffect=1");
	justep.xbl("dArrange").refreshData();

	var param = "<form>" + "<date-begin>"
			+ justep.Date.toString(weekStartDate, "yyyy-MM-dd")
			+ "</date-begin>" + "<date-end>"
			+ justep.Date.toString(weekEndDate, "yyyy-MM-dd") + "</date-end>"
			+ "<date-roomid>" + roomID + "</date-roomid>" + "<date-roomname/>"
			+ "<room-date/>" + "<roomids/>" + "<room-IDs/>" + "<room-names/>"
			+ "</form>";
	var iframeID = "dateIframe";
	/*var response = justep.Request.sendHttpRequest(
			"/OA/meeting/process/boardroomArrangeQuery/dateQuery/dateURL.j",
			param, null, null);*/
	/*if(response.status == 200){
			var url = response.responseText;
			justep.Request.callURL2(url, iframeID);
	}*/
	justep.Request.callURL(
			"/OA/meeting/process/boardroomArrangeQuery/dateQuery/dateURL.j",
			iframeID, param);

}

// 检测日期
function checkDate(date) {
	var dateArr = date.split("-");
	if (dateArr.length == 3) {
		var year = parseInt(dateArr[0], 10);
		var month = parseInt(dateArr[1], 10);
		var day = parseInt(dateArr[2], 10);

		if ((year >= 1991) && (year <= 9999) && (month >= 1) && (month <= 12)
				&& (day >= 1) && (day <= 31)) {
			return true;
		}
	}
	if (date != '')
		alert("日期填写不合法:" + date);
	return false;
}

// 比较日期
function compareDate() {
	var ins = $('tempData').xfElement;
	var beginDate = ins.getValueByName("beginDate");
	var endDate = ins.getValueByName("endDate");

if (!checkDate(beginDate)){
		return false;
}
	if (!checkDate(endDate)){
		return false;
	}

	var beginArr = beginDate.split("-");
	var endArr = endDate.split("-");

	var y1 = parseInt(beginArr[0], 10);
	var m1 = parseInt(beginArr[1], 10);
	var d1 = parseInt(beginArr[2], 10);

	var y2 = parseInt(endArr[0], 10);
	var m2 = parseInt(endArr[1], 10);
	var d2 = parseInt(endArr[2], 10);

	if (y2 > y1) {
		return true;
	} else if (y2 < y1) {
		alert("开始日期应该小于结束日期!");
		return false;
	} else {
		if (m2 > m1) {
			return true;
		} else if (m2 < m1) {
			alert("开始日期应该小于结束日期!");
			return false;
		} else {
			if (d2 >= d1) {
				return true;
			} else {
				alert("开始日期应该小于结束日期!");
				return false;
			}
		}
	}
}

function checkRoomDate() {
	var ins = $('tempData').xfElement;
	var date = ins.getValueByName("date");
	var dateArr = date.split("-");
	if (dateArr.length == 3) {
		var year = parseInt(dateArr[0], 10);
		var month = parseInt(dateArr[1], 10);
		var day = parseInt(dateArr[2], 10);

		if ((year >= 1991) && (year <= 9999) && (month >= 1) && (month <= 12)
				&& (day >= 1) && (day <= 31)) {
			return true;
		}
	}
	if (date != '')
		alert("日期填写不合法:" + date);
	return false;
}

function checkRoom() {
	var ins = $('tempData').xfElement;
	var boardroom = ins.getValueByName("boardroom");
	if (boardroom && boardroom != '') {
		return true;
	}
	// alert("请选择会议室!");
	return false;
}

function setDateFilter() {
var now = new Date();
	var nowDayOfWeek = now.getDay();
	nowDayOfWeek = 1;
	var nowDay = now.getDate();
	var nowMonth = now.getMonth();
	var nowYear = now.getYear();
	nowYear += (nowYear < 2000) ? 1900 : 0;
	var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
	var queryDataIns = $("tempData").xfElement;
	queryDataIns.setValueByName("beginDate", justep.Date.toString(now));
	queryDataIns.setValueByName("endDate", justep.Date.increase(weekStartDate,
			(7 + nowDayOfWeek), 'd'));
	queryDataIns.setValueByName("date", justep.Date.toString(now));
	var roomDataInstance = $("roomData").xfElement;
	var boardroomID = roomDataInstance.getValueByName("rowid");
	var baordroomName = roomDataInstance.getValueByName("fName");
	if (boardroomID != null && boardroomID != "") {
		queryDataIns.setValueByName("roomIDs", boardroomID);
		queryDataIns.setValueByName("roomNames", baordroomName);
	} else {
		var roomInfo = getBoardRoomInfo();
		if (roomInfo != null) {
			var roomInfoArray = roomInfo.split(",");
			if (roomInfoArray.length > 0) {
				var roomID = roomInfoArray[0];
				var roomName = roomInfoArray[1];
				queryDataIns.setValueByName("roomIDs", roomID);
				queryDataIns.setValueByName("roomNames", roomName);
			}
		}
	}
}

function trgApplyDOMActivate(event) {
	var fID = justep.xbl("dCondition").getValue("dateRoomID");
	var process = "/OA/meeting/process/boardroomUseApply/boardroomUseApplyProcess";
	var activity = "useApply";
	var url = "/OA/meeting/process/boardroomUseApply/useApply.w?process="
			+ process + "&activity=" + activity + "&roomID=" + fID;
	justep.Portal.openWindow("会议室申请", url);
}
/** ***********************************日程安排界面事件******************************************* */
function slcRoomBoardroomCloseup(event) {
	refreshScheduleData();
}
function iptRoomEndxforms_value_changed(event) {
	refreshScheduleData();
}
function iptRoomBeginxforms_value_changed(event) {
	refreshScheduleData();
}
function refreshScheduleData() {
	var dCondition = justep.xbl("dCondition");
	var dArrange = justep.xbl("dArrange");
	var roomID = dCondition.getValue("dateRoomID");
	if (roomID != "" && roomID != null) {
		dArrange.filters.setFilter("roomFilterSchedule", "fBoardroomID='"
				+ roomID + "'");
	}
	// var dateFilterStr = "";
	var dateFilterStr = "(:toDate('" + dCondition.getValue("dateBegin")
			+ "')<fArrTime)AND(:toDate('" + dCondition.getValue("dateEnd")
			+ "')>fArrTime)";
	dArrange.filters.setFilter("dateFilterSchedule", dateFilterStr);
	dArrange.filters.setFilter("effectFilter", "fEffect=1");
	justep.xbl("dArrange").refreshData();

	var param = "<form>" + "<date-begin>" + dCondition.getValue("dateBegin")
			+ "</date-begin>" + "<date-end>" + dCondition.getValue("dateEnd")
			+ "</date-end>" + "<date-roomid>"
			+ dCondition.getValue("dateRoomID") + "</date-roomid>"
			+ "<date-roomname/>" + "<room-date/>" + "<roomids/>"
			+ "<room-IDs/>" + "<room-names/>" + "</form>";
	var iframeID = "dateIframe";
	justep.Request.callURL(
			"/OA/meeting/process/boardroomArrangeQuery/dateQuery/dateURL.j",
			iframeID, param);

}
/** *******************************************会议室安排界面事件************************************** */
function tabArrangexforms_select(event) {
	refreshRoomData();
}
function iptRoomDatexforms_value_changed(event) {
	refreshRoomData();
}
function slcDateBoardroomCloseup(event) {
	refreshRoomData();
}
function refreshRoomData() {
	// debugger;
	var dCondition = justep.xbl("dCondition");
	var roomDate = dCondition.getValue("roomDate");
	var roomIds = dCondition.getValue("roomIDs");
	if (roomIds != "" && roomIds != null && roomIds != undefined) {
		var roomIDArr = roomIds.split(" ");
		var roomFilterStr = "(";
		var roomIDStr = "(";
		for (var i = 0; i < roomIDArr.length; i++) {
			if (i == 0) {
				roomFilterStr += "fBoardroomID='" + roomIDArr[i] + "'";
				roomIDStr += "OA_MT_Boardroom='" + roomIDArr[i] + "'";
			} else {
				roomFilterStr += " OR fBoardroomID='" + roomIDArr[i] + "'";
				roomIDStr += " OR OA_MT_Boardroom='" + roomIDArr[i] + "'";
			}
		}
		roomFilterStr += ")";
		roomIDStr += ")";
		var param = "<form>" + "<date-begin/>" + "<date-end/>"
				+ "<date-roomid/>" + "<date-roomname/>" + "<room-date>"
				+ roomDate + "</room-date>" + "<roomids>" + roomIDStr
				+ "</roomids>" + "<room-IDs>" + roomFilterStr + "</room-IDs>"
				+ "<room-names/>" + "</form>";
		var iframeID = "roomIframe";
		justep.Request.callURL(
				"/OA/meeting/process/boardroomArrangeQuery/roomQuery/roomURL.j",
				iframeID, param);
	}
}
/** *******************************************列表查询界面事件********************************* */
function tabListxforms_select(event) {
	refreshListData();
}
function iptListBeginxforms_value_changed(event) {
	refreshListData();
}
function iptListEndxforms_value_changed(event) {
	refreshListData();
}
function slcListRoomCloseup(event) {
	refreshListData();
}
function refreshListData() {
	var dArrangeList = justep.xbl("dCondition");
	var dateFilterStr = "(:toDate('" + dArrangeList.getValue("listBegin")
			+ "')<=fEndTime)AND(:toDateTime('"
			+ dArrangeList.getValue("listEnd") + " 23:59:59')>=fBeginTime)";
	var dMain = justep.xbl("dList");
	dMain.filters.setFilter("dateFilterList", dateFilterStr);
	if (dArrangeList.getValue("listRoomID") != ""
			&& dArrangeList.getValue("listRoomID") != null)
		dMain.filters.setFilter("roomFilterList", "fBoardroomID='"
				+ dArrangeList.getValue("listRoomID") + "'");
	dMain.refreshData();
}

/** ****************************************周会议安排界面************************************* */
function weekRoomDateXformsValueChanged(event){
	var dateFilter = justep.xbl('dCondition');
	var dateTime = dateFilter.getValue("weekDate");
	var weekTime = getWeekDate(dateTime);
	var tempDateTimeOrcl ="";
	var tempDateTimeSQL ="";
	var weekTimes = weekTime.split(",");
	if(weekTimes[0]){
		tempDateTimeOrcl = " convert(varchar,T.FBEGINTIME) <= '" + weekTimes[1] +"' AND convert(varchar,T.FENDTIME) >= '" + weekTimes[0] +"' AND T.FBEGINTIME >= convert(date,'" + weekTimes[0] +"') ";
		tempDateTimeSQL = " CAST(T.FBEGINTIME AS DATETIME) <= '" + weekTimes[1] +"' AND CAST(T.FENDTIME AS DATETIME) >= '" + weekTimes[0] +"' AND CAST(T.FBEGINTIME AS DATETIME) >= '" + weekTimes[0] +"' ";
	}
	justep.xbl('dCondition').setValue("tempDateTimeOrcl",tempDateTimeOrcl);
	justep.xbl('dCondition').setValue("tempDateTimeSQL",tempDateTimeSQL);
	refreshWeekData();
}

// 根据日期来确定当前周
function getWeekDate(dateTime){
	var times = dateTime.split("-");
 var year = times[0];
 var month = times[1]-1;
	var nowDate = new Date(year,month,times[2]);
	var day = nowDate.getDay();
	var date = nowDate.getDate();
	switch(day){
		case 0:
			date -=6;
			break;
		case 1:
			break;
		case 2:
			date -=1;
			break;
		case 3:
			date -=2;
			break;
		case 4:
			date -=3;
			break;
		case 5:
			date -=4;
			break;
		case 6:
			date -=5;
			break;
	}
	var startDate = new Date(year, month, date);
	var endDate = new Date(year, month, date + 6);
	var weekBeginDate = justep.Date.toString(startDate,"yyyy-MM-dd");
	var weekEndDate = justep.Date.toString(endDate,"yyyy-MM-dd");
	return weekBeginDate + "," +weekEndDate;
}

function refreshWeekData(){
	var dCondition = justep.xbl('dCondition');
	var tempDateTimeOrcl = dCondition.getValue("tempDateTimeOrcl");
	//var tempDateTimeSQL = dCondition.getValue("tempDateTimeSQL");
	//var sqlReportOrcl = "",sqlReportSQL = "";
	//sqlReportOrcl = "SELECT convert(varchar,T.FBEGINTIME) || '(' || convert(varchar,T.FBEGINTIME) || ')' AS WEEKDATE,T.FBOARDROOM,T.FMEETNAME,T.FUSEPSNNAME AS FAPPLYPSNNAME,T.FMEETPSNS || ',' || T.FOUTPSNS AS FMEETPSNS,convert(varchar,T.FBEGINTIME) AS FARRBEGINTIME, convert(varchar,T.FENDTIME) AS FARRENDTIME FROM OA_MT_ROOMARRANGE T ";
	//sqlReportSQL = "SELECT DATENAME(WEEKDAY, T.FBEGINTIME) + '(' +CONVERT(VARCHAR(100), T.FBEGINTIME, 23)+ ')' AS WEEKDATE,T.FBOARDROOM,T.FMEETNAME,T.FUSEPSNNAME AS FAPPLYPSNNAME,T.FMEETPSNS + ',' + T.FOUTPSNS AS FMEETPSNS,substring(CONVERT(varchar(100), T.FBEGINTIME, 120),0,datalength(CONVERT(varchar(100), T.FBEGINTIME, 120))-2) AS FARRBEGINTIME,substring(CONVERT(varchar(100), T.FENDTIME, 120),0,datalength(CONVERT(varchar(100), T.FENDTIME, 120))-2) AS FARRENDTIME FROM OA_MT_ROOMARRANGE T ";
	//if(tempDateTimeOrcl != ""){
		//sqlReportOrcl += " where " + tempDateTimeOrcl;
	//}
	//if(tempDateTimeSQL != ""){
		//sqlReportSQL += " where " + tempDateTimeSQL;
	//}
	//sqlReportOrcl += " ORDER BY T.FBEGINTIME ASC";
	//sqlReportSQL += " ORDER BY T.FBEGINTIME ASC";
	//justep.xbl('dReport').setDataModel("/OA/meeting/data");
	//justep.xbl('dReport').setSQL(sqlReportOrcl,"SYBASE");
	//justep.xbl('dReport').setSQL(sqlReportSQL, "MSSQL");
	if(tempDateTimeOrcl != ""){
		justep.xbl('dReport').setStringVar("tempDateTimeOrcl", tempDateTimeOrcl)
	}
	justep.xbl('mixedChart').refresh();
}

boardroomArrangeQuery.tabPage1Select = function(event){
	weekRoomDateXformsValueChanged();
};
