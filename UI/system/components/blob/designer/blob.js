justep.design.Blob = function(config){ 
	justep.design.Blob.superclass.constructor.call(this,config);
}

justep.extend(justep.design.Blob, justep.design.Component,{
	 paintContent:function(xmlNode){  
	 	this.createElement("<table id='"+this.id+"' class='xui-blob'> <tr>" +
	 							"<td align='center'>" +
	 							"<div name='show' isViewPartContent ='true' style='width:100%;height:100%;background-color:transparent'/></td></tr></table>",xmlNode);
	 	
		var div = $(this.element).find('div[name="show"]')[0];
		var showarea = $(xmlNode).find('group[name="show"]')[0];
		if(div && showarea){
  		     div.id = showarea.getAttribute('id');
		}
    	
		var showareaNodes = $(showarea).children();   
		for (var n = 0; n < showareaNodes.length; n++) {
			if (showareaNodes[n].nodeType == 1) {
				this.canvas.parseXml(showareaNodes[n], div);
			} else if (showareaNodes[n].nodeType == 3 || showareaNodes[n].nodeType == 4) {
				var text = document.createTextNode(showareaNodes[n].nodeValue);
				div.appendChild(text);
			}
		}	
	 	
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	},
	getActivteViewPartElement:function(){ 
		return $(this.element).find("div[name='show']")[0];
	}	
});

justep.design.BlobImage = function(config){ 
	justep.design.BlobImage.superclass.constructor.call(this,config);
}

justep.extend(justep.design.BlobImage, justep.design.Component,{
	 paintContent:function(xmlNode){  
	 	this.createElement("<table id='"+this.id+"' class='xui-blobImage xui-blob'> <tr>" +
	 							"<td align='center'>" +
	 							"<font color='#000000' size='6'>图片（BLOB）</font></td></tr></table>",xmlNode);
	 	
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	}
});