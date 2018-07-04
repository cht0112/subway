var pubAssetBaseCodeActivity = {};
var info = "";
var isNewClick=false;
var mod;
//启用
function startUseFun() {
	try {
		var data = justep.xbl('dPubBaseCodeAsset');
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
		var data = justep.xbl('dPubBaseCodeAsset');
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
		var data = justep.xbl('dPubBaseCodeAsset');
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
	var data = justep.xbl('dPubBaseCodeAsset');
	
	data.setValue("fUpdatePsnID",psnID);
	data.setValue("fUpdatePsnName",psnName);
	data.setValue("fUpdateTime",time);
}

pubAssetBaseCodeActivity.listGrid_fCodeButtonClick = function(event){
	var data = justep.xbl('dPubBaseCodeAsset');
	var id = data.getCurrentRowId();
	var fCode = data.getValue("fCode", id);
	//alert(id+"=="+fCode);
	var assetW = justep.xbl('asserWD');
	assetW.open({"id":id,"fCode":fCode});
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
pubAssetBaseCodeActivity.asserWDReceive = function(event){
	var toolCategory = event.data.toolCategory.toString();
	//alert(toolCategory+"=="+typeof(toolCategory));
	/*if(toolCategory.length==1){
		toolCategory="000"+toolCategory;
	}else if(toolCategory.length==2){
		toolCategory="00"+toolCategory;
	}else if(toolCategory.length==3){
		toolCategory="0"+toolCategory;
	}*/
	var toolSort = event.data.toolSort.toString();
	/*if(toolSort.length==1){
	toolSort="0"+toolSort;
	}*/
	var toolType = event.data.toolType.toString();
	/*if(toolType.length==1){
		toolType="0"+toolType;
	}*/
	//alert(toolCategory+"=="+toolSort+"=="+toolType);
	var code = toolCategory+toolSort+toolType;
	info = toolCategory+"!*!"+toolSort+"!*!"+toolType;
	//alert(toolCategory);
	//alert(toolSort);
	//alert(toolType);
	//alert(code);
	var data = justep.xbl('dPubBaseCodeAsset');
	data.setValue("fCode", code);
};

pubAssetBaseCodeActivity.saveMasClick = function(event){
	var data = justep.xbl('dPubBaseCodeAsset');
	var id = data.getCurrentRowId();
	var fSequence = data.getValue("fSequence", id);
	var fName = data.getValue("fName", id);
	var fType = data.getValue("fType", id);
	var fDescription = data.getValue("fDescription", id);
	var fCode = data.getValue("fCode", id);
	var havInfo = data.getValue("lINKCODE", id);
	if(havInfo != null && havInfo != "") {
		info = havInfo;
	}
	var codeLen = fCode.length;
	if(codeLen < 8) {
		alert("编码至少为8位");
	} else {
		data.setFilter("havFilter", "OA_AS_Kind.fCode='"+fCode+"'");
		data.refreshData();
		data.loadData();
		//alert(data.getCount());
		//alert(isNewClick);
		//alert(mod);
		if(data.getCount() > 0) {
			if(mod != "updateMod") {
				data.setFilter("havFilter", "1=1");
				data.refreshData();
				data.loadData();
				alert("编码已存在");
				isNewClick=false;
			} else {
				if(isNewClick) {
					alert("编码已存在");
					data.setFilter("havFilter", "1=1");
					data.refreshData();
					data.loadData();
					isNewClick=false;
				} else {
					data.setValue("fCode", fCode);
					data.setValue("fName", fName);
					data.setValue("fType", fType);
					data.setValue("fDescription", fDescription);
					data.setValue("fSequence", fSequence);
					data.setValue("lINKCODE", info);
					data.saveData();
					var id = justep.xbl("saveMas");
					id.setDisabled(true);
					data.setFilter("havFilter", "1=1");
					data.refreshData();
					data.loadData();
					mod="";
					isNewClick=false;
				}
			}
		} else {
			data.newData();
			data.setValue("fCode", fCode);
			data.setValue("fName", fName);
			data.setValue("fType", fType);
			data.setValue("fDescription", fDescription);
			data.setValue("fSequence", fSequence);
			data.setValue("lINKCODE", info);
			data.saveData();
			isNewClick=false;
			var id = justep.xbl("saveMas");
			id.setDisabled(true);
			//var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
			//$("#saveMas").attr("src",tt);
			data.setFilter("havFilter", "1=1");
			data.refreshData();
			data.loadData();
		}
	
	}
};

pubAssetBaseCodeActivity.insertMasClick = function(event){
	var data = justep.xbl('dPubBaseCodeAsset');
	data.newData();
	var id = justep.xbl("saveMas");
	id.setDisabled(false);
	mod="newData";
	isNewClick=true;
};



pubAssetBaseCodeActivity.delMasClick = function(event){
	var data = justep.xbl('dPubBaseCodeAsset');
	var curId = data.getCurrentID();
	var status = data.getValue("fUseStatusName", curId);
	if(status == '未启用') {
		data.deleteData(curId);
		//data.saveData();
		
		var rid = justep.xbl("delMas");
		rid.setDisabled(true);
	} else {
		alert('已经启用或停用无法删除!');
	}
};





/**
	name:grid#onRowClick
	description: 行单击事件
	@param {object} event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
pubAssetBaseCodeActivity.listGridRowClick = function(event){
	var data = justep.xbl('dPubBaseCodeAsset');
	var rowId = event.rowID;
	var status = data.getValue("fUseStatusName", rowId);
	var rid = justep.xbl("delMas");
	if(status == '未启用') {
		rid.setDisabled(false);
	} else {
		rid.setDisabled(true);
	}
	
};

pubAssetBaseCodeActivity.listGridRowDblClick = function(event){
	mod="updateMod";
	var id = justep.xbl("saveMas");
	id.setDisabled(false);
};
