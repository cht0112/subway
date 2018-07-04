justep.design.ProcessChart = function(config){ 
	justep.design.ProcessChart.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ProcessChart, justep.design.Component,{
	 paintContent:function(xmlNode){   
	 	var image = ComponentConfig[this.componentName].basePath + "/images/chart.jpg";
	   	this.createElement("<div id='"+this.id+"' class='html-div'><img src='" + image +"'/>流程轨迹图和流程波特图</div>",xmlNode);
	   //this.element.style.cssText = "width:100px;height:100px;";
	}
});


justep.design.ProcessTrackChart = function(config){ 
	justep.design.ProcessTrackChart.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ProcessTrackChart, justep.design.Component,{
	 paintContent:function(xmlNode){   
	 	var image = ComponentConfig[this.componentName].basePath + "/images/trackChart.jpg";
	   	this.createElement("<div id='"+this.id+"' class='html-div'><img src='" + image +"'/>流程轨迹图</div>",xmlNode);
	   //this.element.style.cssText = "width:100px;height:100px;";
	}
	
});


justep.design.ProcessPertChart = function(config){ 
	justep.design.ProcessPertChart.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ProcessPertChart, justep.design.Component,{
	 paintContent:function(xmlNode){   
	 	var image = ComponentConfig[this.componentName].basePath + "/images/pertChart.png";
	   	this.createElement("<div id='"+this.id+"' class='html-div'><img src='" + image +"'/>流程波特图</div>",xmlNode);
	   //this.element.style.cssText = "width:100px;height:100px;";
	}
	
});