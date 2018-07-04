var docPermission = {};

docPermission.docDefineDataRefreshCreateParam = function(event) {
	if (docPermission.isRefreshClick) {
		docPermission.isRefreshClick = false;
		event.param.setString("linkProcess", linkActivity);
		event.param.setString("linkActivity", linkActivity);
		return;
	}
	var treeData = justep.xbl("docDefineData");
	var rowId = treeData.defTreeOption.loadTreeParent;
	if (treeData.getStore()._isVirtualRoot(rowId)) {
		event.param.setString("linkProcess", linkActivity);
		event.param.setString("linkActivity", linkActivity);
		return;
	}
	if (rowId) {
		var linkProcess = treeData.getValue("sProcess", rowId);
		var linkActivity = treeData.getValue("sActivity", rowId);
		event.param.setString("linkProcess", treeData.getValue("sProcess",
				rowId));
		if ($.trim(linkActivity) == "") {
			event.param.deleteParam("linkActivity");
		} else {
			event.param.setString("linkActivity", linkActivity);
		}
	}
};

docPermission.gridAfterIndexChanged = function(event) {
	var buttonState = justep.xbl("buttonState");
	var treeData = justep.xbl("docDefineData");
	var rowId = treeData.getCurrentRowId();
	var linkProcess = treeData.getValue("sProcess", rowId);
	var linkActivity = treeData.getValue("sActivity", rowId);
	if ($.trim(linkActivity) != "") {
		buttonState.setValue("newdef", "false", "buttonStateRow");
		buttonState.setValue("deldef", "true", "buttonStateRow");
		buttonState.setValue("keyList", "true", "buttonStateRow");
		buttonState.setValue("deleteAty", "true", "buttonStateRow");
		buttonState.setValue("setAty", "true", "buttonStateRow");
		return;
	}
	if ($.trim(linkProcess) == "") {
		buttonState.setValue("newdef", "true", "buttonStateRow");
		buttonState.setValue("deldef", "false", "buttonStateRow");
		buttonState.setValue("keyList", "false", "buttonStateRow");
		buttonState.setValue("deleteAty", "false", "buttonStateRow");
		buttonState.setValue("setAty", "false", "buttonStateRow");
		return;
	}
	buttonState.setValue("newdef", "true", "buttonStateRow");
	buttonState.setValue("deldef", "true", "buttonStateRow");
	buttonState.setValue("keyList", "true", "buttonStateRow");
	buttonState.setValue("deleteAty", "true", "buttonStateRow");
	buttonState.setValue("setAty", "true", "buttonStateRow");
};

docPermission.newLinkClick = function(event) {
	var treeData = justep.xbl("docDefineData");
	var rowId = treeData.getCurrentRowId();
	var linkProcess = treeData.getValue("sProcess", rowId);
	justep.xbl("wdSelectFunTree").open();
	return;

};

docPermission.keybtnClick = function(event) {
	var treeData = justep.xbl("docDefineData");
	var rowId = treeData.getCurrentRowId();
	var linkProcess = treeData.getValue("sProcess", rowId);
	var linkActivity = treeData.getValue("sActivity", rowId);

	if (!this.keyDialog) {
		this.keyDialog = new justep.WindowDialog("keyDialog",
				"/SA/doc/docPermission/docKeyList.w", "key列表", true, true, 650,
				600, 0, 0, true);
		this.keyDialog.attachEvent("onSend", function(event) {
			return this.data;
		}, this.keyDialog);
	}
	this.keyDialog.data = {
		linkProcess : linkProcess,
		linkActivity : linkActivity
	};
	this.keyDialog.dialog.status = "maximize";
	this.keyDialog.open();

};

docPermission.docDefineDataAfterDelete = function(event) {
	justep.xbl("docDefineData").saveData();
};

