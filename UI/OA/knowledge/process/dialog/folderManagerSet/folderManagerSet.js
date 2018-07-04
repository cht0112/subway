acceptParentParamsFun = "acceptData";
var mg_folderID = "";
var mg_isInheritManager = "";

function acceptData(data) {
	mg_folderID = data.folderID;
	mg_isInheritManager = data.isInheritManager;
	if (mg_isInheritManager == '1') {
		setCheckboxChecked('inheritChb');
	}

	var dManager = justep.xbl('dManager');
	dManager.filters.setFilter("managerFilter", "fFolderID = '" + mg_folderID
			+ "'");
	dManager.refreshData();
}

function sendData() {
	var data = justep.xbl('dManager');
	var isInherit = '0';
	if (inheritChb.checked) {
		isInherit = '1';
	}
	var managerNames = "";
	for (var i = 0; i < data.getCount(); i++) {
		var id = data.getRowId(i);
		var manager = data.getValue("fManagerName", id);
		managerNames = manager + " " + managerNames;
	}
	return {
		"isInherit" : isInherit,
		"managerNames" : managerNames
	};
}

function openSelectManagerDialog() {
	var orgInfoDlg = justep.xbl("dlgSelectManager");
	orgInfoDlg.initEveryTimes = true;
	orgInfoDlg.open();
}

function orgDlgSendPsm(data) {
	return {
		getSimpleStore : function() {
			var store = new SimpleStore("spcdata", "sName");
			return store;
		},
		getShowAlias : function() {
			return null;
		},
		selectKind : 'psm',
		viewKind : 'ogn,dpt,pos'
	};
}

function orgDlgReceivePsm(evt) {
	var data = justep.xbl('dManager');
	var grd = xforms('grdManager').grid;
	var orgInfos = evt.data.store;
	var len = orgInfos.getRowsNum();
	for (var i = 0; i < len; i++) {
		var fManagerID = orgInfos.getValueByName("sPersonID", i);
		var fManagerName = orgInfos.getValueByName("sName", i);
		var sOrgFName = orgInfos.getValueByName("sFName", i).replace(
				"/" + fManagerName, "");
		var index = grd.getIndex(["fManagerID"], [fManagerID]);
		if (index == -1) {
			data.newData();
			data.setRowData(data.getCurrentRowId(), [mg_folderID, fManagerID,
					fManagerName, sOrgFName, '0'], ["fFolderID", "fManagerID",
					"fManagerName", "sOrgFName", "fIsInherit"]);
		}
	}
}

// 响应 继承父栏目设置 单击事件
function inheritChbOnClick() {
	var data = justep.xbl('dManager');
	var DMANAGER_DATA_COLUMNIDS="fManagerID,fManagerName";
	var checked = inheritChb.checked;
	if (checked) {
		try {
			var grd = xforms('grdManager').grid;
			var r = getParentFolderManagerSetFun(mg_folderID);
			var st = new SimpleStore("executeData",
			DMANAGER_DATA_COLUMNIDS);
			st.loadData(null, r.responseXML);
			
			var len = st.getRowsNum();
			for (var i = 0; i < len; i++) {
				var managerID = st.getValueByName("fManagerID",i);
				var managerName =st.getValueByName("fManagerName",i);
				var isInherit = '1';
				var sOrgFName = "";
				if (managerID != '') {
					sOrgFName = getPsnMainOrgFullNameFun(managerID);
				}
				var index = grd.getIndex(["fManagerID"], [managerID]);
				if (index != -1) {
					grd.setValueByName("sOrgFName", sOrgFName, index);
					grd.setValueByName("fIsInherit", isInherit, index);
				} else {
					data.newData();
					data.setRowData(data.getCurrentRowId(), [mg_folderID,
							managerID, managerName, sOrgFName, '1'], [
							"fFolderID", "fManagerID", "fManagerName",
							"sOrgFName", "fIsInherit"]);
				}
			}
		} catch (e) {
			alert("继承父栏目管理员出错!");
			return;
		}
	} else {
		var length = data.getCount();
		for (var j = 0; j < length; j++) {
			var rowid = data.getRowId(j);
			data.setValue('fIsInherit', '0', rowid);
		}
	}
}

function getParentFolderManagerSetFun(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var translateParam = "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"getParentFolderManagerSetAction", param, translateParam);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("获取父栏目管理员失败!");
	}

	return r;
}

// 获取人员主机构name路径
function getPsnMainOrgFullNameFun(psnID) {
	var param = new justep.Request.ActionParam();
	param.setString("psnID", psnID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getPsnMainOrgFullNameAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("获取人员主机构失败!");
	}

	return justep.Request.transform(justep.Request.getData(r.responseXML));
}

function onEnsureFun() {
	try {
		var data = justep.xbl('dManager');
		justep.Request.beginBatch();
		data.saveData();
		updateAllSubFolderManagerSet(mg_folderID);
		var r = justep.Request.endBatch();
		if (!justep.Request.isBizSuccess(r)) {
			alert("更新管理员信息出错!");
		} else {
			windowEnsure(sendData());
		}
	} catch (e) {
		alert("对话框返回出错!");
	}
}

function onCancelFun() {
	windowCancel();
}

// 更新子栏目 管理员设置
// @pFolderID 父栏目ID
// @kind 更新类型(1=继承 2=覆盖)
function updateAllSubFolderManagerSet(folderID) {
	var isInherit = '0';
	if (inheritChb.checked) {
		isInherit = '1';
	}
	var kind = '1';
	if (overrideChb.checked) {
		kind = '2';
	}
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	param.setString("isInherit", isInherit);
	param.setString("kind", kind);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"updateAllSubFolderManagerSetAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("更新子栏目管理员出错!");
	}
}