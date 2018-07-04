var selectSingleProcess = {};
selectSingleProcess.model1ModelConstructDone = function(event) {
	selectSingleProcess.loadTreeData();
};
selectSingleProcess._treeDataLoaded = false;
selectSingleProcess.loadTreeData = function() {
	if (!selectSingleProcess._treeDataLoaded) {
			var r = justep.Request.sendHttpRequest("/UI/system/dialog/process/getProcessTree.j?type=tree");
			if (justep.Request.isSuccess(r)) {
				justep.xbl("dFunTree").loadXML(r.responseXML);
				selectSingleProcess._treeDataLoaded = true;
				return true;
			} else {
				var msg = new justep.Message(justep.Message.JUSTEP230060);
				throw justep.Error.create(msg);
			}
	}
};

selectSingleProcess._listDataLoaded = false;
selectSingleProcess.loadListData = function() {
	if (!selectSingleProcess._listDataLoaded) {
			var r = justep.Request.sendHttpRequest("/UI/system/dialog/process/getProcessTree.j?type=list");
			if (justep.Request.isSuccess(r)) {
				justep.xbl("dFunList").loadXML(r.responseXML);
				selectSingleProcess._listDataLoaded = true;
				return true;
			} else {
				var msg = new justep.Message(justep.Message.JUSTEP230060);
				throw justep.Error.create(msg);
			}
	}
};

selectSingleProcess.btnOKClick = function(event) {
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
		alert("请选择流程！");
		return;
	}
	var data = {"process": selectedData.getValue("process", currentRowID), "label" : selectedData.getValue("label", currentRowID)};
	justep.xbl("windowReceiver").windowEnsure(data);
};
selectSingleProcess.btnCancelClick = function(event) {
	justep.xbl("windowReceiver").windowCancel();
};
selectSingleProcess.gridTreeShowNodeImg = function(event) {
	var isFolder = event.grid.getValueById(event.rowId, "isFolder");
	if (isFolder == "1") {
		if (!event.grid.hasChildren(event.rowID))
			return event.grid.imgURL + event.grid.getImgFileName("folderClosed.gif");
	}
	else
		return "/UI/SA/OPM/images/funPermission.gif";
};
selectSingleProcess.clearTreeChecked = function() {
	var treeGrid = justep.xbl("gridTree").grid;
	var selectedRowIDs = treeGrid.getCheckedRowIds();
	for ( var i = 0; i < selectedRowIDs.length; i++)
		treeGrid.setItemChecked(selectedRowIDs[i], false);
};
selectSingleProcess.clearListChecked = function() {
	var listGrid = justep.xbl("gridList").grid;
	listGrid.checkAll(0);
};
selectSingleProcess.receiverReceive = function(event) {
	document.getElementById("inputSearch").focus();
	selectSingleProcess.clearTreeChecked();
	selectSingleProcess.clearListChecked();
};
selectSingleProcess.refreshData = function() {
	var searchText = document.getElementById("inputSearch").value;
	if (searchText) {
		document.getElementById("gridTree").style.display = "none";
		document.getElementById("gridList").style.display = "";
		selectSingleProcess.loadListData();
		var listGrid = justep.xbl("gridList").grid;
		listGrid
				.filterBy(listGrid.getColIndexById("activityFName"), searchText);
	} else {
		document.getElementById("gridList").style.display = "none";
		document.getElementById("gridTree").style.display = "";
	}
};
selectSingleProcess.inputSearchKeydown = function(event) {
	if (event.keyCode == 13)
		selectSingleProcess.refreshData();
};
selectSingleProcess.imageSearchClick = function(event) {
	selectSingleProcess.refreshData();
};
selectSingleProcess.gridTreeRowDblClick = function(event){
	selectSingleProcess.btnOKClick(event);
};
selectSingleProcess.gridListRowDblClick = function(event){
	selectSingleProcess.btnOKClick(event);
};

