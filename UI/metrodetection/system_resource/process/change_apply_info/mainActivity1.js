var mainActivity1 = {};

mainActivity1.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity1.newItemClick = function(event){
	var dataMaster = justep.xbl("dataMain");
	dataMaster.newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");		
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
	dataMaster.setValue("APPLY_PERSONPERSON",perId);
	dataMaster.setValue("oPERATORNAME",name);	
};

mainActivity1.removeTrigger1Click = function(event){
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

mainActivity1.iptCHANGE_APPLY_NOAPPLYNOBlur = function(event){
	var ipt = justep.xbl('dataMain').getValue('CHANGE_APPLY_NOAPPLYNO');
    if(ipt.length > 30){
      alert("输入字符数量不能超过30！");
    }
};

mainActivity1.iptCHANGE_OBJECTOBJECTBlur = function(event){
	var ipt = justep.xbl('dataMain').getValue('CHANGE_OBJECTOBJECT');
    if(ipt.length > 50){
      alert("输入字符数量不能超过50！");
    }
};

mainActivity1.textarea1Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('CHANGE_TITLETITLE');
    if(ipt.length > 256){
      alert("输入字符数量不能超过256！");
    }
};

mainActivity1.textarea2Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('CHANGE_CONTENTCONTENT');
    if(ipt.length > 1000){
      alert("输入字符数量不能超过1000！");
    }
};

mainActivity1.textarea3Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('CHANGE_REASONREASON');
    if(ipt.length > 100){
      alert("输入字符数量不能超过100！");
    }
};

mainActivity1.textarea4Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('IMPACT_RANGERANGE');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity1.textarea5Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('POTENTIAL_RISKRISK');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity1.textarea6Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('RESOLVE_RISKRISK');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};

mainActivity1.textarea7Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('IMPLEMENTATION_PROCESSPROCESS');
    if(ipt.length > 1000){
      alert("输入字符数量不能超过1000！");
    }
};

mainActivity1.textarea8Blur = function(event){
	var ipt = justep.xbl('dataMain').getValue('RESOURCES_NEEDEDNEEDED');
    if(ipt.length > 200){
      alert("输入字符数量不能超过200！");
    }
};
