<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:131px;left:150px;"> 
    <data id="dRole" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPRole" offset="1" limit="-1" load-data-when-init="true" auto-load="false" onAfterRefresh="mainActivity.dRoleAfterRefresh" onIndexChanged="mainActivity.dRoleIndexChanged" onAfterRefreshPage="mainActivity.dRoleAfterRefreshPage" confirm-refresh="false"> 
      <xui:reader action="/SA/OPM/logic/action/queryOPRoleAction"/>  
      <xui:writer/>  
      <xui:creator/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation1"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/> 
    </data>  
    <data id="dPermission" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPPermission" offset="1" limit="20" order-by="" is-tree="false" auto-load="false" auto-new="false" onRefreshCreateParam="mainActivity.funPermissionRefreshCreateParam" confirm-refresh="false"> 
      <xui:reader action="/SA/OPM/logic/action/queryOPPermissionByRoleAction"/>  
      <xui:writer/>  
      <xui:creator/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation2"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation4"/> 
    </data>  
    <!-- 
     -->  
    <xforms:action id="action4" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mainActivity.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="45%" mode="horz" has-drag-bar="true" has-arrow-button="true" id="HSplitter2" style="width:100%;height:100%;"> 
        <xhtml:div region="left" id="div9"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:auto;height:100%;margin-right:2px;margin-left:2px;"> 
            <top size="35px" id="borderLayout-top1" style="overflow:hidden;"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="8" style="float:left;"> 
                <xui:place control="btnInsertRole" id="controlPlace4"/>  
                <xui:place control="btnEditRole" id="controlPlace9"/>  
                <xui:place control="menuButton1" id="controlPlace14"/> 
              </xhtml:div>  
              <xhtml:div component="/UI/system/components/menu.xbl.xml#menu" appearance="context" open-mode="win" menu-id="newRolesMenu" style="display: none;" class="xui-container" id="div1"> 
                <xui:menuitem id="newFunRole" label="新建功能角色" img="/UI/SA/OPM/images/funRole.gif" dis-img="/UI/SA/OPM/images/un_funRole.gif" disabled="false"/>  
                <xui:menuitem id="newDataRole" label="新建数据角色" img="/UI/SA/OPM/images/dataRole.gif" dis-img="/UI/SA/OPM/images/un_dataRole.gif" disabled="false"/>  
                <xforms:action ev:event="DOMActivate" id="action1"> 
                  <xforms:script id="xformsScript2">mainActivity.newRolesMenuClick(event)</xforms:script> 
                </xforms:action> 
              </xhtml:div>  
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float:right;margin-right:5px;" separator-size="2"> 
                <xhtml:input type="text" value="" id="inputSearchRole" class="xui-input" onkeydown="mainActivity.inputSearchRoleKeydown(event)" style="width:80px;"/>  
                <xui:place control="imageSearchRole" id="controlPlace18" style="height:25px;width:25px;"/> 
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="gridRole" id="controlPlace1" style="width:100%;height:100%;"/> 
            </center>  
            <bottom size="30px" id="borderLayout-bottom1"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="2">
                <xhtml:input type="checkbox" value="" name="" id="cbShowDisabledRole" onclick="mainActivity.cbShowDisabledRoleClick(event)" style="float:left;;"/>  
                <xhtml:label id="label1" class="xui-label" for="cbShowDisabledRole">显示禁用的角色</xhtml:label>
              </xhtml:div>
            </bottom> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div11"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:auto;height:100%;margin-right:2px;margin-left:2px;"> 
            <top size="35px" id="borderLayout-top2" style="overflow:hidden;"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar4" separator-size="8" style="float:left;margin-left:5px;"> 
                <xui:place control="btnInsertPermission" id="controlPlace20" style="width:82px;"/>  
                <xui:place control="btnDeletePermission" id="controlPlace5"/>  
                <xui:place control="btnNextPagePermission" id="controlPlace21"/>  
                <xui:place control="btnAllPagePermission" id="controlPlace8"/> 
              </xhtml:div>  
              <xhtml:div component="/UI/system/components/menu.xbl.xml#menu" appearance="context" open-mode="win" menu-id="newPermissionsMenu" style="display: none;" class="xui-container" id="div2"> 
                <xui:menuitem id="newFunPermission" label="分配功能权限" img="/UI/SA/OPM/images/funPermission.gif" dis-img="/UI/SA/OPM/images/un_funPermission.gif" disabled="false"/>  
                <xui:menuitem id="newDataPermission" label="分配数据权限" img="/UI/SA/OPM/images/dataPermission.gif" dis-img="/UI/SA/OPM/images/un_dataPermission.gif" disabled="false"/>  
                <xforms:action ev:event="DOMActivate" id="action11"> 
                  <xforms:script id="xformsScript11">mainActivity.newPermissionsMenuClick(event)</xforms:script> 
                </xforms:action> 
              </xhtml:div>  
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar5" separator-size="2" style="float:right;margin-right:5px;"> 
                <xhtml:input type="text" value="" id="inputSearchPermission" class="xui-input" onkeydown="mainActivity.inputSearchPermissionKeydown(event)" style="width:80px;"/>  
                <xui:place control="imageSearchPermission" id="controlPlace23" style="height:25px;width:25px;"/> 
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="gridPermission" style="width:100%;height:100%;" id="controlPlace2"/> 
            </center>  
            <bottom size="30px" id="borderLayout-bottom2"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar6" separator-size="2" style="float:right;">
                <xhtml:input type="checkbox" value="" name="" id="cbShowInheritedPermission" checked="true" onclick="mainActivity.cbShowInheritedPermissionClick(event)"/>  
                <xhtml:label id="label2" class="xui-label" for="cbShowInheritedPermission">显示从父角色继承的权限</xhtml:label>
              </xhtml:div>
            </bottom> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <xui:place control="wdRoleDetail" id="controlPlace11" style="top:231px;left:254px;"/>  
      <xui:place control="wdDataPermissionDetail" id="controlPlace7" style="top:231px;left:406px;"/>  
      <xui:place control="wdSelectFunTree" id="controlPlace3" style="top:231px;left:305px;"/>  
      <xui:place control="wdselectProtectedActions" id="controlPlace6" style="top:231px;left:356px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridRole" data="dRole" onRowDblClick="mainActivity.gridRoleRowDblClick" edit-mode="false" header-row-height="30" class="grid-compact" smart-render="20" row-height="30"> 
      <xui:column width="30px" label="#master_checkbox" type="ch" align="center" ref="calcCheckBox" id="gridColumn8"/>  
      <xui:column id="gridColumn3" ref="calcIndex" type="ro" width="30px" align="center" show-index="true" label="序号"/>  
      <column ref="sRoleKind" type="html" width="30px" align="center" readonly="true" onRender="mainActivity.gridRoleSRoleKindRender" id="gridColumn9" label="类型"/>  
      <xui:column id="gridColumn1" ref="sName" label="角色名称" type="ro" width="200px"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60px"/>  
      <xui:column id="gridColumn4" ref="sCatalog" label="分类" type="ro" width="80px"/>  
      <xui:column id="gridColumn5" ref="sParentRolesNames" label="父角色" type="ro" width="120px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridPermission" data="dPermission" edit-mode="true" onRowValueChanged="mainActivity.gridPermissionRowValueChanged" row-height="30" header-row-height="30" class="grid-compact" smart-render="20"> 
      <xui:column width="30px" ref="calcCheckBox" label="#master_checkbox" type="ch" align="center" id="gridColumn10"/>  
      <xui:column id="gridColumn7" ref="calcIndex" type="ro" width="30px" align="center" show-index="true" label="序号"/>  
      <xui:column id="gridColumn6" ref="sPermissionKind" type="html" width="30px" align="center" onRender="mainActivity.gridPermissionSPermissionKindRender" label="类型"/>  
      <xui:column width="300px" ref="sActivityFName" label="业务功能" type="ro" id="gridColumn11"/>  
      <column ref="actionsLabel" label="动作策略/数据策略" type="outputbtn" width="120px" align="left" readonly="false" id="gridColumn12" onButtonClick="mainActivity.gridPermission_actionsLabelButtonClick"/>  
      <column ref="roleName" label="所属角色" type="ro" width="100px" id="gridColumn13"/>  
      <column ref="actionPolicyNames" label="动作策略Names" type="ro" width="60px" visible="false" id="gridColumn14"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="角色" width="536px" height="328px" modal="true" id="wdRoleDetail" url="/SA/OPM/role/roleDetail.w" onReceive="mainActivity.wdRoleDetailReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="数据权限" width="746px" height="414px" modal="true" id="wdDataPermissionDetail" url="/SA/OPM/role/dataPermissionDetail.w" onReceive="mainActivity.wdDataPermissionDetailReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择功能" width="396px" height="414px" modal="true" id="wdSelectFunTree" url="/SA/OPM/dialogs/selectFunTree/selectMultiFunctions.w" onReceive="mainActivity.wdSelectFunTreeReceive" resizable="true" minmaxable="true" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="动作策略" width="376px" height="314px" modal="true" id="wdselectProtectedActions" url="/SA/OPM/dialogs/selectProtectedActions/selectProtectedActions.w" onReceive="mainActivity.wdselectProtectedActionsReceive" dialogUpdate="true"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnInsertRole" class="button-blue" icon-class="icon-system-plus" appearance="image-text"> 
      <xforms:label id="default1"><![CDATA[新建]]></xforms:label>  
      <xforms:action id="action10" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript12"><![CDATA[mainActivity.btnInsertRoleClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/menuButton.xbl.xml#menuButton" id="menuButton1" label="更多操作"> 
      <menuitem id="menuitem4" label="启用" name="menuEnable" icon-class="icon-system-lock-open" onClick="mainActivity.btnEnableRolesClick"/>  
      <menuitem id="menuitem5" label="禁用" name="menuDisable" icon-class="icon-system-lock" onClick="mainActivity.btnDisableRolesClick" separator="true"/>  
      <menuitem id="menuDeleteRole" label="删除" name="menuDeleteRole" icon-class="icon-system-minus" onClick="mainActivity.btnDeleteRoleClick"/>
    </xhtml:div>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnEditRole" appearance="image-minimal" icon-class="icon-system-edit-alt"> 
      <xforms:label id="default5"><![CDATA[编辑]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4"><![CDATA[mainActivity.btnEditRoleClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="imageSearchRole" appearance="image" class="button-yellow" icon-class="icon-system-search"> 
      <xforms:label id="default7">trigger</xforms:label>  
      <xforms:action id="action14" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript15"><![CDATA[mainActivity.imageSearchRoleClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnInsertPermission" class="button-blue" icon-class="icon-system-plus" appearance="image-text"> 
      <xforms:label id="default10"><![CDATA[分配权限]]></xforms:label>  
      <xforms:action id="action15" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript16">mainActivity.btnInsertPermissionClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPagePermission" operation-owner="dPermission" appearance="image-minimal" operation="loadNextPage" icon-class="icon-system-angle-right"> 
      <xforms:label id="default9"><![CDATA[下页]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="imageSearchPermission" appearance="image" class="button-yellow" icon-class="icon-system-search"> 
      <xforms:label id="default11">trigger</xforms:label>  
      <xforms:action id="action16" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript17">mainActivity.imageSearchPermissionClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnDeletePermission" appearance="image-minimal" icon-class="icon-system-minus"> 
      <xforms:label id="default2"><![CDATA[删除]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3"><![CDATA[mainActivity.deletePermissionClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPagePermission" operation-owner="dPermission" operation="loadAllPage" appearance="image-minimal" icon-class="icon-system-angle-double-right"> 
      <xforms:label id="default3"><![CDATA[全部]]></xforms:label> 
    </xforms:trigger> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="mainActivity.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  </xui:resource> 
</xui:window>
