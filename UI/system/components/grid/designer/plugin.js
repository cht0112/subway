
justep.design.Grid = function(config) {
	justep.design.Grid.superclass.constructor.call(this, config);
}


justep.extend(justep.design.Grid, justep.design.Component, {
	paintContent : function(xmlNode) {  
		if (!this.element) {
			this.createElement("<div id='" + this.id + "' class='grid'></div>", xmlNode);
		} else {
			this.removeAllChildren();
		}
		var childNodes = $(xmlNode).children();
		var l = childNodes.length;

		var pPosition = this.element.parentNode.style.position;
        this.element.style.overflow = "auto";
       
		var pCom = this.canvas.findComponent(this.element.parentNode);
		if (pCom && LayoutUtils.isAbsoluteLayout(pCom.layoutType)) { 
			this.element.style.position = 'absolute';
		}
 
		var table = document.createElement("table");
		table.className = "grid-table";
		table.cellSpacing = 0;
		table.cellPadding = 0;
		//table.style.border="2px solid red";
		this.hdr_row_h = xmlNode.getAttribute("header-row-height");
		this.hdr_tr = table.insertRow(0);
		
		table.insertRow(1);//放编辑器组件
		var idx = 0;
		for (var i = 0; i < l; i++) {
			var node = childNodes[i];
			if (node && node.nodeType == 1 && node.tagName == 'column') {
				this.paintColumn(this.hdr_tr, node, idx++, this.hdr_row_h);
			}else if(node.tagName == 'div'){  
				this.canvas.parseXml(node, this.element);
			}
		}
		this.element.appendChild(table);
	},
	getActivteViewPartElement:function(){ 
	       return $(">table>tbody>tr",this.element)[0];
	},
	paintColumn : function(tr, xmlNode, index, hdr_h) {
		var col = new justep.design.Column({
			parentElement : tr,
			hdr_row_h : hdr_h,
			data : xmlNode,
			index : index,
			canvas:this.canvas,
			componentName : xmlNode.getAttribute('componentName'),
			id : xmlNode.getAttribute("id")
		});
	}
});

