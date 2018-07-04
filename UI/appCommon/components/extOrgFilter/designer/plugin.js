justep.design.ExtOrgFilter = function(config){
	justep.design.ExtOrgFilter.superclass.constructor.call(this, config);
}

justep.extend(justep.design.ExtOrgFilter, justep.design.Component, {
	paintContent:function(xmlNode){  
	    this.createElement("<input id='"+this.id+"' class='x-select' readonly='true'/>",xmlNode);
	}
}); 

