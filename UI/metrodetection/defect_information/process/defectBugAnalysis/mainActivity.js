var mainActivity = {};

mainActivity.gridSelect1Closeup = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
//	alert(projectId);
	if(projectId != '' &&projectId != null){
		var productData = justep.xbl("productData");
		productData.setFilter("filter0","DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectId);
		productData.refreshData();
		var product = productData.getCurrentID();
		var productName = productData.getValue("PRODUCT_NAME",product);
//		alert(productName);
		cData.setValue("productID", product);
		cData.setValue("productName", productName);
	}	
};

mainActivity.gridSelect2Dropdown = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
//	alert(projectId);
	if(projectId == '' || projectId == null){
		alert("请先选择项目！");
		var productData = justep.xbl("productData");
		productData.setFilter("filter0","1=0");
		productData.refreshData();
		
	}	
};

mainActivity.trigger2Click = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
	var productId = cData.getValue("productID");
	if(productId != ''&& productId != null){
//		alert(productId);
		load_part("view1");
		$('#view1').css('display','block');
		var report = justep.xbl("report1");
		var report1 = justep.xbl("ds1");
		report1.setIntegerVar("productId", productId);
		report.refresh();
//		load_part("view2");
//		$('#view2').css('display','block');
		var report = justep.xbl("chart1");
		var report1 = justep.xbl("ds2");
		report1.setIntegerVar("productId", productId);
		report.refresh();	
	}
 };
