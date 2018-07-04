<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:40px;height:auto;left:330px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" update-mode="whereVersion"
      auto-load="false" id="main" concept="SA_Task" store-type="simple"> 
      <reader action="/system/logic/action/queryTaskAction"/>  
      <writer action="/system/logic/action/saveTaskAction"/>  
      <creator action="/system/logic/action/createTaskAction"/>  
      <rule id="dataBizRule1" relation="sSummary" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="bar"
      src="" auto-load="true" id="barStatus" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="bar" relevant="call('process.barVisible')"/>
    </data>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">process.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="flow"
      auto-save="false" auto-start="false" auto-filter="false"/>  
    <xforms:group ref="data('barStatus')/bar" id="bar"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars_1"> 
        <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
          id="flowBar" process="flow" mode="IMG_TXT_LR"> 
          <item name="back-process-item"/>  
          <item name="advance-process-item"/>  
          <item name="transfer-task-item"/>  
          <item name="suspend-process-item"/>  
          <item name="abort-process-item"/>  
          <item name="customized-process-item"/>  
          <item name="process-chart-item" id="barItem1"/>  
          <item name="execute-list-item" id="barItem2"/> 
        </xui:bar> 
      </xhtml:div> 
    </xforms:group>  
    <xforms:output id="sName" ref="data('main')/sName"/>  
    <xforms:textarea mediatype="text/html" ref="instance('main')/sSummary" xforms:rows="20"
      xforms:cols="122" incremental="true" id="sSummary" auto-size="true"/>  
    <xforms:output id="sCreatorPersonName" ref="data('main')/sCreatorPersonName"/>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="flow" style="width:24px;top:198px;left:261px;"/>  
      <xui:place control="bar"/>  
      <xhtml:table> 
        <xhtml:tr> 
          <xhtml:td>名称：</xhtml:td>  
          <xhtml:td> 
            <xui:place control="sName"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td>创建者：</xhtml:td>  
          <xhtml:td> 
            <xui:place control="sCreatorPersonName"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td>摘要：</xhtml:td>  
          <xhtml:td> 
            <xui:place control="sSummary"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="process.js"/> 
  </xui:resource> 
</xui:window>
