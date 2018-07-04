<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:211px;top:241px;height:auto;left:654px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="PLAN_VIEW" id="dataMain" is-tree="true" limit="20" offset="0" update-mode="whereVersion"> 
      <creator action="/metrodetection/system_code/logic/action/createPLAN_VIEWAction" id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/queryPLANVIEWTestAction" id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/savePLAN_VIEWAction" id="default3"/>  
      <tree-option id="default4" parent-relation="fPARENTID"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="caseData" concept="TEST_CASE_BASE_INFO" store-type="simple"><creator id="default5" action="/metrodetection/system_code/logic/action/createTEST_CASE_BASE_INFOAction"></creator>
  <reader id="default6" action="/metrodetection/system_code/logic/action/queryCaseBaseInfo"></reader>
  <writer id="default7" action="/metrodetection/system_code/logic/action/saveTEST_CASE_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="caseDetectionInfo" concept="TEST_CASE_DECTION_INFO" store-type="simple"><creator id="default8" action="/metrodetection/system_code/logic/action/createTEST_CASE_DECTION_INFOAction"></creator>
  <reader id="default9" action="/metrodetection/system_code/logic/action/queryDetectionCaseInfo"></reader>
  <writer id="default10" action="/metrodetection/system_code/logic/action/saveTEST_CASE_DECTION_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="subCaseData" concept="SUB_TEST_CASE_BASE_INFO" store-type="simple"><creator id="default11" action="/metrodetection/system_code/logic/action/createSUB_TEST_CASE_BASE_INFOAction"></creator>
  <reader id="default12" action="/metrodetection/system_code/logic/action/querySubCaseBaseInfo"></reader>
  <writer id="default13" action="/metrodetection/system_code/logic/action/saveSUB_TEST_CASE_BASE_INFOAction"></writer>
  <rule id="dataBizRule1" concept="SUB_TEST_CASE_BASE_INFO"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="subCaseStepData" concept="SUB_TEST_CASE_STEP_INFO" store-type="simple"><creator id="default14" action="/metrodetection/system_code/logic/action/createSUB_TEST_CASE_STEP_INFOAction"></creator>
  <reader id="default15" action="/metrodetection/system_code/logic/action/querySUB_TEST_CASE_STEP_INFOAction"></reader>
  <writer id="default16" action="/metrodetection/system_code/logic/action/saveSUB_TEST_CASE_STEP_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="stepPrepareData" concept="SUB_TEST_CASE_DATA_INFO" store-type="simple"><creator id="default17" action="/metrodetection/system_code/logic/action/createSUB_TEST_CASE_DATA_INFOAction"></creator>
  <reader id="default18" action="/metrodetection/system_code/logic/action/querySUB_TEST_CASE_DATA_INFOAction"></reader>
  <writer id="default19" action="/metrodetection/system_code/logic/action/saveSUB_TEST_CASE_DATA_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[mainActivity.model1Load(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="xml" auto-load="true" id="caseTree" concept="CASE_TREE_NEW" store-type="simple" is-tree="true" limit="-1"><creator id="default20" action="/metrodetection/system_code/logic/action/createCASE_TREE_NEW1Action"></creator>
  <reader id="default21" action="/metrodetection/system_code/logic/action/queryCASE_TREE_NEW1Action"></reader>
  <writer id="default22" action="/metrodetection/system_code/logic/action/saveCASE_TREE_NEW1Action"></writer>
  <tree-option id="default23" parent-relation="fPARENTID"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="xml" columns="name" src="" auto-load="true" id="tempData" store-type="simple"><rows xmlns="" id="default31">
   <row id="default32">
    <cell id="default33"></cell></row> </rows></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="caseTreeV" concept="CASE_TREE_NEW_V" limit="-1" store-type="simple" is-tree="true"><creator id="default28" action="/metrodetection/system_code/logic/action/createCASE_TREE_NEW_VAction"></creator>
  <reader id="default29" action="/metrodetection/system_code/logic/action/queryCASE_TREE_NEW_VAction"></reader>
  <writer id="default30" action="/metrodetection/system_code/logic/action/saveCASE_TREE_NEW_VAction"></writer>
  <tree-option id="default34" parent-relation="fPARENTID"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="caseTreeObj" concept="CASE_TREE_NEW_OBJ" store-type="simple" is-tree="true" limit="-1"><creator id="default39" action="/metrodetection/system_code/logic/action/createCASE_TREE_NEW_OBJAction"></creator>
  <reader id="default40" action="/metrodetection/system_code/logic/action/queryCASE_TREE_NEW_OBJAction"></reader>
  <writer id="default41" action="/metrodetection/system_code/logic/action/saveCASE_TREE_NEW_OBJAction"></writer>
  <tree-option id="default42" parent-relation="fPARENTID"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="caseTreeObjV" concept="CASE_TREE_NEW_OBJ_V" store-type="simple" is-tree="true" limit="-1"><creator id="default43" action="/metrodetection/system_code/logic/action/createCASE_TREE_NEW_OBJ_VAction"></creator>
  <reader id="default44" action="/metrodetection/system_code/logic/action/queryCASE_TREE_NEW_OBJ_VAction"></reader>
  <writer id="default45" action="/metrodetection/system_code/logic/action/saveCASE_TREE_NEW_OBJ_VAction"></writer>
  <tree-option id="default46" parent-relation="fPARENTID"></tree-option></data></xforms:model>  
  <xui:view auto-load="true" id="rootView" class="xui-container"> 
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <xforms:input id="input1" ref="data('caseData')/dECTIONBASEDONNAME"></xforms:input><layout id="layout1" style="height:100%;;position:relative;" type="absolute"> 
        <xui:place control-label="tESTCASEVER" style="font-size:10pt;position: absolute;left:10px;top:41px;" id="controlLabel1">测试用例版本</xui:place>
  <xui:place control="tESTCASEVER" style="position: absolute;width: 153px;top:33px;left:106px;" id="controlPlace3"></xui:place>
  <xui:place control-label="tESTCASEID" style="font-size:10pt;position: absolute;top:41px;width:108px;height:26px;left:336px;" id="controlLabel2">测试用例ID</xui:place>
  <xui:place control="tESTCASEID" style="position: absolute;top:33px;left:452px;width:169px;" id="controlPlace4"></xui:place>
  <xui:place control-label="tESTCASENAME" style="font-size:10pt;position: absolute;left:10px;top:71px;" id="controlLabel3">测试用例名称</xui:place>
  <xui:place control="tESTCASENAME" style="position: absolute;width: 153px;top:63px;left:106px;" id="controlPlace5"></xui:place>
  <xui:place control-label="tESTCASEPRIOR" style="font-size:10pt;position: absolute;top:71px;width:128px;height:26px;left:337px;" id="controlLabel4">测试用例级别</xui:place>
  <xui:place control="tESTCASEPRIOR" style="position: absolute;top:63px;left:452px;width:170px;" id="controlPlace6"></xui:place>
  <xui:place control-label="tESTCASEDESC" style="font-size:10pt;position: absolute;left:10px;top:101px;" id="controlLabel5">测试用例描述</xui:place>
  <xui:place control="tESTCASEDESC" style="position: absolute;width: 153px;top:93px;left:106px;" id="controlPlace7"></xui:place>
  <xui:place control="grid1" id="controlPlace8" style="position:absolute;left:12px;height:162px;top:140px;width:613px;"></xui:place>
  <xhtml:label id="label4" style="position:absolute;top:9px;background-color:#f3fffd;left:12px;width:170%;text-align:center;font-weight:bold;" class="xui-label"><![CDATA[用例信息]]></xhtml:label>
  <xhtml:label id="label5" style="position:absolute;top:320px;background-color:#f3fffd;left:12px;width:170%;text-align:center;font-weight:bold;" class="xui-label"><![CDATA[子用例信息]]></xhtml:label>
  <xui:place control-label="input1" id="controlLabel6" style="position:absolute;top:96px;height:24px;width:93px;left:338px;" label="检测依据"></xui:place><xui:place control="input1" id="controlPlace12" style="position:absolute;left:452px;width:170px;top:96px;"></xui:place><xui:place control="subcaseView" id="controlPlace21" style="position:absolute;top:355px;left:12px;width:506px;"></xui:place>
  </layout>  
      <xforms:input ref="data('caseData')/tESTCASEVER" id="tESTCASEVER" readonly="true"></xforms:input>
  <xforms:input ref="data('caseData')/tESTCASEID" id="tESTCASEID" readonly="true"></xforms:input>
  <xforms:input ref="data('caseData')/tESTCASENAME" id="tESTCASENAME" readonly="true"></xforms:input>
  <xforms:input ref="data('caseData')/tESTCASEPRIOR" id="tESTCASEPRIOR" readonly="true"></xforms:input>
  <xforms:input ref="data('caseData')/tESTCASEDESC" id="tESTCASEDESC" readonly="true"></xforms:input>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="caseDetectionInfo"><xui:column id="gridColumn3" ref="dETECTIONOBJECTCNAME" label="应用检测对象类型" type="ed" width="124px"></xui:column>
  <xui:column id="gridColumn4" ref="dEVICETYPECNAME" label="应用检测对象" type="ed" width="125px"></xui:column>
  <xui:column id="gridColumn5" ref="dETECTIONRANGECNAME" label="应用检测方面类型" type="ed" width="129px"></xui:column>
  <xui:column id="gridColumn6" ref="rANGEIDCNAME" label="应用检测方面" type="ed" width="114px"></xui:column></xhtml:div>
  <xui:view auto-load="true" id="subcaseView" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout2"><xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" style="position:absolute;top:89px;left:3px;width:610px;" class="xui-tabPanel">
   <xui:tab id="tabPage1">
    <xui:label id="xuiLabel1"><![CDATA[子用例步骤]]></xui:label>
  <xui:place control="grid2" id="controlPlace9" style="height:100px;width:593px;"></xui:place></xui:tab> 
   <xui:tab id="tabPage2" xforms-select="mainActivity.tabPage2Select">
    <xui:label id="xuiLabel2"><![CDATA[步骤数据准备]]></xui:label>
  <xui:place control="grid3" id="controlPlace10" style="height:100px;width:590px;"></xui:place></xui:tab> </xhtml:div>
  <xui:place control="view1" id="controlPlace11" style="position:absolute;top:7px;left:18px;width:579px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid2" data="subCaseStepData">
   <xui:column id="gridColumn1" ref="sUBTESTCASEID" label="测试子用例ID " type="ed" width="126px"></xui:column>
   <xui:column id="gridColumn2" ref="sUBTESTCASESTEPID" label="测试子用例步骤ID " type="ed" width="152px"></xui:column>
   <xui:column id="gridColumn7" ref="sUBTESTCASESTEPDESC" label="测试子用例步骤描述 " type="ed" width="134px"></xui:column>
   <xui:column id="gridColumn8" ref="sUBTESTCASESTEPPRIOR" label="测试子用例步骤级别 " type="ed" width="177px"></xui:column></xhtml:div>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid3" data="stepPrepareData">
   <xui:column id="gridColumn9" ref="sUBTESTCASESTEPSENDFLAG" label="测试子用例数据发送方式" type="ed" width="181px"></xui:column>
   <xui:column id="gridColumn10" ref="sUBTESTCASESTEPDATANUMBER" label="测试子用例数据数量 " type="ed" width="203px"></xui:column></xhtml:div>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout3"><xui:place control-label="sUBTESTCASEPRIOR" style="font-size:10pt;width:152px;position:absolute;top:28px;left:-13px;" id="controlLabel20">测试子用例执行级别</xui:place>
  <xui:place control-label="sUBTESTCASETIME" style="font-size:10pt;width:143px;position:absolute;top:58px;left:-13px;" id="controlLabel22">测试子用例执行耗时</xui:place>
  <xui:place control="sUBTESTCASETIME" style="width: 153px;top:49px;position:absolute;left:108px;" id="controlPlace26"></xui:place>
  <xui:place control="sUBTESTCASEPRIOR" style="width: 153px;top:19px;position:absolute;left:108px;" id="controlPlace24"></xui:place>
  <xui:place control="sUBTESTCASEID" style="width: 153px;top:-11px;position:absolute;left:108px;" id="controlPlace22"></xui:place>
  <xui:place control-label="sUBTESTCASEID" style="font-size:10pt;width:129px;position:absolute;top:-2px;left:-13px;" id="controlLabel18">测试子用例ID</xui:place>
  <xui:place control-label="sUBTESTCASENAME" style="font-size:10pt;top:-3px;left:298px;position:absolute;" id="controlLabel19">测试子用例名称</xui:place>
  <xui:place control="sUBTESTCASENAME" style="width: 153px;top:-11px;left:440px;position:absolute;" id="controlPlace23"></xui:place>
  <xui:place control="sUBTESTCASEORDER" style="width: 153px;top:19px;left:440px;position:absolute;" id="controlPlace25"></xui:place>
  <xui:place control-label="sUBTESTCASEORDER" style="font-size:10pt;top:27px;left:298px;position:absolute;" id="controlLabel21">测试子用例执行顺序</xui:place>
  <xui:place control-label="tIMEUNITID" style="font-size:10pt;top:57px;left:298px;position:absolute;" id="controlLabel23" label="执行时间单位">执行时间单位.默认单位小时</xui:place>
  <xui:place control="tIMEUNITID" style="width: 153px;top:49px;left:440px;position:absolute;" id="controlPlace27"></xui:place></layout>
  <xforms:input ref="data('subCaseData')/sUBTESTCASETIME" id="sUBTESTCASETIME"></xforms:input>
  <xforms:input ref="data('subCaseData')/sUBTESTCASEPRIOR" id="sUBTESTCASEPRIOR"></xforms:input>
  <xforms:input ref="data('subCaseData')/sUBTESTCASEID" id="sUBTESTCASEID"></xforms:input>
  <xforms:input ref="data('subCaseData')/sUBTESTCASENAME" id="sUBTESTCASENAME"></xforms:input>
  <xforms:input ref="data('subCaseData')/sUBTESTCASEORDER" id="sUBTESTCASEORDER"></xforms:input>
  <xforms:input ref="data('subCaseData')/tIMEUNITCNAME" id="tIMEUNITID"></xforms:input></xui:view></xui:view>
  </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="gridObjV" data="caseTreeObjV" appearance="tree" onRowClick="mainActivity.grdMainRowClick"><xui:column id="gridColumn13" ref="tESTCASENAME" type="tree" width="178px" label="用例信息"></xui:column></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="gridObj" data="caseTreeObj" appearance="tree" onRowClick="mainActivity.grdMainRowClick"><xui:column id="gridColumn12" ref="tESTCASENAME" label="用例信息" type="tree" width="178px"></xui:column></xhtml:div><xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid4" data="caseTreeV" onRowClick="mainActivity.grdMainRowClick" appearance="tree"><xui:column id="gridColumn11" ref="tESTCASENAME" type="tree" width="178px"></xui:column></xhtml:div><xhtml:div appearance="tree" component="/UI/system/components/grid.xbl.xml#grid" data="caseTree" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column" onRowClick="mainActivity.grdMainRowClick" delay="false"> 
      <column ref="tESTCASENAME" type="tree" width="178px"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%;position:relative;" type="absolute"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="20%" has-arrow-button="true" has-drag-bar="true" id="HSplitter1" mode="horz" style="width:100%;height:100%;position:absolute;left:5px;top:38px;" class="xui-splitter"> 
        <xhtml:div id="div1" region="left"> 
          <xhtml:div id="div2" style="height:100%;width:100%;" class="xui-container"> 
            <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style=" height: 100%;width:98%;"> 
              <center id="borderLayout-center1" style="padding-right:2px;"> 
                 
              <xui:place control="gridObjV" id="controlPlace18" style="height:100%;width:100%;"></xui:place><xui:place control="gridObj" id="controlPlace17" style="height:100%;width:100%;"></xui:place><xui:place control="grid4" id="controlPlace15" style="height:100%;width:100%;"></xui:place><place control="grdMain" id="controlPlace1" style="height:100%;width:100%;" /></center> 
            </xhtml:div> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div id="div3" region="right"> 
          <xhtml:div id="div4" style="width:100%;height:100%;padding-left:3px" class="xui-container"> 
            <place control="vDetail" id="controlPlace2"/> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div> 
    <xui:place control="view2" id="controlPlace13" style="position:absolute;top:8px;left:5px;height:31px;width:871px;"></xui:place></xui:layout>  
    <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout4"><xui:place control="radio1" id="controlPlace14" style="position:absolute;top:6px;left:9px;"></xui:place></layout>
  <xforms:select1 ref="data('tempData')/name" id="radio1">
   <xforms:item id="selectItem1">
    <xforms:label id="default24"><![CDATA[按版本显示]]></xforms:label>
    <xforms:value id="default25"><![CDATA[version]]></xforms:value>
  <xforms:action id="action3" ev:event="xforms-select"><xforms:script id="xformsScript3"><![CDATA[mainActivity.selectItem1Select(event)]]></xforms:script></xforms:action></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default26"><![CDATA[按用例显示]]></xforms:label>
    <xforms:value id="default27"><![CDATA[case]]></xforms:value>
  <xforms:action id="action2" ev:event="xforms-select"><xforms:script id="xformsScript2"><![CDATA[mainActivity.selectItem2Select(event)]]></xforms:script></xforms:action></xforms:item> 
  <xforms:item id="selectItem3">
   <xforms:label id="default35"><![CDATA[按检测对象和版本]]></xforms:label>
   <xforms:value id="default36"><![CDATA[detObj]]></xforms:value>
  <xforms:action id="action4" ev:event="xforms-select"><xforms:script id="xformsScript4"><![CDATA[mainActivity.selectItem3Select(event)]]></xforms:script></xforms:action></xforms:item>
  <xforms:item id="selectItem4">
   <xforms:label id="default37"><![CDATA[按检测对象和用例]]></xforms:label>
   <xforms:value id="default38"><![CDATA[detObjCase]]></xforms:value>
  <xforms:action id="action5" ev:event="xforms-select"><xforms:script id="xformsScript5"><![CDATA[mainActivity.selectItem4Select(event)]]></xforms:script></xforms:action></xforms:item></xforms:select1></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>
