justep.design.Model = function(config){ 
	justep.design.Model.superclass.constructor.call(this,config);
}

justep.extend(justep.design.Model, justep.design.Component,{
	paintContent:function(xmlNode){   
	   this.createElement("<div class='xui-model'><div class='xui-model-title' isViewPartContent='false'>"+xmlNode.getAttribute("realId")+"</div></div>",xmlNode); 
	   this.element.style.position = "absolute";
	   if(!this.element.style.top){
	   	  this.element.style.top = "10px";
	   	  this.element.style.left = "10px";
	   }
	   this.element.style.height = "auto";
	   var childNodes = $(xmlNode).children();
	   var l = childNodes.length;  
	   var oldOffsetH = this.element.offsetHeight;
	   for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];  
	   	 if(node.nodeType == 1){
		   	 this.canvas.parseXml(node,this.element);
	   	 }
	   }
	},
	
	setProperty:function(propName,v,s,u){  
		 if(propName == 'id'){
		 	$(this.element).firstElement().innerHTML = v || "&nbsp;";
		 }else{
		 	justep.design.Model.superclass.setProperty.call(this,propName,v,s,u);
		 }
	},
	createRule : function(config){
		
	},
	appendRule : function(config){
		
	},
	deleteRule : function(config){
		
	},
	getActivteViewPartElement:function(){
		return this.element;
	}
});