justep.design.SmartFilter = function(config){ 
	justep.design.SmartFilter.superclass.constructor.call(this,config);
}

justep.extend(justep.design.SmartFilter, justep.design.Component,{
	paintContent:function(xmlNode){   
		var html = "<table title='"+this.componentName+"' cellSpacing=0 cellPadding=0 id='" + this.id + "' isViewPartContent='false' class='x-select xui-select'><tr><td  isViewPartContent='false'>&nbsp;</td></tr></table>";
	    this.createElement(html,xmlNode);
	  // this.createElement("<input id='"+this.id+"' class='xui-input' readonly='true'/>",xmlNode);
	}
});

