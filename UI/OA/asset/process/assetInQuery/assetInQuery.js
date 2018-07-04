var assetInQuery = {};
function mdMainxforms_model_construct_done(event)
{	
	var data = justep.xbl('dAssetInM');
	data.refreshData();
}

function grdAssetInListRowDblclick(event)
{	
	var data = justep.xbl('dAssetInM');
	var id = data.getCurrentRowId();
	openAssetInDetail(id);
}

function grdAssetInList_fNORender(event)
{	
	if(event.value == "") { event.value="&#160;&#160;&#160;&#160;&#160;"; }
	var html = "<a href=\"javascript:openAssetInDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function openAssetInDetail(id){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/asset/process/assetInDetailView/assetInDetailView.w?process=" + process 
		+ "&activity="+ activity + "&id=" + id;
	justep.Portal.openWindow("资产入库",url);
}

assetInQuery.gridFilterStateGetCondition = function(event){
	var value = event.value;
	var defaultValue = event.defaultValue;
	var contdition = null;
	if (value == '')
		var contdition = "OA_AS_InM.fState IN (1)";

	else if (value == '0')
		var contdition = "OA_AS_InM.fState IN (0)";
	else if (value == '1') {
		var contdition = "OA_AS_InM.fState IN (1)";
	} else
		var contdition = "OA_AS_InM.fState IN (1,0)";
	event.handled = true;
	return contdition;
};
