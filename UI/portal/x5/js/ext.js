/*
 * Here you can add your own Advanced Control definitions
 * like Tabs, Accordion, ... as jQuery plugin to apply on
 * target HTML sections
 */
 
$.extend({
	//Handy method based on Gritter to notify user
	//Can be customized to other libraries
	alert: function(msg) {
		//TODO:: CG level and return Boolean 	INFO,ERROR,WARN,EXCEPTION,DEBUG;
		if(msg.status=="ERROR" || msg.status=="EXCEPTION" ) {
			if (msg.code=="system.UserValidator.validate.1") {
				alert("点击确定重新登录");
				$.jpolite.Data.system.User.logout(function(data){
						if (data.status) {
							window.location.href = window.location.href.replace(/index.*\.jsp.*/,'index.jsp')
						}
				});
			}
		}
	}
});

$.fn.extend({
	// Apply on pre-formated <DIV><UL.tabsul><DIVs></DIV> section
	Tabs: function() {
		return this.each(function() {
			var x = $(this);
			var targets = x.children("div").addClass("tabsdiv").hide();

			x.children(".tabsul").children("li").each(function(i) {
				this.target = targets[i];
				$(this).click(function() {
					if (!$(this).on()) return;

					$(this.target).siblings("div:visible").andSelf().toggle();
					
					//Ajax Lazy Loading Support
					var a = $("a", this); 
					if ((a.size() > 0) && !this.loaded) {
						$(this.target).load(_widgets[a[0].rel].url, $.widgetize);
						this.loaded = true;
					}
				});
			}).eq(0).click();
		});
	},

	// Apply on pre-formated <DL.accordion> section
	Accordion: function() {
		return this.each(function() {
			$(this).children("dt").click(function(){
				var x = $(this);
				if (!x.on()) {
					x.removeClass("on");
					x.siblings("dd:visible").slideToggle();
					return;
				}
	
				x.siblings("dd:visible").add(x.next()).slideToggle();
			});
			//打开树的第一个节点
			justep.Portal.FuncTree.openItem(0);
		});
	},

	// Used on pre-formated <DL.maccordion> section
	MAccordion: function() {
		return this.each(function() {
			var x = $(this);
	
			x.addClass("accordion").children("dd").slideDown();
			x.children("dt").addClass("on").click(function(){
				$(this).toggleClass("on").next().slideToggle();
			});
		});
	},

	//Apply on UL.menu, when clicked, replace the visible widget in a column with another 
	SideMenu: function() {
		return this.each(function(){
			$(this).children().click(function(){
				var w = $("a", this)[0].rel.split(":");
				$.jpolite.replaceWidget('c2', w)
			})
		})
	},
	reSelect : function(hint) {
		var $this = $(this);
		var $options = $this.find("option");
		var $selectBox = $("<div class='select_box'></div>")
				.insertBefore($this);
		var $tagselect = $("<div class='tag_select'></div>")
				.appendTo($selectBox);
		$this.hide();
		if ($options.length > 0) {
			var $selectul = $("<ul class='tag_options'></ul>")
					.appendTo($selectBox);
			for (var i = 0; i < $options.length; i++) {
				var $option = $options.eq(i);
				if(hint){
					$tagselect.text(hint);
				}else if ($option.attr("selected")) {
					$tagselect.text($option.text());
				}
				var $li = $("<li title="+$option.text()+">" + $option.text() + "</li>")
						.appendTo($selectul);
				if($option.attr("rel")){
					$li.attr("rel",$option.attr("rel"));
				}
				$li.hover(function() {
							$(this).addClass("hover");
						}, function() {
							$(this).removeClass("hover");
						});
				$li.click(function() {
							$(this).addClass("selected").siblings()
									.removeClass("selected");
							$tagselect.text($(this).text());
							$tagselect.click();
						});
			}
			$selectul.hide();
			$tagselect.hover(function() {
						$(this).addClass("hover");
					}, function() {
						$(this).removeClass("hover");
					});
			$tagselect.toggle(function() {
						$(this).addClass("open");
						$selectBox.find("ul").show();
					}, function() {
						$(this).removeClass("open");
						$selectBox.find("ul").hide();
					});
		}
		return $selectBox;
	}
});
/*
    提供现有布局信息
*/
function getLayOutForUI(){
	var mm = $.jpolite.Nav.saveStored();
	return mm;
}
/*
 * 读取外界体统的布局信息
 * */
