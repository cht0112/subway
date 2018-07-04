justep.design.XformOutput = function(config){ 
	justep.design.XformOutput.superclass.constructor.call(this,config);
	this.allowHighLight = true;
};

justep.extend(justep.design.XformOutput, justep.design.Component,{
	 paintContent:function(xmlNode){  
		var html = "<table title='"+this.componentName+"' cellSpacing=0 cellPadding=0 id='" + this.id + "' isViewPartContent='false' class='xui-output'><tr><td  isViewPartContent='false'>&nbsp;</td></tr></table>";
	    this.createElement(html,xmlNode);
	}
});
