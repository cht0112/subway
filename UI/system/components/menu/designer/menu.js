justep.design.Menu = function(config){ 
	justep.design.Menu.superclass.constructor.call(this,config);	
}

justep.extend(justep.design.Menu, justep.design.Component,{
	 paintContent:function(xmlNode){
	 	this.path = ComponentConfig[this.componentName].basePath;
	 	this.bgImage  = this.path + "/images/menu_top_bg_over.gif"
		this.imgE = "";
		this.label = "";
		
	 	var childNodes = $(xmlNode).children();	   
		var size = childNodes.length;
		for(var i=0;i<size;i++){
			var child = childNodes[i];
			if(child.nodeType == 1 && child.tagName=="menuitem"){
				this.label = child.getAttribute("label");								
	 			this.imgSrc = child.getAttribute("img");
			}	   			
		}	

		if (this.imgSrc != null && this.imgSrc!=""){
			this.imageICON = this.path.substring(0,this.path.lastIndexOf('UI/')+2)+this.imgSrc;
			this.imgE="<img src='"+this.imageICON+"'/>  ";
		}
	
		this.createElement("<div style='" +
						"height:25px;background-image: url("+this.bgImage+");background-repeat: repeat-x;" +
						"border-left: #739DCC 1px solid;border-right: #A7C7DF 1px solid;padding-left: 7px;padding-right: 7px;padding-top: 6px;' id='"+this.id
						+"'>"+this.imgE+this.label+"</div>",xmlNode);	
	 },
	 setProperty:function(p,v,s,u){
	 	if(p=="label"){
	 		this.label = v;
	 		this.element.innerHTML=v;
	 	}
	 	
	 	if(p=="img"){
			if (v != null){
				this.imageICON = this.path.substring(0,this.path.lastIndexOf('UI/')+2)+v;
				this.imgE="<img src='"+this.imageICON+"'/>  ";
			}
	 		this.element.innerHTML=this.imgE+this.label;
	 	}
	 }
});
 