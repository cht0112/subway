justep.design.XformTextarea = function(config){ 
	this.regAttributes(["disabled","readonly"]);
	justep.design.XformTextarea.superclass.constructor.call(this,config);
}

justep.extend(justep.design.XformTextarea, justep.design.Component,{

	 paintContent:function(xmlNode){  
	 	 this.createElement("<textarea id='"+this.id+"' class='xui-textarea' readonly='true'/>",xmlNode);
		 this.setProperty("mediatype",xmlNode.getAttribute("mediatype"));
			if(LayoutUtils.isCellLayout(this.getParentComponent())){
				var css = "xui-autofill";
				this.element.component.setProperty('class',css,false,true);
			}
	},
	
	setProperty:function(prop,v,s,u){
		justep.design.Td.superclass.setProperty.call(this, prop,v,s,u);
		if(prop=='mediatype'){
			if(v=="text/html"){
				$(this.element).removeClass("control-textarea").addClass("rich-eidtor");
			}else{
				$(this.element).removeClass("rich-eidtor").addClass("control-textarea");
			}
		}
	}
});