function setLayOutWithUI(s){
	$.jpolite.removeTab({tabType:"stored"});
	$.jpolite.Page.entryCount = null;
	$.jpolite.Page.loadLayout(s);
	//$.jpolite.gotoTab();
}
/*
 * Here you can add your own Live Event definitions
 */
function myLiveEvents(){
	$(".actionRefresh").live("mousedown", function(){
		$(this).parents(".widget")[0].loadContent(true);
	});
	$(".actionMin").live("mousedown", function(){
		$(this).parents(".widget")[0].min();
		$(this).hide().siblings(".actionMax").show();	
	});
	$(".actionMax").live("mousedown", function(){
		$(this).parents(".widget")[0].max();
		$(this).hide().siblings(".actionMin").show();	
	});
	$(".actionClose").live("mousedown", function(){
		$(this).parents(".widget")[0].close();	
	});
	$(".actionMore").live("click", function(){
		$.X.runFunc($(this).parents(".widget")[0].more);
	});
	$(".widgetHeader").live("dblclick", function(){
		$(this).parents(".cc").toggleClass("max").siblings(".cc").toggleClass("min");
	});

	$("a.tab").live("click", function(){
		$.jpolite.gotoTab(this.rel);
		return false;
	});
	$("a.local").live("click", function(){
		$(this).parents(".widget")[0].loadContent(this.href, true);
		return false;	
	});
};

/*
 * Here you can register Custom System Events
 */
function myCustomEvents(){
	$.bindEvent({
		"widgetLoadedEvent": function(e, target){
			$("a.refresh",target).click();
			$.alert({title:'widget Loaded',text:target.url});
		},
		"widgetActivateEvent": function(e, target){
			$("a.activate",target).click();
		},
		"scriptLoadedEvent": function(e, s){
			$.alert({title:'script Loaded',text:s});
		},
		"optionActivateEvent":function(e){
			var tab = $.jpolite.getTab();
			$("#option_layout_current").empty().append("<div rev='"+tab.tabLayout+"' title='" + tab.tabLayout +"'/><span title='" + tab.tabLayout +"' class='title'>" + tab.tabLayout +"</span>");
			$("#options_page_general input[name=options_general_state_radio][value="+tab.tabLayout+"]").attr("checked",true);
			$("#options_general_title_text").val(tab.tabTitle);
			//tab页添加widget的权限判断
			if(tab&&!tab.tabOptions.widget.addable){
				$("#options_page_widgets_item").hide();
				$("#options_nav a").eq(0).click();
			}else{
				$("#options_page_widgets_item").show();
			}
		},
		"optionGeneralActivateEvent":function(e){
			var tab = $.jpolite.getTab();
			$("#options_page_general input[name=options_general_state_radio][value="+tab.tabRefresh+"]").attr("checked",true);
			$("#options_general_title_text").val(tab.tabTitle);
			//tab页删除自身的权限判断
			if(tab&&!tab.tabOptions.tab.removeable){
				$("#options_general_control").hide();
			}else{
				$("#options_general_control").show();
			}
		},
		"optionLayoutActivateEvent":function(e){
			var tab = $.jpolite.getTab();
			$("#option_layout_current").empty().append("<div rev='"+tab.tabLayout+"' title='" + tab.tabLayout +"'/><span title='" + tab.tabLayout +"' class='title'>" + tab.tabLayout +"</span>");
		},
		"settingTemplateActivateEvent":function(e){
			$('link[title]','head').each(function(){
				if(!this.disabled){
					var theme = portalConfig.themes?portalConfig.themes[$(this).attr("title")]:"";
					var $currentTemplet =$("#setting_templet_current"); 
					$currentTemplet.empty().append("<div  title='" + theme.title +"'/><span title='" + theme.title +"' class='title'>" + theme.title +"</span>");
					theme.icon?$currentTemplet.find("div").css('background','url('+theme.icon+')'):"";
				} 
			});
		}
	});

	//Ajax Start & Stop event processor registered with jQuery's methods
	$("#loading").ajaxStart(function(){
	   $(this).css("visibility","visible");
	}).ajaxStop(function(){
	   $(this).css("visibility","hidden");
	})
};

