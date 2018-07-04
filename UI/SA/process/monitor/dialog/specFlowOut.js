acceptParentParamsFun = "acceptData";// 接收数据函数名
var sendData = null;
function resetStatus() {
	justep.xbl("activities").getStore().deleteAllRow();
	justep.xbl("flow_to_data_executors").getStore().deleteAllRow();
	var flowToData = justep.xbl("flow_to_data");
	flowToData.setValue("emergencyId", "");
	flowToData.setValue("executeMode", "temPreempt");
	flowToData.setValue("preemptMode", "tpmOpen");
	flowToData.setValue("createTime", "");
	flowToData.setValue("limitTime", "");
	flowToData.setValue("warningTime", "");
	flowToData.setValue("content", "");
	justep.xbl("tabs1").tabbar.setTabActive("flowto_base_tab");
}
function acceptData(data) {
	resetStatus();

	sendData = data;
	var currProcess   = data.sProcess;
	loadActivities(currProcess, data.sProcessTemplateID2);
	justep.xbl("orgTreeData").expandRowsToLevel(0);
	
	var curl = "";
	var flowTaskData = justep.xbl("flowTaskData");
	flowTaskData.filters.clear();
	flowTaskData.filters.setFilter("_customFilter_", "SA_Task='" + data.taskId + "'");
	flowTaskData.refreshData();
	if (flowTaskData.getCount() > 0) {
		curl = flowTaskData.getValue("sEURL");
	}
	
	var flowToData = justep.xbl("flow_to_data");
	flowToData.setValue("process", currProcess);
	flowToData.setValue("template", data.sProcessTemplateID2);
	flowToData.setValue("process2", currProcess);
	flowToData.setValue("dataId", flowToData.createUUID());
	flowToData.setValue("curl", curl);
	activitySelectChanged();
}
var specFlowOut = {};
function expandAllPersonNode() {
	var orgTreeData = justep.xbl("orgPersonMemberTree1").getData();
	orgTreeData.expandAll();
}

