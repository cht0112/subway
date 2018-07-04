var managerProcessActivity = {};
var kindID = "",kind="",isFilter="";
function dUseApplyValueChanged(event)
{	
	if (event.column == "fProcess"){
		var dUseArrange = justep.xbl("dUseArrange");
		var id = dUseArrange.getCurrentRowId();
		if(id){
			var result = deleteAssetUseArrange(id);
			if(result==true){
				dUseArrange.refreshData();
			}
		}
	}
}

function deleteAssetUseArrange(id){
	var param = new justep.Request.ActionParam();
	param.setString("id", id);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity, "deleteAssetUseArrangeAction",
			param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "删除资产使用申请安排信息失败!"));
	}
	return true;
}


function tabFlowChartxforms_select(event)
{	
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dUseApply').getCurrentRowId();
	control.loadByData(process, bizData);
}

function trgSelectAssetDOMActivate(event)
{	
	kindID = justep.xbl('dUseApply').getValue("fKindID");
	kind = justep.xbl('dUseApply').getValue("fKind");
	isFilter = "yes"
	var wDlgAssetCard = justep.xbl("wDlgAssetCard");
	wDlgAssetCard.initEveryTimes = true;
	wDlgAssetCard.open();
}

function wDlgAssetCardSend(event)
{	
	var params = {"kindID":kindID,"kind":kind,"isFilter":isFilter};
	return params;	
}

function wDlgAssetCardReceive(obj)
{	
	var data = justep.xbl('dUseArrange');
	var len = data.getCount();	
	if(len==0){
		data.newData();
		data.setValue("fAssetID",obj.data.fID);
		data.setValue("fCode",obj.data.fCode);
		data.setValue("fName",obj.data.fName);
		data.setValue("fSpecType",obj.data.fSpecType);
		data.setValue("fKindID",obj.data.fKindID);
		data.setValue("fKind",obj.data.fKind);
		data.setValue("fUnitID",obj.data.fUnitID);
		data.setValue("fUnit",obj.data.fUnit);
		data.saveData();
		data.refreshData();
	}else{
		if(obj.data.fID!=data.getValue("fAssetID")){
			data.setValue("fAssetID",obj.data.fID);
			data.setValue("fCode",obj.data.fCode);
			data.setValue("fName",obj.data.fName);
			data.setValue("fSpecType",obj.data.fSpecType);
			data.setValue("fKindID",obj.data.fKindID);
			data.setValue("fKind",obj.data.fKind);
			data.setValue("fUnitID",obj.data.fUnitID);
			data.setValue("fUnit",obj.data.fUnit);
			
			var psnID = justep.Context.getCurrentPersonID();
			var psnName = justep.Context.getCurrentPersonName();
			var time = justep.Date.toString(justep.System.datetime(),'YYYY-MM-DD');
			
			data.setValue("fArrangePsnID", psnID);
			data.setValue("fArrangePsnName", psnName);
			data.setValue("fArrangeDate", time);
			data.saveData();
			data.refreshData();
		}
	}
}

/**
	name:process#onBeforeAdvanceQuery
	description: <b>[回调型事件]</b>流转查询之前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"cancel":false}
*/
managerProcessActivity.assetUseApplyProcessBeforeAdvanceQuery = function(data){
	var dUseApply = justep.xbl('dUseApply');
	var fProcess = dUseApply.getValue("fProcess");
	var dUseArrange = justep.xbl('dUseArrange');
	var fAssetID = dUseArrange.getValue("fAssetID");
	if(fProcess == 0){
		if(fAssetID == ""){
			data.cancel = true;
			alert('请填写分配信息！');
		}
	}
};
