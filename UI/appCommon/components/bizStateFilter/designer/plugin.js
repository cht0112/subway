justep.design.BizStateFilter = function(config){
	justep.design.BizStateFilter.superclass.constructor.call(this, config);
}

justep.extend(justep.design.BizStateFilter, justep.design.Component, {
	paintContent:function(xmlNode){  
	    this.createElement("<input id='"+this.id+"' class='x-select' readonly='true'/>",xmlNode);
	}
}); 

