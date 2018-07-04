
justep.design.AttachmentEditor2 = function(config){   
	justep.design.AttachmentEditor2.superclass.constructor.call(this,config);
};

justep.extend(justep.design.AttachmentEditor2, justep.design.Component,{
	 paintContent:function(xmlNode){
	 	var displayStyle = xmlNode.getAttribute("display-style")? xmlNode.getAttribute("display-style"): "list";
	 	this.createElement("<div id='"+this.id+"'></div>",xmlNode);
	 	this.createDisplayElement(displayStyle);
	 	var displayButtons = xmlNode.getAttribute("display-buttons");
	 	this.setDisplayButtons(displayButtons);
	 	
	 	if(LayoutUtils.isCellLayout(this.getParentComponent())){
			this.setProperty('class',"xui-autofill",false,true);
		}else{
			this.setProperty('class',"xui-attachmentEditor2",false,true);
		}
	},
	
	
	setProperty:function(name,value,s,u){
		justep.design.AttachmentEditor2.superclass.setProperty.call(this,name,value,s,u);
		if(jQuery.inArray(name, ["upload","template","edit","download","delete","history"]) != -1 ){
			var element = document.getElementById(this.id + "_" + name);
			if(element){
				element.style.display = (value=="true")? "" : "none";
			}
		}else if("display-style" == name){
			this.createDisplayElement(value);
		}
	},
	
	createDisplayElement : function(displayStyle){
		if("list" == displayStyle){
			this.createListDisplayElement();
		}else if("single" == displayStyle){
			this.createSingleDisplayElement();		
		}
	},
	createListDisplayElement : function(){
		var items = [];
		items.push("<table width='100%'>");
		items.push("<tr style='height:20px'>");
		items.push("<td>");
		items.push("<div style='width:130px;height:20px'>");
		items.push("<table style='width:130px;height:20px'>");
		items.push("<tr>");
		items.push("<td width='60px' id='"+ this.id +"_upload'>");
		items.push("<a style='color:#0383a1'>上传文件</a>");
		items.push("</td>");
		items.push("<td width='70px' id='"+ this.id +"_template'>");
		items.push("<a  style='color:#0383a1'>从模板新建</a>");
		items.push("</td></tr></table></div></td></tr><tr><td>");
		items.push("<table style='width:100%; table-layout:fixed' >");
		items.push("<tr height='20px'>");
		items.push("<td width='130px'>");
		items.push("<a style='color:black'>附件1.doc</a>");
		items.push("</td>");
		items.push("<td width='100px'style='valign:middle'>");
		items.push("<a style='color:black'>123KB</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_edit'>");
		items.push("<a  style='color:#0383a1'>编辑</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_download'>");
		items.push("<a  style='color:#0383a1'>下载</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_delete'>");
		items.push("<a  style='color:#0383a1'>删除</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_history'>");
		items.push("<a  style='color:#0383a1'>历史</a>");
		items.push("</td></tr></table></td></tr></table>");
		document.getElementById(this.id).innerHTML = items.join("");
	},
	
	createSingleDisplayElement : function(){
		var items = [];
		items.push("<table style='width:100%; height:20px; table-layout:fixed' >");
		items.push("<tr>");
		items.push("<td width='130x'>");
		items.push("<a style='color:black'>附件1.doc(123KB)</a>");
		items.push("</td>");
		items.push("<td width='56px' id='"+ this.id +"_upload'>");
		items.push("<a  style='color:#0383a1'>上传文件</a>");
		items.push("</td>");
		items.push("<td width='70px' id='"+ this.id +"_template'>");
		items.push("<a  style='color:#0383a1'>从模板新建</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_edit'>");
		items.push("<a  style='color:#0383a1'>编辑</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_download'>");
		items.push("<a  style='color:#0383a1'>下载</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_delete'>");
		items.push("<a  style='color:#0383a1'>删除</a>");
		items.push("</td>");
		items.push("<td width='30px' id='"+ this.id +"_history'>");
		items.push("<a  style='color:#0383a1'>历史</a>");
		items.push("</tr>");
		items.push("</table>");
		document.getElementById(this.id).innerHTML = items.join("");
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
				if(element) element.style.display = buttons[item] ? "" : "none";
			} finally {
				continue;
			}
		}
	}

});