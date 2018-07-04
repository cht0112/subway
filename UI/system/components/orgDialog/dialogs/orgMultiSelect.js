var orgMultiSelect = {};

// 布局自适应，左边部分自动拉伸
orgMultiSelect.refreshLayout = function() {
	justep.xbl("rootBorderLayout").onWindowResize();
	justep.xbl("rootBorderLayout").leftEl.attr("size", Math.round($(window).width() / 2) - 50);
};
$(window).resize(orgMultiSelect.refreshLayout);
orgMultiSelect.modelXBLLoaded = function(event){
	orgMultiSelect.refreshLayout();
};

// 当前显示模式: tree | list
_currentMode = null;

/**********************************************************************************
对话框入参格式
	{
		"filter": 					过滤条件									string			
		"rootFilter": 				根过滤条件 								string			
		"manageCodes": 				管理权限									string			
		"orgKinds":					可以选择的组织单元类型（逗号分隔）			string			
		"includeDisabledOrg":		是否包含禁用的组织单元 					boolean
		"listMode":					列表模式									boolean
		"showCommonGroup":			是否显示常用组							boolean
		"cascade":					默认是否级联选择							boolean
		"selected": 				已选择的组织(SA_OPOrg)，sID或sFID数组 	string[]
	}
***********************************************************************************/

_inputParams = _defaultParams = {
	"filter": "",
	"rootFilter": "SA_OPOrg.sParent is null",
	"manageCodes": "",
	"orgKinds": "",
	"includeDisabledOrg": false,
	"listMode": false,
	"showCommonGroup": false,
	"cascade": true,
	"selected": []
};

orgMultiSelect.windowReceiverReceive = function(event){
	var dOrgTree = justep.xbl("dOrgTree");
	var dOrgList = justep.xbl("dOrgList");
	var	dOrgBackground = justep.xbl("dOrgBackground");
	
	// 初始化参数
	_inputParams = justep.OrgDialogUtils.initInputParam(_defaultParams, event.data);

	// 初始化界面组件
	$("#inputSearch").val("");
	$("#cbCascade").attr("checked", _inputParams.cascade == true);  

	// 初始化显示模式
	justep.OrgDialogUtils.setCurrentMode("tree");

	// 初始化数据集
	justep.OrgDialogUtils.initSelected();
	justep.OrgDialogUtils.initOrgTree();
	justep.OrgDialogUtils.initOrgList();
	justep.OrgDialogUtils.initOrgList(dOrgBackground);

	// 初始刷新
	_inputParams.listMode ? justep.OrgDialogUtils.refreshOrgList() : justep.OrgDialogUtils.refreshOrgTree();

	// 默认焦点
	$("#inputSearch").focus();
};

orgMultiSelect.dOrgTreeRefreshCreateParam = function(event){
	justep.OrgDialogUtils.doOrgTreeRefreshCreateParam(event);
};

orgMultiSelect.dOrgListRefreshCreateParam = function(event){
	justep.OrgDialogUtils.doOrgListRefreshCreateParam(event);
};

orgMultiSelect.btnSearchClick = function(event){
	justep.OrgDialogUtils.setCurrentMode($("#inputSearch").val() ? "list" : "tree");
	if (_currentMode == "list") {
		justep.OrgDialogUtils.refreshOrgList();
	} else {
		orgMultiSelect.refreshGridChecked();
	}
};

orgMultiSelect.inputSearchKeydown = function(event){
	if (event.keyCode == 13) {
		orgMultiSelect.btnSearchClick(event);
	};
};

orgMultiSelect.gridOrgTreeRowHasChildren = function(event){
	return (event.cell.getValueByColId("sOrgKindID") != "psm");
};

orgMultiSelect.gridOrgTreeShowNodeImg = function(event){
	return justep.OrgDialogUtils.getOrgTreeGridImage(event.grid, event.rowId);
};

orgMultiSelect.gridOrgTreeCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

orgMultiSelect.gridOrgTreeRowDblClick = function(event){
	if (!event.rowID || event.rowID == "__filler__") return;
	
	var checked = !(event.grid.isCheckedRow_treegrid(event.rowID));
	event.checked = checked;
	orgMultiSelect.gridOrgTreeRowChecked(event);
};

orgMultiSelect.gridOrgListCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

orgMultiSelect.gridOrgList_sOrgKindIDRender = function(event) {
	return justep.Org.OrgKinds.getLabel(event.value);
};

