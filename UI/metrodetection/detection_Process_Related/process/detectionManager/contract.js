var contract = {};
contract._inputParams = {
	openMode : null,
	applicationNo : null,
	rowID : null,
	dataMain : null
};
/**
 * name:windowReceiver#onReceive
 * 
 * @event description: <b>[回调型事件]</b> window接收对话框传入的数据
 * @param event
 *            {"source":组件的js对象,"data":传入的数据}
 */
contract.windowReceiverReceive = function(event) {
	contract._inputParams.openMode = event.data.openMode;
	if (event.data.applicationNo)
		contract._inputParams.applicationNo = event.data.applicationNo;
	if (event.data.rowID)
		contract._inputParams.rowID = event.data.rowID;
	if (event.data.dataMain)
		contract._inputParams.dataMain = event.data.dataMain;
	if (contract._inputParams.openMode == 'new') {
		var bizData1 = justep.xbl("bizData1");
		bizData1.refreshData();
		bizData1.newData();
		bizData1.setValue("mANUFACTUREID",contract._inputParams.dataMain.getValue("aSSIGNEDMANUFACTUREID"));
		bizData1.setValue("aPPLICATIONNO",contract._inputParams.dataMain.getRowId());
		
	} else {
		var bizData1 = justep.xbl("bizData1");
		bizData1.setFilter("filter0", "TEST_CONTRACT_INFO = '"
				+ contract._inputParams.rowID+"'");
		bizData1.refreshData();
	}
};

contract.inputbutton1Click = function(event) {
	xforms.blur(true);
	var bizData1 = justep.xbl("bizData1");
	bizData1.saveData();
	justep.windowReceiver.windowCancel();
};
