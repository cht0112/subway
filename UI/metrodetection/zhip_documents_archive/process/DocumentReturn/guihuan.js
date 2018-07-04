var guihuan = {};
guihuan._inputParams = {
		id : null,
		fId : null
};
guihuan.windowReceiverReceive = function(event){
// 接受参数
	debugger;
	guihuan._inputParams.id = event.data.id;
	guihuan._inputParams.fId = event.data.fId;
	var dBorrowReturn = justep.xbl("dBorrowReturn");
	dBorrowReturn.setFilter("filter0","P_DOCUMENTS_BORROW_RECORD ="+guihuan._inputParams.id);
	dBorrowReturn.refreshData();
	var dBorrowReturn = justep.xbl("dBorrowReturn");
	var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
	dBorrowReturn.setValue("iNDEEDRETURNDATE",nowDateTimeStr, dBorrowReturn.getCurrentID());
//	alert(dBorrowReturn.getCount());
//	var historyId = data.historyId;
//	var aData = justep.xbl("dBorrowReturn");
////	var bb = dBorrowReturn.getValue(currentDateTime());
//	dBorrowReturn.setValue("iNDEEDRETURNDATE", currentDateTime());
//	aData.filters.setFilter("returnFilter", "P_DOCUMENTS_BORROW_RECORD=");
//	
//	aData.refreshData();
//	aData.setValue("fCrosserID", justep.Context.getCurrentPersonID());
//	aData.setValue("fCrosserName", justep.Context.getCurrentPersonName());
//	var time = justep.Date.toString(justep.System.datetime(),
//			justep.Date.STANDART_FORMAT);
//	aData.setValue("fReturnTime", time);
//	aData.setValue("fReturnNum", aData.getValue("fBorrowNum"));
//	aData.setValue("fReturnPsnID", aData.getValue("fBorrowPsnID"));
//	aData.setValue("fReturnPsnName", aData.getValue("fBorrowPsnName"));
	var bizData1 = justep.xbl("bizData2");
	bizData1.setFilter("filter0", "P_DOCUMENTS_ARCHIVE='"+guihuan._inputParams.fId+"'");
	bizData1.refreshData();
};




//确定
guihuan.inputbutton1Click = function(event){
	var data = justep.xbl("dBorrowReturn");
	var bizData1 = justep.xbl("bizData2");
	var aa = bizData1.getCurrentID();
	bizData1.setValue("aLLOWBORROW", 1,aa);
	bizData1.saveData();
	alert("文档归还成功！");
//	data.refreshData();
	justep.windowReceiver.windowCancel();
//
//	if (!(data.getValue("fBorrowNum") > data.getValue("fReturnNum"))) {
//		data.setValue("fCloseTime", data.getValue("fReturnTime"));
//	}
//	data.saveData();
//	if (!data.isChanged()) {
//		windowEnsure("OK");
//	} 
};


guihuan.inputbutton2Click = function(event){
	justep.xbl('windowReceiver').windowCancel();
	
};



