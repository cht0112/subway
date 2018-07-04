function mainmodelload(event) {
	person_list_tbxforms_select(event);
}
function person_detail_tbxforms_select(event) {
	var mainData = justep.xbl("main2");
	var sPersonID = justep.Context.getCurrentPersonID();
	mainData.filters.setFilter("psnFilter", "fSharedOrgID like'%" + sPersonID
			+ "%' AND fShareType = 0 ");
	mainData.refreshData();
}
function person_list_tbxforms_select(event) {
	var mainData = justep.xbl("main");
	var sPersonID = justep.Context.getCurrentPersonID();
	mainData.filters.setFilter("psnFilter", "fSharedOrgID='" + sPersonID
			+ "' AND fShareType = 1 ");
	mainData.refreshData();
}
// 选人对框
function addShareToQuery() {
	var dlgExec = justep.xbl("dlgShareRange");
	if (dlgExec) {
		dlgExec.initEveryTime = true;
		dlgExec.open();
	}
}
function dlgShareRangeReceive(event) {
	var dShareRange = justep.xbl('main');
	var sPersonIDs = "";

	var fSharedOrgKind = 'psn';
	var fShareOrgID = justep.Context.getCurrentPersonID();
	var fShareOrgName = justep.Context.getCurrentOrgName();
	var fShareOrgFullID = justep.Context.getCurrentPersonMemberFID();
	var fShareOrgFullName = justep.Context.getCurrentPersonMemberFName();

	var plannames = event.data;
	for ( var i = 0; i < plannames.getRowsNum(); i++) {
		var rowID = plannames.getRowId(i);
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		var fShareToOrgKind = plannames.getValueByName('sOrgKindID', i);
		var fShareToOrgFullID = plannames.getValueByName('sFID', i);
		/*
		 * if(fShareToOrgKind != 'org') fShareToOrgFullID = fShareToOrgFullID +
		 * "/" + sPersonId + ".psn";
		 */
		var fShareToOrgFullName = plannames.getValueByName('sFName', i);
		/*
		 * if(fShareToOrgKind != 'org') fShareToOrgFullName =
		 * fShareToOrgFullName + "/" + sName;
		 */
		var gd = xforms('grdPersonMember').grid;
		var ind = gd.getIndex([ "fShareToOrgID" ], [ rowID ]);

		if (ind != -1)
			continue;

		if (fShareOrgFullID == fShareToOrgFullID)
			continue;

		if (sPersonIDs.indexOf(rowID + ",") != -1)
			continue;
		sPersonIDs += rowID + ",";
		dShareRange.newData();
		dShareRange.instance.setValueByName('fShareType', '1');
		dShareRange.instance.setValueByName('fSharedOrgKindID', fSharedOrgKind);
		dShareRange.instance.setValueByName('fSharedOrgID', fShareOrgID);
		dShareRange.instance.setValueByName('fSharedOrgName', fShareOrgName);
		dShareRange.instance.setValueByName('fSharedOrgFID', fShareOrgFullID);
		dShareRange.instance.setValueByName('fSharedOrgFName',
				fShareOrgFullName);
		dShareRange.instance.setValueByName('fShareToOrgKindID',
				fShareToOrgKind);
		dShareRange.instance.setValueByName('fShareToOrgID', rowID);
		dShareRange.instance.setValueByName('fShareToOrgName', sName);
		dShareRange.instance
				.setValueByName('fShareToOrgFID', fShareToOrgFullID);
		dShareRange.instance.setValueByName('fShareToOrgFName',
				fShareToOrgFullName);
		dShareRange.instance.setValueByName('version', 0);
	}
}
function dlgShareRangeSend(event) {
	var data = {
		"rootFilter" : "sParent is null",
		"fixedFilter" : "1=1",
		"manageTypeCodes" : "",
		"displayableOrgKinds" : "ogn,dpt,pos,psm",
		"selectableOrgKinds" : "psm",
		"onlyMainPsm" : true
	};
	return data;
	/*
	 * var data = new SimpleStore('mySimpleStoreas', 'sName,sPersonID'); var
	 * para = new justep.CommonChoosePara('sName,sPersonID', data);
	 * data.loadData(null); return para;
	 */
}