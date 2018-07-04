justep.design.ReportDecisionBar = function(config) {  
	justep.design.ReportDecisionBar.superclass.constructor.call(this, config);
}

justep.extend(justep.design.ReportDecisionBar, justep.design.Component, {
	
	paintContent:function(xmlNode){    
 
	   if(!this.element){
	       this.createElement("<table id='"+this.id+"' class='bar'><tr><td valign='top' style='height:28px;padding-right:5px'></td></tr></table>",xmlNode);
	       this.contentElement = $(this.element).firstChild().firstChild().firstElement();
	       this.contentElement.isViewPartContent = 'true';
	   }else{
	   	  this.contentElement.innerHTML = "";
	   }
	   
	   var childNodes = $(xmlNode).children();	   
	   var size = childNodes.length;
	   //alert(size);
	   var contentE = $(this.element).firstChild().firstChild().firstElement();// this.element.firstChild;
	   this.contentElement.innerHTML = "";
	   var width = 0;
	   
	   for(var i=0;i<size;i++){
			var child = childNodes[i];
			if(child.nodeType == 1 && child.tagName=="item"){
				this.canvas.parseXml(child,this.contentElement);
			}	   			
	   }
	 
	},
	setBarItem : function(config){
		
	},
	getActivteViewPartElement:function(){
		return this.contentElement;
	},
	getItemByName:function(name){
		var items = this.getDefaultItems();
		for(var i = 0,l=items.length;i<l;i++){
			if(items[i][0] == name){
				return items[i];
			}
		}
	},
	getDefaultItems:function(){
		var basePath =  ComponentConfig[this.componentName].basePath + "/images/";
		return [ ["decision-cube-nav-item","OLAP导航",basePath +"decision_cube_nav.gif",true],
		         ["decision-sort-config-item","排序规则",basePath +"decision_sort_config.gif",true],		         
				 ["decision-level-style-item","显示父成员",basePath +"decision_level_style.gif",true],
				 ["decision-properties-item","显示属性",basePath +"decision_properties.gif",true],
				 ["decision-properties-config-item","配置显示属性",basePath +"decision_properties_config.gif",true],
				 ["decision-non-empty-item","压缩空行列",basePath +"decision_non_empty.gif",true],
				 ["decision-swap-axes-item","交换坐标轴",basePath +"decision_swap_axes.gif",true],				 
				 ["decision-drill-member-item","成员钻取",basePath +"decision_drill_member.gif",true],
				 ["decision-drill-position-item","位置钻取",basePath +"decision_drill_position.gif",true],
				 ["decision-drill-replace-item","钻取替代",basePath +"decision_drill_replace.gif",true],
				 ["decision-drill-through-item","钻取指标",basePath +"decision_drill_through.gif",true]
				];
	},
	getDefaultItemsToString:function(){
		var items = this.getDefaultItems();
		return JSON.stringify(items);
	}	
});
 

