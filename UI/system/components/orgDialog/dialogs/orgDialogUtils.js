justep.OrgDialogUtils = {};

/*******************************************************************************
 * 过滤条件
 ******************************************************************************/

justep.OrgDialogUtils.joinFilter = function(operator, filter1, filter2) {
	return (filter1 != "" && filter2 != "") ? "(" + filter1 + ")" + operator + "(" + filter2 + ")" : filter1 + filter2;
};

/**************************************************************************************************
 * 组织树
 **************************************************************************************************/

justep.OrgDialogUtils.getVisibleOrgKinds = function(selectableOrgKinds) {
	function concatArray(array1, array2) {
		for (var i = 0; i < array2.length; i++) {
			var repeated = false;
			for (var j = 0; j < array1.length; j++) {
				if (array1[j] == array2[i]) {
					repeated = true;
					break;
				}
			}
			if (!repeated) array1.push(array2[i]);
		}
		return array1;
	};
	var s = selectableOrgKinds.split(",");
	for (var i = 0; i < s.length; i++) {
		s = concatArray(s, justep.Org.OrgKinds.getParents(s[i]));
	}
	return s.join(",");
};

justep.OrgDialogUtils.getOrgTreeGridImage = function(grid, id) {
	var orgKind = (id == "_is_root_") ? "root" : grid.getValueById(id, "sOrgKindID");
	var validState = (id == "_is_root_") ? 1 : grid.getValueById(id, "sValidState");
	var canSelect = justep.OrgDialogUtils.canSelect(id, orgKind);
	
	return justep.Org.OrgKinds.getImageURL(orgKind, validState != 1, !canSelect);
};

/**************************************************************************************************
 * 常用组
 **************************************************************************************************/

// 获取常用组下的第一级组织ID
justep.OrgDialogUtils.getSubOrgIDsByGroupID = function(grid, id) {
	var subIDs = grid.getSubItems(id).split(",");
	var orgIDs = [];
	if (id == justep.Org.OrgCommonGroup.GROUP_ROOT_ID) {
		for (var i = 0; i < subIDs.length; i++) {
			orgIDs = orgIDs.concat(grid.getSubItems(subIDs[i]).split(","));
		}
	} else {
		orgIDs = subIDs;
	}
	for (var i = orgIDs.length - 1; i >= 0; i--) {
		if (orgIDs[i] == "") {
			orgIDs.splice(i, 1);
		}
	}
	return orgIDs;
};

/**************************************************************************************************
 * 对话框内部
 **************************************************************************************************/

justep.OrgDialogUtils.initInputParam = function(defaultParam, eventData) {
	var inputParam = {};

	// 以默认参数项为主，融合输入参数项
	for (o in defaultParam) {
		inputParam[o] = defaultParam[o];
	};
	for (o in eventData) {
		inputParam[o] = eventData[o];
	};

	// rootFilter自动补全
	if (!inputParam.rootFilter) {
		if (inputParam.manageCodes) {
			inputParam.rootFilter = "1=1";
		} else {
			inputParam.rootFilter = "SA_OPOrg.sParent is null";
		}
	} else {
		if (inputParam.manageCodes) {
			justep.windowReceiver.windowCancel();
			var msg = new justep.Message(justep.Message.JUSTEP231059);
			throw justep.Error.create(msg);
		}
	}
	// orgKinds自动补全
	if (!inputParam.orgKinds) {
		inputParam.orgKinds = justep.Org.OrgKinds.getRealIDs().join(",");
	}
	
	return inputParam;
};

justep.OrgDialogUtils.getOrgKindsFilter = function(orgKinds) {
	if (orgKinds == "") return "1=0";
	return "SA_OPOrg.sOrgKindID in ('" + orgKinds.split(",").join("','") + "')";
};

justep.OrgDialogUtils.getSearchFilter = function(fields, text) {
	var searchText = text.replace(/'/g, "''").toUpperCase();
	var filters = [];
	for (var i = 0; i < fields.length; i++) {
		filters.push("(UPPER(" + fields[i] + ") LIKE '" + text + "%')");
	}
	return filters.join("OR");
};

justep.OrgDialogUtils.initOrgTree = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	dOrgTree.setTreeRootFilter(_inputParams.rootFilter);
	dOrgTree.setFilter("fixedFilter", _inputParams.filter);
	var visibleOrgKinds = justep.OrgDialogUtils.getVisibleOrgKinds(_inputParams.orgKinds);
	dOrgTree.setFilter("orgKindsFilter", justep.OrgDialogUtils.getOrgKindsFilter(visibleOrgKinds));
	dOrgTree.setFilter("validStateFilter", _inputParams.includeDisabledOrg ? "" : "SA_OPOrg.sValidState = 1");
};

justep.OrgDialogUtils.initOrgList = function(data) {
	var dOrgList = (data == null) ? justep.xbl("dOrgList") : data;
	dOrgList.setFilter("fixedFilter", _inputParams.filter);
	dOrgList.setFilter("orgKindsFilter", justep.OrgDialogUtils.getOrgKindsFilter(_inputParams.orgKinds));
	dOrgList.setFilter("validStateFilter", _inputParams.includeDisabledOrg ? "" : "SA_OPOrg.sValidState = 1");
};

