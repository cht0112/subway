<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window"
  sys-param="false">  
  <xforms:model id="model1" style="top:201px;height:auto;left:349px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" data-type="json"
      columns="name,loginIP,loginDate,sessionid" src="" auto-load="false" id="data1" onCustomRefresh="mainActivity.data1CustomRefresh" confirm-refresh="false"/>  
    <xforms:action id="action1" ev:event="onload">
      <xforms:script id="xformsScript1"><![CDATA[mainActivity.model1Load(event)]]></xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="38px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator="true">
        <xui:place control="trigger1" id="controlPlace3"></xui:place>
          <xhtml:table> 
            <xhtml:tr> 
              <xhtml:td> 
                <xhtml:div id="label1" class="xui-label">当前在线用户数：</xhtml:div> 
              </xhtml:td>  
              <xhtml:td> 
                <xhtml:div id="count"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div></top>  
        <center id="borderLayout-center1"> 
          <xui:place control="grid1" id="controlPlace2" style="height:100%;width:100%;"/> 
        </center>  
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid1" data="data1" class="grid-compact"> 
      <xui:column id="gridColumn1" ref="name" label="登录者" type="ro" width="200px" readonly="true"/>  
      <xui:column id="gridColumn2" ref="loginIP" label="登录IP" type="ro" width="200px" readonly="true"/> 
      <xui:column id="gridColumn5" ref="loginDate" label="登录时间" type="dateTime" width="200px" readonly="true"/> 
      <xui:column id="gridColumn3" ref="sessionid" label="登录session" type="ro" width="*" readonly="true" align="left"/> 
    </xhtml:div> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" operation-owner="data1" operation="refresh" appearance="image-minimal">
   <xforms:label id="default1"><![CDATA[]]></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>
  </xui:resource> 
</xui:window>
