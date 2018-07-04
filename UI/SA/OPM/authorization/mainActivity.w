<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:185px;left:333px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="dOrgTree" concept="SA_OPOrg" is-tree="true" limit="-1" onIndexChanged="mainActivity.dOrgTreeIndexChanged" onAfterRefresh="mainActivity.dOrgTreeAfterRefresh" confirm-refresh="false"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="sParent is null" node-kind-relation="sNodeKind"/>  
      <filter name="filterValidState" id="filter1">SA_OPOrg.sValidState = 1</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" limit="20" auto-load="false" id="dAuthorize" concept="SA_OPAuthorize" confirm-refresh="false"> 
      <reader id="default2" action="/SA/OPM/logic/action/queryOPAuthorizeAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation1"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAuthorizePermission" concept="SA_OPPermission" onRefreshCreateParam="mainActivity.dAuthorizePermissionRefreshCreateParam" confirm-refresh="false"> 
      <reader id="default3" action="/SA/OPM/logic/action/queryOPAuthorizePermissionByOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/> 
    </data>  
    <xforms:action id="action6" ev:event="onload"> 
      <xforms:script id="xformsScript6">mainActivity.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout" type="absolute"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="25%" mode="horz" has-drag-bar="true" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="height:100%;width:100%;position:absolute;"> 
        <xhtml:div region="left" id="div1"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:auto;height:100%;margin-right:2px;margin-left:2px;"> 
            <top size="35px" id="borderLayout-top1"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4"> 
                <xhtml:input type="text" value="" id="inputSearchOrg" class="xui-input" onkeydown="mainActivity.inputSearchOrgKeydown(event)" style="width:100px;;"/>  
                <xui:place control="imageSearchOrg" id="controlPlace4" style="height:25px;width:25px;"/> 
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="gridOrgTree" id="controlPlace1" style="border: none;height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div2"> 
          <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" class="xui-tabPanel xui-no-border" style="height:100%;margin-right:2px;margin-left:2px;width:auto;"> 
            <xui:tab id="tabAuthorize"> 
              <xui:label id="xuiLabel3"><![CDATA[角色分配]]></xui:label>  
              <xforms:action id="action3" ev:event="xforms-select"> 
                <xforms:script id="xformsScript3">mainActivity.tabAuthorizeSelect(event)</xforms:script> 
              </xforms:action>  
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
                <top size="35px" id="borderLayout-top2"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar4" separator-size="8" style="margin-left:5px;float:left;">
                    <xui:place control="btnInsertAuthorize" id="controlPlace11"/>  
                    <xui:place control="btnDeleteAuthorize" id="controlPlace12"/>  
                    <xui:place control="btnNextPageAuthorize" id="controlPlace13"/>  
                    <xui:place control="trigger4" id="controlPlace14"/>  
                    <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar6" separator-size="2" style="margin:0px 0px 0px 20px;">
                      <xhtml:input type="checkbox" name="" id="cbShowInheritedAuthorize" onclick="mainActivity.cbShowInheritedAuthorizeClick(event)" checked="true"/>  
                      <xhtml:label id="label1" class="xui-label" for="cbShowInheritedAuthorize">显示从上级继承的角色</xhtml:label>
                    </xhtml:div>
                  </xhtml:div>  
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar5" separator-size="4" style="float:right;margin-right:5px;">
                    <xhtml:input type="text" value="" id="inputSearchAuthorize" class="xui-input" onkeydown="mainActivity.inputSearchAuthorizeKeydown(event)" style="width:100px;;"/>  
                    <xui:place control="imageSearchAuthorize" id="controlPlace15" style="height:25px;width:25px;"/>
                  </xhtml:div>
                </top>  
                <center id="borderLayout-center2"> 
                  <xui:place control="gridAuthorize" id="controlPlace3" style="height:100%;width:100%;"/> 
                </center> 
              </xhtml:div> 
            </xui:tab>  
            <xui:tab id="tabPermission"> 
              <xui:label id="xuiLabel4"><![CDATA[权限查询]]></xui:label>  
              <xforms:action id="action4" ev:event="xforms-select"> 
                <xforms:script id="xformsScript4">mainActivity.tabPermissionSelect(event)</xforms:script> 
              </xforms:action>  
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout3" style=" height: 100%;position:absolute;top:nullpx;left:nullpx;width:100%;"> 
                <top size="35px" id="borderLayout-top3"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float:left;margin-left:5px;" separator-size="8"> 
                    <xui:place control="btnNextPagePermission" id="controlPlace7"/>
                    <xui:place control="btnAllPagePermission" id="controlPlace9"/>
                    <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar7" separator-size="2" style="margin:0px 0px 0px 20px;">
                      <xhtml:input type="checkbox" value="" name="" id="cbShowInheritedPermission" checked="true" onclick="mainActivity.cbShowInheritedPermissionClick(event)"/>  
                      <xhtml:label id="label2" class="xui-label" for="cbShowInheritedPermission">显示从上级继承的权限</xhtml:label>
                    </xhtml:div>
                  </xhtml:div>  
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" style="margin-right:5px;float:right;" separator-size="4">
                    <xhtml:input type="text" value="" id="inputSearchPermission" class="xui-input" onkeydown="mainActivity.inputSearchPermissionKeydown(event)" style="width:100px;;"/>  
                    <xui:place control="imageSearchPermission" id="controlPlace10" style="height:25px;width:25px;"/>
                  </xhtml:div> 
                </top>  
                <center id="borderLayout-center3"> 
                  <xui:place control="gridAuthorizePermission" id="controlPlace5" style="height:100%;width:100%;"/> 
                </center> 
              </xhtml:div> 
            </xui:tab> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <xui:place control="wdSelectRoles" id="controlPlace6" style="position:absolute;top:185px;left:191px;"/>  
      <xui:place control="wdSearchOrg" id="controlPlace8" style="position:absolute;top:185px;left:148px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridOrgTree" data="dOrgTree" appearance="tree" onShowNodeImg="mainActivity.gridOrgTreeShowNodeImg" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn10" ref="sName" label="名称" type="tree" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择角色" width="646px" height="414px" modal="true" id="wdSelectRoles" url="/SA/OPM/dialogs/selectMultiRoles/selectMultiRoles.w" onReceive="mainActivity.wdSelectRolesReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="组织搜索" width="596px" height="214px" modal="false" id="wdSearchOrg" url="/SA/OPM/dialogs/searchOrg/searchOrg.w" neighbor="imageSearchOrg" onReceive="mainActivity.wdSearchOrgReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridAuthorize" data="dAuthorize" onRowValueChanged="mainActivity.gridAuthorizeRowValueChanged" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center" id="gridColumn11"/>  
      <xui:column ref="calcIndex" label="序号" type="ro" width="30px" align="center" show-index="true" id="gridColumn12"/>  
      <xui:column id="gridColumn1" ref="roleRoleKind" label="类型" type="html" width="30px" onRender="mainActivity.gridAuthorizeRoleRoleKindRender" align="center" sort-datatype="str"/>  
      <xui:column id="gridColumn2" ref="roleName" label="角色" type="ro" width="120px" sort-datatype="str"/>  
      <xui:column id="gridColumn3" ref="roleCatalog" label="角色分类" type="ro" width="80px" sort-datatype="str"/>  
      <xui:column id="gridColumn4" ref="roleParentRolesNames" label="父角色" type="ro" width="120px" sort-datatype="str"/>  
      <xui:column id="gridColumn5" ref="sOrgFName" label="授权组织" type="ro" width="350px" sort-datatype="str"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridAuthorizePermission" data="dAuthorizePermission" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column ref="calcIndex" label="序号" type="ro" width="30px" align="center" show-index="true" id="gridColumn13"/>  
      <xui:column id="gridColumn8" ref="sPermissionKind" label="类型" type="html" width="30px" onRender="mainActivity.gridAuthorizePermissionSPermissionKindRender" align="center" sort-datatype="str"/>  
      <xui:column id="gridColumn6" ref="sActivityFName" label="功能权限" type="ro" width="350px" sort-datatype="str"/>  
      <xui:column id="gridColumn7" ref="actionsLabel" label="动作策略/数据策略" type="ro" width="200px"/>  
      <xui:column id="gridColumn9" ref="roleName" label="角色" type="ro" width="100px" sort-datatype="str"/> 
    </xhtml:div>  
    <xforms:trigger id="imageSearchOrg" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel5">搜索</xforms:label>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5">mainActivity.imageSearchOrgClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPagePermission" operation-owner="dAuthorizePermission" operation="loadNextPage" icon-class="icon-system-angle-right" appearance="image-minimal"> 
      <xforms:label id="default4"><![CDATA[下页]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPagePermission" operation-owner="dAuthorizePermission" operation="loadAllPage" icon-class="icon-system-angle-double-right" appearance="image-minimal"> 
      <xforms:label id="default5"><![CDATA[全部]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger id="imageSearchPermission" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel7">搜索</xforms:label>  
      <xforms:action id="action8" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript8">mainActivity.imageSearchPermissionClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnInsertAuthorize" appearance="image-text" image-text-mode="LR" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel1">分配</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript1">mainActivity.btnInsertAuthorizeClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnDeleteAuthorize" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus"> 
      <xforms:label id="xuiLabel2">删除</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript2">mainActivity.btnDeleteAuthorizeClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPageAuthorize" operation-owner="dAuthorize" operation="loadNextPage" icon-class="icon-system-angle-right" appearance="image-minimal"> 
      <xforms:label id="default6"><![CDATA[下页]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" operation-owner="dAuthorize" operation="loadAllPage" appearance="image-minimal" icon-class="icon-system-angle-double-right"> 
      <xforms:label id="default7"><![CDATA[全部]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger id="imageSearchAuthorize" appearance="image" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel6">搜索</xforms:label>  
      <xforms:action id="action7" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript7">mainActivity.imageSearchAuthorizeClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  	<xhtml:script id="htmlScript2" src="/UI/system/service/org/orgUtils.js"></xhtml:script>
  </xui:resource> 
</xui:window>
