<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"  
component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:47px;left:871px;"></xforms:model><xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="absolute">
	      <xhtml:label style="position:absolute;left:32px;top:151px;" class="xui-label" id="label1"><![CDATA[开发商数字证书：]]></xhtml:label>  
	      <xhtml:label id="label3" style="position:absolute;left:32px;top:198px;" class="xui-label"><![CDATA[开发商数字证书口令：]]></xhtml:label>  
	      <xhtml:label id="label4" class="xui-label" style="position:absolute;position:absolute;left:31px;top:248px;"><![CDATA[申请License用户授权码：]]></xhtml:label>  
	      <xhtml:label id="label5" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:31px;top:289px;"><![CDATA[使用天数：]]></xhtml:label>  
	      <xhtml:label id="label6" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;left:31px;top:336px;"><![CDATA[使用应用人数：]]></xhtml:label>  
	      <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;left:612px;top:381px;"><![CDATA[格式如：/demo，不支持多个应用]]></xhtml:label>
      <xhtml:form enctype="multipart/form-data" name="f" id="f" style="position:absolute;height:100%;width:100%;top:0px;left:0px;margin:0;"
			action="/UI/SA/tools/process/appLicense/makeApplicense.j" method="post" target="result-iframe" >
	      	<xhtml:input type="hidden" value="" id="certPassword" name="certPassword" />  
	      	<xhtml:input type="hidden" value="" id="developerPassword" name="developerPassword" />  

	        <xhtml:input type="text" value="" id="developer" name="developer" class="xui-input" style="position:absolute;width:422px;position:absolute;left:177px;top:55px;"/>  
	        <xhtml:input type="file" value="" id="cert" name="cert" style="position:absolute;width:421px;left:176px;top:149px;"
	        	class="xui-input"/>  
	        <xhtml:input type="text" value="" id="acode" name="acode" class="xui-input" style="position:absolute;width:422px;position:absolute;left:175px;top:241px;"/>  
	        <xhtml:input type="text" value="90" id="useDays" name="useDays" class="xui-input" style="position:absolute;width:422px;position:absolute;position:absolute;left:175px;top:287px;"/>  
	        <xhtml:input type="text" value="0" id="userCount" name="userCount" class="xui-input" style="position:absolute;width:422px;position:absolute;position:absolute;position:absolute;left:175px;top:334px;"/>  
  			<xhtml:input type="text" value="" id="app" name="app" class="xui-input" style="position:absolute;width:422px;position:absolute;left:176px;top:379px;"></xhtml:input>
  			<xhtml:input type="text" value="" id="info" name="info" class="xui-input" style="position:absolute;width:422px;position:absolute;left:176px;top:425px;"></xhtml:input>
      </xhtml:form>


	  <xhtml:input type="password" value="" id="certPassword1" style="position:absolute;width:422px;left:176px;top:196px;"
	        class="xui-input"/>  
	  <xhtml:input type="password" value="" id="developerPassword1" style="position:absolute;width:422px;left:177px;top:102px;"
	        class="xui-input"/>  
      <xhtml:iframe id="result-iframe" name="result-iframe" style="display:none"/> 
    <xui:place control="trigger1" id="controlPlace1" style="position:absolute;left:536px;top:647px;"></xui:place>
  <xhtml:label id="label8" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:612px;top:289px;"><![CDATA[0为不限制]]></xhtml:label>
  <xhtml:label id="label9" style="position:absolute;top:21px;left:31px;color:#FF0000;" class="xui-label"><![CDATA[注意：制作过程中请不要关闭功能]]></xhtml:label>
 <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;left:32px;top:474px;"><![CDATA[应用License：]]></xhtml:label>
  <xhtml:textarea cols="5" rows="5" id="appLicense" style="position:absolute;width:418px;height:155px;left:177px;top:474px;" class="xui-textarea"></xhtml:textarea>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;position:absolute;left:32px;top:381px;"><![CDATA[授权应用：]]></xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;left:612px;top:336px;">0为不限制</xhtml:label>
  <xhtml:label class="xui-label" id="label12" style="position:absolute;left:32px;position:absolute;top:57px;"><![CDATA[开发商账号：]]></xhtml:label>
  <xhtml:label id="label13" class="xui-label" style="position:absolute;position:absolute;left:32px;top:104px;"><![CDATA[开发商登陆口令：]]></xhtml:label>
  <xhtml:label id="label14" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:612px;position:absolute;top:57px;"><![CDATA[登陆reg.justep.com的开发商账号]]></xhtml:label>
  <xhtml:label id="label15" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:612px;position:absolute;position:absolute;top:104px;"><![CDATA[登陆reg.justep.com的开发商密码]]></xhtml:label>
  <xhtml:label id="label16" class="xui-label" style="position:absolute;position:absolute;left:32px;position:absolute;top:427px;"><![CDATA[扩展信息：]]></xhtml:label>
  <xhtml:label id="label18" class="xui-label" style="position:absolute;position:absolute;left:612px;position:absolute;top:427px;"><![CDATA[不支持中文]]></xhtml:label></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" class="button-blue" icon-class="icon-system-ok" appearance="image-text">
   <xforms:label id="default1"><![CDATA[制作]]></xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[makeAppLicenseActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1">
  <xhtml:script id="htmlScript1" src="makeAppLicenseActivity.js"></xhtml:script></xui:resource> 
</xui:window>
