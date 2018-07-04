acceptParentParamsFun = "acceptData";
var rt_folderID = "";
var rt_folderFullID = "";
var rt_isInheritRights = "";

function acceptData(data) {
	rt_folderID = data.folderID;
	rt_folderFullID = data.folderFullID;
	rt_isInheritRights = data.isInheritRights;
	if (rt_isInheritRights == '1') {
		setCheckboxChecked('inheritChb');
	}

	var dRights = justep.xbl('dRights');
	dRights.filters.setFilter("RightsFilter", "fFolderID = '" + rt_folderID
			+ "' and fKWKind = 'Folder'");
	dRights.refreshData();
}

function sendData() {
	var isInherit = '0';
	if (inheritChb.checked) {
		isInherit = '1';
	}
	return {
		"isInherit" : isInherit
	};
}

function openSelectRightOrgDialog() {
	var orgInfoDlg = justep.xbl("dlgSelectRightOrg");
	orgInfoDlg.initEveryTimes = true;
	orgInfoDlg.open();
}

function orgDlgSendall(data) {
	return {
		getSimpleStore : function() {
			var store = new SimpleStore("spcdata", "sName");
			return store;
		},
		getShowAlias : function() {
			return null;
		},
		selectKind : '',
		viewKind : 'ogn,dpt,pos'
	};
}

function orgDlgReceiveall(evt) {
	var data = justep.xbl('dRights');
	var grd = xforms('grdRights').grid;
	var orgInfos = evt.data.store;
	var len = orgInfos.getRowsNum();
	for ( var i = 0; i < len; i++) {
		var fKWKind = "Folder";
		var orgKind = orgInfos.getValueByName("sOrgKindID", i);
		var orgID = orgInfos.getValueByName("sPersonID", i);
		if (orgID == "")
			orgID = orgInfos.getRowId(i);
		var orgName = orgInfos.getValueByName("sName", i);
		var orgFID = orgInfos.getValueByName("sFID", i);
		var orgFName = orgInfos.getValueByName("sFName", i);

		var index = grd.getIndex( [ "fOrgFID" ], [ orgFID ]);
		if (index == -1) {
			data.newData();
			data.setRowData(data.getCurrentRowId(), [ fKWKind, rt_folderID,
					rt_folderFullID, orgKind, orgID, orgName, orgFID, orgFName,
					'0' ],
					[ "fKWKind", "fFolderID", "fKWFullID", "fOrgKind",
							"fOrgID", "fOrgName", "fOrgFID", "fOrgFName",
							"fIsInherit" ]);
		}
	}
}

// 响应 继承父栏目设置 单击事件
function inheritChbOnClick() {
	var DRIGHTS_DATA_COLUMNIDS = "fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName,fCanCreateKW,fCanReadKW,fCanReleaseKW,fCanCreateComment,fCanReadComment,fCanReadRecord,fCanScore";
	var data = justep.xbl('dRights');
	var checked = inheritChb.checked;
	if (checked) {
		try {
			var grd = xforms('grdRights').grid;
			var r = getParentFolderRightsSetFun(rt_folderID);
			var st = new SimpleStore("executeData", DRIGHTS_DATA_COLUMNIDS);
			st.loadData(null, r.responseXML);
			var len = st.getRowsNum();
			for ( var i = 0; i < len; i++) {
				var orgFID = st.getValueByName("fOrgFID", i);
				var index = grd.getIndex( [ "fOrgFID" ], [ orgFID ]);
				if (index != -1) {
					grd.instance.setValueByName('fIsInherit', '1', index);
				} else {
					var orgKind = st.getValueByName("fOrgKind", i);
					var orgID = st.getValueByName("fOrgID", i);
					var orgName = st.getValueByName("fOrgName", i);
					var orgFName = st.getValueByName("fOrgFName", i);
					var canCreateKW = st.getValueByName("fCanCreateKW", i);
					var canReadKW = st.getValueByName("fCanReadKW", i);
					var canReleaseKW = st.getValueByName("fCanReleaseKW", i);
					var canCreateComment = st.getValueByName(
							"fCanCreateComment", i);
					var canReadComment = st
							.getValueByName("fCanReadComment", i);
					var canScore = st.getValueByName("fCanScore", i);
					var canReadRecord = st.getValueByName("fCanReadRecord", i);
					var isInherit = '1';

					data.newData();
					data.setRowData(data.getCurrentRowId(), [ "Folder",
							rt_folderID, rt_folderFullID, orgKind, orgID,
							orgName, orgFID, orgFName, canCreateKW, canReadKW,
							canReleaseKW, canCreateComment, canReadComment,
							canScore, canReadRecord, isInherit ], [ "fKWKind",
							"fFolderID", "fKWFullID", "fOrgKind", "fOrgID",
							"fOrgName", "fOrgFID", "fOrgFName", "fCanCreateKW",
							"fCanReadKW", "fCanReleaseKW", "fCanCreateComment",
							"fCanReadComment", "fCanScore", "fCanReadRecord",
							"fIsInherit" ]);
				}
			}
		} catch (e) {
			alert("继承父栏目权限出错!");
			return;
		}
	} else {
		var length = data.getCount();
		var grd = xforms('grdRights').grid;
		for ( var j = 0; j < length; j++) {
			var id = data.getRowId(j);
			data.setValue('fIsInherit', '0', id);
		}
	}
}

// 获取父栏目权限设置
function getParentFolderRightsSetFun(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var translateParam = "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"getParentFolderRightsSetAction", param, translateParam);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("获取父栏目权限失败!");
	}

	return r;
}

function getNodeValue(dom, level, field) {
	var result = "";
	try {
		result = dom.responseXML.selectSingleNode("/root/data/items/items["
				+ level + "]/" + field).text;
	} catch (e) {
	}
	return result;
}

function onEnsureFun() {
	try {
		var data = justep.xbl('dRights');
		justep.Request.beginBatch();
		data.saveData();
		if (overrideFDChb.checked) {
			overrideAllSubFDRightsSet(rt_folderID);
			if (overrideKWChb.checked) {
				overrideKWRightsFromFDSet(rt_folderID, 'true');
			}
		} else {
			updateAllSubFDRightsSet(rt_folderID);
			if (overrideKWChb.checked) {
				overrideKWRightsFromFDSet(rt_folderID, 'false');
			}
		}
		var r = justep.Request.endBatch();
		if (!justep.Request.isBizSuccess(r)) {
			alert("更新栏目权限信息出错!");
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

// 更新所有子栏目权限设置(继承)
function updateAllSubFDRightsSet(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"updateAllSubFDRightsSetAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("更新子栏目权限失败!");
	}
}

// 覆盖子栏目权限设置
function overrideAllSubFDRightsSet(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"overrideAllSubFDRightsSetAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("应用于子栏目操作失败!");
	}
}

// 覆盖栏目的知识权限设置
// includeSub = 'true' 表示要除了要覆盖当前栏目知识权限外,还要覆盖所有子栏目的知识权限
// includeSub = 'false' 只覆盖当前栏目下的知识权限
function overrideKWRightsFromFDSet(folderID, includeSub) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	param.setString("includeSub", includeSub);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"overrideKWRightsFromFDSetAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("应用于知识操作失败!");
	}
}