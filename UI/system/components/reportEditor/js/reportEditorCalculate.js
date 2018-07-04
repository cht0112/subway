/*
 *报表前台计算接口 
 */
function XReportCalculate (){
	
	this.LEVEL_SEPARATOR = ',';
	this.ANALYST_TYPE_ROW = 101; /*行公式分析*/
	this.ANALYSE_TYPE_COL = 103; /*列公式分析*/
	
	this.currentCalculateCell;  /*当前触发点*/
	this.colCalculateChangeCellColNumArrayList = new ArrayList();
	
	this.sourceData = new Array();
	
	this.rowCalculateFormulaArray = new Array();
	this.colCalculateFormulaArray = new Array();
	
	this.exprAnalyse = new XReportExprAnalyse();/*语法分析器*/
	
}

/*
 * 初始化 公式
 * @param rowCalculateFormula
 * @param colCalculateFormula
 */
XReportCalculate.prototype.init=function(rowCalculateFormula,colCalculateFormual){
	this.rowCalculateFormulaArray = this.toArray(rowCalculateFormula,this.LEVEL_SEPARATOR); 
	this.colCalculateFormulaArray = this.toArray(colCalculateFormual,this.LEVEL_SEPARATOR);
};

/*
 * 计算
 * @param sourceData          动态二维数组源数据
 * @param currentCalculateCellRefObj  报表运算触发单元格 input对象 
 */
XReportCalculate.prototype.calculate=function(sourceData,cCell){
	this.currentCalculateCell = cCell;	
	this.colCalculateChangeCellColNumArrayList = new ArrayList();
	this.colCalculateChangeCellColNumArrayList.add(cCell.cellColNum);
	this.sourceData = sourceData;
	this.colCalculate();
	this.rowCalculate();
};


/*
 * 列计算
 * 当前触发单元格所在的行中的所有列进行计算
 * 公式顺序很重要
 * 如： 5= 6+7+8        5列 = 6列+7列+8列
 * 	   1= 2+3+4+5+9+10 1列 = 2列+3列+4列+5列+9列+10列
 */
XReportCalculate.prototype.colCalculate=function(){
	if(this.colCalculateFormulaArray == null){
		return;
	}
	for(var i=0; i<this.colCalculateFormulaArray.length; i++){
		
		var colCalulateFormula = this.colCalculateFormulaArray[i];
		var colCalulateFormulas = colCalulateFormula.split("=");
		
		var resultIndexStr = colCalulateFormulas[0];
		var calulateFormula = colCalulateFormulas[1];
		
		/*当前单元格所在的行*/
		var r = this.currentCalculateCell.cellRowNum;
		
		this.exprAnalyse.out='';
		this.exprAnalyse.sourceData=this.sourceData;
		this.exprAnalyse.currentRowIndex=r;
		this.exprAnalyse.analyseType=this.ANALYSE_TYPE_COL;
		
		var b = this.exprAnalyse.run(calulateFormula);
		if(b){
			var expr = this.exprAnalyse.getOut();
			var exprVStr = null;
			try{
				exprVStr = eval(expr);
			}catch(e){
				throw new Error("表达式计算异常："+expr);
			}
			var resultColIndex = parseInt(resultIndexStr);
			
			var cCell = this.sourceData[r][resultColIndex-1];
			//TODO:exprVstr 数据格式转换
			cCell.cellValue = exprVStr;
			cCell.syncXBLData();
			cCell.syncWebData();
			
			/*统计执行列运算后受影响的列信息*/
			this.colCalculateChangeCellColNumArrayList.add(this.sourceData[r][resultColIndex-1].cellColNum)
		}else{
			alert(this.exprAnalyse.getErrors());
			continue;
		}				
		/*for(var r=0; r<this.sourceData.length; r++){
		}*/
	}
}

/*
 * 行计算
 * 遍历当前列运算后受影响的列 对每一列的所有行公式进行计算
 * 顺序很重要
 * 如： 1=2+3      1行 = 2行+3行
 * 	   5 = 4+1    5行 = 4行+1行
 */
XReportCalculate.prototype.rowCalculate=function(){
	if(this.rowCalculateFormulaArray == null){
		return;
	}
	for(var i=0; i<this.rowCalculateFormulaArray.length; i++){
		
		var rowCalculateFormula = this.rowCalculateFormulaArray[i];
		var rowCalculateFormulas = rowCalculateFormula.split("=");
		var resultIndexStr = rowCalculateFormulas[0];
		var calculateFormula = rowCalculateFormulas[1];
		
		/*遍历受影响的列*/
		for(var i=0; i<this.colCalculateChangeCellColNumArrayList.array.length; i++){		
			var c = this.colCalculateChangeCellColNumArrayList.array[i];
			
			this.exprAnalyse.out='';
			this.exprAnalyse.sourceData=this.sourceData;
			this.exprAnalyse.currentColIndex=c;
			this.exprAnalyse.analyseType=this.ANALYST_TYPE_ROW;
			
			var b = this.exprAnalyse.run(calculateFormula);
			if(b){
				var expr = this.exprAnalyse.getOut();
				var exprVStr = null;
				try{
					exprVStr = eval(expr);
				}catch(e){
					throw new Error("表达式计算异常："+expr);
				}

				var resultRowIndex = parseInt(resultIndexStr);
				
				var cCell = this.sourceData[resultRowIndex-1][c];
				cCell.cellValue = exprVStr;
				cCell.syncXBLData();
				cCell.syncWebData();
			
			}else{
				alert(exprAnalyse.getErrors());
				continue;
			}	
		}	
			
	}
}


XReportCalculate.prototype.toArray=function(str,separator){
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


