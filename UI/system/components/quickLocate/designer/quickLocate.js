

justep.design.TreeLocate = function(config){ 
	this.regAttributes(["disabled","readonly"]);
	justep.design.TreeLocate.superclass.constructor.call(this,config);
}

justep.extend(justep.design.TreeLocate, justep.design.Component,{
	 paintContent:function(xmlNode){  
	    this.createElement("<input id='"+this.id+"' class='xui-quickLocate' readonly='true'/>",xmlNode);
	    
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	}
}); 