/*
 * Here you can register the message handlers for messages returned from Server side
 */
function myMessageHandlers() {
	$.registerMsgHandlers({
		resource: function(res){
			for (var i in res) {
				var o = res[i];
				var p = [o.name];
				if (o.url) p.push(o.url);
				p.push(true);
				$.triggerEvent(o.method == 'destroy' ? "destroyEvent" : "refreshEvent", p);					
			}
			return true;
		},
		//Promot a important notices in a JsonForm
		notice: function(note) {
			var f = $("form:visible");
			if (note.length) {	//Array, Possibly a error / warning message 
				note = $.map(note, function(o, i){
					return o.join(" -- ");
				});
				if (f.size() > 0) $(".notice", f).html(note.join("<br/>")).hide().slideDown();
			}
			return false;
		},
		//Prompt user about errors in a JsonForm
		error: function(err) {
			var f = $("form:visible");
			if (f.size() > 0) $(".error", f).html(err).hide().slideDown();
			return false;
		}
	})
};

/*
 * Here you can define which controls you want in the format of
 * {selector} : [callBackFunction, {one:argument}] or 
 * {selector} : [callBackFunction, [array, of, arguments]]
 * The callBackFunctions will be called upon each widget content
 */
function myControls(){
	//Assign Controls handlers to selectors 
	$.addControls({
		//JPolite native controls, zero arguement
		".tabs":		[$.fn.Tabs],
		".accordion":	[$.fn.Accordion],
		".maccordion":	[$.fn.MAccordion],
		".jsonform":	[$.fn.JsonForm],
		".menu":		[$.fn.SideMenu],

		//jqModal controls, One object as arguement
		".jqmWindow":	[$.fn.jqm, {toTop:true}],

		//Below are controls from jQuery UI, check out m801.html
		".accordion1":	[$.fn.accordion,{ header: "h3" }],
		".tabs1":		[$.fn.tabs],
		".dialog":		[$.fn.dialog, {
							autoOpen: false,
							width: 600,
							buttons: {
								"Ok": function() {$(this).dialog("close");},
								"Cancel": function() {$(this).dialog("close");} 
							}
						}],
		".datepicker":	[$.fn.datepicker, {inline: true}],
		".slider":		[$.fn.slider,{range: true, values: [17, 67]}],
		".progressbar":	[$.fn.progressbar,{value: 20}],
		//hover takes 2 arguements --> pass them in an Array
		"#dialog_link, ul#icons li": [$.fn.hover,
			[
				function() { $(this).addClass('ui-state-hover'); },
				function() { $(this).removeClass('ui-state-hover'); }
			]
		]
	});
};

/*
 * A traditional navigation tabs initializer with tricks from Dragon Interactive:
 * http://labs.dragoninteractive.com/pufferfish_article.php
 */
