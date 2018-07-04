var assetSortCode = {};

var id = "";
var sort = ""; 
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
assetSortCode.assetWRReceive = function(event){
	id = event.data.id;
	sort = event.data.sort;
	var assetCD = justep.xbl("assetCD");
	assetCD.newData();
	assetCD.setValue("fixCode", 80);
	if(sort != null  && sort != ""){
		var sortCodeRe = sort.substring(2,10);
		var sequeCodeRe = sort.substring(10,12);
		var ownercodeRe = sort.substring(12);
		assetCD.setValue("sortCode", sortCodeRe);
		assetCD.setValue("sequeCode", sequeCodeRe);
		assetCD.setValue("ownercode", ownercodeRe);
	}	
};

assetSortCode.trigger1Click = function(event){
	var assetCD = justep.xbl("assetCD");
	var fixCode = assetCD.getValue("fixCode");
	var sortCode = assetCD.getValue("sortCode");
	var sequeCode = assetCD.getValue("sequeCode");
	var ownercode = assetCD.getValue("ownercode");
	if(sortCode == null || sortCode =="" && sortCode.length == 0){
		alert("分类编码不能为空！");
		return;
	}
	if(sequeCode == null || sequeCode =="" && sequeCode.length == 0){
		alert("序号代码不能为空！");
		return;
	}
	if(ownercode == null || ownercode =="" && ownercode.length == 0){
		alert("归属代码不能为空！");
		return;
	}
	//alert(fixCode+"=="+sortCode+"=="+sequeCode+"=="+ownercode);
	var assetWR = justep.xbl("assetWR");
	var code = ""+fixCode+sortCode+sequeCode+ownercode;
	//alert(code);
	//assetWR.windowEnsure({"fixCode":fixCode,"sortCode":sortCode,"sequeCode":sequeCode,"ownercode":ownercode}, true);
	assetWR.windowEnsure({"code":code});
};
