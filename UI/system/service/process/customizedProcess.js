var customizedProcess = {};
customizedCurrentIndex = -1;
endActivities = "";
activityTags = {};
isNewData = true;
customizedProcessTemplateLoaded = false;
customizedProcessTemplateName = "新建流程模板";

function generateGuid() {
	var guid = [];
	for (var i = 1; i <= 32; i++) {
		guid.push(Math.floor(Math.random() * 16.0).toString(16));
	}
	return guid.join("");
}

function insertRow(addChild) {
	/* 操作instance */
	var detailData = justep.xbl("detail");

	var newRowId = generateGuid();

	var rowCount = detailData.getCount();
	var currRowIndex = detailData.getIndex();
	var currRowId = detailData.getRowId(currRowIndex);
	var currRowSN = getRowSN(detailData, currRowId);
	var insertRowIndex = rowCount;
	if (rowCount > 0 && currRowIndex < rowCount) {
		if (!addChild) {
			insertRowIndex = currRowIndex + 1;
			if (insertRowIndex < rowCount) {
				var insertRowId = detailData.getRowId(insertRowIndex);
				var insertRowSN = getRowSN(detailData, insertRowId);
				while ((insertRowSN.split(".").length > currRowSN.split(".").length)
						&& (insertRowIndex < rowCount)) {
					insertRowIndex++;
					insertRowId = detailData.getRowId(insertRowIndex);
					insertRowSN = getRowSN(detailData, insertRowId);
				}
			}
		} else {
			insertRowIndex = currRowIndex + 1;
		}
	}
	detailData.insert(newRowId, insertRowIndex);
	detailData.setValue("is_customized", "0", newRowId);
	detailData.setValue("execute_mode", "temPreempt");
	detailData.setValue("execute_mode_label", "抢占");
	
	var activityData = justep.xbl("activities");
	if (activityData.getCount() == 4) {
		for (var i = 0; i < 4; i++) {
			var rowId = activityData.getRowId(i);
			var name = activityData.getValue("name", rowId);
			if (name != "and" && name != "xor" && name != "sequence") {
				var label = activityData.getValue("label", rowId);
				detailData.setValue("unit", name);
				detailData.setValue("unit_label", label);
				break;
			}
		}
	}

	if (rowCount == 0) {
		setRowSN(detailData, "1", newRowId);
	} else {
		if (!addChild) {
			var snPaths = currRowSN.split(".");
			if (currRowIndex > customizedCurrentIndex) {
				var lastIndex = snPaths.length - 1;
				snPaths[lastIndex] = parseInt(snPaths[lastIndex]) + 1;
				setRowSN(detailData, snPaths.join("."), newRowId);
			} else {
				var lastIndex = 0;
				var newSN = (parseInt(snPaths[0]) + 1).toString();
				setRowSN(detailData, newSN, newRowId);
			}
			resetRowSN(detailData, insertRowIndex + 1, rowCount + 1, lastIndex,
					true);
		} else {
			var newRowSN = currRowSN + ".1";
			setRowSN(detailData, newRowSN, newRowId);
			var lastIndex = newRowSN.split(".").length - 1;
			resetRowSN(detailData, insertRowIndex + 1, rowCount + 1, lastIndex,
					true);
		}
	}
}

function resetRowSN(data, startRowIndex, rowCount, changedIndex, add) {
	for (var i = startRowIndex; i < rowCount; i++) {
		var rowId = data.getRowId(i);
		var rowSN = getRowSN(data, rowId);
		var rowSNPaths = rowSN.split(".");
		if (rowSNPaths.length > changedIndex) {
			if (add) {
				rowSNPaths[changedIndex] = parseInt(rowSNPaths[changedIndex])
						+ 1;
			} else {
				rowSNPaths[changedIndex] = parseInt(rowSNPaths[changedIndex])
						- 1;
			}
			setRowSN(data, rowSNPaths.join("."), rowId);
		} else {
			break;
		}
	}
}

