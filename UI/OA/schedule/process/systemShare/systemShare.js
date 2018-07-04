function grid1AfterIndexChanged(event) {
	var btnData = justep.xbl("dBtnState");
	if (event.rowId != '_is_root_') {
		var treeData = justep.xbl("orgTreeData");
		roleManagement.nodeKind = treeData.getValue('sOrgKindID');
		if (treeData.getValue('sOrgKindID') == 'psm') {
			btnData.setValue("insert", "1");
		} else {
			btnData.setValue("insert", "0");
		}
		if (roleManagement.nodeKind == "person") {
			roleManagement.personID = treeData.getValue('sId');
			var rowId = treeData.getCurrentRowId();
			var parentID = treeData.getStore().getParentId(rowId);
			roleManagement.orgID = treeData.getValue('sId', rowId);
			roleManagement.orgName = treeData.getValue('sName', rowId);
			roleManagement.orgFID = treeData.getValue("sFId", parentID);
			roleManagement.orgFID = roleManagement.orgFID + "/"
					+ roleManagement.orgID + ".psn";
			roleManagement.orgFName = treeData.getValue("sFName", parentID);
			roleManagement.orgFName = roleManagement.orgFName + "/"
					+ roleManagement.orgName;
		} else {
			roleManagement.orgID = treeData.getCurrentRowId();
			roleManagement.orgName = treeData.getValue('sName');
			roleManagement.personID = "";
			roleManagement.orgFID = treeData.getValue("sFID");
			roleManagement.orgFName = treeData.getValue("sFName");
		}
		// 刷新mianData
		var mainData = justep.xbl("main");
		if (!mainData)
			return;
		mainData.refreshData();
		return true;
	} else {
		btnData.setValue("insert", "0");
	}
}

/*
 * function orgTreeAfterIndexChanged(event) { var treeData =
 * justep.xbl("orgTreeData"); roleManagement.nodeKind =
 * treeData.getValue('sOrgKindID'); if (roleManagement.nodeKind == "person") {
 * roleManagement.personID = treeData.getValue('sId'); var rowId =
 * treeData.getCurrentRowId(); var parentID =
 * treeData.getStore().getParentId(rowId); roleManagement.orgID =
 * treeData.getValue('sId', rowId); roleManagement.orgName =
 * treeData.getValue('sName', rowId); roleManagement.orgFID =
 * treeData.getValue("sFId", parentID); roleManagement.orgFID =
 * roleManagement.orgFID + "/" + roleManagement.orgID + ".psn";
 * roleManagement.orgFName = treeData.getValue("sFName", parentID);
 * roleManagement.orgFName = roleManagement.orgFName + "/" +
 * roleManagement.orgName; } else { roleManagement.orgID =
 * treeData.getCurrentRowId(); roleManagement.orgName =
 * treeData.getValue('sName'); roleManagement.personID = "";
 * roleManagement.orgFID = treeData.getValue("sFId"); roleManagement.orgFName =
 * treeData.getValue("sFName"); } // 刷新mianData var mainData =
 * justep.xbl("main"); if (!mainData) return; mainData.refreshData(); return
 * true; }
 */
/**
 * **************************** model method ***********************************
 */
function mainBeforeRefresh(event) {
	var condition = "";
	/*
	 * if (roleManagement.nodeKind == "psn") { condition = "fSharedOrgID = '" +
	 * roleManagement.personID + "'"; } else { condition = "fSharedOrgID = '" +
	 * roleManagement.orgID + "'"; }
	 */

	condition = "fSharedOrgID = '" + roleManagement.orgID + "'";
	var mainData = justep.xbl("main");
	mainData.filters.setFilter("personFilter", condition);
	mainData.filters.setFilter("typeFilter", "fShareType = 0");
}

function orgTreeBeforeIndexChanged(event) {
	var mainData = justep.xbl("main");
	if (!mainData)
		return true;
	var isChanged = mainData.canSave();
	if (isChanged) {
		if (confirm("数据已经修改，保存数据吗？")) {
			mainData.saveData(function() {
				mainData.refreshData();
			});
			return (!mainData.canSave());
		} else {
			return false;
		}
	} else {
		return true;
	}
}

function dlgShareToPersonSend(event) {
	var data = {
		"rootFilter" : "sParent is null",
		"fixedFilter" : "",
		"manageTypeCodes" : "",
		"displayableOrgKinds" : "ogn,dpt,pos,psm",
		"selectableOrgKinds" : null,
		"onlyMainPsm" : true
	};
	return data;
}
function dlgShareToPersonReceive(event) {
	var dShareRange = justep.xbl('main');
	var sPersonIDs = "";
	var plannames = event.data;
	for ( var i = 0; i < plannames.getRowsNum(); i++) {
		var rowID = plannames.getRowId(i);
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		var fShareToOrgKind = plannames.getValueByName('sOrgKindID', i);
		var fShareToOrgFullID = plannames.getValueByName('sFID', i);
		var fShareToOrgFullName = plannames.getValueByName('sFName', i);
		var gd = xforms('grdShareIssue').grid;
		var ind = gd.getIndex([ "fShareToOrgID" ], [ rowID ]);
		if (ind != -1)
			continue;
		if (sPersonIDs.indexOf(rowID + ",") != -1)
			continue;
		sPersonIDs += rowID + ",";
		dShareRange.newData();
		dShareRange.instance.setValueByName('fShareType', 0 + '');
		dShareRange.instance.setValueByName('fSharedOrgKindID',
				roleManagement.nodeKind);
		dShareRange.instance.setValueByName('fSharedOrgID',
				roleManagement.orgID);
		dShareRange.instance.setValueByName('fSharedOrgName',
				roleManagement.orgName);
		dShareRange.instance.setValueByName('fSharedOrgFID',
				roleManagement.orgFID);
		dShareRange.instance.setValueByName('fSharedOrgFName',
				roleManagement.orgFName);
		dShareRange.instance.setValueByName('fShareToOrgKindID',
				fShareToOrgKind);
		dShareRange.instance.setValueByName('fShareToOrgID', rowID);
		dShareRange.instance.setValueByName('fShareToOrgName', sName);
		dShareRange.instance
				.setValueByName('fShareToOrgFID', fShareToOrgFullID);
		dShareRange.instance.setValueByName('fShareToOrgFName',
				fShareToOrgFullName);/**/
	}
}
function addShareToQuery() {
	var dlgExec = justep.xbl("dlgShareToPerson");
	if (dlgExec) {
		dlgExec.initEveryTime = true;
		dlgExec.open();
	}
}
var roleManagement = {

	nodeKind : "org",
	personID : "",
	orgID : "",
	orgName : "",
	orgFID : "",
	orgFName : "",
	orgPersonDataAfterRefresh : function(event) {
		window.setTimeout(function() {
			event.source.expandRowsToLevel(0);
		}, 200);
	}
};
// old version method
