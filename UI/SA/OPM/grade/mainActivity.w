<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:108px;left:388px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dOrgTree" concept="SA_OPOrg" is-tree="true" limit="-1" onIndexChanged="mainActivity.dOrgTreeIndexChanged" onAfterRefresh="mainActivity.dOrgTreeAfterRefresh" confirm-refresh="false"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="sParent is null" node-kind-relation="sNodeKind"/>  
      <filter name="filterValidState" id="filter1">SA_OPOrg.sValidState = 1</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dManagement" concept="SA_OPManagement" confirm-refresh="false" limit="20"> 
      <reader id="default2" action="/SA/OPM/logic/action/queryOPManagementAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation1"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/>  
      <filter name="filterManageType" id="filter2">SA_OPManagement.sManageTypeID = 'systemManagement'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dRoleManagement" concept="SA_OPRoleManagement" limit="20"> 
      <reader id="default3" action="/SA/OPM/logic/action/queryOPRoleManagementAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation3"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation4"/> 
    </data>  
    <xforms:action id="action6" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript6">mainActivity.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <center id="borderLayout-center1"> 
          <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="25%" mode="horz" has-drag-bar="true" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="width:100%;height:100%;;"> 
            <xhtml:div region="left" id="div1"> 
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="height:100%;margin-right:2px;margin-left:2px;width:auto;"> 
                <top size="35px" id="borderLayout-top1"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4"> 
                    <xhtml:input type="text" value="" id="inputSearchOrg" class="xui-input" onkeydown="mainActivity.inputSearchOrgKeydown(event)" style="width:100px;;"/>  
                    <xui:place control="imageSearchOrg" id="controlPlace5" style="height:25px;width:25px;"/> 
                  </xhtml:div> 
                </top>  
                <center id="borderLayout-center2"> 
                  <xui:place control="gridOrgTree" id="controlPlace1" style="height:100%;width:100%;border:none;"/> 
                </center> 
              </xhtml:div> 
            </xhtml:div>  
            <xhtml:div region="right" id="div2"> 
              <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="50%" mode="vert" id="VSplitter1" class="xui-splitter" style="height:100%;width:100%;" has-arrow-button="true"> 
                <xhtml:div region="top" id="div3"> 
                  <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout4" style="height:100%;margin-right:2px;margin-left:2px;width:auto;"> 
                    <top size="35px" id="borderLayout-top3"> 
                      <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar4" separator-size="8" style="float:left;margin-left:5px;"> 
                        <xui:place control="btnInsertManagements" id="controlPlace15" style="width:80px;"/>
                        <xui:place control="btnDeleteManagements" id="controlPlace16"/>  
                        <xui:place control="btnNextPageManagement" id="controlPlace17"/>  
                        <xui:place control="btnAllPageManagement" id="controlPlace18"/>  
                        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar6" separator-size="2" style="margin:0px 0px 0px 20px;">
                          <xhtml:input type="checkbox" value="" name="" id="cbShowInherited" checked="true" onclick="mainActivity.cbShowInheritedClick(event)"/>  
                          <xhtml:label id="label222" class="xui-label" for="cbShowInherited">显示继承</xhtml:label>
                        </xhtml:div>
                      </xhtml:div>  
                      <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar5" style="float:right;margin-right:5px;" separator-size="4">
                        <xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="mainActivity.inputSearchKeydown(event)" style="width:100px;;"/>  
                        <xui:place control="imageSearch" id="controlPlace6" style="height:25px;width:25px;"/>
                      </xhtml:div>
                    </top>  
                    <center id="borderLayout-center4"> 
                      <xui:place control="gridManagement" id="controlPlace3" style="height:100%;width:100%;"/> 
                    </center> 
                  </xhtml:div> 
                </xhtml:div>  
                <xhtml:div region="bottom" id="div4"> 
                  <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout3" style="height:100%;margin-right:2px;margin-left:2px;width:auto;"> 
                    <top size="35px" id="borderLayout-top2"> 
                      <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="8" style="float:left;margin-left:5px;"> 
                        <xui:place control="btnInsertRoleManagements" id="controlPlace8" style="width:80px;"/>  
                        <xui:place control="btnDeleteRoleManagements" id="controlPlace11"/>  
                        <xui:place control="btnNextPageRole" id="controlPlace13"/>  
                        <xui:place control="btnAllPageRole" id="controlPlace14"/>  
                        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar7" style="margin:0px 0px 0px 20px;" separator-size="2">
                          <xhtml:input type="checkbox" value="" name="" id="cbShowInheritedRole" checked="true" onclick="mainActivity.cbShowInheritedRoleClick(event)"/>  
                          <xhtml:label id="label1" class="xui-label" for="cbShowInheritedRole" style="white-space:nowrap;float:left;;">显示继承</xhtml:label>
                        </xhtml:div>
                      </xhtml:div>  
                      <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="4" style="float:right;margin-right:5px;"> 
                        <xhtml:input type="text" value="" id="inputSearchRole" class="xui-input" onkeydown="mainActivity.inputSearchRoleKeydown(event)" style="width:100px;;"/>  
                        <xui:place control="imageSearchRole" id="controlPlace12" style="height:25px;width:25px;"/> 
                      </xhtml:div> 
                    </top>  
                    <center id="borderLayout-center3"> 
                      <xui:place control="gridRoleManagement" id="controlPlace7" style="height:100%;width:100%;"/> 
                    </center> 
                  </xhtml:div> 
                </xhtml:div> 
              </xhtml:div> 
            </xhtml:div> 
          </xhtml:div> 
        </center>  
        <bottom size="30px" id="borderLayout-bottom1"> 
          <xhtml:input type="checkbox" value="" name="" id="cbOnlyShowValidOrg" onclick="mainActivity.cbOnlyShowValidOrgClick(event)" style="float:left;padding:0px 0px 0px 0px;margin:8px 5px 0px 5px;"/>  
          <xhtml:label id="label3" class="xui-label" for="cbOnlyShowValidOrg" style="float:left;line-height:29px;">只显示设置过的组织</xhtml:label> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="wdSelectRoles" id="controlPlace4" style="top:209px;left:300px;"/>  
      <xui:place control="wdSearchOrg" id="controlPlace9" style="top:195px;left:83px;"/>  
      <xui:place control="wdSelectOrgs" id="controlPlace10" style="position:absolute;top:210px;left:253px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridOrgTree" data="dOrgTree" appearance="tree" onShowNodeImg="mainActivity.gridOrgTreeShowNodeImg" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn1" ref="sName" label="名称" type="tree" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridManagement" data="dManagement" onRowValueChanged="mainActivity.gridManagementRowValueChanged" class="grid-compact" header-row-height="30" row-height="30" space-column="false"> 
      <xui:column id="gridColumn4" ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn3" ref="calcIndex" label="序号" type="ro" width="30px" show-index="true"/>  
      <xui:column id="gridColumn5" ref="manageOrgKindID" label="类型" type="html" width="30px" onRender="mainActivity.gridManagementManageOrgKindIDRender" align="center"/>  
      <xui:column id="gridColumn2" ref="sManageOrgFName" label="管理的组织" type="ro" width="*"/>  
      <xui:column id="gridColumn7" ref="sOrgFName" label="所属组织" type="ro" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridRoleManagement" data="dRoleManagement" onRowValueChanged="mainActivity.gridRoleManagementRowValueChanged" class="grid-compact" header-row-height="30" row-height="30" space-column="false"> 
      <xui:column id="gridColumn6" ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn8" ref="calcIndex" label="序号" type="ro" width="30px" show-index="true"/>  
      <xui:column id="gridColumn10" ref="roleName" label="管理的角色" type="ro" width="*"/>  
      <xui:column id="gridColumn9" ref="sOrgFName" label="所属组织" type="ro" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择管理的角色" width="646px" height="414px" modal="true" id="wdSelectRoles" url="/SA/OPM/dialogs/selectMultiRoles/selectMultiRoles.w" onReceive="mainActivity.wdSelectRolesReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="组织搜索" width="596px" height="214px" modal="false" id="wdSearchOrg" url="/SA/OPM/dialogs/searchOrg/searchOrg.w" resizable="true" minmaxable="true" onReceive="mainActivity.wdSearchOrgReceive" neighbor="imageSearchOrg" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/orgDialog.xbl.xml#orgDialog" title="选择管理的组织" width="600px" height="500px" modal="true" root-filter="SA_OPOrg.sParent is null" id="wdSelectOrgs" multi-select="true" cascade="false" onReceive="mainActivity.wdSelectOrgsReceive"/>  
    <xforms:trigger id="imageSearchOrg" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel5">搜索</xforms:label>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5">mainActivity.imageSearchOrgClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnInsertRoleManagements" appearance="image-text" image-text-mode="LR" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel3"><![CDATA[分配角色]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3">mainActivity.btnInsertRoleManagementsClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnDeleteRoleManagements" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus"> 
      <xforms:label id="xuiLabel4">删除</xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4">mainActivity.btnDeleteRoleManagementsClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="imageSearchRole" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel7">搜索</xforms:label>  
      <xforms:action id="action8" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript8">mainActivity.imageSearchRoleClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPageRole" operation-owner="dRoleManagement" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-angle-right"> 
      <xforms:label id="default4"><![CDATA[下页]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPageRole" operation-owner="dRoleManagement" operation="loadAllPage" icon-class="icon-system-angle-double-right" appearance="image-minimal"> 
      <xforms:label id="default5"><![CDATA[全部]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger id="btnInsertManagements" appearance="image-text" image-text-mode="LR" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel1"><![CDATA[分配组织]]></xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript1">mainActivity.btnInsertManagementsClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnDeleteManagements" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus"> 
      <xforms:label id="xuiLabel2">删除</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript2">mainActivity.btnDeleteManagementsClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPageManagement" operation-owner="dManagement" appearance="image-minimal" icon-class="icon-system-angle-right" operation="loadNextPage"> 
      <xforms:label id="default7">下页</xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPageManagement" operation-owner="dManagement" icon-class="icon-system-angle-double-right" appearance="image-minimal" operation="loadAllPage"> 
      <xforms:label id="default6">全部</xforms:label> 
    </xforms:trigger>  
    <xforms:trigger id="imageSearch" appearance="image" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel6">搜索</xforms:label>  
      <xforms:action id="action7" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript7">mainActivity.imageSearchClick(event)</xforms:script>
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
