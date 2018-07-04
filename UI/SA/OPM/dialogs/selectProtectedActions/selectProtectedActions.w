<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:85px;left:143px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="ch,name,label"
      src="" auto-load="false" id="dActions" store-type="grid"/> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout id="rootLayout" type="flow" style="height:100%;width:100%;position:relative;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px"> 
        <center id="borderLayout-center1">
          <xui:place control="gridActions" id="controlPlace1" style="height:100%;width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/>
        </center>  
        <bottom size="38px" id="borderLayout-bottom1">
            
          
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace4" /><xui:place control="btnCancel" id="controlPlace3" /></xhtml:div></bottom>
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace2" style="top:169px;left:206px;"/>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridActions" data="dActions" onRowDblClick="selectProtectedActions.gridActionsRowDblClick" header-row-height="30" row-height="30" class="grid-compact" space-column="false"> 
      <xui:column id="gridColumn1" ref="ch" label="#master_checkbox" type="ch" width="30px"
        align="center"/>  
      <xui:column id="gridColumn2" ref="name" label="name" type="ed" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn3" ref="label" label="动作" type="ro" width="*"/>
    </xhtml:div>  
    <xforms:trigger id="btnCancel" appearance="image-minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[selectProtectedActions.btnCancelClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnOK" appearance="image-text" class="button-green"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[selectProtectedActions.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectProtectedActions.receiverReceive"/>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="selectProtectedActions.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>
