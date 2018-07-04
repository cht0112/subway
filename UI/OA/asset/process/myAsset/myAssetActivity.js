var myAssetActivity = {};
function grdAssetCard_fCodeRender(event)
{	
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openAssetCardDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function grdAssetCardRowDblClick(event)
{	
	var data = justep.xbl('dAssetCard');
	var id = data.getCurrentRowId();
	openAssetCardDetail(id);
}

function openAssetCardDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/asset/process/assetCardDetailView/assetCardDetailView.w?process="
			+ process + "&activity=" + activity + "&id=" + id;
	justep.Portal.openWindow("资产卡片",url);
}

var openPortalOperator = "";
window.name = "assetCardActivity.w";
function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dAssetCard');
	data.refreshData();
}

myAssetActivity.trgConfirmClick = function(event){
	var data = justep.xbl('dAssetCard');
	var gridData = justep.xbl('grdAssetCard').grid;
	var ids = gridData.getCheckedRowIds();
	if(ids.length > 0){
		for(var i=0; i<ids.length; i++){
			data.setValue("fAssetConfirm","已确认",ids[i]);
		}
		data.saveData();
	}
};

myAssetActivity.smartFilter1GetCondition = function(event){
	var value = event.value;
	var contdition = "(UPPER(fCode) LIKE '%"+value+"%') OR (UPPER(fName) LIKE '%"+value+"%') OR "+
	"(UPPER(fSpecType) LIKE '%"+value+"%') OR (UPPER(fUnit) LIKE '%"+value+"%') OR "+
	"(UPPER(fOriginValue) LIKE '%"+value+"%') OR (UPPER(fRemainValue) LIKE '%"+value+"%') OR "+
	"(UPPER(fSourceName) LIKE '%"+value+"%')";
	
	event.handled =true;
	return contdition;
};
