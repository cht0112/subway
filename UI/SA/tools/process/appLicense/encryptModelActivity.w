<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;width:88px;left:539px;top:505px;"></xforms:model><xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="absolute">
	      <xhtml:label style="position:absolute;top:72px;left:31px;" class="xui-label"
	        id="label1"><![CDATA[开发商数字证书：]]></xhtml:label>  
	      <xhtml:label id="label3" style="position:absolute;left:31px;top:119px;" class="xui-label"><![CDATA[开发商数字证书口令：]]></xhtml:label>  
	      <xhtml:label id="label4" class="xui-label" style="position:absolute;position:absolute;top:169px;left:30px;"><![CDATA[原模型路径：]]></xhtml:label>  
	      <xhtml:label id="label5" class="xui-label" style="position:absolute;position:absolute;left:30px;position:absolute;top:218px;"><![CDATA[加密后模型存放路径：]]></xhtml:label>  
	      <xhtml:label id="label6" class="xui-label" style="position:absolute;position:absolute;left:30px;position:absolute;position:absolute;top:265px;"><![CDATA[需要加密的应用：]]></xhtml:label>  
	      <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;left:611px;top:265px;"><![CDATA[格式如：/demo;/OA，支持多个应用，多个应用用;分隔]]></xhtml:label>
      <xhtml:form enctype="multipart/form-data" name="f" id="f" style="position:absolute;height:100%;width:100%;top:0px;left:0px;margin:0;"
			action="/UI/system/service/common/bizAction.j" method="post" target="result-iframe" >
			<xhtml:input name="process" type="hidden" value="/SA/tools/process/appLicense/appLicenseProcess"/>
			<xhtml:input name="activity" type="hidden" value="encryptModelActivity"/>
			<xhtml:input name="action" type="hidden" value="encryptAppAction"/>
			<xhtml:input name="isCompile" type="hidden" value="true"/>
	      <xhtml:input type="file" value="" id="cert" name="cert" style="position:absolute;width:421px;top:70px;left:175px;"
	        class="xui-input"/>  
	      <xhtml:input type="hidden" value="" id="password" name="password" style="position:absolute;top:117px;width:422px;left:175px;"
	        class="xui-input"/>  
	      <xhtml:input type="text" value="" id="sourceModelPath" name="sourceModelPath" class="xui-input" style="position:absolute;width:422px;position:absolute;top:167px;left:174px;"/>  
	      <xhtml:input type="text" value="" id="targetModelPath" name="targetModelPath" class="xui-input" style="position:absolute;width:422px;position:absolute;left:174px;position:absolute;top:216px;"/>  
	      <xhtml:input type="text" value="" id="app" name="app" class="xui-input" style="position:absolute;width:422px;position:absolute;left:174px;position:absolute;position:absolute;top:263px;"/>  
      </xhtml:form>
	  <xhtml:input type="password" value="" id="password1" style="position:absolute;top:117px;width:422px;left:175px;"
	        class="xui-input"/>  
      <xhtml:iframe id="result-iframe" name="result-iframe" style="display:none"/> 
    <xui:place control="trigger1" id="controlPlace1" style="position:absolute;top:345px;left:534px;"></xui:place>
  <xhtml:label id="label8" class="xui-label" style="position:absolute;position:absolute;left:611px;position:absolute;top:218px;"><![CDATA[请设置在和原模型不同的目录，不要使用中文目录]]></xhtml:label>
  <xhtml:label id="label9" style="position:absolute;top:21px;left:31px;color:#FF0000;" class="xui-label"><![CDATA[注意：此功能只能在开发版运行，执行过程中请不要关闭功能]]></xhtml:label>
  <xhtml:input type="checkbox" name="" id="compile" style="position:absolute;top:312px;left:173px;"></xhtml:input>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;left:30px;position:absolute;position:absolute;position:absolute;top:312px;"><![CDATA[强制编译模型：]]></xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:42px;left:31px;"><![CDATA[建议：使用studio进行模型和源码编译，去除“强制编译模型”选项（性能有大幅提升）]]></xhtml:label></xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" class="button-blue" icon-class="icon-system-ok" appearance="image-text">
   <xforms:label id="default1">执行</xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[encryptModelActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="encryptModelActivity.js"></xhtml:script>
  </xui:resource> 
</xui:window>
