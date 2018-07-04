justep.design.OrgTree = function(config){ 
	this.dataCount = 0;
	justep.design.OrgTree.superclass.constructor.call(this,config);
}

justep.extend(justep.design.OrgTree, justep.design.Component,{
	 paintContent:function(xmlNode){ 
	 	this.createElement("<div id='"+this.id+"' class='xui-orgTree xui-orgTree-div' readonly='true'><div class='xui-orgTree-div-content' uiEditable='false'></div></div>",xmlNode);
	 	this.contentElement = $(this.element).firstElement();
        this.parseChild(xmlNode);
        this.setChildUIEditable("false");

        var data = $(xmlNode).find('data')[0];
        var treeGrid = $(this.element).find('div.grid')[0];
        if(data && treeGrid){
	        treeGrid.component.setProperty('data',data.getAttribute('realId'),false,true);
        }else alert('组件定义有问题，data或者treeSelect不存在！');
        
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}        
	},
	setProperty:function(propName,v,isStyle,isUpdateMode){
		justep.design.OrgTree.superclass.setProperty.call(this,propName,v,isStyle,isUpdateMode);
	},
    innerComponentPropertyChanged:function(comName,pName,v){ 
	   if(pName == 'id' && comName =='data'){
	      this.updateInnerComponentPropertyByName('grid','data',v);
	   }
     },
	parseChild:function(xmlNode){
	    var childNodes = $(xmlNode).children();
	    var l = childNodes.length;
	    for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];  
	   	 if(node.nodeType == 1){ 
	   	 	 var comName = node.getAttribute("componentName");
	   	 	 var cfg = ComponentConfig[comName];
		   	 if(cfg && cfg.comType == 'formControl'){
		   	 	 var obj = this.canvas.parseXml(node,$(this.element).firstElement());
		   	 	 obj.element.style.width="100%";
		   	 	  obj.element.style.height="100%";
		   	 	  //obj.element.firstChild.style.width="100%";
		   	 	 // obj.element.firstChild.style.heigh="100%";
		   	 	 obj.ownerComponent = this;
		   	 
		   	 	// obj.element.style.height="100%";
		   	 }else if(cfg && (cfg.comType == 'model' || cfg.comType == 'part')){
		   	 	 this.parseChild(node);
		   	 }else if(cfg && cfg.comType == 'data'){
		   	 	  var obj = this.canvas.parseXml(node,$(this.element).firstElement());
		   	 	  obj.element.style.position = "absolute";
		   	 	  obj.element.style.left= (this.dataCount*22)+"px";
		   	 	  obj.element.style.width = "16px";
		   	 	  obj.element.style.zIndex="1000";
		   	 	  obj.element.style.paddingLeft="1px";
		   	 	  obj.setProperty("id","");
		   	 	  obj.ownerComponent = this;
		   	 	  this.dataCount+=1;
		   	 }else{
		   	 	this.canvas.parseXml(node,$(this.element).firstElement());
		   	 }
	   	 }
	   }
	}
});