<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="kwMapSetActivity.js"/> 
  </xui:resource>  
  <xforms:model id="mdKWMap" style="top:131px;left:14px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dFolder" concept="OA_KM_Folder" order-by="fName:asc" is-tree="true" onValueChanged="dFolderValueChanged"> 
      <tree-option parent-relation="fParent" root-filter="OA_KM_Folder = 'map'"/>  
      <reader action="/OA/knowledge/logic/action/queryKMFolderAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMFolderAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMFolderAction"/>  
      <rule relation="fName" required="true()" alert="'栏目名称必填!'"/>  
      <rule relation="fUseStatusName" readonly="true()"/>  
      <rule concept="OA_KM_Folder" readonly="call('conceptIsReadonly')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dRights" concept="OA_KM_Rights"> 
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
    <xforms:bind nodeset="data('dCurrentFolderInfo')/fManagerNames" readonly="true()"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="canCreateMap,canCreateMapKind" auto-load="true" id="dControl" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="data('dControl')/canCreateMap" readonly="data('dFolder')/rowid != 'map'"/>  
    <xforms:bind nodeset="data('dControl')/canCreateMapKind" readonly="data('dFolder')/rowid = 'map'"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="startUse,stopUse" auto-load="true" id="dBtnStatus" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('dBtnStatus')/startUse" readonly="instance('dFolder')/fUseStatus = '1'"/>  
    <xforms:bind nodeset="instance('dBtnStatus')/stopUse" readonly="not(instance('dFolder')/fUseStatus = '1')"/>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdKWMapxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrFolder"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgFolder" data="dFolder"> 
        <item name="create-map-item"> 
          <xforms:trigger ref="data('dControl')/canCreateMap" appearance="image" src="/UI/OA/knowledge/images/create_map.gif" dis-src="/UI/OA/knowledge/images/create_map_disable.gif"> 
            <xforms:label>新建知识地图</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>newKWMap(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="create-map-kind-item"> 
          <xforms:trigger ref="data('dControl')/canCreateMapKind" appearance="image" src="/UI/OA/knowledge/images/create_mapKind.gif" dis-src="/UI/OA/knowledge/images/create_mapKind_disable.gif"> 
            <xforms:label>新建地图分类</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>newKWMapKind(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item"/>  
        <item name="delete-item" readonly="data('dFolder')/fUseStatus != '0'"/>  
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
    <xhtml:div style="border:1px solid #99bbe8;" component="/UI/system/components/grid.xbl.xml#grid" id="grdFolder" appearance="tree" data="dFolder" _onRowClick="grdFolderRowClick" onShowNodeImg="showNodeImg" onRowClick="grdFolderRowClick"> 
      <column ref="fName" label="名称" type="tree" width="190"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="管理员设置" width="600px" height="400px" modal="true" id="dlgManagerSet" url="/OA/knowledge/process/dialog/folderManagerSet/folderManagerSet.w" onSend="dlgManagerSetSend" onReceive="dlgManagerSetReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="权限设置" width="620px" height="430px" modal="true" id="dlgRightsSet" url="/OA/knowledge/process/dialog/mapRightsSet/mapRightsSet.w" onSend="dlgRightsSetSend" onReceive="dlgRightsSetReceive"/>  
    <xui:view id="vDetail" auto-load="true"> 
      <xforms:input ref="data('dFolder')/fName" id="fName" auto-size="true"/>  
      <xforms:input ref="data('dFolder')/fDescription" id="fDescription" auto-size="true"/>  
      <xforms:input ref="data('dFolder')/fUseStatusName" id="fUseStatusName" auto-size="true"/>  
      <xforms:input ref="data('dCurrentFolderInfo')/fManagerNames" id="fManagerNames" auto-size="true"/>  
      <xhtml:div style="width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" id="grdRights" data="dRights"> 
        <column ref="fOrgFName" label="组织" type="ro" width="400"/> 
      </xhtml:div>  
      <xhtml:button id="managerSet" onclick="javascript:openManagerSetDialog()" style="width:90px;height:24px;" disabled="true">管理员设置</xhtml:button>  
      <xhtml:button id="rightSet" onclick="javascript:openRightsSetDialog()" style="width:90px;height:24px;" disabled="true">权限设置</xhtml:button>  
      <xui:layout style="height:100%;" type="excel" src="kwMapSet.xls"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="dlgManagerSet" style="top:250px;left:16px;"/>  
      <place control="dlgRightsSet" style="top:250px;left:48px;"/>  
      <xhtml:table width="100%" height="100%" border="0" style="table-layout:fixed;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr width="100%" height="35px"> 
          <xhtml:td> 
            <place control="tbrFolder" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:table width="100%" height="100%" cellspacing="0" style="table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr width="100%"> 
                <xhtml:td width="195px"> 
                  <place control="grdFolder" style="width:100%;height:100%;"/> 
                </xhtml:td>  
                <xhtml:td valign="top"> 
                  <xhtml:div style="border:1px solid #99bbe8;width:100%;height:100%"> 
                    <place control="vDetail"/> 
                  </xhtml:div> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>
