
function XReportDataset(dataset){	
	this.dataset = dataset;
	this.sourceData = new Array();
	this.xreportCalculate = new XReportCalculate();
	this.xreportCheck = new XReportCheck();
	
}

/*
 * 初始化
 * @param rowCalculateFormula  行计算
 * @param colCalculateFormual  列计算
 * @param rowCheckFormula      行效验
 * @param colCheckFormula      列效验
 */
XReportDataset.prototype.init=function(rowCalculateFormula,colCalculateFormual,rowCheckFormula,colCheckFormula){
	this.xreportCalculate.init(rowCalculateFormula,colCalculateFormual);
	this.xreportCheck.init(rowCheckFormula,colCheckFormula);
};

/**
 * 数据改变
 * @param refObj 事件触发源
 */
XReportDataset.prototype.cellChange=function(refObj){
	var id = refObj.id;
	if(id !== ''){  
		var info = id.split('-');
		var rowNum = info[2];
		var colNum = info[3];	
		var rn = parseInt(rowNum);
		var cn = parseInt(colNum);
		var cCell = this.sourceData[rn][cn];
		cCell.cellValue = refObj.value;

		cCell.syncXBLData();
		

		this.xreportCalculate.calculate(this.sourceData ,cCell)
		

		/*this.xreportCheck.check(this.sourceData);*/
	}
};


XReportDataset.prototype.check=function(){
	this.xreportCheck.check(this.sourceData);
};

/*
 * 保存前的 数据同步
 */
XReportDataset.prototype.syncXBLAllData=function(){
	var rn = this.sourceData.length;
	if(rn != 0){
		var cn = this.sourceData[0].length;
		for(var r = 0; r< rn ; r++){
			for(var c=0; c<cn; c++){
				var cCell = this.sourceData[r][c];
				/*TODO:cCell.refObj.value ?不起作用*/
				cCell.cellValue = document.getElementById(cCell.refObj.id).value;
				cCell.syncXBLData();
			}
		}
	}
}


/*
 * 错误信息
 */
XReportDataset.prototype.errorHTML=function(){
	var errorInfo = "";
	var errorResult = this.xreportCheck.getCheckResult();
	var en = errorResult.array.length;
	if(en == 0){
		return "";
	}
	
	/*
	this.CHECK_TYPE_ROW = 107; 行公式分析
	this.CHECK_TYPE_COL = 109; 列公式分析
	*/
 	var errorColInfo = this.errorRecordHTML(errorResult,109);
	var errorRowInfo = this.errorRecordHTML(errorResult,107);
	
	/*约定为规则矩形二维表格*/
	var rangeTopStr = "";
	var rangeBottomStr = "";
	var rangeLeftStr = "";
	var rangeRightStr = "";
	var rn = this.sourceData.length;
	var cn = this.sourceData[0].length;
	for(var r = 0; r< rn ; r++){
		for(var c=0; c<cn; c++){
			var oid = this.sourceData[r][c].refObj.id;
			if(r == 0){ /* 首行 */
				rangeTopStr += oid;
				rangeTopStr +=",";
			}else if(r == (rn-1)){ /*末行*/
				rangeBottomStr += oid;
				rangeBottomStr +=",";
			}
			if(c == 0){/*首列*/
				rangeLeftStr += oid;
				rangeLeftStr +=",";
			}else if(c == (cn-1)){/*末列*/
				rangeRightStr += oid;
				rangeRightStr +=",";
			}
		}
	}
	rangeTopStr = rangeTopStr.substring(0,rangeTopStr.length-1);
	rangeBottomStr = rangeBottomStr.substring(0,rangeBottomStr.length-1);
	rangeLeftStr = rangeLeftStr.substring(0,rangeLeftStr.length-1);
	rangeRightStr = rangeRightStr.substring(0,rangeRightStr.length-1);
	
	errorInfo += "<tr>";
   	errorInfo += "<td width='3%'>&nbsp;</td>";
   	errorInfo += " <td colspan='4'>区域：<a href=\"javaScript:rangeRender('"+rangeTopStr+"','"+rangeBottomStr+"','"+rangeLeftStr+"','"+rangeRightStr+"');\" >"+this.dataset+"</a></td>";
   	errorInfo += " </tr>";
   	
   	if(errorColInfo != ''){
	 	errorInfo += " <tr>";
	 	errorInfo += "<td>&nbsp;</td>";
	    errorInfo += "<td width='7%'>&nbsp;</td>";
	    errorInfo += "<td colspan='3'>列效验公式：</td>";
	    errorInfo += "</tr>";
   		errorInfo += errorColInfo;
   	}
 	
	if(errorRowInfo != ''){
	 	errorInfo += " <tr>";
	 	errorInfo += "<td>&nbsp;</td>";
	    errorInfo += "<td width='7%'>&nbsp;</td>";
	    errorInfo += "<td colspan='3'>行效验公式：</td>";
	    errorInfo += "</tr>";
	 	errorInfo += errorRowInfo;
	}
	return errorInfo;
};

