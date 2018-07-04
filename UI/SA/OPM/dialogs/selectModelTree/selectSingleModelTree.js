var selectSingleModelTree = {};

selectSingleModelTree.receiverReceive = function(event) {
	var dModelTree = justep.xbl("dModelTree");

	var translateParam = new justep.Request.TranslateParam();
	translateParam.dataType = justep.Request.TranslateParam.DATATYPE_ROW_TREE;
	translateParam.rowOption.sequence = dModelTree.getColumnIds();
	translateParam.setTreeOption('tree-parent-relation',"parentPath");
	
	justep.Request.sendBizRequest2({
		action: "getModelTreeAction", 
		translateParam: translateParam, 
		callback: function(callbackData) {
			callbackData.ignoreError = false;
			if (callbackData.state) {
				dModelTree.loadXML(callbackData.response);
			} 
		}
	});
};

selectSingleModelTree.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

selectSingleModelTree.btnOKClick = function(event) {
	var dModelTree = justep.xbl("dModelTree");
	var name = dModelTree.getValue("name");
	var model = dModelTree.getValue("modelPath");
	var parentModel = dModelTree.getValue("parentPath");
	var r = {
			"name": name,
			"model": model
	};
	
	justep.windowDialogReceiver.windowEnsure(r);
};
selectSingleModelTree.gridModelTreeShowNodeImg = function(event){
	return "/UI/SA/OPM/images/folder.gif";
};