justep.design.Column = function(config) { 
	this.hdr_row_h = config.hdr_row_h;
	this.regAttributes(["type"]);
	this.index = config.index;
	justep.design.Column.superclass.constructor.call(this, config);
	//this.allowAddChild = false;
	//this.resizable = false;
	this.allowShowTitleTip = false;
	this.disableStyleChangedEvent = true;//不触发样式改变事件
	this.allowDraging = false;
	this.showResizeBox = [false/*北*/,false/*东北*/,true/*东*/,false/*东南*/,false/*南*/,false/*西南*/,true/*西*/,false/*西北*/];
}
justep.extend(justep.design.Column, justep.design.Component, {

	paintContent : function(columnXmlNode) {
		var label = columnXmlNode.getAttribute("label") || columnXmlNode.getAttribute("ref");
		var typeCode = columnXmlNode.getAttribute("type") || "ro";
		var width = columnXmlNode.getAttribute("width") || 100;
		if(width=='#' || width=='*') width = 100;
        
		if(this.parentElement.component){
	    	this.parentElement = $(">table>tbody>tr",this.parentElement)[0];

	    }
    	if(this.before){ 
    		this.index = document.getElementById(this.before).cellIndex;
    	}else{
    		this.index = $(">td",this.parentElement).length;
    	}
		this.element = this.parentElement.insertCell(this.index);
		this.element.className = "hdr";
		var editorTd = this.parentElement.nextSibling.insertCell(this.index);
		editorTd.style.overflow="hidden";
		//editorTd.innerHTML = ""
	    //this.element.style.position = "relative";
 
		this.element.setAttribute("isViewPartContent","false");
		this.element.setAttribute("id",columnXmlNode.getAttribute("id"));
		$(this.element).width(width);
		if(this.hdr_row_h)	$(this.element).height(this.hdr_row_h);
		this.element.setAttribute("uiEditable","false");

		this.element.innerHTML = "<div class='hdrcell' isViewPartContent='true'>"//+(label?label:"&nbsp")+"</div>"; 
			+ "<table  width='100%' height='100%' border='0' cellspacing='0' cellpadding='0' >" 
			+ "<tr><td style='border:1px;text-align:center;' uiEditable='false'>" + label + "</td></tr></table></div>" ;
			//+ "<div style='border:1px solid red;position:absolute;right:0;top:-1;width:10px;height:20px; background:white;filter:alpha(opacity=1)'/>";
 
		this.element.component = this;
		editorTd.component = this;
//		this.dragTD = this.element.children[1]; 

		var childNodes = $(columnXmlNode).children();
		var l = childNodes.length;
		for ( var i = 0; i < l; i++) {
			var node = childNodes[i];
			if (node.nodeType == 1) {
				var com = this.canvas.parseXml(node, $(this.element).firstElement());
			} 
		}
			
//		var self = this;
//		this.dragTD.onmousedown = function(){
//			self.buildDrag();
//		}
		
		this._setAttributes(columnXmlNode,this.element);
		
		//绘type=select时的辅助div
		if("select" == columnXmlNode.getAttribute("type") && !columnXmlNode.getAttribute("editor")){
			var e = this.element.parentNode.nextSibling.cells[this.element.cellIndex];
			if($(e).find(".select-div").length == 0 && $(e).find(".xui-select").length == 0){
				this.paintSelectDiv(this.element);			
			}
		}
	},

	removeChild:function(com){
		this.setProperty("editor", "", false, true);
		com.dispose();
		this.paintSelectDiv(this.element);
		
	},

	validate:function(componentName){
		var type = this.element.getAttribute("type");
		return type==ComponentConfig[componentName].baseClass;
	},

    addChild:function(com){ 
    	this.removeSelectDiv(this.element);
    	var e = this.element.parentNode.nextSibling.cells[this.element.cellIndex]; 
    	this.paintSelectDiv(this.element);
    	e = $(e).firstElement();
    	e.innerHTML = "";
    	e.appendChild(com.element);
    	$(com.element).css({width:'100%',height:"20px"});
    	com.resizable = false;
    	com.allowShowTitleTip = false;
    	com.allowDraging = false;
    	this.canvas.currentName = null;
    	this.setProperty("editor", com._id, false, true);  
    },

    isAllowAddChild:function(){
    	var e = this.element.parentNode.nextSibling.cells[this.element.cellIndex];
    	if($($(e).firstElement()).children().length == 2){
    		return false;
    	}
    	return true;
    },
	getActivteViewPartElement:function(){
       return $(this.element).firstElement();
	},
	setProperty : function(name, v,isStyle,flag) {  
		justep.design.Column.superclass.setProperty.call(this,name,v,isStyle,flag); 
		if (name == 'width') {
			var width=v;
			if(width=='#' || width=='*') width = 100;
			if((""+width).indexOf("px") == -1){
				width = width+"px";
			}
			$(this.element).css("width",width);
		} else if (name == 'label') {
			$(this.element).firstElement().innerText = v;
		} else if (name == 'type' && v == "select") {
			this.paintSelectDiv(this.element);
		}		
		if(name == 'type' && v != 'select'){		
			this.removeSelectDiv(this.element);
		}
		
	},
	dispose:function(){
        var nextTr = this.element.parentNode.nextSibling;
        var editorTd = nextTr.cells[this.element.cellIndex];
        var list = this.getChildren(editorTd);
        for(var i = 0;i<list.length;i++){
        	list[i].dispose();
        }
        nextTr.removeChild(editorTd);
		justep.design.Column.superclass.dispose.call(this); 
	},
	paintSelectDiv : function(e){
		e = e.parentNode.nextSibling.cells[e.cellIndex];
	
		if($(e).find('.select-div').length!=0) return;
		$(e).html("").append("<div class='select-div' uiEditable='true' isViewPartContent='true' style='height:18px;background-color:yellow;border:1px solid lightgrey;'>添加组件..</div>");
		$(e).find('.select-div').css({margin:0,padding:'0'});		
	},
	removeSelectDiv : function(e){
		e = e.parentNode.nextSibling.cells[e.cellIndex];
		if($(e).find('.select-div').length == 0) return;
		e.removeChild($(e).find(".select-div")[0]);
	},	
//	buildDrag : function() {
//		var me = this;
//		var dragBar = document.createElement("div");
//		this.dragBar = dragBar;
//		dragBar.setCapture();
//
//		var pos = $(me.element).position();
//		pos.left = pos.left+me.element.offsetWidth;
//		pos.top +=4;
//		
//		dragBar.style.overflow = "hidden";
//		dragBar.style.top = pos.top;
//		dragBar.style.left = pos.left;
//		dragBar.style.height = 40; 
//		dragBar.style.width = 1;
//		dragBar.style.border="1px dotted";
//		dragBar.style.position = "absolute";
//		dragBar.style.zIndex = 99999;
//		
//
//		document.body.appendChild(dragBar);
//		
//		var mask = document.createElement("div");
//		mask.style.zIndex = 99998;
//		mask.style.position = "absolute";
//		mask.style.left=0;
//		mask.style.top=0;
//		mask.style.width="100%";
//		mask.style.height="100%";
//		mask.style.background="white";
//		mask.style.filter = "alpha(opacity=1)";
//		document.body.appendChild(mask)
//		me.mask = mask;
//		
//		me.orgLeft = pos.left;
//
//		me.draging_call = function() {
//			me.draging();
//		}
//		me.done_call = function() {
//			me.done();
//			me.canvas.reSelection();
//		};
//		document.attachEvent("onmousemove", me.draging_call);
//		document.attachEvent("onmouseup", me.done_call);
//	},

//	draging : function() {
//		this.dragBar.dragFlag = true;
//		if (this.minOffset) {
//		}
//		if (this.maxOffset) {
//		}
//		this.dragBar.style.left = (event.x) + 'px';
//
//	},
//	done : function() {
// 
//		if(this.dragBar.dragFlag){
//			var pos = $(this.dragBar).position();
//
//			var offset = pos.left - this.orgLeft; 
//
//			var orgSize = this.element.offsetWidth;
//			var newSize = orgSize + offset; 
//
//			if (newSize < 30) {
//				newSize = 30;
//			}
//		
//		this.setProperty("width",newSize+"",false,true);
//		}
//
//		this.dragBar.releaseCapture();
//		document.body.removeChild(this.dragBar);
//		this.dragBar = null;
//		document.detachEvent("onmousemove", this.draging_call);
//		document.detachEvent("onmouseup", this.done_call);
//		document.body.removeChild(this.mask);
//	},

	moveNode : function(node1, node2){
		if (node1.swapNode) {
			node1.swapNode(node2);
		} else {
			var parentNode=node1.parentNode; 
			var nextSibling1 = node1.nextSibling; 
			var nextSibling2 = node2.nextSibling;
			if (nextSibling2) {
				parentNode.insertBefore(node1, nextSibling2);
			} else {
				parentNode.appendChild(node1);
			}
			if (nextSibling1) {
				parentNode.insertBefore(node2, nextSibling1);
			} else {
				parentNode.appendChild(node2);
			}
		}
		this.canvas.reSelection();
	}, 
	
	setBound:function(bound){   
		this.setProperty("width", bound.w+"px", false);
	},
	
	afterResize:function(){  
		this.canvas.dispatchPropertyChangedEvent(this.id,"width",this.getBound().w+"px",false);
	},
 
	
	moveToLeft : function(param) {
		if (param.sourceId && param.targetId) {
			var sourceNode = document.getElementById(param.sourceId);
			var targetNode = document.getElementById(param.targetId);
			this.moveNode(sourceNode, targetNode);
		}
	},
	
	moveToRight : function(param) {
		if (param.sourceId && param.targetId) {
			var sourceNode = document.getElementById(param.sourceId);
			var targetNode = document.getElementById(param.targetId);
			this.moveNode(sourceNode, targetNode);
		}
	}

});
