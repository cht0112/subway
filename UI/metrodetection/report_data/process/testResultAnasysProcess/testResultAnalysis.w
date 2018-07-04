<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:141px;height:auto;left:617px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="testProjectStatD" concept="TEST_PROJECT_STAT" filter-relations="rEPORTDATE,pROJECTDATE,pROJECTNUMBER,sUBTESTCASENUMBER,sUBTESTCASETIME,dEVICETYPECNAME,bUSINESSSTAGECNAME,mANUFACTUREIDCNAME"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_STATAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/myQueryTestProjectStatAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_STATAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="singleExeDaySummD" concept="TEST_TASK_EXECUTE_INDIVIDUAL" filter-relations="rEPORTDATE,sUBTESTCASEPASS,sUBTESTCASEFAILED,sUBTESTCASEBLOCKED,aCTUALSUBTESTCASETIME,pROJECTNAME,tESTCASENAME,pLANOPERATORID"> 
      <creator id="default4" action="/metrodetection/system_code/logic/action/createTEST_TASK_EXECUTE_INDIVIDUALAction"/>  
      <reader id="default5" action="/metrodetection/system_code/logic/action/myQueryTestTaskExeIndividualAction"/>  
      <writer id="default6" action="/metrodetection/system_code/logic/action/saveTEST_TASK_EXECUTE_INDIVIDUALAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="singleTestTaskSummD" concept="TEST_TASK_STAT" filter-relations="aCTUALOPERATORID,sUBTESTCASENUMBER,sUBTESTCASETIME,aCTUALSTARTDATE,pROJECTNAME,bUSINESSSTAGECNAME,mANUFACTUREIDCNAME,tESTCASENAME,dEVICETYPECNAME"> 
      <creator id="default7" action="/metrodetection/system_code/logic/action/createTEST_TASK_STATAction"/>  
      <reader id="default8" action="/metrodetection/system_code/logic/action/myQueryTestTaskStatAction"/>  
      <writer id="default9" action="/metrodetection/system_code/logic/action/saveTEST_TASK_STATAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="exeProblemSummD" concept="TASK_EXECUTE_PROBLEM_STAT" filter-relations="eXECUTEDATE,pROJECTNUMBER,sUBTESTCASENUMBER,sUBTESTCASEPASS,sUBTESTCASEFAILED,bUSINESSIDCNAME,mANUFACTUREIDCNAME,dEVICETYPECNAME,pROBLEMPRIORCNAME,pROBLEMTYPECNAME"> 
      <creator id="default10" action="/metrodetection/system_code/logic/action/createTASK_EXECUTE_PROBLEM_STATAction"/>  
      <reader id="default11" action="/metrodetection/system_code/logic/action/myQueryTaskExeProblemStatAction"/>  
      <writer id="default12" action="/metrodetection/system_code/logic/action/saveTASK_EXECUTE_PROBLEM_STATAction"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"/> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
          style="position:absolute;width:99%;top:0px;left:0px;height:100%;" class="xui-tabPanel"> 
          <xui:tab id="testProjectSummary"> 
            <xui:label id="xuiLabel1"><![CDATA[测试项目统计]]></xui:label>  
            <xui:place control="view2" id="controlPlace3" style="width:100%;height:549px;"/> 
          </xui:tab>  
          <xui:tab id="singleTestTaskSummary"> 
            <xui:label id="xuiLabel2"><![CDATA[单项测试任务统计]]></xui:label>  
            <xui:place control="view3" id="controlPlace8" style="width:880px;height:553px;"/> 
          </xui:tab>  
          <xui:tab id="singleTestTaskExeDaySum"> 
            <xui:label id="xuiLabel3"><![CDATA[单项测试任务执行进度日统计]]></xui:label>  
            <xui:place control="view4" id="controlPlace6" style="width:860px;height:549px;"/> 
          </xui:tab>  
          <xui:tab id="testTaskExeProblemSummary"> 
            <xui:label id="xuiLabel4"><![CDATA[测试任务执行问题汇总]]></xui:label>  
            <xui:place control="view5" id="controlPlace11" style="width:100%;height:536px;"/>
          </xui:tab> 
        </xhtml:div> 
      </layout>  
      <xui:view auto-load="true" id="view2" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout2"> 
          <xui:place control="toolbars2" id="controlPlace4" style="position:absolute;height:37px;width:653px;top:1px;left:2px;"/>  
          <!--  <xui:place control="printHtml1" id="controlPlace6" style="position:absolute;top:75px;left:615px;"/>
          <xui:place control="excelExport1" id="controlPlace5" style="position:absolute;top:55px;left:519px;"/> -->  
          <xui:place control="grid1" id="controlPlace7" style="position:absolute;width:1011px;left:2px;top:39px;height:504px;"/> 
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
            style="height:33px;width:523px;" mode="IMG_TXT_LR" data="testProjectStatD"> 
            <item name="refresh-item" id="barItem4"/>  
            <item name="filter-pro-item" id="customBarItem1"/>  
            <item name="separator" id="customBarItem2"/>  
            <item name="custom-page-item" id="customPageItem1"/>  
            <item name="separator" id="separatorItem1"/>  
            <item id="barItem6"> 
              <xhtml:div component="/UI/system/components/excel.xbl.xml#export" action="/SA/excel/logic/action/exportExcel"
                id="excelExport1" data="testProjectStatD"/> 
            </item>  
            <item name="separator" id="separatorItem2"/>  
            <item id="barItem7"> 
              <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
                label="打印" is-preview="true" id="printHtml1" target-id="grid1"/> 
            </item> 
          </xui:bar> 
        </xhtml:div>  
        <!--  <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
          label="打印" is-preview="true" id="printHtml1"/> 
        <xhtml:div component="/UI/system/components/excel.xbl.xml#export" action="/SA/excel/logic/action/exportExcel" 
          id="excelExport1" data="testProjectStatD"/> -->  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid1" data="testProjectStatD"> 
          <xui:column id="gridColumn1" ref="rEPORTDATE" label="统计报告日期" type="ed" width="100px"/>  
          <xui:column id="gridColumn2" ref="pROJECTDATE" label="立项日期" type="ed" width="100px"/>  
          <xui:column id="gridColumn38" ref="mANUFACTUREIDCNAME" label="厂商和检测机构商名称" type="ed" width="145px"></xui:column><xui:column id="gridColumn7" ref="dEVICETYPECNAME" label="检测对象" type="ed" width="153px" /><xui:column id="gridColumn8" ref="bUSINESSSTAGECNAME" label="业务阶段" type="ed" width="135px" /><xui:column id="gridColumn3" ref="pROJECTNUMBER" label="项目总数" type="ed"
            width="100px"/>  
          <xui:column id="gridColumn4" ref="sUBTESTCASENUMBER" label="测试子用例数" type="ed"
            width="121px"/>  
            
            
          <xui:column id="gridColumn5" ref="sUBTESTCASETIME" label="测试子用例工时" type="ed"
            width="148px"/> 
        </xhtml:div> 
      </xui:view>  
      <xui:view auto-load="true" id="view3" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout3"> 
          <xui:place control="toolbars1" id="controlPlace2" style="position:absolute;height:36px;width:657px;left:2px;top:1px;"/>  
          <xui:place control="grid2" id="controlPlace5" style="position:absolute;left:2px;width:110%;top:38px;height:506px;"/> 
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
            id="navigatorBar2" data="singleTestTaskSummD"> 
            <item name="refresh-item" id="barItem5"/>  
            <item name="filter-pro-item" id="customBarItem3"/>  
            <item name="separator" id="customBarItem5"/>  
            <item name="custom-page-item" id="customPageItem2"/>  
            <item name="separator" id="separatorItem4"/>  
            <item id="barItem8"> 
              <xhtml:div component="/UI/system/components/excel.xbl.xml#export" action="/SA/excel/logic/action/exportExcel"
                id="excelExport2" data="singleTestTaskSummD"/> 
            </item>  
            <item name="separator" id="separatorItem3"/>  
            <item id="barItem9"> 
              <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
                label="打印" is-preview="true" id="printHtml2" target-id="grid2"/> 
            </item> 
          </xui:bar> 
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid2" data="singleTestTaskSummD"> 
          <xui:column id="gridColumn15" ref="pROJECTNAME" label="项目名称" type="ed" width="100px"/>  
          <xui:column id="gridColumn6" ref="aCTUALOPERATORID" label="任务执行人" type="ed"
            width="100px"/>  
          <xui:column id="gridColumn14" ref="aCTUALSTARTDATE" label="任务开始日期" type="ed"
            width="100px"/>
          <xui:column id="gridColumn39" ref="mANUFACTUREIDCNAME" label="厂商和检测机构商名称" type="ed" width="156px"></xui:column><xui:column id="gridColumn10" ref="sUBTESTCASENUMBER" label="测试子用例数" type="ed"
            width="100px"/>  
          <xui:column id="gridColumn19" ref="dEVICETYPECNAME" label="检测对象" type="ed"
            width="100px"/>  
          <xui:column id="gridColumn16" ref="bUSINESSSTAGECNAME" label="业务阶段" type="ed"
            width="100px"/>  
          <xui:column id="gridColumn18" ref="tESTCASENAME" label="测试用例名称" type="ed"
            width="100px"/>  
          <xui:column id="gridColumn11" ref="sUBTESTCASETIME" label="测试子用例工时" type="ed"
            width="102px"/> 
        </xhtml:div> 
      </xui:view>  
      <xui:view auto-load="true" id="view4" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout4"> 
          <xui:place control="toolbars3" id="controlPlace9" style="position:absolute;left:1px;width:657px;height:39px;top:0px;"/>  
          <xui:place control="grid3" id="controlPlace10" style="position:absolute;left:1px;width:102%;top:36px;height:502px;"/> 
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar3"
            data="singleExeDaySummD" mode="IMG_TXT_LR"> 
            <item name="refresh-item" id="barItem15"/>  
            <item name="filter-pro-item" id="customBarItem6"/>  
            <item name="separator" id="customBarItem7"/>  
            <item name="custom-page-item" id="customPageItem3"/>  
            <item name="separator" id="separatorItem5"/>  
            <item id="barItem16"> 
              <xhtml:div component="/UI/system/components/excel.xbl.xml#export" action="/SA/excel/logic/action/exportExcel"
                id="excelExport3" data="singleExeDaySummD"/> 
            </item>  
            <item name="separator" id="separatorItem6"/>  
            <item id="barItem17"> 
              <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
                label="打印" is-preview="true" id="printHtml3" target-id="grid3"/> 
            </item> 
          </xui:bar> 
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid3" data="singleExeDaySummD"> 
          <xui:column id="gridColumn20" ref="rEPORTDATE" label="上报日期" type="ed" width="96px"/>  
          <xui:column id="gridColumn25" ref="pROJECTNAME" label="项目名称" type="ed" width="93px"/>  
          <xui:column id="gridColumn26" ref="tESTCASENAME" label="测试用例名称" type="ed"
            width="108px"/>  
          <xui:column id="gridColumn27" ref="pLANOPERATORID" label="计划执行人" type="ed"
            width="99px"/>  
          <xui:column id="gridColumn21" ref="sUBTESTCASEPASS" label="测试子用例成功数" type="ed"
            width="107px"/>  
          <xui:column id="gridColumn22" ref="sUBTESTCASEFAILED" label="测试子用例失败数" type="ed"
            width="110px"/>  
          <xui:column id="gridColumn23" ref="sUBTESTCASEBLOCKED" label="测试子用例阻碍数"
            type="ed" width="106px"/>  
          <xui:column id="gridColumn24" ref="aCTUALSUBTESTCASETIME" label="测试子用例实际总工时数"
            type="ed" width="149px"/> 
        </xhtml:div> 
      </xui:view>  
      <xui:view auto-load="true" id="view5" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout5">
          <xui:place control="toolbars4" id="controlPlace12" style="position:absolute;height:34px;width:656px;left:1px;top:0px;"/>
        <xui:place control="grid4" id="controlPlace13" style="position:absolute;left:1px;top:36px;height:503px;width:1058px;"></xui:place></layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars4">
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
            id="navigatorBar4" data="exeProblemSummD"> 
            <item name="refresh-item" id="barItem23"/>  
            <item name="filter-pro-item" id="customBarItem9"/>  
            <item name="separator" id="customBarItem10"/>  
            <item name="custom-page-item" id="customPageItem4"/>
            <item name="separator" id="customBarItem11"/>
            <item id="barItem24"> 
              <xhtml:div component="/UI/system/components/excel.xbl.xml#export" action="/SA/excel/logic/action/exportExcel"
                id="excelExport4" data="exeProblemSummD"/> 
            </item>  
            <item name="separator" id="separatorItem7"/>  
            <item id="barItem25"> 
              <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
                label="打印" is-preview="true" id="printHtml4" target-id="grid4"/> 
            </item> 
          </xui:bar>
        </xhtml:div>
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid4" data="exeProblemSummD"><xui:column id="gridColumn28" ref="eXECUTEDATE" label="执行出错日期" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn29" ref="pROJECTNUMBER" label="执行项目总数" type="ed" width="100px"></xui:column><xui:column id="gridColumn40" ref="mANUFACTUREIDCNAME" label="厂商和检测机构商名称" type="ed" width="136px"></xui:column><xui:column id="gridColumn33" ref="bUSINESSIDCNAME" label="业务类型" type="ed" width="100px"></xui:column><xui:column id="gridColumn35" ref="dEVICETYPECNAME" label="检测对象" type="ed" width="100px"></xui:column><xui:column id="gridColumn36" ref="pROBLEMPRIORCNAME" label="问题级别" type="ed" width="100px"></xui:column><xui:column id="gridColumn37" ref="pROBLEMTYPECNAME" label="问题类型" type="ed" width="100px"></xui:column><xui:column id="gridColumn30" ref="sUBTESTCASENUMBER" label="测试子用例数" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn32" ref="sUBTESTCASEFAILED" label="测试子用例失败数" type="ed" width="102px"></xui:column><xui:column id="gridColumn31" ref="sUBTESTCASEPASS" label="测试子用例成功数" type="ed" width="109px"></xui:column>
  
  
  
  
  
  </xhtml:div></xui:view>
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>
