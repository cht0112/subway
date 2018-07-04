justep.design.Config = function(config){ 
	justep.design.Config.superclass.constructor.call(this,config);
	this.allowShowTitleTip = false;
	this.resizable = false;
};

justep.extend(justep.design.Config, justep.design.Component,{
	paintContent:function(xmlNode){
		var image = ComponentConfig[this.componentName].basePath + "/images/config_large.png";
		this.createElement("<div class='bar-item' isViewPartContent='false'   id='"+this.id+"'><img src='"+image+"'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";	   
	}
});