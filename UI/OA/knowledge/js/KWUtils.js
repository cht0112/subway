// 设置复选框选中
function setCheckboxChecked(checkboxID) {
	document.getElementById(checkboxID).checked = true;
}
// 取消复选框选中
function setCheckboxUnchecked(checkboxID) {
	document.getElementById(checkboxID).checked = false;
}

// 设置复选框可用
function setCheckboxAble(checkboxID) {
	document.getElementById(checkboxID).disabled = false;
}
// 设置复选框不可用
function setCheckboxDisabled(checkboxID) {
	document.getElementById(checkboxID).disabled = true;
}

// 获取栏目权限设置
function getFolderRightsSetFun(folderIDs) {
	var param = new justep.Request.ActionParam();
	param.setString("folderIDs", folderIDs);
	var translateParam = "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getFolderRightsSetAction",
			param, translateParam);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("获取栏目权限失败!");
	}

	return r;
}

//获取栏目管理员
//返回格式 id1:name1 | id2:name2 | id3:name3 ...
function getFolderManagers(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getFolderManagersAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		return "";
		
	}

	return justep.Request.transform(justep.Request.getData(r.responseXML));
}

//执行SQL
function executeSQL(sql) {
	var param = new justep.Request.ActionParam();
	param.setString("sql", sql);
	var translateParam = "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "executeSQLAction",
			param,translateParam);

	if (!justep.Request.isBizSuccess(r)) {
		return null;
	}

	return r;
}

function getGridInfoByElement(element) {
	if (!element)
		return null;
	var cellIndex = -1;
	do {
		if (element.grid && typeof(element.idd) == "string") {
			var grid = element.grid;
			var columnId = cellIndex == -1 ? "" : grid.getColumnId(cellIndex);
			return {
				grid : grid,
				rowId : element.idd,
				columnId : columnId
			};
		}
		if (typeof(element._cellIndex) == "number")
			cellIndex = element._cellIndex;
		element = element.parentNode;
	} while (element);
	return null;
}