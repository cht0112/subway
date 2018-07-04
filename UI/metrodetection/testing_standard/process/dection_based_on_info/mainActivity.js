var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event) {
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

// 页签选中列表自动刷新
mainActivity.tabListSelect = function(event) {
	var data = justep.xbl('dataMain');
	data.refreshData();
	// window.location.reload(true);
};

mainActivity.removeTrigger1Click = function(event) {
	//debugger;
	var data = justep.xbl('dataMain');
	var dectionSchemeD = justep.xbl('dectionSchemeD');
	var array = new Array();
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的信息！");
	} else {
		for ( var i = 0; i < length; i++) {
			dectionSchemeD.setFilter("scheme", "TEST_SCHEME_BASE_INFO.dECTIONBASEDONID="+infoIDs[i]);
			dectionSchemeD.refreshData();
			if(dectionSchemeD.getCount()>0){
				array.push(infoIDs[i]);
				continue;
			}
			if (deleteIDs == "") {
				deleteIDs = infoIDs[i];
			} else {
				deleteIDs += "," + infoIDs[i];
			}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
			data.saveData();
		}
		if(array.length>0){
			alert("有的检测依据已被占用，不能删除！");
		}
	}
};

/**
 * name:treeSelect#onCloseup description: <b>[回调事件]</b> 关闭下拉事件
 * 
 * @param event
 *            事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
 */
// mainActivity.treeSelect1Closeup = function(event) {
// var dataMain = justep.xbl("dataMain");
// var id = dataMain.getValue("sTANDARDEFILEID");
// var saDocnodeD = justep.xbl("saDocnodeD");
// if (id != null && id != "") {
// //alert(id);
// saDocnodeD.setFilter("filterDoc", "SA_DocNode='" + id + "'");
// saDocnodeD.refreshData();
// //alert(saDocnodeD.getValue("version"));
// dataMain.setValue("sTANDARDFILEVER", saDocnodeD.getValue("version"));
// //dataMain.refreshData();
// }
// saDocnodeD.setFilter("filterDoc", "1=1");
// saDocnodeD.refreshData();
// };
/**
 * name:treeSelect#onDropdown description: <b>[回调事件]</b> 显示下拉事件
 * 
 * @param event
 *            事件属性:<br/>{"source":XFExtSelect对象}
 */
mainActivity.treeSelect1Dropdown = function(event) {
	var saDocnodeD = justep.xbl("saDocnodeD");
	saDocnodeD.refreshData();
};

mainActivity.newInsertClick = function(event) {

	// window.location.reload();
	// justep.xbl("tabpanel1").setTabActive("tabDetail");
	var temp = justep.xbl("dataMain");
	temp.newData();
	// alert(dataMain.getValue("version"));
	// dataMain.setValue("",);
	 var id = temp.getCurrentID();
	 if(id){
		 var dectionStandardD = justep.xbl("dectionStandardD");
		 dectionStandardD.setFilter("filter2", "DECTION_BASED_STANDARD.DECTION_BASED_ON_ID="+id);
		 dectionStandardD.refreshData();
		 var state = temp.getValue("vALIDSTATE1", id);
		 if(!state){
			 justep.xbl("insertSubTr").setDisabled(true);
		 }else{
			 justep.xbl("insertSubTr").setDisabled(false);
		 }
	 }
};

mainActivity.saveTrClick = function(event) {
	var dataMain = justep.xbl("dataMain");
	var version = dataMain.getValue("version1", dataMain.getCurrentID());
	// alert(version+typeof(version));
	// if(version == null && version ==""){
	// dataMain.saveData();
	// justep.xbl("saveTr").setDisabled(true);
	// }else{
	// var ver = parseInt(dataMain.getValue("version1"))+1;
	// alert(ver);
	// var id = dataMain.getCurrentID();
	// alert(id);
	// dataMain.setValue("version1",ver,id);
	//		
	// dataMain.saveData();
	// justep.xbl("saveTr").setDisabled(true);
	// }

	dataMain.saveData();
	justep.xbl("saveTr").setDisabled(true);
	justep.xbl("insertSubTr").setDisabled(false);

};

