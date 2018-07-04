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
		dFilter.setValue("status", "处理中,编辑中,已完成");
		dFilter.setValue("statusLabel", "处理中,编辑中,已完成");
		dFilter.setValue("org",1);
		dFilter.setValue("orgLabel","本人");
	} else {
		dFilter.setValue("status", "处理中,编辑中,已完成");
		dFilter.setValue("statusLabel", "处理中,编辑中,已完成");
		dFilter.setValue("org",1);
		dFilter.setValue("orgLabel","本人");
	}
	var main = justep.xbl("main");
	var currentPsId = justep.Context.getCurrentPersonID();
	main.setFilter("filter2", "SA_Task.sCreatorPersonID = '"+currentPsId+"'");
	main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','尚未处理','已完成')");
	main.refreshData();
};

mainActivity.isExecutor = function() {
	var executorFID = justep.xbl("main").getValue("sExecutorFID");
	var personID = justep.Context.getCurrentPersonID();

	var result = false;
	if (executorFID != null){
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
	justep.xbl("trgRecycle").setDisabled(!mainActivity.canRecycle());
	justep.xbl("trgBrowse").setDisabled(!mainActivity.canBrowse());
	justep.xbl("trgChart").setDisabled(!mainActivity.canShowChart());
	justep.xbl("trgExecuteList").setDisabled(!mainActivity.canOpenExecuteList());
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

//mainActivity.trgRecycleClick = function(event){
//	mainActivity.recycleTask();
//};

mainActivity.gridRowDblClick = function(event){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/metrodetection/detection_Process_Related/process/detectionProcessQuery/detectionProcessQueryDetail.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&operator="
			+ operator
			+ "&id=" + event.rowId;
//			alert(event.rowId);
	justep.Portal.openWindow("检测流程查询详细", url);

};

mainActivity.grid_sNameRender = function(event){
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openBuyApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
};
function openBuyApplyDetail(id) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/metrodetection/detection_Process_Related/process/detectionProcessQuery/detectionProcessQueryDetail.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&operator="
			+ operator
			+ "&id=" + id;
	justep.Portal.openWindow("检测流程查询详细", url);
}

mainActivity.grid_sESField05Render = function(event){
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openBuyApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;	
};

mainActivity.gridSelect1Closeup = function(event){
	var dFilter = justep.xbl("custom_filter");
	var main = justep.xbl("main");
	var status = dFilter.getValue("status");
	var status1 =  new Array();
	status1 = status.split(",");
//	alert(status1.length);
	if(status1.length==1){
	    if(status1[0]=='处理中'){
	    	main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理')");
	    	main.refreshData();
	    } else {
	    	main.setFilter("filter1", "sStatusName='"+status+"'");
	    	main.refreshData();
	    }
	}
	if(status1.length==2){
//		alert(status1[0]+","+status1[1]);
		if(status1[0]=='处理中'){
	    	main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[1]+"')");
	    	main.refreshData();
	    } if (status1[1]=='处理中'){
	    	main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[0]+"')");
	    	main.refreshData();
	    } if (status1[0]!='处理中' && status1[1]!='处理中') {
//	        alert(status1[0]+","+status1[1]+",,,");
	    	main.setFilter("filter1", "sStatusName in('"+status1[0]+"','"+status1[1]+"')");
	    	main.refreshData();
	    }
	} 
	if(status1.length==4){
		main.setFilter("filter1", "1=1");
		main.refreshData();
	}
	if(status1.length==3){
		if(status1[0]=='处理中'){
			main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[1]+"','"+status1[2]+"')");
			main.refreshData();
		}
		if(status1[1]=='处理中'){
			main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[0]+"','"+status1[2]+"')");
			main.refreshData();
		}
		if(status1[2]=='处理中'){
			main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[1]+"','"+status1[0]+"')");
			main.refreshData();
		} 
        if(status1[0]!='处理中' && status1[1]!='处理中' && status1[2]!='处理中') {
			main.setFilter("filter1", "sStatusName in ('"+status1[0]+"','"+status1[1]+"','"+status1[2]+"')");
			main.refreshData();
		}
	}
};

mainActivity.gridSelect2Closeup = function(event){
	var dFilter = justep.xbl("custom_filter");
	var org = dFilter.getValue("org");
	//alert(org);
	var main = justep.xbl("main");
	var currentPsId = justep.Context.getCurrentPersonID();
	if(org == 0){
//		alert("全部");
		main.setFilter("filter2","");
		main.refreshData();
	}else if(org ==1){
//		alert(currentPsId);
		main.setFilter("filter2", "SA_Task.sCreatorPersonID = '"+currentPsId+"'");
		main.refreshData();
	}
	
};
