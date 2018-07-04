justep.design.TableLayout = function(config) {
	this.regAttributes(["disabled","readonly"]);
	justep.design.TableLayout.superclass.constructor.call(this, config);
	//this.allowHighLight = true;
}

justep.extend(justep.design.TableLayout, justep.design.Container, {
	/**
	 * 绘制table的内容.
	 */
	paintContent : function(xmlNode) {
		this.isTableLayout = xmlNode.getAttribute("componentName") == 'tableLayout'?true:false;
		if (!this.element) {
			this.createElement("<table  id='"+this.id+"' isViewPartContent='false'></table>",xmlNode);
		}
		var table = this.element;
		if(table.getAttribute('isExcelTable') == 'true'){
			this.isExcelTable = true;
			table.component = null;
		}
//		else{
//			$(this.element).bind("mousemove", {self: this}, this.mousemove);
//			$(this.element).bind("mousedown", {self: this}, this.mousedown);
//			$(this.element).bind("mouseover", {self: this}, this.mouseoverOrout);
//			$(this.element).bind("mouseout", {self: this}, this.mouseoverOrout);
//			$(this.element).bind("mouseup", {self: this}, this.mouseup);
//		}
		var childNodes = xmlNode.childNodes;
		var l = childNodes.length;
		for (var i = 0; i < l; i++) {
			if (childNodes[i].tagName == "tr") {
				this.paintTr(childNodes[i], this.element, this.canvas,i);
			}
		}
		if(!this.isExcelTable ){
			$(">tbody>tr>td",this.element).each(function(i,domEle){
			    $(domEle).addClass('table-cell');
			});
		}
		
		var css;
		if (LayoutUtils.isCellLayout(this.getParentComponent())) {
			css = "xui-autofill";
		} else {
			css = "xui-container";
		}
        //this.doLayout();
	},
	doLayout:function(){ 
		if(this.isTableLayout){  
			var extTr,fixedH=0;  
			$(">tbody>tr",this.element).each(function(){
				var tr = $(this)[0]; 
				if(tr.getAttribute("autoFill") == 'true' || (tr.height=='' && tr.style.height=='' && tr.firstChild.height=='' && tr.firstChild.style.height=='')){ 
					extTr = tr; 
					extTr.setAttribute("autoFill","true");
				}else{  
					fixedH+= Math.max(parseInt(tr.style.height || tr.height ||'0'),parseInt(tr.firstChild.style.height||tr.firstChild.height||'0'));
				}
			});  
			if(extTr && fixedH !=0){ 	
				var parentHeight = $(this.element).parent().height();
				var h1 = $(this.element).parent()[0].style.height;
				if(h1 && !h1.endWith('%')){
					parentHeight = parseInt(h1);
				} 
				var h = parentHeight-fixedH-($(extTr).outerHeight()-$(extTr).height()); 
				$(extTr).height(h);
				var td = $(":first",extTr);
				td.height(h);
			}
		}
		justep.design.TableLayout.superclass.doLayout.call(this);
	},
	setProperty:function(p,v,isStyle,isUpdateMode){  
		justep.design.TableLayout.superclass.setProperty.call(this, p,v,isStyle,isUpdateMode);
		if(v==null || v==''){
			this.element.removeAttribute(p);
		}else{
			this.element.setAttribute(p,v);
		}
		if(isStyle){
           this.doLayout();
		}
	},
	setCss:function(p,v){ 
		justep.design.TableLayout.superclass.setCss.call(this, p,v);
		this.doLayout();
	},
	getParentByTagName : function(tdEl, tagName) {
		if (tdEl.parentNode) {
			if (tdEl.parentNode.tagName == tagName) {
				return tdEl.parentNode;
			} else {
				return this.getParentByTagName(tdEl.parentNode, tagName);
			}
		}
		return null;
	},
	
	_rowIndex : 0,
	_cellIndex : 0,
	_inRange : false,
	_mouseDown : false,
	_mousePos : null,
	_splitter : null,
	
//	mouseCoords : function(ev) {   
//	    evev = ev || window.event;   
//	    if (ev.pageX || ev.pageY) {   
//	        return {   
//	            x : ev.pageX,   
//	            y : ev.pageY   
//	        };   
//	    }   
//	    return {   
//	        x : ev.clientX + document.body.scrollLeft - document.body.clientLeft,   
//	        y : ev.clientY + document.body.scrollTop - document.body.clientTop   
//	    };   
//	},
	
	getStartCellIndex : function(rowIndex, cellIndex) {
		var ret = 0;
		
		var rows = this.element.rows;
		for (var i = 0; i < rowIndex; i++) {
			var currRow = rows[i];
			
			var cells = currRow.cells;
			var actualCellIndex = 0;
			var sci = 0;
			for (var j = 0; j < cells.length; j++) {
				var currCell = cells[j];
				
				var colspan = parseInt(currCell.colSpan);
				var rowspan = parseInt(currCell.rowSpan);
				
				if (actualCellIndex <= cellIndex) {
					
					if ((currRow.rowIndex + Math.max(1, rowspan) - 1) >= rowIndex) {
						sci += Math.max(1, colspan);
					}
					
				}
				
				actualCellIndex += Math.max(1, colspan);
			}
			
			ret = Math.max(ret, sci);
		}
						
		return ret;
	},
	
	getActualRowIndex : function(rowIndex, cellIndex) {
		var ret = rowIndex;
		var cell = this.element.rows[rowIndex].cells[cellIndex];
		var rowspan = parseInt(cell.rowSpan);
		ret += (Math.max(1, rowspan) - 1);
		return ret;
	},
	
	getActualCellIndex : function(rowIndex, cellIndex) {
		var ret = -1;
		
		var row = this.element.rows[rowIndex];
		var cells = row.cells;
		for (var i = 0; i <= cellIndex; i++) {
			ret++;
			ret+= this.getStartCellIndex(rowIndex, ret);
			var cell = cells[i];
			var colspan = parseInt(cell.colSpan);
			if (!isNaN(colspan) && colspan > 1) {
				ret += (colspan - 1);
			}
		}
	
		return ret;
	},
//	mouseoverOrout:function(event){
//		var data = event.data;
//		var self = data.self;
//		self._inRange = false;//zmh 
//	},
//	mousemove : function(event) {
//		var data = event.data;
//		var self = data.self;
//		self._inRange = false;//zmh 
//		if(self.canvas.ctx.action!=null){  
//			return; 
//		}
//		if (!self._mouseDown) {
//			var target = event.srcElement || event.target;
//			
//			if (target && (target.tagName == "TD")) {
//				var trEl = self.getParentByTagName(target, "TR");	
//				var	tblEl = self.getParentByTagName(trEl, "TABLE");
//				if(tblEl.component) {
//					if (tblEl.component instanceof justep.design.TableLayout) {
//						self._inRange = true;
//						self._rowIndex = trEl.rowIndex;
//						self._cellIndex = target.cellIndex;
//						if ((event.offsetX <= 3) && (target.cellIndex > 0)) {
//							self.element.style.cursor = "w-resize";
//							self._cellIndex = self._cellIndex - 1;
//						} else if (event.offsetX >= target.offsetWidth - 3) {
//							self.element.style.cursor = "w-resize";
//						} else if ((event.offsetY <= 3) && (trEl.rowIndex > 0)) {
//							self.element.style.cursor = "s-resize";
//							self._rowIndex = self._rowIndex - 1;
//						} else if (event.offsetY >= target.offsetHeight - 3) {
//							self.element.style.cursor = "s-resize";
//						} else {
//							self.element.style.cursor = "";
//							self._inRange = false;
//						}
//						
//						if (target.rowSpan) {
//							self._rowIndex += (parseInt(target.rowSpan) - 1);
//						}
//						
//						var realCellIndex = -1;
//						for (var i = 0; i <= self._cellIndex; i++) {
//							realCellIndex++;
//							var colspan = parseInt(trEl.cells[i].colSpan)
//							if (!isNaN(colspan) && colspan > 1) {
//								realCellIndex += (colspan - 1);
//							}
//						}
//						self._cellIndex = realCellIndex;
//					} else {
//						self.element.style.cursor = "";
//					}
//				} else {
//					self.element.style.cursor = "";
//				}
//			} else {
//				self.element.style.cursor = "";
//			}
//		} else {
//			var mousePos = self.mouseCoords(event);
//
//			if (self._splitter != null) {
//				if (self.element.style.cursor == "s-resize") {
//					self._splitter.style.top = mousePos.y - 1;
//				} else if (self.element.style.cursor == "w-resize") {
//					self._splitter.style.left = mousePos.x - 1;
//				}
//			} else {
//				self._splitter = document.createElement("DIV");
//				self._splitter.style.background = "gray";
//				self._splitter.style.fontSize = 0;
//				self._splitter.style.zIndex = 9999;
//				self._splitter.style.position = "absolute";
//				if (self.element.style.cursor == "s-resize") {
//					self._splitter.style.height = 1;
//					self._splitter.style.width = "100%";
//					self._splitter.style.top = mousePos.y - 1;
//					self._splitter.style.left = document.body.scrollLeft;
//				} else if (self.element.style.cursor == "w-resize") {
//					self._splitter.style.height = "100%";
//					self._splitter.style.width = 1;
//					self._splitter.style.left = mousePos.x;
//					self._splitter.style.top = document.body.scrollTop;
//				}
//				document.body.appendChild(self._splitter);
//			}
//		}
//	},
	
//	mousedown : function(event) { 
//		var data = event.data;
//		var self = data.self;
//
//		if (self._inRange) {//self.canvas.action
//		
//			self._mousePos = self.mouseCoords(event);
//			
//			self._mouseDown = true;
//			self.element.setCapture();
//			event.preventDefault();
//			event.stopPropagation();
//		}
//	},
	
//	mouseup : function(event) {
//		var data = event.data;
//		var self = data.self;
//		
//		if (self._mouseDown) {
//			if (self._splitter != null) {
//				document.body.removeChild(self._splitter);
//				self._splitter = null;
//			}
//
//			if (self.element.style.cursor == "s-resize") {
//				var currMousePos = self.mouseCoords(event);
//				
//				var targetTr = self.element.rows[self._rowIndex];
//				var targetTd = null;
//				for (var i = 0; i < targetTr.cells.length; i++) {
//					targetTd = targetTr.cells[i];
//					var rowspan = parseInt(targetTd.rowSpan);
//					if (isNaN(rowspan) || rowspan <= 1) {
//						break;
//					} else {
//						targetTd = null;
//					}
//				}
//				
//				if (targetTd != null) {
//					var currHeight = targetTd.height || targetTd.offsetHeight;
//					
//					if (self._rowIndex == (self.element.rows.length - 1)) {
//						self.element.style.height = "";
//						self.element.height = "";
//						self.setProperty("height", "", true, true);
//					}
//					
//					var newHeight = Math.max(1, parseInt(currHeight) + parseInt(currMousePos.y) - parseInt(self._mousePos.y));
//					targetTd.style.height = newHeight;
//					targetTd.component.setProperty('height', targetTd.style.height, true, true);
//					self.canvas.reSelection();
//				}
//			} else if (self.element.style.cursor == "w-resize") {
//				var currMousePos = self.mouseCoords(event);
//
//				var targetTr = null;
//				var targetTd = null;
//				
//				for (var i = 0; i < self.element.rows.length; i++) {
//					var row = self.element.rows[i];
//					var abc = -1;
//					for (var j = 0; j < row.cells.length; j++) {
//						abc++;
//						var cell = row.cells[j];
//						var colspan = parseInt(cell.colSpan);
//						if (isNaN(colspan)) {
//							colspan = 0;
//						}
//						if (colspan > 1) {
//							abc += (colspan - 1);
//						}
//						
//						if (abc == self._cellIndex) {
//							if (targetTd == null) {
//								targetTr = row;
//								targetTd = cell;
//							} else {
//								var bcd = parseInt(targetTd.colSpan);
//								if (isNaN(bcd)) {
//									bcd = 0;
//								}
//								
//								if (colspan < bcd) {
//									targetTr = row;
//									targetTd = cell;
//								}
//							}
//							break;
//						} else if (abc > self._cellIndex) {
//							break;
//						}
//					}
//				}
//				
//				var currWidth = targetTd.width || targetTd.offsetWidth;
//
//				if (self._cellIndex == (targetTr.cells.length - 1)) {
//					self.element.style.width = "";
//					self.element.width = "";
//					self.setProperty("width", "", true, true);
//				}
//				
//				var newWidth = Math.max(1, parseInt(currWidth) + parseInt(currMousePos.x) - parseInt(self._mousePos.x));
//				targetTd.style.width = newWidth;
//				targetTd.component.setProperty('width', targetTd.style.width, true, true);
//				self.canvas.reSelection();
//			}
//		
//			self.element.style.cursor = "default";
//			self._mouseDown = false;
//			self.element.releaseCapture();
//			
//			self.canvas.updateComTip()
//		}
//	},
	
	findSingleCell : function(index, cell) {
		var ret = null;
		var rows = this.element.rows;
		for (var i = 0; i < rows.length; i++) {
			var currRow = rows[i];
			var currCellIndex = -1;
			for (var j = 0; j < currRow.cells.length; j++) {
				currCellIndex++;
				
				var currCell = currRow.cells[j];
				var currColSpan = parseInt(currCell.colSpan);
				if (isNaN(currColSpan)) {
					currColSpan = 0;
				}
				if (currColSpan > 1) {
					currCellIndex += (currColSpan - 1);
				}
				
				if (currCellIndex == index) {
					if (currColSpan <= 1) {
						if (currCell != cell) {
							ret = currCell;
							break;
						}
					}
				} else if (currCellIndex > index) {
					break;
				}
			}
			if (ret != null) {
				break;
			}
		}
		return ret;
	},
	
	resetColumn : function(cell, colspan) {
		var realCellIndex = 0;
		var row = cell.parentNode;
		for (var i = 0; i < cell.cellIndex; i++) {
			realCellIndex++;
			var cs = parseInt(row.cells[i].colSpan)
			if (!isNaN(cs) && cs> 1) {
				realCellIndex += (cs - 1);
			}
		}

		var startIndex = realCellIndex;
		
		var currCell = cell;
		for (var i = 0; i < colspan; i++) {
			var currColSpan = parseInt(currCell.colSpan);
			if (isNaN(currColSpan)) {
				currColSpan = 0;
			}

			if (currColSpan <= 1) {
				if (currCell.style.width != "") {
					currWidth = parseInt(currCell.style.width);

					if (!isNaN(currWidth)) {
						var singleCell = this.findSingleCell(realCellIndex, currCell);

						if (singleCell != null) {
							singleCell.style.width = currWidth;
							singleCell.component.setProperty('width', singleCell.style.width, true, true);
						}
					}
				}
			}
			
			currCell.style.width = "";
			currCell.component.setProperty('width', currCell.style.width, true, true);
			
			currCell = currCell.nextSibling;
			if ((currCell == null) || (realCellIndex >= (startIndex + Math.max(1, colspan) - 1))) {
				break;
			}
			
			realCellIndex = realCellIndex + Math.max(1, currColSpan);
		}
		
		var endIndex = realCellIndex;
		
		//todo 对合并单元格进行处理
	},

	/**
	 * 绘制行.
	 */
	paintTr : function(trXmlNode, table, canvas, index) { 
		var tr; 
		if(typeof index =="undefined"){
			tr = this.element.insertRow();
		}else{ 
			tr = this.element.insertRow(index);
		}
		justep.design.Util.setAttributes(trXmlNode, tr, ["id", "width",
				"height", "style"]);
		var trChildNodes = trXmlNode.childNodes;
		for (var j = 0; j < trChildNodes.length; j++) {
			if (trChildNodes[j].tagName == "td") {
				this.paintTd(trChildNodes[j], tr, canvas,j);
			}
		}
		return tr;
	},

	/**
	 * 绘制单元格
	 */
	paintTd : function(xmlNode, tr, canvas, index) {
		new justep.design.Td({isExcelTable:this.isExcelTable,canvas:canvas,parentElement:tr,data:xmlNode,componentName:'td',id:xmlNode.getAttribute("id")},index);
	}
});

