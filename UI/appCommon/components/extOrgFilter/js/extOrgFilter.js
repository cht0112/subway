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

appCommon.component.ExtOrgFilter = function(xblObject) {

	dhtmlxEventable(this);

	this.id = xblObject.domNode.id;

	this._attributeNode = xblObject.getElementByXblID('attribute');
	this.filterDataID = this._attributeNode.getAttribute('filter-data');
	this.personIDRelation = this._attributeNode.getAttribute('person-id-relation');
	this.orgURLRelation = this._attributeNode.getAttribute('org-url-relation');
	this.autoRefresh = this._attributeNode.getAttribute('auto-refresh') == "true";
	this.executeConcept = this._attributeNode.getAttribute('execute-concept');

	this._modelID = this._attributeNode.getAttribute('model-id');
	this._innerDataID = this._attributeNode.getAttribute('inner-data-id');
	this._orgDataID = this._attributeNode.getAttribute('org-data-id');
	this._selectID = this._attributeNode.getAttribute('select-id');
	this._manageTypeCodesBindingID = this._attributeNode.getAttribute("manage-type-codes-binding-id");

	this.onGetCondition = this._attributeNode.getAttribute('onGetCondition');

	var innerData = this.getInnerData();
	innerData.attachEvent(justep.XData.EVENT_DATA_CHANGED, this._doValueChanged, xblObject);

	var orgData = this.getOrgData();
	orgData.attachEvent("onRefreshCreateParam", this._doOrgRefreshCreateParam, xblObject);

	var select = this.getInnerSelect();
	select.attachEvent("onDropdown", this._doSelectDropdown, xblObject);
	select.attachEvent("onShowNodeImg", this._doSelectShowNodeImg, xblObject);
	
	select.grid.hasChildrenCallback = this._selectRowHasChildren;
};

appCommon.component.ExtOrgFilter.prototype._doSelectDropdown = function(event) {
	if (!event.source.isLoadData) {
		var orgData = this.getOrgData();
		this._addCurrentPerson();
		event.source.isLoadData = orgData.loadTreeData(justep.XData.IS_TREE_ROOT);
	}

	var value = this.getValue();
	if (!value) {
		this.getInnerData().setValue("value", '本人');
		this.getInnerSelect().changeRowsStatus();
	}
}

appCommon.component.ExtOrgFilter.prototype._addCurrentPerson = function(event) {
	var orgData = this.getOrgData();
	justep.XData.disableControls();
	try{
		var personID = justep.Context.getCurrentPersonID();
		orgData.insert(personID, 0);
		orgData.setValue('sFID', '本人', personID);
		orgData.setValue('sName', '本人', personID);
		orgData.setValue('sCode', justep.Context.getCurrentPersonCode(), personID);
		orgData.setValue('sOrgKindID', 'psn', personID);
		orgData.setValue('sValidState', '1', personID);
		this.getInnerSelect().setNodeLoadSuccess(personID);
	} finally {
		justep.XData.enableControls();
	}
}

appCommon.component.ExtOrgFilter.prototype._doSelectShowNodeImg = function(event) {
	var orgData = justep.xbl(event.instance.element.id);
	if (!orgData)
		return;
	var orgKind = !event.grid._isVirtualRoot(event.rowId) ? orgData.getValue(
			'sOrgKindID', event.rowId) : 'root';
	var validState = !event.grid._isVirtualRoot(event.rowId) ? (1 == orgData
			.getValue('sValidState', event.rowId)) : true;
	return justep.Resource.getOrgImgURL(orgKind, !validState);
}

appCommon.component.ExtOrgFilter.prototype._selectRowHasChildren = function(
		event) {
	var grid = event.grid;
	var cell = event.cell;
	var nodeKind = cell.getValueByColId('sNodeKind');
	return !grid.isLeafNode(nodeKind);
}

appCommon.component.ExtOrgFilter.prototype._doOrgRefreshCreateParam = function(event) {
	var queryParam = event.param;
	var manageTypeCodes = this.getManageTypeCodes();

	if(justep.XData.IS_TREE_ROOT == this.getOrgData().defTreeOption.loadTreeParent && manageTypeCodes){
		queryParam.setString('manageCodes', manageTypeCodes);
	} else queryParam.deleteParam('manageCodes');
}

appCommon.component.ExtOrgFilter.prototype._doValueChanged = function(event) {
	if (event.column == "value") {
		appCommon.component.ExtOrgFilter.setFilterCondition(this.id, this
				.getFilterData(), this.personIDRelation, this.orgURLRelation,
				this.executeConcept, event.value, this.onGetCondition,
				this.autoRefresh);
	}
}

appCommon.component.ExtOrgFilter.prototype.getFilterName = function() {
	return appCommon.component.ExtOrgFilter.getFilterName(this.id);
}

appCommon.component.ExtOrgFilter.prototype.getCondition = function() {
	return appCommon.component.ExtOrgFilter.getCondition(this.getFilterData(), 
			this.personIDRelation, this.orgURLRelation, this.executeConcept, this.getValue());
}

