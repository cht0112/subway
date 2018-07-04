justep.design.GridFilter = function(config){
	justep.design.GridFilter.superclass.constructor.call(this, config);
}

justep.extend(justep.design.GridFilter, justep.design.Component, {
	paintContent:function(xmlNode){  
	    this.createElement("<input id='"+this.id+"' class='x-select' readonly='true'/>",xmlNode);
	}
}); 

justep.design.TreeFilter = function(config){
	justep.design.TreeFilter.superclass.constructor.call(this, config);
}

justep.extend(justep.design.TreeFilter, justep.design.Component, {
	paintContent:function(xmlNode){  
	    this.createElement("<input id='"+this.id+"' class='x-select' readonly='true'/>",xmlNode);
	}
}); 