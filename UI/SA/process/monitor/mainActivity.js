var mainActivity = {};
var flowDataOffset = 1;
var flowDataLimit = 20;

function gotoTaskDataTab() {
	justep.xbl("tablist").tabbar.setTabActive("taskData_Tab");
}
function isMyOrgP(executorPath){
	var currentPath = justep.Context.getCurrentOgnFID() ;
	if (!executorPath) {
		return false;	
	}
	if((xforms.stringValue(executorPath)).indexOf(currentPath)>=0) {
		return true;
	} else {
		return false; 
	} 
}

function processAdvanceFilter(advanceFilter) {
	justep.xbl("flowData").advanceFilter.setFilter(advanceFilter, true, false);
	flowDataOffset = 1;
	refreshFlowData();
}

function flowDataPageChanged(event) {
	var flowData = justep.xbl("flowData");
	
	var customFilterData = justep.xbl("customFilter");
	var rowId = customFilterData.getCurrentRowId();
	var orgValue = customFilterData.getValue("org", rowId);
	var personValue = customFilterData.getValue("person", rowId);
	if (orgValue == "" && personValue == "") {
		var changed = flowData.isChanged();
		if(!changed||(changed && confirm("当前数据已经修改，加载数据将导致修改数据丢失，确定加载？")))
			flowData.loadPageData(event.page, false);
		else return;	
	} else {
		flowDataOffset = event.offset;
		refreshFlowData();
	}	
}

function setDateTimeFilter() {
	var dateSelector = justep.xbl("date-selector");
	var dateTimeCondition = dateSelector.getDateFilter("SA_Task.sCreateTime");
	justep.xbl("flowData").filters.setFilter("_custom_datetime_filter_", dateTimeCondition);
}

function setStatusFilter() {
	var customFilterData = justep.xbl("customFilter");
	var rowId = customFilterData.getCurrentRowId();
	var statusValue = customFilterData.getValue("status", rowId);
	var filterText = "";
	if (statusValue && statusValue != "") {
		var hasExecuting = (statusValue.match("executing") != null);
		var hasFinished = (statusValue.match("finished") != null);
		var hasPaused = (statusValue.match("paused") != null);
		var hasAborted = (statusValue.match("aborted") != null);
		if (hasExecuting) {
			filterText = "(SA_Task.sStatusID='tesExecuting')";
			filterText += " OR (SA_Task.sStatusID= 'tesReady')";
		}
		if (hasFinished) {
			if (filterText == "") {
				filterText = "(SA_Task.sStatusID='tesFinished')";
			} else {
				filterText += " OR (SA_Task.sStatusID='tesFinished')";
			}
		}
		if (hasPaused) {
			if (filterText == "") {
				filterText = "(SA_Task.sStatusID='tesPaused')";
			} else {
				filterText += " OR (SA_Task.sStatusID='tesPaused')";
			}
		}
		if (hasAborted) {
			if (filterText == "") {
				filterText = "(SA_Task.sStatusID='tesAborted')";
			} else {
				filterText += " OR (SA_Task.sStatusID='tesAborted')";
			}
		}
	}
	justep.xbl("flowData").filters.setFilter("_custom_status_filter_", filterText);
}

mainActivity.likeInputValueChanged = function(event) {
	var customFilterData = justep.xbl("customFilter");
	var rowId = customFilterData.getCurrentRowId();
	var likeValue = customFilterData.getValue("like", rowId);
	var filterText = "";
	if (likeValue && likeValue != "") {
		if (likeValue.indexOf("%") == -1) {
			likeValue = "%" + likeValue.toUpperCase() + "%";
		}
		filterText = "(UPPER(SA_Task.sName) LIKE '" + likeValue + "') OR "
				+ "(UPPER(SA_Task.sStatusName) LIKE '" + likeValue + "') OR "
				+ "(UPPER(SA_Task.sData1) LIKE '" + likeValue + "') ";
	}
	justep.xbl("flowData").filters.setFilter("_custom_like_filter_", filterText);
};

/*
function setPageNavigatorData(offset, count) {
	var cpn = justep.xbl("customPageNavigator");
	cpn.setOffset(offset);
	cpn.setCount(count);
	cpn.refresh();
}
*/

