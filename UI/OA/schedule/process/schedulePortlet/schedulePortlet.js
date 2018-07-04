var textTable;
var mCal;

function mSelectDate(date) {
	schedulePortlet.refreshData(mCal.getFormatedDate("%Y-%m-%d", date),
			textTable);
	return true;
}
function activate() {
	schedulePortlet.refreshData(mCal
			.getFormatedDate("%Y-%m-%d", mCal.getDate()), textTable);
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

function mdMainload(event) {
	textTable = new PortletTable("textTable", null, null);
	mCal = new dhtmlxCalendarObject('dhtmlxCalendar', true, {
		isWinHeader : false
	});
	mCal.setSkin("dhx_blue");
	mCal.attachEvent("onClick", mSelectDate);
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
var schedulePortlet = {
	refreshData : function(date, taxtTable) {
		var dSchedule = getScheduleData(date, "5");
		
		var len = justep.XML.eval(dSchedule.responseXML,"/root/data/xbiz:xml/items/COUNT","single","xmlns:xbiz='http://www.justep.com/xbiz#'").text;
		taxtTable.clearItems();
		if (len < 1)
			return false;
		var items = new Array(len);
		for (var i = 1; i <= len; i++) {
			var fBeginTime = getNodeValue(dSchedule, i, "FBEGINTIME");
			fBeginTime = fBeginTime.replace(".0", " ");
			var fEndTime = getNodeValue(dSchedule, i, "FENDTIME");
			fEndTime = fEndTime.replace(".0", " ");
			items[i - 1] = new Array();
			items[i - 1]['text'] = getNodeValue(dSchedule, i, "FTITLE");
			items[i - 1]['urlTitle'] = "我的日程";
			items[i - 1]['url'] = "/OA/schedule/process/mySchedule/mySchedule.w?process=/OA/schedule/process/mySchedule/myScheduleProcess&activity=startActivity&dateStr="
					+ date;
			items[i - 1]['title'] = "开始时间：" + fBeginTime + "\n结束时间：" + fEndTime
					+ "\n安 排 人：" + getNodeValue(dSchedule, i, "FCREATEPSNNAME");
		}
				
		taxtTable.addItems(items);
	}
}