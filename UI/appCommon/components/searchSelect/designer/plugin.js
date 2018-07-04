justep.design.SearchSelect = function(config){
	justep.design.SearchSelect.superclass.constructor.call(this, config);
}

justep.extend(justep.design.SearchSelect, justep.design.Component, {
	paintContent:function(xmlNode){  
	    this.createElement("<input id='"+this.id+"' class='x-select' readonly='true'/>",xmlNode);
	}
}); 

