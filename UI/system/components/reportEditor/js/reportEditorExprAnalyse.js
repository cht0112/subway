function XReportExprAnalyse(){
	
	this.exprSource;
	this.tok;
	this.token;
	this.token_type;
	this.flag;
	this.exprSourceLen;
	this.errors;
	this.out = '';
	
	this.sourceData;
	this.analyseType;
	this.currentRowIndex;
	this.currentColIndex;
	
	this.checkCellArrayIndex = 0;
	this.checkCellArray = new Array();
	
	this.INT = 5;    
	this.CONSTANT=6;  
	this.DELIMITER=1; 
	

	this.S_PLUS = 4;         
	this.S_MINUS = 5;       
	this.S_TIMES = 6;        
	this.S_DIVISION = 7;     
	this.S_LPARENTHESIS = 20;
	this.S_RPARENTHESIS = 21;
	this.S_FINISHED = 24;   

	this.E_NOTEMPTY=1;         
	this.E_FACTORNOEXIST=2;    
	this.E_LOSSLPARENTHESE=4;   
	this.E_LOSSRPARENTHESE=5;  
	this.E_SYNTAX=6;            
	this.E_LOSSCONSTANT=7;      
	this.E_MUSTBEINTEGER=9;     
	this.E_EliminatesError=10;  
	this.E_ErrorNumber=11;     
	
	this.ANALYST_TYPE_ROW = 101; 
	this.ANALYSE_TYPE_COL = 103; 
	
	this.NULL_VALUE = 0; 
}

XReportExprAnalyse.prototype.getToken=function(){
	var result = true;
	this.tok = 0;
	this.token = '';
	this.token_type = 0;
	
	if(this.exprSourceLen == 0){
		result = false;
		return result;
	}
	
	if(this.flag == this.exprSourceLen){
		this.tok = this.S_FINISHED;
		this.token_type = this.DELIMITER;
		return result;
	}
	
	while((this.exprSource.charAt(this.flag)+'').isEmpty()){
		this.flag=this.flag+1;
	}
	
	if(this.flag == this.exprSourceLen){
		this.tok = this.S_FINISHED;
		this.token_type = this.DELIMITER;
		return result;
	}
	
	if('+-*/()'.indexOf(this.exprSource.charAt(this.flag))!= -1){
		var c = this.exprSource.charAt(this.flag);
		this.token = "" + c;
		switch(c){
			case '+':
				this.tok = this.S_PLUS;
				break;
			case '-':
				this.tok = this.S_MINUS;
				break;
			case '*':
				this.tok = this.S_TIMES;
				break;
			case '/':
				this.tok = this.S_DIVISION;
				break;
			case '(':
				this.tok = this.S_LPARENTHESIS;
				break;
			case ')':
				this.tok = this.S_RPARENTHESIS;
				break;
		}
		
		this.token_type = this.DELIMITER;
		this.flag=this.flag+1;
		return result;
	}
	
	if(isdigit(this.exprSource.charAt(this.flag))){
		var c = this.exprSource.charAt(this.flag);
		this.token = "" + c;
		this.flag=this.flag+1;
		if(this.flag == this.exprSourceLen){
			
		}else{
			while(isdigit(this.exprSource.charAt(this.flag))){
				this.token += ""+this.exprSource.charAt(this.flag);
				this.flag=this.flag+1;
				if(this.flag == this.exprSourceLen){
					break;
				}
			}
		}
		this.token_type = this.INT;
		return result;
	}
	
	if(this.exprSource.charAt(this.flag)=='C' || this.exprSource.charAt(this.flag)=='c'){
		var n = 0;
		this.token = "" + this.exprSource.charAt(this.flag);
		this.flag=this.flag+1;
		if(this.flag ==this.exprSourceLen){
		}else{
			if(this.exprSource.charAt(this.flag)=='.'){
				result = false;
				this.flag=this.flag+1;
				this.setError(this.E_ErrorNumber);
				return result;
			}
			
			while(isdigit(this.exprSource.charAt(this.flag)) || this.exprSource.charAt(this.flag)=='.'){
				this.token += ""+this.exprSource.charAt(this.flag);
				this.flag=this.flag+1;
				if(this.flag == this.exprSourceLen){
					break;
				}
				if(this.exprSource.charAt(this.flag) == '.'){
					n=n+1;
				}
				if(n>1){
					result = false;
					this.flag=this.flag+1;
					this.setError(this.E_ErrorNumber);
					return result;
				}
				
				if(this.flag == this.exprSourceLen){
					break;
				}
				
				if (this.exprSource.charAt(this.flag) == '.' && this.flag == this.exprSourceLen) {
					result = false;
					this.flag=this.flag+1;
					this.setError(this.E_ErrorNumber);
					return result;
				}
				
				if (this.exprSource.charAt(this.flag) == '.' && this.flag != this.exprSourceLen) {
					if (!isdigit(this.exprSource.charAt(this.flag + 1))) {
						result = false;
						this.flag=this.flag+1;
						this.setError(this.E_ErrorNumber);
						return result;
					}
				}
				
			}
		}
		this.token_type = this.CONSTANT;
		return result;
	}
	
	result = false;
	this.flag=this.flag+1;
	this.setError(this.E_ErrorNumber);
	return result;
	
}


XReportExprAnalyse.prototype.level0=function(){
	var result = false;
	if (!this.level1()) {
		return result;
	}
	while (this.tok == this.S_PLUS || this.tok == this.S_MINUS) {
		this.out += this.token;
		if (!this.getToken()) {
			return result;
		}
		if (!this.level1()) {
			return result;
		}
	}
	result = true;
	return result;
}

