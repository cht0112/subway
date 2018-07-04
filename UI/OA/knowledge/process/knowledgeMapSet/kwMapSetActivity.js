function mdKWMapxforms_model_construct_done(event) {
	var data = justep.xbl('dFolder');
	data.refreshData();
	data.instance.store.expand("map");
}

function dFolderValueChanged(event) {
	var data = justep.xbl('dFolder');
	var state = data.getRowState(event.rowId);
	if(state == 'edit') {
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
	if (event.rowId == 'map') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		var parent = event.instance.getValue('fParent',event.rowId);
		if(parent == 'map') {
			return "/UI/OA/common/images/org.gif";
		} else {
			return "/UI/OA/common/images/dept.gif";
		}
	}
}

function grdFolderRowClick(event) {
	controlBtnStatusFun();	
	displayCurrentFolderInfo();
}

// 控制 管理员设置、权限设置等按钮的只读状态
function controlBtnStatusFun() {
	var data = justep.xbl('dFolder');
	var parent = data.getValue("fParent");
	if (parent == '') {
		managerSet.disabled = true;
		rightSet.disabled = true;
	} else {
		managerSet.disabled = false;
		if (parent == 'map') {
			rightSet.disabled = false;
		} else {
			rightSet.disabled = true;
		}
	}
}

// 显示当前栏目信息
function displayCurrentFolderInfo() {
	var dCurrentFolder = justep.xbl("dCurrentFolderInfo");
	var folderID = justep.xbl("dFolder").getValue("rowid");
	if (folderID != 'map') {
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

// 新建知识地图
function newKWMap() {
	var data = justep.xbl('dFolder');
	if (data && data != undefined) {
		var pid = data.getRowId();
		var pFullID = data.getValue("fFullID");
		var pFullName = data.getValue("fFullName");

		data.newData(null, pid);
		var fullID = pFullID + "/" + data.getCurrentRowId();
		var name = "新建知识地图";
		var fullName = pFullName + "/" + name;
		data.setValue("fName", name);
		data.setValue("fFullID", fullID);
		data.setValue("fFullName", fullName);
		data.saveData();

		justep.xbl('dCurrentFolderInfo').setValue("fIsInheritManager", '0',
				'rowid1');
		controlBtnStatusFun();				
		displayCurrentFolderInfo();
	}
}

// 新建地图分类
function newKWMapKind() {
	var data = justep.xbl('dFolder');
	if (data && data != undefined) {
		var pid = data.getRowId();
		var pFullID = data.getValue("fFullID");
		var pFullName = data.getValue("fFullName");

		data.newData(null, pid);
		var folderID = data.getCurrentRowId();
		var fullID = pFullID + "/" + folderID;
		var name = "新建地图分类";
		var fullName = pFullName + "/" + name;
		data.setValue("fName", name);
		data.setValue("fFullID", fullID);
		data.setValue("fFullName", fullName);
		data.saveData();

		justep.xbl('dCurrentFolderInfo').setValue("fIsInheritManager", '1',
				'rowid1');
		try {
			inheritManagerSetFun(folderID);
			controlBtnStatusFun();
			displayCurrentFolderInfo();
		} catch(e) {
			alert(e.message);
		}
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

function conceptIsReadonly() {
	var data = justep.xbl('dFolder');
	if (data) {
		var id = data.getCurrentRowId();
		if (id == 'map') {
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
	param.setString("kind", "map");
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

// 打开 管理员设置 对话框
function openManagerSetDialog() {
	var dlg = justep.xbl("dlgManagerSet");
	dlg.initEveryTimes = true;
	dlg.open();
}

function dlgManagerSetSend(event) {
	var folderID = justep.xbl('dFolder').getCurrentRowId();
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
	var dlg = justep.xbl("dlgRightsSet");
	dlg.initEveryTimes = true;
	dlg.open();
}

function dlgRightsSetSend(event) {
	var data = justep.xbl('dFolder');
	var folderID = data.getValue("rowid");
	var folderFullID = data.getValue("fFullID");

	return {
		"folderID" : folderID,
		"folderFullID" : folderFullID
	};
}

function dlgRightsSetReceive(obj) {
	justep.xbl("dRights").refreshData();
}