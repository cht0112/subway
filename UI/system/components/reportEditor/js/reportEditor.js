
justep.ReportEditor = function(xblObject) {
	this.xblObject = xblObject;
};


justep.ReportEditor.prototype._getReportEditorID = function() {
	return this.xblObject.reportEditorID;
};

justep.ReportEditor.prototype.getReportEditor = function() {
	return eval("get" + this.xblObject.reportEditorID + "()"); 
};

function XReportEditor(){
	this.xreportDatasetArray = new ArrayList();
	this.xreportDatasetMap = new HashMap();	
};


XReportEditor.prototype.init=function(datasetJsonObj){
	var datasetSize = datasetJsonObj.size;
	for(var i=0; i<datasetSize; i++){
		var dataset = datasetJsonObj.datasets[i];
		var datasetName = dataset.name;
		
		this.xreportDatasetArray.add(datasetName);
		
		var calculateFormula = dataset.formula[0].calculate;
		var rowCalculateFormula = calculateFormula[0].row;
		var colCalculateFormual = calculateFormula[1].col;
		
		var checkFormula = dataset.formula[1].check;
		var rowCheckFormula = checkFormula[0].row;
		var colCheckFormula = checkFormula[1].col;
		
		var datasetObj = new XReportDataset(datasetName);
		this.xreportDatasetMap.put(datasetName,datasetObj);
		datasetObj.init(rowCalculateFormula,colCalculateFormual,rowCheckFormula,colCheckFormula);		
	}
};

XReportEditor.prototype.loadData=function(refObj){
	if(typeof(refObj) == 'object'){
		var objType = refObj.type;
		if(objType == 'text'){
			var datasetName = refObj.getAttribute('dataset');
			var datasetObj = null;
			if(!this.xreportDatasetMap.containsKey(datasetName)){
				datasetObj = new XReportDataset(datasetName);
				this.xreportDatasetMap.put(datasetName,datasetObj);
				this.xreportDatasetArray.add(datasetName);
			}else{
				datasetObj = this.xreportDatasetMap.get(datasetName);
			}
			
			var id = refObj.id;
			if(id !== ''){  /*存在计算或效验的数据集*/
				
				/*正则匹配 'input_main_0_1'*/
				var info = id.split('-');
				var rowNum = info[2];
				var colNum = info[3];	
				
				var rn = parseInt(rowNum);
				var cn = parseInt(colNum);
				if(typeof(datasetObj.sourceData[rn])=="undefined"){  
					datasetObj.sourceData[rn] = new Array();
				} 
				datasetObj.sourceData[rn][cn] = new XReportCell(refObj,rn,cn);//datasetObj.addCell(refObj,rn,cn);
				
			}else{				
				/*不参与计算 效验 的单元格?*/
			}

		}
	}
};

XReportEditor.prototype.cellChange=function(refObj){
	var datasetName = refObj.getAttribute('dataset');
	var currentDataset = this.xreportDatasetMap.get(datasetName);
	var id = refObj.getAttribute('id');
	if(id != '' && id != null){
		currentDataset.cellChange(refObj);
		/*currentDataset.errorRender();*/
	}else{
		
		/*不参与计算 运算 效验*/
		var obj = justep.xbl(refObj.getAttribute('dataset'));	
		var rid = refObj.getAttribute('rowId') == null ? refObj.getAttribute('rowid'):refObj.getAttribute('rowId');
		obj.setValue(refObj.getAttribute('columnName'), refObj.value, rid);	
	}
};

XReportEditor.prototype.check2=function(){
	var len = this.xreportDatasetArray.length();
	for(var i=0; i<len; i++){
		var datasetName = this.xreportDatasetArray.array[i];
		if(typeof(datasetName) != 'undefined'){
			var currentDataset = this.xreportDatasetMap.get(datasetName);
			currentDataset.check();
			currentDataset.errorRender();
		}
	}
	
};


XReportEditor.prototype.check=function(){
	var errorInfo = '';
	var len = this.xreportDatasetArray.length();
	for(var i=0; i<len; i++){
		var datasetName = this.xreportDatasetArray.array[i];
		if(typeof(datasetName) != 'undefined'){
			var currentDataset = this.xreportDatasetMap.get(datasetName);
			currentDataset.check();
			errorInfo += currentDataset.errorHTML();
		}
	}
	if(errorInfo != ''){
		var info = "";
		info += "<table border='1' cellpadding='0' style='border-collapse:collapse;font-size:12px;width:100%;height:100%;'>";
		info += errorInfo;
		info += "</table>";
		return info;
	}else{
		return '';
	}
};

XReportEditor.prototype.save=function(){
	var len = this.xreportDatasetArray.length();
	for(var i=0; i<len; i++){
		var datasetName = this.xreportDatasetArray.array[i];
		if(datasetName != '' && datasetName !=null && typeof(datasetName) != 'undefined'){
			/*保存前数据同步  联动计算CELL同步*/
			this.xreportDatasetMap.get(datasetName).syncXBLAllData();
			var dataObj = justep.xbl(datasetName);
			if(dataObj.canSave()){
				dataObj.saveData();
			}
		}
	}
};
