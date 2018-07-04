<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="simpleFolderSet.js"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="top:365px;left:16px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" update-mode="whereVersion" auto-load="true" id="dFolder" concept="OA_KM_Folder" order-by="fName:asc" is-tree="true" onValueChanged="dFolderValueChanged"> 
      <tree-option id="folderRootFilter" parent-relation="fParent" root-filter="OA_KM_Folder = 'public'"/>  
      <reader action="/OA/knowledge/logic/action/queryKMFolderAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMFolderAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMFolderAction"/>  
      <rule relation="fName" required="true()" alert="'栏目名称必填!'"/>  
      <rule relation="fUseStatusName" readonly="true()"/>  
      <rule concept="OA_KM_Folder" readonly="call('conceptIsReadonly')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="true" id="dRights" concept="OA_KM_Rights"> 
      <master auto-load="true" data="dFolder" relation="fFolderID"/>  
      <reader action="/OA/knowledge/logic/action/queryKMRightsAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMRightsAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMRightsAction"/>  
      <filter name="fltRights">OA_KM_Rights.fKWKind = 'Folder'</filter>  
      <rule concept="OA_KM_Rights" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="folderID,folderFName,fIsNeedApprove,fIsInheritApprove,fIsInheritManager,fManagerNames,fIsInheritRights" auto-load="true" id="dCurrentFolderInfo" store-type="simple"> 
      <rows xmlns="">  
        <row id="rowid1"/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="data('dCurrentFolderInfo')/fIsNeedApprove" readonly="true()"/>  
    <xforms:bind nodeset="data('dCurrentFolderInfo')/fManagerNames" readonly="true()"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="startUse,stopUse" src="" auto-load="true" id="dBtnStatus" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('dBtnStatus')/startUse" readonly="instance('dFolder')/fUseStatus = '1'"/>  
    <xforms:bind nodeset="instance('dBtnStatus')/stopUse" readonly="not(instance('dFolder')/fUseStatus = '1')"/>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdMainConstructDone(event);</xforms:script> 
    </xforms:action>  
    <xforms:action ev:event="onload"> 
      <xforms:script>mdMainload(event);</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div style="border:1px solid #99bbe8;" component="/UI/system/components/grid.xbl.xml#grid" id="grdFolder" appearance="tree" data="dFolder" onRowClick="grdFolderRowClick" onShowNodeImg="showNodeImg"> 
      <column ref="fName" label="名称" type="tree" width="190"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrFolder"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgFolder" data="dFolder"> 
        <item name="create-new-folder-item"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label>新增栏目</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>newFolderFun(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item"/>  
        <item name="delete-folder-item"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/remove.gif" dis-src="/UI/appCommon/images/un_remove.gif"> 
            <xforms:label>删除</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>deleteFolderFun(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="refresh-item"/>  
        <item name="separator"/>  
        <item name="startUse"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/start_use.gif" dis-src="/UI/appCommon/images/un_start_use.gif" ref="instance('dBtnStatus')/startUse"> 
            <xforms:label>启用</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								startUseFun();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="allUse"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/all_use.gif" dis-src="/UI/appCommon/images/all_use.gif"> 
            <xforms:label>全部启用</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								allUseFun();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="stopUse"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/stop_use.gif" dis-src="/UI/appCommon/images/un_stop_use.gif" ref="instance('dBtnStatus')/stopUse"> 
            <xforms:label>停用</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								stopUseFun();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="审批设置" width="300px" height="180px" modal="true" id="dlgApproveSet" url="/OA/knowledge/process/dialog/folderApproveSet/folderApproveSet.w" onSend="dlgApproveSetSend" onReceive="dlgApproveSetReceive" reload-on-open="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="管理员设置" width="640px" height="400px" modal="true" id="dlgManagerSet" url="/OA/knowledge/process/dialog/folderManagerSet/folderManagerSet.w" onSend="dlgManagerSetSend" onReceive="dlgManagerSetReceive" reload-on-open="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="权限设置" width="620px" height="430px" modal="true" id="dlgRightsSet" url="/OA/knowledge/process/dialog/folderRigthsSet/folderRightsSet.w" onSend="dlgRightsSetSend" onReceive="dlgRightsSetReceive" reload-on-open="true"/>  
    <xui:view id="vDetail"> 
      <xforms:input ref="data('dFolder')/fName" id="fName" auto-size="true"/>  
      <xforms:input ref="data('dFolder')/fDescription" id="fDescription" auto-size="true"/>  
      <xforms:input ref="data('dFolder')/fUseStatusName" id="fUseStatusName" auto-size="true"/>  
      <xforms:input ref="data('dCurrentFolderInfo')/fManagerNames" id="fManagerNames" auto-size="true"/>  
      <xforms:select ref="data('dCurrentFolderInfo')/fIsNeedApprove" appearance="full" id="fIsNeedApprove"> 
        <xforms:item> 
          <xforms:label/>  
          <xforms:value>1</xforms:value> 
        </xforms:item> 
      </xforms:select>  
      <xhtml:div style="width:482px;height:275px" component="/UI/system/components/grid.xbl.xml#grid" id="grdRights" data="dRights"> 
        <column ref="fOrgFName" label="组织" type="ro" width="300"/>  
        <column ref="fCanCreateKW" label="权限|创建知识" type="ch" width="55" align="center"/>  
        <column ref="fCanReleaseKW" label="权限|发布知识" type="ch" width="55" align="center"/>  
        <column ref="fIsInherit" label="继承" type="ch" width="35" align="center"/> 
      </xhtml:div>  
      <xhtml:input type="button" id="approveSet" value="审批设置" onclick="javascript:openApproveSetDialog()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:75px;"/>  
      <xhtml:input type="button" id="managerSet" value="管理员设置" onclick="javascript:openManagerSetDialog()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:75px;"/>  
      <xhtml:input type="button" id="rightSet" value="权限设置" onclick="javascript:openRightsSetDialog()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:75px;"/>  
      <xui:layout style="height:100%;" type="excel" src="simpleFolderSet.xls"/> 
    </xui:view>  
    <xui:layout style="width:100%;height:100%;"> 
      <place control="dlgApproveSet" style="top:461px;left:17px;"/>  
      <place control="dlgManagerSet" style="top:461px;left:50px;"/>  
      <place control="dlgRightsSet" style="top:461px;left:82px;"/>  
      <xhtml:table style="width:100%;height:100%;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="35px"> 
          <xhtml:td> 
            <place control="tbrFolder" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:table width="100%" height="100%" border="0" style="table-layout: fixed;overflow:hidden;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td width="195px"> 
                  <place control="grdFolder" style="width:100%;height:100%;"/> 
                </xhtml:td> 
                <xhtml:td width="2px"></xhtml:td> 
                <xhtml:td valign="top" style="border:1px solid #99bbe8;"> 
                    <place control="vDetail" /> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>
