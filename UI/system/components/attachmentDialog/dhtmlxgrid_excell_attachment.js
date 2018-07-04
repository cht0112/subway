/**
 * chendi grid扩展attachment 编辑器
 * 
 */

function eXcell_attachment(cell) {

	this.init = function(cell){
		if (cell) {
			this.cell = cell;
			this.grid = this.cell.parentNode.grid;
			var self = this;
			window.setTimeout(function(){
				if(self.cell.editorId && justep.xbl(self.cell.editorId)){
					justep.xbl(self.cell.editorId).grid = self.grid; 
				}
			},0);
		}
	};
	
	this.setValue = function(val) {
		this.cell.editorId = this.grid.bindColEditors[this.grid.getColumnId(this.cell._cellIndex)];
		var gridContolID = this.grid.controlId;
		var cellIndex = this.cell._cellIndex;
		var fieldName = this.grid.getColumnId(cellIndex);
		var showbtn = this.AlwaysShowButton; 
		var button = showbtn ? "<button class='editorBtn' style='border-bottom: #baceeb 1px solid; border-left: #baceeb 1px solid; WIDTH: 19px; background:#e3ebf7 ; HEIGHT: 17px; border-top: #baceeb 1px solid; border-right: #baceeb 1px solid;' onclick = 'justep.xbl(\""+this.cell.editorId+"\").showDialog(\""+gridContolID+"\", \""+cellIndex+"\")'>...</button>"
				: "<button class='editorBtn' style='border-bottom: #baceeb 1px solid; border-left: #baceeb 1px solid; WIDTH: 19px; background:#e3ebf7 ; HEIGHT: 17px; border-top: #baceeb 1px solid; border-right: #baceeb 1px solid;display:none;' onclick = 'justep.xbl(\""+this.cell.editorId+"\").showDialog(\""+gridContolID+"\", \""+cellIndex+"\")'>...</button>";
		
		var content = "";
		try{
			if(val =="" || val==null){  
				content="&nbsp;";    
			}else{
				var items = [];
				var docs = JSON.parse(val);
				for(i=0;i<docs.length;i++){
				    var item = [];
					item.push("<a name=\"docDisplay\" style=\"text-decoration:none;color:black; \" href=\"#\" id=\"");
					item.push(docs[i].docID);
					item.push("\" docPath=\"");
					item.push(docs[i].docPath);
					item.push("\" fileID=\"");
					item.push(docs[i].fileID);
					item.push("\" size=\"");
					item.push(docs[i].size);
					item.push("\" onclick=\"justep.Doc.browseDocByFileID($(this).attr('docPath'), $.trim(this.innerHTML.replace(';','')),$(this).attr('fileID'));" +
							" var editor = justep.xbl('"+this.cell.editorId+"');if (editor.checkEvent('onBrowseDocClick'))" +
							"{editor.callEvent('onBrowseDocClick', [{'source' : this, " +
							"data : {'docID' : this.id, 'fileID' : $(this).attr('fileID'), 'host' : $(this).attr('docHost')}}]);} \">");
					item.push(docs[i].docName+"; ");
					item.push("</a>");
					items.push(item.join(""));
				}
				content=(items.join("")!="[]")? items.join(""): "";
			}
		}catch(e){
		}
        //TODO: 此处用table会导致grid双击编辑问题
		this.cell.innerHTML = "<table style='border:none;width:100%;height:100%;table-layout:fixed' cellpadding='0' border='0' cellspacing='0'>"
							+ "<tr height='100%' style='border:none'>"
							+ "<td width='100% - 20px' style='border:none' nowrap>"
							+ content
							+ "</td>"
							+ "<td width='20px' style='border:none;'>"
							+ button
							+ "</td>"
							+ "</tr></table>";
		
		
		if(!showbtn && !this.recallback){
			this.recallback = function(cid,pid){
				var self = this;
				window.setTimeout(function(){
					var cellIndex = self.cell._cellIndex;
					var fieldName = self.grid.getColumnId(cellIndex);
					var curCell = self.grid.cells(cid, cellIndex).cell;
					if(pid){
						var preCell = self.grid.cells(pid, cellIndex).cell;	
						var pbtn = $(preCell).find("button"); 
						pbtn.attr("disabled" , "");
						pbtn.css("display" , "none");
					}
					var cbtn = $(curCell).find("button"); 
					cbtn.css("display" , "");
					cbtn.attr("disabled" , "");
					var readonly = self.grid.instance.readonly || self.grid.fields[fieldName].readonly || (self.grid.bindColreadonlyList && self.grid.bindColreadonlyList[fieldName]=="true");
					if(readonly){
						cbtn.attr("disabled" , "true");
					}	
				},0);
			};
			this.grid.attachEvent("onSelectStateChanged",this.recallback,this);
		}
		
		//this.cell.innerHTML = "<div>"+content+button+"</div>";		
		
	};
	
	this.getValue = function() {
		var elements = this.cell.getElementsByTagName("a");
		var docs = [];
		for(i=0;i<elements.length;i++){
			if("docDisplay" == elements[i].name){
				var doc = new Object;
				doc.docName = elements[i].innerHTML.substring(0,elements[i].innerHTML.lastIndexOf(";"));
				doc.docID = elements[i].id;
				doc.docPath = elements[i].getAttribute('docPath');
				doc.fileID = elements[i].getAttribute('fileID');
				doc.size = elements[i].getAttribute('size');
				docs.push(doc);
			}	
		}
		return JSON.stringify(docs)!="[]"? JSON.stringify(docs): "";
	}; 	

	this.init(cell);
	this.AlwaysShowButton = true;
}

eXcell_attachment.prototype = new eXcell();

function eXcell_attachment2(cell){
	this.init(cell);
	this.AlwaysShowButton = false;
}

eXcell_attachment2.prototype = new eXcell_attachment();
