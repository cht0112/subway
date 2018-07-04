<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script type="text/javascript" src="personalShare.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="personalShare.js"/> 
  </resource>  
  <xforms:model id="mdMain" style="width:150px;top:239px;height:105px;left:132px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="main" concept="OA_SD_ShareRange"> 
      <xui:reader action="/OA/schedule/logic/action/querySDSHARERANGEAction"/>  
      <xui:writer action="/OA/schedule/logic/action/saveSDSHARERANGEAction"/>  
      <xui:creator action="/OA/schedule/logic/action/createSDSHARERANGEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="main2" concept="OA_SD_ShareRange"> 
      <xui:reader action="/OA/schedule/logic/action/querySDSHARERANGEAction"/>  
      <xui:writer action="/OA/schedule/logic/action/saveSDSHARERANGEAction"/>  
      <xui:creator action="/OA/schedule/logic/action/createSDSHARERANGEAction"/> 
    </data>  
    <xforms:action ev:event="onload"> 
      <xforms:script>mainmodelload(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view id="vListToolbar"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrShareBar"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="main"> 
          <item name="newAuth"> 
            <xforms:trigger appearance="image" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label>添加查看人</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>addShareToQuery(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="save-item"/>  
          <item name="delete-item"/>  
          <item name="refresh-item"/>  
          <item name="filter-item"/>  
          <item name="filter-pattern-item"/>  
          <item name="separator" id="separatorItem1"/>  
          <item name="custom-page-item" id="barItem7"/> 
        </xui:bar> 
      </xhtml:div> 
    </xui:view>  
    <!--人员列表信息视图-->  
    <xui:view id="vPersonMemberList" auto-load="true"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdPersonMember" data="main"> 
        <column ref="recNo" label="序号" show-index="true"/>  
        <column ref="fShareToOrgFName" label="共享到组织全称" type="ro" width="400"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" width="690px" height="400px" modal="true" id="dlgScheduleArrange" url="/OA/schedule/process/schedule/schedule.w" title="日程安排" onSend="dlgScheduleArrangeSend" onReceive="dlgScheduleArrangeReceive"/>  
      <xui:layout style="height:100%"> 
        <place control="grdPersonMember" style="width:100%;height:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <!--人员详细信息试图-->  
    <xui:view id="vPersonDetail" auto-load="true"> 
      <xhtml:div data="main2" id="gridSystem" style="background-color: white; overflow: auto;width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid"> 
        <xui:column ref="recNo" label="序号" show-index="true"/>  
        <xui:column ref="fSharedOrgFName" label="共享组织全称" type="ro" width="250"/>  
        <xui:column ref="fShareToOrgFName" label="共享到组织全称" type="ro"/> 
      </xhtml:div> 
    </xui:view>  
    <!--布局-->  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择查看人" width="670px" height="450px" modal="true" id="dlgShareRange" url="/appCommon/dialogs/orgSelectDialog/orgMultiSelect/mainActivity.w" onSend="dlgShareRangeSend" onReceive="dlgShareRangeReceive"/>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%" style="table-layout:fixed" id="table_4" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <!--工具条下边的组件-->  
        <xhtml:tr> 
          <xhtml:td align="left" valign="top"> 
            <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%;height:100%" id="tabpanel_1"> 
              <xui:tab id="person_list_tb"> 
                <xui:label>个人公开范围</xui:label>  
                <xhtml:table width="100%" height="100%" border="0" id="table_6" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                  <xhtml:tr> 
                    <xhtml:td align="left" valign="top" width="100%" height="35px"> 
                      <xui:place control="vListToolbar" style="width:100%;height:100%"/> 
                    </xhtml:td> 
                  </xhtml:tr>  
                  <xhtml:tr> 
                    <xhtml:td align="left" valign="top" width="100%"> 
                      <xui:place control="vPersonMemberList" style="width:100%;height:100%"/>  
                      <xui:place control="dlgShareRange" style="top:379px;left:57px;"/> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table>  
                <xforms:action ev:event="xforms-select"> 
                  <xforms:script>person_list_tbxforms_select(event)</xforms:script> 
                </xforms:action> 
              </xui:tab>  
              <xui:tab id="person_detail_tb"> 
                <xui:label>系统公开范围</xui:label>  
                <xhtml:table width="100%" height="100%" border="0" id="table_7" style="table-layout:fixed;width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                  <xhtml:tr> 
                    <xhtml:td align="left" valign="top" width="100%"> 
                      <xui:place control="vPersonDetail" style="width:100%;height:100%"/> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table>  
                <xforms:action ev:event="xforms-select"> 
                  <xforms:script>person_detail_tbxforms_select(event)</xforms:script> 
                </xforms:action> 
              </xui:tab> 
            </xhtml:div> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>
