acceptParentParamsFun = "acceptData";
var kwID = "";
function acceptData(data) {
	var dKnowledge = justep.xbl('dKnowledge');
	kwID = data.kwID;
	dKnowledge.filters.setFilter("dKnowledgeFilter", "OA_KM_Knowledge = '"
			+ kwID + "'");
	dKnowledge.refreshData();
}
function trgRefreshDOMActivate(event) {
	justep.xbl('dKnowledge').refreshData();
}
function trgSureDOMActivate(event) {
	var data = justep.xbl('dKnowledge');
	if (data.isChanged()) {
		data.saveData();
	}
	windowEnsure(kwID);
}
function trgCancelDOMActivate(event) {
	windowCancel();
}
function dKnowledgeSaveCreateParam(event) {
	event.param.setString("otherFolderIDs", otherFolderIDs);
}