justep.design.Tr = function(config,index) {
	justep.design.Tr.superclass.constructor.call(this, config);

}

justep.extend(justep.design.Tr, justep.design.Container, {
	paintContent:function(xmlNode){ 
		var idx ;
		if(this.before){ 
			if(typeof this.before == 'string'){ 
				idx = document.getElementById(this.before).rowIndex;
			}else{
				idx = his.before.rowIndex;
			}
		}else if(this.after){
			if(typeof this.after == 'string'){
				idx = document.getElementById(this.before).rowIndex+1;
			}else{
				idx = his.before.rowIndex+1;
			}
		}
		this.element = this.parentElement.component.paintTr(xmlNode,this.parentElement,this.canvas,idx);
		this.element.component = this;
	},
	setProperty:function(p,v,isStyle,isUpdateMode){ 
		justep.design.Tr.superclass.setProperty.call(this, p,v,isStyle,isUpdateMode);
		if(isStyle){
			this.getParentComponent().doLayout();
		}
	},
	setCss:function(p,v){ 
		justep.design.Tr.superclass.setCss.call(this, p,v);
		this.getParentComponent().doLayout();
	}
});
justep.design.Td = function(config,index) {
	this._index = index;
	this.isExcelTable = config.isExcelTable;
	//this.allowHighLight = true;
	this.allowDraging = false;
	this.allowMoveToOtherParent = false;
	justep.design.Td.superclass.constructor.call(this, config);
//	this.resizable = false;
}

