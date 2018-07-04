justep.design.Dialog = function(config){ 
	justep.design.Dialog.superclass.constructor.call(this,config);
	this.resizable=false; 
}

justep.extend(justep.design.Dialog, justep.design.Component,{
	paintContent:function(xmlNode){
		var image = ComponentConfig[this.componentName].basePath + "/images/dialog_icon.jpg";
		this.createElement("<div class='html-div' isViewPartContent='false'   id='"+this.id+"'><img width='28' height='28' src='"+image+"'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	   	
	}
}); 