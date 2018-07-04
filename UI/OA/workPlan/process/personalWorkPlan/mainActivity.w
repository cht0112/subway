<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:244px;left:316px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="bizData1" concept="OA_GZJH" relations="" order-by="fCreateTime:desc" filter-relations="fJHZT,fPlanYear,fPlanMonth,fPlanWeek,fCreatePsnName,fCreateTime"> 
      <reader id="default4" action="/OA/workPlan/logic/action/queryOA_GZJHAction"/>  
      <writer id="default5" action="/OA/workPlan/logic/action/saveOA_GZJHAction"/>  
      <creator id="default6" action="/OA/workPlan/logic/action/createOA_GZJHAction"/>  
      <filter name="filter0" id="filter1">fGZJHLX = '个人工作计划'</filter>  
      <rule id="dataBizRule1" concept="OA_GZJH" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="人员选择" width="450px" height="350px" modal="true" id="dlgSelectPsn" url="/appCommon/dialogs/orgSelectDialog/orgSingleSelect/mainActivity.w" onSend="dlgSelectPsnSend" onReceive="dlgSelectPsnReceive"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" mode="IMG_TXT_LR" data="bizData1"> 
        <item id="barItem9"> 
          <xforms:trigger style="height:24px;width:25px;" id="trgAdd" appearance="image" src="/UI/OA/common/images/insert.gif" dis-src="/UI/OA/common/images/un_insert.gif"> 
            <xforms:label id="xuiLabel1">新增</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1">trgAddDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item" id="barItem7"/>  
        <item name="delete-item" id="barItem8"/>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="customPageItem1" page-count="0"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" style="width:80px;" id="extDateFilter1" filter-data="bizData1" filter-date-mode="single" filter-date-relation1="fCreateTime"/> 
        </item>  
        <!--<item id="barItem10">
          <xhtml:div onInit="" onChanged="" component="/UI/system/components/orgFilter.xbl.xml#orgFilter"
            id="orgFilter1" style="width:130;" manage-codes="workPlanManagement" default-value="本人"> 
            <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect"
              id="treeSelect1"/>
          </xhtml:div>
        </item>-->  
        <item id="barItem2"> 
          <xhtml:div component="/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter" style="width:140px" id="extOrgFilter1" filter-data="bizData1" person-id-relation="fCreatePsnID" org-url-relation="fCreatePsnFID" manage-type-codes="'workPlanManagement'"/> 
        </item>  
        <item id="barItem3"> 
          <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" style="width:120px;" id="smartFilter1" filter-data="bizData1" filter-relations="fGZNR,fJHZT,fNO,fDD,fCreateDeptName,fCreatePsnName"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="bizData1"> 
      <column ref="recNo" label="序号" show-index="true" width="40"/>  
      <!--<xui:column id="gridColumn11" ref="fBizStateName" label="状态" type="ed" width="40"/>-->  
      <xui:column id="gridColumn3" ref="fPlanYear" label="年度" type="ro" width="60" align="center"/>  
      <xui:column id="gridColumn4" ref="fPlanMonth" label="月份" type="ro" width="40" align="center"/>  
      <!--<xui:column id="gridColumn5" ref="fPlanWeek" label="周" type="ro" width="60"/>-->  
      <xui:column id="gridColumn1" ref="fPlanWeek" label="周" type="ro" width="60" align="center"/>  
      <xui:column id="gridColumn6" ref="fJHZT" label="计划主题" type="html" width="300" onRender="grid1FJHZTRender"/>  
      <!--      <xui:column id="gridColumn4" ref="fDD" label="地点" type="ed" width="50" style="top:0;left:0;"/>  -->  
      <xui:column id="gridColumn12" ref="fCreatePsnName" label="提交人员" type="ro" width="100" align="center"/>  
      <xui:column id="gridColumn13" ref="fCreateTime" label="编制时间" type="dateTime" width="120" format="yyyy-MM-dd hh:mm" align="center"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default25"> 
          <xhtml:td style="width:98%;height:40px;font-size:20;font-weight:bold" align="center">
          	<xhtml:input type="text" value="我的工作计划编制" id="iptTitle" class="xui-autofill" style="text-align:center;font-size:20px;font-weight:bold;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default1"> 
          <xhtml:td id="td1" style="height:35px"> 
            <xui:place control="toolbars1" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default2"> 
          <xhtml:td id="td2"> 
            <xui:place control="grid1" id="controlPlace4" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="dlgSelectPsn" id="controlPlace4" style="top:278px;left:253px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
