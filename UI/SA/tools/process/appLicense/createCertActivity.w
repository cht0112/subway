<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"  
component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:47px;left:871px;"></xforms:model><xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="absolute">
	      <xhtml:label style="position:absolute;left:32px;top:151px;" class="xui-label" id="label1"><![CDATA[数字证书口令：]]></xhtml:label>  
	      <xhtml:label id="label3" style="position:absolute;left:32px;top:198px;" class="xui-label"><![CDATA[数字证书口令确认：]]></xhtml:label>  
	      <xhtml:form name="f" id="f" style="position:absolute;height:100%;width:100%;top:0px;left:0px;margin:0;"
			action="/UI/SA/tools/process/appLicense/cerateCert.j" method="post" target="result-iframe" >
	      	<xhtml:input type="hidden" value="" id="certPassword" name="certPassword" />  
	      	<xhtml:input type="hidden" value="" id="developerPassword" name="developerPassword" />  

	      <xhtml:input type="text" value="" id="developer" name="developer" class="xui-input" style="position:absolute;width:422px;position:absolute;left:177px;top:55px;"/>  
      </xhtml:form>
	      <xhtml:input type="password" value="" id="certPassword1" name="cert" style="position:absolute;width:421px;left:176px;top:149px;"
	        class="xui-input"/>  
	      <xhtml:input type="password" value="" id="certPassword2" style="position:absolute;width:422px;left:176px;top:196px;"
	        class="xui-input"/>  
	  <xhtml:input type="password" value="" id="developerPassword1" style="position:absolute;width:422px;left:177px;top:102px;"
	        class="xui-input"/>  
      <xhtml:iframe id="result-iframe" name="result-iframe" style="display:none"/> 
    <xui:place control="trigger1" id="controlPlace1" style="position:absolute;top:241px;left:534px;"></xui:place>
  <xhtml:label id="label9" style="position:absolute;top:21px;left:31px;color:#FF0000;" class="xui-label"><![CDATA[注意：制作过程中请不要关闭功能，开发商证书请妥善保管，用于加密应用和制作应用License]]></xhtml:label>
 <xhtml:label class="xui-label" id="label12" style="position:absolute;left:32px;position:absolute;top:57px;"><![CDATA[开发商账号：]]></xhtml:label>
  <xhtml:label id="label13" class="xui-label" style="position:absolute;position:absolute;left:32px;top:104px;"><![CDATA[开发商登陆口令：]]></xhtml:label>
  <xhtml:label id="label14" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:612px;position:absolute;top:57px;"><![CDATA[登陆reg.justep.com的开发商账号]]></xhtml:label>
  <xhtml:label id="label15" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:612px;position:absolute;position:absolute;top:104px;"><![CDATA[登陆reg.justep.com的开发商密码]]></xhtml:label>
  <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:612px;position:absolute;position:absolute;position:absolute;top:151px;"><![CDATA[设置到证书中的口令]]></xhtml:label></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" class="button-blue" icon-class="icon-system-ok" appearance="image-text">
   <xforms:label id="default1"><![CDATA[生成]]></xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[createCertActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1">
  <xhtml:script id="htmlScript1" src="createCertActivity.js"></xhtml:script></xui:resource> 
</xui:window>
