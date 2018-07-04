<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:59px;left:156px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="checkBox,name,modelPath,parentPath"
      src="" auto-load="false" id="dModelTree"/> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px"> 
        <center id="borderLayout-center1"> 
          <xui:place control="gridModelTree" id="controlPlace1" style="height:100%;width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/> 
        </center>  
        <bottom size="38px" id="borderLayout-bottom1">
         
            
           
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace5" /><xui:place control="btnCancel" id="controlPlace4" /></xhtml:div></bottom> 
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace4" style="top:210px;left:125px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectSingleModelTree.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridModelTree" data="dModelTree" multi-selection="false" onShowNodeImg="selectSingleModelTree.gridModelTreeShowNodeImg"
      appearance="tree" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn1" ref="checkBox" label="checkBox" type="ro" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn2" ref="name" label="name" type="tree" readonly="true" width="*"/>  
      <xui:column id="gridColumn4" ref="modelPath" label="modelPath" type="ro" width="100px"
        readonly="true"/>  
      <xui:column id="gridColumn5" ref="parentPath" label="parentPath" type="ed" width="100px"/> 
    </xhtml:div>  
    <xforms:trigger id="btnCancel" appearance="image-minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[selectSingleModelTree.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate">
        <xforms:script id="xformsScript3"><![CDATA[selectSingleModelTree.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="selectSingleModelTree.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  </xui:resource> 
</xui:window>
