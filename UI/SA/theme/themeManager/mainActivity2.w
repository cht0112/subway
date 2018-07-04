<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:113px;height:auto;left:166px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="main" concept="Portal2ProfileManager"> 
      <reader id="default1" action="/portal2/logic/action/queryPortal2ProfileManagerAction"/>  
      <writer id="default2" action="/portal2/logic/action/savePortal2ProfileManagerAction"/>  
      <creator id="default3" action="/portal2/logic/action/createPortal2ProfileManagerAction"/>  
      <rule id="dataBizRule1" relation="sThemeID" required="true()" alert="'主题不能为空！'"/>  
      <rule id="dataBizRule2" relation="sOrgID" required="true()" alert="'组织不能为空！'"/> 
    </data>  
    <xforms:action id="action1" ev:event="onload">
      <xforms:script id="xformsScript1">mainActivity2.model1Load(event)</xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="view2"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="main" class="grid-compact"> 
        <xui:column id="gridColumn2" ref="sFName" label="组织" type="inputbtn" width="250px" onButtonClick="grid1SFNameButtonClick"/>  
        <xui:column id="gridColumn1" ref="sThemeName" label="主题" type="inputbtn" width="200px" align="center" onButtonClick="grid1SThemeNameButtonClick"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout2"> 
        <xui:place control="grid1" id="controlPlace4" style="width:100%;height:100%;"/>  
        <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" id="testsingleMulti" url="/UI/system/dialog/org/orgSingleTree.w" title="选择机构" modal="true" status="" width="496px" height="364px" initEveryTimes="true" minMaxAble="true" reSizeAble="true" autoSize="true" onReceive="singleMultiFromFreameValue" dialogUpdate="true"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="38px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1">
            <xui:place control="trigger1" id="controlPlace5"/>  
            <xui:place control="trigger2" id="controlPlace6"/>  
            <xui:place control="trigger3" id="controlPlace7"/>  
            <xui:place control="trigger4" id="controlPlace8"/>
          </xhtml:div>
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="view2" id="controlPlace2"/> 
        </center>
      </xhtml:div>
    </xui:layout>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" operation-owner="main" operation="new" appearance="image-text" class="button-blue"> 
      <xforms:label id="default4"><![CDATA[]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" appearance="image-minimal" operation-owner="main" operation="save"> 
      <xforms:label id="default5"><![CDATA[]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" appearance="image-minimal" operation-owner="main" operation="delete"> 
      <xforms:label id="default6"/>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" appearance="image-minimal" operation-owner="main" operation="refresh"> 
      <xforms:label id="default7"/>
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="mainActivity2.js"/>
  </xui:resource> 
</xui:window>
