var dlgOperator = "",checkID="",cardID="",assetInID="";

function mdAssetCardxforms_model_construct_done(event)
{	
	var openPortalOperator = justep.Request.URLParams.openPortalOperator;
	var data = justep.xbl('dAssetCard');
	var id = justep.Request.URLParams.id;
	data.filters.setFilter("assetCardFilter", "OA_AS_Card='"+ id + "'");
	data.refreshData();	
}

//验收记录
function trgCheckDOMActivate(event)
{	
	checkID = justep.xbl('dAssetCard').getValue("fCheckID");
	dlgOperator = "view";
	if(checkID==''){
		var assetCardID = justep.xbl('dAssetCard').getValue("fCode");
		alert("资产："+assetCardID+"没有验收信息！");
	}else{
		var wDlgCheck = justep.xbl("wDlgCheck");
		wDlgCheck.initEveryTimes = true;
		wDlgCheck.open();
	}
}

function wDlgCheckSend(event)
{	
	var params = {"operator":dlgOperator,"assetInID":checkID};
	return params;
}

//使用记录
function trgUseRecordDOMActivate(event)
{	
	cardID = justep.xbl('dAssetCard').getCurrentRowId();
	dlgOperator = "view";
	var wDlgUseRecord = justep.xbl("wDlgUseRecord");
	wDlgUseRecord.initEveryTimes = true;
	wDlgUseRecord.open();
}

function wDlgUseRecordSend(event)
{	
	var params = {"operator":dlgOperator,"cardID":cardID};
	return params;
}

//维修记录
function trgRepairDOMActivate(event)
{	
	cardID = justep.xbl('dAssetCard').getCurrentRowId();
	dlgOperator = "view";
	var wDlgRepair = justep.xbl("wDlgRepair");
	wDlgRepair.initEveryTimes = true;
	wDlgRepair.open();
}

function wDlgRepairSend(event)
{	
	var params = {"operator":dlgOperator,"cardID":cardID};
	return params;
}

//清查记录
function trgInventoryDOMActivate(event)
{	
	cardID = justep.xbl('dAssetCard').getCurrentRowId();
	dlgOperator = "view";	
	var wDlgInventory = justep.xbl("wDlgInventory");
	wDlgInventory.initEveryTimes = true;
	wDlgInventory.open();
}
function wDlgInventorySend(event)
{	
	var params = {"operator":dlgOperator,"cardID":cardID};
	return params;
}

//入库信息
function trgAssetInRecordDOMActivate(event)
{	
	assetInID = justep.xbl('dAssetCard').getValue("fAssetInID");
	dlgOperator = "view";
	if(assetInID==''){
		var assetCardID = justep.xbl('dAssetCard').getValue("fCode");
		alert("资产："+assetCardID+"没有入库信息！");
	}else{
		var wDlgAssetInRecord = justep.xbl("wDlgAssetInRecord");
		wDlgAssetInRecord.initEveryTimes = true;
		wDlgAssetInRecord.open();
	}
}

function wDlgAssetInRecordSend(event)
{	
	var params = {"operator":dlgOperator,"assetInID":assetInID};
	return params;
}