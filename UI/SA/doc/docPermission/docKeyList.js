var docKeyList = {};

docKeyList.btnDeleteKeyClick = function(event){
	var data = justep.xbl("docLinkKeys");
	var rowId = data.getCurrentRowId();
	if(!rowId){
		alert("请选择key。");
		return;
	} 
    if(!confirm('确定删除吗?')){
    	return;
    }

	var sendParam = new justep.Request.ActionParam();
	sendParam.setString('linkProcess', this.linkProcess);
	sendParam.setString('linkActivity',  this.linkActivity);
	sendParam.setString('keyId', data.getValue("sKeyId",rowId));
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	response = justep.Request.sendBizRequest(process, activity, "deleteKeyByIdAction", sendParam, null, null, true);
	if(!justep.Request.isBizSuccess(response)){
		throw new Error("删除失败！");
	} 
	docKeyList.windowInit();
};

docKeyList.btnInsertKeyClick = function(event){
	if(!this.settingDialog){
		this.settingDialog = new justep.WindowDialog("settingDialog","/SA/doc/docPermission/docSetting.w","关联设置",true,true,595,480,0,0,true);
		this.settingDialog.attachEvent("onSend",function(event){return this.data;} , this.settingDialog);
		this.settingDialog.attachEvent("onReceive",function(event){docKeyList.windowInit();} , this.settingDialog);
	}
	this.settingDialog.data = {linkProcess:this.linkProcess,linkActivity:this.linkActivity,settingOpt:"keyAdd"};
	this.settingDialog.dialog.status = "maximize";
	this.settingDialog.open();
};

justep.windowDialogReceiver.acceptParentParamsFun = function(event){
	var data = event.data;
	docKeyList.linkProcess=data.linkProcess;
	docKeyList.linkActivity=data.linkActivity;
	docKeyList.windowInit();	
};

docKeyList.windowInit = function(){
	var sendParam = new justep.Request.ActionParam();
	sendParam.setString('linkProcess', docKeyList.linkProcess);
	sendParam.setString('linkActivity', docKeyList.linkActivity);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var response = justep.Request.sendBizRequest(process, activity, "queryKeyListAction", sendParam, null, null, true);
	justep.xbl("docLinkKeys").loadXML(response.responseXML);
}

docKeyList.btnEditKeyClick = function(event){
	if(!justep.xbl("docLinkKeys").getCurrentRowId()){
		alert("请选择key。");
		return;
	}
	if(!this.settingDialog){
		this.settingDialog = new justep.WindowDialog("settingDialog","/SA/doc/docPermission/docSetting.w","关联设置",true,true,595,480,0,0,true);
		this.settingDialog.attachEvent("onSend",function(event){return this.data;} , this.settingDialog);
		this.settingDialog.attachEvent("onReceive",function(event){docKeyList.windowInit();} , this.settingDialog);
	}
	this.settingDialog.data = {linkProcess:this.linkProcess,linkActivity:this.linkActivity,settingOpt:"keyEidt",keyId:justep.xbl("docLinkKeys").getValue("sKeyId")};
	this.settingDialog.dialog.status = "maximize";
	this.settingDialog.open();
};