orgMultiSelect.gridOrgListRowDblClick = function(event){
	var checked = !event.grid.isCheckedRow(event.rowID);
	event.checked = checked;
	orgMultiSelect.gridOrgListRowChecked(event);
};

orgMultiSelect.gridSelectedCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};

orgMultiSelect.gridSelected_sOrgKindIDRender = function(event) {
	return justep.Org.OrgKinds.getLabel(event.value);
};

orgMultiSelect.getSelectedFullIDs = function() {
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var fullIDs = [];
	for (var i = 0; i < gridSelected.getRowsNum(); i++) {
		var fullID = justep.OrgDialogUtils.getGridValueBySmart(gridSelected, i, "sFID");
		fullIDs.push(fullID);
	}
	return fullIDs;
};

orgMultiSelect.isSelected = function(selectedFullIDs, id) {
	for (var i = 0; i < selectedFullIDs.length; i++) {
		var fullID = selectedFullIDs[i];
		if (fullID.substring(fullID.lastIndexOf("/")).indexOf("/" + id + ".") != -1) {
			return 1;
		} else if (_currentMode == "tree" && fullID.indexOf("/" + id + ".") != -1) {
			return 0.5;
		} 
	}
	return 0;
};

orgMultiSelect.refreshGridChecked = function(ids) {
	var grid = justep.OrgDialogUtils.getCurrentGrid().getDhtmlxGrid();
	if (!ids) {
		if (grid.isTreeGrid()) {
			ids = grid.getAllSubItems().split(",");
		} else {
			ids = grid.getAllRowIds(",").split(",");
		}
	}
	var selectedFullIDs = orgMultiSelect.getSelectedFullIDs();
	for (var o in ids) {
		var id = ids[o];
		if (grid.isRowRendered(id)) {
			// 常用组: 刷新选中
			var realOrgID = justep.Org.OrgCommonGroup.getOrgIDOfGroupOrgID(id);
			var selected = orgMultiSelect.isSelected(selectedFullIDs, realOrgID) > 0;
			grid.setItemChecked(id, selected, false);
			// 选中常用组虚拟节点
			if (selected && justep.Org.OrgCommonGroup.isGroupOrgID(id)) {
				grid.setItemChecked(justep.Org.OrgCommonGroup.GROUP_ROOT_ID, true, false);
				grid.setItemChecked(justep.Org.OrgCommonGroup.getGroupIDOfGroupOrgID(id), true, false);
			}
		} 
	}
};

orgMultiSelect.createSelectedRowData = function(grid, rowIndex) {
	var rowID = grid.getRowId(rowIndex);
	// 常用组：数据还原
	var realOrgID = justep.Org.OrgCommonGroup.getOrgIDOfGroupOrgID(rowID);
	var row = {"userdata": {"id": {"value": realOrgID}}};
	var columns = grid.getColumnIds().split(",");
	for (var j = 0; j < columns.length; j++) {
		var column = columns[j];
		var value = null; 
		if (column == "sParent") {
			var fullID = justep.OrgDialogUtils.getGridValueBySmart(grid, rowIndex, "sFID"); 
			value = justep.Org.OrgUtils.getOrgID(justep.Org.OrgUtils.getParentPath(fullID));
		} else {
			value = justep.OrgDialogUtils.getGridValueBySmart(grid, rowIndex, column);
		}
		row[column] = {
			"value": value
		};
	}
	return row;
};

orgMultiSelect.addSelectedItems = function(grid, ids) {
	grid = grid.getDhtmlxGrid ? grid.getDhtmlxGrid() : grid;
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var lastID = null;

	var rowsData = {rows: []};
	for (var i = 0; i < (ids ? ids.length : grid.getRowsNum()); i++) {
		// 如果指定要加哪些，就从ids中获取，否则遍历全部
		var rowIndex = ids ? grid.getRowIndex(ids[i]) : i;
		var rowID = grid.getRowId(rowIndex);
		var orgKind = justep.OrgDialogUtils.getGridValueBySmart(grid, rowIndex, "sOrgKindID");
		if (justep.OrgDialogUtils.canSelect(rowID, orgKind)) {
			lastID = rowID;
			if (gridSelected.getRowIndex(rowID) == -1) {
				var rowData = orgMultiSelect.createSelectedRowData(grid, rowIndex);
				rowsData.rows.push(rowData);
			}
		}
	}

	if (rowsData.rows.length > 0) {
		gridSelected.loadData(null, rowsData, null, true, false, "json");
	}
	if (lastID != null) {
		gridSelected.setIndex(gridSelected.getRowIndex(lastID));
	}
};