function filterOrgTreeData() {
	justep.xbl("orgTreeData").collapseAll();
	var inputCond = document.getElementById("flow_to_query_input");
	if (inputCond.value != "") {
		var orgTreeData = justep.xbl("orgTreeData");
		orgTreeData.filters.clear();
		orgTreeData.setFilter("_customFilter_", "(SA_OPOrg.sName LIKE '%" + inputCond.value + "%') OR (SA_OPOrg.sCode LIKE '%" + inputCond.value + "%') OR (SA_OPOrg.sOrgKindID <> 'psm')");
		orgTreeData.refreshData();
		orgTreeData.expandAll();
	} else {
		var orgTreeData = justep.xbl("orgTreeData");
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

function getFlowToExecutorsDataRowCount() {
	return justep.xbl("flow_to_data_executors").getCount();
}

function loadActivities(sProcess, sProcessTemplateID2) {
	var param = new justep.Request.ActionParam ();
	param.setString("process",sProcess);
	param.setString("template", sProcessTemplateID2);
	var re = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "queryAllBusinessActivityAction",param);
	if(justep.Request.isBizSuccess(re)){
		var rowsContent = "";
		var activitiesData = justep.xbl("activities");
		//var activities = re.responseXML.documentElement.lastChild.firstChild.firstChild.childNodes;
		var activities = justep.XML.eval(re.responseXML, "//root/data/*/items/item");
		for (var i = activities.length - 1; i >= 0 ; i--) {
			var currActivity = activities[i];
			var activityItem = currActivity.getAttribute('activity');
			var labelItem = currActivity.getAttribute('label');

			if (activityItem != null && labelItem != null) {
				var newRow = "<row>";
				newRow += "<cell>" + activityItem + "</cell>";
				newRow += "<cell>" + labelItem + "</cell>";
				newRow += "</row>";
				rowsContent = newRow + rowsContent;
			}
		}
		rowsContent = "<rows>" + rowsContent + "</rows>";
		activitiesData.loadXML(rowsContent, null, false, false);
	}
}

function activitySelectChanged() {
	var sName = sendData.flowSName;
	
	var activitiesData = justep.xbl("activities");
	var activityPath = activitiesData.getValue("activity");
	var activityLabel = activitiesData.getValue("label");
	
	var flowToData = justep.xbl("flow_to_data");
	flowToData.setValue("name", activityLabel + ":" + sName);
	flowToData.setValue("activity", activityPath);
	flowToData.setValue("activity2", activityPath);
	
	var process = flowToData.getValue("process");
	var paths = process.split("/");
	paths.splice(paths.length-1, 1);
	flowToData.setValue("eurl", paths.join("/") + "/" + activityPath + ".w");
}

function flowToSelectToRightAction() {
	SelectOrgPerson('flow_to_data', 'flow_to_data_org_person', 'flow_to_data_executors', 'flow_to_select_to_left', 'all_flow_to_select_to_left', 'flow_to_select_to_right', 'all_flow_to_select_to_right', 'flow_to_move_to_first', 'flow_to_move_to_prev', 'flow_to_move_to_next', 'flow_to_move_to_last');
}


/** 选择当前组织机构 **/
function SelectOrgPerson(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insData = justep.xbl(dataInstance);
	var insExecutor = justep.xbl(executorInstance);
	
	var executorKind = insData.getValue("executorKinds").toUpperCase();
	var nodeKind = "PSM";
	if (executorKind == "POS") {
		nodeKind = "POS";
	} else if (executorKind == "DPT") {
		nodeKind = "DPT";
	} else if (executorKind == "OGN") {
		nodeKind = "OGN";
	}

	var orgTreeData = justep.xbl("orgTreeData");
	var kind = orgTreeData.getValue("sOrgKindID");
	
	if (kind.toUpperCase() == nodeKind) {
			var fId = "";
			var fName = "";
			var sName = "";
			
			if (kind.toUpperCase() == "PSM") {
				var sId = orgTreeData.getCurrentRowId();
				var sParent = orgTreeData.getValue("sParent");
				sName = orgTreeData.getValue("sName");
				fId = orgTreeData.getValue("sFID", sParent) + "/" + sId + ".psm";
				fName = orgTreeData.getValue("sFName", sParent) + "/" + sName;
			} else {
				fId = orgTreeData.getValue("sFID");
				fName = orgTreeData.getValue("sFName");
				sName = orgTreeData.getValue("sName");
			}
			var arrValues = [fId];
			var arrFields = ["fid"];
			var hasExecutors = insExecutor.locate(arrValues, arrFields, true, true, false);
			if (hasExecutors.length == 0) {
				var dataId = insData.getValue("dataId");
				var newRowId = insExecutor.createUUID();
				insExecutor.insert(newRowId, insExecutor.getCount(), [fId, fName, sName, kind, "false", dataId]);
				insExecutor.setIndex(insExecutor.getCount());
			}
	} else {
		var currRowId = orgTreeData.getCurrentRowId();
		var subData = orgTreeData.getStore().getSubItems(currRowId);
		if (subData != "") {
			var subItems = subData.toString().split(",");
			for (var i = 0; i < subItems.length; i++) {
				var subItemId = subItems[i];
				var subKind = orgTreeData.getValue("sOrgKindID", subItemId);
				if (subKind.toUpperCase() == nodeKind) {
						var fId = "";
						var fName = "";
						var sName = "";
						
						if (subKind.toUpperCase() == "PSM") {
							var sParent = orgTreeData.getValue("sParent", subItemId);
							sName = orgTreeData.getValue("sName", subItemId);
							fId = orgTreeData.getValue("sFID", sParent) + "/" + subItemId + ".psm";
							fName = orgTreeData.getValue("sFName", sParent) + "/" + sName;
						} else {
							fId = orgTreeData.getValue("sFID", subItemId);
							fName = orgTreeData.getValue("sFName", subItemId);
							sName = orgTreeData.getValue("sName", subItemId);
						}
						var arrValues = [fId];
						var arrFields = ["fid"];
						var hasExecutors = insExecutor.locate(arrValues, arrFields, true, true, false);
						if (hasExecutors.length == 0) {
							var dataId = insData.getValue("dataId");
							var newRowId = insExecutor.createUUID();
							insExecutor.insert(newRowId, insExecutor.getCount(), [fId, fName, sName, subKind, "false", dataId]);
						}
				}
			}
			insExecutor.setIndex(insExecutor.getCount());
		}
	}
}

function flowToSelectToLeftAction() {
	UnselectOrgPerson('flow_to_data_org_person', 'flow_to_data_executors', 'flow_to_select_to_left', 'all_flow_to_select_to_left', 'flow_to_select_to_right', 'all_flow_to_select_to_right', 'flow_to_move_to_first', 'flow_to_move_to_prev', 'flow_to_move_to_next', 'flow_to_move_to_last');
}

/** 取消选择当前组织机构 **/
function UnselectOrgPerson(orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insExecutors = justep.xbl(executorInstance);
	var rowId = insExecutors.getCurrentRowId();
	insExecutors.remove(rowId);
	insExecutors.xformsRefresh();
}

function allFlowToSelectToLeftAction() {
	UnselectAllOrgPerson('flow_to_data_org_person', 'flow_to_data_executors', 'flow_to_select_to_left', 'all_flow_to_select_to_left', 'flow_to_select_to_right', 'all_flow_to_select_to_right', 'flow_to_move_to_first', 'flow_to_move_to_prev', 'flow_to_move_to_next', 'flow_to_move_to_last');
}

/** 取消选择所有组织机构(flow_to) **/
function UnselectAllOrgPerson(orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insExecutors = justep.xbl(executorInstance);
	var rowCount = insExecutors.getCount();
	while (rowCount > 0) {
		insExecutors.removeByIndex(0);
		rowCount--;
	}
	insExecutors.xformsRefresh();
}

function allFlowToSelectToRightAction() {
	SelectAllOrgPerson('flow_to_data', 'flow_to_data_org_person', 'flow_to_data_executors', 'flow_to_select_to_left', 'all_flow_to_select_to_left', 'flow_to_select_to_right', 'all_flow_to_select_to_right', 'flow_to_move_to_first', 'flow_to_move_to_prev', 'flow_to_move_to_next', 'flow_to_move_to_last');
}

/** 选择所有组织机构 **/
function SelectAllOrgPerson(dataInstance, orgInstance, executorInstance, leftId, allLeftId, rightId, allRightId, firstId, prevId, nextId, lastId) {
	var insData = justep.xbl(dataInstance);
	var insExecutor = justep.xbl(executorInstance);
	
	var executorKind = insData.getValue("executorKinds").toUpperCase();

	var nodeKind = "PSM";
	if (executorKind == "POS") {
		nodeKind = "POS";
	} else if (executorKind == "DPT") {
		nodeKind = "DPT";
	} else if (executorKind == "OGN") {
		nodeKind = "OGN";
	}

	var orgTreeData = justep.xbl("orgTreeData");
	var kind = orgTreeData.getValue("sOrgKindID");
	
	if (kind.toUpperCase() == nodeKind) {
			var fId = "";
			var fName = "";
			var sName = "";
			if (kind.toUpperCase() == "PSM") {
				var sId = orgTreeData.getCurrentRowId();
				var sParent = orgTreeData.getValue("sParent");
				sName = orgTreeData.getValue("sName");
				fId = orgTreeData.getValue("sFID", sParent) + "/" + sId + ".psm";
				fName = orgTreeData.getValue("sFName", sParent) + "/" + sName;
			} else {
				fId = orgTreeData.getValue("sFID");
				fName = orgTreeData.getValue("sFName");
				sName = orgTreeData.getValue("sName");
			}
			
			var arrValues = [fId];
			var arrFields = ["fid"];
			var hasExecutors = insExecutor.locate(arrValues, arrFields, true, true, false);
			if (hasExecutors.length == 0) {
				var dataId = insData.getValue("dataId");
				var newRowId = insExecutor.createUUID();
				insExecutor.insert(newRowId, insExecutor.getCount(), [fId, fName, sName, kind, "false", dataId]);
				insExecutor.setIndex(insExecutor.getCount());
			}
	}

	var currRowId = orgTreeData.getCurrentRowId();
	var subData = orgTreeData.getStore().getAllSubItems(currRowId);
	if (subData != "") {
		var subItems = subData.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			var subKind = orgTreeData.getValue("sOrgKindID", subItemId);
			if (subKind.toUpperCase() == nodeKind) {
					var fId = "";
					var fName = "";
					var sName = "";
					
					if (subKind.toUpperCase() == "PSM") {
						var sParent = orgTreeData.getValue("sParent", subItemId);
						sName = orgTreeData.getValue("sName", subItemId);
						fId = orgTreeData.getValue("sFID", sParent) + "/" + subItemId + ".psm";
						fName = orgTreeData.getValue("sFName", sParent) + "/" + sName;
					} else {
						fId = orgTreeData.getValue("sFID", subItemId);
						fName = orgTreeData.getValue("sFName", subItemId);
						sName = orgTreeData.getValue("sName", subItemId);
					}
					
					var arrValues = [fId];
					var arrFields = ["fid"];
					var hasExecutors = insExecutor.locate(arrValues, arrFields, true, true, false);
					if (hasExecutors.length == 0) {
						var dataId = insData.getValue("dataId");
						var newRowId = insExecutor.createUUID();
						insExecutor.insert(newRowId, insExecutor.getCount(), [fId, fName, sName, subKind, "false", dataId]);
					}
			}
		}
		insExecutor.setIndex(insExecutor.getCount());
	}
}

