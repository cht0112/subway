justep.design.ExcelImport = function(config){ 
	justep.design.ExcelExport.superclass.constructor.call(this,config);
	this.resizable=false; 
};

justep.extend(justep.design.ExcelImport, justep.design.Trigger,{
	 getDefaultImg:function(){
		   var basePath =  ComponentConfig[this.componentName].basePath;
			return basePath+"/images/import.gif"; 
		 },
		 getDefaultLabel:function(){
			return "导入Excel"; 
		 }
});