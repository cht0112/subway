window.name = "mainActivity.w";
function trgAddDOMActivate(event) {
	var dMain = justep.xbl('bizData1');
	var rowid = '';
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/workPlan/process/personalWorkPlan/detailActivity.w?process="
			+ process + "&activity=" + activity + "&rowid=" + rowid+ "&callerName="
				+ window.name ;
	justep.Portal.openWindow("我的工作计划详细", url);
}
function grid1FJHZTRender(event) {

	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openDetailInfo('" + event.rowId + "')\">"
			+ event.value + "</a>";
	return html;
}
function openDetailInfo(id) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/workPlan/process/personalWorkPlan/detailActivity.w?process="
			+ process + "&activity=" + activity + "&rowid=" + id+ "&callerName="
				+ window.name ;
	justep.Portal.openWindow("我的工作计划详细", url);
}
// 回调接收
function dataChangeCallBackFun(rowid) {
	var data = justep.xbl("bizData1");
	data.refreshData();
}