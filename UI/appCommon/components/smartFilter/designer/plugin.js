justep.design.SmartFilter = function(config){ 
	justep.design.SmartFilter.superclass.constructor.call(this,config);
}

justep.extend(justep.design.SmartFilter, justep.design.Component,{
	paintContent:function(xmlNode){   
	   this.createElement("<input id='"+this.id+"' class='xform-input' readonly='true'/>",xmlNode);
	}
});

