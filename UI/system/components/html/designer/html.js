justep.design.A = function(config) {
	justep.design.A.superclass.constructor.call(this, config);
}
justep.extend(justep.design.A, justep.design.Container, {
	paintContent : function(xmlNode) {  
		this.createElement("<a id='"+this.id+"' href='javascript:void(0)' isViewPartContent='false' />",xmlNode);
		this.element.setAttribute("href","javascript:void(0)");//兼容各种浏览器
		var childNodes = xmlNode.childNodes;
		var l = childNodes.length;
		for ( var i = 0; i < l; i++) {
			var node = childNodes[i];
			if (node.nodeType == 3 || node.nodeType == 4) {
				var text = document.createTextNode(node.nodeValue);
				this.element.appendChild(text);
			}else if(node.nodeType == 1){
				this.canvas.parseXml(node,this.element);
			}
		}
	},
	setProperty:function(p,v){
     	if(p == 'text'){
			this.element.innerHTML = v;
		}else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}else{
			this.element.setAttribute(p,v);
		}
	}
});

justep.design.Hr = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Hr.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Hr, justep.design.Container, {
	paintContent : function(xmlNode) {  
		this.createElement("<hr id='"+this.id+"' isViewPartContent='false' />",xmlNode);
	},
	setProperty:function(p,v){
		if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	}
});

justep.design.Select = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Select.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Select, justep.design.Container, {
	paintContent : function(xmlNode) {  
	    this.createElement("<input title='"+this.componentName+"' id='"+this.id+"' class='x-select' readonly='true' isViewPartContent='false'/>",xmlNode);
	    var style = xmlNode.getAttribute("style");
	    if(style){
	       this.element.style.cssText = style.replace("visibility:hidden","");
	    }
	    
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-select" + (this.isInMobileUI()?"-m":"");
		}
			 	
		this.setProperty("class", css, false, true);	    
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Select.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'multiple' || p == 'disabled'){
			if(v==''){
				this.element.removeAttribute(p);
			}
			else{
				this.element.setAttribute(p,p);
			}
		}
		else if(p == 'size'){
			this.element.setAttribute(p,v);
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
		else{
		 	this.element.setAttribute(p,v);
		}
	},
	editOptionData : function(v) {
//		var arr = eval(v.array);
//		this.element.length = 0;
//		if (arr) {
//			for (var i = 0; i < arr.length; i++) {
//				this.element.add(new Option(arr[i].label, arr[i].value));
//			}
//		}
	}
});

justep.design.Textarea = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Textarea.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Textarea, justep.design.Container, {
	/**
	 * 绘制Textarea的内容.
	 */
	paintContent : function(xmlNode) {
		this.createElement("<textarea id='"+this.id+"' isViewPartContent='false' />",xmlNode);
		this.element.style.cssText = (xmlNode.getAttribute("style")||'').replace("visibility:hidden","");
		
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-textarea" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Textarea.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'disabled' || p == 'readonly'){
			if(v==''){
				this.element.removeAttribute(p);
			}
			else{
				this.element.setAttribute(p,v);
			}
		}
		else if(p == 'text'){
			this.element.innerHTML = v;
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
		else{
			this.element.setAttribute(p,v);
		}
	}
});

justep.design.Image = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Image.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Image, justep.design.Container, {
	getSrc : function(src){
		var src = this.transToAbsolutePath(src);
		return src;//basePath+'/../../../../..'+src;
	},
	/**
	 * 绘制Image的内容.
	 */
	paintContent : function(xmlNode) {
		var src = xmlNode.getAttribute("src");
		this.createElement("<img alt='' id='"+this.id+"' isViewPartContent='false' />",xmlNode);
	    this.element.src = this.getSrc(src);
	},
	setProperty:function(p,v){
		if(p == 'src'){
			this.element.setAttribute(p,this.getSrc(v));
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	} 
});

