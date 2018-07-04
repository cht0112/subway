<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="wdwSendDoc">  
  <resource> 
    <xhtml:script src="/UI/system/components/printHtml/formPrint.js"/> 
  </resource>  
  <xforms:model id="model1" style="height:auto;top:183px;left:265px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_Task" id="dataMain" limit="20" offset="1" store-type="simple" confirm-delete="true"
      confirm-refresh="false"> 
      <reader action="/system/logic/action/queryTaskAction"/>  
      <calculate-relation relation="recNO" type="xsd{semicolon}integer"/> 
    </data>  
    <xforms:action id="action40" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript40"><![CDATA[schemeProcessQueryDetail.model1ModelConstructDone(event)]]></xforms:script> 
    </xforms:action>  
    <data xmlns="" id="reportData" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default42"> 
        <action id="default43" name="testSchemeProcessQueryReportAction" type="action"
          columns="SPARENT,SACTIVITYNAME,SEXECUTORDEPTNAME,SEXECUTORPERSONNAME,SCONTENT,SSTATUSNAME,SACTUALFINISHTIME"/> 
      </source> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="false" id="testSchemeBaseInfoD" concept="TEST_SCHEME_BASE_INFO"
      store-type="simple" auto-new="true" confirm-refresh="false"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_BASE_INFOAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/myQuerylist"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_BASE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="dectionBaseInfoD" concept="DECTION_BASED_ON_INFO"
      store-type="simple"> 
      <creator id="default7" action="/metrodetection/system_code/logic/action/createDECTION_BASED_ON_INFOAction"/>  
      <reader id="default8" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_ON_INFOAction"/>  
      <writer id="default9" action="/metrodetection/system_code/logic/action/saveDECTION_BASED_ON_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="businessTypeCodeD" concept="BUSINESS_TYPE_CODE"
      store-type="simple"> 
      <creator id="default10" action="/metrodetection/system_code/logic/action/createBUSINESS_TYPE_CODEAction"/>  
      <reader id="default11" action="/metrodetection/system_code/logic/action/queryBUSINESS_TYPE_CODEAction"/>  
      <writer id="default12" action="/metrodetection/system_code/logic/action/saveBUSINESS_TYPE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="validStateCodeD" concept="VALID_STATE_CODE"
      store-type="simple"> 
      <creator id="default13" action="/metrodetection/system_code/logic/action/createVALID_STATE_CODEAction"/>  
      <reader id="default14" action="/metrodetection/system_code/logic/action/queryVALID_STATE_CODEAction"/>  
      <writer id="default15" action="/metrodetection/system_code/logic/action/saveVALID_STATE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="testSchemeCaseInfoD" concept="TEST_SCHEME_CASE_INFO"
      store-type="simple" direct-delete="true" confirm-delete="false"> 
      <creator id="default16" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_CASE_INFOAction"/>  
      <reader id="default17" action="/metrodetection/system_code/logic/action/myQueryTestBaseCaseInfoAction"/>  
      <writer id="default18" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_CASE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="testCaseBaseInfoD" concept="TEST_CASE_BASE_INFO"> 
      <creator id="default19" action="/metrodetection/system_code/logic/action/createTEST_CASE_BASE_INFOAction"/>  
      <reader id="default20" action="/metrodetection/system_code/logic/action/myTestCaseBaseDectionInfoAction"/>  
      <writer id="default21" action="/metrodetection/system_code/logic/action/saveTEST_CASE_BASE_INFOAction"/>  
      <calculate-relation relation="checkBox" id="calculate-relation1"/>  
      <calculate-relation relation="serialNumber" id="calculate-relation2"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="xml"
      columns="businessId,businessStage,businessStageName" src="" auto-load="false"
      id="businessCD" auto-new="true" store-type="simple"> 
      <rows xmlns="" id="default30">  
        <row id="default31"> 
          <cell id="default32"/>  
          <cell id="default33"/>  
          <cell id="default34"/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="businessStageD" concept="BUSINESS_STAGE_CODE"
      store-type="simple"> 
      <creator id="default35" action="/metrodetection/system_code/logic/action/createBUSINESS_STAGE_CODEAction"/>  
      <reader id="default38" action="/metrodetection/system_code/logic/action/queryBUSINESS_STAGE_CODEAction"/>  
      <writer id="default39" action="/metrodetection/system_code/logic/action/saveBUSINESS_STAGE_CODEAction"/> 
    </data> 
  </xforms:model>  
  <view auto-load="true" id="rootView"> 
    <xui:view auto-load="false" id="vProcessChart"> 
      <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart"
        id="processChart"/>  
      <xui:layout style="height:100%;width:100%;"> 
        <place control="processChart" style="height:100%;width:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <layout style="height:100%;width:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabs" style="height:100%;width:100%;"> 
        <tab id="tabDetail"> 
          <label>详细</label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:158%;"> 
            <center id="borderLayout-center2"> 
              <xui:place control="view1" id="controlPlace1" style="width:811px;height:445px;position:relative;"/> 
            </center>  
            <left size="76px" id="borderLayout-left1"/> 
          </xhtml:div> 
        </tab>  
        <xui:tab id="tabProcessChart"> 
          <xui:label>流程图</xui:label>  
          <place control="vProcessChart" style="width:100%;"/>  
          <xforms:action ev:event="xforms-select" id="action1"> 
            <xforms:script id="xformsScript1">schemeProcessQueryDetail.tabProcessChartSelect()</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="flow" style="position:relative;" id="layout1"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" src="excelLayout1.xls" style="width:86%;height:60%;"/> 
      </layout>  
      <xui:view auto-load="false" id="view2" class="xui-container" style="border-color:#000000 #000000 #000000 #000000;border-style:double double double double;border-width:1px 1px 1px 1px;width:919px;height:199px;"> 
        <layout type="absolute" style="position:relative;" id="layout2"> 
          <xui:place control="view3" id="controlPlace4" style="position:absolute;border-color:#FFFFFF #FFFFFF #FFFFFF #FFFFFF;left:1px;top:1px;height:100%;width:100%;"/> 
        </layout>  
        <xui:view auto-load="true" id="view3" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout3"> 
            <xui:place control="report1" id="controlPlace5" style="position:absolute;height:170px;width:688px;left:1px;top:1px;"/> 
          </layout>  
          <xhtml:div component="/UI/system/components/report.xbl.xml#report" src=""
            report-name="流程记录" auto-load="false" data-list="reportData" id="report1"
            column-width="1"> 
            <layout-content id="default1"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="1" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 18px"></td><td  style="WIDTH: 140px"></td><td  style="WIDTH: 205px"></td><td  style="WIDTH: 105px"></td><td  style="WIDTH: 72px"></td><td  style="WIDTH: 105px"></td></tr>
     <tr><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td></tr>
     <tr><td  style="HEIGHT: 26px"></td><td  style="HEIGHT: 26px"></td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">环节</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">附言</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">用户组</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">执行人</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle">时间</td></tr>
     <tr><td  style="HEIGHT: 26px"></td><td  style="HEIGHT: 26px"></td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.select(reportData.SACTIVITYNAME)</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SCONTENT</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SEXECUTORDEPTNAME</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SEXECUTORPERSONNAME</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle" format="yyyy/m/d h:mm;@">reportData.SACTUALFINISHTIME</td></tr>
  </table>
]]></layout-content> 
          </xhtml:div> 
        </xui:view> 
      </xui:view>  
      <xforms:input id="input1" ref="data('testSchemeBaseInfoD')/tESTSCHEMENAME" readonly="true"
        style="width:174px;"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('testSchemeBaseInfoD')/dECTIONBASEDONID"
        label-ref="data('testSchemeBaseInfoD')/dECTIONBASEDONNAME" readonly="true"
        style="width:160px;"> 
        <xforms:label ref="dECTIONBASEDONNAME" id="default4"/>  
        <xforms:value ref="DECTION_BASED_ON_INFO" id="default5"/>  
        <xforms:itemset id="default6" data="dectionBaseInfoD" auto-load-data="true"> 
          <xforms:column ref="DECTION_BASED_ON_INFO" visible="false" id="default40"/>  
          <xforms:column ref="dECTIONBASEDONNAME" id="default41"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('testSchemeBaseInfoD')/bUSINESSID"
        label-ref="data('testSchemeBaseInfoD')/bUSINESSIDCNAME" readonly="true" style="width:175px;"> 
        <xforms:label ref="bUSINESSIDCNAME" id="default44"/>  
        <xforms:value ref="BUSINESS_TYPE_CODE" id="default45"/>  
        <xforms:itemset id="default46" data="businessTypeCodeD" auto-load-data="true"> 
          <xforms:column ref="BUSINESS_TYPE_CODE" visible="false" id="default53"/>  
          <xforms:column ref="bUSINESSIDCNAME" id="default54"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('testSchemeBaseInfoD')/vALIDSTATE"
        label-ref="data('testSchemeBaseInfoD')/vALIDSTATECNAME" readonly="true" style="width:161px;"> 
        <xforms:label ref="vALIDSTATECNAME" id="default55"/>  
        <xforms:value ref="VALID_STATE_CODE" id="default56"/>  
        <xforms:itemset id="default57" data="validStateCodeD" auto-load-data="true"> 
          <xforms:column ref="VALID_STATE_CODE" visible="false" id="default68"/>  
          <xforms:column ref="vALIDSTATECNAME" id="default69"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input id="input2" ref="data('testSchemeBaseInfoD')/mAKEDATETIME" readonly="true"
        style="width:175px;"/>  
      <xforms:textarea ref="data('testSchemeBaseInfoD')/tESTSCHEMEDESC" id="textarea7"
        style="height:55px;width:518px;" readonly="true"/>  
      <xhtml:div style="height:176px;width:689px;" component="/UI/system/components/grid.xbl.xml#grid"
        show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20"
        id="grid1" data="testSchemeCaseInfoD"> 
        <xui:column id="gridColumn14" ref="tESTCASEVER" label="测试用例版本" type="ro" width="105px"/>  
        <xui:column id="gridColumn15" ref="tESTCASEID" label="测试用例ID" type="ro" width="145px"/>  
        <xui:column id="gridColumn17" ref="bUSINESSSTAGECNAME" label="业务阶段" type="ro"
          width="127px"/>  
        <xui:column id="gridColumn18" ref="dETECTIONOBJECTCNAME" label="检测对象类型" type="ro"
          width="131px"/>  
        <xui:column id="gridColumn19" ref="dEVICETYPECNAME" label="检测对象" type="ro"
          width="173px"/> 
      </xhtml:div>  
      <xforms:trigger id="trigger2" appearance="image" src="/UI/metrodetection/testing_standard/process/testSchemeProcessQuery/images/move_down.gif"> 
        <xforms:label id="default22">trigger</xforms:label>  
        <xforms:action id="action2" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript2"><![CDATA[schemeProcessQueryDetail.trigger1Click(event)]]></xforms:script> 
        </xforms:action> 
      </xforms:trigger> 
    <xforms:input id="input3" class="xui-autofill" ref="data('testSchemeBaseInfoD')/bUSINESSSTAGECNAME" readonly="true"></xforms:input></xui:view> 
  </view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="schemeProcessQueryDetail.js"/> 
  </resource> 
</window>
