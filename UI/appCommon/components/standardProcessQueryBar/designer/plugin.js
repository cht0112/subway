justep.design.StandardProcessQueryBar = function(config) {  
	justep.design.StandardProcessQueryBar.superclass.constructor.call(this, config);
}

justep.extend(justep.design.StandardProcessQueryBar, justep.design.Component, {
	
	paintContent:function(xmlNode){   
	 	var basePath =  ComponentConfig[this.componentName].basePath; 
	    this.createElement("<img align='absmiddle' id='"+this.id+"' class='bar-item' src='"+basePath+"/images/standardProcessQueryBar.png'/>",xmlNode);
	    this.element.style.width="";
	    this.element.style.height="";
	}
	
});
