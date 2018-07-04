
justep.design.attachmentImage2 = function(config){   
	justep.design.attachmentImage2.superclass.constructor.call(this,config);
}

justep.extend(justep.design.attachmentImage2, justep.design.Component,{
	 paintContent:function(xmlNode){
	 	var showButton = "false" == xmlNode.getAttribute("show-button")? "none": "block";
	 	var width= xmlNode.getAttribute("width")? xmlNode.getAttribute("width"): "240px";
	 	var height= xmlNode.getAttribute("height")? xmlNode.getAttribute("height"): "300px";
	 	this.createElement("<table id='"+this.id+"' class='xui-attachmentImage2'><tr>" +
	 							"<td align='center'>" +
	 							"<font color='#000000' size='6'>图片</font></td></tr></table>",xmlNode);
	 	
	 	if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	},
	
	setProperty:function(name,value,s,u){
		justep.design.attachmentImage2.superclass.setProperty.call(this,name,value,s,u);
		if("show-button" == name){
			this.setShowButton(value);
		}else if("width" == name){
			this.setWidth(value);
		}else if("height" == name){
			this.setHeight(value);
		}
	},
	
	setShowButton :function(value){
		value = "false" == value? "none": "block";
		document.getElementById(this.id+"_text").style.display = value;
	},
	
	setWidth : function(value){
		document.getElementById(this.id).style.width= value;
	},
	
	setHeight : function(value){
		document.getElementById(this.id).style.height= value+20;
	}
});