justep.design.Hidden = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Hidden.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Hidden, justep.design.Container, {
	/**
	 * 绘制Hidden的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<input type='text' id='"+this.id+"'  isViewPartContent='false' />",xmlNode);
	}
});

justep.design.Radio = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Radio.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Radio, justep.design.Container, {
	/**
	 * 绘制Radio的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<input type='radio' id='"+this.id+"' class='html-radio' isViewPartContent='false' disabled='disabled'/>",xmlNode);
	},
	setProperty:function(p,v){
		if(p == 'disabled' || p == 'readonly' || p == 'checked'){
			if(v==''){
				this.element.removeAttribute(p);
			}
			else{
				this.element.setAttribute(p,v);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
		else{
			this.element.setAttribute(p,v);
		}
	} 
});

justep.design.CheckBox = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.CheckBox.superclass.constructor.call(this, config);
}
justep.extend(justep.design.CheckBox, justep.design.Container, {
	/**
	 * 绘制CheckBox的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<input type='checkbox' id='"+this.id+"' class='html-checkbox' isViewPartContent='false' disabled='disabled'/>",xmlNode);
	},
	setProperty:function(p,v){
		if(p == 'disabled' || p == 'readonly' || p == 'checked'){
			if(v==''){
				this.element.removeAttribute(p);
			}
			else{
				this.element.setAttribute(p,v);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
		else{
			this.element.setAttribute(p,v);
		}
	} 
});

justep.design.Password = function(config) {
	this.regAttributes(["disabled","readonly"]);
 
	justep.design.Password.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Password, justep.design.Container, {
	/**
	 * 绘制Password的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<input title='"+this.componentName+"' readonly='readonly' type='password' id='"+this.id+"'  isViewPartContent='false' value='123456'/>",xmlNode);
		
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-input" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Password.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'disabled'){
			if(v=='disabled'){
				this.element.setAttribute(p,v);
			}
			else{
				this.element.removeAttribute(p);
			}
		}
		else if(p == 'readonly'){
			if(v=='readonly'){
				this.element.setAttribute(p,v);
			}
			else{
				this.element.removeAttribute(p);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
		else{
			this.element.setAttribute(p,v);
		}
	} 
});

justep.design.File = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.File.superclass.constructor.call(this, config);
}
justep.extend(justep.design.File, justep.design.Container, {
	/**
	 * 绘制File的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<input type='text' value='file' disabled='disabled' id='"+this.id+"' class='html-file' isViewPartContent='false' />",xmlNode);

		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-input" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.File.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'value'){
			this.element.setAttribute(p,v);
		}
		else if(p == 'readonly'){
			if(v=='readonly'){
				this.element.setAttribute(p,v);
			}
			else if(p == 'style'){
				if(v==null || v==''){
					this.element.removeAttribute(p);
				}else{
					this.element.style.cssText = v.replace("visibility:hidden","");
				}
			}
			else{
				this.element.removeAttribute(p);
			}
		}
	} 
});

justep.design.Text = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Text.superclass.constructor.call(this, config);
	this.lastStyleColor='';
}
justep.extend(justep.design.Text, justep.design.Container, {
	/**
	 * 绘制Text的内容.
	 */
	paintContent : function(xmlNode) {  
 
		this.createElement("<input title='"+this.componentName+"' type='text' id='"+this.id+"'  isViewPartContent='false' />",xmlNode);
	    var childNodes = xmlNode.childNodes;
	    
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-input" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);	
 
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Text.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'disabled'){
			if(v=='disabled'){
				this.lastStyleColor = this.element.style.color;
				this.element.style.color="#C0C0C0";
			}
			else{
				this.element.style.color = this.lastStyleColor==''?'#000000':this.lastStyleColor;
			}
		}
		else if(p == 'readonly'){
			if(v=='readonly'){
				this.element.setAttribute(p,v);
			}
			else{
				this.element.removeAttribute(p);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
		else{
			this.element.setAttribute(p,v);
		}
	} 
});

