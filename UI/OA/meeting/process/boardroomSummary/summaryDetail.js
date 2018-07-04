var summaryDetail = {};
acceptParentParamsFun = "acceptData";
var dlgOperator = "";
function trgSelectPsnDOMActivate(event) {
	var dlgConvention = justep.xbl("wDlgConventioneer");
	if (dlgConvention) {
		dlgConvention.initEveryTime = true;
		dlgConvention.open();
	}
}

function dSummaryValueChanged(event) {
	if (event.column == "fUseDeptID") {
		var data = justep.xbl('dSummary');
		data.setValue("fUsePsnID", "");
		data.setValue("fUsePsnName", "");
	}
}

function treePsmSelectDropdown(event) {
	var data = justep.xbl('dSummary');
	var psmData = justep.xbl('dPsm');
	var deptID = data.getValue("fUseDeptID");
	psmData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/" + deptID
			+ ".%'");
	psmData.refreshData();

}

function trgSelectCompereDOMActivate(event) {
	var dlgComp = justep.xbl("wDlgCompere");
	if (dlgComp) {
		dlgComp.initEveryTime = true;
		dlgComp.open();
	}
}
function wDlgConventioneerReceive(evt) {
	var sNames = "";
	var sPersonIDs = "";
	var plannames = evt.data.getSimpleStore();
	for ( var i = 0; i < plannames.getRowsNum(); i++) {
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		if (sPersonIDs.indexOf(sPersonId + ",") != -1)
			continue;
		sNames += sName + ",";
		sPersonIDs += sPersonId + ",";
	}
	if (sNames != "") {
		sNames = sNames.substring(0, sNames.length - 1);
	}
	justep.xbl("dSummary").setValue("fMeetPsns", sNames);
	justep.xbl("dSummary").setValue("fMeetPsnNum", plannames.getRowsNum());
}
function wDlgConventioneerSend(event) {
	return {
		getSimpleStore : function() {
			var store = new SimpleStore("spcdata", "sName");
			return store;
		},
		getShowAlias : function() {
			return null;
		},
		selectKind : 'psm',
		viewKind : 'ogn,dpt,pos'
	};
	/*
	 * var data = new SimpleStore('mySimpleStoreas', 'sName,sPersonID'); var
	 * para = new justep.CommonChoosePara('sName,sPersonID', data);
	 * data.loadData(null); return para;
	 */
}
function wDlgCompereReceive(evt) {
	var plannames = evt.data.getSimpleStore();
	/*
	 * var sPersonId = plannames.getValueByName('sPersonID'); var sName =
	 * plannames.getValueByName('sName');
	 * justep.xbl("dSummary").setValue("fCompereID",sPersonId);
	 * justep.xbl("dSummary").setValue("fCompere",sName);
	 */
	for ( var i = 0; i < plannames.getRowsNum(); i++) {
		var rowID = plannames.getRowId(i);
		var sPersonId = plannames.getValueByName('sPersonID', i);
		var sName = plannames.getValueByName('sName', i);
		justep.xbl("dSummary").setValue("fCompereID", sPersonId);
		justep.xbl("dSummary").setValue("fCompere", sName);
	}
}
function wDlgCompereSend(event) {
	return {
		getSimpleStore : function() {
			var store = new SimpleStore("spcdata", "sName");
			return store;
		},
		getShowAlias : function() {
			return null;
		},
		selectKind : 'psm',
		viewKind : 'ogn,dpt,pos'
	};
}
function trgViewDOMActivate(event) {
	var arangeID = justep.xbl("dSummary").getValue("fArrangeID");
	if (arangeID == "" || arangeID == null || arangeID == undefined) {
		alert("没有选择会议安排!");
		return false;
	}
	var dlgArrange = justep.xbl("wDlgArrangeInfo");
	if (dlgArrange) {
		dlgArrange.initEveryTime = true;
		dlgArrange.open();
	}
}
function trgSelectDOMActivate(event) {
	var dlgSelectArrange = justep.xbl("wDlgSelectArrange");
	if (dlgSelectArrange) {
		dlgSelectArrange.initEveryTime = true;
		dlgSelectArrange.open();
	}
}

