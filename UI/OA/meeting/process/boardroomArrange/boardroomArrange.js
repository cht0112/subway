var boardroomArrange = {};
var dlgOperator = "";
var BoardroomID = "";
var dlgTitle = "会议室信息";

var dlgArrangeOperator = "";
var arrangeID = "";
var dlgArrangeTitle = "会议室安排";

function mdMainxforms_model_construct_done(event)
{
		setRefreshFilter();	
}
function iptKeywordxforms_value_changed(event)
{	
	setRefreshFilter();
}
function slcStatusCloseup(event)
{
	setRefreshFilter();	
}
function slcBoardroomCloseup(event)
{	
	setRefreshFilter();
}
function setRefreshFilter()
{
	var dFilter = justep.xbl("dFilter");
	var mainData = justep.xbl("dList");
	var roomID = dFilter.getValue("roomIDs");
	var status = dFilter.getValue("status");
	var keyword = dFilter.getValue("keyword");
	var filter = appCommon.FilterUtils.getMultiLikeFilter("fMeetName",	keyword, ",");
	
	if(roomID != "" && roomID != null && roomID != undefined)
		{
		var idFilter = appCommon.FilterUtils.getMuiltSelectFilter("fBoardroomID", roomID, ",");
		mainData.filters.setFilter("roomFilter", idFilter);
		}
	if(status == "0")
		mainData.filters.setFilter("effectFilter", "fEffect=0");
	else if(status == "1")
		mainData.filters.setFilter("effectFilter", "fEffect=1");
	mainData.filters.setFilter("likeFilter", filter);
	mainData.refreshData();
}
function trgArrangeDOMActivate(event)
{	
	arrangeID = "";
	dlgArrangeOperator = "new";
	var arrangeInfoDlg = justep.xbl("dlgArrangeInfo");
	if(!arrangeInfoDlg)
	{
		alert("对象 不存在!");
		return ;
	}
	arrangeInfoDlg.initEveryTimes = true;
	arrangeInfoDlg.open();
}

function gridBoardroom_fBoardroomRender(data)
{	
	var fid = data.rowId;
	var html = "<a href=\"javascript:openBoardroomInfo('" + fid + "')\">" + data.value
			+ "</a>";
	return html;
}

function openBoardroomInfo(fID) {
	var data  = justep.xbl("dList");
	BoardroomID = data.getValue("fBoardroomID");
	dlgOperator = "view";
	var boardroomInfoDlg = justep.xbl("dlgBoardroomInfo");
	if(!boardroomInfoDlg)
	{
		alert("对象 不存在!");
		return ;
	}
	boardroomInfoDlg.initEveryTimes = true;
	boardroomInfoDlg.open();
}
function dlgBoardroomInfoReceive(obj)
{
	var id = obj.data;
	var data = justep.xbl("dList");
	var len = data.getCount();
	for (i = 0; i < len; i++) {
		var  rID = data.getRowId(i);
		if (rID == id) {
			appCommon.DataUtils.refreshDataByRowIds(data, id, null);
			return;
		}
	}
	data.refreshData();	
}
function dlgBoardroomInfoSend(event)
{	
	var params = {
		"operator" : dlgOperator,
		"boardroomID" : BoardroomID,
		"title" : dlgTitle
	};
	return params;
}

function gridBoardroom_fMeetNameRender(data)
{	
	var fid = data.rowId;
	var html = "<a href=\"javascript:openBoardroomArrangeInfo('" + fid + "')\">" + data.value
			+ "</a>";
	return html;
}
function openBoardroomArrangeInfo(event) {
	arrangeID = justep.xbl("dList").getCurrentRowId();
	dlgArrangeOperator = "view";
	var arrangeInfoDlg = justep.xbl("dlgArrangeInfo");
	if(!arrangeInfoDlg)
	{
		alert("对象 不存在!");
		return ;
	}
	arrangeInfoDlg.initEveryTimes = true;
	arrangeInfoDlg.open();
}
function dlgArrangeInfoReceive(obj)
{	
	var id = obj.data;
	var data = justep.xbl("dList");
	var len = data.getCount();
	/*for (i = 0; i < len; i++) {
		var  rID = data.getRowId(i);
		if (rID == id) {
			appCommon.DataUtils.refreshDataByRowIds(data, id, null);
			return;
		}
	}*/
	data.refreshData();
}
function dlgArrangeInfoSend(event)
{	
	var params = {
		"operator" : dlgArrangeOperator,
		"arrangeID" : arrangeID,
		"title" : dlgArrangeTitle
	};
	return params;
}

function gridBoardroom_fEffectRender(data)
{	

	var code = data.value;
	if (0 == code) {
		return "已取消"
	} else {
		return "已安排"
	}
}

function trgCancelDOMActivate(event)
{		
	var fEffect = justep.xbl("dList").getValue("fEffect");
	if(fEffect == 0 || fEffect == '0')
	{
		alert("该会议室尚未安排!");
		return false;
	}
	justep.xbl("dList").setValue("fEffect", 0);
	justep.xbl("dList").saveData();
   var rt =  callDeleteScheduleByBiz();
   if(rt != null && rt != undefined)
  	alert("取消成功!");
}

function trgRearrangeDOMActivate(event)
{	
	arrangeID = justep.xbl("dList").getCurrentRowId();
	dlgArrangeOperator = "view";
	var arrangeInfoDlg = justep.xbl("dlgArrangeInfo");
	if(!arrangeInfoDlg)
	{
		alert("对象 不存在!");
		return ;
	}
	arrangeInfoDlg.initEveryTimes = true;
	arrangeInfoDlg.open();
}


function callDeleteScheduleByBiz()
{
	var process  = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var action = "deleteScheduleByBizAction";
	var param = new justep.Request.ActionParam();
	param.setString('fBizID',justep.xbl("dList").getCurrentRowId());
	param.setString('fBizType',"会议安排");
	var r = justep.Request.sendBizRequest(
			process,
			activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "删除日程失败"));
	}
	//justep.XML.getNodeText(r.responseXML, "/root/data/*")
	return (justep.XML.getNodeText(r.responseXML, "/root/data/*"));
}
function trgSearchDOMActivate(event)
{	
	var index = justep.xbl("dList").getIndex();
	var fID = justep.xbl("dList").getValue("fBoardroomID",index);
	var process =justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/meeting/process/boardroomArrangeQuery/boardroomArrangeQuery.w?process=" 
		+ process + "&activity="+ activity + "&roomID=" + fID;
	justep.Portal.openWindow("会议室安排查询",url);
}

boardroomArrange.statusFilterGetCondition = function(event){
	var value = event.value;
var defaultValue = event.defaultValue;
 var contdition = null;
if(value == '')
  var contdition = "OA_MT_RoomArrange.fEffect IN (1)";

else if(value == '0')
  var contdition = "OA_MT_RoomArrange.fEffect IN (0)";
else if(value == '1'){
  var contdition = "OA_MT_RoomArrange.fEffect IN (1)";
}
else
   var contdition = "OA_MT_RoomArrange.fEffect IN (1,0)";
event.handled =true;
return contdition;

	
};
