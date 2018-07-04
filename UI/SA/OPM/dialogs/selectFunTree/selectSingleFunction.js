var selectSingleFunction = {};
selectSingleFunction.model1ModelConstructDone = function(event) {
	selectSingleFunction.loadTreeData();
};
selectSingleFunction._treeDataLoaded = false;
selectSingleFunction.loadTreeData = function() {
	if (!selectSingleFunction._treeDataLoaded) {
		var r = justep.Request.sendHttpRequest("/SA/OPM/dialogs/selectFunTree/getFunctionTree.j?type=tree");
		if (justep.Request.isSuccess(r)) {
			justep.xbl("dFunTree").loadXML(r.responseXML);
			selectSingleFunction._treeDataLoaded = true;
		} else {
			throw new Error("读取功能菜单失败！");
		}
	}
};

selectSingleFunction._listDataLoaded = false;
selectSingleFunction.loadListData = function() {
	if (!selectSingleFunction._listDataLoaded) {
		var r = justep.Request.sendHttpRequest("/SA/OPM/dialogs/selectFunTree/getFunctionTree.j?type=list");
		if (justep.Request.isSuccess(r)) {
			justep.xbl("dFunList").loadXML(r.responseXML);
			selectSingleFunction._listDataLoaded = true;
		} else {
			throw new Error("读取功能菜单失败！");
		}
	}
};

selectSingleFunction.btnOKClick = function(event) {
	var listDisplay = (document.getElementById("gridList").style.display == "");
	var selectedData;
	var currentRowID;
	if (listDisplay) {
		selectedData = justep.xbl("dFunList");
		currentRowID = selectedData.getCurrentRowId();
	} else {
		selectedData = justep.xbl("dFunTree");
		if (selectedData.getValue("isFolder") != "1")
			currentRowID = selectedData.getCurrentRowId();
	}
	if (!currentRowID) {
		justep.OpmUtils.showWarning("请选择功能！");
		return;
	}
	var r = new SimpleStore(null, selectedData.getColumnIds());
	r.insert(currentRowID, 0, 0, justep.OpmUtils.getRowDataExt(selectedData.getStore(), currentRowID));
	justep.xbl("windowReceiver").windowEnsure(r);
};
selectSingleFunction.btnCancelClick = function(event) {
	justep.xbl("windowReceiver").windowCancel();
};
selectSingleFunction.gridTreeShowNodeImg = function(event) {
	var isFolder = event.grid.getValueById(event.rowId, "isFolder");
	if (isFolder == "1") {
		return "/UI/SA/OPM/images/folder.gif";
	} else {
		return "/UI/SA/OPM/images/funPermission.gif";
	}
};
selectSingleFunction.clearTreeChecked = function() {
	var treeGrid = justep.xbl("gridTree").grid;
	var selectedRowIDs = treeGrid.getCheckedRowIds();
	for ( var i = 0; i < selectedRowIDs.length; i++)
		treeGrid.setItemChecked(selectedRowIDs[i], false);
};
selectSingleFunction.clearListChecked = function() {
	var listGrid = justep.xbl("gridList").grid;
	listGrid.checkAll(0);
};
selectSingleFunction.receiverReceive = function(event) {
	$("#inputSearch").focus();
	selectSingleFunction.clearTreeChecked();
	selectSingleFunction.clearListChecked();
};
selectSingleFunction.refreshData = function() {
	var searchText = $("#inputSearch").val();
	if (searchText) {
		document.getElementById("gridTree").style.display = "none";
		document.getElementById("gridList").style.display = "";
		selectSingleFunction.loadListData();
		var listGrid = justep.xbl("gridList").grid;
		listGrid.filterBy(listGrid.getColIndexById("activityFName"), searchText);
	} else {
		document.getElementById("gridList").style.display = "none";
		document.getElementById("gridTree").style.display = "";
	}
};
selectSingleFunction.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		selectSingleFunction.refreshData();
};
selectSingleFunction.imageSearchClick = function(event) {
	selectSingleFunction.refreshData();
};
selectSingleFunction.gridTreeRowDblClick = function(event){
	selectSingleFunction.btnOKClick(event);
};
selectSingleFunction.gridListRowDblClick = function(event){
	selectSingleFunction.btnOKClick(event);
};

