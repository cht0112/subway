justep.Org = {};

justep.Org.ORG_QUERY_ACTION = "queryOrgAction";

justep.Org.OrgUtils = {};

justep.Org.OrgUtils.getIDByFID = function(orgFID, orgKindID) {
	var ids = orgFID.split("/");
	for (var i = ids.length - 1; i >= 0; i--) {
		var id = ids[i];
		var kind = justep.Org.OrgUtils.getOrgKindID(id);
		if (typeof(orgKindID) == "undefined" || kind == orgKindID) {
			return (id.lastIndexOf(".") == -1) ? id : id.substring(0, id.lastIndexOf("."));
		}
	}
	return null;
};

justep.Org.OrgUtils.getNameByFName = function(orgFID, orgFName, orgKindID) {
	var ids = orgFID.split("/");
	var names = orgFName.split("/");
	for (var i = ids.length - 1; i >= 0; i--) {
		var id = ids[i];
		var kind = justep.Org.OrgUtils.getOrgKindID(id);
		if (typeof(orgKindID) == "undefined" || kind == orgKindID) {
			return names[i];
		}
	}
	return null;
};

justep.Org.OrgUtils.getOrgID = function(orgID) {
	var s = (orgID != null && orgID.lastIndexOf("/") != -1) ? orgID.substring(orgID.lastIndexOf("/") + 1, orgID.length) : orgID;
	return (s == null || s.lastIndexOf(".") == -1) ? s : s.substring(0, s.lastIndexOf("."));
};

justep.Org.OrgUtils.getOrgKindID = function(orgID) {
	var s = (orgID != null && orgID.lastIndexOf("/") != -1) ? orgID.substring(orgID.lastIndexOf("/") + 1, orgID.length) : orgID;
	return (s == null || s.lastIndexOf(".") == -1) ? null : s.substring(s.lastIndexOf(".") + 1, s.length);
};

justep.Org.OrgUtils.getParentPath = function(path) {
	return (path == null || path.lastIndexOf("/") == -1) ? null : path.substring(0, path.lastIndexOf("/"));
};

justep.Org.OrgUtils.getRealFName = function(orgFID, orgFName) {
	var result = "";

	var realOrgKinds = justep.Org.OrgKinds.getRealIDs();
	var ids = orgFID.split("/");
	var names = orgFName.split("/");
	for (var i = 0; i < ids.length; i++) {
		var id = ids[i];
		var orgKind = justep.Org.OrgUtils.getOrgKindID(id);
		if (justep.Array.indexOf(realOrgKinds, orgKind) != -1) {
			result = result + "/" + names[i];
		}
	}
	return result;
};


justep.Org.OrgKinds = function() {
	this._orgKinds = null;
	this._init();
};

justep.Org.OrgKinds.PROPERTY_ID = "id";
justep.Org.OrgKinds.PROPERTY_LABELS = "labels";
justep.Org.OrgKinds.PROPERTY_PARENTS = "parents";
justep.Org.OrgKinds.PROPERTY_VIRTUAL = "virtual";
justep.Org.OrgKinds.PROPERTY_SEQUENCE = "sequence";
justep.Org.OrgKinds.PROPERTY_ROOT = "root";

justep.Org.OrgKinds.ORGKIND_PERSONMEMBER = "psm";

justep.Org.OrgKinds._instance == null;
justep.Org.OrgKinds._getInstance = function() {
	if (justep.Org.OrgKinds._instance == null) {
		justep.Org.OrgKinds._instance = new justep.Org.OrgKinds();
	}
	return justep.Org.OrgKinds._instance;
};

justep.Org.OrgKinds.prototype._init = function() {
	var r = justep.Request.sendBizRequest2({
		dataType: "json",
		action: "getOrgKindsAction",
		directExecute: true
	});
	this._orgKinds = justep.Request.getData(r).object.value;
};

justep.Org.OrgKinds.getIDs = function() {
	var orgKinds = justep.Org.OrgKinds._getInstance()._orgKinds;

	var ids = [];
	for (var i = 0; i < orgKinds.length; i++) {
		ids.push(orgKinds[i][justep.Org.OrgKinds.PROPERTY_ID]);
	} 
	return ids;
};

justep.Org.OrgKinds.getRealIDs = function() {
	var orgKinds = justep.Org.OrgKinds._getInstance()._orgKinds;

	var ids = [];
	for (var i = 0; i < orgKinds.length; i++) {
		var id = orgKinds[i][justep.Org.OrgKinds.PROPERTY_ID]; 
		if (!justep.Org.OrgKinds.isVirtual(id)) {
			ids.push(id);
		}
	} 
	return ids;
};

