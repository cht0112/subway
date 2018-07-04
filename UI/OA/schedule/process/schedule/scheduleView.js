acceptParentParamsFun = "acceptData";
function acceptData(data) {
	var fID = data.scheduleID;
	var dataSchedule = justep.xbl('dSchedule');
	dataSchedule.filters.setFilter("scheduleFilter", "OA_SD_Schedule ='" + fID
			+ "'");
	dataSchedule.refreshData();
}