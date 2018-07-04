/**
 * appCommon根名空间
 */
if (typeof(appCommon) == "undefined")
	appCommon = {};

/**
 * appCommon.component名空间
 */
if (typeof(appCommon.component) == "undefined")
	appCommon.component = {}; 

appCommon.component.ProcessExecuteDialog = function(xblObject) {
	
	dhtmlxEventable(this);

	this.id = xblObject.domNode.id;

	this._dataID = xblObject.domNode.getAttribute("data");
	this._processEngineID = xblObject.domNode.getAttribute("process-engine");

	this.executeDialog = new justep.WindowDialog(this.id + "_executeDialog",
			"/appCommon/components/processExecuteDialog/processExecute/mainActivity.w", "处理",
			true, null, 505, 325, null, null, false);
	this.executeDialog.setMinmaxable(false);
	this.executeDialog.setResizable(false);
	
	this._addListener(appCommon.component.ProcessExecuteDialog.ON_BEFORE_EXECUTE, xblObject.domNode.getAttribute("onBeforeExecute"), xblObject);
	this._addListener(appCommon.component.ProcessExecuteDialog.ON_AFTER_EXECUTE, xblObject.domNode.getAttribute("onAfterExecute"), xblObject);

	this.executeDialog.attachEvent("onSend", this._doSend, xblObject);
	this.executeDialog.attachEvent("onReceive", this._doReceive, xblObject);
	
	this._initByConfig();
};

appCommon.component.ProcessExecuteDialog.ON_BEFORE_EXECUTE = "onBeforeExecute";
appCommon.component.ProcessExecuteDialog.ON_AFTER_EXECUTE = "onAfterExecute";

appCommon.component.ProcessExecuteDialog.prototype._initByConfig = function() {
	var conf = appCommon.ConfigUtils.getCurrentProcessBizConfig(appCommon.ProcessExecute.PROCESS_EXECUTE_CONFIG_FILE);
	this.dataModel = appCommon.ConfigUtils.getStringConfigItem(conf,
			"//data-model");
	this.executeConcept = appCommon.ConfigUtils.getStringConfigItem(conf,
			"//execute-concept");

	this.verdictDisplayed = appCommon.ConfigUtils.getActivityConfigItem(conf,
			"//execute-dialog/verdict-displayed", false);
	this.opinionRequired = appCommon.ConfigUtils.getActivityConfigItem(conf,
			"//execute-dialog/opinion-required", false);
	this.advanceEnabled = appCommon.ConfigUtils.getActivityConfigItem(conf,
			"//execute-dialog/advance-enabled", true);
	this.backEnabled = appCommon.ConfigUtils.getActivityConfigItem(conf,
			"//execute-dialog/back-enabled", true);
	this.transferEnabled = appCommon.ConfigUtils.getActivityConfigItem(conf,
			"//execute-dialog/transfer-enabled", true);
	this.abortEnabled = appCommon.ConfigUtils.getActivityConfigItem(conf,
			"//execute-dialog/abort-enabled", true);
};

appCommon.component.ProcessExecuteDialog.prototype._addListener = function(name, funname, xblObject){
	var fun = justep.Function.get(funname);
	if (fun != null){
		this.attachEvent(name, fun, xblObject);
	}
};

appCommon.component.ProcessExecuteDialog.prototype.getData = function() {
	return justep.xbl(this._dataID);
};

appCommon.component.ProcessExecuteDialog.prototype.getProcessEngine = function() {
	return justep.xbl(this._processEngineID);
};

appCommon.component.ProcessExecuteDialog.prototype._doSend = function() {
	return {
		"dataModel" : this.dataModel,
		"executeConcept" : this.executeConcept,
		
		"verdictDisplayed" : this.verdictDisplayed,
		"opinionRequired" : this.opinionRequired,
		"advanceEnabled" : this.advanceEnabled,
		"backEnabled" : this.backEnabled,
		"transferEnabled" : this.transferEnabled,
		"abortEnabled" : this.abortEnabled,

		"bizID" : this.getData().getCurrentRowId(),
		"taskID" : justep.Context.getTask(),
		"processEngine" : this.getProcessEngine()
	};	
};

appCommon.component.ProcessExecuteDialog.prototype._doReceive = function(event) {
	var eventData = {"source": this, "data": event.data};
	if (this.checkEvent(appCommon.component.ProcessExecuteDialog.ON_AFTER_EXECUTE)){
		this.callEvent(appCommon.component.ProcessExecuteDialog.ON_AFTER_EXECUTE, [eventData]);
	}
};

appCommon.component.ProcessExecuteDialog.prototype.execute = function() {
	var eventData = {"source": this, "cancel": false};
	if (this.checkEvent(appCommon.component.ProcessExecuteDialog.ON_BEFORE_EXECUTE)){
		this.callEvent(appCommon.component.ProcessExecuteDialog.ON_BEFORE_EXECUTE, [eventData]);
		if (eventData.cancel) return;
	}
	if (this.getData().saveData()) {
		var bizState = this.getData().getValue("fBizState");
		if (!bizState || bizState == "bsEditing") {
			this.getProcessEngine().advanceQuery();
		} else {
			this.executeDialog.open();
		}
	}
};