function refreshFlowData() {
	justep.xbl("flowData").refreshData();
	//setPageNavigatorData(flowDataOffset, justep.xbl("flowData").getTotal());
}

function isNeedRefreshTaskData() {
	var customData = justep.xbl("customData");
	var rowId = customData.getCurrentRowId();
	var state = customData.getValue("need_refresh_taskData", rowId);
	return state == "true" ? true : false;
}

function setNeedTaskDataState(state) {
	var customData = justep.xbl("customData");
	var rowId = customData.getCurrentRowId();
	customData.setValue("need_refresh_taskData", state, rowId);
}

function isNeedRefreshTaskDetail() {
	var customData = justep.xbl("customData");
	var rowId = customData.getCurrentRowId();
	var state = customData.getValue("need_refresh_taskDetail", rowId);
	return state == "true" ? true : false;
}

function setNeedTaskDetailState(state) {
	var customData = justep.xbl("customData");
	var rowId = customData.getCurrentRowId();
	customData.setValue("need_refresh_taskDetail", state, rowId);
}

function isNeedRefreshProcessChar() {
	var customData = justep.xbl("customData");
	var rowId = customData.getCurrentRowId();
	var state = customData.getValue("need_refresh_processChart", rowId);
	return state == "true" ? true : false;
}

function setNeedProcessChartState(state) {
	var customData = justep.xbl("customData");
	var rowId = customData.getCurrentRowId();
	customData.setValue("need_refresh_processChart", state, rowId);
}

mainActivity.awakenProcess = function(event) {
	var taskData = justep.xbl("taskData");
	if (isNeedRefreshTaskData()) {
		taskData.refreshData();
		setNeedTaskDataState("false");
	}

	var rowId = taskData.getCurrentRowId();
	var process = taskData.getValue("sProcess", rowId);
	var activity = taskData.getValue("sActivity", rowId);
	
	var param = new justep.Request.ActionParam ();
	param.setString("task",rowId);

	var re = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "externalResumeProcessAction",param);
	if (justep.Request.isBizSuccess(re)) {
		//var flowData = justep.xbl("flowData");
		//var flowRowId = flowData.getCurrentRowId();
		//flowData.setValue("sStatusID", "tesReady", flowRowId);
		//flowData.setValue("sStatusName", "尚未处理", flowRowId);
		taskData.refreshData();
	} else {
		throw new Error(justep.XML.eval(re.responseXML, "/root/message/text()", "single").nodeValue);
	}

	setNeedTaskDataState("true");
	setNeedProcessChartState("true");
	setNeedTaskDetailState("true");
}

function refreshTaskDataState() {
	var taskData = justep.xbl("taskData");
	var taskRowId = taskData.getCurrentRowId();
	taskData.refreshData();

	var sStatusID = "tesFinished";
	var sStatusName = "已完成";
	
	for (var i = 0; i < taskData.getCount(); i++) {
		var taskRowId = taskData.getRowId(i);
		var sid = taskData.getValue("sStatusID", taskRowId);
		if ((sid == "tesExecuting") || (sid == "tesReady")) {
			sStatusID = "tesExecuting";
			sStatusName = "正在处理";
			break;
		} else if (sid == "tesPaused") {
			sStatusID = "tesPaused";
			sStatusName = "已暂停";
			break;
		} else if (sid == "tesAborted") {
			sStatusID = "tesAborted";
			sStatusName = "已终止";
			break;
		}
	}
	
	var flowData = justep.xbl("flowData");
	var flowRowId = flowData.getCurrentRowId();
	flowData.setValue("sStatusID", sStatusID, flowRowId);
	flowData.setValue("sStatusName", sStatusName, flowRowId);
}

mainActivity.recycleClick = function(event) {
	var taskData = justep.xbl("taskData");
	var taskId = taskData.getCurrentRowId();
	
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	
	if(confirm("你确定回收吗？")){
		var param = new justep.Request.ActionParam ();
		param.setString("task",taskId);
		var result = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
				justep.Context.getCurrentActivity(),"externalWithdrawTaskAction", param);
		if (justep.Request.isBizSuccess(result)) {
			taskData.refreshData();
		} else {
			throw new Error(justep.XML.eval(result.responseXML, "/root/message/text()", "single").nodeValue);
		}
	}
}

