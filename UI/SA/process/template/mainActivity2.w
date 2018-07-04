<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:525px;height:auto;left:38px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="main" style=";" concept="SA_ProcessTemplate" order-by="sCreateTime:desc"
      direct-delete="true" confirm-delete-text="确认要删除吗？"> 
      <reader id="default1" action="/system/logic/action/queryProcessTemplateAction"/>  
      <writer id="default2" action="/system/logic/action/saveProcessTemplateAction"/>  
      <creator id="default3" action="/system/logic/action/createProcessTemplateAction"/>  
      <filter name="filter0" id="filter1"><![CDATA[(SA_ProcessTemplate.sTypeID='PROCESS_TEMPLATE' and SA_ProcessTemplate.sKindID='template')]]></filter>  
      <calculate-relation relation="selected" id="calculate-relation1"/>  
      <calculate-relation relation="index" id="calculate-relation2"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="true" id="resourceControl" concept="SA_ResourceControl"> 
      <reader id="default5" action="/system/logic/action/queryResourceControlAction"/>  
      <writer id="default6" action="/system/logic/action/saveResourceControlAction"/>  
      <creator id="default7" action="/system/logic/action/createResourceControlAction"/>  
      <master id="master1" data="main" relation="sResourceID"/>  
      <calculate-relation relation="selected" id="calculate-relation3"/>  
      <calculate-relation relation="index" id="calculate-relation4"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="modify,org"
      auto-load="true" id="button_status" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataBizRule1" column="modify" readonly="not(call('mainActivity2.allowModify'))"/>  
      <rule id="dataBizRule1" column="org"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mainActivity2.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grid1" data="main" onRowDblClick="mainActivity2.grid1RowDblClick" edit-mode="false"
      class="grid-compact" row-height="30" header-row-height="30" space-column="false"> 
      <xui:column id="gridColumn3" ref="selected" label="#master_checkbox" type="ch"
        width="30px" show-index="false" align="center"/>  
      <xui:column id="gridColumn5" ref="index" type="ro" width="30px" show-index="true"
        label=" " align="center"/>  
      <xui:column id="gridColumn1" ref="sName" label="模板名称" type="ro" width="150px"
        readonly="true"/>  
      <xui:column id="gridColumn4" ref="sProcessName" label="流程名称" type="ro" width="*"
        readonly="true"/> 
    <xui:column id="gridColumn8" ref="sValidState" label="状态" type="html" width="100px" onRender="mainActivity2.grid1_sValidStateRender"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="编辑流程模板" width="496px" height="414px" modal="true" id="detailDlg" url="/UI/SA/process/template/template.w"
      left="0" top="0" onReceive="mainActivity2.detailDlgReceive" minmaxable="false"
      closable="true" resizable="false" status="maximize" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="模板分配给组织" width="646px" height="419px" modal="true" id="windowDialog1"
      dialogUpdate="true"/>  
    <xui:layout style="width:100%;height:100%;" id="rootLayout"> 
      <xui:place control="windowDialog1" id="controlPlace3" style="top:219px;left:307px;"/>  
      <xui:place control="detailDlg" id="controlPlace4" style="top:191px;left:124px;"/>  
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="54%"
        mode="horz" has-arrow-button="false" id="HSplitter1" class="xui-splitter"
        style="height:100%;width:100%;" has-drag-bar="true" collapse-type="normal"> 
        <xhtml:div region="left" id="div3"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top size="35px" id="borderLayout-top1"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                id="buttonBar1" separator-size="2"> 
                <xui:place control="insertItem1" id="controlPlace2"/>  
                <xui:place control="modifyTemplate" id="controlPlace5"/>  
                <xui:place control="menuButton2" id="controlPlace15"/>
                <xui:place control="trigger4" id="controlPlace10"/>  
                <xui:place control="trigger5" id="controlPlace11"/>  
                <xui:place control="inputSearch" style="width:80px;"/>  
                <xui:place control="searchTemplate" style="width:24px;"/>  
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="grid1" id="controlPlace1" style="height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div4" style="background-color:red;"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top size="35px" id="borderLayout-top2"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                id="buttonBar2" style="margin-left:5px;" separator-size="2"> 
                <xui:place control="toOrgTrigger"/>  
                <xui:place control="deleteTemplatePermission"/>  
                <xui:place control="trigger6" id="controlPlace12"/>  
                <xui:place control="trigger7" id="controlPlace13"/>  
                <xui:place control="inputSearch3" style="width:80px"/>  
                <xui:place control="trigger10" style="width:24px"/> 
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center2"> 
              <xui:place control="resourceGrid" id="controlPlace7" style="height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <xui:place control="selectProcessDialog" id="controlPlace6" style="position:absolute;left:315px;top:160px;"/>  
      <xui:place control="orgDialog" id="controlPlace8" style="position:absolute;top:306px;left:479px;"/> 
    </xui:layout>  
    <xforms:trigger id="toOrgTrigger" style="height:23px;" ref="data('button_status')/org"
      appearance="image-text" class="button-blue" icon-class="icon-system-plus"> 
      <xforms:label><![CDATA[分配]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4">mainActivity2.toOrgTriggerClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTemplatePermission"
      appearance="image-minimal" icon-class="icon-system-minus"> 
      <xforms:label><![CDATA[删除]]></xforms:label>  
      <xforms:action id="action7" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript7"><![CDATA[mainActivity2.deleteTemplatePermissionClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="第一步：选择流程" width="596px" height="364px" modal="true" id="selectProcessDialog"
      url="/UI/system/dialog/process/selectSingleProcess.w" onReceive="mainActivity2.windowDialog2Receive"
      dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="resourceGrid" data="resourceControl" header-row-height="30"
      row-height="30" class="grid-compact" space-column="false"> 
      <xui:column id="gridColumn6" ref="selected" label="#master_checkbox" type="ch"
        width="30px" align="center"/>  
      <xui:column id="gridColumn7" ref="index" label=" " type="ro" width="30px" align="center"
        show-index="true"/>  
      <xui:column id="gridColumn10" ref="sOrgFName" label="组织全路径" type="ed" width="*"
        readonly="true"/>  
      <xui:column id="gridColumn2" ref="sOrgFID" label="组织全路径ID" type="ed" width="100px"
        visible="false"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="选择组织" width="596px" height="414px" modal="true" id="orgDialog" url="/UI/system/components/orgDialog/dialogs/orgMultiSelect.w"
      onReceive="mainActivity2.orgDialogReceive" dialogUpdate="true"/>  
    <xforms:trigger id="insertItem1" appearance="image-text" class="button-blue" icon-class="icon-system-plus"> 
      <xforms:label><![CDATA[新建]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[mainActivity2.insertItem1Click(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="modifyTemplate" ref="data('button_status')/modify" appearance="image-minimal"
      icon-class="icon-system-edit-alt"> 
      <xforms:label id="xuiLabel7"><![CDATA[编辑]]></xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action5"> 
        <xforms:script id="xformsScript3">mainActivity2.modifyTemplateClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4"
      operation-owner="main" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-right-open"> 
      <xforms:label id="default10"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5"
      operation-owner="main" operation="loadAllPage" appearance="image-minimal" icon-class="icon-system-angle-double-right"> 
      <xforms:label id="default11"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="mainActivity2.inputSearchKeydown(event)"/>  
    <xforms:trigger id="searchTemplate" appearance="image" class="button-yellow" icon-class="icon-system-search"> 
      <xforms:label id="default4"><![CDATA[搜索]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[mainActivity2.trigger1Click(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6"
      operation-owner="resourceControl" operation="loadNextPage" icon-class="icon-system-right-open"
      appearance="image-minimal"> 
      <xforms:label id="default12"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger7"
      operation-owner="resourceControl" operation="loadAllPage" icon-class="icon-system-angle-double-right"
      appearance="image-minimal"> 
      <xforms:label id="default13"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xhtml:input type="text" value="" id="inputSearch3" class="xui-input" onkeydown="mainActivity2.inputSearch3Keydown(event)"/>  
    <xforms:trigger id="trigger10" appearance="image" icon-class="icon-system-search"
      class="button-yellow"> 
      <xforms:label id="default40"><![CDATA[搜索]]></xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5"><![CDATA[mainActivity2.trigger10Click(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/menuButton.xbl.xml#menuButton" id="menuButton2" label="更多操作"> 
      <menuitem id="enabledTemplate" label="启用" name="enabledTemplate" icon-class="icon-system-lock-open" onClick="mainActivity2.enabledTemplateClick"/>  
      <menuitem id="disabledTemplate" label="禁用" name="disabledTemplate" icon-class="icon-system-lock"  separator="true" onClick="mainActivity2.disabledTemplateClick"/>  
      <menuitem id="deleteTemplate" label="删除" name="deleteTemplate" icon-class="icon-system-minus" onClick="mainActivity2.deleteTemplateClick"/>
    </xhtml:div>  
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity2.js"/> 
  </xui:resource> 
</xui:window>
