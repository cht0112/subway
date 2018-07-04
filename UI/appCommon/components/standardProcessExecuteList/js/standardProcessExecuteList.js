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

appCommon.component.StandardProcessExecuteList = function(xblObject) {

	dhtmlxEventable(this);

	this.id = xblObject.domNode.id;
	this._attributeNode = xblObject.getElementByXblID('attribute');
	this._dataID = xblObject.domNode.getAttribute('data');
	this._configFile = xblObject.domNode.getAttribute('config-file');
	this._listWindowIframeID = this._attributeNode.getAttribute('window-iframe-id');
	this._collapsePanelID = this._attributeNode.getAttribute("collapse-panel-id");
	this._initByConfig();
	this._addListener(
			appCommon.component.StandardProcessExecuteList.ON_REFRESH,
			xblObject.domNode.getAttribute("onRefresh"), xblObject);
			
	this._collapsePanelOpened = xblObject.domNode.getAttribute("status")!="collapsed";
}

appCommon.component.StandardProcessExecuteList.ON_REFRESH = "onRefresh";

appCommon.component.StandardProcessExecuteList.prototype._addListener = function(
		name, funname, xblObject) {
	var fun = justep.Function.get(funname);
	if (fun != null) {
		this.attachEvent(name, fun, xblObject);
	}
}

appCommon.component.StandardProcessExecuteList.prototype._doListIframeRefresh = function(
		event) {
	var eventData = {
		"source" : this,
		"cancel" : false
	};
	if (this.checkEvent(appCommon.component.StandardProcessExecuteList.ON_REFRESH)) {
		this.callEvent(appCommon.component.StandardProcessExecuteList.ON_REFRESH, [eventData]);
	}

	event.cancel = eventData.cancel || (!this._collapsePanelOpened);
}

appCommon.component.StandardProcessExecuteList.prototype._doCollapsePanelExpand = function() {
	this._collapsePanelOpened = true;
	
	var collapsePanel = this.getCollapsePanel();
	collapsePanel.__layout.style.display = "inline";
	collapsePanel.__layout.style.visibility = "inherit";

	var ListWindowIframe = this.getListWindowIframe();
	var bizID = this.getData().getCurrentRowId();
	ListWindowIframe.open({
		"sData1": bizID
	},"/UI/appCommon/components/standardProcessExecuteList/processExecute/processExecuteList.w");
};

appCommon.component.StandardProcessExecuteList.prototype._doCollapsePanelCollapse = function() {
	this._collapsePanelOpened = false;
};

appCommon.component.StandardProcessExecuteList.prototype.getListWindowIframe = function() {
	return justep.xbl(this._listWindowIframeID);
};

appCommon.component.StandardProcessExecuteList.prototype.getCollapsePanel = function() {
	return justep.xbl(this._collapsePanelID);
};
appCommon.component.StandardProcessExecuteList.prototype._initByConfig = function() {
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
appCommon.component.StandardProcessExecuteList.prototype.getData = function() {
	return justep.xbl(this._dataID);
};