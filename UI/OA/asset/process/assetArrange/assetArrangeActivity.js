var assetArrangeActivity = {};
function grdAssetArrange_fCodeRender(event) {
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openAssetCardDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
}

function openAssetCardDetail(id) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var url = "/OA/asset/process/assetCardDetailView/assetCardDetailView.w?process="
			+ process + "&activity=" + activity + "&id=" + id;
	justep.Portal.openWindow("资产卡片详细", url);
}

function wDlgArrangeReceive(obj) {
	var deptID = obj.data.deptID;
	var deptName = obj.data.deptName;
	var psnID = obj.data.psnID;
	var psnName = obj.data.psnName;
	var arrangeDate = obj.data.arrangeDate;
	var data = justep.xbl('dAssetArrange');
	var assetID = data.getCurrentRowId();
	var code = data.getValue("fCode", assetID);
	data.setRowData(assetID,[deptID,deptName,psnID,psnName,arrangeDate,remark,'1',"占用"],
			["fDutyDeptID","fDutyDeptName","fDutyPsnID","fDutyPsnName","fArrangeDate","fRemark","fStatus","fStatusName"]);
	data.saveData();
	data.refreshData();
	var result = assetArrangeRecord(assetID, arrangeDate);
	if (result == true) {
		alert("资产：" + code + "安排成功！");
	}
}

function assetArrangeRecord(assetID, arrangeDate) {
	var param = new justep.Request.ActionParam();
	param.setString("assetID", assetID);
	param.setString("arrangeDate", arrangeDate);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity,
			"assetArrangeRecordAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "生成资产安排记录失败!"));
	}
	return true;
}

function trgArrangeDOMActivate(event) {
	justep.xbl("wDlgSelectPsn").open();
}

function mdMainxforms_model_construct_done(event) {
	var data = justep.xbl('dAssetArrange');
	data.refreshData();
	setComponentsStatus();
}

/**
	name:windowDialog#onSend
	@event {"source":组件的js对象,"data":数据}
description: <b>[回调型事件]</b> 向对话框传递数据，该事件函数的返回值将传递给对话框
*/
assetArrangeActivity.wDlgSelectPsnSend = function(event){
	var data = {
		"rootFilter" : "",
		"fixedFilter" : "",
		"manageTypeCodes" : "",
		"displayableOrgKinds" : "ogn,dpt,pos,psm",
		"selectableOrgKinds" : "psm",
		"onlyMainPsm" : true
	};
	return data;
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
assetArrangeActivity.wDlgSelectPsnReceive = function(event){
	var rowID = event.data.getValueByName("rowid").split("@")[0];
	var name = event.data.getValueByName("sName");
	var FID = event.data.getValueByName("sFID");
	var FName = event.data.getValueByName("sFName");
	var t = decodeURL(FID, '', FName);
	var deptID = t["fDptID"];
	var deptName = t["fDptName"];
	var ognID = t["fOgnID"];
	var ognName = t["fOgnName"];
	if(deptID==""){
		var deptID = ognID;
		var deptName = ognName;
	}
	var arrangeDate = justep.Date.toString(justep.System.datetime(),"YYYY-MM-DD");
	var data = justep.xbl('dAssetArrange');
	var assetID = data.getCurrentRowId();
	var code = data.getValue("fCode", assetID);
	data.setRowData(assetID,[deptID,deptName,rowID,name,arrangeDate,'1',"占用"],
			["fDutyDeptID","fDutyDeptName","fDutyPsnID","fDutyPsnName","fArrangeDate","fStatus","fStatusName"]);
	data.saveData();
	var result = assetArrangeRecord(assetID, arrangeDate);
	if (result == true) {
		alert("资产：" + code + "安排成功！");
	}
	data.refreshData();
};
function decodeURL(idURL, codeURL, nameURL, strict) {
			var $Suffix_Organ$ = ".ogn";
			var $Suffix_Dept$ = ".dpt";
			var $Suffix_Position$ = ".pos";
			var $Suffix_Employee$ = ".psm";

			var reArray = new Array();

			var sIDArray = idURL.split("/");
			var sCodeArray = codeURL.split("/");
			var sNameArray = nameURL.split("/");
			var idxOrgan = -1, idxDept = -1, idxPosition = -1, idxEmployee = -1;

			if (strict == true || strict == 'true') {
				if ((sCodeArray.length != sIDArray.length)
						|| (sNameArray.length != sIDArray.length)
						|| sIDArray[0].length <= 0) {
					alert("URL匹配错误!");
					return;
				}
			}

			for (var i = sIDArray.length - 1; i >= 0; i--) {
				if (sIDArray[i].indexOf($Suffix_Employee$) > -1) {
					if (idxEmployee == -1) {
						idxEmployee = i;
					}
					continue;
				} else if (sIDArray[i].indexOf($Suffix_Position$) > -1) {
					if (idxPosition == -1) {
						idxPosition = i;
					}
					continue;
				} else if (sIDArray[i].indexOf($Suffix_Dept$) > -1) {
					if (idxDept == -1) {
						idxDept = i;
					}
					continue;
				} else if (sIDArray[i].indexOf($Suffix_Organ$) > -1) {
					if (idxOrgan == -1) {
						idxOrgan = i;
					}
					break;
				}
			}

			reArray["fOgnID"] = (idxOrgan > -1
					? sIDArray[idxOrgan].split(".")[0]
					: "");
			reArray["fDptID"] = (idxDept > -1
					? sIDArray[idxDept].split(".")[0]
					: "");
			reArray["fPosID"] = (idxPosition > -1 ? sIDArray[idxPosition]
					.split(".")[0] : "");
			reArray["fPsmID"] = (idxEmployee > -1 ? sIDArray[idxEmployee]
					.split(".")[0].split("@")[0] : "");

			reArray["fOgnCode"] = (idxOrgan > -1 ? sCodeArray[idxOrgan] : "");
			reArray["fDptCode"] = (idxDept > -1 ? sCodeArray[idxDept] : "");
			reArray["fPosCode"] = (idxPosition > -1
					? sCodeArray[idxPosition]
					: "");
			reArray["fPsmCode"] = (idxEmployee > -1
					? sCodeArray[idxEmployee]
					: "");

			reArray["fOgnName"] = (idxOrgan > -1 ? sNameArray[idxOrgan] : "");
			reArray["fDptName"] = (idxDept > -1 ? sNameArray[idxDept] : "");
			reArray["fPosName"] = (idxPosition > -1
					? sNameArray[idxPosition]
					: "");
			reArray["fPsmName"] = (idxEmployee > -1
					? sNameArray[idxEmployee]
					: "");

			return reArray;
		}

function setComponentsStatus() {
	var data = justep.xbl("dAssetArrange");
	var count = data.getCount();
	if(count==0){
		justep.xbl("trgArrange").setDisabled(true);
	}else{
		justep.xbl("trgArrange").setDisabled(false);
	}
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
assetArrangeActivity.dAssetArrangeAfterRefresh = function(event){
	setComponentsStatus();
};

