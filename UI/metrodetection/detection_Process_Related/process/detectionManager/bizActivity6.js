var bizActivity6 = {};

bizActivity6.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

bizActivity6.newItemClick = function(event){
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

/**
	name:grid#onInit
	description: 表格初始化时
	@param event 事件属性:<br/>{"source":XFGrid对象,"grid":dhtmlxGrid对象}
*/
bizActivity6.grdMasterInit = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+parseInt(justep.Context.getProcessData1()));
	dataMaster.loadData();
};

bizActivity6.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
};

bizActivity6.grdMaster_iNDEEDRETURNDATERender = function(event){
	var disVal = "<div></div>";
	var curVal = event.value;
	if(curVal == "1970-01-01 00:00:00") {
		return disVal;
	} else if(curVal == "1900-01-01 00:00:00") {
		return disVal;
	}
};
