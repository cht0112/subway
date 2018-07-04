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

appCommon.component.ProcessExecuteListIframe = function(xblObject) {

	dhtmlxEventable(this);

	this.id = xblObject.domNode.id;
	this._dataID = xblObject.domNode.getAttribute('data');
	this._configFile = xblObject.domNode.getAttribute('config-file');
	this._autoLoad = xblObject.domNode.getAttribute('auto-load') != "false";
	this._minHeight = xblObject.domNode.getAttribute('min-height');
	if (this._minHeight) this._minHeight = this._minHeight * 1; 
	this._attributeNode = xblObject.getElementByXblID('attribute');
	this._iframeID = this._attributeNode.getAttribute('window-iframe-id');
	this._titleBindingID = this._attributeNode.getAttribute("title-binding-id");

	this._initByConfig();

	this._pageLoadState = -1; // -1:未加载; 0:加载中; 1:已加载

	var data = this.getData();
	data.attachEvent(justep.XData.EVENT_REFRESHDATA_AFTER, this.refreshList, xblObject);
	data.attachEvent(justep.XData.EVENT_REFRESHPAGEDATA_AFTER, this.refreshList, xblObject);
	data.attachEvent(justep.XData.EVENT_INDEX_CHANGED, this.refreshList, xblObject);

	this._addListener(appCommon.component.ProcessExecuteListIframe.ON_REFRESH, xblObject.domNode.getAttribute("onRefresh"), xblObject);
};

//appCommon.component.ProcessExecuteListIframe.PROCESS_EXECUTE_LIST_PAGE = "/appCommon/components/processExecuteListIframe/processExecuteList/processExecuteList.p";
appCommon.component.ProcessExecuteListIframe.ON_REFRESH = "onRefresh";

appCommon.component.ProcessExecuteListIframe.prototype._addListener = function(name, funname, xblObject){
	var fun = justep.Function.get(funname);
	if (fun != null){
		this.attachEvent(name, fun, xblObject);
	}
};

appCommon.component.ProcessExecuteListIframe.prototype._initByConfig = function() {
	var conf;
	if (this._configFile) {
		conf = appCommon.ConfigUtils.getBizConfig(this._configFile);
	} else {
		conf = appCommon.ConfigUtils
				.getCurrentProcessBizConfig(appCommon.ProcessExecute.PROCESS_EXECUTE_CONFIG_FILE);
	}
	this.dataModel = appCommon.ConfigUtils.getStringConfigItem(conf,
			"//data-model");
	this.executeConcept = appCommon.ConfigUtils.getStringConfigItem(conf,
			"//execute-concept");
	this.displayedActivities = appCommon.ConfigUtils.getStringConfigItem(conf,
			"//execute-list/displayed-activities");
};

appCommon.component.ProcessExecuteListIframe.prototype.getIframe = function() {
	return document.getElementById(this._iframeID);
};

appCommon.component.ProcessExecuteListIframe.prototype.getIframeWindow = function() {
	return window.frames[this._iframeID];
};

appCommon.component.ProcessExecuteListIframe.prototype.loadPage = function() {
	if (this._pageLoadState >= 0) return;
	this._pageLoadState = 0;
	var dataModel = this.dataModel;
	var executeConcept = this.executeConcept;
	var bizID = this.getData().getCurrentRowId();
	justep.xbl(this._iframeID).open({
		"dataModel": dataModel,
		"executeConcept": executeConcept,
		"bizID": bizID
	},"/UI/appCommon/components/processExecuteListIframe/processExecute/processExecuteList.w");
};

appCommon.component.ProcessExecuteListIframe.prototype._doAfterIframeLoaded = function() {
	this._pageLoadState = 1;
	
	var self = this;
	this.getIframeWindow().onAfterRefreshList = function() {
		self._doAfterIframeRefreshList();
	}
	this.refreshList();
};

appCommon.component.ProcessExecuteListIframe.prototype._doAfterIframeRefreshList = function() {
	var iframeWindow = this.getIframeWindow();
	var iframe = this.getIframe();
	
	var height = iframeWindow.document.body.scrollHeight + 2;
	if (this._minHeight && (height < this._minHeight)) height = this._minHeight;
	iframe.height = height;
	
}

appCommon.component.ProcessExecuteListIframe.prototype.getPageLoaded = function() {
	return (this._pageLoadState == 1);
};

appCommon.component.ProcessExecuteListIframe.prototype.getData = function() {
	return justep.xbl(this._dataID);
};

appCommon.component.ProcessExecuteListIframe.prototype.refreshList = function() {
	var eventData = {"source": this, "cancel": false};
	if (this.checkEvent(appCommon.component.ProcessExecuteListIframe.ON_REFRESH)){
		this.callEvent(appCommon.component.ProcessExecuteListIframe.ON_REFRESH, [eventData]);
		if (eventData.cancel) return;
	}

	if (this._pageLoadState == 1) {
		var iframeWindow = this.getIframeWindow();
		iframeWindow.refreshList(justep.Context.getCurrentProcess(), justep.Context
				.getCurrentActivity(), this.dataModel, this.executeConcept,
				this.displayedActivities, this.getData().getCurrentRowId(), this.getTitle());
	} else {
		this.loadPage();
	}
};

appCommon.component.ProcessExecuteListIframe.prototype.getTitleBinding = function() {
	if (!this._titleBindingID)
		return null;
	var ref = xforms(this._titleBindingID);
	if (ref)
		return ref.binding;
};

appCommon.component.ProcessExecuteListIframe.prototype.getTitle = function() {
	var binding = this.getTitleBinding();
	return appCommon.ToolUtils.getValueFromBinding(binding);
};


