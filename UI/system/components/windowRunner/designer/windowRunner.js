justep.design.WindowRunner = function(config){ 
	justep.design.WindowRunner.superclass.constructor.call(this,config);
	this.resizable=false; 
}

justep.extend(justep.design.WindowRunner, justep.design.Component,{
	paintContent:function(xmlNode){
		var image = ComponentConfig[this.componentName].basePath + "/images/windowRunner.jpg";
		this.createElement("<div class='bar-item' isViewPartContent='false'   id='"+this.id+"'><img width='28' height='28'  src='"+image+"'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "10000";	   
	}
}); 