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

appCommon.component.orgSelectDialogController = function() {
	this.orgTreeData = null;
	this.orgListData = null;
	this.inputSearch = null;
	this.trList = null;
	this.trTree = null;
	this.pageNavigator = null;

	this.manageTypeCodes = null;
	this.displayableOrgKinds = null;
	this.selectableOrgKinds = null;
	this.rootFilter = null;
	this.fixedFilter = null;
	this.onlyMainPsm = false;

	this.currentData = null;
	this.onCurrentDataChanged = null;
}

appCommon.component.orgSelectDialogController.QUERY_KIND_TREE_ROOT = "treeRoot";
appCommon.component.orgSelectDialogController.QUERY_KIND_TREE = "tree";
appCommon.component.orgSelectDialogController.QUERY_KIND_TREE_GROUP_ROOT = "treeGroupRoot";
appCommon.component.orgSelectDialogController.QUERY_KIND_TREE_GROUP = "treeGroup";
appCommon.component.orgSelectDialogController.QUERY_KIND_DETAILS = "details"

appCommon.component.orgSelectDialogController.ORG_KIND_GROUP = "grp";
appCommon.component.orgSelectDialogController.GROUP_ROOT = "___group__root___";
appCommon.component.orgSelectDialogController.GROUP_IMAGE = "/UI/appCommon/images/folder.gif";

appCommon.component.orgSelectDialogController.MAIN_PSM_FILTER = "(SA_OPOrg.sOrgKindID <> 'psm' or SA_OPOrg.sParent = SA_OPPerson.sMainOrgID)";
appCommon.component.orgSelectDialogController.VALID_STATE_FILTER = "SA_OPOrg.sValidState = 1";
appCommon.component.orgSelectDialogController.DEFAULT_ROOT_FILTER = "SA_OPOrg.sParent is null";
appCommon.component.orgSelectDialogController.DEFAULT_ORG_KINDS = "ogn,dpt,pos,psm";

appCommon.component.orgSelectDialogController.prototype.receiveData = function(
		data) {
	if (!data) {
		alert("没有定义对话框参数");
		return;
	}

	var needInit = false;

	needInit = this.setInitValue("rootFilter", data.rootFilter,
			appCommon.component.orgSelectDialogController.DEFAULT_ROOT_FILTER)
			|| needInit;
	needInit = this.setInitValue("fixedFilter", data.fixedFilter, "")
			|| needInit;
	needInit = this.setInitValue("manageTypeCodes", data.manageTypeCodes, "")
			|| needInit;
	needInit = this.setInitValue("displayableOrgKinds",
			data.displayableOrgKinds,
			appCommon.component.orgSelectDialogController.DEFAULT_ORG_KINDS)
			|| needInit;
	needInit = this.setInitValue("selectableOrgKinds", data.selectableOrgKinds,
			appCommon.component.orgSelectDialogController.DEFAULT_ORG_KINDS)
			|| needInit;
	needInit = this.setInitValue("onlyMainPsm", data.onlyMainPsm, false)
			|| needInit;

	if (needInit)
		this.initAll();
	this.inputSearch.focus();
}

appCommon.component.orgSelectDialogController.prototype.initAll = function() {
	this.inputSearch.value = "";
	this.orgListData.setFilter("searchFilter", "");

	this.currentData = this.orgTreeData;
	this.setComponentsDisplay();

	this.initOrgTreeFilter();
	this.orgTreeData.refreshData();
	this.initOrgListFilter();

	if (this.orgTreeData.getCurrentRowId())
		this.orgTreeData.getStore().expand(this.orgTreeData.getCurrentRowId());
}

appCommon.component.orgSelectDialogController.prototype.setInitValue = function(
		variable, initValue, defaultValue) {
	var newValue;
	if (initValue)
		newValue = initValue;
	else
		newValue = defaultValue;
	var changed = (this[variable] != newValue);
	if (changed)
		this[variable] = newValue;

	return changed;
}

appCommon.component.orgSelectDialogController.prototype.isListMode = function() {
	return (this.currentData == this.orgListData);
}

appCommon.component.orgSelectDialogController.prototype.isTreeMode = function() {
	return (this.currentData == this.orgTreeData);
}

appCommon.component.orgSelectDialogController.prototype.setComponentsDisplay = function() {
	this.trList.style.display = this.isListMode() ? "" : "none";
	this.pageNavigator.style.display = this.isListMode() ? "" : "none";
	this.trTree.style.display = this.isTreeMode() ? "" : "none";
}

