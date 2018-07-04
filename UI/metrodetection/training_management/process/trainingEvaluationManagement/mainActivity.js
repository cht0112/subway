var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	var dataMaster = justep.xbl("dataMain");
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
//	justep.xbl("gridSelect2").input.focus();
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
	dataMaster.setValue("EVALUATEE",perId);
	dataMaster.setValue("EVALUATEE_NAME",name);
	
	dataMaster.setValue("RECOMMENDATION","1 3");	
	dataMaster.setValue("APPROVAL_OPINION","1");	
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(true);
};
mainActivity.gridSelect2Closeup = function(event){
	var evaluatedIdData = justep.xbl("evaluatedIdData");
	var dataMain = justep.xbl("dataMain");
//	var deptData = justep.xbl("deptData");
//	var id = deptData.getCurrentId();
//	dataMain.setValue("TRAINING_PLAN_ID",id);
//	alert(dataMain.getCount());
	var dept = dataMain.getValue("EVALUATED_DEPT");
//	alert(dept);
	evaluatedIdData.setFilter("filter0", "MEMBER_IN_USERGROUP.oPERATORID = '"+dept+"'");
	evaluatedIdData.refreshData();
//	alert(evaluatedIdData.getCount());
};


mainActivity.tabListSelect = function(event){
	var dataMain = justep.xbl("dataMain");	
	dataMain.refreshData();
};

mainActivity.selectItem24Select = function(event){
	debugger;
	var aa = document.getElementById("selectItem24").value;
	$("#selectItem29 input").attr("checked",false);
};

mainActivity.selectItem24DeSelect = function(event){
	debugger;
	$("#selectItem29 input").attr("checked",true);	
};

mainActivity.selectItem30Select = function(event){
	$("#selectItem31 input").attr("checked",false);	
	
};

mainActivity.selectItem30DeSelect = function(event){
	$("#selectItem31 input").attr("checked",true);	
};

mainActivity.selectItem31Select = function(event){
	$("#selectItem30 input").attr("checked",false);	
};

mainActivity.selectItem31DeSelect = function(event){
	$("#selectItem30 input").attr("checked",true);		
};

mainActivity.selectItem29Select = function(event){
debugger;
	$("#selectItem24 input").attr("checked",false);
};

mainActivity.selectItem29DeSelect = function(event){
	debugger;
	$("#selectItem24 input").attr("checked",true);		
};

mainActivity.selectItem34Select = function(event){
//	alert($("[name='selectItem35']"));
//	document.getElementById("selectItem35").checked=false;
//	document.getElementById("selectItem36").checked=false;
//	$("[name='selectItem35']").attr("checked",false);	
//	$("[name='selectItem36']").attr("checked",false);	
	$("#selectItem35 input").attr("checked",false);	
	$("#selectItem36 input").attr("checked",false);	
};

mainActivity.selectItem35Select = function(event){
	$("#selectItem34 input").attr("checked",false);	
	$("#selectItem36 input").attr("checked",false);		
};

mainActivity.selectItem36Select = function(event){
	$("#selectItem34 input").attr("checked",false);		
	$("#selectItem35 input").attr("checked",false);	
};

mainActivity.selectItem37Select = function(event){
	$("#selectItem38 input").attr("checked",false);		
	$("#selectItem39 input").attr("checked",false);		
};

mainActivity.selectItem38Select = function(event){
	$("#selectItem37 input").attr("checked",false);		
	$("#selectItem39 input").attr("checked",false);		
};

mainActivity.selectItem39Select = function(event){
	$("#selectItem37 input").attr("checked",false);		
	$("#selectItem38 input").attr("checked",false);		
};

mainActivity.selectItem40Select = function(event){
	$("#selectItem41 input").attr("checked",false);		
	$("#selectItem42 input").attr("checked",false);		
};

mainActivity.selectItem41Select = function(event){
	$("#selectItem40 input").attr("checked",false);		
	$("#selectItem42 input").attr("checked",false);		
};

mainActivity.selectItem42Select = function(event){
	$("#selectItem41 input").attr("checked",false);		
	$("#selectItem40 input").attr("checked",false);		
};

mainActivity.selectItem43Select = function(event){
	$("#selectItem44 input").attr("checked",false);		
	$("#selectItem45 input").attr("checked",false);		
};

mainActivity.selectItem44Select = function(event){
	$("#selectItem43 input").attr("checked",false);		
	$("#selectItem45 input").attr("checked",false);		
};

mainActivity.selectItem45Select = function(event){
	$("#selectItem43 input").attr("checked",false);		
	$("#selectItem44 input").attr("checked",false);		
};

mainActivity.selectItem46Select = function(event){
	$("#selectItem47 input").attr("checked",false);		
	$("#selectItem48 input").attr("checked",false);		
};

mainActivity.selectItem47Select = function(event){
	$("#selectItem48 input").attr("checked",false);		
	$("#selectItem46 input").attr("checked",false);		
};

mainActivity.selectItem48Select = function(event){
	$("#selectItem46 input").attr("checked",false);		
	$("#selectItem47 input").attr("checked",false);		
};

mainActivity.selectItem49Select = function(event){
	$("#selectItem50 input").attr("checked",false);		
	$("#selectItem51 input").attr("checked",false);		
};

mainActivity.selectItem50Select = function(event){
	$("#selectItem49 input").attr("checked",false);		
	$("#selectItem51 input").attr("checked",false);		
};

mainActivity.selectItem51Select = function(event){
	$("#selectItem50 input").attr("checked",false);		
	$("#selectItem49 input").attr("checked",false);		
};

mainActivity.selectItem52Select = function(event){
	$("#selectItem53 input").attr("checked",false);		
	$("#selectItem54 input").attr("checked",false);		
};

mainActivity.selectItem53Select = function(event){
	$("#selectItem52 input").attr("checked",false);		
	$("#selectItem54 input").attr("checked",false);		
};

mainActivity.selectItem54Select = function(event){
	$("#selectItem52 input").attr("checked",false);		
	$("#selectItem53 input").attr("checked",false);	
};

mainActivity.deleteTriggerClick = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的培训资格评价信息！");
	} else {
		if (confirm("是否确定删除数据？")) {
			for ( var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
			}
			if (deleteIDs != "") {
				data.deleteData(deleteIDs);
				data.saveData();
			}
		}
	}	
};

mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});	
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('textarea8').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl("input2").input).bind('keydown',function(evt){evt.preventDefault();});
	$(justep.xbl("input6").input).bind('keydown',function(evt){evt.preventDefault();});
};

mainActivity.saveMasClick = function(event){
	var data = justep.xbl('dataMain');
	data.saveData();
	var id = document.getElementById('insertMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(false);
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);	
};

mainActivity.insertMasClick = function(event){
	var dataMaster = justep.xbl("dataMain");
	justep.xbl("dataMain").newData();
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
	var perId = '';
	var name = '';
	if(hrPerData.getCount()!=0){
		perId = hrPerData.getCurrentID();
		name = hrPerData.getValue("oPERATORNAME",perId);
	}
	
	//alert(perId);
	dataMaster.setValue("EVALUATEE",perId);
	dataMaster.setValue("EVALUATEE_NAME",name);
	
	dataMaster.setValue("RECOMMENDATION","1 3");	
	dataMaster.setValue("APPROVAL_OPINION","1");	
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(true);
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMainValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};
