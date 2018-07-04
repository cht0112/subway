function grdApply_fMeetNameRender(data)
{	
	var fid = data.rowId;
	var html = "<a href=\"javascript:openApplyInfo('" + fid + "')\">" + data.value
			+ "</a>";
	return html;
}

function iptKeywordxforms_value_changed(event)
{
	setRefresh();	
}
function selectStatusCloseup(event)
{
	setRefresh();	
}
function gridSeleCloseup(event)
{	
	setRefresh();
}
function orgSelectCloseup(event)
{	
	setRefresh();
}
function mdMainxforms_model_construct_done(event)
{	
	setRefresh();
}
function setRefresh(){
	var dCustom = justep.xbl("dFilter");
	var roomIDs = dCustom.getValue("roomIDs");
	var filter = "fBoardroomID='" + roomIDs + "'";
	var data = justep.xbl("dApplyList");
	if(roomIDs != "" && roomIDs != null && roomIDs != undefined)
		data.filters.setFilter("roomFilter", filter);
	data.refreshData();
}

function openApplyInfo(fID)
{
	var process =justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/meeting/process/boardroomUseApplyQuery/useApplyDetail.w?process=" 
		+ process + "&activity="+ activity + "&applyID=" + fID;
	justep.Portal.openWindow("会议室申请详细",url);
}

function tabFlowChartxforms_select(event)
{	
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dApplyList').getCurrentRowId();
	control.loadByData(process, bizData);
}