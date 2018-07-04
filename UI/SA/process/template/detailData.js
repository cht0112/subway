var detailData = {};
var detailData = {
	"inited": false,
	"currRowId": null,
	"endActivities": "",
	"activityTags": {},
	"type" : null,
	"content" : null,
	"content2" : null,
	"isModify" : false
	 
};
function generateTemplateContent() {
	var data = justep.xbl("template");
	if (data.getCount() > 0) {
		return data.getStore().serializePro(false);
	} else {
		return "<rows></rows>";
	}
};
function isNameDuplicated(name, saveas, isNew) {
	var data = justep.xbl("bizData1");
	var person = justep.Context.getCurrentPersonID();
	var filterText = "SA_ProcessTemplate.sName='" + name + "'";
	data.setFilter("_customFilter_", filterText);
	data.refreshData();
	if (data.getCount() > 1) {
		return true;
	} else if (data.getCount() == 1) {
		if (saveas || isNew) {
			return true;
		} else {
			return !(data.getRowId() == detailData.currRowId);
		}
	} else {
		return false;
	}
}

function validateDetailData() {
	var templateData = justep.xbl("template");
	var rowCount = templateData.getCount();
	for (var i = 0; i < rowCount; i++) {
		if (!validateDetailDataRow(templateData, i, rowCount)) {
			var tabPanel = justep.xbl("tabPanel1");
			tabPanel.setTabActive("tabPage2");
			return false;
		}
	}
	return true;
}

