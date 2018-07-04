<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:159px;left:280px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="true" id="dataMain" concept="SA_OPManageType" order-by="sCode asc"> 
      <creator id="default1" action="/SA/OPM/logic/action/createOPManageTypeAction"/>  
      <reader id="default2" action="/SA/OPM/logic/action/queryOPManageTypeAction"/>  
      <writer id="default3" action="/SA/OPM/logic/action/saveOPManageTypeAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/>  
      <rule id="dataBizRule1" concept="SA_OPManageType" readonly="data('dataMain')/sIsSystem = 1"/>  
      </data> 
  </xforms:model>
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="35px" id="borderLayout-top1">
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1"><xui:place control="btnNew" id="controlPlace3"></xui:place>
  <xui:place control="btnSave" id="controlPlace4"></xui:place>
  <xui:place control="btnDelete" id="controlPlace5"></xui:place>
  <xui:place control="btnRefresh" id="controlPlace6"></xui:place>
  <xui:place control="btnNextPage" id="controlPlace7"></xui:place>
  <xui:place control="btnAllPage" id="controlPlace8"></xui:place></xhtml:div></top>  
        <center id="borderLayout-center1">
          <xui:place control="grid1" id="controlPlace2" style="height:100%;width:100%;"/>
        </center>
      <bottom size="30px" id="borderLayout-bottom1" style="padding-top:10px;padding-left:5px;"><xhtml:label id="label1" class="xui-label" style="color:#0000FF;"><![CDATA[系统自带的“系统管理”和“业务管理”不能被编辑或删除]]></xhtml:label></bottom></xhtml:div>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid1" data="dataMain" edit-mode="true" class="grid-compact" header-row-height="30" row-height="30" space-column="false">
      <xui:column id="gridColumn3" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ed" width="200px"
        sort-datatype="str"/>
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ed" width="*" sort-datatype="str"/> 
    </xhtml:div>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNew" operation-owner="dataMain" operation="new" appearance="image-text" class="button-blue">
   <xforms:label id="default4"><![CDATA[新建]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnSave" appearance="image-text" operation-owner="dataMain" operation="save" class="button-green">
   <xforms:label id="default5"><![CDATA[]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnDelete" appearance="image-minimal" operation-owner="dataMain" operation="delete" ref="data('dataMain')/rowid">
   <xforms:label id="default6"><![CDATA[]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnRefresh" appearance="image-minimal" operation-owner="dataMain" operation="refresh">
   <xforms:label id="default7"><![CDATA[]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPage" appearance="image-minimal" operation-owner="dataMain" operation="loadNextPage" icon-class="icon-system-angle-right">
   <xforms:label id="default8"><![CDATA[下页]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPage" appearance="image-minimal" operation-owner="dataMain" operation="loadAllPage" icon-class="icon-system-angle-double-right">
   <xforms:label id="default9"><![CDATA[]]></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
