justep.design.ButtonBar = function(config){ 
	
	justep.design.ButtonBar.superclass.constructor.call(this,config);
};

justep.extend(justep.design.ButtonBar, justep.design.Container,{

	paintContent:function(xmlNode){
		this.createElement("<div id='"+this.id+"' class='buttonBar'></div>", xmlNode);
		this.root = $("<ul isViewPartContent='true'></ul>").appendTo(this.element);
		this._setSepLine($(xmlNode).attr('sep-line'));
		
		var childNodes = $(xmlNode).children();	   
		var l = childNodes.length;
		for(var i = 0; i < l; i++){
			var child = childNodes[i];
			if(child.nodeType == 1){
				this.canvas.parseXml(child, this.element);
		   	}
		}
		var jXmlNode = $(xmlNode);
		this["expanded-position"] = jXmlNode.attr('expanded-position');
		this["icon-expanded"] = jXmlNode.attr('icon-expanded');
		this["expanded-label"] = jXmlNode.attr('expanded-label');
		this["expanded-width"] = jXmlNode.attr('expanded-width');
		
		this._setSepSize($(xmlNode).attr('sep-size'));
		if(jXmlNode.attr('expandable') == 'true'){
		   this.paintExpandBtn();
		}
	},
	getActivteViewPartElement:function(){
		return this.root[0];
	},
	paintExpandBtn:function(){
		var pos = this["expanded-position"];
		$(">.expand-btn",this.root).remove();
		if(pos){
			pos = parseInt(pos);
			var icon = this["icon-expanded"];
			var label = this["expanded-label"];
			var width = this["expanded-width"];
			var node =  $(">.item:eq("+(pos-1)+")",this.root);   
			if(node.length>0){
				node.before('<li class="item expand-btn"  uiEditable="false" ><DIV class=xui-button style="200px" uiEditable="false" icon-class="icon-minus-circle"><A href="javascript:void(0)"  uiEditable="false"><I class=icon-minus-circle></I><SPAN>'+(label||'')+'</SPAN></A></DIV></li>');
			}else{
			//	alert("无效的位置!");
			}			
		}
	},

	addChild: function(component, parentElement, beforeE){
		var item = this._createItem(beforeE);
		item.append(component.element);
		this._clearSpace();
	},
	
	removeChild: function(component, autoDestroy){
		justep.design.ButtonBar.superclass.removeChild.call(this, component, autoDestroy);
		this._clearSpace();
	},
	
	moveChild: function(component/*子组件对象*/, newParentE/*新的父节点*/, beforeE/*参考节点*/,afterE){
		if(afterE){
			beforeE = $(afterE).parent('.item').next('.space').next('.item').children().get(0);
		}
		justep.design.ButtonBar.superclass.moveChild.call(this, component, newParentE, beforeE);
	},
	
	setProperty: function(prop, v, s, u){  
		justep.design.ButtonBar.superclass.setProperty.call(this, prop, v, s, u);
		if(prop=='separator-size'){
			this._setSepSize(v);
		}else if(prop=='separator'){
			this._setSepLine(v);
		}else if(prop == 'expanded-position' || prop == 'icon-expanded' || prop == 'expanded-label'){
			this[prop] = v;
			this.paintExpandBtn();
		}else if(prop == 'expandable'){
			if(v == 'false'){
				$(">.expand-btn",this.root).remove();
			}else{
				this.paintExpandBtn();
			}
		}else if(prop == 'expanded-width'){
			
		}
	},
	
	_createSpace: function(){
		this._removeSpace();
		$(">li:gt(0)", this.root).before("<li class='space'>|</li>");
	},
	
	_removeSpace: function(){
		$('>li.space', this.root).remove();
	},
	
	_clearSpace: function(){
		this._removeSpace();
		$(">li:empty", this.root).remove();
		this._createSpace();
	},
	
	_createItem: function(beforeE){
		this._removeSpace();
		var item = $("<li class='item'></li>");
		if(beforeE){
			$(beforeE).parent('li').before(item);
		}else{
			item.appendTo(this.root);
		}
		this._createSpace();
		return item;
	},
	
	_setSepSize: function(v){
		var v = parseFloat(v);
		if(!isNaN(v)){
			$('>.space', this.root).css({margin: '0 ' + v/2 + 'px'});
		}
	},
	
	_setSepLine: function(v){
		if(v == 'true'){
			this.root.addClass('sep-line');
		}else{
			this.root.removeClass('sep-line');
		}
	}	
	
});