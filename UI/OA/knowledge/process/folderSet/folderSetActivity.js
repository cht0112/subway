function mdMainConstructDone(event) {
	initFolderRootFun();
}

function grdFolderRowClick(event) {
	displayCurrentFolderInfo();
}

function dFolderValueChanged(event) {
	if (event.column == 'fName') {
		try {
			updateAllSubNodeFullNameFun();
			justep.xbl('dFolder').saveData();
		} catch(e) {
			alert(e.message);
			return;
		}
	} else {
		return;
	}
}

//更新栏目的子栏目fullName路径
function updateAllSubNodeFullNameFun() {
	var oldFName = justep.xbl("dCurrentFolderInfo").getValue("folderFName");
	var newName = justep.xbl('dFolder').getValue('fName');
	var newFName = oldFName.substring(0,oldFName.lastIndexOf("/")+1) + newName;
	var param = new justep.Request.ActionParam();
	param.setString("oldFName", oldFName);
	param.setString("newFName", newFName);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"updateAllSubNodeFullNameAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("更新栏目信息失败!!");
	} else {
		justep.xbl('dFolder').setValue('fFullName',newFName);
		justep.xbl('dCurrentFolderInfo').setValue('folderFName',newFName,'rowid1');
	}
}

function showNodeImg(event) {
	var data = justep.xbl(event.instance.element.id);
	if (!data)
		return;
	if (event.rowId == 'public') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		var useStatus = event.instance.getValueByName("fUseStatus", event.rowId);
		if(useStatus != 1)
			return "/UI/OA/common/images/org-disable.gif";
		return "/UI/OA/common/images/org.gif";
	}
}

function conceptIsReadonly() {
	var data = justep.xbl('dFolder');
	if (data) {
		var id = data.getCurrentRowId();
		if (id == 'public') {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}

// 启用
function startUseFun() {
	try {
		var data = justep.xbl('dFolder');
		var id = data.getCurrentRowId();

		data.setValue("fUseStatus", '1', id);
		data.setValue("fUseStatusName", '启用', id);
		data.saveData();
	} catch (e) {
		alert("对不起,启用失败!");
	}
}

// 全部启用
function allUseFun() {
	var param = new justep.Request.ActionParam();
	param.setString("kind", "public");
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "allUseAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		alert("全部启用失败!");
		return;
	} else {
		justep.xbl('dFolder').refreshData();
	}
}

// 停用
function stopUseFun() {
	try {
		var data = justep.xbl('dFolder');
		var id = data.getCurrentRowId();

		data.setValue("fUseStatus", '2', id);
		data.setValue("fUseStatusName", '停用', id);
		data.saveData();
	} catch (e) {
		alert("对不起,停用失败!");
	}
}

// 初始化栏目根节点(public,private,map)
function initFolderRootFun() {
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "initFolderRootAction");
	var flag = justep.Request.isBizSuccess(r);
	if (flag) {
		var data = justep.xbl('dFolder');
		data.refreshData();
		data.instance.store.expand("public");
	} else {
		alert("初始化栏目树失败!");
	}
}

// 显示当前栏目信息
function displayCurrentFolderInfo() {
	var dCurrentFolder = justep.xbl("dCurrentFolderInfo");
	var folderID = justep.xbl("dFolder").getValue("rowid");
	if (folderID != 'public') {
		try {
			var infoResult = getFolderInfo(folderID);
			var arrInofResult = infoResult.split("|");
			var fIsNeedApprove = arrInofResult[0];
			var fIsInheritApprove = arrInofResult[1];
			var fIsInheritManager = arrInofResult[2];
			var fManagerNames = arrInofResult[3] == "null"
					? ""
					: arrInofResult[3];
			var fIsInheritRights = arrInofResult[4];
			var folderFName = arrInofResult[5];

			dCurrentFolder.setRowData("rowid1", [folderID, folderFName,
					fIsNeedApprove, fIsInheritApprove, fIsInheritManager,
					fManagerNames, fIsInheritRights], ['folderID',
					'folderFName', 'fIsNeedApprove', 'fIsInheritApprove',
					'fIsInheritManager', 'fManagerNames', 'fIsInheritRights']);
		} catch (e) {
			alert(e.massage);
			dCurrentFolder.setRowData("rowid1", [folderID, folderFName, '-1',
					'-1', '-1', '', '-1'], ['folderID', 'folderFName',
					'fIsNeedApprove', 'fIsInheritApprove', 'fIsInheritManager',
					'fManagerNames', 'fIsInheritRights']);
		}
	} else {
		dCurrentFolder.setValue("fIsNeedApprove", '0');
		dCurrentFolder.setValue("fManagerNames", '');
	}
}

