justep.design.Toolbars = function(config){ 
	justep.design.Toolbars.superclass.constructor.call(this,config);
};

justep.extend(justep.design.Toolbars, justep.design.Container,{

	 paintContent:function(xmlNode){   
	   this.createElement("<div id='"+this.id+"' class='toolbar' >&nbsp;&nbsp;&nbsp;</div>",xmlNode);
//	   this.element = this.newElement({id:this.id,className:'toolbar'});
//       justep.design.Util.setAttributes(xmlNode,this.element,["width","height","style"]);
	   var childNodes = $(xmlNode).children();	   
	   var l = childNodes.length;
	   for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];
	   	 if(node.nodeType == 1){ 
	   	 	 if(node.tagName == 'bar'){   	 	 	 
	   	 	 	 this.canvas.parseXml(node,this.element);
	   	 	 }
	   	 }
	   }
	   
	   var pPosition = this.element.parentNode.style.position; 
	   if((pPosition == "relative" || pPosition == "absolute")&& !this.element.style.width){
	      this.element.style.width="400px";
	      this.element.style.height = "25px";
	   } 
	},
	getActivteViewPartElement:function(){
		return this.element;
	}
});