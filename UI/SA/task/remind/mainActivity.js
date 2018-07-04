var mainActivity = {};
var isDetailSave;

function remindShowReceive(data)
{	

	var sName = data.data.name;
	var sContent = data.data.content;
	var obj = document.getElementById('outputPersons');
	obj.innerHTML = sNames+sContent;		
}

function noRemindLoad(data)
{

}

function newPerson()
{
	var mainData = justep.xbl("main");
	if (!mainData)
	{
		return
	}
	var rowId = mainData.getCurrentRowId();
	var personData = justep.xbl('personData');
	var sPersonID = justep.Context.getCurrentPersonID();		
	personData.newData();
			
	personData.instance.setValueByName('sPersonID', sPersonID);
	personData.instance.setValueByName('sRemindID', rowId);
	personData.saveData();
}

function cancelRemindTask()
{
	if(confirm("确认不再提醒吗?"))
	{
		var mainData = justep.xbl("main");
		var rowId = mainData.getCurrentRowId();
		mainData.setValue("sStatusID", 2, rowId);
		mainData.saveData();
		justep.xbl("dialog2").close();
	}	
}

function mainSaveCommit(event)
{
	if (isDetailSave == 2) 	
	{
		/* insertRemindTask(); */
		isDetailSave = 1;	
	}
}

function gotoRowdata()
{

	justep.xbl("dialog2").open();
	
}

function remindTaskwSendData(data)
{
	noRemindLoad(data);
}

function rowSend(){
	var mainData = justep.xbl("main");
	var rowId = mainData.getCurrentRowId();
	var content = mainData.getValue("sContent", rowId);
	var name = mainData.getValue("sName", rowId);
	var data = {
					name:name,
					content:content,
					rowId:rowId					 
				}
		return data;
}	

function remindTaskProcess()
{ 	
	var configData = justep.xbl("configData");
	var currentPersonId = justep.Context.getCurrentPersonID();
	var condition = "SA_RemindConfig.sPersonID = \'"+currentPersonId+"\'";
	  configData.filters.setFilter("personFilter",condition);
	configData.loadData();

	var rowId = configData.getCurrentRowId();
	var OverdueEnable = "";
	OverdueEnable = configData.getValue("sOverdueEnable", rowId);	 
	
	var mainData = justep.xbl("main");	
	mainData.loadData();

	var mainStore = mainData.getStore();
	var mianRowNum = mainStore.getRowsNum();
	var overData = justep.xbl("overData");
	overData.loadData();
	
	var overStore = overData.getStore();
	var overRowNum = overStore.getRowsNum();
	if ( mianRowNum <= 0 &&((OverdueEnable != "true")||(OverdueEnable == "true") && (overRowNum <= 0)))
	{
		return;
	}
	var url = "/SA/task/remind/showActivity.w?"
		+"process=/SA/task/remind/remindProcess&"
		+"activity=mainActivity";
	window.parent.window.Light.portal.showDialog(url,"任务提醒窗口",640,480);
	
}

function newRecord()
{
	var mainData = justep.xbl("main");
	mainData.newData();
}

function remidshow()
{   
	var data = justep.xbl("main");
	document.location.reload(true);
}

function taskRemindTypeAfterRowFill(event)
{	
}function onDetailTabSelect(){
	load_part("detail_toolbar");
	load_part("detail_form");
}
function mainDataValueChanged(evt){
	var fieldName = evt.column;
	if (fieldName == "sLastModifyTime"){
		return;
	}
	
	var nowDateTime = justep.System.datetime() || new Date();
	var nowDateTimeStr = justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT);

	var mainData = justep.xbl("main");
	var rowId = mainData.getCurrentRowId();
	mainData.setValue("sLastModifyTime", nowDateTimeStr, rowId);
	
	if (fieldName == "sExecutorDeptID") {
		mainData.setValue("sExecutorPersonID", "", rowId);
		mainData.setValue("sExecutorPersonName", "", rowId);
	}
	if (fieldName == "sStatusID") {
		var sActualStartTime = mainData.getValue("sActualStartTime", rowId);
		if (sActualStartTime == "") {
			mainData.setValue("sActualStartTime", nowDateTimeStr, rowId);
		}
	}
}


function useActivityOnLoad(){
	var configData = justep.xbl("configData");
	var currentPersonId = justep.Context.getCurrentPersonID();
	var condition = "SA_RemindConfig.sPersonID = \'"+currentPersonId+"\'";
	  configData.filters.setFilter("personFilter",condition);
	configData.loadData();
	var rowId = configData.getCurrentRowId();
	var configinterval = configData.getValue("sIntervalMinute", rowId);	 
	var Enable = "";
	Enable = configData.getValue("sEnable", rowId);
	if (configinterval < 1) 
	  return;
	if (Enable != "true")
	{
		return;
	}
	remindTaskProcess();
	/* setInterval("remindTaskProcess()", configinterval* 60 * 500); */
}

