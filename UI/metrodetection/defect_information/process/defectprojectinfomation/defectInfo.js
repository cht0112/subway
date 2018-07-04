var defectInfo = {};

defectInfo.insertNewClick = function(event) {
	//alert(5);
	justep.xbl("tabPanel1").setTabActive("tabDetail");
	justep.xbl("insertNewDetail").setDisabled(true);
	var defectTracProjectInfoD = justep.xbl("defectTracProjectInfoD");
	defectTracProjectInfoD.newData();
	//alert(defectTracProjectInfoD.getCurrentID());
	// debugger;
	var operName = justep.Context.getOperatorName();
	//alert(operName);
//	var hrBaseInfoD = justep.xbl("hrBaseInfoD");
//	hrBaseInfoD.setFilter("filter2", "trim(HR_BASE_INFO)='"+operName+"'");
//	hrBaseInfoD.refreshData();
//	var hrSname = hrBaseInfoD.getValue("oPERATORNAME");
	//alert(hrSname);
	//defectTracProjectInfoD.setValue("PROJECT_MANAGER",operName);
};

/**
 * name:grid#onRowClick description: 行单击事件
 * 
 * @param event
 *            事件属性:<br/>{"source":XFGrid对象,
 *            "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
 */
defectInfo.gridMainRowClick = function(event) {
//	var c = justep.xbl("defectTracProjectInfoD").getCurrentID();
//	alert(c);
};

defectInfo.insertNewDetail = function(event) {
	var defectTracProjectInfoD = justep.xbl('defectTracProjectInfoD');
	var projectId = defectTracProjectInfoD.getCurrentID();
	justep.xbl("productWD").open({"projectId":projectId,"openModel":"new"});
	// debugger;
	
	// alert(defectTracProductInfoD);
	//defectTracProductInfoD.newData();
	//alert(defectTracProductInfoD.getCurrentID());
	//alert(defectTracProductInfoD.getValue("PROJECT_ID"));
	
};

defectInfo.removeTriggerDClick = function(event) {
	var data = justep.xbl('defectTracProductInfoD');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
//	alert(length);
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					data.deleteData(deleteIDs);
				}
			}
		}
	}
};

defectInfo.removeTriggerDMClick = function(event) {
	var data = justep.xbl('defectTracProjectInfoD');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
//	alert(length);
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					data.deleteData(deleteIDs);
				}
			}
		}
	}
};

defectInfo.tabListSelect = function(event){
	justep.xbl('defectTracProjectInfoD').refreshData();
};

defectInfo.tabDetailSelect = function(event){
	justep.xbl('defectTracProductInfoD').refreshData();
};

defectInfo.model1Load = function(event){
	var operName = justep.Context.getOperatorName();
	//alert(operName);
//	var hrBaseInfoD = justep.xbl("hrBaseInfoD");
//	hrBaseInfoD.setFilter("filter2", "trim(HR_BASE_INFO)='"+operName+"'");
//	hrBaseInfoD.refreshData();
//	var hrSname = hrBaseInfoD.getValue("oPERATORNAME");
//	alert(hrSname);
//	var defectTracProjectInfoD= justep.xbl("defectTracProjectInfoD");
//	defectTracProjectInfoD.setFilter("filter1", "trim(DEFECT_TRACK_PROJECT_INFO.PROJECT_MANAGER)='"+operName+"'");
//	defectTracProjectInfoD.refreshData();
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
defectInfo.productWDClose = function(event){
	justep.xbl('defectTracProductInfoD').refreshData();
};

defectInfo.grid1RowDblClick = function(event){
	var defectTracProductInfoD = justep.xbl('defectTracProductInfoD');
	var productId = defectTracProductInfoD.getCurrentID();
	justep.xbl("productWD").open({"productId":productId,"openModel":"edit"});
};

defectInfo.insert1 = function(event){
	var defectTracProjectInfoD = justep.xbl("defectTracProjectInfoD");
	defectTracProjectInfoD.newData();
	var operName = justep.Context.getOperatorName();
	//defectTracProjectInfoD.setValue("PROJECT_MANAGER",operName);
};

defectInfo.save = function(event){
	var defectTracProjectInfoD = justep.xbl("defectTracProjectInfoD");
	defectTracProjectInfoD.saveData();
	justep.xbl("insertNewDetail").setDisabled(false);
	justep.xbl("saveTr").setDisabled(true);
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
defectInfo.defectTracProjectInfoDValueChanged = function(event){
	justep.xbl("saveTr").setDisabled(false);
};

defectInfo.gridMainRowDblClick = function(event){
	justep.xbl("tabPanel1").setTabActive("tabDetail");
};
