<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:230px;height:auto;left:283px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dRole" concept="SA_OPRole" confirm-refresh="false" limit="20"
      onRefreshCreateParam="selectMultiRoles.dRoleRefreshCreateParam"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPRoleAction"/>  
      <filter name="filterValidState" id="filter1">SA_OPRole.sValidState = 1</filter>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation2"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px"> 
        <top size="35px" id="borderLayout-top1">
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4"><xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="selectMultiRoles.inputSearchKeydown(event)" style="width:100px;;"></xhtml:input>
  <xui:place control="imageSearch" id="controlPlace6" style="height:25px;width:25px;"></xui:place></xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="8"><xui:place control="triggerNextPage" id="controlPlace7"></xui:place>
  <xui:place control="triggerAllPage" id="controlPlace8"></xui:place></xhtml:div></top>  
        <center id="borderLayout-center1">
          <xui:place control="gridRole" id="controlPlace1" style="height:100%;width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/>
        </center>  
        <bottom size="38px" id="borderLayout-bottom1">
            
          
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace5" /><xui:place control="btnCancel" id="controlPlace3" /></xhtml:div></bottom>
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace4" style="top:210px;left:125px;"/>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectMultiRoles.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridRole" data="dRole" header-row-height="30" row-height="30" class="grid-compact"> 
      <xui:column id="gridColumn7" ref="calcCheckBox" label="#master_checkbox" type="ch"
        width="30px" align="center"/>  
      <xui:column id="gridColumn3" ref="calcIndex" label="序号" type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn5" ref="sRoleKind" label="类型" type="html" width="30px"
        align="center" onRender="selectMultiRoles.gridRoleSRoleKindRender"/>  
      <xui:column id="gridColumn1" ref="sName" label="角色名称" type="ro" width="150px"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60px"/>  
      <xui:column id="gridColumn4" ref="sCatalog" label="分类" type="ro" width="80px"/>  
      <xui:column id="gridColumn6" ref="sParentRolesNames" type="ro" width="150px" label="父角色"/>
    </xhtml:div>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[selectMultiRoles.btnCancelClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnOK" appearance="image-text" class="button-green"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[selectMultiRoles.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>
  <xforms:trigger id="imageSearch" appearance="image" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="xuiLabel3"><![CDATA[]]></xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">selectMultiRoles.imageSearchClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="triggerNextPage" operation-owner="dRole" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-angle-right">
   <xforms:label id="default2"><![CDATA[下页]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="triggerAllPage" operation-owner="dRole" operation="loadAllPage" appearance="image-minimal" icon-class="icon-system-angle-double-right">
   <xforms:label id="default3"><![CDATA[全部]]></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="selectMultiRoles.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  </xui:resource> 
</xui:window>
