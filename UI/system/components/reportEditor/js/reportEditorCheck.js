/*
 * 	报表前台效验 接口
 */
function XReportCheck (){
	
	this.LEVEL_SEPARATOR = ',';
	this.ANALYST_TYPE_ROW = 101; 
	this.ANALYSE_TYPE_COL = 103; 
	
	this.CHECK_TYPE_ROW = 107; 
	this.CHECK_TYPE_COL = 109; 
	
	this.sourceData = new Array();
	
	this.rowCheckFormulaArray = new Array();
	this.colCheckFormulaArray = new Array();
	
	this.exprAnalyse = new XReportExprAnalyse();
	
	this.CHECK_DEY  = '==';
	this.CHECK_DYDY = '>=';
	this.CHECK_XYDY = '<=';
	this.CHECK_DY   = '>';
	this.CHECK_XY   = '<';
	this.CHECK_BDY  = '!=';
	
	this.checkResult = new ArrayList();
	
}

/*
 * 初始化 
 * @param rowCheckFormula 效验公式 行效验
 * @param colCheckFormula 效验公式 列效验
 */
XReportCheck.prototype.init=function(rowCheckFormula,colCheckFormula){
	this.rowCheckFormulaArray = this.toArray(rowCheckFormula,this.LEVEL_SEPARATOR); 
	this.colCheckFormulaArray = this.toArray(colCheckFormula,this.LEVEL_SEPARATOR);
};

/*
 * 效验
 * @param sourceData    动态二维数组源数据 
 */
XReportCheck.prototype.check=function(sourceData){

	this.sourceData = sourceData;
	this.clearCheckResult();

	this.colCheck();

	this.exprAnalyse = new XReportExprAnalyse();
	this.rowCheck();
};

/*
 * 列效验
 * 遍历所有行 对每一行的 列效验公式 进行效验
 */
XReportCheck.prototype.colCheck=function(){
	if(this.colCheckFormulaArray == null){
		return;
	}
	for(var i=0; i<this.colCheckFormulaArray.length; i++){
		
		var colCheckFormula = this.colCheckFormulaArray[i];
		var checkFlag = this.getCheckFlag(colCheckFormula);
		var colCheckFormulas = colCheckFormula.split(checkFlag);
	
		var leftStr = colCheckFormulas[0];
		var rightStr = colCheckFormulas[1];
		
		var colCheckResult = new XReportFormulaCheckResult();
		colCheckResult.formulaStr = colCheckFormula;
		colCheckResult.formulaType = this.CHECK_TYPE_COL;
		colCheckResult.formulaCheckFlag = checkFlag;
		colCheckResult.formulaLeftStr = leftStr;
		colCheckResult.formulaRightStr = rightStr;
		
		var leftb = this.exprAnalyse.run(leftStr);
		if(!leftb){		
			colCheckResult.formulaErrorStr = ' 其中： '+ '('+leftStr+')' + this.exprAnalyse.getErrors();
			this.addCheckResult(colCheckResult);
			continue;
		}
		var rightb = this.exprAnalyse.run(rightStr);
		if(!rightb){
			colCheckResult.formulaErrorStr = ' 其中： '+ '('+rightStr+')' + this.exprAnalyse.getErrors();
			this.addCheckResult(colCheckResult);			
			continue;
		}
		

		var flag = true;
		for(var r=0; r<this.sourceData.length; r++){
			
			this.exprAnalyse.sourceData=this.sourceData;
			this.exprAnalyse.currentRowIndex=r;
			this.exprAnalyse.analyseType=this.ANALYSE_TYPE_COL;
			
			var leftExpr;
			var leftV;
			var leftCellArray;
			this.exprAnalyse.out='';			
			this.exprAnalyse.clearCheckCellArray();
			this.exprAnalyse.checkCellArrayIndex = 0;
			
			var lb = this.exprAnalyse.run(leftStr);
			if(lb){
				leftExpr = this.exprAnalyse.getOut();
				leftV = eval(leftExpr);
			}else{
				continue;
			}
			leftCellArray = this.cellClone(this.exprAnalyse.getCheckCellArray());
			
			var rightExpr
			var rightV;
			var rightCellArray;
			this.exprAnalyse.out='';
			this.exprAnalyse.clearCheckCellArray();
			this.exprAnalyse.checkCellArrayIndex = 0;

			var rb = this.exprAnalyse.run(rightStr);
			if(rb){
				rightExpr = this.exprAnalyse.getOut();
				rightV = eval(rightExpr);
			}else{				
				continue;
			}
			rightCellArray = this.cellClone(this.exprAnalyse.getCheckCellArray());
			
			if(checkFlag == '='){
				checkFlag = '==';
			}
			var b = eval(leftV+checkFlag+rightV);
			if(!b){

				flag = false;
				var checkErrorRecord = new XReportFormulaCheckErrorRecord();
				checkErrorRecord.formulaLeftCellArray = leftCellArray;
				checkErrorRecord.formulaRightCellArray = rightCellArray;	
				var notCheckFlag = 	this.getNotCheckFlag(checkFlag);
				checkErrorRecord.leftExprStr = '['+leftExpr+' = '+leftV+']';
				checkErrorRecord.rightExprStr = '['+ rightV +' = ' + rightExpr +']';
				checkErrorRecord.formulaCheckFlag = checkFlag;
				checkErrorRecord.formulaNotCheckFlag = notCheckFlag;			
				colCheckResult.addCheckErrorRecord(checkErrorRecord);
			}						
		}
		
		if(!flag){
			this.addCheckResult(colCheckResult);
		}
	}
	
}

