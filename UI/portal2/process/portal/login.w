<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.w3.org/1999/xhtml"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" sys-param="false">
  <xui:inhead>
  	<xhtml:title>X5协同管理系统</xhtml:title>
  </xui:inhead>
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <div style="height:120px"/> 
      <div id="main"> 
        <div class="head"></div>  
        <div id="login-form"></div>
        <div id="setting"> 
          <div class="inner"> 
            <span>
              <input type="checkbox" name="remember"/>
              <label>记住用户名</label>
            </span>  
            <span>
              <input type="checkbox" name="class"/>
              <label>经典门户</label>
            </span>  
            <span>
              <input type="checkbox" name="maximize"/>
              <label>窗口最大化</label>
            </span> 
            <div id='downApp'>	
            <span>
              <label>平板客户端下载：</label>
            </span>
        	<span id='appleApp' class="icon36 icon-system-appstore"></span>
        	<span id='androidApp' class="icon36 icon-system-android"></span>
        	</div>
          </div>
        </div> 
           
        <div class="tail">
        	<div class="color-yellow"></div>
        	<div class="color-red"></div>
        	<div class="color-blue"></div>
        	<div class="color-white"></div>
        	<div class="color-orange"></div>
        	<div class="color-green"></div>
        </div>
      </div>  
      <div class="justep-info">
        <a class="fr2" href="http://www.justep.com/html/lianxiwomen/ts0982045542H6636.html" target="_blank">联系我们 　|</a>　 
        <a class="fr2" href="http://www.justep.com//html/falvshuoming/ts0982045347B484H.html" target="_blank">法律说明 　|</a>　 
        <a class="fr2" href="http://www.justep.com//html/wangzhanditu/ts09820455744B8B.html" target="_blank">网站地图　|</a> 　 
        <a class="fr2" href="http://bbs.justep.com" target="_blank">论坛</a>
      </div> 
      <div id="portal-type" style="margin: 2px auto;width: 180px;color: #666">
      	<input type="radio" name="index" checked="true" value="index.w">默认首页</input>
      	<input id="type1" type="radio" name="index" value="index2.w">首页2</input>
      	<input id="type2" type="radio" name="index" value="index3.w">首页3</input>
      </div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:link rel="stylesheet" type="text/css" href="components/login/login.css"/>  
    <xhtml:link rel="stylesheet" type="text/css" href="login.css"/>  
    <xhtml:script type="text/javascript" src="lib/md5.js"/>  
    <!--在window组件中已经有了base.js 
    <xhtml:script type="text/javascript" src="/base/base.js"/>
     -->  
    <xhtml:script type="text/javascript" src="lib/jquery.cookie.js"/>  
    <xhtml:script type="text/javascript" src="lib/eventable.js"/>  
    <xhtml:script type="text/javascript" src="components/login/login.js"/>  
    <xhtml:script type="text/javascript" src="login.js"/>  
    <xhtml:script type="text/javascript"><![CDATA[
    	var _config = {
    		license: ${license}
    	};
    ]]></xhtml:script> 
  </xui:resource> 
</xui:window>
