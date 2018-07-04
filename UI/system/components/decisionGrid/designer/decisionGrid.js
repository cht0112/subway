justep.design.DecisionGrid = function(config){ 
	justep.design.DecisionGrid.superclass.constructor.call(this,config);
}

justep.extend(justep.design.DecisionGrid, justep.design.Component,{
	paintContent:function(xmlNode){
		var image = ComponentConfig[this.componentName].basePath + "/images/grid.gif";
		this.createElement("<div class='xui-decisionGrid' isViewPartContent='false'   id='"+this.id+"'><img src='"+image+"' style='width:100%;height:100%'/></div>",xmlNode);
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
		this.setProperty('class',"xui-autofill",false,true);
	   }
		 
	},
	setProperty:function(n,v,s,u){
		justep.design.DecisionGrid.superclass.setProperty.call(this,n,v,s,u);
	}
});  