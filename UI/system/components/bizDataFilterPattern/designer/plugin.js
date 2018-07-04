justep.design.BizDataFilterPattern = function(config){ 
	justep.design.BizDataFilterPattern.superclass.constructor.call(this,config);
	this.resizable=false;
}

justep.extend(justep.design.BizDataFilterPattern, justep.design.Component,{
	paintContent:function(xmlNode){
		var image = ComponentConfig[this.componentName].basePath + "/images/dialog_icon.jpg";
		this.createElement("<div class='html-div' isViewPartContent='false'   id='"+this.id+"'><img width='28' height='28' src='"+image+"'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	},
    setProperty:function(p,v,s,u){
		justep.design.XformInput.superclass.setProperty.call(this,p,v,s,u);
	}
});