/** 移动行位置 **/
function moveRow(instance, targetIndex, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep.xbl(instance);
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.getCurrentRowId();
	}

	var sourceData = [];
	var columns = instance.getColumnIds(",");
	var colArrs = columns.split(",");
	for (var i = 0; i < colArrs.length; i++) {
		var cd = instance.getValue(colArrs[i], sourceId);
		sourceData[i] = cd;
	}

	instance.remove(sourceId);
	
	instance.insert(sourceId, targetIndex, sourceData);
	instance.setIndex(targetIndex);
}

/** 移动到第一行 **/
function moveRowFirst(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep.xbl(instance);
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.getCurrentRowId();
	}

	var sourceIndex = instance.getIndex(sourceId);
	if (sourceIndex > 0) {
		moveRow(instance, 0, sourceId);
	}
}

/** 向上移动一行 **/
function moveRowUp(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep.xbl(instance);
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.getCurrentRowId();
	}
	
	var sourceIndex = instance.getIndex(sourceId);
	if (sourceIndex > 0) {
		moveRow(instance, sourceIndex - 1, sourceId);
	}
}

/** 向下移动一行 **/
function moveRowDown(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep.xbl(instance);
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.getCurrentRowId();
	}
	
	var sourceIndex = instance.getIndex(sourceId);
	if (sourceIndex < instance.getCount() - 1) {
		moveRow(instance, sourceIndex + 1, sourceId);
	}
}

