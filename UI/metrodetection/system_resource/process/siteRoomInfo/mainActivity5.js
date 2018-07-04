var mainActivity5 = {};
mainActivity5._inputParams = {
	openMode : null,
	bianhao:null,
	rowID : null
};

mainActivity5.windowReceiverReceive = function(event) {
	mainActivity5._inputParams.openMode = event.data.openMode;
	mainActivity5._inputParams.bianhao = event.data.bianhao;
	if (event.data.rowID)
		mainActivity5._inputParams.rowID = event.data.rowID;
	if (mainActivity5._inputParams.openMode == 'new') {
		var projectData = justep.xbl("bizData1");
		projectData.newData();
		projectData.setValue("rOOMID", mainActivity5._inputParams.bianhao);
	} else {
		var bizData1 = justep.xbl("bizData1");
		bizData1.setFilter("filter0", "ROOM_APPLY_INFO = '"
				+ mainActivity5._inputParams.rowID + "'");
		bizData1.refreshData();
	}
};

mainActivity5.inputbutton1Click = function(event) {
	var projectDat = justep.xbl("bizData1");
	projectDat.saveData();
	justep.windowReceiver.windowCancel();
//	justep.windowDialogReceiver
//					.windowEnsure(personDetail._inputParams);
};

mainActivity5.gridSelect4Closeup = function(event){
//	alert(12);
	var bizData3 =justep.xbl("bizData3");
	var bizData2 =justep.xbl("bizData2");
	var aPPLYFOROBJECT = bizData3.getValue("DETECTION_OBJECT_TYPE");
//	alert(aPPLYFOROBJECT);
	if(aPPLYFOROBJECT !=""){
		bizData2.setFilter("filter0", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = "+ aPPLYFOROBJECT );
		bizData2.refreshData();
	}
};


mainActivity5.model1XBLLoaded = function(event){
	$(justep.xbl("rOOMAREA").input).attr("maxlength",20)
};