docPermission.trigger3Click = function(event) {
	var treeData = justep.xbl("docDefineData");
	var rowId = treeData.getCurrentRowId();
	var linkProcess = treeData.getValue("sProcess", rowId);
	var linkActivity = treeData.getValue("sActivity", rowId);
	if (!this.settingDialog) {
		this.settingDialog = new justep.WindowDialog("settingDialog",
				"/SA/doc/docPermission/docSetting.w", "关联设置", true, true, 595,
				420, 0, 0, true);
		this.settingDialog.attachEvent("onSend", function(event) {
			return this.data;
		}, this.settingDialog);
	}
	this.settingDialog.data = {
		linkProcess : linkProcess,
		linkActivity : linkActivity,
		settingOpt : "activityAdd"
	};
	this.settingDialog.dialog.status = "maximize";
	this.settingDialog.open();
};
docPermission.trigger4Click = function(event) {
	if (!confirm('确定删除吗?')) {
		return;
	}
	this.saveXml = justep.XML.fromString("<defineRoot/>");
	var df = justep.xbl("docDefineData");
	var linkProcess = df.getValue("sProcess");
	var linkActivity = df.getValue("sActivity");
	var sendParam = new justep.Request.ActionParam();
	sendParam.setString('linkProcess', linkProcess);
	sendParam.setString('linkActivity', linkActivity);
	sendParam.setXml('settingDoc', new justep.Request.XMLParam(this.saveXml));
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var response = justep.Request.sendBizRequest(process, activity,
			"delDefineItemsAction", sendParam, null, null, true);
	if (!justep.Request.isBizSuccess(response)) {
		throw new Error("操作失败！");
	}
};

docPermission.selectProcedure = function(event) {
	justep.xbl("wdSelectFunTree").open();
};

docPermission.addFromRoot = function(resArr, df) {
	var currId = df.getCurrentRowId();
	var sameLink=new Array();
	for ( var i = 0; i < resArr.length; i++) {
		var it = resArr[i];
		var linkProcess = it.process;
		var linkActivity = it.activity ? it.activity : "";
		var linkName = it.activityFName;
		var temp =df.locate([ linkProcess, linkActivity ],[ 'sProcess', 'sActivity' ], true);
		if (temp.length > 0) {
			sameLink.push(linkName+"的process("+linkProcess+"),activity("+linkActivity+")和"+df.getValue('sDisplayName',temp[0])+"相同");
			continue;
		}
		df.newData(0, currId);
		docPermission.setDocDefineData(df, linkName, linkProcess, linkActivity);
	}
	df.saveData();
	df.refreshData();
	df.first();
	df.expandRow(df.getRowId());
	if(sameLink.length>0){
		alert(sameLink.join("\n"));
	}
	
};

docPermission.addFromSubRoot = function(resArr, df) {
	var currId = df.getCurrentRowId();
	var sameLink=new Array();
	df.loadTreeData(currId, function() {
		for ( var i = 0; i < resArr.length; i++) {
			var it = resArr[i];
			var linkProcess = it.process;
			var linkActivity = it.activity ? it.activity : "";
			var linkName = it.activityFName;
			var temp =df.locate([ linkProcess, linkActivity ],[ 'sProcess', 'sActivity' ], true);
			if (temp.length > 0) {
				sameLink.push(linkName+"的process("+linkProcess+"),activity("+linkActivity+")和"+df.getValue('sDisplayName',temp[0])+"相同");	
				continue;
			}
			isSave = true;
			df.newData(0, currId);
			docPermission.setDocDefineData(df, linkName, linkProcess,
					linkActivity);
		}
		df.saveData();
		if(sameLink.length>0){
			alert(sameLink.join("\n"));
		}
	});
};

