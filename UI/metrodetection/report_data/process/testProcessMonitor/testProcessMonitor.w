<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:236px;left:422px;">
   <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="testProcessMonitorTreeD" concept="TEST_RESULT_ANALYSIS_VIEW" is-tree="true" store-type="grid" limit="-1">
    <creator id="default1"></creator>
    <reader id="default2" action="/metrodetection/system_code/logic/action/queryTEST_RESULT_ANALYSIS_VIEWAction"></reader>
    <writer id="default3"></writer>
    <tree-option id="default4" parent-relation="PARENT" virtual-root="项目信息" root-filter="TEST_RESULT_ANALYSIS_VIEW.PARENT is null or TEST_RESULT_ANALYSIS_VIEW.PARENT ='root'"></tree-option></data> 
   <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="testTaskExeSubCaseD" concept="TEST_TASK_EXECUTE_SUB_CASE" filter-relations="tESTCASEID,sUBTESTCASEID,sUBTESTCASENAME">
    <creator id="default5" action="/metrodetection/system_code/logic/action/createTEST_TASK_EXECUTE_SUB_CASEAction"></creator>
    <reader id="default6" action="/metrodetection/system_code/logic/action/myQueryInitTestProcessMonitorAction"></reader>
    <writer id="default7" action="/metrodetection/system_code/logic/action/saveTEST_TASK_EXECUTE_SUB_CASEAction"></writer>
  <calculate-relation relation="序号" id="calculate-relation7"></calculate-relation></data> 
   <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="projectTaskInfoD" concept="TEST_PROJECT_TASK_INFO" filter-relations="pLANOPERATORID,pLANSTARTDATE,pLANENDINGDATE,tESTTASKAREA,aCTUALOPERATORID,pROJECTNAME">
    <creator id="default8" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction"></creator>
    <reader id="default9" action="/metrodetection/system_code/logic/action/queryTestProJectTaskInfoAction"></reader>
    <writer id="default10" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction"></writer>
  <calculate-relation relation="calculate5" id="calculate-relation6" type="xsd:integer"></calculate-relation></data> 
   <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="testExeStepD" concept="TEST_TASK_EXECUTE_STEP" filter-relations="sUBTESTCASEID,sUBTESTCASESTEPID,sUBTESTCASESTEPPRIOR,eXECUTEDATETIME,rEPORTDATE">
    <creator id="default11" action="/metrodetection/system_code/logic/action/createTEST_TASK_EXECUTE_STEPAction"></creator>
    <reader id="default12" action="/metrodetection/system_code/logic/action/queryTestTaskExeStepAction"></reader>
    <writer id="default13" action="/metrodetection/system_code/logic/action/saveTEST_TASK_EXECUTE_STEPAction"></writer>
    <calculate-relation relation="序号" id="calculate-relation8"></calculate-relation>
  </data> </xforms:model><xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="220px"
        mode="horz" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="height:100%;width:100%;"
        has-drag-bar="true"> 
        <xhtml:div region="left" id="div1">
          <xui:place control="view1" id="controlPlace1" style="width:100%;height:86%;"/>
        </xhtml:div>  
        <xhtml:div region="right" id="div2">
          <xui:place control="view2" id="controlPlace2" style="width:100%;height:87%;"/>
        </xhtml:div>
      </xhtml:div>
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1">
        <xui:place control="grid1" id="controlPlace3" style="position:absolute;top:5px;left:6px;height:569px;width:209px;"/>
      </layout>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid1" data="testProcessMonitorTreeD" appearance="tree"
        onRowClick="testProcessMonitor.grid1RowClick">
        <xui:column id="gridColumn1" ref="NAME" label="项目信息" type="tree" width="138px"
          readonly="true"/>
      </xhtml:div>
    </xui:view>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout2">
        <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
          style="position:absolute;top:5px;left:5px;width:99%;height:570px;" class="xui-tabPanel"> 
          <xui:tab id="projectTaskInfo" visable="true"> 
            <xui:label id="xuiLabel1"><![CDATA[项目测试任务信息]]></xui:label>  
            <xui:place control="view3" id="controlPlace4" style="height:542px;width:593px;"/>
          </xui:tab>  
          <xui:tab id="taskExeSubCase" visable="false"> 
            <xui:label id="xuiLabel2"><![CDATA[测试任务执行子用例信息]]></xui:label>  
            <xui:place control="view4" id="controlPlace7" style="height:541px;width:686px;"/>
          </xui:tab>  
          <xui:tab id="taskExeStep" visable="false"> 
            <xui:label id="xuiLabel3"><![CDATA[测试任务执行步骤信息]]></xui:label>  
            <xui:place control="view5" id="controlPlace8" style="width:634px;height:542px;"/>
          </xui:tab> 
        </xhtml:div>
      </layout>  
      <xui:view auto-load="true" id="view3" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout3">
          <xui:place control="toolbars1" id="controlPlace5" style="position:absolute;height:39px;width:491px;top:1px;left:1px;"/>  
          <xui:place control="grid2" id="controlPlace6" style="position:absolute;left:1px;top:37px;height:502px;width:967px;"/>
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
            id="navigatorBar1" data="projectTaskInfoD"> 
            <item name="refresh-item" id="barItem4"/>  
            <item name="filter-pro-item" id="customBarItem1"/>  
            <item name="separator" id="customBarItem2"/>  
            <item name="custom-page-item" id="customPageItem1"/>
          </xui:bar>
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid2" data="projectTaskInfoD">
          <xui:column id="gridColumn30" ref="calculate5" label="序号" type="ed" width="100px" show-index="true"></xui:column><xui:column id="gridColumn2" ref="pLANOPERATORID" label="计划执行人" type="ed"
            width="113px" show-index="false"/>  
          <xui:column id="gridColumn3" ref="pLANSTARTDATE" label="计划开始日期" type="ed"
            width="123px"/>  
          <xui:column id="gridColumn4" ref="pLANENDINGDATE" label="计划结束日期" type="ed"
            width="121px"/>  
          <xui:column id="gridColumn5" ref="tESTTASKAREA" label="区域" type="ed" width="205px"/>  
          <xui:column id="gridColumn6" ref="aCTUALOPERATORID" label="任务执行人" type="ed"
            width="106px"/>  
          <xui:column id="gridColumn7" ref="pROJECTNAME" label="项目名称" type="ed" width="188px"/>
        </xhtml:div>
      </xui:view>  
      <xui:view auto-load="true" id="view4" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout4">
          <xui:place control="toolbars2" id="controlPlace9" style="position:absolute;width:400px;left:4px;top:1px;height:40px;"/>  
          <xui:place control="grid3" id="controlPlace10" style="position:absolute;height:489px;top:48px;left:4px;width:1001px;"/>
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2">
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
            id="navigatorBar2" data="testTaskExeSubCaseD"> 
            <item name="refresh-item" id="barItem12"/>  
            <item name="filter-pro-item" id="customBarItem4"/>  
            <item name="separator" id="customBarItem5"/>  
            <item name="custom-page-item" id="customPageItem2"/>
          </xui:bar>
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid3" data="testTaskExeSubCaseD">
          <xui:column id="gridColumn31" ref="序号" label="序号" type="ed" width="56px" show-index="true"></xui:column><xui:column id="gridColumn18" ref="tESTCASEID" label="测试用例ID" type="ed"
            width="100px"/>
          <xui:column id="gridColumn28" ref="sUBTESTCASEID" label="测试子用例ID" type="ed"
            width="114px"/>
          <xui:column id="gridColumn8" ref="sUBTESTCASENAME" label="测试子用例名称" type="ed"
            width="100px"/>  
          <xui:column id="gridColumn12" ref="sUBTESTCASETIME" type="ed" width="142px"
            label="测试子用例执行耗时"/>  
          <xui:column id="gridColumn13" ref="sUBTESTCASEEXECUTE" type="ed" width="167px"
            label="测试子用例执行情况"/>  
          <xui:column id="gridColumn14" ref="sUBTESTCASECHECK" type="ed" width="141px"
            label="测试子用例检测情况"/>  
          <xui:column id="gridColumn15" ref="aCTUALSUBTESTCASETIME" type="ed" width="170px"
            label="测试子用例实际执行耗时"/> 
        </xhtml:div>
      </xui:view>  
      <xui:view auto-load="true" id="view5" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout5">
          <xui:place control="toolbars3" id="controlPlace11" style="position:absolute;width:400px;top:1px;left:2px;height:35px;"/>  
          <xui:place control="grid4" id="controlPlace12" style="position:absolute;top:38px;height:501px;left:2px;width:994px;"/>
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3">
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
            id="navigatorBar3" data="testExeStepD"> 
            <item name="refresh-item" id="barItem20"/>  
            <item name="filter-pro-item" id="customBarItem7"/>  
            <item name="separator" id="customBarItem8"/>  
            <item name="custom-page-item" id="customPageItem3"/>
          </xui:bar>
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid4" data="testExeStepD">
          <xui:column id="gridColumn32" ref="序号" label="序号" type="ed" width="100px" show-index="true"></xui:column><xui:column id="gridColumn19" ref="sUBTESTCASESTEPID" label="测试子用例步骤ID"
            type="ed" width="107px"/>  
          <xui:column id="gridColumn27" ref="sUBTESTCASEID" label="测试子用例ID" type="ed"
            width="110px"/>
          <xui:column id="gridColumn20" ref="sUBTESTCASESTEPPRIOR" label="测试子用例步骤级别"
            type="ed" width="134px"/>  
          <xui:column id="gridColumn25" ref="sUBTESTCASESTEPEXECUTE" type="ed" width="144px"
            label="测试子用例步骤执行情况"/>
          <xui:column id="gridColumn26" ref="sUBTESTCASESTEPCHECK" type="ed" width="148px"
            label="测试子用例步骤检查情况"/>
          <xui:column id="gridColumn23" ref="eXECUTEDATETIME" label="测试子用例步骤执行日期"
            type="html" width="141px" onRender="testProcessMonitor.grid4_eXECUTEDATETIMERender"/>  
          <xui:column id="gridColumn24" ref="rEPORTDATE" label="上报日期" type="ed" width="101px"/> 
        </xhtml:div>
      </xui:view>
    </xui:view>
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="testProcessMonitor.js"/>
  </xui:resource> 
</xui:window>
