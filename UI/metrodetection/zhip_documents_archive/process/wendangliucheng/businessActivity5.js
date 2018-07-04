var businessActivity5 = {};

businessActivity5.model1Load = function(event){
	var cData = justep.xbl("cData");
	cData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="+justep.Context.getProcessData1());
	cData.refreshData();
	var desc = new Array();
	var name = new Array();
	for(var i=0;i<cData.getCount();i++){
		desc[i]=cData.getValue("cHECKDESC",cData.getRowId(i));
		name[i]=cData.getValue("cHECKNAME",cData.getRowId(i));
	}
	for(var j=0;j<3;j++){
		if(name[j]=='初审'){
			var input9 = document.getElementById("input9");			
			input9.setAttribute("value",desc[j]);
		}else if(name[j]=='复审'){
			var input10 = document.getElementById("input10");			
			input10.setAttribute("value",desc[j]);			
		}else if(name[j]=='终审'){
			var input11 = document.getElementById("input11");			
			input11.setAttribute("value",desc[j]);			
		}
	}
	
	var dataMain = justep.xbl("dataMain");
	dataMain.setFilter("1","P_DOCUMENTS_BORROW_RECORD="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
		debugger;
//	var dataMain = justep.xbl("dataMain");
	var fileId = dataMain.getValue("pFILEID",dataMain.getCurrentID());
	var bizData1 = justep.xbl("bizData2");
	bizData1.setFilter("filter0","P_DOCUMENTS_ARCHIVE='"+fileId+"'");
	bizData1.refreshData();
	
//	alert(dataMain.getCurrentID()+":"+bizData1.getCount()+":"+fileId);
//	alert(bizData1.getCurrentID());
};

//businessActivity5.model1XBLLoaded = function(event){
//
//	
//};
///**
//	name:process#onAfterAdvance
//	description: <b>[回调型事件]</b>流转之后
//	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
//*/
//businessActivity5.process1AfterAdvance = function(event){
//	//	var data = justep.xbl("dBorrowReturn");
//	var bizData1 = justep.xbl("bizData2");
//	var aa = bizData1.getCurrentID();
//	bizData1.setValue("aLLOWBORROW", 2,aa);
//	bizData1.saveData();
//	alert(aa);
//};

/**
	name:process#onAdvanceCommit
	description: <b>[回调型事件]</b>流转成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
businessActivity5.process1AdvanceCommit = function(event){
	debugger;
//	var dataMain = justep.xbl("dataMain");
	var bizData1 = justep.xbl("bizData2");
//	var aa = dataMain.getCurrentID();
//	var fileID = dataMain.getValue("pFILEID", aa);
//	bizData1.setFilter("1111","1=1");
//	bizData1.refreshData();
//	bizData1.setFilter("1111", "P_DOCUMENTS_ARCHIVE='"+fileID+"'");
//	bizData1.refreshData();
	bizData1.setValue("aLLOWBORROW", 2);
	bizData1.saveData();
//	alert(bizData1.getCount()+":"+bizData1.getValue("aLLOWBORROW")+":"+bizData1.getCurrentID());
//	alert(fileID);
};