// 获取栏目信息(fIsNeedApprove,fIsInheritApprove,fIsInheritManager,fManagerNames)
function getFolderInfo(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getFolderInfoAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("获取栏目信息出错!");
	}
	return justep.Request.transform(justep.Request.getData(r.responseXML));
}

// 新建栏目
function newFolderFun(event) {
	var data = justep.xbl('dFolder');
	if (canNewNodeFun(data)) {
		var pid = data.getRowId();
		var pFullID = data.getValue("fFullID");
		var pFullName = data.getValue("fFullName");

		data.newData(null, pid);
		var fullID = pFullID + "/" + data.getCurrentRowId();
		var fullName = pFullName + "/" + data.getValue("fName");
		data.setValue("fFullID", fullID);
		data.setValue("fFullName", fullName);
		data.saveData();

		var folderID = data.getValue("rowid");
		var folderName = data.getValue("fName");
		var pid = data.getValue("fParent");
		try {
			setDefValueToFolderWhenNew(folderID, pid);
			if (pid != 'public') {
				inheritApproveSetFun(folderID);
				inheritManagerSetFun(folderID);
				inheritRightsSetFun(folderID);
			}
			displayCurrentFolderInfo();
		} catch (e) {
			alert(e.message);
		}
	}
}

// 能否新建栏目
function canNewNodeFun(data) {
	var data = justep.xbl('dFolder');
	if (typeof(data) == "string")
		data = justep.xbl(data);
	var pName = data.getValue("fName");
	if (pName == "") {
		alert("父栏目名称不能为空!");
		return false;
	}
	return true;
}

// 新增栏目时赋初始值(fIsNeedApprove,fIsInheritApprove,fIsInheritManager,fIsInheritRights)
function setDefValueToFolderWhenNew(folderID, pid) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	param.setString("pid", pid);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"setDefValueToFolderWhenNewAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("为新增栏目赋初始值失败!");
	}
}

// 继承父栏目审批设置
function inheritApproveSetFun(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "inheritApproveSetAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("继承父栏目审批设置失败!");
	}
}

// 继承父栏目 管理员设置
function inheritManagerSetFun(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "inheritManagerSetAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("继承父栏目管理员设置失败!");
	}
}

// 继承父栏目 权限设置
function inheritRightsSetFun(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "inheritRightsSetAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("继承父栏目权限设置失败!");
	}

	justep.xbl('dRights').refreshData();
}

// 打开审批设置对话框
function openApproveSetDialog() {
	var data = justep.xbl('dFolder');
	var folderID = data.getValue("rowid");
	if ('public' == folderID) {
		alert("请选择一个有效的栏目!");
		return;
	}
	var isNeedApprove = justep.xbl('dCurrentFolderInfo')
			.getValue("fIsNeedApprove");
	var isInheritApprove = justep.xbl('dCurrentFolderInfo')
			.getValue("fIsInheritApprove");
	if ((isNeedApprove != '0' && isNeedApprove != '1')
			|| (isInheritApprove != '0' && isInheritApprove != '1')) {
		alert("当前栏目审批信息不正确!");
		return;
	}
	var dlg = justep.xbl("dlgApproveSet");
	//dlg.initEveryTimes = true;
	dlg.open();
}

function dlgApproveSetSend(event) {
	var folderID = justep.xbl('dFolder').getValue('rowid');
	var data = justep.xbl('dCurrentFolderInfo');
	var isNeedApprove = data.getValue("fIsNeedApprove");
	var isInheritApprove = data.getValue("fIsInheritApprove");

	return {
		"folderID" : folderID,
		"isNeedApprove" : isNeedApprove,
		"isInheritApprove" : isInheritApprove
	};
}

