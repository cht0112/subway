justep.design.HSplitter = function(config){ 
	justep.design.HSplitter.superclass.constructor.call(this,config);
}

justep.extend(justep.design.HSplitter, justep.design.Container,{
	paintContent:function(xmlNode){
		this.fixSize = fixSize = xmlNode.getAttribute("fix-size");
		if(!fixSize||fixSize=="") this.fixSize = fixSize="50%";
		this.fixType = fixType = xmlNode.getAttribute("fix-type")||"left";
		var comSize = null;
		if(fixSize.indexOf("%") != -1){
			comSize = (100 - fixSize.substring(0,fixSize.indexOf("%")))+"%";
		}
		if(fixType=="right") {
			var tmp = comSize;
			comSize = fixSize;
			fixSize = tmp;
		}
		var imagePath = ComponentConfig[this.componentName].basePath + "/images/";
		//------------------
		var firstDiv = $(xmlNode).firstElement();
		var secondDiv = $(xmlNode).children()[1];
		var html = "<table id='"+this.id+"' isViewPartContent='false' cellpadding='0' cellspacing='0' border='0' ";
			html +=	"style='table-layout:fixed;'><tr height='100%'>";  
			html += "<td align='left' valign='top' height='100%'"+(fixSize?"width='"+fixSize+"'":"")+" isViewPartContent='false' style='border:1px dotted gray;'><div "+ "isViewPartContent='true' style='width:100%;height:100%;' id='"+firstDiv.getAttribute("id")+"'/></td>" ;
			html +=	"<td width='5' height='100%' align='center' isViewPartContent ='false' style='background:#DFE8F6;'><img src='"+imagePath+"little_left.gif'/><img src='"+imagePath+"little_right.gif'/></td>";
			html +=	"<td align='left' height='100%'"+(comSize?"width='"+comSize+"'":"")+" valign='top' isViewPartContent='false' style='border:1px dotted gray;'><div isViewPartContent='true' style='width:100%;height:100%' id='"+secondDiv.getAttribute("id")+"'></div></td>";
			html +=	"</tr></table>"; 
		this.createElement(html,xmlNode);
		this.firstTD = $(this.element.rows[0].cells[0]).firstElement();
		this.middleTD = this.element.rows[0].cells[1];
		this.secondTD = $(this.element.rows[0].cells[2]).firstElement();
	
		this.img1 = $(this.middleTD).firstElement();
		this.img2 = $(this.middleTD).lastElement();
		//---------------------
		this.setProperty("has-drag-bar",xmlNode.getAttribute("has-drag-bar")==null?"true":xmlNode.getAttribute("has-drag-bar"));
		this.setProperty("has-arrow-button",xmlNode.getAttribute("has-arrow-button")==null?"true":xmlNode.getAttribute("has-arrow-button"));
		var fcNodes = $(firstDiv).children();
		var scNodes = $(secondDiv).children();
		for(var i=0;i<fcNodes.length;i++){
			if (fcNodes[i].nodeType == 1) {
				hasChild = true;
				this.canvas.parseXml(fcNodes[i], this.firstTD);
			} else if (fcNodes[i].nodeType == 3 || fcNodes[i].nodeType == 4) {
				var text = document.createTextNode(fcNodes[i].nodeValue);
				this.firstTD.appendChild(text);
				hasChild = true;
			}
		}
		for(var i=0;i<scNodes.length;i++){
			if (scNodes[i].nodeType == 1) {
				hasChild = true;
				this.canvas.parseXml(scNodes[i], this.secondTD);
			} else if (scNodes[i].nodeType == 3 || scNodes[i].nodeType == 4) {
				var text = document.createTextNode(scNodes[i].nodeValue);
				this.secondTD.appendChild(text);
				hasChild = true; 
			}
		}
		
		//判断布局类型加载默认class
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill";
		}else{
			css = "xui-splitter";
		}
		this.setProperty("class", css, false, true);	
	},
	
	setProperty:function(prop,v,s,u){
		justep.design.HSplitter.superclass.setProperty.call(this, prop,v,s,u);
		if(prop=='fix-size' || prop=='fix-type'){
			var otherV = null; 
			if(prop=='fix-type') this.fixType = v;
			if(prop=='fix-size') this.fixSize = v;
			
			if(this.fixSize.indexOf("%") != -1){
				otherV = (100 - this.fixSize.substring(0,this.fixSize.indexOf("%")))+"%";
			}	
			if(this.fixType == "right"){
				this.secondTD.parentElement.width = this.fixSize;	
				!otherV?this.firstTD.parentElement.removeAttribute("width"):this.firstTD.parentElement.width=otherV;
			}else{
				this.firstTD.parentElement.width = this.fixSize;
				!otherV?this.secondTD.parentElement.removeAttribute("width"):(this.secondTD.parentElement.width=otherV);
			}
		}else if(prop=="has-drag-bar"){
			this.middleTD.style.display=(v=="true"?"":"none");
		}else if(prop=="has-arrow-button"){
			this.img1.style.display=(v=="true"?"":"none");
			this.img2.style.display=(v=="true"?"":"none");
		}
	}
}); 