function allowDetailUnitCellEdit() {
	var detailData = justep.xbl("detail");
	var currRowIndex = detailData.getIndex();
	return (currRowIndex > customizedCurrentIndex);
}

function allowDetailCellEdit() {
	var detailData = justep.xbl("detail");
	var currRowIndex = detailData.getIndex();
	var currRowId = detailData.getRowId(currRowIndex);
	var type = detailData.getValue("type", currRowId);
	return (type=="activity") && (currRowIndex > customizedCurrentIndex);
}

function allowSelectTemplate() {
	var bRet = customizedCurrentIndex < 0;
	if (bRet) {
		document.getElementById("label13").style.color = "black";
	} else {
		document.getElementById("label13").style.color = "gray";
	}
	return bRet;
}

function allowAdd() {
	var detailData = justep.xbl("detail");
	return (detailData.getCount() == 0 || detailData.getIndex() > customizedCurrentIndex
			- 1);
}

function allowAddChild() {
	var detailData = justep.xbl("detail");
	return (detailData.getIndex() > customizedCurrentIndex);
}

function allowDelete() {
	var detailData = justep.xbl("detail");
	return (detailData.getIndex() > customizedCurrentIndex);
}

function allowClear() {
	var detailData = justep.xbl("detail");
	return (detailData.getCount() - 1 > customizedCurrentIndex);
}

function allowMoveUp() {
	var detailData = justep.xbl("detail");
	var currRowIndex = detailData.getIndex();
	var allow = (currRowIndex > customizedCurrentIndex + 1);
	if (allow) {
		var currRowId = detailData.getRowId(currRowIndex);
		var currRowSN = getRowSN(detailData, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var lastIndex = currRowSNPaths.length - 1;
		allow = (currRowSNPaths[lastIndex] != "1");
	}
	return allow;
}

function allowMoveDown() {
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	var currRowIndex = detailData.getIndex();
	var allow = (currRowIndex > customizedCurrentIndex)
			&& (currRowIndex < rowCount - 1);
	if (allow) {
		var currRowId = detailData.getRowId(currRowIndex);
		var currRowSN = getRowSN(detailData, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var nextRowIndex = currRowIndex + 1;
		var nextRowId = detailData.getRowId(nextRowIndex);
		var nextRowSN = getRowSN(detailData, nextRowId);
		var nextRowSNPaths = nextRowSN.split(".");
		allow = (nextRowSNPaths.length == currRowSNPaths.length);
		var rowCount = detailData.getCount();
		while (!allow && (nextRowIndex < rowCount - 1)) {
			nextRowIndex++;
			nextRowId = detailData.getRowId(nextRowIndex);
			nextRowSN = getRowSN(detailData, nextRowId);
			nextRowSNPaths = nextRowSN.split(".");
			allow = (nextRowSNPaths.length == currRowSNPaths.length);
		}
	}
	return allow;
}

function deleteRow() {
	/* 操作instance */
	var detailData = justep.xbl("detail");
	var currRowIndex = detailData.getIndex();
	var currRowId = detailData.getRowId(currRowIndex);
	var currRowSN = getRowSN(detailData, currRowId);
	var currRowSNPaths = currRowSN.split(".");
	var lastIndex = currRowSNPaths.length - 1;
	detailData.removeByIndex(currRowIndex);

	/* 删除子 */
	while (currRowIndex < detailData.getCount()) {
		var rowId = detailData.getRowId(currRowIndex);
		var rowSN = getRowSN(detailData, rowId);
		if ((rowSN.length >= currRowSN.length)
				&& rowSN.substring(0, currRowSN.length) == currRowSN) {
			detailData.removeByIndex(currRowIndex);
		} else {
			break;
		}
	}

	resetRowSN(detailData, currRowIndex, detailData.getCount(), lastIndex,
			false);

	detailData.xformsRefresh();
}

function sortRows() {
	var detailData = justep.xbl("detail");
	detailData.getStore().sortRows(0, "cus", "asc");
	var currIndex = detailData.getStore().getRowIndex(detailData.getStore().selectRowID);
	detailData.getStore().setIndex(currIndex);
}

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
}

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
}

