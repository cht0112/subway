var mainActivity = {};
mainActivity.grid1SOrgKindIDRender = function(event) {
	var orgKind = event.value;
	var disable = false;
	var isMasterPsm = (event.cell.getValueByColId("sParent") == event.cell.getValueByColId("personMainOrgID"));
	return "<img src='"	+ justep.Request.convertURL(justep.OpmUtils.getOrgImgURL(orgKind, disable, isMasterPsm)) + "' alt='" + justep.Org.OrgKinds.getLabel(orgKind) + "'/>";
};
mainActivity.grid2Render = function(event) {
	var orgKind = "psm";
	var disable = false;
	var isMasterPsm = true;
	return "<img src='"	+ justep.Request.convertURL(justep.OpmUtils.getOrgImgURL(orgKind, disable, isMasterPsm)) + "' alt='" + justep.Org.OrgKinds.getLabel(orgKind) + "'/>";
};
mainActivity.btnDeleteOrgClick = function(event) {
	var data = justep.xbl("dOrg");
	var id = data.getCurrentRowId();
	var name = data.getValue("sName");
	var version = data.getValue("version");
	justep.OpmUtils.showConfirm("确实要清除“" + name + "”吗？<br/><br/><span style='color: red;'>“清除”操作会同时清除当前选中组织及其下属组织，清除后数据不可恢复。</span>", function(e) {
		var params = new justep.Request.ActionParam();
		params.setString("id", id);
		params.setInteger("version", version);
		justep.Request.sendBizRequest2({
			action: "physicalDeleteOrgAction",
			parameters: params, 
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					data.refreshData();
					justep.OpmUtils.showSuccess("清除“" + name + "”成功。");
				}
			}
		});
	});
};
mainActivity.btnRestoreOrgClick = function(event) {
	var data = justep.xbl("dOrg");
	var id = data.getCurrentRowId();
	var name = data.getValue("sName");
	var version = data.getValue("version");
	justep.OpmUtils.showConfirm("确实要还原“" + name + "”吗？<br/><br/>“还原”操作会同时还原当前选中组织的所有下属组织。", function(e) {
		var params = new justep.Request.ActionParam();
		params.setString("id", id);
		params.setInteger("version", version);
		params.setBoolean("restoreSlavePsm", false);
		justep.Request.sendBizRequest2({
			action:	"restoreOrgAction", 
			parameters: params,
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					data.refreshData();
					justep.OpmUtils.showSuccess("还原“" + name + "”成功。");
				}
			}
		});
	});
};
mainActivity.searchData = function() {
	var searchText = $("#inputSearch").val();
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		$("#inputSearch").val("");
		searchText = "";
	}
	justep.xbl("dOrg").setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter("SA_OPOrg.sFName", searchText));
	justep.xbl("dOrg").refreshData();
};
mainActivity.inputSearchKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.searchData();
};
mainActivity.imageSearchClick = function(event){
	mainActivity.searchData();
};

mainActivity.btnClearAllClick = function(event){
	var data = justep.xbl("dOrg");
	justep.OpmUtils.showConfirm("确实要清除全部已删除的组织吗？<br/><br/><span style='color: red;'>“清除全部”操作会同时所有已删除的组织，清除后数据不可恢复。</span>", function(e) {
		justep.Request.sendBizRequest2({
			action: "physicalDeleteAllAction",
			callback: function(callbackData) {
				callbackData.ignoreError = false;
				if (callbackData.state) {
					data.refreshData();
					justep.OpmUtils.showSuccess("清除全部成功。");
				}
			}
		});
	});
};