function loadTaskDetailData() {
	var frameEl = document.getElementById("_detail-data-frame_");
	if (!frameEl) {
		return;
	}
	var currPersonId = justep.Context.getCurrentPersonID();
	var taskData = justep.xbl("taskData");
	var execPersonId = taskData.getValue("sExecutorPersonID");
	if (currPersonId == execPersonId) {
		if (frameEl.contentWindow.document.body){
			frameEl.contentWindow.document.body.innerHTML="<table width='100%' height='100%'><tr><td align='center' style='font-size: 15pt; font-weight: bold;'>正在加载数据，请稍候...</td></tr> <tr height='150px'><td>&nbsp;</td> </tr> </table>";
		}
		
		var eurl = taskData.getValue("sEURL");
		var sProcess = taskData.getValue("sProcess");
		var sActivity = taskData.getValue("sActivity");
		justep.Request.callURL(eurl + "?task=" + taskData.getCurrentRowId() + "&process=" + sProcess + "&activity=" + sActivity, "_detail-data-frame_", null, false);
	} else {
		frameEl.contentWindow.document.body.innerHTML="<table width='100%' height='100%'><tr><td align='center' style='font-size: 15pt; font-weight: bold;'>您没有权限查看当前流程数据。原因：您不是当前流程环节的执行者！</td></tr> <tr height='150px'><td>&nbsp;</td> </tr> </table>";
	}
}

function getBackProcessItemReadonly() {
	var taskData = justep.xbl("taskData");
	var sStatusID = taskData.getValue("sStatusID");
	return sStatusID == "tesReady" ? false : true;
}
mainActivity.specFlowoutDialogSend = function(event){
	return {"sProcess":justep.xbl("taskData").getValue("sProcess"),
	"sProcessTemplateID2":justep.xbl("taskData").getValue("sProcessTemplateID2"),
	"taskId":justep.xbl("taskData").getCurrentRowId(),
	"flowSName":justep.xbl("flowData").getValue("sName"),
	'taskDataProcess':justep.xbl("taskDataProcess")
	};
};
mainActivity.specFlowoutDialogReceive = function(event){
	var msg = event.data;
	var processControl = new justep.ProcessControl();
	processControl.loadFromXml(msg);
	justep.xbl("taskDataProcess").advanceExt(justep.xbl("taskData").getCurrentRowId(), processControl);
};
mainActivity.barItem1Click = function(event){//流程回退
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").backQueryExt(taskId);
};
mainActivity.barItem2Click = function(event){//流程流转
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").advanceQueryExt(taskId);	
};
mainActivity.barItem3Click = function(event){//流程转发
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").transferQueryExt(taskId);	
};
mainActivity.barItem4Click = function(event){//流程暂停
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").suspendQueryExt(taskId);
};
mainActivity.barItem5Click = function(event){//流程终止
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").abortQueryExt(taskId);	
};

mainActivity.flowData_GridAfterIndexChanged = function(event){
	setNeedTaskDataState("true");
	setNeedProcessChartState("true");
	setNeedTaskDetailState("true");
};

mainActivity.mainmodelLoad = function(event){
	justep.xbl("taskData").open();
	setDateTimeFilter();
	setStatusFilter();
	refreshFlowData();
};

mainActivity.filterItemClick = function(event) {
	justep.xbl("customFilterDialog").show("flowData", processAdvanceFilter);
};

mainActivity.refreshClick = function(event) {
	flowDataOffset = 1;
	refreshFlowData();
};

mainActivity.specflowClick = function(event) {
	var data = justep.xbl("taskData");
	var taskId = data.getCurrentRowId();
	
	justep.xbl("taskDataProcess").specialQueryExt(taskId, {"onSuccess": function(){data.refreshData();}});
	
	
/*
	var dialog = justep.xbl("specFlowoutDialog");
	if (dialog) {
		dialog.open();
	}
*/
};

