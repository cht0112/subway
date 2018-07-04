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
	dataMain.setFilter("1","DOCUMENTS_DESTROY_RECORD="+parseInt(justep.Context.getProcessData1()));
	dataMain.refreshData();
	
};

businessActivity5.model1XBLLoaded = function(event){
//	justep.xbl('attachmentEditor2').setAttachmentPermission(1799);
};


/**
	name:process#onAfterAdvance
	description: <b>[回调型事件]</b>流转之后
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl": 流转信息,"cancel":false}
*/
businessActivity5.process1AfterAdvance = function(data){
	//debugger;
	var dataMain = justep.xbl("dataMain");
	var FileId = dataMain.getValue("fILEID");
	var param = new justep.Request.ActionParam();
	param.setString("FileId", FileId);
	var response = justep.Request.sendBizRequest("/metrodetection/zhip_documents_archive/process/wendangxiaohui/wendangxiaohuiProcess","businessActivity5", "destoryE_FileActin", param);
	var bizData1 = justep.xbl("bizData3");
	bizData1.setFilter("filter","P_DOCUMENTS_ARCHIVE='"+FileId+"'");
	bizData1.refreshData(); 
//	alert(bizData1.getCount());
	bizData1.setValue("dESTROYSTATE",2);
	bizData1.saveData();
};


