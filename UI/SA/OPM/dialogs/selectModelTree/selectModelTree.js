var selectModelTree = {};

selectModelTree.receiverReceive = function(event) {
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

selectModelTree.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};

selectModelTree.btnOKClick = function(event) {
	var dModelTree = justep.xbl("dModelTree");
	var selectedRowIDs = justep.xbl("gridModelTree").grid.getCheckedRowIds();
	if (selectedRowIDs.length == 0) {
		justep.OpmUtils.showWarning("请勾选模块！");
		return;
	}
	var r = new SimpleStore(null, dModelTree.getColumnIds());
	for ( var i = 0; i < selectedRowIDs.length; i++) {
		r.insert(selectedRowIDs[i], 0, 0, justep.OpmUtils.getRowDataExt(dModelTree.getStore(), selectedRowIDs[i]));
	}
	justep.windowDialogReceiver.windowEnsure(r);
};
selectModelTree.gridModelTreeShowNodeImg = function(event){
	return "/UI/SA/OPM/images/folder.gif";
};