/*
 *行效验  
 */
XReportCheck.prototype.rowCheck=function(){
	if(this.rowCheckFormulaArray == null || this.sourceData.length == 0){
		return;
	}
	for(var i=0; i<this.rowCheckFormulaArray.length; i++){
		
		var rowCheckFormula = this.rowCheckFormulaArray[i];
		var checkFlag = this.getCheckFlag(rowCheckFormula);
		var rowCheckFormulaFormulas = rowCheckFormula.split(checkFlag);
		
		var leftStr = rowCheckFormulaFormulas[0];
		var rightStr = rowCheckFormulaFormulas[1];
		
		var rowCheckResult = new XReportFormulaCheckResult();
		rowCheckResult.formulaStr = rowCheckFormula;
		rowCheckResult.formulaType = this.CHECK_TYPE_ROW;
		rowCheckResult.formulaCheckFlag = checkFlag;
		rowCheckResult.formulaLeftStr = leftStr;
		rowCheckResult.formulaRightStr = rightStr;
		
		var leftb = this.exprAnalyse.run(leftStr);
		if(!leftb){		
			rowCheckResult.formulaErrorStr = ' 其中： '+ '('+leftStr+')' + this.exprAnalyse.getErrors();
			this.addCheckResult(rowCheckResult);
			continue;
		}
		var rightb = this.exprAnalyse.run(rightStr);
		if(!rightb){
			rowCheckResult.formulaErrorStr = ' 其中： '+ '('+rightStr+')' + this.exprAnalyse.getErrors();
			this.addCheckResult(rowCheckResult);			
			continue;
		}
		
		
		var flag = true;
		var colLength = this.sourceData[0].length;
		for(var c=0; c<colLength; c++){
			
			this.exprAnalyse.sourceData=this.sourceData;
			this.exprAnalyse.currentColIndex=c;
			this.exprAnalyse.analyseType=this.ANALYST_TYPE_ROW;
			
			var leftExpr;	
			var leftV;
			var leftCellArray;
			this.exprAnalyse.out='';
			this.exprAnalyse.clearCheckCellArray();
			this.exprAnalyse.checkCellArrayIndex = 0;

			var lb = this.exprAnalyse.run(leftStr);
			if(lb){
				leftExpr = this.exprAnalyse.getOut();
				leftV = eval(leftExpr);
			}else{
				/*alert("效验列公式:" + this.exprAnalyse.getErrors());*/
				continue;
			}
			leftCellArray = this.cellClone(this.exprAnalyse.getCheckCellArray());
			
			var rightExpr;
			var rightV;
			var rightCellArray;
			this.exprAnalyse.out='';
			this.exprAnalyse.clearCheckCellArray();
			this.exprAnalyse.checkCellArrayIndex = 0;

			var rb = this.exprAnalyse.run(rightStr);
			if(rb){
				rightExpr = this.exprAnalyse.getOut();
				rightV = eval(rightExpr);
			}else{
				/*alert("效验列公式:" + this.exprAnalyse.getErrors());*/
				continue;
			}
			rightCellArray = this.cellClone(this.exprAnalyse.getCheckCellArray());
			
			if(checkFlag == '='){
				checkFlag = '==';
			}
			
			
			var b = eval(leftV+checkFlag+rightV);
			if(!b){
			
				flag = false;
				var checkErrorRecord = new XReportFormulaCheckErrorRecord();
				checkErrorRecord.formulaLeftCellArray = leftCellArray;
				checkErrorRecord.formulaRightCellArray = rightCellArray;
				var notCheckFlag = 	this.getNotCheckFlag(checkFlag);
				checkErrorRecord.leftExprStr = '['+leftExpr+' = '+leftV+']';
				checkErrorRecord.rightExprStr = '['+ rightV +' = ' + rightExpr +']';
				checkErrorRecord.formulaCheckFlag = checkFlag;
				checkErrorRecord.formulaNotCheckFlag = notCheckFlag;		
				rowCheckResult.addCheckErrorRecord(checkErrorRecord);
			}			
		}//end for
		if(!flag){
			this.addCheckResult(rowCheckResult);
		}		
	}
}

