justep.design.Pagination = function(config){ 
	justep.design.Pagination.superclass.constructor.call(this,config);
}

justep.extend(justep.design.Pagination, justep.design.Component,{
	 paintContent:function(xmlNode){   
		 
		if(!this.element){
			this.createElement("<div id='"+this.id+"'/>",xmlNode);
		}
	   
		this.items = xmlNode.getAttribute("items") || '';
		this.firstLabel = xmlNode.getAttribute("first-label") || '首页'; 
		this.preLabel = xmlNode.getAttribute("pre-label") || '上一页'; 
		this.nextLabel = xmlNode.getAttribute("next-label") || '下一页'; 
		this.lastLabel = xmlNode.getAttribute("lastLabel") || '末页'; 
		this.align = xmlNode.getAttribute("align");
		
		this.reBuileHtml();
	   
	},
	
	reBuileHtml:function(){
		this._hasFirst = this.items.indexOf('first') != -1;
		this._hasLast = this.items.indexOf('last') != -1;
		this._hasPre = this.items.indexOf('pre') != -1;
		this._hasNext = this.items.indexOf('next') != -1;
		
		this.element.className="pagination";
		if(this.align){
			$(this.element).addClass('pagination-' + this.align);
		}
		
		var html = ['<ul>'];
		if(this._hasFirst)
			html.push('<li role="first"><a href="#">' + this.firstLabel + '</a></li>');
		if(this._hasPre)
			html.push('<li role="pre"><a href="#">' + this.preLabel + '</a></li>');
		for(var i = 0; i<5; i++ )
			html.push('<li role="' + (i + 1) + '"><a href="#">' + (i + 1) + '</a></li>');
		if(this._hasNext)
			html.push('<li role="next"><a href="#">' + this.nextLabel + '</a></li>');
		if(this._hasLast)
			html.push('<li role="last"><a href="#">' + this.lastLabel + '</a></li>');
		
		html.push('</ul>');
		$(this.element).html( html.join(''));
	},
	
	setProperty:function(prop,v,s,u){
		justep.design.Pagination.superclass.setProperty.call(this, prop,v,s,u);
		if(prop=="items"){
			this.items = v;
		}else if(prop=="first-label"){
			this.firstLabel = v || '<<'; 
		}else if(prop=="pre-label"){
			this.preLabel = v || '<'; 
		}else if(prop=="next-label"){
			this.nextLabel = v || '>'; 
		}else if(prop=="last-label"){
			this.lastLabel = v || '>>'; 
		}else if(prop=="align"){
			this.align = v;
		}
		this.reBuileHtml();
	}
});

