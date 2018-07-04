<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" cacheable="true"  sys-param="false">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>X5 协同管理系统</title>
		<style type="text/css">
			html,body{
      			margin:0;
      			padding:0;
      			height:100%;
      			border:none
   			}
			body {background: url(../UI/portal/x5/img/login/d_1.gif) repeat-x;}
			.lable {font-size: 12px}
			.caption {font-size: 12px;font-weight: bold;}
			
			.remember_div{}
			.remember_div input{display:block; float:left; margin-right:4px;}
			.remember_div span{display:block; float:left; margin-right:8px; height:20px; line-height:20px; *line-height:22px;}

		</style>
		<script type="text/javascript" src="/base/base.js"/>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.js"></script>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.plugins.js"></script>
		<script type="text/javascript" src="/UI/portal/system/js/portal.js"></script>
		
		<script type="text/javascript" src="/UI/portal/system/js/login.js"></script>
		<script type="text/javascript" src="/UI/portal/x5/js/config.js"></script>
	</head>
	<body>
		<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
			<tr height="13px">
				<td width="50%">&#160;</td>
				<td width="40%">&#160;</td>
				<td width="10%">&#160;</td>
			</tr>

			<tr height="37px">
				<td>&#160;&#160;&#160;
					<img src="/UI/portal/x5/img/login/d_lo.gif" height="37px" />
				</td>
				<td>&#160;</td>
				<td>&#160;</td>
			</tr>

			<tr>
				<td>&#160;</td>
				<td>&#160;</td>
				<td>&#160;</td>
			</tr>

			<tr height="60%">
				<td align="right" valign="middle">
					<img src="/UI/portal/x5/img/login/d_x.gif" height="196px" />&#160;&#160;&#160;
					<img src="/UI/portal/x5/img/login/d_2.gif" width="2px" height="241px" />
				</td>
				<td align="left">
					<form>
						<table width="100%" border="0" cellpadding="0" cellspacing="0">
							
							<tr>
								<td width="42px">&#160;&#160; 
									<img src="/UI/portal/x5/img/login/d_3.gif" width="18px" height="18px" />
								</td>
								<td colspan="2">
									<span class="caption">登录协同管理系统</span>
								</td>
								<td width="16px">&#160;</td>
							</tr>
							
							<tr height="17px">
								<td>&#160;</td>
								<td colspan="2">
									<span id="hint_lable" class="lable" style="color:red;"></span></td>
								<td>&#160;</td>
							</tr>
							
							<tr height="32px">
								<td>&#160;</td>
								<td width="46px">
									<span class="lable">用户名</span>
								</td>
								<td width="306px">
									<input name='username_input' id='username_input'
										style="border: 1px solid #A7A6AA; height: 22px; width: 158px;line-height:20px;"/>
								</td>
								<td>&#160;</td>
							</tr>
							<tr height="32px">
								<td>&#160;</td>
								<td>
									<span class="lable">密&#160;&#160;码</span>
								</td>
								<td>
									<input name='password_input' id='password_input' type="password"
										style="border: 1px solid #A7A6AA; height: 22px; width: 158px;line-height:20px;"/>
								</td>
								<td>&#160;</td>
							</tr>
	 						
							<!--
								<tr height="32px">
									<td>&#160;</td>
									<td>
										<span class="lable">语&#160;&#160;言</span>
									</td>
									<td>
										<select id="language" value='zh_CN'
											style="border: 1px solid #A7A6AA; height: 22px; width: 158px">
											<option value="zh_CN">简体中文</option>
											<option value="en_US">English</option>
										</select>
									</td>
									<td>&#160;</td>
								</tr>
								-->
<!--							
							<tr height="32px">
								<td>&#160;</td>
								<td>
									<span class="lable">代&#160;&#160;理</span>
								</td>
								<td>
									<select id="agent_select" value=''
										style="border: 1px solid #A7A6AA; height: 22px; width: 158px">
										<option value=""></option>
									</select>
								</td>
								<td>&#160;</td>
							</tr>
