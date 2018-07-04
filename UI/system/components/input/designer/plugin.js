justep.design.XformInput = function(config){ 
	this.regAttributes(["disabled","readonly"]);
	justep.design.XformInput.superclass.constructor.call(this,config);
}

justep.extend(justep.design.XformInput, justep.design.Component,{
	 paintContent:function(xmlNode){   
	   var html = "<table  title='"+this.componentName+"' cellSpacing=0 cellPadding=0 id='" + this.id + "' isViewPartContent='false' class='xui-input'><tr><td  isViewPartContent='false'>&nbsp;</td></tr></table>";
	   this.createElement(html,xmlNode);
	   this.setProperty("format",xmlNode.getAttribute('format'));
		if(LayoutUtils.isCellLayout(this.getParentComponent())){ 
			this.element.component.setProperty('class',"xui-autofill",false,true);
		}
	}
});

justep.design.XformSecret = function(config){ 
	this.regAttributes(["disabled","readonly"]);
	justep.design.XformSecret.superclass.constructor.call(this,config);
};

justep.extend(justep.design.XformSecret, justep.design.Component, {
	paintContent : function(xmlNode) {
		 var html = "<table  title='"+this.componentName+"' cellSpacing=0 cellPadding=0 id='" + this.id + "' isViewPartContent='false' class='xui-input'><tr><td  isViewPartContent='false'><input type='password' value='123456' style='cursor:default;border:0;' readonly='true'/></td></tr></table>";
		this.createElement(html, xmlNode);
		if (LayoutUtils.isCellLayout(this.getParentComponent())) {
			this.element.component.setProperty('class', "xui-autofill", false, true);
		}
	}
});

justep.design.XformDateInput = function(config){ 
	justep.design.XformDateInput.superclass.constructor.call(this,config);
};

justep.extend(justep.design.XformDateInput, justep.design.Component,{
	 paintContent:function(xmlNode){ 
		 var html = "<table title='"+this.componentName+"' cellSpacing=0 cellPadding=0 id='" + this.id + "' isViewPartContent='false' class='xform-date-input'><tr><td  isViewPartContent='false'>&nbsp;</td></tr></table>";
	 	this.createElement(html,xmlNode);
	}	 
});
 