var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
};

mainActivity.saveClick = function(event){
	var dataMain = justep.xbl("dataMain");
	var dECTIONBASEDONID = dataMain.getValue("dECTIONBASEDONID");
	//var dectionBaseD = justep.xbl("dectionBaseD");
	//dectionBaseD.setFilter("filterDection", "DECTION_BASED_ON_INFO='"+dECTIONBASEDONID+"'");
	//dectionBaseD.refreshData();
	//var innerId = dectionBaseD.getValue("sTANDARDEFILEID");
	//alert(innerId);
	//dataMain.setValue("sTANDARDEFILEID",innerId);
	dataMain.saveData();
	var save = document.getElementById("saveTrigger");
	save.disabled=true;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src",tt);	
	justep.xbl('saveTrigger').setDisabled(true);
	var insert = document.getElementById("insertId");
	insert.disabled=false;
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insert").attr("src",t);
	justep.xbl('insertId').setDisabled(false);
};

mainActivity.insertClick = function(event){
 	var data = justep.xbl('dataMain');
 	data.newData();
 	var save = document.getElementById("saveTrigger");
	save.disabled=false;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger").attr("src",tt);
	justep.xbl('saveTrigger').setDisabled(false);	
	var insert = document.getElementById("insertId");
	insert.disabled=true;
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insert").attr("src",t);
	justep.xbl('insertId').setDisabled(true);
	//justep.xbl("dataMain").refreshData();
 	
};

mainActivity.tabDetailSelect = function(event){
	var save = document.getElementById("saveTrigger");
	save.disabled=false;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger").attr("src",tt);	
	justep.xbl('saveTrigger').setDisabled(false);
	var insert = document.getElementById("insertId");
	insert.disabled=true;
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insert").attr("src",t);
	justep.xbl('insertId').setDisabled(true);
};

mainActivity.tabListSelect = function(event){
	justep.xbl("dataMain").refreshData();
};

mainActivity.removeTrigger1Click = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的信息！");
	} else {
		for (var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
		}
	}
};