function validateDetailDataRow(data, index, count) {
	var bRet = true;
	var currRowId = data.getRowId(index);
	if (index < count - 1) {
		var currRowSN = getRowSN(data, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var currRowType = data.getValue("type", currRowId);
		var nextIndex = index + 1;
		var nextRowId = data.getRowId(nextIndex);
		var nextRowSN = getRowSN(data, nextRowId);
		var nextRowSNPaths = nextRowSN.split(".");
		if (nextRowSNPaths.length <= currRowSNPaths.length) {
			bRet = !(currRowType == "and" || currRowType == "xor" || currRowType == "sequence" || currRowType == "if-else-activity");
			if (!bRet) {
				alert("序号“" + getRowSN(data, currRowId)
						+ "”: 当前环节是叶子节点，不能是And环节、Xor环节或Sequence环节!");
			}
		} else {
			bRet = (currRowType == "and" || currRowType == "xor" || currRowType == "sequence" || currRowType == "if-else-activity");
			if (!bRet) {
				alert("序号“" + getRowSN(data, currRowId)
						+ "”: 当前环节不允许包含子节点，只有And环节、Xor环节和Sequence环节能包含子节点！");
			}
		}
	} else if (index == count - 1) {
		var currRowType = data.getValue("type", currRowId);
		bRet = !(currRowType == "and" || currRowType == "xor" || currRowType == "sequence" || currRowType == "if-else-activity");
		if (!bRet) {
			alert("序号“" + getRowSN(data, currRowId)
					+ "”: 当前环节是叶子节点，不能是And环节、Xor环节或Sequence环节!");
		}
	}
	if (bRet) {
		var currRowUnit = data.getValue("unit", currRowId);
		if (currRowUnit == "") {
			alert("序号“" + data.getValue("sn", currRowId)
					+ "”: " + "环节不能为空!")
			bRet = false;
		}
	}
	return bRet;
}

function allowDetailCellEdit() {
	var templateData = justep.xbl("template");
	var currRowIndex = templateData.getIndex();
	var currRowId = templateData.getRowId(currRowIndex);
	var type = templateData.getValue("type", currRowId);
	
	//return !(currUnit == "and" || currUnit == "xor" || currUnit == "sequence" || currUnit == detailData.endActivities);
	return type=="activity";
}

detailData.saveTemplate = function(newTemplate){
	var nameInput = document.getElementById("name-input");
	var name = nameInput.value;
	if (name == "") {
		alert("名称不能为空!");
		var tabPanel = justep.xbl("tabPanel1");
		tabPanel.setTabActive("tabPage1");
		nameInput.focus();
		return;
	}
	
	var processData = justep.xbl("allProcess");
	var process = processData.getValue("process");
	if ((process == null) || (process == "")) {
		alert("请选择一个流程!");
		return;
	}
	var processName = processData.getValue("processName");
	
	var activityData = justep.xbl("allActivity");
	var activity = activityData.getValue("activity");
	if ((activity == null) || (activity == "")) {
		alert("请选择一个环节!");
		return;
	}
	var activityName = activityData.getValue("activityName");
	
	var validated = validateDetailData();
	if (!validated) {
		return;
	}
	
	if (isNameDuplicated(name, false, newTemplate)) {
		alert("名称为“" + name + "”的模板已经存在!");
		return;
	}
	
	var content = null;
	var content2 = null;
	if (detailData.type == "graph"){
		var data = justep.xbl("designer").getData();
		content = data[0];
		content2 = data[1];
	}else{
		content = generateTemplateContent();
	}
	
	var type = detailData.type;

	
	var scopeSelect = justep("select1");
	var scope = scopeSelect.value;
	
	var r = {
		"name": name,
		"scope":scope,
		"process": process,
		"processName": processName,
		"activity": activity,
		"activityName": activityName,
		"content": content,
		"content2": content2,
		"type": type,
		"isNew": newTemplate
	};
	justep.windowDialogReceiver.windowEnsure(r);
};


detailData.trigger1Click = function(event){
	detailData.saveTemplate(!detailData.isModify);
};
detailData.trigger2Click = function(event){
	justep.windowDialogReceiver.windowCancel();	
};



detailData.windowReceiver1Receive = function(event){
	
	var tabPanel = justep.xbl("tabPanel1");
	tabPanel.setTabActive("tabPage1");
	var processData = justep.xbl("allProcess");
	var activityData = justep.xbl("allActivity");
	var templateData = justep.xbl("template");
	var nameInput = document.getElementById("name-input");
	var scopeSelect = document.getElementById("select1");
	if (typeof(event.data) == "undefined") {
		nameInput.value = "";
		scopeSelect.value="public";
		processData.setIndex(0);
		activityData.setIndex(0);
		templateData.getStore().deleteAllRow();
		
		detailData.currRowId = null;
		
		tabPanel.setVisable("tabPage2", true);
		tabPanel.setVisable("tabPage3", false, "tabPage1");
		detailData.content = null;
		detailData.content2 = null;
		detailData.type = null;
		detailData.isModify = false;
	} else {
		nameInput.value = event.data.name || "";
		scopeSelect.value=event.data.scope || "public";
		var values = [event.data.process];
		var fields = ["process"];
		var foundRows = processData.locate(values, fields, true, true, false);
		if (foundRows.length > 0) {
			var rowId = foundRows[0];
			var rowIdx = processData.getIndex(rowId);
			processData.setIndex(rowIdx);
		}
		
		detailData.currRowId = event.data.id;
		
		if (event.data.type=='graph'){
			tabPanel.setVisable("tabPage2", false, "tabPage1");
			tabPanel.setVisable("tabPage3", true);
		}else{
			tabPanel.setVisable("tabPage2", true);
			tabPanel.setVisable("tabPage3", false, "tabPage1");
		}
		
		detailData.content = event.data.content;
		detailData.content2 = event.data.content2;
		detailData.type = event.data.type;
		detailData.isModify = event.data.isModify;
	}
	
	if (typeof(event.data) != "undefined") {
		var values = [event.data.activity];
		var fields = ["activity"];
		var foundRows = activityData.locate(values, fields, true, true, false);
		if (foundRows.length > 0) {
			var rowId = foundRows[0];
			var rowIdx = activityData.getIndex(rowId);
			activityData.setIndex(rowIdx);
		}
		
		templateData.loadXML(event.data.content, null, false, null);
		sortRows();
		templateData.xformsRefresh();
	}
	
	templateData.xformsRefresh();
	
	xforms("trigger3").setDisabled(detailData.currRowId==null);
};
function selectUnitCloseup(event) {
	var templateData = justep.xbl("template");
	var index = templateData.getIndex();
	var id = templateData.getRowId(index);
	var type = "activity";
	if (event.value == "and") {
		type = "and";
	} else if (event.value == "xor") {
		type = "xor";
	} else if (event.value == "sequence") {
		type = "sequence";
	} else if (event.value == detailData.endActivities) {
		type = "end";
	}else{
		type = detailData.activityTags[event.value];
	}
	templateData.setValue("type", type, id);
	//if (type == "and" || type == "xor" || type == "sequence") {
	if (type != "activity"){
		templateData.setValue("execute_mode", "", id);
		templateData.setValue("execute_mode_label", "", id);
		templateData.setValue("org_name", "", id);
		templateData.setValue("org_fid", "", id);
		templateData.setValue("org_expr", "", id);
		templateData.setValue("is_customized", "0", id);
	} else {
		templateData.setValue("execute_mode", "temPreempt", id);
		templateData.setValue("execute_mode_label", "抢占", id);
	}
};
function generateGuid() {
	var guid = [];
	for (var i = 1; i <= 32; i++) {
		guid.push(Math.floor(Math.random() * 16.0).toString(16));
	}
	return guid.join("");
};
function sn2DisplaySN(value) {
	var values = value.split(".");
	var len = values.length;
	var newValue = value;
	for (var i = 1; i < len; i++) {
		newValue = "　" + newValue;
	}
	return newValue;
};
function setRowSN(data, value, id) {
	var newValue = sn2DisplaySN(value);
	data.setValue("sn", newValue, id);
};
function getRowSN(data, id) {
	var value = data.getValue("sn", id);
	value = value.replace(/　/g, "");
	return value;
};
function resetRowSN(data, startRowIndex, rowCount, changedIndex, add) {
	for (var i = startRowIndex; i < rowCount; i++) {
		var rowId = data.getRowId(i);
		var rowSN = getRowSN(data, rowId);
		var rowSNPaths = rowSN.split(".");
		if (rowSNPaths.length > changedIndex) {
			if (add) {
				rowSNPaths[changedIndex] = parseInt(rowSNPaths[changedIndex]) + 1;
			} else {
				rowSNPaths[changedIndex] = parseInt(rowSNPaths[changedIndex]) - 1;
			}
			setRowSN(data, rowSNPaths.join("."), rowId);
		} else {
			break;
		}
	}
};
function insertRow(addChild) {
	/* 操作instance */
	var templateData = justep.xbl("template");

	var newRowId = generateGuid();

	var rowCount = templateData.getCount();
	var currRowIndex = templateData.getIndex();
	var currRowId = templateData.getRowId(currRowIndex);
	var currRowSN = getRowSN(templateData, currRowId);
	var insertRowIndex = rowCount;
	if (rowCount > 0 && currRowIndex < rowCount) {
		if (!addChild) {
			insertRowIndex = currRowIndex + 1;
			if (insertRowIndex < rowCount) {
				var insertRowId = templateData.getRowId(insertRowIndex);
				var insertRowSN = getRowSN(templateData, insertRowId);
				while ((insertRowSN.split(".").length > currRowSN.split(".").length)
						&& (insertRowIndex < rowCount)) {
					insertRowIndex++;
					insertRowId = templateData.getRowId(insertRowIndex);
					insertRowSN = getRowSN(templateData, insertRowId);
				}
			}
		} else {
			insertRowIndex = currRowIndex + 1;
		}
	}
	templateData.insert(newRowId, insertRowIndex);
	templateData.setValue("is_customized", "0", newRowId);
	templateData.setValue("execute_mode", "temPreempt");
	templateData.setValue("execute_mode_label", "抢占");
	
	var activityData = justep.xbl("activities");
	if (activityData.getCount() == 4) {
		for (var i = 0; i < 4; i++) {
			var rowId = activityData.getRowId(i);
			var name = activityData.getValue("name", rowId);
			if (name != "and" && name != "xor" && name != "sequence") {
				var label = activityData.getValue("label", rowId);
				templateData.setValue("unit", name);
				templateData.setValue("unit_label", label);
				break;
			}
		}
	}

	if (rowCount == 0) {
		setRowSN(templateData, "1", newRowId);
	} else {
		if (!addChild) {
			var snPaths = currRowSN.split(".");
			if (currRowIndex > 0) {
				var lastIndex = snPaths.length - 1;
				snPaths[lastIndex] = parseInt(snPaths[lastIndex]) + 1;
				setRowSN(templateData, snPaths.join("."), newRowId);
			} else {
				var lastIndex = 0;
				var newSN = (parseInt(snPaths[0]) + 1).toString();
				setRowSN(templateData, newSN, newRowId);
			}
			resetRowSN(templateData, insertRowIndex + 1, rowCount + 1, lastIndex,
					true);
		} else {
			var newRowSN = currRowSN + ".1";
			setRowSN(templateData, newRowSN, newRowId);
			var lastIndex = newRowSN.split(".").length - 1;
			resetRowSN(templateData, insertRowIndex + 1, rowCount + 1, lastIndex,
					true);
		}
	}
};
function deleteRow() {
	/* 操作instance */
	var templateData = justep.xbl("template");
	var currRowIndex = templateData.getIndex();
	var currRowId = templateData.getRowId(currRowIndex);
	var currRowSN = getRowSN(templateData, currRowId);
	var currRowSNPaths = currRowSN.split(".");
	var lastIndex = currRowSNPaths.length - 1;
	templateData.removeByIndex(currRowIndex);

	/* 删除子 */
	while (currRowIndex < templateData.getCount()) {
		var rowId = templateData.getRowId(currRowIndex);
		var rowSN = getRowSN(templateData, rowId);
		if ((rowSN.length >= currRowSN.length)
				&& rowSN.substring(0, currRowSN.length) == currRowSN) {
			templateData.removeByIndex(currRowIndex);
		} else {
			break;
		}
	}

	resetRowSN(templateData, currRowIndex, templateData.getCount(), lastIndex,
			false);

	templateData.xformsRefresh();
};
function insertButtonClick(event) {
	insertRow(false);
};
function insertChildButtonClick(event) {
	insertRow(true);
};
function deleteButtonClick(event) {
	deleteRow();
};
function clearButtonClick(event) {
	var templateData = justep.xbl("template");
	templateData.getStore().deleteAllRow();
	templateData.xformsRefresh();
};
function sortRows() {
	var templateData = justep.xbl("template");
	templateData.getStore().sortRows(0, "cus", "asc");
	var currIndex = templateData.getStore().getRowIndex(templateData.getStore().selectRowID);
	templateData.getStore().setIndex(currIndex);
};
function changePathValue(data, currSN, index, pos, newValue) {
	var rowCount = data.getCount();
	if (index < rowCount) {
		var currSNPaths = currSN.split(".");
		var id = data.getRowId(index);
		var sn = getRowSN(data, id);
		var paths = sn.split(".");
		if ((paths.length > currSNPaths.length) || (sn == currSN)) {
			paths[pos] = newValue;
			setRowSN(data, paths.join("."), id);
			changePathValue(data, currSN, index + 1, pos, newValue);
		}
	}
};
function moveupButtonClick(event) {
	var templateData = justep.xbl("template");
	var currRowIndex = templateData.getIndex();
	var currRowId = templateData.getRowId(currRowIndex);
	var currRowSN = getRowSN(templateData, currRowId);
	var currRowSNPaths = currRowSN.split(".");
	var lastIndex = currRowSNPaths.length - 1;

	var prevRowIndex = currRowIndex - 1;
	var prevRowId = templateData.getRowId(prevRowIndex);
	var prevRowSN = getRowSN(templateData, prevRowId);
	var prevRowSNPaths = prevRowSN.split(".");
	while ((prevRowSNPaths.length != currRowSNPaths.length) && prevRowIndex > 0) {
		prevRowIndex--;
		prevRowId = templateData.getRowId(prevRowIndex);
		prevRowSN = getRowSN(templateData, prevRowId);
		prevRowSNPaths = prevRowSN.split(".");
	}

	var currRowNewIndex = prevRowSNPaths[lastIndex];
	var prevRowNewIndex = currRowSNPaths[lastIndex];

	changePathValue(templateData, prevRowSN, prevRowIndex, lastIndex,
			prevRowNewIndex);
	changePathValue(templateData, currRowSN, currRowIndex, lastIndex,
			currRowNewIndex);

	sortRows();
};
function movedownButtonClick(event) {
	var templateData = justep.xbl("template");
	var currRowIndex = templateData.getIndex();
	var currRowId = templateData.getRowId(currRowIndex);
	var currRowSN = getRowSN(templateData, currRowId);
	var currRowSNPaths = currRowSN.split(".");
	var lastIndex = currRowSNPaths.length - 1;

	var rowCount = templateData.getCount();
	var nextRowIndex = currRowIndex + 1;
	var nextRowId = templateData.getRowId(nextRowIndex);
	var nextRowSN = getRowSN(templateData, nextRowId);
	var nextRowSNPaths = nextRowSN.split(".");
	while ((nextRowSNPaths.length != currRowSNPaths.length)
			&& (nextRowIndex < rowCount - 1)) {
		nextRowIndex++;
		nextRowId = templateData.getRowId(nextRowIndex);
		nextRowSN = getRowSN(templateData, nextRowId);
		nextRowSNPaths = nextRowSN.split(".");
	}

	var currRowNewIndex = nextRowSNPaths[lastIndex];
	var nextRowNewIndex = currRowSNPaths[lastIndex];

	changePathValue(templateData, currRowSN, currRowIndex, lastIndex,
			currRowNewIndex);
	changePathValue(templateData, nextRowSN, nextRowIndex, lastIndex,
			nextRowNewIndex);

	sortRows();
};
function customSort(a, b, order) {
	var result = 0;
	a = (a || "").replace(/　/g, "");
	b = (b || "").replace(/　/g, "");
	var aPath = a.split(".");
	var bPath = b.split(".");
	var len = Math.min(aPath.length, bPath.length);
	for (var i = 0; i < len; i++) {
		var aItem = aPath[i];
		var bItem = bPath[i];
		if (aItem != bItem) {
			var aInt = parseInt(aItem);
			var bInt = parseInt(bItem);
			if (isNaN(aInt) && isNaN(bInt)) {
				result = aItem > bItem ? 1 : -1;
			} else if (isNaN(aInt)) {
				result = -1;
			} else if (isNaN(bInt)) {
				result = 1;
			} else {
				result = aInt > bInt ? 1 : -1;
			}
			break;
		}
	}
	if (result == 0) {
		result = aPath.length > bPath.length ? 1 : -1;
	}
	return result;
};
function loadProcessActivity() {
	var processData = justep.xbl("allProcess");
	processData.getStore().deleteAllRow();
	var activityData = justep.xbl("allActivity");
	activityData.getStore().deleteAllRow();
	var result = justep.Request.sendHttpRequest("/system/service/process/getProcess.j", "<instance></instance>");
	if (justep.Request.isBizSuccess(result)) {
		var processes = justep.XML.eval(result.responseXML, "//processes//row");
		if (processes.length > 0) {
			var content = "";
			for (var i = 0; i < processes.length; i++) {
				content += justep.XML.toString(processes[i]);
			}
			content = "<rows>" + content + "</rows>";
			processData.loadXML(content, null, false, null);
		}
		detailData.inited = true;
		var activities = justep.XML.eval(result.responseXML, "//activities//row");
		if (activities.length > 0) {
			var content = "";
			for (var i = 0; i < activities.length; i++) {
				content += justep.XML.toString(activities[i]);
			}
			content = "<rows>" + content + "</rows>";
			activityData.loadXML(content, null, false, null);
			filterActivity();
		}
	} else {
		alert("装载环节数据失败！");
	}
};
detailData.model1ModelConstructDone = function(event){
	var templateGrid = justep.xbl("grid3");
	templateGrid.grid.setCustomSorting(customSort, 0);
	loadProcessActivity();
};
function dialog1Open(event) {
	var names = "";
	var ids = "";
	var templateData = justep.xbl("template");
	var currIndex = templateData.getIndex();
	if (currIndex >= 0) {
		var currRowId = templateData.getRowId(currIndex);
		names = templateData.getValue("org_name", currRowId);
		ids = templateData.getValue("org_fid", currRowId);
	}
	var frameEl = justep("customized_frame1");
	if (frameEl) {
		if(frameEl.contentWindow.document.body){
			frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 11pt'>正在载入数据......</td></tr></table>";
		}	
	}
	
	frameEl.orgNames = names;
	frameEl.orgFIds = ids;
	frameEl.callback = setExecutor;
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	justep.Request.callURL(
			"/system/service/process/multiOrgPersonSelector.w?process=" + process
					+ "&activity=" + activity, "customized_frame1", "");
};
function setExecutor(names, fids) {
	var templateData = justep.xbl("template");
	var currIndex = templateData.getIndex();
	if (currIndex >= 0) {
		var currRowId = templateData.getRowId(currIndex);
		templateData.setValue("org_name", names.join(","), currRowId);
		templateData.setValue("org_fid", fids.join(","), currRowId);
		var exprs = "";
		for (var i = 0; i < fids.length; i++) {
			if (exprs != "") {
				exprs += ",";
			}
			exprs += "findOrgUnitsByFID('" + fids[i] + "')";
		}
		templateData.setValue("org_expr", exprs, currRowId);
	}
};
function grid3OrgNameButtonClick(event) {
	justep.xbl('dialog1').open();
};
function filterActivity() {
	if (detailData.inited) {
		var activityGrid = xforms("grid2");
		var colIndex = activityGrid.grid.getColIndexById("process");
		activityGrid.grid.filterByPro(colIndex, function(val) {
			var processData = justep.xbl("allProcess");
			var process = processData.getValue("process");
			return val == process;
		});
		var activityData = justep.xbl("allActivity");
		if (activityData.getCount() > 0) {
			activityData.setIndex(0);
		}
	}
}
detailData.grid1AfterIndexChanged = function(event){
	filterActivity();
};
function loadActivities() {
	var activityData = justep.xbl("allActivity");
	var process = activityData.getValue("process");
	var activity = activityData.getValue("activity");
	var param = new justep.Request.ActionParam();
	param.setString("process", process);
	param.setString("activity", activity);
	var result = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
		"queryCustomizedRange2Action", param, null, null, true);
	if (justep.Request.isBizSuccess(result)) {
		var rowsContent = "<rows>";
		var items = justep.XML.eval(result.responseXML, "//item");
		if (items.length > 0) {
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				rowsContent += "<row>";
				rowsContent += "<cell>" + item.getAttribute("activity") + "</cell>";
				rowsContent += "<cell>" + item.getAttribute("label") + "</cell>";
				rowsContent += "</row>";
				if (item.getAttribute("isEnd")) {
					detailData.endActivities = item.getAttribute("activity");;
				}
				var tag = item.getAttribute("tag");
				if (tag){
					detailData.activityTags[item.getAttribute("activity")] = tag;
				}
			}
			rowsContent += "<row>";
			rowsContent += "<cell>and</cell>";
			rowsContent += "<cell>And环节</cell>";
			rowsContent += "</row>";
			rowsContent += "<row>";
			rowsContent += "<cell>xor</cell>";
			rowsContent += "<cell>Xor环节</cell>";
			rowsContent += "</row>";
			rowsContent += "<row>";
			rowsContent += "<cell>sequence</cell>";
			rowsContent += "<cell>Sequence环节</cell>";
			rowsContent += "</row>";
		}
		rowsContent += "</rows>";
		var activityData = justep.xbl("activities");
		activityData.loadXML(rowsContent, null, false, false);
	}
};
detailData.tabPage2Select = function(event){
	loadActivities();
};
function allowAddChild() {
	var templateData = justep.xbl("template");
	return (templateData.getIndex() > -1);
};
function allowDelete() {
	var templateData = justep.xbl("template");
	return (templateData.getIndex() > -1);
};
function allowClear() {
	var templateData = justep.xbl("template");
	return (templateData.getCount() - 1 > -1);
};
function allowMoveUp() {
	var templateData = justep.xbl("template");
	var currRowIndex = templateData.getIndex();
	var allow = (currRowIndex > 0);
	if (allow) {
		var currRowId = templateData.getRowId(currRowIndex);
		var currRowSN = getRowSN(templateData, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var lastIndex = currRowSNPaths.length - 1;
		allow = (currRowSNPaths[lastIndex] != "1");
	}
	return allow;
};
function allowMoveDown() {
	var templateData = justep.xbl("template");
	var rowCount = templateData.getCount();
	var currRowIndex = templateData.getIndex();
	var allow = (currRowIndex > -1)
			&& (currRowIndex < rowCount - 1);
	if (allow) {
		var currRowId = templateData.getRowId(currRowIndex);
		var currRowSN = getRowSN(templateData, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var nextRowIndex = currRowIndex + 1;
		var nextRowId = templateData.getRowId(nextRowIndex);
		var nextRowSN = getRowSN(templateData, nextRowId);
		var nextRowSNPaths = nextRowSN.split(".");
		allow = (nextRowSNPaths.length == currRowSNPaths.length);
		var rowCount = templateData.getCount();
		while (!allow && (nextRowIndex < rowCount - 1)) {
			nextRowIndex++;
			nextRowId = templateData.getRowId(nextRowIndex);
			nextRowSN = getRowSN(templateData, nextRowId);
			nextRowSNPaths = nextRowSN.split(".");
			allow = (nextRowSNPaths.length == currRowSNPaths.length);
		}
	}
	return allow;
};
detailData.trigger3Click = function(event){
	justep.xbl("dialog2").open();
};
function dialog2Open(event) {
	var nameInput = document.getElementById("template-name");
	if (nameInput) {
		nameInput.value = "";
	}
}

detailData.closeEditName = function(event){
	try {
		var nameInput = document.getElementById("template-name");
		var name = nameInput.value;
		if (name == "") {
			alert("模板名称不能为空！");
			return;
		}

		if (isNameDuplicated(name, true)) {
			alert("名称为“" + name + "”的模板已经存在!");
			return;
		}

		var processData = justep.xbl("allProcess");
		var process = processData.getValue("process");
		var processName = processData.getValue("processName");
		var activityData = justep.xbl("allActivity");
		var activity = activityData.getValue("activity");
		var activityName = activityData.getValue("activityName");
		
		var content = null;
		var content2 = null;
		if (detailData.type == "graph"){
			if (justep.xbl("designer")){
				var data = justep.xbl("designer").getData();
				content = data[0];
				content2 = data[1];
			}else{
				content = detailData.content;
				content2 = detailData.content2;
			}
			
		}else{
			content = generateTemplateContent();
		}
		
		var type = detailData.type;
		
		var scopeSelect = justep("select1");
		var scope = scopeSelect.value;
		
		var r = {
			"name": name,
			"scope": scope,
			"process": process,
			"processName": processName,
			"activity": activity,
			"activityName": activityName,
			"content": content,
			"content2": content2,
			"type": type,
			"isNew": true
		};
		
		justep.xbl("dialog2").close();
		justep.windowDialogReceiver.windowEnsure(r);
	} catch (err) {
		alert(err.message);
	}
};

function cancelEditName(event) {
	var dialogId = "dialog2";
	var dialog = justep.xbl(dialogId);
	if (dialog) {
		dialog.close();
	}
};
detailData.model1ModelConstruct = function(event){
};
detailData.model1Load = function(event){
};

detailData.tabPage3Select = function(event){
	detailData.graphLoaded = true;
	var designer = justep.xbl("designer");
	
	var processData = justep.xbl("allProcess");
	var process = processData.getValue("process");
	var activityData = justep.xbl("allActivity");
	var activity = activityData.getValue("activity");
	if (!process || (process=="")){
		alert("请选择一个流程!");
		return;
	}
	
	if (!activity || (activity=="")){
		alert("请选择一个环节!");
		return;
	}
	
	designer.init(process, activity, null);
	designer._designer.setLoadTmplBtnVisible(false);
	var data = [detailData.content, detailData.content2];
	designer.setData(data);
};

detailData.tabPage3DeSelect = function(event){
	var designer = justep.xbl("designer");
	var data = designer.getData();
	detailData.content = data[0];
	detailData.content2 = data[1];
};