function sn2DisplaySN(value) {
	var values = value.split(".");
	var len = values.length;
	var newValue = value;
	for (var i = 1; i < len; i++) {
		newValue = "　" + newValue;
	}
	return newValue;
}

function setRowSN(data, value, id) {
	var newValue = sn2DisplaySN(value);
	data.setValue("sn", newValue, id);
}

function getRowSN(data, id) {
	var value = data.getValue("sn", id);
	value = value.replace(/　/g, "");
	return value;
}

function model1Load(event) {
	var detailGrid = justep.xbl("grid1");
	detailGrid.grid.setCustomSorting(customSort, 0);

	loadActivities();

	var mainData = justep.xbl('main');
	var templateId = getTemplateId();
	mainData.setFilter("custom-filter", "SA_ProcessTemplate='" + templateId + "'");
	mainData.refreshData();
	var rowCount = mainData.getCount();
	if (rowCount == 0) {
		mainData.newData();
		var process = getProcess();
		var processLabel = getProcessLabel();
		mainData.setValue("sProcess", process);
		mainData.setValue("sProcessName", processLabel);
		mainData.setValue("sKindID", "instance");
	} else {
		refreshDetail();
		customizedCurrentIndex = getRowIndexBySN(getTemplateSequence());
		updateRowColor();
		isNewData = false;
	}
}

function updateRowColor() {
	var detailGrid = justep.xbl("grid1");
	var detailData = justep.xbl("detail");
	for (var i = 0; i <= customizedCurrentIndex; i++) {
		var currRowId = detailData.getRowId(i);
		detailGrid.grid.setRowColor(currRowId, "#D4D0C8");
	}
}

function loadActivities() {
	//var process = getProcess();
	//var activity = getActivity();
	var param = new justep.Request.ActionParam();
	param.setString("task", getTaskId());
	var result = justep.Request.sendBizRequest(null, null,
		"queryCustomizedRangeAction", param, null, null, true);
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
					endActivities = item.getAttribute("activity");;
				}
				
				var tag = item.getAttribute("tag");
				if (tag){
					activityTags[item.getAttribute("activity")] = tag;
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
}

function refreshDetail() {
	var mainData = justep.xbl("main");
	var content = mainData.getValue("sContent");
	if (justep.String.trim(content) != "") {
		var rowsContent = "<rows>";

		var doc = justep.XML.fromString(content);
		var iItems = justep.XML.eval(doc, "//i");
		if (iItems.length > 0) {
			for (var i = 0; i < iItems.length; i++) {
				var iItem = iItems[i];

				var unit = "";
				var unitLabel = "";
				var uEl = justep.XML.eval(iItem, "u", "single");
				if (uEl != null) {
					unit = uEl.text || uEl.textContent || "";
					unitLabel = uEl.getAttribute("l") || "";
				}

				var sn = "";
				var nEl = justep.XML.eval(iItem, "n", "single");
				if (nEl != null) {
					sn = nEl.text || nEl.textContent || "";
				}

				var type = "";
				var tEl = justep.XML.eval(iItem, "t", "single");
				if (tEl != null) {
					type = tEl.text || tEl.textContent || "";
				}

				var execMode = "";
				var execModeLabel = "";
				var orgName = "";
				var orgFId = "";
				var orgExpr = "";
				var eEl = justep.XML.eval(iItem, "e", "single");
				if (eEl != null) {
					execMode = eEl.getAttribute("m") || "";
					if (execMode.toLowerCase() == "tempreempt") {
						execModeLabel = "抢占";
					} else if (execMode.toLowerCase() == "temsequential") {
						execModeLabel = "顺序";
					} else if (execMode.toLowerCase() == "temsimultaneous") {
						execModeLabel = "同时";
					}

					var oItems = justep.XML.eval(eEl, "o");
					if (oItems.length > 0) {
						for (var j = 0; j < oItems.length; j++) {
							var oItem = oItems[j];
							var itemName = oItem.getAttribute("l") || "";
							if (orgName != "" && itemName != "") {
								orgName += ",";
							}
							orgName += itemName;
							var itemFId = oItem.getAttribute("fid") || "";
							if (orgFId != "" && itemFId != "") {
								orgFId += ",";
							}
							orgFId += itemFId;
							
							var itemExpr = oItem.getAttribute("expr") || "";
							if (orgExpr != "" && itemExpr != "") {
								orgExpr += ",";
							}
							orgExpr += itemExpr;
						}
					}
				}
				
				var isCustomized = "false";
				var fEl = justep.XML.eval(iItem, "c", "single");
				if (fEl != null) {
					isCustomized = fEl.text || fEl.textContent || "";
				}

				rowsContent += "<row>" + "<cell>" + sn2DisplaySN(sn)
						+ "</cell>" + "<cell>" + unitLabel + "</cell>"
						+ "<cell>" + execModeLabel + "</cell>" + "<cell>"
						+ orgName + "</cell>" + "<cell>"
						+ (isCustomized == "true" ? "1" : "0") + "</cell>"
						+ "<cell>" + unit + "</cell>" + "<cell>" + type
						+ "</cell>" + "<cell>" + execMode + "</cell>"
						+ "<cell>" + orgExpr + "</cell>" + "<cell>" + orgFId
						+ "</cell>" + "</row>";
			}
		}

		rowsContent += "</rows>";

		var detailData = justep.xbl("detail");
		detailData.loadXML(rowsContent, null, false, false);

		sortRows();
	}
}

