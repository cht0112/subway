var multiOrgPersonSelectorQ = {};
var multiOrgPersonSelectorQ = {
	setExecutors: null
};
multiOrgPersonSelectorQ.windowReceiver2Receive = function(event){
	this.setExecutors = event.data.setExecutorsFunc;
	var data = justep.xbl("bizDataQ1");
	data._prox._rootFilter = "SA_OPOrg.sParent is null";
	data.refreshData();
	justep.xbl("dtreeGridQ1").clear();
};
multiOrgPersonSelectorQ.buttonQ2Click = function(event){
	var fids = [];
	var fnames = [];
	var data = justep.xbl("bizDataQ1");
	justep.xbl("dtreeGridQ1").selectedEach(function(id) {
		var fid = data.getValue("sFID", id);
		fids.push(fid);
		var fname = data.getValue("sFName", id);
		fnames.push(fname);
	});

	this.setExecutors(fids, fnames);
	justep.windowReceiver.windowCancel();
};
multiOrgPersonSelectorQ.buttonQ3Click = function(event){
	justep.windowReceiver.windowCancel();	
};
multiOrgPersonSelectorQ.orgTreeCheckRow = function(event) {
	var data = justep.xbl("bizDataQ1");
	var kind = data.getValue("sOrgKindID", event.rowId);
	if (kind != "psm") {
		event.checked = false;
	}
};