var chaxun = {};
chaxun._inputParams = {
		id : null
};
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
chaxun.windowReceiverReceive = function(event){
//	debugger;
	chaxun._inputParams.id = event.data.id;
	var beipinbeijian = justep.xbl("beipinbeijian");
//	alert(lingyong._inputParams.id);
//	beipinbeijian.newData();
	var toolData = justep.xbl("toolData");
	toolData.setFilter("filter0","DETECTION_TOOL_INFO="+chaxun._inputParams.id);
	toolData.refreshData();
	//	alert(toolData.getCount());
	var toolId = toolData.getValue("tOOLID");
//	alert(toolId);
	var toolType = toolData.getValue("tOOLTYPEID");
	var toolStatus = toolData.getValue("uSESTATECODE");
	beipinbeijian.setValue("tOOLID",toolId);
	beipinbeijian.setValue("tOOLTYPEID",toolType);
	beipinbeijian.setValue("tOOLIDSTATE",toolStatus);
	beipinbeijian.setValue("oPERATETYPE",1);
	beipinbeijian.setValue("mOVINGREASON",1);
	beipinbeijian.setValue("tOOLNO",chaxun._inputParams.id);
	var zhanyong = justep.xbl("zhanyong");
	zhanyong.setFilter("filer0", "TOOL_OCCUPY_INFO.tOOLNO1 = " + chaxun._inputParams.id);
	zhanyong.refreshData();
	if(zhanyong.getCount()!=0){
		var taskId = zhanyong.getValue("tESTTASKID");
		var bizData3 = justep.xbl("bizData3");
		bizData3.setFilter("fil", "TEST_PROJECT_TASK_INFO.tASKID="+taskId);
		bizData3.refreshData();
		if(bizData3.getCount()!=0){
			var projectId = bizData3.getValue("pROJECTID");		
			beipinbeijian.setValue("pROJECTID", projectId);
		}
	}
//	alert(beipinbeijian.getCount());
	beipinbeijian.refreshData();
};
