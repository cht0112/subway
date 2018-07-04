var selectMultiProcess = {};
selectMultiProcess.model1ModelConstructDone = function(event) {
	selectMultiProcess.loadTreeData();
};
selectMultiProcess._treeDataLoaded = false;
selectMultiProcess.loadTreeData =
		function() {
			if (!selectMultiProcess._treeDataLoaded) {
				var r =	justep.Request.sendHttpRequest("/UI/system/dialog/process/getProcessTree.j?type=tree");
				if (justep.Request.isSuccess(r)) {
					justep.xbl("dFunTree").loadXML(r.responseXML);
					selectMultiProcess._treeDataLoaded = true;
					return true;
				} else {
					var msg = new justep.Message(justep.Message.JUSTEP230060);
					throw justep.Error.create(msg);
				}
			}
		};

selectMultiProcess._listDataLoaded = false;
selectMultiProcess.loadListData =
		function() {
			if (!selectMultiProcess._listDataLoaded) {
					var r = justep.Request.sendHttpRequest("/UI/system/dialog/process/getProcessTree.j?type=list");
					if (justep.Request.isSuccess(r)) {
						justep.xbl("dFunList").loadXML(r.responseXML);
						selectMultiProcess._listDataLoaded = true;
						return true;
					} else {
						var msg = new justep.Message(justep.Message.JUSTEP230060);
						throw justep.Error.create(msg);
					}
			}
		};

selectMultiProcess.btnOKClick =
		function(event) {
			var listDisplay = (document.getElementById("gridList").style.display == "");
			var selectedData;
			var selectedRowIDs;
			if (listDisplay) {
				selectedData = justep.xbl("dFunList");
				var gridList = justep.xbl("gridList").grid;
				var checkColIndex = gridList.getColIndexById("checkBox");
				var checkedRows = gridList.getCheckedRows(checkColIndex);
				if (checkedRows)
					selectedRowIDs = checkedRows.split(",");
			} else {
				selectedData = justep.xbl("dFunTree");
				selectedRowIDs = justep.xbl("gridTree").grid.getCheckedRowIds();
			}
			if (!selectedRowIDs || selectedRowIDs.length == 0) {
				alert("请勾选流程！");
				return;
			}
			var data = [];
			for ( var i = 0; i < selectedRowIDs.length; i++) {
				if (selectedRowIDs[i] && selectedData.getValue("isFolder", selectedRowIDs[i]) != "1") {
					data[data.length] = {"process":selectedData.getValue("process", selectedRowIDs[i]), 
							"label":selectedData.getValue("label", selectedRowIDs[i])};
				}
			}
			justep.xbl("receiver").windowEnsure(data);
		};
selectMultiProcess.btnCancelClick = function(event) {
	justep.xbl("receiver").windowCancel();
};
selectMultiProcess.gridTreeShowNodeImg = function(event) {
	var isFolder = event.grid.getValueById(event.rowId, "isFolder");
	if (isFolder == "1") {
		if (!event.grid.hasChildren(event.rowID))
			return event.grid.imgURL + event.grid.getImgFileName("folderClosed.gif");
	}
	else
		return "/UI/SA/OPM/images/funPermission.gif";
};
selectMultiProcess.clearTreeChecked = function() {
	var treeGrid = justep.xbl("gridTree").grid;
	var selectedRowIDs = treeGrid.getCheckedRowIds();
	for ( var i = 0; i < selectedRowIDs.length; i++)
		treeGrid.setItemChecked(selectedRowIDs[i], false);
};
selectMultiProcess.clearListChecked = function() {
	var listGrid = justep.xbl("gridList").grid;
	listGrid.checkAll(0);
};
selectMultiProcess.receiverReceive = function(event) {
	document.getElementById("inputSearch").focus();
	selectMultiProcess.clearTreeChecked();
	selectMultiProcess.clearListChecked();
};
selectMultiProcess.refreshData = function() {
	var searchText = document.getElementById("inputSearch").value;
	if (searchText) {
		document.getElementById("gridTree").style.display = "none";
		document.getElementById("gridList").style.display = "";
		selectMultiProcess.loadListData();
		var listGrid = justep.xbl("gridList").grid;
		listGrid.filterBy(listGrid.getColIndexById("activityFName"), searchText);
	} else {
		document.getElementById("gridList").style.display = "none";
		document.getElementById("gridTree").style.display = "";
	}
};
selectMultiProcess.inputSearchKeydown = function(event){
	if (event.keyCode == 13)
		selectMultiProcess.refreshData();
};
selectMultiProcess.imageSearchClick = function(event){
	selectMultiProcess.refreshData();
};
