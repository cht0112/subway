var bizActivity7 = {};
var bool = false;
bizActivity7.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

bizActivity7.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};
/**
	name:grid#onInit
	description: 表格初始化时
	@param event 事件属性:<br/>{"source":XFGrid对象,"grid":dhtmlxGrid对象}
*/
bizActivity7.grdMainInit = function(event){
	var dataMain2 = justep.xbl("dataMain2");
	dataMain2.setFilter("filter0", "t2.aPPLICATIONNO = "+parseInt(justep.Context.getProcessData1())+" and t3.oRGID like '"+justep.Context.getCurrentPersonID()+"%'");
	dataMain2.loadData();
};

bizActivity7.input1_1Click = function(event){
	var dataMain2 = justep.xbl("dataMain2");
	var count = dataMain2.getCount();
	var bool = 0;
	var list = new justep.Request.ListParam();
	for(var i=0; i<count; i++){
		var check = dataMain2.getValue("chb", dataMain2.getRowId(i));
		var taskid = dataMain2.getValue("tASKID", dataMain2.getRowId(i));
		if(1==check){
			list.add(new justep.Request.SimpleParam(taskid,justep.XML.Namespaces.XMLSCHEMA_STRING));
			bool = 1;
		}
	}
	if(0==bool){
		alert("请选择要下载项目任务！");
	}else{
		var param = new justep.Request.ActionParam();
		param.setList("taskID",list);
	
		var ui = justep.Request.transform(justep.Request.getData(justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", "bizActivity7", "downloadTask",param , null, null, null, null, null).responseXML));
		if(null!=ui){
			var elemIF = document.createElement("iframe");
			//alert(window.location.protocol + "//" + window.location.host);
			var url = window.location.protocol + "//" + window.location.host + justep.Request.convertURL(ui,true);
			//alert(url);
			//alert(url);
			elemIF.src = url;
			//elemIF.src = ui;
			document.body.appendChild(elemIF); 
			dataMain2.refreshData();
		}else{
			alert("没有任务计划!");
		}
	}
};



/**
	name:grid#onAfterIndexChanged
	description: 当前行改变结束后触发
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":选中行的ID,"oldRowID":行改变前的rowID}
*/
bizActivity7.grdMainAfterIndexChanged = function(event){
	var dataMain2 = justep.xbl("dataMain2");
	var count = dataMain2.getCount();
	for(var i=0; i<count; i++){
		var rowID = dataMain2.getRowId(i);
		
		var statr = dataMain2.getValue("tASKEXECUTE", rowID);
		dataMain2.setValue("zhuangtai", getStatr(statr), rowID);
		
		var check = dataMain2.getValue("tASKCHECK", rowID);
		dataMain2.setValue("jieguo", getCheck(check), rowID);
		
		var type = dataMain2.getValue("tASKTYPE", rowID);
		dataMain2.setValue("tasktype", getType(type), rowID);
		
		var pROJECTTYPE = dataMain2.getValue("pROJECTTYPE", rowID);
		dataMain2.setValue("projecttype", getProjectType(pROJECTTYPE), rowID);
	}
};

function subfile1(){
	var file = document.getElementById("file");
	if (file.value.toString() == "")
	{
		alert("请选择要导入的文件。");
	}else{
		var fileName = file.value.toString();
		var position = fileName.lastIndexOf(".");
		var extName = fileName.substring(position + 1);
		if ("XML" != extName.toUpperCase() && "ZIP" != extName.toUpperCase())
		{
			alert("文件格式应该是xml或zip。");
		}else{
			bool = true;
			var url = justep.Request.convertURL("/UI/metrodetection/detection_Process_Related/process/detectionManager/UploadTask.j",false);
			document.getElementById("f1").action = url;
			document.forms["f1"].submit();
		}
	}
	
}


bizActivity7.afterUploadFile = function(iframe){
	if(bool){
		if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
			var dataMain2 = justep.xbl("dataMain2");
			dataMain2.refreshData();
			var doc = (!justep.Browser.IE||justep.Browser.IE9)?iframe.contentWindow.document:iframe.contentWindow.document.XMLDocument;
			debugger;
			if(doc){
				var data = justep.XML.eval(doc, "/root/data/*","single");
				alert(data.textContent);
//				var flag = justep.Request.getFlag(doc);
//				alert(data.textContent + "  " + flag);
			}
		}
	}
};

//解析执行状态
function getStatr(id){
	if("0" == id){
		return "未执行";
	}
	if("1" == id){
		return "准备执行";
	}
	if("2" == id){
		return "执行中";
	}
	if("3" == id){
		return "完成";
	}
	if("4" == id){
		return "无法执行";
	}
	if("9" == id) {
		return "手工导入";
	}
}

//解析执行结果
function getCheck(id){
	if("0" == id){
		return "未知";
	}
	if("1" == id){
		return "成功";
	}
	if("2" == id){
		return "失败";
	}
	if("3" == id){
		return "无法完成";
	}
}

//解析任务类型
function getType(id){
	if("1" == id){
		return "测试任务";
	}else{
		return "其他任务";
	}
}

function getProjectType(id){
	if("1" == id){
		return "AFC专业检测项目";
	}else{
		return "其他检测项目";
	}
}

bizActivity7.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
};



