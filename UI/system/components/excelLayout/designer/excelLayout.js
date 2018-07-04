
justep.design.ExcelLayout = function(config){ 
	justep.design.ExcelLayout.superclass.constructor.call(this,config);
	this.allowHighLight = true; 
}

justep.extend(justep.design.ExcelLayout, justep.design.Component,{
	
	
	/**
	 * 绘制view的内容. 
	 */
	paintContent:function(xmlNode){  
		this.createElement("<div isViewPartContent='false'   id='"+this.id+"'></div>",xmlNode);
			var childNodes = xmlNode.childNodes;
		var l = childNodes.length;
		for(var i = 0;i<l;i++){
			var node = childNodes[i];  
			if(node.nodeType == 1){ 
				this.canvas.parseXml(node,this.element);
			}else if(node.nodeType == 3 || node.nodeType == 4){
				var text = document.createTextNode(node.nodeValue||'');
				this.element.appendChild(text);
			}
		}
    
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}

	},



	setProperty : function(p, v, isStyle, isUpdateMode) { 
		justep.design.ExcelLayout.superclass.setProperty.call(this, p, v, isStyle, isUpdateMode);

	}
});