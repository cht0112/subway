		var dectionStandard = {};

dectionStandard.insertTrClick = function(event){
	justep.xbl("tabPanel1").setTabActive("tabPage2");
	justep.xbl("dectionStandardTableD").newData();
};

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
dectionStandard.treeSelect1Closeup = function(event){
	//debugger;
	var dectionStandardTableD = justep.xbl("dectionStandardTableD");
	var docNodeD = justep.xbl("docNodeD");
	if(event.value){
	var ver = docNodeD.getValue("version",event.value);
	dectionStandardTableD.setValue("STANDARD_FILE_VER",ver);
	}
	
};

dectionStandard.removeStandardClick = function(event){
	//debugger;
	var data = justep.xbl('dectionStandardTableD');
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

dectionStandard.tabPage1Select = function(event){
	justep.xbl('dectionStandardTableD').refreshData();
};

dectionStandard.grid2RowDblClick = function(event){
	justep.xbl('tabPanel1').setTabActive("tabPage2");
};





dectionStandard.model1Ready = function(event){
	var docNodeD = justep.xbl("docNodeD");
	docNodeD.setFilter("filter0", "SA_DocNode.sFlag=1");
	docNodeD.loadData();
};