function getPlanData(evt) {
	var plannames = evt.data.getSimpleStore();
	var sNames = "";
	var sCodes = "";
	var mainData = justep.xbl("main");
	if (!mainData)
	{
		return
	}
	var rowId = mainData.getCurrentRowId();
	
	var personData = justep.xbl('personData');
	for (var i = 0; i < plannames.rowsBuffer.length; i++) {	
		var sName = plannames.getValueByName('sName', i);
		var sPersonName = sName;
		var sPersonID = plannames.rowsBuffer[i].idd;
		sNames += sName  + "," ;
		if (!personInData(rowId, sPersonID))
		{		
			personData.newData();
			personData.instance.setValueByName('sPersonID', sPersonID);
			personData.instance.setValueByName('sRemindID', rowId);
			personData.instance.setValueByName('sPersonName', sPersonName);			
			personData.saveData();
		}

	}
	if (sNames != "")
	{
	  sNames = sNames.substring(0,sNames.length-1);
	  mainData.setValue("sReminder", sNames, rowId);
	}

	/*
	 * var obj = document.getElementById('outputPersons'); obj.innerHTML =
	 * sNames;
	 */	
}


function personInData(taskId, personId) 
{
	var personData = justep.xbl('personData');
	var store = personData.getStore();
	
	for(var i=0 ;i < store.getRowsNum() ;i++ ){
		var rowId = store.getRowId(i);
		var staskId = personData.getValue("sRemindID", rowId);
		var spersonId = personData.getValue("sPersonID", rowId);
		if ((staskId==taskId)&&(spersonId==personId))
		{
			return true;
		} 
	}
}

function gotoDetailTab() {
	justep.xbl("tablist").tabbar.setTabActive("detail_tab");
}

function setFlag() 
{
	isDetailSave = 2;
}

function setStatusName() {
	var statusData = justep.xbl("task_status");
	var rowId = statusData.getCurrentRowId();
	var sName = statusData.getValue("sName", rowId);
	
	var mainData = justep.xbl("main");
	var rowId1 = mainData.getCurrentRowId();
	mainData.setValue("sStatusName", sName, rowId1);
}

function getLastItem(str){
	if(str==null){
		return "";
	}
	var index = str.lastIndexOf("/");
	if(index == -1){
		return str;
	}else{
		return str.substring(index+1, str.length); 
	}
}

function getRemindState(data){ 
	if(data.value=='tesReady' || data.value=='tesExecuting'){
		return '继续提醒';
	}else
	{
		return '不再提醒';
	}
}

function insertRemindTask(){

	var mainData = justep.xbl("main");
	var rowId = mainData.getCurrentRowId();
	var param = new justep.Request.ActionParam();
	param.setString('sid',rowId);
	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(), "createRemindTaskAction", param, null, null, true);
    if(!justep.Request.isBizSuccess(r)){
		alert(justep.Request.getServerError(r, "添加失败"));
		return;
	}
}

mainActivity.image1Click = function(event){
	justep.xbl("main").newData();
	justep.xbl("tablist").tabbar.setTabActive("detail_tab");	
};

/**
 * name:bizData#onIndexChanged description: <b>[回调型事件]</b>行记录变化
 * 
 * @param event
 *            它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
 */
mainActivity.dOrgTreeIndexChanged = function(event){
	
};

mainActivity.trigger2Click = function(event){
// justep.xbl("windowDialog1").open();
	if(this.orgMultiTree == null){
		this.orgMultiTree = new justep.WindowDialog("orgMultiTree","/UI/system/dialog/org/orgMultiTree.w","树形机构多选",true,null,530,400);	
	}
	this.orgMultiTree.open();
	this.orgMultiTree.attachEvent("onReceive", function(e){
		 var data = e.data;
		 var selectName = "";
		 var selectFID = "";
		 for ( var i = 0; i < data.length; i++) {
			selectName += data[i]['sName']+",";
			selectFID += data[i]['sFID']+",";
		 }
		 if (selectFID.length >0) {
			selectName = selectName.substring(0, selectName.length-1);
			selectFID = selectFID.substring(0, selectFID.length-1);
		 }else{
			 selectName = "";
			 selectFID = "";
		 }
		 var mainData = justep.xbl("main");
		 var rowId = mainData.getCurrentRowId();
		 mainData.setValue("sReminder", selectName, rowId);
		 mainData.setValue("sReminderID", selectFID, rowId);
	});
};

mainActivity.trigger3Click = function(event){
	var dialog2 = justep.xbl("windowDialog3");	
// dialog2.attachEvent("onReceive", function(e){
// var data = e.data;
// var mainData = justep.xbl("main");
// var rowId = mainData.getCurrentRowId();
// mainData.setValue("sDataModel", data.toString(), rowId);
// });
	dialog2.open();
};



/**
 * name:windowDialog#onReceive
 * 
 * @event {"source":组件的js对象,"data":传回的数据} description: <b>[回调型事件]</b>
 *        对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
 */
mainActivity.windowDialog3Receive = function(event){
	var process = event.data.getValueByName("process", 0);
	var activity = event.data.getValueByName("activity", 0);
//	var cc = event.data.getValueByName("activityFName", 0);

	var mainData = justep.xbl("main");
	var rowId = mainData.getCurrentRowId();
	mainData.setValue("sProcess",process, rowId);
	mainData.setValue("sActivity",activity, rowId);

	var options = {};
	var param = new justep.Request.ActionParam();
	param.setString("process", process);
	var process = "/SA/task/remind/remindProcess";
	var activity = "mainActivity";
	options.contentType = 'json';
	options.process = process;
	options.activity = activity;
	options.dataType = "json";
	options.action = "getDataModelAction";

	options.callback = function(data) {};	
	var response = justep.Request.sendBizRequest2(options);
	var rv = justep.Request.responseParseJSON(response).data;
	mainData.setValue("sDataModel", rv.value, rowId);
	
};
