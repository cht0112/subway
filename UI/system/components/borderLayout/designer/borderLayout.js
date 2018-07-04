justep.design.BorderLayout = function(config) {
	justep.design.BorderLayout.superclass.constructor.call(this, config);
};

justep.extend(justep.design.BorderLayout, justep.design.Container, {
	paintContent : function(xmlNode) {
		if (!this.element) {
			this.createElement("<div  id='"+this.id+"' isViewPartContent='false'></div>",xmlNode);
		}
		this.element.className = "xui-borderlayout-root";
		this.element.root = $("<div class='xui-borderlayout-root2'/>")[0];
		this.element.appendChild(this.element.root);
		this.borderSize = xmlNode.getAttribute("border-size");

				
		var childNodes = xmlNode.childNodes;
		var l = childNodes.length;
		for (var i = 0; i < l; i++) {
			this.paintArea(childNodes[i], this.element, this.canvas, childNodes[i].tagName);
		}
		
		var self = this;
	  	var onResize = function(){ 
	  		if(self.onResizeFlag){
	  			return;
	  		} 
	  		self.onResizeFlag = true;
	  		self.doLayout();
	  		window.setTimeout(function(){
	  			self.onResizeFlag = false;
	  		}, 1);
	  		
	   	};
	   	
	 	if($.browser.msie){
	 	 	//$(this.element).resize(onResize);
	 		this.doLayout();
	 	}else{
	 		//TODO support linux - xyh
	 	 	$(window).resize(onResize);
		 	window.setTimeout(function(){
		 		self.doLayout();
		 	},100);
	 	}
	},

	paintArea : function(xmlNode, parentElement, canvas, pos) {
		new justep.design.BorderLayoutArea({
			canvas:canvas,parentElement:parentElement,
			data:xmlNode,componentName:'borderLayout-'+pos,
			id:xmlNode.getAttribute("id")},
			pos,
			xmlNode.getAttribute("size"),
			xmlNode.getAttribute("border-size")
		);
	},
	
	setProperty:function(prop,v,s,u){
		justep.design.BorderLayout.superclass.setProperty.call(this, prop,v,s,u);
		if(prop=='border-size'){
			this.borderSize = v;
			this.doLayout();
		}else if(prop=='style'){
			this.doLayout();
		}
	},
 
	doLayout : function(){  
		var borderSize = 0;
		if(this.borderSize){
			try{
				borderSize = parseInt(this.borderSize.replace("px"));
			}catch(e){}
		}
 
		this.element.root.style.margin=borderSize;
		var totalW = $(this.element).width()-borderSize*2;
		var totalH = $(this.element).height()- borderSize*2;
		if(totalW<0)totalW=0;
		if(totalH<0)totalH=0;
		this.element.root.style.width = totalW;
		this.element.root.style.height = totalH;
		
//		var totalW = $(this.element.root).width();
//		var totalH = $(this.element.root).height();
		var top = left = height = width = 0; //对应center用过的height,width,top,left
		var topArea = this.element.topArea;
		var leftArea = this.element.leftArea;
		var rightArea = this.element.rightArea;
		var bottomArea = this.element.bottomArea;
		var centerArea = this.element.centerArea;
		 
		if(!centerArea){
			alert("错误信息：borderLayout必须有center节点");
			return;
		}

		if(topArea){
			var borderSize = 0;
			if(topArea.borderSize){
				try{
					borderSize = parseInt(topArea.borderSize.replace("px"));
				}catch(e){}
			}
			
			topArea.style.top = "0px";
			topArea.style.left = "0px";
			topArea.style.height = topArea.size;
			var borderHeight = this.getBorderSize(topArea,true);
			var innerHeight = $(topArea).height()-borderHeight-borderSize;
			var innerWidth = totalW - this.getBorderSize(topArea);
			if(innerHeight<0){
				innerHeight = 0;
			}
			if(innerWidth<0){
				innerWidth = 0;
			}
			topArea.style.height = innerHeight+"px";
			topArea.style.width = (innerWidth)+"px";
			top += topArea.offsetHeight+borderSize;
			height += top;
		}
		if(leftArea){
			var borderSize = 0;
			if(leftArea.borderSize){
				try{
					borderSize = parseInt(leftArea.borderSize.replace("px"));
				}catch(e){}
			}
			
			leftArea.style.left = "0px";
			leftArea.style.top = top+"px";
			leftArea.style.width = leftArea.size;
			var borderWidth = this.getBorderSize(leftArea);
			var innerWidth = $(leftArea).width()-borderWidth - borderSize;
			if(innerWidth<0){
				innerWidth = 0;
			}
			leftArea.style.width = (innerWidth)+"px";
			left += (leftArea.offsetWidth + borderSize);
			width += (leftArea.offsetWidth + borderSize);
		}
		if(rightArea){
			var borderSize = 0;
			if(rightArea.borderSize){
				try{
					borderSize = parseInt(rightArea.borderSize.replace("px"));
				}catch(e){}
			}
			
			rightArea.style.top = top+"px";
			rightArea.style.width = rightArea.size; //TODO width没减
			var borderWidth = this.getBorderSize(rightArea);
			var innerWidth = $(rightArea).width()-borderWidth - borderSize;
			if(innerWidth<0){
				innerWidth = 0;
			}
			rightArea.style.width = (innerWidth)+"px";
			width += (rightArea.offsetWidth + borderSize);
		}
		
		if(bottomArea){
			var borderSize = 0;
			if(bottomArea.borderSize){
				try{
					borderSize = parseInt(bottomArea.borderSize.replace("px"));
				}catch(e){}
			}
			
			bottomArea.style.height = bottomArea.size;
			var innerHeight = $(bottomArea).height()-this.getBorderSize(bottomArea,true) - borderSize;
			var innerWidth = totalW - this.getBorderSize(bottomArea);
			if(innerWidth<0){
				innerWidth = 0;
			}
			if(innerHeight<0){
				innerHeight = 0;
			}
			bottomArea.style.height = (innerHeight)+"px";
			bottomArea.style.width = (innerWidth) +"px";
			height += (bottomArea.offsetHeight + borderSize);
		}
		
	
		height = totalH - height;  
		width = totalW - width;
		if(height<0)height = 0;
		if(width<0)width=0;
		
		if(leftArea){
			var innerHeight = height - this.getBorderSize(leftArea, true);
			if(innerHeight<0){
				innerHeight = 0;
			}
			leftArea.style.height = (innerHeight)+"px";
		}
		if(rightArea){
			var innerHeight = height - this.getBorderSize(rightArea, true);
			if(innerHeight<0){
				innerHeight = 0;
			}
			rightArea.style.height = (innerHeight) + "px";
		}
		
		var centerAreaEl = $(centerArea);
		centerArea.style.top = top+"px";
		centerArea.style.left = left+"px";
		var innerHeight = height - this.getBorderSize(centerArea, true);
		var innerWidth = width - this.getBorderSize(centerArea);
		if(innerHeight<0){
			innerHeight = 0;
		}
		if(innerWidth<0){
			innerWidth = 0;
		}
		centerArea.style.height = (innerHeight)+"px";
		centerArea.style.width = (innerWidth)+"px";
		top+=innerHeight;
		if(bottomArea){
			bottomArea.style.top = top+"px";
		}
		left+=innerWidth;
		if(rightArea){
			rightArea.style.left = left+"px";
		}
		justep.design.BorderLayout.superclass.doLayout.call(this);
		//this.doLayout();
	},
	
	getBorderSize:function(e,isHeight){ 
		var el = $(e);
		return isHeight? (el.outerHeight()-el.height()): (el.outerWidth()-el.width());
	},
	
	addLeft : function(data){
		this.addArea(data);
	},
	
	addRight : function(data){
		this.addArea(data);
	},
	
	addTop : function(data){
		this.addArea(data);
	},
	
	addBottom : function(data){
		this.addArea(data);
	},
	
	addArea : function(data){
		var node = this.canvas.loadXML(data.xml).childNodes[0];
		this.paintArea(node,this.element,this.canvas,node.tagName);
		this.doLayout();
		this.canvas.reSelection();
	}
	
	
});

