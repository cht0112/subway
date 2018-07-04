var mainActivity = {};
mainActivity.btnRepairOrgClick = function(event) {
	justep.Request.sendBizRequest2({
		action: "repairOrgAction"
	});
	justep.OpmUtils.showSuccess("组织修复完成。");
};
