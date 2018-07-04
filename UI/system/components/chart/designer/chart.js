
justep.design.Chart = function(config){ 
	justep.design.Chart.superclass.constructor.call(this,config);
}

justep.extend(justep.design.Chart, justep.design.Component,{
	paintContent:function(xmlNode){
		var imagePath = ComponentConfig[this.componentName].basePath + "/images/runtime_default_chart.gif";
		this.createElement("<img id='"+this.id+"' class='xui-chart' src='"+imagePath+"'  style='' border='0'/>",xmlNode);		
	    this.element.src = imagePath;
	    if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	},
	setProperty:function(n,v,s,u){
		justep.design.Chart.superclass.setProperty.call(this,n,v,s,u);
	},
	getChartBound:function(){
		return JSON.stringify(this.getBound());
	},
	paintComponent:function(params){
		var chartObj = document.getElementById(this.id);
		chartObj.setAttribute('src',params.image);
	}
});

justep.design.ChartSeries = function(config){ 
	this.index = config.index;
	justep.design.ChartSeries.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ChartSeries, justep.design.Component,{
	paintContent:function(childChartXmlNode){
		this.element.innerHTML = "<div class='hdrcell' uiEditable='false' isViewPartContent='false' style='width:100%'><table width='100%' height='100%' border='0'  cellspacing='0' cellpadding='0'><tr><td style='border:0'>"
			+ "</td><td width='3' style='cursor:e-resize;'></td></tr></table></div>";
	},
	dispose:function(){

	}
});

