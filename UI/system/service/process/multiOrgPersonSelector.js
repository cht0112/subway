function generateGuid() {
	var guid = [];
	for (var i = 1; i <= 32; i++) {
		guid.push(Math.floor(Math.random() * 16.0).toString(16));
	}
	return guid.join("");
}

function filterOrgTreeData() {
	var orgTreeData = justep.xbl("orgTreeData");
	orgTreeData.collapseAll();
	var inputCond = document.getElementById("flow_to_query_input");
	if (inputCond.value != "") {
		orgTreeData.filters.clear();
		orgTreeData.setFilter("_customFilter_", "(SA_OPOrg.sName LIKE '%" + inputCond.value + "%') OR (SA_OPOrg.sCode LIKE '%" + inputCond.value + "%') OR (SA_OPOrg.sOrgKindID <> 'psm')");
		orgTreeData.refreshData();
		orgTreeData.expandAll();
	} else {
		orgTreeData.filters.clear();
		orgTreeData.setFilter("_treeFilter_", "SA_OPOrg.sParent='_is_root_'");
		orgTreeData.refreshData();
		orgTreeData.expandRowsToLevel(0);
	}
}

function flowToFilterInputKeydown(event) {
	var keycode = event.keyCode || event.which || event.charCode;
	if (keycode == 13) {
		filterOrgTreeData();
	}
}

/** 根据指定字段、数据查找行ID, 多个","分隔  **/
function findRow(instance, values, fields, single, allData) {
	var rowId = "0";
	
	if (!values || values.length == 0 ||
		!fields || fields.length == 0 ||
		values.length != fields.length) {
		return rowId;
	}
	
	var value = values.toString().toLowerCase();
	var onlyOne = true;
	if (typeof(single) != "undefined") {
		onlyOne = single;
	}
	
	if (typeof(instance) == "string") {
		instance = justep(instance).xformsObject;
	}
	
	if (!allData) {
		for (var r = 0; r < instance.store.rowsBuffer.length; r++) {
			var str = "";
			for (var c = 0; c < fields.length; c++) {
				if (c > 0) {
					str = str + ",";
				}
				str = str + instance.store.getValueById(instance.store.rowsBuffer[r].idd, fields[c]);
			}
			
			if (value == str.toLowerCase()) {
				if (onlyOne) {
					rowId = instance.store.rowsBuffer[r].idd;
					break;
				} else {
					if (rowId == "0") {
						rowId = instance.store.rowsBuffer[r].idd;
					} else {
						rowId += ("," + instance.store.rowsBuffer[r].idd);
					}
				}
			}
			
			if (instance.store.isTreeGrid()) {
				if (instance.store.canExpand(instance.store.rowsBuffer[r].idd)) {
					var subRowId = findCollapsedTreeNode(instance, value, fields, onlyOne, instance.store.rowsBuffer[r].idd);
					if (subRowId != "0") {
						if (onlyOne) {
							rowId = subRowId;
							break;
						} else {
							if (rowId == "0") {
								rowId = subRowId;
							} else {
								rowId += ("," + subRowId);
							}
						}
					}
				}
			}
		}
	} else { 
		var rowArrs = [];
		var idx = 0;
		for (var p in instance.store.rowsAr) {
			var str = "";
			for (var c = 0; c < fields.length; c++) {
				if (c > 0) {
					str = str + ",";
				}
				if (instance.store.rowsAr[p] != null) {
					str = str + instance.store.getValueById(p, fields[c]);
				}
			}
			
			if (value.toLowerCase() == str.toLowerCase()) {
				if (onlyOne) {
					rowArrs[0] = p;
					break;
				} else {
					if (instance.kind == "simple-data") {
						rowArrs[idx] = p;
					} else {
						rowArrs[instance.store.rowsAr[p].rowIndex - 1] = p;
					}
				}
			}
			
			idx++;
		}
		for (var i = 0; i < rowArrs.length; i++) {
			if (typeof(rowArrs[i]) != "undefined") {
				if (rowId == "0") {
					rowId = rowArrs[i];
				} else {
					rowId += ("," + rowArrs[i]);
				}
			}
		}
	}
	
	return rowId;
}

function addCurrentExecutor() {
	var orgData = justep.xbl("orgTreeData");
	var sName = orgData.getValue("sName");
	var sFID = orgData.getValue("sFID");
	if (sFID != "") {
		var arrValue = [sFID];
		var arrField = ["fid"];
		if (findRow("data1", arrValue, arrField) == "0") {
			var newRowId = generateGuid();
			var mainData = justep.xbl("data1");
			mainData.insert(newRowId, mainData.getCount());
			mainData.setValue("fid", sFID, newRowId);
			mainData.setValue("fname", sName, newRowId);
		}
	}
}

function trigger3Click(event){
	addCurrentExecutor();
}

function removeCurrentExecutor() {
	var mainData = justep.xbl("data1");
	var currRowIndex = mainData.getIndex();
	if (currRowIndex >= 0) {
		mainData.removeByIndex(currRowIndex);
		mainData.xformsRefresh();
	}
}

function trigger4Click(event){
	removeCurrentExecutor();
}

function trigger5Click(event){
	var dialog = parent.justep.xbl("dialog1");
	if (dialog) {
		dialog.close();
	}
	var names = []
	var ids = [];
	var mainData = justep.xbl("data1");
	var rowCount = mainData.getCount();
	for (var i = 0; i < rowCount; i++) {
		var rowId = mainData.getRowId(i);
		names[i] = mainData.getValue("fname", rowId);
		ids[i] = mainData.getValue("fid", rowId);
	}
	window.frameElement.callback(names, ids);
}
function trigger6Click(event){
	var dialog = parent.justep.xbl("dialog1");
	if (dialog) {
		dialog.close();
	}
}

function model1Load(event){
	var orgNames = window.frameElement.orgNames || "";
	var orgFIds = window.frameElement.orgFIds || "";
	if (orgNames != "" && orgFIds != "") {
		var rowsContent = "<rows>";
		var names = orgNames.split(",");
		var fids = orgFIds.split(",");
		var len = Math.min(names.length, fids.length);
		for (var i = 0; i < len; i++) {
			rowsContent += "<row>";
			rowsContent += ("<cell>" + fids[i] + "</cell>");
			rowsContent += ("<cell>" + names[i] + "</cell>");
			rowsContent += "</row>";
		}
		rowsContent += "</rows>";
		var mainData = justep.xbl("data1");
		mainData.loadXML(rowsContent, null, false, false);
	}
}

function allowToRight() {
	var orgData = justep.xbl("orgTreeData");
	var sName = orgData.getValue("sName");
	var sFID = orgData.getValue("sFID");
	if (sFID != "") {
		var arrValue = [sFID];
		var arrField = ["fid"];
		if (findRow("data1", arrValue, arrField) == "0") {
			return true;
		}
	}
	return false;
}

function allowToLeft() {
	var mainData = justep.xbl("data1");
	return mainData.getCount() > 0;
}

function refreshRule() {
	var mainData = justep.xbl("data1");
	mainData.xformsRefresh();
}