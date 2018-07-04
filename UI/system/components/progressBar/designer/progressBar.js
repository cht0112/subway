justep.design.ProgressBar = function(config){ 
	justep.design.ProgressBar.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ProgressBar, justep.design.Component,{
	 paintContent:function(xmlNode){
	 	var basePath =  ComponentConfig[this.componentName].basePath;
		var elementStr = '<table id="'+this.id+'" background-color="white" class="xui-progressBar" border="0" cellpadding="0" cellspacing="0" style="position:relative;">'
					 	+'<tr><td>'
					 	+'<img style="border:none;vertical-align:middle;" width="50%" height="10" src="'+basePath+'/images/processing_active.gif">'
					 	+'<img style="border:none;vertical-align:middle;" width="49%" height="10" src="'+basePath+'/images/processing_deactive.gif">'
					 	+'</td></tr></table>';
		this.createElement(elementStr, xmlNode);
	 	this.setProperty('inner-height', xmlNode.getAttribute('inner-height'));
	},
    setProperty:function(p,v,s,u){
     	justep.design.ProgressBar.superclass.setProperty.call(this,p,v,s,u);
    	if('inner-height'==p){
    		  $(this.element).find('img').each(function(){
    		     $(this).height(v?v:'10');
    		  });
    	}
	}
});