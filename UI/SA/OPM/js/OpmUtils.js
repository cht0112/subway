justep.OpmUtils = {};

justep.OpmUtils.MANAGE_TYPE_SYSTEM = "systemManagement";
justep.OpmUtils.MANAGE_FILTER_MODE_EQUAL = "equal";
justep.OpmUtils.MANAGE_FILTER_MODE_LIKE = "like";

justep.OpmUtils.joinCondition = function(condition1, condition2, operator) {
	if (!operator)
		operator = "and";

	if (condition1 && condition2)
		return "(" + condition1 + ") " + operator + " (" + condition2 + ")";
	else
		return (condition1 ? condition1 : "") + (condition2 ? condition2 : "");
};

justep.OpmUtils.getMultiLikeFilter = function(fields, value, split) {
	if (!split)
		split = ",";

	var fieldArray = [];
	if (typeof (fields) == "string")
		fieldArray = fields.split(split);
	else if (Object.prototype.toString.apply(fields) == "[object Array]")
		fieldArray = fields;
	else
		throw new Error("无效的fields");

	value = value.toUpperCase();
	var filter = "";
	for ( var i = 0; i < fieldArray.length; i++) {
		filter = justep.OpmUtils.joinCondition(filter, "upper(" + fieldArray[i] + ") like '%" + value + "%'", "or");
	}
	return filter;
};

justep.OpmUtils.createParentPathFilter = function(field, path) {
	if (path == null) return '1=0';
	var filter = "";
	while (path != "") {
		filter = justep.OpmUtils.joinCondition(filter, field + " = '" + path + "'", "or");
		if (path.indexOf("/") != -1) {
			path = path.substring(0, path.lastIndexOf("/"));
		} else {
			path = "";
		}
	};
	return filter;
};

justep.OpmUtils.createRowData = function(data, getValueFun) {
	var rowData = [];
	var columns = data.getColumnIds().split(",");
	for ( var i = 0; i < columns.length; i++)
		rowData[i] = getValueFun(columns[i]);
	return rowData;
};

justep.OpmUtils.getValidStateLabel = function(validState) {
	if (Object.prototype.toString.apply(validState) == "[object Array]" && validState.length > 0) {
		validState = validState[0].getValue();
	} else if (typeof validState != "string") {
		return "";
	}
	if (validState == 1)
		return "启用";
	else if (validState == 0)
		return "禁用";
	else if (validState == -1)
		return "删除";
	else
		return "";
};
justep.OpmUtils.getRoleKindLabel = function(roleKind) {
	if (Object.prototype.toString.apply(roleKind) == "[object Array]" && roleKind.length > 0) {
		roleKind = roleKind[0].getValue();
	} else if (typeof roleKind != "string") {
		return "";
	}
	if (roleKind == "fun")
		return "功能角色";
	else if (roleKind == "data")
		return "数据角色";
	else
		return "";
};
justep.OpmUtils.getOrgIDFromPsmID = function(psmID) {
	return psmID.substring(psmID.indexOf("@") + 1);
};
justep.OpmUtils.getPersonIDFromPsmID = function(psmID) {
	return psmID.substring(0, psmID.indexOf("@"));
};
justep.OpmUtils.formatPsmID = function(personID, orgID) {
	return personID + "@" + orgID;
};
justep.OpmUtils.checkSearchText = function(s, showError) {
	if (!!s && s.indexOf("'") > -1) {
		if (showError)
			justep.OpmUtils.showWarning("搜索字符串中不能包含单引号！");
		return false;
	}

	return true;
};

justep.OpmUtils._msgDialog = null;
justep.OpmUtils.getMsgDialog = function() {
	if (justep.OpmUtils._msgDialog == null) 
		justep.OpmUtils._msgDialog = new justep.System.showMessage();
	return justep.OpmUtils._msgDialog; 
};

justep.OpmUtils.showError = function(msg, okCallback, cancelCallback) {
	justep.OpmUtils.getMsgDialog().open({
		title: "错误",
		msg: msg,
		type: 0,
		img: 'error',
		callback: function(data) {
			if (data.status == "ok") 
				if (okCallback) okCallback(data);
			else 
				if (cancelCallback) cancelCallback(data);
		}
	});	
};

justep.OpmUtils.showSuccess = function(msg, okCallback, cancelCallback) {
	justep.OpmUtils.getMsgDialog().open({
		title: "成功",
		msg: msg,
		type: 0,
		img: 'right',
		callback: function(data) {
			if (data.status == "ok") 
				if (okCallback) okCallback(data);
			else 
				if (cancelCallback) cancelCallback(data);
		}
	});	
};