function insertButtonClick(event) {
	insertRow(false);
}

function insertChildButtonClick(event) {
	insertRow(true);
}

function deleteButtonClick(event) {
	deleteRow();
}

function clearButtonClick(event) {
	var detailData = justep.xbl("detail");
	for (var i = detailData.getCount() - 1; i > customizedCurrentIndex; i--) {
		detailData.removeByIndex(i);
	}
	detailData.xformsRefresh();
}

function moveupButtonClick(event) {
	var detailData = justep.xbl("detail");
	var currRowIndex = detailData.getIndex();
	var currRowId = detailData.getRowId(currRowIndex);
	var currRowSN = getRowSN(detailData, currRowId);
	var currRowSNPaths = currRowSN.split(".");
	var lastIndex = currRowSNPaths.length - 1;

	var prevRowIndex = currRowIndex - 1;
	var prevRowId = detailData.getRowId(prevRowIndex);
	var prevRowSN = getRowSN(detailData, prevRowId);
	var prevRowSNPaths = prevRowSN.split(".");
	while ((prevRowSNPaths.length != currRowSNPaths.length) && prevRowIndex > 0) {
		prevRowIndex--;
		prevRowId = detailData.getRowId(prevRowIndex);
		prevRowSN = getRowSN(detailData, prevRowId);
		prevRowSNPaths = prevRowSN.split(".");
	}

	var currRowNewIndex = prevRowSNPaths[lastIndex];
	var prevRowNewIndex = currRowSNPaths[lastIndex];

	changePathValue(detailData, prevRowSN, prevRowIndex, lastIndex,
			prevRowNewIndex);
	changePathValue(detailData, currRowSN, currRowIndex, lastIndex,
			currRowNewIndex);

	sortRows();
}

function movedownButtonClick(event) {
	var detailData = justep.xbl("detail");
	var currRowIndex = detailData.getIndex();
	var currRowId = detailData.getRowId(currRowIndex);
	var currRowSN = getRowSN(detailData, currRowId);
	var currRowSNPaths = currRowSN.split(".");
	var lastIndex = currRowSNPaths.length - 1;

	var rowCount = detailData.getCount();
	var nextRowIndex = currRowIndex + 1;
	var nextRowId = detailData.getRowId(nextRowIndex);
	var nextRowSN = getRowSN(detailData, nextRowId);
	var nextRowSNPaths = nextRowSN.split(".");
	while ((nextRowSNPaths.length != currRowSNPaths.length)
			&& (nextRowIndex < rowCount - 1)) {
		nextRowIndex++;
		nextRowId = detailData.getRowId(nextRowIndex);
		nextRowSN = getRowSN(detailData, nextRowId);
		nextRowSNPaths = nextRowSN.split(".");
	}

	var currRowNewIndex = nextRowSNPaths[lastIndex];
	var nextRowNewIndex = currRowSNPaths[lastIndex];

	changePathValue(detailData, currRowSN, currRowIndex, lastIndex,
			currRowNewIndex);
	changePathValue(detailData, nextRowSN, nextRowIndex, lastIndex,
			nextRowNewIndex);

	sortRows();
}