function TraditionalTabs(p){
	function fade(t, o, d){
		//if (!$.browser.msie || $.browser.version=="8.0") {
			$("span", t).stop().animate({opacity:o},d, 'easeOutSine');
			$(t).stop().animate({opacity:o},d, 'easeOutSine');
		//}
		$(t).is(".on") ? $(t).removeClass("off") : $(t).addClass("off");
	}
	function resize(force){
		var header=$("#header");
		var h=header.get(0);
		
		var _tab_width=100;		//标签页+间距宽度
		var _tab_more_width=17;	//更多按钮宽度
		var _header_left=Math.max($("#header_left", header).width(), 26);	//标签页左空白宽度
		var _header_right=89;//Math.max($("#header_right", header).width(), 89);	//标签页右空白宽度
		
		var _nav_width=header.width() - _header_left - _header_right;
		var maxCount = Math.floor(_nav_width / _tab_width);				
		if (maxCount * _tab_width + _tab_more_width > _nav_width)
			maxCount--;
		var tabCount = (function () {
			var c=0;
			for (var i in $.jpolite.Nav.tabs) c++;
			return c;
		}());
		var showCount = Math.min(tabCount, maxCount);
		if (force || h.maxCount!=maxCount || h.tabCount!=tabCount || h.showCount!=showCount) {
			h.maxCount=maxCount;
			h.tabCount=tabCount;
			h.showCount=showCount;
			
			var nav=$($.jpolite.Nav.cts, header).empty();
			var nav_more=$($.jpolite.Nav.ctm, header).empty();
			var index=0;
			var tabIndex = -1;
			for (var i in $.jpolite.Nav.tabs) {
				if ($($.jpolite.Nav.tabs[i]).hasClass("on")) {
					tabIndex = index;
					break;
				}
				index++;
			}
			index = 0;
			for (var i in $.jpolite.Nav.tabs) {
				var t=$.jpolite.Nav.tabs[i];
				if (tabIndex >= showCount && showCount > 0) {
					$(t).appendTo((index < (showCount - 1) || tabIndex == index) ? nav : nav_more);
				} else {
					$(t).appendTo(index < showCount ? nav : nav_more);
				}
				$.jpolite.Nav.initTab(t);
				index++;
			}
			
			nav.children("li").each(function(){
				$(this).is(".on") ? fade(this, 1, 0) : fade(this, 0.5, 0);
				$(this).hover(
					function(){
						if (!$(this).is(".on")) fade(this, 1, 700);
					},
					function(){
						if (!$(this).is(".on")) fade(this, 0.5, 700);
					}
				);
			});
			if (nav_more.children("li").length > 0) {
				nav_more.find("li, span").stop().attr("style", " ");
				$("#main_nav_more_btn", header).show();
			} else {
				$("#main_nav_more_btn", header).hide();
			}
		}
	}
	
	if (p) {
		if (p.state=="init") $(window).wresize(resize);
		if (p.state=="resize" || p.state=="add" || p.state=="remove") resize(true);
	}
	
	this.children("li").each(function(){
		$(this).is(".on") ? fade(this, 1, 0) : fade(this, 0.5, 0);
	});
};

/*
 * Load a widget menu on the fly and enable the menu button actions, you can choose to load
 * a dynamic menu or use a different trigger
 */
function loadWidgetMenu() {
	$('#settings_dialog').jqm().load("../UI/portal/system/settings/settings.html", function(){
		/*
		//Initialize widget menu action
		$("a",this).click(function(){
			var s = this.getAttribute('rev').split(":");
			$.jpolite.addWidget({
				id: s[0],
				c:	s[1] || 'c1',	//Add to c1 of current tab by default
				wc: s[2] || '',
				wt:	s[3] || ''
			});
		})
		*/
		$(this).jqDrag(".jqmTitle", this);
		$('#settings_dialog').jqmShow();
	});
};

function initOptionsDialog() {
	$('#options_dialog').jqm().load("../UI/portal/system/options/options.html", function() {
		$(this).jqDrag(".jqmTitle", this);
		$.triggerEvent("optionActivateEvent");
		$('#options_dialog').jqmShow();
		$('#options_dialog').attr("loader",true);
	});
};

/*
 * Initialization Code
 */
