
	function changeTab(tab){
	   var li = tab.parentNode;
	   var ul = li.parentNode;
	   var content = $(ul).next().children();
	   var childNodes = $(ul).children();
	   var idx = -1;
	   for(var i = 0;i<childNodes.length;i++){
	      if(childNodes[i] == li){
	          idx = i; 
	           $(childNodes[i]).addClass("selectTag");
	            content[i].style.display = "block";
	          //if(!$.browser.msie){
	        	  justep.design.TabPanel.superclass.doLayout.call(content[i].component);
	         // }
	      }else{  
	         $(childNodes[i]).removeClass("selectTag");//.className = "";
	         content[i].style.display = "none";
	      }
	   }
	}
justep.design.TabPanel = function(config){ 
	this.tabCount = 0;
	justep.design.TabPanel.superclass.constructor.call(this,config);
}

justep.extend(justep.design.TabPanel, justep.design.Container,{

	setTabActive:function(tab){ 
	   var ul,li;
	   if(typeof tab == 'string'){
	   	  ul = this.titleElement;
	   }else{  
	   	  li = tab.parentNode;
	   	  ul = li.parentNode;
	   }
	   var content = $(ul).next().children();
	   var childNodes = $(ul).children();
	   var idx = -1;
	   for(var i = 0;i<childNodes.length;i++){
	      if(childNodes[i] == li || childNodes[i].getAttribute('tabId') == tab){
	          idx = i;
	          $(childNodes[i]).addClass("selectTag");//.className = "selectTag";
	          content[i].style.display = "block";
	      }else{
	         $(childNodes[i]).removeClass("selectTag");
	         content[i].style.display = "none";
	      }
	   }
    
	},
	//=====================  公有方法 start=================================
	/**
	 * 绘制tabbar的内容.
	 */
	paintContent:function(xmlNode){  
		if(!this.element){
			this.createElement("<div id='"+this.id+"' class='tabbar' />",xmlNode);

			this.titleElement = document.createElement("ul");
			this.titleElement.className="tabbar-ul";
	        this.titleElement.setAttribute('isViewPartContent',"false"); 
	        this.element.appendChild(this.titleElement);
	        
	        this.tabContentElement = document.createElement("div");
			this.tabContentElement.setAttribute('isViewPartContent',"false");
	        this.element.appendChild(this.tabContentElement);
	        this.tabContentElement.className = "tab-content";
	        var canvas = self.canvas;
	 	    this.tabContentElement.onscroll = function(event){
	 		  canvas.containerScroll(event || window.event);
		   };
//	        var offsetH = $(this.parentElement).height() - $(this.titleElement).outerHeight();
//	       $(this.tabContentElement).height(offsetH-2);
		}
       
	   if(xmlNode.tagName == 'div'){
           //justep.design.Util.setAttributes(xmlNode,this.element,["id","width","height","style","border"]);
		   var childNodes = $(xmlNode).children();
		   var l = childNodes.length;
		   var firstTabId = null;
		   //遍历tab
		   for(var i = 0;i<l;i++){
		   	 var node = childNodes[i]; 
		   	 if(node.nodeType == 1 && node.tagName == 'tab'){ 
		   	    var tab = this.paintTab(node,this.canvas);
		         if(firstTabId == null){
		         	firstTabId = tab.tabId;
		         }
		   	 }
		   }
		   //默认激活第一个tab
		   this.setTabActive(firstTabId);
	   }else if(xmlNode.tagName == 'tab'){
	   	   var tab = this.paintTab(xmlNode,this.canvas); 
	   	   this.setTabActive(tab.tabId);
	   }
	   
		var css;
		if (LayoutUtils.isCellLayout(this.getParentComponent())) {
			css = "xui-autofill";
		} else {
			css = "xui-tabPanel";
		}
		this.setProperty("class", css, false, true);
	},
	doLayout:function(){
		//if(this.element.style.height)
        var offsetH = $(this.element).height() - $(this.titleElement).outerHeight();
	    $(this.tabContentElement).height(offsetH-2);
		justep.design.TabPanel.superclass.doLayout.call(this);
	},
	getChildren:function(e,list){
		return justep.design.TabPanel.superclass.getChildren.call(this,this.tabContentElement,list);
	},
	/**
	 * 重载重绘子页签.
	 * @param {} tabPageNode
	 */
	repaint:function(tabPageNode){
	   	 var tab = this.paintTab(tabPageNode,this.canvas); 
	   	 this.setTabActive(tab.tabId);
	},
	/**
	 * 绘制tabbar的tab.
	 */
	paintTab:function(tabNode,canvas){
		return new justep.design.TabPage({ownerTab:this,canvas:canvas,parentElement:this.titleElement,data:tabNode,componentName:'tabPage',id:tabNode.getAttribute("id")});
	} 
});

