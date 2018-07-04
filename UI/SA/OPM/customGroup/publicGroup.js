var publicGroup = {};

publicGroup.addOrgResource = function(resourceID, typeID, typeName,	orgUnits) {
	var newOrgs = new justep.Request.MapParam();
	for ( var i = 0; i < orgUnits.length; i++) {
		newOrgs.put(orgUnits[i].fullID, orgUnits[i].fullName);
	}

	var params = new justep.Request.ActionParam();
	params.setString("resourceID", resourceID);
	params.setString("typeID", typeID);
	params.setString("typeName", typeName);
	params.setMap("orgUnits", newOrgs);
	
	justep.Request.sendBizRequest2({
		"contentType" : "json",
		"dataType" : "json",
		"action" : "addOrgResource",
		"parameters" : params
	});
};

publicGroup.removeOrgResource = function(ids) {
	var list = new justep.Request.ListParam();
	for ( var i = 0; i < ids.length; i++) {
		list.add(ids[i]);
	}

	var params = new justep.Request.ActionParam();
	params.setList("ids", list);
	
	justep.Request.sendBizRequest2({
		"contentType" : "json",
		"dataType" : "json",
		"action" : "removeOrgResource",
		"parameters" : params
	});
};

publicGroup.doAddResourceClick = function(dlg) {
	var dCustomGroup = justep.xbl("dCustomGroup");
	if (!dCustomGroup.saveData() || dCustomGroup.getCount() == 0) {
		return;
	}
	
	dlg.open({
		"cascade" : false
	});
};

publicGroup.doDialogReceive = function(event, dResouce, typeID, typeName) {
	var orgUnits = [];
	for (var i = 0; i < event.data.length; i++) {
		orgUnits.push({
			"fullID" : event.data[i].sFID,
			"fullName" : event.data[i].sFName
		});
	}

	var dCustomGroup = justep.xbl("dCustomGroup");
	publicGroup.addOrgResource(dCustomGroup.getCurrentID(), typeID, typeName, orgUnits);
	dResouce.refreshData();
};

publicGroup.doRemoveResouceClick = function(dResouce) {
	var ids = [];
	for (var i = 0; i < dResouce.getCount(); i++) {
		var id = dResouce.getID(i);
		if (dResouce.getValue("calcCheck", id) == 1) {
			ids.push(id);
		}
	}
	if (ids.length == 0) {
		justep.OpmUtils.showWarning("没有选中的数据！");
		return;
	}
	justep.OpmUtils.showConfirm("确实要删除选中的数据吗？", 
		function(e){
			publicGroup.removeOrgResource(ids);
			dResouce.refreshData();
		}
	);
};

publicGroup.btnAddMemberClick = function(event) {
	publicGroup.doAddResourceClick(justep.xbl("dlgMember"));
};

publicGroup.dlgMemberReceive = function(event) {
	publicGroup.doDialogReceive(event, justep.xbl("dMember"), "customGroup_member", "自定义组织分组_成员");
};

publicGroup.btnRemoveMemberClick = function(event){
	publicGroup.doRemoveResouceClick(justep.xbl("dMember"));
};

publicGroup.addRangeClick = function(event){
	publicGroup.doAddResourceClick(justep.xbl("dlgRange"));
};

publicGroup.dlgRangeReceive = function(event){
	publicGroup.doDialogReceive(event, justep.xbl("dRange"), "customGroup_range", "自定义组织分组_范围");
};

publicGroup.btnRemoveRangeClick = function(event){
	publicGroup.doRemoveResouceClick(justep.xbl("dRange"));
};

