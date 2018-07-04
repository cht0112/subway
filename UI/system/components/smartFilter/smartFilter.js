justep.SmartFilter = function(xblObject) {

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

justep.SmartFilter.prototype._doValueChanged = function(event) {
	if (event.column == "value") {
		this.setFilter(this.filterDataID, this.filterRelations, event.value);
	}
};

justep.SmartFilter.prototype.getFilterName = function() {
	return "_" + this.id + "_filter";
};

justep.SmartFilter.prototype.getFilter = function() {
	var rs = this.filterRelations.split(","),relations = [];
	for(var i in rs){
		relations.push(justep.Components.FilterUtils.getRelationAlias(this.filterDataID,rs[i]));
	}
	return justep.Components.FilterUtils.getMultiLikeFilter(relations, this._value, ",");
};

justep.SmartFilter.prototype.getFilterData = function() {
	return justep.xbl(this.filterDataID);
};

justep.SmartFilter.prototype.getInnerInput = function() {
	return xforms(this._inputID);
};

justep.SmartFilter.prototype.getInnerData = function() {
	return justep.xbl(this._innerDataID);
};

justep.SmartFilter.prototype.getValue = function() {
	return this.getInnerData().getValue("value");
};

justep.SmartFilter.prototype.setFilter = function(filterDataID, filterRelations, value){
	this.filterDataID = filterDataID;
	this.filterRelations = filterRelations;
	this._value = value;
	var filterName = this.getFilterName();
	var condition = this._doGetCondition(value);
	var filterData = justep.xbl(this.filterDataID);
	var oldCondition = filterData.getFilter(filterName);
	if (condition != oldCondition) {
		filterData.setFilter(filterName, condition);
		if (this.autoRefresh)
			filterData.refreshData();
	}	
};

justep.SmartFilter.prototype.setAutoRefresh = function(autoRefresh){
	this.autoRefresh = autoRefresh;
};

justep.SmartFilter.prototype.clearFilter = function(){
	var filterData = justep.xbl(this.filterDataID);
	filterData.setFilter(this.getFilterName(),"");
	this.getInnerData().setValue("value","");
};

justep.SmartFilter.prototype._doGetCondition = function() {
	
	var condition = this.getFilter();
	var fun = justep.Function.get(this.onGetCondition);
	if (fun) {
		var eventData = {
			"source" : this,	
			"id" : this.id,
			"filterData" : justep.xbl(this.filterDataID),
			"filterRelations" : this.filterRelations,
			"value" : this.getValue(),
			"defaultCondition" : condition,
			"handled" : false
		};
		var customCondition = fun(eventData);
		if (eventData.handled)
			condition = customCondition;
	}

	return condition;
};
