<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="wdwSendDoc">  
  <resource> 
    <xhtml:script src="/UI/system/components/printHtml/formPrint.js"/> 
  </resource>  
  <xforms:model id="model1" style="height:auto;left:509px;top:442px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_Task" id="dataMain" limit="20" offset="1" store-type="simple"> 
      <reader action="/system/logic/action/queryTaskAction"/>  
      <calculate-relation relation="recNO" type="xsd{semicolon}integer"/> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2"><![CDATA[complaintProcessQueryDetail.model1ModelConstructDone(event)]]></xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="complaintData" concept="CHANGE_APPLY_INFO"
      store-type="simple"> 
      <reader id="default1" action="/metrodetection/system_resource/logic/action/MyQuerryNameAction"/> 
    <creator id="default58"></creator>
  <writer id="default59"></writer></data>  
     
  <data xmlns="" id="reportData" component="/UI/system/components/reportData.xbl.xml#data">
   <source id="default5"><action id="default6" name="newchangeAction" type="action" columns="SPARENT,SACTIVITYNAME,SCONTENT,SEXECUTORDEPTNAME,SEXECUTORPERSONNAME,SSTATUSNAME,SACTUALFINISHTIME"></action></source></data>
  <xforms:action id="action4" ev:event="xbl-loaded"><xforms:script id="xformsScript4"><![CDATA[complaintProcessQueryDetail.model1XBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="hrPerData" concept="HR_BASE_INFO" store-type="simple">
   <creator id="default60" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default63" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default64" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple">
   <reader id="default65" action="/system/logic/action/queryOrgAction"></reader></data></xforms:model>  
  <view auto-load="true" id="rootView"> 
    <xui:view auto-load="false" id="vProcessChart"> 
      <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart"
        id="processChart"/>  
      <xui:layout style="height:100%;width:100%;"> 
        <place control="processChart" style="height:100%;width:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <layout style="height:100%;width:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabs" style="width:100%;height:230%;"> 
        <tab id="tabDetail"> 
          <label>详细</label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:1417px;"> 
            <center id="borderLayout-center2"> 
              <xui:place control="view1" id="controlPlace1" style="position:relative;width:100%;height:618px;"/> 
            </center>  
            <left size="71px" id="borderLayout-left1"/> 
          </xhtml:div> 
        </tab>  
        <xui:tab id="tabProcessChart"> 
          <xui:label>流程图</xui:label>  
          <place control="vProcessChart" style="width:100%;"/>  
          <xforms:action ev:event="xforms-select" id="action1"> 
            <xforms:script id="xformsScript1">complaintProcessQueryDetail.tabProcessChartSelect()</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="flow" style="position:relative;" id="layout1"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" src="complaint2_xls.xls" style="width:100%;height:100%;"/> 
      </layout>  
      <xforms:input id="iptCOMPLAINT_DOC_CODE" ref="data('complaintData')/CHANGE_APPLY_DOC_NO" disabled="true"></xforms:input>  
      <xforms:input id="iptCONTACTOR" ref="data('complaintData')/CONTACTOR" style="width:193px;" disabled="true"></xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('complaintData')/TYPE"
        style="width:192px;" disabled="true">  
        <xforms:label ref="col_1" id="default19"></xforms:label>  
        <xforms:value ref="col_0" id="default20"></xforms:value>  
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
          <xforms:column ref="col_0" visible="false" id="default75"></xforms:column>  
          <xforms:column ref="col_1" id="default76"></xforms:column> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('complaintData')/SEVERITY"
        style="width:193px;" disabled="true">  
        <xforms:label ref="col_1" id="default24"></xforms:label>  
        <xforms:value ref="col_0" id="default26"></xforms:value>  
        <xforms:itemset id="default27" auto-load-data="true">  
            
          <xforms:column ref="col_0" visible="false" id="default61"></xforms:column>  
          <xforms:column ref="col_1" id="default62"></xforms:column> 
        <itemset-data xmlns="" id="default3">
   <rows xmlns="" id="default7">
    <row id="default8">
     <cell id="default9">1</cell>
     <cell id="default10">严重投诉</cell></row> 
    <row id="default11">
     <cell id="default12">2</cell>
     <cell id="default13">较严重投诉</cell></row> 
    <row id="default14">
     <cell id="default15">3</cell>
     <cell id="default17">一般投诉</cell></row> 
    <row id="default18">
     <cell id="default21">4</cell>
     <cell id="default23">较小投诉</cell></row> 
    <row id="default25">
     <cell id="default43">5</cell>
     <cell id="default44">其他</cell></row> </rows> </itemset-data></xforms:itemset> 
      </xhtml:div>  
      <xforms:input id="input14" ref="data('complaintData')/CONTACTOR_TELEPHONE" style="width:183px;" disabled="true"></xforms:input>  
      <xforms:input id="input15" ref="data('complaintData')/CONTACT_EMAIL" style="width:193px;" disabled="true"></xforms:input>  
      <xforms:input id="input16" ref="data('complaintData')/REGION" style="width:191px;" disabled="true"></xforms:input>  
      <xforms:input id="input17" ref="data('complaintData')/oPERATORNAME" style="width:193px;" disabled="true"></xforms:input>  
      <xforms:input id="input19" ref="data('complaintData')/RECEIPT_DATE" style="width:193px;" disabled="true"></xforms:input>  
      <xforms:input id="input20" ref="data('complaintData')/PROJECT_NAMENAME" style="width:612px;" disabled="true"></xforms:input>  
      <xforms:input id="input21" ref="data('complaintData')/TITLE" style="height:20px;width:611px;" disabled="true"></xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('complaintData')/STATUS" style="width:183px;" disabled="true">  
        <xforms:label ref="col_1" id="default28"></xforms:label>  
        <xforms:value ref="col_0" id="default29"></xforms:value>  
        <xforms:itemset id="default30" auto-load-data="true">  
            
          <xforms:column ref="col_0" visible="false" id="default73"></xforms:column>  
          <xforms:column ref="col_1" id="default74"></xforms:column> 
        <itemset-data xmlns="" id="default81">
   <rows xmlns="" id="default82">
    <row id="default83">
     <cell id="default84">1</cell>
     <cell id="default85">未受理</cell></row> 
    <row id="default86">
     <cell id="default87">2</cell>
     <cell id="default88">已受理</cell></row> 
    <row id="default89">
     <cell id="default90">3</cell>
     <cell id="default91">已反馈</cell></row> </rows> </itemset-data></xforms:itemset> 
      </xhtml:div>  
      <xforms:input id="input24" ref="data('complaintData')/APPLY_DATEDATE" style="width:193px;" disabled="true"></xforms:input>  
      <xforms:input id="input27" ref="data('complaintData')/CHANGE_APPLY_NOAPPLYNO" style="width:135px;" readonly="true" disabled="true"></xforms:input>  
      <xforms:select1 ref="data('complaintData')/RELEASE" id="radio1" disabled="true">  
        <xforms:item id="selectItem1">  
          <xforms:label id="default4">  <![CDATA[是]]> </xforms:label>  
          <xforms:value id="default5">  <![CDATA[1]]> </xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem2">  
          <xforms:label id="default6">  <![CDATA[否]]> </xforms:label>  
          <xforms:value id="default16">  <![CDATA[2]]> </xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xforms:input id="input2" ref="data('complaintData')/oPERATORNAME1" style="width:185px;" disabled="true"></xforms:input>  
      <xforms:input id="input3" ref="data('complaintData')/RESPONSOR_TITLE" style="width:191px;" disabled="true"></xforms:input>  
      <xforms:input id="input4" ref="data('complaintData')/DEAL_DATE" style="width:184px;" disabled="true"></xforms:input>  
      <xforms:textarea ref="data('complaintData')/ADVICE" id="textarea1" style="width:609px;height:75px;" disabled="true"></xforms:textarea>  
      <xforms:textarea ref="data('complaintData')/MEASURE" id="textarea2" style="width:609px;height:68px;" disabled="true"></xforms:textarea>  
      <xforms:textarea ref="data('complaintData')/ACCEPT_OPINIONOPINION" id="textarea3" style="width:616px;height:51px;" disabled="true"></xforms:textarea>  
      <xforms:textarea ref="data('complaintData')/RESOLVE_RISKRISK" id="textarea4" style="width:616px;height:47px;" disabled="true"></xforms:textarea>  
      <xforms:textarea ref="data('complaintData')/IMPLEMENTATION_PROCESSPROCESS" id="textarea5" style="width:616px;height:39px;" disabled="true"></xforms:textarea> 
      <xui:view auto-load="false" id="view2" class="xui-container" style="border-color:#000000 #000000 #000000 #000000;border-style:double double double double;border-width:1px 1px 1px 1px;width:100%;height:194px;"> 
        <layout type="absolute" style="position:relative;" id="layout2"> 
          <xui:place control="toolbars1" id="controlPlace3" style="position:absolute;left:10px;width:400px;top:5px;height:25px;"/>  
          <xui:place control="view3" id="controlPlace4" style="position:absolute;top:34px;left:4px;border-color:#FFFFFF #FFFFFF #FFFFFF #FFFFFF;width:100%;height:173px;"/> 
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
          <xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar"
            id="printBar1" report="report1"> 
            <item name="report-page-setup-item" id="barItem1"/>  
            <item name="report-preview-item" id="barItem2"/>  
            <item name="report-print-item" id="barItem3"/> 
          </xui:bar>  
          <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar"
            id="exportBar1" report="report1"> 
            <item name="report-export-pdf-item" id="barItem4"/>  
            <item name="report-export-word-item" id="barItem5"/>  
            <item name="report-export-excel-item" id="barItem6"/> 
          </xui:bar> 
        </xhtml:div>  
        <xui:view auto-load="true" id="view3" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout3"> 
            <xui:place control="report1" id="controlPlace5" style="position:absolute;top:5px;height:149px;width:760px;left:23px;"/> 
          </layout>  
          <xhtml:div component="/UI/system/components/report.xbl.xml#report" src=""
            report-name="流程记录" auto-load="false" data-list="reportData" id="report1"
            column-width="1"> 
            <layout-content id="default1"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="1" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="WIDTH: 19px"></td><td  style="WIDTH: 140px"></td><td  style="WIDTH: 302px"></td><td  style="WIDTH: 105px"></td><td  style="WIDTH: 68px"></td><td  style="WIDTH: 105px"></td></tr>
     <tr><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td></tr>
     <tr><td  style="HEIGHT: 26px"></td><td  style="HEIGHT: 26px"></td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">环节</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">附言</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">用户组</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">人员</td><td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle">时间</td></tr>
     <tr><td  style="HEIGHT: 26px"></td><td  style="HEIGHT: 26px"></td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.select(reportData.SACTIVITYNAME)</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SCONTENT</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SEXECUTORDEPTNAME</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SEXECUTORPERSONNAME</td><td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle" format="yyyy/m/d h:mm;@">reportData.SACTUALFINISHTIME</td></tr>
  </table>
]]></layout-content> 
          </xhtml:div> 
        </xui:view> 
      </xui:view>   
      <xforms:trigger id="trigger1" style="width:30px;height:18px;" appearance="image-text" image-text-mode="LR" src="/UI/metrodetection/customer_service/process/complaintProcessQuery/images/move_down.gif"> 
        <xforms:label id="default2"><![CDATA[]]></xforms:label> 
      <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[complaintProcessQueryDetail.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger> 
    <xforms:select1 ref="data('complaintData')/COMPLAINT_SOURCE" id="radio2" disabled="true">
   <xforms:item id="selectItem3">
    <xforms:label id="default50">电话</xforms:label>
    <xforms:value id="default51">1</xforms:value></xforms:item> 
   <xforms:item id="selectItem4">
    <xforms:label id="default52">信函</xforms:label>
    <xforms:value id="default53">2</xforms:value></xforms:item>
    <xforms:item id="selectItem21">
    <xforms:label id="default90">当面口述</xforms:label>
    <xforms:value id="default91">3</xforms:value></xforms:item> 
   <xforms:item id="selectItem22">
    <xforms:label id="default92">传真</xforms:label>
    <xforms:value id="default93">4</xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input1" ref="data('complaintData')/MAILING_ADDRESS" style="width:604px;"></xforms:input>
  <xforms:input id="input5" ref="data('complaintData')/POSTCODE" style="width:193px;"></xforms:input>
  <xforms:textarea ref="data('complaintData')/REASON_ASSESSMENTASSESSMENT" id="textarea6" style="width:616px;height:44px;" disabled="true"></xforms:textarea>
  <xui:view auto-load="true" id="view4" class="xui-container" style="width:613px;height:63px;">
   <layout type="absolute" style="position:relative;" id="layout4">
   <xhtml:label id="label1" style="position:absolute;font-size:small;left:312px;top:34px;" class="xui-label"><![CDATA[ 分析人：]]></xhtml:label>
  <xui:place control="radio4" id="controlPlace6" style="position:absolute;font-size:small;width:200px;top:1px;left:67px;height:24px;"></xui:place>
  <xhtml:label id="label2" style="position:absolute;font-size:small;left:5px;top:7px;" class="xui-label"><![CDATA[处理建议：]]></xhtml:label>
   <xui:place control="input6" id="controlPlace2" style="position:absolute;top:31px;width:120px;left:364px;"></xui:place>
  <xui:place control="input7" id="controlPlace7" style="position:absolute;top:31px;left:502px;width:110px;"></xui:place></layout>
  <xforms:select1 ref="data('complaintData')/COMPLAINT_ADVICE" id="radio4" disabled="true">
   <xforms:item id="selectItem9">
    <xforms:label id="default91"><![CDATA[即时处理]]></xforms:label>
    <xforms:value id="default92"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem10" style="height:19px;width:79px;">
    <xforms:label id="default93"><![CDATA[上报管理者代表]]></xforms:label>
    <xforms:value id="default94"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input6" ref="data('complaintData')/oPERATORNAME1" disabled="true"></xforms:input>
  <xforms:input id="input7" ref="data('complaintData')/DEAL_DATE" disabled="true"></xforms:input></xui:view>
  <xforms:textarea ref="data('complaintData')/RISK_ASSESSMENTASSESSMENT" id="textarea7" style="width:616px;height:48px;" disabled="true"></xforms:textarea>
  <xui:view auto-load="true" id="view5" class="xui-container" style="width:615px;height:36px;">
   <layout type="absolute" style="position:relative;" id="layout5"><xhtml:label id="label3" style="position:absolute;left:316px;top:9px;" class="xui-label"><![CDATA[批准人：]]></xhtml:label>
  <xui:place control="input8" id="controlPlace8" style="position:absolute;top:6px;width:120px;left:364px;"></xui:place>
<!--  <xui:place control="input9" id="controlPlace9" style="position:absolute;top:16px;left:475px;"></xui:place>-->
<!--  <xui:place control="input10" id="controlPlace10" style="position:absolute;top:15px;left:472px;"></xui:place>-->
  <xui:place control="input11" id="controlPlace11" style="position:absolute;top:6px;width:110px;left:501px;"></xui:place></layout>
  <xforms:input id="input8" ref="data('complaintData')/oPERATORNAME2" disabled="true"></xforms:input>
  <xforms:input id="input11" ref="data('complaintData')/APPROVAL_DATE" format="yyyy-MM-dd" disabled="true"></xforms:input></xui:view>
  <xforms:textarea ref="data('complaintData')/RESOURCE_ASSESSMENTASSESSMENT" id="textarea8" style="width:616px;height:50px;" disabled="true"></xforms:textarea>
  <xui:view auto-load="true" id="view6" class="xui-container" style="height:64px;width:615px;">
   <layout type="absolute" style="position:relative;" id="layout6">
<!--   <xui:place control="radio10" id="controlPlace8" style="position:absolute;font-size:small;top:1px;left:67px;height:24px;width:85px;"></xui:place>-->
  <xhtml:label id="label31" style="position:absolute;font-size:small;left:5px;top:7px;" class="xui-label"><![CDATA[是否发布：]]></xhtml:label>
  <xhtml:label id="label30" style="position:absolute;font-size:small;left:314px;top:34px;" class="xui-label"><![CDATA[验证人：]]></xhtml:label>
   <xui:place control="radio3" id="controlPlace12" style="position:absolute;left:74px;top:1px;"></xui:place>
  <xui:place control="input12" id="controlPlace13" style="position:absolute;top:31px;width:110px;left:501px;"></xui:place>
  <xui:place control="input13" id="controlPlace14" style="position:absolute;top:31px;width:120px;left:365px;"></xui:place></layout>
   <xforms:select1 ref="data('complaintData')/RELEASE" id="radio3" disabled="true">
   <xforms:item id="selectItem5">
    <xforms:label id="default54"><![CDATA[是]]></xforms:label>
    <xforms:value id="default55"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem6">
    <xforms:label id="default56"><![CDATA[否]]></xforms:label>
    <xforms:value id="default57"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input12" ref="data('complaintData')/VERIFY_DATE" format="yyyy-MM-dd" disabled="true"></xforms:input>
  <xforms:input id="input13" ref="data('complaintData')/oPERATORNAME3" disabled="true"></xforms:input></xui:view>
  <xforms:input id="input9" ref="data('complaintData')/PROJECT_IDID" disabled="true"></xforms:input>
  <xforms:input id="input10" ref="data('complaintData')/oPERATORNAME" disabled="true"></xforms:input>
  <xforms:input id="input18" ref="data('complaintData')/CHANGE_TIMETIME" disabled="true"></xforms:input>
  <xforms:input id="input22" ref="data('complaintData')/CHANGE_TITLETITLE" disabled="true"></xforms:input>
  <xforms:input id="input23"></xforms:input>
  <xforms:textarea ref="data('complaintData')/CHANGE_OBJECTOBJECT" id="textarea9" style="height:45px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/CHANGE_CONTENTCONTENT" id="textarea10" style="height:45px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/CHANGE_REASONREASON" id="textarea11" style="height:32px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/IMPACT_RANGERANGE" id="textarea12" style="height:42px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/POTENTIAL_RISKRISK" id="textarea13" style="height:42px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/RESOURCES_NEEDEDNEEDED" id="textarea14" style="height:38px;" disabled="true"></xforms:textarea>
  <xforms:input id="input25" ref="data('complaintData')/APPLY_APPROVE_DATE" disabled="true"></xforms:input>
  <xforms:input id="input26" ref="data('complaintData')/oPERATORNAME1" disabled="true"></xforms:input>
  <xforms:input id="input28" ref="data('complaintData')/APPROVAL_STATUSSTATUS"></xforms:input>
  <xforms:input id="input29" ref="data('complaintData')/CHANGE_AUDIT_DATE" disabled="true"></xforms:input>
  <xforms:input id="input30" ref="data('complaintData')/oPERATORNAME2" disabled="true"></xforms:input>
  <xforms:textarea ref="data('complaintData')/RANGE_ASSESSMENTASSESSMENT" id="textarea15" style="height:42px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/PROCESS_ASSESSMENTASSESSMENT" id="textarea16" style="height:37px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/TIME_ASSESSMENTASSESSMENT" id="textarea17" style="height:49px;" disabled="true"></xforms:textarea>
  <xforms:textarea ref="data('complaintData')/MEMO" id="textarea18" style="height:56px;" disabled="true"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('complaintData')/APPROVAL_STATUSSTATUS" disabled="true">
   <xforms:label ref="col_1" id="default66"></xforms:label>
   <xforms:value ref="col_0" id="default67"></xforms:value>
   <xforms:itemset id="default68" auto-load-data="true"><itemset-data xmlns="" id="default120">
   <rows xmlns="" id="default121">
    <row id="default122">
     <cell id="default123">1</cell>
     <cell id="default124">已审核</cell></row> 
    <row id="default125">
     <cell id="default126">2</cell>
     <cell id="default127">审核中</cell></row> 
    <row id="default128">
     <cell id="default129">3</cell>
     <cell id="default130">未审核</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default133"></xforms:column>
  <xforms:column ref="col_1" id="default134"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('complaintData')/APPROVAL_STATUSSTATUS" disabled="true">
   <xforms:label ref="col_1" id="default69"></xforms:label>
   <xforms:value ref="col_0" id="default70"></xforms:value>
   <xforms:itemset id="default71" auto-load-data="true"><itemset-data xmlns="" id="default101">
   <rows xmlns="" id="default102">
    <row id="default103">
     <cell id="default104">1</cell>
     <cell id="default105">已审核</cell></row> 
    <row id="default106">
     <cell id="default107">2</cell>
     <cell id="default108">审核中</cell></row> 
    <row id="default109">
     <cell id="default110">3</cell>
     <cell id="default111">未审核</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default114"></xforms:column>
  <xforms:column ref="col_1" id="default115"></xforms:column></xforms:itemset></xhtml:div></xui:view> 
  </view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="complaintProcessQueryDetail.js"/> 
  </resource> 
</window>
