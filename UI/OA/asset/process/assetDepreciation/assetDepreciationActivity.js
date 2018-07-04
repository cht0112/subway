function trgDepreciationDOMActivate(event)
{	
	var data = justep.xbl('dAssetDeprecition');
	var dTemp = justep.xbl('dTemp');
	var year = dTemp.getValue("year");
	var month = dTemp.getValue("month");
	if(year==""){
		if(month==""){
			alert("请输入折旧年度、月份!");
		}else{
			alert("请输入折旧年度!");
		}
	}else{
		if(month==""){
			alert("请输入折旧月份!");
		}else{
			refreshData();
			if(data.getCount() > 0){
				if(confirm(year+"年"+month+"月份资产已折旧，是否需要重新计算折旧?")){
					insertDepreciation(year, month);
					var updateResult = updateDepreciation(year, month);
					if(updateResult==true){
						refreshData();
						alert("折旧计算完成！");
					}
				}
			}else{
				var insertResult = insertDepreciation(year, month);
				if(insertResult==true){
					refreshData();
					if(data.getCount()>0){
						updateResult = updateDepreciation(year, month);
						if(updateResult==true){
							refreshData();
							alert("折旧计算完成！");
						}
					}
				}
			}
		}
	}
}

function updateDepreciation(year, month){
	var param = new justep.Request.ActionParam();
	param.setInteger("year", year);
	param.setInteger("month", month);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity, "updateDepreciationAction",
			param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "更新资产折旧数据失败!"));
	}
	return true;
}

function insertDepreciation(year, month){
	var param = new justep.Request.ActionParam();
	param.setInteger("year", year);
	param.setInteger("month", month);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var r = justep.Request.sendBizRequest(process, activity, "insertDepreciationAction",
			param);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "插入资产折旧数据失败!"));
	}
	return true;
}

function trgSearchDOMActivate(event)
{	
	refreshData();
}

function refreshData(){
	var data = justep.xbl('dAssetDeprecition');
	var dTemp = justep.xbl('dTemp');
	var year = dTemp.getValue("year");
	var month = dTemp.getValue("month");
	var filter = "('integer:1' = 'integer:1')";
	if (year == "") {
		if(month == ""){
			alert("请输入折旧年度、月份!");		
		}else{
			alert("请输入折旧年度!");	
		}				
	} else if (year != "") {
		if (month == "") {
			filter = "fDepreYear="+ year;
		} else {
			filter = "fDepreYear=" + year + " and fDepreMonth=" + month;
		}
		data.filters.setFilter("assetDeprecitionFilter", filter);
		data.refreshData();
	}
}