/** 移动到最后一行 **/
function moveRowLast(instance, sourceId) {
	if (typeof(instance) == "string") {
		instance = justep.xbl(instance);
	}

	if (typeof(sourceId) == "undefined") {
		sourceId = instance.getCurrentRowId();
	}
	
	var sourceIndex = instance.getIndex(sourceId);
	var rowCount = instance.getCount();
	if (sourceIndex < rowCount - 1) {
		moveRow(instance, rowCount - 1, sourceId);
	}
}

function flowToMoveToFirstAction() {
	moveRowFirst('flow_to_data_executors');
}

function flowToMoveToPrevAction() {
	moveRowUp('flow_to_data_executors');
}

function flowToMoveToNextAction() {
	moveRowDown('flow_to_data_executors');
}

function flowToMoveToLastAction() {
	moveRowLast('flow_to_data_executors');
}

/** 产生执行者类型 **/
function executorKindCallback(executor) {
	if (executor.value.toLowerCase() == "dpt") {
		return "部门";
	} else if (executor.value.toLowerCase() == "pos") {
		return "岗位";
	} else {
		return "人员";
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
		instance = justep.xbl(instance);
	}
	
	if (!allData) {
		for (var r = 0; r < instance.getStore().rowsBuffer.length; r++) {
			var str = "";
			for (var c = 0; c < fields.length; c++) {
				if (c > 0) {
					str = str + ",";
				}
				str = str + instance.getStore().getValueById(instance.getStore().rowsBuffer[r].idd, fields[c]);
			}
			
			if (value == str.toLowerCase()) {
				if (onlyOne) {
					rowId = instance.getStore().rowsBuffer[r].idd;
					break;
				} else {
					if (rowId == "0") {
						rowId = instance.getStore().rowsBuffer[r].idd;
					} else {
						rowId += ("," + instance.getStore().rowsBuffer[r].idd);
					}
				}
			}
		}
	} else { 
		var rowArrs = [];
		for (var p in instance.getStore().rowsAr) {
			var str = "";
			for (var c = 0; c < fields.length; c++) {
				if (c > 0) {
					str = str + ",";
				}
				if (instance.getStore().rowsAr[p] != null) {
					str = str + instance.getStore().getValueById(p, fields[c]);
				}
			}
			
			if (value.toLowerCase() == str.toLowerCase()) {
				if (onlyOne) {
					rowArrs[0] = p;
					break;
				} else {
					rowArrs[instance.getStore().rowsAr[p].rowIndex - 1] = p;
				}
			}
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

/** 生成ExecutorRange数据 **/
function generateExecutorsOrRange(instance, dataId, isRange, ns) {
	var strRet = "";
	
	if (typeof(instance) == "string") {
		instance = justep.xbl(instance);
	}

	var rowId = findRow(instance, [dataId], ["dataId"], false);
	if (rowId != "0") {
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
		
		subItems = rowId.toString().split(",");
		for (var i = 0; i < subItems.length; i++) {
			var subItemId = subItems[i];
			
			strRet += "<org-unit>";
			strRet += "<fid>" + instance.getValue("fid", subItemId) + "</fid>";
			strRet += "<fname>" + instance.getValue("fName", subItemId) + "</fname>";
			
			var isManager = instance.getValue("isManager", subItemId).toUpperCase();
			if (isManager == "FALSE" || isManager == "0") {
				strRet += "<isManager>false</isManager>";
			} else {
				strRet += "<isManager>true</isManager>";
			}
			
			strRet += "<name>" + instance.getValue("name", subItemId) + "</name>";
			strRet += "<kind>" + instance.getValue("kind", subItemId) + "</kind>";
			strRet += "</org-unit>";
		} 
		
		if (typeof(isRange) == "boolean" && isRange == true) {
			strRet += "</executor-range>";
		} else {
			strRet += "</executors>";
		}
	}
	
	return strRet;
}

/** 生成TaskRelationValue数据 **/
function generateTaskRelationValue(instance, rowId, template) {
	var strRet = "";

	strRet += "<task-relation-value>";
	/*由后台自动计算curl和eurl
	strRet += "<sCURL>" + instance.getValue("curl", rowId) + "</sCURL>";
	strRet += "<sEURL>" + instance.getValue("eurl", rowId) + "</sEURL>";
	*/
	strRet += "<sLock>" + instance.getValue("lock", rowId) + "</sLock>";
	strRet += "<sWarningTime>" + instance.getValue("warningTime", rowId) + "</sWarningTime>";
	strRet += "<sExecuteMode>" + instance.getValue("executeMode", rowId) + "</sExecuteMode>";
	strRet += "<sEmergencyName>" + instance.getValue("emergencyName", rowId) + "</sEmergencyName>";
	strRet += "<sExecuteMode2>" + instance.getValue("executeMode2", rowId) + "</sExecuteMode2>";
	strRet += "<sName>" + instance.getValue("name", rowId) + "</sName>";
	strRet += "<sContent>" + instance.getValue("content", rowId) + "</sContent>";
	strRet += "<sPreemptMode>" + instance.getValue("preemptMode", rowId) + "</sPreemptMode>";
	strRet += "<sActivityInTemplate>" + instance.getValue("activity2", rowId) + "</sActivityInTemplate>";
	strRet += "<sCreateTime>" + instance.getValue("createTime", rowId) + "</sCreateTime>";
	strRet += "<sLimitTime>" + instance.getValue("limitTime", rowId) + "</sLimitTime>";
	strRet += "<sEmergencyID>" + instance.getValue("emergencyId", rowId) + "</sEmergencyID>";
	strRet += "<sProcess>" + instance.getValue("process2", rowId) + "</sProcess>";
	strRet += "<sProcessTemplateID2>" + instance.getValue("process2", rowId) + "</sProcessTemplateID2>";
	strRet += "<sLastModifyTime>" + instance.getValue("lastModifyTime", rowId) + "</sLastModifyTime>";
	strRet += "</task-relation-value>";
	
	return strRet;
}

/** 生成具体的流转数据 **/
function generateDataInfo(data, dataExecutors) {
	var strRet = "";

	var insData = justep.xbl(data);
	var insExecutors = justep.xbl(dataExecutors);
	
	if (insData && insExecutors) {
		var subData = insData.getStore().getAllRowIds(",");
		if (subData != "") {
			var subItems = subData.toString().split(",");
			for (var i = 0; i < subItems.length; i++) {
				var subItemId = subItems[i];
				var dataId = insData.getValue("dataId", subItemId);
				
				strRet += "<process-control-item selected=\"" + insData.getValue("selected", subItemId) +
					"\" id=\"" + insData.getValue("dataId", subItemId) + "\" readonly=\"" +
					insData.getValue("readonly", subItemId) + "\" is-end=\"" +
					(insData.getValue("isEnd", subItemId)?insData.getValue("isEnd", subItemId):false) + "\">";

				strRet += "<unit>" + insData.getValue("activity", subItemId) + "</unit>";
				strRet += "<passed-activities>" + insData.getValue("passedActivities", subItemId) + "</passed-activities>";
				strRet += "<task-assign-mode>" + insData.getValue("taskAssignMode", subItemId) + "</task-assign-mode>";
				strRet += "<process>" + insData.getValue("process", subItemId) + "</process>";
				strRet += "<template>" + insData.getValue("template", subItemId) + "</template>";
				strRet += "<executor-kinds>" + insData.getValue("executorKinds", subItemId) + "</executor-kinds>";

				strRet += generateTaskRelationValue(insData, subItemId, insData.getValue("template", subItemId));
				strRet += generateExecutorsOrRange(insExecutors, dataId);
		
				strRet += "</process-control-item>";
			}
		}
	}
	
	return strRet;
}

/** 生成FlowTo节点 **/
function generateFlowToData() {
	var strRet = "<to>";
	strRet += generateDataInfo("flow_to_data", "flow_to_data_executors");
	strRet += "</to>";

	return strRet;
}

/** 生成返回数据 **/
function generateJSReturnData() {
	var strRet = "<process-control>";
	strRet += "<dialog-enabled>false</dialog-enabled>";
	strRet += generateFlowToData();
	strRet += "</process-control>";
	return strRet;
}

specFlowOut.mainmodelXBLLoaded = function(event){
};
