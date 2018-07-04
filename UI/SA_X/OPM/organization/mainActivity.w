<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:201px;top:153px;height:auto;left:346px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgTree" concept="SA_OPOrg" is-tree="true" limit="-1"
      onIndexChanged="mainActivity.dOrgTreeIndexChanged" onAfterRefresh="mainActivity.dOrgTreeAfterRefresh"
      confirm-refresh="false"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <creator id="default2"/>  
      <writer id="default3"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="SA_OPOrg.sParent is null"
        virtual-root="组织机构"/>  
      <filter name="filterOrgKind" id="filter1">SA_OPOrg.sOrgKindID &lt;&gt; 'psm'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgList" concept="SA_OPOrg" onAfterRefresh="mainActivity.dOrgListAfterRefresh"
      onIndexChanged="mainActivity.dOrgListIndexChanged" onAfterRefreshPage="mainActivity.dOrgListAfterRefreshPage"
      limit="20" confirm-refresh="false" onRefreshCreateParam="mainActivity.dOrgListRefreshCreateParam" filter-relations="sName,sCode,ognName,dptName,nATION,eDUCATIONIDCNAME,pOSITIONALTITLEIDCNAME"> 
      <reader id="default4" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data>  
    <xforms:action id="action12" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript3">mainActivity.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      width="310px" height="240px" modal="true" id="wdOrgDetail" url="/SA/OPM/organization/orgDetail.w"
      resizable="false" minmaxable="false" reload-on-open="false" title="组织" onReceive="mainActivity.wdOrgDetailReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="人员" width="550px" height="498px" modal="true" id="wdPersonDetail" url="/SA/OPM/organization/personDetail.w"
      onReceive="mainActivity.wdPersonDetailReceive" resizable="false" minmaxable="false"
      onClose="mainActivity.wdPersonDetailClose"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="移动到" width="400px" height="450px" modal="true" id="wdSelectMoveToOrg"
      url="/SA/OPM/dialogs/selectSingleOrg/selectSingleOrg.w" onReceive="mainActivity.wdSelectMoveToOrgReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="组织排序" width="300px" height="400px" modal="true" id="wdSortOrgs" url="/SA/OPM/organization/sortOrgs.w"
      onReceive="mainActivity.wdSortOrgsReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="分配人员" width="750px" height="450px" modal="true" id="wdAssignPerson" url="/SA/OPM/dialogs/selectMultiOrgs/selectMultiOrgs.w"
      onReceive="mainActivity.wdAssignPersonReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridOrgList" data="dOrgList" onRowDblClick="mainActivity.gridOrgListRowDblClick"> 
      <xui:column id="gridColumn6" ref="calcIndex" label=" " type="ro" width="30px"
        show-index="true"/>  
      <xui:column id="gridColumn5" ref="sOrgKindID" type="html" width="30px" readonly="true"
        onRender="mainActivity.gridOrgListSOrgKindIDRender" label=" " align="center"/>  
      <xui:column id="gridColumn2" ref="sName" label="名称" type="ro" width="120px"/>  
      <xui:column id="gridColumn3" ref="sCode" label="编码" type="ro" width="60px"/>  
      <xui:column id="gridColumn4" ref="ognName" label="机构" type="ro" width="100px"/>  
      <xui:column id="gridColumn4" ref="dptName" label="用户组" type="ro" width="100px"/>  
      <xui:column id="gridColumn7" ref="eDUCATIONIDCNAME" label="学历" type="ed" width="100px"/>  
      <xui:column id="gridColumn10" ref="nATION" label="民族" type="ed" width="100px"/>  
      <xui:column id="gridColumn9" ref="pOSITIONALTITLEIDCNAME" label="职称" type="ed"
        width="100px"/>  
      <xui:column id="gridColumn8" ref="operatorState" type="ed" width="100" label="操作员状态"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="组织搜索" width="600px" height="250px" modal="false" id="wdSearchOrg" url="/SA/OPM/dialogs/searchOrg/searchOrg.w"
      neighbor="imageSearchOrg" onReceive="mainActivity.wdSearchOrgReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridOrgTree" data="dOrgTree" appearance="tree" onShowNodeImg="mainActivity.gridOrgTreeShowNodeImg"
      onCellHint="mainActivity.gridOrgTreeCellHint"> 
      <xui:column id="gridColumn1" ref="sName" label="名称" type="tree" readonly="true"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        style="width:391px;" mode="IMG_TXT_LR" data="dOrgList"> 
        <item id="customBarItem1"> 
          <xforms:trigger id="btnInsertMore" src="/UI/SA/OPM/images/insertMore.gif" dis-src="/UI/SA/OPM/images/un_insertMore.gif"
            appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel1">新建</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1">mainActivity.btnInsertMoreClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger>  
          <xhtml:div component="/UI/system/components/menu.xbl.xml#menu" appearance="context"
            open-mode="win" menu-id="newItemsMenu" style="display: none;" class="xui-container"> 
            <!--          
			<xui:menuitem id="newOgn" label="新建机构" img="/UI/SA/OPM/images/newOgn.gif" dis-img="/UI/SA/OPM/images/un_newOgn.gif" disabled="false"/>  
 -->  
            <xui:menuitem id="newDpt" label="新建用户组" img="/UI/SA/OPM/images/newDpt.gif"
              dis-img="/UI/SA/OPM/images/un_newDpt.gif" disabled="false"/>  
            <!-- 
            <xui:menuitem id="newPos" label="新建岗位" img="/UI/SA/OPM/images/newPos.gif" dis-img="/UI/SA/OPM/images/un_newPos.gif" disabled="false"/> 
