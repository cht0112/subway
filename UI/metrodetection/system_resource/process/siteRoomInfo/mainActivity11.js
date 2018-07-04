var mainActivity = {
	updateState : false,
	selectState : false,
	addState : false,
	windowDialog1 : null,
	windowDialog2 : null,
	windowDialog3 : null
};

mainActivity.btnHtml = function (data) {
	var fid = data.rowId;
	var html = "<button id=\"btndelete\" onclick=\"mainActivity.updateWork('" + fid
			+ "')\" >编辑</button>"
			+ "<button id=\"btndelete\" onclick=\"mainActivity.deleteWork('" + fid
			+ "')\">删除</button>"
			+ "<button id=\"btnselect\" onclick=\"mainActivity.selectWork('" + fid
			+ "')\" >查看</button>";
	return html;
};
mainActivity.link = function (data) {
	var maindata = justep.xbl("dataSA_WorkTask");
	var fid = data.rowId;
	var html = "<a href=\"javascript:mainActivity.selectWork('" + fid + "')\">" + data.value
			+ "</a>";
	return html;
};
mainActivity.checkBox = function (data) {
	var fid = data.rowId;
	var html = "<input type=\"checkbox\" name=\"checkbox\" id=\"" + fid + "\">";
	return html;
};
mainActivity.deleteWork = function (fid) {
	var maindata = justep.xbl("dataSA_WorkTask");
	maindata.deleteData(fid);
};

mainActivity.updateWork = function (fid) {
	var url = "/demo/misc/process/workTask/pubActivity.w?i=3&sid=" + fid
			+ "&process=" + "/demo/misc/process/workTask/workTaskProcess"
			+ "&activity=" + "pubActivity";
	if (!mainActivity.updateState) {
		mainActivity.windowDialog1 = new justep.WindowDialog("testUpdate", "", "编辑任务", true,
				"maximize", 750, 500, 0, 0, true, false, false, null, false);
		mainActivity.windowDialog1.setShowTitle(false);
		mainActivity.updateState = true;
	}
	mainActivity.windowDialog1.url = url;
	mainActivity.windowDialog1.attachEvent("onReceive", function(evt) {
		var maindata = justep.xbl("dataSA_WorkTask");
		maindata.refreshData();
	}, mainActivity.windowDialog1);

	mainActivity.windowDialog1.open();
};

mainActivity.selectWork = function (fid) {
	var url = "/demo/misc/process/workTask/pubActivity.w?i=2&sid=" + fid
			+ "&process=" + "/demo/misc/process/workTask/workTaskProcess"
			+ "&activity=" + "pubActivity";
	if (!mainActivity.selectState) {
		mainActivity.windowDialog2 = new justep.WindowDialog("testSelect", "", "查看任务", true,
				"maximize", 750, 500, 0, 0, true, false, false, null, false);
		mainActivity.windowDialog2.setShowTitle(false);
				
		mainActivity.selectState = true;
	}
	mainActivity.windowDialog2.url = url;
	mainActivity.windowDialog2.open();
};

mainActivity.addWork = function () {
	var url = "/demo/misc/process/workTask/pubActivity.w?i=1" + "&process="
			+ "/demo/misc/process/workTask/workTaskProcess" + "&activity="
			+ "pubActivity";
	if (!mainActivity.addState) {
		mainActivity.windowDialog3 = new justep.WindowDialog("testAdd", "", "添加任务", true,
				"maximize", 750, 500, 0, 0, true, false, false, null, false);
		mainActivity.addState = true;
		mainActivity.windowDialog3.setShowTitle(false);
		mainActivity.windowDialog3.url = url;
		mainActivity.windowDialog3.attachEvent("onReceive", function(evt) {
			var maindata = justep.xbl("dataSA_WorkTask");
			maindata.refreshData();
		}, mainActivity.windowDialog3);
	}

	mainActivity.windowDialog3.open();
};
// checkbox选中方式删除列
mainActivity.deleteCol = function () {
	var maindata = justep.xbl("dataSA_WorkTask");
	var state = "";
	var fid;
	var id = "";
	var obj = document.getElementsByName("checkbox");
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			state = "checked";
			fid = obj[i].id;
			id = id + "," + fid;
		}
	}
	var ids = id.substring(1, id.length);
	if (state == "checked") {
		maindata.deleteData(ids);
	} else {
		alert("请选择删除的行！");
	}
}