function mdMainxforms_model_construct_done(params) {
}
function acceptData(params) {
	var fID = params.summaryID;
	dlgOperator = params.dlgOperator;
	var data = justep.xbl("dSummary");
	if (fID == "" || fID == undefined) {
		dlgOperator = "new";
		data.newData();
		data.setValue("fCreatePsnID", justep.Context.getCurrentPersonID());
		data.setValue("fCreatePsnName", justep.Context.getCurrentPersonName());
		data.setValue("fCreateTime", justep.Date.toString(justep.System
				.datetime(), justep.Date.STANDART_FORMAT));

	} else {
		data.filters.setFilter("mainFilter", "OA_MT_Summary='" + fID + "'");
		data.refreshData();
		justep.xbl("attContent").loadData();
	}
}

function selectBoardroomCloseup(event) {

}
function trgRefreshDOMActivate(event) {
	windowRefresh();
}
function trgEnsureDOMActivate(event) {
	var data = justep.xbl("dSummary");
	data.saveData();
	var rowid = data.getCurrentRowId();
	windowEnsure(rowid);
}
function trgCancelDOMActivate(event) {
	windowCancel();
}
function wDlgSelectArrangeReceive(obj) {
	var selectedArrange = obj.data;
	var dSummary = justep.xbl("dSummary");
	if (selectedArrange != null && selectedArrange != undefined) {
		var fID = selectedArrange.getValue("rowid");
		var fMeetName = selectedArrange.getValue("fMeetName");
		var fBeginTime = selectedArrange.getValue("fBeginTime");
		var fEndTime = selectedArrange.getValue("fEndTime");
		var fBoardroomID = selectedArrange.getValue("fBoardroomID");
		var fBoardroom = selectedArrange.getValue("fBoardroom");
		var fMeetPsns = selectedArrange.getValue("fMeetPsns");
		var fUseOgnID = selectedArrange.getValue("fUseOgnId");
		var fUseOgnName = selectedArrange.getValue("fUseOrgName");
		var fUseDeptID = selectedArrange.getValue("fUseDeptID");
		var fUseDeptName = selectedArrange.getValue("fUseDeptName");
		var fUsePsnID = selectedArrange.getValue("fUsePsnID");
		var fUsePsnName = selectedArrange.getValue("fUsePsnName");
		var fUsePsnFID = selectedArrange.getValue("fUsePsnFID");
		var fUsePsnFName = selectedArrange.getValue("fUsePsnFName");

		dSummary.setValue("fArrangeID", fID);
		dSummary.setValue("fMeetName", fMeetName);
		dSummary.setValue("fBeginTime", fBeginTime);
		dSummary.setValue("fEndTime", fEndTime);
		dSummary.setValue("fBoardroomID", fBoardroomID);
		dSummary.setValue("fBoardroom", fBoardroom);
		dSummary.setValue("fMeetPsns", fMeetPsns);
		dSummary.setValue("fUseOgnId", fUseOgnID);
		dSummary.setValue("fUseOrgName", fUseOgnName);
		dSummary.setValue("fUseDeptID", fUseDeptID);
		dSummary.setValue("fUseDeptName", fUseDeptName);
		dSummary.setValue("fUsePsnID", fUsePsnID);
		dSummary.setValue("fUsePsnName", fUsePsnName);
		dSummary.setValue("fUsePsnFID", fUsePsnFID);
		dSummary.setValue("fUsePsnFName", fUsePsnFName);
	}
}
function wDlgSelectArrangeSend(event) {
	var fArrangeID = justep.xbl("dSummary").getValue("fArrangeId");
	return {
		"fID" : fArrangeID
	};
}
function wDlgArrangeInfoSend(event) {
	var params = {
		"operator" : "view",
		"arrangeID" : justep.xbl("dSummary").getValue("fArrangeID")
	};
	return params;
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
summaryDetail.treePsmSelectCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dSummary');
	data.setValue("fUsePsnFID",sFID);
	data.setValue("fUsePsnFName",sFName);
};
