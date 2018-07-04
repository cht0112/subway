justep.design.ExtOutput = function(config){ 
	justep.design.ExtOutput.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ExtOutput, justep.design.Component,{
	paintContent:function(xmlNode){   
		var basePath =  ComponentConfig[this.componentName].basePath;
		this.createElement("<table id='"+this.id+"' class='xui-input xui-linker'><tr><td/><td width='16'><img src='" + basePath + "/images/select.png'/></td></tr></table>",xmlNode);
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	}
});