/*
 * 
 * 获取效验 运算符
 * @param checkFormula
 */
XReportCheck.prototype.getNotCheckFlag=function(checkFormula){
	if(checkFormula.split('>=') != checkFormula){
		return '<';
	}else if(checkFormula.split('<=') != checkFormula){
		return '>';
	}else if(checkFormula.split('!=') != checkFormula){
		return '=';
	}else if(checkFormula.split('>') != checkFormula){
		return '<';
	}else if(checkFormula.split('<') != checkFormula){
		return '>';
	}else if(checkFormula.split('=') != checkFormula){
		return '!=';
	}
}

/*
 * 
 * 获取效验 运算符
 * @param checkFormula
 */
XReportCheck.prototype.getCheckFlag=function(checkFormula){
	if(checkFormula.split('>=') != checkFormula){
		return '>=';
	}else if(checkFormula.split('<=') != checkFormula){
		return '<=';
	}else if(checkFormula.split('!=') != checkFormula){
		return '!=';
	}else if(checkFormula.split('>') != checkFormula){
		return '>';
	}else if(checkFormula.split('<') != checkFormula){
		return '<';
	}else if(checkFormula.split('=') != checkFormula){
		return '=';
	}
}

XReportCheck.prototype.cellClone=function(cellArray){
	var temp = new Array();
	for(var i=0; i<cellArray.length; i++){
		temp[i] = cellArray[i].clone();
	}
	return temp;
}

XReportCheck.prototype.toArray=function(str,separator){
	var temp = new Array();
	if(str == null ||str.trim()==''){
		return temp;
	}else{
		var t = str.split(separator);
		for(var i=0; i<t.length; i++){
			var tt = t[i];
			temp[i] = tt;
		}
	}
	return temp;
}

XReportCheck.prototype.addCheckResult=function(cellResult){
	this.checkResult.add(cellResult);
}

XReportCheck.prototype.clearCheckResult=function(){
	this.checkResult = new ArrayList();
}

XReportCheck.prototype.getCheckResult=function(){
	return this.checkResult;
}

/*
 * 报表效验结果
 */
function XReportFormulaCheckResult(){
	this.formulaStr;
	this.formulaType;
	
	this.formulaLeftStr;
	this.formulaRightStr;
	this.formulaCheckFlag;
	
	this.formulaErrorStr = ''; 
	
	this.formulaCheckErrorRecordArray = new ArrayList();
	
}

XReportFormulaCheckResult.prototype.addCheckErrorRecord=function(cellResult){
	this.formulaCheckErrorRecordArray.add(cellResult);
}

XReportFormulaCheckResult.prototype.clearCheckErrorRecord=function(){
	this.formulaCheckErrorRecordArray = new ArrayList();
}

/*
 * 报表效验错误记录
 */
function XReportFormulaCheckErrorRecord(){
	this.leftExprStr;
	this.rightExprStr;
	this.formulaCheckFlag;
	this.formulaNotCheckFlag;
	this.formulaLeftCellArray = new Array();
	this.formulaRightCellArray = new Array();
}


