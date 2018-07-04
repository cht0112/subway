justep.design.ReportData = function(config) {  
	justep.design.ReportData.superclass.constructor.call(this, config);
	this.resizable = false;//不可拖拽改变大小
    this.allowShowTitleTip = false;//不显示标题提示
}

justep.extend(justep.design.ReportData, justep.design.Component, {
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
	editRule : function(config) {

	}
});