mainActivity.modifyExecutorClick = function(event) {
	var data = justep.xbl("taskData");
	var taskId = data.getCurrentRowId();
	justep.xbl("taskDataProcess").modifyExecutorExt(taskId, false, {"onSuccess": function(){data.refreshData();}});
	/*
	var dialog = xforms("modifyExecutorDialog");
	if (dialog) {
		dialog.open();
	}
	*/
};

mainActivity.modifyCaptionClick = function(event) {
	var dialog = xforms("modifyTitleDialog");
	if (dialog) {
		var taskData = justep.xbl("taskData");
		var taskDataRowId = taskData.getCurrentRowId();
		var sName = taskData.getValue("sName", taskDataRowId);
		
		var customData = justep.xbl("customData");
		var customDataRowId = customData.getCurrentRowId();
		customData.setValue("title", sName, customDataRowId);
		
		dialog.open();
	}
};

mainActivity.taskData_GridAfterIndexChanged = function(event) {
	justep.xbl("taskData").xformsRefresh();
	setNeedProcessChartState("true");
	setNeedTaskDetailState("true");
};

mainActivity.taskData_TabSelect = function(event){
	if (isNeedRefreshTaskData()) {
		justep.xbl("taskData").refreshData();
		setNeedTaskDataState("false");
	}
};

mainActivity.flowTrack_TabSelect = function(event){
	if (isNeedRefreshProcessChar()) {
		if (isNeedRefreshTaskData()) {
			justep.xbl("taskData").refreshData();
			setNeedTaskDataState("false");
		}
		var taskData = justep.xbl("taskData");
		var taskId = taskData.getCurrentRowId();
		//justep.xbl("processGraph").loadByTask(taskId);
		justep.xbl("track").loadByTask(taskId);
		justep.xbl("pert").loadByTask(taskId);

		setNeedProcessChartState("false");
	}
};

mainActivity.taskData_Detail_TabSelect = function(event){
	if (isNeedRefreshTaskDetail()) {
		if (isNeedRefreshTaskData()) {
			justep.xbl("taskData").refreshData();
			setNeedTaskDataState("false");
		}

		loadTaskDetailData();

		setNeedTaskDetailState("false");
	}
};

mainActivity.modifyTitleDialogOkClick = function(event) {
	var customData = justep.xbl("customData");
	var customDataRowId = customData.getCurrentRowId();
	var title = customData.getValue("title", customDataRowId);

	var taskData = justep.xbl("taskData");
	var taskDataRowId = taskData.getCurrentRowId();
	taskData.setValue("sName", title, taskDataRowId);
	taskData.saveData();

	var dialog = xforms("modifyTitleDialog");
	if (dialog) {
		dialog.close();
	}
};

mainActivity.modifyTitleDialogCancelClick = function(event) {
	var dialog = xforms("modifyTitleDialog");
	if (dialog) {
		dialog.close();
	}
};

mainActivity.modifyExecutorDialogOpened = function(event) {
	var iframe = document.getElementById('modifyExecutorDialogFrame');
	if (iframe) {
		if (iframe.contentWindow.document.body){
			iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 11pt'>正在载入页面，请稍候......</td></tr></table>";
		}
		
		iframe.dialogId = "modifyExecutorDialog";
		iframe.taskData = justep.xbl("taskData");
		justep.Request.callURL("/SA/process/monitor/dialog/modifyExecutor.w?process=/SA/process/monitor/monitorProcess&activity=mainActivity", "modifyExecutorDialogFrame", "");
	}
};

mainActivity.modifyExecutorDialogClosed = function(event) {
	var iframe = document.getElementById('modifyExecutorDialogFrame');
	if (iframe) {
		iframe.src = "about:blank";
	}						
};

mainActivity.trigger1Click = function(event){
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").abortQueryExt(taskId);
};

mainActivity.trigger2Click = function(event){
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").suspendQueryExt(taskId);
};

mainActivity.trigger3Click = function(event){
	var taskId = justep.xbl("taskData").getCurrentRowId();
	justep.xbl("taskDataProcess").startCustomizedQueryExt(taskId);
};