justep.design.TabPage = function(config){
	var pCom = config.parentElement.component;
	if(pCom){
		config.ownerTab = pCom;
		config.parentElement = pCom.titleElement;
	}
	this.tabCount = 0;
	justep.design.TabPage.superclass.constructor.call(this,config);
	this.resizable = false;
	this.allowShowTitleTip = false;
	this.allowDraging = false;
}

justep.extend(justep.design.TabPage, justep.design.Component,{
	paintContent:function(xmlNode){  
	   this.tabId = this.id;//+"_"+(this.tabCount++);  
       var text = $(">label[componentName='xuiLabel']",xmlNode).eq(0).text();
	   this.createElement("<li isViewPartContent='false' uiEditable='false'><A uiEditable='false' isViewPartContent='false' onmouseup='changeTab(this);' href='javascript:void(-1);'>"+text+"</A></li>",xmlNode);
	   this.element.setAttribute('tabId',this.tabId);  
	  // this.element.id = "";
	   this.element.setAttribute('uiEditable', false);
	   this.element.component = this;
	   $(this.element).firstElement().setAttribute('uiEditable',false);
	   
       var idx = $(this.element).index();
       
	   this.contentItemE = document.createElement("div");  

	   this.contentItemE.component = this;
	   this.canvas.on(this.contentItemE,'scroll',this.canvas.containerScroll,this.canvas);
	   
	   var ref = $(this.ownerTab.tabContentElement).children()[idx];
	   if(ref){
	   	 this.ownerTab.tabContentElement.insertBefore(this.contentItemE,ref);
	   }else{
	      this.ownerTab.tabContentElement.appendChild(this.contentItemE);
	   }
	   this.contentItemE.className = "tab-content-item";
	   this.contentItemE.setAttribute('isViewPartContent',"true");
	   this.contentItemE.setAttribute('tabId',this.tabId);  
	   
	   //this.contentItemE.bindingComponent = this; 
   	   var cNodes = $(xmlNode).children();
   	   for(var j=0;j<cNodes.length;j++){ 
   	 	 var tempNode = cNodes[j];
   	 	 if(tempNode.nodeType == 1 && tempNode.getAttribute('componentName') != 'xuiLabel'){  
   	 	 	 this.canvas.parseXml(tempNode, this.contentItemE);//继续绘制tab里面的内容
   	 	 }
   	   }
   	   this.ownerTab.setTabActive(this.tabId);
	}, 
	getChildren:function(e,list){
		return justep.design.TabPage.superclass.getChildren.call(this,this.contentItemE,list);
	},
	setProperty:function(p,v){ 
		if(p == 'title'){  
			$(this.element).children("a").text(v);
		}
	},
	getActivteViewPartElement:function(){
		return this.contentItemE;
	}
	,
	dispose:function(){
    	if(this.selectionBox){
    		this.selectionBox.dispose();
    	}
    	this.unbindComponent(this.element);
		this.unbindComponent(this.contentItemE);
		this.element.parentNode.removeChild(this.element);
		this.contentItemE.parentNode.removeChild(this.contentItemE);
	}
});