justep.extend(justep.design.Td, justep.design.Container, {
	/**
	 * 绘制td的内容.
	 */
	paintContent : function(xmlNode) {  
		var idx = this._index;
		if(this.before){ 
			if(typeof this.before == 'string'){ 
				idx = document.getElementById(this.before).cellIndex;
			}else{
				idx = his.before.cellIndex;
			}
		}else if(this.after){
			if(typeof this.after == 'string'){
				idx = document.getElementById(this.before).cellIndex+1;
			}else{
				idx = his.before.cellIndex+1;
			}
		}
		if(typeof idx =="undefined"){
			td = this.parentElement.insertCell();
		}else{
			td = this.parentElement.insertCell(idx);;
		}
		td.setAttribute("isViewPartContent","true");
		this._setAttributes(xmlNode, td);
        td.style.cssText = xmlNode.getAttribute("style")||'';
		this.element = td;
		
		if(this.isExcelTable != true){
		   this.element.className = "table-cell";   
		   this.element.component = this;
		}
		if(xmlNode.getAttribute('valign')){
           this.setProperty('valign',xmlNode.getAttribute('valign'));
		}
        
		var tdChildNodes = xmlNode.childNodes;
		var hasChild = false;
		for (var n = 0; n < tdChildNodes.length; n++) {
			if (tdChildNodes[n].nodeType == 1) {
				hasChild = true;
				this.canvas.parseXml(tdChildNodes[n], this.element);
			} else if (tdChildNodes[n].nodeType == 3 || tdChildNodes[n].nodeType == 4) {
				var text = document.createTextNode(tdChildNodes[n].nodeValue);
				this.element.appendChild(text);
				hasChild = true;
			}
		}
		if (!hasChild) {
			this.element.innerText = "";
		}
	},
	setBound:function(bound){
//		if (self.element.style.cursor == "s-resize") {
			var targetTr = this.element.parentNode;
			var targetTd = null;
			for (var i = 0; i < targetTr.cells.length; i++) {
				targetTd = targetTr.cells[i];
				var rowspan = parseInt(targetTd.rowSpan);
				if (isNaN(rowspan) || rowspan <= 1) {
					break;
				} else {
					targetTd = null;
				}
			}
			if (targetTd != null) {
				//var currHeight = targetTd.height || targetTd.offsetHeight;
				
//				if (self._rowIndex == (self.element.rows.length - 1)) {
//					self.element.style.height = "";
//					self.element.height = "";
//					self.setProperty("height", "", true, true);
//				}
				
				//var newHeight = Math.max(1, parseInt(currHeight) + parseInt(currMousePos.y) - parseInt(self._mousePos.y));
				targetTd.style.height = bound.h; 
				targetTd.component.setProperty('height', targetTd.style.height, true, true);
		 
			}
//		} else if (self.element.style.cursor == "w-resize") {
			var table = this.element.parentNode.parentNode.parentNode;
 
			var targetTr = null;
			var targetTd = null;
			
			for (var i = 0; i < table.rows.length; i++) {
				var row = table.rows[i];
				var abc = -1;
				for (var j = 0; j < row.cells.length; j++) {
					abc++;
					var cell = row.cells[j];
					var colspan = parseInt(cell.colSpan);
					if (isNaN(colspan)) {
						colspan = 0;
					}
					if (colspan > 1) {
						abc += (colspan - 1);
					}
					
					if (abc == this.element.cellIndex) {
						if (targetTd == null) {
							targetTr = row;
							targetTd = cell;
						} else {
							var bcd = parseInt(targetTd.colSpan);
							if (isNaN(bcd)) {
								bcd = 0;
							}
							
							if (colspan < bcd) {
								targetTr = row;
								targetTd = cell;
							}
						}
						break;
					} else if (abc > this.element.cellIndex) {
						break;
					}
				}
			}
			 
//			var currWidth = targetTd.width || targetTd.offsetWidth;

			if (this.element.cellIndex == (targetTr.cells.length - 1)) {
				this.element.style.width = "";
				this.element.width = "";
				this.setProperty("width", "", true, true);
			}
			if (targetTd != null && $(targetTd).width() != bound.w) { 
//			var newWidth = Math.max(1, parseInt(currWidth) + parseInt(currMousePos.x) - parseInt(self._mousePos.x));
			  targetTd.style.width = bound.w;
			  targetTd.component.setProperty('width', targetTd.style.width, true, true);
			}
			//this.canvas.reSelection();
//		}
		//self.canvas.updateComTip();
	},
	insertRow : function(data,index){
		var xmlDoc = this.canvas.loadXML(data.xmlStr);
		var table = this.element.parentNode.parentNode.parentNode;
		var tr = table.component.paintTr(xmlDoc.childNodes[0], table, this.canvas,index);
		if(table.component.isTableLayout){ 
			tr.firstChild.component.setProperty('height', "20px", true, true);
		}
		this._doLayout();
		this.canvas.reSelection();
	},
	
	insertColumn : function(data,index){
		var table = this.element.parentNode.parentNode.parentNode;
		var rows = table.rows;
		for(var i=0;i<rows.length;i++){
			var xmlDoc = this.canvas.loadXML(data.tds[i]); 
			table.component.paintTd(xmlDoc.childNodes[0],rows[i],this.canvas,index);
		}
		this._doLayout();
		this.canvas.reSelection();
	},
	
	insertCell : function(data,index){
		var table = this.element.parentNode.parentNode.parentNode;
		var xmlDoc = this.canvas.loadXML(data.tdXML); 
		table.component.paintTd(xmlDoc.childNodes[0],this.element.parentNode,this.canvas,index);
		this._doLayout();
		this.canvas.reSelection();
	},
	
	insertRowAfter : function(data){
		this.insertRow(data,this.element.parentNode.rowIndex+1);
	},
	
	insertRowBefore : function(data){
		this.insertRow(data,this.element.parentNode.rowIndex);
	},
	
	insertColumnBefore: function(data){
		this.insertColumn(data, this.element.cellIndex);
	},
	
	insertColumnAfter:function(data){
		this.insertColumn(data, this.element.cellIndex+1);
	},
	deleteRow : function(data){ 
		var pCom = this.getParentComponent().getParentComponent();  
		if(data.deleteTable){
			var cell = this.element; 
			var row = cell.parentNode;
			var table = row.parentNode.parentNode;
			var p = table.component.getParentComponent();
			table.component.dispose();
			pCom.doLayout();
			this.canvas.setSelection(p);
			return;
		}
		var cell = this.element; 
		var row = cell.parentNode;
		var table = row.parentNode.parentNode; 
		if(table.rows.length<=1)return;
		
		table.deleteRow(row.rowIndex); 
		pCom.doLayout();
	//	this._doLayout();
		this.canvas.setSelection(table.component);
	},
	deleteColumn : function(data){
		var pCom = this.getParentComponent();
		if(pCom){
		   pCom = pCom.getParentComponent();  
		}
		var cell = this.element;
		var table = cell.parentNode.parentNode.parentNode;
		if(cell.parentNode.cells.length<=1)return;
		var cellIndex = cell.cellIndex;
		var rows = table.rows;
		for(var i=0;i<rows.length;i++){
			if(rows[i].cells[cellIndex]){
				rows[i].deleteCell(cellIndex);
			}
		}
		if(pCom){
		  pCom.doLayout();
		}
	},
	
	insertCellBefore : function(data){
		this.insertCell(data, this.element.cellIndex);
	},
	
	insertCellAfter : function(data){
		this.insertCell(data, this.element.cellIndex+1);		
	},
	
	deleteCell : function(data){
		if(data.deleteRow){
			this.deleteRow(data);
			return;
		}
		
		var cell = this.element;
		var row = cell.parentNode;
		var table = row.parentNode.parentNode;
		row.deleteCell(this.element.cellIndex);
		this._doLayout();
		this.canvas.setSelection(table.component);
	},	
	
	mergeRightCell : function(data){
		if(data.err){
			alert(data.err);
			return;
		}

		var colspan = parseInt(data.colspan);

		var cell = this.element;
		var row = cell.parentNode;
		
		var table = row.parentNode.parentNode;
		table.component.resetColumn(cell, colspan);
		
		row.deleteCell(cell.cellIndex+1);
		cell.colSpan = colspan;
		this._doLayout();
		this.canvas.reSelection();
	},
	
	mergeDownCell : function(data){
		if(data.err){
			alert(data.err);
			return;
		}
		var cell = this.element;
		var row = cell.parentNode;
		var table = row.parentNode.parentNode;
		table.rows[parseInt(data.nextRowIndex)].deleteCell(cell.cellIndex);
		cell.rowSpan = parseInt(data.rowspan);  
		this._doLayout();
		this.canvas.reSelection();
		
	},
	
	horizontalSplitCell : function(data){
		 this.canvas.clearSelections();
		var table = this.element.parentNode.parentNode.parentNode;
		var xmlDoc = this.canvas.loadXML(data.tableXML);
		var rowCount = table.rows.length;
		for (var i = 0; i < rowCount; i++) {
			table.deleteRow(0);
		}
		table.component.paintContent(xmlDoc.childNodes[0]);
		//this.canvas.setSelection(this);
		this._doLayout();

	},
	getActivteViewPartElement:function(){
		return this.element;
	},

	verticalSplitCell  : function(data){ 
		var table = this.element.parentNode.parentNode.parentNode;
		var xmlDoc = this.canvas.loadXML(data.tableXML);
		var rowCount = table.rows.length;
		for (var i = 0; i < rowCount; i++) {
			table.deleteRow(0);
		}
		table.component.paintContent(xmlDoc.childNodes[0]);
		this.canvas.unSelection(this);
		this._doLayout();
		//this.canvas.addSelection(this);
	},
	setProperty:function(prop,v,isStyle,isUpdateMode){  
		justep.design.Td.superclass.setProperty.call(this, prop,v,isStyle,isUpdateMode);
		if(prop == 'text'){
			 this.element.innerHTML = v;
		}else if(prop == 'valign'){
			this.element.vAlign = v;
		}
		if(isStyle){
			this._doLayout();
		}
	},
	_doLayout:function(){ 
		var pCom = this.getParentComponent();
		if(pCom){
			pCom.getParentComponent().doLayout();
		}
	},
	setCss:function(p,v){ 
		justep.design.Tr.superclass.setCss.call(this, p,v);
		this._doLayout();
	}
});