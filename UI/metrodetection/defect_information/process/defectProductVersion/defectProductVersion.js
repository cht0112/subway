var defectProductVersion = {};

defectProductVersion.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var dataMain = justep.xbl("dataMain");
	var productD = justep.xbl("productD");
	var projectID = dataMain.getValue("PROJECT_ID");
	var productID = dataMain.getValue("PRODUCT_ID");
	var productName = dataMain.getValue("PRODUCT_NAME");
	productD.setFilter("filter0", "DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectID);
	productD.refreshData();
	dataMain.setValue("PRODUCT_ID",productID);
	dataMain.setValue("PRODUCT_NAME",productName);
};

defectProductVersion.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	var productD = justep.xbl("productD");
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var oper = justep.Context.getOperatorName();
	//alert(oper);
	//alert(justep.xbl("hrBaseinforD").getCount());
	justep.xbl("hrBaseinforD").setFilter("filter0", "trim(HR_BASE_INFO.oPERATORNAME)='"+oper+"'");
	justep.xbl("hrBaseinforD").refreshData();
	var operId = justep.xbl("hrBaseinforD").getCurrentId();
	//alert(operId);
	justep.xbl("dataMain").setValue("BUILD_PERSON", operId);	
	justep.xbl("productD").setFilter("filter1", "1=0");
	justep.xbl("productD").refreshData();
};

defectProductVersion.removeDMClick = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
			}
			if (deleteIDs != "") {
				data.deleteData(deleteIDs);
				data.saveData();
			}
		}
	}
};

defectProductVersion.newClick = function(event){
	justep.xbl("dataMain").newData();
	var productD = justep.xbl("productD");
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var oper = justep.Context.getOperatorName();
	justep.xbl("hrBaseinforD").setFilter("filter0", "trim(HR_BASE_INFO.oPERATORNAME)='"+oper+"'");
	justep.xbl("hrBaseinforD").refreshData();
	var operId = justep.xbl("hrBaseinforD").getCurrentId();
	//alert(operId);
	justep.xbl("dataMain").setValue("BUILD_PERSON", operId);	
	justep.xbl("productD").setFilter("filter1", "1=0");
	justep.xbl("productD").refreshData();
};

defectProductVersion.gridSelect2Closeup = function(event){
	debugger;
	var dataMain = justep.xbl("dataMain");
	var productD = justep.xbl("productD");
	var projectId = dataMain.getValue("PROJECT_ID");
	//var projectId = event.value;
	if(projectId != null && projectId != ""){
		productD.setFilter("filter1","1=1");
	    productD.refreshData();
		productD.setFilter("filter1", "DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectId);
		productD.refreshData();
//		alert(productD.getCount());
		dataMain.setValue("PRODUCT_ID", productD.getRowId(0));
		dataMain.setValue("PRODUCT_NAME",productD.getValue("PRODUCT_NAME",productD.getRowId(0)));
	}
	//alert(projectId);
};

defectProductVersion.mdDefaultLoad = function(event){
//	var oper = justep.Context.getOperatorName();
//	justep.xbl("hrBaseinforD").setFilter("filter4", "trim(HR_BASE_INFO.oPERATORNAME)='"+oper+"'");
//	justep.xbl("hrBaseinforD").refreshData();
//	var operId = justep.xbl("hrBaseinforD").getCurrentId();
//	if(operId != null && operId!= ""){
//		var dataMain = justep.xbl("dataMain");
//		dataMain.setFilter("filter3","trim(DEFECT_TRACK_VERSION_INFO.BUILD_PERSON)='"+operId+"'");
//		dataMain.refreshData();
//	}
	
};

defectProductVersion.tabListSelect = function(event){
	var data = justep.xbl('dataMain');
	data.refreshData();
};
