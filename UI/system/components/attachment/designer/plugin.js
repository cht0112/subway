justep.design.Attachment = function(config){   
	justep.design.Attachment.superclass.constructor.call(this,config);
};

justep.extend(justep.design.Attachment, justep.design.Component,{
	 paintContent:function(xmlNode){
		var basePath = ComponentConfig[this.componentName].basePath;
	 	var showTree = "false" == xmlNode.getAttribute("show-tree")? "none": "block";
	 	/*this.createElement("<div id='"+this.id+"' style='width:100%;height:300px;'><div style='width:100%;height:100%;overflow:auto;position:relative;border:2px solid red;'>" +
	 			"<div id='"+ this.id +"_treeCell' style='border:1px solid blue;height:100%;width:300px;position:absolute;left:0;top:0;display:"+ showTree +"'>" +
	 			"<img src='"+ basePath +"/images/refresh.gif' alt='刷新'/>"+
	 			"<img src='"+ basePath +"/images/tree.jpg' style='display:block'>"+
	 			"</div>" +this.createListCell(xmlNode));*/
	 	this.createElement("<div id='"+this.id+"' style='width:100%;height:100%;overflow:scroll'>" +
					 				"<div id='"+ this.id +"_treeCell' style='height:100%;width:80px;float:left;position:relative;left:0;top:0;display:"+ showTree +"'></div>" +
				 					"<div id='"+ this.id +"_listCell' style='overflow:scroll;height:100%;float:left;position:relative;"+(showTree == "none"?"left:0px;":"left:80px;")+"top:0;'></div>" +
								"</div>",xmlNode);
	 	this.createTreeCell();
	 	this.createListCell(xmlNode);
	 	if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}
	},
	
	createTreeCell : function(){
		var basePath = ComponentConfig[this.componentName].basePath;
		var treeCell = document.getElementById(this.id+"_treeCell");
		var item = [];
		item.push("<img src='"+ basePath +"/images/refresh.gif' alt='刷新'/>");
		item.push("<img src='"+ basePath +"/images/tree.jpg' style='display:block'>");
		treeCell.innerHTML = item.join("");
	},
	
	createListCell : function(xmlNode){
		var listCell = document.getElementById(this.id+"_listCell");
		var item = [];
		item.push(this.createListBar());
		item.push(this.createListGrid());
		listCell.innerHTML = item.join("");
		this.setDisplayButtons(xmlNode.getAttribute("display-buttons"));
	},
	
	createTreeBar : function(){
		var basePath = ComponentConfig[this.componentName].basePath;
		return "<table id='"
				+ this.id
				+ "_treeBar' style='width:100%; height:100%;'><tr><td style='width:30px'><img src='"+ basePath +"/images/refresh.gif' alt='刷新'/></td><td></td></tr></table>";
	},
	
	createTreeGrid : function(){
		var basePath = ComponentConfig[this.componentName].basePath;
		return "<img src='"+ basePath +"/images/tree.jpg'>";
	},
	
	createListBar : function(){
		var basePath = ComponentConfig[this.componentName].basePath;
		var item=[];
		item.push("<div style='width:100%'><span style='float:left;' id='"+ this.id +"_newDoc' ><img src='"+ basePath +"/images/newfile.gif' alt='新建文件'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_editDoc' ><img src='"+ basePath +"/images/edit_file.gif' alt='修改文件'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_deleteDoc' ><img src='"+ basePath +"/images/deletefile.gif' alt='删除文件'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_docProperties' ><img src='"+ basePath +"/images/file_pro.gif' alt='文件属性'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_saveDoc' ><img src='"+ basePath +"/images/save.gif' alt='保存文件'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_downloadDoc' ><img src='"+ basePath +"/images/download.gif' alt='下载文件'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_browseDoc' ><img src='"+ basePath +"/images/browse.gif' alt='查看文件'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_docHistory' ><img src='"+ basePath +"/images/modify_record.gif' alt='查看历史版本'></span>");
		item.push("<span style='float:left;' id='"+ this.id +"_refreshDoc' ><img src='"+ basePath +"/images/refresh.gif' alt='刷新文件'></span></div>");
		return item.join("");
	},
	
	createListGrid : function(){
		var basePath = ComponentConfig[this.componentName].basePath;
		return "<div><img src='"+ basePath +"/images/list.jpg'></div>";
	},
	
	setProperty:function(name,value,s,u){
		justep.design.Attachment.superclass.setProperty.call(this,name,value,s,u);
		if("show-tree" == name){
			this.setShowTree(value);
		}else if("tree-width" == name){
			this.setTreeWidth(value);
		}else if("grid-width" == name){
			this.setGridWidth(value);
		}else if(jQuery.inArray(name, ["refreshDoc","docProperties","docHistory","saveDoc","deleteDoc","browseDoc","downloadDoc","newDoc","editDoc"] )!= -1){
			var element = document.getElementById(this.id + "_" + name);
			if(element){
				element.style.display = (value=="true")? "block" : "none";
			}
		}
	},
	
	setTreeWidth : function(value){
	},
	
	setGridWidth : function(value){
	},
	
	setShowTree : function(value){
		var value = "false" == value? "none": "block";
		document.getElementById(this.id +"_treeCell").style.display = value;
		if("none" == value){
			document.getElementById(this.id +"_listCell").style.left = 0;
		}else{
			document.getElementById(this.id +"_listCell").style.left = "80px";
		}
	},
	
	setDisplayButtons : function(value){
		var buttons = {};
		if (value) {
			value = value.split(";");
			for (var i = 0; i < value.length; i++) {
				var button = value[i].split(":");
				buttons[jQuery.trim(button[0])] = "false" == jQuery.trim(button[1]) ? false : true;
			}
		}
		for (var item in buttons) {
			try {
				var element = document.getElementById(this.id + "_" + item);
				if(element){
					element.style.display = buttons[item] ? "block" : "none";
				}
			} finally {
				continue;
			}
		}
	},
	
	setRootPath : function(value){
	},
	
	setSubPath : function(value){
	}
});
