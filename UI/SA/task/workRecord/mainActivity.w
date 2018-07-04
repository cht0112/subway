<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" cacheable="true"
  id="work_record_app">  
  <xforms:model id="mainmodel" style="top:246px;height:auto;left:327px;"> 
    <data id="main" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_WorkRecord"
      offset="0" limit="20" order-by="sCreateTime:desc" auto-load="false" onValueChanged="mainActivity.mainValueChanged"
      onRefreshCreateParam="mainActivity.mainRefreshCreateParam" filter-relations="sImportanceName,sName,sProjectName,sCustomerName,sPlanName,sStatusName,sExecutorFName,sExecuteTime,sCreatorFName,sCreateTime,sLastModifyTime"
      direct-delete="true"> 
      <reader action="/SA/task/logic/action/queryWorkRecordAction"/>  
      <writer action="/SA/task/logic/action/saveWorkRecordAction"/>  
      <creator action="/SA/task/logic/action/createWorkRecordAction"/>  
      <rule concept="SA_WorkRecord" readonly="not(contains(data('main')/sCreatorFID,call('justep.Context.getCurrentPersonID')))"/>  
      <rule relation="sActualStartTime" readonly="true()"/>  
      <rule relation="sActualFinishTime" readonly="true()"/>  
      <rule relation="sCreatorFName" readonly="true()"/>  
      <rule relation="sCreateTime" readonly="true()"/>  
      <master id="master1"/> 
    </data>  
    <!--  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="json"
      columns="" src="" auto-load="false" id="data1"/>
      -->
    <data id="task_importance" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_Importance" store-type="simple" auto-load="false"> 
      <reader action="/system/logic/action/queryImportanceAction"/> 
    </data>  
    <data id="custom_filter" auto-load="true" component="/UI/system/components/data.xbl.xml#data"
      store-type="simple" columns="type,org_person,org,person,parent_org,status,like"> 
      <rows xmlns="">  
        <row> 
          <cell/>   
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>submited</cell>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <!-- 
     -->  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">mainActivity.mainmodelLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <view id="view1"> 
    <view id="list_toolbar"> 
      <xhtml:div id="date-selector2" component="/UI/system/components/dateFilter.xbl.xml#dateFilter"
        default-select="3" style="margin: 0px 0 0 0; width:100px;" filter-date-mode="single"
        onChanged="mainActivity.dateSelectorChanged"/>
      <xhtml:div component="/UI/system/components/orgFilter.xbl.xml#orgFilter" has-person-member="true"
        default-value="本人" style="width: 100px" id="orgPersonFilter" manage-codes="businessManagement"/>
      <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" style="margin: 0px 0 0 0; width:100px;"
        multi-select="true" dropdown-height="75px" id="div1" ref="data('custom_filter')/status"> 
        <option value="waiting">待办</option>  
        <option value="finished">已办</option>  
        <option value="submited">提交</option> 
      </xhtml:div>
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="image" class="button-yellow" icon-class="icon-system-search"> 
        <xforms:label><![CDATA[搜索]]></xforms:label>  
        <xforms:action id="action3" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript3">mainActivity.trigger1Click(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>
      <xui:layout id="layout1"> 
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
          separator="false" separator-size="2" id="buttonBar1"
          expandable="true" expanded="false" 
          expanded-label="展开过滤" 
          collapsed-label="隐藏过滤" 
          expanded-position="6" expanded-width="75">
          <xui:place control="trigger4" id="controlPlace2"/>  
          <xui:place control="trigger6" id="controlPlace6"/>
          <xui:place control="trigger5" id="controlPlace3"/>  
          <xui:place control="trigger2" id="controlPlace1"/>
		  <xui:place control="btn_find" id="controlPlace14"></xui:place>
          <place control="date-selector2"/>  
          <place control="orgPersonFilter"/>
          <place control="div1"/>
          <xforms:input style="width:120px;height:22px;" ref="data('custom_filter')/like"
             id="input1"> 
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
	   									justep.xbl("main").refreshData();
	   								]]> </xforms:script> 
            </xforms:action>  
            <xforms:action id="action2" ev:event="xforms-value-changed"> 
              <xforms:script id="xformsScript2">mainActivity.input1Change(event)</xforms:script> 
            </xforms:action> 
          </xforms:input>
          <place control="trigger1" style="width:30px;"/> 
        </xhtml:div> 
      </xui:layout>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" operation-owner="main" operation="new" class="button-blue"
        appearance="image-text"> 
        <xforms:label id="default3"><![CDATA[]]></xforms:label>
      <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[mainActivity.trigger4Click(event)]]></xforms:script></xforms:action></xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" operation-owner="main" operation="refresh" appearance="image-minimal"> 
        <xforms:label id="default6"><![CDATA[]]></xforms:label>
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" operation-owner="main" operation="delete" appearance="image-minimal" icon-class="icon-system-trash"> 
        <xforms:label id="default1"><![CDATA[]]></xforms:label>
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6" operation-owner="main" operation="save" icon-class="icon-system-floppy"
        appearance="image-minimal"> 
        <xforms:label id="default10"><![CDATA[]]></xforms:label>
      </xforms:trigger>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn_find" appearance="minimal" operation-owner="bizDataFilterMenu1" operation="show">
   <xforms:label id="default14"><![CDATA[]]></xforms:label>
  </xforms:trigger></view>  
    <view id="list_grid"> 
        
      <xhtml:div id="main_grid" data="main" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%; height: 100%;" onRowDblClick="mainActivity.mainGridRowDblClick" class="grid-compact"> 
        <column ref="sImportanceName" width="20px" label="!" />  
        <column ref="sName" width="120px" />  
        <column ref="sProjectName" width="100px" />  
        <column ref="sCustomerName" width="100px" />  
        <column ref="sPlanName" width="100px" />  
        <column ref="sExecutorDeptName" width="100px" />  
        <column ref="sExecutorPersonName" width="100px" />  
        <column ref="sCreatorDeptName" width="100px" />  
        <column ref="sCreatorPersonName" width="100px" />  
        <column ref="sCreateTime" width="70px" type="date" readonly="true" />  
        <column ref="sLastModifyTime" width="80px" type="date" readonly="true" />  
        <column ref="sCode" width="100px" /> 
      </xhtml:div><layout style="width: 100%; height: 100%"> 
         
      <place control="main_grid"/><xui:place control="bizDataFilterMenu1" id="controlPlace5" style="top:84px;left:24px;"></xui:place></layout> 
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="main"></xhtml:div></view>  
    <view id="detail_toolbar" auto-load="false"> 
      <xhtml:div width="100%" height="40px" component="/UI/system/components/toolbars.xbl.xml#toolbars"
        id="toolbars2" style="height:40px; display: none"> 
        <bar data="main" component="/UI/system/components/bar.xbl.xml#navigatorBar"
          id="navigatorBar2" mode="IMG_TXT_LR"> 
          <item name="insert-item"/>  
          <item name="save-item"/>  
          <item name="delete-item" readonly="not(contains(data('main')/sCreatorFID,call('justep.Context.getCurrentPersonID')))"/>  
          <item name="refresh-item"/>  
          <item name="separator"/>  
          <item name="first-item"/>  
          <item name="pre-item"/>  
          <item name="next-item"/>  
          <item name="last-item"/>  
        </bar> 
      </xhtml:div> 
    </view>  
    <view id="detail_form" auto-load="false" class="xui-container"> 
      <layout style="width: 100%; height: 100%;position:relative;" type="flow">
        <xhtml:div class="cell-layout" component="/UI/system/components/cellLayout.xbl.xml#cellLayout"
          id="cellLayout1" style="width:100%;height:91%;" row-height="35"> 
          <place id="default4" control="TaskName" style="width:100%;height:30px;"/>  
          <place id="default5" control="TaskCustomId" style="width:100%;height:30px;"/>  
          <place id="default7" control="TaskImportance" style="width:100%;height:30px;"/>  
          <place id="default8" control="TaskWorkPlan" style="width:100%;height:30px;"/>  
          <place id="default9" control="TaskProjectId" style="width:100%;height:30px;"/>  
          <place id="default11" control="TaskContent" style="width:100%;"/>  
          <place id="default13" control="TaskRealityStartDate" style="width:100%;height:30px;"/>  
          <place id="default15" control="TaskRealityEndDate" style="width:100%;height:30px;"/>  
          <place id="default17" control="TaskSubmitterId" style="width:100%;height:30px;"/>  
          <place id="default19" control="TaskSubmitDate" style="width:100%;height:30px;"/>  
          <layout-content id="default20"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="35" columnWidth="80" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 101px"></td><td  style="WIDTH: 13px"></td><td  style="WIDTH: 133px"></td><td  style="WIDTH: 85px"></td><td  style="WIDTH: 133px"></td></tr>
     <tr><td  style="HEIGHT: 41px"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-LEFT: 0px; PADDING-RIGHT: 8px; HEIGHT: 41px; COLOR: #444; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">* 名 称</td><td  colSpan="6" style="TEXT-ALIGN: left; HEIGHT: 41px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskName"></td></tr>
     <tr><td  style="HEIGHT: 41px"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 41px; FONT-SIZE: 12px; PADDING-TOP: 3px">客 户</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 41px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskCustomId"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 41px; COLOR: #444; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">* 重 要 性</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 41px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskImportance"></td></tr>
     <tr><td  style="HEIGHT: 41px"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 41px; FONT-SIZE: 12px; PADDING-TOP: 3px">计划/工作项</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 41px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskWorkPlan"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 41px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">项 目</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 41px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskProjectId"></td></tr>
     <tr><td  style="HEIGHT: 181px"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 181px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">内 容</td><td  colSpan="6" style="TEXT-ALIGN: left; PADDING-BOTTOM: 3px; HEIGHT: 181px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: top" componentId="textarea1"></td></tr>
     <tr><td  style="HEIGHT: 41px"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 41px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">开始时间</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 41px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskRealityStartDate"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 41px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">结束时间</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 41px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskRealityEndDate"></td></tr>
     <tr><td  style="HEIGHT: 46px"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 46px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">提 交 者</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 46px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskSubmitterId"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 46px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">修改时间</td><td  colSpan="2" style="TEXT-ALIGN: left; HEIGHT: 46px; FONT-SIZE: 12px; VERTIAL-ALIGN: middle" componentId="TaskSubmitDate"></td></tr>
     <tr><td  style="HEIGHT: 47px"></td><td  colSpan="2" style="TEXT-ALIGN: right; PADDING-BOTTOM: 3px; PADDING-RIGHT: 8px; HEIGHT: 47px; FONT-SIZE: 12px; PADDING-TOP: 3px; vertial-align: middle">编 号</td><td  colSpan="6" style="HEIGHT: 47px" componentId="output1"></td></tr>
  </table>]]></layout-content>  
          <xui:place control="textarea1" id="controlPlace11" style="width:100%;height:170px;"/>  
          <xui:place control="output1" id="controlPlace12" style="width:231px;padding-top:3px;padding-bottom:3px;padding-left:3px;height:30px;"/>
        </xhtml:div>
      </layout>  
      <xforms:input ref="data('main')/sName" id="TaskName" />  
      <xforms:input ref="data('main')/sCustomerName" id="TaskCustomId" auto-size="true"
        class=""/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#simpleSelect" id="TaskImportance"
        label-ref="data('main')/sImportanceName" ref="data('main')/sImportanceID"
        dropdown-height="74px" option-data="task_importance" option-label="sName"
        option-value="rowid" class=""/>  
      <xforms:input ref="data('main')/sPlanName" id="TaskWorkPlan" auto-size="true" class=""/>  
      <xforms:input ref="data('main')/sProjectName" auto-size="true" id="TaskProjectId"
        class=""/>  
      <xforms:textarea mediatype="text/html" ref="data('main')/sContent" auto-size="true"
        xforms:rows="20" xforms:cols="122" incremental="true" id="TaskContent" class=""/>  
      <xforms:input ref="data('main')/sActualStartTime" auto-size="true" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')"
        id="TaskRealityStartDate" class=""/>  
      <xforms:input ref="data('main')/sActualFinishTime" auto-size="true" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')"
        id="TaskRealityEndDate" class=""/>  
      <xforms:input ref="data('main')/sCreatorFName" auto-size="true" id="TaskSubmitterId"
        class=""/>  
      <xforms:input ref="data('main')/sCreateTime" auto-size="true" xforms:format="format-dateTime('yyyy-MM-dd hh:mm')"
        id="TaskSubmitDate" class=""/>  
      <xforms:textarea ref="data('main')/sContent" id="textarea1" class="" mediatype="text/html"/>  
      <xforms:output id="output1" ref="data('main')/sCode"/>
    </view>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" operation-owner="main" operation="save" appearance="image-text"
      class="button-blue">
      <xforms:label id="default18"><![CDATA[]]></xforms:label>
    </xforms:trigger>
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger10" operation-owner="main" operation="delete" appearance="image-text"
      class="button-orange"> 
      <xforms:label id="default22"><![CDATA[]]></xforms:label>
    </xforms:trigger>
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" id="pagination1" data="main" items="first last pre next" align="right" style="padding-right: 30px;" page-count="15" /><layout style="width: 100%; height: 100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%;height:100%;"
        id="tablist" class="noneborder"> 
        <tab id="list_tab" selected="true"> 
          <label>列表</label>  
          <xhtml:div style="border:0px;width:100%;height:100%;" id="table2" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
            <top size="45px"> 
              <place control="list_toolbar" style="padding: 10px 10px 0  10px;height:35px;"/> 
            </top>  
            <center>
              <place control="list_grid"/> 
            </center>  
            <bottom size="60px"> 
               
            <xui:place control="pagination1" id="controlPlace04" />
  </bottom>  
            <left size="10px" id="borderLayout-left1"/>  
            <right size="10px" id="borderLayout-right1"/>
          </xhtml:div> 
        </tab>  
        <tab id="detail_tab" xforms-select="mainActivity.detailTabSelect"> 
          <label>详细</label>  
          <xhtml:div style="width:720px;height: 100%;margin: 0 auto;"> 
            <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%"
              style="table-layout: fixed" id="table3" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="40px" valign="top"> 
                <xhtml:td style="height:50px;"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                    separator="false" separator-size="16" id="buttonBar3" style="padding:16px 30px 0  10px;height:25px;float:right;">
                    <xui:place control="trigger8" id="controlPlace8"/>  
                    <xui:place control="trigger10" id="controlPlace10"/>
                  </xhtml:div> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr valign="top"> 
                <xhtml:td style="height:410px;"> 
                  <place control="detail_form"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr valign="top"> 
                <xhtml:td style="height:60px;"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                    separator="false" separator-size="16" id="buttonBar4" style="padding:0 30px 0  10px;height:25px;float:right;">
                    <xui:place control="trigger7" id="controlPlace7"/>  
                    <xui:place control="trigger9" id="controlPlace9"/>
                  </xhtml:div>
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:div> 
        </tab> 
      </xhtml:div> 
    </layout>  
      
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger7" operation-owner="main" operation="prevRow" appearance="image-minimal"> 
      <xforms:label id="default2"><![CDATA[]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger9" operation-owner="main" operation="nextRow" appearance="image-minimal"> 
      <xforms:label id="default16"><![CDATA[]]></xforms:label>
    </xforms:trigger>
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/workRecord/mainActivity.js"/>  
    <xhtml:script type="text/javascript" src="/UI/SA/task/js/common.js"/> 
  </resource> 
</window>
