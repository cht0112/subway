var mainActivity = {};

mainActivity.mdMainXBLLoaded = function(event) {
	var Nowdate = new Date();
	var MonthFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth(), 1);
	var MonthNextFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1,
			1);
	var MonthLastDay = new Date(MonthNextFirstDay - 86400000);
	var dTemp = justep.xbl("dTemp");
	dTemp.setValue("beginDate", justep.Date.toString(MonthFirstDay,
			justep.Date.STANDART_FORMAT_SHOT));
	dTemp.setValue("endDate", justep.Date.toString(MonthLastDay, justep.Date.STANDART_FORMAT_SHOT));
	dTemp.setValue("dayNum", 5);
};
mainActivity.mdMainLoad = function(event){
	refreshData();
};
mainActivity.trgQueryClick = function(event) {
	refreshData();
};
function refreshData() {
	var dTemp = justep.xbl("dTemp");
	var dayNum = dTemp.getValue("dayNum");
	var orgIDs = dTemp.getValue("orgID");
	var beginDate = dTemp.getValue("beginDate");
	var endDate = dTemp.getValue("endDate");
	if (beginDate == "" || endDate == "") {
		alert("请正确设置统计区间！");
	} else {
		if (endDate < beginDate) {
			alert("结束时间不能小于开始时间！");
		} else {
			justep.xbl('rData').setStringVar("beginDate",beginDate);
			justep.xbl('rData').setStringVar("endDate",endDate);
			justep.xbl('rData').setStringVar("dayNum",dayNum);
			justep.xbl('rData').setStringVar("orgIDs",orgIDs);
			justep.xbl('rDataD').setStringVar("beginDate",beginDate);
			justep.xbl('rDataD').setStringVar("endDate",endDate);
			justep.xbl('rDataD').setStringVar("orgIDs",orgIDs);
			justep.xbl('rDCharZT').setStringVar("beginDate",beginDate);
			justep.xbl('rDCharZT').setStringVar("endDate",endDate);
			justep.xbl('rDCharZT').setStringVar("dayNum",dayNum);
			justep.xbl('rDCharZT').setStringVar("orgIDs",orgIDs);
			justep.xbl('rDCharBT').setStringVar("beginDate",beginDate);
			justep.xbl('rDCharBT').setStringVar("endDate",endDate);
			justep.xbl('rDCharBT').setStringVar("orgIDs",orgIDs);
			justep.xbl('report').refresh(); 
		}
	}
}


