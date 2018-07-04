var processDialogQ = {};
processDialogQ.cancelButtonClick = function(event) {
	window.frameElement.callback(false);
};
processDialogQ.okButtonClick = function(event) {
	var isValidate = true;
	var toData = jsonData.to;
	if (toData != null) {
		var haveSelectedActivity = false;
		var activitiesData = jsonData.childActivities;
		for (var i = 0; i < activitiesData.length; i++) {
			if (activitiesData[i].selected) {
				haveSelectedActivity = true;
				break;
			}
		}
		if (!haveSelectedActivity) {
			isValidate = false;
			alert("至少要选择一个环节进行流转！");
		}
		if (isValidate) {
			var errorActivity = refreshAndCheckToSelectState();
			if (errorActivity != "") {
				isValidate = false;
				alert("流转环节“" + errorActivity + "”必须选择执行者！");
			}
		}
	}
	if (isValidate) {
		var noticeData = jsonData.notice;
		if (noticeData != null) {
			var errorNotice = refreshAndCheckNoticeState();
			if (errorNotice != "") {
				isValidate = false;
				alert("通知“" + errorNotice + "”必须选择执行者！");
			}
		}
	}
	if (isValidate) {
		var param = generateReturnData();
		window.frameElement.callback(true, param);
	}
};
/** 生成返回数据 **/
function generateReturnData() {
	var strRet = "<process-control xmlns=\"\">";
	strRet += generateProcessControl();
	strRet += "</process-control>";
	return strRet;
};
/** 生成ProcessControl节点 **/
function generateProcessControl() {
	var strRet = "";
	strRet += generateProcessInfo();
	strRet += generateRunnableActivities();
	strRet += generateToData();
	strRet += generateNoticeData();
	return strRet;
};
function generateProcessInfo() {
	var strRet = "";
	for(var p in jsonData.processInfo[0]) {
		var tagName = jsonName2TagName(p);
		strRet += "<" + tagName + ">" + jsonData.processInfo[0][p] + "</" + tagName + ">";
	}
	return strRet;
};
function jsonName2TagName(name) {
	return name.replace(/_/g, "-");
};
function generateRunnableActivities() {
	var strRet = "<runnable-activities>";
	var rootActivity = jsonData.rootActivity[0];
	strRet += "<item operator=\"" + rootActivity.operator + "\" selected=\"" + rootActivity.selected + "\">";
	strRet += generateRunnableActivityChildren();
	strRet += "</item>";
	strRet += "</runnable-activities>";
	return strRet;
};
function generateRunnableActivityChildren(activities) {
	var strRet = "";
	if (!(typeof(activities)!="undefined" && activities!=null)) {
		activities = jsonData.childActivities;
	}
	var childCount = activities.length;
	for (var i = 0; i < childCount; i++) {
		var childActivity = activities[i];
		var isActivity = childActivity.is_activity;
		if (!isActivity) {
			strRet += "<item operator=\"" + childActivity.operator + "\" selected=\"" + childActivity.selected + "\">";
			strRet += generateRunnableActivityChildren(childActivity.rows);
			strRet += "</item>";
		} else {
			strRet += "<activity activity=\"" + childActivity.activity + "\" name=\"" + 
				childActivity.name + "\" optional=\"" + childActivity.optional + "\" selected=\"" + 
				childActivity.selected + "\">";
			strRet += generateRunnableActivityChildren(childActivity);
			strRet += "</activity>";
		}
	}
	return strRet;
};
function generateTaskRelationValue(dataId, varName) {
	var strRet = "<task-relation-value>";
	var trvs = jsonData[varName];
	for (var i = 0; i < trvs.length; i++) {
		var item = trvs[i];
		if (item["data_id"] == dataId) {
			for (var p in item) {
				if (p != "data_id") {
					var tagName = jsonName2TagName(p);
					strRet += "<" + tagName + ">" + item[p] + "</" + tagName + ">";
				}
			}
			break;
		}
	}
	strRet += "</task-relation-value>";
	return strRet;
};
function generateExecutorsOrRange(varName, dataId, isRange, ns) {
	var strRet = "";
	if (typeof(isRange) == "boolean" && isRange == true) {
		if (typeof(ns) == "undefined") {
			strRet += "<executor-range>";
		} else {
			strRet += "<executor-range " + ns + ">";
		}
	} else {
		if (typeof(ns) == "undefined") {
			strRet += "<executors>";
		} else {
			strRet += "<executors " + ns + ">";
		}
	}
	var data = jsonData[varName];
	var rowCount = data.length;
	for (var i = 0; i < rowCount; i++) {
		var currRow = data[i];
		var currDataId = currRow["data_id"];
		if (currDataId == dataId) {
			strRet += "<org-unit>";
			
			strRet += "<fid>" + currRow["fid"] + "</fid>";
			strRet += "<fname>" + currRow["fname"] + "</fname>";
			strRet += "<responsible>" + currRow["responsible"].toLowerCase() + "</responsible>";
			
			strRet += "<name>" + currRow["name"] + "</name>";
			strRet += "<kind>" + currRow["kind"] + "</kind>";
			
			strRet += "</org-unit>";
		}
	}

	if (typeof(isRange) == "boolean" && isRange == true) {
		strRet += "</executor-range>";
	} else {
		strRet += "</executors>";
	}
	return strRet;
};
function generateDataInfo(dataVarName, executorsVarName, taskRelationValueVarName) {
	var strRet = "";
	var data = jsonData[dataVarName];
	var rowCount = data.length;
	for (var i = 0; i < rowCount; i++) {
		var currRow = data[i];
		var dataId = currRow["data_id"];
		var selected = currRow["selected"];
		if (selected) {
			strRet += "<process-control-item selected=\"" + selected + 
				"\" id=\"" + dataId + "\" readonly=\"" + currRow["readonly"] +
				"\" is-end=\"" + currRow["is_end"] + "\">";
				
			strRet += "<unit>" + currRow["activity"] + "</unit>";
			strRet += "<passed-activities>" + currRow["passed_activities"] + "</passed-activities>";
			strRet += "<task-assign-mode>" + currRow["task_assign_mode"] + "</task-assign-mode>";
			strRet += "<process>" + currRow["process"] + "</process>";
			strRet += "<template>" + currRow["template"] + "</template>";
			strRet += "<executor-kinds>" + currRow["executor_kinds"] + "</executor-kinds>";

			strRet += generateTaskRelationValue(dataId, taskRelationValueVarName);
			strRet += generateExecutorsOrRange(executorsVarName, dataId);
			strRet += "</process-control-item>";
		}
	}
	return strRet;
};
function generateToData() {
	var strRet = "<to>";
	strRet += generateDataInfo("to", "to_executors", "to_taskrelation_value");
	strRet += "</to>";
	return strRet;
};
function generateNoticeData() {
	var strRet = "<notice>";
	strRet += generateDataInfo("notice", "notice_executors", "notice_taskrelation_value");
	strRet += "</notice>";
	return strRet;
};
function refreshToState(activities) {
	var result = "";
	var to = jsonData.to;
	var toExecutors = jsonData.to_executors;
	for (var i=0; i<activities.length; i++) {
		var childActivity = activities[i];
		var activityId = childActivity.activity_id;
		var toRow = findFlowDataRow(to, activityId);
		if (toRow!=null) {
			toRow.selected = childActivity.selected;
			if (childActivity.selected && !toRow.readonly) {
				var dataId = toRow.data_id;
				var execRow = findExecutor(toExecutors, dataId);
				if (execRow==null) {
					result = childActivity.name;
					break;
				}
			}
		}
		result = refreshToState(childActivity.rows);
		if (result!="") {
			break;
		}
	}
	return result;
};
function refreshNoticeState() {
	var result = "";
	var notices = jsonData.notice;
	var noticeExecutors = jsonData.notice_executors;
	for (var i=0; i<notices.length; i++) {
		var notice = notices[i];
		var dataId = notice.data_id;
		var execRow = findExecutor(noticeExecutors, dataId);
		if (execRow==null) {
			result = notice.name;
			break;
		}
	}
	return result;
};
function findExecutor(executors, dataId) {
	var result = null;
	for (var i=0; i<executors.length; i++) {
		var childExec = executors[i];
		if (childExec.data_id==dataId) {
			result = childExec;
			break;
		}
	}
	return result;
};
function refreshAndCheckToSelectState() {
	return refreshToState(jsonData.childActivities);
};
function refreshAndCheckNoticeState() {
	return refreshNoticeState();
};
function findFlowDataRow(flowData, activityId) {
	var result = null;
	for (var i = 0; i < flowData.length; i++) {
		var row = flowData[i];
		if (row.activity_id==activityId) {
			result = row;
		}
	}
	return result;
};
function findActivity(activities, checkId) {
	var activity = null;
	for (var i=0; i<activities.length; i++) {
		var currActivity = activities[i];
		if (currActivity.check_id==checkId) {
			activity = currActivity;
			break;
		}
		activity = findActivity(currActivity.rows, checkId);
		if (activity!=null) {
			break;
		}
	}
	return activity;
};
function onCheckChanged(id) {
	var activity = findActivity(jsonData.childActivities, id);
	if (activity!=null) {
		var chk = document.getElementById(id);
		activity.selected = chk.checked;
		updateActivityCheckState(activity);
	}
};
function changeCheckState(id, state) {
	var chk = document.getElementById(id);
	if (chk!=null) {
		if (typeof(state)=="boolean") {
			chk.checked = state;
		} else {
			chk.checked = !chk.checked;
			onCheckChanged(id);
		}
	}
};
function updateParentActivityCheckState(activity, state) {
	var parentActivity = activity.parentRow;
	if (parentActivity!=null) {
		parentActivity.selected = state;
		changeCheckState(parentActivity.check_id, state);
		
		var optional = parentActivity.optional;
		if (!(optional && !state)) {
			updateSiblingActivityCheckState(parentActivity, state);
		}
		
		updateParentActivityCheckState(parentActivity, state);
	}
};
function updateSiblingActivityCheckState(activity, state) {
	var parentActivity = activity.parentRow;
	var operator = "";
	if (parentActivity!=null) {
		operator = parentActivity.operator;
	} else {
		var rootActivity = jsonData.rootActivity;
		operator = rootActivity[0].operator;
	}
	var childActivities = null;
	if (parentActivity!=null) {
		childActivities = parentActivity.rows;
	} else {
		childActivities = jsonData.childActivities;
	}
	if (operator=="and") {
		for (var i=0; i<childActivities.length; i++) {
			var childActivity = childActivities[i];
			if (childActivity!=activity) {
				if (childActivity.selected!=state) {
					var mustNeed = true;
					if (state) {
						var optional = childActivity.optional;
						if (optional) {
							mustNeed = false;
						}
					}
					if (mustNeed) {
						childActivity.selected = state;
						changeCheckState(childActivity.check_id, state);
						updateChildActivityCheckState(childActivity, state);
					}
				}
			}
		}
	} else if (operator=="xor") {
		if (state) {
			for (var i=0; i<childActivities.length; i++) {
				var childActivity = childActivities[i];
				if (childActivity!=activity) {
					childActivity.selected = false;
					changeCheckState(childActivity.check_id, false);
					updateChildActivityCheckState(childActivity, false);
				}
			}
		}
	} else {
		alert("不支持的流转操作符，目前只支持“and”和“xor”。");
	}
};
function updateChildActivityCheckState(activity, state) {
	var childCount = activity.rows.length;
	if (childCount>0) {
		if (state) {
			var operator = activity.operator;
			if (operator=="and") {
				for (var i=0; i<childCount; i++) {
					var childActivity = activity.rows[i];
					childActivity.selected = true;
					changeCheckState(childActivity.check_id, true);
					updateChildActivityCheckState(childActivity, true);
				}
			} else if (operator=="xor") {
				var to = jsonData.to;
				
				for (var i=0; i<childCount; i++) {
					var childActivity = activity.rows[i];
					childActivity.selected = false;
					changeCheckState(childActivity.check_id, false);
				}

				var bHaveChecked = false;
				for (var i=0; i<childCount; i++) {
					var childActivity = activity.rows[i];
					var activityId = childActivity.activity_id;
					var toRow = findFlowDataRow(to, activityId);
					if (toRow!=null) {
						if (toRow.selected) {
							childActivity.selected = true;
							changeCheckState(childActivity.check_id, true);
							updateChildActivityCheckState(childActivity, true);
							bHaveChecked = true;
							break;
						}
					}
				}
				if (!bHaveChecked) {
					var childActivity = activity.rows[0];
					childActivity.selected = true;
					changeCheckState(childActivity.check_id, true);
					updateChildActivityCheckState(childActivity, true);
				}
			} else {
				alert("不支持的流转操作符，目前只支持“and”和“xor”。");
			}
		} else {
			for (var i=0; i<childCount; i++) {
				var childActivity = activity.rows[i];
				childActivity.selected = false;
				changeCheckState(childActivity.check_id, false);
				updateChildActivityCheckState(childActivity, false);
			}
		}
	}
};
function initParentActivityCheckState(activity) {
	var parentActivity = activity.parentRow;
	if (parentActivity!=null) {
		parentActivity.selected = true;
		changeCheckState(parentActivity.check_id, true);
		initParentActivityCheckState(parentActivity);
	}
};
function initChildActivityCheckState(activity) {
	var iCount = 0;
	var to = jsonData.to;
	var childActivities = activity.rows;
	for (var i=0; i<childActivities.length; i++) {
		var currActivity = childActivities[i];
		var activityId = currActivity.activity_id;
		var toRow = findFlowDataRow(to, activityId);
		if (toRow!=null) {
			if (toRow.selected) {
				currActivity.selected = true;
				changeCheckState(currActivity.check_id, true);
				initParentActivityCheckState(currActivity);
				iCount++;
			}
		}
		if (currActivity.rows.length>0) {
			iCount += initChildActivityCheckState(currActivity);
		}
	}
	return iCount;
};
function updateActivityCheckState(changedActivity, init) {
	var to = jsonData.to;
	var activities = jsonData.childActivities;
	if (init) {
		var initedCount = 0;
		var firstMust = null;
		for (var i = 0; i < activities.length; i++) {
			var currActivity = activities[i];
			if ((firstMust==null) && (currActivity.optional!="true")) {
				firstMust = currActivity;
			}
			var activityId = currActivity.activity_id;
			var toRow = findFlowDataRow(to, activityId);
			if (toRow!=null) {
				if (toRow.selected) {
					currActivity.selected = true;
					changeCheckState(currActivity.check_id, true);
					initParentActivityCheckState(currActivity);
					initedCount++;
				}
			}
			if (currActivity.rows.length>0) {
				initedCount += initChildActivityCheckState(currActivity);
			}
		}
		if (initedCount==0) {
			if (firstMust==null) {
				firstMust = activities[0];
			}
			firstMust.selected = true;
			changeCheckState(firstMust.check_id, true);
			updateActivityCheckState(firstMust);
		}
	} else {
		var currSelected = changedActivity.selected;
		var needChange = true;
		
		var currOptional = changedActivity.optional;
		if (currOptional && !currSelected) {
			var parentActivity = changedActivity.parentRow;
			var operator = "";
			if (parentActivity!=null) {
				operator = parentActivity.operator;
			} else {
				var rootActivity = jsonData.rootActivity;
				operator = rootActivity[0].operator;
			}
			if (operator=="and") {
				var childActivities = parentActivity.rows;
				if (childActivities.length>0) {
					for (var i=0; i<childActivities.length; i++) {
						var currActivity = childActivities[i];
						var optional = currActivity.optional;
						var selected = currActivity.selected;
						if (!optional || selected) {
							needChange = false;
							updateChildActivity(changedActivity, currSelected);
							break;
						}
					}
				}
			}
		}
		
		if (needChange) {
			updateSiblingActivityCheckState(changedActivity, currSelected);
			updateParentActivityCheckState(changedActivity, currSelected);
			updateChildActivityCheckState(changedActivity, currSelected);
		}
	}
};
function getOrgPerson(orgPerson, dataId) {
	var result = [];
	for (var i=0; i<orgPerson.length; i++) {
		var currOP = orgPerson[i];
		if (currOP.data_id==dataId) {
			result.push(currOP);
		}
	}
	return result;
};
function addExecutors(event) {
	var table = null;
	var target = event.target || event.srcElement;
	for (var el=target.parentNode; el!=null; el=el.parentNode) {
		if (el.tagName=="TABLE") {
			table = el;
			break;
		}
	}
	if (table!=null) {
		var lastRow = table.rows[table.rows.length-1];
		var dataId = lastRow.getAttribute("data-id");
		var type = lastRow.getAttribute("type");
		var orgData = null;
		if (type == "activity") {
			orgData = getOrgPerson(jsonData.to_org_person, dataId);
		} else if (type == "notice") {
			orgData = getOrgPerson(jsonData.notice_org_person, dataId);
		}
		justep.xbl("executorDlg").open({
			"tableId": table.getAttribute("id"),
			"dataId": dataId,
			"orgData": orgData
		});
	}
};
function removeExecutor(event) {
	var table = null;
	var row = null;
	var target = event.srcElement || event.target;
	for (var el=target.parentNode; el!=null; el=el.parentNode) {
		if (el.tagName=="TR") {
			row = el;
		} else if (el.tagName=="TABLE") {
			table = el;
			break;
		}
	}
	if (table!=null && row!=null) {
		var lastRow = table.rows[table.rows.length-1];
		var dataId = lastRow.getAttribute("data-id");
		var type = lastRow.getAttribute("type");
		var fId = row.getAttribute("fid");
		var executors = null;
		if (type == "activity") {
			executors = jsonData["to_executors"];
		} else if (type == "notice") {
			executors = jsonData["notice_executors"];
		}
		
		for (var i = 0; i < executors.length; i++) {
			var currExecutor = executors[i];
			if (currExecutor.data_id == dataId && currExecutor.fid == fId) {
				executors.splice(i, 1);
				currExecutor = null;
				break;
			}
		}
		
		table.deleteRow(row.rowIndex);
		if (table.rows.length == 2) {
			var row = table.rows[table.rows.length-1];
			row.style.display = "";
		}
		
		processDialogQ.updateRowColor(table);
	}
	return false;
};
function executorExists(executors, dataId, fid) {
	var result = false;
	for (var i = 0; i < executors.length; i++) {
		var currExecutor = executors[i];
		if (currExecutor.data_id==dataId && currExecutor.fid==fid) {
			result = true;
			break;
		}
	}
	return result;
};
processDialogQ.updateRowColor = function(table) {
	for (var i = 1; i < table.rows.length - 1; i++) {
		var row = table.rows[i];
		if (i % 2 == 1) {
			row.style.background = "WHITE";
		} else {
			row.style.background = "#E3EBF7";
		}
	}
};
processDialogQ.executorDlgReceive = function(event){
	var executors = null;
	var table = document.getElementById(event.data.tableId);
	var lastRow = table.rows[table.rows.length-1];
	var type = lastRow.getAttribute("type");
	var labelClass = "";
	if (type == "activity") {
		executors = jsonData["to_executors"];
		labelClass = "activity-label";
	} else if (type == "notice") {
		executors = jsonData["notice_executors"];
		labelClass = "notice-label";
	}
	for (var i = 0; i < event.data.selectedRows.length; i++) {
		var currData = event.data.selectedRows[i];
		if (!executorExists(executors, currData.data_id, currData.fid)) {
			var newRow = table.insertRow(table.rows.length - 1);
			newRow.setAttribute("fid", currData.fid);
			newRow.className = "executor";
			if (type == "activity") {
				newRow.insertCell(newRow.cells.length);
			}
			var labelCell = newRow.insertCell(newRow.cells.length);
			labelCell.className = labelClass;
			labelCell.textContent = currData.name;
			labelCell.innerText = currData.name;
			var btnCell = newRow.insertCell(newRow.cells.length);
			btnCell.className = "button";
			btnCell.align = "right";
			
			var delButton = document.createElement("BUTTON");
			delButton.className = "xui-button";
			delButton.textContent = "删除";
			delButton.innerText = "删除";
			btnCell.appendChild(delButton);
			jQuery(delButton).bind("click", removeExecutor);
			
			var newExecutor = {"fid": currData.fid, "fname": currData.fname, "kind": currData.kind, "name": currData.name, "responsible": currData.responsible, "data_id": currData.data_id};
			executors.push(newExecutor);
		}
	}
	if (table.rows.length > 2) {
		lastRow.style.display = "none";
	}
	processDialogQ.updateRowColor(table);
};
