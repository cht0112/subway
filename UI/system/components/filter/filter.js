justep.Filter = function(xblObject) {

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

justep.Filter.prototype._doDropdown = function(event) {
	var value = this.getValue();
	if (!value) {
		var defaultValue = this.getDefaultValue();
		if (defaultValue) {
			this.getInnerData().setValue("value", defaultValue);
			this.getInnerSelect().changeRowsStatus();
		}
	}
};

justep.Filter.prototype._doValueChanged = function(event) {
	if (event.column == "value") {
		this.setFilter(this.filterDataID, this.filterRelation, 
				event.value);
	}
};

justep.Filter.prototype.getMultiSelect = function() {
	return this.getInnerSelect().mutil; // TODO multiSelect
};

justep.Filter.prototype.getValueSeparator = function() {
	return this.getInnerSelect().valueSplitChar;
};

justep.Filter.prototype.getFilterName = function() {
	return "_" + this.id + "_filter";
};

justep.Filter.prototype.getFilter = function() {
	
	if (!this._value && this._defaultValueBindingID)
		this._value = this.getDefaultValue();
		
	if (!this._value) return "";
	
	var r = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,this.filterRelation);
	
	if (this.getMultiSelect())
		return justep.Components.FilterUtils.getMuiltSelectFilter(r, this._value, this.getValueSeparator());
	else
		return justep.Components.FilterUtils.getSingleSelectFilter(r, this._value);
};

justep.Filter.prototype.getFilterData = function() {
	return justep.xbl(this.filterDataID);
};

justep.Filter.prototype.getInnerSelect = function() {
	return xforms(this._selectID);
};

justep.Filter.prototype.getInnerData = function() {
	return justep.xbl(this._innerDataID);
};

justep.Filter.prototype.getValue = function() {
	return this.getInnerData().getValue("value");
};

justep.Filter.prototype.getDefaultValue = function() {
	var binding = this.getDefaultValueBinding();
	return justep.Components.ToolUtils.getValueFromBinding(binding);
};

justep.Filter.prototype.setTabIndex = function(tabIndex) {
	this.getInnerSelect().setTabIndex(tabIndex);
};

justep.Filter.prototype.getTabIndex = function() {
	return this.getInnerSelect().getTabIndex();
};

justep.Filter.prototype.setAccessKey = function(key) {
	this.getInnerSelect().setAccessKey(key);
};

justep.Filter.prototype.getAccessKey = function() {
	return this.getInnerSelect().getAccessKey();
};

justep.Filter.prototype.setReadonly = function(readonly) {
	this.getInnerSelect().setReadonly(readonly);
};

justep.Filter.prototype.getReadonly = function() {
	return this.getInnerSelect().getReadonly();
};

justep.Filter.prototype.setDisabled = function(disabled) {
	this.getInnerSelect().setDisabled(disabled);
};

justep.Filter.prototype.getDisabled = function() {
	return this.getInnerSelect().getDisabled();
};

justep.Filter.prototype.setAutoRefresh = function(autoRefresh){
	this.autoRefresh = autoRefresh;
};

justep.Filter.prototype.clearFilter = function(){
	var filterData = justep.xbl(this.filterDataID);
	filterData.setFilter(this.getFilterName(),"");
	this.getInnerData().setValue("value","");
	this.getInnerData().setValue("label","");
};

justep.Filter.prototype.setFilter = function(filterDataID, filterRelations, value){
	this.filterDataID = filterDataID;
	this.filterRelation = filterRelations;
	this._value = value;
	var filterName = this.getFilterName();
	var condition = this._doGetCondition();	
	var filterData = justep.xbl(filterDataID);
	var oldCondition = filterData.getFilter(filterName);
	if (condition != oldCondition){
		filterData.setFilter(filterName, condition);
		if (this.autoRefresh) 
			filterData.refreshData();
	}
	
};

/**
 * 获取default value
 */
justep.Filter.prototype.getDefaultValueBinding = function() {
	if (!this._defaultValueBindingID || this._defaultValueBindingID == "")
		return null;
	var ref = xforms(this._defaultValueBindingID);
	if (ref)
		return ref.binding;
};

/**
 * 获取条件
 */
justep.Filter.prototype._doGetCondition = function(t) {
	
	var condition = this.getFilter();
	var fun = justep.Function.get(this.onGetCondition);
	if (fun) {
		var defaultValue = this.getDefaultValue();
		var eventData = {
			"id" : this.id,
			"filterData" : justep.xbl(this.filterDataID),
			"filterRelation" : this.filterRelation,
			"value" : this._value,
			"defaultValue" : defaultValue,
			"multiSelect" : this.getMultiSelect(),
			"valueSeparator" : this.getValueSeparator(),
			"defaultCondition" : condition
		};
		var customCondition = fun(eventData);
		if (eventData.handled)
			condition = customCondition;
	}

	return condition;
};

justep.GridFilter = function(xblObject) {
	justep.Object.extend(this, new justep.Filter(xblObject));
};

justep.TreeFilter = function(xblObject) {
	justep.Object.extend(this, new justep.Filter(xblObject));
};

