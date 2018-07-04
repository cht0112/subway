justep.design.BaseBar = function(config){ 
	justep.design.BaseBar.superclass.constructor.call(this,config);
};

justep.extend(justep.design.BaseBar, justep.design.Component,{

	 paintContent:function(xmlNode){
	   if(!this.element){
		   var basePath =  ComponentConfig[this.componentName].basePath;
		   var imgSrc = basePath+"/images/group.gif";
		   var std = "<td isViewPartContent='false' align='center' valign='middle' class='toolbar-item'><img isViewPartContent='false' align='absmiddle' src='"+imgSrc+"'/></td>";
	       this.createElement("<table id='"+this.id+"' class='bar' cellspacing='2px'><tr isViewPartContent='true' align='center' valign='middle'></tr></table>",xmlNode);
	       this.contentElement = $(this.element).firstChild().children()[0];
	   }else{
	   	  this.contentElement.innerHTML = "";
	   }
	 
       this.mode = xmlNode.getAttribute("mode");
       
	   var childNodes = $(xmlNode).children();	   
	   var size = childNodes.length;
	   $(this.contentElement).append(std);
	   for(var i=0;i<size;i++){
			var child = childNodes[i];
			if(child.nodeType == 1 && child.tagName=="item"){
				this.canvas.parseXml(child, this.contentElement);
			}	   			
	   }
	},
	//不能删除和java代码对应
	setBarItem : function(config){
		
	},
	getItemByName:function(name){
		var items = this.getDefaultItems();
		for(var i = 0,l=items.length;i<l;i++){
			if(items[i][0] == name){
				return items[i];
			}
		}
	},
	getDefaultItems:function(){
		return [ ];
	},
	getActivteViewPartElement:function(){
		return this.contentElement;
	},
	getDefaultItemsToString:function(){
		var items = this.getDefaultItems();
		return JSON.stringify(items);
	}
});

justep.design.NavigatorBar = function(config){ 
	justep.design.NavigatorBar.superclass.constructor.call(this,config);
};

justep.extend(justep.design.NavigatorBar, justep.design.BaseBar, {
	getDefaultItems:function(){
		return [ ['insert-item',"新增","insert.gif",true],
		         ["save-item","保存","save.gif",true],
	   			 ["delete-item","删除","remove.gif",true],
				 ["refresh-item","刷新","refresh.gif",true],
				 ["filter-pro-item","查询","search.gif",true],
				 ["filter-item","查询","search.gif",true],
				 ["filter-pattern-item","查询方案","filter-dropdown.gif",true],
				 ["first-item","第一条","first.gif",true],
				 ["pre-item","前一条","pre.gif",true],
				 ["next-item","下一条","next.gif",true],
				 ["last-item","最后一条","last.gif",true],
				 ["custom-page-item","分页导航","custom-page.png",true],
				 ["next-page-item","下一页","next-page.gif",true],
				 ["all-page-item","所有页","last-page.gif",true],
				 ["create-new-child-item","创建子","addchild.gif"],
				 ["create-new-brother-item","创建兄弟","addbrother.gif"],
				 ["create-new-root-item","创建根","addroot.gif"],
				 ["expand-this-item","展开当前","expandthis.gif"],
				 ["expand-all-item","展开所有","expandall.gif"],
				 ["collapse-this-item","收缩当前","collapsethis.gif"],
				 ["collapse-all-item","收缩所有","collapseall.gif"]//,
				 ];
	}
});

justep.design.BarItem = function(config){ 
	justep.design.BarItem.superclass.constructor.call(this,config);
	//this.allowMoveToOtherParent = false;
	this.resizable = false;
	this.allowShowTitleTip = false;
	this.allowMoveToOtherParent = false;
};

