<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:114px;left:52px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dOrgList" concept="SA_OPOrg"
      onRefreshCreateParam="searchOrg.dOrgListRefreshCreateParam"> 
      <reader id="default3" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8"> 
        <top size="40px" id="borderLayout-top1"> 
          <xhtml:div id="div2" class="xui-container" style="height:auto;width:150px;float:left;margin-top:5px;">
   <xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="searchOrg.inputSearchKeydown(event)" onblur="(event)" onfocus="(event)" style="width:100px;;;;"></xhtml:input>
   <xui:place control="imageSearch" id="controlPlace6" style="width:25px;height:25px;"></xui:place></xhtml:div>
  <xui:place control="pagination1" id="controlPlace3" style="float:right;width:356px;height:100%;"></xui:place></top>  
        <center id="borderLayout-center1"> 
          <xui:place control="gridList" id="controlPlace8" style="height:100%;width:100%;"/> 
        </center>  
        <bottom size="30px" id="borderLayout-bottom1">
          <xui:place control="btnCancel" id="controlPlace1" style="float:right;margin-top:5px;width:75px;"/>  
          <xui:place control="btnOK" id="controlPlace4" style="float:left;width:75px;margin-top:5px;"/>
        </bottom> 
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace2" style="top:161px;left:318px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridList" data="dOrgList" onCellHint="searchOrg.gridListCellHint" onRowDblClick="searchOrg.gridListRowDblClick" class="grid-flat xui-grid-hide-head xui-grid-hide-VLine" row-height="28"> 
      <xui:column id="gridColumn4" ref="sOrgKindID" type="html" width="30px" label="类型" readonly="true" onRender="searchOrg.gridListSOrgKindIDRender" align="center" /><xui:column id="gridColumn3" ref="sFName" label="全路径名" type="ro" width="400px"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="100px"/>  
       
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="searchOrg.receiverReceive"/>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[关闭]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[searchOrg.btnCancelClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnOK" appearance="image-text" icon-class="icon-system-forward" class="button-green"> 
      <xforms:label id="xuiLabel2"><![CDATA[定位]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[searchOrg.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>
  <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" class="button-yellow" icon-class="icon-system-search">
   <xforms:label id="xuiLabel3">搜索</xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">searchOrg.imageSearchClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination1" data="dOrgList" page-count="5" align="right"></xhtml:div></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript1" src="searchOrg.js"/> 
  	<xhtml:script id="htmlScript2" src="/UI/system/service/org/orgUtils.js"></xhtml:script>
  </xui:resource> 
</xui:window>
