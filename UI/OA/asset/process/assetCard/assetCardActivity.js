var assetCardActivity = {};
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
	openPortalOperator = "edit";
	var url = "/OA/asset/process/assetCardDetail/assetCardDetail.w?process=" + process 
		+ "&activity="+ activity + "&callerName=" + window.name
		+ "&openPortalOperator=" + openPortalOperator+ "&id=" + id;
	justep.Portal.openWindow("资产卡片",url);
}

var openPortalOperator = "";
window.name = "assetCardActivity.w";
function insertDOMActivate(event)
{	
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	openPortalOperator = "new";
	var url = "/OA/asset/process/assetCardDetail/assetCardDetail.w?process=" + process 
			+ "&activity="+ activity + "&callerName=" + window.name 
			+ "&openPortalOperator=" + openPortalOperator;
	justep.Portal.openWindow("资产卡片",url);
}
function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dAssetCard');
	data.refreshData();
	setComponentsStatus();
}

function dataChangeCallBackFun(id) {
	var data = justep.xbl("dAssetCard");
	//data.filters.setFilter("assetCardFilter", "OA_AS_Card='" + id + "'");
	data.refreshData();
}
assetCardActivity.trgClearClick = function(event){
	if(confirm("确定要资产清查?")){
		var process = justep.Context.getCurrentProcess();
		var activity = justep.Context.getCurrentActivity();
		var r = justep.Request.sendBizRequest(process, activity, "updateAssetConfirmStatusAction",null);
		if (!justep.Request.isBizSuccess(r)) {
			throw new Error(justep.Request.getServerError(r, "资产清查数据失败!"));
		}else{
			var data = justep.xbl('dAssetCard');
			data.refreshData();
			alert("资产清查成功!");
		}
	}
};
function setComponentsStatus() {
	var data = justep.xbl("dAssetCard");
	var count = data.getCount();
	if(count==0){
		justep.xbl("trgClear").setDisabled(true);
	}else{
		justep.xbl("trgClear").setDisabled(false);
	}
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
assetCardActivity.dAssetCardAfterRefresh = function(event){
	setComponentsStatus();
};


