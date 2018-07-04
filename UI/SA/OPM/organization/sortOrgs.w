<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:111px;left:166px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dSortOrgs" concept="SA_OPOrg" relations="sName,sCode,sOrgKindID,version"
      limit="-1"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <filter name="validStateFilter" id="filter1">SA_OPOrg.sValidState = 1</filter> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="sortOrgs.receiverReceive"/>  
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="flow"> 
      <xui:place control="receiver" id="controlPlace1" style="top:188px;left:227px;"/>  
      <xhtml:div id="borderLayout1" border-size="8px" style="width:100%; height:100%;"
        component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
        <center id="center1"> 
          <xui:place control="gridSortOrg" id="controlPlace5" style="height:100%;width:100%;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/>
        </center>  
        <bottom id="bottom1" size="38px"> 
          
            
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" separator="false" separator-size="16" id="buttonBar1" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace2"/><xui:place control="btnCancel" id="controlPlace3"/></xhtml:div></bottom>  
        <right size="70px" id="borderLayout-right1"><xui:place control="view1" id="controlPlace4" style="padding-left:5px;width:auto;position:relative;height:auto;margin-top:128px;"></xui:place></right></xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridSortOrg" data="dSortOrgs" class="grid-compact" row-height="30" header-row-height="30" space-column="false"> 
      <xui:column id="gridColumn3" ref="sOrgKindID" label="类型" type="html" width="30px"
        onRender="sortOrgs.gridSortOrgSOrgKindIDRender" align="center"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="*"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="*"/>
    </xhtml:div>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel1">确定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript6">sortOrgs.btnOKClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel2">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript5">sortOrgs.btnCancelClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout1"><xui:place control="btnMoveTop" id="controlPlace7" style="width:65px;margin-bottom:10px;"></xui:place><xui:place control="btnMoveUp" id="controlPlace8" style="width:65px;margin-bottom:10px;"></xui:place>
  <xui:place control="btnMoveDown" id="controlPlace9" style="width:65px;margin-bottom:10px;"></xui:place>
  <xui:place control="btnMoveBottom" id="controlPlace10" style="width:65px;"></xui:place></layout>
  <xforms:trigger id="btnMoveUp" appearance="image-text" icon-class="icon-system-angle-up" class="button-blue">
   <xforms:label id="xuiLabel4"><![CDATA[上移]]></xforms:label>
   <xforms:action ev:event="DOMActivate" id="action4">
    <xforms:script id="xformsScript3">sortOrgs.btnMoveUpClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnMoveTop" appearance="image-text" icon-class="icon-system-angle-double-up" class="button-blue">
   <xforms:label id="xuiLabel3">置顶</xforms:label>
   <xforms:action ev:event="DOMActivate" id="action3">
    <xforms:script id="xformsScript4">sortOrgs.btnMoveTopClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnMoveDown" dis-src="/UI/SA/OPM/images/un_goDown.gif" appearance="image-text" icon-class="icon-system-angle-down" class="button-blue">
   <xforms:label id="xuiLabel5"><![CDATA[下移]]></xforms:label>
   <xforms:action ev:event="DOMActivate" id="action5">
    <xforms:script id="xformsScript2">sortOrgs.btnMoveDownClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnMoveBottom" appearance="image-text" icon-class="icon-system-angle-double-down" class="button-blue">
   <xforms:label id="xuiLabel6">置底</xforms:label>
   <xforms:action ev:event="DOMActivate" id="action6">
    <xforms:script id="xformsScript1">sortOrgs.btnMoveBottomClick(event)</xforms:script></xforms:action> </xforms:trigger></xui:view></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="sortOrgs.js"/>  
  	<xhtml:script id="htmlScript2" src="/UI/system/service/org/orgUtils.js"></xhtml:script>
  </xui:resource> 
</xui:window>
