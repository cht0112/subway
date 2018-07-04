var selectExecutorsQ = {};
var selectExecutorsQ = {
	result: []
};
selectExecutorsQ.cancelButtonClick = function(event){
	justep.windowReceiver.windowCancel();
};
selectExecutorsQ.getSelected = function(id) {
	var data = justep.xbl("orgPerson");
	var fid = data.getValue("fid", id);
	var fname = data.getValue("fname", id);
	var kind = data.getValue("kind", id);
	var name = data.getValue("name", id);
	selectExecutorsQ.result.push({"fid": fid, "fname": fname, "kind": kind, "name": name, "responsible": "", "data_id": selectExecutorsQ.dataId});
};
selectExecutorsQ.okButtonClick = function(event){
	selectExecutorsQ.result.length = 0;
	justep.xbl("orgTree").selectedEach(selectExecutorsQ.getSelected);
	justep.windowReceiver.windowEnsure({"tableId": selectExecutorsQ.tableId, "selectedRows": selectExecutorsQ.result});
};
selectExecutorsQ.windowReceiverReceive = function(event){
	selectExecutorsQ.tableId = event.data.tableId;
	selectExecutorsQ.dataId = event.data.dataId;
	selectExecutorsQ.orgData = event.data.orgData;
	justep.xbl("orgTree").refresh();
};
selectExecutorsQ.orgTreeRenderRow = function(event){
	var data = justep.xbl("orgPerson");
	var kind = data.getValue("kind", event.rowId);
	event.hasChildren = (kind!="psm");
};
selectExecutorsQ.orgTreeCheckRow = function(event){
	var data = justep.xbl("orgPerson");
	var kind = data.getValue("kind", event.rowId);
	if (kind != "psm") {
		event.checked = false;
	}
};
