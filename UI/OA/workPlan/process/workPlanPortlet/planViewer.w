<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:244px;left:316px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="15" update-mode="whereVersion" auto-load="false" id="bizData1" concept="OA_GZJH" order-by="fPlanYear:desc;fPlanMonth:asc;fPlanWeek:desc"> 
      <reader id="default4" action="/OA/workPlan/logic/action/queryOA_GZJHAction"/>  
      <!--<writer id="default5" action="/OA/workPlan/logic/action/saveOA_GZJHAction"/>  
      <creator id="default6" action="/OA/workPlan/logic/action/createOA_GZJHAction"/>-->  
      <!--<filter name="filter0" id="filter1">fGZJHLX = '个人工作计划'</filter>-->  
      <rule id="dataBizRule1" concept="OA_GZJH" readonly="true()"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="OA_GZNR" id="dGZNR" limit="20" offset="0" store-type="grid" update-mode="whereVersion" order-by="fPlanTime:desc"> 
      <reader action="/OA/workPlan/logic/action/queryOA_GZNRAction"/>  
      <master id="master1" data="bizData1" relation="fGZJHID"/>  
      <rule id="dataBizRule6" concept="OA_GZNR" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default7">  
        <row id="default8"> 
          <cell id="default11">局工作计划</cell>  
          <cell id="default12">局工作计划</cell> 
        </row>  
        <row id="default13"> 
          <cell id="default14">部工作计划</cell>  
          <cell id="default15">部工作计划</cell> 
        </row>  
        <row id="default16"> 
          <cell id="default17">个人工作计划</cell>  
          <cell id="default18">个人工作计划</cell> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="radioTypeValue,radioKindValue,condition" src="" auto-load="true" id="dType" store-type="simple"> 
      <rows xmlns="" id="default5">  
        <row id="default6"> 
          <cell id="default19">3</cell>  
          <cell id="default110">2</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">model1XformsModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="人员选择" width="450px" height="350px" modal="true" id="dlgSelectPsn" url="/appCommon/dialogs/orgSelectDialog/orgSingleSelect/mainActivity.w" onSend="dlgSelectPsnSend" onReceive="dlgSelectPsnReceive"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="radioToolBars"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customRadioBar1"> 
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" style="width:80px;" id="extDateFilter1" filter-data="bizData1" filter-date-mode="single" default-select="7" filter-date-relation1="fCreateTime"/> 
        </item>  
        <item name="separator" id="separatorItem2"/>  
        <item id="yearBarItem"> 
          <xforms:select1 ref="data('dType')/radioTypeValue" id="radioType"> 
            <xforms:item id="selectItem1"> 
              <xforms:label id="xuiLabel2">年工作计划</xforms:label>  
              <xforms:value id="default3">2</xforms:value> 
            </xforms:item>  
            <xforms:item id="selectItem2"> 
              <xforms:label id="xuiLabel3">月工作计划</xforms:label>  
              <xforms:value id="default9">3</xforms:value> 
            </xforms:item>  
            <xforms:item id="selectItem3"> 
              <xforms:label id="xuiLabe23">周工作计划</xforms:label>  
              <xforms:value id="default29">4</xforms:value> 
            </xforms:item>  
            <!--<xforms:item id="selectItem7"> 
              <xforms:label id="xuiLabel7">全部</xforms:label>  
              <xforms:value id="default22">0</xforms:value> 
            </xforms:item>--> 
          </xforms:select1> 
        </item>  
        <item name="separator" id="separatorItem3"/>  
        <item id="kindBarItem"> 
          <xforms:select1 ref="data('dType')/radioKindValue" id="radioKind"> 
            <xforms:item id="selectItem4"> 
              <xforms:label id="xuiLabel4">个人工作计划</xforms:label>  
              <xforms:value id="default10">2</xforms:value> 
            </xforms:item>  
            <xforms:item id="selectItem6"> 
              <xforms:label id="xuiLabel6">局工作计划</xforms:label>  
              <xforms:value id="default12">4</xforms:value> 
            </xforms:item>  
            <xforms:item id="selectItem5"> 
              <xforms:label id="xuiLabel5">部工作计划</xforms:label>  
              <xforms:value id="default11">3</xforms:value> 
            </xforms:item>  
            <!--<xforms:item id="selectItem8"> 
              <xforms:label id="xuiLabel9">全部</xforms:label>  
              <xforms:value id="default24">0</xforms:value> 
            </xforms:item>--> 
          </xforms:select1> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="bizData1"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="customPageItem1" page-count="0"/> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="barItem2"> 
          <xhtml:div component="/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter" style="width:140px" id="extOrgFilter1" filter-data="bizData1" person-id-relation="fCreatePsnID" org-url-relation="fCreatePsnFID" manage-type-codes="'workPlanManagement'"/> 
        </item>  
        <item id="barItem3"> 
          <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" style="width:140px" id="smartFilter1" filter-data="bizData1" filter-relations="fGZNR,fJHZT,fNO,fDD,fCreateDeptName,fCreatePsnName"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="bizData1"> 
      <column ref="recNo" label="序号" show-index="true" width="40"/>  
      <xui:column id="gridColumn9" ref="fGZJHLX" label="工作计划类型" type="ed" width="1" visible="false"/>  
      <xui:column id="gridColumn3" ref="fPlanYear" label="年度" type="ed" width="1" visible="false"/>  
      <xui:column id="gridColumn10" ref="fPlanMonth" label="月份" type="ro" width="1" visible="false"/>  
      <xui:column id="gridColumn14" ref="fPlanWeek" label="周" type="ro" width="1" visible="false"/>  
      <xui:column id="gridColumn10" ref="sequence" label="group" type="ro" width="1" visible="false"/>  
      <!--  
      <xui:column id="gridColumn11" ref="fBizStateName" label="状态" type="ed" width="40"/>  
      -->  
      <xui:column id="gridColumn6" ref="fJHZT" label="计划主题" type="ed" width="250"/>  
      <!--      <xui:column id="gridColumn4" ref="fDD" label="地点" type="ed" width="50" style="top:0;left:0;"/>  -->  
      <xui:column id="gridColumn1" ref="fJHKSRQ" label="计划开始日期" type="date" sort-datatype="str" width="1" visible="false" readonly="true"/>  
      <xui:column id="gridColumn2" ref="fJHJSRQ" label="计划结束日期" type="date" width="1" visible="false"/>  
      <xui:column id="gridColumn12" ref="fCreatePsnName" label="编制人员" type="ed" width="1" visible="false"/>  
      <xui:column id="gridColumn13" ref="fCreateTime" label="编制时间" type="dateTime" width="1" format="yyyy-MM-dd hh:mm" visible="false"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="subGrid" data="dGZNR"> 
      <column ref="recNo" label="序号" show-index="true" width="30"/>  
      <column id="default11" label="计划时间" ref="fPlanTime" type="ro" width="100"/>  
      <column id="default12" label="工作项目" ref="fWorkContent" type="ro" width="200" format="yyyy-MM-dd"/>  
      <xui:column id="gridColumn4" ref="fFGLD" label="分管领导" type="ro" width="80"/>  
      <column id="default13" label="责任部门" ref="fZRC" type="ro" width="100"/>  
      <column id="default16" label="责任人" ref="fZRR" type="ro" width="80"/>  
      <!--<column id="default15" label="参加人员" ref="fParticipants" type="ed" width="150"/>  
      <column label="地点" ref="fAddress" type="ed" width="130"/>-->  
      <column id="default18" label="备注" ref="fRemark" type="ro" width="100"/> 
    </xhtml:div>  
    <!--<xforms:textarea ref="data('bizData1')/fGZNR" id="xformsTextarea1" auto-size="true"/>-->  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table id="table1" style="table-layout:fixed;width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default0"> 
          <xhtml:td colspan="2" style="width:100%;height:30px;font-size:20;font-weight:bold" align="center"> 
            <xhtml:input type="text" value="" id="iptTitle" class="xui-autofill" style="text-align:center;font-size:20px;font-weight:bold;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <!--<xhtml:tr id="default1"> 
          <xhtml:td colspan="2" style="width:100%;height:30px;"> 
            <place control="toolbars1" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>-->  
        <!--<xhtml:tr id="defaultTool"> 
          <xhtml:td colspan="2" style="width:100%;height:30px"> 
            <place control="radioToolBars" id="controlPlace22"/> 
          </xhtml:td> 
        </xhtml:tr>-->  
        <xhtml:tr id="default2"> 
          <xhtml:td colspan="2"> 
            <xhtml:table id="table2" class="xui-container" style="height:100%;width:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr id="tr1"> 
                <xhtml:td style="height:100%;width:40%;"> 
                  <place control="grid1" id="controlPlace4" style="width:100%;height:100%"/> 
                </xhtml:td>  
                <xhtml:td style="height:100%;"> 
                  <place control="subGrid" id="controlPlace5" style="width:100%;height:100%"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="dlgSelectPsn" id="controlPlace7" style="top:278px;left:253px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="planViewer.js"/> 
  </xui:resource> 
</xui:window>
