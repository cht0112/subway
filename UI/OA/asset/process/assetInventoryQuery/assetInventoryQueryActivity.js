function mdMainModelConstructDone(event){
	var data = justep.xbl("dInventory");
	data.refreshData();
}
function grdInventoryFCodeRender(event){
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openAssetCardDetail('" + event.cell.rowText[10]
			+ "')\">" + event.value + "</a>";
	return html;
}
function openAssetCardDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/asset/process/assetCardDetailView/assetCardDetailView.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&id=" + id;
	justep.Portal.openWindow("资产卡片详细", url);
}