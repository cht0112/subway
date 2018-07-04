justep.design.Tip = function(config){ 
	justep.design.Tip.superclass.constructor.call(this,config);
	this.resizable=false; 
}

justep.extend(justep.design.Tip, justep.design.Component,{
	 paintContent:function(xmlNode){  
	 	var basePath =  ComponentConfig[this.componentName].basePath;
		var elementStr = '<img id="'+this.id+'" class="bar-item" src="'+basePath+'/images/info.gif"/>'
		this.createElement(elementStr, xmlNode);
	    this.element.style.width="";
	    this.element.style.height="";
	    this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	},
    setProperty:function(p,v,s,u){
     	justep.design.Tip.superclass.setProperty.call(this,p,v,s,u);
	}
});