loadCss("/UI/system/fontface/system.font.css");

/*
 * 1. 默认
 * <div class='xui-button' id='btn1'>
 * 	<button><span>确定</span></button>
 * </div>
 * 2. minimal 
 * <div class='xui-button' id='btn2'>
 * 	<a><span>确定</span></a>
 * </div>
 * 3. image-minimal
 * 3.1
 * <div class='xui-button' id='btn3'>
 * 	<a><i class='icon-plus'></i><span>确定</span></a>
 * </div>
 * 3.2
 * <div class='xui-button' id='btn4'>
 * 	<a><i class='image' style="background-image: url(xx.png)"></i><span>确定</span></a>
 * </div>
 * 4 image
 * <div class='xui-button' id='btn5'>
 * 	<button><i class='image' style="background-image: url(xx.png)" alt='确定'/></button>
 * </div>
 * 5 image-text
 * 5.1 Left
 * <div class='xui-button' id='btn6'>
 * 	<button><i class='image' style="background-image: url(xx.png)" alt='确定'/></button>
 * </div>
 * 52. Top
 * <div class='xui-button' id='btn7'>
 * 	<button><i class='icon-plus'/><span>确定</span></button>
 * </div>
 * <div class='xui-button' id='btn8'>
 * 	<button class='xui-button-image-top'><i class='icon-plus'/><span>确定</span></button>
 * </div>
 */
justep.design.Trigger = function(config){ 
	this.regAttributes(["disabled"]);
	justep.design.Trigger.superclass.constructor.call(this,config);
};

justep.extend(justep.design.Trigger, justep.design.Component,{
	 getDefaultImg:function(){
		return ""; 
	 },
	 getDefaultLabel:function(){
		return ""; 
	 },
	 paintContent:function(xmlNode){
	 	this.createElement("<div class='xui-button' id='"+this.id+"'></div>",xmlNode);
	 	var nodes = $(xmlNode).children();
	    for(var i = 0,l=nodes.length;i<l;i++){
	    	if(nodes[i].nodeType == 1 && nodes[i].tagName == 'label'){
	    		this.label = nodes[i].text;
	    	}
	    }
	    this.iconClass = xmlNode.getAttribute("icon-class");
	    this.label = this.label||xmlNode.getAttribute("label")||this.getDefaultLabel(); 
	    
		    var imgSrc = xmlNode.getAttribute("src");
		    if(imgSrc != null) this.imageICON = this.transToAbsolutePath(imgSrc);
		    else this.imageICON = this.getDefaultImg();
 
	    
	    var css;
	    if(LayoutUtils.isCellLayout(this.getParentComponent())){
	    	var css = "xui-autofill";
	    	this.setProperty('class',css,false,true);
	    }
	    this.mode = xmlNode.getAttribute("image-text-mode");
	   
	    this.setProperty("appearance",xmlNode.getAttribute("appearance"));
	    
 
	    //alert($(this.element).html());
	 },
	 setProperty:function(p,v,s,u){   
		justep.design.Trigger.superclass.setProperty.call(this, p,v,s,u);
		if(p=="src"){
			if(v)this.imageICON = this.transToAbsolutePath(v);
			else this.imageICON = this.getDefaultImg();
			if(!this.iconClass){
				this.setProperty("appearance", this.appearance);				
			}
		}else if(p=="appearance"){ 
	 		this.appearance = v;
	 		if(v=="minimal"){
	 			//连接
	 			$(this.element).addClass("xui-button");
	 			this.element.innerHTML = "<a href='javascript:void(0)'><span>"+this.label+"</span></a>";
	 		}else if(v=="image-minimal"){
	 			//图标加连接
	 			$(this.element).addClass("xui-button");
	 			if(!this.iconClass && this.imageICON)
	 				this.element.innerHTML = "<a href='javascript:void(0)'><i class='image' style='background-image: url(" + this.imageICON + ")'></i><span>"+this.label+"</span></a>";
	 			else
	 				this.element.innerHTML = "<a href='javascript:void(0)'><i class='" + (this.iconClass || '') + "'></i><span>"+this.label+"</span></a>";
	 		}else if(v=="image"){
	 			//图标
	 			$(this.element).addClass("xui-button");
	 			if(!this.iconClass && this.imageICON)
		 			this.element.innerHTML="<button><i alt='"+this.label+"' class='image' style='background-image: url(" + this.imageICON + ")'></i></button>";
	 			else
		 			this.element.innerHTML="<button><i alt='"+this.label+"' class='" + (this.iconClass || '') + "'></i></button>";
	 				
	 		}else if(v=="image-text"){
	 			//图标加文字
	 			this.setProperty("image-text-mode", this.mode);
	 		}else{
	 			//默认button
	 			$(this.element).addClass("xui-button");
	 			this.element.innerHTML="<button><span>"+this.label+"</span></button>";
	 		}
	 	}else if(p == 'label'){
	 		this.label = v;
			if(this.appearance=="image"){
				$("span", this.element).alt = v;
			}else{
				$(this.element).find("span").text(v);
			}
	 	}else if(p == 'image-text-mode'){
	 		this.mode = v;  
	 		if(this.appearance=="image-text"){
	 			$(this.element).addClass("xui-button");
	 			if(!this.mode || this.mode == "LR"){
		 			if(!this.iconClass && this.imageICON)
		 				//this.element.innerHTML="<button><i class='image' style='background-image: url(" + this.imageICON + ")'></i><span>"+this.label+"</span></button>";
		 				this.element.innerHTML="<button><img src='" + this.imageICON + "'></i><span>"+this.label+"</span></button>";
		 			else
		 				this.element.innerHTML="<button><i class='" + (this.iconClass || '') + "'></i><span>"+this.label+"</span></button>";
	 			}else{
		 			if(!this.iconClass && this.imageICON)
		 				this.element.innerHTML="<button class='xui-button-image-top'><i class='image' style='background-image: url(" + this.imageICON + ")'></i><br><span>"+this.label+"</span></button>";
		 			else
		 				this.element.innerHTML="<button class='xui-button-image-top'><i class='" + (this.iconClass || '') + "'></i><br><span>"+this.label+"</span></button>";
	 			}
	 		}
	 	}else if(p == 'icon-class'){
	 		this.iconClass = v;
	 		this.setProperty("appearance", this.appearance);
	 	}	 	
	 },
	 
	setLabel:function(data){  
		for(var p in data){
			this.setProperty(p,data.label);
		}
		
		this.setProperty("icon-class",data["icon-class"]);
		this.canvas.reSelection();
	},
	setOperationProp:function(data){
		for(var p in data){
			if(p != 'id'){
				this.setProperty(p,data[p]);				
			}
		}
		this.canvas.reSelection();
	}
});
 