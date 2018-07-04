function dAssetArrangeValueChanged(event) {
	var data = justep.xbl('dAssetArrange');
	if (event.column == "deptID") {
		var rowid = data.getCurrentRowId();
		data.setValue("psnID", "", rowid);
		data.setValue("psnName", "", rowid);
	}
}

// 人员下拉事件
function treeSltPsmDropdown(event) {
	var data = justep.xbl('dAssetArrange');
	var deptID = data.getValue("deptID");

	var personData = justep.xbl('dPsm');
	personData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/" + deptID
			+ ".%'");
	personData.refreshData();
}
function trgCancelDOMActivate(event) {
	windowCancel();
}
function trgOKDOMActivate(event) {
	var data = justep.xbl('dAssetArrange');
	var deptID = "", deptName = "", psnID = "", psnName = "", arrangeDate = "";
	deptID = data.getValue("deptID");
	deptName = data.getValue("deptName");
	psnID = data.getValue("psnID");
	psnName = data.getValue("psnName");
	arrangeDate = data.getValue("arrangeDate");
	var params = {
		"deptID" : deptID,
		"deptName" : deptName,
		"psnID" : psnID,
		"psnName" : psnName,
		"arrangeDate" : arrangeDate
	}
	windowEnsure(params);
	/*
	 * if((deptID!="") && (psnID!="") && (arrangeDate!="")){ var params = {
	 * "deptID" : deptID, "deptName" : deptName, "psnID" : psnID, "psnName" :
	 * psnName, "arrangeDate" : arrangeDate } windowEnsure(params); }else{
	 * alert("责任部门、责任人、安排时间都不能为空！"); }
	 */
}