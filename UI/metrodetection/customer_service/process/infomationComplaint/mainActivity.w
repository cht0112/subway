<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:474px;left:1px;">
   <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="CUSTOMER_COMPLAINT_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false" confirm-refresh="false" store-type="simple" auto-new="true" onValueChanged="mainActivity.dataMainValueChanged">
    <reader action="/metrodetection/customer_service/logic/action/myComplaintInfoSelete" id="default3"></reader>
    <writer action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_INFOAction" id="default4"></writer>
    <creator action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_INFOAction" id="default5"></creator>
    <rule id="dataBizRule2" relation="TITLE" required="true()" alert="'投诉主题不能为空!'"></rule>
    <rule id="dataBizRule3" relation="COMPLAINT_CONTENT" alert="'意见综述不能为空!'" required="true()"></rule>
    <rule id="dataBizRule1" relation="CONTACTOR" required="true()" alert="'联系人不能为空!'"></rule>
    <rule id="dataBizRule4" relation="COMPLAINT_DATE" required="true()" alert="'意见来源时间不能为空!'"></rule>
  <rule id="dataBizRule5" relation="COMPLAINT_UNIT" required="true()" alert="'客户名称不能为空!'"></rule></data> 
   <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereAll">
   <reader action="/system/logic/action/queryOrgAction" id="default4_7"></reader></data>
  <data auto-load="true" columns="val,name" component="/UI/system/components/data.xbl.xml#data" id="tempData" src="" store-type="simple" confirm-refresh="false">
   <rows xmlns="" id="default15_3">
    <row id="default16_3">
     <cell id="default17_3"></cell>
     <cell id="default18_3"></cell></row> </rows> </data>
  <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll">
   <creator id="default5_7"></creator>
   <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default6_7"></reader>
   <writer id="default7_7"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="main" concept="SA_Task" onAfterRefreshPage="mainActivity.mainAfterRefreshPage" store-type="simple" data-type="json">
   <reader id="default63" action="/system/logic/action/queryTaskAction"></reader>
   <calculate-relation relation="calcIndex" id="calculate-relation1"></calculate-relation>
  <creator id="default64" action="/system/logic/action/createTaskAction"></creator>
  <writer id="default65" action="/system/logic/action/saveTaskAction"></writer></data></xforms:model><xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="navigatorBar1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif">  
            <xforms:label>  <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate">  
              <xforms:script>  <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar" id="processBar1" mode="IMG_TXT_LR" process="flw" style="width:451px;"> 
        <item id="barItem13" name="advance-process-item"/>  
        <item id="barItem16" name="abort-process-item"/>  
        <item id="barItem1" name="process-chart-item"/>
  <item name="execute-list-item" id="barItem2"></item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" data="dataMain" id="flw" onAdvanceCommit="mainActivity.flwAdvanceCommit" onAbortCommit="mainActivity.flwAbortCommit" auto-filter="false"/>  
        <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" style="position:absolute;width:378%;top:5px;left:5px;"
          src="complaintInfo_xls.xls"></xhtml:div>
      </layout>  
      <xforms:input id="iptCOMPLAINT_DOC_CODE" ref="data('dataMain')/COMPLAINT_DOC_CODE" readonly="true"/>  
      <xforms:input id="iptCONTACTOR" ref="data('dataMain')/CONTACTOR" style="width:143px;" tabindex="5"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/TYPE"
        style="width:153px;" tabindex="4"> 
        <xforms:label ref="col_1" id="default19"/>  
        <xforms:value ref="col_0" id="default20"/>  
        <xforms:itemset id="default22" auto-load-data="true">
          <itemset-data xmlns="" id="default31">  
            <rows id="default32">  
              <row id="default33"> 
                <cell id="default34">1</cell>  
                <cell id="default35">对设备的投诉</cell>
              </row>  
              <row id="default36"> 
                <cell id="default37">2</cell>  
                <cell id="default38">对服务态度</cell>
              </row>  
              <row id="default39"> 
                <cell id="default40">3</cell>  
                <cell id="default41">对服务人员技能</cell>
              </row>  
              <row id="default42"> 
                <cell id="default45">4</cell>  
                <cell id="default46">对异常事件</cell>
              </row>  
              <row id="default47"> 
                <cell id="default48">5</cell>  
                <cell id="default49">其他</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default75"/>  
          <xforms:column ref="col_1" id="default76"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/SEVERITY"
        style="width:153px;" tabindex="6"> 
        <xforms:label ref="col_1" id="default24"/>  
        <xforms:value ref="col_0" id="default26"/>  
        <xforms:itemset id="default27" auto-load-data="true">
            
          <xforms:column ref="col_0" visible="false" id="default61"/>  
          <xforms:column ref="col_1" id="default62"/>
        <itemset-data xmlns="" id="default1">
   <rows xmlns="" id="default2">
    <row id="default6">
     <cell id="default7">1</cell>
     <cell id="default8">严重投诉</cell></row> 
    <row id="default9">
     <cell id="default10">2</cell>
     <cell id="default11">较严重投诉</cell></row> 
    <row id="default12">
     <cell id="default13">3</cell>
     <cell id="default14">一般投诉</cell></row> 
    <row id="default15">
     <cell id="default16">4</cell>
     <cell id="default17">较小投诉</cell></row> 
    <row id="default18">
     <cell id="default43">5</cell>
     <cell id="default44">其他</cell></row> </rows> </itemset-data></xforms:itemset>
      </xhtml:div>  
      <xforms:input id="input14" ref="data('dataMain')/CONTACTOR_TELEPHONE" style="width:143px;" tabindex="11"/>  
      <xforms:input id="input15" ref="data('dataMain')/CONTACT_EMAIL" style="width:146px;" tabindex="9"><xforms:action id="action5" ev:event="DOMFocusOut"><xforms:script id="xformsScript5"><![CDATA[mainActivity.input15Blur(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="input16" ref="data('dataMain')/REGION" style="width:145px;" tabindex="10"/>  
      <xforms:input id="input17" ref="data('dataMain')/oPERATORNAME" style="width:144px;" disabled="true"/>  
      <xforms:input id="input19" ref="data('dataMain')/RECEIPT_DATE" style="width:146px;" disabled="true"/>  
      <xforms:input id="input20" ref="data('dataMain')/COMPLAINT_UNIT" style="width:457px;" tabindex="1"/>  
      <xforms:input id="input21" ref="data('dataMain')/TITLE" style="width:460px;" tabindex="12"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/STATUS"
        style="width:147px;" disabled="true"> 
        <xforms:label ref="col_1" id="default28"/>  
        <xforms:value ref="col_0" id="default29"/>  
        <xforms:itemset id="default30" auto-load-data="true"> 
            
          <xforms:column ref="col_0" visible="false" id="default73"/>  
          <xforms:column ref="col_1" id="default74"/>
        <itemset-data xmlns="" id="default50">
   <rows xmlns="" id="default51">
    <row id="default52">
     <cell id="default53">1</cell>
     <cell id="default54">未受理</cell></row> 
    <row id="default55">
     <cell id="default56">2</cell>
     <cell id="default57">已受理</cell></row> 
    <row id="default58">
     <cell id="default59">3</cell>
     <cell id="default60">已反馈</cell></row> </rows> </itemset-data></xforms:itemset>
      </xhtml:div>  
      <xforms:input id="input22" ref="data('dataMain')/COMPLAINT_CONTENT" style="height:47px;width:504px;"/>  
      <xforms:input id="input23" ref="data('dataMain')/MEMO" style="height:50px;width:503px;"/>  
      <xforms:input id="input24" ref="data('dataMain')/COMPLAINT_DATE" style="width:149px;"/>  
      <xforms:input id="input26" ref="data('dataMain')/COMPLAINT_DOC_NO"/>  
      <xforms:input id="input27" ref="data('dataMain')/COMPLAINT_DOC_NO" readonly="true"/>
    <xforms:textarea ref="data('dataMain')/COMPLAINT_CONTENT" id="textarea1" style="height:57px;width:466px;" tabindex="13"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea2" style="height:56px;" tabindex="14"></xforms:textarea>
  <xforms:input id="input3" style="width:456px;" ref="data('dataMain')/MAILING_ADDRESS" tabindex="7"></xforms:input>
  <xforms:input id="input4" style="width:144px;" ref="data('dataMain')/POSTCODE" tabindex="8"></xforms:input>
  <xforms:select1 ref="data('dataMain')/COMPLAINT_SOURCE" id="radio1" tabindex="2">
   <xforms:item id="selectItem1">
    <xforms:label id="default66"><![CDATA[电话]]></xforms:label>
    <xforms:value id="default67"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default68"><![CDATA[信函]]></xforms:label>
    <xforms:value id="default69"><![CDATA[2]]></xforms:value></xforms:item>
    <xforms:item id="selectItem3">
    <xforms:label id="default70"><![CDATA[当面口述]]></xforms:label>
    <xforms:value id="default71"><![CDATA[3]]></xforms:value></xforms:item>
    <xforms:item id="selectItem4">
    <xforms:label id="default72"><![CDATA[传真]]></xforms:label>
    <xforms:value id="default73"><![CDATA[4]]></xforms:value></xforms:item> </xforms:select1></xui:view>  
    <layout id="layout1" style="height:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:447px;"> 
        <top id="borderLayout-top1" size="38px"> 
          <place control="tbsMain" id="controlPlace4"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="vDetail" id="controlPlace11" style="width:786px;"/> 
        </center> 
      </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;top:184px;left:52px;"/> 
    </layout> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</window>