function buildDetailData() {
	var result = "";
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	for (var i = 0; i < rowCount; i++) {
		var id = detailData.getRowId(i);

		result += "<i>";

		var unit = detailData.getValue("unit", id);
		var unitLabel = detailData.getValue("unit_label", id);
		result += "<u l=\"" + unitLabel + "\">" + unit + "</u>";

		var sn = getRowSN(detailData, id);
		result += "<n>" + sn + "</n>";

		var type = detailData.getValue("type", id);
		result += "<t>" + type + "</t>";

		var execMode = detailData.getValue("execute_mode", id);
		result += "<e m=\"" + execMode + "\">";

		var orgName = detailData.getValue("org_name", id);
		var orgFId = detailData.getValue("org_fid", id);
		var orgExpr = detailData.getValue("org_expr", id);
		var names = orgName.split(",");
		var ids = orgFId.split(",");
		var exprs = orgExpr.split(",");
		var len = Math.min(names.length, exprs.length);
		for (var j = 0; j < len; j++) {
			result += "<o l=\"" + names[j] + "\" fid=\"" + ids[j]
					+ "\" expr=\"" + exprs[j] + "\"/>";
		}

		result += "</e>";

		var isCustomized = detailData.getValue("is_customized", id);
		result += "<c>" + (isCustomized == "1" ? "true" : "false") + "</c>";

		result += "</i>";
	}
	if (result != "") {
		result = "<c>" + result + "</c>";
	}
	return result;
}

