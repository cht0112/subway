justep.design.StandardProcessBar = function(config) {  
	justep.design.StandardProcessBar.superclass.constructor.call(this, config);
}

justep.extend(justep.design.StandardProcessBar, justep.design.Component, {
	
	paintContent:function(xmlNode){   
	 	var basePath =  ComponentConfig[this.componentName].basePath; 
	    this.createElement("<img align='absmiddle' id='"+this.id+"' class='bar-item' src='"+basePath+"/images/standardProcessBar.jpg'/>",xmlNode);
	    this.element.style.width="";
	    this.element.style.height="";
	}
	
});
