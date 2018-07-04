var qianshuhetong = {};

qianshuhetong.tabPage4_1Select = function(event){
	var bizData1_1= justep.xbl('bizData1_1');
	var dataMain = justep.xbl("dataMain");
	bizData1_1.newData();
	var manufacture = dataMain.getValue("aSSIGNEDMANUFACTUREID");
	bizData1_1.setValue("cONTRACTNAME", manufacture);
	bizData1_1.setValue("aPPLICATIONNO",justep.Context.getProcessData1());
};

qianshuhetong.tabPage1_6Select = function(event){
	var CONTRACTData = justep.xbl("CONTRACTData");
	//CONTRACTData.refreshData();
};

qianshuhetong.tabPage2_6Select = function(event){

var SAMPLE_DEVICEData = justep.xbl("SAMPLE_DEVICEData");
	SAMPLE_DEVICEData.setFilter("filter0","SAMPLE_DEVICE_INFO.aPPLICATIONNO=" + justep.xbl("CONTRACTData").getValue("aPPLICATIONNO"));
	SAMPLE_DEVICEData.refreshData();


	var a = justep.xbl("CONTRACTData");
	var b = a.getCurrentID();
	if(b == "") {
		var id = document.getElementById('insertTrigger');
//		alert(1);
		id.disabled = true;
		var tr = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
//		alert(2);
		$("#insertTrigger").attr("src", tr);
//		alert(3);
		justep.xbl("insertTrigger").setDisabled(true);
	}else{
		var cc = document.getElementById('insertTrigger');
		cc.disabled = false;
		var tr = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
		$("#insertTrigger").attr("src", tr);
		justep.xbl("insertTrigger").setDisabled(false);
		
		//$("#insertTrigger").attr("onclick", "qianshuhetong.insertTriggerClick1(event)");	
	}
};





/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
qianshuhetong.windowDialog2_1Close = function(event){
	var mData = justep.xbl("CONTRACTData");
	mData.refreshData();
};





qianshuhetong.insertTriggerClick1 = function(event){

	var windowDialog3_1 = justep.xbl("windowDialog3_1");
	windowDialog3_1.open({
		openMode : "new",
		dataMain : justep.xbl("dataMain"),
		applicationNo : justep.xbl("CONTRACTData").getValue("aPPLICATIONNO"),
		contractCode : justep.xbl("CONTRACTData").getCurrentID(),
		deviceType : justep.xbl("dataMain").getValue("dEVICETYPE"),
		manufacture_id : justep.xbl("dataMain").getValue("aSSIGNEDMANUFACTUREID")
		
	});
	
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
qianshuhetong.windowDialog3_1Close = function(event){
	var mData = justep.xbl("SAMPLE_DEVICEData");
	mData.refreshData();
};
//双击打开修改
qianshuhetong.grid4_6RowDblClick = function(event){
	justep.xbl("windowDialog3_1").open({	
		openMode : "edit",
		rowID : justep.xbl("SAMPLE_DEVICEData").getRowId()
	});
};





qianshuhetong.mdDefaultXBLLoaded = function(event){
//debugger;
	var checkRecordData = justep.xbl("checkRecordData");
	var input2_3 = document.getElementById("input2_3");
	var input3_3 = document.getElementById("input3_3");
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="+justep.Context.getProcessData1()+"and CHECK_RECORD.cHECKNAME='技术审核'");
	checkRecordData.refreshData();
	input2_3.setAttribute("value",checkRecordData.getValue("cHECKDESC"));
	checkRecordData.loadData();
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="+justep.Context.getProcessData1()+"and CHECK_RECORD.cHECKNAME='行政审核'");
	checkRecordData.refreshData();
	input3_3.setAttribute("value",checkRecordData.getValue("cHECKDESC"));
		
	var CONTRACTData = justep.xbl("CONTRACTData");
	CONTRACTData.setFilter("filter0","TEST_CONTRACT_INFO.aPPLICATIONNO =" + justep.Context.getProcessData1());
	CONTRACTData.refreshData();
	if(CONTRACTData.getCount()==0){
//		alert("111");
		CONTRACTData.newData();
		CONTRACTData.setValue("aPPLICATIONNO",justep.Context.getProcessData1());
		
//	var a = justep.xbl("dataMain");
//	var aSSIGNEDMANUFACTUREID= dataMain.getValue("aSSIGNEDMANUFACTUREID");
//	var CONTRACTData = justep.xbl("CONTRACTData");
//	CONTRACTData.setValue("mANUFACTUREID",aSSIGNEDMANUFACTUREID);
	
	}
	//合同名称取值
//	var dataMain = justep.xbl("dataMain");
//	dataMain.setFilter("filter0","TEST_APPLICATION_INFO="+justep.Context.getProcessData1());
//	dataMain.refreshData();
//	var aSSIGNEDMANUFACTUREID = dataMain.getValue("aSSIGNEDMANUFACTUREID");
//	CONTRACTData.setValue("mANUFACTUREID",aSSIGNEDMANUFACTUREID );
	
//	debugger;
//	var obj = justep.xbl("aSSIGNEDMANUFACTUREID");
//	var sty = obj.element.style;
//	sty.color = "#FFFFFF";
	$(justep.xbl("eXPECTENDINGDATE").input).bind('keydown',function(evt){evt.preventDefault();});
};


//1
qianshuhetong.removeTrigger1Click = function(event){
	var data = justep.xbl('SAMPLE_DEVICEData');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
		for (var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
		}
	}
};


qianshuhetong.gridSelect1_17Dropdown = function(event){
	var afcmanufacturerinfo = justep.xbl("afcmanufacturerinfo");
	afcmanufacturerinfo.setFilter("filterAfc", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE="+1);
	afcmanufacturerinfo.refreshData();
};

qianshuhetong.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();	
};
