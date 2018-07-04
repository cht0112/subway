function dRepairApplyValueChanged(event) {
	var data = justep.xbl('dRepairApply');
	var fRepairDate = data.getValue("fRepairDate");
	var fReturnDate = data.getValue("fReturnDate");
	var fRepairAmount = data.getValue("fRepairAmount");
	if (event.column == "fRepairDate" || event.column == "fReturnDate"
			|| event.column == "fRepairAmount") {
		var psnID = justep.Context.getCurrentPersonID();
		var psnName = justep.Context.getCurrentPersonName();
		var time = justep.Date.toString(justep.System.datetime(),
				justep.Date.STANDART_FORMAT);
		data.setValue("fUpdatePsnID", psnID);
		data.setValue("fUpdatePsnName", psnName);
		data.setValue("fUpdateTime", time);
	}
}

function dRepairItemValueChanged(event) {
	var data = justep.xbl('dRepairItem');
	var id = data.getCurrentRowId();
	if (event.column == "fAmount") {
		sumAmount();
	}
}

function dFittingInfoValueChanged(event) {
	var data = justep.xbl('dFittingInfo');
	var id = data.getCurrentRowId();
	var fNum = data.getValue("fNum", id);
	var fPrice = data.getValue("fPrice", id);
	if (event.column == "fNum" || event.column == "fPrice") {
		var fAmount = parseFloat((fNum * fPrice).toFixed(2));
		data.setValue("fAmount", fAmount, id);
		sumAmount();
	}
}

function dRepairItemAfterDelete(event) {
	sumAmount();
}
function dFittingInfoAfterDelete(event) {
	sumAmount();
}
function sumAmount() {
	var data = justep.xbl('dRepairApply');
	var dFittingInfo = justep.xbl('dFittingInfo');
	var dRepairItem = justep.xbl('dRepairItem');
	var totleAmount = 0, sumRepairItem = 0, sumFittingInfo = 0;
	var lenFittingInfo = dFittingInfo.getCount();
	var lenRepairItem = dRepairItem.getCount();
	for (var i = 0; i < lenFittingInfo; i++) {
		var fittingInfoID = dFittingInfo.getRowId(i);
		if (typeof fittingInfoID == "undefined") {
			continue;
		}
		var fittingInfoAmount = dFittingInfo.getValue("fAmount", fittingInfoID);
		if (fittingInfoAmount > 0) {
			sumFittingInfo = parseFloat(sumFittingInfo - (-fittingInfoAmount))
					.toFixed(2);
		}
	}
	for (var i = 0; i < lenRepairItem; i++) {
		var repairItemID = dRepairItem.getRowId(i);
		if (typeof repairItemID == "undefined") {
			continue;
		}
		var repairItemAmount = dRepairItem.getValue("fAmount", repairItemID);
		if (repairItemAmount > 0) {
			sumRepairItem = parseFloat(sumRepairItem - (-repairItemAmount))
					.toFixed(2);
		}
	}
	totleAmount = parseFloat(sumRepairItem - (-sumFittingInfo)).toFixed(2);
	data.setValue("fRepairAmount", totleAmount);
}

function tabFlowChartxforms_select(event) {
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dRepairApply').getCurrentRowId();
	control.loadByData(process, bizData);
}