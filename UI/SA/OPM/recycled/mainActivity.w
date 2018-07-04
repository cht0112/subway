<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:112px;left:207px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="dOrg" concept="SA_OPOrg"> 
      <reader id="default2" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grid1" data="dOrg" class="grid-compact" header-row-height="30" row-height="30" space-column="false"> 
      <xui:column id="gridColumn3" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>  
      <xui:column id="gridColumn1" ref="sOrgKindID" label="类型" type="html" width="30px"
        onRender="mainActivity.grid1SOrgKindIDRender" align="center"/>  
      <xui:column id="gridColumn2" ref="sFName" label="已删除组织" type="ro" width="*"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="35px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="8" style="float:left;margin-left:5px;"><xui:place control="btnDeleteOrg" id="controlPlace3"></xui:place>
  <xui:place control="btnRestoreOrg" id="controlPlace4"></xui:place>
  <xui:place control="btnNextPage" id="controlPlace6"></xui:place>
  <xui:place control="btnAllPage" id="controlPlace7"></xui:place></xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="4" style="margin-right:5px;float:right;"><xui:place control="btnClearAll" id="controlPlace1_1" style="width:100px;margin-right:20px;"></xui:place><xhtml:input type="text" value="" id="inputSearch" class="xui-input" onclick="(event)" onkeydown="mainActivity.inputSearchKeydown(event)" style="width:100px;;"></xhtml:input>
  <xui:place control="imageSearch" id="controlPlace5" style="height:25px;width:25px;"></xui:place>
  </xhtml:div></top>  
        <center id="borderLayout-center1"> 
          <xui:place control="grid1" id="controlPlace2" style="height:100%;width:100%;"/> 
        </center> 
      </xhtml:div> 
    </xui:layout> 
  <xforms:trigger id="btnDeleteOrg" appearance="image-text" icon-class="icon-system-cancel" class="button-orange">
   <xforms:label id="xuiLabel5">清除</xforms:label>
   <xforms:action ev:event="DOMActivate" id="action3">
    <xforms:script id="xformsScript1">mainActivity.btnDeleteOrgClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnRestoreOrg" appearance="image-text" image-text-mode="LR" icon-class="icon-system-reply" class="button-green">
   <xforms:label id="xuiLabel6">还原</xforms:label>
   <xforms:action ev:event="DOMActivate" id="action4">
    <xforms:script id="xformsScript2">mainActivity.btnRestoreOrgClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="xuiLabel1">搜索</xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">mainActivity.imageSearchClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPage" appearance="image-minimal" operation-owner="dOrg" operation="loadNextPage" icon-class="icon-system-angle-right">
   <xforms:label id="default1"><![CDATA[下页]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPage" appearance="image-minimal" operation-owner="dOrg" operation="loadAllPage" icon-class="icon-system-angle-double-right">
   <xforms:label id="default3"><![CDATA[]]></xforms:label></xforms:trigger>
  <xforms:trigger appearance="image-text" class="button-orange" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-attention" id="btnClearAll">
   <xforms:label id="default1_1">清除全部</xforms:label>
   <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[mainActivity.btnClearAllClick(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
    <xhtml:script id="htmlScript2" src="/UI/system/service/org/orgUtils.js"></xhtml:script>
  </xui:resource> 
</xui:window>
