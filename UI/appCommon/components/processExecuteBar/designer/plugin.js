justep.design.ProcessExecuteBar = function(config) {  
	justep.design.ProcessExecuteBar.superclass.constructor.call(this, config);
}

justep.extend(justep.design.ProcessExecuteBar, justep.design.Component, {
	
	paintContent:function(xmlNode){   
	 	var basePath =  ComponentConfig[this.componentName].basePath; 
	    this.createElement("<img align='absmiddle' id='"+this.id+"' class='bar-item' src='"+basePath+"/images/processExecuteBar.png'/>",xmlNode);
	    this.element.style.width="";
	    this.element.style.height="";
	}
	
});
