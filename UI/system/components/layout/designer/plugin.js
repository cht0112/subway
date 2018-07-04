justep.design.ControlLabel = function(config){ 
	justep.design.ControlLabel.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ControlLabel, justep.design.Component,{

	 paintContent:function(xmlNode){
	 	this.createElement("<label id='"+this.id+"'  readonly='true'></label>",xmlNode);
//	   this.element = this.newElement({id:this.id,className:'control-label-content',tagName:'span'});
//	   this.element.className = this.element.className+" control-label";
//	   $(this.element).firstElement().innerHTML = "标签：";
//       justep.design.Util.setAttributes(xmlNode,this.element,["width","height","style"]);
//       var xmlNodeTxt = justep.design.Util.getText(xmlNode);
	 	
	   this.label = xmlNode.getAttribute('label');
	   this.controlLabel = "#l{"+(xmlNode.getAttribute('control-label')||'')+"}";	
       this.setLabel(); 
	},
	setLabel:function(){
		this.element.innerHTML = this.label||this.controlLabel;
	},
	setProperty:function(name,value){
	   if("control-label"==name)
		   this.controlLabel = "#l{"+value+"}";
	   else if("label"==name)
		   this.label = value;
	   this.setLabel();
	}
});
