var defectBugAnalysis = {};

defectBugAnalysis.gridSelect1Closeup = function(event){
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

defectBugAnalysis.gridSelect2Dropdown = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
//	alert(projectId);
	if(projectId == '' || projectId == null){
		alert("请先选择项目！");
		var productData = justep.xbl("productData");
		productData.setFilter("filter0","1=0");
		productData.refreshData();
	}else{
		var productData = justep.xbl("productData11");
		productData.setFilter("filter0","DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectId);
		productData.refreshData();	
	}	
};

defectBugAnalysis.trigger1Click = function(event){
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
		load_part("view2");
		$('#view2').css('display','block');
		var report = justep.xbl("chart1");
		var report1 = justep.xbl("ds2");
		report1.setIntegerVar("productId", productId);
		report.refresh();		
	}	
};

defectBugAnalysis.gridSelect4Dropdown = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
//	alert(projectId);
	if(projectId == '' || projectId == null){
		alert("请先选择项目！");
		var productData = justep.xbl("productData1");
		productData.setFilter("filter0","1=0");
		productData.refreshData();
	}else{
//	alert("aaa");
		var productData = justep.xbl("productData1");
		productData.setFilter("filter0","DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectId);
		productData.refreshData();	
//		alert(productData.getCount());
	}	
};

defectBugAnalysis.trigger2Click = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
	var productId = cData.getValue("productID");
	if(productId != ''&& productId != null){
//		alert(productId);
		load_part("view15");
		$('#view15').css('display','block');
		var report = justep.xbl("report3");
		var report1 = justep.xbl("ds11");
		report1.setIntegerVar("productId", productId);
		report.refresh();
		load_part("view16");
		$('#view16').css('display','block');
		var report = justep.xbl("chart5");
		var report1 = justep.xbl("ds22");
		report1.setIntegerVar("productId", productId);
		report.refresh();
	}		
};

defectBugAnalysis.gridSelect5Closeup = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
//	alert(projectId);
	if(projectId != '' &&projectId != null){
		var productData = justep.xbl("productData11");
		productData.setFilter("filter0","DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectId);
		productData.refreshData();
		var product = productData.getCurrentID();
		var productName = productData.getValue("PRODUCT_NAME",product);
//		alert(productName);
		cData.setValue("productID", product);
		cData.setValue("productName", productName);
	}		
};

defectBugAnalysis.gridSelect6Dropdown = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
//	alert(projectId);
	if(projectId == '' || projectId == null){
		alert("请先选择项目！");
		var productData = justep.xbl("productData11");
		productData.setFilter("filter0","1=0");
		productData.refreshData();
	}else{
		var productData = justep.xbl("productData11");
		productData.setFilter("filter0","DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectId);
		productData.refreshData();	
	}
};

defectBugAnalysis.trigger3Click = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
	var productId = cData.getValue("productID");
	if(productId != ''&& productId != null){
//		alert(productId);
		load_part("view55");
		$('#view55').css('display','block');
		var report = justep.xbl("report4");
		var report1 = justep.xbl("ds111");
		report1.setIntegerVar("productId", productId);
		report.refresh();
		load_part("view23");
		$('#view23').css('display','block');
		var report = justep.xbl("chart16");
		var report1 = justep.xbl("ds222");
		report1.setIntegerVar("productId", productId);
		report.refresh();
	}	
};

defectBugAnalysis.gridSelect3Closeup = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
//	alert(projectId);
	if(projectId != '' &&projectId != null){
		var productData = justep.xbl("productData1");
		productData.setFilter("filter0","DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID="+projectId);
		productData.refreshData();
		var product = productData.getCurrentID();
		var productName = productData.getValue("PRODUCT_NAME",product);
//		alert(productName);
		cData.setValue("productID", product);
		cData.setValue("productName", productName);
	}	
};

defectBugAnalysis.tabPage2Select = function(event){
	var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
	var productId = cData.getValue("productID");
		if(productId != ''&& productId != null){
//		alert(productId);
		load_part("view15");
		$('#view15').css('display','block');
		var report = justep.xbl("report3");
		var report1 = justep.xbl("ds11");
		report1.setIntegerVar("productId", productId);
		report.refresh();
		load_part("view16");
		$('#view16').css('display','block');
		var report = justep.xbl("chart5");
		var report1 = justep.xbl("ds22");
		report1.setIntegerVar("productId", productId);
		report.refresh();
	}	
};

defectBugAnalysis.tabPage3Select = function(event){
		var cData = justep.xbl("cData");
	var projectId = cData.getValue("projectID");
	var productId = cData.getValue("productID");
	if(productId != ''&& productId != null){
//		alert(productId);
		load_part("view55");
		$('#view55').css('display','block');
		var report = justep.xbl("report4");
		var report1 = justep.xbl("ds111");
		report1.setIntegerVar("productId", productId);
		report.refresh();
		load_part("view23");
		$('#view23').css('display','block');
		var report = justep.xbl("chart16");
		var report1 = justep.xbl("ds222");
		report1.setIntegerVar("productId", productId);
		report.refresh();
	}	
};

defectBugAnalysis.tabPage1Select = function(event){
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
		load_part("view2");
		$('#view2').css('display','block');
		var report = justep.xbl("chart1");
		var report1 = justep.xbl("ds2");
		report1.setIntegerVar("productId", productId);
		report.refresh();		
	}
};
