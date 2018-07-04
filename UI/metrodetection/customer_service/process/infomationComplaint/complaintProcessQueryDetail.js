var complaintProcessQueryDetail = {};

complaintProcessQueryDetail.tabProcessChartSelect = function(event){	
	load_part("vProcessChart");
	var mainData = justep.xbl("dataMain");
	var pi = mainData.getValue("sFlowID");
	justep.xbl('processChart').loadByPI(pi);
};


complaintProcessQueryDetail.gridMainRowDblClick = function(event){	 
	  var tabs = justep.xbl("tabs").tabbar;
	  tabs.setTabActive("tabDetail");
};

complaintProcessQueryDetail.model1ModelConstructDone = function(event){
	var complaintData = justep.xbl("complaintData");
	complaintData.setFilter("complaintDataFilter","CUSTOMER_COMPLAINT_INFO ="+parseInt(justep.Context.getProcessData1()));
	complaintData.refreshData();	
};

var flag = true;
complaintProcessQueryDetail.trigger1Click = function(event){
	debugger;
	var data = justep.xbl('dataMain');
	data.setFilter("filter0", "SA_Task.sData1='"+justep.Context.getProcessData1()+"' AND SA_Task.sParent is null AND SA_Task.sTypeName='客户投诉管理'");
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
		reportData.setStringVar("sflowid", sFlowID);
		report.refresh();
		var cc = justep.Request.convertURL(
			"/UI/metrodetection/customer_service/process/complaintProcessQuery/images/move_up.gif");
		$("#trigger1").attr("src", cc);
		flag=false;
	}else{
		$('#view2').css('display','none');
		var cc = justep.Request.convertURL(
			"/UI/metrodetection/customer_service/process/complaintProcessQuery/images/move_down.gif");
		$("#trigger1").attr("src", cc);
		flag=true;
	}
};
