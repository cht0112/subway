var mainActivity = {};

tabActive = function(){
	var data = justep.xbl("main");
	data.refreshPageData(data.offset - data.limit, data.limit, false);
};

mainActivity.trgSearchClick = function(event){
	justep.xbl("main").refreshData();
};

mainActivity.joinFilter = function(filter1, filter2, operator) {
	if (!operator)
		operator = "and";

	if (filter1 && filter2)
		return "(" + filter1 + ") " + operator + " (" + filter2 + ")";
	else
		return (filter1 ? filter1 : "") + (filter2 ? filter2 : "");
};

mainActivity.mainRefreshCreateParam = function(event){
	onRefreshCreateParam(event);
};

mainActivity.model1Load = function(event){
	var dFilter = justep.xbl("custom_filter");
	var parameter = justep.Context.getRequestParameter("parameter");
	if (parameter == "submited") {
		dFilter.setValue("status", "submited");
		dFilter.setValue("statusLabel", "提交");
	} else {
		dFilter.setValue("status", "waiting");
		dFilter.setValue("statusLabel", "待办");
	}
	justep.xbl("main").refreshData();
};

mainActivity.isExecutor = function() {
	var executorFID = justep.xbl("main").getValue("sExecutorFID");
	var personID = justep.Context.getCurrentPersonID();

	var result = false;
	if ((executorFID != null) && (executorFID != "")){
		if (executorFID.indexOf("/" + personID + "@") != -1){
			result = true;
		}else{
			var items = justep.Context.getAllPersonMemberFIDs();
			if (items!=null){
				for(var i = 0; i < items.length; i++) {
					/*有设计问题：当前认为一个人不仅可以处理自己的任务，而且还可以处理自己上层组织(包括所有上层)的任务*/
					if (startsWith(items[i], executorFID)){
						result = true;
						break;
					}
				}
			}
		}
	}
	return result;
};

mainActivity.isCreator = function() {
	var creatorFID = justep.xbl("main").getValue("sCreatorFID");
	var personID = justep.Context.getCurrentPersonID();
	return (creatorFID.indexOf("/" + personID + "@") != -1);
};

mainActivity.hasData = function() {
	return (justep.xbl("main").getCount() > 0);
};

mainActivity.isWaitingStatus = function() {
	var status = justep.xbl("main").getValue("sStatusID");
	return (status == "tesReady" || status == "tesExecuting");
};

mainActivity.canExecute = function() {
	return mainActivity.hasData() && mainActivity.isWaitingStatus() && mainActivity.isExecutor();
};

mainActivity.canBrowse = function() {
	return mainActivity.hasData();
};

mainActivity.isFlow = function() {
	return (!!justep.xbl("main").getValue("sFlowID"));
};

mainActivity.isProcessTask = function() {
	return (justep.xbl("main").getValue("sCatalogID") == "tsProcess");
};

mainActivity.canShowChart = function() {
	return mainActivity.hasData() && mainActivity.isFlow();
};

mainActivity.canOpenExecuteList = function() {
	return mainActivity.hasData() && mainActivity.isFlow();
};

mainActivity.canFlowProcess = function() {
	return mainActivity.canExecute() && mainActivity.isFlow() && mainActivity.isProcessTask();
};

mainActivity.canRecycle = function() {
	return mainActivity.hasData() && mainActivity.isWaitingStatus() && mainActivity.isCreator();
};

mainActivity.refreshBtnStatus = function() {
	justep.xbl("trgExecute").setDisabled(!mainActivity.canExecute());
	justep.xbl("trgBrowse").setDisabled(!mainActivity.canBrowse());
	justep.xbl("more").setDisabled("recycleItem", !mainActivity.canRecycle());
	justep.xbl("more").setDisabled("flowItem", !mainActivity.canShowChart());
	justep.xbl("more").setDisabled("recordItem", !mainActivity.canOpenExecuteList());
};

mainActivity.mainIndexChanged = function(event){
	mainActivity.refreshBtnStatus();
};

mainActivity.mainAfterRefresh = function(event){
	mainActivity.refreshBtnStatus();
};

mainActivity.mainAfterRefreshPage = function(event){
	mainActivity.refreshBtnStatus();
};

