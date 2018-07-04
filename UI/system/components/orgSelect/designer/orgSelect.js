justep.design.OrgSelect = function(config){ 
	this.dataCount = 0;
	justep.design.OrgSelect.superclass.constructor.call(this,config);
}

justep.extend(justep.design.OrgSelect, justep.design.Component,{
	 paintContent:function(xmlNode){ 
		 
		 var html = "<table title='"+this.componentName+"' cellSpacing=0 cellPadding=0 id='" + this.id + "' isViewPartContent='false' class=xui-select xui-orgSelect-div'><tr><td  isViewPartContent='false'><div uiEditable='false' class='xui-orgSelect-div-content'></div></td></tr></table>";
		    this.createElement(html,xmlNode);
	 //	this.createElement("<div id='"+this.id+"' class='xui-select xui-orgSelect-div' readonly='true'><div uiEditable='false' class='xui-orgSelect-div-content'></div></div>",xmlNode);
	 	this.contentElement = $(".xui-orgSelect-div-content",this.element)[0];
        this.parseChild(xmlNode);
        this.setChildUIEditable("false");
        var data = $(xmlNode).find('data')[0];
        var treeSelect = $(this.element).find('table.x-select')[0];
        if(data && treeSelect){
	        treeSelect.component.setProperty('data-ref',data.getAttribute('realId'),false,true);
        }else alert('组件定义有问题，data或者treeSelect不存在！');
        
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	},
    innerComponentPropertyChanged:function(comName,pName,v){ 
	   if(pName == 'id' && comName =='data'){
	      this.updateInnerComponentPropertyByName('treeSelect','data-ref',v);
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
		   	 	 var obj = this.canvas.parseXml(node,this.contentElement);
		   	 	 obj.element.style.width="100%";
		   	 	 obj.ownerComponent = this;
		   	 	 obj.element.style.border=0;
		   	 }else if(cfg && (cfg.comType == 'model' || cfg.comType == 'part')){
		   	 	 this.parseChild(node);
		   	 }else if(cfg && cfg.comType == 'data'){
		   	 	  var obj = this.canvas.parseXml(node,this.contentElement);
		   	 	  obj.element.style.position = "absolute";
		   	 	  obj.element.style.left= (this.dataCount*22)+"px";
		   	 	  obj.element.style.width = "16px";
		   	 	  obj.element.style.zIndex="1000";
		   	 	  //obj.element.style.paddingLeft="1px";
		   	 	  obj.setProperty("id","");
		   	 	  obj.ownerComponent = this;
		   	 	  this.dataCount+=1;
		   	 }else{
		   	 	this.canvas.parseXml(node,this.contentElement);
		   	 }
	   	 }
	   }
	}
});