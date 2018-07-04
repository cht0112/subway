var startActivity = {};
function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dUseApply');
	var sData1 = justep.Context.getProcessData1();
	if (sData1 == null || sData1 == undefined) {
		data.newData();
	} else {
		data.filters
				.setFilter("flowFilter", "OA_AS_UseApplyM='" + sData1 + "'");
		data.refreshData();
	}
}
var dUseApplyValueChanging = false;
function dUseApplyValueChanged(event) {
	if (!dUseApplyValueChanging) {
		dUseApplyValueChanging = true;
		try {
			var psnID = justep.Context.getCurrentPersonID();
			var psnName = justep.Context.getCurrentPersonName();
			var time = justep.Date.toString(justep.System.datetime(),
					justep.Date.STANDART_FORMAT);
			var data = justep.xbl("dUseApply");

			if (event.column == "fApplyDeptID") {
				var rowid = data.getCurrentRowId();
				data.setValue("fApplyPsnID", "", rowid);
				data.setValue("fApplyPsnName", "", rowid);
			}

			data.setValue("fUpdatePsnID", psnID);
			data.setValue("fUpdatePsnName", psnName);
			data.setValue("fUpdateTime", time);
		} finally {
			dUseApplyValueChanging = false;
		}
	}
}

// 人员下拉事件
function treeSltPsmDropdown(event) {
	var data = justep.xbl('dUseApply');
	var applyDeptID = data.getValue("fApplyDeptID");

	var personData = justep.xbl('dPsm');
	personData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/"
			+ applyDeptID + ".%'");
	personData.refreshData();
}

function tabFlowChartxforms_select(event) {
	var control = justep.xbl("processChart");
	var process = justep.Context.getCurrentProcess();
	var bizData = justep.xbl('dUseApply').getCurrentRowId();
	control.loadByData(process, bizData);
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
startActivity.treeSltPsmCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dUseApply');
	data.setValue("fApplyPsnFID",sFID);
	data.setValue("fApplyPsnFName",sFName);
};
