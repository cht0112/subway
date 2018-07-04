var mainActivity = {};
var flag = false;
function uploadCase() {
	var caseV = $('#caseVersion').val();
	var dbiData = justep.xbl("dectionBaseInfoData");
	var dbiId = dbiData.getCurrentID();
	//$('#jianceyiju').val(dbiId);
	//$('#caseVersion').val(caseV);
	var temp = justep.xbl("gridSelect2").toString();
	var importMod = $('#importModel').attr('checked');
	if(dbiId != null && dbiId != "") {
		if(caseV != null && caseV != "") {
			var file = document.getElementById("file");
			if (file.value.toString() == "") {
				alert("请选择要导入的文件!");
			}else{
				var fileName = file.value.toString();
				var position = fileName.lastIndexOf(".");
				var extName = fileName.substring(position + 1);
				if ("ZIP" != extName.toUpperCase()) {
					alert("请选择zip格式文件!");
				} else {
					var reg = /^\d{1,10}$/ ;
					if(!reg.test(caseV)) {
						alert("用例版本只能为整数,请重新输入!");
					} else {
						flag = true;
						var url = justep.Request.convertURL("/UI/metrodetection/detection_case_info_view/process/importCase/UploadCase.j?caseVersion="+caseV+"&jianceyiju="+dbiId+"&importMod="+importMod,false);
						//var url = justep.Request.convertURL("/UI/metrodetection/detection_case_info_view/process/importCase/UploadCase.j",false);
						document.getElementById("fileupload").action = url;
						document.forms["fileupload"].submit();
					}
					
				}
			}
		} else {
			alert("请填写版本信息!");
		}
	} else {
		alert("请选择检测依据!");
	}
}


mainActivity.afterImportCase = function(iframe){
	if(flag){
		if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
			var doc = (!justep.Browser.IE||justep.Browser.IE9)?iframe.contentWindow.document:iframe.contentWindow.document.XMLDocument;
			if(doc){
				var data = justep.XML.eval(doc, "/root/data/*","single");
				alert(data.textContent);
			}
		}
	}
};

mainActivity.importBtnClick = function(event){
	//var path = $('#fileupload').val();
	var caseV = $('#caseVersion').val();
	//alert(path);
	var dbiData = justep.xbl("dectionBaseInfoData");
	var dbiId = dbiData.getCurrentID();
	
	var file = document.getElementById("fileupload");
	if (file.value.toString().trim() == "")
	{
		alert("请选择要导入的文件!");
	}else{
		var fileName = file.value.toString();
		var position = fileName.lastIndexOf(".");
		var extName = fileName.substring(position + 1);
		if ("ZIP" != extName.toUpperCase())
		{
			alert("请选择zip格式文件!");
		}else{
			bool = true;
			var url = justep.Request.convertURL("/UI/metrodetection/detection_case_info_view/process/importCase/UploadCase.j",false);
			//$('#caseForm').attr('action',url);
			//$('#caseForm').submit();
			document.getElementById("caseForm").action = url;
			document.forms["caseForm"].submit();
		}
	}
	
//	var param = new justep.Request.ActionParam;
//	param.setString("dectionBaseInfoId", dbiId);
//	param.setString("fpath", path);
//	param.setString("caseVersion", caseV);
//	var res = justep.Request.sendBizRequest("/metrodetection/detection_case_info_view/process/importCase/importCaseProcess", "mainActivity", "importCase", param, null, null, null, null, null);
//	var mes = justep.Request.transform(justep.Request.getData(res.responseXML));
//	if(caseV == null || caseV == "") {
//		alert("请填写版本信息!");
//	} else {
//		if(!justep.Request.isBizSuccess(res)) {
//			alert("调用Action失败!");
//		} else {
//			//alert("操作已成功!");
//			//alert(mes);
//			if(mes == "error") {
//				alert("用例已存在");
//			} else if(mess == "success") {
//				alert("操作已成功!");
//			} else {
//				alert("导入用例失败!");
//			}
//		}
//	}
};