/**
 * name:bizData#onValueChanged description: <b>[回调型事件]</b>数据变化
 * 
 * @param event
 *            它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
 */
mainActivity.dataMainValueChanged = function(event) {
	justep.xbl("saveTr").setDisabled(false);
};

 mainActivity.tabDetailSelect = function(event){
	 //debugger;
	 var temp = justep.xbl("dataMain");
	 var id = temp.getCurrentID();
	 if(id){
		 var dectionStandardD = justep.xbl("dectionStandardD");
		 dectionStandardD.setFilter("filter2", "DECTION_BASED_STANDARD.DECTION_BASED_ON_ID="+id);
		 dectionStandardD.refreshData();
		 var state = temp.getValue("vALIDSTATE1", id);
		 if(!state){
			 justep.xbl("insertSubTr").setDisabled(true);
		 }else{
			 justep.xbl("insertSubTr").setDisabled(false);
		 }
	 }
	 justep.xbl("saveTr").setDisabled(true);
	 
 };

//mainActivity.saveTrDetailClick = function(event) {
//	//debugger;
//
//	var dectionDocNodeD = justep.xbl("dectionDocNodeD");
//	var dataMain = justep.xbl("dataMain");
//	var dectionId = dataMain.getCurrentID();
//	// alert(dataMain.getCurrentID());
//	if (dectionId != null && dectionId != "") {
//		dectionDocNodeD.setFilter("filterdoc",
//				"BASE_DECTION_AND_DOCNOD.DECTION_BASED_ON_ID=" + dectionId);
//		dectionDocNodeD.refreshData();
//		var arr = new Array();
//		// alert(dectionDocNodeD.getCount());
//		for ( var j = 0; j < dectionDocNodeD.getCount(); j++) {
//			var id = dectionDocNodeD.getID(j);
//			// alert(id);
//			// dectionDocNodeD.deleteData(id);
//			arr[j] = id;
//		}
//		dectionDocNodeD.deleteData(arr);
//		dectionDocNodeD.saveData();
//		var docGrid = justep.xbl("grid2").grid;
//		var checkColIndex = docGrid.getColIndexById("calCheck");
//		var checkedIDs = docGrid.getCheckedRows(checkColIndex);
//		// alert(checkedIDs);
//		if (checkedIDs != null && checkedIDs != "") {
//			var checkedIDsArray = checkedIDs.split(",");
//			for ( var i = 0; i < checkedIDsArray.length; i++) {
//				var sid = checkedIDsArray[i];
//				dectionDocNodeD.newData();
//				dectionDocNodeD.setValue("SID", sid);
//				dectionDocNodeD.setValue("DECTION_BASED_ON_ID", dectionId);
//			}
//			dectionDocNodeD.saveData();
//		}
//
//	}
//	justep.xbl("saveTrDetail").setDisabled(true);
//};

mainActivity.grid2RowValueChanged = function(event){
	//justep.xbl("saveTrDetail").setDisabled(false);
};

//mainActivity.mdDefaultLoad = function(event){
//	var saDocnodeD = justep.xbl("saDocnodeD");
//	saDocnodeD.setFilter("filterdoc2",
//				"SA_DocNode.sKind <> 'dir'");
//	saDocnodeD.refreshData();
//};

mainActivity.InsertSubClick = function(event){
	//alert("eeeeeee");
	var dataMain = justep.xbl("dataMain");
	var dectionId = dataMain.getCurrentID();
	//alert(dectionId);
	justep.xbl("dectionStandardWD").open({"dectionId":dectionId});
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.dectionStandardWDClose = function(event){
	var dectionStandardD = justep.xbl("dectionStandardD");
	dectionStandardD.refreshData();
};

mainActivity.removeDetailClick = function(event){
	var data = justep.xbl('dectionStandardD');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的信息！");
	} else {
		for ( var i = 0; i < length; i++) {
			if (deleteIDs == "") {
				deleteIDs = infoIDs[i];
			} else {
				deleteIDs += "," + infoIDs[i];
			}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
			data.saveData();
		}
	}
};

