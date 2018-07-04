var customizedProcess2 = {
	"task": "",
	"template" : "",
	"templateType" : "",
	"process": "",
	"processName":"",
	"activity":"",
	"activityName":"",
	"templateSequence" : "",
	"templateID": ""
		
};

var designer = null;
customizedProcess2.loadTemplateAfter = function(event){
	customizedProcess2.templateID = event.data.rowid;
};

customizedProcess2.trigger5Click = function(event){
	var data = designer.getData();
	var content = data[0];
	/*
	if ((content == null) || (content == undefined)){
		alert("流程定制内容不允许为空！");
		return;
	}
	*/
	var content2 = data[1];
	var templateID = this.saveProcessTemplate("", "instance", "", this.templateType, 
			this.process, this.processName, this.activity, this.activityName, content, content2);
	this.startCustomized(this.task, templateID);
	justep.xbl("windowReceiver1").windowEnsure({});
};

customizedProcess2.trigger4Click = function(event){
	justep.xbl("windowReceiver1").windowCancel();	
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
customizedProcess2.windowReceiver1Receive = function(event){
	this.task = event.data.task;
	this.template = event.data.template;
	this.templateType = event.data.templateType;
	this.templateSequence = event.data.templateSequence;
	this.process = event.data.process;
	this.processName = event.data.processName;
	this.activity = event.data.activity;
	this.activityName = event.data.activityName;
	
	
	if (!designer){
		designer = justep.xbl("designer");
	}
	designer.init(this.process, this.activity, this.task);
	
	var data = justep.xbl("main");
	data.filters.clear();
	data.setFilter("_customFilter_", "SA_ProcessTemplate='" + this.template + "'");
	data.refreshData();
	var rowCount = data.getCount();
	if (rowCount == 1){
		rowId = data.getCurrentID();
		var content = data.getValue("sContent", rowId);
		var content2 = data.getValue("sContent2", rowId);
		
		var livings = "[]";
		var track = "[]";
		{
			var param = new justep.Request.ActionParam();
			param.setString("task", this.task);
			var response = justep.Request.sendBizRequest(null, null, "queryProcessChartByCustomizedAction", param, null, null, true);
			if (justep.Request.isBizSuccess(response)){
				var data = justep.Request.transform(justep.Request.getData(response.responseXML));
				livings = data.livings;
				track = data.track;
			}
		}
		
		
		livings = eval("(" + livings + ")");
		track = eval("(" + track + ")");
		
		var data = [content, content2, livings, track];
		
		designer.setData(data);
	}else{
		designer.setData(["<process/>", null, [], []]);
	}
};







customizedProcess2.startCustomized = function(task, template){
	if (this.template == "" || this.templateSequence == "start"){
		var param = new justep.Request.ActionParam();
		param.setString("task", task);
		param.setString("template", template);
		var result = justep.Request.sendBizRequest(null, null,
				"externalStartCustomizedProcessAction", param, null, null, true);

	}
};

customizedProcess2.saveProcessTemplate = function(name, kind, scope, type, process, processName, activity, 
		activityName, content, content2){
	var data = justep.xbl("main");
	var rowCount = data.getCount();
	var rowId = "";
	if (rowCount == 1){
		rowId = data.getCurrentID();
		data.setValue("sContent", content, rowId);
		data.setValue("sContent2", content2, rowId);
		data.saveData();
		
	}else{
		data.newData(rowCount);
		rowId = data.getRowId(rowCount);
		
		data.setValue("sName", name, rowId);
		data.setValue("sKindID", kind, rowId);
		data.setValue("sScopeID", scope, rowId);
		data.setValue("sTypeID", type);
		data.setValue("sProcess", process, rowId);
		data.setValue("sProcessName", processName, rowId);
		data.setValue("sActivity", activity, rowId);
		data.setValue("sActivityName", activityName, rowId);
		data.setValue("sContent", content, rowId);
		data.setValue("sContent2", content2, rowId);
		data.setValue("sTemplateID", customizedProcess2.templateID, rowId);
		data.saveData();
	}
	
	return rowId;
};