function dlgApproveSetReceive(obj) {
	try {
		var folderID = justep.xbl('dFolder').getValue('rowid');
		var isNeedApprove = obj.data.isNeedApprove;
		var isInherit = obj.data.isInherit;
		var isOverride = obj.data.isOverride;

		updateFolderApproveSet(folderID, isNeedApprove, isInherit, isOverride);
		var data = justep.xbl('dCurrentFolderInfo');
		data.setValue("fIsNeedApprove", isNeedApprove, 'rowid1');
		data.setValue("fIsInheritApprove", isInherit, 'rowid1');
	} catch (e) {
		alert("审批设置失败!");
	}
}

// 更新栏目审批设置
function updateFolderApproveSet(folderID, isNeedApprove, isInherit, isOverride) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	param.setString("isNeedApprove", isNeedApprove);
	param.setString("isInherit", isInherit);
	param.setString("isOverride", isOverride);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"updateFolderApproveSetAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("审批设置失败!");
	}
}

// 打开 管理员设置 对话框
function openManagerSetDialog() {
	var data = justep.xbl('dFolder');
	var folderID = data.getValue("rowid");
	if ('public' == folderID) {
		alert("请选择一个有效的栏目!");
		return;
	}
	var isInheritManager = justep.xbl('dCurrentFolderInfo')
			.getValue("fIsInheritManager");
	if (isInheritManager != '0' && isInheritManager != '1') {
		alert("当前栏目管理员信息不正确!");
		return;
	}
	var dlg = justep.xbl("dlgManagerSet");
	dlg.initEveryTimes = true;
	dlg.open();
}

function dlgManagerSetSend(event) {
	var folderID = justep.xbl('dFolder').getValue('rowid');
	var isInheritManager = justep.xbl('dCurrentFolderInfo')
			.getValue("fIsInheritManager");

	return {
		"folderID" : folderID,
		"isInheritManager" : isInheritManager
	};
}

function dlgManagerSetReceive(obj) {
	var isInherit = obj.data.isInherit;
	var managerNames = obj.data.managerNames;

	var data = justep.xbl('dCurrentFolderInfo');
	data.setValue("fIsInheritManager", isInherit, 'rowid1');
	data.setValue("fManagerNames", managerNames, 'rowid1');
}

// 打开 权限设置对话框
function openRightsSetDialog() {
	var data = justep.xbl('dFolder');
	var folderID = data.getValue("rowid");
	var folderFullID = data.getValue("fFullID");
	var isInheritRights = justep.xbl('dCurrentFolderInfo')
			.getValue("fIsInheritRights");
	if ('public' == folderID) {
		alert("请选择一个有效的栏目!");
		return;
	}
	if (isInheritRights != '0' && isInheritRights != '1') {
		alert("当前栏目权限信息不正确!");
		return;
	}
	var dlg = justep.xbl("dlgRightsSet");
	dlg.initEveryTimes = true;
	dlg.open();
}

function dlgRightsSetSend(event) {
	var data = justep.xbl('dFolder');
	var folderID = data.getValue("rowid");
	var folderFullID = data.getValue("fFullID");
	var isInheritRights = justep.xbl('dCurrentFolderInfo')
			.getValue("fIsInheritRights");

	return {
		"folderID" : folderID,
		"folderFullID" : folderFullID,
		"isInheritRights" : isInheritRights
	};
}

function dlgRightsSetReceive(obj) {
	var isInherit = obj.data.isInherit;
	var data = justep.xbl('dCurrentFolderInfo');

	data.setValue("fIsInheritRights", isInherit, 'rowid1');
	justep.xbl("dRights").refreshData();
}

function deleteFolderFun(event) {
	var folderID = justep.xbl('dFolder').getCurrentRowId();
	if(folderID == 'public') {
		alert("根节点不允许删除!");
		return;
	}
	var can = canDeleteFolder();
	if(can) {
		justep.xbl('dFolder').deleteData();
	} else {
		alert('该栏目下拥有子栏目或知识,请先删除!');
	}
}

function canDeleteFolder() {
	var data = justep.xbl('dFolder');
	if(data) {
		var folderID = data.getCurrentRowId();
		var param = new justep.Request.ActionParam();
		param.setString("folderID", folderID);
		var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
				justep.Context.getCurrentActivity(),
				"canDeleteFolderAction", param);
	
		if (justep.Request.isBizSuccess(r)) {
			var can = justep.Request.transform(justep.Request.getData(r.responseXML));
			if(can == 'true') { return true; }
		}
	}
	return false;
}