$(function(){
	jQuery.fx.off = true;
	
	$.extend({neadUnloadConfirm:true});
	//Load Live / Custom Events & Message Handlers
	myLiveEvents();
	myCustomEvents();
	myMessageHandlers();
	myControls();

	//Here you can see how to customize the look & feel of the navigation tabs
	//Details about Kwicks can be found here: http://plugins.jquery.com/project/kwicks
	//Demos about lavaLamp can be found here: http://nixbox.com/demos/jquery-lavalamp.php
	var s, customNav = window.name;	//Read Nav Tab style set in index.html
	switch (customNav) {
	case	'1':	//Kwicks
			//A little cusomization to the appearance of tabs, for production system, set it in CSS instead
			$("li", "#main_nav").css({width:'90px', padding:0, textAlign:'center'});
			s = {
				navInit:$.fn.kwicks,
				navInitArguments:{max:130, spacing:5, sticky:true, event:'click'}
			};
			break;
	case	'2':	//LavaLamp
			//A little cusomization to the appearance of tabs, for production system, set it in CSS instead
			$("li", "#main_nav").css({background:"transparent", border:0});
			s = {
				navInit:$.fn.lavaLamp,
				navInitArguments:{startItem:0, speed:800}
			};
			break;
	default://3 or else - Traditional
			s = {navInit:TraditionalTabs};
	}

	/*
	 * 		Default initialization parameters:
	 * 
	 * 		cts: #main_nav,					//Navigation Tab container id
	 * 		ctm: #main_nav_more,			//Navigation Tab container more id
	 * 		its: "li",						//Navigation Tab selector
	 * 		cfo: {fn:$.fn.fadeOut,			//Content transition Out callback
	 * 			speed:900}					//Content transition Out speed
	 * 		cfi: {fn:$.fn.fadeIn,			//Content transition In callback
	 * 			speed:500}					//Content transition In speed
	 * 		navInit: TraditionalTabs,		//Navigation Tab Initialization callback
	 * 		navInitArguments: {},			//Navigation Tab Initialization parameters
	 * 		widgetSortable: true			//Whether to allow widget drag-n-drop
	 * 		layoutPersistence: []			//Methods to load/save layout of widgets
	 */
	s.its = "li";
	//s.cfo = {fn:function(speed,callback){this.hide();if(callback)callback.call(this);}};
	//s.cfi = {fn:function(speed,callback){this.show();if(callback)callback.call(this);}};
	s.layoutPersistence = [//声明读取配置与存储配置这两个方法
		//读取用户配置
		function() {
			/*return window["eval"]("(" + $.cookie("jpolite2layout") + ")")*/
			var s = null;
			if(_init_layout){
				var data = _init_layout;
				if (data && data.status) {
					delete data.status;
					s = data;
				}
				_init_layout = null;
			}else{
				$.jpolite.Data.system.Layout.loadTabs(function(data){
					if (data && data.status) {
						delete data.status;
						s = data;
					}
				});
			}	
			return s;
		},
		//存储用户配置
		function(s) { 
			/*return $.cookie("jpolite2layout", s);*/
			$.jpolite.Data.system.Layout.saveTabs(s);
		}
	];
	s.loadScriptLevel = 1;		//0: Will not be dynamically loaded script 1: Dynamically loaded when the page is loaded the script 2: Dynamically loaded when the widget is loaded the script
//	$.jpolite.loadLayout = function(){
//		this._loadLayout();
//	};
	//初始化用户信息；
	$.jpolite.ClientInfo.init();
	
	$.jpolite.init(s);
	//$.jpolite.gotoTab('t0');	//Activate the first tab by default, or another id of your choice
	
	$("#maxAll").click(function(){
		var x = $(".widget:visible").get();
		for (i in x) x[i].max();
	});
	$("#minAll").click(function(){
		var x = $(".widget:visible").get();
		for (i in x) x[i].min();
	});
	$.alert({
		title: 'Notification powered by Gritter',
		text: 'JPolite is up!'
	});
	
	//绑定标签页动作事件
	$.bindEvent({
		"tabActionEvent": function(e, t){
			if (t.tabType == "stored") {
				if($("#options_dialog").attr("loader")){
					$.triggerEvent("optionActivateEvent");
					$("#options_dialog").jqmShow();
				}else{
					initOptionsDialog();
				}
				$(window).wresize();//解决工具栏打开时不触发工具栏大小重新计算的bug
			} else if (t.tabType == "dynamic") {
				t.close();
			}
		},
		"tabActivateEvent": function(e, t){
/*			//改变页面控制权限
			if($(t).attr('id')=="t001"){
				justep.Portal.Tab.setAuthority($(t).attr('id'),false,false,false,false);
			}*/
		}
	});
	
	//功能树显示区域初始化
	$("#functree_owner").jsplit({
		ID:"left",
		Max:"400px",
		Min:"100px",
		Align:"left",
		IsClose:false,
		AllowOpen:true,
		AllowClose: true,
		SplitAnimate:false,
		Fn:function(state, size, duration){
			if (state=="click") {
				$("#main_btn_tree").toggleClass("on");
				$.jpolite.Content.resize();
			} else if (state=="move") {
				$("#content_overlay").width(
					$("#content").attr("style", "margin-left:" + size + "px").width()
				).css("top", $("#content").attr("offsetTop")).css("left", $("#content").attr("offsetLeft"));
				$.jpolite.Content.resize();
			} else if (state=="down") {
				$("#content_overlay").show();
				$("#content_overlay").height($("#content").height());
			} else if (state=="up") {
				$("#content_overlay").hide();
			}
		}
	});
	
	//功能树拖动条高端
	$(window).wresize(function(){
		var h = $(window).height() - (120 + parseInt($("#header").css("top").match(/-?\d+/)));
		$(".jsplit_left_client").height(h).find(".functree_inborder").height(h - 15);
		$(".jsplit_left_split").height(h);
	});
	
	//功能树显示按钮动作
	$("#main_btn_tree").click(function(){
		$("#functree_owner").get(0).toggle();
		$(this).toggleClass("on");
	});
	
	//添加标签页按钮动作
	$("#main_btn_map").click(function(){
		justep.Portal.Tab.open("功能地图", "/portal/functree.w?process=/SA/OPM/system/systemProcess&activity=mainActivity", true);
	});
	
	//添加标签页按钮动作
	$("#main_btn_add").click(function(){
		$.jpolite.gotoTab($.jpolite.addTab());
	});
	
	//删除动态标签按钮动作
	$("#main_btn_del").click(function(){
		if (confirm("您确定要关闭所有功能吗？"))
		$.jpolite.removeTab({tabType:"dynamic"});
	});
	
	//个人配置按钮动作
	$("#main_btn_set").click(function(){
		if(!$('#settings_dialog').attr('loaded')){
			loadWidgetMenu();
			$('#settings_dialog').attr('loaded', true);
		}else{
			$('#settings_dialog').jqmShow();
		}
	});
	
	//页头收起与展开动作
	$("#main_nav_up_down").toggle(
		function(){    
			$(this).addClass("on");
			$("#header").css({'top':"-50px"});
			$("#header_bg_mask").show();
			$(window).wresize();
			$("body").css({'padding-top':"30px"}); 
		},
		function(){
			$(this).removeClass("on");
			$("#header").css({'top':"0px"});
			$("#header_bg_mask").hide();
			$(window).wresize();
			$("body").css({'padding-top':"80px"});
		}
	);
	
	if(!$.proxyPageList)$.proxyPageList=[];
	//代理功能
	if(_init_proxys&&_init_proxys.length>0&&!$.principalID){
		$("#header_proxy").show();
		for(var i=0;i<_init_proxys.length;i++){
			(function(){
				var proxyItem =  _init_proxys[i];
				$("<option rel='"+proxyItem.id+"'>"+proxyItem.name+"</option>").appendTo($("#selectPrincipal"));
			})();
		}
		var $selectBox = $("#selectPrincipal").reSelect("请选择代理人");
		$selectBox.find("li").click(function(){
			if($(this).attr("rel")){
				justep.Portal.openPrincipalPage($(this).attr("rel"));
			}
		});
	}
	
	if($.principalID){
		$.jpolite.PrincipalInfo.init();
		//设置欢迎信息
		justep.Portal.setWelcomeMsg("您当前代理的用户："+justep.Portal.getPrincipalInfo().currentPersonName);
		$("#main_btn_ext").hide();
		$("#main_btn_clo").show();
		$("#main_btn_clo").click(function(){
			for(var i in window.opener.window.$.proxyPageList){
				if(window.opener.window.$.proxyPageList[i]==window){
					window.opener.window.$.proxyPageList.splice(i,1); 
				}
			}
			window.close();
		});
	}else{
		$("#main_btn_set").show();
		$("#main_btn_add").show();
		//设置欢迎信息
		justep.Portal.setWelcomeMsg("当前用户: "+justep.Portal.getUserInfo().personName);
		//系统注销按钮动作
		$("#main_btn_ext").click(function(){
			if (confirm("请您注意，是否打开的功能都保存了，关闭系统将导致没有保存的数据丢失！\r\r您确定要退出吗？")){
				$.neadUnloadConfirm = false;
				var url = window.location.href.replace(/index.*\.w.*/,'login.w');
				var client = $.urlParam('client');
				if(client){
					url += '?client=' + client;
				}
				window.location.href = url; 
			}		
		});
		window.onbeforeunload = function(){
			if($.neadUnloadConfirm)
				return "是否您打开的功能都保存了,关闭系统将导致没有保存的数据丢失！";
		};
		//在页面unload的时候执行注销操作
		$(window).unload(function(){
			document.onkeydown = null;
			jQuery(window).unbind("load");
			jQuery(window).unbind("unload");
			jQuery(window).unbind('beforeunload');
			window.onload = null;
			for(var i in $.proxyPageList){
				$.proxyPageList[i].close();
			}
			//调用功能窗体的close方法
			$(".funcIFrame").each(function(iframe){
				this.contentWindow._close_ && this.contentWindow._close_(); 
			});
			$.jpolite.Data.system.User.logout(function(data){});
		});
	}
	
	//功能高度适应浏览器高度
	$(window).wresize(function(){
		$(".funcIFrame", ".funcOwner").height(Math.max($("#functree_owner").height(),$(window).height(),200)-(121+parseInt($("#header").css("top").match(/-?\d+/))));
		$(this).oneTime("100ms", function(){$.jpolite.Content.resize()});
	});
	 
	//解决标签页下拉框不能覆盖ActiveX的问题
	$("dd", "#main_nav_more_btn").hover(function(){
		$("#main_nav_more_bg").height($("#main_nav_more_btn").find("ul").height());
	}, function(){});
	
	$.jpolite.Page.loadLayout();
			
	//读取自定义的页面配置
	$.jpolite.Nav.initNav({state:"resize"});
	$(".functree", "#functree_owner").FuncTree("../UI/portal/x5/img/icon/", true);//在#functree_owner中查找.functree并在其上建树
	/*
	var hasFunc = false;
	$.jpolite.Data.system.User.getOnceFunc(function(data){
		if (data && data.status) {
			if (data.onceFunc) {
				hasFunc = $.X.runFunc(data.onceFunc);
			}
		}
	});
	*/
	
	setTimeout(function(){
		$.jpolite.gotoTab();
	}, 1);

	//首次延时监测在线人数 1s=1秒
	/*$("#footer_status_online_count").oneTime("1s", function() {
		function getOnlineCount(source){
			$.jpolite.Data.system.User.getOnlineCount(function(data){
				if (data && data.status) {
					$(source).text(data.count);
				}
			});
		};
		getOnlineCount(this);
		//定时监测在线人数 60s=60秒
		$(this).everyTime("60s", function() {
			getOnlineCount(this);
		});
	});*/
	
	//接管功能发过来的消息
	if ($.crossdomain) {
		$.crossdomain.bindFromClient(function(cmd){
			if (cmd=="removeTab") {
				$.jpolite.removeTab();
			}
		});
	}
	
	//控制在不同标签下，显示或隐藏功能树
		
    //justep.Portal.FuncTree.hide();
	$.bindEvent({
		"tabActivateEvent": function(e, t){
			if (t.hideTree) {
				justep.Portal.FuncTree.hide();
			} else {
				justep.Portal.FuncTree.show();
			}
		}
	});
	
	//接管功能树事件
	/*$.bindEvent({
		//接管功能树分组栏单击事件
		"functreeClickTitle": function(e, data){
			//alert(data.name);//可以通过data对象中的name属性来判断点击的分组栏
		},
		//接管功能树JSON数据加载事件
		"functreeLoadData": function(e, data){
			//return data;//可以通过修改data对象中的内容来控制功能树中显示的节点
		},
		//接管功能树加载完成事件
		"functreeLoadTree": function(e, dl){
			//
		}
	});*/
	  
	//设置密码检测规则
	justep.Portal.passwordValidator("密码规则：<br/>字母有大小写之分;<br/>6-12位(包括6、12);<br/>密码必须由英文字母(a-z)、(A-Z)和数字(0-9)组成,",{hint:"密码必须大于6位",size:6},{hint:"密码必须小于12位",size:12},[{hint:'密码必须包含英文',reg:/[a-z,A-Z]/},{hint:'密码必须包含数字',reg:/[0-9]/}])
	
	//屏蔽backspace按键	
	document.onkeydown = function(event) {
		var event = event||window.event,
			el = event.srcElement || event.target,
	    	type = el.type,
	    	code = event.keyCode;
	    return ((code != 8 && code != 13) ||
	    		(type == 'password' && code != 13 && !(code=8 && el.readOnly)) ||
	            (type == 'text' && code != 13 && !(code=8 && el.readOnly)) ||
	            (type == 'textarea' && !(code=8 && el.readOnly)) ||
	            (type == 'submit' && code == 13));
	}
	
	//判断是否需要修改密码时期
	setTimeout(function(){
		if($.jpolite.ClientInfo.params.needModifyPassword == "true"){
			if (confirm("您的密码已经过期，请按确定健进入密码修改窗。"))
				$("#main_btn_set").click();
		}
	}, 2000);
	
});