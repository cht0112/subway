<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:59px;left:156px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dPermission" concept="SA_OPPermission" confirm-refresh="false"
      limit="20" onRefreshCreateParam="selectAuthorizePermissions.dPermissionRefreshCreateParam"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryDistinctOPAuthorizePermissionByOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation2"/>  
      <filter name="filterPermissionKind" id="filter1">SA_OPPermission.sPermissionKind = 0</filter> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridPermission" data="dPermission" header-row-height="30" row-height="30" class="grid-compact" space-column="false"> 
      <xui:column id="gridColumn7" ref="calcCheckBox" label="#master_checkbox" type="ch"
        width="30px" align="center"/>  
      <xui:column id="gridColumn3" ref="calcIndex" label="序号" type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn5" ref="sActivityFName" label="功能" type="ro" width="*"/>  
      <xui:column id="gridColumn1" ref="sProcess" label="过程" type="ed" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn2" ref="sActivity" label="活动" type="ed" width="100px"
        visible="false"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectAuthorizePermissions.receiverReceive"/>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="receiver" id="controlPlace4" style="top:210px;left:125px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8"> 
        <top size="35px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="8" style="height:100%;"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="4" style="margin:0px 0px 0px 0px;"><xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="selectAuthorizePermissions.inputSearchKeydown(event)" style="width:100px;;"></xhtml:input>
  <xui:place control="imageSearch" id="controlPlace5" style="height:25px;width:25px;"></xui:place></xhtml:div>
  <xui:place control="btnNextPage" id="controlPlace6"></xui:place>
  <xui:place control="btnAllPage" id="controlPlace7"></xui:place></xhtml:div>
  </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="gridPermission" id="controlPlace1" style="height:100%;width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/> 
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
            
           
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace4"/><xui:place control="btnCancel" id="controlPlace3" /></xhtml:div></bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel1">确定</xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[selectAuthorizePermissions.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnCancel" appearance="image-minimal"> 
      <xforms:label id="xuiLabel2">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript5"><![CDATA[selectAuthorizePermissions.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger> 
  <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="xuiLabel3">搜索</xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate">
    <xforms:script id="xformsScript2">selectAuthorizePermissions.imageSearchClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPage" operation-owner="dPermission" operation="loadNextPage" icon-class="icon-system-angle-right" appearance="image-minimal">
   <xforms:label id="default2"><![CDATA[下页]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPage" appearance="image-minimal" operation-owner="dPermission" operation="loadAllPage" icon-class="icon-system-angle-double-right">
   <xforms:label id="default3"><![CDATA[]]></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="selectAuthorizePermissions.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript2" src="selectAuthorizePermissions.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  </xui:resource> 
</xui:window>