appCommon.component.orgSelectDialogController.prototype.initOrgTreeFilter = function() {
	this.orgTreeData.setTreeRootFilter(this.rootFilter);
	this.orgTreeData.setFilter("fixedFilter", this.fixedFilter);
	this.orgTreeData.setFilter("diaplayableFilter", this
			.getOrgKindsFilter(this.displayableOrgKinds));

	this.orgTreeData.setFilter("validStateFilter",
			appCommon.component.orgSelectDialogController.VALID_STATE_FILTER);
	if (this.onlyMainPsm)
		this.orgTreeData.setFilter("onlyMainPsmFilter",
				appCommon.component.orgSelectDialogController.MAIN_PSM_FILTER);
}

appCommon.component.orgSelectDialogController.prototype.getOrgRootFilter = function() {
	var rootFilter;
	for (var i = 0; i < this.orgTreeData.getCount(); i++) {
		var rowID = this.orgTreeData.getRowId(i);
		var orgKind = this.orgTreeData.getValue("sOrgKindID", rowID);
		if (orgKind == appCommon.component.orgSelectDialogController.ORG_KIND_GROUP)
			continue;
		var filter = "sFID like '" + this.orgTreeData.getValue("sFID", rowID)
				+ "%'";
		rootFilter = appCommon.FilterUtils.joinFilter(rootFilter, filter, "or");
	}
	if (!rootFilter)
		rootFilter = "1=0";
	return rootFilter;
}

appCommon.component.orgSelectDialogController.prototype.initOrgListFilter = function() {
	this.orgListData.setFilter("rootFilter", this.getOrgRootFilter());
	this.orgListData.setFilter("fixedFilter", this.fixedFilter);
	this.orgListData.setFilter("displayableFilter", this
			.getOrgKindsFilter(this.displayableOrgKinds));
	this.orgListData.setFilter("selectableFilter", this
			.getOrgKindsFilter(this.selectableOrgKinds));

	this.orgListData.setFilter("validStateFilter",
			appCommon.component.orgSelectDialogController.VALID_STATE_FILTER);
	if (this.onlyMainPsm)
		this.orgListData.setFilter("onlyMainPsmFilter",
				appCommon.component.orgSelectDialogController.MAIN_PSM_FILTER);
}

appCommon.component.orgSelectDialogController.prototype.getOrgKindsFilter = function(
		orgKinds) {
	if (!orgKinds)
		return "";
	var orgKindsArray = orgKinds.split(",");
	return "sOrgKindID in ('" + orgKindsArray.join("','") + "')";
}

appCommon.component.orgSelectDialogController.prototype.initComponentsEvent = function() {

	var orgListGrid = xforms(this.orgListData.getStore().controlId);
	var orgTreeGrid = xforms(this.orgTreeData.getStore().controlId);

	orgListGrid.grid._hintCallback = this.doGridHintEvent;
	orgTreeGrid.grid._hintCallback = this.doGridHintEvent;

	var self = this;

	orgListGrid.grid.bindColHTMLCallback(orgListGrid.grid.controlId,
			"sOrgKindID", function(event) {
				return self.doListGridSOrgKindIDRenderEvent(event);
			});

	/*
	orgTreeGrid.attachEvent("onShowNodeImg", function(event) {
		return self.doTreeGridShowNodeImgEvent(event);
	});
	this.inputSearch.attachEvent("onchange", function(event) {
		self.doInputSearchChangeEvent(event);
	});
	this.inputSearch.attachEvent("onkeydown", function(event) {
		self.doInputSearchKeyDownEvent(event);
	});

	this.orgTreeData.attachEvent(justep.XData.EVENT_REFRESHDATA_CREATEPARAM,
			function(event) {
				self.doOrgTreeDataRefreshCreateParamEvent(event);
			});
	*/
	orgTreeGrid.attachEvent("onShowNodeImg", function(event) {
		return self.doTreeGridShowNodeImgEvent(event);
	});
	$(this.inputSearch).change(function(event) {
		self.doInputSearchChangeEvent(event);
	});
	$(this.inputSearch).keydown(function(event) {
		self.doInputSearchKeyDownEvent(event);
	});

	this.orgTreeData.attachEvent(justep.XData.EVENT_REFRESHDATA_CREATEPARAM,
			function(event) {
				self.doOrgTreeDataRefreshCreateParamEvent(event);
			});
}

