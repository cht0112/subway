var roleDetail = {};

roleDetail._inputParams = {};
roleDetail._defaultInputParams = {
	openMode : null,
	id : null,
	roleKind : null 
};

roleDetail.receiverReceive = function(event) {
	for (o in roleDetail._defaultInputParams)
		roleDetail._inputParams[o] = roleDetail._defaultInputParams[o];
	
	roleDetail._inputParams.openMode = event.data.openMode;
	if (event.data.id)
		roleDetail._inputParams.id = event.data.id;
	if (event.data.roleKind)
		roleDetail._inputParams.roleKind = event.data.roleKind;

	var dRole = justep.xbl("dRole");
	var dParentRole = justep.xbl("dParentRole");
	if (roleDetail._inputParams.openMode == "new") {
		dRole.setFilter("idFilter", "1=0");
		dRole.refreshData();
		dRole.newData();
		dRole.setValue("sRoleKind", roleDetail._inputParams.roleKind);

		dParentRole.setFilter("idFilter", "1=0");
		dParentRole.refreshData();
	} else {
		dRole.setFilter("idFilter", "SA_OPRole = '" + roleDetail._inputParams.id + "'");
		dRole.refreshData();

		dParentRole.setFilter("idFilter", "SA_OPParentRole.sRoleID = '" + roleDetail._inputParams.id + "'");
		dParentRole.refreshData();
	}
};

roleDetail.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

roleDetail.btnOKClick = function(event) {
	xforms.blur(true);
	var dRole = justep.xbl("dRole");
	dRole.setValue("sParentRolesNames", new Date());
	if (dRole.saveData()) {
		roleDetail._inputParams.id = dRole.getRowId();
		justep.windowDialogReceiver.windowEnsure(roleDetail._inputParams);
	}
};
roleDetail.dRoleSaveCreateParam = function(event) {
	var parentIDs = new justep.Request.ListParam();
	var dParentRole = justep.xbl("dParentRole");
	for ( var j = 0; j < dParentRole.getCount(); j++) {
		var parentID = dParentRole.getValue("sParentRoleID", dParentRole.getRowId(j));
		parentIDs.add(new justep.Request.SimpleParam(parentID, justep.XML.Namespaces.XMLSCHEMA_STRING));
	}
	event.param.setList("parentIDs", parentIDs);
};

roleDetail.btnAppendParentsClick = function(event) {
	var dRole = justep.xbl("dRole");
	var filter = "(SA_OPRole <> '" + dRole.getCurrentRowId() + "')";
	var roleKind = dRole.getValue("sRoleKind");
	if (roleKind == "data") 
		filter = filter + " and (SA_OPRole.sRoleKind <> 'fun')";
	justep.xbl("wdSelectRoles").open({
		"filter" : filter
	});
};
roleDetail.wdSelectRolesReceive = function(event) {
	var dRole = justep.xbl("dRole");
	var dParentRole = justep.xbl("dParentRole");
	for ( var j = 0; j < event.data.getRowsNum(); j++) {
		var parentID = event.data.getRowId(j);
		var parentName = event.data.getValueByName("sName", j);
		if (dParentRole.locate([parentID], ["sParentRoleID"]).length == 0) {
			dParentRole.newData(dParentRole.getCount());
			dParentRole.setValue("sRoleID", dRole.getCurrentRowId());
			dParentRole.setValue("sParentRoleID", parentID);
			dParentRole.setValue("parentName", parentName);
		}
	}
};
roleDetail.btnDeleteParentsClick = function(event){
	var gridParentRole = justep.xbl("gridParentRole").grid;
	var checkColIndex = gridParentRole.getColIndexById("calcCheckBox");
	var selectedRowIDs = gridParentRole.getCheckedRows(checkColIndex);
	selectedRowIDs = selectedRowIDs ? selectedRowIDs.split(",") : [];
	if (selectedRowIDs.length == 0) {
		justep.OpmUtils.showWarning("请勾选要删除的数据！");
		return; 
	}
	var dParentRole = justep.xbl("dParentRole");
	dParentRole.deleteData(selectedRowIDs);
};
