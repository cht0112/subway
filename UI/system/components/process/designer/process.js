justep.design.Process = function(config){ 
	justep.design.Process.superclass.constructor.call(this,config);
	this.resizable=false; //构造函数里

}

justep.extend(justep.design.Process, justep.design.Component,{
		
	 paintContent:function(xmlNode){   
	 	var image = ComponentConfig[this.componentName].basePath + "/images/process.jpg";
	   	this.createElement("<div id='"+this.id+"' class='html-div'><img src='" + image + "'/></div>",xmlNode);
	   	this.element.style.width = "24px";
	   	this.element.style.position="absolute";
	   	this.element.style.zIndex = "1000";

	   
	}	 
});

 