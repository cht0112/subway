var windowDialog = {};
windowDialog._inputParams = {
	a : null
};
windowDialog.smartFilter2GetCondition = function(event){
	var myfilter=(event.value).split("");//把查询的条件分割成单个汉字
    var myfilters="";
    for (var i=0;i<myfilter.length;i++){
    	 myfilters+="%"+myfilter[i];
    }
    myfilters+="%";//重新连接成%A%B%C%的格式
    var datafilter="SYSTEM_RESOURCE_INFO.eRRORSOLUTION like '"+myfilters+"'";
    event.handled = true;
    return datafilter;
};

windowDialog.inputbutton1Click = function(event){
	var projectDat = justep.xbl("dataMain");
	var ID = projectDat.getCurrentID();
	var ON = projectDat.getValue("eRRORSOLUTION",ID);
	justep.windowReceiver.windowEnsure({
		ON:ON
	},true);
	justep.windowReceiver.windowCancel();
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
windowDialog.windowReceiverReceive = function(event){
	windowDialog._inputParams.a = event.data.a;
	justep.xbl("smartFilter2").getInnerInput().input.value = windowDialog._inputParams.a;
	justep.xbl("smartFilter2").getInnerInput().blur();
	justep.xbl("dataMain").refreshData();
	
};