docPermission.isExistDefine = function(event) {
	var activityRootArr = {};
	var procArr = {};
	var receDefine = justep.XML.fromString("<data/>");
	for ( var i = 0; i < event.data.getRowsNum(); i++) {
		/* 第一层 */
		var p = event.data.getValueByName("process", i);
		if (!procArr[p]) {
			procArr[p] = p;
			var item = this.createElement(receDefine, "item");
			item.setAttribute("isRoot", "true");
			item.appendChild(this.createElement(receDefine, "process", p));
			item.appendChild(this.createElement(receDefine, "activity", ''));
			item
					.appendChild(this.createElement(receDefine,
							"activityFName", p));
			$(receDefine).firstElement().appendChild(item);
		}

		var item = this.createElement(receDefine, "item");
		item.setAttribute("isRoot", "false");
		item.appendChild(this.createElement(receDefine, "process", p));
		item.appendChild(this.createElement(receDefine, "activity", event.data
				.getValueByName("activity", i)));
		item.appendChild(this.createElement(receDefine, "activityFName",
				event.data.getValueByName("activityFName", i)));
		$(receDefine).firstElement().appendChild(item);
	}
	var sendParam = new justep.Request.ActionParam();
	sendParam.setXml('param', new justep.Request.XMLParam(justep.XML
			.toString(receDefine)));
	response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess",
			"mainActivity", "queryExistDefineAction", sendParam, null, null,
			false);
	if (!justep.Request.isBizSuccess(response)) {
		throw new Error("juestp.Doc.addAccessRecord失败！");
	}
	var resItem = justep.XML.eval(response.responseXML,
			"//item[@isExist='true' and @isRoot='false']");
	var alertInfo = "";
	for ( var i = 0; i < resItem.length; i++) {
		alertInfo += justep.XML.getNodeText(justep.XML.eval(resItem[i],
				"activityFName", "single"))
				+ "\n";
	}

	if (alertInfo && !confirm("以下关联：\n" + alertInfo + "已存在，不能添加。是否继续添加剩余项？")) {
		return false;
	}
	;

	var all = new Array();
	resItem = justep.XML.eval(response.responseXML, "//item[@isExist='false']");
	for ( var i = 0; i < resItem.length; i++) {
		var it = resItem[i];
		all[i] = {
			process : justep.XML.getNodeText(justep.XML.eval(it, "process",
					"single")),
			activity : justep.XML.getNodeText(justep.XML.eval(it, "activity",
					"single")),
			activityFName : justep.XML.getNodeText(justep.XML.eval(it,
					"activityFName", "single"))
		};
	}
	;
	return all;
};

docPermission.createElement = function(receDefine, name, value) {
	var element = receDefine.createElement(name);
	if (value != null && value !== "") {
		justep.XML.setNodeText(element, '.', value);
	}
	return element;
},

docPermission.wdSelectFunTreeReceive = function(event) {
	var resArr = docPermission.isExistDefine(event);
	if (!resArr) {
		return;
	}
	var df = justep.xbl("docDefineData");
	var linkProcess = df.getValue("sProcess");
	/* 树根节点添加 */
	if ($.trim(linkProcess) == "") {
		docPermission.addFromRoot(resArr, df);
		return;
	}
	/* 树子节点添加 */
	for ( var i = 0; i < event.data.getRowsNum() && i < 1; i++) {
		var process = event.data.getValueByName("process", i);
		if (linkProcess !== process) {
			alert("请选择‘" + linkProcess + "’下的activity。");
			return;
		}
	}
	docPermission.addFromSubRoot(resArr, df);
};

docPermission.setDocDefineData = function(docDefineData, linkName, linkProcess,
		linkActivity) {
	var rowId = docDefineData.getCurrentRowId();
	docDefineData.setValue("sDisplayName", linkName, rowId);
	docDefineData.setValue("sProcess", linkProcess, rowId);
	docDefineData.setValue("sActivity", linkActivity, rowId);
};

docPermission.linkTreeShowNodeImg = function(event) {
	return '/UI/SA/doc/docCenter/images/folder.gif';
};

docPermission.btnDeleteClick = function(event) {
	if (!confirm("提示：“删除”操作会同时删除当前选中项的子项。\n\r\n\r确实要删除吗？"))
		return;
	var df = justep.xbl("docDefineData");
	var linkProcess = df.getValue("sProcess");
	var linkActivity = df.getValue("sActivity");
	var sendParam = new justep.Request.ActionParam();
	sendParam.setString('linkProcess', linkProcess);
	sendParam.setString('linkActivity', linkActivity);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var response = justep.Request.sendBizRequest(process, activity,
			"deleteLinkDefineAction", sendParam, null, function() {
				df.getStore().deleteRow(df.getCurrentRowId());
			});
	if (!justep.Request.isBizSuccess(response)) {
		throw new Error("操作失败！");
	}
};

docPermission.barItem4Click = function(event) {
	docPermission.isRefreshClick = true;
	justep.xbl("docDefineData").refreshData();
};
