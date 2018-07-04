var mainActivity11 = {};

mainActivity11.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity11.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};