justep.design.BorderLayoutArea = function(config, pos, size, borderSize) { 
	this.pos = pos;
	this.size = size;
	this.borderSize = borderSize;
	this.allowMoveToOtherParent = false;
	justep.design.BorderLayoutArea.superclass.constructor.call(this, config);
	//this.allowShowTitleTip = false;
	this.allowDraging = false;
	this.disableStyleChangedEvent = true;//不触发样式改变事件
	if(this.pos=="top"){
		this.showResizeBox = [false/*北*/,false/*东北*/,false/*东*/,false/*东南*/,true/*南*/,false/*西南*/,false/*西*/,false/*西北*/];
	}else if(this.pos=="left"){
		this.showResizeBox = [false/*北*/,false/*东北*/,true/*东*/,false/*东南*/,false/*南*/,false/*西南*/,false/*西*/,false/*西北*/];
	}else if(this.pos=="right"){
		this.showResizeBox = [false/*北*/,false/*东北*/,false/*东*/,false/*东南*/,false/*南*/,false/*西南*/,true/*西*/,false/*西北*/];
	}else if(this.pos=="bottom"){
		this.showResizeBox = [true/*北*/,false/*东北*/,false/*东*/,false/*东南*/,false/*南*/,false/*西南*/,false/*西*/,false/*西北*/];
	}else if(this.pos=="center"){
		this.resizable = false;
	}
	
};
 
