<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;width:192px;top:444px;left:484px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="QA_SUPERVISION_PLAN" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" data-type="xml" store-type="grid" onValueChanged="mainActivity.dataMainValueChanged" filter-relations="SUPERVISION_PLAN_CODEPLANCODE,SUPERVISION_NO,PROJECT_NAME,PROJECT_DATE,ENDING_DATE,PLAN_DATE"> 
      <reader action="/metrodetection/quality_supervision/logic/action/queryQA_SUPERVISION_PLANAction" id="default3"/>  
      <writer action="/metrodetection/quality_supervision/logic/action/saveQA_SUPERVISION_PLANAction" id="default4"/>  
      <creator action="/metrodetection/quality_supervision/logic/action/createQA_SUPERVISION_PLANAction" id="default5"/>  
      <rule id="default22" relation="SUPERVISION_PLAN_CODEPLANCODE" required="true()" alert="'编码不能为空!'"/>  
      <rule id="default23" relation="SUPERVISION_NO" required="true()" alert="'编号不能为空!'"/>  
      <rule id="default24" relation="PROJECT_ID" required="true()" alert="'项目名称不能为空!'"/>  
      <rule id="default26" relation="PROJECT_DATE" required="true()" alert="'项目开始日期不能为空!'"/>  
      <rule id="default27" relation="ENDING_DATE" required="true()" alert="'项目结束日期不能为空!'"/>  
      <rule id="default29" relation="PLAN_DATE" required="true()" alert="'计划制定日期不能为空!'"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="TEST_PROJECT_INFO" concept="TEST_PROJECT_INFO" store-type="grid"><creator id="default6" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default15" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default16" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="qa_supervision_plan_round" concept="QA_SUPERVISION_PLAN_ROUND" auto-new="false" onValueChanging="mainActivity.qa_supervision_plan_roundValueChanging" store-type="grid" onAfterSave="mainActivity.qa_supervision_plan_roundAfterSave"><creator id="default34" action="/metrodetection/quality_supervision/logic/action/createQA_SUPERVISION_PLAN_ROUNDAction"></creator>
  <reader id="default35" action="/metrodetection/quality_supervision/logic/action/queryQA_SUPERVISION_PLAN_ROUNDAction"></reader>
  <writer id="default36" action="/metrodetection/quality_supervision/logic/action/saveQA_SUPERVISION_PLAN_ROUNDAction"></writer>
  <master id="master1" data="dataMain" relation="SUPERVISION_PLAN_ID"></master>
  <rule id="dataBizRule1" relation="ROUND_NO" required="true()" alert="'轮次不能为空!'"></rule>
  <rule id="dataBizRule2" relation="SUPERVISION_DATE" required="true()" alert="'监督时间不能为空!'"></rule>
  <rule id="dataBizRule3" relation="SUPERVISION_PERSON" required="true()" alert="'监督员不能为空!'"></rule></data>
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple"><creator id="default25" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
  <reader id="default37" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
  <writer id="default40" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default41" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="grid"><creator id="default42" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default43" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default44" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="wcData" concept="TEST_PROJECT_INFO" store-type="simple"><creator id="default28" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default45" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default46" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data>
  <xforms:action id="action6" ev:event="onload"><xforms:script id="xformsScript6"><![CDATA[(event)]]></xforms:script></xforms:action>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="width:100%;height:100%;" class="xui-tabPanel">
   <xui:tab id="tabList">
    <xui:label id="xuiLabel1">列表</xui:label>
    <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;">
     <top id="borderLayout-top1" size="37px">
      <place control="tbsMain1" id="controlPlace1" style="height:37px;"></place></top> 
     <center id="borderLayout-center1">
      <place control="grdMain" id="controlPlace2" style="width:100%;height:99%;"></place></center> </xhtml:div> </xui:tab> 
   <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect">
    <xui:label id="xuiLabel2">详细</xui:label>
    <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:67%;">
     <top id="borderLayout-top2" size="40px">
      <place control="tbsMain2" id="controlPlace4"></place></top> 
     <center id="borderLayout-center2">
      <place control="vDetail" id="controlPlace5" style="width:100%;height:98%;"></place></center> </xhtml:div> 
  <xui:place control="view1" id="controlPlace3" style="height:7%;width:59%;"></xui:place>
  <xui:place control="view3" id="controlPlace12" style="width:612px;height:90px;"></xui:place></xui:tab> </xhtml:div></xui:layout> 
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1">
   <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR" style="height:35px;">
    <item id="customBarItem1">
     <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif">
      <xforms:label id="default1">新建</xforms:label>
      <xforms:action ev:event="DOMActivate" id="action1">
       <xforms:script id="xformsScript1">mainActivity.newItemClick(event)</xforms:script></xforms:action> </xforms:trigger> </item> 
    <item id="barItem3" name="delete-item"></item>
    <item id="barItem4" name="refresh-item"></item>
    <item id="separatorItem1" name="separator"></item>
    <item id="barItem1" name="filter-pro-item"></item>
    <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"></item></xui:bar> </xhtml:div>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column">
   <column id="default7" label="项目名称" ref="PROJECT_NAME" type="ro" width="155px"></column>
   <column id="default1" label="质量监督计划编码" ref="SUPERVISION_PLAN_CODEPLANCODE" type="ro" width="155px"></column>
   <column id="default2" label="质量监督计划单据编号" ref="SUPERVISION_NO" type="ro" width="146px"></column>
   <column id="default8" label="项目开始日期" ref="PROJECT_DATE" type="dateTime" width="100px"></column>
   <column id="default9" label="项目结束日期" ref="ENDING_DATE" type="dateTime" width="100px"></column>
   <column id="default18" label="计划制定日期" ref="PLAN_DATE" type="dateTime" width="100px"></column></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2">
   <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR">
    <item> 
          <xforms:trigger appearance="image-text" id="insert" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
	<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
    <item id="barItem14" name="delete-item"></item>
    <item id="barItem15" name="refresh-item"></item>
    <item id="separatorItem3" name="separator"></item>
    <item id="barItem18" name="first-item"></item>
    <item id="barItem19" name="pre-item"></item>
    <item id="barItem20" name="next-item"></item>
    <item id="barItem21" name="last-item"></item></xui:bar> </xhtml:div>
  <xui:view auto-load="true" id="vDetail" class="xui-container">
   <layout id="layout2" style="height:100%;" type="flow">
    <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" id="excelLayout1" src="mainActivity.xls" style="width:100%;height:94%;">
     <xforms:textarea ref="data('dataMain')/MEMO" id="textarea3"></xforms:textarea>
     <xui:place control="toolbars1" id="controlPlace13"></xui:place><xforms:textarea ref="data('dataMain')/SUPPLEMENT" id="textarea1" style="width:455px;height:38px;"></xforms:textarea></xhtml:div> </layout> 
   <xforms:input id="iptSUPERVISION_PLAN_CODEPLANCODE" ref="data('dataMain')/SUPERVISION_PLAN_CODEPLANCODE" style="width:156px;text-align:left;" tabindex="1"></xforms:input>
   <xforms:input id="iptSUPERVISION_NO" ref="data('dataMain')/SUPERVISION_NO" tabindex="2"></xforms:input>
   <xforms:input id="iptPROJECT_ID" ref="data('dataMain')/PROJECT_ID"></xforms:input>
   <xforms:input id="iptPROJECT_NAME" ref="data('dataMain')/PROJECT_NAME"></xforms:input>
   <xforms:input id="iptPROJECT_DATE" ref="data('dataMain')/PROJECT_DATE" disabled="true" tabindex="4"></xforms:input>
   <xforms:input id="iptENDING_DATE" ref="data('dataMain')/ENDING_DATE" disabled="true" tabindex="5"></xforms:input>
   <xforms:input id="iptEMPLOYEE_NUMBER" ref="data('dataMain')/EMPLOYEE_NUMBER" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="6"><xforms:action id="action3" ev:event="xforms-value-changed"><xforms:script id="xformsScript3"><![CDATA[mainActivity.iptEMPLOYEE_NUMBERChange(event)]]></xforms:script></xforms:action></xforms:input>
   <xforms:input id="iptPROBATION_NUMBER" ref="data('dataMain')/PROBATION_NUMBER" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="7"><xforms:action id="action4" ev:event="xforms-value-changed"><xforms:script id="xformsScript4"><![CDATA[mainActivity.iptPROBATION_NUMBERChange(event)]]></xforms:script></xforms:action></xforms:input>
   <xforms:input id="iptSTUDENT_NUMBER" ref="data('dataMain')/STUDENT_NUMBER" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="8"><xforms:action id="action5" ev:event="xforms-value-changed"><xforms:script id="xformsScript5"><![CDATA[mainActivity.iptSTUDENT_NUMBERChange(event)]]></xforms:script></xforms:action></xforms:input>
   <xforms:input id="iptOTHER_NUMBER" ref="data('dataMain')/OTHER_NUMBER" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="9"><xforms:action id="action7" ev:event="xforms-value-changed"><xforms:script id="xformsScript7"><![CDATA[mainActivity.iptOTHER_NUMBERChange(event)]]></xforms:script></xforms:action></xforms:input>
   <xforms:input id="iptTOTAL_NUMBER" ref="data('dataMain')/TOTAL_NUMBER"></xforms:input>
   <xforms:input id="iptPROJECT_PRIOR" ref="data('dataMain')/PROJECT_PRIOR"></xforms:input>
   <xforms:input id="iptSUPERVISION_COUNT" ref="data('dataMain')/SUPERVISION_COUNT"></xforms:input>
   <xforms:input id="iptPLAN_PEOPLE" ref="data('dataMain')/PLAN_PEOPLE"></xforms:input>
   <xforms:input id="iptPLAN_DATE" ref="data('dataMain')/PLAN_DATE" disabled="true" tabindex="11"></xforms:input>
   <xforms:input id="iptSUPPLEMENT" ref="data('dataMain')/SUPPLEMENT"></xforms:input>
   <xforms:input id="iptRESPONSOR_VIEW" ref="data('dataMain')/RESPONSOR_VIEW"></xforms:input>
   <xforms:input id="iptMEMO" ref="data('dataMain')/MEMO"></xforms:input>
   <xforms:select1 ref="data('dataMain')/PROJECT_PRIOR" id="radio1" tabindex="12">
    <xforms:item id="selectItem1">
     <xforms:label id="default10">1级</xforms:label>
     <xforms:value id="default11">1</xforms:value></xforms:item> 
    <xforms:item id="selectItem2">
     <xforms:label id="default12">2级</xforms:label>
     <xforms:value id="default13">2</xforms:value></xforms:item> 
    <xforms:item id="selectItem3">
     <xforms:label id="default14">3级</xforms:label>
     <xforms:value id="default19">3</xforms:value></xforms:item> </xforms:select1> 
   <xforms:textarea ref="data('dataMain')/RESPONSOR_VIEW" id="textarea2" style="height:34px;"></xforms:textarea>
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/PROJECT_NAME">
    <xforms:label ref="" id="default20"></xforms:label>
    <xforms:value ref="" id="default21"></xforms:value>
    <xforms:itemset id="default30" data="dataMain" auto-load-data="true"></xforms:itemset></xhtml:div> 
   <xforms:textarea ref="data('dataMain')/MEMO" id="textarea4" style="height:45px;" tabindex="14"></xforms:textarea>
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/PROJECT_ID" label-ref="data('dataMain')/PROJECT_NAME" onCloseup="mainActivity.gridSelect2Closeup" tabindex="3">
    <xforms:label ref="pROJECTNAME" id="default31"></xforms:label>
    <xforms:value ref="TEST_PROJECT_INFO" id="default32"></xforms:value>
    <xforms:itemset id="default33" data="TEST_PROJECT_INFO" auto-load-data="true">
     <xforms:column ref="TEST_PROJECT_INFO" visible="false" id="default38"></xforms:column>
     <xforms:column ref="pROJECTNAME" id="default39"></xforms:column></xforms:itemset> </xhtml:div> 
   <xforms:textarea ref="data('dataMain')/SUPPLEMENT" id="textarea5" style="height:100%;" tabindex="13"></xforms:textarea>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"></xhtml:div>
  <xforms:input id="input1" ref="data('dataMain')/TOTAL_NUMBER"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/PLAN_PEOPLE"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/TOTAL_NUMBER" disabled="true" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="10"></xforms:input>
  <xforms:input id="input4" ref="data('dataMain')/SUPERVISION_COUNT"></xforms:input></xui:view>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars2" id="controlPlace7" style="position:absolute;width:400px;height:42px;top:5px;left:-3px;"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="qa_supervision_plan_round">
   <item> 
          <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.insertMasClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
	<item> 
          <xforms:trigger appearance="image-text" id="save2Mas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.save2More(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
   <item name="delete-item" id="barItem8"></item>
   <item name="refresh-item" id="barItem9"></item>
   <item name="filter-pro-item" id="customBarItem2"></item>
   </xui:bar></xhtml:div>
  </xui:view>
  <xui:view auto-load="true" id="view3" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout4"><xui:place control="grid5" style="left:5px;top:5px;width:99%;height:159%;" id="controlPlace14"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid5" data="qa_supervision_plan_round">
   <xui:column id="gridColumn1" ref="ROUND_NO" label="轮次" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn2" ref="SUPERVISION_DATE" label="监督时间" type="ed" width="100px" format="yyyy-MM-dd"></xui:column>
  <xui:column id="gridColumn3" ref="oPERATORNAME" label="监督员" type="select" width="100px" editor="gridSelect3"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('qa_supervision_plan_round')/SUPERVISION_PERSON" label-ref="data('qa_supervision_plan_round')/oPERATORNAME" onCloseup="mainActivity.gridSelect3Closeup">
   <xforms:label ref="oPERATORNAME" id="default17"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default47"></xforms:value>
   <xforms:itemset id="default48" data="hrPerData" auto-load-data="true" independence="false">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default51"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default52"></xforms:column></xforms:itemset></xhtml:div></xui:column>
  </xhtml:div></xui:view></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
