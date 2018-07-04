justep.design.WindowFrame = function(config) {
	justep.design.WindowFrame.superclass.constructor.call(this, config);
}

justep.extend(justep.design.WindowFrame, justep.design.Component, {

	paintContent : function(xmlNode) {
		this.createElement("<table id='"+this.id+"' class='xui-windowFrame' ><tr>" 
							+ "<td bgcolor='gray' align='center'>" 
							+ "<font color='white' size='6'>"
							+ (xmlNode.getAttribute("url") || "") 
							+ "</font></td></tr></table>",xmlNode);
		
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	
	},

	setProperty:function(p,v,s,u){
		justep.design.WindowFrame.superclass.setProperty.call(this, p,v,s,u);
	 	if(p=="url"){
	 		$("#"+this.id).find("font").html(v);
	 	}
	}	 
});
