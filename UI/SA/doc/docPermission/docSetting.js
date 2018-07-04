var docSetting = {};

justep.windowDialogReceiver.acceptParentParamsFun = function(event) {
	var data = event.data;
	docSetting.linkProcess = data.linkProcess;
	docSetting.linkActivity = data.linkActivity;
	docSetting.settingOpt = data.settingOpt;
	if(data.keyId) docSetting.keyId = data.keyId;		
	var keyIdIpt = $("#keyIdIpt");
	if (data.settingOpt != "activityAdd") {
		$("#keyIdTr").css('display', '');
		$("#IptTr").height(90);
		if (data.settingOpt == "keyAdd") {
			var ld = justep.xbl("docLinkDefine");
			ld.insert(ld.createUUID(), 0);
			return;
		}
	}
	
	var response = docSetting.sendQueryAction();
	
	if (docSetting.settingOpt == "keyEidt") {
		keyIdIpt.attr('disabled','disabled');
		keyIdIpt.attr(
				"value",
				justep.XML.eval(response.responseXML, "//allSetting")[0]
				.getAttribute("keyId"));
		
	}	
	docSetting.loadData(response);
};

docSetting.sendQueryAction = function(){
	var sendParam = new justep.Request.ActionParam();
	sendParam.setString('linkProcess', docSetting.linkProcess);
	sendParam.setString('linkActivity', docSetting.linkActivity);

	if (docSetting.settingOpt == "keyEidt") {
		sendParam.setString('keyId', docSetting.keyId);
	}
	
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var response = justep.Request.sendBizRequest(process, activity,
			"querySettingAction", sendParam, null, null, true);
	if (!justep.Request.isBizSuccess(response)) {
		throw new Error("初始化失败！");
	}
	
	return response;
};

docSetting.loadData = function(xmlData) {
	this.loadFormData(xmlData);
	this.loadGridData(xmlData);	
};

docSetting.loadFormData = function(xmlData) {	
	justep.xbl("docLinkDefine").loadXML(
			justep.XML.eval(xmlData.responseXML, "//AccessSetting")[0]);
};

docSetting.loadGridData = function(xmlData) {	
	var templateData = justep.xbl("docTemplate");
	templateData.loadXML(justep.XML.eval(xmlData.responseXML,
			"//TemplateSetting")[0]);
};

docSetting.windowEnsure = function() {
	var sendParam = new justep.Request.ActionParam();
	sendParam.setString('linkProcess', this.linkProcess);
	sendParam.setString('linkActivity', this.linkActivity);
	this.saveXml = this.createActivityXml(this.settingOpt);
	sendParam.setXml('settingDoc', new justep.Request.XMLParam(this.saveXml));
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	if (this.settingOpt == "activityAdd") {
		var response = justep.Request.sendBizRequest(process, activity,
				"setDefineItemsAction", sendParam, null, null, true);
	} else if (this.settingOpt == "keyAdd") {
		var response = justep.Request.sendBizRequest(process, activity,
				"addKeyAction", sendParam, null, null, true);
	} else if (this.settingOpt == "keyEidt") {
		var response = justep.Request.sendBizRequest(process, activity,
				"editKeyNodeAction", sendParam, null, null, true);
	} else {
		throw new Error("操作失败！");
	}

	if (!justep.Request.isBizSuccess(response)) {
		throw new Error("操作失败！");
	}
	justep.windowDialogReceiver.windowEnsure();
};

docSetting.createActivityXml = function(type) {
	if (this.settingOpt == "activityAdd") {
		var resultXml = justep.XML.fromString("<defineRoot/>");
		var rootElm = justep.XML.eval(resultXml, "/defineRoot")[0];
	} else {
		var resultXml = justep.XML.fromString("<key/>");
		var rootElm = justep.XML.eval(resultXml, "/key")[0];
		rootElm.setAttribute("keyId", $("#keyIdIpt").val());
	}

	var LinkData = justep.xbl("docLinkDefine");
	rootElm.appendChild(this.createElement(resultXml, "rootName", LinkData
			.getValue("sRootName")));

	rootElm.appendChild(this.createElement(resultXml, "rootPath", LinkData
			.getValue("sRootPath")));
	rootElm.appendChild(this.createElement(resultXml, "subPath", LinkData
			.getValue("sSubPath")));
	rootElm.appendChild(this.createElement(resultXml, "access", LinkData
			.getValue("sAccess")));
	rootElm.appendChild(this.createElement(resultXml, "limitSize", LinkData
			.getValue("sLimitSize")));

	var tmpData = justep.xbl("docTemplate");
	var tmps = rootElm.appendChild(this.createElement(resultXml, "templates"));
	for ( var i = 0; i < tmpData.getCount(); i++) {
		var v = tmpData.getRowId(i);
		var tmp = tmps.appendChild(this.createElement(resultXml, "template"));
		var docId = tmpData.getValue("sDocId", v);
		tmp.setAttribute("docId", docId);

		tmp.appendChild(this.createElement(resultXml, "fileID", tmpData
				.getValue("sFileID", v)));
		tmp.appendChild(this.createElement(resultXml, "docName", tmpData
				.getValue("sDocName", v)));
		tmp.appendChild(this.createElement(resultXml, "docPath", tmpData
				.getValue("sDocPath", v)));
	}
	return resultXml;
};

docSetting.createElement = function(element, name, value) {
	var element = element.createElement(name);
	if (value != null && value !== "") {
		justep.XML.setNodeText(element, '.', value);
	}
	return element;
};

docSetting.newRootPath = function() {
	justep.xbl("selectRootDialog").open();
};

docSetting.openDocNodeSelectDialog = function(afterSelectFun) {
	var docNodeSelectDialog = this.docNodeSelectDialog;
	if (!docNodeSelectDialog) {
		docNodeSelectDialog = new justep.WindowDialog("docNodeSelectDialog",
				"/SA/doc/docPermission/docNodeSelect.w", "选择目录", true, null,
				500, 480, 0, 0, true);
		docNodeSelectDialog.attachEvent("onReceive", afterSelectFun,
				docNodeSelectDialog);
	}
	docNodeSelectDialog.dialog.status = "maximize";
	docNodeSelectDialog.open();
};

docSetting.selectTmpBtnClick = function(event) {
	var td = justep.xbl("docTemplate");
	if(td.getCount()<1 && confirm("当前没有新增模板数据，是否新增？"))
		td.newData(0);
	if(!td.getCurrentRowId())
		alert("请选择需要配置模板的行数据！");
	justep.xbl("selectTmpDialog").open();
};

docSetting.selectTmpReceive = function(event) {
	var data = event.data;
	var td = justep.xbl("docTemplate");
	td.setValue("sDocId", data.docId);
	td.setValue("sDocName", data.docName);
	td.setValue("sFileID", data.fileID);
	td.setValue("sDocPath", data.docPath);
};
docSetting.selectRootDialogReceive = function(event){
	var tmpDocLinkDefine = justep.xbl("docLinkDefine");
	tmpDocLinkDefine.setValue("sRootName", event.data.rootName);
	tmpDocLinkDefine.setValue("sRootPath", event.data.rootPath);
};

docSetting.docTemplateCustomRefresh = function(event){
	var response = docSetting.sendQueryAction();
	this.loadGridData(response);	
	
};