XReportDataset.prototype.errorRecordHTML=function(errorResult,formulaType){
	var info = "";
	for(var e=0; e<errorResult.array.length; e++){		
		var errorR = errorResult.array[e];	
		var festr = errorR.formulaErrorStr;
		if(festr != ''){
			if(errorR.formulaType == formulaType){
				 info += " <tr>";
	  			 info += " <td>&nbsp;</td>";
	   			 info += " <td>&nbsp;</td>";
	  			 info += " <td width='10%'>&nbsp;</td>";
	   			 info += " <td colspan='2'>"+errorR.formulaStr+"  "+festr+"</td>";
	   			 info += " </tr>";
			}
		}else{		
			if(errorR.formulaType == formulaType){
				
				var sleftStr = "";
				var srightStr = "";
				var recordList = errorR.formulaCheckErrorRecordArray;
				for(var re=0; re<recordList.array.length; re++){
					var record = recordList.array[re];
					
					var leftC = record.formulaLeftCellArray;
					var rightC = record.formulaRightCellArray;
					for(var i=0; i<leftC.length; i++){
						var cell = leftC[i];
						sleftStr += cell.refObj.id;
						sleftStr +=",";
					}
					for(var i=0; i<rightC.length; i++){
						var cell = rightC[i];
						srightStr += cell.refObj.id;
						srightStr +=",";
					}		
				}
				sleftStr = sleftStr.substring(0,sleftStr.length-1);
				srightStr = srightStr.substring(0,srightStr.length-1);
				
				 info += " <tr>";
	  			 info += " <td>&nbsp;</td>";
	   			 info += " <td>&nbsp;</td>";
	  			 info += " <td width='10%'>&nbsp;</td>";
	   			 info += " <td colspan='2'> <a href=\"javaScript:cellRender('"+sleftStr+"','"+srightStr+"');\" >"+errorR.formulaStr+"</a></td>";
	   			 info += " </tr>";
	   
				recordList = errorR.formulaCheckErrorRecordArray;
				for(var re=0; re<recordList.array.length; re++){
					var record = recordList.array[re];
					
					var leftStr = "";
					var rightStr = "";
					var leftC = record.formulaLeftCellArray;
					var rightC = record.formulaRightCellArray;
					for(var i=0; i<leftC.length; i++){
						var cell = leftC[i];
						leftStr += cell.refObj.id;
						leftStr +=",";
					}
					for(var i=0; i<rightC.length; i++){
						var cell = rightC[i];
						rightStr += cell.refObj.id;
						rightStr +=",";
					}		
					leftStr = leftStr.substring(0,leftStr.length-1);
					rightStr = rightStr.substring(0,rightStr.length-1);
					
					info += "<tr>";
	  				info += "<td >&nbsp;</td>";
	    			info += "<td>&nbsp;</td>";
	    			info += "<td>&nbsp;</td>";
	   				info += "<td width='10%'>&nbsp;</td>";
	    			info += "<td> <a href=\"javaScript:cellRender('"+leftStr+"','"+rightStr+"');\" >"+record.leftExprStr + record.formulaNotCheckFlag+ record.rightExprStr+"</a></td>";
	  				info += "</tr>";			
				}
			}
		}
	}
	return info;
};


/**
 * 错误渲染
 */
XReportDataset.prototype.errorRender=function(){
	var errorResult = this.xreportCheck.getCheckResult();
	for(var e=0; e<errorResult.array.length; e++){		
		var errorR = errorResult.array[e];
		var recordList = errorR.formulaCheckErrorRecordArray;
		for(var re=0; re<recordList.array.length; re++){
			var record = recordList.array[re];
			var leftC = record.formulaLeftCellArray;
			var rightC = record.formulaRightCellArray;
			for(var i=0; i<leftC.length; i++){
				var cell = leftC[i];
				cell.refObj.style.backgroundColor= 'red';
				cell.refObj.parentNode.style.backgroundColor= 'red';
			}
			for(var i=0; i<rightC.length; i++){
				var cell = rightC[i];
				cell.refObj.style.backgroundColor= 'green';
				cell.refObj.parentNode.style.backgroundColor= 'green';
			}			
		}
	}
	/*
	obj.style.backgroundColor= '';
	obj.parentNode.style.backgroundColor= '';
	*/
};

