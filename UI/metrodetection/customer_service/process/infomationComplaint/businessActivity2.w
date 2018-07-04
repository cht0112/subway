<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:justep="http://www.justep.com/x5#"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xu="http://www.xmldb.org/xupdate"
  xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:xui="http://www.justep.com/xui"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window">  
  <div id="mdDefault3" xui:update-mode="delete"/>  
  <div id="rootView1" xui:update-mode="delete"/>  
  <div id="rsMain2" xui:update-mode="delete"/>  
  <div id="mdDefault1" xui:update-mode="insert" xui:parent=""/>  
  <div id="rootView2" xui:update-mode="insert" xui:parent=""/>  
  <div id="rsMain" xui:update-mode="insert" xui:parent=""/>  
  <xforms:model id="mdDefault2" style="height:auto;top:244px;left:59px;" xui:update-mode="insert"
    xui:parent="">  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="false" id="dataMain" concept="CUSTOMER_COMPLAINT_FEEDBACK"
      direct-delete="false" store-type="simple" confirm-refresh="false" auto-new="true" onValueChanged="businessActivity2.dataMainValueChanged"> 
      <creator id="default18" action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_FEEDBACKAction"/>  
      <reader id="default13" action="/metrodetection/customer_service/logic/action/myQueryComplaintFeedAndHR"/>  
      <writer id="default14" action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_FEEDBACKAction"/>  
      <master id="master1"/>  
      <rule id="dataBizRule1" relation="COMPLAINT_ID" relevant="false()"/>  
      <rule id="dataBizRule2" concept="CUSTOMER_COMPLAINT_FEEDBACK" relevant="false()"/>  
      <rule id="dataBizRule3" relation="ADVICE" required="true()"/>  
    <rule id="dataBizRule4" relation="COMPLAINT_ANALYSIS" required="true()" alert="'问题分析及处理建议不能为空!'"></rule></data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereAll"> 
      <reader action="/system/logic/action/queryOrgAction" id="default4_7"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll"> 
      <creator id="default5_7"/>  
      <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"
        id="default6_7"/>  
      <writer id="default7_7"/> 
    </data>  
    <data auto-load="true" columns="val,name" component="/UI/system/components/data.xbl.xml#data"
      id="tempData" src="" store-type="simple" confirm-refresh="false"> 
      <rows xmlns="" id="default15_3">  
        <row id="default16_3"> 
          <cell id="default17_3"/>  
          <cell id="default18_3"/> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xbl-loaded">  
      <xforms:script id="xformsScript1">  <![CDATA[businessActivity2.mdDefaultXBLLoaded(event)]]> </xforms:script> 
    </xforms:action> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="dataMaster" concept="CUSTOMER_COMPLAINT_INFO" confirm-delete="true" direct-delete="true" confirm-refresh="false" store-type="simple"><creator id="default1" action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/customer_service/logic/action/myQueryComplantFeedbackAction"></reader>
  <writer id="default3" action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_INFOAction"></writer></data>
  <xforms:action id="action2" ev:event="onload"><xforms:script id="xformsScript2"><![CDATA[businessActivity2.mdDefault2Load(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView3" xui:update-mode="insert" xui:parent="">  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsFlow">  
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtb" mode="IMG_TXT_LR">  
        <item> 
          <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif">  
            <xforms:label>  <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate">  
              <xforms:script>  <![CDATA[businessActivity2.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
<!--        <item id="barItem5" name="save-item"></item>-->
      </xui:bar>  
      <xui:bar component="/UI/system/components/processBar.xbl.xml#processBar"
        id="flwBar" mode="IMG_TXT_LR" process="flw">  
        <item name="back-process-item" id="barItem1"/>
        <item id="barItem13" name="advance-process-item"/>  
        <item id="barItem15" name="suspend-process-item"/>  
        <item id="barItem16" name="abort-process-item"/>  
        <item id="barItem3" name="process-chart-item"/>  
        <item name="execute-list-item" id="barItem4"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" data="dataMaster"
      id="flw" auto-save="false" onTransferCommit="businessActivity2.flwTransferCommit" onAdvanceCommit="businessActivity2.flwAdvanceCommit" auto-filter="false"></xhtml:div>  
    <layout id="layout1" style="height:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout2" style="width:100%;height:902px;">  
        <top id="borderLayout-top2" size="37px"> 
          <place control="tbsFlow" id="controlPlace4"/> 
        </top>  
        <center id="borderLayout-center2"> 
          <place control="vDetail" id="controlPlace1" style="width:100%;"/> 
        </center> 
      </xhtml:div>  
      <place control="flw" id="controlPlace7" style="width:24px;left:52px;top:183px;"/> 
    </layout>  
    <layout id="layout2"/>  
    <xui:view auto-load="true" id="vDetail" class="xui-container">  
      <layout id="layout3" style=";position:relative;" type="absolute"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" style="position:absolute;width:105%;top:15px;left:5px;height:842px;"
          src="complaintSetting_xls.xls"></xhtml:div> 
      </layout>  
      <xforms:input id="iptCOMPLAINT_DOC_CODE" ref="data('dataMaster')/COMPLAINT_DOC_CODE" readonly="true"></xforms:input>  
      <xforms:input id="iptCONTACTOR" ref="data('dataMaster')/CONTACTOR" disabled="true"></xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/TYPE" style="width:167px;" disabled="true">  
        <xforms:label ref="col_1" id="default19"></xforms:label>  
        <xforms:value ref="col_0" id="default20"></xforms:value>  
        <xforms:itemset id="default22" auto-load-data="true">  
            
          <xforms:column ref="col_0" visible="false" id="default75"></xforms:column>  
          <xforms:column ref="col_1" id="default76"></xforms:column> 
        <itemset-data xmlns="" id="default79">
   <rows xmlns="" id="default84">
    <row id="default85">
     <cell id="default86">1</cell>
     <cell id="default87">对设备的投诉</cell></row> 
    <row id="default88">
     <cell id="default89">2</cell>
     <cell id="default90">对服务态度</cell></row> 
    <row id="default91">
     <cell id="default92">3</cell>
     <cell id="default93">对服务人员技能</cell></row> 
    <row id="default94">
     <cell id="default95">4</cell>
     <cell id="default96">对异常事件</cell></row> 
    <row id="default97">
     <cell id="default98">5</cell>
     <cell id="default99">其他</cell></row> </rows> </itemset-data></xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMaster')/SEVERITY"
        style="width:168px;" disabled="true">  
        <xforms:label ref="col_1" id="default24"></xforms:label>  
        <xforms:value ref="col_0" id="default26"></xforms:value>  
        <xforms:itemset id="default27" auto-load-data="true">  
            
          <xforms:column ref="col_0" visible="false" id="default61"></xforms:column>  
          <xforms:column ref="col_1" id="default62"></xforms:column> 
        <itemset-data xmlns="" id="default7">
   <rows xmlns="" id="default8">
    <row id="default9">
     <cell id="default10">1</cell>
     <cell id="default11">严重投诉</cell></row> 
    <row id="default12">
     <cell id="default15">2</cell>
     <cell id="default17">较严重投诉</cell></row> 
    <row id="default21">
     <cell id="default23">3</cell>
     <cell id="default25">一般投诉</cell></row> 
    <row id="default43">
     <cell id="default44">4</cell>
     <cell id="default50">较小投诉</cell></row> 
    <row id="default51">
     <cell id="default52">5</cell>
     <cell id="default53">其他</cell></row> </rows> </itemset-data></xforms:itemset> 
      </xhtml:div>  
      <xforms:input id="input14" ref="data('dataMaster')/CONTACTOR_TELEPHONE" disabled="true"></xforms:input>  
      <xforms:input id="input15" ref="data('dataMaster')/CONTACT_EMAIL" style="width:169px;" disabled="true"></xforms:input>  
      <xforms:input id="input16" ref="data('dataMaster')/REGION" disabled="true"></xforms:input>  
      <xforms:input id="input17" ref="data('dataMaster')/oPERATORNAME" style="width:156px;" disabled="true"></xforms:input>  
      <xforms:input id="input19" ref="data('dataMaster')/RECEIPT_DATE" style="width:168px;" disabled="true"></xforms:input>  
      <xforms:input id="input20" ref="data('dataMaster')/COMPLAINT_UNIT" style="width:492px;" disabled="true"></xforms:input>  
      <xforms:input id="input21" ref="data('dataMaster')/TITLE" style="height:20px;width:492px;" disabled="true"></xforms:input>  
      
      <xforms:input id="input24" ref="data('dataMaster')/COMPLAINT_DATE" style="width:162px;" disabled="true"></xforms:input>  
      <xforms:input id="input27" ref="data('dataMaster')/COMPLAINT_DOC_NO" style="width:120px;" readonly="true"></xforms:input>  
      <xforms:select1 ref="data('dataMain')/RELEASE" id="radio1">  
        <xforms:item id="selectItem1">  
          <xforms:label id="default4">  <![CDATA[是]]> </xforms:label>  
          <xforms:value id="default5">  <![CDATA[1]]> </xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem2" style="width:49px;">  
          <xforms:label id="default6">  <![CDATA[否]]> </xforms:label>  
          <xforms:value id="default16">  <![CDATA[2]]> </xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xforms:input id="input2" ref="data('dataMain')/oPERATORNAME" style="width:188px;"></xforms:input>  
      <xforms:input id="input3" ref="data('dataMain')/APPROVAL_DATE" style="width:109px;" readonly="true"></xforms:input>  
      <xforms:input id="input4" ref="data('dataMain')/DEAL_DATE" style="width:180px;"></xforms:input>  
      
      <xforms:textarea ref="data('dataMain')/SOLVING_DESCRIPTION" id="textarea2" style="height:52px;" disabled="true"></xforms:textarea>  
      <xforms:textarea ref="data('dataMain')/MEMO" id="textarea3" style="height:50px;" disabled="true"></xforms:textarea>  
      <xforms:textarea ref="data('dataMaster')/COMPLAINT_CONTENT" id="textarea4" style="height:50px;" disabled="true"></xforms:textarea>  
      <xforms:textarea ref="data('dataMaster')/MEMO" id="textarea5" style="height:50px;" disabled="true"></xforms:textarea> 
    <xforms:select1 ref="data('dataMaster')/COMPLAINT_SOURCE" id="radio2" disabled="true">
   <xforms:item id="selectItem3">
    <xforms:label id="default67"><![CDATA[电话]]></xforms:label>
    <xforms:value id="default68"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem4">
    <xforms:label id="default69"><![CDATA[信函]]></xforms:label>
    <xforms:value id="default70"><![CDATA[2]]></xforms:value></xforms:item>
    <xforms:item id="selectItem5">
    <xforms:label id="default80"><![CDATA[当面口述]]></xforms:label>
    <xforms:value id="default81"><![CDATA[3]]></xforms:value></xforms:item>
    <xforms:item id="selectItem6">
    <xforms:label id="default82"><![CDATA[传真]]></xforms:label>
    <xforms:value id="default83"><![CDATA[4]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input1" ref="data('dataMaster')/MAILING_ADDRESS" style="width:483px;" disabled="true"></xforms:input>
  <xforms:input id="input5" ref="data('dataMaster')/POSTCODE" disabled="true"></xforms:input>
  <xforms:textarea ref="data('dataMain')/TREATMENT_VERIFICATION" id="textarea6" style="height:50px;" readonly="true"></xforms:textarea>
  <xforms:select1 ref="data('dataMain')/COMPLAINT_ADVICE" id="radio3">
   <xforms:item id="selectItem7">
    <xforms:label id="default71"><![CDATA[即时解决]]></xforms:label>
    <xforms:value id="default72"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem8">
    <xforms:label id="default77"><![CDATA[上报管理者代表]]></xforms:label>
    <xforms:value id="default78"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input6" ref="data('dataMain')/oPERATORNAME1" style="width:117px;"></xforms:input>
  <xforms:input id="input7" style="width:117px;" ref="data('dataMain')/oPERATORNAME2" readonly="true"></xforms:input>
  <xforms:input id="input8" ref="data('dataMain')/VERIFY_DATE" readonly="true" style="width:108px;"></xforms:input>
  <xui:view auto-load="true" id="view1" class="xui-container" style="width:492px;height:76px;">
   <layout type="absolute" style="position:relative;" id="layout4"><xui:place control="input9" id="controlPlace3" style="position:absolute;top:33px;width:94px;left:256px;"></xui:place>
  <xui:place control="input10" id="controlPlace5" style="position:absolute;top:33px;width:129px;left:361px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;font-size:small;left:204px;top:35px;" class="xui-label"><![CDATA[ 分析人：]]></xhtml:label>
  <xui:place control="radio4" id="controlPlace6" style="position:absolute;font-size:small;width:200px;top:1px;left:67px;height:24px;"></xui:place>
  <xhtml:label id="label2" style="position:absolute;font-size:small;left:5px;top:7px;" class="xui-label"><![CDATA[处理建议：]]></xhtml:label></layout>
  <xforms:input id="input9" ref="data('dataMain')/oPERATORNAME" disabled="true"></xforms:input>
  <xforms:input id="input10" ref="data('dataMain')/DEAL_DATE" readonly="true" disabled="true"></xforms:input>
  <xforms:select1 ref="data('dataMain')/COMPLAINT_ADVICE" id="radio4">
   <xforms:item id="selectItem9">
    <xforms:label id="default31"><![CDATA[即时处理]]></xforms:label>
    <xforms:value id="default32"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem10" style="height:19px;width:79px;">
    <xforms:label id="default33"><![CDATA[上报管理者代表]]></xforms:label>
    <xforms:value id="default34"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1></xui:view>
  <xforms:textarea ref="data('dataMain')/COMPLAINT_ANALYSIS" id="textarea7" style="height:50px;"></xforms:textarea>
  <xui:view auto-load="true" id="view2" class="xui-container" style="width:498px;height:45px;">
   <layout type="absolute" style="position:relative;" id="layout5"><xhtml:label id="label11" style="position:absolute;font-size:small;left:207px;top:7px;" class="xui-label"><![CDATA[批准人：]]></xhtml:label>
  <xui:place control="input13" id="controlPlace11" style="position:absolute;width:92px;top:6px;height:18px;left:258px;"></xui:place>
  <xui:place control="input18" id="controlPlace12" style="position:absolute;width:129px;top:6px;left:361px;"></xui:place></layout>
  <xforms:input id="input13" ref="data('dataMain')/oPERATORNAME1" disabled="true"></xforms:input>
  <xforms:input id="input18" ref="data('dataMain')/APPROVAL_DATE" disabled="true" format="yyyy-MM-dd"></xforms:input></xui:view>
  <xui:view auto-load="true" id="view3" class="xui-container" style="width:492px;height:64px;">
   <layout type="absolute" style="position:relative;" id="layout6"><xui:place control="radio5" id="controlPlace8" style="position:absolute;font-size:small;top:1px;left:67px;height:24px;width:85px;"></xui:place>
  <xhtml:label id="label3" style="position:absolute;font-size:small;left:5px;top:7px;" class="xui-label"><![CDATA[是否发布：]]></xhtml:label>
  <xhtml:label id="label10" style="position:absolute;font-size:small;left:203px;top:31px;" class="xui-label"><![CDATA[验证人：]]></xhtml:label>
  <xui:place control="input11" id="controlPlace9" style="position:absolute;width:96px;left:255px;top:29px;"></xui:place>
  <xui:place control="input12" id="controlPlace10" style="position:absolute;width:129px;left:361px;top:29px;"></xui:place></layout>
  <xforms:select1 ref="data('dataMain')/RELEASE" id="radio5" disabled="true">
   <xforms:item id="selectItem11">
    <xforms:label id="default35"><![CDATA[是]]></xforms:label>
    <xforms:value id="default36"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem12">
    <xforms:label id="default37"><![CDATA[否]]></xforms:label>
    <xforms:value id="default38"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input11" ref="data('dataMain')/oPERATORNAME2" disabled="true"></xforms:input>
  <xforms:input id="input12" ref="data('dataMaster')/VERIFY_DATE" disabled="true"></xforms:input></xui:view>
  <xforms:textarea ref="data('dataMain')/TREATMENT_VERIFICATION" id="textarea1" style="height:54px;" disabled="true"></xforms:textarea></xui:view> 
  </xui:view>  
  <resource id="rsMain1" xui:update-mode="insert" xui:parent=""> 
    <xhtml:script id="htmlScript1" src="businessActivity2.js"></xhtml:script> 
  </resource> 
</window>
