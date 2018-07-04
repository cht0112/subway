var listQuery = {};

listQuery.tabProcessChartSelect = function(event){	
	load_part("vProcessChart");
	var control = justep.xbl('processChart');
	var data = justep.xbl('dataMain');
	var rowid = data.getCurrentRowId();
	control.loadByData("${flow-name}",rowid);
};


listQuery.gridMainRowDblClick = function(event){	 
	  var tabs = justep.xbl("tabs").tabbar;
	  tabs.setTabActive("tabDetail");
};