justep.design.Submit = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Submit.superclass.constructor.call(this, config);
	this.lastStyleColor='';
}
justep.extend(justep.design.Submit, justep.design.Container, {
	/**
	 * 绘制Submit的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<input title='"+this.componentName+"' type='submit' id='"+this.id+"' class='html-button' isViewPartContent='false' />",xmlNode);

		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-button" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Submit.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'value'){
			this.element.setAttribute(p,v);
		}
		else if(p == 'disabled'){
			if(v=='disabled'){
				this.lastStyleColor = this.element.style.color;
				this.element.style.color="#C0C0C0";
			}
			else{
				this.element.style.color = this.lastStyleColor==''?'#000000':this.lastStyleColor;
			}
		}
		else if(p == 'readonly'){
			if(v=='readonly'){
				this.element.setAttribute(p,v);
			}
			else{
				this.element.removeAttribute(p);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	} 
});

justep.design.Reset = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Reset.superclass.constructor.call(this, config);
	this.lastStyleColor='';
}
justep.extend(justep.design.Reset, justep.design.Container, {
	/**
	 * 绘制Reset的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<input title='"+this.componentName+"' type='reset' id='"+this.id+"' class='html-button' isViewPartContent='false' />",xmlNode);
		
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-button" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Reset.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'value'){
			this.element.setAttribute(p,v);
		}
		else if(p == 'disabled'){
			if(v=='disabled'){
				this.lastStyleColor = this.element.style.color;
				this.element.style.color="#C0C0C0";
			}
			else{
				this.element.style.color = this.lastStyleColor==''?'#000000':this.lastStyleColor;
			}
		}
		else if(p == 'readonly'){
			if(v=='readonly'){
				this.element.setAttribute(p,v);
			}
			else{
				this.element.removeAttribute(p);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	} 
});

justep.design.InputButton = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Button.superclass.constructor.call(this, config);
	this.lastStyleColor='';
}
justep.extend(justep.design.InputButton, justep.design.Container, {
	/**
	 * 绘制Button的内容.
	 */
	paintContent : function(xmlNode) { 
		this.createElement("<input title='"+this.componentName+"' type='button' id='"+this.id+"' class='html-button' isViewPartContent='false' />",xmlNode);
		
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-button" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Button.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'value'){
			this.element.setAttribute(p,v);
		}
		else if(p == 'disabled'){
			if(v=='disabled'){
				this.lastStyleColor = this.element.style.color;
				this.element.style.color="#C0C0C0";
			}
			else{
				this.element.style.color = this.lastStyleColor==''?'#000000':this.lastStyleColor;
			}
		}
		else if(p == 'readonly'){
			if(v=='readonly'){
				this.element.setAttribute(p,v);
			}
			else{
				this.element.removeAttribute(p);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	} 
});

justep.design.Div = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Div.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Div, justep.design.Container, {
	/**
	 * 绘制Div的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<div id='"+this.id+"'  isViewPartContent='true' class='html-div' />",xmlNode);
	    var childNodes = xmlNode.childNodes;
	    var l = childNodes.length;
	    for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];  
	   	 if(node.nodeType == 1){ 
		   	 this.canvas.parseXml(node,this.element);
	   	 }else if(node.nodeType == 3 || node.nodeType == 4){ 
			var text = document.createTextNode(node.nodeValue||'');
			this.element.appendChild(text);
	   	 }
	   }
	    
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-container" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
	
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Div.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	},
	
	getActivteViewPartElement:function(){ 
		return this.element;
	}
});

justep.design.Fieldset = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Fieldset.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Fieldset, justep.design.Container, {
	/**
	 * 绘制Div的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<fieldset id='"+this.id+"'  isViewPartContent='true'><legend>"+$(xmlNode).find('legend').text()+"</legend></fieldset>",xmlNode);
	    var childNodes = xmlNode.childNodes;
	    var l = childNodes.length;
	    for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];  
	   	 if(node.nodeType == 1){ 
	   		this.canvas.parseXml(node,this.element);
	   	 }else if(node.nodeType == 3 || node.nodeType == 4){ 
			var text = document.createTextNode(node.nodeValue||'');
			this.element.appendChild(text);
	   	 }
	   }
	    
		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-textarea" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){
    	if("legend"==p) $(this.element).find('legend').text(v);
     	justep.design.Fieldset.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
		if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	},
	getActivteViewPartElement:function(){ 
		return this.element;
	}
});

justep.design.Span = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Span.superclass.constructor.call(this, config);
}
justep.extend(justep.design.Span, justep.design.Container, {
	/**
	 * 绘制Span的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<span isViewPartContent='true' class='html-div' />", xmlNode);
		var childNodes = xmlNode.childNodes;
		var l = childNodes.length;
		for ( var i = 0; i < l; i++) {
			var node = childNodes[i];
			if (node.nodeType == 1) {
				this.canvas.parseXml(node, this.element);
			} else if (node.nodeType == 3 || node.nodeType == 4) { 
				var text = document.createTextNode(node.nodeValue || ''); 
				this.element.appendChild(text);
			}
		}

		var css;
		if (LayoutUtils.isCellLayout(this.getParentComponent())) {
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		} else {
			css = "xui-container" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Span.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
     	if(p == 'text'){
			this.element.innerHTML = v;
		} if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	},
	getActivteViewPartElement:function(){ 
		return this.element;
	}
});

justep.design.P = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.P.superclass.constructor.call(this, config);
	this.allowHighLight = true
}

justep.extend(justep.design.P, justep.design.Container, {
	/**
	 * 绘制P的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<p  isViewPartContent='true' class='html-div' />",xmlNode);
	    var childNodes = xmlNode.childNodes;
	    var l = childNodes.length;
	    for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];  
	   	 if(node.nodeType == 1){ 
		   	 this.canvas.parseXml(node,this.element);
	   	 }else if(node.nodeType == 3 || node.nodeType == 4){ 
			var text = document.createTextNode(node.nodeValue||'');
			this.element.appendChild(text);
	   	 }
	   }
	},
	getActivteViewPartElement:function(){ 
		return this.element;
	}
});

justep.design.HtmlLabel = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.HtmlLabel.superclass.constructor.call(this, config);
	this.resizable = false;
}
justep.extend(justep.design.HtmlLabel, justep.design.Component, {
	/**
	 * 绘制Label的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<label id='" + this.id + "' class='html-label' isViewPartContent='false' />", xmlNode);
		$(this.element).text($(xmlNode).text()); 
		var css;
		if (LayoutUtils.isCellLayout(this.getParentComponent())) {
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		} else {
			css = "xui-label" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);	
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.HtmlLabel.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);

     	if(p == 'text'){
			$(this.element).text(v);
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	}
});

justep.design.UL = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.UL.superclass.constructor.call(this, config);
	this.allowHighLight = true
}

justep.extend(justep.design.UL, justep.design.Container, {
	/**
	 * 绘制Div的内容.
	 */
	paintContent : function(xmlNode) {
		this.createElement("<ul  isViewPartContent='true' ></ul>",xmlNode);
	    var childNodes = xmlNode.childNodes;
	    var l = childNodes.length;
	    for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];  
	   	 if(node.nodeType == 1){ 
		   	 this.canvas.parseXml(node,this.element);
	   	 }else if(node.nodeType == 3 || node.nodeType == 4){ 
			var text = document.createTextNode(node.nodeValue||'');
			this.element.appendChild(text);
	   	 }
	   }
	    if(this.isInMobileUI())
			this.setProperty('class',"xui-ul-m",false,true);
	},
	getActivteViewPartElement:function(){ 
		return this.element;
	}
});