function dialog1Open(event) {
	var names = "";
	var ids = "";
	var detailData = justep.xbl("detail");
	var currIndex = detailData.getIndex();
	if (currIndex >= 0) {
		var currRowId = detailData.getRowId(currIndex);
		names = detailData.getValue("org_name", currRowId);
		ids = detailData.getValue("org_fid", currRowId);
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
	//var process = getProcess();
	//var activity = getActivity();
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	justep.Request.callURL(
			"/system/service/process/multiOrgPersonSelector.w?process=" + process
					+ "&activity=" + activity, "customized_frame1", "");
}

function dialog2Open(event) {
	var nameInput = document.getElementById("template-name");
	if (nameInput) {
		nameInput.value = customizedProcessTemplateName;
	}
}

function setExecutor(names, fids) {
	var detailData = justep.xbl("detail");
	var currIndex = detailData.getIndex();
	if (currIndex >= 0) {
		var currRowId = detailData.getRowId(currIndex);
		detailData.setValue("org_name", names.join(","), currRowId);
		detailData.setValue("org_fid", fids.join(","), currRowId);
		var exprs = "";
		for (var i = 0; i < fids.length; i++) {
			if (exprs != "") {
				exprs += ",";
			}
			exprs += "findOrgUnitsByFID('" + fids[i] + "')";
		}
		detailData.setValue("org_expr", exprs, currRowId);
	}
}

function grid1OrgNameButtonClick(event) {
	justep.xbl('dialog1').open();
}

function getRowIndexBySN(sn) {
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	var found = false;
	for (var i = 0; i < rowCount; i++) {
		var rowId = detailData.getRowId(i);
		var currSN = getRowSN(detailData, rowId);
		if (currSN == sn) {
			if (currSN.split(".").length == 1) {
				return i;
			}
			found = true;
		}
		if (found) {
			if ((i == rowCount - 1)) {
				return i;
			} else {
				var nextI = i + 1;
				var nextRowId = detailData.getRowId(nextI);
				var nextSN = getRowSN(detailData, nextRowId);
				if (nextSN.split(".").length == 1) {
					return i;
				}
			}
		}
	}
	return -1;
}

function getProcess() {
	if (typeof(customizedProcess) == "undefined") {
		var processEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/customized-process", "single");
		customizedProcess = processEl.text || processEl.textContent || "";
	}
	return customizedProcess;
}

function getProcessLabel() {
	if (typeof(customizedProcessLabel) == "undefined") {
		var processLabelEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/customized-process-label", "single");
		customizedProcessLabel = processLabelEl.text || processLabelEl.textContent || "";
	}
	return customizedProcessLabel;
}

function getActivity() {
	if (typeof(customizedActivity) == "undefined") {
		var activityEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/customized-activity", "single");
		customizedActivity = activityEl.text || activityEl.textContent || "";
	}
	return customizedActivity;
}

function getTaskId() {
	if (typeof(customizedTaskId) == "undefined") {
		var taskIdEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/task-id", "single");
		customizedTaskId = taskIdEl.text || taskIdEl.textContent || "";
	}
	return customizedTaskId;
}

function getTemplateId() {
	if (typeof(customizedTemplateId) == "undefined") {
		var templateIdEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/template-id", "single");
		customizedTemplateId = templateIdEl.text || templateIdEl.textContent || "";
	}
	return customizedTemplateId;
}

function getTemplateSequence() {
	if (typeof(customizedTemplateSequence) == "undefined") {
		var templateSequenceEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/template-sequence", "single");
		customizedTemplateSequence = templateSequenceEl.text
				|| templateSequenceEl.textContent || "";
	}
	return customizedTemplateSequence;
}

function getDialogId() {
	if (typeof(customizedDialogId) == "undefined") {
		var dialogIdEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/dialog-id", "single");
		customizedDialogId = dialogIdEl.text || dialogIdEl.textContent || "";
	}
	return customizedDialogId;
}

function trigger2Click(event) {
	var validated = validateDetailData();
	if (validated) {
		var mainData = justep.xbl("main");
		var sContent = buildDetailData();
		mainData.setValue("sContent", sContent);
		if (isNewData) {
			mainData.attachEvent(justep.XData.EVENT_SAVEDATA_BEFORE, startCustomized, mainData);
		}
		mainData.saveData();
		
		var dialogId = getDialogId();
		var dialog = parent.window.justep.xbl(dialogId);
		if (dialog) {
			dialog.close();
		}
	}
}

function startCustomized() {
	//var process = getProcess();
	//var activity = getActivity();
	var param = new justep.Request.ActionParam();
	param.setString("task", getTaskId());
	param.setString("template", this.getRowId());
	var result = justep.Request.sendBizRequest(null, null,
			"externalStartCustomizedProcessAction", param, null, null, true);
}

function validateDetailData() {
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	for (var i = 0; i < rowCount; i++) {
		if (!validateDetailDataRow(detailData, i, rowCount)) {
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
						+ "”: 当前环节是叶子节点，不能是And环节、Xor环节、if-else环节或Sequence环节!");
			}
		} else {
			var nextRowType = data.getValue("type", nextRowId);
			bRet = (currRowType == "and" || currRowType == "xor" || currRowType == "sequence" || currRowType == "if-else-activity");
			if (!bRet) {
				alert("序号“" + getRowSN(data, currRowId)
						+ "”: 当前环节不允许包含子节点，只有And环节、Xor环节、if-else环节和Sequence环节能包含子节点！");
			}
		}
	} else if (index == count - 1) {
		var currRowType = data.getValue("type", currRowId);
		bRet = !(currRowType == "and" || currRowType == "xor" || currRowType == "sequence" || currRowType == "if-else-activity");
		if (!bRet) {
			alert("序号“" + getRowSN(data, currRowId)
					+ "”: 当前环节是叶子节点，不能是And环节、Xor环节、if-else环节或Sequence环节!");
		}
	}
	if (bRet) {
		var currRowUnit = data.getValue("unit", currRowId);
		if (currRowUnit == "") {
			alert("序号“" + getRowSN(data, currRowId)
					+ "”: " + "环节不能为空!")
			bRet = false;
		}
	}
	return bRet;
}

