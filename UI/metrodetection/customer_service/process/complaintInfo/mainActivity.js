var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event) {
	justep.xbl("tabpanel1").setTabActive("tabDetail");

};

mainActivity.newItemClick = function(event) {
	var dataMain = justep.xbl("dataMain");
	dataMain.newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");

	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'" + operId + "@%'");
	orgData.refreshData();
	// alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	// alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='" + oprScode + "'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME", perId);
	// alert(perId);
	// alert(name);
	dataMain.setValue("RECEIPT", perId);
	dataMain.setValue("oPERATORNAME", name);
};

mainActivity.removeTrigger1Click = function(event) {
	var dataMain = justep.xbl('dataMain');
	// var bizData1 = justep.xbl("bizData1");
	// dataMain.refreshData();
	var infoIDs = dataMain.getStore().getCheckedRowIds();// 获取选择信息的ID
	// alert(infoIDs);
	justep.xbl("tabpanel1").setTabActive("tabList");
	var deleteIDs = "";
	var length = infoIDs.length;// 选择的信息个数长度
	// alert(length);
	if (length == 0) {
		alert("请先选择要删除的信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
				// bizData1.setFilter("filter0",
				// "CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ID="
				// + infoIDs[i]);
				// bizData1.refreshData();
				// var k = bizData1.getCount();
				// for ( var j = 0; j < k; j++) {
				// var d = bizData1.getCurrentID(0);
				// bizData1.deleteData(d);
				// dataMain.refreshData();
				// }
				deleteIDs = infoIDs[i];
				if (deleteIDs != "") {
					// bizData1.deleteData(deleteIDs);
					dataMain.deleteData(deleteIDs);
				}
			}
		}
	}
};

mainActivity.trigger1Click = function(event) {
	// debugger;
	var dataMain = justep.xbl("dataMain");
	var type = justep.xbl("tempData").instance.getValueByName("val");
	if (type == 1 || type == 2) {
		dataMain.setFilter("filter3", "CUSTOMER_COMPLAINT_INFO.STATUS=" + type);
		dataMain.refreshData();
	}
	if (type == 0) {
		dataMain.setFilter("filter3", "1=1");
		dataMain.refreshData();
	}
	if (type == '' || type == null) {
		alert('请选择受理状态!');
	}

};

mainActivity.tabListSelect = function(event) {
	var dataMain = justep.xbl("dataMain");
	dataMain.refreshData();
};


/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
//mainActivity.dataMainValueChanged = function(event){
//	if (event.column == "CONTACT_EMAIL") {
//		var email = event.value;
//		alert(email);
//		var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
//		alert(!reg.test(email));
//		if (!reg.test(email)) {
//			alert('邮箱格式错误!');
//		}
//	}
//};

mainActivity.input15Blur = function(event){
	var email = justep.xbl('input15').input.value;
//	alert(email);
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	// alert(!reg.test(email));
	if (!reg.test(email)) {
		alert('邮箱格式错误!');
	}
};