justep.extend(justep.design.BarItem, justep.design.Component,{
	 _init:function(config){
        this.element = this.newElement(config);
	 },
	 createElement2:function(s,xmlNode){
		var s1 = "<td align='center' isViewPartContent='false' valign='middle' class='toolbar-item'>"+s+"</td>";
		this.createElement(s1, xmlNode);
		this.contentElement = this.element;
	 },
	 paintImgTextMode:function(obj,mode,xmlNode,basePath){
	 		if(mode=="IMG_TXT_LR" || mode=="IMG_TXT_TB"){
				var imgSrc = obj? obj[2] : "btn.gif";
				if (imgSrc.indexOf("/") == -1){
					imgSrc = basePath+"/images/"+imgSrc;
				} 
				var label = obj? obj[1] : "";

				var sTd = "<td isViewPartContent='false' class='xforms-trigger-label' valign='middle' align='center'>"
	 				+label
	 				+"</td>";
	 			
	 			var s = "<table isViewPartContent='false' id='"+this.id+"'><tr isViewPartContent='false' valign='middle' align='center'><td isViewPartContent='false' valign='middle' align='center'>"
	 				+((imgSrc != ""?("<img src='"+imgSrc+"' alt='"+label+"'/>"):"")+"</td>")
	 				+("IMG_TXT_TB"!=mode?sTd:"")
	 				+"</tr>"
	 				+("IMG_TXT_TB"==mode?("<tr isViewPartContent='false' valign='middle' align='center'>"+sTd+"</tr>"):"")
	 				+"</table>";
				this.createElement2(s,xmlNode);
	 		}
	 },
	 paintTextMode:function(obj,xmlNode){
		var label = obj? obj[1] : "";
		var s = "<span class='xforms-trigger-label'>&nbsp;"+label+"&nbsp;</span>";
		this.createElement2(s,xmlNode);
	 },
	 paintContent:function(xmlNode){  
	   var basePath =  ComponentConfig[this.componentName].basePath;
	 	var pComponent = this.parentElement.component || this.parentElement.parentNode.parentNode.component;
	 	if(this.parentElement.component){  
	 		this.parentElement = $(this.parentElement).firstChild().firstChild().firstElement();
	 	} 

		var name = xmlNode.getAttribute("name");
		if(name=='custom-page-item'){
			var m = pComponent.mode;
			if(m=="IMG_TXT_LR") name = 'lr-'+name;
			else if(m=="IMG_TXT_TB") name = 'tb-'+name;
			else if(m=="TXT") name = 'txt-'+name;
		}
		var obj = pComponent.getItemByName(name);
		if(name == 'separator'){
			obj = ["separator","","compart.gif"];
		}
		var dw = 26;
		if(obj){
			var v = pComponent.mode;
			if(v=="TXT"){
				if(name != 'separator' && name != 'txt-custom-page-item') this.paintTextMode(obj,xmlNode);
				else this.paintImgTextMode(obj, "IMG_TXT_LR", xmlNode,basePath);
			}else if(v=="IMG_TXT_LR" || v=="IMG_TXT_TB"){
				this.paintImgTextMode(obj, v, xmlNode,basePath);
	 		}else{
				var imgSrc = obj? obj[2] : "btn.gif";
				if (imgSrc.indexOf("/") == -1){
					imgSrc = basePath+"/images/"+imgSrc;
				} 
				this.createElement2("<img align='absmiddle' isViewPartContent='false' class='' src='"+imgSrc+"' id='"+this.id+"'/>",xmlNode);
	 		}
		}else{
//			if($.browser.msie){
//				this.createElement2("<span isViewPartContent='false' class='cus-toolitem'></span>",xmlNode);//"<table border='2' cellpadding='0' cellspacing='0' id='"+this.id+"' class='cus-toolitem'><tr ><td isViewPartContent='false' uiEditable='false' valign='center' style='border:1px solid red;'></tr></table>",xmlNode);
//			}else{
				//20121031-xyh-在linux下，这个span会导致工具栏被撑开，所以linux不生成
				this.createElement2("",xmlNode);
//			}
			
			this.contentElement = $(this.element);//.firstChild().firstChild().firstElement();
		    var childNodes = $(xmlNode).children();
		    var l = childNodes.length;
		    for(var i = 0;i<l;i++){
		   	  var node = childNodes[i];
		   	  if(node.nodeType == 1){ 	 	 
		   	 	 var obj= this.canvas.parseXml(node,this.contentElement); 
		   	 	 obj.ownerComponent = this;
		   	 	// obj.uiEditable = 'false';
		   	  }
		    }
		}
	 }
});

justep.design.CustomPageItem = function(config){ 
	justep.design.CustomPageItem.superclass.constructor.call(this,config);
};

justep.extend(justep.design.CustomPageItem, justep.design.BarItem,{
	 paintContent:function(xmlNode){  
		 	var pComponent = this.parentElement.component || this.parentElement.parentNode.parentNode.component;
			this.mode = pComponent.mode;
			this.items = xmlNode.getAttribute("items");
			if(!this.items) this.items = this.DefaultItems; 
			this.createElement2("",xmlNode);
			this.reprint();
		 },
			DefaultItems:'first,pre,page,next,last,ext',
			reprint:function(){
				var l = ['first','pre','page','next','last','ext'];
				var s = "";
				for(var a in l){
					if(0<=this.items.indexOf(l[a])) s += "<img src='"+this.getShowImg(l[a])+"'/>";
				}
				$(this.element).html(s);
			},
			getShowImg:function(n){
			 	var basePath =  ComponentConfig[this.componentName].basePath;
				if(this.mode=="TXT") return basePath+"/images/"+n+"3.png";
				else if(this.mode=="IMG_TXT_LR") return basePath+"/images/"+n+"1.png";
				else if(this.mode=="IMG_TXT_TB") return basePath+"/images/"+n+"2.png";
				else return basePath+"/images/"+n+".png";
			},
			setProperty:function(p,v,s,u){
				justep.design.BarItem.superclass.setProperty.call(this, p,v,s,u);
				if(p=="mode") this.mode = v;
				else if(p=="items") {this.items = v?v:this.DefaultItems;}
				this.reprint();
			 }
});
