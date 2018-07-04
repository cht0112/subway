<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;top:60px;height:75px;left:24px;"/>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"/>  
        <bottom size="40px" id="borderLayout-bottom1"> 
          <xhtml:input type="button" value="取消" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()"
            style="width:75px;float:right;margin-left:8px;margin-right:20px" class="xui-button"/>  
          <xhtml:input type="button" value="确定" id="input(button)1" onclick="justep.xbl('windowReceiver').windowEnsure(getTemplateData())"
            style="width:75px;float:right" class="xui-button"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
