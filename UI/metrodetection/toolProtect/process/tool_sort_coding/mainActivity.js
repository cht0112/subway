var mainActivity = {};
var vali;
/**
	name:bizData#onBeforeSave
	description: <b>[回调型事件]</b>业务数据保存前
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"cancel":可修改，设置为true后中断当前保存动作}
*/
mainActivity.dataMainBeforeSave = function(event){
	var toolCategoryCode = justep.xbl("dataMain");
	var numScode = toolCategoryCode.getValue("nUMSCODE");
	if(numScode.length != 4) {
		alert("编码必须为4位");
		return false;
	} 
};


mainActivity.saveMore = function(event){
	var toolCategoryCode = justep.xbl("dataMain");
	var numScode = toolCategoryCode.getValue("nUMSCODE");
	if(numScode.length != 4) {
		alert("编码必须为4位");
		return false;
	} else {
		var idd = document.getElementById('saveMas');
		idd.disabled = true;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/un_save.gif", true);
		$("#saveMas").attr("src", tt);
		
		toolCategoryCode.saveData();
		
		
		var oakind = justep.xbl("oakind");
		oakind.loadData();
		var cout = oakind.getCount();
		for ( var i = 0; i < cout; i++) {
			var rowID = oakind.getID(i);
			var code = oakind.getValue("lINKCODE", rowID);
			if(code.split("!*!") != -1) {
				var toolSortCode = code.split("!*!")[0];
				var toolTypeCode = code.split("!*!")[1];
				var toolTypeName = code.split("!*!")[2];
				code = numScode+toolTypeCode+toolTypeName;
				var linkCodeNew = numScode+"!*!"+toolTypeCode+"!*!"+toolTypeName;
				if(toolSortCode == vali) {
					oakind.setValue("fCode", code, rowID);
					oakind.setValue("lINKCODE", linkCodeNew, rowID);
					oakind.saveData();
				}
			}
			
		}
		
	}
};

mainActivity.newItemClick = function(event){
	var toolCategoryCode = justep.xbl("dataMain")
	var idd = document.getElementById('saveMas');
		idd.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMas").attr("src", tt);
	toolCategoryCode.newData();
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMainValueChanged = function(event){
	var toolCategoryCode = justep.xbl("dataMain");
	var cons = toolCategoryCode.getValue("tOOLCATEGORYCNAME", toolCategoryCode.getCurrentID());
	var col = event.column;
	if(col == "nUMSCODE") {
		vali = event.originalValue;
		
		if(vali != "" && vali != null) {
			//工具模块变更履历
			var toolsChangeRecords = justep.xbl("toolsChangeRecords");
			toolsChangeRecords.newData();
			toolsChangeRecords.setValue("CHANGE_MODULAR", "工具分类编码");
			toolsChangeRecords.setValue("CHANGE_MODULAR_CONTENT",cons);
			toolsChangeRecords.setValue("CHANGE_BEFORE_VAL", event.originalValue);
			toolsChangeRecords.setValue("CHANGE_AFTER_VAL", event.value);
			toolsChangeRecords.saveData();
		}
	}
	
	
	var idd = document.getElementById('saveMas');
		idd.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMas").attr("src", tt);
};