justep.Org.OrgKinds._getOrgKind = function(id) {
	var orgKinds = justep.Org.OrgKinds._getInstance()._orgKinds;
	for (var i = 0; i < orgKinds.length; i++) {
		if (orgKinds[i][justep.Org.OrgKinds.PROPERTY_ID] == id)
			return orgKinds[i];
	} 
	return null;
};

justep.Org.OrgKinds.getLabels = function(id) {
	var orgKind = justep.Org.OrgKinds._getOrgKind(id);
	return orgKind != null ? orgKind[justep.Org.OrgKinds.PROPERTY_LABELS] : null;
};

justep.Org.OrgKinds.getLabel = function(id, language) {
	language = !language ? justep.Context.getLanguage() : language;
	var labels = justep.Org.OrgKinds.getLabels(id);
	var label = labels != null ? labels[language] : null;
	return label != null ? label : id;
};

justep.Org.OrgKinds.hasProperty = function(id, property) {
	return typeof(justep.Org.OrgKinds._getOrgKind(id)[property]) != "undefined";
};

justep.Org.OrgKinds.getProperty = function(id, property) {
	var orgKind = justep.Org.OrgKinds._getOrgKind(id);
	return (orgKind == null) ? null : orgKind[property];
};

justep.Org.OrgKinds.getParents = function(id) {
	var parents = justep.Org.OrgKinds.getProperty(id, justep.Org.OrgKinds.PROPERTY_PARENTS);
	return (parents == null) ? [] : parents.split(",");
};

justep.Org.OrgKinds.isVirtual = function(id) {
	return "true" == justep.Org.OrgKinds.getProperty(id, justep.Org.OrgKinds.PROPERTY_VIRTUAL);
};

justep.Org.OrgKinds.getSequence = function(id) {
	return justep.Org.OrgKinds.getProperty(id, justep.Org.OrgKinds.PROPERTY_SEQUENCE);
};

justep.Org.OrgKinds.isPersonMember = function(id) {
	return justep.Org.OrgKinds.ORGKIND_PERSONMEMBER == id; 
};

justep.Org.OrgKinds.isRoot = function(id) {
	return "true" == justep.Org.OrgKinds.getProperty(id, justep.Org.OrgKinds.PROPERTY_ROOT);
};

justep.Org.OrgKinds.getImageURL = function(id, disable, gray) {
	return "/UI/system/images/org/orgKind/" + id + (!disable ? "" : "-disable") + (!gray ? "" : "-gray") + ".gif"; 
};

justep.Org.OrgCommonGroup = {};

justep.Org.OrgCommonGroup.GROUP_ROOT_ID = "_group_";
justep.Org.OrgCommonGroup.GROUP_ORGKIND = "group";
justep.Org.OrgCommonGroup.GROUP_QUERY_ACTION = "queryOrgCommonGroupAction";

justep.Org.OrgCommonGroup.loadGroupRoot = function(columns, filter) {
	var translateParam = new justep.Request.TranslateParam();
	translateParam.dataType = justep.Request.TranslateParam.DATATYPE_ROW_TREE;
	translateParam.rowOption.sequence = columns;
	translateParam.setTreeOption('tree-parent-relation', "sParent");
	
	var params = new justep.Request.ActionParam();
	params.setString("filter", filter);
	params.setInteger("offset", 0);
	params.setInteger("limit", -1);
	var r = justep.Request.sendBizRequest2({
		dataType: "json",
		directExecute: true,
		action: justep.Org.OrgCommonGroup.GROUP_QUERY_ACTION, 
		parameters: params,
		translateParam: translateParam
	});
	return justep.Request.getData(r);
};

justep.Org.OrgCommonGroup.isGroupOrgID = function(id) {
	return id.indexOf("/" + justep.Org.OrgCommonGroup.GROUP_ROOT_ID + "/") == 0;
};

justep.Org.OrgCommonGroup.getOrgIDOfGroupOrgID = function(id) {
	if (justep.Org.OrgCommonGroup.isGroupOrgID(id)) {
		return id.substring(id.lastIndexOf("/") + 1, id.length);
	}
	return id;
};

justep.Org.OrgCommonGroup.getGroupIDOfGroupOrgID = function(id) {
	if (justep.Org.OrgCommonGroup.isGroupOrgID(id)) {
		var groupID = id.substring(("/" + justep.Org.OrgCommonGroup.GROUP_ROOT_ID + "/").length, id.length);
		groupID = groupID.substring(0, groupID.indexOf("/"));
		return groupID;
	}
	return null;
};



