//启用
function startUseFun() {
	try {
		var data = justep.xbl('dPubBaseCode');
		var id = data.getCurrentRowId();
		
		data.setValue("fUseStatus",'1',id);
		data.setValue("fUseStatusName",'启用',id);
		data.saveData();
	} catch(e) {
		alert("对不起,启用失败!");
	}
}

//全部启用
function useAllFun() {
	try {
		var data = justep.xbl('dPubBaseCode');
		var len = data.getCount();
		
		for(var i=0; i<len; i++) {
			var id = data.getRowId(i);
			var useFlag = data.getValue("fUseStatus",id);
			if(useFlag == '0' || useFlag =='') {
				data.setValue("fUseStatus",'1',id);
				data.setValue("fUseStatusName",'启用',id);
			}
		}
		data.saveData();
	} catch(e) {
		alert("对不起,全部启用失败!");		
	}
}

//停用
function stopUseFun() {
	try {
		var data = justep.xbl('dPubBaseCode');
		var id = data.getCurrentRowId();
		
		data.setValue("fUseStatus",'2',id);
		data.setValue("fUseStatusName",'停用',id);
		data.saveData();
	} catch(e) {
		alert("对不起,停用失败!");
	}
}

function dPubBaseCodeValueChanged(event) {
	var psnID = justep.Context.getCurrentPersonID();
	var psnName = justep.Context.getCurrentPersonName();
	var time = justep.Date.toString(justep.System.datetime(),justep.Date.STANDART_FORMAT);
	var data = justep.xbl('dPubBaseCode');
	
	data.setValue("fUpdatePsnID",psnID);
	data.setValue("fUpdatePsnName",psnName);
	data.setValue("fUpdateTime",time);
}