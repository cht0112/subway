<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:131px;left:150px;"> 
    <data id="dRole" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_OPRole" offset="1" limit="20" load-data-when-init="true" auto-load="false"
      onAfterRefresh="mainActivity.dRoleAfterRefresh" onIndexChanged="mainActivity.dRoleIndexChanged"
      onAfterRefreshPage="mainActivity.dRoleAfterRefreshPage" confirm-refresh="false"> 
      <xui:reader action="/SA/OPM/logic/action/queryOPRoleAction"/>  
      <xui:writer/>  
      <xui:creator/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation1"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/> 
    </data>  
    <data id="dPermission" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_OPPermission" offset="1" limit="20" order-by="" is-tree="false"
      auto-load="false" auto-new="false" onRefreshCreateParam="mainActivity.funPermissionRefreshCreateParam"
      confirm-refresh="false"> 
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
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="45%"
        mode="horz" has-drag-bar="true" has-arrow-button="true" id="HSplitter2" style="width:100%;height:100%;"> 
        <xhtml:div region="left" id="div9"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:auto;height:100%;margin-right:2px;margin-left:2px;"> 
            <top size="70px" id="borderLayout-top1"> 
              <xui:place control="toolbars3" id="controlPlace9" style="height:35px;"/>  
              <xui:place control="toolbars1" id="controlPlace5"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="gridRole" id="controlPlace1" style="width:100%;height:100%;"/> 
            </center>  
            <bottom size="30px" id="borderLayout-bottom1"> 
              <xhtml:input type="checkbox" value="" name="" id="cbShowDisabledRole"
                onclick="mainActivity.cbShowDisabledRoleClick(event)" style="float:left;padding:0px 0px 0px 0px;margin:8px 5px 0px 8px;"/>  
              <xhtml:label id="label1" class="xui-label" for="cbShowDisabledRole" style="float:left;line-height:29px;">显示禁用的角色</xhtml:label> 
            </bottom> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div11"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:auto;height:100%;margin-right:2px;margin-left:2px;"> 
            <top size="70px" id="borderLayout-top2"> 
              <xui:place control="toolbars4" id="controlPlace10" style="height:35px;"/>
              <place control="toolbars2" id="controlPlace8" /></top>  
            <center id="borderLayout-center2"> 
              <place control="gridPermission" style="width:100%;height:100%;"
                id="controlPlace2"/> 
            </center>  
            <!-- 升级注释
            <bottom size="30px" id="borderLayout-bottom2"> 
              <xhtml:input type="checkbox" value="" name="" id="cbShowInheritedPermission"
                checked="true" onclick="mainActivity.cbShowInheritedPermissionClick(event)"
                style="float:left;padding:0px 0px 0px 0px;margin:8px 5px 0px 8px;"/>  
              <xhtml:label id="label2" class="xui-label" for="cbShowInheritedPermission"
                style="float:left;line-height:29px;">显示继承的功能</xhtml:label> 
            </bottom>  -->
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <xui:place control="wdRoleDetail" id="controlPlace11" style="top:231px;left:254px;"/>  
      <xui:place control="wdDataPermissionDetail" id="controlPlace7" style="top:231px;left:406px;"/>  
      <xui:place control="wdSelectFunTree" id="controlPlace3" style="top:231px;left:305px;"/>  
      <xui:place control="wdselectProtectedActions" id="controlPlace6" style="top:231px;left:356px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridRole" data="dRole" onRowDblClick="mainActivity.gridRoleRowDblClick"
      edit-mode="true"> 
      <xui:column width="30px" label="#master_checkbox" type="ch" align="center" ref="calcCheckBox"
        id="gridColumn8"/>  
      <xui:column id="gridColumn3" ref="calcIndex" label=" " type="ro" width="30px"
        align="center" show-index="true"/>  
      <column ref="sRoleKind" type="html" width="30px" label=" " align="center"
        readonly="true" onRender="mainActivity.gridRoleSRoleKindRender" id="gridColumn9"/>  
      <xui:column id="gridColumn1" ref="sName" label="角色名称" type="ro" width="100px"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60px"/>  
      <xui:column id="gridColumn4" ref="sCatalog" label="分类" type="ro" width="80px"/>  
      <xui:column id="gridColumn5" ref="sParentRolesNames" label="继承" type="ro" width="120px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="dRole" mode="IMG_TXT_LR"> 
        <item name="refresh-item" id="barItem4"></item><item name="next-page-item" id="barItem3"/>  
        <item name="all-page-item" id="barItem_3"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem2"> 
          <xhtml:input type="text" value="" id="inputSearchRole" class="xui-input"
            style="width:80px;" onkeydown="mainActivity.inputSearchRoleKeydown(event)"/> 
        </item>  
        <item id="customBarItem15">
          <xforms:trigger id="imageSearchRole" appearance="image-text" src="/UI/system/images/search24.gif"> 
            <xforms:label id="xuiLabel5"><![CDATA[搜索]]></xforms:label>  
            <xforms:action id="action8" ev:event="DOMActivate">
              <xforms:script id="xformsScript9"><![CDATA[mainActivity.imageSearchRoleClick(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridPermission" data="dPermission" edit-mode="true" onRowValueChanged="mainActivity.gridPermissionRowValueChanged"> 
      <xui:column width="30px" ref="calcCheckBox" label="#master_checkbox" type="ch"
        align="center" id="gridColumn10"/>  
      <xui:column id="gridColumn7" ref="calcIndex" label=" " type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn6" ref="sPermissionKind" label=" " type="html" width="30px"
        align="center" onRender="mainActivity.gridPermissionSPermissionKindRender"/>  
      <xui:column width="300px" ref="sActivityFName" label="业务功能" type="html" onRender="mainActivity.generatePermissionNamePathUI"
        id="gridColumn11"/>  
      <column ref="actionsLabel" label="动作策略/数据策略" type="html" width="120px" align="left"
        readonly="false" onRender="mainActivity.gridPermissionSActionsNamesRender"
        id="gridColumn12"/>  
      <column ref="roleName" label="所属角色" type="ro" width="60px" id="gridColumn13"/>  
      <column ref="actionPolicyNames" label="动作策略Names" type="ro" width="60px"
        visible="false" id="gridColumn14"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="funPermissionToolbar" data="dPermission" mode="IMG_TXT_LR"> 
        <item name="refresh-item" id="barItem5"></item><item name="next-page-item" id="barItem1" />  
        <item name="all-page-item" id="barItem2" />  
        <item name="separator" id="separatorItem2" />  
        <item id="customBarItem3"> 
          <xhtml:input type="text" value="" id="inputSearchPermission" class="xui-input" style="width:80px;" onkeydown="mainActivity.inputSearchPermissionKeydown(event)" /> 
        </item>  
        <item id="customBarItem16"><xforms:trigger id="imageSearchPermission" appearance="image-text" image-text-mode="LR" src="/UI/system/images/search24.gif">
   <xforms:label id="xuiLabel6"><![CDATA[搜索]]></xforms:label>
  <xforms:action id="action9" ev:event="DOMActivate"><xforms:script id="xformsScript10"><![CDATA[mainActivity.imageSearchPermissionClick(event)]]></xforms:script></xforms:action></xforms:trigger></item></xui:bar></xhtml:div><xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="角色" width="540px" height="350px" modal="true" id="wdRoleDetail" url="/SA/OPM/role/roleDetail.w"
      onReceive="mainActivity.wdRoleDetailReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="数据权限" width="750px" height="450px" modal="true" id="wdDataPermissionDetail"
      url="/SA/OPM/role/dataPermissionDetail.w" onReceive="mainActivity.wdDataPermissionDetailReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="选择功能" width="400px" height="450px" modal="true" id="wdSelectFunTree"
      url="/SA/OPM/dialogs/selectFunTree/selectMultiFunctions.w" onReceive="mainActivity.wdSelectFunTreeReceive"
      resizable="true" minmaxable="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="动作策略" width="380px" height="350px" modal="true" id="wdselectProtectedActions"
      url="/SA/OPM/dialogs/selectProtectedActions/selectProtectedActions.w" onReceive="mainActivity.wdselectProtectedActionsReceive"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="customBarItem6"> 
          <xforms:trigger id="btnInsertRole" src="/UI/SA/OPM/images/insert.gif" dis-src="/UI/SA/OPM/images/un_insert.gif"
            appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel3"><![CDATA[新建]]></xforms:label>  
            <xforms:action ev:event="DOMActivate" id="insertRoleRoleAction"> 
              <xforms:script id="xformsScript8">mainActivity.btnInsertRoleClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger>  
          <xhtml:div component="/UI/system/components/menu.xbl.xml#menu" appearance="context"
            open-mode="win" menu-id="newRolesMenu" style="display: none;" class="xui-container"
            id="div1"> 
            <xui:menuitem id="newFunRole" label="新建功能角色" img="/UI/SA/OPM/images/funRole.gif"
              dis-img="/UI/SA/OPM/images/un_funRole.gif" disabled="false"/>  
            <xui:menuitem id="newDataRole" label="新建数据角色" img="/UI/SA/OPM/images/dataRole.gif"
              dis-img="/UI/SA/OPM/images/un_dataRole.gif" disabled="false"/>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript2">mainActivity.newRolesMenuClick(event)</xforms:script> 
            </xforms:action> 
          </xhtml:div> 
        </item>  
        <item id="customBarItem7"> 
          <xforms:trigger id="btnEditRole" appearance="image-text" src="/UI/SA/OPM/images/edit.gif"
            dis-src="/UI/SA/OPM/images/un_edit.gif" image-text-mode="LR"> 
            <xforms:label id="xuiLabel7"><![CDATA[编辑]]></xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action3"> 
              <xforms:script id="xformsScript2">mainActivity.btnEditRoleClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="customBarItem1"> 
          <xforms:trigger id="btnDeleteRole" appearance="image-text" src="/UI/SA/OPM/images/delete.gif"
            dis-src="/UI/SA/OPM/images/un_delete.gif" image-text-mode="LR"> 
            <xforms:label id="xuiLabel2"><![CDATA[删除]]></xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript3">mainActivity.btnDeleteRoleClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator" id="customBarItem8"/>  
        <item id="customBarItem9"> 
          <xforms:trigger id="btnEnableRoles" src="/UI/SA/OPM/images/enable.gif" dis-src="/UI/SA/OPM/images/un_enable.gif"
            appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="fUsestateteName"><![CDATA[启用]]></xforms:label>  
            <xforms:action id="action5" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript4">mainActivity.btnEnableRolesClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="customBarItem10"> 
          <xforms:trigger id="btnDisableRoles" src="/UI/SA/OPM/images/disable.gif" dis-src="/UI/SA/OPM/images/un_disable.gif"
            appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="fDisUsestateName"><![CDATA[禁用]]></xforms:label>  
            <xforms:action id="action6" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript5">mainActivity.btnDisableRolesClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars4">
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar2">
        <item id="customBarItem12"> 
          <xforms:trigger id="btnInsertPermission" src="/UI/SA/OPM/images/insert.gif"
            dis-src="/UI/SA/OPM/images/un_insert.gif" appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel4">分配权限</xforms:label>  
            <xforms:action id="action7" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript6">mainActivity.btnInsertPermissionClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger>  
          <xhtml:div component="/UI/system/components/menu.xbl.xml#menu" appearance="context"
            open-mode="win" menu-id="newPermissionsMenu" style="display: none;" class="xui-container"
            id="div2"> 
            <xui:menuitem id="newFunPermission" label="分配功能权限" img="/UI/SA/OPM/images/funPermission.gif"
              dis-img="/UI/SA/OPM/images/un_funPermission.gif" disabled="false"/>  
            <xui:menuitem id="newDataPermission" label="分配数据权限" img="/UI/SA/OPM/images/dataPermission.gif"
              dis-img="/UI/SA/OPM/images/un_dataPermission.gif" disabled="false"/>  
            <xforms:action ev:event="DOMActivate" id="action11"> 
              <xforms:script id="xformsScript11">mainActivity.newPermissionsMenuClick(event)</xforms:script> 
            </xforms:action> 
          </xhtml:div> 
        </item>  
        <item id="customBarItem13"> 
          <xforms:trigger id="deletePermission" appearance="image-text" src="/UI/SA/OPM/images/delete.gif"
            dis-src="/UI/SA/OPM/images/un_delete.gif" image-text-mode="LR"> 
            <xforms:label id="xuiLabel1">删除权限</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript7">mainActivity.deletePermissionClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
      </xui:bar>
    </xhtml:div>
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="mainActivity.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/form/dhtmlx/dhtmlxMenu/skins/dhtmlxmenu_glassy_blue.css"/> 
  </xui:resource> 
</xui:window>
