var mainActivity = {};

mainActivity.gotoDetailTab = function() {
	justep.xbl("tablist").tabbar.setTabActive("detail_tab");
};

mainActivity.setImportanceName = function() {
	var importanceData = justep.xbl("task_importance");
	var rowId = importanceData.getCurrentRowId();
	var sName = importanceData.getValue("sName", rowId);
	
	var mainData = justep.xbl("main");
	var rowId1 = mainData.getCurrentRowId();
	mainData.setValue("sImportanceName", sName, rowId1);
};

mainActivity.setDateTimeFilter1 = function() {
	setDateTimeFilter("main", "SA_WorkRecord", "date-selector2");
};


mainActivity.mainmodelLoad = function(event){
	var data = justep.xbl("custom_filter");
	var parameter = justep.Context.getRequestParameter("parameter");
	if ((parameter == 'submited') || (parameter == 'waiting')){
		data.setValue("status", parameter);
	}else{
		data.setValue("status", "submited");
	}
	
	mainActivity.setDateTimeFilter1();
	justep.xbl("main").refreshData();
};
mainActivity.mainValueChanged = function(event){
	var fieldName = event.column;
	if (fieldName == "sLastModifyTime"){
		return;
	}
	
	var nowDateTime = justep.System.datetime() || new Date();
	var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT);

	var mainData = justep.xbl("main");
	var rowId = mainData.getCurrentRowId();
	mainData.setValue("sLastModifyTime", nowDateTimeStr, rowId);
};
mainActivity.mainRefreshCreateParam = function(event){
	onRefreshCreateParam(event);	
};
mainActivity.image1Click = function(event){
	justep.xbl("main").newData();
	mainActivity.gotoDetailTab();
};
mainActivity.dateSelectorChanged = function(event){
	mainActivity.setDateTimeFilter1();	
};
mainActivity.input1Change = function(event){
	setLikeFilter("main", "custom_filter", "SA_WorkRecord");	
};
mainActivity.trigger1Click = function(event){
	justep.xbl("main").refreshData();	
};
mainActivity.mainGridRowDblClick = function(event){
	mainActivity.gotoDetailTab();
};
mainActivity.TaskImportanceCloseup = function(event){
	mainActivity.setImportanceName();
};
mainActivity.detailTabSelect = function(event){
	load_part("detail_form");

	setTimeout(function(){
		var data = justep.xbl("main");
		if (data.getCount()>0){
			var name = justep.xbl("TaskName");
			if (name && name.input){
				name.input.focus();
				
			}	
		}
	}, 1);
	
	
};

mainActivity.trigger4Click = function(event){
	mainActivity.gotoDetailTab();	
};

mainActivity.btn_findClick = function(event){
	justep.xbl("bizDataFilterPattern1").show("main", "btn_find");
};
