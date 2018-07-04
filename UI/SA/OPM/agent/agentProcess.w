<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:167px;left:207px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="type,typeLabel,content,label,index,checkBox" src="" auto-load="false" id="dAgentProcess"/> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="width:100%;height:100%;" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px"> 
        <top size="35px" id="borderLayout-top1">
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="8">
            <xui:place control="btnSelectRole" id="controlPlace9" style="width:85px;"/>  
            <xui:place control="btnSelectModel" id="controlPlace10" style="width:85px;"/>  
            <xui:place control="btnSelectFunc" id="controlPlace11" style="width:85px;"/>  
            <xui:place control="btnDelete" id="controlPlace12"/>
          </xhtml:div>
        </top>  
        <center id="borderLayout-center1">
          <xui:place control="gridAgentProcess" id="controlPlace1" style="height:100%;width:100%;"/>
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float:right;margin:10px 0;">
            <xui:place control="btnOK" id="controlPlace8"/>
            <xui:place control="btnCancel" id="controlPlace7"/>
          </xhtml:div>
        </bottom>
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace4" style="top:105px;left:82px;"/>  
      <xui:place control="wdSelectRole" id="controlPlace3" style="top:107px;left:152px;"/>  
      <xui:place control="wdSelectPermission" id="controlPlace5" style="top:110px;left:213px;"/>  
      <xui:place control="wdSelectModel" id="controlPlace6" style="top:108px;left:268px;"/>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="agentProcess.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择角色" width="496px" height="314px" modal="true" id="wdSelectRole" url="/SA/OPM/dialogs/selectMultiRoles/selectMultiRoles.w" onReceive="agentProcess.wdSelectRoleReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择功能" width="496px" height="314px" modal="true" id="wdSelectPermission" url="/SA/OPM/dialogs/selectAuthorizePermissions/selectAuthorizePermissions.w" onReceive="agentProcess.wdSelectPermissionReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择模块" width="496px" height="314px" modal="true" id="wdSelectModel" url="/SA/OPM/dialogs/selectModelTree/selectModelTree.w" onReceive="agentProcess.wdSelectModelReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridAgentProcess" data="dAgentProcess" header-row-height="30" row-height="30" class="grid-compact" space-column="false"> 
      <xui:column id="gridColumn4" ref="checkBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn3" ref="index" label="序号" type="ro" width="30px" align="center" show-index="true"/>  
      <xui:column id="gridColumn1" ref="typeLabel" label="类型" type="ro" width="40px" align="center"/>  
      <xui:column id="gridColumn2" ref="label" label="权限" type="ro" width="*"/>
    </xhtml:div>  
    <xforms:trigger id="btnCancel" appearance="image-minimal"> 
      <xforms:label id="xuiLabel6"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action6" ev:event="DOMActivate">
        <xforms:script id="xformsScript6"><![CDATA[agentProcess.btnCancelClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel7"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action7" ev:event="DOMActivate">
        <xforms:script id="xformsScript7"><![CDATA[agentProcess.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="btnSelectRole" appearance="image-text" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel1">选择角色</xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">agentProcess.btnSelectRoleClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnSelectModel" appearance="image-text" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel2">选择模块</xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4">agentProcess.btnSelectModelClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnSelectFunc" appearance="image-text" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel3">选择功能</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">agentProcess.btnSelectFuncClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnDelete" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus"> 
      <xforms:label id="xuiLabel4">删除</xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3">agentProcess.btnDeleteClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="agentProcess.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>
