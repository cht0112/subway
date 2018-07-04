if (!$.jpolite) $.jpolite = {};
if (!$.jpolite.Login) $.jpolite.Login = {
	items: {},
	onGetUserCheckMsgBefore: null,
	onGetUserCheckMsgAfter: null,
	indexPage: "index.templet.html",
	browser:{
		IE: !!(window.attachEvent && !window.opera),
		FF: navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1
	},
	maximize:function(key){
		var url = window.location.href.replace(/login.*\.w.*/, $.jpolite.Login.indexPage);
		var client = $.urlParam('client');
		if(client)
			url += '?client=' + client;
		if(this.browser.IE){
			var opened = null
			try{					
				opened = window.open(url,'title','width=' + (screen.availWidth) + ',height=' + (screen.availHeight)+',channelmode =yes,toolbar=0,menubar=0,resizable=1,location=no,status=no');
				if(opened){
					window.opener=null;
					window.open('','_self');
					window.close();
				}else{
					$.jpolite.Data.system.User.logout(function(data){});
				}
			}catch(ee){
				$.jpolite.Data.system.User.logout(function(data){});
			}
		}else{
			var opened = window.open(url,'title','width=' + (screen.availWidth-8) + ',height=' + (screen.availHeight-56)+',channelmode =yes,toolbar=no,menubar=no,resizable=1,location=no,status=no');
			if(opened.outerHeight==0&&opened.outerWidth==0&&opened.innerHeight==0&&opened.innerWidth==0){
				$.jpolite.Data.system.User.logout(function(data){});
			}else{
				setInterval(function(){ 
				    window.open('', '_self', ''); 
				    window.close(); 
				}, 100); 
			}
		}
		
	},
	checkLogin: function(){
		$.jpolite.Data.system.User.check(function(data){
			if(data && data.status){
				window.location.href = window.location.href.replace(/login.*\.w.*/, $.jpolite.Login.indexPage);
			}
		});		
	},
	initUsernameInput: function(inputID){
		this.items.usernameInput = $("#" + inputID).keydown(function(event){
			if(event.keyCode==13){
				 $.jpolite.Login.doLogin();
				 return false;
			}	 
		});
	},
	initPasswordInput: function(inputID){
		this.items.passwordInput = $("#" + inputID).keydown(function(event){
			if(event.keyCode==13){
				 $.jpolite.Login.doLogin();
				 return false;
			}	 
		});
	},
	initLoginButton: function(inputID){
		this.items.loginButton = $("#" + inputID).click(function(event){
			$.jpolite.Login.doLogin();
			 return false;
		});
	},
	initCancelButton: function(inputID){
		/*TODO::CG
		this.items.cancelButton = $("#" + inputID).click(function(event){
			window.location.reload();
		});
		var cancelElement = this.items.cancelButton.get(0);
		if (cancelElement) cancelElement.disabled = true;
		*/
	},
	/* 此处为验证图片的时间Js脚本初始化
	 */
	initCaptchaInput: function(inputID){
		this.items.captchaInput = $("#" + inputID).keydown(function(event){
			event.keyCode==13 && $.jpolite.Login.doLogin();
		});
	},
	initCaptchaImage: function(imageID){
		this.items.captchaImage = $("#" + imageID).click(function(event){
			this.src = this.src.replace("\?(.)*", '') + "?" + Math.random();
			if($.jpolite.Login.items.captchaInput)
				$.jpolite.Login.items.captchaInput.focus().select();
		});
	},
	/*
	initAgentSelect: function(selectID){
		this.items.agentSelect = $("#" + selectID).click(function(event){
			var username = $.trim($.jpolite.Login.items.usernameInput.val().toLowerCase());
			var password = $.jpolite.Login.items.passwordInput.val();
			var username_password = username + ";" + password;
			if($.jpolite.Login._old_username_password_ != username_password){
				$.jpolite.Login._old_username_password_ = username_password;
				var agentElement = $.jpolite.Login.items.agentSelect.get(0);
				if (agentElement) {
					agentElement.options.length = 1;
					$.jpolite.Data.system.User.getAgents(username, password, function(data){
						if(data && data.status && data.agents){
							for (var i in data.agents)
								agentElement.options.add(new Option(data.agents[i].name,data.agents[i].id));
						}
					});
				}
			}
		});
	},
	*/
	initHintLable: function(id){
		this.items.hintLable = $("#" + id);
	},
	initLoadingImage: function(id){
		this.items.loadingImage = $("#" + id);
	},
	initRememberCheckbox: function(checkboxID){
		this.items.rememberCheckbox = $("#" + checkboxID).change(function(event){
			$.cookie("justep-remember", $.jpolite.Login.items.rememberCheckbox.get(0).checked, {expires:7,path:'/'});
		});
	},
	initMaximize:function(checkboxID){
		this.items.maximizeCheckbox=$("#"+checkboxID).change(function(){
			$.cookie("justep-full-screen", $.jpolite.Login.items.maximizeCheckbox.get(0).checked, {expires:7,path:'/'});
		});
	},
	initFromCookie: function(forced){
		var remember = forced || $.cookie("justep-remember")=="true";
		var rememberElement = this.items.rememberCheckbox ? this.items.rememberCheckbox.get(0) : null;
		if (rememberElement) rememberElement.checked = remember;
		if (remember) {
			$.jpolite.Login.items.usernameInput.val($.cookie("justep-username") || "");
		}
		var maximize = $.cookie("justep-full-screen")=="true";
		var maximizeElement = this.items.maximizeCheckbox ? this.items.maximizeCheckbox.get(0) : null;
		if(maximize) maximizeElement.checked = maximize;
	},
	initFocus: function(){
		$(this.items.usernameInput).val() ?
			$(this.items.passwordInput).focus() :
			$(this.items.usernameInput).focus();
	},
	doGetDefaultCheckMsg: function(){
		if (this.onGetUserCheckMsgBefore) {
			var msg = this.onGetUserCheckMsgBefore();
			if (msg) return msg;
		}
		
		var username = $.trim($.jpolite.Login.items.usernameInput.val());
		if (username=="") {
			$.jpolite.Login.items.usernameInput.focus();
			return "请输入用户名！";
		}
/*maduo: 20100903 可以不输入密码		
		var password = $.jpolite.Login.items.passwordInput.val();
		if (password=="") {
			$.jpolite.Login.items.passwordInput.focus();
			return "请输入密码！";
		}
*/		
		if (this.onGetUserCheckMsgAfter) {
			return this.onGetUserCheckMsgAfter();
		}
	},
	doDisabledInput: function(b){
		for (var i in this.items) {
			var element = this.items[i].get(0);
			if (element) element.disabled = (this.items[i] == this.items.cancelButton ? !b : b);
		}
	},
	doSleep: function(n){
		var s = "您已经连续3次登录错误，请等待" + n + "秒重新登录！";
		$.jpolite.Login.items.hintLable && $.jpolite.Login.items.hintLable.text(s).show(); 
		if (--n >= 0) {
			setTimeout("$.jpolite.Login.doSleep(" + n + ")", 1000);
		} else {
			$.jpolite.Login.doDisabledInput(false);
			$.jpolite.Login.items.passwordInput && $.jpolite.Login.items.passwordInput.focus();
			$.jpolite.Login.items.hintLable && $.jpolite.Login.items.hintLable.text("").show();
		}
	},
	getLocale: function(){
		var el = document.getElementById("language");
		if(!el){
			return "zh_CN";
		}
		return el.options[el.selectedIndex].value;
	},
	doLogin: function(){
		var msg = this.doGetDefaultCheckMsg();
		if (msg) {
			this.items.hintLable && this.items.hintLable.text(msg).show();
			return;
		}
		
		this.items.loadingImage && this.items.loadingImage.show();
		
		this.doDisabledInput(true);
		
		if (typeof $.jpolite.Login._error_count_ == "undefined")
			$.jpolite.Login._error_count_ = 0;
		
		var username = $.trim(this.items.usernameInput.val().toLowerCase());
		var password = this.items.passwordInput.val();
		password = hex_md5(password);

		var param = {};
		if(portalConfig.captcha){
			param['captcha'] = this.items.captchaInput.val();
		}
		var captcha = $("#captcha_input").val();
		
//		var agent = this.items.agentSelect ? (this.items.agentSelect.val() || "") : "";

		$.jpolite.Data.system.User.login(username, password, $.jpolite.Login.getLocale(), param, function(data){
			if(data && data.status){
				$.cookie("justep-username", username, {expires:7,path:'/'});
				if($.jpolite.Login.items.maximizeCheckbox.get(0).checked){
					if(!window.opener){
						$.jpolite.Login.maximize();
					}else{
						var url = window.location.href.replace(/login.*\.w.*/, $.jpolite.Login.indexPage) + "?timestamp=" + new Date().valueOf();
						var client = $.urlParam('client');
						if(client)
							url += '&client=' + client;
						window.location.href = url;
					}
				}else{
					var url = window.location.href.replace(/login.*\.w.*/, $.jpolite.Login.indexPage) + "?timestamp=" + new Date().valueOf()
					var client = $.urlParam('client');
					if(client)
						url += '&client=' + client;
					window.location.href = url;
				}
			} else {
//				$.jpolite.Login.items.captchaImage && $.jpolite.Login.items.captchaImage.click();
				$.jpolite.Login.items.loadingImage && $.jpolite.Login.items.loadingImage.hide();
				$.jpolite.Login.items.hintLable && $.jpolite.Login.items.hintLable.text(data.message).show();
				$.jpolite.Login.items.passwordInput && $.jpolite.Login.items.passwordInput.val("").focus();
//				$.jpolite.Login.items.captchaInput && $.jpolite.Login.items.captchaInput.val("");
				$.jpolite.Login._error_count_++;
				if ($.jpolite.Login._error_count_ == 3) {
					$.jpolite.Login._error_count_ = 0;
					setTimeout("$.jpolite.Login.doSleep(" + 10 + ")", 1000);
				} else {
					$.jpolite.Login.doDisabledInput(false);
					$.jpolite.Login.items.passwordInput && $.jpolite.Login.items.passwordInput.focus();
				}
			}
		});
	}
};