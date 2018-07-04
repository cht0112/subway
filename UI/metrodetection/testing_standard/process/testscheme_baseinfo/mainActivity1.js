	var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivity.insertNewClick = function(event){
	var jcfaylxxData = justep.xbl("jcfaylxxData");
	jcfaylxxData.newData();
	var dataMain = justep.xbl("dataMain");
	dataMain.getValue("dECTIONBASEDONID");
	//dataMain.setFilter("fiter0", "");
};
