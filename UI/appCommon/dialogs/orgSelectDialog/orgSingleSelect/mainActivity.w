<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:172px;left:213px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dOrgList" concept="SA_OPOrg"
      onIndexChanged="dOrgListIndexChanged" onAfterRefresh="dOrgListAfterRefresh"
      onAfterRefreshPage="dOrgListAfterRefreshPage"> 
      <reader id="default3" action="/appCommon/logic/action/orgSelectDialogQueryAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgTree" concept="SA_OPOrg" is-tree="true" offset="0"
      limit="-1" store-type="grid" onIndexChanged="dOrgTreeIndexChanged" onAfterRefresh="dOrgTreeAfterRefresh"
      onAfterRefreshPage="dOrgTreeAfterRefreshPage"> 
      <reader id="default6" action="/appCommon/logic/action/orgSelectDialogQueryAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="1=0" node-kind-relation="sNodeKind"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">model1XformsModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="35px" id="borderLayout-top1">
          <xui:place control="toolbars1" id="controlPlace3"/>
        </top>  
        <center id="borderLayout-center1">
          <xui:place control="gridTree" id="controlPlace1" style="width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;height:100%;"/>  
          <xui:place control="gridList" id="controlPlace8" style="width:100%;height:100%;"/>
        </center>  
        <bottom size="35px" id="borderLayout-bottom1">
          <xhtml:input type="button" value="取  消" id="btnCancel" onClick="cancelData();"
            class="xui-button" style="float:right;margin-top:5px;margin-right:8px;"/>  
          <xhtml:input type="button" value="确  定" id="btnOK" onClick="returnData();"
            class="xui-button" style="float:right;margin-top:5px;margin-right:8px;"/>
        </bottom>
      </xhtml:div>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="barItem1"> 
          <xhtml:input type="text" value="" id="inputSearch" style="width:100px;" class="xui-input"/>
        </item>  
        <item id="barItem2"> 
          <xhtml:div data="dOrgList" component="/UI/system/components/pageNavigator.xbl.xml#pageNavigator"
            id="pageNavigator" style="display: none;" page-count="0"/>
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridTree"
      data="dOrgTree" cascade="false" delay="false" appearance="tree" onRowDblClick="gridTreeRowDblClick"> 
      <xui:column id="gridColumn6" ref="sName" label="名称" type="tree" readonly="true"/>  
      <xui:column id="gridColumn5" ref="sOrgKindID" label="组织类型" type="ed" width="100"
        visible="false"/>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridList" data="dOrgList" onRowDblClick="gridListRowDblClick"> 
      <xui:column id="gridColumn4" ref="sOrgKindID" type="html" width="20" label=" "/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="80"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60"/>  
      <xui:column id="gridColumn3" ref="sFName" label="全路径名" type="ro"/>
    </xhtml:div>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="controller" src="../orgSelectDialogController.js"/>  
    <xhtml:script id="appCommon" src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script id="frameWindow" src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>
