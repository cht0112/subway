
justep.DecisionGrid = function(xblObject) {
	this.xblObject = xblObject;
};

justep.DecisionGrid.prototype._getDecisionGridDefineID = function() {
	return this.xblObject.decisionGridDefineID;
}

justep.DecisionGrid.prototype.getDecisionGridDefine = function() {
	return eval("get" + this._getDecisionGridDefineID() + "()");
};

justep.DecisionGrid.prototype._getDecisionGridFrameID = function() {
	return this.xblObject.decisionGridFrameID;
}

justep.DecisionGrid.prototype._getDecisionRequest = function() {
	var decisionRequest = $(this.getDecisionGridDefine()).firstElement().cloneNode(true);
	if(decisionRequest.tagName != 'request'){
		decisionRequest = justep.XML.eval(decisionRequest, 'request', null, 'xmlns:rdl="http://www.justep.com/RDL"')[0];
	}
	
	var pBusinessid = justep.XML.eval(decisionRequest, 'business-params/businessid')[0];	
	var pActivity = justep.XML.eval(decisionRequest, 'business-params/activity')[0];
	var pProcess = justep.XML.eval(decisionRequest, 'business-params/process')[0];
	
	justep.XML.setNodeText(pBusinessid,'.','JSESSIONID='+justep.Context.getRequestParameter('bsessionid'));
	justep.XML.setNodeText(pActivity,'.','mdxActivity');
	justep.XML.setNodeText(pProcess,'.','/SA/report/mdx/mdx/mdxProcess');
	
	var id = decisionRequest.getAttribute('data');
	var dataset = justep.xbl(id);
	var datasource = dataset.getDecisionDataSource();
	var catalog = dataset.getDecisionCatalog();
	var query = dataset.getDecisionQuery();
	
	var pDatasource = justep.XML.eval(decisionRequest, 'mdx/datasource')[0];	
	var pCatalog = justep.XML.eval(decisionRequest, 'mdx/catalog')[0];	
	var pQuery = justep.XML.eval(decisionRequest, 'mdx/query')[0];	

	justep.XML.setNodeText(pDatasource,'.',datasource);
	justep.XML.setNodeText(pCatalog,'.',catalog);
	justep.XML.setNodeText(pQuery,'.',query);
	return decisionRequest;
}

justep.DecisionGrid.prototype._getDecisionOlapUrl = function(){
	var olapInfo = justep.Request.sendHttpRequest("/UI/system/service/report/GetOlapServerURL.j");
	
	var olapInfoDoc = olapInfo.responseXML;
	var olapUrl = justep.XML.getNodeText(justep.XML.eval($(olapInfoDoc).firstElement().cloneNode(true), 'olap-server-url')[0]);
	return olapUrl;
}

justep.DecisionGrid.prototype._buildOlapUrl = function(key , action){	
	var olapUrl = this._getDecisionOlapUrl();
	var params ='?key='+key+"&"+key+'jsp_toolbar.'+action+'=1';
	olapUrl += params;
	return olapUrl;
}


justep.DecisionGrid.prototype.refresh = function(){	
	var olapUrl = this._getDecisionOlapUrl();
	var decisionRequest = this._getDecisionRequest();	
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), justep.XML.toString(decisionRequest));
}


/**
 * OLAP 导航
 */
justep.DecisionGrid.prototype.executeCube = function(key){		
	var olapUrl = this._buildOlapUrl(key ,'cubeNaviButton');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 排序规则
 */
justep.DecisionGrid.prototype.executeSortConfig = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'sortConfigButton');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 显示父成员
 */
justep.DecisionGrid.prototype.executeLevelStyle = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'levelStyle');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 显示属性
 */
justep.DecisionGrid.prototype.executeProperties = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'propertiesButton');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 配置显示属性
 */
justep.DecisionGrid.prototype.executePropertiesConfig = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'selectPropertiesButton');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 压缩空行列
 */
justep.DecisionGrid.prototype.executeNonEmpty = function(key){		
	var olapUrl = this._buildOlapUrl(key ,'nonEmpty');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 交换坐标轴
 */
justep.DecisionGrid.prototype.executeSwapAxes = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'swapAxes');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 成员钻取
 */
justep.DecisionGrid.prototype.executeDrillMember = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'drillMember');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 位置钻取
 */
justep.DecisionGrid.prototype.executeDrillPosition = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'drillPosition');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 钻取替代
 */
justep.DecisionGrid.prototype.executeDrillReplace = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'drillReplace');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

/**
 * 钻取指标
 */
justep.DecisionGrid.prototype.executeDrillThrough = function(key){	
	var olapUrl = this._buildOlapUrl(key ,'drillThrough');
	justep.Request.callURL(olapUrl, this._getDecisionGridFrameID(), null);
}

