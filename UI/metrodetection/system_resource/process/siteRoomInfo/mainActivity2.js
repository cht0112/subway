var mainActivity2 = {};

mainActivity2.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity2.newItemClick = function(event){
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};