justep.OrgDialogUtils.initSelected = function() {
	var selected = _inputParams.selected;
	var dSelected = justep.xbl("dSelected");
	var filters = ["(1=0)"];
	for (var i = 0; i < selected.length; i++) {
		filters.push("(SA_OPOrg = '" + selected[i] + "' or SA_OPOrg.sFID = '" + selected[i] + "')"); 
	}
	dSelected.setFilter("idFilter", filters.join("OR"));
	dSelected.refreshData();
	dSelected.setIndex(0);
};

justep.OrgDialogUtils.setCurrentMode = function(mode) {
	mode = _inputParams.listMode ? "list" : mode;

	if (_currentMode == mode) return;
	_currentMode = mode;
	
	if (_currentMode == "list") {
		$("#divOrgTree").hide();
		$("#divOrgList").show();
		$("#divNavigator").show();
		if (typeof(_inputParams.cascade) != "undefined") {
			$("#barCascade").hide();
		}
		justep.xbl("gridOrgList").onWindowResize();
	} else {
		$("#divOrgTree").show();
		$("#divOrgList").hide();
		$("#divNavigator").hide();
		if (typeof(_inputParams.cascade) != "undefined") {
			$("#barCascade").show();
		}
		justep.xbl("gridOrgTree").onWindowResize();
	}
};

justep.OrgDialogUtils.refreshOrgTree = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	dOrgTree.refreshData();
	
	// 默认展开第一级
	if (dOrgTree.getCurrentRowId()) {
		dOrgTree.getStore().expand(dOrgTree.getCurrentRowId());
	}
	// 常用组: 加载
	if (_inputParams.showCommonGroup) {
		var visibleOrgKinds = justep.OrgDialogUtils.getVisibleOrgKinds(_inputParams.orgKinds);
		var filter = _inputParams.filter;
		filter = justep.OrgDialogUtils.joinFilter("AND", filter, justep.OrgDialogUtils.getOrgKindsFilter(visibleOrgKinds));
		filter = justep.OrgDialogUtils.joinFilter("AND", filter, _inputParams.includeDisabledOrg ? "" : "SA_OPOrg.sValidState = 1");

		var groupData = justep.Org.OrgCommonGroup.loadGroupRoot(dOrgTree.getColumns(), filter);
		dOrgTree.loadJson(groupData, null, true);
	}
};

justep.OrgDialogUtils.refreshOrgList = function() {
	var dOrgList = justep.xbl("dOrgList");

	// 按检索关键字过滤
	var searchText = $("#inputSearch").val();
	var searchFilter = justep.OrgDialogUtils.getSearchFilter(["SA_OPOrg.sName","SA_OPOrg.sCode","SA_OPOrg.sFName"], searchText); 
	dOrgList.setFilter("searchFilter", searchFilter);
	dOrgList.refreshData();
};

justep.OrgDialogUtils.doOrgTreeRefreshCreateParam = function(event) {
	// 在树形刷新时设置业务管理权限
	if ((event.source.defTreeOption.loadTreeParent == justep.XData.IS_TREE_ROOT) && _inputParams.manageCodes) {
		event.param.setString("manageCodes", _inputParams.manageCodes);
		event.param.setBoolean("includeChildrenOfManage", false);
	} else {
		event.param.deleteParam("manageCodes");
		event.param.deleteParam("includeChildrenOfManage");
	}
	
	// 常用组：切换queryAction
	if (justep.Org.OrgCommonGroup.isGroupOrgID(event.source.defTreeOption.loadTreeParent)) {
		event.source.queryAction = "queryOrgCommonGroupAction";
		event.param.setString("parentID", event.source.defTreeOption.loadTreeParent);
	} else {
		event.source.queryAction = "queryOrgAction";
		event.param.deleteParam("parentID");
	}
};

justep.OrgDialogUtils.doOrgListRefreshCreateParam = function(event){
	// 在列表刷新时设置业务管理权限
	if (_inputParams.manageCodes) {
		event.param.setString("manageCodes", _inputParams.manageCodes);
		event.param.setBoolean("includeChildrenOfManage", true);
	} else {
		event.param.deleteParam("manageCodes");
		event.param.deleteParam("includeChildrenOfManage");
	} 
};

//获得对应当前显示模式的数据集
justep.OrgDialogUtils.getCurrentData = function() {
	return (_currentMode == "tree") ? justep.xbl("dOrgTree") : justep.xbl("dOrgList");
};

// 获得对应当前显示模式的grid
justep.OrgDialogUtils.getCurrentGrid = function() {
	return (_currentMode == "tree") ? justep.xbl("gridOrgTree") : justep.xbl("gridOrgList");
};

// 是否为可选择组织单元
justep.OrgDialogUtils.canSelect = function(id, orgKind) {
	orgKind = (id == "_is_root_") ? "root" : orgKind;
	return _inputParams.orgKinds ? (("," + _inputParams.orgKinds + ",").indexOf("," + orgKind + ",") >= 0) : false;
};

//快速获得grid数据，不刺激grid渲染
justep.OrgDialogUtils.getGridValueBySmart = function(grid, rowIndex, fieldName) {
	grid = grid.getDhtmlxGrid ? grid.getDhtmlxGrid() : grid;
	var rowID = grid.getRowId(rowIndex);
	if (grid.isRowRendered && !grid.isRowRendered(rowID)) {
		return grid.rowsBuffer[rowIndex].data[fieldName] ? grid.rowsBuffer[rowIndex].data[fieldName].value : null;
	} else {
		return grid.getValueById(rowID, fieldName);
	}
};





