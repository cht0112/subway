function triggerInsertGroupDOMActivate(event) {
	var dGroup = justep.xbl("dGroup");
	var parentID = dGroup.getCurrentRowId();
	dGroup.newData(null, parentID);
}
function gridGroupShowNodeImg(event) {
	return "/UI/appCommon/images/folder.gif";
}
function dlgInsertDetailSend(event) {
	var data = {
		"rootFilter" : "sParent is null",
		"fixedFilter" : null,
		"manageTypeCodes" : null,
		"displayableOrgKinds" : null,
		"selectableOrgKinds" : null,
		"onlyMainPsm" : false,
		"selectedFilter" : null
	};
	return data;
}
function dlgInsertDetailReceive(event) {
	var dDetail = justep.xbl("dDetail");
	for (var i = 0; i < event.data.getRowsNum(); i++) {
		var id = event.data.getRowId(i);
		if (dDetail.locate([event.data.getRowId(i)], ["fOrgID"], false, false,
				false).length > 0)
			continue;
		var name = event.data.getValueByName("sName", i);
		var fullID = event.data.getValueByName("sFID", i);
		var fullName = event.data.getValueByName("sFName", i);
		var orgKind = event.data.getValueByName("sOrgKindID", i);
		var index = dDetail.getCount();
		dDetail.newData(index);
		dDetail.setValue("fOrgID", id);
		dDetail.setValue("fOrgName", name);
		dDetail.setValue("fOrgFID", fullID);
		dDetail.setValue("fOrgFName", fullName);
		dDetail.setValue("fOrgKind", orgKind);
		dDetail.setValue("fSequence", index + 1);
	}
}
function triggerInsertDetailDOMActivate(event) {
	justep.xbl("dlgInsertDetail").open();
}
function gridDetailFOrgKindRender(event) {
	return "<img src='"
			+ justep.Request.convertURL(justep.Resource
					.getOrgImgURL(event.value), true) + "'/>";
}
function triggerDetailMoveUpDOMActivate(event) {
	var dDetail = justep.xbl("dDetail");
	var rowID = dDetail.getCurrentRowId();
	if (!rowID)
		return;

	dDetail.getStore().moveRowUp(rowID);
	var index = dDetail.getIndex(rowID);
	rebuildDetailSequence(index);
}
function triggerDetailMoveDownDOMActivate(event) {
	var dDetail = justep.xbl("dDetail");
	var rowID = dDetail.getCurrentRowId();
	if (!rowID)
		return;

	dDetail.getStore().moveRowDown(rowID);
	var index = dDetail.getIndex(rowID);
	rebuildDetailSequence(index - 1);
}

function rebuildDetailSequence(startIndex) {
	var dDetail = justep.xbl("dDetail");
	for (i = startIndex; i < dDetail.getCount(); i++)
		dDetail.setValue("fSequence", i + 1, dDetail.getRowId(i));
}
function dGroupBeforeDelete(event){
	var dGroup = justep.xbl("dGroup");
	var nodeKind = dGroup.getValue("fNodeKind");
	if (nodeKind != dhtmlXGridObject.prototype.NodeKindLeaf) {
		alert("选中的分组有下级分组，不能删除");
		event.cancel = true;
	}
}