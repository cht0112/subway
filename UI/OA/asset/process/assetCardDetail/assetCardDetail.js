var assetCardDetail = {};
var dlgOperator = "", checkID = "", cardID = "", assetInID = "";
var dAssetCardValueChanging = false;
function dAssetCardValueChanged(event) {
	if (!dAssetCardValueChanging) {
		dAssetCardValueChanging = true;
		try {
			var psnID = justep.Context.getCurrentPersonID();
			var psnName = justep.Context.getCurrentPersonName();
			var time = justep.Date.toString(justep.System.datetime(),
					justep.Date.STANDART_FORMAT);

			var data = justep.xbl("dAssetCard");
			if (event.column == "fOriginValue"
					|| event.column == "fAddDepreValue") {
				var fOriginValue = data.getValue("fOriginValue");
				var fAddDepreValue = data.getValue("fAddDepreValue");
				if (fOriginValue == fAddDepreValue) {
					data.setValue("fRemainValue", "0");
				} else {
					var fRemainValue = parseFloat((fOriginValue - fAddDepreValue)
							.toFixed(2));
					data.setValue("fRemainValue", fRemainValue);
				}
			}

			if (event.column == "fDutyDeptID") {
				var rowid = data.getCurrentRowId();
				data.setValue("fDutyPsnID", "", rowid);
				data.setValue("fDutyPsnName", "", rowid);
			}

			data.setValue("fUpdatePsnID", psnID);
			data.setValue("fUpdatePsnName", psnName);
			data.setValue("fUpdateTime", time);
		} finally {
			dAssetCardValueChanging = false;
		}
	}
}

// 人员下拉事件
function treeSltPsmDropdown(event) {
	var data = justep.xbl('dAssetCard');
	var dutyDeptID = data.getValue("fDutyDeptID");

	var personData = justep.xbl('dPsm');
	personData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/"
			+ dutyDeptID + ".%'");
	personData.refreshData();
}

function mdAssetCardxforms_model_construct_done(event) {
	var openPortalOperator = justep.Request.URLParams.openPortalOperator;
	var data = justep.xbl('dAssetCard');
	if (openPortalOperator == "new") {
		data.newData();
	} else if (openPortalOperator == "edit") {
		var id = justep.Request.URLParams.id;
		data.filters.setFilter("assetCardFilter", "OA_AS_Card='" + id + "'");
		data.refreshData();
	}
}

function grdSltKindCloseup(event) {
	var kindCode = event.grid.fields.fCode.getValue();
	var date =  justep.Date.toString(justep.System.datetime(),"YYYYMMDD");
	var code = appCommon.ToolUtils.createNextSeqString(date+'-' + kindCode
			+ '-', '000');
	justep.xbl('dAssetCard').setValue('fCode', code);
}

function dAssetCardSaveCommit(event) {
	var caller = null;
	var callerName = justep.Request.URLParams.callerName;
	if (callerName && (callerName != '')) {
		var frames = window.parent.frames;
		for (var i = 0; i < frames.length; i++) {
			if (frames[i].name == callerName) {
				caller = frames[i];
				break;
			}
		}
	}

	if (caller) {
		if (caller.dataChangeCallBackFun) {
			var data = justep.xbl('dAssetCard');
			var id = data.getCurrentRowId();
			caller.dataChangeCallBackFun(id);
		}
	}
}
// 验收记录
function trgCheckDOMActivate(event) {
	checkID = justep.xbl('dAssetCard').getValue("fCheckID");
	dlgOperator = "view";
	if (checkID == '') {
		var assetCardID = justep.xbl('dAssetCard').getValue("fCode");
		alert("资产：" + assetCardID + "没有验收信息！");
	} else {
		var wDlgCheck = justep.xbl("wDlgCheck");
		wDlgCheck.initEveryTimes = true;
		wDlgCheck.open();
	}
}

function wDlgCheckSend(event) {
	var params = {
		"operator" : dlgOperator,
		"assetInID" : checkID
	};
	return params;
}

// 使用记录
function trgUseRecordDOMActivate(event) {
	cardID = justep.xbl('dAssetCard').getCurrentRowId();
	dlgOperator = "view";
	var wDlgUseRecord = justep.xbl("wDlgUseRecord");
	wDlgUseRecord.initEveryTimes = true;
	wDlgUseRecord.open();
}

function wDlgUseRecordSend(event) {
	var params = {
		"operator" : dlgOperator,
		"cardID" : cardID
	};
	return params;
}

// 维修记录
function trgRepairDOMActivate(event) {
	cardID = justep.xbl('dAssetCard').getCurrentRowId();
	dlgOperator = "view";
	var wDlgRepair = justep.xbl("wDlgRepair");
	wDlgRepair.initEveryTimes = true;
	wDlgRepair.open();
}

function wDlgRepairSend(event) {
	var params = {
		"operator" : dlgOperator,
		"cardID" : cardID
	};
	return params;
}

// 清查记录
function trgInventoryDOMActivate(event) {
	cardID = justep.xbl('dAssetCard').getCurrentRowId();
	dlgOperator = "view";
	var wDlgInventory = justep.xbl("wDlgInventory");
	wDlgInventory.initEveryTimes = true;
	wDlgInventory.open();
}
function wDlgInventorySend(event) {
	var params = {
		"operator" : dlgOperator,
		"cardID" : cardID
	};
	return params;
}

// 入库信息
function trgAssetInRecordDOMActivate(event) {
	assetInID = justep.xbl('dAssetCard').getValue("fAssetInID");
	dlgOperator = "view";
	if (assetInID == '') {
		var assetCardID = justep.xbl('dAssetCard').getValue("fCode");
		alert("资产：" + assetCardID + "没有入库信息！");
	} else {
		var wDlgAssetInRecord = justep.xbl("wDlgAssetInRecord");
		wDlgAssetInRecord.initEveryTimes = true;
		wDlgAssetInRecord.open();
	}
}

function wDlgAssetInRecordSend(event) {
	var params = {
		"operator" : dlgOperator,
		"assetInID" : assetInID
	};
	return params;
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
assetCardDetail.treeSltPsmCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dAssetCard');
	data.setValue("fDutyPsnFID",sFID);
	data.setValue("fDutyPsnFName",sFName);
};
