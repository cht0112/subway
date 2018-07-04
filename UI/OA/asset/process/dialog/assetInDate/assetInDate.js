function trgOKDOMActivate() {
	var data = justep.xbl("dAssetInDate");
	var inDate = data.getValue("assetInDate");
	windowEnsure(inDate);
}

function trgCancelDOMActivate() {
	windowCancel();
}
function mdMainload(event)
{	
	var data = justep.xbl("dAssetInDate");
	data.setValue("assetInDate",justep.Date.toString(justep.System.datetime(),'YYYY-MM-DD'))
}