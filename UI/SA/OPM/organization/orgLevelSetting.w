<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xforms:model id="model1" style="top:62px;height:auto;left:554px;">
   <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="dataMain" concept="SA_OrgLevel" order-by="sCode asc">
    <creator id="default1" action="/SA/OPM/logic/action/createOrgLevelAction"></creator>
    <reader id="default2" action="/SA/OPM/logic/action/queryOrgLevelAction"></reader>
    <writer id="default3" action="/SA/OPM/logic/action/saveOrgLevelAction"></writer>
    <calculate-relation relation="calcIndex" id="calculate-relation1"></calculate-relation>
  <rule id="dataBizRule1" relation="sCode" required="true()" alert="'编码不能为空！'"></rule></data> </xforms:model><xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;">
   <top size="35px" id="borderLayout-top1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1">
   <xui:place control="btnNew" id="controlPlace3"></xui:place>
   <xui:place control="btnSave" id="controlPlace4"></xui:place>
   <xui:place control="btnDelete" id="controlPlace5"></xui:place>
   <xui:place control="btnRefresh" id="controlPlace6"></xui:place>
   <xui:place control="btnNextPage" id="controlPlace7"></xui:place>
   <xui:place control="btnAllPage" id="controlPlace8"></xui:place></xhtml:div></top>
   <center id="borderLayout-center1"><xui:place control="grid1" id="controlPlace2" style="height:100%;width:100%;"></xui:place></center></xhtml:div></xui:layout> 
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="dataMain" edit-mode="true" header-row-height="30" row-height="30" class="grid-compact" space-column="false"><xui:column id="gridColumn3" ref="calcIndex" label="序号" type="ro" width="30px" show-index="true"></xui:column><xui:column id="gridColumn2" ref="sCode" label="编码" type="ed" width="200px" sort-datatype="str"></xui:column><xui:column id="gridColumn1" ref="sName" label="名称" type="ed" width="*" sort-datatype="str"></xui:column>
  </xhtml:div>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNew" operation-owner="dataMain" operation="new" appearance="image-text" class="button-blue">
   <xforms:label id="default4">新建</xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnSave" appearance="image-text" operation-owner="dataMain" operation="save" class="button-green">
   <xforms:label id="default5"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnDelete" appearance="image-minimal" operation-owner="dataMain" operation="delete">
   <xforms:label id="default6"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnRefresh" appearance="image-minimal" operation-owner="dataMain" operation="refresh">
   <xforms:label id="default7"></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPage" appearance="image-minimal" operation-owner="dataMain" operation="loadNextPage" icon-class="icon-system-angle-right">
   <xforms:label id="default8">下页</xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPage" appearance="image-minimal" operation-owner="dataMain" operation="loadAllPage" icon-class="icon-system-angle-double-right">
   <xforms:label id="default9"></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
