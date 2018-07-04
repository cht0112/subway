(function(global){
	
	var AccordionMenuTree = function(options){
		$.extend(this, options);
		this.init();	
	};
	
	AccordionMenuTree.prototype.init = function(){
		var me = this;
		this.el = this.el || $('#' + this.id);
		this.el.addClass('accordionMenuTree');
		
	};
	
	AccordionMenuTree.prototype.open = function(option){
		var ul = $('>ul', this.el).get();
		var path = option.index.split(' ');
		path.shift();
		while(ul && path.length){
			var index = path.shift();
			var label = $('>li >label', ul).get(index);
			label && label.click();
			ul = $('>li >ul', ul).get(index);
		}
	};
	AccordionMenuTree.prototype.cancelOpenedFunc = function(){
		$('.ran', this.el).removeClass('ran');
	};
	
	AccordionMenuTree.prototype.load = function(options){
		var html = [], me = this;
		function draw(items, path){
			path = path || [];
			if(!items) return;
			html.push('<ul>');
			$.each(items, function(i, item){
				path.push(i);
				var isDir = item.childNodes && (item.childNodes.length > 0); 
				html.push('<li title="' + item.label + '">');
				html.push('<label data-path="' + path.join(' ') + '" data-isdir="' + isDir + '">');
				if(isDir)
					html.push('<i class="icon-system-right-dir"></i>');
				else
					html.push('<i></i>');
				html.push(item.label);
				html.push('</label>');
				draw(item.childNodes, path);
				html.push('</li>');
				path.pop();
			});
			html.push('</ul>');
		}
		draw(options.childNodes);
		this.el.html(html.join(''));
		$('label', this.el).click(function(){
			var isDir = $(this).attr('data-isdir') == 'true';
			var p = $(this).parent();
			if(isDir){
				if(p.hasClass('opened')){
					p.removeClass('opened');
				}else{
					p.siblings().removeClass('opened');
					p.addClass('opened');
				}	
			}else{
				if(p.hasClass('ran')) return;
				$('.ran', this.el).removeClass('ran');
				p.addClass('ran');
				if(me.onclick){
					var path = $(this).attr('data-path').split(' ');
					var data = options;
					$.each(path, function(a, i){
						if(data && data.childNodes && data.childNodes[i]){
							data = data.childNodes[i];
						} 
					})
					if(data)
						me.onclick(data);
				}
			}
		});
	};
	
	global.AccordionMenuTree = AccordionMenuTree; 
	justep.Portal.AccordionMenuTree = AccordionMenuTree;
})(window);
