var importExcelDialog = {};
var flag = false;
importExcelDialog.inputbutton1Click = function(event){

	debugger;
	var file = document.getElementById("file");
	if (justep.String.trim(file.value.toString() == "")) {
		alert("请选择要导入的文件!");
	}else{
		var fileName = file.value.toString().trim();
		var position = fileName.lastIndexOf(".");
		var extName = fileName.substring(position + 1);
		if ("XLS" != extName.toUpperCase()) {
			alert("请选择xls格式文件!");
		} else {
			flag = true;
			var url = justep.Request.convertURL("/UI/metrodetection/testing_standard/process/zhibiaokuvalueProcess/importValue.j",false);
			//var url = justep.Request.convertURL("/UI/metrodetection/detection_case_info_view/process/importCase/UploadCase.j",false);
			document.getElementById("importValue").action = url;
			document.forms["importValue"].submit();
//			if(document.forms["importValue"].submit()){
//				justep.windowReceiver.windowCancel();
//			}else{
//				alert("导入失败，请重新导入！")
//			}
		}
	}
//	justep.windowReceiver.windowEnsure({
//		flag:flag
//	},true);
	
};
importExcelDialog.afterImportCase = function(iframe){
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