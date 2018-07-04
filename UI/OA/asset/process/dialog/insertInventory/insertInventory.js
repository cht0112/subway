var dInventoryValueChanging = false;
function dInventoryValueChanged(event) {
	if (!dInventoryValueChanging) {
		dInventoryValueChanging = true;
		try {
			var psnID = justep.Context.getCurrentPersonID();
			var psnName = justep.Context.getCurrentPersonName();
			var time = justep.Date.toString(justep.System.datetime(),
					justep.Date.STANDART_FORMAT);
			var data = justep.xbl("dInventory");

			if (event.column == "fDeptID") {
				var rowid = data.getCurrentRowId();
				data.setValue("fPersonID", "", rowid);
				data.setValue("fPersonName", "", rowid);
			}

			data.setValue("fUpdatePsnID", psnID);
			data.setValue("fUpdatePsnName", psnName);
			data.setValue("fUpdateTime", time);
		} finally {
			dInventoryValueChanging = false;
		}
	}
}

// 人员下拉事件
function treeSltPsmDropdown(event) {
	var data = justep.xbl('dInventory');
	var deptID = data.getValue("fDeptID");

	var personData = justep.xbl('dPsm');
	personData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/" + deptID
			+ ".%'");
	personData.refreshData();
}

acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var dInventory = justep.xbl("dInventory");
	var dTemp = justep.xbl("dTemp");
	var dlgOperator = data.dlgOperator;
	dTemp.setValue("dlgOperator", dlgOperator);
	if (dlgOperator == "checkedInsert") {
		var assetIDStr = data.assetIDStr;
		dTemp.setValue("assetIDStr", assetIDStr);
		dInventory.newData();
	} else if (dlgOperator == "recordInsert") {
		var assetID = data.assetID;
		dTemp.setValue("assetID", assetID);
		dInventory.newData();
	} else if (dlgOperator == "recordUpdate") {
		var inventoryNO = data.inventoryNO;
		dInventory.filters.setFilter("inventoryFilter",
				"OA_AS_Inventory.fInventoryNO='" + inventoryNO + "'");
		dInventory.refreshData();
	}
}

function trgOKDOMActivate(event) {
	var assetID = "";
	var dInventory = justep.xbl("dInventory");
	var dJoinInventory = justep.xbl("dJoinInventory");
	var dTemp = justep.xbl("dTemp");
	var dlgOperator = dTemp.getValue("dlgOperator");
	if (dlgOperator == "checkedInsert") {
		var assetIDStr = dTemp.getValue("assetIDStr");
		var assetIDArray = new Array();
		assetIDArray = assetIDStr.split(",");
		var len = assetIDArray.length;
		for (var i = 0; i < len; i++) {
			assetID = assetIDArray[i];
			dJoinInventory.newData();
			dJoinInventory.setValue("fAssetID", assetID);
		}
	} else if (dlgOperator == "recordInsert") {
		assetID = dTemp.getValue("assetID");
		dJoinInventory.newData();
		dJoinInventory.setValue("fAssetID", assetID);
	}
	dInventory.saveData();
	dJoinInventory.saveData();
	windowEnsure();
}

function trgCancelDOMActivate(event) {
	windowCancel();
}