justep.design.MessageDialog = function(config){ 
	justep.design.MessageDialog.superclass.constructor.call(this,config);
	this.resizable=false; 
}

justep.extend(justep.design.MessageDialog, justep.design.Component,{
	 paintContent:function(xmlNode){
	 	var basePath =  ComponentConfig[this.componentName].basePath;
		var elementStr = '<img id="'+this.id+'"  width="28" height="28" class="bar-item" src="'+basePath+'/images/messageDialog_big.jpg"/>'
		this.createElement(elementStr, xmlNode);
	    this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	},
	setProperty:function(propName,v){  
		 if(propName == 'width' || propName == 'height'){
		 	$('#'+this.id).attr(propName, 28);
		 }
	}

});