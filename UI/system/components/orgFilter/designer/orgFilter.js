justep.design.OrgFilter = function(config){ 
	this.regAttributes(["disabled","readonly"]);
	justep.design.OrgFilter.superclass.constructor.call(this,config);
}

justep.extend(justep.design.OrgFilter, justep.design.Component,{
	 paintContent:function(xmlNode){  
		var html = "<table title='"+this.componentName+"' cellSpacing=0 cellPadding=0 id='" + this.id + "' isViewPartContent='false' class='x-select xui-select'><tr><td  isViewPartContent='false'>&nbsp;</td></tr></table>";
		this.createElement(html,xmlNode);
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	}
});