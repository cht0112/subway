justep.design.BizData = function(config){ 
	justep.design.BizData.superclass.constructor.call(this,config);
	this.allowMoveToOtherParent = false;
	this.allowAddChild = false;
	this.allowShowTitleTip = false;
	this.resizable = false;
}

justep.extend(justep.design.BizData, justep.design.Component,{
	paintContent:function(xmlNode){   
		//prompt(null,this.getIcon());
		this.createElement("<div class='xui-data'><img align='absmiddle' style='width:16px;height:16px;' src='"+this.getIcon()+"'/><span></span></div>",xmlNode);
		$('span',$(this.element)).html(xmlNode.getAttribute("realId"));
	},
	
	setProperty:function(propName,v){  
		 if(propName == 'id' && !this.ownerComponent){
		 	$('span',$(this.element)).html(v);
		 }
	},
	editRule : function(config){
		
	},
	isResizable:function(){
		return false;
	}
});

justep.design.CommonData = function(config){ 
	justep.design.CommonData.superclass.constructor.call(this,config);
	this.allowMoveToOtherParent = false;
	this.allowAddChild = false;
	this.resizable = false;
	this.allowShowTitleTip = false;
}

justep.extend(justep.design.CommonData, justep.design.BizData,{
 
});