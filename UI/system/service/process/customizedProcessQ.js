var customizedProcessQ = {};
var customizedProcessQ = {
	customizedCurrentIndex: -1,
	isNewData: true,
	customizedProcessTemplateLoaded: false,
	customizedProcessTemplateName: "新建流程模板",
	executorFIds: [],
	executorFNames: []
};
customizedProcessQ.getProcess = function() {
	if (typeof(customizedProcess) == "undefined") {
		var processEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/customized-process", "single");
		customizedProcess = processEl.text || processEl.textContent || "";
	}
	return customizedProcess;
};
customizedProcessQ.getProcessLabel = function() {
	if (typeof(customizedProcessLabel) == "undefined") {
		var processLabelEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/customized-process-label", "single");
		customizedProcessLabel = processLabelEl.text || processLabelEl.textContent || "";
	}
	return customizedProcessLabel;
};
customizedProcessQ.getActivity = function() {
	if (typeof(customizedActivity) == "undefined") {
		var activityEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/customized-activity", "single");
		customizedActivity = activityEl.text || activityEl.textContent || "";
	}
	return customizedActivity;
};
customizedProcessQ.getTaskId = function() {
	if (typeof(customizedTaskId) == "undefined") {
		var taskIdEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/task-id", "single");
		customizedTaskId = taskIdEl.text || taskIdEl.textContent || "";
	}
	return customizedTaskId;
};
customizedProcessQ.getTemplateId = function() {
	if (typeof(customizedTemplateId) == "undefined") {
		var templateIdEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/template-id", "single");
		customizedTemplateId = templateIdEl.text || templateIdEl.textContent || "";
	}
	return customizedTemplateId;
};
customizedProcessQ.getTemplateSequence = function() {
	if (typeof(customizedTemplateSequence) == "undefined") {
		var templateSequenceEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/template-sequence", "single");
		customizedTemplateSequence = templateSequenceEl.text
				|| templateSequenceEl.textContent || "";
	}
	return customizedTemplateSequence;
};
customizedProcessQ.getDialogId = function() {
	if (typeof(customizedDialogId) == "undefined") {
		var dialogIdEl = justep.XML.eval(justep.Context._data,
				"//instance/input-param/dialog-id", "single");
		customizedDialogId = dialogIdEl.text || dialogIdEl.textContent || "";
	}
	return customizedDialogId;
};
customizedProcessQ.getRowIdByIndex = function(grid, index) {
	var tableEl = $(grid.domNode).firstElement();
	if (index >= 0 && index < tableEl.rows.length-2) {
		var row = tableEl.rows[index+2];
		return row.getAttribute("idd");
	}
	return -1;
};
customizedProcessQ.buttonQ10Click = function(event){
	var dialogId = this.getDialogId();
	var dialog = parent.window.justep.xbl(dialogId);
	if (dialog) {
		dialog.close();
	}
};
customizedProcessQ.refreshDetail = function() {
	var mainData = justep.xbl("main");
	var content = mainData.getValue("sContent");
	if (justep.String.trim(content) != "") {
		var rows = [];

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
				
				rows.push({
					id: this.generateGuid(),
					is_customized: (isCustomized == "true" ? "1" : "0"),
					execute_mode: execMode,
					execute_mode_label: execModeLabel,
					unit: unit,
					unit_label: unitLabel,
					sn: this.sn2DisplaySN(sn),
					type: type,
					org_name: orgName,
					org_fid: orgFId,
					org_expr: orgExpr
				});
			}
		}

		var detailData = justep.xbl("detail");
		detailData.clear();
		detailData.insert(rows, null, false);
	}
};
customizedProcessQ.updateRowColor = function() {
	var detailGrid = justep.xbl("dgridQ1");
	var tableEl = $(detailGrid.domNode).firstElement();
	for (var i = 2; i <= (this.customizedCurrentIndex+2); i++) {
		var row = tableEl.rows[i];
		row.style.backgroundColor = "#D4D0C8";
	}
};
customizedProcessQ.updateButtonState = function(currRowId) {
	var detailData = justep.xbl("detail");
	var detailGrid = justep.xbl("dgridQ1");
	
	var count = detailData.getCount();
	var index = -1;
	if (currRowId) {
		index = detailGrid.getRowIndex(currRowId);
	} else {
		var selectRowIds = detailGrid.getSelectedRowId();
		if (selectRowIds.length > 0) {
			index = detailGrid.getRowIndex(selectRowIds[0]);
		}
	}

	var insertBtn = justep.xbl("insertBtn");
	insertBtn.setDisabled(!(count == 0 || index > this.customizedCurrentIndex - 1));
	
	var insertChildBtn = justep.xbl("insertChildBtn");
	insertChildBtn.setDisabled(!(index > this.customizedCurrentIndex));

	var modifyBtn = justep.xbl("modifyBtn");
	modifyBtn.setDisabled(!(index > this.customizedCurrentIndex));

	var deleteBtn = justep.xbl("deleteBtn");
	deleteBtn.setDisabled(!(index > this.customizedCurrentIndex));
	
	var clearBtn = justep.xbl("clearBtn");
	clearBtn.setDisabled(!(count-1 > this.customizedCurrentIndex));

	var moveupBtn = justep.xbl("moveupBtn");
	moveupBtn.setDisabled(!this.allowMoveUp(currRowId));

	var movedownBtn = justep.xbl("movedownBtn");
	movedownBtn.setDisabled(!this.allowMoveDown(currRowId));
	
	var selectTemplateBtn = justep.xbl("selectTemplateBtn");
	selectTemplateBtn.setDisabled(!(this.customizedCurrentIndex < 0));
};
customizedProcessQ.allowMoveUp = function(rowId) {
	var detailData = justep.xbl("detail");
	var detailGrid = justep.xbl("dgridQ1");
	var currRowId = "";
	var currIndex = -1;
	if (rowId) {
		currRowId = rowId;
		currIndex = detailGrid.getRowIndex(currRowId);
	} else {
		var selectRowIds = detailGrid.getSelectedRowId();
		if (selectRowIds.length > 0) {
			currRowId = selectRowIds[0];
			currIndex = detailGrid.getRowIndex(currRowId);
		}
	}
	var allow = (currIndex > this.customizedCurrentIndex + 1);
	if (allow) {
		var currRowSN = this.getRowSN(detailData, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var lastIndex = currRowSNPaths.length - 1;
		allow = (currRowSNPaths[lastIndex] != "1");
	}
	return allow;
};
customizedProcessQ.allowMoveDown = function(rowId) {
	var detailData = justep.xbl("detail");
	var detailGrid = justep.xbl("dgridQ1");
	var rowCount = detailData.getCount();
	var currRowId = "";
	var currRowIndex = -1;
	if (rowId) {
		currRowId = rowId;
		currRowIndex = detailGrid.getRowIndex(currRowId);
	} else {
		var selectRowIds = detailGrid.getSelectedRowId();
		if (selectRowIds.length > 0) {
			currRowId = selectRowIds[0];
			currRowIndex = detailGrid.getRowIndex(currRowId);
		}
	}
	var allow = (currRowIndex > this.customizedCurrentIndex)
			&& (currRowIndex < rowCount - 1);
	if (allow) {
		var currRowSN = this.getRowSN(detailData, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var nextRowIndex = currRowIndex + 1;
		var nextRowId = this.getRowIdByIndex(detailGrid, nextRowIndex);
		var nextRowSN = this.getRowSN(detailData, nextRowId);
		var nextRowSNPaths = nextRowSN.split(".");
		allow = (nextRowSNPaths.length == currRowSNPaths.length);
		var rowCount = detailData.getCount();
		while (!allow && (nextRowIndex < rowCount - 1)) {
			nextRowIndex++;
			nextRowId = this.getRowIdByIndex(detailGrid, nextRowIndex);
			nextRowSN = this.getRowSN(detailData, nextRowId);
			nextRowSNPaths = nextRowSN.split(".");
			allow = (nextRowSNPaths.length == currRowSNPaths.length);
		}
	}
	return allow;
};
customizedProcessQ.compare = function(a, b) {
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
customizedProcessQ.customSort = function(data, id1, id2, column) {
	var a = data.getValue(column, id1);
	var b = data.getValue(column, id2);
	return customizedProcessQ.compare(a, b);
};
customizedProcessQ.getRowIndexBySN = function(sn) {
	var detailGrid = justep.xbl("dgridQ1");
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	var found = false;
	for (var i = 0; i < rowCount; i++) {
		var rowId = this.getRowIdByIndex(detailGrid, i);
		var currSN = this.getRowSN(detailData, rowId);
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
				var nextRowId = this.getRowIdByIndex(detailGrid, nextI);
				var nextSN = this.getRowSN(detailData, nextRowId);
				if (nextSN.split(".").length == 1) {
					return i;
				}
			}
		}
	}
	return -1;
};
customizedProcessQ.model1Load = function(){
	var detailGrid = justep.xbl("dgridQ1");
	detailGrid.setSort({
		column: "sn",
		comparer: customizedProcessQ.customSort
	});
	
	var mainData = justep.xbl('main');
	var templateId = this.getTemplateId();
	mainData.getFilter().setFilter("custom-filter", "SA_ProcessTemplate='" + templateId + "'");
	mainData.refreshData();
	var rowCount = mainData.getCount();
	if (rowCount == 0) {
		mainData.newData();
		var process = this.getProcess();
		var processLabel = this.getProcessLabel();
		mainData.setValue("sProcess", process);
		mainData.setValue("sProcessName", processLabel);
		mainData.setValue("sKindID", "instance");
	} else {
		this.refreshDetail();
		detailGrid.refresh();
		this.customizedCurrentIndex = this.getRowIndexBySN(this.getTemplateSequence());
		this.updateRowColor();
		this.isNewData = false;
		if (justep.xbl("detail").getCount() > 0) {
			var rowId = this.getRowIdByIndex(detailGrid, 0);
			detailGrid.selectedRow(rowId, true);
		}
	}

	customizedProcessQ.updateButtonState();
};
customizedProcessQ.generateGuid = function() {
	var guid = [];
	for (var i = 1; i <= 32; i++) {
		guid.push(Math.floor(Math.random() * 16.0).toString(16));
	}
	return guid.join("");
};
customizedProcessQ.sn2DisplaySN = function(value) {
	var values = value.split(".");
	var len = values.length;
	var newValue = value;
	for (var i = 1; i < len; i++) {
		newValue = "　" + newValue;
	}
	return newValue;
};
customizedProcessQ.setRowSN = function(data, value, id) {
	var newValue = this.sn2DisplaySN(value);
	data.setValue("sn", newValue, id);
};
customizedProcessQ.getRowSN = function(data, id) {
	var value = data.getValue("sn", id);
	value = value.replace(/　/g, "");
	return value;
};
customizedProcessQ.resetRowSN = function(grid, data, startRowIndex, rowCount, changedIndex, add) {
	var tableEl = $(grid.domNode).firstElement();
	for (var i = startRowIndex; i < rowCount; i++) {
		var row = tableEl.rows[i + 2];
		var rowId = row.getAttribute("idd");
		var rowSN = this.getRowSN(data, rowId);
		var rowSNPaths = rowSN.split(".");
		if (rowSNPaths.length > changedIndex) {
			if (add) {
				rowSNPaths[changedIndex] = parseInt(rowSNPaths[changedIndex]) + 1;
			} else {
				rowSNPaths[changedIndex] = parseInt(rowSNPaths[changedIndex]) - 1;
			}
			this.setRowSN(data, rowSNPaths.join("."), rowId);
		} else {
			break;
		}
	}
};
customizedProcessQ.insertRow = function(data) {
	var detailData = justep.xbl("detail");
	var detailGrid = justep.xbl("dgridQ1");
	
	var newRowId = customizedProcessQ.generateGuid();
	
	var rowCount = detailData.getCount();
	var selectRowIds = detailGrid.getSelectedRowId();
	var currRowIndex = -1;
	var currRowSN = "";
	if (selectRowIds.length > 0) {
		currRowIndex = detailGrid.getRowIndex(selectRowIds[0]);
		currRowSN = this.getRowSN(detailData, selectRowIds[0]);
	}

	var insertRowIndex = rowCount;
	if (rowCount > 0 && currRowIndex < rowCount) {
		if (!data.addChild) {
			insertRowIndex = currRowIndex + 1;
			if (insertRowIndex < rowCount) {
				var insertRowId = this.getRowIdByIndex(detailGrid, insertRowIndex);
				var insertRowSN = this.getRowSN(detailData, insertRowId);
				while ((insertRowSN.split(".").length > currRowSN.split(".").length)
						&& (insertRowIndex < rowCount)) {
					insertRowIndex++;
					if (insertRowIndex < rowCount) {
						insertRowId = this.getRowIdByIndex(detailGrid, insertRowIndex);
						insertRowSN = this.getRowSN(detailData, insertRowId);
					} else {
						break;
					}
				}
			}
		} else {
			insertRowIndex = currRowIndex + 1;
		} 
	}
	
	var newSN = "1";
	var needResetSN = false;
	var lastIndex = -1;
	if (rowCount > 0) {
		if (!data.addChild) {
			var snPaths = currRowSN.split(".");
			if (currRowIndex > this.customizedCurrentIndex) {
				lastIndex = snPaths.length - 1;
				snPaths[lastIndex] = parseInt(snPaths[lastIndex]) + 1;
				newSN = snPaths.join(".");
			} else {
				lastIndex = 0;
				newSN = (parseInt(snPaths[0]) + 1).toString();
			}
		} else {
			newSN = currRowSN + ".1";
			lastIndex = newSN.split(".").length - 1;
		}
		needResetSN = true;
	}
	
	var fids = this.executorFIds.join(",");
	var fnames = this.executorFNames.join(",");
	var exprs = "";
	/*hcr 解决quick中执行者不起作用的bug*/
	for (var i = 0; i < this.executorFIds.length; i++) {
		if (exprs != "") {
			exprs += ",";
		}
		exprs += "findOrgUnitsByFID('" + this.executorFIds[i] + "')";
	}
	/*
	for (var i = 0; i < fids.length; i++) {
		if (exprs != "") {
			exprs += ",";
		}
		exprs += "findOrgUnitsByFID('" + fids[i] + "')";
	}
	*/
	var rowData = {
		id: newRowId,
		is_customized: data.isCustomized,
		execute_mode: data.executeMode,
		execute_mode_label: data.executeModeLabel,
		unit: data.unit,
		unit_label: data.unitLabel,
		sn: this.sn2DisplaySN(newSN),
		type: data.type,
		org_name: fnames,
		org_fid: fids,
		org_expr: exprs
	};
	detailData.insert([rowData], null, false);
	
	if (needResetSN) {
		this.resetRowSN(detailGrid, detailData, insertRowIndex, rowCount, lastIndex, true);
	}
	
	detailGrid.refresh();
	this.updateRowColor();
	detailGrid.selectedRow(newRowId, true);
};
customizedProcessQ.deleteRow = function() {
	var detailGrid = justep.xbl("dgridQ1");
	var detailData = justep.xbl("detail");
	
	var selectRowIds = detailGrid.getSelectedRowId();
	if (selectRowIds.length > 0) {
		var currRowId = selectRowIds[0];
		var currRowIndex = detailGrid.getRowIndex(currRowId);
		if (currRowIndex > this.customizedCurrentIndex) {
			var currRowSN = this.getRowSN(detailData, currRowId);
			var currRowSNPaths = currRowSN.split(".");
			var lastIndex = currRowSNPaths.length - 1;
			detailData.remove(currRowId);
		
			/*删除子*/
			while (currRowIndex < detailData.getCount()) {
				var rowId = this.getRowIdByIndex(detailGrid, currRowIndex);
				var rowSN = this.getRowSN(detailData, rowId);
				if ((rowSN.length >= currRowSN.length)
						&& rowSN.substring(0, currRowSN.length) == currRowSN) {
					detailData.remove(rowId);
				} else {
					break;
				}
			}
			
			var rowCount = detailData.getCount();
			this.resetRowSN(detailGrid, detailData, currRowIndex, rowCount, lastIndex, false);
			detailGrid.refresh();
			this.updateRowColor();
			
			if (currRowIndex < rowCount) {
				var rowId = this.getRowIdByIndex(detailGrid, currRowIndex);
				detailGrid.selectedRow(rowId, true);
			} else {
				var rowId = this.getRowIdByIndex(detailGrid, rowCount-1);
				detailGrid.selectedRow(rowId, true);
			}
		}
	}
	
	this.updateButtonState();
};
customizedProcessQ.setExecutors = function(fids, fnames) {
	customizedProcessQ.executorFIds = fids;
	customizedProcessQ.executorFNames = fnames;
};
customizedProcessQ.openSelectDlg = function() {
	var editDlg = justep.xbl("editDlg");
	editDlg.close();

	var selectDlg = justep.xbl("selectDlg");
	selectDlg.open({
		process: customizedProcessQ.getProcess(),
		activity: customizedProcessQ.getActivity(),
		setExecutorsFunc: customizedProcessQ.setExecutors
	});
};
customizedProcessQ.insertBtnClick = function(event){
	this.executorFIds = [];
	this.executorFNames = [];

	var editDlg = justep.xbl("editDlg");
	editDlg.open({
		process: this.getProcess(),
		activity: this.getActivity(),
		taskId: this.getTaskId(),
		isNew: true,
		addChild: false,
		executorFunc: customizedProcessQ.openSelectDlg,
		executorFIds: customizedProcessQ.executorFIds,
		executorFNames: customizedProcessQ.executorFNames
	});
};
customizedProcessQ.insertChildBtnClick = function(event){
	var detailGrid = justep.xbl("dgridQ1");
	var index = -1;
	var selectRowIds = detailGrid.getSelectedRowId();
	if (selectRowIds.length > 0) {
		index = detailGrid.getRowIndex(selectRowIds[0]);
	}
	if (index > this.customizedCurrentIndex) {
		this.executorFIds = [];
		this.executorFNames = [];
	
		var editDlg = justep.xbl("editDlg");
		editDlg.open({
			process: this.getProcess(),
			activity: this.getActivity(),
			taskId: this.getTaskId(),
			isNew: true,
			addChild: true,
			executorFunc: customizedProcessQ.openSelectDlg,
			executorFIds: customizedProcessQ.executorFIds,
			executorFNames: customizedProcessQ.executorFNames
		});
	}
};
customizedProcessQ.editDlgReceive = function(event){
	if (event.data.isNew) {
		customizedProcessQ.insertRow(event.data);
		customizedProcessQ.updateButtonState();
	} else {
		var detailGrid = justep.xbl("dgridQ1");
		var detailData = justep.xbl("detail");
		
		var selectRowIds = detailGrid.getSelectedRowId();
		if (selectRowIds.length > 0) {
			var currRowId = selectRowIds[0];
			detailData.setValue("unit", event.data.unit, currRowId);
			detailData.setValue("unit_label", event.data.unitLabel, currRowId);
			detailData.setValue("execute_mode", event.data.executeMode, currRowId);
			detailData.setValue("execute_mode_label", event.data.executeModeLabel, currRowId);
			detailData.setValue("is_customized", event.data.isCustomized, currRowId);
			detailData.setValue("type", event.data.type, currRowId);
			
			var fids = customizedProcessQ.executorFIds.join(",");
			var fnames = customizedProcessQ.executorFNames.join(",");
			var exprs = "";
			/*hcr 解决quick中执行者不起作用的bug*/
			for (var i = 0; i < customizedProcessQ.executorFIds.length; i++) {
				if (exprs != "") {
					exprs += ",";
				}
				exprs += "findOrgUnitsByFID('" + customizedProcessQ.executorFIds[i] + "')";
			}
			/*
			for (var i = 0; i < fids.length; i++) {
				if (exprs != "") {
					exprs += ",";
				}
				exprs += "findOrgUnitsByFID('" + fids[i] + "')";
			}
			*/
			detailData.setValue("org_fid", fids, currRowId);
			detailData.setValue("org_name", fnames, currRowId);
			detailData.setValue("org_expr", exprs, currRowId);
		}
	}
};
customizedProcessQ.dgridQ1RenderCell = function(event){
	if (event.ref == "org_name") {
		if (event.value == "") {
			event.value = "　";
		}
	} else if (event.ref == "is_customized") {
		var detailData = justep.xbl("detail");
		var isCustomized = detailData.getValue("is_customized", event.rowId);
		if (isCustomized == "0") {
			event.value = "否";
		} else {
			event.value = "是";
		}
	}
};
customizedProcessQ.deleteBtnClick = function(event){
	customizedProcessQ.deleteRow();
};
customizedProcessQ.clearBtnClick = function(event){
	var detailGrid = justep.xbl("dgridQ1");
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	for (var i = rowCount-1; i > this.customizedCurrentIndex; i--) {
		var rowId = this.getRowIdByIndex(detailGrid, i);
		detailData.remove(rowId);
	}
	rowCount = detailData.getCount();
	if (rowCount > 0) {
		var rowId = this.getRowIdByIndex(detailGrid, 0);
		detailGrid.selectedRow(rowId, true);
	}
	this.updateButtonState();
};
customizedProcessQ.modifyBtnClick = function(event){
	var detailGrid = justep.xbl("dgridQ1");
	var detailData = justep.xbl("detail");
	
	var selectRowIds = detailGrid.getSelectedRowId();
	if (selectRowIds.length > 0) {
		var currRowId = selectRowIds[0];
		var currRowIndex = detailGrid.getRowIndex(currRowId);
		if (currRowIndex > this.customizedCurrentIndex) {
			var unit = detailData.getValue("unit", currRowId);
			var unitLabel = detailData.getValue("unit_label", currRowId);
			var executeMode = detailData.getValue("execute_mode", currRowId);
			var executeModeLabel = detailData.getValue("execute_mode_label", currRowId);
			var isCustomized = detailData.getValue("is_customized", currRowId);
	
			var editDlg = justep.xbl("editDlg");
			editDlg.open({
				process: this.getProcess(),
				activity: this.getActivity(),
				taskId: this.getTaskId(),
				isNew: false,
				unit: unit,
				unitLabel: unitLabel,
				executeMode: executeMode,
				executeModeLabel: executeModeLabel,
				isCustomized: isCustomized,
				executorFunc: customizedProcessQ.openSelectDlg,
				executorFIds: customizedProcessQ.executorFIds,
				executorFNames: customizedProcessQ.executorFNames
			});
		}
	}
};
customizedProcessQ.validateDetailDataRow = function(data, index, count) {
	var bRet = true;
	var detailGrid = justep.xbl("dgridQ1");
	var currRowId = this.getRowIdByIndex(detailGrid, index);
	if (index < count - 1) {
		var currRowSN = this.getRowSN(data, currRowId);
		var currRowSNPaths = currRowSN.split(".");
		var currRowType = data.getValue("type", currRowId);
		var nextIndex = index + 1;
		var nextRowId = this.getRowIdByIndex(detailGrid, nextIndex);
		var nextRowSN = this.getRowSN(data, nextRowId);
		var nextRowSNPaths = nextRowSN.split(".");
		if (nextRowSNPaths.length <= currRowSNPaths.length) {
			bRet = !(currRowType == "and" || currRowType == "xor" || currRowType == "sequence");
			if (!bRet) {
				alert("序号“" + this.getRowSN(data, currRowId)
						+ "”: 当前环节是叶子节点，不能是And环节、Xor环节或Sequence环节!");
			}
		} else {
			var nextRowType = data.getValue("type", nextRowId);
			bRet = (currRowType == "and" || currRowType == "xor" || currRowType == "sequence");
			if (!bRet) {
				alert("序号“" + this.getRowSN(data, currRowId)
						+ "”: 当前环节不允许包含子节点，只有And环节、Xor环节和Sequence环节能包含子节点！");
			}
		}
	} else if (index == count - 1) {
		var currRowType = data.getValue("type", currRowId);
		bRet = !(currRowType == "and" || currRowType == "xor" || currRowType == "sequence");
		if (!bRet) {
			alert("序号“" + this.getRowSN(data, currRowId)
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
};
customizedProcessQ.validateDetailData = function() {
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	for (var i = 0; i < rowCount; i++) {
		if (!this.validateDetailDataRow(detailData, i, rowCount)) {
			return false;
		}
	}
	return true;
};
customizedProcessQ.buildDetailData = function() {
	var result = "";
	var detailGrid = justep.xbl("dgridQ1");
	var detailData = justep.xbl("detail");
	var rowCount = detailData.getCount();
	for (var i = 0; i < rowCount; i++) {
		var id = this.getRowIdByIndex(detailGrid, i);

		result += "<i>";

		var unit = detailData.getValue("unit", id);
		var unitLabel = detailData.getValue("unit_label", id);
		result += "<u l=\"" + unitLabel + "\">" + unit + "</u>";

		var sn = this.getRowSN(detailData, id);
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
};
customizedProcessQ.buttonQ9Click = function(event){
	var validated = this.validateDetailData();
	if (validated) {
		var mainData = justep.xbl("main");
		var sContent = this.buildDetailData();
		mainData.setValue("sContent", sContent);
		mainData.saveData();
		
		var dialogId = this.getDialogId();
		var dialog = parent.window.justep.xbl(dialogId);
		if (dialog) {
			dialog.close();
		}
	}
};
customizedProcessQ.mainBeforeSave = function(event){
	if (customizedProcessQ.isNewData) {
		var process = customizedProcessQ.getProcess();
		var activity = customizedProcessQ.getActivity();
		var param = new justep.Request.ActionParam();
		param.setString("task", customizedProcessQ.getTaskId());
		param.setString("template", this.getID());
		var result = justep.Request.sendBizRequest(process, activity,
				"externalStartCustomizedProcessAction", param, null, null, true);
	}
};
customizedProcessQ.changePathValue = function(data, currSN, index, pos, newValue) {
	var rowCount = data.getCount();
	if (index < rowCount) {
		var detailGrid = justep.xbl("dgridQ1");
		var currSNPaths = currSN.split(".");
		var id = this.getRowIdByIndex(detailGrid, index);
		var sn = this.getRowSN(data, id);
		var paths = sn.split(".");
		if ((paths.length > currSNPaths.length) || (sn == currSN)) {
			paths[pos] = newValue;
			this.setRowSN(data, paths.join("."), id);
			this.changePathValue(data, currSN, index + 1, pos, newValue);
		}
	}
};
customizedProcessQ.moveupBtnClick = function(event){
	var detailGrid = justep.xbl("dgridQ1");
	var detailData = justep.xbl("detail");
	var selectRowIds = detailGrid.getSelectedRowId();
	if (selectRowIds.length > 0) {
		var currRowId = selectRowIds[0];
		var currRowIndex = detailGrid.getRowIndex(currRowId);
		if (currRowIndex > this.customizedCurrentIndex + 1) {
			var currRowSN = this.getRowSN(detailData, currRowId);
			var currRowSNPaths = currRowSN.split(".");
			var lastIndex = currRowSNPaths.length - 1;
		
			var prevRowIndex = currRowIndex - 1;
			var prevRowId = this.getRowIdByIndex(detailGrid, prevRowIndex);
			var prevRowSN = this.getRowSN(detailData, prevRowId);
			var prevRowSNPaths = prevRowSN.split(".");
			while ((prevRowSNPaths.length != currRowSNPaths.length) && prevRowIndex > 0) {
				prevRowIndex--;
				prevRowId = this.getRowIdByIndex(detailGrid, prevRowIndex);
				prevRowSN = this.getRowSN(detailData, prevRowId);
				prevRowSNPaths = prevRowSN.split(".");
			}
		
			var currRowNewIndex = prevRowSNPaths[lastIndex];
			var prevRowNewIndex = currRowSNPaths[lastIndex];
		
			this.changePathValue(detailData, prevRowSN, prevRowIndex, lastIndex,
					prevRowNewIndex);
			this.changePathValue(detailData, currRowSN, currRowIndex, lastIndex,
					currRowNewIndex);
		
			detailGrid.refresh();
			this.updateRowColor();
			detailGrid.selectedRow(currRowId, true);
		}
	}
	this.updateButtonState();
};
customizedProcessQ.movedownBtnClick = function(event){
	var detailGrid = justep.xbl("dgridQ1");
	var detailData = justep.xbl("detail");
	var selectRowIds = detailGrid.getSelectedRowId();
	if (selectRowIds.length > 0) {
		var currRowId = selectRowIds[0];
		var currRowIndex = detailGrid.getRowIndex(currRowId);
		var rowCount = detailData.getCount();
		if (currRowIndex > this.customizedCurrentIndex && currRowIndex < rowCount-1) {
			var currRowSN = this.getRowSN(detailData, currRowId);
			var currRowSNPaths = currRowSN.split(".");
			var lastIndex = currRowSNPaths.length - 1;
		
			var nextRowIndex = currRowIndex + 1;
			var nextRowId = this.getRowIdByIndex(detailGrid, nextRowIndex);
			var nextRowSN = this.getRowSN(detailData, nextRowId);
			var nextRowSNPaths = nextRowSN.split(".");
			while ((nextRowSNPaths.length != currRowSNPaths.length)
					&& (nextRowIndex < rowCount - 1)) {
				nextRowIndex++;
				nextRowId = this.getRowIdByIndex(detailGrid, nextRowIndex);
				nextRowSN = this.getRowSN(detailData, nextRowId);
				nextRowSNPaths = nextRowSN.split(".");
			}
		
			var currRowNewIndex = nextRowSNPaths[lastIndex];
			var nextRowNewIndex = currRowSNPaths[lastIndex];
		
			this.changePathValue(detailData, currRowSN, currRowIndex, lastIndex,
					currRowNewIndex);
			this.changePathValue(detailData, nextRowSN, nextRowIndex, lastIndex,
					nextRowNewIndex);
		
			detailGrid.refresh();
			this.updateRowColor();
			detailGrid.selectedRow(currRowId, true);
		}
	}
	this.updateButtonState();
};
customizedProcessQ.selectDlgClose = function(event){
	var editDlg = justep.xbl("editDlg");
	editDlg.open({
		openFromInner: true,
		executorFIds: customizedProcessQ.executorFIds,
		executorFNames: customizedProcessQ.executorFNames
	});
};
customizedProcessQ.dgridQ1IndexChange = function(event){
	var detailData = justep.xbl("detail");
	var fids = detailData.getValue("org_fid", event.newId);
	var fnames = detailData.getValue("org_name", event.newId);
	customizedProcessQ.executorFIds = fids.split(",");
	customizedProcessQ.executorFNames = fnames.split(",");
	customizedProcessQ.updateButtonState(event.newId);
};
customizedProcessQ.saveTemplateBtnClick = function(event) {
	var validated = this.validateDetailData();
	if (validated) {
		var nameInput = document.getElementById("template-name");
		nameInput.value = "";
		justep.xbl("dialogQ1").open();
	}
};
customizedProcessQ.generateTemplateContent = function() {
	var content = "<rows>";
	var detailData = justep.xbl("detail");
	var count = detailData.getCount();
	if (count > 0) {
		var detailGrid = justep.xbl("dgridQ1");
		for (var i = 0; i < count; i++) {
			var rowId = this.getRowIdByIndex(detailGrid, i);
			var isCustomized = detailData.getValue("is_customized", rowId);
			var executeMode = detailData.getValue("execute_mode", rowId);
			var executeModeLabel = detailData.getValue("execute_mode_label", rowId);
			var unit = detailData.getValue("unit", rowId);
			var unitLabel = detailData.getValue("unit_label", rowId);
			var sn = this.getRowSN(detailData, rowId);
			var type = detailData.getValue("type", rowId);
			var orgName = detailData.getValue("org_name", rowId);
			var orgFId = detailData.getValue("org_fid", rowId);
			var orgExpr = detailData.getValue("org_expr", rowId);
			
			var row = "<row id=\"" + rowId + "\">";
			row += "<cell>" + sn + "</cell>";
			row += "<cell>" + unitLabel + "</cell>";
			row += "<cell>" + executeModeLabel + "</cell>";
			row += "<cell>" + orgName + "</cell>";
			row += "<cell>" + isCustomized + "</cell>";
			row += "<cell>" + unit + "</cell>";
			row += "<cell>" + type + "</cell>";
			row += "<cell>" + executeMode + "</cell>";
			row += "<cell>" + orgExpr + "</cell>";
			row += "<cell>" + orgFId + "</cell>";
			row += "</row>";
			
			content += row;
		}
	}
	content += "</rows>";
	return content;
};
customizedProcessQ.refreshCustomizedProcessTemplate = function() {
	var condInput = document.getElementById("condition_input");
	condInput.value = "";

	var taskId = this.getTaskId();
	var taskData = justep.xbl("bizData1");
	taskData.getFilter().clear();
	taskData.getFilter().setFilter("_customFilter_", "SA_Task='" + taskId + "'");
	taskData.refreshData();
	if (taskData.getCount() > 0) {
		var process = taskData.getValue("sProcess");
		var activity = taskData.getValue("sActivity");
		var person = justep.Context.getCurrentPersonID();
		var filterText = "SA_ProcessTemplate.sProcess='" + process +
			"' AND SA_ProcessTemplate.sActivity='" + activity + 
			"' AND SA_ProcessTemplate.sKindID='template'";
		var data = justep.xbl("template");
		data.getFilter().clear();
		data.getFilter().setFilter("_default_filter_", filterText);
		data.refreshData();
	}
};
customizedProcessQ.buttonQ11Click = function(event) {
	try {
		var nameInput = document.getElementById("template-name");
		var name = nameInput.value;
		if (name == "") {
			alert("模板名称不能为空！");
			return;
		}
		var taskId = this.getTaskId();
		var taskData = justep.xbl("bizData1");
		taskData.getFilter().clear();
		taskData.getFilter().setFilter("_customFilter_", "SA_Task='" + taskId + "'");
		taskData.refreshData();
		if (taskData.getCount() > 0) {
			var process = taskData.getValue("sProcess");
			var processName = taskData.getValue("sProcessName");
			var activity = taskData.getValue("sActivity");
			var activityName = taskData.getValue("sActivityName");
			var person = justep.Context.getCurrentPersonID();
			var content = this.generateTemplateContent();
			if (!this.customizedProcessTemplateLoaded) {
				this.refreshCustomizedProcessTemplate();
				this.customizedProcessTemplateLoaded = true;
			}
			var data = justep.xbl("template");
			var rowId = "";
			var values = [person, process, activity, name];
			var fields = ["sCreatorID", "sProcess", "sActivity", "sName"];
			var foundRows = data.find(fields, values);
			if (foundRows.length > 0) {
				if (!confirm("名称为“" + name + "”的模板已经存在，继续保存将覆盖已有模板，是否继续？")) {
					return;
				}
				rowId = foundRows[0];
			} else {
				rowId = data.newData();
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
			
			var dialog = justep.xbl("dialogQ1");
			if (dialog) {
				dialog.close();
			}
			alert("保存成功！");
		}
	} catch (err) {
		alert(err.message);
	}
};
customizedProcessQ.buttonQ12Click = function(event) {
	justep.xbl("dialogQ1").close();
};
customizedProcessQ.selectTemplateBtnClick = function(event){
	if (this.customizedCurrentIndex < 0)
	{
		justep.xbl('dialogQ2').open();
	}
};
customizedProcessQ.getTemplateContentFromXml = function(data) {
	var result = [];
	var xmlData = justep.XML.fromString(data);
	var rows = justep.XML.eval(xmlData, "//row", justep.XML.ResultType.array);
	for (var i = 0; i < rows.length; i++) {
		var row = rows[i];
		var rowId = row.getAttribute("id");
		var sn = justep.XML.getNodeText(row, "cell[1]", "");
		var unitLabel = justep.XML.getNodeText(row, "cell[2]", "");
		var executeModeLabel = justep.XML.getNodeText(row, "cell[3]", "");
		var orgName = justep.XML.getNodeText(row, "cell[4]", "");
		var isCustomized = justep.XML.getNodeText(row, "cell[5]", "0");
		var unit = justep.XML.getNodeText(row, "cell[6]", "");
		var type = justep.XML.getNodeText(row, "cell[7]", "");
		var executeMode = justep.XML.getNodeText(row, "cell[8]", "");
		var orgExpr = justep.XML.getNodeText(row, "cell[9]", "");
		var orgFId = justep.XML.getNodeText(row, "cell[10]", "");
	
		result.push({
			id: rowId,
			is_customized: isCustomized,
			execute_mode: executeMode,
			execute_mode_label: executeModeLabel,
			unit: unit,
			unit_label: unitLabel,
			sn: this.sn2DisplaySN(sn),
			type: type,
			org_name: orgName,
			org_fid: orgFId,
			org_expr: orgExpr
		});
	}
	return result;
};
customizedProcessQ.buttonQ13Click = function(event) {
	var templateGrid = justep.xbl("dgridQ2");
	var selectRowIds = templateGrid.getSelectedRowId();
	if (selectRowIds.length > 0) {
		var selectRowId = selectRowIds[0];
		var templateData = justep.xbl("template");
		var content = templateData.getValue("sContent", selectRowId);
		var rows = customizedProcessQ.getTemplateContentFromXml(content);
		var detailData = justep.xbl("detail");
		detailData.clear();
		detailData.insert(rows, null, false);
		var detailGrid = justep.xbl("dgridQ1");
		detailGrid.refresh();
		this.updateRowColor();
		if (detailData.getCount() > 0) {
			var rowId = this.getRowIdByIndex(detailGrid, 0);
			detailGrid.selectedRow(rowId, true);
		}
	}
	justep.xbl('dialogQ2').close();
};
customizedProcessQ.buttonQ14Click = function(event) {
	justep.xbl('dialogQ2').close();
};
customizedProcessQ.startQuery = function() {
	var condInput = document.getElementById("condition_input");
	var templateData = justep.xbl('template');
	templateData.getFilter().setFilter("custom-filter", "(SA_ProcessTemplate.sName LIKE '%" + condInput.value + "%')");
	templateData.refreshData();
	if (templateData.getCount() > 0) {
		var templateGrid = justep.xbl("dgridQ2");
		var rowId = this.getRowIdByIndex(templateGrid, 0);
		templateGrid.selectedRow(rowId, true);
	}
};
customizedProcessQ.inputKeyDown = function(event) {
	var keycode = event.keyCode || event.which || event.charCode; 
	if (keycode == 13) {
		customizedProcessQ.startQuery();
	}
};
customizedProcessQ.buttonQ15Click = function(event) {
	customizedProcessQ.startQuery();
};
customizedProcessQ.dialogQ2Open = function(event){
	customizedProcessQ.refreshCustomizedProcessTemplate();
	var templateData = justep.xbl('template');
	if (templateData.getCount() > 0) {
		var templateGrid = justep.xbl("dgridQ2");
		var rowId = customizedProcessQ.getRowIdByIndex(templateGrid, 0);
		templateGrid.selectedRow(rowId, true);
	}
};
customizedProcessQ.dialogQ2Close = function(event){
	customizedProcessQ.updateButtonState();	
};
