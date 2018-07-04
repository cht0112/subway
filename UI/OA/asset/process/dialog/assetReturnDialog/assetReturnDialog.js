var assetReturnDialog = {};
function trgCancelDOMActivate(event)
{	
	windowCancel();
}
function trgOKDOMActivate(event)
{	
	var data = justep.xbl('dAssetReturn');
	var returnDate = "",remark="";
	returnDate = data.getValue("returnDate");
	remark = data.getValue("remark");
	if(returnDate!="")
	{
		var params = {
			"returnDate" : returnDate,
			"remark" : remark
		}
		windowEnsure(params);
	}else{
		alert("归还日期不能为空！");
	}
}


assetReturnDialog.model1Load = function(event){
	var data = justep.xbl('dAssetReturn');
	data.setValue("returnDate", justep.Date.toString(justep.System.datetime(), "YYYY-MM-DD"));
	
};
