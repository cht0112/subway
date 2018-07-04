
justep.design.AttachmentDialog = function(config){   
	justep.design.AttachmentDialog.superclass.constructor.call(this,config);
}

justep.extend(justep.design.AttachmentDialog, justep.design.Component,{
	 paintContent:function(xmlNode){
	 	var image = ComponentConfig[this.componentName].basePath + "/images/attachmentDialog.gif";
		this.createElement("<div class='html-div' isViewPartContent='false'   id='"+this.id+"'><img width='28' height='28' src='"+image+"'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	   	
	}

});