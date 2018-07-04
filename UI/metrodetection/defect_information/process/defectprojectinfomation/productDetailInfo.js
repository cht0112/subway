var productDetailInfo = {};
var projectId="";
var productId="";
var openModel="";
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
productDetailInfo.productWRReceive = function(event){
	debugger;
	openModel=event.data.openModel;
	if(openModel=="new"){
		//alert(event.data.projectId);
		projectId = event.data.projectId;
		var productD = justep.xbl('productD');
		productD.newData();
		productD.setValue("PROJECT_ID", projectId);
	}else if(openModel=="edit"){
		var insertNewDetail =justep.xbl("insertNewDetail");
		insertNewDetail.setDisabled(true);
		productId = event.data.productId;
		var productD = justep.xbl("productD");
		productD.setFilter("filter0", "DEFECT_TRACK_PRODUCT_INFO="+productId);
		productD.refreshData();
	}
	
};


productDetailInfo.insertNewDetail = function(event){
	var productD = justep.xbl("productD");
	productD.newData();
	productD.setValue("PROJECT_ID", projectId);
};
