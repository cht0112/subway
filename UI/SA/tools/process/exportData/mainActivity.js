var mainActivity = {};

mainActivity.model1Load = function(event){
	var model = justep.Context.getRequestParameter("model");
	var params = new justep.Request.ActionParam();
	if (!!model){
		params.setString("model", model);
	}
	var xmlHttpRequest = justep.Request.sendBizRequest2({
		action: "getDataModelsAction",
		parameters: params
	});
	if (justep.Request.isSuccess(xmlHttpRequest)){
		var users = justep.Request.getData(xmlHttpRequest.responseXML);
		var data = justep.xbl("modelData");
		data.loadXML(users);
	}
};

mainActivity.gridSelect1Closeup = function(event){
	var selectedData = justep.xbl("selectedData");
	var model = selectedData.getValue("model");
	if (!!model){
		var param = new justep.Request.ActionParam();
		param.setString("model", model);
		var xmlHttpRequest = justep.Request.sendBizRequest2({
			action: "getConceptsInModelAction",
			parameters: param
		});		
		if (justep.Request.isSuccess(xmlHttpRequest)){
			var users = justep.Request.getData(xmlHttpRequest.responseXML);
			var data = justep.xbl("conceptData");
			data.loadXML(users);
		}
	}
};

mainActivity.exportTriggerClick = function(event){
	var selectedData = justep.xbl("selectedData");
	var model = selectedData.getValue("model");
	if (!!model){
		var conceptData = justep.xbl("conceptData");

		var grid = justep.xbl("conceptGrid").grid;
		var checkColIndex = grid.getColIndexById("selected");
		var checkedIDs = grid.getCheckedRows(checkColIndex);
		if (!!checkedIDs){
			var params = new justep.Request.ActionParam();
			params.setString("dataModel", model);
			var concepts = new justep.Request.ListParam();
			params.setList("concepts", concepts);
			
			var msg = "";
			var ids = checkedIDs.split(",");
			for ( var i = 0; i < ids.length; i++) {
				var id = ids[i];
				if (msg != ""){
					msg += ", ";
				}
				msg += conceptData.getValue("name", id);
				concepts.add(conceptData.getValue("name", id));
				
			}	
			
			var xmlHttpRequest = justep.Request.sendBizRequest2({
				action: "exportDataFromDBAction",
				parameters: params
			});		
			if (justep.Request.isSuccess(xmlHttpRequest)){
				justep.OpmUtils.showSuccess("根据概念" + msg + "将数据库的数据出成KSQL成功！");
			}			
			
		}else{
			justep.OpmUtils.showError("请选择导出的概念");
		}
	}else{
		justep.OpmUtils.showError("请选择导出的数据模块");
	}
};

mainActivity.filterTriggerClick = function(event){
	
};
