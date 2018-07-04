var detectionProcessQueryDetail = {};

detectionProcessQueryDetail.tabProcessChartSelect = function(event){	
	load_part("vProcessChart");
	var mainData = justep.xbl("dataMain");
	var pi = mainData.getValue("sFlowID");
	justep.xbl('processChart').loadByPI(pi);
};


detectionProcessQueryDetail.gridMainRowDblClick = function(event){	 
	  var tabs = justep.xbl("tabs").tabbar;
	  tabs.setTabActive("tabDetail");
};

detectionProcessQueryDetail.model1ModelConstructDone = function(event){
	//debugger;
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dataMain');
	var testApplicationData = justep.xbl("testApplicationData");
	if (operator == "view") {
		data.filters.setFilter("buyApplyFilter", "SA_Task='" + id + "'");
		data.refreshData();
		var processData1 = data.getValue("sData1", data.getCurrentID());
		testApplicationData.setFilter("testApplicationDataFilter","TEST_APPLICATION_INFO ="+processData1);
		testApplicationData.refreshData();
//		alert(testApplicationData.getCount());
//		alert(data.getCount());
	}	
};

var flag = true;
detectionProcessQueryDetail.trigger1Click = function(event){
//debugger;
	var operator = justep.Request.URLParams.operator;
	var id = justep.Request.URLParams.id;
	var data = justep.xbl('dataMain');
	var testApplicationData = justep.xbl("testApplicationData");
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
			reportData.setStringVar("sFlowID", sFlowID);
			report.refresh();
		}
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

detectionProcessQueryDetail.trigger2Click = function(event){
	debugger;
	//alert(33);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var paramForSave = new justep.Request.ActionParam();
	var pm = new justep.Request.MapParam();
	var data = justep.xbl('dataMain');
	var i = data.getValue("sData1", data.getCurrentID());
	pm.put("applicationNo",new justep.Request.SimpleParam(i,justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	paramForSave.setMap("paramMap", pm);
	var action = justep.Request.sendBizRequest(process, activity, "exportWordAction",paramForSave, null, null, null, null, null);
	var ui = justep.Request.transform(justep.Request.getData(action.responseXML));
	debugger;
	if(null!=ui){
		var elemIF = document.createElement("iframe");
		var url = window.location.protocol + "//" + window.location.host + justep.Request.convertURL(ui,true);
		//var urlSolid = window.location.protocol + "//" + window.location.host+"/F:/X5.2.3/model/UI/projectPlan/"+ui;
		
		elemIF.src = url;
//		document.body.appendChild(elemIF); 
		window.open(elemIF.src);
		//window.location.reload();
	}
};
