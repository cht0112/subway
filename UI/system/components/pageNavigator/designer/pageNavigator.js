justep.design.PageNavigator = function(config){ 
	justep.design.PageNavigator.superclass.constructor.call(this,config);
};

justep.extend(justep.design.PageNavigator, justep.design.Component,{
	 paintContent:function(xmlNode){  
		this.mode = xmlNode.getAttribute("mode");
		this.items = xmlNode.getAttribute("items");
		if(!this.items) this.items = this.DefaultItems; 
	    this.createElement("<span id='"+this.id+"' class='bar-item' />",xmlNode);
	    this.element.style.width="";
	    this.element.style.height="";
	    this.reprint();
	},
	DefaultItems:'first,pre,page,next,last,ext',
	reprint:function(){
		var l = ['first','pre','page','next','last','ext'];
		var s = "";
		for(var a in l){
			if(0<=this.items.indexOf(l[a])) s += "<img src='"+this.getShowImg(l[a])+"'/>";
		}
		$(this.element).html(s);
	},
	getShowImg:function(n){
	 	var basePath =  ComponentConfig[this.componentName].basePath;
		if(this.mode=="TXT") return basePath+"/images/"+n+"3.png";
		else if(this.mode=="IMG_TXT_LR") return basePath+"/images/"+n+"1.png";
		else if(this.mode=="IMG_TXT_TB") return basePath+"/images/"+n+"2.png";
		else return basePath+"/images/"+n+".png";
	},
	setProperty:function(p,v,s,u){
		justep.design.PageNavigator.superclass.setProperty.call(this, p,v,s,u);
		if(p=="mode") this.mode = v;
		else if(p=="items") {this.items = v?v:this.DefaultItems;}
		this.reprint();
	 }
});