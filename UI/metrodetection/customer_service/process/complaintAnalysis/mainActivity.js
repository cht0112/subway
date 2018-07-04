var mainActivity = {};

mainActivity.trigger1Click = function(event) {
	var bizData1 = justep.xbl("bizData1");
	var data1 = justep.xbl("data1");
	var start = data1.getValue("startDate");
//	alert(start);
	var ds1 = justep.xbl("ds1");
	var ds2 = justep.xbl("ds2");
//	var end = bizData1.getValue("RECEIPT_DATE");
	var end = data1.getValue("endDate");
	var temp = justep.xbl("Report1");
	if(start == "" || end == "") {
		alert("请正确设置统计区间！");
	} else {
		if(end < start) {
			alert("结束时间不能小于开始时间！");
		} else {
			ds1.setStringVar("startDate", start);
			ds2.setStringVar("startDate", start);
		    ds1.setStringVar("endDate", end);
		    ds2.setStringVar("endDate", end);
		    temp.refresh();
		}
	}
};

mainActivity.trigger2Click = function(event) {
//	debugger;
	var bizData2 = justep.xbl("bizData2");
	var data3 = justep.xbl("data3");
	var start = data3.getValue("startDate1");
//	alert(start);
	var reportData1 = justep.xbl("reportData1");
	var reportData2 = justep.xbl("reportData2");
//	var end = bizData2.getValue("RECEIPT_DATE");
	var end = data3.getValue("endDate1");
//	alert(end);
	var temp = justep.xbl("report2");
	if(start == "" || end == "") {
		alert("请正确设置统计区间！");
	} else {
		if(end < start) {
			alert("结束时间不能小于开始时间！");
		} else {
			reportData1.setStringVar("startDate1", start);
			reportData2.setStringVar("startDate1", start);
			reportData1.setStringVar("endDate1", end);
		    reportData2.setStringVar("endDate1", end);
			temp.refresh();
		}
	}

};


mainActivity.dataModelXBLLoaded = function(event){
	var Nowdate = new Date();
	var MonthFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth(), 1);
//	var MonthNextFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1,
//			1);
//	var MonthLastDay = new Date(MonthNextFirstDay - 86400000);
	var nowMonthFirstDayStr = justep.Date.toString(MonthFirstDay, justep.Date.STANDART_FORMAT_SHOT);
	var nowDayStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
	var data = justep.xbl("data1");
	data.setValue("startDate", nowMonthFirstDayStr);
	data.setValue("endDate", nowDayStr,data.getCurrentID());
	var data3 = justep.xbl("data3");
	data3.setValue("startDate1", nowMonthFirstDayStr);
	data3.setValue("endDate1", nowDayStr,data3.getCurrentID());
};
