<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:289px;left:208px;"> 
      
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="bizData1" concept="QA_SUPERVISION_PLAN">
      <creator id="default45" action="/metrodetection/quality_supervision/logic/action/createQA_SUPERVISION_PLANAction"/>  
      <reader id="default46" action="/metrodetection/quality_supervision/logic/action/queryQA_SUPERVISION_PLANAction"/>  
      <writer id="default47" action="/metrodetection/quality_supervision/logic/action/saveQA_SUPERVISION_PLANAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple">
      <creator id="default21" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"/>  
      <reader id="default22" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"/>  
      <writer id="default24" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple">
      <reader id="default25" action="/system/logic/action/queryOrgAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple">
      <creator id="default27" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"/>  
      <reader id="default28" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/>  
      <writer id="default37" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"/>
    </data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="bizData2" concept="DAILY_SUPERVISION_RECORD" store-type="simple" confirm-refresh="false"><creator id="default1" action="/metrodetection/quality_supervision/logic/action/createDAILY_SUPERVISION_RECORDAction"></creator>
  <reader id="default9" action="/metrodetection/quality_supervision/logic/action/myQueryDailySupervisionRecordAction"></reader>
  <writer id="default10" action="/metrodetection/quality_supervision/logic/action/saveDAILY_SUPERVISION_RECORDAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action><data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DAILY_SUPERVISION_RECORD" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" filter-relations="RECORD_CODE,RECORD_NO,RECORD_DATE,SUPERVISION_PERSON,SIGNING_DATE,RESPONSOR_PERSON"> 
      <reader action="/metrodetection/quality_supervision/logic/action/myQueryDailySupervisionRecordAction" id="default3" />  
      <writer action="/metrodetection/quality_supervision/logic/action/saveDAILY_SUPERVISION_RECORDAction" id="default4" />  
      <creator action="/metrodetection/quality_supervision/logic/action/createDAILY_SUPERVISION_RECORDAction" id="default5" />  
      <rule id="default17" relation="RECORD_CODE" required="true()" alert="'记录单据编码不能为空!'" />  
      <rule id="default20" relation="RECORD_NO" required="true()" alert="'记录单据编号不能为空!'" />  
      <rule id="default23" relation="RECORD_DATE" required="true()" alert="'监督检查日期不能为空!'" />  
      <rule id="default26" relation="SUPERVISION_PERSON" required="true()" alert="'监督员不能为空!'" />  
      <rule id="default29" relation="RECORD_CONTENT" required="true()" alert="'监督内容不能为空!'" />  
      <rule id="default32" relation="FACTUAL_RECORD" required="true()" alert="'监督事实记录不能为空!'" /> 
    </data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default2" label="编码" ref="RECORD_CODE" type="ro" width="144px"/>  
      <column id="default6" label="编号" ref="RECORD_NO" type="ro" width="126px"/>  
      <column id="default7" label="监督检查日期" ref="RECORD_DATE" type="date" width="100px"/>  
      <column id="default8" label="监督员" ref="oPERATORNAME" type="ro" width="100px"/>  
      <column id="default13" label="签署意见日期" ref="SIGNING_DATE" type="date" width="100px"/>  
      <column id="default14" label="被监督部门负责人" ref="oPERATORNAME1" type="ro"
        width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="customBarItem1"> 
          </item>  
          <item>
        <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger>  
          </item>
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:106%;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <xui:place control="view2" id="controlPlace11" style="width:908px;height:587px;position:relative;"/>
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xhtml:input type="checkbox" value="" name="" id="input3"/>
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="flow" style="position:relative;" id="layout2">
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          style="width:100%; height: 100%;display:block;" id="excelLayout1" src="excelLayout1.xls"/>
      </layout>  
      <xforms:input ref="data('dataMain')/SUPERVISION_PLAN_IDID" id="SUPERVISION_PLAN_IDID1"/>  
      <xforms:input ref="data('dataMain')/RECORD_CODE" id="RECORD_CODE1" disabled="true" tabindex="1"/>  
      <xforms:input ref="data('dataMain')/RECORD_NO" id="RECORD_NO1" disabled="true" tabindex="2"/>  
      <xforms:input ref="data('dataMain')/RECORD_DATE" id="RECORD_DATE1" disabled="true" tabindex="3"/>  
      <xforms:input ref="data('dataMain')/SUPERVISION_PERSON" id="SUPERVISION_PERSON1"/>  
      <xforms:input ref="data('dataMain')/RECORD_CONTENT" id="RECORD_CONTENT1"/>  
      <xforms:input id="FACTUAL_RECORD1"/>  
      <xforms:input ref="data('dataMain')/CONFIRMATION_OPINIONS" id="CONFIRMATION_OPINIONS1"/>  
      <xforms:input id="SUPPLEMENTARY_DESC1"/>  
      <xforms:input ref="data('bizData2')/SIGNING_DATE" id="SIGNING_DATE1" disabled="true" tabindex="11"/>  
      <xforms:input ref="data('bizData2')/oPERATORNAME1" id="RESPONSOR_PERSON1" disabled="true" tabindex="10"/>  
      <xforms:textarea ref="data('dataMain')/CONFIRMATION_OPINIONS" id="textarea1" style="height:79px;" tabindex="9"/>  
      <xforms:textarea ref="data('dataMain')/SUPPLEMENTARY_DESC" id="textarea2" style="height:93px;" disabled="true" tabindex="8"/>  
      <xforms:textarea ref="data('dataMain')/FACTUAL_RECORD" id="textarea3" style="height:99px;" disabled="true" tabindex="7"/>  
      <xforms:select id="checkbox1" ref="data('dataMain')/RECORD_CONTENT"> 
        <xforms:item id="selectItem12"> 
          <xforms:label id="default41"><![CDATA[人员及操作]]></xforms:label>  
          <xforms:value id="default42"><![CDATA[1]]></xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem13"> 
          <xforms:label id="default43"><![CDATA[设施及环境条件]]></xforms:label>  
          <xforms:value id="default44"><![CDATA[2]]></xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem14"> 
          <xforms:label id="default48"><![CDATA[检测方法]]></xforms:label>  
          <xforms:value id="default49"><![CDATA[3]]></xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem15"> 
          <xforms:label id="default50"><![CDATA[仪器设备]]></xforms:label>  
          <xforms:value id="default51"><![CDATA[4]]></xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem16" style="width:494px;"> 
          <xforms:label id="default52"><![CDATA[测量溯源性]]></xforms:label>  
          <xforms:value id="default53"><![CDATA[5]]></xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem17"> 
          <xforms:label id="default54"><![CDATA[采样、样品处置]]></xforms:label>  
          <xforms:value id="default55"><![CDATA[6]]></xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem18"> 
          <xforms:label id="default56"><![CDATA[结果报告]]></xforms:label>  
          <xforms:value id="default57"><![CDATA[7]]></xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem19"> 
          <xforms:label id="default58"><![CDATA[其他]]></xforms:label>  
          <xforms:value id="default59">item</xforms:value>
        </xforms:item>
      </xforms:select>  
      <xforms:input id="input4" ref="data('dataMain')/SUPERVISION_PLAN_IDID"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/SUPERVISION_PLAN_IDID" disabled="true" tabindex="5"> 
        <xforms:label ref="SUPERVISION_NO" id="default15"/>  
        <xforms:value ref="QA_SUPERVISION_PLAN" id="default16"/>  
        <xforms:itemset id="default18" data="bizData1" auto-load-data="true">
          
        
  
  
  <xforms:column ref="QA_SUPERVISION_PLAN" visible="false" id="default71"></xforms:column>
  <xforms:column ref="SUPERVISION_NO" id="default76"></xforms:column>
  <xforms:column ref="PROJECT_NAME" id="default77"></xforms:column></xforms:itemset>
      </xhtml:div>
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/SUPERVISION_PERSON" disabled="true" label-ref="data('dataMain')/SUPERVISION_PERSON">
   <xforms:label ref="HR_BASE_INFO" id="default38"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default60"></xforms:value>
   <xforms:itemset id="default61" data="hrPerData">
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default64"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default65"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input5" ref="data('dataMain')/SUPERVISION_PERSON"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/SUPERVISION_PERSON" disabled="true" tabindex="4">
   <xforms:label ref="oPERATORNAME" id="default67"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default68"></xforms:value>
   <xforms:itemset id="default69" data="hrPerData" auto-load-data="true">
  
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default79"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default80"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:select id="checkbox2" ref="data('dataMain')/RECORD_CONTENT" disabled="true" tabindex="6">
   <xforms:item id="selectItem1">
    <xforms:label id="default12"><![CDATA[人员及操作]]></xforms:label>
    <xforms:value id="default30"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default31"><![CDATA[设施及环境条件 ]]></xforms:label>
    <xforms:value id="default33"><![CDATA[2]]></xforms:value></xforms:item> 
  <xforms:item id="selectItem3">
   <xforms:label id="default34"><![CDATA[检测方法]]></xforms:label>
   <xforms:value id="default35"><![CDATA[3]]></xforms:value></xforms:item>
  <xforms:item id="selectItem4">
   <xforms:label id="default36"><![CDATA[仪器设备]]></xforms:label>
   <xforms:value id="default39"><![CDATA[4]]></xforms:value></xforms:item>
  <xforms:item id="selectItem5">
   <xforms:label id="default40"><![CDATA[测量溯源性]]></xforms:label>
   <xforms:value id="default62"><![CDATA[5]]></xforms:value></xforms:item>
  <xforms:item id="selectItem6">
   <xforms:label id="default63"><![CDATA[采样、样品处置 ]]></xforms:label>
   <xforms:value id="default66"><![CDATA[6]]></xforms:value></xforms:item>
  <xforms:item id="selectItem7">
   <xforms:label id="default72"><![CDATA[结果报告]]></xforms:label>
   <xforms:value id="default73"><![CDATA[7]]></xforms:value></xforms:item>
  <xforms:item id="selectItem8">
   <xforms:label id="default74"><![CDATA[其他]]></xforms:label>
   <xforms:value id="default75"><![CDATA[8]]></xforms:value></xforms:item></xforms:select></xui:view>
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="/UI/metrodetection/quality_supervision/process/richangjiandu/mainActivity.js"/> 
  </xui:resource> 
</xui:window>
