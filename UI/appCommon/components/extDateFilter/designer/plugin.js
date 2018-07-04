justep.design.ExtDateFilter = function(config){
	justep.design.ExtDateFilter.superclass.constructor.call(this, config);
}

justep.extend(justep.design.ExtDateFilter, justep.design.Component, {
	paintContent:function(xmlNode){  
	    this.createElement("<input id='"+this.id+"' class='x-select' readonly='true'/>",xmlNode);
	}
}); 