justep.extend(justep.design.BorderLayoutArea, justep.design.Container, {
	paintContent : function(xmlNode) {
		if (!this.element) {
			this.createElement("<div  id='"+this.id+"' ></div>",xmlNode);
		}
		
		//TODO 移动到rootDiv2下，为了支持div上的border-size属性
		if($.browser.msie){
			this.parentElement.root.appendChild(this.element);
		}
		
	    var pos = this.pos = xmlNode.tagName;  
	    this.size = xmlNode.getAttribute("size");
		var div = this.element;
		div.isViewPartContent = "true";
		div.className = "xui-borderlayout-area xui-borderlayout-"+this.pos;   
		if(pos=="top"){
			this.parentElement.topArea = div;
			this.parentElement.topArea.size = this.size;
			this.parentElement.topArea.borderSize = this.borderSize;
		}else if(pos=="left"){ 
			this.parentElement.leftArea = div;
			this.parentElement.leftArea.size = this.size;  
			this.parentElement.leftArea.borderSize = this.borderSize;
		}else if(pos=="right"){
			this.parentElement.rightArea = div;
			this.parentElement.rightArea.size = this.size;
			this.parentElement.rightArea.borderSize = this.borderSize;
		}else if(pos=="bottom"){
			this.parentElement.bottomArea = div;
			this.parentElement.bottomArea.size = this.size;
			this.parentElement.bottomArea.borderSize = this.borderSize;
		}else if(pos=="center"){
			this.parentElement.centerArea = div;
		}
		var parent = this.getParentComponent();
		if(parent && this.parentElement.centerArea){
			parent.doLayout();
		}
		var fcNodes = $(xmlNode).children();
		for(var i=0;i<fcNodes.length;i++){
			if (fcNodes[i].nodeType == 1) {
				hasChild = true;
				this.canvas.parseXml(fcNodes[i], this.element);
			} else if (fcNodes[i].nodeType == 3 || fcNodes[i].nodeType == 4) {
				var text = document.createTextNode(fcNodes[i].nodeValue);
				this.firstTD.appendChild(text);
				hasChild = true;
			}
		}

	},
	
	setBound:function(bound){
		this.setProperty("size", (this.pos=="left"||this.pos=="right")?bound.w+"px":bound.h+"px", false);
	},
	
	afterResize:function(){
		var bound = this.getBound();
		this.setProperty("size", (this.pos=="left"||this.pos=="right")?bound.w+"px":bound.h+"px", false,true);//更新的模型
	},
	
	dispose : function(config){
		this.parentElement[this.pos+"Area"] = null;
		this.parentElement.component.doLayout();
		justep.design.BorderLayoutArea.superclass.dispose.call(this,config);
	},
	
	setProperty:function(prop,v,s,u){
		justep.design.HSplitter.superclass.setProperty.call(this, prop,v,s,u);
		if(prop=='size'){
			this.parentElement[this.pos+"Area"].size = v;
			this.parentElement.component.doLayout();
		}else if(prop=='border-size'){
			this.parentElement[this.pos+"Area"].borderSize = v;
			this.parentElement.component.doLayout();
		}else if(prop=='style'){
			this.parentElement.component.doLayout();
		}
	},
	
	addLeft : function(data){
		this.addArea(data);
	},
	
	addRight : function(data){
		this.addArea(data);
	},
	
	addTop : function(data){
		this.addArea(data);
	},
	
	addBottom : function(data){
		this.addArea(data);
	},
	
	addArea : function(data){
		var node = this.canvas.loadXML(data.xml).childNodes[0];
		this.parentElement.component.paintArea(node,this.parentElement,this.canvas,node.tagName);
		this.parentElement.component.doLayout();
		this.canvas.reSelection();
	},
	isAllowKeyDownRemove:function(){ 
		return this.pos=='center'?false:true;
	}
});