-->							
							
							<!--
								<tr id="uiserver_tr" height="32px" style="display:none">
									<td>&#160;</td>
									<td>
										<span class="lable">服务器</span>
									</td>
									<td>
										<select id="uiserver"
											style="border: 1px solid #A7A6AA; height: 22px; width: 158px">
										</select>
									</td>
									<td>&#160;</td>
								</tr>
								-->
							
							<!--
								<tr id="loginDate_tr" height="32px" style="display:none">
									<td>&#160;</td>
									<td>
										<span class="lable">登录日期</span>
									</td>
									<td>
										<input readonly="true" class="Wdate" id="loginDate"
											style="border: 1px solid #A7A6AA; height: 22px; width: 158px"/>

									</td>
									<td>&#160;</td>
								</tr>
								-->
			
							<tr id="captcha" height="32px" style="display: none;"> 
								<td>&#160;</td>
								<td>
									<span class="lable">校验码</span>
								</td>
								<td>
									<input id="captcha_input" style="border: 1px solid #A7A6AA; height: 22px; width: 64px"/>
									<img id="captcha_image" alt="验证码图片" title="看不清，换一张"
										style="cursor:pointer;cursor:hand;margin:0 0 -7px 0;"></img>
								</td>
								<td>&#160;</td> 
							</tr> 
			
							<tr height="26px">
								<td>&#160;</td>
								<td>&#160;</td>
								<td>
									<div class="remember_div">
										<input id="remember_checkbox" type="checkbox" checked="checked"/>
										<span class="lable" style="vertical-align:middle">记住用户名</span>
										<input id="maximize_checkbox" type="checkbox"/>
										<span class="lable" style="vertical-align:middle">最大化</span>
									</div>
								</td>
								<td>&#160;</td>
							</tr>
							
							<tr height="32px">
								<td>&#160;</td>
								<td>&#160;</td>
								<td>
									<button id="login_button" name="login_button"
										onMouseOver="this.style.background='url(../UI/portal/x5/img/login/d_5_h.gif)';this.style.borderColor='#baceeb'"
										onMouseOut="this.style.background='url(../UI/portal/x5/img/login/d_5.gif)';this.style.borderColor='#A4DBF1'"
										style="background: url('../UI/portal/x5/img/login/d_5.gif'); border: 1px solid #A4DBF1; width:80px; height:22px;">登&#160;&#160;录</button>
<!-- 
				&#160;
									<button id="cancel_button" name="cancel_button"
										onClick="window.parent.window.close()"
										onMouseOver="this.style.background='url(../UI/portal/x5/img/login/d_6_h.gif)';this.style.borderColor='#baceeb'"
										onMouseOut="this.style.background='url(../UI/portal/x5/img/login/d_6.gif)';this.style.borderColor='#A4DBF1'"
										style="background: url('../UI/portal/x5/img/login/d_6.gif'); border: 1px solid #A4DBF1; width: '70'; height: '22';">退&#160;&#160;出</button>
 -->										
								</td>
								<td>&#160;</td>
							</tr>

							<tr height="36px">
								<td>&#160;</td>
								<td>&#160;</td>
								<td>
									<img id="loading_image" src="/UI/portal/x5/img/login/login_processbar.gif"
										style="display: none"/>
								</td>
								<td>&#160;</td>
							</tr>
							
						</table>
					</form>
				</td>
				<td>&#160;</td>
			</tr>
			<tr>
				<td>&#160;</td>
				<td>&#160;</td>
				<td>&#160;</td>
			</tr> 

			<tr height="25px">
				<td colspan="3" align="center">
					<div style="width:100%;height:2px;background:url(../UI/portal/x5/img/login/d_7.gif) no-repeat scroll center"></div>
				</td>
			</tr>
			<tr height="20px">
				<td colspan="3" align="center" class="lable">
					<a target="_blank" href="http://www.justep.com/jj_contact.html">联系我们</a> | 
					<a target="_blank" href="http://www.justep.com/privacy.htm">隐私条款</a> | 
					<a target="_blank" href="http://www.justep.com/law.htm">法律条款</a> | 
					<a target="_blank" href="http://www.justep.com/map.htm">网站地图</a>
				</td>
			</tr>
			<tr height="20px">
				<td height="33px" colspan="3" align="center" class="lable">2011 Justep Corp.京ICP备06011190号 北京市方庄芳群园四区22号金城中心10层 <a target="_blank" href="http://www.justep.com">www.justep.com</a></td>
			</tr>
		</table>
	</body>
