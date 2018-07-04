justep.ProcessDialog = {};

// 流程对话框工具类
justep.ProcessDialog.Utils = {};
justep.ProcessDialog.Utils.prototype = null;

justep.ProcessDialog.Utils.joinFilter = function(operator, filter1, filter2) {
	return (filter1 != "" && filter2 != "") ? "(" + filter1 + ")" + operator + "(" + filter2 + ")" : filter1 + filter2;
};

// 返回多个组织的拼接名称
justep.ProcessDialog.Utils.getOrgUnitsNames = function(orgUnits, splitter) {
	if (!splitter) {
		splitter = ",";
	}
		
	var names = [];
	if (orgUnits) {
		for (var i = 0; i < orgUnits.length; i++) {
			names.push(justep.Org.OrgUtils.getOrgID(orgUnits[i].fname));
		}
	}
	return names.join(splitter);
};

// 环节转换为rows，构造环节选择数据集
justep.ProcessDialog.Utils.activitiesToRows = function(activities) {
	/*
	while (activities.length == 1 && activities[0].getName() == "xor") {
		activities = activities[0].getChildren();
	}
	*/
	var root = {};
	root.rows = justep.ProcessDialog.Utils._activitiesToRows(activities);
	return root;
};

justep.ProcessDialog.Utils._activitiesToRows = function(activities) {
	var rows = [];
	for (var i = 0; i < activities.length; i++) {
		var activity = activities[i];
		var id = activity.getID();
		var label = activity.getLabel();
		var name = activity.getName();
		if (name != "xor" && name != "and") {
			var executorNames = justep.ProcessDialog.Utils.getOrgUnitsNames(activity._toItem.getExecutors());
			var rowData = {
				"userdata": {"id": {"value": id}},
				"name": {"value": name},
				"label": {"value": label},
				"isSelectable": {"value": activity.isSelectable()},
				"isOptional": {"value": activity.isOptional()},
				"executorNames": {"value": executorNames}
			};
		} else {
			var rowData = {
				"userdata": {"id": {"value": id}, "open": 1},
				"name": {"value": name},
				"label": {"value": label},
				"isSelectable": {"value": activity.isSelectable()},
				"isOptional": {"value": activity.isOptional()},
				"executorNames": {"value": null},
				"rows": justep.ProcessDialog.Utils._activitiesToRows(activity.getChildren())
			};
		}
		rows.push(rowData);
	}
	return rows;
};

// 组织数据转换为rows，构造组织数据集
justep.ProcessDialog.Utils.orgUnitsToRows = function(orgUnits) {
	var root = {};
	root.rows = justep.ProcessDialog.Utils._orgUnitsToRows(orgUnits);
	return root;
};

justep.ProcessDialog.Utils._orgUnitsToRows = function(orgUnits) {
	var rows = [];
	for (var i = 0; i < orgUnits.length; i++) {
		var orgUnit = orgUnits[i];
		var id = justep.Org.OrgUtils.getOrgID(orgUnit.fid);
		var orgKind = justep.Org.OrgUtils.getOrgKindID(orgUnit.fid);
		var parentID = justep.Org.OrgUtils.getOrgID(justep.Org.OrgUtils.getParentPath(orgUnit.fid));
		var name = justep.Org.OrgUtils.getOrgID(orgUnit.fname);
		var rowData = {
			"userdata": {"id": {"value": id}, "open": 1},
			"sName": {"value": name},
			"sFID": {"value": orgUnit.fid},
			"sFName": {"value": orgUnit.fname},
			"sOrgKindID": {"value": orgKind}, 
			"sParent": {"value": parentID},
			"responsible": {"value": orgUnit.responsible},
			"virtual": {"value": orgUnit.virtual}
		};
		if (orgUnit["@@children"]) {
			rowData.rows = justep.ProcessDialog.Utils._orgUnitsToRows(orgUnit["@@children"]);
		}
		rows.push(rowData);
	}
	return rows;
};

// 组织数据列表拆解为树形数据
justep.ProcessDialog.Utils.orgUnitsListToTree = function(orgUnits) {
	var root = {};
	root["@@children"] = [];
	for (var i = 0; i < orgUnits.length; i++) {
		justep.ProcessDialog.Utils._generateOrgUnitsTree(orgUnits[i].fid, orgUnits[i].fname, root, false);
	}
	return root["@@children"];
};

justep.ProcessDialog.Utils._generateOrgUnitsTree = function(fid, fname, parent, virtual) {
	var parentFID = justep.Org.OrgUtils.getParentPath(fid);
	var parentFName = justep.Org.OrgUtils.getParentPath(fname);
	if (parentFID) {
		parent = justep.ProcessDialog.Utils._generateOrgUnitsTree(parentFID, parentFName, parent, true);
	}
	var children = parent["@@children"];
	for (var i = 0; i < children.length; i++) {
		if (fid == children[i].fid) {
			return children[i];
		}
	}
	
	var orgUnit = {
		"fid": fid,
		"fname": fname,
		"virtual": virtual
	};
	orgUnit["@@children"] = [];
	children.push(orgUnit);
	return orgUnit;
};

// noticeItems转换rows，构造通知数据集
justep.ProcessDialog.Utils.noticeItemsToRows = function(noticeItems) {
	var root = {rows: []};
	for (var i = 0; i < noticeItems.length; i++) {
		var noticeItem = noticeItems[i];
		var executorNames = justep.ProcessDialog.Utils.getOrgUnitsNames(noticeItem.getExecutors());
		var rowData = {
			"userdata": {"id": {"value": noticeItem.getID()}},
			"activity": {"value": noticeItem.getUnit()},
			"name": {"value": noticeItem.getTaskRelationValue("sName")},
			"executorNames": {"value": executorNames}
		};
		root.rows.push(rowData);
	}
	return root;
};
