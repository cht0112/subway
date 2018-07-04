var assetInDetail = {};
function mdMainxforms_model_construct_done(event) {
	var openPortalOperator = justep.Request.URLParams.openPortalOperator;
	var data = justep.xbl('dAssetInM');
	if (openPortalOperator == "new") {
		data.newData();
	} else if (openPortalOperator == "edit") {
		var id = justep.Request.URLParams.id;
		data.filters.setFilter("assetInFilter", "OA_AS_InM='" + id + "'");
		data.refreshData();
	}
}
var assetInIDs = "";
var assetInCheckInfo = "";

function grdAssetInD_fBuyApplyNORender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openBuyApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function openBuyApplyDetail(fID) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var data = justep.xbl('dAssetInD');
	var buyId = data.getValue("fBuyApplyID", fID);
	var operator = "view";
	var url = "/OA/asset/process/assetBuyApplyDetail/assetBuyApplyDetail.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&operator="
			+ operator
			+ "&id=" + buyId;
	justep.Portal.openWindow("固定资产采购详细", url);
}

function grdAssetInD_fCheckNORender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openCheckInfo('" + event.rowId + "')\">"
			+ event.value + "</a>";
	return html;
}

function openCheckInfo(fID) {
	var data = justep.xbl('dAssetInD');
	var checkId = data.getValue("fCheckID", fID);
	assetInCheckInfo = checkId;
	var assetInDlg = justep.xbl("dlgInCheckInfo");
	assetInDlg.initEveryTimes = true;
	assetInDlg.open();
}

function dAssetInMSaveCommit(event) {
	 callBackFun();
}

function callBackFun() {
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
			var data = justep.xbl('dAssetInM');
			var id = data.getCurrentRowId();
			caller.dataChangeCallBackFun(id);
		}
	}
}

function dlgAssetInCheckSend(event) {
	var params = {
		"assetInID" : assetInCheckInfo
	};
	return params;
}

function assetDelete() {
	var data = justep.xbl('dAssetInD');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的资产信息！");
	} else {
		for (var i = 0; i < length; i++) {
			if (data.getValue("fIsIn", infoIDs[i]) == '0')
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
			totleAmount();
		} else {
			alert("所选资产已入库,不可删除！");
		}
	}
}

function assetIn() {
	var dMain = justep.xbl('dAssetInM');
	var data = justep.xbl('dAssetInD');
	if (dMain.isChanged()) {
		dMain.saveData();
	} else if (data.isChanged()) {
		data.saveData();
	}
	var infoIDs = data.getStore().getCheckedRowIds();
	var inIDs = "",fKindCode="";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要入库的资产信息！");
	} else {
		for (var i = 0; i < length; i++) {
			var isIn = data.getValue("fIsIn", infoIDs[i]);
			if ((isIn == '0')) {
				if (inIDs == "") {
					inIDs = "'" + infoIDs[i] + "'";
				} else {
					inIDs += ",'" + infoIDs[i] + "'";
				}
			}
		}
		if (inIDs != "") {
			assetInIDs = inIDs;
			var assetInDlg = justep.xbl("dlgInDate");
			assetInDlg.initEveryTimes = true;
			assetInDlg.open();
		} else {
			alert("所选资产已入库！");
		}
	}
}

function dlgInDateReceive(obj) {
	var param = new justep.Request.ActionParam();
	param.setString("assetInDate", obj.data);
	param.setString("assetInIDs", assetInIDs);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity, "assetIn", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "资产入库失败!"));
	} else {
		justep.xbl('dAssetInD').refreshData();
		var data = justep.xbl('dAssetInM');
		var id = data.getCurrentRowId();
		data.filters.setFilter("assetInMFilter", "OA_AS_InM='" + id + "'");
		data.refreshData();
		if (data.getValue("fState") == '1') {
			callBackFun();
		}
		alert(justep.Request.transform(justep.Request.getData(r.responseXML)));
		
	}
}

function assetInCheck(event) {
	var data = justep.xbl('dAssetInD');
	var infoIDs = data.getStore().getCheckedRowIds();
	var checkIDs = "", isInIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要验收的资产信息！");
	} else {
		var assetInDlg = justep.xbl("dlgInCheck");
		assetInDlg.initEveryTimes = true;
		assetInDlg.open();

	}
}

function dlgInCheckReceive(obj) {
	var dMain = justep.xbl('dAssetInM');
	var data = justep.xbl('dAssetInD');
	if (dMain.isChanged()) {
		dMain.saveData();
	} else if (data.isChanged()) {
		data.saveData();
	}
	var infoIDs = data.getStore().getCheckedRowIds();
	var length = infoIDs.length;
	var infos = obj.data.split(",");
	for (var i = 0; i < length; i++) {
		var isIn = data.getValue("fIsIn", infoIDs[i]);
		var isCheck = data.getValue("fIsCheck", infoIDs[i]);
		if ((isCheck == '0' && isIn == '0')) {
			data.setValue("fIsCheck", "1", infoIDs[i]);
			data.setValue("fIsCheckName", "已验收", infoIDs[i]);
			data.setValue("fCheckID", infos[0], infoIDs[i]);
			data.setValue("fCheckNO", infos[1], infoIDs[i]);
		}
	}
	if (data.isChanged()) {
		data.saveData();
	}
}

