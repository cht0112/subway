justep.design.WindowReceiver = function(config){ 
	justep.design.WindowReceiver.superclass.constructor.call(this,config);
	this.resizable=false; 
}

justep.extend(justep.design.WindowReceiver, justep.design.Component,{
	paintContent:function(xmlNode){
		var image = ComponentConfig[this.componentName].basePath + "/images/dialog_icon.jpg";
		this.createElement("<div class='bar-item' isViewPartContent='false'   id='"+this.id+"'><img width='28' height='28'  src='"+image+"'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	   
	}
}); 