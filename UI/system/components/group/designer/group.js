justep.design.XformGroup = function(config){ 
	justep.design.XformGroup.superclass.constructor.call(this,config);
	this.allowHighLight = true;
}

justep.extend(justep.design.XformGroup, justep.design.Component,{
	paintContent:function(xmlNode){   
		this.createElement("<div style='border:1px dotted gray;' id='"+this.id+"' isViewPartContent ='true'></div>",xmlNode);
		
		var childNodes = $(xmlNode).children();
		var l = childNodes.length;
		for(var i = 0;i<l;i++){
			var node = childNodes[i];  
			if(node.nodeType == 1){ 
				this.canvas.parseXml(node,this.element);
			}
		} 
		var css;
		if (LayoutUtils.isCellLayout(this.getParentComponent())) {
			css = "xui-autofill";
		} else {
			css = "xui-container";
		}
		this.setProperty("class", css, false, true);
	},
	getActivteViewPartElement:function(){
		return this.element;
	}	
});