orgMultiSelect._limitOfDirectDeleteRows = 100;
orgMultiSelect.deleteSelectItems = function(ids) {
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var oldIndex = gridSelected.getIndex();
	
	if (ids.length < orgMultiSelect._limitOfDirectDeleteRows) {
		// 立即删除
		for (var i = gridSelected.getRowsNum() - 1; i >= 0; i--) {
			var rowID = gridSelected.getRowId(i);
			if (justep.Array.indexOf(ids, rowID) != -1) {
				gridSelected.deleteRow(rowID);
			} 
		}
	} else {
		// 重新加载
		var rowsData = {rows: []};
		for (var i = gridSelected.getRowsNum() - 1; i >= 0; i--) {
			var rowID = gridSelected.getRowId(i);
			if (justep.Array.indexOf(ids, rowID) == -1) {
				var rowData = orgMultiSelect.createSelectedRowData(gridSelected, i);
				rowsData.rows.unshift(rowData);
			}
		}
		gridSelected.loadData(null, rowsData, null, false, false, "json");
	}
	gridSelected.setIndex(oldIndex);
};

orgMultiSelect.clearSelectItems = function() {
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	gridSelected.loadData(null, {rows: []}, null, false, false, "json");
};

orgMultiSelect.selectAllByOrgList = function() {
	var grid = justep.OrgDialogUtils.getCurrentGrid().getDhtmlxGrid();
	orgMultiSelect.addSelectedItems(grid);
};

orgMultiSelect.queryByOrgBackground = function(filter) {
	var data = justep.xbl("dOrgBackground");
	var oldFilter = data.getFilter("searchFilter");
	if (oldFilter != filter || !data.loaded) {
		data.setFilter("searchFilter", filter);
		data.refreshData();
	}
};

orgMultiSelect.selectByOrgBackground = function(filter) {
	var data = justep.xbl("dOrgBackground");
	var grid = data.getStore();
	orgMultiSelect.queryByOrgBackground(filter);
	orgMultiSelect.addSelectedItems(grid);
};

orgMultiSelect.selectByCurrentGrid = function(id) {
	if (!id) return;
	var grid = justep.OrgDialogUtils.getCurrentGrid().getDhtmlxGrid();
	var cascade = $("#cbCascade").attr("checked");
	if (_currentMode == "list" || !cascade) {
		// 列表模式或树形非级联模式
		orgMultiSelect.addSelectedItems(grid, [id]);
	} else {
		// 树级联模式
		// 常用组： 选择
		var ids = [id];
		if (grid.getValueById(id, "sOrgKindID") == justep.Org.OrgCommonGroup.GROUP_ORGKIND) {
			ids = justep.OrgDialogUtils.getSubOrgIDsByGroupID(grid, id);
		}
		if (ids.length != 0) {
			var filters = [];
			for (var i = 0; i < ids.length; i++) {
				var fullID = grid.getValueById(ids[i], "sFID");
				filters.push("(sFID like '" + fullID + "%')");
			}
			orgMultiSelect.selectByOrgBackground(filters.join("OR"));
		}
	}
};

orgMultiSelect.unSelectByCurrentGrid = function(id) {
	if (!id) return;

	var grid = justep.OrgDialogUtils.getCurrentGrid().getDhtmlxGrid();
	var deleteIDs = [justep.Org.OrgCommonGroup.getOrgIDOfGroupOrgID(id)];
	var cascade = $("#cbCascade").attr("checked");
	if (_currentMode == "tree" && cascade) {
		// 常用组：取消选择
		var ids = [id];
		if (grid.getValueById(id, "sOrgKindID") == justep.Org.OrgCommonGroup.GROUP_ORGKIND) {
			ids = justep.OrgDialogUtils.getSubOrgIDsByGroupID(grid, id);
		}
		var filters = [];
		for (var i = 0; i < ids.length; i++) {
			var fullID = grid.getValueById(ids[i], "sFID");
			filters.push("(sFID like '" + fullID + "%')");
		}
		orgMultiSelect.queryByOrgBackground(filters.join("OR"));
		
		var data = justep.xbl("dOrgBackground");
		for (var i = 0; i < data.getCount(); i++) {
			deleteIDs.push(data.getID(i));
		}
	}

	orgMultiSelect.deleteSelectItems(deleteIDs);
};

