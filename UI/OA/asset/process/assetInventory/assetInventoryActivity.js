var dlgOperator = "",assetID = "",assetIDStr ="";

function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dAssetInventory');
	data.refreshData();
}

function trgInsertDOMActivate(event)
{	
	var data = justep.xbl('dAssetInventory');
	assetIDStr = "";
	var checkedIDs = data.getStore().getCheckedRowIds();
	var len = checkedIDs.length;
	if (len == 0) {
		alert("您没选择任何要清查的资产，请先选择！");
	} else {
		for (var i = 0; i < len; i++) {
			if (assetIDStr == "") {
				assetIDStr = checkedIDs[i];
			} else {
				assetIDStr += "," + checkedIDs[i];
			}
		}
		dlgOperator = "checkedInsert";
		var wDlgInsertInventory = justep.xbl("wDlgInsertInventory");
		wDlgInsertInventory.initEveryTimes = true;
		wDlgInsertInventory.open();
	}
}

function wDlgInsertInventorySend(event)
{	
	var params = {"assetIDStr":assetIDStr,"dlgOperator":dlgOperator};
	return params;
}


function grdAssetInventory_inventoryRender(event)
{		
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openInventoryRecord('" + event.rowId
			+ "')\">" + "查看" + "</a>";
	return html;
}

function openInventoryRecord(id){
	assetID = id;
	var wDlgInventoryRecord = justep.xbl("wDlgInventoryRecord");
	wDlgInventoryRecord.initEveryTimes = true;
	wDlgInventoryRecord.open();
}

function wDlgInventoryRecordSend(event)
{	
	var params = {"assetID":assetID};
	return params;
}

function grdAssetInventory_fCodeRender(event)
{	
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openAssetCardDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function openAssetCardDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/asset/process/assetCardDetailView/assetCardDetailView.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&id=" + id;
	justep.Portal.openWindow("资产卡片详细", url);
}