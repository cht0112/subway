var appDbManagerActivity = {};

appDbManagerActivity.model1Load = function(event){
	appDbManagerActivity.refresh();
};

appDbManagerActivity.grid1_createRender = function(event){
	var fid = event.rowId;
	var html = "<button id=\"btncreate\" onclick=\"appDbManagerActivity.createAppDb('" + fid
			+ "')\" >创建应用库表</button>" ;
	return html;
	
};

appDbManagerActivity.grid1_initRender = function(event){
	var fid = event.rowId;
	var html = "<button id=\"btninit\" onclick=\"appDbManagerActivity.initAppDb('" + fid
			+ "')\" >初始化应用库</button>" ;
	return html;
	
};



appDbManagerActivity.refresh = function(){
	var xmlHttpRequest = justep.Request.sendBizRequest2({
		action: "getAllAppsAction"
	});
	if (justep.Request.isSuccess(xmlHttpRequest)){
		var users = justep.Request.getData(xmlHttpRequest.responseXML);
		var data = justep.xbl("data1");
		data.loadXML(users);
	}else{
		var message = justep.XML.eval(xmlHttpRequest.responseXML, "/root/message", "single");
		alert(justep.XML.getNodeText(message));
	}
};

appDbManagerActivity.initAppDb = function(fid){
	var data = justep.xbl("data1");
	var app = data.getValue("app", fid);
	var msg = "是否初始化应用库“" + app + "”";
	var okBack = function(){
		
		var param = new justep.Request.ActionParam();
		param.setString("app", app);
		var callback = function(data){
			justep.Portal.stopLoading();
			if (data.state){
				justep.OpmUtils.showSuccess("初始化应用库“" + app + "“成功！", null, null);
			}else{
				data.ignoreError = false;
			}
		};
		justep.Request.sendBizRequest2({action: "addClientAppAction", parameters:param, async: true, callback: callback});
		justep.Portal.startLoading();
		
	};
	var cancelBack = undefined;
	justep.OpmUtils.showConfirm(msg, okBack, cancelBack);
};

appDbManagerActivity.createAppDb = function(fid){
	var data = justep.xbl("data1");
	var app = data.getValue("app", fid);
	var msg = "是否创建应用“" + app + "”的库表";
	var okBack = function(){
		var param = new justep.Request.ActionParam();
		param.setString("app", app);
		var callback = function(data){
			justep.Portal.stopLoading();
			if (data.state){
				justep.OpmUtils.showSuccess("创建应用“" + app + "“的库表成功！", null, null);	
			}else{
				data.ignoreError = false;
			}
		};
		justep.Request.sendBizRequest2({action: "addAppAction", parameters:param, async: true, callback: callback});
		justep.Portal.startLoading();
	};
	var cancelBack = undefined;
	justep.OpmUtils.showConfirm(msg, okBack, cancelBack);
	

};


appDbManagerActivity.refreshClick = function(event){
	appDbManagerActivity.refresh();
};


appDbManagerActivity.clientTriggerClick = function(event){
	var data = justep.xbl("clientData");
	var client = data.getValue("client");
	if (!!client){
		var param = new justep.Request.ActionParam();
		param.setString("name", client);
		var result = justep.Request.sendBizRequest2({action: "addClientAction", parameters:param});
		if (justep.Request.isSuccess(result)){
			justep.OpmUtils.showSuccess("创建租户“" + client + "“成功！", null, null);
		}
	
	}else{
		justep.OpmUtils.showError("请输入租户标识");
	}
};
