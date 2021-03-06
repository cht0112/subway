window.afterInitXBL = function(){

	justep.Portal.language = util.getParameterByName('language') || 'zh_CN';
	
	justep.Portal.agentInfo = _config.agentInfo;
		
	var customizer = new Customizer(_config.customized);

	var funcMng = new FuncManager({
		bsessionid : _config.bsessionid,
		data : _config.functree.childNodes,
		customizer : customizer,
		agents : _config.agents
	});
	justep.Portal.controllers.funcManager = funcMng;
	
	//定义门户布局类型
	var layouts = {
			l0: {columns: [{index: 0}]},
			l1: {
				columns: [
				    {index: 0, width: 50},
				    {index: 1}]
            },
			l2: {
				columns: [
				    {index: 0, width: 30},
				    {index: 1}]
            },
			l3: {
				columns: [
				    {index: 0},
				    {index: 1, width: 40},
				    {index: 2}]
            },
			l4: {
				columns: [
				    {index: 0, width: 30},
				    {rows: [
				        {index: 1}, 
				        {columns: [
							{index: 2},
							{index: 3}]}]}]
            },
			l5: {
				rows: [
				    {index: 0}, 
				    {columns: [
				        {index: 1}, 
				        {index: 2, width: 50}, 
				        {index: 3}]}]
			},
			l6: {
				rows: [
				    {columns: [
					    {index: 0}, 
					    {index: 1, width: 50}, 
					    {index: 2}]},
					{index: 3}]
			}
		};
	
	var portalMng = new PortalManager({
		bsessionid: _config.bsessionid,
		customizer: customizer,
		funcMng: funcMng,
		widgetDefs: _config.widgets,
		layouts: layouts,
		layout: 'l1',
		//设置默认的门户widget, 这里使用了md5 id , 当widget配置修改的时候, 这里也需要修改
		widgets: [
			{dock:0, widgetId: "5349D8E7C09F24D511DAA51A88F04A7D", position: 0, color: '14'},
			{dock:1, widgetId: "6E0C2A372230044D1FA79A03D4AAEB2A", position: 0}
		]
	});
	
	justep.Portal.controllers.portalManager = portalMng;

	var menu = new FuncTreeMenu({id:'cv2', funcMng: funcMng});
//	var view = new FuncTreeView({id:'cv1', funcMng: funcMng});

	if(customizer.other["func-map-opened"] === false){
		$('.fun-map').hide();
		$('#fun-map-show-btn').show();
		$('#fun-map-close-btn').hide();
	}

	var quickList = new QuickList({id: 'b2', buttons: {}, mng: funcMng, 
		emptyText: '&lt;没有设置常用的功能&gt;',
		canNotConfig: true,
		canNotClose: true
	});

	var openedList = new ScrollBar({id: 'b3', items: [{id: 'firstPage', label: '首页', fixed: true, click: function(){
		$('#funcFrame').hide();
		$('.content').show();
	}}], onadd: function(btn){
			$('li', this.el).removeClass('on');
			btn.el.addClass('on');
			this.el.show();
			if(btn.icon16 || btn.icon){
				var serverName = window.location.pathname.split('/')[1],
					icon = btn.icon16 || btn.icon;
				$('>a', btn.el).css({'background-image': 'url(/' + serverName + icon + ')'});
			}	
		}, ondelete: function(option){
			funcMng.closeFunc(option);
		}, onclick: function(option){
			$('li', this.el).removeClass('on');
			option.el.addClass('on');
			if(option.click){
				option.click();
			}else{
				$('.content').hide();
				$('#funcFrame').show();
				funcFrame.open(option);
			}
	}});
	
	funcMng.attachEvent('run-func', function(option){
		openedList.add(option);
	});

	funcMng.attachEvent('refresh-func', function(option){
		openedList.refresh(option);
	});
	
	funcMng.attachEvent('close-func', function(option){
		openedList.remove(option);
	});

	var funcFrame = new FuncFrame2({id: 'funcFrame', bsessionid: _config.bsessionid, onclose: function(option){
	}});
	
	funcMng.attachEvent('refresh-func', function(option){
		funcFrame.refresh(option);
	});
	
	var funFrameResize = function(){
		var h = $('.head').height();
		h = $('body').height() - h;
		$('#funcFrame').height(h);
	};
	
	funFrameResize();
	$(window).resize(funFrameResize);
	
	justep.Portal.controllers.funcFrame = funcFrame;

	funcMng.attachEvent('close-func', function(option){
		funcFrame.close(option);
	});
	
	funcMng.attachEvent('run-func', function(option){
		$('.content').hide();
		$('#funcFrame').show();
		funcFrame.open(option);
	});
	
	funcMng.attachEvent('active-func', function(option){
		$('.content').hide();
		$('#funcFrame').show();
		funcFrame.open(option);
	});

	if(!justep.Portal.agentInfo){
		$('.head >.inner >.main >.bar >div');//.css({'margin-right': '70px'});
		var sp = new SliddingPanel({id: 'topPanel', title: '设置'});
		$("#setting-btn").click(function(){
			sp.btnEl.click();
		});
		var tab = new Tab({id: 'setting', pages: [{title: '基本设置', id:"page1"}, {title: '模块设置', id:"page2"}], onIndexChange: function(page, i){
			if(!page.inited){
				page.inited = true;
				switch(i){
					case 0:
						new SetPwd({id: 'reset_pwd', description: "密码规则：<br/>字母有大小写之分;<br/>6-12位(包括6、12);<br/>密码必须由英文字母(a-z)、(A-Z)和数字(0-9)组成,", 
							validate: function(newpwd){
								if(!(/[a-z|A-Z|0-9]{6,12}/.test(newpwd) && newpwd && newpwd.length <= 12))
									return "密码不符合规则";
								if(!/[a-z,A-Z]/.test(newpwd))
									return "密码必须包含英文";
								if(!/[0-9]/.test(newpwd))
									return "密码必须包含数字";
							}
						});
						new AdvancedSet({id: 'advanced_set', onSuccess: function(){
							$("#logout").click();
						}});
					break
					case 1:
						new PortalSet({id: 'portal_set',mng: portalMng});
					break
				}
				
			}
		}});
	}
	
	var portal = new PortalView({
        id: 'portal',
		mng: portalMng
    });
	
	var logout = function(){
		if(!window.logouted){
			var logoutURL = window.location.href.replace(/index.*\.w.*/, 'DoLogout.j') + '?bsessionid=' + _config.bsessionid;
			var xhr = $.ajax({
				type: "post",
				url: logoutURL,
				data: {},
				async: false
			});
			window.logouted = true;
		}
	}
	
	justep.System.onunloads.push(function(){
		funcMng.closeAllAgentPage();
	});
	
	window.onbeforeunload = function(){
		if(!justep.Portal.agentInfo)
			logout();
	};
	if(!justep.Portal.agentInfo){
		$("#logout").click(function(){
			if (confirm("请您注意，是否打开的功能都保存了，关闭系统将导致没有保存的数据丢失！\r\r您确定要退出吗？")){
				logout();
				var href = window.location.href.replace(/index.*\.w.*/,'login.w');
				if(justep.Context.getClient()){
					href += '?client=' + justep.Context.getClient();
				}
				window.location.href = href;
			}		
		});
		try{//沉默跨域的url
			setTimeout(function(){
				if(parent.top.justepApp || (justep.Browser.isInApp && justep.Browser.isAndroid)){
					$("#logout").css('display','none');
				}
			},1000);
		}catch (e){};
	}else{
		$("#logout").click(function(){
			if (confirm("请您注意，是否打开的功能都保存了，关闭代理将导致没有保存的数据丢失！\r\r您确定要关闭吗？")){
				try{//沉默跨域的url
					if(parent.top.justepApp){
						justep.getJustepApp().portal.refresh();
					}else{
						window.close();
					}
				}catch(e){};
			}		
		}).html("关闭");	
	}
	justep.Portal.controllers.logouter = {
		logout: function(){
			logout();
			if(parent.top.justepApp){
				window.location.href = "about:blank";
			}else{
				var href  = window.location.href.replace(/index.*\.w.*/,'login.w');
				if(justep.Context.getClient()){
					href += '?client=' + justep.Context.getClient();
				}
				window.location.href = href;
			}
		}
	};
	var showName = justep.Context.getOperatorName();
	if(justep.Portal.agentInfo){
		showName = justep.Portal.agentInfo.currentPersonName + '(' + showName + ')';
	}
	$('.head .user .name').html(showName);
	$('.head .user .loginTime').html(util.time());
	
	if(_config.isDebug == 'true')
		$('.debug-mode').show();
		
	new AgentList({id: 'agents', mng: funcMng});
	//var reminder = new Reminder({id: "reminder"});
	
};