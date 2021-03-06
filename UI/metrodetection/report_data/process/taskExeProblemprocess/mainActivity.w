<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="width:143px;top:151px;height:auto;left:88px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TASK_EXECUTE_PROBLEM_STAT" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereVersion" filter-relations="eXECUTEDATE,pROJECTNUMBER,sUBTESTCASENUMBER,sUBTESTCASEPASS,sUBTESTCASEFAILED,bUSINESSIDCNAME,mANUFACTUREPOSTCODE,dEVICETYPECNAME,pROBLEMPRIORCNAME,pROBLEMTYPECNAME"> 
      <creator action="/metrodetection/system_code/logic/action/createTASK_EXECUTE_PROBLEM_STATAction"
        id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/myQueryTaskExeProblemStatAction"
        id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTASK_EXECUTE_PROBLEM_STATAction"
        id="default3"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default4" label="执行出错日期" ref="eXECUTEDATE" type="ed" width="100px"/>  
      <xui:column id="gridColumn1" ref="bUSINESSIDCNAME" label="业务类型" type="ed" width="100"/>
      <column id="default10" label="执行项目总数" ref="pROJECTNUMBER" type="ed" width="100px"/>  
      <xui:column id="gridColumn2" ref="mANUFACTUREPOSTCODE" label="厂商邮编" type="ed"
        width="100"/>
      <xui:column id="gridColumn3" ref="dEVICETYPECNAME" label="检测对象" type="ed" width="100"/>
      <xui:column id="gridColumn4" ref="pROBLEMPRIORCNAME" label="问题级别" type="ed"
        width="100"/>
      <xui:column id="gridColumn5" ref="pROBLEMTYPECNAME" label="问题类型" type="ed" width="100"/>
      <column id="default11" label="测试子用例数" ref="sUBTESTCASENUMBER" type="ed"
        width="100px"/>  
      <column id="default12" label="测试子用例成功数" ref="sUBTESTCASEPASS" type="ed"
        width="100px"/>  
      <column id="default13" label="测试子用例失败数" ref="sUBTESTCASEFAILED" type="ed"
        width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain" mode="IMG_TXT_LR"> 
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem2" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem7" name="separator"/>  
        <item id="barItem8"> 
          <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMain"
            id="excelExport1"/> 
        </item>  
        <item id="barItem9" name="separator"/>  
        <item id="barItem10"> 
          <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
            id="printHtml1" is-preview="true" label="打印" target-id="grdMain"/> 
        </item>  
        <item id="barItem12"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="eXECUTEDATE,bUSINESSID,mANUFACTUREID,aPPLYFORDEVICETYPE,pROBLEMPRIOR,pROBLEMTYPE,pROJECTNUMBER,sUBTESTCASENUMBER,sUBTESTCASEPASS,sUBTESTCASEFAILED"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem13"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();"
            src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top1" size="32px"> 
          <place control="tbsMain" id="controlPlace2"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="grdMain" id="controlPlace1" style="width:100%;height:100%"/> 
        </center> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource/> 
</xui:window>
