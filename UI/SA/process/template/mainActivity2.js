var mainActivity2 = {};


mainActivity2.allowModify = function() {
	var result = false;
	var data = justep.xbl("main");
	var rowId = data.getRowId();
	if (rowId != null && rowId != undefined && rowId != ""){
		var creatorID = data.getValue("sCreatorID");
		if (creatorID == justep.Context.getCurrentPersonID()){
			result = true;
		}
	}
	return result;
};

mainActivity2.insertItem1Click = function(event){
	justep.xbl("selectProcessDialog").open();	
};

mainActivity2.modifyTemplateClick = function(event){
	var id = justep.xbl("main").getCurrentID(); 
	var data = {"id": id};
	justep.xbl("detailDlg").open(data);
};

/**********************************************************************************
对话框入参格式
	{
		"filter": 					过滤条件									string			
		"rootFilter": 				根过滤条件 								string			
		"manageCodes": 				管理权限									string			
		"orgKinds":					可以选择的组织单元类型（逗号分隔）			string			
		"includeDisabledOrg":		是否包含禁用的组织单元 					boolean			
		"cascade":					默认是否级联选择							boolean
		"selected": 				已选择的组织(SA_OPOrg)，sID或sFID数组 	string[]			
	}
***********************************************************************************/
mainActivity2.toOrgTriggerClick = function(event){
	var selected = [];
	var data = justep.xbl("resourceControl");
	
	for (var i=0; i< data.getCount(); i++){
		var rowID = data.getID(i);
		selected[selected.length] = data.getValue("sOrgFID", rowID);
	}

	justep.xbl("orgDialog").open({"rootFilter" : "SA_OPOrg.sParent is null",
		"filter" : "",
		"manageCodes" : "",
		"includeDisabledOrg": false,
		"cascade" : false,
		"selected": selected
	});
};

mainActivity2.trigger1Click = function(event){
	mainActivity2.searchTemplate();
};

mainActivity2.searchTemplate = function(){
	var searchText = document.getElementById("inputSearch").value;
	if (searchText != null && searchText != undefined && searchText != ""){
		searchText = "(SA_ProcessTemplate.sName like '%" + searchText +  "%' or " +
					"SA_ProcessTemplate.sProcessName like '%" + searchText +  "%')";
	}else{
		searchText = "";
	}
	
	var data = justep.xbl("main");
	data.setFilter("searchFilter", searchText);
	data.refreshData();
};

mainActivity2.searchResource = function(){
	var searchText = document.getElementById("inputSearch3").value;
	if (searchText != null && searchText != undefined && searchText != ""){
		searchText = "SA_ResourceControl.sOrgFName like '%" + searchText +  "%'";
					
	}else{
		searchText = "";
	}
	
	var data = justep.xbl("resourceControl");
	data.setFilter("searchFilter", searchText);
	data.refreshData();
};


mainActivity2.grid1RowDblClick = function(event){
	var id = justep.xbl("main").getCurrentID(); 
	var data = {"id": id};
	justep.xbl("detailDlg").open(data);
};

