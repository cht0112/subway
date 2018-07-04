justep.design.CustomBar = function(config){ 
	justep.design.CustomBar.superclass.constructor.call(this,config);
};

justep.extend(justep.design.CustomBar, justep.design.BaseBar,{
	getDefaultItems:function(){
		return [];
	}	
});