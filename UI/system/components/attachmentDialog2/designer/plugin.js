
justep.design.AttachmentDialog2 = function(config){   
	justep.design.AttachmentDialog2.superclass.constructor.call(this,config);
}

justep.extend(justep.design.AttachmentDialog2, justep.design.Component,{
	 paintContent:function(xmlNode){
	 	var image = ComponentConfig[this.componentName].basePath + "/images/attachmentDialog2.gif";
		this.createElement("<div class='html-div' isViewPartContent='false'   id='"+this.id+"'><img width='28' height='28' src='"+image+"'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	   	
	}

});