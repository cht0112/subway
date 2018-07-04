var mainActivity = {};

mainActivity.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};