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
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dataMain');
	var testApplicationData = justep.xbl("complaintData");
	if (operator == "view") {
		data.filters.setFilter("buyApplyFilter", "SA_Task='" + id + "'");
		data.refreshData();
		var processData1 = data.getValue("sData1", data.getCurrentID());
		testApplicationData.setFilter("complaintDataFilter","CHANGE_APPLY_INFO ="+processData1);
		testApplicationData.refreshData();
	}	
};

var flag = true;
complaintProcessQueryDetail.trigger1Click = function(event){
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dataMain');
	var testApplicationData = justep.xbl("complaintData");
	var sFlowID = id;
	if(flag){
		load_part("view2");
		$('#view2').css('display','block');
		$('#view2').css('border-color','#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0');
		$('#view2').css('border-style','double double double double');
		$('#view2').css('border-width','1px 1px 1px 1px');
		if (operator == "view") {	
			var report = justep.xbl("report1");
			var reportData = justep.xbl("reportData");
			reportData.setStringVar("sflowid", sFlowID);
			report.refresh();
		}
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

complaintProcessQueryDetail.model1XBLLoaded = function(event){
	var dataMaster = justep.xbl("complaintData");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
	dataMaster.setValue("APPLY_PERSONPERSON",perId);
	dataMaster.setValue("oPERATORNAME",name);	
	dataMaster.setValue("APPLY_APPROVER",perId);
	dataMaster.setValue("oPERATORNAME1",name);	
	dataMaster.setValue("CHANGE_AUDITOR",perId);
	dataMaster.setValue("oPERATORNAME2",name);
};
