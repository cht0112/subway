var bizActivity5 = {};

bizActivity5.tabPage4_1Select = function(event) {
	var bizData1_1 = justep.xbl('bizData1_1');
	var dataMain = justep.xbl("dataMain");
	bizData1_1.newData();
	var manufacture = dataMain.getValue("aSSIGNEDMANUFACTUREID");
	bizData1_1.setValue("cONTRACTNAME", manufacture);
	bizData1_1.setValue("aPPLICATIONNO", justep.Context.getProcessData1());
};

bizActivity5.tabPage1_6Select = function(event) {
	var CONTRACTData = justep.xbl("CONTRACTData");
	CONTRACTData.refreshData();
};

bizActivity5.tabPage2_6Select = function(event) {
	var a = justep.xbl("CONTRACTData");
	var b = a.getValue("APPLICATION_NONO");
	if (b == "") {
		var id = document.getElementById('insertTrigger');
		id.disabled = true;
		var tr = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/un_insert.gif",
				true);
		$("#insertTrigger").attr("src", tr);
	} else {
		var cc = document.getElementById('insertTrigger');
		cc.disabled = false;
		var tr = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/insert.gif", true);
		$("#insertTrigger").attr("src", tr);
	}
	var d = justep.xbl("SAMPLE_DEVICEData");
	d.setFilter("filter0", "SAMPLE_DEVICE_INFO.aPPLICATIONNO = "+b);
	d.refreshData();
				
};

bizActivity5.windowDialog2_1Close = function(event) {
	var mData = justep.xbl("CONTRACTData");
	mData.refreshData();
};

bizActivity5.insertTriggerClick1 = function(event) {
	var windowDialog3_1 = justep.xbl("windowDialog3_1");
	windowDialog3_1
			.open({
				openMode : "new",
				dataMain : justep.xbl("dataMain"),
				applicationNo : justep.xbl("CONTRACTData").getValue(
						"APPLICATION_NONO"),
				// contractCode : justep.xbl("CONTRACTData").getCurrentID(),
				deviceType : justep.xbl("dataMain").getValue("dEVICETYPE"),
				manufacture_id : justep.xbl("dataMain").getValue(
						"aSSIGNEDMANUFACTUREID")
			});
};

bizActivity5.windowDialog3_1Close = function(event) {
	var mData = justep.xbl("SAMPLE_DEVICEData");
	mData.refreshData();
};

bizActivity5.grid4_6RowDblClick = function(event) {
	justep.xbl("windowDialog3_1").open({
		openMode : "edit",
		rowID : justep.xbl("SAMPLE_DEVICEData").getRowId()
	});
};

bizActivity5.mdDefaultXBLLoaded = function(event) {
	var checkRecordData = justep.xbl("checkRecordData");
	var input2_3 = document.getElementById("input2_3");
	var input3_3 = document.getElementById("input3_3");
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="
			+ justep.Context.getProcessData1()
			+ "and CHECK_RECORD.cHECKNAME='技术审核'");
	checkRecordData.refreshData();
	input2_3.setAttribute("value", checkRecordData.getValue("cHECKDESC"));
	checkRecordData.loadData();
	checkRecordData.setFilter("filter0", "CHECK_RECORD.aPPLICATIONNO ="
			+ justep.Context.getProcessData1()
			+ "and CHECK_RECORD.cHECKNAME='行政审核'");
	checkRecordData.refreshData();
	input3_3.setAttribute("value", checkRecordData.getValue("cHECKDESC"));

	var CONTRACTData = justep.xbl("CONTRACTData");
	CONTRACTData.setFilter("filter0", "TEST_INTENTION_INFO.APPLICATION_NONO ="
			+ justep.Context.getProcessData1());
	CONTRACTData.refreshData();
	if (CONTRACTData.getCount() == 0) {
		CONTRACTData.newData();
		CONTRACTData.setValue("APPLICATION_NONO", justep.Context
				.getProcessData1());
	}
	$(justep.xbl('textarea1_18').input).bind('keydown', function(evt) {
		if (this.value.length >= 1000) {
			return false;
		}
	});
	$(justep.xbl('textarea2_18').input).bind('keydown', function(evt) {
		if (this.value.length >= 1000) {
			return false;
		}
	});
	var afcmanufacturerinfo = justep.xbl('afcmanufacturerinfo');
	afcmanufacturerinfo.setFilter("filter0", "AFC_MANUFACTURER_INFO.mANUFACTURETYPE=1");
	afcmanufacturerinfo.refreshData();
	
	$(justep.xbl("EXPECT_ENDING_DATEENDINGDATE2").input).bind('keydown',function(evt){evt.preventDefault();});
	
};

bizActivity5.removeTrigger1Click = function(event) {
	var data = justep.xbl('SAMPLE_DEVICEData');
	var jilu =justep.xbl("jilu");
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else if(confirm("确认删除选中的数据吗？")){
		for ( var i = 0; i < length; i++) {
			if (deleteIDs == "") {
				deleteIDs = infoIDs[i];
			} else {
				deleteIDs += "," + infoIDs[i];
			}
			jilu.setFilter("filter1","SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO="+infoIDs[i]);
			jilu.refreshData();
			var ww=jilu.getCount();
//			alert(ww);
			var qq=jilu.getCurrentID();
//			alert(qq);
			for(var h=0;h<ww;h++  ){
			var qq=jilu.getCurrentID(0);
			jilu.deleteData(qq);
			}
		}
		if (deleteIDs != "") {		
			data.deleteData(deleteIDs);
		}
	}
};

bizActivity5.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
};
