<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:9px;left:597px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="false" id="testSchemeBaseInfoD" concept="TEST_SCHEME_BASE_INFO"
      store-type="simple" auto-new="true" onAfterNew="mainActivityNew.testSchemeBaseInfoDAfterNew"
      onValueChanging="mainActivityNew.testSchemeBaseInfoDValueChanging"> 
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
      store-type="simple" direct-delete="true" confirm-delete="false" confirm-refresh="false"> 
      <creator id="default16" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_CASE_INFOAction"/>  
      <reader id="default17" action="/metrodetection/system_code/logic/action/queryTEST_SCHEME_CASE_INFOAction"/>  
      <writer id="default18" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_CASE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="testCaseBaseInfoD" concept="TEST_CASE_BASE_INFO"
      filter-relations="tESTCASEVER,tESTCASEID,tESTCASENAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dECTIONBASEDONNAME" store-type="grid" limit="-1" confirm-refresh="false"> 
      <creator id="default19" action="/metrodetection/system_code/logic/action/createTEST_CASE_BASE_INFOAction"/>  
      <reader id="default20" action="/metrodetection/system_code/logic/action/myTestCaseBaseDectionInfoAction"/>  
      <writer id="default21" action="/metrodetection/system_code/logic/action/saveTEST_CASE_BASE_INFOAction"/>  
      <calculate-relation relation="checkBox" id="calculate-relation1"/>  
      <calculate-relation relation="serialNumber" id="calculate-relation2"/> 
    <calculate-relation relation="calMark" id="calculate-relation3"></calculate-relation>
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
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="indexAndRelationD" concept="RELATIONSHIP_INDEX_AND_CASE" confirm-refresh="false" store-type="simple"><creator id="default43"></creator>
  <reader id="default46" action="/metrodetection/system_code/logic/action/queryRELATIONSHIP_INDEX_AND_CASEAction"></reader>
  <writer id="default47"></writer></data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"/> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xui:place control="toolbars1" id="controlPlace2" style="position:absolute;width:400px;top:5px;height:25px;left:5px;"/>  
        <xui:place control="testSchemeP" id="controlPlace3" style="position:absolute;width:24px;top:134px;left:436px;"/>  
        <xui:place control="input1" id="controlPlace4" style="position:absolute;left:102px;top:75px;"/>  
        <xhtml:label id="label1" class="xui-label" style="position:absolute;position:absolute;top:81px;left:26px;">检测方案名称</xhtml:label>  
        <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;width:10px;position:absolute;position:absolute;top:81px;left:18px;">*</xhtml:label>  
        <xui:place control="gridSelect1" id="controlPlace5" style="position:absolute;left:370px;top:75px;"/>  
        <xhtml:label id="label4" class="xui-label" style="position:absolute;width:65px;position:absolute;left:307px;top:82px;">检测依据ID</xhtml:label>  
        <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:300px;top:83px;">*</xhtml:label>  
        <xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;left:102px;top:103px;"/>  
        <xhtml:label id="label3" class="xui-label" style="position:absolute;width:55px;position:absolute;left:49px;top:109px;">业务类型</xhtml:label>  
        <xhtml:label id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:42px;top:109px;">*</xhtml:label>  
        <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;left:370px;top:105px;"/>  
        <xhtml:label id="label6" class="xui-label" style="position:absolute;width:55px;position:absolute;left:320px;top:111px;">有效状态</xhtml:label>  
        <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;position:absolute;left:312px;top:112px;">*</xhtml:label>  
        <xui:place control="textarea2" id="controlPlace9" style="position:absolute;height:37px;left:102px;top:161px;width:424px;"/>  
        <xhtml:label id="label5" class="xui-label" style="position:absolute;position:absolute;top:137px;left:25px;">制作日期时间</xhtml:label>  
        <xhtml:label id="label12" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;top:137px;left:17px;">*</xhtml:label>  
        <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;left:25px;top:165px;">检测方案描述</xhtml:label>  
        <xhtml:label id="label14" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;top:165px;left:17px;">*</xhtml:label>  
        <xui:place control="input2" id="controlPlace10" style="position:absolute;left:102px;top:133px;"/>  
        <xui:place control="toolbars2" id="controlPlace11" style="position:absolute;left:5px;height:38px;width:204px;top:38px;"/>  
        <xui:place control="toolbars3" id="controlPlace8" style="position:absolute;left:5px;height:37px;width:207px;top:210px;"/>  
        <xui:place control="testCaseGrid" id="controlPlace12" style="position:absolute;left:5px;height:244px;width:898px;top:252px;"/>  
        <xui:place control="gridSelect4" id="controlPlace13" style="position:absolute;top:216px;left:314px;"/>  
        <xhtml:label id="label7" class="xui-label" style="position:absolute;width:52px;position:absolute;left:261px;top:220px;">业务阶段</xhtml:label>  
        <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;position:absolute;position:absolute;top:220px;left:250px;">*</xhtml:label> 
      <xui:place control="relationWD" id="controlPlace14" style="position:absolute;top:370px;left:462px;"></xui:place></layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
          id="processBar1" process="testSchemeP" mode="IMG_TXT_LR"> 
          <item name="back-process-item" id="barItem1"/>  
          <item name="advance-process-item" id="barItem2"/>  
          <item name="suspend-process-item" id="barItem4"/>  
          <item name="abort-process-item" id="barItem5"/>  
          <item name="process-chart-item" id="barItem7"/>  
          <item name="execute-list-item" id="customBarItem1"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/process.xbl.xml#process" use-simple-dialog="true"
        data-type="xml" dialog-window="/UI/system/service/process/dialogs/processDialog.w"
        dialog-height="480" dialog-width="600" id="testSchemeP" data="testSchemeBaseInfoD"/>  
      <xforms:input id="input1" ref="data('testSchemeBaseInfoD')/tESTSCHEMENAME"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('testSchemeBaseInfoD')/dECTIONBASEDONID"
        label-ref="data('testSchemeBaseInfoD')/dECTIONBASEDONNAME" onCloseup="mainActivityNew.gridSelect1Closeup"> 
        <xforms:label ref="dECTIONBASEDONNAME" id="default4"/>  
        <xforms:value ref="DECTION_BASED_ON_INFO" id="default5"/>  
        <xforms:itemset id="default6" data="dectionBaseInfoD" auto-load-data="true"> 
          <xforms:column ref="DECTION_BASED_ON_INFO" visible="false" id="default22"/>  
          <xforms:column ref="dECTIONBASEDONNAME" id="default23"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('testSchemeBaseInfoD')/bUSINESSID"
        label-ref="data('testSchemeBaseInfoD')/bUSINESSIDCNAME"> 
        <xforms:label ref="bUSINESSIDCNAME" id="default24"/>  
        <xforms:value ref="BUSINESS_TYPE_CODE" id="default25"/>  
        <xforms:itemset id="default26" data="businessTypeCodeD" auto-load-data="true"> 
          <xforms:column ref="BUSINESS_TYPE_CODE" visible="false" id="default36"/>  
          <xforms:column ref="bUSINESSIDCNAME" id="default37"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('testSchemeBaseInfoD')/vALIDSTATE"
        label-ref="data('testSchemeBaseInfoD')/vALIDSTATECNAME" readonly="true"> 
        <xforms:label ref="vALIDSTATECNAME" id="default27"/>  
        <xforms:value ref="VALID_STATE_CODE" id="default28"/>  
        <xforms:itemset id="default29" data="validStateCodeD" auto-load-data="true"> 
          <xforms:column ref="VALID_STATE_CODE" visible="false" id="default44"/>  
          <xforms:column ref="vALIDSTATECNAME" id="default45"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('testSchemeBaseInfoD')/tESTSCHEMEDESC" id="textarea2"/>  
      <xforms:input id="input2" ref="data('testSchemeBaseInfoD')/mAKEDATETIME" readonly="true"/>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="testSchemeBaseInfoD"> 
          <item> 
            <xforms:trigger appearance="image-text" id="saveMore" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
              <xforms:label> <![CDATA[保存]]> </xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript1"><![CDATA[mainActivityNew.saveMoreClick(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem11"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar2" data="testSchemeCaseInfoD" style="width:136px;"> 
          <item id="barItem12"> 
            <xforms:trigger appearance="image-text" id="saveMoreD" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif" disabled="true"> 
              <xforms:label> <![CDATA[保存]]> </xforms:label>  
              <xforms:action id="action2" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript2"><![CDATA[mainActivityNew.saveMoreDClick(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem14"/> 
        </xui:bar>
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar4" data="testCaseBaseInfoD"> 
          <item name="filter-pro-item" id="customBarItem3"/> 
        </xui:bar>  
        </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="testCaseGrid" data="testCaseBaseInfoD"> 
        <xui:column id="gridColumn7" ref="checkBox" label="#master_checkbox" type="ch"
          width="23px" align="center"/>  
        <xui:column id="gridColumn8" ref="serialNumber" label="序号" type="ro" width="31px"
          align="center" show-index="true"/>  
        <xui:column id="gridColumn1" ref="tESTCASEVER" label="测试用例版本" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn2" ref="tESTCASEID" label="测试用例ID" type="ed" width="116px"></xui:column>
  <xui:column id="gridColumn3" ref="tESTCASENAME" label="测试用例名称" type="ed" width="136px"></xui:column>
  <xui:column id="gridColumn6" ref="dECTIONBASEDONNAME" label="检测依据文件名称" type="ed" width="105px"></xui:column><xui:column id="gridColumn4" ref="dETECTIONOBJECTCNAME" label="检测对象类别" type="ro" width="141px"></xui:column>
  <xui:column id="gridColumn5" ref="dEVICETYPECNAME" label="检测对象" type="ro" width="136px"></xui:column>
  <xui:column id="gridColumn9" ref="calMark" label="用例指标" type="html" width="100px" onRender="mainActivityNew.testCaseGrid_calMarkRender"></xui:column></xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect4" ref="data('businessCD')/businessStage"
        label-ref="data('businessCD')/businessStageName" disabled="true"> 
        <xforms:label ref="bUSINESSSTAGECNAME" id="default40"/>  
        <xforms:value ref="bUSINESSSTAGE" id="default41"/>  
        <xforms:itemset id="default42" data="businessStageD" auto-load-data="true"> 
          <xforms:column ref="bUSINESSSTAGE" visible="false" id="default51"/>  
          <xforms:column ref="bUSINESSSTAGECNAME" id="default52"/> 
        </xforms:itemset> 
      </xhtml:div> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="子用例指标信息" width="730px" height="400px" modal="true" id="relationWD" url="/UI/metrodetection/testing_standard/process/testscheme_baseinfo/relationIndex.w" left="262px"></xhtml:div></xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivityNew.js"/> 
  </xui:resource> 
</xui:window>
