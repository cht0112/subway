var schedulePortlet_static = {};
schedulePortlet_static.mdMainLoad = function(event) {
	//debugger;
	var divObj = justep("textDiv");
	var currentDate = justep.Date.toString(new Date(), 'yyyy-MM-dd');
	var tableText = "<table style='width:100%;' border='0' cellspacing='0' cellpadding='0'>";
	var tempText = "";

	var resultSchedule = schedulePortlet_static.getScheduleData(currentDate, 4);
	var len = justep.XML.eval(resultSchedule.responseXML,
			"/root/data/xbiz:xml/items/COUNT/text()", "single",
			"xmlns:xbiz='http://www.justep.com/xbiz#'").nodeValue;
	if (len < 1)
		return false;
	// createDiv(event);

	for ( var i = 1; i <= len; i++) {
		var scheduleID = schedulePortlet_static.getNodeValue(resultSchedule, i,
				"FID");
		var beginTime = schedulePortlet_static.getNodeValue(resultSchedule, i,
				"FBEGINTIME").split(' ')[1].substring(0, 5);
		var endTime = schedulePortlet_static.getNodeValue(resultSchedule, i,
				"FENDTIME").split(' ')[1].substring(0, 5);

		// var imgURL = justep.Request.BASE_URL +
		// "/UI/appCommon/images/dot.png";
		var title = schedulePortlet_static.getNodeValue(resultSchedule, i,
				"FTITLE");
		var content = schedulePortlet_static.getNodeValue(resultSchedule, i,
				"FCONTENT");
		/*
		 * content = encodeURIComponent(content); alert(content.length); content =
		 * content.replace(/\%/g, "__$");
		 * 
		 * alert(content.length);
		 */
		var lenIn = 0;
		var chara = "";
		 
		 
	    var j=0;
		for (j=0; j< content.length; j++) {

			chara = content.charAt(j);
			chara = encodeURIComponent(chara);
			 if(chara.length<2){
				 lenIn++;
			 }else{
				 lenIn+=2;
			 }
		     
			 
			if (lenIn > 210) {
				content=content.substring(0, j)+" ...";
				break;	
			}
		}
		
	 

		tempText += "<tr><td height='20' align='left' class='tableClass'><a href='javascript:schedulePortlet_static.openSchedule(\""
				+ scheduleID
				+ "\")'>"
				+ (beginTime.split(":")[0] <= 12 ? '上午' : '下午')
				+ beginTime
				+ " " + title + "</a></td></tr>";
		// tempText += "<tr><td style='width:100%;font-size:11px;font-family:
		// 宋体;color:#1f3a87;' height='25' valign='top'><span
		// style='text-indent:2em;' onmouseover='showMsg(\""+content+"\")'
		// onmousemove='showMsg(\""+content+"\")'
		// onmouseout='hiddenMsg(event);'>"+content+"</span></td></tr>";
		// word-break:break-all;
		tempText += "<tr height='45'><td style='width:100%;font-size:14px;font-family: 宋体;color:#1f3a87;text-indent:2em;' valign='top'><div style='overflow:hidden;height:25px;'>"
				+ content + "</div></td></tr>";
	}

	tableText = tableText + tempText + "</table>";

	divObj.innerHTML = tableText;
};
schedulePortlet_static.getScheduleData = function(dateStr, count) {
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
};
schedulePortlet_static.getScheduleCount = function(dateStr) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString("dateStr", dateStr);
	var action = "getScheduleCountAction";
	// var translateParam =
	// "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(process, activity, action, param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "获取日程数量失败"));
	}
	var count = justep.XML.eval(r.responseXML, "/root/data", "single").text;
	return count;
};
schedulePortlet_static.getNodeValue = function(dom, level, field) {
	var result = "";
	try {
		/*
		 * result =
		 * dom.responseXML.selectSingleNode("/root/data/xbiz:xml/items/items[" +
		 * level + "]/" + field).text;
		 */
		result = justep.XML.eval(dom.responseXML,
				"/root/data/xbiz:xml/items/items[" + level + "]/" + field
						+ "/text()", "single",
				"xmlns:xbiz='http://www.justep.com/xbiz#'").nodeValue;
	} catch (e) {
	}
	return result;
};
schedulePortlet_static.openSchedule = function(rowid) {
	// var date = justep.Date.toString(new Date(), 'yyyy-MM-dd');
	var process = "/OA/schedule/process/mySchedule/myScheduleProcess";
	var activity = "startActivity";
	/*
	 * var url = "/OA/schedule/process/mySchedule/mySchedule.w" + "?process=" +
	 * process + "&activity=" + activity + "&dateStr="+ date;
	 */
	var url = "/OA/schedule/process/schedule/scheduleView.w" + "?process="
			+ process + "&activity=" + activity + "&rowid=" + rowid;
	justep.Portal.openWindow("我的日程", url);
};
function createDiv(event) {
	var divObj = document.createElement('div');
	divObj.id = "msgDiv";
	divObj.style.display = "none";
	document.body.appendChild(divObj);
	// return divObj;
}
function showMsg(text) {
	// debugger;
	/*
	 * var divObj = document.getElementById('msgDiv'); var e = e ||
	 * window.event; divObj.style.top = e.clientY - 18 + "px"; divObj.style.left =
	 * e.clientX - 12 + "px"; divObj.style.display = ""; divObj.innerHTML = "<div
	 * style='width:150;'><span>"+text+"</span></div>";
	 */
}
function hiddenMsg() {
	// document.getElementById("msgDiv").style.display = "none";
	// divObj.style.display = "none";
}