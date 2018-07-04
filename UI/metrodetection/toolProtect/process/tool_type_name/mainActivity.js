var mainActivity = {};
var mod = "";
var vali;

mainActivity.newItemClick = function(event){
	mod = "newData";
	var toolTypeCode = justep.xbl("dataMain");
	var idd = document.getElementById('saveMas');
		idd.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMas").attr("src", tt);
	toolTypeCode.newData();
};


mainActivity.saveMore = function(event){
	var toolTypeCode = justep.xbl("dataMain");
	var numScode = toolTypeCode.getValue("nUMSCODE");
	var parCode = toolTypeCode.getValue("pARENTLEV");
	var tOOLTYPEENAME = toolTypeCode.getValue("tOOLTYPEENAME");
	var tOOLTYPECNAME = toolTypeCode.getValue("tOOLTYPECNAME");
	
	
	if(numScode.length != 2) {
		alert("编码必须为2位");
		return false;
	} else {
		if(parCode == "" || parCode == null || parCode == 0) {
			alert("请选择工具类型!");
			return false;
		} else {
			//取得工具类型编码
			var toolTypeCodeData = justep.xbl("toolTypeCodeData");
			toolTypeCodeData.setFilter("filter0","TOOL_SORT_CODE="+parCode);
			toolTypeCodeData.refreshData();
			toolTypeCodeData.loadData();
			var toolTypeCodeVali = toolTypeCodeData.getValue("nUMSCODE");
			var categoryId = toolTypeCodeData.getValue("pARENTLEV");
			
			//取得工具分类编码
			var toolCategoryData = justep.xbl("toolCategoryData");
			toolCategoryData.setFilter("filter0", "TOOL_CATEGORY_CODE="+categoryId);
			toolCategoryData.refreshData();
			toolCategoryData.loadData();
			var toolCategoryCodeVali = toolCategoryData.getValue("nUMSCODE");
		
			if(mod == "newData") {
				if(parCode != "" && parCode != null && parCode != 0) {
					toolTypeCode.setFilter("filter0_1_ttc", "TOOL_TYPE_CODE.nUMSCODE='"+numScode+"' and TOOL_TYPE_CODE.pARENTLEV="+parCode);
					toolTypeCode.refreshData();
					if(toolTypeCode.getCount() > 0) {
						alert("该工具类型下已有该编码!");
						toolTypeCode.setFilter("filter0_1_ttc", "1=1");
						toolTypeCode.refreshData();
						mod="updateData";
					} else {
						toolTypeCode.newData();
						toolTypeCode.setValue("nUMSCODE", numScode);
						toolTypeCode.setValue("pARENTLEV", parCode);
						toolTypeCode.setValue("tOOLTYPECNAME", tOOLTYPECNAME);
						toolTypeCode.setValue("tOOLTYPEENAME", tOOLTYPEENAME);
						toolTypeCode.saveData();
						toolTypeCode.setFilter("filter0_1_ttc", "1=1");
						toolTypeCode.refreshData();
						var idd = document.getElementById('saveMas');
						idd.disabled = true;
						var tt = justep.Request.convertURL(
								"/UI/system/images/standardToolbar/standard/un_save.gif", true);
						$("#saveMas").attr("src", tt);
						mod="updateData";
						
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
								code = toolSortCode+toolTypeCode+numScode;
								var linkCodeNew = toolSortCode+"!*!"+toolTypeCode+"!*!"+numScode;
								if(toolTypeName == vali && toolSortCode == toolCategoryCodeVali && toolTypeCode == toolTypeCodeVali) {
									oakind.setValue("fCode", code, rowID);
									oakind.setValue("lINKCODE", linkCodeNew, rowID);
									oakind.saveData();
								}
							}
							
						}
						
					}
				} else {
					alert("请选择工具类型!");
				}
			} else {
				var idd = document.getElementById('saveMas');
				idd.disabled = true;
				var tt = justep.Request.convertURL(
						"/UI/system/images/standardToolbar/standard/un_save.gif", true);
				$("#saveMas").attr("src", tt);
				
				toolTypeCode.saveData();
				mod="updateData";
				
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
						code = toolSortCode+toolTypeCode+numScode;
						var linkCodeNew = toolSortCode+"!*!"+toolTypeCode+"!*!"+numScode;
						if(toolTypeName == vali && toolSortCode == toolCategoryCodeVali && toolTypeCode == toolTypeCodeVali) {
							oakind.setValue("fCode", code, rowID);
							oakind.setValue("lINKCODE", linkCodeNew, rowID);
							oakind.saveData();
						}
					}
					
				}
				
			}
		}
		
		
	}
	
	toolTypeCodeData.setFilter("filter0","1=1");
	toolTypeCodeData.refreshData();
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMainValueChanged = function(event){
	var toolTypeName = justep.xbl("dataMain");
	var cons = toolTypeName.getValue("tOOLTYPECNAME", toolTypeName.getCurrentID());
	var col = event.column;
	if(col == "nUMSCODE") {
		vali = event.originalValue;
		if(vali != "" && vali != null) {
			//工具模块变更履历
			var toolsChangeRecords = justep.xbl("toolsChangeRecords");
			toolsChangeRecords.newData();
			toolsChangeRecords.setValue("CHANGE_MODULAR", "工具类型名称");
			toolsChangeRecords.setValue("CHANGE_MODULAR_CONTENT",cons);
			toolsChangeRecords.setValue("CHANGE_BEFORE_VAL", event.originalValue);
			toolsChangeRecords.setValue("CHANGE_AFTER_VAL", event.value);
			toolsChangeRecords.saveData();
		}
	}

	var toolTypeCode = justep.xbl("dataMain");
	var idd = document.getElementById('saveMas');
		idd.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMas").attr("src", tt);
};