appCommon.component.ExtOrgFilter.prototype.getFilterData = function() {
	return justep.xbl(this.filterDataID);
}

appCommon.component.ExtOrgFilter.prototype.getInnerSelect = function() {
	return xforms(this._selectID);
}

appCommon.component.ExtOrgFilter.prototype.getInnerData = function() {
	return justep.xbl(this._innerDataID);
}

appCommon.component.ExtOrgFilter.prototype.getOrgData = function() {
	return justep.xbl(this._orgDataID);
}

appCommon.component.ExtOrgFilter.prototype.getValue = function() {
	return this.getInnerData().getValue("value");
}

appCommon.component.ExtOrgFilter.prototype.getManageTypeCodesBinding = function() {
	return appCommon.component.ExtOrgFilter
			.getBinding(this._manageTypeCodesBindingID);
}

appCommon.component.ExtOrgFilter.prototype.getManageTypeCodes = function() {
	var binding = this.getManageTypeCodesBinding();
	var types = appCommon.ToolUtils.getValueFromBinding(binding);

	if (!types) 
		types = "systemManagement";
	return types;
}

/**
 * 设置过滤条件
 */
appCommon.component.ExtOrgFilter.setFilterCondition = function(id, filterData,
		personIDRelation, orgURLRelation, executeConcept, value,
		onGetConditionEvent, isRefresh) {
	var filterName = appCommon.component.ExtOrgFilter.getFilterName(id);
	var condition = appCommon.component.ExtOrgFilter._doGetCondition(id,
			filterData, personIDRelation, orgURLRelation, executeConcept,
			value, onGetConditionEvent);
	var oldCondition = filterData.getFilter(filterName);
	if (condition != oldCondition) {
		filterData.setFilter(filterName, condition);
		if (isRefresh)
			filterData.refreshData();
	}
}

/**
 * 获取binding
 */
appCommon.component.ExtOrgFilter.getBinding = function(bindingID) {
	if (!bindingID || bindingID == "")
		return null;
	var ref = xforms(bindingID);
	if (ref)
		return ref.binding;
}

/**
 * 构造filter name
 */
appCommon.component.ExtOrgFilter.getFilterName = function(id) {
	return "_" + id + "_filter";
}

/**
 * 构造条件
 */
appCommon.component.ExtOrgFilter.getCondition = function(filterData, personIDRelation,
		orgURLRelation, executeConcept, value) {
	if (!value)
		value = "本人";
	
	var condition = "";
	var values = appCommon.component.ExtOrgFilter.valuePreprocess(value);
	for (var i = 0; i < values.length; i++) {
		if (values[i].lastIndexOf('.') != -1)
			var kind = values[i].substring(values[i].lastIndexOf('.'));
		if (values[i] == "本人") {
			var personID = justep.Context.getCurrentPersonID();
			condition = appCommon.FilterUtils.joinFilter(condition, 
				(personIDRelation + " = '" + personID + "'"), 
				'OR');
			if (executeConcept) {
				condition = appCommon.FilterUtils.joinFilter(condition, 
					(filterData.getConceptAliasName() + ' IN (SELECT EXECUTE_CONCEPT.fMasterID AS EXECUTE_CONCEPT_fMasterID FROM ' + executeConcept + " EXECUTE_CONCEPT WHERE EXECUTE_CONCEPT.fCreatePsnID = '" + personID + "') "), 
					'OR'); 
			}
		} else if (kind) {
			condition = appCommon.FilterUtils.joinFilter(condition, 
					(orgURLRelation + " LIKE '" + values[i] + "%' "), 
					'OR');
		} else { // TODO 人员成员的过滤
			condition = appCommon.FilterUtils.joinFilter(condition, 
					(personIDRelation + " = '" + values[i] + "' "), 
					'OR');
		}
	}
	return condition;
}

appCommon.component.ExtOrgFilter.valuePreprocess = function(value) {
	var values = value.split(",");
	for (var i = values.length - 1; i >= 0; i--) {
		if (values[i] == "本人")
			continue;

		for (var j = 0; j < values.length; j++) {
			if (i == j)
				continue;
			if (values[i].length < values[j].length)
				continue;
			if (values[j].length == 0)
				continue;

			if (values[i].substring(0, values[j].length) == values[j]) {
				values.splice(i, 1);
				break;
			}
		}
	}
	return values;
}

/**
 * 获取条件
 */
appCommon.component.ExtOrgFilter._doGetCondition = function(id, filterData,
		personIDRelation, orgURLRelation, executeConcept, value,
		onGetConditionEvent) {
	var condition = appCommon.component.ExtOrgFilter.getCondition(filterData, 
			personIDRelation, orgURLRelation, executeConcept, value);
	var fun = justep.Function.get(onGetConditionEvent);
	if (fun) {
		var eventData = {
			"id" : id,
			"filterData" : filterData,
			"personIDRelation" : personIDRelation,
			"orgURLRelation" : orgURLRelation,
			"executeConcept" : executeConcept,
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
