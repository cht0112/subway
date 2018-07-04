<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:218px;left:344px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="id,process,activity,activityFName" src="" auto-load="true" id="dPermission" style=";" store-type="simple" confirm-refresh="false"> 
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="default3"/>  
          <cell id="default4"/>  
          <cell id="default5"/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="action,actionLabel,typeOrParam,typeOrParamLabel,kind,kindLabel,values,valuesLabel" src="" auto-load="true" id="dDataPolicy" style=";" store-type="grid" confirm-refresh="false" onValueChanged="dataPermissionDetail.dDataPolicyValueChanged"> 
      <rule id="dataRule1" column="typeOrParam" readonly="data('dDataPolicy')/action != '*'" type="xsd:string"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;" id="rootLayout"> 
      <xui:place control="wdSelectParam" id="controlPlace12" style="position:absolute;top:168px;left:247px;"/>  
      <xui:place control="wdSelectSingleFunction" id="controlPlace10" style="position:absolute;top:167px;left:182px;"/>  
      <xui:place control="receiver" id="controlPlace7" style="position:absolute;top:165px;left:124px;"/>  
      <xui:place control="wdPolicyValues" id="controlPlace13" style="position:absolute;top:168px;left:314px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;" border-size="8"> 
        <top size="120px" id="borderLayout-top1"> 
          <xui:place control="view1" id="controlPlace11" style="width:100%;height:120px;"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="gridDataPolicy" id="controlPlace4" style="width:100%;height:100%;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/> 
        </center>  
        <bottom size="35px" id="borderLayout-bottom1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float:right;margin:10px 0;">
            <xui:place control="btnOK" id="controlPlace8"/>
            <xui:place control="btnCancel" id="controlPlace9"/>
          </xhtml:div>
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择权限参数" width="456px" height="344px" modal="true" id="wdSelectParam" url="/SA/OPM/dialogs/selectPermissionParams/selectPermissionParams.w" onReceive="dataPermissionDetail.wdSelectParamReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择业务功能" width="396px" height="314px" modal="true" id="wdSelectSingleFunction" url="/SA/OPM/dialogs/selectFunTree/selectSingleFunction.w" onReceive="dataPermissionDetail.wdSelectSingleFunctionReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="dataPermissionDetail.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="策略定义" width="646px" height="314px" modal="true" id="wdPolicyValues" url="/SA/OPM/role/policyValues.w" onReceive="dataPermissionDetail.wdPolicyValuesReceive" dialogUpdate="true"/>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel5">确定</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">dataPermissionDetail.btnOKClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel6">取消</xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">dataPermissionDetail.btnCancelClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridDataPolicy" data="dDataPolicy" edit-mode="true" header-row-height="30" row-height="30" class="grid-compact" space-column="false"> 
      <xui:column id="gridColumn1" ref="actionLabel" label="动作" type="ro" width="160px"/>  
      <xui:column id="gridColumn2" ref="typeOrParam" label="权限参数/业务类型" type="ed" width="120px"/>  
      <xui:column id="gridColumn3" ref="kindLabel" label="策略|类型" type="select" width="80px" editor="gridSelectKind" enter-selected="true"> 
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelectKind" ref="data('dDataPolicy')/kind" label-ref="data('dDataPolicy')/kindLabel"> 
          <xforms:label ref="kindLabel" id="xuiLabel2"/>  
          <xforms:value ref="kind" id="default6"/>  
          <xforms:itemset id="default7" auto-load-data="false"> 
            <xforms:column ref="kind" visible="false" id="default27"/>  
            <xforms:column ref="kindLabel" id="default28"/>  
            <itemset-data xmlns="" id="default8">  
              <rows id="default9"> 
                <row id="default10"> 
                  <cell id="default11">expr</cell>  
                  <cell id="default12">表达式</cell> 
                </row>  
                <row id="default13"> 
                  <cell id="default14">custom</cell>  
                  <cell id="default15">自定义</cell> 
                </row> 
              </rows> 
            </itemset-data> 
          </xforms:itemset> 
        </xhtml:div> 
      </xui:column>  
      <xui:column id="gridColumn4" ref="valuesLabel" label="策略|定义" type="outputbtn" readonly="false" onButtonClick="dataPermissionDetail.gridDataPolicy_valuesLabelButtonClick" width="*"/> 
    </xhtml:div>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <xforms:input id="input2" ref="data('dPermission')/process"/>  
      <xforms:input id="input3" ref="data('dPermission')/activity"/>  
      <layout type="absolute" id="layout1" style="position:relative;"> 
        <xhtml:div component="/UI/system/components/menu.xbl.xml#menu" appearance="context" open-mode="win" menu-id="newDataPolicyMenu" style="display: none;" class="xui-container" id="div4"> 
          <xui:menuitem id="newParamPolicy" label="新建参数策略" disabled="false"/>  
          <xui:menuitem id="newBizPolicy" label="新建业务策略" disabled="false"/>  
          <xforms:action ev:event="DOMActivate" id="action11"> 
            <xforms:script id="xformsScript11">dataPermissionDetail.newDataPolicyMenuClick(event)</xforms:script> 
          </xforms:action> 
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="position:absolute;left:0px;top:84px;" separator-size="8"> 
          <xui:place control="triggerInsert" id="controlPlace14"/>  
          <xui:place control="triggerDelete" id="controlPlace15"/> 
        </xhtml:div>  
        <xui:place control="btnSelectFun" id="controlPlace5" style="position:absolute;top:10px;width:90px;left:638px;"/>  
        <xui:place control="input2" id="controlPlace2" style="position:absolute;top:45px;width:340px;left:60px;"/>  
        <xui:place control="input3" id="controlPlace3" style="position:absolute;top:45px;left:475px;width:155px;"/>  
        <xhtml:label id="label2" class="xui-label" style="position:absolute;top:45px;left:2px;">process</xhtml:label>  
        <xhtml:label id="label3" class="xui-label" style="position:absolute;left:414px;top:47px;">activity</xhtml:label>  
        <xhtml:label id="label1" class="xui-label" style="position:absolute;top:12px;left:2px;">应用范围</xhtml:label>  
        <xui:place control="input1" id="controlPlace1" style="position:absolute;top:10px;width:570px;left:60px;"/> 
      </layout>  
      <xforms:input id="input1" ref="data('dPermission')/activityFName"/>  
      <xforms:trigger id="btnSelectFun" appearance="image-text" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
        <xforms:label id="xuiLabel1">选择功能</xforms:label>  
        <xforms:action id="action3" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript3">dataPermissionDetail.btnSelectFunClick(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="triggerInsert" appearance="image-text" class="button-blue" icon-class="icon-system-plus"> 
        <xforms:label id="default16"><![CDATA[新建]]></xforms:label>  
        <xforms:action id="action5" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript5"><![CDATA[dataPermissionDetail.btnInsertPolicyClick(event)]]></xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="triggerDelete" operation-owner="dDataPolicy" operation="delete" appearance="image-minimal"> 
        <xforms:label id="default17"><![CDATA[]]></xforms:label> 
      </xforms:trigger> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript1" src="dataPermissionDetail.js"/> 
  </xui:resource> 
</xui:window>
