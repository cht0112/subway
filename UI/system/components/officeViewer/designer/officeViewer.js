justep.design.OfficeViewer = function(config){
	justep.design.OfficeViewer.superclass.constructor.call(this,config);
	this.allowShowTitleTip = true;
	this.resizable = true;
};

justep.extend(justep.design.OfficeViewer, justep.design.Component,{
	paintContent:function(xmlNode){
		var image = ComponentConfig[this.componentName].basePath + "/images/officeViewer.jpg";
		this.createElement("<div id='"+this.id+"'  isViewPartContent='true' class='xui-officeViewer'><img src='"+image+"' style='width:100%;height:100%;'/></div>",xmlNode);
	   	this.element.style.position = "absolute";
	   	this.element.style.zIndex = "1000";
	   	if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}else{
			this.setProperty('class',"xui-officeViewer",false,true);
		}
	   	
	}
});