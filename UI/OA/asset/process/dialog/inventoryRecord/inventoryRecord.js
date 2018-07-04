var dlgOperator = "", assetID = "", inventoryNO = "";
acceptParentParamsFun = "acceptData";

function acceptData(data) {
	var dInventory = justep.xbl("dInventory");
	var assetID = data.assetID;
	justep.xbl('dTemp').setValue("assetID", assetID);
	dInventory.filters.setFilter("inventoryFilter",
			"OA_AS_InventoryD.fAssetID='" + assetID + "'");
	dInventory.refreshData();
}

function trgInsertDOMActivate(event) {
	dlgOperator = "recordInsert";
	assetID = justep.xbl('dTemp').getValue("assetID");
	var wDlgInsertInventory = justep.xbl("wDlgInsertInventory");
	wDlgInsertInventory.initEveryTimes = true;
	wDlgInsertInventory.open();
}
function wDlgInsertInventorySend(event) {
	var params = {
		"assetID" : assetID,
		"dlgOperator" : dlgOperator
	};
	return params;
}

function wDlgInsertInventoryReceive(data) {
	var dInventory = justep.xbl("dInventory");
	dInventory.refreshData();
}

function grdInventory_fInventoryNORender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openUpdateInventory('" + event.value
			+ "')\">" + event.value + "</a>";
	return html;
}

function openUpdateInventory(id) {
	dlgOperator = "recordUpdate";
	inventoryNO = id;
	var wDlgUpdateInventory = justep.xbl("wDlgUpdateInventory");
	wDlgUpdateInventory.initEveryTimes = true;
	wDlgUpdateInventory.open();
}

function wDlgUpdateInventorySend(event) {
	var params = {
		"inventoryNO" : inventoryNO,
		"dlgOperator" : dlgOperator
	};
	return params;
}

function wDlgUpdateInventoryReceive(data) {
	var dInventory = justep.xbl("dInventory");
	dInventory.refreshData();
}