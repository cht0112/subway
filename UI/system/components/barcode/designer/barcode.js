justep.design.barcodeImage = function(config){ 
	justep.design.barcodeImage.superclass.constructor.call(this,config);
}

justep.extend(justep.design.barcodeImage, justep.design.Component,{
	 paintContent:function(xmlNode){  
	 	this.createElement("<table id='"+this.id+"' class='xui-barcodeImage'> <tr>" +
	 							"<td align='center'>" +
	 							"<font color='#000000' size='6'>条形码图片</font></td></tr></table>",xmlNode);
	 	
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	}
});