function trigger3Click(event) {
	var dialogId = getDialogId();
	var dialog = parent.window.justep.xbl(dialogId);
	if (dialog) {
		dialog.close();
	}
}

function selectUnitCloseup(event) {
	var detailData = justep.xbl("detail");
	var index = detailData.getIndex();
	var id = detailData.getRowId(index);
	var type = "activity";
	if (event.value == "and") {
		type = "and";
	} else if (event.value == "xor") {
		type = "xor";
	} else if (event.value == "sequence") {
		type = "sequence";
	} else if (event.value == endActivities) {
		type = "end";
	}else{
		type = activityTags[event.value];
	}
	detailData.setValue("type", type, id);
	if (type != "activity") {
		detailData.setValue("execute_mode", "", id);
		detailData.setValue("execute_mode_label", "", id);
		detailData.setValue("org_name", "", id);
		detailData.setValue("org_fid", "", id);
		detailData.setValue("org_expr", "", id);
		detailData.setValue("is_customized", "0", id);
	} else {
		detailData.setValue("execute_mode", "temPreempt", id);
		detailData.setValue("execute_mode_label", "抢占", id);
	}
}

function cancelCustomized() {
	//var process = getProcess();
	//var activity = getActivity();
	var param = new justep.Request.ActionParam();
	param.setString("task", getTaskId());
	var result = justep.Request.sendBizRequest(null, null,
			"externalCancelCustomizedProcessAction", param, null, null, true);
}

function trigger1Click(event){
	var mainData = justep.xbl('main');
	if (mainData.deleteData()) {
		mainData.attachEvent(justep.XData.EVENT_SAVEDATA_BEFORE, cancelCustomized, mainData);
		mainData.saveData();
		var dialogId = getDialogId();
		var dialog = parent.window.justep.xbl(dialogId);
		if (dialog) {
			dialog.close();
		}
	}
}

function generateTemplateContent() {
	var data = justep.xbl("detail");
	if (data.getCount() > 0) {
		return data.getStore().serializePro(false);
	} else {
		return "<rows></rows>";
	}
}

function refreshCustomizedProcessTemplate() {
	var condInput = document.getElementById("condition_input");
	condInput.value = "";

	var taskId = getTaskId();
	var taskData = justep.xbl("bizData1");
	taskData.filters.clear();
	taskData.setFilter("_customFilter_", "SA_Task='" + taskId + "'");
	taskData.refreshData();
	if (taskData.getCount() > 0) {
		var process = taskData.getValue("sProcess");
		var activity = taskData.getValue("sActivity");
		var person = justep.Context.getCurrentPersonID();
		var filterText = "SA_ProcessTemplate.sProcess='" + process +
			"' AND SA_ProcessTemplate.sActivity='" + activity + 
			"' AND SA_ProcessTemplate.sKindID='template'" +
			" AND (SA_ProcessTemplate.sTypeID='grid' OR SA_ProcessTemplate.sTypeID IS NULL)";
			//"' AND ((SA_ProcessTemplate.sCreatorID='" + person +
			//"' AND SA_ProcessTemplate.sScopeID='private') OR (SA_ProcessTemplate.sScopeID='public'))";
		var data = justep.xbl("template");
		data.filters.clear();
		data.filters.setFilter("_default_filter_", filterText);
		data.refreshData();
	} else {
	
	}
}

