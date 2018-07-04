acceptParentParamsFun = "acceptData";
var apv_folderID = "";
var apv_isNeedApprove = "";
var apv_isInheritApprove = "";

function acceptData(data) {
	apv_folderID = data.folderID;
	apv_isNeedApprove = data.isNeedApprove;
	apv_isInheritApprove = data.isInheritApprove;

	if (apv_isNeedApprove == '1') {
		setCheckboxChecked('approveChb');
	}
	if (apv_isInheritApprove == '1') {
		setCheckboxChecked('inheritChb');
		setCheckboxDisabled('approveChb');
	}
}

function sendData() {
	var isNeedApprove = '0';
	var isInherit = '0';
	var isOverride = '0';

	if (approveChb.checked) {
		isNeedApprove = '1';
	}
	if (inheritChb.checked) {
		isInherit = '1';
	}
	if (overrideChb.checked) {
		isOverride = '1';
	}

	return {
		"isNeedApprove" : isNeedApprove,
		"isInherit" : isInherit,
		"isOverride" : isOverride
	};
}

// 响应 继承父栏目设置 单击事件
function inheritChbOnClick() {
	var checked = document.getElementById('inheritChb').checked;
	if (checked) {
		try {
			var result = getParentFolderApproveSetFun(apv_folderID);
			var arrRst = result.split(" ");
			var pID = arrRst[0];
			var pNeedApprove = arrRst[1];
			if (pID == "public" || pID == "private" || pID == "map") { /* 是根节点 */
				setCheckboxDisabled('inheritChb');
				setCheckboxUnchecked('inheritChb');
			} else {
				setCheckboxDisabled('approveChb');
				if (pNeedApprove == '1') {
					setCheckboxChecked('approveChb');
				} else {
					setCheckboxUnchecked('approveChb');
				}
			}
		} catch (e) {
			alert(e.message);
			setCheckboxUnchecked('inheritChb');
		}
	} else {
		setCheckboxAble('approveChb');
	}
}

/*
 * 获取父栏目审批设置 返回数据格式："栏目fid 栏目是否需要审批 "
 */
function getParentFolderApproveSetFun(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"getParentFolderApproveSetAction", param);

	if (!justep.Request.isBizSuccess(r)) {
		throw new Error("继承父栏目审批设置出错!");
	}
	return justep.Request.transform(justep.Request.getData(r.responseXML));
}

function onEnsureFun() {
	windowEnsure(sendData());
}

function onCancelFun() {
	windowCancel();
}
