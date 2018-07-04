<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;top:60px;height:75px;left:24px;"/>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1"
      appearance="image-text" class="button-green"> 
      <xforms:label id="default1"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[justep.xbl('windowReceiver').windowEnsure(getTemplateData())]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2"
      appearance="image-minimal"> 
      <xforms:label id="default2"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[justep.xbl('windowReceiver').windowCancel()]]></xforms:script>
      </xforms:action>
    </xforms:trigger>
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"/>  
        <bottom size="38px" id="borderLayout-bottom1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar1" style="float:right;margin:10px 0;">
            <xui:place control="trigger1" id="controlPlace2"/>
            <xui:place control="trigger2" id="controlPlace3"/>
          </xhtml:div>
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
