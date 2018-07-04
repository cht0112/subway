<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="width:150px;top:175px;height:110px;left:79px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dApplyList" concept="OA_MT_UseApply" order-by="fApplyDate:desc" filter-relations="fApplyDeptName,fApplyPsnName,fApplyDate,fMeetName,fBoardroom,fBeginTime,fEndTime,fBizStateName"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTUSEAPPLYAction"/>  
      <rule concept="OA_MT_UseApply" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="true" id="dStatus" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell>编辑中</cell>  
          <cell>bsEditing</cell> 
        </row>  
        <row> 
          <cell>待办中</cell>  
          <cell>bsWaiting</cell> 
        </row>  
        <row> 
          <cell>流转中</cell>  
          <cell>bsFlowing</cell> 
        </row>  
        <row> 
          <cell>已完成</cell>  
          <cell>bsFinished</cell> 
        </row>  
        <row> 
          <cell>已终止</cell>  
          <cell>bsAbort</cell> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="person,keyword,roomIDs,status" src="" auto-load="true" id="dFilter" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>bsFinished</cell> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dBoardroom" concept="OA_MT_Boardroom" order-by="fCode:asc"> 
      <reader id="default6" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrApplyList"> 
      <xui:bar component="/UI/appCommon/components/standardProcessQueryBar.xbl.xml#standardProcessQueryBar" id="standardProcessQueryBar" data="dApplyList" execute-concept="OA_MT_UseExecute" smart-relations="fApplyDeptName,fApplyPsnName,fMeetName,fBoardroom"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'" id="gridFilter" filter-data="dApplyList" filter-relation="fBoardroomID" auto-size="true" default-label="'全部'"> 
      <xforms:label ref="fName" id="xuiLabel1"/>  
      <xforms:value ref="fID" id="default2"/>  
      <xforms:itemset id="default3" data="dBoardroom"> 
        <xforms:column ref="fID" visible="false" id="default5"/>  
        <xforms:column ref="fName" id="default7"/> 
      </xforms:itemset> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vApplyList"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdApply" data="dApplyList"> 
        <column ref="recNo" label="序号" show-index="true" width="60"/>  
        <column id="gridColumn8" ref="fBizStateName" label="状态" type="ro" width="60"/>  
        <column id="gridColumn1" ref="fApplyDeptName" label="申请部门" type="ro" width="80"/>  
        <column id="gridColumn2" ref="fApplyPsnName" label="申请人员" type="ro" width="80"/>  
        <column id="gridColumn3" ref="fApplyDate" label="申请日期" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/>  
        <column id="gridColumn4" ref="fMeetName" label="会议主题" type="html" width="140" onRender="grdApply_fMeetNameRender"/>  
        <column id="gridColumn5" ref="fBoardroom" label="会议室" type="ro" width="100"/>  
        <column id="gridColumn6" ref="fBeginTime" label="开始时间" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/>  
        <column id="gridColumn7" ref="fEndTime" label="结束时间" type="dateTime" format="yyyy-MM-dd hh:mm"/> 
      </xhtml:div>  
      <layout id="layout1"> 
        <place control="grdApply" style="height:100%;width:100%;" id="ctlList"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%;"> 
      <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default9"> 
          <xhtml:td style="height:35px;"> 
            <place control="tbrApplyList" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default10"> 
          <xhtml:td id="td3"> 
            <place control="vApplyList" id="controlPlace2" style="height:100%;width:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="boardroomUseApplyQuery.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>
