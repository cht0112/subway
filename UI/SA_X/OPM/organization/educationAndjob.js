var educationAndjob = {};
var operatorId = "";
var openModel = "";
var fid = "";
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
educationAndjob.windowReceiver1Receive = function(event){
	//debugger;
	openModel = event.data.openModel;
	//alert(openModel);
	if(openModel == "new"){
		//alert(3);
		var insertNew1 =justep.xbl("insertNew1");
		insertNew1.setDisabled(false);
		operatorId = event.data.operatorId;
		//alert(operatorId);
		var educationAndJobD = justep.xbl("educationAndJobD");
		educationAndJobD.newData();
		educationAndJobD.setValue("oPERATORID",operatorId);
	}else if(openModel=="edit"){
		var insertNew1 =justep.xbl("insertNew1");
		insertNew1.setDisabled(true);
		fid = event.data.fid;
		var educationAndJobD = justep.xbl("educationAndJobD");
		educationAndJobD.setFilter("filter0", "EDUCATION_AND_JOB_INFO='"+fid+"'");
		educationAndJobD.refreshData();
	}
	
};




educationAndjob.insertNew1Click = function(event){
	//operatorId = event.data.operatorId;
	//alert(operatorId);
	var educationAndJobD = justep.xbl("educationAndJobD");
	educationAndJobD.newData();
	educationAndJobD.setValue("oPERATORID",operatorId);
};

educationAndjob.trigger1Click = function(event){
	//debugger;
	var educationAndJobD = justep.xbl("educationAndJobD");
	var rowId = educationAndJobD.getCurrentRowId();
	var eduArray = new Array();
	eduArray[0]=rowId;
	var windowReceiver1 = justep.xbl("windowReceiver1");
	var data = windowReceiver1.getMappingData("educationAndJobD",eduArray);
	windowReceiver1.windowEnsure(data);
	//windowReceiver1.windowEnsure({id:educationAndJobD.getCurrentRowId()});
};
