var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
//	justep.xbl("dataMain").newData();
//			justep.xbl("tabpanel1").setTabActive("tabDetail");
//			var dataMain = justep.xbl("dataMain");
//			var operId = justep.Context.getOperatorID();
//			alert(operId);
//			var orgData = justep.xbl("sysOperData");
//			orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
//			orgData.refreshData();
//			//alert(orgData.getCount());
//			var oprScode = orgData.getValue("sCode");
//			//alert(oprScode);
//			var hrPerData = justep.xbl("hrPerData");
//			hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
//			hrPerData.refreshData();
//			var perId = hrPerData.getCurrentID();
//		//alert(perId);
//			dataMain.setValue("PLAN_PEOPLE",perId); 
};

//mainActivity.insertClick = function(event){
//			justep.xbl("dataMain").newData();
//			justep.xbl("tabpanel1").setTabActive("tabDetail");
//			var dataMain = justep.xbl("dataMain");
//			var operId = justep.Context.getOperatorID();
//			var orgData = justep.xbl("sysOperData");
//			orgData.setFilter("filter1", " SA_OPOrg like '"+operId+"@%'");
//			orgData.refreshData();
//			var oprScode = orgData.getValue("sCode");
//			var hrPerData = justep.xbl("hrPerData");
//			hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
//			hrPerData.refreshData();
//			var perId = hrPerData.getCurrentID();
//			dataMain.setValue("SUPERVISION_PERSON",perId);	
//};
//
//mainActivity.insertTriggerClick = function(event){
//			justep.xbl("dataMain").newData();
//			justep.xbl("tabpanel1").setTabActive("tabDetail");
//			var dataMain = justep.xbl("dataMain");
//			var operId = justep.Context.getOperatorID();
//			var orgData = justep.xbl("sysOperData");
//			orgData.setFilter("filter1", " SA_OPOrg like '"+operId+"@%'");
//			orgData.refreshData();
//			var oprScode = orgData.getValue("sCode");
//			var hrPerData = justep.xbl("hrPerData");
//			hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
//			hrPerData.refreshData();
//			var perId = hrPerData.getCurrentID();
//			dataMain.setValue("SUPERVISION_PERSON",perId);	
//};

mainActivity.mdDefaultXBLLoaded = function(event){
//	debugger;
//	var operId = justep.Context.getOperatorID();
////	alert(operId);
//	var orgData = justep.xbl("sysOperData");
//	var dataMain = justep.xbl("dataMain");
//	var bizData2 = justep.xbl("bizData2");
//	var id = dataMain.getCurrentID();
////	 alert(id);
//	bizData2.setFilter("filter0", "DAILY_SUPERVISION_RECORD.DAILY_SUPERVISION_RECORD ="
//			+ id);
//	bizData2.refreshData();
//	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
//	orgData.refreshData();
//	//alert(orgData.getCount());
//	var oprScode = orgData.getValue("sCode");
//	//alert(oprScode);
//	var hrPerData = justep.xbl("hrPerData");
//	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
//	hrPerData.refreshData();
//	var perId = hrPerData.getCurrentID();
////	alert(perId);
//	var perName = hrPerData.getValue("oPERATORNAME", perId);
//	//alert(perId);
//	bizData2.setValue("RESPONSOR_PERSON",perId, bizData2.getCurrentID());
//	bizData2.setValue("oPERATORNAME1", perName, bizData2.getCurrentID());
//	var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
//	bizData2.setValue("SIGNING_DATE", nowDateTimeStr, bizData2.getCurrentID());
};

mainActivity.saveMore = function(event){
	var bizData2 = justep.xbl("bizData2");
	bizData2.saveData();
	var i = document.getElementById('saveTrigger');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(true);
};

mainActivity.tabDetailSelect = function(event){
//	debugger;
	var operId = justep.Context.getOperatorID();
//	alert(operId);
	var orgData = justep.xbl("sysOperData");
	var dataMain = justep.xbl("dataMain");
	var bizData2 = justep.xbl("bizData2");
	var id = dataMain.getCurrentID();
//	 alert(id);
	bizData2.setFilter("filter0", "DAILY_SUPERVISION_RECORD ="
			+ id);
	bizData2.refreshData();
//	alert(bizData2.getCount());
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
//	alert(perId);
	var perName = hrPerData.getValue("oPERATORNAME", perId);
	//alert(perId);
	bizData2.setValue("RESPONSOR_PERSON",perId, bizData2.getCurrentID());
	bizData2.setValue("oPERATORNAME1", perName, bizData2.getCurrentID());
	var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
	bizData2.setValue("SIGNING_DATE", nowDateTimeStr, bizData2.getCurrentID());
};

mainActivity.tabListSelect = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("filter3", "1=1");
	dataMain.refreshData();
};
