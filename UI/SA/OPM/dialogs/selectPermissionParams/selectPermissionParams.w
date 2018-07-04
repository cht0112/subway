<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:131px;left:282px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="action,actionLabel,param,paramLabel,ch"
      src="" auto-load="true" id="dParams" style=";"/> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8"> 
        <center id="borderLayout-center1">
          <xui:place control="gridParams" id="controlPlace1" style="height:100%;width:100%;"/>
        </center>  
        <bottom size="38px" id="borderLayout-bottom1">
            
          
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace4" /><xui:place control="btnCancel" id="controlPlace3" /></xhtml:div></bottom>
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace2" style="top:87px;left:111px;"/>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectPermissionParams.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridParams" data="dParams" onRowDblClick="selectPermissionParams.gridParamsRowDblClick" class="grid-compact" header-row-height="30" row-height="30" space-column="false"> 
      <xui:column id="gridColumn1" ref="ch" label=" " type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn2" ref="actionLabel" label="动作" type="ro" width="*"/>  
      <xui:column id="gridColumn3" ref="paramLabel" label="权限参数" type="ro" width="*"/>  
      <xui:column id="gridColumn4" ref="action" label="action" type="ed" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn5" ref="param" label="param" type="ed" width="100px"
        visible="false"/>
    </xhtml:div>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[selectPermissionParams.btnCancelClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[selectPermissionParams.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript1" src="selectPermissionParams.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  </xui:resource> 
</xui:window>
