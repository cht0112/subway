var dectionStandardDetail = {};

var dectionId = "";

dectionStandardDetail.windowReceiver1Receive = function(event){
	//debugger;
	if(event.data.dectionId){
		dectionId=event.data.dectionId;
		var standaMidD = justep.xbl("standaMidD");
		var standardD = justep.xbl("standardD");
		standaMidD.setFilter("filterStandMid", "DECTION_BASED_STANDARD.DECTION_BASED_ON_ID="+dectionId);
		standaMidD.refreshData();
		for(var j = 0;j<standaMidD.getCount();j++){
			var id = standaMidD.getID(j);
			var sid = standaMidD.getValue("SID", id);
			for(var i=0;i<standardD.getCount();i++){
				var idd = standardD.getID(i);
				if(idd == sid){
					standardD.setValue("calCheckBox",1);
				}
			}
		}
	}
	justep.xbl("saveTr").setDisabled(true);
};

dectionStandardDetail.saveTrClick = function(event){
	//debugger;
	var standaMidD = justep.xbl("standaMidD");
	standaMidD.setFilter("filterStandMid", "DECTION_BASED_STANDARD.DECTION_BASED_ON_ID="+dectionId);
	standaMidD.refreshData();
	var standArray = new Array();
	
	for(var j = 0;j<standaMidD.getCount();j++){
		standArray[j]=standaMidD.getID(j);
	}
	if(standArray.length>0){
		standaMidD.deleteData(standArray);
		standaMidD.saveData();
	}
	var standardGrid = justep.xbl("grid1").grid;
	var checkColIndex = standardGrid.getColIndexById("calCheckBox");
	var checkedIDs = standardGrid.getCheckedRows(checkColIndex);
	if (checkedIDs != null && checkedIDs != "") {
		var checkedIDsArray = checkedIDs.split(",");
		standaMidD.refreshData();
		for ( var i = 0; i < checkedIDsArray.length; i++) {
			var sid = checkedIDsArray[i];
			standaMidD.newData();
			standaMidD.setValue("SID", sid);
			standaMidD.setValue("DECTION_BASED_ON_ID", dectionId);
		}
		standaMidD.saveData();
		justep.xbl("saveTr").setDisabled(true);
	}
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
dectionStandardDetail.standardDAfterRefresh = function(event){
	//debugger;
//	var standaMidD = justep.xbl("standaMidD");
//	var standardD = justep.xbl("standardD");
//	standaMidD.setFilter("filterStandMid", "DECTION_BASED_STANDARD.DECTION_BASED_ON_ID="+dectionId);
//	standaMidD.refreshData();
//	for(var j = 0;j<standaMidD.getCount();j++){
//		var id = standaMidD.getID(j);
//		var sid = standaMidD.getValue("SID", id);
//		for(var i=0;i<standardD.getCount();i++){
//			var idd = standardD.getID(i);
//			if(idd == sid){
//				standardD.setValue("calCheckBox",1);
//			}
//		}
//	}
};



/**
	name:grid#onRowValueChanged
	description: 行级值改变后触发。加载数据时，每渲染完一行后触发。非加载数据时，单元格值改变后触发。
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
dectionStandardDetail.grid1RowValueChanged = function(event){
	justep.xbl("saveTr").setDisabled(false);
};