bizActivity7.mdDefaultReady = function(event){
	var dataMain2 = justep.xbl("dataMain2");
	dataMain2.setFilter("filter0", "t2.aPPLICATIONNO = "+parseInt(justep.Context.getProcessData1())+" and t3.oRGID like '"+justep.Context.getCurrentPersonID()+"%'");
	dataMain2.refreshData();
	var cou = dataMain2.getCount();
	for (var i = 0; i < cou; i++) {
		var curId = dataMain2.getID(i);
		dataMain2.setValue("tASKEXECUTE", 0, curId);
		dataMain2.saveData();
		
		var statr = dataMain2.getValue("tASKEXECUTE", curId);
		dataMain2.setValue("zhuangtai", getStatr(statr), curId);
		
		var check = dataMain2.getValue("tASKCHECK", curId);
		dataMain2.setValue("jieguo", getCheck(check), curId);
		
		var type = dataMain2.getValue("tASKTYPE", curId);
		dataMain2.setValue("tasktype", getType(type), curId);
		
		var pROJECTTYPE = dataMain2.getValue("pROJECTTYPE", curId);
		dataMain2.setValue("projecttype", getProjectType(pROJECTTYPE), curId);
	}
	dataMain2.loadData();
};

/**
	name:process#onBeforeBack
	description: <b>[回调型事件]</b>回退之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
bizActivity7.flwBeforeBack = function(event){
	var dataMain2 = justep.xbl("dataMain2");
	dataMain2.setFilter("filter0", "t2.aPPLICATIONNO = "+parseInt(justep.Context.getProcessData1())+" and t3.oRGID like '"+justep.Context.getCurrentPersonID()+"%'");
	dataMain2.refreshData();
	var cou = dataMain2.getCount();
	for (var i = 0; i < cou; i++) {
		var curId = dataMain2.getID(i);
		dataMain2.setValue("tASKEXECUTE", -1, curId);
		dataMain2.saveData();
		dataMain2.refreshData();
	}
};

bizActivity7.grdMain_aCTUALSTARTDATERender = function(event){
	var disVal = "<div></div>";
	var curVal = event.value;
	if(curVal == "1970-01-01 00:00:00") {
		return disVal;
	} else if(curVal == "1900-01-01 00:00:00") {
		return disVal;
	}
};

bizActivity7.grdMain_aCTUALENDINGDATERender = function(event){
	var disVal = "<div></div>";
	var curVal = event.value;
	if(curVal == "1970-01-01 00:00:00") {
		return disVal;
	} else if(curVal == "1900-01-01 00:00:00") {
		return disVal;
	}
};
