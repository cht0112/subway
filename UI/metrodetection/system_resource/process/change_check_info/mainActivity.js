var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};



mainActivity.mdDefaultXBLLoaded = function(event){
	var dataMaster = justep.xbl("dataMain");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
	//alert(perId);
	dataMaster.setValue("PLAN_AUDITORAUDITOR",perId);
	dataMaster.setValue("oPERATORNAME1",name);		
};

mainActivity.tabListSelect = function(event){
	var dataMaster = justep.xbl("dataMain");
	dataMaster.refreshData();
};

mainActivity.assetDelete = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
		if (confirm("确认删除吗？")) {
			for ( var i = 0; i < length; i++) {
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
	}
};

mainActivity.textarea9Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('REASON_ASSESSMENTASSESSMENT');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity.textarea10Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('RANGE_ASSESSMENTASSESSMENT');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity.textarea11Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('RISK_ASSESSMENTASSESSMENT');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity.textarea12Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('PROCESS_ASSESSMENTASSESSMENT');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity.textarea13Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('RESOURCE_ASSESSMENTASSESSMENT');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity.textarea14Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('TIME_ASSESSMENTASSESSMENT');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity.textarea15Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('ACCEPT_OPINIONOPINION');
    if(ipt.length > 1000){
      alert("输入字符数量不能超过1000！");
    }
};
