var mainActivity = {};

function allowOrg(){
	var result = false;
	var data = justep.xbl("main");
	var rowId = data.getRowId();
	if (rowId != null && rowId != undefined && rowId != ""){
		var scope = data.getValue("sScopeID");
		if (scope == "public"){
			result = true;
		}
	}
	return result;
}

function allowModify() {
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


mainActivity.model1ModelConstructDone = function(event){
	var person = justep.Context.getCurrentPersonID();
	var filterText = "(SA_ProcessTemplate.sKindID='template') and ((SA_ProcessTemplate.sScopeID='public') or ( (SA_ProcessTemplate.sScopeID='private') and (SA_ProcessTemplate.sCreatorID ='" + person + "')))";
	var data = justep.xbl("main");
	data.filters.setFilter("_default_filter_", filterText);
	data.refreshData();
};
/*
mainActivity.barItem1Click = function(event){
	justep.xbl("detailDlg").open();
};
*/
function modifyTemplate() {
	if (!allowModify()){
		return;
	}
	
	var data = justep.xbl("main");
	var rowId = data.getRowId();
	var name = data.getValue("sName");
	var process = data.getValue("sProcess");
	var activity = data.getValue("sActivity");
	var content = data.getValue("sContent");
	var scope = data.getValue("sScopeID");
	var content2 = data.getValue("sContent2");
	var type = data.getValue("sTypeID");
	justep.xbl("detailDlg").open({
		"id": rowId,
		"name": name,
		"scope": scope,
		"process": process,
		"activity": activity,
		"content": content,
		"content2": content2,
		"type" : type, 
		"isModify" : true
	});
};
mainActivity.modifyTemplateClick = function(event){
	modifyTemplate();
};

mainActivity.detailDlgReceive = function(event){
	var data = justep.xbl("main");
	var rowId = data.getRowId();
	if (event.data.isNew) {
		var rowCount = data.getCount();
		data.newData(rowCount);
		rowId = data.getRowId(rowCount);
		
	}
	
	data.setValue("sName", event.data.name, rowId);
	data.setValue("sKindID", "template", rowId);
	data.setValue("sScopeID", event.data.scope, rowId);
	data.setValue("sProcess", event.data.process, rowId);
	data.setValue("sProcessName", event.data.processName, rowId);
	data.setValue("sActivity", event.data.activity, rowId);
	data.setValue("sActivityName", event.data.activityName, rowId);
	data.setValue("sContent", event.data.content, rowId);
	data.setValue("sContent2", event.data.content2, rowId);
	data.setValue("sTypeID", event.data.type, rowId);
	data.saveData();
	data.refreshData();
};
mainActivity.grid1RowDblClick = function(event){
	modifyTemplate();
};

mainActivity.imageSearchClick = function(event){
	var searchText = document.getElementById("inputSearch").value;
	if (searchText != null && searchText != undefined && searchText != ""){
		searchText = "((SA_ProcessTemplate.sName like '%" + searchText +  "%' or " +
					"SA_ProcessTemplate.sProcessName like '%" + searchText +  "%' or " + 
					"SA_ProcessTemplate.sActivityName like '%" + searchText +  "%') " +
					"and SA_ProcessTemplate.sKindID='template')";
	}else{
		searchText = "";
	}
	
	var data = justep.xbl("main");
	data.setFilter("searchFilter", searchText);
	data.refreshData();
	
};
mainActivity.inputSearchKeydown = function(event){
	if (event.keyCode == 13){
		mainActivity.imageSearchClick();
	}
};
mainActivity.toOrgTriggerClick = function(event){
	var data = justep.xbl("main");
	var rowId = data.getRowId();
	var src = "/SA/process/template/orgSelect.w?resourceID=" + rowId;
	justep.xbl("windowDialog1").open(null, null, src);
};

mainActivity.insertItem1Click = function(event){
	justep.xbl("detailDlg").open();
};

mainActivity.insertItem2Click = function(event){
	justep.xbl("detailDlg").open({type: "graph"});
};

mainActivity.trigger1Click = function(event){
	mainActivity.imageSearchClick(event);
};