<script type="text/javascript"><![CDATA[
	function getRequestParameter(param){
		var q = document.location.search || document.location.hash;
		if(param === null) { return q; }
		if(q)
		{
			var pairs = q.substring(1).split("&");
			for(var i=0; i < pairs.length; i++)
			{
				if (pairs[i].substring(0, pairs[i].indexOf("=")) == param)
				{
					return pairs[i].substring((pairs[i].indexOf("=") + 1));
				}
			}
		}
		return "";
	}

	/*如果是域登录*/
	var adURL = getRequestParameter("ad");
	if(adURL)
		window.location.href = decodeURIComponent(adURL);  

	jQuery(function(){
		$.jpolite.Login.indexPage = "index.w";				// 登陆后跳转页面
		//$.jpolite.Login.checkLogin();								// 检查是否登陆过，如果登陆这则跳转到主页面
		$.jpolite.Login.initUsernameInput("username_input");		// 初始化用户名输入框
		$.jpolite.Login.initPasswordInput("password_input");		// 初始化密码输入框
		if(portalConfig.captcha){
			$('#captcha').show();
			$.jpolite.Login.initCaptchaInput("captcha_input");			// 初始化校验输入框
			$.jpolite.Login.initCaptchaImage("captcha_image");			// 初始化校验图片
		}
		/*
		$.jpolite.Login.initAgentSelect("agent_select");			// 初始化代理选择框
		*/
		$.jpolite.Login.initHintLable("hint_lable");				// 初始化提示信息标签
		$.jpolite.Login.initLoadingImage("loading_image");			// 初始化加载中图片
		$.jpolite.Login.initRememberCheckbox("remember_checkbox");	// 初始化记住设置选择框
		$.jpolite.Login.initMaximize("maximize_checkbox");          // 初始化记住最大化选择框
		$.jpolite.Login.initLoginButton("login_button");			// 初始化登陆按钮
		//$.jpolite.Login.initCancelButton("cancel_button");			// 初始化取消按钮
		$.jpolite.Login.initFromCookie();							// 初始化存储信息，从Cookie中
		$.jpolite.Login.initFocus();								// 初始化焦点
	});
	function dataToObj(result){
		result = result[0];
		if (result.status != "SUCCESS") return null;
		result.data = window["eval"]("(" + result.data + ")");
		result.data.status = (result.status == "SUCCESS"); 
		return result.data;
	}
	var _init_license = dataToObj(${license});
	if(_init_license){
		var expires = _init_license.expires;
		if(expires && expires!=""){
			var value = parseInt(expires);
			if (!(isNaN(value) || value==-1)){
				var msg = "";
				if (value > 0 && value <= 15){
					msg = "平台还有" + value + "天到期，请联系系统管理员"
				}else if(value == -100){
					msg = "平台使用期限到期，请与管理员联系"
					jQuery("input").attr("disabled", true);
					jQuery("button").attr("disabled", true);
				}
				jQuery("#hint_lable").text(msg);
			}
		}
	}
	setTimeout(function(){
		var app = window.location.href.split('/')[3];
		$('#captcha_image').attr('src', '/' + app + '/captchaimage');
	}, 1);
]]>	
</script>	
</html>
