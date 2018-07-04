var selectTmpDialog = {};

selectTmpDialog.docNodeTreeGridShowNodeImg = function(event){
	return '/UI/SA/doc/docCenter/images/folder.gif';
};

selectTmpDialog.windowEnsure = function(event){
	var docNodeList = justep.xbl("docNodeList");
	var docId = docNodeList.getCurrentRowId();
	var fileID = docNodeList.getValue("sFileID")
	var docName = docNodeList.getValue("sDocName");
	var docPath = docNodeList.getValue("sDocPath");
	justep.windowDialogReceiver.windowEnsure({docId:docId,docName:docName,docPath:docPath,fileID:fileID});
};