XReportExprAnalyse.prototype.level1=function(){
	var result = false;

	if (!this.level2()) {
		return result;
	}

	while (this.tok == this.S_TIMES || this.tok == this.S_DIVISION) {
		this.out += this.token;
		if (!this.getToken()) {
			return result;
		}
		if (!this.level2()) {
			return result;
		}
	}
	result = true;
	return result;
}

XReportExprAnalyse.prototype.level2=function(){
	var result = false;

	if (this.tok == this.S_LPARENTHESIS && this.token_type == this.DELIMITER) {
		
		this.out += this.token;
		
		if (!this.getToken()) {
			return result;
		}
		
		if (!this.level0()) {
			return result;
		}
		
		this.out += token;
		
		if (this.tok != this.S_RPARENTHESIS) {
			this.putBack();
			this.setError(this.E_LOSSRPARENTHESE);
			
			return result;
		}
		
		if (!this.getToken()) {
			return result;
		}

	} else if (this.tok == this.S_MINUS && this.token_type == this.DELIMITER) {
		this.out += this.token;
		if (out.endsWith("--")) {
			out = out.substring(0,out.length - 2);
			out += "+";
		}
		
		if (!this.getToken()) {
			return result;
		}
	
		if (this.tok == this.S_LPARENTHESIS
				|| this.token_type == this.CONSTANT
				|| this.token_type == this.INT) {
			
			if (!this.level0()) {
				return result;
			}
			
		} else {
			this.putBack();
			this.setError(this.E_SYNTAX);
			return result;
		}

	} else {
		
		if (!this.primitive()) {
			return result;
		}
		
	}
	result = true;
	return result;
}

XReportExprAnalyse.prototype.primitive=function(){
	var result = false;
	var nToken = 0;
	if (this.token_type == this.INT) {
		nToken = parseInt(this.token);
		if(this.analyseType == this.ANALYSE_TYPE_COL){
			var currentColIndex = nToken -1;
			var cell = this.sourceData[this.currentRowIndex][currentColIndex];
			
			this.checkCellArray[this.checkCellArrayIndex] = cell;
			this.checkCellArrayIndex = this.checkCellArrayIndex +1;
			
			var cellV = cell.cellValue;
			if(cellV == null || cellV ==''){
				cellV = this.NULL_VALUE;
			}
			this.out += cellV;				
		}else if(this.analyseType == this.ANALYST_TYPE_ROW){
			var currentRowIndex = nToken -1;
			var cell = this.sourceData[currentRowIndex][this.currentColIndex];
			
			this.checkCellArray[this.checkCellArrayIndex] = cell;
			this.checkCellArrayIndex = this.checkCellArrayIndex +1;
			
			var cellV = cell.cellValue;
			if(cellV == null || cellV ==''){
				cellV = this.NULL_VALUE;
			}
			this.out += cellV;		
		}			
		
		if (!this.getToken()) {
			return result;
		}
	} else if (this.token_type == this.CONSTANT) {
		if (this.token.length == 1) {
			this.setError(this.E_LOSSCONSTANT);
			return result;
		} else {
			this.out += this.token.substring(1, this.token.length);
			if (!this.getToken()) {
				return result;
			}
		}
	} else {
		this.putBack();
		this.setError(this.E_SYNTAX);
		return result;
	}
	result = true;
	return result;
}

XReportExprAnalyse.prototype.putBack=function(){
	this.flag = this.flag - this.token.length;
	return true;
}

XReportExprAnalyse.prototype.run=function(fSource){
	var result = false;
	this.exprSource = fSource.trim();
	this.exprSourceLen = fSource.length;
	this.flag = 0;
	this.sql_out = "";
	this.errors = "";
	if (!this.getToken()) { 
		this.setError(this.E_NOTEMPTY); 
		return result;
	}

	if (!this.level0()) {
		return result;
	}
	
	this.putBack();
	
	if (this.flag != this.exprSourceLen) {
		this.setError(this.E_SYNTAX);
		return result;
	}

	result = true;
	return result;
}

XReportExprAnalyse.prototype.setError=function(num){
	if (this.E_NOTEMPTY == num) {
		this.errors = "表达式不存在!";
	} else if (this.E_LOSSLPARENTHESE == num) {
		this.errors = "缺少左括号!";
	} else if (this.E_LOSSRPARENTHESE == num) {
		this.errors = "缺少右括号";
	} else if (this.E_SYNTAX == num) {
		this.errors = "语法错误!";
	} else if (this.E_MUSTBEINTEGER == num) {
		this.errors = "必须是整数!";
	} else if (this.E_LOSSCONSTANT == num) {
		this.errors = "未定义常量!";
	} else if (this.E_ErrorNumber == num) {
		this.errors = "非法字符!";
	}
	
	if (this.flag <= 200) {
		this.errors = this.exprSource.substring(0,this.flag) + this.errors;
	} else {
		/* 片段表示方法 */
	}
}

XReportExprAnalyse.prototype.getOut=function(){
	return this.out;
}
XReportExprAnalyse.prototype.getErrors=function(){
	return this.errors;
}

XReportExprAnalyse.prototype.clearCheckCellArray=function(){
	this.checkCellArray = new Array();;
}

XReportExprAnalyse.prototype.getCheckCellArray=function(){
	return this.checkCellArray;
}


