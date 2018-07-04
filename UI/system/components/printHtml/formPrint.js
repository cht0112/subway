/**
 * 表单页面打印管理器.
 */
justep.HtmlPrint = {
	settings : {},	
	/**
	 * 获取当前url,构建url基本路径.
	 */	
	getHref : function(){
		var href = window.location.href;
		var idx = href.indexOf("UIServer");
		href = href.substring(0, idx + 10);		
	},	
	/**
	 * 获取要打印区域的html内容.
	 */
	getHtml : function(formId) {
		var html = "";
		for(var i = 0;i < formId.length;i++){
			var ele = $("#"+formId[i]);
			 
			//TODO xyh 
			//ie9下，通过input.value="xxx"赋值，.html()无法取出来。setAttribute方式赋值可以取出来，所以特殊处理
			//ie8,ie9,xforms-radio值无法取出，特殊处理
			var inputs = ele.find("input");
			for ( var j = 0; j < inputs.length; j++) { 
				var input = inputs[j];
				
				if(input.value!=null && input.value!=""){
					input.setAttribute("value",input.value);
				}
				if(input.type=="radio" || input.type=="checkbox"){
					if(input.checked){
						input.setAttribute("checked","true");
					}
				}
			}
         
			html += $("<div></div>").append(ele.clone()).html();
		}

		var self = this;
		var tmp = document.createElement('div');
		$(tmp).html(html);
		self.transHtml(tmp);
		html = $(tmp).html();
		 
		return html;
	},
	
    getHead : function()
    {
        var head = "<head><title>" + this.settings.popTitle + "</title>";
        $(document).find("link")
            .filter(function(){
                    return $(this).attr("rel").toLowerCase() == "stylesheet";
                })
            .filter(function(){ 
                    var media = $(this).attr("media");
                    return (media.toLowerCase() == "" || media.toLowerCase() == "print")
                })
            .each(function(){
                    head += '<link type="text/css" rel="stylesheet" href="' + $(this).attr("href") + '" >';
                });
        head += "</head>";
        return head;
    },	

    docType : function(){
        if ( this.settings.mode == this.modes.iframe || !this.settings.strict ) return "";

        var standard = this.settings.strict == false ? " Trasitional" : "";
        var dtd = this.settings.strict == false ? "loose" : "strict";

        return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0' + standard + '//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-' + dtd +  '.dtd">';
    },

    getActiveX : function(isPreview){
    	return (justep.Browser.IE&&isPreview)?"<OBJECT id=wb height=0 width=0 classid='CLSID:8856F961-340A-11D0-A96B-00C04FD705A2' name=wb></OBJECT>":"";
    },
    
    getPreview : function(isPreview){
    	return "<input type='button' onclick='wb.ExecWB(7,1)' />";
    },
	
	/**
	 * 获取报表主要内容.
	 */
	getReportHtml : function(iframeName) {
		var html = "";
		var ifm = window.frames[iframeName];
		var frames = ifm.document.frames;
		for (var i = 0; frames.length > i; i++) {
			var name = frames[i].name;
			if (name && name.indexOf("report-view") != -1) {
				html = frames[i].document.body.innerHTML;
				break;// alert(frames[i].document.body.innerHTML);
			}
		}
		var idx0 = html.lastIndexOf("<STYLE");
		var idx1 = html.lastIndexOf("</STYLE>");
		var style = "";
		if (idx0 != -1 && idx1 != -1) {
			style = html.substring(idx0, idx1 + 8);
		}
		var idx0 = html.lastIndexOf("<TABLE");
		var idx1 = html.lastIndexOf("</TABLE>");
		var table = "";
		if (idx0 != -1 && idx1 != -1) {
			table = html.substring(idx0, idx1 + 8);
		}
		return style + table;
	},

	/**
	 * 打印流程图.
	 */
	printFlowChart : function(flowId, directPrint) {
		// 获取html标签
		var html = this.getHtml(flowId);
		if (!html) {
			return;
		}
		var s1 = (new justep.Message(justep.Message.JUSTEP231069)).getMessage();
		var s2 = (new justep.Message(justep.Message.JUSTEP231070)).getMessage();
		
		html = html.replace(s1, '');
		html = html.replace(s2, '');
		html = html.replace(s1, '');
		html = html.replace(s2, '');
		
		if (directPrint) {
			this.exportToIframePrint(html, true);
		} else {
			this.openPreviewWindow(html, "", true, closeWin, isPreview);
		}
	},

	/**
	 * 打印表单.
	 */
	printForm : function(formId, appendHtml, closeWin) {  
		this.executePrintout(formId, appendHtml, closeWin, false);
	},
	/** 打印预览 * */
	printpreview : function(formId, appendHtml, closeWin) { 
		this.executePrintout(formId, appendHtml, closeWin, true);
	},

	/** 执行打印输出 * */
	executePrintout : function(formId, appendHtml, closeWin, isPreview, options) {  
		if(!formId){justep.System.showMessage((new justep.Message(justep.Message.JUSTEP231072, formId)).getMessage());return;}
		//if(!justep.Browser.IE){throw new Error("打印组件不支持非IE浏览器");return;}
		var modes = { iframe : "iframe", popup : "popup" };
	    var defaults = { mode     : modes.popup,
	                     popHt    : 500,
	                     popWd    : 400,
	                     popX     : 200,
	                     popY     : 200,
	                     popTitle : '',
	                     popClose : false };
	    var settings = {};
		$.extend( settings, defaults, options );
		
		this.settings = settings;
		if(closeWin) settings.popClose = closeWin;
		
        var writeDoc;
        var printWindow;
		switch (settings.mode)
        {
            case modes.iframe :
                var f = new this.Iframe();
                writeDoc = f.doc;
                printWindow = f.contentWindow || f;
                break;
            case modes.popup :
                printWindow = new this.Popup();
                writeDoc = printWindow.doc;
        }
	    writeDoc.open();
	    writeDoc.write('<!DOCTYPE html  PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> '+"<html>" + this.getHead() + "<body "+ ((justep.Browser.IE&&isPreview)?"onload='try{wb.execWB(7,1);}catch(e){alert(\"ActiveX未能正常加载\");}'":"") + ">" + this.getActiveX(isPreview) + this.getHtml(formId) + (appendHtml || '') + "</body>" + "</html>" );
	    writeDoc.close();
	    //"+ ((justep.Browser.IE&&isPreview)?"onload='window.parent.frames['print_html_frame'].wb.ExecWB(7,1);'":"") + "
	    
	    printWindow.focus();
	    printWindow.print();
 
	    if ( settings.mode == modes.popup && settings.popClose ){
	    	printWindow.close();  	
	    }
		
		//this.openPreviewWindow(html, appendHtml, false, closeWin, preview);
	},
	
    Iframe : function()
    {
        var frameId = "print_html_frame";
        var iframeStyle = 'border:0;position:absolute;width:0px;height:0px;left:0px;top:0px;';
        var iframe;

        try
        {
            iframe = document.createElement('iframe');
            document.body.appendChild(iframe);
            $(iframe).attr({ style: iframeStyle, id: frameId, src: "" ,name : "hhhh"});
            iframe.doc = null;
            iframe.doc = iframe.contentDocument ? iframe.contentDocument : ( iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
        }
        catch( e ) { throw e; }

        if ( iframe.doc == null ){
			var msg = new justep.Message(justep.Message.JUSTEP231073);
			throw justep.Error.create(msg);
        }

        return iframe;
    },

    Popup : function()
    {
        var windowAttr = "location=yes,statusbar=no,directories=no,menubar=no,resizable=yes,scrollbars=yes,titlebar=no,toolbar=no,dependent=no";
        //windowAttr += ",width=" + settings.popWd + ",height=" + settings.popHt;
        //windowAttr += ",resizable=yes,screenX=" + settings.popX + ",screenY=" + settings.popY + ",personalbar=no,scrollbars=no";

        var newWin = window.open( "", "_blank",  windowAttr );

        newWin.doc = newWin.document;

        return newWin;
    },

	/**
	 * 导出到iframe进行打印
	 */
	exportToIframePrint : function(htmlContent, isFlowChart) {
		
		// 获取当前url,构建url基本路径
		var href = this.getHref();

		if (!window.frames.printFrame) {
			var IframeObj = document.createElement("iframe");
			IframeObj.id = "printFrame";
			IframeObj.width = 0;
			IframeObj.height = 0;
			IframeObj.frameborder = 0;

			IframeObj.name = "printFrame";
			document.body.appendChild(IframeObj);

			window.frames.printFrame.name = "printFrame";

			IframeObj.src = href + "printTemplate.do";
		}
		var self = this;
		var myInterval = setInterval(function() {
			if (window.frames.printFrame.document.readyState) {
				clearInterval(myInterval);

				window.frames.printFrame.document.body.innerHTML = "<div>"
						+ htmlContent + "</div>";
				if (!isFlowChart) {
					var childNodes = window.frames.printFrame.document.body.firstChild.childNodes;
					for (var i = 0; i < childNodes.length; i++) {
						self.transPrintForm(childNodes[i]);
					}
				}

				window.frames.printFrame.window.focus();
				window.frames.printFrame.window.print();
				html = null;
				// self= null;
			}
		}, 200);
	},	
    
	/**
	 * 打开预览窗口.
	 */
	openPreviewWindow : function(htmlContent, appendHtml, isFlowChart, closeWin, isPreview) {

		// 获取当前url,构建url基本路径
		var href = this.getHref();
		
		var tempDiv = document.getElementById('tempId');
		
		if (!tempDiv) {
			tempDiv = document.createElement('div');
		}

		var self = this;

		tempDiv.innerHTML = "<div>" + htmlContent + "</div>";
		if (!isFlowChart) {
			var childNodes = tempDiv.childNodes;
			for (var i = 0; i < childNodes.length; i++) {
				self.transPrintForm(childNodes[i]);
			}
		}

		var win = window.open('', '', "");
		var style = '<style>.xforms-label .xforms-value{color: #333333;}'
				+ 'body { color: #333333;}\n'
				+ 'td { color: #333333;}\n'
				+ '.hdrcell{TEXT-ALIGN: center;} .PageNext{page-break-after: always;}</style>';
		
		win.document
				.write("<html><head><title></title>"
						+ style
						+ "</head><body "
						+ (isPreview ? "onload='wb.execwb(7,1);'" : "")
						+ ">"
						+ (isPreview 
								? "<OBJECT id=wb height=0 width=0 classid=CLSID:8856F961-340A-11D0-A96B-00C04FD705A2 name=wb></OBJECT>"
								: "") + "<div>" + tempDiv.innerHTML
						+ (appendHtml || '') + "</div></body></html>");
		html = null;
		self = null;
		win.focus();
		win.document.close();
		
		if (!isPreview) {
			win.print();
		}
		
		if (closeWin) {
			win.close();
		}
	},
	
	transHtml : function(node){
		var self = this;		
		
		//xftext处理
		$(node).find(".xforms-textarea").each(function(){ 
			var v = justep.xbl(this.id).getValue();
			$(".xxf-value",this).css("vertical-align","top").html("<div style='text-align:left;'>"+(v?v:'')+"</div>");
		});
		//if(!justep.Browser.IE){ //chrome下fck有问题 需要进一步确认
			//fck 
			$(node).find("iframe").each(function(){
				var node = $(this); 
				
				if(window.frames[this.id] && window.frames[this.id].document.frames && window.frames[this.id].document.frames[0] && window.frames[this.id].document.frames[0].document){
					node.parent().css({"font-size":"13px","font-color":"black"}).html(window.frames[this.id].document.frames[0].document.body.innerHTML || "&nbsp;");					
				}
			});
		//}
 
		$(node).find("input").each(function(){
			this.setAttribute("readonly","true");
		});

		$(node).find("textarea").each(function(){
			this.parentNode.style.cssText = "word-break:break-all;";
			this.parentNode.innerHTML = this.value ? self.replaceAll(self._dhx_encoding(("" + this.value)),"\n", "<br/>") : "&nbsp;";
		});
		
		$(node).find("table").each(function(){
			self.clearHtmlEvent(this);
		});
		
		$(node).find("div").each(function(){
			self.clearHtmlEvent(this);
		});

		$(node).find("span").each(function(){
			self.clearHtmlEvent(this);
		});
		
		//grid
		$(node).find(".gridbox").each(function(){
			self.combineJSGrid(this);
		});
		
		$(node).find("button").each(function(){
			this.parentNode.innerHTML = "&nbsp;";		
		});	
		
		$(".dhx_combo_box img,.xforms-ext-select img,.xxf-alert img",node).remove(); 
	},
	
	clearHtmlEvent : function(node){
		if (node.onmouseover) {
			node.onmouseover = null;
		}
		if (node.onmouseout) {
			node.onmouseout = null;
		}

		if (node.onclick) {
			node.onclick = null;
		}
	},

	/**
	 * 转换表单元素，主要是使用div来代替表单组件以及去掉图片.
	 */
	transPrintForm : function(parentNode) {
		var node = parentNode.firstChild;
		while (node) {
			if (node.tagName == 'DIV') {

				if (node.getAttribute('component') == '/UI/system/components/toolbars.xml#toolbars') {
					node.parentNode.parentNode.innerHTML = "";
				} else if (node.getAttribute('component') == '/UI/system/components_client/toolbars.xml#toolbars') {
					this.resetTrHeight(node, 1);
					node.parentNode.innerHTML = "";
				} else if (node.className.indexOf('gridbox') != -1) {
					this.combineJSGrid(node);
				} else if (node.getAttribute('component') == '/UI/system/components/grid.xml#grid') { 
					node.parentNode.style.borderLeft = "#c0c0c0 1px solid";
					node.parentNode.style.verticalAlign = "top";
					this.combineOpsGrid(node)
				} else {
					if (node.innerHTML == '') {
						var nextNode = node.nextSibling;
						if (nextNode) {

						}
						node.parentNode.removeChild(node);
						node = nextNode;
						continue;
					} else {
						this.transPrintForm(node);
					}
				}
			} else {
				this.transFormItem(node);
			}
			
			if (node.onmouseover) {
				node.onmouseover = null;
			}
			if (node.onmouseout) {
				node.onmouseout = null;
			}
			node = node.nextSibling;
		}
	},

	transFormItem : function(node) { 
		if (node.tagName == 'INPUT') {
			var inputType = node.getAttribute('type');
			node.parentNode.style.textAlign = node.style.textAlign;
			if(inputType =='radio' || inputType =='checkbox'){
			 
			}else if (inputType == 'button') {
				node.parentNode.innerHTML = "&nbsp;";
			} else {
				var nextNode = node.nextSibling;
				if (nextNode) {
					if (nextNode.tagName == 'IFRAME') { // 处理富文本
						node.parentNode.style.fontSize = "13px";
						node.parentNode.innerHTML = window.frames[nextNode.id].document.frames[0].document.body.innerHTML
								|| "&nbsp;";
					} else {
						node.parentNode.style.fontSize = "13px";
						node.parentNode.innerHTML = node.value
								? ("" + node.value)._dhx_encoding()
								: "&nbsp;";
					}
				} else { // 普通input处理
					node.parentNode.style.fontSize = "13px";

					node.parentNode.innerHTML = node.value ? ("" + node.value)
							._dhx_encoding() : "&nbsp;";
				}
			}
		} else if (node.tagName == 'TEXTAREA') {
			node.parentNode.innerHTML = node.value ? ("" + node.value)
					._dhx_encoding().replaceAll("\n", "<br/>") : "&nbsp;";
		} else if (node.tagName == 'BUTTON') {
			node.parentNode.innerHTML = "&nbsp;";
		} else if (node.tagName == 'LABEL') {
			//node.innerHTML = "&nbsp;";
		} else {
			this.transPrintForm(node);
		}
	},

	findTableByClsName : function(node, clsName) {
		if (node.tagName == 'TABLE' && node.className
				&& node.className.indexOf(clsName) != -1) {
			return node;
		}
		if (node.tagName == 'TABLE' && node.parentNode.className == clsName) {
			return node;
		} else {
			var cNodes = node.childNodes;
			for (var i = 0; cNodes.length > i; i++) {
				var tb = this.findTableByClsName(cNodes[i], clsName);
				if (tb) {
					return tb;
				}
			}
		}
	},

	combineOpsGrid : function(grid) {
		return;
		var headTable = this.findTableByClsName(grid,
				"justep-grid-board-scroll-head");
		var dataTable = this.findTableByClsName(grid,
				"justep-grid-board-scroll-content");
		this.combineGrid(headTable, dataTable);
	},

	/**
	 * js grid.
	 */
	combineJSGrid : function(grid) { 
		var headTable = this.findTableByClsName(grid, "hdr");
		var dataTable = this.findTableByClsName(grid, "obj");
		var footTable = this.findTableByClsName(grid, "ftr");
		this.resetTrHeight(headTable);
		this.resetTrHeight(dataTable);
		this.combineGrid(headTable, dataTable, footTable);
		this.clearGridBlankBlock(grid);
	},
 
	clearGridBlankBlock : function(table) {
		var childNodes = table.childNodes;
		for (var i = 0; i < childNodes.length; i++) {
			if (childNodes[i].tagName == 'DIV') {
				if (childNodes[i].innerHTML == "") {
					childNodes[i].style.display = "none";
				}
				
				if (childNodes[i].className == "objbox") {
					if (justep.Browser.IE){
						childNodes[i].style.removeAttribute("height");
					}else{
						childNodes[i].style.removeProperty("height");
					}
				}
			}
		}
	},

	resetTrHeight : function(e, h) {
		if(!e){
			return;
		}
		var pNode = e.parentNode;
		while (pNode) {
			if (pNode.style) {
				pNode.style.overFlow = "";
			}
			if (pNode.tagName == 'TR') {
				pNode.height = h || "";
				break;
			}
			pNode = pNode.parentNode;
		}
	},
 

	/**
	 * 把grid的的表头和表体合并.
	 */
	combineGrid : function(hdTable, dataTable, footTable) {
		if(!hdTable){
			return;
		}
		var rows = hdTable.rows;  
		var hiddenColIdx = [];
		var cells = rows[0].cells;
		for(var i = 0,l=cells.length;i<l;i+=1){
			var id = cells[i].id;
			if(cells[i].style.width == "0px" || (id && id.indexOf("_space-column")!=-1)){
				hiddenColIdx.push(i);
			}
		} 
		var hdTR;
		for (var i = rows.length - 1; i >= 0; i--) {
			var r = rows[i];
			var cells = r.cells;
			var colIdx = 0;
			for(var j=0;j<cells.length;j+=1){
				var cell = cells[j];
				if($.inArray(colIdx,hiddenColIdx)!=-1){
					cell.style.display="none";
				}
				var colSpan = cell.getAttribute("colSpan")||cell.getAttribute("colspan");
				if(colSpan){
					colIdx+= parseInt(colSpan||"1");
				}else{
					colIdx+=1;
				}
				cell.style.textAlign="center";
			}
			
			if($.inArray(colIdx,hiddenColIdx)!=-1){
				cell.style.display="none";
			}
			
			r.parentNode.removeChild(r);
			if (r.style.position == 'absolute'|| r.style.height == 'auto') {
				hdTR = r; 
			} else {
				dataTable.firstChild.insertBefore(r, dataTable.rows[0]);
			}
		}
		 
		//去掉grid head中没用的tr 
		hdTable.parentNode.innerHTML = "";
 
		if (dataTable) {
			var hdCells = hdTR.childNodes;
			var removeRows = [];
			var rows = dataTable.rows;
			for (var i = 0; i < rows.length; i++) {
				if (rows[i].style.position == 'absolute'||rows[i].style.height == 'auto') { 
					removeRows.push(rows[i]);
				} else {
					var cells = rows[i].cells;
					var colIdx =0;
					for (var j = 0; j<cells.length ; j+=1) {
						var cell = cells[j];
						if($.inArray(colIdx,hiddenColIdx)!=-1){
							cell.style.display="none";
						}
						var colSpan = cell.getAttribute("colSpan") || cell.getAttribute("colspan");
						if(colSpan){ 
							colIdx+= parseInt(colSpan||"1");
						}else{
							colIdx+=1;
						}

						cells[j].style.cssText = (cells[j].style.cssText||"")+";word-break:break-all;border:solid #999;border-width:0px 1px 1px 0px;padding-left:2px;";
						if (hdCells[j] && hdCells[j].style.width == "0px") {
							cells[j].style.display = "none";
							continue;
						} else if (hdCells[j]){
							var colSpan = parseInt(cells[j].getAttribute("colSpan")||cells[j].getAttribute("colspan")||"1");
							if(colSpan<=1){
								cells[j].width = hdCells[j].style.width;								
							} 
						}
						
						this.transFormItem(cells[j]);// .innerHTML = "ww";
						if (!cells[j].innerHTML) {
							cells[j].innerHTML = "&nbsp;"
						}
					}
				}
			}
			for (var i = 0; i < removeRows.length; i++) { 
				removeRows[i].parentNode.removeChild(removeRows[i]);
			}
			removeRows = null;
		}
		if (footTable) {
			var rows = footTable.rows;
			var rowBuf = [];
			for (var i = 0; i < rows.length; i++) {
				var r = rows[i];
				if (r.style.position != 'absolute') {
					rowBuf.push(r);
				}
			}

			for (var i = 0; i < rowBuf.length; i++) {
				dataTable.firstChild.appendChild(rowBuf[i]);
				var tdNodes = rowBuf[i].childNodes;
				for (var j = 0; j < tdNodes.length; j++) {
					tdNodes[j].style.cssText = (tdNodes[j].style.cssText||"")+";BORDER-RIGHT: #999 1px solid; BORDER-TOP:0px; PADDING-LEFT: 1px; BORDER-LEFT: #999 0px solid; WORD-BREAK: break-all; BORDER-BOTTOM: #999 1px solid";
				}
			}
			footTable.parentNode.innerHTML = "";

			var rows = dataTable.rows;
			var lastRow = rows[rows.length - 1];
			var tdNodes = lastRow.childNodes;
			for (var i = 0; i < tdNodes.length; i++) {
				// tdNodes[i].style.cssText ="BORDER-RIGHT: #999 1px solid;
				// BORDER-TOP: #999 0px solid; PADDING-LEFT: 2px; BORDER-LEFT:
				// #999 0px solid; WORD-BREAK: break-all; BORDER-BOTTOM: #999
				// 1px solid";
			}
		}
		dataTable.parentNode.style.overflow = "hidden";
		dataTable.style.cssText = dataTable.style.cssText
				+ ";border-collapse:collapse;  border:solid #999; border-width:1px 0 0 1px; ";

		// BORDER-RIGHT: #999 1px solid; BORDER-TOP: #999 0px solid;
		// PADDING-LEFT: 2px; BORDER-LEFT: #999 0px solid; WORD-BREAK:
		// break-all; BORDER-BOTTOM: #999 1px solid
		// alert(rows[rows.length-1]);
		// prompt(null,dataTable.outerHTML);
	},
	
	_dhx_encoding : function(str) {
		var res = "";
		for (var i = 0; i < str.length; i++) {
			var ch = str.charAt(i);

			if (ch == '>') {
				res += "&gt;";
			} else if (ch == '<') {
				res += "&lt;";
			} else if (ch == '&') {
				res += "&amp;";
			} else {
				// res += ch;
				var c = str.charCodeAt(i);
				res += c >= 160 ? "&#" + c + ";" : str.charAt(i);
			}
		}

		return res;
	},

	replaceAll : function(str, s1, s2) {
		return str.replace(new RegExp(s1, "gm"), s2);
	}	
}