mainActivity.executeTask = function(){
	var mainData = justep.xbl("main");
	var id = mainData.getCurrentID();
	var url = mainData.getValue("sEURL", id);
	var name = mainData.getValue("sName", id);
	if (url == "") {
		throw new Error("任务: " + name + "的sEURL为空!");
			
	} else {
		var executorFID = mainData.getValue("sExecutorFID", id);
		var process = mainData.getValue("sProcess", id);
		var activity = mainData.getValue("sActivity", id);

		var param = new justep.Request.ActionParam();
		param.setString("task", id);
		param.setString("executor", executorFID);
		var loader = justep.Request.sendBizRequest(process, activity, "executeTaskAction", param, null, null, true);
		if(justep.Request.isSuccess(loader)){
			var executor = justep.XML.getNodeText(justep.XML.eval(loader.responseXML, "/root/data/*/executor", "single"));
			var realUrl = url + '?task=' + id + '&activity-pattern=do&process=' + process + '&activity=' + activity;
			justep.Portal.openWindow(name, realUrl, false, null, executor);
		}
	}
};

mainActivity.trgExecuteClick = function(event){
	mainActivity.executeTask();
};

mainActivity.getBrowseURL = function(){
	var result = "";
	var mainData = justep.xbl("main");
	var id = mainData.getCurrentID();
	if (id){
		var isCreator = false;
		var items = justep.Context.getAllPersonMemberFIDs();
		if (items!=null){
			var creatorFID = mainData.getValue("sCreatorFID", id); 
			for(var i = 0; i < items.length; i++) {
				if (items[i]==creatorFID){
					isCreator = true;
					break;
				}
			}
		}
		
		if (isCreator){
			result = mainData.getValue("sCURL", id);
		}else{
			result = mainData.getValue("sEURL", id);
		}
	}
	
	return result;
};

mainActivity.browseTask = function() {
	var mainData = justep.xbl("main");
	var id = mainData.getCurrentID();
	var name = mainData.getValue("sName", id);
	var executor = mainData.getValue("sCreatorFID");
	if (executor.indexOf(justep.Context.getCurrentPersonID()) == -1){
		executor = mainData.getValue("sExecutorFID");
	}
	if (executor == undefined || executor == "" || executor.indexOf(".psm")==-1){
		executor = justep.Context.getCurrentPersonID();
	}

	var process = mainData.getValue("sProcess", id);
	var url = mainActivity.getBrowseURL();
	var realUrl = url + "?task=" + id + "&activity-pattern=detail&process=" + process;
	justep.Portal.openWindow(name, realUrl, false, null, executor);
};

mainActivity.trgBrowseClick = function(event){
	mainActivity.browseTask();
};

mainActivity.trgChartClick = function(event){
	var mainData = justep.xbl("main");
	var pi = mainData.getValue("sFlowID");
	if (pi == "") {
		var name = mainData.getValue("sName", id);
		throw new Error("任务: " + name + "的sFlowID为空!");
	} else {
		justep.xbl("dlgChart").open(null, "流程轨迹", "/UI/SA/task/taskCenter/dialogs/processChart.w?pi=" + pi);
	}
};

mainActivity.grid_sSummaryRender = function(event){
	if (!event.value) {
		return "";
	}
	var s = event.value;
	s = s.replace(/\n/g, "<br/>");
	return "<div>" + s + "</div>";
};

mainActivity.recycleTask = function(){
	var mainData = justep.xbl("main");
	var id = mainData.getCurrentID();
	var url = mainData.getValue("sCURL", id);
	if (url == '') {
		var name = mainData.getValue("sName", id);
		error("任务: " + name + "的sCURL为空!");
	}else if (confirm("确实要回收当前选中的任务吗？")){
		var creatorFID = mainData.getValue("sCreatorFID", id);
		var process = mainData.getValue("sProcess", id);
		var activity = url.substring(url.lastIndexOf("/")+1, url.lastIndexOf("."));
		var param = new justep.Request.ActionParam();
		param.setString("task", id);
		var loader = justep.Request.sendBizRequest(process, activity, "withdrawTaskAction", param, null, null, true, creatorFID);
		if(justep.Request.isSuccess(loader)){
			justep.xbl("main").refreshData();
		}
	}
};

mainActivity.trgRecycleClick = function(event){
	mainActivity.recycleTask();
};

mainActivity.gridRowDblClick = function(event){
	if (mainActivity.canExecute()) {
		mainActivity.executeTask();
	} else if (mainActivity.canBrowse()) {
		mainActivity.browseTask();
	}
};

mainActivity.trgExecuteListClick = function(event){
	var mainData = justep.xbl("main");
	var id = mainData.getCurrentID();
	if (id != null && id != "") {
		justep.xbl("process").openExecuteListDialog(id);
	}
};
