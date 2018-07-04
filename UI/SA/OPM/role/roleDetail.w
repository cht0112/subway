<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:178px;left:283px;"> 
    <data id="dRole" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPRole" offset="1" limit="20" load-data-when-init="true" auto-load="false" auto-new="false" confirm-refresh="false" store-type="grid" onSaveCreateParam="roleDetail.dRoleSaveCreateParam"> 
      <xui:reader action="/SA/OPM/logic/action/queryOPRoleAction"/>  
      <xui:writer action="/SA/OPM/logic/action/saveOPRoleAction"/>  
      <xui:creator action="/SA/OPM/logic/action/createOPRoleAction"/>  
      <xui:rule relation="sCode" required="true()" alert="'编号不能为空！'"/>  
      <xui:rule relation="sName" required="true()" alert="'名称不能为空！'"/>  
      <rule id="dataBizRule1" relation="sParentRolesNames" readonly="true()"/>  
      <rule id="dataBizRule2" relation="sRoleKind" readonly="true()" required="true()"/>  
      <rule id="dataBizRule3" relation="calcRoleKind" calculate="call('justep.OpmUtils.getRoleKindLabel',data('dRole')/sRoleKind)" readonly="true()"/>  
      <calculate-relation relation="calcRoleKind" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dParentRole" concept="SA_OPParentRole" confirm-refresh="false" limit="-1"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPParentRoleAction"/>  
      <creator id="default2" action="/SA/OPM/logic/action/createOPParentRoleAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation2"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xforms:input id="inputName" ref="data('dRole')/sName"/>  
    <xforms:input id="inputCode" ref="data('dRole')/sCode"/>  
    <xforms:input id="inputCatalog" ref="data('dRole')/sCatalog"/>  
    <xforms:input id="inputRoleKind" ref="data('dRole')/calcRoleKind"/>  
    <xforms:input id="inputDescription" ref="data('dRole')/sDescription"/>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="roleDetail.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridParentRole" data="dParentRole" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn2" ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn1" ref="parentName" label="父角色" type="ro" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="角色继承" width="476px" height="264px" modal="true" id="wdSelectRoles" url="/SA/OPM/dialogs/selectMultiRoles/selectMultiRoles.w" onReceive="roleDetail.wdSelectRolesReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridRole" data="dRole"/>  
    <xui:layout style="position:relative;height:100%;width:100%;" id="rootLayout" type="absolute"> 
      <xui:place control="inputName" id="controlPlace5" style="position:absolute;top:10px;left:48px;width:215px;"/>  
      <xui:place control="inputCode" id="controlPlace2" style="position:absolute;width:215px;top:10px;left:312px;"/>  
      <xui:place control="inputRoleKind" id="controlPlace1" style="position:absolute;top:40px;left:48px;width:215px;"/>  
      <xui:place control="inputCatalog" id="controlPlace11" style="position:absolute;width:215px;top:40px;left:312px;"/>  
      <xui:place control="receiver" id="controlPlace21" style="position:absolute;top:153px;left:151px;"/>  
      <xui:place control="inputDescription" id="controlPlace3" style="position:absolute;width:479px;top:70px;left:48px;"/>  
      <xui:place control="gridParentRole" id="controlPlace4" style="position:absolute;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;width:519px;top:101px;height:187px;left:8px;"/>  
      <xui:place control="wdSelectRoles" id="controlPlace9" style="position:absolute;top:154px;left:192px;"/>  
      <xui:place control="gridRole" id="controlPlace6" style="position:absolute;display:none;width:161px;top:-6px;height:65px;left:-6px;"/>  
      <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;top:76px;left:8px;">描述</xhtml:label>  
      <xhtml:label id="label8" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;left:8px;top:46px;">类型</xhtml:label>  
      <xhtml:label id="label10" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;left:273px;top:16px;">编码</xhtml:label>  
      <xhtml:label id="label3" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;left:8px;top:16px;">名称</xhtml:label>  
      <xhtml:label id="label1" style="position:absolute;width:35px;height:11px;left:273px;top:46px;" class="xui-label">分类</xhtml:label>  
      <xui:place control="btnAppendParents" id="controlPlace7" style="position:absolute;width:100px;top:297px;left:8px;"/>  
      <xui:place control="btnDeleteParents" id="controlPlace8" style="position:absolute;width:100px;top:297px;left:116px;"/>  
      <xui:place control="btnOK" id="controlPlace10" style="position:absolute;width:75px;top:297px;left:372px;"/>  
      <xui:place control="btnCancel" id="controlPlace12" style="position:absolute;width:75px;top:297px;left:454px;"/>
    </xui:layout>  
    <xforms:trigger id="btnAppendParents" appearance="image-minimal" icon-class="icon-system-plus"> 
      <xforms:label id="xuiLabel1"><![CDATA[添加父角色]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate">
        <xforms:script id="xformsScript1"><![CDATA[roleDetail.btnAppendParentsClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnDeleteParents" appearance="image-minimal" icon-class="icon-system-trash"> 
      <xforms:label id="xuiLabel2"><![CDATA[删除父角色]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[roleDetail.btnDeleteParentsClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnOK" appearance="image-text" class="button-green"> 
      <xforms:label id="xuiLabel3"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate">
        <xforms:script id="xformsScript4"><![CDATA[roleDetail.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel4"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate">
        <xforms:script id="xformsScript3"><![CDATA[roleDetail.btnCancelClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="roleDetail.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>