orgMultiSelect.btnSelectAllClick = function(event){
	if (_currentMode == "list") {
		orgMultiSelect.selectAllByOrgList();
	} else {
		orgMultiSelect.selectByOrgBackground();
	}
	orgMultiSelect.refreshGridChecked();
};

orgMultiSelect.btnSelectClick = function(event){
	var grid = justep.OrgDialogUtils.getCurrentGrid().getDhtmlxGrid();
	var id = grid.getRowId(grid.getIndex());
	orgMultiSelect.selectByCurrentGrid(id);
	orgMultiSelect.refreshGridChecked();
};

orgMultiSelect.btnUnSelectClick = function(event){
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid(); 
	var idx = gridSelected.getIndex();
	var id = gridSelected.getRowId(idx);
	if (typeof(id) == "undefined") {
		return;
	}
	var ids = [id];
	orgMultiSelect.deleteSelectItems(ids);
	orgMultiSelect.refreshGridChecked();
};

orgMultiSelect.btnClearClick = function(event){
	orgMultiSelect.clearSelectItems();
	orgMultiSelect.refreshGridChecked();
};

orgMultiSelect.gridOrgTreeRowChecked = function(event){
	var checked = event.checked;
	if (checked) {
		orgMultiSelect.selectByCurrentGrid(event.rowID);
	} else {
		orgMultiSelect.unSelectByCurrentGrid(event.rowID);
	}
	orgMultiSelect.refreshGridChecked();
};

orgMultiSelect.gridOrgListRowChecked = function(event){
	var checked = event.checked;
	if (checked) {
		orgMultiSelect.selectByCurrentGrid(event.rowID);
	} else {
		orgMultiSelect.unSelectByCurrentGrid(event.rowID);
	}
	orgMultiSelect.refreshGridChecked();
};

orgMultiSelect.gridSelectedRowDblClick = function(event){
	setTimeout(function(){
		orgMultiSelect.btnUnSelectClick();
	}, 1);
};

orgMultiSelect.btnCancelClick = function(event){
	justep.xbl("windowReceiver").windowCancel();
};

orgMultiSelect.btnOkClick = function(event){
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var	ids = gridSelected.getAllRowIds(",").split(",");
		
	var r = justep.xbl("windowReceiver").getMappingData("dSelected", ids);
	justep.xbl("windowReceiver").windowEnsure(r);
};

orgMultiSelect.moveSelectedRow = function(fromIndex, toIndex) {
	if (fromIndex < 0) {
		return;
	}
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var rowsData = {rows: []};
	for (var i = 0; i < gridSelected.getRowsNum(); i++) {
		rowsData.rows.push(orgMultiSelect.createSelectedRowData(gridSelected, i));
	}
	var rowData = rowsData.rows[fromIndex];
	rowsData.rows.splice(fromIndex, 1);
	rowsData.rows.splice(toIndex, 0, rowData);
	gridSelected.loadData(null, rowsData, null, false, false, "json");
};

orgMultiSelect.btnMoveFirstClick = function(event){
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var fromIndex = gridSelected.getIndex();
	orgMultiSelect.moveSelectedRow(fromIndex, 0);
};

orgMultiSelect.btnMoveUpClick = function(event){
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var fromIndex = gridSelected.getIndex();
	if (fromIndex > 0) {
		orgMultiSelect.moveSelectedRow(fromIndex, fromIndex - 1);
	}
};

orgMultiSelect.btnMoveDownClick = function(event){
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var fromIndex = gridSelected.getIndex();
	if (fromIndex < gridSelected.getRowsNum() - 1) {
		orgMultiSelect.moveSelectedRow(fromIndex, fromIndex + 1);
	}
};

orgMultiSelect.btnMoveLastClick = function(event){
	var gridSelected = justep.xbl("gridSelected").getDhtmlxGrid();
	var fromIndex = gridSelected.getIndex();
	orgMultiSelect.moveSelectedRow(fromIndex, gridSelected.getRowsNum());
};

orgMultiSelect.gridOrgTreeRowValueChanged = function(event){
	orgMultiSelect.refreshGridChecked([event.rowID]);
};

orgMultiSelect.gridOrgListRowValueChanged = function(event){
	orgMultiSelect.refreshGridChecked([event.rowID]);
};



