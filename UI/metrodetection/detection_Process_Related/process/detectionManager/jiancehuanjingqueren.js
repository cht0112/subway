var jiancehuanjingqueren = {};

jiancehuanjingqueren.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
	//debugger;
	var applyNo = justep.Context.getProcessData1();
	var roomD = justep.xbl("roomD");
	roomD.setFilter("filterRoom", "TEST_PROJECT_INFO.aPPLICATIONNO="+parseInt(applyNo));
	roomD.refreshData();
	var roomLegth = roomD.getCount();
	//alert(roomLegth);
	var opName = justep.Context.getOperatorCode();
	//alert(opName);
	var hrBaseD = justep.xbl("hrBaseD");
	hrBaseD.setFilter("filterHr", "HR_BASE_INFO.Scode='"+opName+"'");
	hrBaseD.refreshData();
	var operId = hrBaseD.getCurrentID();
	//alert(opName+",-"+operId);
	for(var i =0;i<roomLegth;i++){
		var id = roomD.getID(i);
		//alert(id+"id");
		var roomUserd= roomD.getValue("rOOMUSED", id);
		var roomPer= roomD.getValue("tECHMANAGER", id);
//		var start= roomD.getValue("oCCUPYSTARTDATETIME", id);
//		var starttime = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
//		var endtime = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT_SHOT);
//		//var endtime= roomD.getValue("oCCUPYENDDATETIME", id);
//		alert(starttime+"===="+typeof(starttime)+"===="+endtime+"===="+typeof(endtime));
//		roomD.setValue("oCCUPYSTARTDATETIME", starttime, id);
//		roomD.setValue("oCCUPYENDDATETIME", endtime, id);
		var roomFlag1 = false;
		var roomFlag2 = false;
		if(roomUserd =="" || roomUserd ==null || roomUserd != 1){
			//alert("进入roomUserd");
			roomD.setValue("rOOMUSED",1,id);
			roomFlag1=true;
		}
		if(roomPer == "" || roomPer == null || roomPer != operId){
			//alert("进入roomPer");
			//alert(operId);
			roomD.setValue("tECHMANAGER",operId,id);
			roomFlag2=true;
		}
		if(roomFlag1 || roomFlag2){
			//alert("进save");
			roomD.saveData();
		}
		//roomD.refreshData();
		//alert(i);
	}
	//roomD.saveData();
	//工具
	var detectionToolD = justep.xbl("detectionToolD");
	detectionToolD.setFilter("filterToom", "TEST_PROJECT_INFO.aPPLICATIONNO="+applyNo);
	detectionToolD.refreshData();
	var toolLegth = detectionToolD.getCount();
	//alert(opName+",-"+operId);
	//alert(toolLegth+"===toolLegth");
	for(var j =0;j<toolLegth;j++){
		var idd = detectionToolD.getID(j);
		var toolUserd= detectionToolD.getValue("tOOLUSED", idd);
		var toolPer= detectionToolD.getValue("tECHMANAGER", idd);
		//alert(toolUserd);
		var toolFlag1 = false;
		var toolFlag2 = false;
		if(toolUserd =="" || toolUserd ==null || toolUserd != 1){
			//alert("进入toolUserd");
			detectionToolD.setValue("tOOLUSED",1,idd);
			toolFlag1=true;
		}
		if(toolPer == "" || toolPer == null || toolPer != operId){
			//alert("进入toolPer");
			detectionToolD.setValue("tECHMANAGER",operId,idd);
			toolFlag1=true;
		}
		if(toolFlag1 || toolFlag2){
			//alert("进save");
			detectionToolD.saveData();
		}
		//alert(i);
		
	}
	justep.xbl("detectionToolD").refreshData();
	
};

jiancehuanjingqueren.tabPage2_2Select = function(event){
	justep.xbl("roomD").refreshData();
};

jiancehuanjingqueren.tabPage1_2Select = function(event){
	justep.xbl("detectionToolD").refreshData();
};
