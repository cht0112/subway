justep.design.CollapsePanel = function(config){ 
	justep.design.CollapsePanel.superclass.constructor.call(this,config);
}

justep.extend(justep.design.CollapsePanel, justep.design.Component,{
	 paintContent:function(xmlNode){  
		var elementStr = '<div id="'+this.id+'" isViewPartContent ="false">'
						+'	<div class="xui-collapsePanel-div-title" isViewPartContent ="false">'
						+'		<div style="float:left" name="title" isViewPartContent ="false">'
						+'		</div>'
						+'		<div class="xui-collapsePanel-img" isViewPartContent ="false">'
						+'      	<img name="btn" src="" isViewPartContent ="false"/>'
						+'		</div>'
						+'	</div>'						
						+'	<div name="panelarea" isViewPartContent ="true" class="xui-collapsePanel-div-content"></div>'
						+'</div>';
		this.createElement(elementStr, xmlNode);
				
		var div = $(this.element).find('div[name="panelarea"]')[0];
		var panelarea = $(xmlNode).find('group[name="panelarea"]')[0];
		if(div && panelarea){
  		     div.id = panelarea.getAttribute('id');
		}
    	
		this.setProperty('title', xmlNode.getAttribute('title'));
    	this.setProperty('status', xmlNode.getAttribute('status'));
   
		var panelareaNodes = $(panelarea).children();   
		for (var n = 0; n < panelareaNodes.length; n++) {
			if (panelareaNodes[n].nodeType == 1) {
				this.canvas.parseXml(panelareaNodes[n], div);
			} else if (panelareaNodes[n].nodeType == 3 || panelareaNodes[n].nodeType == 4) {
				var text = document.createTextNode(panelareaNodes[n].nodeValue);
				div.appendChild(text);
			}
		}	
		
		var css;
		if (LayoutUtils.isCellLayout(this.getParentComponent())) {
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		} else {
			css = "xui-collapsePanel" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);
	},
	
    setProperty:function(propName,v,isStyle,isUpdateMode){  
     	justep.design.CollapsePanel.superclass.setProperty.call(this,propName,v,isStyle,isUpdateMode);
     	if('title'==propName){
    		  $(this.element).find('div[name="title"]').text(v?v:'');
     	}else if('status'==propName){
     		this.changeLayout(v,init);
     	}
	},
	getActivteViewPartElement:function(){ 
		return $(this.element).find("div[name='panelarea']")[0];
	},
	changeLayout:function(state,init){
		  var basePath = ComponentConfig[this.componentName].basePath;
		  var collapsed = 'collapsed'==state;
  		  var img = $(this.element).find('img[name="btn"]')[0];
		  if(img){
   		     img.src = collapsed?(basePath+'/images/expanded.gif'):(basePath+'/images/collapsed.gif');
   		  }
  		  this._state = state;  
   		  var div = $(this.element).find('div[name="panelarea"]')[0];
   		  if(div){
			if(collapsed){
				div.style.display = "none";
	   		    //this.oldHeight = this.element.clientHeight;
	   		    //this.element.style.height = 5;
			}else{div.style.display = "block";
			    //if(this.oldHeight){
			  	//   this.element.style.height = this.oldHeight + "px";
			    //}
			};
			this.updateSelectionBox();
   		  }
	}
});