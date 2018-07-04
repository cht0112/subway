justep.design.PrintHtml = function(config){ 
	justep.design.PrintHtml.superclass.constructor.call(this,config);	
};

justep.extend(justep.design.PrintHtml, justep.design.Trigger,{
	 getDefaultImg:function(){
		   var basePath =  ComponentConfig[this.componentName].basePath;
			return basePath+"/images/print.gif"; 
		 },
		 getDefaultLabel:function(){
			return "打印"; 
		 }
});

 