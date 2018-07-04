var mainActivity = {};
var mod = "";
var vali;

mainActivity.newItemClick = function(event){
	mod = "newData";
	var toolSortCode = justep.xbl("dataMain");
	var idd = document.getElementById('saveMas');
		idd.disabled = false;
		var tt = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/save.gif", true);
		$("#saveMas").attr("src", tt);
	toolSortCode.newData();
};

mainActivity.saveMore = function(event){
	var toolSortCode = justep.xbl("dataMain");
	var numScode = toolSortCode.getValue("nUMSCODE").trim();
	var parCode = toolSortCode.getValue("pARENTLEV");
	var tOOLSORTENAME = toolSortCode.getValue("tOOLSORTENAME");
	var tOOLSORTCNAME = toolSortCode.getValue("tOOLSORTCNAME");
	
	
	if(numScode.length != 2) {
		alert("编码必须为2位");
		return false;
	} else {
		if(parCode == "" || parCode == null || parCode == 0) {
			alert("请选择工具分类!");
			return false;
		} else {
			//取得工具类型编码
			var toolCategoryData = justep.xbl("toolCategoryData");
			toolCategoryData.setFilter("filter0", "TOOL_CATEGORY_CODE="+parCode);
			toolCategoryData.refreshData();
			toolCategoryData.loadData();
			var categoryCode = toolCategoryData.getValue("nUMSCODE");
			
			if(mod=="newData") {
				if(parCode != "" && parCode != null && parCode != 0) {
				//alert("过滤前：count:"+toolSortCode.getCount()+" size:"+toolSortCode.getTotal());
				toolSortCode.setFilter("filter0_1_tsc", "TOOL_SORT_CODE.nUMSCODE='"+numScode+"' and TOOL_SORT_CODE.pARENTLEV="+parCode);
				toolSortCode.refreshData();
				//alert("过滤后:count:"+toolSortCode.getCount()+" size:"+toolSortCode.getTotal());
					if(toolSortCode.getCount() > 0) {
						alert("该工具分类下已有该编码!");
						toolSortCode.setFilter("filter0_1_tsc", "1=1");
						toolSortCode.refreshData();
						mod="updateData";
					} else {
						toolSortCode.newData();
						toolSortCode.setValue("nUMSCODE", numScode);
						toolSortCode.setValue("pARENTLEV", parCode);
						toolSortCode.setValue("tOOLSORTCNAME", tOOLSORTCNAME);
						toolSortCode.setValue("tOOLSORTENAME", tOOLSORTENAME);
						toolSortCode.saveData();
						toolSortCode.setFilter("filter0_1_tsc", "1=1");
						toolSortCode.refreshData();
						var idd = document.getElementById('saveMas');
						idd.disabled = true;
						var tt = justep.Request.convertURL(
								"/UI/system/images/standardToolbar/standard/un_save.gif", true);
						$("#saveMas").attr("src", tt);
						mod="updateData";
						
						//alert("***********");
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
								code = toolSortCode+numScode+toolTypeName;
								var linkCodeNew = toolSortCode+"!*!"+numScode+"!*!"+toolTypeName;
								if(toolTypeCode == vali && toolSortCode == categoryCode) {
									oakind.setValue("fCode", code, rowID);
									oakind.setValue("lINKCODE", linkCodeNew, rowID);
									oakind.saveData();
								}
							}
							
						}
						
					}
				} else {
					alert("请选择工具分类!");
				}
			} else {
				toolSortCode.saveData();
				var idd = document.getElementById('saveMas');
					idd.disabled = true;
					var tt = justep.Request.convertURL(
							"/UI/system/images/standardToolbar/standard/un_save.gif", true);
					$("#saveMas").attr("src", tt);
				
				var oakind = justep.xbl("oakind");
				oakind.loadData();
				var cout = oakind.getCount();
				//alert(categoryCode+"========"+vali);
				for ( var i = 0; i < cout; i++) {
					var rowID = oakind.getID(i);
					var code = oakind.getValue("lINKCODE", rowID);
					if(code.split("!*!") != -1) {
						var toolSortCode = code.split("!*!")[0];
						var toolTypeCode = code.split("!*!")[1];
						var toolTypeName = code.split("!*!")[2];
						code = toolSortCode+numScode+toolTypeName;
						var linkCodeNew = toolSortCode+"!*!"+numScode+"!*!"+toolTypeName;
						if(toolTypeCode == vali && toolSortCode == categoryCode) {
							oakind.setValue("fCode", code, rowID);
							oakind.setValue("lINKCODE", linkCodeNew, rowID);
							oakind.saveData();
						}
					}
					
				}
				
				//toolSortCode.setFilter("filter0_1_tsc", "1=1");
				//toolSortCode.refreshData();
				mod="updateData";
			}
		}
		//alert("vali:"+vali+"\tmod:"+mod);
		
	}
	
	toolCategoryData.setFilter("filter0", "1=1");
	toolCategoryData.refreshData();
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMainValueChanged = function(event){
	var toolTypeCode = justep.xbl("dataMain");
	var cons = toolTypeCode.getValue("tOOLSORTCNAME", toolTypeCode.getCurrentID());
	var col = event.column;
	if(col == "nUMSCODE") {
		vali = event.originalValue;
		if(vali != "" && vali != null) {
			//工具模块变更履历
			var toolsChangeRecords = justep.xbl("toolsChangeRecords");
			toolsChangeRecords.newData();
			toolsChangeRecords.setValue("CHANGE_MODULAR", "工具类型编码");
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

mainActivity.mdDefaultReady = function(event){
	var toolSortCode = justep.xbl("dataMain");
	var tscData = justep.xbl("tscData");
	toolSortCode.loadData();
	toolSortCode.refreshData();
	//alert(toolSortCode.getTotal()+":::"+tscData.getTotal());
};

