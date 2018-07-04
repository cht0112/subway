var selectSingleAction = {};
selectSingleAction_inputParams = [];
selectSingleAction.model1Load = function(event){
};

selectSingleAction.btnOKClick = function(event){
	var data = justep.xbl("actions");
	var action = data.getValue("action");
	var name = data.getValue("name");
	var r = {"action":action, "name":name};
	justep.windowDialogReceiver.windowEnsure(r);
};
selectSingleAction.btnCancelClick = function(event){
	justep.windowDialogReceiver.windowCancel();	
};
selectSingleAction.windowReceiver1Receive = function(event){
	var param = "<form><model>" + event.data.model + "</model>" +
				"<process>" + event.data.process + "</process>" + 
				"<activity>" + event.data.activity + "</activity></form>";
	
	var XMLHttpRequest = justep.Request.sendHttpRequest("/SA/log/getActions.j", param);
	var responseXML = XMLHttpRequest.responseXML;
   	if (justep.Request.isBizSuccess(XMLHttpRequest)){
   		var response = justep.XML.eval(responseXML, "/root/data", "single");
   		var data = justep.xbl("actions");
   		data.loadXML(response);
   	}else{
   		var message = justep.XML.getNodeText(justep.XML.eval(responseXML, "/root/message", "single"));
   		throw new Error(message);
   	}
};
selectSingleAction.searchTextKeydown = function(event){
	if (event.keyCode == 13){
		selectSingleAction.searchButtonClick();
	}
};
selectSingleAction.searchButtonClick = function(event){
	var grid = justep.xbl("grid1").grid;
	var searchText = justep("searchText").value;
	if (searchText == undefined || searchText == null){
		searchText = "";
	}
	grid.filterBy(grid.getColIndexById("name"), searchText);
};
