var mainActivity = {};

mainActivity.mdDefaultLoad = function(event){
//$(justep.xbl("input1").input).attr("maxlength", 10);
$(justep.xbl("CHANGE_TITLETITLE2").input).attr("maxlength", 256);
$(justep.xbl("CHANGE_OBJECTOBJECT2").input).attr("maxlength", 50);
$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=100){return false;}} );
$(justep.xbl('textarea3').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea4').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea5').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
$(justep.xbl('textarea6').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}} );
$(justep.xbl('textarea7').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}} );
	var dataMaster = justep.xbl("dataMain");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
	dataMaster.setValue("APPLY_PERSONPERSON",perId);
	dataMaster.setValue("oPERATORNAME",name);	
	dataMaster.setValue("APPLY_APPROVER",perId);
	dataMaster.setValue("oPERATORNAME1",name);	
//	alert(1234);
};

mainActivity.saveMore = function(event){
 var dataMain = justep.xbl("dataMain");
 dataMain.saveData();
	var main = justep.xbl("main");
//	alert(dataMain.getCurrentID());
//	alert(main.getCount());
	main.setFilter("filter", "SA_Task.sData1='"+dataMain.getCurrentID()+"' AND SA_Task.sParent is null AND SA_Task.sTypeName = '检测计划变更审核'");
	main.refreshData();
//	alert(main.getCount());
//	alert(dataMain.getValue("CHANGE_APPLY_NOAPPLYNO"));
	main.setValue("sESField05", dataMain.getValue("CHANGE_APPLY_NOAPPLYNO"),main.getCurrentID());
	
	main.saveData();
//	alert(main.getValue("sESField05"),main.getCurrentID());
	var i = document.getElementById('saveTrigger');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger").attr("src", cc);
	justep.xbl('saveTrigger').setDisabled(true);
	
};

/**
	name:process#onAdvanceCommit
	description: <b>[回调型事件]</b>流转成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
mainActivity.flwAdvanceCommit = function(data){
	var dataMain = justep.xbl("dataMain");
	var main = justep.xbl("main");
//	alert(dataMain.getCurrentID());
	main.setFilter("filter", "sData1='"+dataMain.getCurrentID()+"'AND SA_Task.sParent is null AND SA_Task.sTypeName = '检测计划变更审核'");
	main.refreshData();
//	alert(main.getCount());
//	alert(main.getCurrentID());
	main.setValue("sESField05", dataMain.getValue("CHANGE_APPLY_NOAPPLYNO"),main.getCurrentID());
	main.saveData();
};



/**
	name:process#onAbortCommit
	description: <b>[回调型事件]</b>终止成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
mainActivity.flwAbortCommit = function(data){
	var dataMain = justep.xbl("dataMain");
	var main = justep.xbl("main");
//	alert(dataMain.getCurrentID());
	main.setFilter("filter", "sData1='"+dataMain.getCurrentID()+"'AND SA_Task.sParent is null AND SA_Task.sTypeName = '检测计划变更审核'");
	main.refreshData();
//	alert(main.getCount());
//	alert(main.getCurrentID());
	main.setValue("sData2", dataMain.getValue("CHANGE_APPLY_NOAPPLYNO"),main.getCurrentID());
	main.saveData();
};

mainActivity.gridSelect1Closeup = function(event){
	var c = justep.xbl("dataMain");
	var a = c.getValue("PROJECT_NAMENAME" );
	var b = justep.xbl("bizData1");
	b.setFilter("filter", "TEST_PROJECT_INFO="+a);
	var d = b.getCurrentID();
	c.setValue("PROJECT_IDID",d);
};
