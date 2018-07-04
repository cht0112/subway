<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="width:143px;top:317px;height:auto;left:463px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Log" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereVersion" order-by="sCreateTime:desc"> 
      <creator action="/system/logic/action/createLogAction" id="default1"/>  
      <reader action="/system/logic/action/queryLogAction" id="default2"/>  
      <writer action="/system/logic/action/saveLogAction" id="default3"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column" onRowDblClick="mainActivity.grdMainRowDblClick" class="grid-compact"> 
      <column id="default10" label="功能" ref="sActivityName" type="ro" width="100px"/>  
      <column id="default7" label="操作者" ref="sCreatorPersonName" type="ro" width="100px"/>  
      <column id="default11" label="操作" ref="sActionName" type="ro" width="150px"/>  
      <column id="default6" label="操作时间" ref="sCreateTime" type="ro" width="140px"/>  
      <column id="default4" label="类别" ref="sTypeName" type="ro" width="100px"/>  
      <xui:column id="gridColumn2" ref="sIP" label="IP地址" type="ro" width="100px" readonly="true"/>  
      <xui:column ref="sDeviceType" label="客户端类型" type="ro" width="100px" readonly="true"/>  
      <column id="default5" label="描述" ref="sDescription" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择执行者" width="496px" height="364px" modal="true" id="executorDialog" url="/UI/SA/OPM/dialogs/selectSingleOrg/selectSingleOrg.w" onReceive="mainActivity.executorDialogReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择操作" width="496px" height="364px" modal="true" id="actionDialog" onReceive="mainActivity.actionDialogReceive" url="/SA/log/selectSingleAction.w" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择功能" width="496px" height="364px" modal="true" id="activityDialog" url="/SA/OPM/dialogs/selectFunTree/selectSingleFunction.w" onReceive="mainActivity.activityDialogReceive" dialogUpdate="true"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" class="noneborder" style="height:100%;width:100%;"> 
        <xui:tab id="tabPage1"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top size="38px" id="borderLayout-top1"> 
              <xui:place control="bizDataFilterMenu1" id="controlPlace9" style="top:12px;left:581px;"/>  
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="4"> 
                <xui:place control="trigger2" id="controlPlace8"/>
                <xhtml:div id="dateFilter" default-select="3" component="/UI/system/components/dateFilter.xbl.xml#dateFilter" bound-width="75px" style="width:80px;height:24px;" filter-date-mode="single" onChanged="mainActivity.dateFilterChanged"/>
                <xhtml:span id="span1" style="font-size:12px;">操作者</xhtml:span>  
                <xhtml:div style="position:relative;border:1px solid #CCC;font-size:0;"> 
                  <xhtml:input type="text" value="" id="executorFilter" class="xui-input" style="border:none;padding-left:3px;width:80px;font-size:12px" readonly="true"/>  
                  <xui:place control="trigger3" id="controlPlace10" style="width:18px;"/>  
                  <xui:place control="trigger4" id="controlPlace11" style="width:18px;"/> 
                </xhtml:div>  
                <xhtml:span id="span1" style="font-size:12px;">功能</xhtml:span>  
                <xhtml:div style="position:relative;border:1px solid #CCC;font-size:0;"> 
                  <xhtml:input type="text" value="" id="activityFilter" class="xui-input" style="border:none;padding-left:3px;width:80px;font-size:12px" readonly="true"/>  
                  <xui:place control="trigger6" id="controlPlace15" style="width:18px;"/>  
                  <xui:place control="trigger5" id="controlPlace14" style="width:18px;"/> 
                </xhtml:div>  
                <xhtml:span id="span1" style="font-size:12px;">操作</xhtml:span>  
                <xhtml:div style="position:relative;border:1px solid #CCC;font-size:0;"> 
                  <xhtml:input type="text" value="" id="actionFilter" class="xui-input" style="border:none;padding-left:3px;width:80px;font-size:12px" readonly="true"/>  
                  <xui:place control="trigger8" id="controlPlace16" style="width:18px;"/>  
                  <xui:place control="trigger7" id="controlPlace17" style="width:18px;"/>
                </xhtml:div>  
                <xhtml:span id="span1" style="font-size:12px;">模糊条件</xhtml:span>  
                <xhtml:input id="likeFilter" class="xui-input" style="width:80px;"/>  
                <xui:place control="search" id="controlPlace18" style="width:32px;"/>
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace1" style="width:100%;height:100%"/>  
              <xui:place control="executorDialog" id="controlPlace5"/>  
              <xui:place control="actionDialog" id="controlPlace4"/>  
              <xui:place control="activityDialog" id="controlPlace3"/> 
            </center>  
            <bottom size="38px" id="borderLayout-bottom1">
              <xui:place control="pagination1" id="controlPlace6"/>
            </bottom> 
          </xhtml:div>
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
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination1" data="dataMain" align="right"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" operation-owner="bizDataFilterMenu1" appearance="image-minimal" operation="show"> 
      <xforms:label id="default9"/>
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMain"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" appearance="image-minimal" icon-class="icon-system-window"> 
      <xforms:label id="default13"><![CDATA[]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript2"><![CDATA[mainActivity.executorFilterButtonClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" appearance="image-minimal" icon-class="icon-system-cancel"> 
      <xforms:label id="default14"/>  
      <xforms:action id="action3" ev:event="DOMActivate">
        <xforms:script id="xformsScript3"><![CDATA[mainActivity.clearExecutorFilterButtonClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6" appearance="image-minimal" icon-class="icon-system-window"> 
      <xforms:label id="default16"/>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5">mainActivity.activityFilterButtonClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" appearance="image-minimal" icon-class="icon-system-cancel"> 
      <xforms:label id="default15"/>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4">mainActivity.clearActivityFilterButtonClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger7" appearance="image-minimal" icon-class="icon-system-cancel"> 
      <xforms:label id="default18"/>  
      <xforms:action id="action6" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript6">mainActivity.clearActionFilterButtonClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" appearance="image-minimal" icon-class="icon-system-window"> 
      <xforms:label id="default17"/>  
      <xforms:action id="action8" ev:event="DOMActivate">
        <xforms:script id="xformsScript8"><![CDATA[mainActivity.actionFilterButtonClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xforms:trigger id="search" icon-class="icon-system-search" class="button-yellow" appearance="image"> 
      <xforms:label id="default12">查询</xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">mainActivity.searchClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>
  </xui:view>  
  <xui:resource/>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</xui:window>