var dAssetInValueChanging = false;
function dAssetInValueChanged(event) {
	if (!dAssetInValueChanging) {
		dAssetInValueChanging = true;
		try {
			var psnID = justep.Context.getCurrentPersonID();
			var psnName = justep.Context.getCurrentPersonName();
			var time = justep.Date.toString(justep.System.datetime(),
					justep.Date.STANDART_FORMAT);
			var data = justep.xbl("dAssetInM");

			if (event.column == "fDutyDeptID") {
				var rowid = data.getCurrentRowId();
				data.setValue("fDutyPsnID", "", rowid);
				data.setValue("fDutyPsnName", "", rowid);
			}

			data.setValue("fUpdatePsnID", psnID);
			data.setValue("fUpdatePsnName", psnName);
			data.setValue("fUpdateTime", time);
		} finally {
			dAssetInValueChanging = false;
		}
	}
}

// 人员下拉事件
function treeSltPsmDropdown(event) {
	var data = justep.xbl('dAssetInM');
	var dutyDeptID = data.getValue("fDutyDeptID");

	var personData = justep.xbl('dPsm');
	personData.filters.setFilter("psmFilter", "SA_OPOrg.sFID like '%/"
			+ dutyDeptID + ".%'");
	personData.refreshData();
}
function dBuyApplyDValueChanged(event) {
	if (event.column == "fAmount") {
		totleAmount();
	}
}

function totleAmount() {
	var dAssetInM = justep.xbl('dAssetInM');
	var dAssetInD = justep.xbl('dAssetInD');
	var totle = 0;
	var length = dAssetInD.getCount();
	for (var i = 0; i < length; i++) {
		var mID = dAssetInD.getRowId(i);
		if (typeof mID == "undefined") {
			continue;
		}
		var fAmount = dAssetInD.getValue("fAmount", mID);
		totle = parseFloat(totle - (-fAmount)).toFixed(2);
	}
	dAssetInM.setValue("fAmount", totle, dAssetInM.getCurrentRowId());
}

function trgInsertBtnDOMActivate(event) {
	var baseInfoDlg = justep.xbl("dlgBuyApply");
	baseInfoDlg.initEveryTimes = true;
	baseInfoDlg.open();
}

function dlgBuyApplyReceive(evt) {
	var doc = evt.data.getSimpleStore();
	var data = justep.xbl('dAssetInD');
	var len = doc.rowsBuffer.length;
	var fIningNum;
	if (len > 0) {
		for (var i = 0; i < len; i++) {
			fIningNum = doc.getValueByName("fBuyNum", i)
					- doc.getValueByName("fInNum", i);
			for (var j = 0; j < fIningNum; j++) {
				data.newData();
				var date =  justep.Date.toString(justep.System.datetime(),"YYYYMMDD");
				/**data.setValue('fCode', "临时："+appCommon.ToolUtils.createNextSeqString(
						'00'+'-'  + doc.getValueByName("fKindCode", i) + '-',
						'000'));//资产编码**/
						
				data.setValue('fCode',doc.getValueByName("fKindCode", i));//资产编码
						
						
				data.setValue('fName', doc.getValueByName("fName", i));//名称
				data.setValue('fSpecType', doc.getValueByName("fSpecType", i));//规格型号
				data.setValue('fKindID', doc.getValueByName("fKindID", i));
				//data.setValue('fKindCode', doc.getValueByName("fKindCode", i));
				data.setValue('fKind', doc.getValueByName("fKind", i));//资产类别名称
				data.setValue('fUnitID', doc.getValueByName("fUnitID", i));//单位
				data.setValue('fUnit', doc.getValueByName("fUnit", i));
				data.setValue('fAmount', doc.getValueByName("fPrice", i));//金额
				data.setValue('fBuyDetailID', doc.getRowId(i));//采购明细ID
				data.setValue('fBuyApplyID', doc.getValueByName(//采购单ID
								"fMasterID", i));
				data.setValue('fBuyApplyNO', doc.getValueByName("fNO", i));//采购单号
			}
		}
		totleAmount();
	}
}

function gsAssetKindCloseup(event) {
	var kindCode = event.grid.fields.fCode.getValue();
	var date =  justep.Date.toString(justep.System.datetime(),"YYYYMMDD");
	/**var code = appCommon.ToolUtils.createNextSeqString('00'+'-'  + kindCode
			+ '-', '000');
	justep.xbl('dAssetInD').setValue('fCode', "临时："+code); **/
	
	var code = kindCode;
	justep.xbl('dAssetInD').setValue('fCode', code);
}

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
assetInDetail.treeSltPsmCloseup = function(event){
	var sFID = event.grid.fields.sFID.getValue();
	var sFName = event.grid.fields.sFName.getValue();
	var data = justep.xbl('dAssetInM');
	data.setValue("fDutyPsnFID",sFID);
	data.setValue("fDutyPsnFName",sFName);
};
