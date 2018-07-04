justep.design.ReportExportBar = function(config) {  
	justep.design.ReportExportBar.superclass.constructor.call(this, config);
};

//依赖justep.design.BaseBar,在bar中实现
justep.extend(justep.design.ReportExportBar, justep.design.BaseBar, {
	getDefaultItems:function(){
		var basePath =  ComponentConfig[this.componentName].basePath + "/images/";
		return [ ["report-export-pdf-item","导出PDF",basePath +"exp-pdf.gif",true],
		         ["report-export-word-item","导出Word",basePath +"exp-word.gif",true],
				 ["report-export-excel-item","导出Excel",basePath +"exp-excel.gif",true]
				 ];
	}	
});
