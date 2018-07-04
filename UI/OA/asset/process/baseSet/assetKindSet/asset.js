var asset = {};

var id = "";
var fCode = "";
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
asset.windowReceiver1Receive = function(event){
	var tool_type_code = justep.xbl("assetTypeD");
	var tool_sort_code=justep.xbl("toolSortD");
	var tool_category_code = justep.xbl("toolCategoryD");
	
	
	id = event.data.id;
	fCode = event.data.fCode;
	//alert(id+"==="+fCode);
	var toolSortTypeCategoryCD = justep.xbl("toolSortTypeCategoryCD");
	toolSortTypeCategoryCD.newData();
	if(fCode != null && fCode != ""){
		var toolCategoryRe = parseInt(fCode.substring(0, 4));
		var toolSortRe = parseInt(fCode.substring(4, 6));
		var toolTypeRe = parseInt(fCode.substring(6));
		//alert(toolCategoryRe+"=="+toolSortRe+"=="+toolTypeRe);
		toolSortTypeCategoryCD.setValue("toolCategory", toolCategoryRe);
		toolSortTypeCategoryCD.setValue("toolSort", toolSortRe);
		toolSortTypeCategoryCD.setValue("toolType", toolTypeRe);
	}
};

asset.trigger1Click = function(event){
	var cData = justep.xbl("toolSortTypeCategoryCD");
	if(cData.getValue("toolCategory") == null || cData.getValue("toolCategory") == "" || cData.getValue("toolCategory").length == 0){
		alert("工具分类不能为空");
		return;
	}
	if(cData.getValue("toolSort") == null || cData.getValue("toolSort") == "" || cData.getValue("toolSort").length == 0){
		alert("工具类型不能为空");
		return;
	}
	if(cData.getValue("toolType") == null || cData.getValue("toolType") == "" || cData.getValue("toolType").length == 0){
		alert("工具名字不能为空");
		return;
	}
	
	debugger;
	var tool_type_code = justep.xbl("assetTypeD");
	var tool_sort_code=justep.xbl("toolSortD");
	var tool_category_code = justep.xbl("toolCategoryD");
	var categoryNum=tool_category_code.getValue("nUMSCODE",tool_category_code.getCurrentID());
	var sortNum=tool_sort_code.getValue("nUMSCODE",tool_sort_code.getCurrentID());
	var typeNum=tool_type_code.getValue("nUMSCODE",tool_type_code.getCurrentID());
	
	var windowReceiver1 = justep.xbl("windowReceiver1");
	//alert(justep.xbl("toolSortTypeCategoryCD").getValue("toolCategory")+"=="+justep.xbl("toolSortTypeCategoryCD").getValue("toolSort")+"=="+justep.xbl("toolSortTypeCategoryCD").getValue("toolType"));
	windowReceiver1.windowEnsure({
		/*"toolCategory":justep.xbl("toolSortTypeCategoryCD").getValue("toolCategory"),
		"toolSort":justep.xbl("toolSortTypeCategoryCD").getValue("toolSort"),
		"toolType":justep.xbl("toolSortTypeCategoryCD").getValue("toolType")});*/
		"toolCategory":categoryNum,
		"toolSort":sortNum,
		"toolType":typeNum});

};

asset.gridSelect2Dropdown = function(event){
	var TOOL_SORT_CODE=justep.xbl("toolSortD");
	var tool_category_code = justep.xbl("toolCategoryD");
	var parId = tool_category_code.getCurrentID();
	if(parId != null && parId != "") {
		TOOL_SORT_CODE.setFilter("filter0", "TOOL_SORT_CODE.pARENTLEV="+parId);
		TOOL_SORT_CODE.refreshData();
		TOOL_SORT_CODE.loadData();
	} else {
		alert("请选择工具分类");
	}
};

asset.gridSelect3Dropdown = function(event){
	var TOOL_SORT_CODE=justep.xbl("toolSortD");
	var parId = TOOL_SORT_CODE.getCurrentID();
	var tool_type_code = justep.xbl("assetTypeD");
	if(parId != null && parId != "") {
		tool_type_code.setFilter("filter0", "TOOL_TYPE_CODE.pARENTLEV="+parId);
		tool_type_code.refreshData();
		tool_type_code.loadData();
	} else {
		alert("请选择工具类别");
		return false;
	}
};
