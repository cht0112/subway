var textDiv;
var mCal;

function mSelectDate(date) {
	schedulePortlet.refreshData(mCal.getFormatedDate("%Y-%m-%d", date),
			textDiv);
	return true;
}
function activate() {
	var currentDate = justep.Date.toString(new Date(), 'yyyy-MM-dd');
	schedulePortlet.refreshData(currentDate, textDiv);
}

function getScheduleData(dateStr, count) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString("dateStr", dateStr);
	param.setString("count", count);
	var action = "getScheduleDataAction";
	var translateParam = "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(process, activity, action, param,
			translateParam);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取日程数据失败"));
	}
	return r;
}

function getScheduleCount(dateStr) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString("dateStr", dateStr);
	var action = "getScheduleCountAction";
	//var translateParam = "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取日程数量失败"));
	}
	var count = justep.XML.eval(r.responseXML, "/root/data", "single").text;
	return count;
}

function mdMainload(event) {
	textDiv = justep('textDiv');//new PortletTable("textTable", null, null);
	activate();
}
function getNodeValue(dom, level, field) {
	var result = "";
	try {
		/*result = dom.responseXML.selectSingleNode("/root/data/xbiz:xml/items/items["
				+ level + "]/" + field).text;*/
		  result=justep.XML.eval(dom.responseXML,"/root/data/xbiz:xml/items/items[" + level + "]/"+field+"/text()","single","xmlns:xbiz='http://www.justep.com/xbiz#'").nodeValue;
	} catch (e) {
	}
	return result;
}
function openSchedule(){
	var date = justep.Date.toString(new Date(), 'yyyy-MM-dd');
	var process = "/OA/schedule/process/mySchedule/myScheduleProcess";
	var activity = "startActivity";
	var url = "/OA/schedule/process/mySchedule/mySchedule.w"
		+ "?process=" + process + "&activity=" + activity
		+ "&dateStr="+ date;
	justep.Portal.openWindow("我的日程", url);
}
var schedulePortlet = {
	refreshData : function(date, textDiv) {
		var dSchedule = getScheduleData(date, "7");
		
		var len = justep.XML.eval(dSchedule.responseXML,"/root/data/xbiz:xml/items/COUNT/text()","single","xmlns:xbiz='http://www.justep.com/xbiz#'").nodeValue;
		if (len < 1)
			return false;
		
		var tableText = "<table class='tableClass' border='0' cellspacing='0' cellpadding='0'>";
		var tempText = "";
		var currentDate = justep.Date.toString(new Date(), 'yyyy-MM-dd');
		for (var i = 1; i <= len; i++) {
			var fBeginTime = getNodeValue(dSchedule, i, "FBEGINTIME");
			fBeginTime = fBeginTime.replace(".0", " ");
			var fEndTime = getNodeValue(dSchedule, i, "FENDTIME");
			fEndTime = fEndTime.replace(".0", " ");
			
			var beginTime = getNodeValue(dSchedule, i, "FBEGINTIME").split(' ')[1].substring(0,5);
			var endTime = getNodeValue(dSchedule, i, "FENDTIME").split(' ')[1].substring(0,5);
			
			var imgURL = justep.Request.BASE_URL + "/UI/appCommon/images/dot.png";
			var title = getNodeValue(dSchedule, i, "FTITLE");
			tempText += "<tr height='18' "+((i % 2 == 0) ? " style='background-color: #D2D2FF'" : "")+"><td width='15px'><img name='flagImg' src='"+imgURL+"'></img></td><td width='50px'>"+beginTime+"</td><td width='50px'>"+endTime+"</td><td><a href='javascript:openSchedule()'>"+title+"</a></td></tr>";
			
		}
		tableText = tableText + tempText + "</table>";
		textDiv.innerHTML = tableText;
		
		var count = getScheduleCount(justep.Date.toString(new Date(), 'yyyy-MM-dd'));
		justep('divCount').innerHTML = "<span style='color:#1f3a87;'>今日日程共&nbsp;<span style='font:10pt;'>"+count+"</span>&nbsp;项</span>&nbsp;&nbsp;&nbsp;&nbsp;";
	}
};