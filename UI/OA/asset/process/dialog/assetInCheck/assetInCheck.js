function model1load(event) {
	justep.xbl("mainData").newData();
}

function trgOKDOMActivate() {
	var data = justep.xbl("mainData");
	data.saveData();
	var id = data.getCurrentRowId();
	var info = id + "," + data.getValue("fNO",id);
	windowEnsure(info);
}

function trgCancelDOMActivate() {
	windowCancel();
}