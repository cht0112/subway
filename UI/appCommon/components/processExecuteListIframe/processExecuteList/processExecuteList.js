var onAfterRefreshList;

var _process;
var _activity;
var _dataModel;
var _executeConcept;
var _displayedActivities;
var _bizID;
var _title;

/**
 * 对外的接口函数，刷新处理列表
 */
function refreshList(process, activity, dataModel, executeConcept,
		displayedActivities, bizID, title) {
	_process = process;
	_activity = activity;
	_dataModel = dataModel;
	_executeConcept = executeConcept;
	_displayedActivities = displayedActivities;
	_bizID = bizID;
	_title = title;

	_refreshList();
}

function _refreshList() {
	clearList();
	setTitle();

	var listData = getListData();
	var displayedActivities = _displayedActivities;
	if (!displayedActivities) {
		displayedActivities = getDefaultDisplayedActivities(listData);
	}
	
	var activities = displayedActivities.split(",");
	for (var i = 0; i < activities.length; i++) {
		var rowIDs = listData.findRow(activities[i], ['fActivityLabel'], false, true);
		appendListRows(listData, rowIDs);
	}
	
	if (typeof(onAfterRefreshList) == "function")
		onAfterRefreshList();
}

function getDefaultDisplayedActivities(listData) {
	var s = ",";
	for (var i = 0; i < listData.getRowsNum(); i++) {
		var activityLabel = listData.getValueByName("fActivityLabel", i);
		if (s.indexOf("," + activityLabel + ",") == -1) {
			s += activityLabel + ",";
		}
	}
	return s.substr(1, s.length - 2);
}

function getListData() {
	return appCommon.ProcessExecute.getExecuteListData(_process, _activity,
			_dataModel, _executeConcept, _bizID, getCondition());
}

function clearList() {
	var listTable = document.getElementById("processExecuteList");
	var rowCount = listTable.rows.length;
	for (var i = 2; i < rowCount; i++) {
		listTable.deleteRow(2);
	}
}

function setTitle() {
	var titleTR = document.getElementById("titleTR");
	var titleTD = document.getElementById("titleTD");
	titleTR.style.display = !_title ? "none" : "";
	titleTD.innerText = !_title ? "" : _title;
}

function appendListRows(listData, rowIDs) {
	for (var i = 0; i < rowIDs.length; i++) {
		if (i == 0) {
			appendListRow(listData, rowIDs[i], rowIDs.length);
		} else {
			appendListRow(listData, rowIDs[i], 0);
		}
	}
}

function appendListRow(listData, rowID, rowSpan) {
	var dataIndex = listData.getRowIndex(rowID);
	var listTable = document.getElementById("processExecuteList");
	var activityLabel = listData.getValueByName("fActivityLabel", dataIndex);

	var verdict = listData.getValueByName("fVerdict", dataIndex);
	var opinion = listData.getValueByName("fOpinion", dataIndex);
	if (verdict) {
		opinion = verdict + "：" + opinion;
	}
	var executorID = listData.getValueByName("fCreatePsnID", dataIndex);
	var executorName = listData.getValueByName("fCreatePsnName", dataIndex);
	var executeTime = justep.Date.toString(justep.Date.fromString(listData
			.getValueByName("fUpdateTime", dataIndex),
			justep.Date.STANDART_FORMAT), "yyyy-MM-dd hh:mm");
	var state = listData.getValueByName("fStateName", dataIndex);

	// append row
	var row = listTable.insertRow(listTable.rows.length);
	row.className = "content";

	// create activity cell
	if (rowSpan > 0) {
		var activityCell = row.insertCell(row.cells.length);
		activityCell.className = "activity";
		activityCell.setAttribute("rowSpan", rowSpan);
		activityCell.innerText = activityLabel;
	}

	// create opinion cell
	var opinionCell = row.insertCell(row.cells.length);
	opinionCell.className = "opinion";
	opinionCell.innerText = opinion;

	// create executor cell
	var executorCell = row.insertCell(row.cells.length);
	executorCell.className = "executor";

	// create executor signature img
	var signImg = document.createElement("img");
	signImg.className = "signature";
	signImg.src = getSignatureImgURL(executorID);
	signImg.alt = executorName;
	signImg.onerror = function() {
		this.outerHTML = this.alt;
	};
	executorCell.appendChild(signImg);

	// create executeTime cell
	var executeTimeCell = row.insertCell(row.cells.length);
	executeTimeCell.className = "executeTime";
	executeTimeCell.innerText = executeTime;

	// create state cell
	var stateCell = row.insertCell(row.cells.length);
	stateCell.className = "state";
	stateCell.innerText = state;
}

function getSignatureImgURL(personID) {
	return justep.Request.setBizParams(
		justep.Request.convertURL("/UI/system/service/common/bizAction.j")
		+ "&dataModel=/appCommon/data"
		+ "&concept=AP_PersonSignature"
		+ "&relation=fSignature"
		+ "&id=" + personID
		+ "&process=" + _process
		+ "&activity=" + _activity
		+ "&action=blobDownloadAction"
		+ "&$query-version=" + (new justep.UUID()).valueOf());
}

function getCondition() {
	var dTemp = xforms("dTemp");
	var selectedStates = dTemp.getValueByName("selectedStates");
	var searchStr = dTemp.getValueByName("searchStr");

	var stateCondition = "";
	if (selectedStates) {
		stateCondition = appCommon.FilterUtils.getMuiltSelectFilter(
				"EXECUTE_CONCEPT.fState", selectedStates, ",");
	}
	var smartCondition = "";
	if (searchStr) {
		smartCondition = appCommon.FilterUtils.getMultiLikeFilter("EXECUTE_CONCEPT.fActivityLabel,EXECUTE_CONCEPT.fVerdict," +
				"EXECUTE_CONCEPT.fOpinion,EXECUTE_CONCEPT.fCreatePsnName", searchStr, ",");
	}
	return appCommon.FilterUtils.joinFilter(stateCondition, smartCondition, "AND");
}

function initListener() {
	var self = this;
	new xforms.Listener(xforms("dTemp").element, "xforms-data-changed", null, function (event) {
			var data = event.getData();
			if (data.relation == "selectedStates" || data.relation == "searchStr") {
				self._refreshList();
			}
		});	
}

function gsStatesDropdown(event) {
	var data = xforms("dTemp");
	var select = xforms("gsStates");

	var value = data.getValueByName("selectedStates");
	if (!value) {
		var defaultValue = "esExecuting,esFinished,esTransmited,esReturned,esAborted";
		if (defaultValue) {
			data.setValueByName("selectedStates", defaultValue);
			select.changeRowsStatus();
		}
	}
}
