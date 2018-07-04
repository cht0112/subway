<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="width:143px;top:317px;height:auto;left:463px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Log" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereVersion" order-by="sCreateTime:desc" filter-relations="sTypeName,sDescription,sCreateTime,sCreatorPersonName,sActivityName,sActionName,sIP,sDeviceType"> 
      <creator action="/system/logic/action/createLogAction" id="default1"/>  
      <reader action="/system/logic/action/queryLogAction" id="default2"/>  
      <writer action="/system/logic/action/saveLogAction" id="default3"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column" onRowDblClick="mainActivity.grdMainRowDblClick"> 
      <column id="default10" label="功能" ref="sActivityName" type="ro" width="105px"/>  
      <column id="default7" label="操作者" ref="sCreatorPersonName" type="ro" width="100px"/>  
      <column id="default11" label="操作" ref="sActionName" type="ro" width="150px"/>  
      <column id="default6" label="操作时间" ref="sCreateTime" type="ro" width="140px"/>  
      <column id="default4" label="类别" ref="sTypeName" type="ro" width="100px"/>  
      <xui:column id="gridColumn2" ref="sIP" label="IP地址" type="ro" width="100px" readonly="true"/>  
      <xui:column  ref="sDeviceType" label="客户端类型" type="ro" width="100px" readonly="true"/>  
      <column id="default5" label="描述" ref="sDescription" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain" mode="IMG_TXT_LR"> 
        <item id="barItem4" name="refresh-item"/>  
        <item name="filter-pro-item" id="barItem1"></item><item id="separatorItem2" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择执行者" width="500px" height="400px" modal="true" id="executorDialog" url="/UI/SA/OPM/dialogs/selectSingleOrg/selectSingleOrg.w" onReceive="mainActivity.executorDialogReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择操作" width="500px" height="400px" modal="true" id="actionDialog" onReceive="mainActivity.actionDialogReceive" url="/SA/log/selectSingleAction.w"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择功能" width="500px" height="400px" modal="true" id="activityDialog" url="/SA/OPM/dialogs/selectFunTree/selectSingleFunction.w" onReceive="mainActivity.activityDialogReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" class="xui-tabPanel" style="height:100%;width:100%;"> 
        <xui:tab id="tabPage1"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:table border="0" cellpadding="0" cellspacing="0" height="100%" style="table-layout:fixed" width="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr valign="top"> 
              <xhtml:td style="height:70px;"> 
                <place control="tbsMain" id="controlPlace2"/>  
                <xhtml:table border="0" cellpadding="0" cellspacing="0"> 
                  <xhtml:tr> 
                    <xhtml:td>
                      <xhtml:div id="dateFilter" default-select="3" component="/UI/system/components/dateFilter.xbl.xml#dateFilter" bound-width="75px" style="margin: 2px 0 0 0; width:80px; border: 0; border-bottom: 1px solid #c0c0c0;" filter-date-mode="single" onChanged="mainActivity.dateFilterChanged"/>
                    </xhtml:td>  
                    <xhtml:td width="5px"/>  
                    <xhtml:td> 
                      <xhtml:label>操作者</xhtml:label>  
                      <xhtml:input id="executorFilter" readonly="true" style="margin: 7px 0px 0px 0px; width:100px; border: 0; border-bottom: 1px solid #c0c0c0"/>
                      <xhtml:img id="executorFilterButton" alt="选择执行者1" style="margin: 0px 0px -8px -26px;" src="/UI/system/images/doc/file_pro.gif" onclick="mainActivity.executorFilterButtonClick(event)"/>  
                      <xhtml:img id="clearExecutorFilterButton" alt="清除执行者" style="margin: 0px 0px -6px -8px;" src="/UI/system/images/templete/reset.gif" onclick="mainActivity.clearExecutorFilterButtonClick(event)"/>
                       
                    </xhtml:td>  
                    <xhtml:td width="5px"/>  
                    <xhtml:td> 
                      <xhtml:label>功能</xhtml:label>  
                      <xhtml:input id="activityFilter" readonly="true" style="margin: 7px 0 0 0; width:100px; border: 0; border-bottom: 1px solid #c0c0c0"/>
                      <xhtml:img id="activityFilterButton" alt="选择功能" style="margin: 0 0 -8px -26px;" src="/UI/system/images/doc/file_pro.gif" onclick="mainActivity.activityFilterButtonClick(event)"/>  
                      <xhtml:img id="clearActivityFilterButton" alt="清除功能" style="margin: 0 0 -6px -8px;" src="/UI/system/images/templete/reset.gif" onclick="mainActivity.clearActivityFilterButtonClick(event)"/>
                       
                    </xhtml:td>  
                    <xhtml:td width="5px"/>  
                    <xhtml:td> 
                      <xhtml:label>操作</xhtml:label>  
                      <xhtml:input id="actionFilter" readonly="true" style="margin: 7px 0 0 0; width:100px; border: 0; border-bottom: 1px solid #c0c0c0"/>
                        
                      <xhtml:img id="actionFilterButton" alt="选择操作" style="margin: 0 0 -8px -26px;" src="/UI/system/images/doc/file_pro.gif" onclick="mainActivity.actionFilterButtonClick(event)"/>  
                      <xhtml:img id="clearActionFilterButton" alt="清除操作" style="margin: 0 0 -6px -8px;" src="/UI/system/images/templete/reset.gif" onclick="mainActivity.clearActionFilterButtonClick(event)"/>
                       
                    </xhtml:td>  
                    <xhtml:td width="5px"/>  
                    <xhtml:td> 
                      <xhtml:label>模糊条件</xhtml:label>  
                      <xhtml:input id="likeFilter" style="margin: 7px 0 0 0; width:100px; border: 0; border-bottom: 1px solid #c0c0c0"/> 
                    </xhtml:td>  
                    <xhtml:td width="5px"/>  
                    <xhtml:td> 
                      <xforms:trigger id="search"> 
                        <xforms:label>查询</xforms:label>  
                        <xforms:action id="action1" ev:event="DOMActivate"> 
                          <xforms:script id="xformsScript1">mainActivity.searchClick(event)</xforms:script> 
                        </xforms:action> 
                      </xforms:trigger> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td> 
                <place control="grdMain" id="controlPlace1" style="width:100%;height:100%"/>  
                <xui:place control="executorDialog" id="controlPlace5"/>  
                <xui:place control="actionDialog" id="controlPlace4"/>  
                <xui:place control="activityDialog" id="controlPlace3"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabPage2"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div style="height:10px"/>  
          <xhtml:table border="0" cellpadding="0" cellspacing="0" style="width:800px;table-layout:fixed"> 
            <xhtml:tr> 
              <xhtml:td style="width:10px"/>  
              <xhtml:td style="width:70px;">功能：</xhtml:td>  
              <xhtml:td style="width:200px;"> 
                <xforms:output ref="data('dataMain')/sActivityName"/> 
              </xhtml:td>  
              <xhtml:td style="width:70px;">操作：</xhtml:td>  
              <xhtml:td style="width:200px"> 
                <xforms:output ref="data('dataMain')/sActionName"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr style="height:10px"/>  
            <xhtml:tr> 
              <xhtml:td style="width:10px"/>  
              <xhtml:td>操作者：</xhtml:td>  
              <xhtml:td> 
                <xforms:output ref="data('dataMain')/sCreatorPersonName"/> 
              </xhtml:td>  
              <xhtml:td>操作时间：</xhtml:td>  
              <xhtml:td> 
                <xforms:output ref="data('dataMain')/sCreateTime"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr style="height:10px"/>  
            <xhtml:tr> 
              <xhtml:td style="width:10px"/>  
              <xhtml:td style="width:100px">IP地址：</xhtml:td>  
              <xhtml:td> 
                <xforms:output ref="data('dataMain')/sIP"/> 
              </xhtml:td>  
              <xhtml:td>类别：</xhtml:td>  
              <xhtml:td> 
                <xforms:output ref="data('dataMain')/sTypeName"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr style="height:10px"/> 
          </xhtml:table>  
          <xhtml:table border="0" cellpadding="0" cellspacing="0" style="width:800px;table-layout:fixed"> 
            <xhtml:tr> 
              <xhtml:td style="width:13px;"/>  
              <xhtml:td style="width:105px;" valign="top">参数：</xhtml:td>  
              <xhtml:td> 
                <xforms:textarea ref="data('dataMain')/sParameters" style="width:549px;height:150px;" disable="true" readonly="true"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr style="height:10px"/>  
            <xhtml:tr> 
              <xhtml:td style="width:10px"/>  
              <xhtml:td style="width:100px;" valign="top">返回值：</xhtml:td>  
              <xhtml:td> 
                <xforms:textarea ref="data('dataMain')/sResult" style="width:553px;height:150px;" disable="true" readonly="true"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr style="height:10px"/>  
            <xhtml:tr> 
              <xhtml:td style="width:10px"/>  
              <xhtml:td style="width:100px;" valign="top">描述：</xhtml:td>  
              <xhtml:td> 
                <xforms:textarea ref="data('dataMain')/sDescription" style="width:551px;height:150px;" disable="true" readonly="true"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource/>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</xui:window>
