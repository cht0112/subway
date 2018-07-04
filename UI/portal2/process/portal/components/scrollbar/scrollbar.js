(function(global){
	
	
	var ScrollBar = function(options){
		$.extend(this, options);
		this.el = $('#' + this.id);
		this.init();
		if(this.oncreate)
			this.oncreate.call(this); 
	};
	 
	ScrollBar.prototype = {
		init: function(){
			var me = this,
				items = this.items || [];

			this.items = new Collection();
			this.items.getKey = function(obj){
				return obj.id;
			};
			this.items.addAll(items);
			this.el.addClass('scrollbar');
			if(this.baseClass){
				this.el.addClass(this.baseClass);
			}
			this.el.empty();
			this.el.append('<a class="prev icon icon-system-left-open" href="#"></a>');
			this.el.append('<a class="next icon icon-system-right-open" href="#"></a>');
			this.el.append('<div class="wrap"><ul class="fixed"></ul><div class="other"><ul></ul></div></div>');
			this.fixedULEl = $('.fixed', this.el);
			this.items.each(function(item){
				if(item.fixed)
					me.doAdd(item);
			});

			$('.wrap .other', this.el).css({marginLeft: this.fixedULEl.width()});

			this.ulEl = $('.wrap .other ul', this.el);
			this.ulEl.disableSelection();

			this.items.each(function(item){
				if(!item.fixed)
					me.doAdd(item);
			});

			var cfd = this.ulEl.carouFredSel({
				circular: false,
				auto: false,
				width: '100%',
				align: 'left',
				padding: [0, 5, 0, 0],
				prev: $('.prev', this.el),
				next: $('.next', this.el),
				mousewheel: true,
				swipe: {
					onMouse: true,
					onTouch: true
				}
			});
			
			this.inited = true;
		},
		close: function(){
			$(this.el).slideUp(600);
			if(this.onclose){
				this.onclose.call(this);
			}
		},
		open: function(){
			$(this.el).slideDown(600);
		},
		refresh: function(option){
			if(option){
				var old = this.items.get(option.oldId);
				this.items.removeAtKey(option.oldId);
				this.items.add(option);
				this.doRefresh(option, old);
			}
		},
		doRefresh: function(btn, old){
			if(old){
				old.el.remove();
				old.el = null;
			}
			this.add(btn);
		},
		add: function(option){
			if(option){
				this.items.add(option);
				this.doAdd(option);
			}
		},
		//private
		doAdd: function(btn){
			var me = this;
			btn.el = $('<li funcId="' + btn.id + '"><a>' + btn.label + '</a></li>');
			if(!btn.fixed && !this.canNotDelete) btn.el.append('<span><a class="delete"></a></span>');
			if(justep.Browser.IE7)
				btn.el.css({display: 'inline'});
			else
				btn.el.css({display: 'inline-block'});
				
			btn.deleteEl = $('.delete', btn.el).click(function(){
				me.remove(btn);
				if(me.ondelete){
					me.ondelete.call(me, btn);
				}
			});
			$('>a', btn.el).click(function(){
				if(me.onclick)
					me.onclick(btn);
			});
			if(btn.fixed){
				this.fixedULEl.append(btn.el);
			}else {
				if(this.inited)
					this.ulEl.trigger("insertItem", [btn.el]);
				else
					this.ulEl.append(btn.el);
				//this.ulEl.trigger("nextPage");
			}
			
			if(this.onadd){
				this.onadd.call(this, btn);
			}
		},
		remove: function(btn){
			var me = this;
			btn = this.items.removeAtKey(btn.id);
			if(btn){
				btn.el.fadeOut(600, function(){
					me.ulEl.trigger("removeItem", [btn.el]);
					btn.el = null;
				});
			}
		}
	};

	global.ScrollBar = ScrollBar;
})(window);
