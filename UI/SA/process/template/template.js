var template = {};

template._isInPI = false;
template._task = null;

template._mustHasName = true;
function hasName(){
	return template._mustHasName;
}

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
template.windowReceiver1Receive = function(event){
	var id = null;
	var activeActivities = null;
	var finishedActivities = null;
	if (event.data){
		id = event.data.id;
		template._isInPI = !!event.data.isInPI;
		template._task = event.data.task;
		activeActivities = event.data.activeActivities;
		finishedActivities = event.data.finishedActivities;
		if (!!event.data.noName){
			template._mustHasName = false;
		}
	}
	
	if (activeActivities == null || activeActivities==undefined){
		activeActivities = [];
	}

	if (finishedActivities == null || finishedActivities==undefined){
		finishedActivities = [];
	}
	
	var content = [];
	var content2 = [];
	var data = justep.xbl("main");
	if ((id!="") && (id!=undefined) && (id!=null)){
		data.setFilter("__custom__", "SA_ProcessTemplate='" + id + "'");
		data.refreshData();
		if (data.getCount() != 1){
			alert("流程模板“" + id + "“不存在！");
		}
		
		content = data.getValue("sContent");
		content2 = data.getValue("sContent2");
		if (template._isInPI && (data.getValue("sName") == ""))
			data.setValue("sName", "_");
		
	}else{
		data.setFilter("__custom__", "1>2");
		data.refreshData();
		data.newData();
		data.setValue("sProcess", event.data.sProcess);
		data.setValue("sProcessName", event.data.sProcessName);
		data.setValue("sTypeID", "PROCESS_TEMPLATE");
		data.setValue("sKindID", "template");
		if (template._isInPI){
			data.setValue("sName", "_");
		}
		id = data.getCurrentID();
		
		
	}
	
	//暂时不支持轨迹图
	var task = event.data.task;
	var isGraph2 = true;
	justep.xbl("designer").init(data.getValue("sProcess"));
	if (template._isInPI && (content.length==0)){
		var p = justep.xbl("designer")._loadProcess();
		content = p[0];
		content2 = p[1];
	}
	var data = [content, content2, activeActivities, finishedActivities, isGraph2];
	justep.xbl("designer").setData(id, data);
};

template.loadTemplateAfter = function(event){
	//alert(event.data.rowid);
};

template.selectProcessClick = function(event){
	justep.xbl("processDialog").open();
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
template.processDialogReceive = function(event){
	var main = justep.xbl("main");
	main.setValue("sProcess", event.data.process);
	main.setValue("sProcessName", event.data.label);
};

template.btnOKClick = function(event){
	var designer = justep.xbl("designer");
	var datas = designer.getData();
	var content = datas[0];
	var content2 = datas[1];
	
	var main = justep.xbl("main");
	var sKindID = main.getValue("sKindID");
	if (template._isInPI && (sKindID=="template")){
		justep.Request.beginBatch();
		var id = new justep.UUID().valueOf();
		var sName = "";
		var sProcess = main.getValue("sProcess");
		var sTemplateID = main.getCurrentID();
		var sKindID = "instance";
		template.saveTemplate(id, sName, sProcess, content, content2, sTemplateID, sKindID);
		template.replaceTemplate(template._task, id);
		justep.Request.endBatch();
	}else{
		main.setValue("sContent", content);
		main.setValue("sContent2", content2);
		main.saveData();
	}
	
	
	
	justep.xbl("windowReceiver1").windowEnsure();
};


template.saveTemplate = function(id, sName, sProcess, sContent, sContent2, sTemplateID, sKindID){
	var params = new justep.Request.ActionParam();
	params.setString("id", id);
	params.setString("sName", sName);
	params.setString("sProcess", sProcess);
	params.setString("sContent", sContent);
	params.setString("sContent2", sContent2);
	params.setString("sTemplateID", sTemplateID);
	params.setString("sKindID", sKindID);
	var options = {
		action: "saveProcessTemplate4Action",
		dataType: "json",
		parameters: params	
	};
	justep.Request.sendBizRequest2(options);
};


template.replaceTemplate = function(task, id){
	var params = new justep.Request.ActionParam();
	params.setString("task", task);
	params.setString("template", id);
	var options = {
		action: "replaceTemplateAction",
		dataType: "json",
		parameters: params	
	};
	justep.Request.sendBizRequest2(options);
};

template.btnCancelClick = function(event){
	justep.xbl("windowReceiver1").windowCancel();	
};
