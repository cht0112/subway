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

appCommon.component.Filter = function(xblObject) {

	dhtmlxEventable(this);

	this.id = xblObject.domNode.id;

	this._attributeNode = xblObject.getElementByXblID('attribute');
	this.filterDataID = this._attributeNode.getAttribute('filter-data');
	this.filterRelation = this._attributeNode.getAttribute('filter-relation');
	this.autoRefresh = this._attributeNode.getAttribute('auto-refresh') == "true";
	this._modelID = this._attributeNode.getAttribute('model-id');
	this._innerDataID = this._attributeNode.getAttribute('inner-data-id');
	this._selectID = this._attributeNode.getAttribute('select-id');
	this._defaultValueBindingID = this._attributeNode.getAttribute("default-value-binding-id");

	this.onGetCondition = this._attributeNode.getAttribute('onGetCondition');

	var innerData = this.getInnerData();
	innerData.attachEvent(justep.XData.EVENT_DATA_CHANGED, function(event) {
		this._doValueChanged(event);
	}, xblObject);

	var select = this.getInnerSelect();
	select.attachEvent("onDropdown", function(event) {
		this._doDropdown(event);
	}, xblObject);
};

appCommon.component.Filter.prototype._doDropdown = function(event) {
	var value = this.getValue();
	if (!value) {
		var defaultValue = this.getDefaultValue();
		if (defaultValue) {
			this.getInnerData().setValue("value", defaultValue);
			this.getInnerSelect().changeRowsStatus();
		}
	}
}

appCommon.component.Filter.prototype._doValueChanged = function(event) {
	if (event.column == "value") {
		appCommon.component.Filter.setFilterCondition(this.id, 
				this.getFilterData(), this.filterRelation, 
				event.value,
				this.getDefaultValueBinding(),
				this.getMultiSelect(), 
				this.getValueSeparator(), 
				this.onGetCondition, 
				this.autoRefresh);
	}
}

appCommon.component.Filter.prototype.getMultiSelect = function() {
	return (this.getInnerSelect().type=="treeselect"||this.getInnerSelect().type=="gridselect"); 
}

appCommon.component.Filter.prototype.getValueSeparator = function() {
	return this.getInnerSelect().valueSplitChar;
}

appCommon.component.Filter.prototype.getFilterName = function() {
	return appCommon.component.Filter.getFilterName(this.id);
}

appCommon.component.Filter.prototype.getCondition = function() {
	return appCommon.component.Filter.getCondition(this.filterRelation, 
		this.getValue(), this.getDefaultValueBinding(), this.getMultiSelect(), this.getValueSeparator());
}

appCommon.component.Filter.prototype.getFilterData = function() {
	return justep.xbl(this.filterDataID);
}

appCommon.component.Filter.prototype.getInnerSelect = function() {
	return xforms(this._selectID);
}

appCommon.component.Filter.prototype.getInnerData = function() {
	return justep.xbl(this._innerDataID);
}

appCommon.component.Filter.prototype.getValue = function() {
	return this.getInnerData().getValue("value");
}

appCommon.component.Filter.prototype.getDefaultValueBinding = function() {
	return appCommon.component.Filter
			.getDefaultValueBinding(this._defaultValueBindingID);
}

appCommon.component.Filter.prototype.getDefaultValue = function() {
	var binding = this.getDefaultValueBinding();
	return appCommon.ToolUtils.getValueFromBinding(binding);
}

/**
 * 设置过滤条件
 */
appCommon.component.Filter.setFilterCondition = function(id, filterData,
		filterRelation, value, defaultValueBinding, multiSelect,
		valueSeparator, onGetConditionEvent, isRefresh) {
	var filterName = appCommon.component.Filter.getFilterName(id);
	var condition = appCommon.component.Filter._doGetCondition(id, filterData,
			filterRelation, value, defaultValueBinding, multiSelect,
			valueSeparator, onGetConditionEvent);
	var oldCondition = filterData.getFilter(filterName);
	if (condition != oldCondition){
		filterData.setFilter(filterName, condition);
		if (isRefresh) 
			filterData.refreshData();
	}
}

/**
 * 获取default value
 */
appCommon.component.Filter.getDefaultValueBinding = function(defaultValueBindingID) {
	if (!defaultValueBindingID || defaultValueBindingID == "")
		return null;
	var ref = xforms(defaultValueBindingID);
	if (ref)
		return ref.binding;
}

/**
 * 构造filter name
 */
appCommon.component.Filter.getFilterName = function(id) {
	return "_" + id + "_filter";
}

/**
 * 构造条件
 */
appCommon.component.Filter.getCondition = function(filterRelation, value,
		defaultValueBinding, multiSelect, valueSeparator) {
	if (!value && defaultValueBinding)
		value = appCommon.ToolUtils.getValueFromBinding(defaultValueBinding);
		
	if (!value)
		return "";

	if (multiSelect)
		return appCommon.FilterUtils.getMuiltSelectFilter(
				filterRelation, value, valueSeparator);
	else
		return appCommon.FilterUtils.getSingleSelectFilter(
				filterRelation, value);
}

/**
 * 获取条件
 */
appCommon.component.Filter._doGetCondition = function(id, filterData,
		filterRelation, value, defaultValueBinding, multiSelect,
		valueSeparator, onGetConditionEvent) {
	var condition = appCommon.component.Filter.getCondition(filterRelation, value, defaultValueBinding,
			multiSelect, valueSeparator);
	var fun = justep.Function.get(onGetConditionEvent);
	if (fun) {
		var defaultValue = appCommon.ToolUtils.getValueFromBinding(defaultValueBinding);
		var eventData = {
			"id" : id,
			"filterData" : filterData,
			"filterRelation" : filterRelation,
			"value" : value,
			"defaultValue" : defaultValue,
			"multiSelect" : multiSelect,
			"valueSeparator" : valueSeparator,
			"defaultCondition" : condition,
			"handled" : false
		};
		var customCondition = fun(eventData);
		if (eventData.handled)
			condition = customCondition;
	}

	return condition;
}

appCommon.component.GridFilter = function(xblObject) {
	justep.Object.extend(this, new appCommon.component.Filter(xblObject));
}

appCommon.component.TreeFilter = function(xblObject) {
	justep.Object.extend(this, new appCommon.component.Filter(xblObject));
}

