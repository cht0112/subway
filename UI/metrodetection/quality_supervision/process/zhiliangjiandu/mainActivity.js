var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var dataMain = justep.xbl("dataMain");
		var operId = justep.Context.getOperatorID();
		//alert(operId);
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
	//alert(perId);
	dataMain.setValue("PLAN_PEOPLE",perId);	
	var i = document.getElementById('save2Mas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#save2Mas").attr("src", cc);
	justep.xbl('save2Mas').setDisabled(true);
};

/**
	name:collapsePanel#onExpand
	description: <b>[回调型事件]</b>展开
*/

mainActivity.mdDefaultXBLLoaded = function(event){

		$(justep.xbl("iptSUPERVISION_PLAN_CODEPLANCODE").input).attr("maxlength",50);
		$(justep.xbl("iptSUPERVISION_NO").input).attr("maxlength",50);
		$(justep.xbl("iptEMPLOYEE_NUMBER").input).attr("maxlength",3);
		$(justep.xbl("iptPROBATION_NUMBER").input).attr("maxlength",3);
		$(justep.xbl("iptSTUDENT_NUMBER").input).attr("maxlength",3);
		$(justep.xbl("iptOTHER_NUMBER").input).attr("maxlength",3);
		$(justep.xbl("textarea5").input).attr("maxlength",1000);
//		$(justep.xbl("textarea2").input).attr("maxlength",1000);
		$(justep.xbl("textarea4").input).attr("maxlength",1000);
		
		
		
		
};
var tt = 0;
var dd = 0;
var aa = 0;
var cc = 0;
var all = 0;
mainActivity.iptEMPLOYEE_NUMBERChange = function(event){
	ff();
};

mainActivity.iptPROBATION_NUMBERChange = function(event){
	ff();
	
};

mainActivity.iptSTUDENT_NUMBERChange = function(event){
	ff();
};



mainActivity.iptOTHER_NUMBERChange = function(event){
	ff();
};
function ff(){
debugger;
	var dataMain = justep.xbl("dataMain")
	tt = parseInt(dataMain.getValue("EMPLOYEE_NUMBER"));
	dd = parseInt(dataMain.getValue("PROBATION_NUMBER"));
	aa = parseInt(dataMain.getValue("STUDENT_NUMBER"));
	cc = parseInt(dataMain.getValue("OTHER_NUMBER"));
	
	dataMain.setValue("TOTAL_NUMBER", tt+dd+aa+cc);


//		var wcData = justep.xbl("wcData");
//		var ab = wcData.getValue("pROJECTDATE");
//		var abb = wcData.getValue("eNDINGDATE");
//		wcData.setValue("PROJECT_DATE", ab);
//		wcData.setValue("ENDING_DATE", abb);

}

/**
	name:bizData#onAfterNew
	description: <b>[回调型事件]</b>业务数据新增后
	@param event 它的结构如下:<br/>{"source":组件的js对象,"id":新增的行Id}
*/

mainActivity.save2More = function(event){
	var t = justep.xbl("qa_supervision_plan_round");
	t.saveData();
	//justep.xbl("qa_supervision_plan_round").refreshData();
	var id = document.getElementById('save2Mas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#save2Mas").attr("src", tt);
	justep.xbl('save2Mas').setDisabled(true);
};


/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
mainActivity.qa_supervision_plan_roundValueChanging = function(event){
	var id = document.getElementById('save2Mas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('save2Mas').setDisabled(false);	
};

mainActivity.gridSelect2Closeup = function(event){
	var dataMain = justep.xbl("dataMain");
		var wcData = justep.xbl("wcData");
		var tt = dataMain.getValue("PROJECT_ID");
//		alert(tt);
		if(typeof tt == "number"){
		wcData.setFilter("filter0", "TEST_PROJECT_INFO = "+ tt);
		wcData.refreshData();
//		dataMain.setFilter("filter1","QA_SUPERVISION_PLAN = "+ tt);
//		dataMain.refreshData();
//		alert(wcData.getCount());
		var aaa = wcData.getValue("pROJECTDATE");
		var bbb = wcData.getValue("eNDINGDATE");
		var ccc = dataMain.getValue("EMPLOYEE_NUMBER");
//		alert(aaa);
//		alert(bbb);
//		alert(ccc);
//		alert(aaa);
		dataMain.setValue("PROJECT_DATE", aaa);
		dataMain.setValue("ENDING_DATE",bbb);
		dataMain.setValue("EMPLOYEE_NUMBER",ccc);
		
		}	
};





/**
	name:bizData#onAfterSave
	description: <b>[回调型事件]</b>业务数据保存后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
mainActivity.qa_supervision_plan_roundAfterSave = function(event){
	var dataMain = justep.xbl("dataMain");
	var QA= justep.xbl("qa_supervision_plan_round");
	var aa = dataMain.getCurrentID();
	QA.setFilter("filter0", "QA_SUPERVISION_PLAN_ROUND.SUPERVISION_PLAN_ID = "+aa);
	//QA.refreshData();
	var c = QA.getCount();
	dataMain.setValue("SUPERVISION_COUNT",c,aa);
	//dataMain.saveData();		
};