function closeEditName(event) {
	try {
		var nameInput = document.getElementById("template-name");
		var name = nameInput.value;
		if (name == "") {
			alert("模板名称不能为空！");
			return;
		}
		var taskId = getTaskId();
		var taskData = justep.xbl("bizData1");
		taskData.filters.clear();
		taskData.setFilter("_customFilter_", "SA_Task='" + taskId + "'");
		taskData.refreshData();
		if (taskData.getCount() > 0) {
			var process = taskData.getValue("sProcess");
			var processName = taskData.getValue("sProcessName");
			var activity = taskData.getValue("sActivity");
			var activityName = taskData.getValue("sActivityName");
			
			var person = justep.Context.getCurrentPersonID();
			var content = generateTemplateContent();
			
			if (!customizedProcessTemplateLoaded) {
				refreshCustomizedProcessTemplate();
				customizedProcessTemplateLoaded = true;
			}
			
			var data = justep.xbl("template");
			var rowId = "";
			var values = [person, process, activity, name];
			var fields = ["sCreatorID", "sProcess", "sActivity", "sName"];
			var foundRows = data.locate(values, fields, true, true, false);
			if (foundRows.length > 0) {
				if (!confirm("名称为“" + name + "”的模板已经存在，继续保存将覆盖已有模板，是否继续？")) {
					return;
				}
				rowId = foundRows[0];
			} else {
				var rowCount = data.getCount();
				data.newData(rowCount);
				rowId = data.getRowId(rowCount);
			}
			data.setValue("sName", name, rowId);
			data.setValue("sKindID", "template", rowId);
			data.setValue("sScopeID", "private", rowId);
			data.setValue("sProcess", process, rowId);
			data.setValue("sProcessName", processName, rowId);
			data.setValue("sActivity", activity, rowId);
			data.setValue("sActivityName", activityName, rowId);
			data.setValue("sCreatorID", person, rowId);
			data.setValue("sContent", content, rowId);
			data.saveData();
			
			var dialogId = "dialog2";
			var dialog = justep.xbl(dialogId);
			if (dialog) {
				dialog.close();
			}
			alert("保存成功！");
		} else {
		}
	} catch (err) {
		alert(err.message);
	}
}

function cancelEditName(event) {
	var dialogId = "dialog2";
	var dialog = justep.xbl(dialogId);
	if (dialog) {
		dialog.close();
	}
}

function saveTemplate(event) {
	justep.xbl('dialog2').open();
}

function selectTemplate(event) {
	refreshCustomizedProcessTemplate();
	justep.xbl('dialog3').open();
}

function onTemplateTypeHtml(data) {
	if (data.value == "public") {
		return "系统";
	}
	return "用户";
}

function cancelSelectTemplate(event) {
	var dialogId = "dialog3";
	var dialog = justep.xbl(dialogId);
	if (dialog) {
		dialog.close();
	}
}

function selectTemplateDblClick(event) {
	var closeBtn = xforms("trigger4");
	if (closeBtn) {
		closeBtn.click();
	}
}

function closeSelectTemplate(event) {
	var data = justep.xbl("template");
	if (data.getCount() > 0) {
		var rowId = data.getRowId();
		var content = data.getValue("sContent", rowId);
		var detailData = justep.xbl("detail");
		detailData.loadXML(content, null, false, null);
		justep.xbl("main").setValue("sTemplateID", rowId);
		sortRows();
		updateRowColor();
		justep.xbl("detail").xformsRefresh();
	}
	var dialogId = "dialog3";
	var dialog = justep.xbl(dialogId);
	if (dialog) {
		dialog.close();
	}
}

function startQuery(event) {
	var condInput = document.getElementById("condition_input");
	var templateData = justep.xbl('template');
	templateData.setFilter("custom-filter", "(SA_ProcessTemplate.sName LIKE '%" + condInput.value + "%')");
	templateData.refreshData();
}

function startQuery1(event) {
	var keycode = event.keyCode || event.which || event.charCode; 
	if (keycode == 13) {
		startQuery(event);
	}
}

/**
	name:bizData#onRefreshCreateParam
	description: <b>[回调型事件]</b>业务新增数据创建新增参数事件，可以增加和修改用户自定义的参数
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"param":新增参数对象({@link justep.Request.ActionParam})}
*/
customizedProcess.templateRefreshCreateParam = function(event){
	if (event.param){
		event.param.setString("queryRange", "OWNER");
	}else{
		var msg = new justep.Message(justep.Message.JUSTEP230057);
		throw justep.Error.create(msg);
	}
	
};
