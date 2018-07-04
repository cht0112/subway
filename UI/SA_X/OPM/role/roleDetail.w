<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:178px;left:283px;"> 
    <data id="dRole" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPRole" offset="1" limit="20" load-data-when-init="true" auto-load="true" auto-new="false" confirm-refresh="false" store-type="simple" onSaveCreateParam="roleDetail.dRoleSaveCreateParam"> 
      <xui:reader action="/SA/OPM/logic/action/queryOPRoleAction"/>  
      <xui:writer action="/SA/OPM/logic/action/saveOPRoleAction"/>  
      <xui:creator action="/SA/OPM/logic/action/createOPRoleAction"/>  
      <xui:rule relation="sCode" required="true()" alert="'编号不能为空！'"/>  
      <xui:rule relation="sName" required="true()" alert="'名称不能为空！'"/>  
      <rule id="dataBizRule1" relation="sParentRolesNames" readonly="true()"/>  
      <rule id="dataBizRule2" relation="sRoleKind" readonly="true()" required="true()"/>  
      <rule id="dataBizRule3" relation="calcRoleKind" calculate="call('justep.OpmUtils.getRoleKindLabel',data('dRole')/sRoleKind)" readonly="true()"/>  
      <calculate-relation relation="calcRoleKind" id="calculate-relation1"/> 
    <rule id="dataBizRule4" relation="fZW" required="true()" alert="'职位不能为空！'"></rule>
  <rule id="dataBizRule5" relation="fGW" required="true()" alert="'岗位不能为空！'"></rule></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dParentRole" concept="SA_OPParentRole" confirm-refresh="false"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPParentRoleAction"/>  
      <creator id="default2" action="/SA/OPM/logic/action/createOPParentRoleAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation2"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="bizData1" concept="OFFICE_TYPE_CODE" store-type="simple"><creator id="default7"></creator>
  <reader id="default8" action="/metrodetection/system_code/logic/action/queryOFFICE_TYPE_CODEAction"></reader>
  <writer id="default9"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="bizData2" concept="POSITION_TYPE_CODE" store-type="simple"><creator id="default10"></creator>
  <reader id="default11" action="/metrodetection/system_code/logic/action/queryPOSITION_TYPE_CODEAction"></reader>
  <writer id="default13"></writer></data></xforms:model>  
  <xui:view id="rootView"> 
    <xforms:input id="inputName" ref="data('dRole')/sName"/>  
    <xforms:input id="inputCode" ref="data('dRole')/sCode"/>  
    <xforms:input id="inputCatalog" ref="data('dRole')/sCatalog"/>  
    <xforms:input id="inputRoleKind" ref="data('dRole')/calcRoleKind"/>  
    <xforms:input id="inputDescription" ref="data('dRole')/sDescription"/>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="roleDetail.receiverReceive"/>  
    <!-- 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridParentRole" data="dParentRole"> 
      <xui:column id="gridColumn2" ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn1" ref="parentName" label="继承" type="ro"/> 
    </xhtml:div> 
     --> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="角色继承" width="480px" height="300px" modal="true" id="wdSelectRoles" url="/SA/OPM/dialogs/selectMultiRoles/selectMultiRoles.w" onReceive="roleDetail.wdSelectRolesReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridRole" data="dRole"/>  
    <xui:layout style="position:relative;width:100%;height:100%;" id="rootLayout" type="absolute"> 
      <xui:place control="inputName" id="controlPlace5" style="position:absolute;top:10px;left:48px;width:215px;"/>  
      <xui:place control="inputCode" id="controlPlace2" style="position:absolute;width:215px;top:10px;left:312px;"/>  
      <xui:place control="inputRoleKind" id="controlPlace1" style="position:absolute;top:40px;left:48px;width:215px;"/>  
      <xui:place control="inputCatalog" id="controlPlace11" style="position:absolute;width:215px;top:40px;left:312px;"/>  
      <xui:place control="receiver" id="controlPlace21" style="position:absolute;top:153px;left:151px;"/>  
      <xui:place control="inputDescription" id="controlPlace3" style="position:absolute;width:479px;left:48px;top:100px;"/>  
<!-- 
      <xui:place control="gridParentRole" id="controlPlace4" style="position:absolute;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;width:519px;top:101px;height:187px;left:8px;"/> 
 -->  
      <xui:place control="wdSelectRoles" id="controlPlace9" style="position:absolute;top:154px;left:192px;"/>  
      <xui:place control="gridRole" id="controlPlace6" style="position:absolute;display:none;width:161px;top:-6px;height:65px;left:-6px;"/>  
      <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;left:8px;top:106px;">描述</xhtml:label>  
      <xhtml:label id="label8" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;left:8px;top:46px;">类型</xhtml:label>  
      <xhtml:label id="label10" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;left:273px;top:16px;">编码</xhtml:label>  
      <xhtml:label id="label3" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:35px;height:11px;left:8px;top:16px;">名称</xhtml:label>  
      <xhtml:label id="label1" style="position:absolute;width:35px;height:11px;left:273px;top:46px;" class="xui-label">分类</xhtml:label>  
      <xhtml:input type="button" value="确定" id="btnOK" style="position:absolute;width:75px;left:370px;top:140px;" class="xui-button" onclick="roleDetail.btnOKClick(event)"/>  
      <xhtml:input type="button" value="取消" id="btnCancel" style="position:absolute;width:75px;left:453px;top:140px;" class="xui-button" onclick="roleDetail.btnCancelClick(event)"/>  
      <!--
      <xhtml:input type="button" value="添加角色继承" id="btnAppendParents" style="position:absolute;width:100px;top:297px;left:8px;" class="xui-button" onclick="roleDetail.btnAppendParentsClick(event)"/>  
      <xhtml:input type="button" value="删除角色继承" id="btnDeleteParents" style="position:absolute;width:100px;top:297px;left:116px;" class="xui-button" onclick="roleDetail.btnDeleteParentsClick(event)"/> 
       -->
    <xui:place control-label="gridSelect1" id="controlLabel3" style="position:absolute;left:8px;top:76px;height:11;width:35;" label="职位"></xui:place><xui:place control="gridSelect1" id="controlPlace10" style="position:absolute;left:48px;top:70px;"></xui:place>
  <xui:place control-label="gridSelect2" id="controlLabel4" style="position:absolute;left:272px;top:76px;height:11;width:35;" label="岗位"></xui:place><xui:place control="gridSelect2" id="controlPlace12" style="position:absolute;top:70px;left:312px;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dRole')/fZW" label-ref="data('dRole')/fZW">
				   
				   
				   
				
   <xforms:label ref="oFFICEIDCNAME" id="xuiLabel1"></xforms:label>
   <xforms:value ref="oFFICEIDCNAME" id="default3"></xforms:value>
   <xforms:itemset id="default4" data="bizData1" auto-load-data="true"><xforms:column ref="oFFICEIDCNAME" id="default14"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dRole')/fGW" label-ref="data('dRole')/fGW">
				   
				   
				   
				
   <xforms:label ref="pOSITIONIDCNAME" id="xuiLabel2"></xforms:label>
   <xforms:value ref="pOSITIONIDCNAME" id="default5"></xforms:value>
   <xforms:itemset id="default6" data="bizData2" auto-load-data="true"><xforms:column ref="pOSITIONIDCNAME" id="default15"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="roleDetail.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>
