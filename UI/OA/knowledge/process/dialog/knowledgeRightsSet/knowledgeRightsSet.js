acceptParentParamsFun = "acceptData";
var rt_kw_kwid = "";
var rt_kw_isInheritRights = "";

function acceptData(data) {
	rt_kw_kwid = data.kwid;
	rt_kw_isInheritRights = data.isInheritRights;

	/*
	 * if (rt_kw_isInheritRights == '1') { setCheckboxChecked('inheritChb'); }
	 */

	var data = justep.xbl('dRights');
	data.filters.setFilter("RightsFilter", "fKWID = '" + rt_kw_kwid
			+ "' and fKWKind = 'Knowledge'");
	data.refreshData();
}

function windowSend() {
	justep.xbl('dRights').saveData();
	return null;
}

// 响应 继承父栏目设置 单击事件
/*
 * function inheritChbOnClick() {
 * 
 * var data = justep.xbl('dRights'); var checked = inheritChb.checked;
 * if(checked) { inheritFolderRights(); } else { var len = data.getCount(); for
 * (var i = 0; i < len; i++) { var rowid = data.getRowId(i);
 * data.setValue('fIsInherit', '0', rowid); } } }
 */

function inheritFolderRights() {
	var param = new justep.Request.ActionParam();
	param.setString("kwid", rt_kw_kwid);
	var translateParam = "<translate-parameter><display-type>table</display-type></translate-parameter>";
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getAttachedFDRightsAction",
			param, translateParam);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("继承栏目权限失败!");
	}

	addDataToRightsFormDom(r);
}

function addDataToRightsFormDom(r) {
	var dRights = justep.xbl('dRights');
	var delRowIDs = '';
	var delResult = true;
	var grdRights = xforms('grdRights').grid;
	for (var i = 0; i < grdRights.getRowsNum(); i++) {
		var rowid = grdRights.getValueByName("rowid", i)
		var fIsInherit = grdRights.getValueByName("fIsInherit", i);
		if (fIsInherit == '1') {
			if (delRowIDs == '') {
				delRowIDs = rowid;
			} else {
				delRowIDs += "," + rowid;
			}
		}
	}
	if (delRowIDs != '') {
		dRights.deleteConfirm = false;
		delResult = dRights.deleteData(delRowIDs);
		dRights.deleteConfirm = true;
	}
	if (!delResult) {
		return;
	}

	var kwid = rt_kw_kwid;
	var DRIGHTS_DATA_COLUMNIDS = "fFolderID,fFolderName,fFolderFullID,fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName,fCanCreateKW,fCanReadKW,fCanReleaseKW,fCanCreateComment,fCanReadComment,fCanReadRecord,fCanScore";
	var st = new SimpleStore("executeData", DRIGHTS_DATA_COLUMNIDS);
	st.loadData(null, r.responseXML);
	var len = st.getRowsNum();
	// var len = r.responseXML.selectSingleNode("/root/data/count").text;
	for (var i = 0; i < len; i++) {
		var folderID = st.getValueByName("fFolderID", i);
		var folderName = st.getValueByName("fFolderName", i);
		var folderFullID = st.getValueByName("fFolderFullID", i);
		var orgKind = st.getValueByName("fOrgKind", i);
		var orgID = st.getValueByName("fOrgID", i);
		var orgName = st.getValueByName("fOrgName", i);
		var orgFID = st.getValueByName("fOrgFID", i);
		var orgFName = st.getValueByName("fOrgFName", i);
		var canCreateKW = st.getValueByName("fCanCreateKW", i);
		var canReadKW = st.getValueByName("fCanReadKW", i);
		var canReleaseKW = st.getValueByName("fCanReleaseKW", i);
		var canCreateComment = st.getValueByName("fCanCreateComment", i);
		var canReadComment = st.getValueByName("fCanReadComment", i);
		var canScore = st.getValueByName("fCanScore", i);
		var canReadRecord = st.getValueByName("fCanReadRecord", i);
		var fKWFullID = folderFullID + "/" + kwid;
		var isInherit = '1';

		var id = grdRights.locate([kwid, folderID, orgFID], ['fKWID',
				'fFolderID', 'fOrgFID'], true)[0];
		if (typeof(id) != "undefined") {
			dRights.deleteConfirm = false;
			delResult = dRights.deleteData(id);
			dRights.deleteConfirm = true;
		}

		dRights.newData();
		dRights.setRowData(dRights.getCurrentRowId(), ['Knowledge', folderID,
				folderName, kwid, fKWFullID, orgKind, orgID, orgName, orgFID,
				orgFName, canCreateKW, canReadKW, canReleaseKW,
				canCreateComment, canReadComment, canScore, canReadRecord,
				isInherit], ['fKWKind', 'fFolderID', 'fFolderName', 'fKWID',
				'fKWFullID', 'fOrgKind', 'fOrgID', 'fOrgName', 'fOrgFID',
				'fOrgFName', 'fCanCreateKW', 'fCanReadKW', 'fCanReleaseKW',
				'fCanCreateComment', 'fCanReadComment', 'fCanScore',
				'fCanReadRecord', 'fIsInherit']);
	}
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
	var grd = xforms('grdRights').grid
	var orgInfos = evt.data.store;
	var len = orgInfos.getRowsNum();
	for (var i = 0; i < len; i++) {
		var fKWKind = "Folder";
		var orgKind = orgInfos.getValueByName("sOrgKindID", i);
		var orgID = orgInfos.getValueByName("sPersonID", i);
		if (orgID == "")
			orgID = orgInfos.getRowId(i);
		var orgName = orgInfos.getValueByName("sName", i);
		var orgFID = orgInfos.getValueByName("sFID", i);
		var orgFName = orgInfos.getValueByName("sFName", i);

		var index = grd.getIndex(["fOrgFID"], [orgFID]);
		if (index == -1) {
			data.newData();
			data.setRowData(data.getCurrentRowId(), ["Knowledge", rt_kw_kwid,
					orgKind, orgID, orgName, orgFID, orgFName, '0'], [
					"fKWKind", "fKWID", "fOrgKind", "fOrgID", "fOrgName",
					"fOrgFID", "fOrgFName", "fIsInherit"]);
		}
	}
}