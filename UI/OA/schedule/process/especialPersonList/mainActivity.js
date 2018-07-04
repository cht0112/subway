var mainActivity = {};
var personID;
function checkBox(data) {
	var fid = data.rowId;
	var html = "<input type=\"checkbox\" name=\"checkbox\" id=\"" + fid + "\">";
	return html;
}
mainActivity.treeSltDeptCloseup = function(event) {
	var bizData = justep.xbl("especialPersonData");
	var orgID = bizData.getValue("fExecutorID");
	var orgIDAry = orgID.split("@");
	var fExecutorID = orgIDAry[0];
	personID = fExecutorID;
	bizData.setValue("fExecutorID", fExecutorID);
	if(checkPerson()){
		bizData.setValue("fExecutorName",""); 		
	}
};
mainActivity.especialPersonDataBeforeSave = function(event) {
	/*var bizData = justep.xbl("especialPersonData");
	var personName = bizData.getValue("fExecutorName");
	if (personName != "") {
		if (checkPerson()) {
			event.cancel = true;
		}
	}*/
};
function checkPerson() {
	var bizData = justep.xbl("especialPersonData");
	var personName = bizData.getValue("fExecutorName");
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	var action = "checkPersonAction";
	param.setString('fID', personID);
	var r = justep.Request.sendBizRequest(process, activity, action, param,
			null, null, true);
	var responseText = justep.Request.transform(justep.Request.getData(r.responseXML));
	if (("" == responseText) || (null == responseText)) {
		return false;
	} else {
		alert(personName + "已经存在,请重新选择要添加的人员！");
	}
	return true;
}
mainActivity.barItem3Click = function(event){
    var bizData = justep.xbl("especialPersonData");
    var selectGrid = justep.xbl("gridOfPersonList").grid;
 	var checkIdAry = selectGrid.getCheckedRowIds();
 	var deleteIds ="";
 	for(var i=0 ; i<checkIdAry.length;i++){
 	  deleteIds += "," + checkIdAry[i];
 	}
 	bizData.deleteData(deleteIds);
};

mainActivity.trigger1Click = function(event){
	var bizData = justep.xbl("especialPersonData");
    var selectGrid = justep.xbl("gridOfPersonList").grid;
 	var checkIdAry = selectGrid.getCheckedRowIds();
 	var deleteIds ="";
 	for(var i=0 ; i<checkIdAry.length;i++){
 	  deleteIds += "," + checkIdAry[i];
 	}
 	bizData.deleteData(deleteIds);
};