mainActivity2.model1ModelConstructDone = function(event){
	
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
mainActivity2.windowDialog2Receive = function(event){
	var data = {"sProcess":event.data.process, "sProcessName":event.data.label}; 
	setTimeout(function(){justep.xbl("detailDlg").open(data, "第二步：编辑流程模板");}, 1);
	
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
mainActivity2.detailDlgReceive = function(event){
	justep.xbl("main").refreshData();
};

mainActivity2.inputSearchKeydown = function(event){
	mainActivity2.searchTemplate();
};

mainActivity2.inputSearch3Keydown = function(event){
	mainActivity2.searchResource();
};

mainActivity2.trigger10Click = function(event){
	mainActivity2.searchResource();
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
mainActivity2.orgDialogReceive = function(event){
	if (event.data && event.data.length){
		var main = justep.xbl("main");
		var template = main.getCurrentID();
		var process = main.getValue("sProcess");
		var processName = main.getValue("sProcessName");
	
		var param = new justep.Request.ActionParam();
		param.setString("template", template);
		param.setString("process", process);
		param.setString("processName", processName);
		var ids = new justep.Request.ListParam();
		var names = new justep.Request.ListParam();
		var fids = new justep.Request.ListParam();
		var fnames = new justep.Request.ListParam();
		for (var i=0; i<event.data.length; i++){
			var cur = event.data[i];
			if (cur.sOrgKindID=="psm"){
				ids.add(new justep.Request.SimpleParam(cur.sPersonID,
						justep.XML.Namespaces.XMLSCHEMA_STRING));
			}else{
				ids.add(new justep.Request.SimpleParam(cur.rowid,
						justep.XML.Namespaces.XMLSCHEMA_STRING));
			}
			names.add(new justep.Request.SimpleParam(cur.sName,
				justep.XML.Namespaces.XMLSCHEMA_STRING));
			fids.add(new justep.Request.SimpleParam(cur.sFID,
				justep.XML.Namespaces.XMLSCHEMA_STRING));
			fnames.add(new justep.Request.SimpleParam(cur.sFName,
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		}
		param.setList("orgIDs", ids);
		param.setList("orgNames", names);
		param.setList("orgFIDs", fids);
		param.setList("orgFNames", fnames);
		
	
	justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "assignTemplatePermissionAction",
			param, null, function(callbackData) {
				if (callbackData.state) {
					alert("分配模板成功。");
					justep.xbl("resourceControl").refreshData();
				} else{
					throw new Error(justep.Request.getServerError(callbackData));
				}
					
			});

	}
};

mainActivity2.deleteTemplateClick = function(event){
	var main = justep.xbl("main");
	var ids = new justep.Request.MapParam();
	var processes = new justep.Request.MapParam();
	
	var selected = false;
	for (var i=0; i<main.getCount(); i++){
		var id = main.getID(i);
		if (main.getValue("selected", id) == 1){
			selected = true;
			var version = main.getValue("version", id);
			ids.put(id, new justep.Request.SimpleParam(version,
				justep.XML.Namespaces.XMLSCHEMA_INTEGER));
			
			var process = main.getValue("sProcess", id);
			processes.put(process, "");
		}
	}

	if (!selected){
		alert("请勾选要删除的模板！");
	}else{
		if (confirm("警告：模板删除后不可恢复！\n\r\n\r确实要删除当前勾选的模板吗？")) {
			var params = new justep.Request.ActionParam();
			params.setMap("ids", ids);
			params.setMap("processes", processes);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
					justep.Context.getCurrentActivity(), "deleteTemplateAction",
					params, null, function(callbackData) {
						if (callbackData.state) {
							alert("删除模板成功。");
							justep.xbl("main").refreshData();
						} else
							throw new Error(justep.Request.getServerError(callbackData));
					});
		}
	}
};

mainActivity2.deleteTemplatePermissionClick = function(event){
	var control = justep.xbl("resourceControl");
	var ids = new justep.Request.MapParam();
	var hasSelected = false;
	for (var i=0; i<control.getCount(); i++){
		var id = control.getID(i);
		if (control.getValue("selected", id) == 1){
			hasSelected = true;
			var version = control.getValue("version", id);
			ids.put(id, new justep.Request.SimpleParam(version,
				justep.XML.Namespaces.XMLSCHEMA_INTEGER));
		}
	}
	
	
	
	if (!hasSelected){
		alert("请勾选要删除的模板权限！");
	}else{
		if (confirm("警告：模板权限删除后不可恢复！\n\r\n\r确实要删除当前勾选的模板权限吗？")) {
			var params = new justep.Request.ActionParam();
			params.setMap("ids", ids);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
					justep.Context.getCurrentActivity(), "deleteTemplatePermissionAction",
					params, null, function(callbackData) {
						if (callbackData.state) {
							alert("删除模板权限成功。");
							justep.xbl("resourceControl").refreshData();
						} else
							throw new Error(justep.Request.getServerError(callbackData));
					});
		}
	}
};



mainActivity2.grid1_sValidStateRender = function(event){
	if (event.value == 1){
		return "可用";
	}else{
		return "不可用";
	}
};

mainActivity2.enabledTemplateClick = function(event){
	var main = justep.xbl("main");
	var ids = new justep.Request.MapParam();
	var processes = new justep.Request.MapParam();
	var selected = false;
	for (var i=0; i<main.getCount(); i++){
		var id = main.getID(i);
		if ((main.getValue("selected", id) == 1)){
			selected = true;
			var version = main.getValue("version", id);
			ids.put(id, new justep.Request.SimpleParam(version,
				justep.XML.Namespaces.XMLSCHEMA_INTEGER));
			if  (main.getValue("sValidState", id) == 0){
				var process = main.getValue("sProcess", id);
				processes.put(process, "");
			}
			
		}
	}

	if (!selected){
		alert("请勾选要启用的模板！");
	}else{
		if (confirm("确实要启用当前勾选的模板吗？")) {
			var params = new justep.Request.ActionParam();
			params.setMap("ids", ids);
			params.setMap("processes", processes);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
					justep.Context.getCurrentActivity(), "enabledTemplateAction",
					params, null, function(callbackData) {
						if (callbackData.state) {
							alert("启用模板成功。");
							justep.xbl("main").refreshData();
						} else
							throw new Error(justep.Request.getServerError(callbackData));
					});
		}
	}
};

mainActivity2.disabledTemplateClick = function(event){
	var main = justep.xbl("main");
	var ids = new justep.Request.MapParam();
	var processes = new justep.Request.MapParam();
	var selected = false;
	for (var i=0; i<main.getCount(); i++){
		var id = main.getID(i);
		if ((main.getValue("selected", id) == 1)){
			selected = true;
			var version = main.getValue("version", id);
			ids.put(id, new justep.Request.SimpleParam(version,
				justep.XML.Namespaces.XMLSCHEMA_INTEGER));
			if (main.getValue("sValidState", id) == 1){
				var process = main.getValue("sProcess", id);
				processes.put(process, "");
			}
			
		}
	}
	if (!selected){
		alert("请勾选要禁用的模板！");
	}else{
		if (confirm("确实要禁用勾选的模板吗？")) {
			var params = new justep.Request.ActionParam();
			params.setMap("ids", ids);
			params.setMap("processes", processes);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
					justep.Context.getCurrentActivity(), "disabledTemplateAction",
					params, null, function(callbackData) {
						if (callbackData.state) {
							alert("禁用模板成功。");
							justep.xbl("main").refreshData();
						} else
							throw new Error(justep.Request.getServerError(callbackData));
					});
		}
	}
};
