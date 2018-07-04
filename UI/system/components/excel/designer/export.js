justep.design.ExcelExport = function(config){ 
	justep.design.ExcelExport.superclass.constructor.call(this,config);
	this.resizable=false; 
};

justep.extend(justep.design.ExcelExport, justep.design.Trigger,{
	 getDefaultImg:function(){
		   var basePath =  ComponentConfig[this.componentName].basePath;
			return basePath+"/images/export.gif"; 
		 },
		 getDefaultLabel:function(){
			return "导出Excel"; 
		 }
});