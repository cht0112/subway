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

mainActivity.insertClick = function(event){
			justep.xbl("dataMain").newData();
			justep.xbl("tabpanel1").setTabActive("tabDetail");
			var dataMain = justep.xbl("dataMain");
			var operId = justep.Context.getOperatorID();
			var orgData = justep.xbl("sysOperData");
			orgData.setFilter("filter1", " SA_OPOrg like '"+operId+"@%'");
			orgData.refreshData();
			var oprScode = orgData.getValue("sCode");
			var hrPerData = justep.xbl("hrPerData");
			hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
			hrPerData.refreshData();
			var perId = hrPerData.getCurrentID();
			dataMain.setValue("SUPERVISION_PERSON",perId);	
};

mainActivity.insertTriggerClick = function(event){
			justep.xbl("dataMain").newData();
			justep.xbl("tabpanel1").setTabActive("tabDetail");
			var dataMain = justep.xbl("dataMain");
			var operId = justep.Context.getOperatorID();
			var orgData = justep.xbl("sysOperData");
			orgData.setFilter("filter1", " SA_OPOrg like '"+operId+"@%'");
			orgData.refreshData();
			var oprScode = orgData.getValue("sCode");
			var hrPerData = justep.xbl("hrPerData");
			hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
			hrPerData.refreshData();
			var perId = hrPerData.getCurrentID();
			dataMain.setValue("SUPERVISION_PERSON",perId);	
};

mainActivity.mdDefaultXBLLoaded = function(event){
//debugger;
		
	$(justep.xbl("RECORD_DATE1").input).bind('keydown',function(evt){evt.preventDefault();});	
	
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	var dataMain = justep.xbl("dataMain");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	//alert(perId);
	dataMain.setValue("RESPONSOR_PERSON",perId);
};

mainActivity.tabListSelect = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("filter2", "1=1");
	dataMain.refreshData();
};