justep.design.VSplitter = function(config){ 
	justep.design.VSplitter.superclass.constructor.call(this,config);
}

justep.extend(justep.design.VSplitter, justep.design.Container,{
	paintContent:function(xmlNode){
		this.fixSize = fixSize = xmlNode.getAttribute("fix-size");
		if(!fixSize||fixSize=="") this.fixSize = fixSize="50%";
		this.fixType = fixType = xmlNode.getAttribute("fix-type") || "top";
		var comSize = null;
		if(fixSize.indexOf("%") != -1){
			comSize = (100 - fixSize.substring(0,fixSize.indexOf("%")))+"%";
		}
		if(fixType=="bottom") {
			var tmp = comSize;
			comSize = fixSize;
			fixSize = tmp;
		}
		var imagePath = ComponentConfig[this.componentName].basePath + "/images/";
		//------------------
		var firstDiv = $(xmlNode).firstElement();
		var secondDiv = $(xmlNode).children()[1];
		var html = "<table id='"+this.id+"' isViewPartContent='false' cellpadding='0' cellspacing='0' border='0'";
			html +=	"style='table-layout:fixed;'>";  
			html += "<tr ><td "+(fixSize?"height='"+fixSize+"'":"")+"' align='left' valign='top' style='border:1px dotted gray;' isViewPartContent='false' ><div isViewPartContent='true' style='width:100%;height:100%' id='"+firstDiv.getAttribute("id")+"'/></td></tr>" ;
			html +=	"<tr height='5'><td align='center' isViewPartContent ='false' style='font-size:1px;background:#DFE8F6;'><img src='"+imagePath+"little_up.gif'/><img src='"+imagePath+"little_down.gif'/></td></tr>";
			html +=	"<tr ><td "+(comSize?"height='"+comSize+"'":"")+"' align='left' valign='top' style='border:1px dotted gray;' isViewPartContent='false' ><div isViewPartContent='true' style='width:100%;height:100%' id='"+secondDiv.getAttribute("id")+"'/></td></tr>";
			html +=	"</table>"; 
		this.createElement(html,xmlNode);

		this.firstTD = $(this.element.rows[0].cells[0]).firstElement();
		this.middleTD = this.element.rows[1].cells[0]
		this.secondTD = $(this.element.rows[2].cells[0]).firstElement();
	
		this.img1 = $(this.middleTD).firstElement();
		this.img2 = $(this.middleTD).lastElement();
	
		//---------------------
		this.setProperty("has-drag-bar",xmlNode.getAttribute("has-drag-bar")==null?"true":xmlNode.getAttribute("has-drag-bar"));
		this.setProperty("has-arrow-button",xmlNode.getAttribute("has-arrow-button")==null?"true":xmlNode.getAttribute("has-arrow-button"));
		var fcNodes = $(firstDiv).children();
		var scNodes = $(secondDiv).children();
		for(var i=0;i<fcNodes.length;i++){
			if (fcNodes[i].nodeType == 1) {
				hasChild = true;
				this.canvas.parseXml(fcNodes[i], this.firstTD);
			} else if (fcNodes[i].nodeType == 3 || fcNodes[i].nodeType == 4) {
				var text = document.createTextNode(fcNodes[i].nodeValue);
				this.firstTD.appendChild(text);
				hasChild = true;
			}
		}
		for(var i=0;i<scNodes.length;i++){
			if (scNodes[i].nodeType == 1) {
				hasChild = true;
				this.canvas.parseXml(scNodes[i], this.secondTD);
			} else if (scNodes[i].nodeType == 3 || scNodes[i].nodeType == 4) {
				var text = document.createTextNode(scNodes[i].nodeValue);
				this.secondTD.appendChild(text);
				hasChild = true; 
			}
		}
		
		//判断布局类型加载默认class
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill";
		}else{
			css = "xui-splitter";
		}
		this.setProperty("class", css, false, true);	
	},
	
	setProperty:function(prop,v,s,u){
		justep.design.VSplitter.superclass.setProperty.call(this, prop,v,s,u);
		if(prop=='fix-size' || prop=='fix-type'){
			var otherV = null; 
			if(prop=='fix-type') this.fixType = v;
			if(prop=='fix-size') this.fixSize = v;
			if(this.fixSize.indexOf("%") != -1){
				otherV = (100 - this.fixSize.substring(0,this.fixSize.indexOf("%")))+"%";
			}	
			if(this.fixType == "bottom"){
				this.secondTD.parentElement.parentElement.height = this.fixSize;	
				!otherV?this.firstTD.parentElement.removeAttribute("height"):(this.firstTD.parentElement.height=otherV);
			}else{
				this.firstTD.parentElement.parentElement.height = this.fixSize;
				!otherV?this.secondTD.parentElement.removeAttribute("height"):(this.secondTD.parentElement.height=otherV);
			}
			
		}else if(prop=="has-drag-bar"){
			this.middleTD.style.display=(v=="true"?"":"none");
		}else if(prop=="has-arrow-button"){
			this.img1.style.display=(v=="true"?"":"none");
			this.img2.style.display=(v=="true"?"":"none");
		}
	}
}); 