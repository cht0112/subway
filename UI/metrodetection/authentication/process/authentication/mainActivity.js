var mainActivity = {};

/**
	name:grid#onInit
	description: 表格初始化时
	@param event 事件属性:<br/>{"source":XFGrid对象,"grid":dhtmlxGrid对象}
*/
mainActivity.grdMainInit = function(event){
	var data = justep.xbl("dataMain");
	var orgID = justep.Context.getCurrentPersonID()+"@"+justep.Context.getCurrentOrgID();
	data.setFilter("filter0","OPERATOR_PASSWORD = MEMBER_IN_USERGROUP.oPERATORID or OPERATOR_PASSWORD.oRGID = '"+orgID+"'");
	data.loadData();
};

mainActivity.trigger2Click = function(event){
	var orgID = justep.Context.getCurrentPersonID()+"@"+justep.Context.getCurrentOrgID();
	var param = new justep.Request.ActionParam();
	param.setString("orgID", orgID);

	var ui = justep.Request.transform(justep.Request.getData(justep.Request.sendBizRequest("/metrodetection/authentication/process/authentication/authenticationProcess", "mainActivity", "downUser",param , null, null, null, null, null).responseXML));
	if(null!=ui){
	debugger;
		var elemIF = document.createElement("iframe");
		var url = window.location.protocol + "//" + window.location.host + justep.Request.convertURL(ui,true);
		elemIF.src = url;
		document.body.appendChild(elemIF); 
	}
};
