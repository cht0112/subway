var detectionProcessQueryDetail = {};

detectionProcessQueryDetail.tabProcessChartSelect = function(event){
	debugger;
	load_part("vProcessChart");
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "SA_Task.sData1='"+justep.Context.getProcessData1()+"' AND SA_Task.sParent is null AND SA_Task.sTypeName='检测流程'");
	mainData.refreshData();
	var pi = mainData.getValue("sFlowID");
	justep.xbl('processChart').loadByPI(pi);
};


detectionProcessQueryDetail.gridMainRowDblClick = function(event){	 
	  var tabs = justep.xbl("tabs").tabbar;
	  tabs.setTabActive("tabDetail");
};

detectionProcessQueryDetail.model1ModelConstructDone = function(event){
	var testApplicationData = justep.xbl("testApplicationData");
	testApplicationData.setFilter("testApplicationDataFilter","TEST_APPLICATION_INFO ="+parseInt(justep.Context.getProcessData1()));
	testApplicationData.refreshData();
};

var flag = true;
detectionProcessQueryDetail.trigger1Click = function(event){
	var data = justep.xbl('dataMain');
	data.setFilter("filter0", "SA_Task.sData1='"+justep.Context.getProcessData1()+"' AND SA_Task.sParent is null AND SA_Task.sTypeName='检测流程'");
	data.refreshData();
	var sFlowID = data.getCurrentID();
	if(flag){
		load_part("view2");
		$('#view2').css('display','block');
		$('#view2').css('border-color','#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0');
		$('#view2').css('border-style','double double double double');
		$('#view2').css('border-width','1px 1px 1px 1px');
		
		var report = justep.xbl("report1");
		var reportData = justep.xbl("reportData");
		reportData.setStringVar("sFlowID", sFlowID);
		report.refresh();
		var cc = justep.Request.convertURL(
			"/UI/metrodetection/detection_Process_Related/process/detectionProcessQuery/images/move_up.gif");
		$("#trigger1").attr("src", cc);
		flag=false;
	}else{
		$('#view2').css('display','none');
		var cc = justep.Request.convertURL(
			"/UI/metrodetection/detection_Process_Related/process/detectionProcessQuery/images/move_down.gif");
		$("#trigger1").attr("src", cc);
		flag=true;
	}
};
