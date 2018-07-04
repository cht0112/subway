var workPlan_static1 = {};
var workPlan_static = {};
var __currentDeptID = "";
var __currentDeptName = "";
var __deptIDs = null;
var __deptNames = null;
workPlan_static1.model1ModelConstructDone = function(event) {
	//debugger;
	workPlan_static1.getAllDeptUnderOrg();// 获取二级部门
	/*
	 * var roles = workPlan_static1.getRoleType();//获取人员角色 if(!roles || roles == "" ||
	 * roles == null || roles.indexOf("|") == -1) return;
	 * 
	 * var isDeptLeader = false, isOfficeLeader = false; var roleNames =
	 * roles.split("|")[1].split(","); for(var i = 0; i < roleNames.length;
	 * i++){ if(roleNames[i] == "部领导"){ isDeptLeader = true; break; } else
	 * if(roleNames[i] == "局领导"){ isOfficeLeader = true; break; } }
	 */
	var personName = justep.Context.getCurrentPersonMemberFNameWithAgent();
	var posFName = personName.substring(1, personName.lastIndexOf("/"));
	var posName = posFName.substring(posFName.lastIndexOf("/") + 1,
			posFName.length);

	var isDeptLeader = false, isOfficeLeader = false;
	if (posName == "部长" || posName == "副部长" || posName == "政委") {
		isDeptLeader = true;
	} else if (posName == "局长" || posName == "副局长") {
		isOfficeLeader = true;
	}
	if (isDeptLeader) {
		justep.xbl('tabPanel').tabbar.setVisable("tabPage_bj", false);
		justep.xbl('tabPanel').tabbar.setTabActive("tabPage_b");

		__currentDeptID = "";
		__currentDeptName = "陆装科订部";
		justep("textDiv_b").innerHTML = workPlan_static1
				.getWorkPlanInfo("部工作计划");
	} else if (isOfficeLeader) {
		justep.xbl('tabPanel').tabbar.setVisable("tabPage_bj", false);

		var personMemberFName = justep.Context
				.getCurrentPersonMemberFNameWithAgent();
		var tabPage = workPlan_static1.getActiveTabID(personMemberFName
				.split("/")[2]);
		if (!tabPage || tabPage == null || tabPage == "")
			return;

		justep.xbl('tabPanel').tabbar.setTabActive(tabPage);
		var textDiv = "textDiv_" + tabPage.split("_")[1];

		__currentDeptID = justep.Context.getCurrentPersonMemberFID().split("/")[2]
				.split(".")[0];
		__currentDeptName = justep.Context.getCurrentPersonMemberFName().split(
				"/")[2].split(".")[0];

		justep(textDiv).innerHTML = workPlan_static1.getWorkPlanInfo("局工作计划");
	} else {
		 justep.xbl('tabPanel').setVisable("tabPage_bj", "true");
		 justep.xbl('tabPanel').setVisable("tabPage_zhj", false);
		 justep.xbl('tabPanel').setVisable("tabPage_jxj", false);
		 justep.xbl('tabPanel').setVisable("tabPage_zjj", false);
		 justep.xbl('tabPanel').setVisable("tabPage_ghj", false);
		 justep.xbl('tabPanel').setVisable("tabPage_ccj", false);
		 justep.xbl('tabPanel').setVisable("tabPage_zzb", false);
		 justep.xbl('tabPanel').tabbar.setTabActive("tabPage_bj");

		__currentDeptID = justep.Context.getCurrentPersonMemberFID().split("/")[2]
				.split(".")[0];
		__currentDeptName = justep.Context.getCurrentPersonMemberFName().split(
				"/")[2].split(".")[0];
		justep("textDiv_bj").innerHTML = workPlan_static1
				.getWorkPlanInfo("局工作计划");
	}
};
workPlan_static1.tabPageBSelect = function(event) {
	__currentDeptID = "";
	__currentDeptName = "陆装科订部";
	var text = workPlan_static1.getWorkPlanInfo("部工作计划");
	justep("textDiv_b").innerHTML = text;
};
workPlan_static1.tabPageBjSelect = function(event) {
	__currentDeptID = justep.Context.getCurrentPersonMemberFID().split("/")[2]
			.split(".")[0];
	__currentDeptName = justep.Context.getCurrentPersonMemberFName().split("/")[2]
			.split(".")[0];

	var text = workPlan_static1.getWorkPlanInfo("局工作计划");
	justep("textDiv_bj").innerHTML = text;
};
workPlan_static1.tabPageZhjSelect = function(event) {
   // debugger;
	__currentDeptID = workPlan_static1.getDeptID("综合局");

	var text = workPlan_static1.getWorkPlanInfo("局工作计划");
	justep("textDiv_zhj").innerHTML = text;
};
workPlan_static1.tabPageJxjSelect = function(event) {
	__currentDeptID = workPlan_static1.getDeptID("军械局");
	var text = workPlan_static1.getWorkPlanInfo("局工作计划");
	justep("textDiv_jxj").innerHTML = text;
};
workPlan_static1.tabPageZjjSelect = function(event) {
	__currentDeptID = workPlan_static1.getDeptID("装甲局");
	var text = workPlan_static1.getWorkPlanInfo("局工作计划");
	justep("textDiv_zjj").innerHTML = text;
};
workPlan_static1.tabPageGhjSelect = function(event) {
	__currentDeptID = workPlan_static1.getDeptID("工化局");
	var text = workPlan_static1.getWorkPlanInfo("局工作计划");
	justep("textDiv_ghj").innerHTML = text;
};
workPlan_static1.tabPageCcjSelect = function(event) {
	__currentDeptID = workPlan_static1.getDeptID("车船局");
	var text = workPlan_static1.getWorkPlanInfo("局工作计划");
	justep("textDiv_ccj").innerHTML = text;
};
workPlan_static1.tabPageZzbSelect = function(event) {
	__currentDeptID = workPlan_static1.getDeptID("政治部");
	var text = workPlan_static1.getWorkPlanInfo("局工作计划");
	justep("textDiv_zzb").innerHTML = text;
};
workPlan_static1.getWorkPlanInfo = function(planType) {
	//debugger;
	var st = null;
	if (planType == "部工作计划") {
		st = workPlan_static1.getDeptWorkPlan();
	} else if (planType == "局工作计划") {
		var deptID = __currentDeptID;
		if(null == deptID || "" == deptID){
			return "";
		}else
			st = workPlan_static1.getOfficeWorkPlan(deptID);
	}
	var len = st.getRowsNum();
	var text = "<table class='tableClass' border='0' cellspacing='0' cellpadding='0' width='100%'>"
			+ "<tr height='10'><td width='30'/><td/><td width='80'/></tr>";
	var tempText = "";
	for ( var i = 0; i < len; i++) {
		var fWorkContent = st.getValueByName("fWorkContent", i);
		var fZRC = st.getValueByName("fCBBM", i);
		var fCreateTime = st.getValueByName("fCreateTime", i);
		fCreateTime = fCreateTime.substring(0,10);
		var planID = st.getValueByName("planID", i);
		var planTitle = __currentDeptName + "工作计划";
		var recNO = i + 1;
		tempText += "<tr height='18' "
				+ ((i % 2 == 1) ? "style='background-color: #D2D2FF'" : "")
				+ "><td align='center' width='30'>" + recNO
				+ "</td><td><a href='javascript:openWorkPlan(\"" + planID
				+ "\", \"" + planTitle + "\");'>" + fWorkContent
				+ "</a></td><td width='80'><nobr>" + fCreateTime + "</nobr></td></tr>";
	}
	return text + tempText + "</table>";
};
workPlan_static1.getActiveTabID = function(deptName) {
	var officeName = [ "部首长", "本局", "综合局", "军械局", "装甲局", "工化局", "车船局", "政治部" ];
	var tabIDs = [ "tabPage_b", "tabPage_bj", "tabPage_zhj", "tabPage_jxj",
			"tabPage_zjj", "tabPage_ghj", "tabPage_ccj", "tabPage_zzb" ];
	var index = -1;
	for ( var i = 0; i < officeName.length; i++) {
		if (officeName[i] == deptName) {
			index = i;
			break;
		}
	}
	return tabIDs[index];
};
workPlan_static1.getDeptID = function(deptName) {
	var index = -1;
	for ( var i = 0; i < __deptIDs.length; i++) {
		if (__deptNames[i] == deptName) {
			index = i;
			break;
		}
	}
	if (index != -1) {
		__currentDeptName = __deptNames[index];
		//alert(__currentDeptName);
		return __deptIDs[index];
	} else
		return "";
};
//根据传递的日期，判断是哪一周
function getWeekP(date){
	if(date<8)
		return "第一周";
	if(date<15)
		return "第二周";
	if(date<22)
		return "第三周";
	if(date<29)
		return "第四周";
	return "第五周";
}
workPlan_static1.getDeptWorkPlan = function() {
	// 取本周的工作内容
	//debugger;
	var date = new Date();
	var dateStr = justep.Date.toString(date, "YYYY-MM-DD");
	var currentYear = date.getYear();
	var currentMonth = date.getMonth() + 1;
	var currentDate = date.getDate();
	var currentDay = date.getDay();
	var currentWeek=getWeekP(currentDate);
	/*
	 * var currDate1 = (currentDate - (currentDay - 1)); var currDate2 =
	 * (currDate1 + 6); var maxDate = getMaxDateOfMonth(); if(currDate2 >
	 * maxDate) currDate2 = maxDate; else currDate2 = (currDate2 >= 10 ?
	 * currDate2 : "0" + currDate2);
	 */
	
	var currDate1 = getWeekBeginDateRange();
	var currDate2 = getWeekEndDateRange();
	var beginDate = dateStr.substring(0, dateStr.lastIndexOf("-") + 1)
			+ (currDate1 >= 10 ? currDate1 : "0" + currDate1);
	var endDate = dateStr.substring(0, dateStr.lastIndexOf("-") + 1)
			+ (currDate2 >= 10 ? currDate2 : "0" + currDate2);
	
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString("year", currentYear);
	param.setString("month", currentMonth);
	param.setString("week", currentWeek);
	var action = "workPlansOfWeekAcion";
	// var translateParam =
	// "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取部工作计划失败"));
	}
	var st = new SimpleStore("workPlanData", "fWorkContent,fCBBM,fCreateTime,planID");
	st.loadData(null, r.responseXML);
	return st;
};
workPlan_static1.getOfficeWorkPlan = function(deptID) {
	// 取本月的工作内容
	var date = new Date();
	var dateStr = justep.Date.toString(date, "YYYY-MM-DD");
	var currentYear = date.getYear();
	var currentMonth = date.getMonth() + 1;
	var currentDate = date.getDate();
	var maxDate = getMaxDateOfMonth();
	var beginDate = dateStr.substring(0, dateStr.lastIndexOf("-") + 1) + "01";
	var endDate = dateStr.substring(0, dateStr.lastIndexOf("-") + 1) + maxDate;

	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString("beginDate", beginDate);
	param.setString("endDate", endDate);
	// param.setString("deptName", __currentDeptName);
	param.setString("deptID", deptID);
	var action = "getOfficeWorkPlanOfCurrMonthAction";
	// var translateParam =
	// "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取局工作计划失败"));
	}
	var st = new SimpleStore("workPlanData", "fWorkContent,fCBBM,fCreateTime,planID");
	st.loadData(null, r.responseXML);
	return st;
};
// 获取人员角色
workPlan_static1.getRoleType = function() {
	var fOrgFID = justep.Context.getCurrentPersonMemberFID();

	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString("fOrgFID", fOrgFID);
	var action = "getRoleTypeAction";

	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取角色数据失败"));
	}
	return justep.Request.transform(justep.Request.getData(r.responseXML));
};
// 获取部和局
workPlan_static1.getAllDeptUnderOrg = function() {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	var action = "getAllDeptUnderOrgAction";

	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取部和局信息失败"));
	}
	var result = justep.Request.transform(justep.Request.getData(r.responseXML));

	if (!result || result != "" || result != null || result.indexOf("|") != -1) {
		__deptIDs = result.split("|")[0].split(",");
		__deptNames = result.split("|")[1].split(",");
	} else {
		__deptIDs = [];
		__deptNames = [];
	}
};
var openWorkPlan = function(planID, planTitle) {
	var process = "/OA/workPlan/process/workPlanQuery/workPlanQueryProcess";
	var activity = "mainActivity";
	url = "/OA/workPlan/process/workPlanPortlet/planViewer.w?process="
			+ process + "&activity=" + activity + "&rowid=" + planID
			+ "&planTitle=" + planTitle;
	justep.Portal.openWindow("工作计划", url);
};
var getMonthWeek = function(a, b, c) {
	/*
	 * a = d = 当前日期 b = 6 - w = 当前周的还有几天过完（不算今天） a + b 的和在除以7 就是当天是当前月份的第几周
	 */
	var date = new Date(a, parseInt(b) - 1, c), w = date.getDay(), d = date
			.getDate();
	var week = Math.ceil((d + 6 - w) / 7);
	if (week == 1)
		return "一";
	if (week == 2)
		return "二";
	if (week == 3)
		return "三";
	if (week == 4)
		return "四";
	if (week == 5)
		return "五";
};
var getWeek = function(a, b, c) {
	var date = new Date(a, parseInt(b) - 1, c);
	var d = date.getDate();

	if (d <= 7)
		return "一";
	if (d <= 14)
		return "二";
	if (d <= 21)
		return "三";
	if (d <= 28)
		return "四";
	if (d > 28)
		return "五";
};
function getMaxDateOfMonth(){
	var date = new Date();
	var dateStr = justep.Date.toString(date, "YYYY-MM-DD");
	var currentYear = date.getYear();
	var currentMonth = date.getMonth() + 1;
	var currentDate = date.getDate();
	var currentDay = date.getDay();
	if(currentMonth=="1"||currentMonth=="3"||currentMonth=="5"||currentMonth=="7"||currentMonth=="8"||currentMonth=="10"||currentMonth=="12")
	{
		return 31;
	}
	if(currentMonth=="4"||currentMonth=="6"||currentMonth=="9"||currentMonth=="11"){
		return 30;
	}
	if(currentMonth=="2"){
		if(justep.Date.isLeapYear(date))
			return 29;
		else 
			return 28;
	}
	/*if(currentMonth % 2 == 1){
		if(currentMonth == 2){
			if(justep.Date.isLeapYear(date))
				return 29;
			else 
				return 28;
		}else{
			return 31;
		}
	}else{
		return 30;
	}*/
}
function getWeekBeginDateRange(){
	var date = new Date();
	var dateStr = justep.Date.toString(date, "YYYY-MM-DD");
	var currentDate = date.getDate();
	if(currentDate <= 7){
		return 1;
	}else if(currentDate <= 14){
		return 8;
	}else if(currentDate <= 21){
		return 15;
	}else if(currentDate <= 28){
		return 22;
	}else{
		return 29;
	}
}
function getWeekEndDateRange(){
	var date = new Date();
	var dateStr = justep.Date.toString(date, "YYYY-MM-DD");
	var currentDate = date.getDate();
	if(currentDate <= 7){
		return 7;
	}else if(currentDate <= 14){
		return 14;
	}else if(currentDate <= 21){
		return 21;
	}else if(currentDate <= 28){
		return 28;
	}else{
		return getMaxDateOfMonth();
	}
}
