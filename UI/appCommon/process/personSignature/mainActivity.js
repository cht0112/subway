
function dPersonMemberAfterRefreshPage(event){
	refreshPersonSignature();
}

function dPersonMemberAfterRefresh(event){
	refreshPersonSignature();
}

function dPersonMemberIndexChanged(event){
	refreshPersonSignature();
}

function doInitPersonSignatureAction(personID) {
	if (!personID) return;

	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();

	var param = new justep.Request.ActionParam();
	param.setString("personID", personID);
	var r = justep.Request.sendBizRequest(process,
			activity, "initPersonSignatureAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "初始化人员签名失败"));
	}
}

function refreshPersonSignature() {
	var dPSM = justep.xbl("dPersonMember");
	var dPSign = justep.xbl("dPersonSignature");
	
	var personID = dPSM.getValue("sPersonID");
	if (!personID) 
		personID = "";
		
	if (personID != "") {
		doInitPersonSignatureAction(personID);
	}
	
	var filter = "AP_PersonSignature = '" + personID + "'";
	dPSign.setFilter("personFilter", filter);
	dPSign.refreshData();
}