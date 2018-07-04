<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:211px;height:auto;left:185px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" limit="20" auto-load="false" id="dAuthorize" concept="SA_OPAuthorize" confirm-refresh="false">
   <reader id="default2" action="/SA/OPM/logic/action/queryOPAuthorizeAction"></reader>
   <calculate-relation relation="calcCheckBox" id="calculate-relation1"></calculate-relation>
   <calculate-relation relation="calcIndex" id="calculate-relation2"></calculate-relation></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;">
   <top size="35px" id="borderLayout-top1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar4" separator-size="8" style="margin-left:5px;float:left;;">
   <xui:place control="btnInsertAuthorize" id="controlPlace11"></xui:place>
   <xui:place control="btnDeleteAuthorize" id="controlPlace12"></xui:place>
   <xui:place control="btnNextPageAuthorize" id="controlPlace13"></xui:place>
   <xui:place control="trigger4" id="controlPlace14"></xui:place>
   <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar6" separator-size="2" style="margin:0px 0px 0px 20px;">
    <xhtml:input type="checkbox" name="" id="cbShowInheritedAuthorize" checked="true" onclick="assignRoles.cbShowInheritedAuthorizeClick(event)"></xhtml:input>
    <xhtml:label id="label1" class="xui-label" for="cbShowInheritedAuthorize">显示从上级继承的角色</xhtml:label></xhtml:div> </xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar5" separator-size="4" style="float:right;margin-right:5px;;">
   <xhtml:input type="text" value="" id="inputSearchAuthorize" class="xui-input" style="width:100px;;" onkeydown="assignRoles.inputSearchAuthorizeKeydown(event)"></xhtml:input>
   <xui:place control="imageSearchAuthorize" id="controlPlace15" style="height:25px;width:25px;"></xui:place></xhtml:div></top>
   <center id="borderLayout-center1"><xui:place control="gridAuthorize" id="controlPlace3" style="height:100%;width:100%;"></xui:place></center></xhtml:div>
  <xui:place control="windowReceiver" id="controlPlace1" style="position:absolute;top:122px;left:205px;"></xui:place>
  <xui:place control="wdSelectRoles" id="controlPlace6" style="top:140px;left:138px;"></xui:place></xui:layout> 
  <xforms:trigger id="btnInsertAuthorize" appearance="image-text" image-text-mode="LR" icon-class="icon-system-plus" class="button-blue">
   <xforms:label id="xuiLabel1">分配</xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[assignRoles.btnInsertAuthorizeClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btnDeleteAuthorize" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus">
   <xforms:label id="xuiLabel2">删除</xforms:label>
   <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[assignRoles.btnDeleteAuthorizeClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPageAuthorize" operation-owner="dAuthorize" operation="loadNextPage" icon-class="icon-system-angle-right" appearance="image-minimal">
   <xforms:label id="default6">下页</xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" operation-owner="dAuthorize" operation="loadAllPage" appearance="image-minimal" icon-class="icon-system-angle-double-right">
   <xforms:label id="default7">全部</xforms:label></xforms:trigger>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridAuthorize" data="dAuthorize" class="grid-compact" header-row-height="30" row-height="30" onRowValueChanged="assignRoles.gridAuthorizeRowValueChanged" space-column="false">
   <xui:column ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center" id="gridColumn11"></xui:column>
   <xui:column ref="calcIndex" label="序号" type="ro" width="30px" align="center" show-index="true" id="gridColumn12"></xui:column>
   <xui:column id="gridColumn1" ref="roleRoleKind" label="类型" type="html" width="30px" align="center" sort-datatype="str" onRender="assignRoles.gridAuthorize_roleRoleKindRender"></xui:column>
   <xui:column id="gridColumn2" ref="roleName" label="角色" type="ro" width="200px" sort-datatype="str"></xui:column>
   <xui:column id="gridColumn3" ref="roleCatalog" label="角色分类" type="ro" width="80px" sort-datatype="str" visible="false"></xui:column>
   <xui:column id="gridColumn4" ref="roleParentRolesNames" label="父角色" type="ro" width="120px" sort-datatype="str" visible="false"></xui:column>
   <xui:column id="gridColumn5" ref="sOrgFName" label="授权组织" type="ro" width="*" sort-datatype="str"></xui:column></xhtml:div>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="assignRoles.windowReceiverReceive"></xhtml:div>
  <xforms:trigger id="imageSearchAuthorize" appearance="image" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="xuiLabel6">搜索</xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[assignRoles.imageSearchAuthorizeClick(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择角色" width="646px" height="414px" modal="true" id="wdSelectRoles" url="/SA/OPM/dialogs/selectMultiRoles/selectMultiRoles.w" dialogUpdate="true" onReceive="assignRoles.wdSelectRolesReceive"></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="assignRoles.js"></xhtml:script>
  <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"></xhtml:script></xui:resource> 
</xui:window>