appCommon.component.orgSelectDialogController.prototype.doGridHintEvent = function(
		event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
}

appCommon.component.orgSelectDialogController.prototype.doListGridSOrgKindIDRenderEvent = function(
		event) {
	return "<img src='"
			+ justep.Request.convertURL(justep.Resource
					.getOrgImgURL(event.value), true) + "'/>";
}

appCommon.component.orgSelectDialogController.prototype.doTreeGridShowNodeImgEvent = function(
		event) {
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	if (orgKind == appCommon.component.orgSelectDialogController.ORG_KIND_GROUP)
		return appCommon.component.orgSelectDialogController.GROUP_IMAGE;
	else
		return justep.Resource.getOrgImgURL(orgKind);
}

appCommon.component.orgSelectDialogController.prototype.doInputSearchChangeEvent = function(
		event) {
	this.searchTextChange((event.srcElement || event.target).value);
}

appCommon.component.orgSelectDialogController.prototype.doInputSearchKeyDownEvent = function(
		event) {
	if (event.keyCode == 13)
		this.searchTextChange((event.srcElement || event.target).value);
}

appCommon.component.orgSelectDialogController.prototype.searchTextChange = function(
		text) {
	if (text.indexOf("'") != -1) {
		alert("搜索字符串中不能包含单引号");
		return;
	}

	this.currentData = (text == "" ? this.orgTreeData : this.orgListData);
	this.setComponentsDisplay();

	if (this.isListMode()) {
		var searchFilter = appCommon.FilterUtils.getMultiLikeFilter(
				"SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPOrg.sFName", text);
		if (searchFilter != this.orgListData.getFilter("searchFilter")) {
			this.orgListData.setFilter("searchFilter", searchFilter);
			this.orgListData.refreshData();
		}
	}

	if (this.onCurrentDataChanged)
		this.onCurrentDataChanged();
}

appCommon.component.orgSelectDialogController.prototype.doOrgTreeDataRefreshCreateParamEvent = function(
		event) {
	var orgKind = event.source.getValue("sOrgKindID",
			event.source.defTreeOption.loadTreeParent);

	if (event.source.defTreeOption.loadTreeParent == justep.XData.IS_TREE_ROOT) {
		event.param
				.setString(
						"queryKind",
						appCommon.component.orgSelectDialogController.QUERY_KIND_TREE_ROOT);
		if (this.manageTypeCodes)
			event.param.setString("manageCodes", this.manageTypeCodes);
		else
			event.param.deleteParam("manageCodes");
	} else if (event.source.defTreeOption.loadTreeParent == appCommon.component.orgSelectDialogController.GROUP_ROOT) {
		event.param
				.setString(
						"queryKind",
						appCommon.component.orgSelectDialogController.QUERY_KIND_TREE_GROUP_ROOT);
	} else if (orgKind == appCommon.component.orgSelectDialogController.ORG_KIND_GROUP) {
		event.source.setTreeFilter(appCommon.FilterUtils.joinFilter(this
				.getOrgKindsFilter(this.selectableOrgKinds), this
				.getOrgRootFilter(), "and"));
		var filter = event.source.buildFilter();
		if (filter)
			event.param.setString('filter', filter);
		else
			event.param.deleteParam('filter');

		event.param
				.setString(
						"queryKind",
						appCommon.component.orgSelectDialogController.QUERY_KIND_TREE_GROUP);
		event.param.setString("groupParentID",
				event.source.defTreeOption.loadTreeParent);
	} else {
		event.param.setString("queryKind",
				appCommon.component.orgSelectDialogController.QUERY_KIND_TREE);
	}
}

appCommon.component.orgSelectDialogController.prototype.checkSelectedOrgKind = function() {
	if (!this.currentData)
		return false;
	var orgKind = this.currentData.getValue("sOrgKindID");
	if (!orgKind)
		return false;
	return (this.selectableOrgKinds.indexOf(orgKind) >= 0);
}

appCommon.component.orgSelectDialogController.prototype.isGroup = function() {
	if (!this.currentData)
		return false;
	var orgKind = this.currentData.getValue("sOrgKindID");
	if (!orgKind)
		return false;
	return (orgKind == appCommon.component.orgSelectDialogController.ORG_KIND_GROUP)
			&& (this.currentData.getCurrentRowId() != appCommon.component.orgSelectDialogController.GROUP_ROOT);
}