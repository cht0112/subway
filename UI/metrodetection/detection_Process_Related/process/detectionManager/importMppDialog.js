var importMppDialog = {};

var flag = false;
importMppDialog.inputbutton1Click = function(event){
//	debugger;
	var data = justep.xbl("data1");
	var file = document.getElementById("file");
	
	if (justep.String.trim(file.value.toString() == "")) {
		alert("请选择要导入的文件!");
	}else{
		var fileName = file.value.toString().trim();
		var position = fileName.lastIndexOf(".");
		var extName = fileName.substring(position + 1);
		if ("MPP" != extName.toUpperCase()) {
			alert("请选择mpp格式文件!");
		} else {
			flag = true;
			var url = justep.Request.convertURL("/UI/metrodetection/detection_Process_Related/process/detectionManager/ImportMpp.j?applicationNo="+data.getValue("applicationNo")+"&timeParam="+data.getValue("timeParam"),false);
			document.getElementById("importValue").action = url;
			document.forms["importValue"].submit();

		}
	}

	
};
importMppDialog.afterImportCase = function(iframe){
	if(flag){
		if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
			var doc = (!justep.Browser.IE||justep.Browser.IE9)?iframe.contentWindow.document:iframe.contentWindow.document.XMLDocument;
			if(doc){
				var data = justep.XML.eval(doc, "/root/data/*","single");
				alert(data.textContent);
//				alert(data.text);
				justep.windowReceiver.windowCancel();
				
			}
		}
	}
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
importMppDialog.windowReceiverReceive = function(event){
//debugger;
	var temp = event.data;
	var d = new Array;
	d = justep.String.splitAndTrim(temp, ",");
	var data = justep.xbl("data1");
	data.newData();
	data.setValue("applicationNo", d[0]);
	data.setValue("timeParam",d[1]);
};
