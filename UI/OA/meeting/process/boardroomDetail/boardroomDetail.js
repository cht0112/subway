var boardroomDetail = {};
acceptParentParamsFun = "acceptData";
var dlgOperator = "";

function acceptData(data) {
	var fID = data.boardroomID;
	var operator = data.operator;
	dlgOperator = data.operator;
	var dBoardroom = justep.xbl('dBoardroom');
	var sData1 = justep.Context.getProcessData1();
	if (operator == 'new') {
		dBoardroom.newData();
		dBoardroom
				.setValue("fCreatePsnID", justep.Context.getCurrentPersonID());
		dBoardroom.setValue("fCreatePsnName", justep.Context
				.getCurrentPersonName());
		dBoardroom.setValue("fCreateTime", justep.Date.toString(justep.System
				.datetime(), justep.Date.STANDART_FORMAT));
	} else {
		dBoardroom.filters.setFilter("boardroomFilter", "OA_MT_Boardroom ='"
				+ fID + "'");
		dBoardroom.refreshConfirm = false;
		dBoardroom.refreshData();
		// justep.xbl("BizFile").loadData();
	}
}

function dBoardroomValueChanged(event) {
	var data = justep.xbl('dBoardroom');
	if (event.column == "fDuptOgnID") {
		data.setValue("fDutyDeptID", "");
		data.setValue("fDutyDeptName", "");
	}
	if (event.column == "fDutyDeptID") {
		data.setValue("fDutyPsnID", "");
		data.setValue("fDutyPsnName", "");
	}
}

function treePsmSelectDropdown(event) {
	var data = justep.xbl("dBoardroom");
	var psmData = justep.xbl('dOrgPsm');
	var deptID = data.getValue("fDutyDeptID");
	psmData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/" + deptID
			+ ".%'");
	psmData.refreshData();
}

function triEnsureDOMActivate(event) {
	debugger;
	var data = justep.xbl("dBoardroom");
	if (dlgOperator != 'new') {
		var psnID = justep.Context.getCurrentPersonID();
		var psnName = justep.Context.getCurrentPersonName();
		var time = justep.Date.toString(justep.System.datetime(),
				justep.Date.STANDART_FORMAT);
		var id = data.getCurrentRowId();
		data.setRowData(id, [ psnID, psnName, time ], [ 'fUpdatePsnID',
				'fUpdatePsnName', 'fUpdateTime' ]);
	}
	data.saveData();
	var rowid = data.getRowId();
	windowEnsure(rowid);
}
function triRefreshDOMActivate(event) {
	windowRefresh();
}
function triCancelDOMActivate(event) {
	windowCancel();
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
boardroomDetail.treePsmSelectCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dBoardroom');
	data.setValue("fDutyPsnFID",sFID);
	data.setValue("fDutyPsnFName",sFName);
};