justep.design.Li = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Li.superclass.constructor.call(this, config);
	this.allowHighLight = true
}

justep.extend(justep.design.Li, justep.design.Container, {
	/**
	 * 绘制Div的内容.
	 */
	paintContent : function(xmlNode) {  
		this.createElement("<li  isViewPartContent='true' ></li>",xmlNode);
	    var childNodes = xmlNode.childNodes;
	    var l = childNodes.length;
	    for(var i = 0;i<l;i++){
	   	 var node = childNodes[i];  
	   	 if(node.nodeType == 1){ 
		   	 this.canvas.parseXml(node,this.element);
	   	 }else if(node.nodeType == 3 || node.nodeType == 4){ 
			var text = document.createTextNode(node.nodeValue||'');
			this.element.appendChild(text);
	   	 }
	   }	
		if(this.isInMobileUI())
			this.setProperty('class',"xui-li-m",false,true);
	},
	getActivteViewPartElement:function(){ 
		return this.element;
	}
});

justep.design.HX = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.HX.superclass.constructor.call(this, config);
}
justep.extend(justep.design.HX, justep.design.Component, {
	/**
	 * 绘制Label的内容.
	 */
	paintContent : function(xmlNode) {
		var tagName = ComponentConfig[this.componentName].tagName;
		this.createElement("<"+tagName+" id='" + this.id + "' isViewPartContent='false' ></"+tagName+">", xmlNode);
		var childNodes = xmlNode.childNodes;
		var l = childNodes.length;
		for ( var i = 0; i < l; i++) {
			var node = childNodes[i];
			if (node.nodeType == 3 || node.nodeType == 4) {
				var text = document.createTextNode(node.nodeValue);
				this.element.appendChild(text);
			}
		}
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.HX.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
     	if(p == 'text'){
			this.element.innerHTML = v;
		}
	}
});

justep.design.Button = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.Button.superclass.constructor.call(this, config);
	this.lastStyleColor='';
};
justep.extend(justep.design.Button, justep.design.Container, {
	paintContent : function(xmlNode) {  
		this.createElement("<button id='"+this.id+"' class='html-button' isViewPartContent='false' />",xmlNode);

		var childNodes = xmlNode.childNodes;
		var l = childNodes.length;
		for ( var i = 0; i < l; i++) {
			var node = childNodes[i];
			if (node.nodeType == 3 || node.nodeType == 4) {
				var text = document.createTextNode(node.nodeValue);
				this.element.appendChild(text);
			}
		}

		var css;
		if(LayoutUtils.isCellLayout(this.getParentComponent())){
			css = "xui-autofill" + (this.isInMobileUI()?"-m":"");
		}else{
			css = "xui-button" + (this.isInMobileUI()?"-m":"");
		}
		this.setProperty("class", css, false, true);		
	},
    setProperty:function(p,v,isStyle,isUpdateMode){  
     	justep.design.Button.superclass.setProperty.call(this,p,v,isStyle,isUpdateMode);
     	if(p == 'text'){
			this.element.innerHTML = v;
		}else if(p == 'disabled'){
			if(v=='disabled'){
				this.lastStyleColor = this.element.style.color;
				this.element.style.color="#C0C0C0";
			}
			else{
				this.element.style.color = this.lastStyleColor==''?'#000000':this.lastStyleColor;
			}
		}
		else if(p == 'readonly'){
			if(v=='readonly'){
				this.element.setAttribute(p,v);
			}
			else{
				this.element.removeAttribute(p);
			}
		}
		else if(p == 'style'){
			if(v==null || v==''){
				this.element.removeAttribute(p);
			}else{
				this.element.style.cssText = v.replace("visibility:hidden","");
			}
		}
	} 
});