justep.OpmUtils.showWarning = function(msg, okCallback, cancelCallback) {
	justep.OpmUtils.getMsgDialog().open({
		title: "警告",
		msg: msg,
		type: 0,
		img: 'info',
		callback: function(data) {
			if (data.status == "ok") 
				if (okCallback) okCallback(data);
			else 
				if (cancelCallback) cancelCallback(data);
		}
	});	
};

justep.OpmUtils.showConfirm = function(msg, okCallback, cancelCallback) {
	justep.OpmUtils.getMsgDialog().open({
		title: "确认",
		msg: msg,
		type: 1,
		img: 'question',
		callback: function(data) {
			if (data.status == "ok") 
				if (okCallback) okCallback(data);
			else 
				if (cancelCallback) cancelCallback(data);
		}
	});	
};

justep.OpmUtils.isTreeRoot = function(rowID) {
	return rowID == "_is_root_";
};
justep.OpmUtils.getTreeGridIdPath = function(treeGrid, rowID) {
	if (!rowID)
		rowID = treeGrid.getSelectedRowId();
	var idPath = "";
	while (!!rowID) {
		if (idPath.length > 0)
			idPath = "/" + idPath;
		idPath = rowID + idPath;
		rowID = treeGrid.getParentId(rowID);
	}
	return idPath;
};
justep.OpmUtils.getTreeGridIDPathByFullID = function(treeGrid, fullID) {
	var idArray = fullID.split("/");
	for (var i = 0; i < idArray.length; i++)
		idArray[i] = idArray[i].substring(0, idArray[i].indexOf("."));
	var result = idArray.join("/");

	for (var i = 0; i < idArray.length; i++) {
		var id = idArray[i];
		if (treeGrid.getRowIndex(id) >= 0) {
			var rootIDPath = justep.OpmUtils.getTreeGridIdPath(treeGrid, id);
			var idPath = idArray.slice(i+1).join("/");
			if (!!idPath)
				rootIDPath = rootIDPath + "/" + idPath;
			return rootIDPath;
		}
	}
	return null;
};
justep.OpmUtils.resetTreeNode = function(treeData, rowID) {
	if (!rowID)
		rowID = treeData.getCurrentRowId();
	if (treeData.getIndex(rowID) < 0)
		return;

	if (justep.OpmUtils.isTreeRoot(rowID)) {
		treeData.refreshData();
		treeData.getStore().expand(rowID);
	} else {
		treeData.getStore().deleteChildItems(rowID);
		treeData.getStore()._h2.get[rowID].state = "plus";
		treeData.getStore()._h2.get[rowID]._xml_await = true;
		treeData.getStore().expand(rowID);
	}
};
// TODO
justep.OpmUtils.getOrgImgURL = function(id, disable, isMasterPsm) {
	if ("psm" == id && isMasterPsm)
		return !disable ? "/UI/SA/OPM/images/masterPsm.gif" : "/UI/SA/OPM/images/masterPsm-disable.gif";
	else
		return justep.Org.OrgKinds.getImageURL(id, disable);
};
justep.OpmUtils.getCellBtnHTML =
		function(label, onclick) {
			return "<table width='100%' cellpadding='0' cellspacing='0' height='100%' border='0' style='table-layout: fixed;margin: 0;' "
					+ "		onmouseover='this.getElementsByTagName(\"td\")[1].style.display = \"\";'"
					+ "		onmouseout='this.getElementsByTagName(\"td\")[1].style.display = \"none\";'>"
					+ "	<tr><td style='border-style: none'> "
					+ "		<span style='white-space: nowrap; text-decoration: none; display: block; width: 100%;overflow: hidden;'>"
					+ (!label ? "" : label)
					+ "		</span></td>"
					+ "	<td width='22' style='border-style: none; display: none;' valign='middle'>"
					+ "		<input onclick='"
					+ onclick
					+ "' type='button' value='…' style='width: 22px; height: 18px; font-size: 9pt; text-align: center;'>"
					+ "	</td></tr></table>";
		};
justep.OpmUtils.getRowDataExt = function(store, rowID) {
	var rowData = new Array();
	for (var i = 0; i < store.getColumnsNum(); i++) {
		rowData.push(store.getValue(rowID, i));
	}
	return rowData;
};
justep.OpmUtils.setUserDataForCommonData = function(data) {
	var columnIDs = data.getColumnIds();
	var columnCount = columnIDs.split(",").length;
	var relations = "";
	var types = "";
	for (var i = 0; i < columnCount; i++) {
		if (relations.length > 0)
			relations = relations + ",null";
		else
			relations = relations + "null";
		if (types.length > 0)
			types = types + ",String";
		else
			types = types + "String";
	}
	data.getStore().setUserData(null, 'relations', relations);
	data.getStore().setUserData(null, 'relation-types', types);
	data.getStore().setUserData(null, 'relation-alias', columnIDs);
};