-->  
            <xui:menuitem id="split" label="-------------" disabled="false"/>  
            <xui:menuitem id="newPerson" label="新建人员" img="/UI/SA/OPM/images/newPerson.gif"
              dis-img="/UI/SA/OPM/images/un_newPerson.gif" disabled="false"/>  
            <xui:menuitem id="assignPerson" label="分配人员" img="/UI/SA/OPM/images/newPerson.gif"
              dis-img="/UI/SA/OPM/images/un_newPerson.gif" disabled="false"/>  
            <xforms:action ev:event="DOMActivate" id="action11"> 
              <xforms:script id="xformsScript11">mainActivity.newItemsMenuClick(event)</xforms:script> 
            </xforms:action> 
          </xhtml:div> 
        </item>  
        <item id="customBarItem2"> 
          <xforms:trigger id="btnEdit" src="/UI/SA/OPM/images/edit.gif" dis-src="/UI/SA/OPM/images/un_edit.gif"
            appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel2">编辑</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript2">mainActivity.btnEditClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator" id="separatorItem3"/>  
        <!--<item id="customBarItem3"> 
          <xforms:trigger id="btnEnable" src="/UI/SA/OPM/images/enable.gif"
            dis-src="/UI/SA/OPM/images/un_enable.gif" appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel3">启用</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action3"> 
              <xforms:script id="xformsScript4">mainActivity.btnEnableClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
       -->
        <!--   <item id="customBarItem4"> 
           <xforms:trigger id="btnDisable" src="/UI/SA/OPM/images/disable.gif" 
           dis-src="/UI/SA/OPM/images/un_disable.gif"  appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel4">禁用</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action4"> 
              <xforms:script id="xformsScript5">mainActivity.btnDisableClick(event)</xforms:script> 
            </xforms:action>  
        </item> -->  
        <item id="customBarItem5"> 
          <xforms:trigger id="btnLogicDelete" src="/UI/SA/OPM/images/logicDelete.gif"
            dis-src="/UI/SA/OPM/images/un_logicDelete.gif" appearance="image-text"
            image-text-mode="LR"> 
            <xforms:label id="xuiLabel5">删除</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action5"> 
              <xforms:script id="xformsScript6">mainActivity.btnLogicDeleteClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="customBarItem6"> 
          <xforms:trigger id="btnSort" src="/UI/SA/OPM/images/sort.gif" dis-src="/UI/SA/OPM/images/un_sort.gif"
            appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel6">排序</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action6"> 
              <xforms:script id="xformsScript7">mainActivity.btnSortClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="customBarItem7"> 
          <xforms:trigger id="btnMove" src="/UI/SA/OPM/images/moveOrg.gif" dis-src="/UI/SA/OPM/images/un_moveOrg.gif"
            appearance="image-text" image-text-mode="LR"> 
            <xforms:label id="xuiLabel7">移动</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action7"> 
              <xforms:script id="xformsScript8">mainActivity.btnMoveClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator" id="separatorItem4"/>  
        <!--  <item id="customBarItem10"> 
          <xforms:trigger id="btnChangeMainOrg" src="/UI/SA/OPM/images/resetMainOrg.gif" dis-src="/UI/SA/OPM/images/un_resetMainOrg.gif" appearance="image" style="width:24px;"> 
            <xforms:label id="xuiLabel10">变更人员所属组织</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action10"> 
              <xforms:script id="xformsScript9">mainActivity.btnChangeMainOrgClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  -->  
        <item id="customBarItem8"> 
          <xforms:trigger id="btnResetPassword" src="/UI/SA/OPM/images/resetPassword.gif"
            dis-src="/UI/SA/OPM/images/un_resetPassword.gif" appearance="image-text"
            image-text-mode="LR"> 
            <xforms:label id="xuiLabel8">重置密码</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action8"> 
              <xforms:script id="xformsScript10">mainActivity.btnResetPasswordClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator" id="separatorItem1"/>  
        <!--<item id="customBarItem9"> 
          <xforms:trigger id="btnSync" style="width:24px;" src="/UI/SA/OPM/images/sync.gif" dis-src="/UI/SA/OPM/images/un_sync.gif" appearance="image"> 
            <xforms:label id="xuiLabel9">系统同步</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action9">
              <xforms:script id="xformsScript12">mainActivity.btnSyncClick(event)</xforms:script>
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        -->  
        <item name="refresh-item" id="barItem1"/>  
        <item name="filter-item" id="barItem2"/>  
        <item name="next-page-item"/>  
        <item name="separator" id="separatorItem5"/>  
        <item id="customBarItem11"> 
          <xhtml:input type="text" value="" id="inputSearchList" class="xui-input"
            style="width:100px;" onkeydown="mainActivity.inputSearchListKeydown(event)"/> 
        </item>  
        <item id="customBarItem12"> 
          <xhtml:img src="/UI/SA/OPM/images/search.gif" alt="" id="imageSearchList"
            style="width:24px;;height:24px" onclick="mainActivity.imageSearchListClick(event)"/> 
        </item>  
        <item id="customBarItem4"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="选择人员所属组织" width="400px" height="450px" modal="true" id="wdChangeMainOrg"
      url="/SA/OPM/dialogs/selectSingleOrg/selectSingleOrg.w" onReceive="mainActivity.wdChangeMainOrgReceive"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="customBarItem13"> 
          <xhtml:input type="text" value="" id="inputSearchOrg" class="xui-input" style="width:100px;"
            onkeydown="mainActivity.inputSearchOrgKeydown(event)"/> 
        </item>  
        <item id="customBarItem14"> 
          <xhtml:img src="/UI/SA/OPM/images/search.gif" alt="" id="imageSearchOrg"
            style="width:24px;;height:24px" onclick="mainActivity.imageSearchOrgClick(event)"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table id="table4" class="xui-container" style="height:100%;width:100%;table-layout:fixed;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"
        component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="tr8"> 
          <xhtml:td id="td3"> 
            <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter"
              fix-size="25%" mode="horz" has-drag-bar="true" has-arrow-button="true"
              id="HSplitter1" class="xui-splitter" style="height:100%;width:100%;"
              status="normal"> 
              <xhtml:div region="left" id="div1"> 
                <!-- 
                -->  
                <xhtml:table id="table2" class="xui-container" style="height:100%;width:100%;table-layout:fixed;"
                  cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                  <xhtml:tr id="tr1" style="height:30px"> 
                    <xhtml:td id="td1"> 
                      <xui:place control="toolbars2" id="controlPlace5"/> 
                    </xhtml:td> 
                  </xhtml:tr>  
                  <xhtml:tr id="tr7"> 
                    <xhtml:td id="td7"> 
                      <xui:place control="wdSearchOrg" id="controlPlace6" style="top:99px;left:56px;"/>  
                      <xui:place control="gridOrgTree" id="controlPlace2" style="border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;width:100%;height:100%;"/> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xhtml:div>  
              <xhtml:div region="right" id="div2" style="height:100%;"> 
                <!-- 
               -->  
                <xhtml:table id="table3" class="xui-container" style="height:100%;width:100%;table-layout:fixed;"
                  component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                  <xhtml:tr id="tr3" style="height:30px;"> 
                    <xhtml:td id="td2"> 
                      <xui:place control="toolbars1" id="controlPlace1"/> 
                    </xhtml:td> 
                  </xhtml:tr>  
                  <xhtml:tr id="tr6"> 
                    <xhtml:td id="td9"> 
                      <xui:place control="wdOrgDetail" id="controlPlace3" style="top:293px;left:148px;"/>  
                      <xui:place control="wdPersonDetail" id="controlPlace8" style="top:293px;left:189px;"/>  
                      <xui:place control="wdSelectMoveToOrg" id="controlPlace10"
                        style="top:294px;left:230px;"/>  
                      <xui:place control="wdSortOrgs" id="controlPlace11" style="top:295px;left:270px;"/>  
                      <xui:place control="wdAssignPerson" id="controlPlace12" style="top:295px;left:310px;"/>  
                      <xui:place control="gridOrgList" id="controlPlace4" style="width:100%;height:100%;"/>  
                      <xui:place control="wdChangeMainOrg" id="controlPlace9" style="top:295px;left:351px;"/> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xhtml:div> 
            </xhtml:div> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr4" style="height:25px;"> 
          <xhtml:td id="td4"> 
            <xhtml:table id="table1" class="xui-container" style="height:100%;width:100%;table-layout:fixed;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"> 
              <xhtml:tr id="tr2"> 
                <!--<xhtml:td id="td3" style="width:150px;border-right-style:solid;border-right-width:1px;border-right-color:#C0C0C0;"> 
                  <xhtml:input type="checkbox" value="" name="" id="cbShowDisabled"
                    onclick="mainActivity.cbShowDisabledClick(event)"/>  
                  <xhtml:label id="label1" class="xui-label" for="cbShowDisabled" style="width:120px;">显示已禁用的组织</xhtml:label> 
                </xhtml:td>  
                --><xhtml:td id="td3" style="width:150px;border-right-style:solid;border-right-width:1px;border-right-color:#C0C0C0;"> 
                  <xhtml:input type="checkbox" value="" name="" id="cbShowAllChildren"
                    onclick="mainActivity.cbShowAllChildrenClick(event)"/>  
                  <xhtml:label id="label2" class="xui-label" for="cbShowAllChildren"
                    style="width:120px;">显示所有下级组织</xhtml:label> 
                </xhtml:td>
                <!--  
                <xhtml:td id="td3" style="width:150px;border-right-style:solid;border-right-width:1px;border-right-color:#C0C0C0;"> 
                  <xhtml:input type="checkbox" value="" name="" id="cbOnlyShowMasterPsm"
                    onclick="mainActivity.cbOnlyShowMasterPsmClick(event)"/>  
                  <xhtml:label id="label3" class="xui-label" for="cbOnlyShowMasterPsm"
                    style="width:120px;">只显示直属人员</xhtml:label> 
                </xhtml:td>  
                -->
                <xhtml:td id="td3"> 
                  <!--
                  <xhtml:input type="checkbox" value="" name="" id="cbShowOgn" checked="true" onclick="mainActivity.cbShowOgnClick(event)"/>  
                  <xhtml:label id="label4" class="xui-label" for="cbShowOgn" style="width:35px;">组织</xhtml:label>  
-->  
                  <xhtml:input type="checkbox" value="" name="" id="cbShowDpt" checked="true"
                    onclick="mainActivity.cbShowDptClick(event)"/>  
                  <xhtml:label id="label5" class="xui-label" for="cbShowDpt" style="width:35px;">用户组</xhtml:label>  
                  <!-- 
                  <xhtml:input type="checkbox" value="" name="" id="cbShowPos" checked="true" onclick="mainActivity.cbShowPosClick(event)"/>  
                  <xhtml:label id="label6" class="xui-label" for="cbShowPos" style="width:35px;">岗位</xhtml:label>  
-->  
                  <xhtml:input type="checkbox" value="" name="" id="cbShowPsm" checked="true"
                    onclick="mainActivity.cbShowPsmClick(event)"/>  
                  <xhtml:label id="label7" class="xui-label" for="cbShowPsm" style="width:35px;">人员</xhtml:label> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>
