
function XReportCell(refObj,rowNum,colNum){
	this.cellRowNum = rowNum;
	this.cellColNum = colNum;
	
	this.cellDataset = refObj.getAttribute('dataset');
	this.cellColumnName = refObj.getAttribute('columnName');
	this.cellRowId = refObj.getAttribute('rowId') == null ? refObj.getAttribute('rowid'):refObj.getAttribute('rowId');
	
	this.cellValue = refObj.value;
	
	this.cellId = refObj.getAttribute('id');
	this.refObj = refObj;
}

XReportCell.prototype.syncXBLData=function(){
	var obj = justep.xbl(this.cellDataset);								
	obj.setValue(this.cellColumnName, this.cellValue, this.cellRowId);	
};	

XReportCell.prototype.syncWebData=function(){
	/*TODO:? 不起作用 this.refObj.value = this.cellValue;*/	
	document.getElementById(this.cellId).value = this.cellValue;	
};	

XReportCell.prototype.clone=function(){
	var rowNum = this.cellRowNum;
	var colNum = this.cellColNum;
	var refObj = this.refObj;
	var newCell = new XReportCell(refObj,rowNum,colNum);
	return newCell;
};
