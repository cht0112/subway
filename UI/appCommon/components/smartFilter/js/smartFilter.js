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

appCommon.component.SmartFilter = function(xblObject) {

	dhtmlxEventable(this);

	this.id = xblObject.domNode.id;

	this._attributeNode = xblObject.getElementByXblID('attribute');
	this.filterDataID = this._attributeNode.getAttribute('filter-data');
	this.filterRelations = this._attributeNode.getAttribute('filter-relations');
	this.autoRefresh = this._attributeNode.getAttribute('auto-refresh') == "true";

	this._modelID = this._attributeNode.getAttribute('model-id');
	this._innerDataID = this._attributeNode.getAttribute('inner-data-id');
	this._inputID = this._attributeNode.getAttribute('input-id');

	this.onGetCondition = this._attributeNode.getAttribute('onGetCondition');

	var innerData = this.getInnerData();
	innerData.attachEvent(justep.XData.EVENT_DATA_CHANGED, function(event) {
		this._doValueChanged(event);
	}, xblObject);

};

appCommon.component.SmartFilter.prototype._doValueChanged = function(event) {
	if (event.column == "value") {
		appCommon.component.SmartFilter.setFilterCondition(this.id, 
			this.getFilterData(), 
			this.filterRelations,
			event.value, 
			this.onGetCondition, 
			this.autoRefresh);
	}
}

appCommon.component.SmartFilter.prototype.getFilterName = function() {
	return appCommon.component.SmartFilter.getFilterName(this.id);
}

appCommon.component.SmartFilter.prototype.getCondition = function() {
	return appCommon.component.SmartFilter.getCondition(this.filterRelations, 
		this.getValue());
}

appCommon.component.SmartFilter.prototype.getFilterData = function() {
	return justep.xbl(this.filterDataID);
}

appCommon.component.SmartFilter.prototype.getInnerInput = function() {
	return xforms(this._inputID);
}

appCommon.component.SmartFilter.prototype.getInnerData = function() {
	return justep.xbl(this._innerDataID);
}

appCommon.component.SmartFilter.prototype.getValue = function() {
	return this.getInnerData().getValue("value");
}

/**
 * 设置过滤条件
 */
appCommon.component.SmartFilter.setFilterCondition = function(id, filterData,
		filterRelations, value, onGetConditionEvent, isRefresh) {
	var filterName = appCommon.component.SmartFilter.getFilterName(id);
	var condition = appCommon.component.SmartFilter._doGetCondition(id,
			filterData, filterRelations, value, onGetConditionEvent);
	var oldCondition = filterData.getFilter(filterName);
	if (condition != oldCondition) {
		filterData.setFilter(filterName, condition);
		if (isRefresh)
			filterData.refreshData();
	}
}

/**
 * 构造filter name
 */
appCommon.component.SmartFilter.getFilterName = function(id) {
	return "_" + id + "_filter";
}

/**
 * 构造条件
 */
appCommon.component.SmartFilter.getCondition = function(filterRelations, 
		value) {
	if (!value)
		return "";

	return appCommon.FilterUtils.getMultiLikeFilter(filterRelations, value, ",");
}

/**
 * 获取条件
 */
appCommon.component.SmartFilter._doGetCondition = function(id, filterData,
		filterRelations, value, onGetConditionEvent) {
	var condition = appCommon.component.SmartFilter.getCondition(
			filterRelations, value);
	var fun = justep.Function.get(onGetConditionEvent);
	if (fun) {
		var eventData = {
			"id" : id,
			"filterData" : filterData,
			"filterRelations" : filterRelations,
			"value" : value,
			"defaultCondition" : condition,
			"handled" : false
		};
		var customCondition = fun(eventData);
		if (eventData.handled)
			condition = customCondition;
	}

	return condition;
}
