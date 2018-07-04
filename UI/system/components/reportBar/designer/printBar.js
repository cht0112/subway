justep.design.ReportPrintBar = function(config) {  
	justep.design.ReportPrintBar.superclass.constructor.call(this, config);
};

//依赖justep.design.BaseBar,在bar中实现
justep.extend(justep.design.ReportPrintBar, justep.design.BaseBar, {
	getDefaultItems:function(){
		var basePath =  ComponentConfig[this.componentName].basePath + "/images/";
		return [ ["report-page-setup-item","打印设置",basePath +"print_page_setup.gif",true],
		         ["report-preview-item","打印预览",basePath +"print_preview.gif",true],
				 ["report-print-item","打印",basePath +"print_print.gif",true]
				 ];
	}	
});
 
