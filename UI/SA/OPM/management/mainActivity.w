<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:108px;left:388px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="dOrgTree" concept="SA_OPOrg" is-tree="true" limit="-1" onIndexChanged="mainActivity.dOrgTreeIndexChanged" onAfterRefresh="mainActivity.dOrgTreeAfterRefresh" confirm-refresh="false"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="sParent is null" node-kind-relation="sNodeKind"/>  
      <filter name="filterValidState" id="filter1">SA_OPOrg.sValidState = 1</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dManagement" concept="SA_OPManagement" confirm-refresh="false"> 
      <reader id="default2" action="/SA/OPM/logic/action/queryOPManagementAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation1"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/> 
    </data>  
    <xforms:action id="action3" ev:event="onload"> 
      <xforms:script id="xformsScript3">mainActivity.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="25%" mode="horz" has-drag-bar="true" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="height:100%;width:100%;"> 
        <xhtml:div region="left" id="div1"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:auto;height:100%;margin-right:2px;margin-left:2px;"> 
            <top size="35px" id="borderLayout-top1"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4">
                <xhtml:input type="text" value="" id="inputSearchOrg" class="xui-input" onkeydown="mainActivity.inputSearchOrgKeydown(event)" style="width:100px;;"/>  
                <xui:place control="imageSearchOrg" id="controlPlace5" style="height:25px;width:25px;"/>
              </xhtml:div>
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="gridOrgTree" id="controlPlace1" style="height:100%;width:100%;border:none;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div2"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:auto;height:100%;margin-right:2px;margin-left:2px;"> 
            <top size="35px" id="borderLayout-top2"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="8" style="margin-left:5px;float:left;">
                <xui:place control="btnInsertManagement" id="controlPlace6"/>  
                <xui:place control="btnDeleteManagement" id="controlPlace9"/>  
                <xui:place control="btnNextPage" id="controlPlace10"/>  
                <xui:place control="btnAllPage" id="controlPlace11"/>  
                <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar4" separator-size="2" style="margin:0px 0px 0px 20px;">
                  <xhtml:input type="checkbox" value="" name="" id="cbShowInherited" onclick="mainActivity.cbShowInheritedClick(event)" checked="true"/>  
                  <xhtml:label id="label1" class="xui-label" for="cbShowInherited">显示继承</xhtml:label>
                </xhtml:div>
              </xhtml:div>  
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="4" style="margin-right:5px;float:right;">
                <xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="mainActivity.inputSearchKeydown(event)" style="width:100px;;"/>  
                <xui:place control="imageSearch" id="controlPlace12" style="height:25px;width:25px;"/>
              </xhtml:div>
            </top>  
            <center id="borderLayout-center2"> 
              <xui:place control="gridManagement" id="controlPlace3" style="height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <xui:place control="wdSearchOrg" id="controlPlace7" style="top:204px;left:271px;"/>  
      <xui:place control="wdSelectManageType" id="controlPlace4" style="top:202px;left:333px;"/>  
      <xui:place control="wdSelectOrgs" id="controlPlace8" style="position:absolute;left:215px;top:206px;"/>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridOrgTree" data="dOrgTree" appearance="tree" onShowNodeImg="mainActivity.gridOrgTreeShowNodeImg" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn1" ref="sName" label="名称" type="tree" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="组织搜索" width="596px" height="214px" modal="false" id="wdSearchOrg" url="/SA/OPM/dialogs/searchOrg/searchOrg.w" neighbor="imageSearchOrg" onReceive="mainActivity.wdSearchOrgReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择业务管理类型" width="396px" height="414px" modal="true" id="wdSelectManageType" url="/SA/OPM/dialogs/selectManageType/selectManageType.w" onReceive="mainActivity.wdSelectManageTypeReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridManagement" data="dManagement" onRowValueChanged="mainActivity.gridManagementRowValueChanged" class="grid-compact" header-row-height="30" row-height="30" space-column="false"> 
      <xui:column id="gridColumn4" ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn3" ref="calcIndex" label="序号" type="ro" width="30px" show-index="true"/>  
      <xui:column id="gridColumn5" ref="manageOrgKindID" label="类型" type="html" width="30px" onRender="mainActivity.gridManagementManageOrgKindIDRender" align="center"/>  
      <xui:column id="gridColumn6" ref="manageTypeName" label="业务管理类型" type="ro" width="100px"/>  
      <xui:column id="gridColumn2" ref="sManageOrgFName" label="下级从属组织" type="ro" width="*"/>  
      <xui:column id="gridColumn7" ref="sOrgFName" label="所属组织" type="ro" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/orgDialog.xbl.xml#orgDialog" title="选择管理的组织" width="600px" height="500px" modal="true" root-filter="SA_OPOrg.sParent is null" id="wdSelectOrgs" onReceive="mainActivity.wdSelectOrgsReceive" multi-select="true" cascade="false"/>  
    <xforms:trigger id="imageSearchOrg" appearance="image" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel3">搜索</xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4">mainActivity.imageSearchOrgClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnInsertManagement" appearance="image-text" image-text-mode="LR" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel1">分配</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript1">mainActivity.btnInsertManagementClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnDeleteManagement" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus"> 
      <xforms:label id="xuiLabel2">删除</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript2">mainActivity.btnDeleteManagementClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPage" operation-owner="dManagement" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-angle-right"> 
      <xforms:label id="default3"><![CDATA[下页]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPage" operation-owner="dManagement" operation="loadAllPage" appearance="image-minimal" icon-class="icon-system-angle-double-right"> 
      <xforms:label id="default4"><![CDATA[全部]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel4">搜索</xforms:label>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5">mainActivity.imageSearchClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/>  
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  	<xhtml:script id="htmlScript2" src="/UI/system/service/org/orgUtils.js"></xhtml:script>
  </xui:resource> 
</xui:window>
