<window 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:justep="http://www.justep.com/x5#" 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:data="http://www.justep.com/x5/xui/data#" 
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:f="http://orbeon.org/oxf/xml/formatting" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" >

  <div id="mdDefault" xui:update-mode="delete"/>
  <div id="rootView" xui:update-mode="delete"/>
  <div id="rsMain" xui:update-mode="delete"/>
    <xforms:model xmlns:xforms="http://www.justep.com/xforms" id="mdDefault" style="height:auto;top:312px;left:3px;" xui:update-mode="insert" xui:parent="" >
<data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="CUSTOMER_COMPLAINT_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" store-type="simple" update-mode="whereAll" confirm-refresh="false" data-type="xml">
<reader action="/metrodetection/customer_service/logic/action/myQueryComplantFeedbackAction" id="default1" />
<writer action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_INFOAction" id="default2" />
<creator action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_INFOAction" id="default3" />
</data>
<data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereAll" >
<reader action="/system/logic/action/queryOrgAction" id="default4_7" />
</data>
<data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll" >
<creator id="default5_7" />
<reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction" id="default6_7" />
<writer id="default7_7" />
</data>
<data auto-load="true" columns="val,name" component="/UI/system/components/data.xbl.xml#data" id="tempData" src="" store-type="simple" confirm-refresh="false" >
<rows xmlns="" id="default15_3" >
<row id="default16_3" >
<cell id="default17_3" />
<cell id="default18_3" />
</row>
</rows>
</data>
<xforms:action xmlns:xforms="http://www.justep.com/xforms" id="action1" ev:event="xbl-loaded" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1" >
<![CDATA[businessActivity3.mdDefaultXBLLoaded(event)]]>
</xforms:script>
</xforms:action>
<data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="bizData2" concept="CUSTOMER_COMPLAINT_FEEDBACK" auto-new="true" store-type="simple" confirm-refresh="false" onValueChanged="businessActivity3.bizData2ValueChanged"><creator id="default14" action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_FEEDBACKAction"></creator>
  <reader id="default15" action="/metrodetection/customer_service/logic/action/myQueryComplaintFeedAndHR"></reader>
  <writer id="default17" action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_FEEDBACKAction"></writer>
  <rule id="dataBizRule1" relation="SOLVING_DESCRIPTION" required="true()" alert="'解决问题过程综述不能为空!'"></rule></data>
  <xforms:action id="action2" ev:event="onload"><xforms:script id="xformsScript2"><![CDATA[businessActivity3.mdDefaultLoad(event)]]></xforms:script></xforms:action></xforms:model>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" id="rootView" xui:update-mode="insert" xui:parent="" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsFlow" >
<xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtb" mode="IMG_TXT_LR">  
        <item> 
          <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif">  
            <xforms:label>  <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate">  
              <xforms:script><![CDATA[businessActivity3.saveMore(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
<!--        <item id="barItem5" name="save-item"></item>-->
      </xui:bar> 
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/processBar.xbl.xml#processBar" id="flwBar" mode="IMG_TXT_LR" process="flw" >
<item name="back-process-item" id="barItem1"></item><item id="barItem13" name="advance-process-item" />
<item id="barItem15" name="suspend-process-item" />
<item id="barItem16" name="abort-process-item" />
<item id="barItem3" name="process-chart-item" />
  <item name="execute-list-item" id="barItem4"></item>
</xui:bar>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/process.xbl.xml#process" data="dataMain" id="flw" auto-save="true" onAdvanceCommit="businessActivity3.flwAdvanceCommit" auto-filter="false"/>
<layout id="layout1" style="height:100%" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:912px;" >
<top id="borderLayout-top2" size="37px" >
<place control="tbsFlow" id="controlPlace4" />
</top>
<center id="borderLayout-center2" >
<place control="vDetail" id="controlPlace1" style="width:100%;" />
</center>
</xhtml:div>
<place control="flw" id="controlPlace7" style="width:24px;top:183px;left:51px;" />
</layout>
<layout id="layout2" />
<xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" id="vDetail" class="xui-container" >
<layout id="layout3" style=";position:relative;" type="absolute" >
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/excelLayout.xbl.xml#excelLayout" id="excelLayout1" style="position:absolute;width:105%;top:5px;left:6px;height:869px;" src="complaintSetting_xls3.xls" />
</layout>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="iptCOMPLAINT_DOC_CODE" ref="data('dataMain')/COMPLAINT_DOC_CODE" readonly="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="iptCONTACTOR" ref="data('dataMain')/CONTACTOR" disabled="true"/>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/TYPE" style="width:161px;" disabled="true">
<xforms:label xmlns:xforms="http://www.justep.com/xforms" ref="col_1" id="default19" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" ref="col_0" id="default20" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default22" auto-load-data="true" >
<itemset-data xmlns="" id="default31" >
<rows id="default32" >
<row id="default33" >
<cell id="default34" >
1</cell>
<cell id="default35" >
对设备的投诉</cell>
</row>
<row id="default36" >
<cell id="default37" >
2</cell>
<cell id="default38" >
对服务态度</cell>
</row>
<row id="default39" >
<cell id="default40" >
3</cell>
<cell id="default41" >
对服务人员技能</cell>
</row>
<row id="default42" >
<cell id="default45" >
4</cell>
<cell id="default46" >
对异常事件</cell>
</row>
<row id="default47" >
<cell id="default48" >
5</cell>
<cell id="default49" >
其他</cell>
</row>
</rows>
</itemset-data>
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="col_0" visible="false" id="default75" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="col_1" id="default76" />
</xforms:itemset>
</xhtml:div>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/SEVERITY" style="width:160px;" disabled="true">
<xforms:label xmlns:xforms="http://www.justep.com/xforms" ref="col_1" id="default24" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" ref="col_0" id="default26" />
<xforms:itemset xmlns:xforms="http://www.justep.com/xforms" id="default27" auto-load-data="true" >

<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="col_0" visible="false" id="default61" />
<xforms:column xmlns:xforms="http://www.justep.com/xforms" ref="col_1" id="default62" />
<itemset-data xmlns="" id="default64">
   <rows xmlns="" id="default65">
    <row id="default66">
     <cell id="default67">1</cell>
     <cell id="default68">严重投诉</cell></row> 
    <row id="default69">
     <cell id="default70">2</cell>
     <cell id="default71">较严重投诉</cell></row> 
    <row id="default72">
     <cell id="default77">3</cell>
     <cell id="default78">一般投诉</cell></row> 
    <row id="default79">
     <cell id="default80">4</cell>
     <cell id="default81">较小投诉</cell></row> 
    <row id="default82">
     <cell id="default83">5</cell>
     <cell id="default84">其他</cell></row> </rows> </itemset-data></xforms:itemset>
</xhtml:div>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input14" ref="data('dataMain')/CONTACTOR_TELEPHONE" style="width:162px;" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input15" ref="data('dataMain')/CONTACT_EMAIL" style="width:169px;" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input16" ref="data('dataMain')/REGION" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input17" ref="data('dataMain')/oPERATORNAME" style="width:155px;" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input19" ref="data('dataMain')/RECEIPT_DATE" style="width:162px;" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input20" ref="data('dataMain')/COMPLAINT_UNIT" style="width:485px;" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input21" ref="data('dataMain')/TITLE" style="height:20px;width:484px;" disabled="true"/>

<xforms:label xmlns:xforms="http://www.justep.com/xforms" ref="col_1" id="default28" />
<xforms:value xmlns:xforms="http://www.justep.com/xforms" ref="col_0" id="default29" />


<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input24" ref="data('dataMain')/COMPLAINT_DATE" style="width:153px;" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input27" ref="data('dataMain')/COMPLAINT_DOC_NO" style="width:120px;" readonly="true"/>
<xforms:select1 xmlns:xforms="http://www.justep.com/xforms" ref="data('dataMain')/RELEASE" id="radio1" disabled="true">
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem1" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default4" >
<![CDATA[是]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default5" >
<![CDATA[1]]>
</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem2" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default6" >
<![CDATA[否]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default16" >
<![CDATA[2]]>
</xforms:value>
</xforms:item>
</xforms:select1>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input2" ref="data('dataMain')/oPERATORNAME1" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input3" ref="data('dataMain')/RESPONSOR_TITLE" disabled="true"/>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input4" ref="data('dataMain')/DEAL_DATE" disabled="true"/>

<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" ref="data('dataMain')/COMPLAINT_CONTENT" id="textarea4" style="height:50px;" disabled="true"/>
<xforms:textarea xmlns:xforms="http://www.justep.com/xforms" ref="data('dataMain')/MEMO" id="textarea5" style="height:50px;" disabled="true"/>
<xforms:select1 ref="data('dataMain')/COMPLAINT_SOURCE" id="radio2" disabled="true">
   <xforms:item id="selectItem3">
    <xforms:label id="default10"><![CDATA[电话]]></xforms:label>
    <xforms:value id="default11"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem4">
    <xforms:label id="default12"><![CDATA[信函]]></xforms:label>
    <xforms:value id="default13"><![CDATA[2]]></xforms:value></xforms:item>
    <xforms:item id="selectItem5">
    <xforms:label id="default14"><![CDATA[当面口述]]></xforms:label>
    <xforms:value id="default15"><![CDATA[3]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem6">
    <xforms:label id="default16"><![CDATA[传真]]></xforms:label>
    <xforms:value id="default17"><![CDATA[4]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input1"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/POSTCODE"></xforms:input>
  <xforms:input id="input6" ref="data('dataMain')/MAILING_ADDRESS"></xforms:input>
  <xforms:input id="input7"></xforms:input>
  <xforms:input id="input8"></xforms:input>
  <xforms:input id="input30" ref="data('bizData1')/oPERATORNAME" style="width:486px;"></xforms:input>
  <xforms:input id="input31" ref="data('bizData1')/DEAL_DATE"></xforms:input>
  <xforms:textarea ref="data('dataMain')/COMPLAINT_ANALYSIS" id="textarea1" style="height:60px;" disabled="true"></xforms:textarea>
  <xui:view auto-load="true" id="view1" class="xui-container" style="width:492px;height:75px;">
   <layout type="absolute" style="position:relative;" id="layout4"><xui:place control="input9" id="controlPlace3" style="position:absolute;top:33px;width:94px;left:256px;"></xui:place>
  <xui:place control="input10" id="controlPlace5" style="position:absolute;top:33px;width:129px;left:362px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;font-size:small;left:204px;top:35px;" class="xui-label"><![CDATA[ 分析人：]]></xhtml:label>
  <xui:place control="radio4" id="controlPlace6" style="position:absolute;font-size:small;width:200px;top:1px;left:67px;height:24px;"></xui:place>
  <xhtml:label id="label2" style="position:absolute;font-size:small;left:5px;top:7px;" class="xui-label"><![CDATA[处理建议：]]></xhtml:label></layout>
  <xforms:input id="input9" ref="data('dataMain')/oPERATORNAME1" disabled="true"></xforms:input>
  <xforms:input id="input10" ref="data('dataMain')/DEAL_DATE" disabled="true"></xforms:input>
  <xforms:select1 ref="data('dataMain')/COMPLAINT_ADVICE" id="radio4" disabled="true">
   <xforms:item id="selectItem9">
    <xforms:label id="default31"><![CDATA[即时处理]]></xforms:label>
    <xforms:value id="default32"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem10" style="height:19px;width:79px;">
    <xforms:label id="default33"><![CDATA[上报管理者代表]]></xforms:label>
    <xforms:value id="default34"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1></xui:view>
  <xforms:textarea ref="data('bizData2')/SOLVING_DESCRIPTION" id="textarea2" style="height:60px;"></xforms:textarea>
  <xui:view auto-load="true" id="view2" class="xui-container" style="width:498px;height:45px;">
   <layout type="absolute" style="position:relative;" id="layout5"><xhtml:label id="label11" style="position:absolute;font-size:small;left:207px;top:7px;" class="xui-label"><![CDATA[批准人：]]></xhtml:label>
  <xui:place control="input13" id="controlPlace11" style="position:absolute;width:92px;left:259px;top:6px;height:18px;"></xui:place>
  <xui:place control="input18" id="controlPlace12" style="position:absolute;width:129px;top:5px;left:362px;"></xui:place></layout>
  <xforms:input id="input13" ref="data('bizData2')/oPERATORNAME1" disabled="true"></xforms:input>
  <xforms:input id="input18" ref="data('bizData2')/APPROVAL_DATE" disabled="true"></xforms:input></xui:view>
  <xforms:textarea ref="data('bizData2')/TREATMENT_VERIFICATION" id="textarea6" style="height:60px;" disabled="true"></xforms:textarea>
  <xui:view auto-load="true" id="view3" class="xui-container" style="width:492px;height:64px;">
   <layout type="absolute" style="position:relative;" id="layout6"><xui:place control="radio5" id="controlPlace8" style="position:absolute;font-size:small;top:1px;left:67px;height:24px;width:85px;"></xui:place>
  <xhtml:label id="label3" style="position:absolute;font-size:small;left:5px;top:7px;" class="xui-label"><![CDATA[是否发布：]]></xhtml:label>
  <xhtml:label id="label10" style="position:absolute;font-size:small;left:203px;top:31px;" class="xui-label"><![CDATA[验证人：]]></xhtml:label>
  <xui:place control="input11" id="controlPlace9" style="position:absolute;width:96px;left:255px;top:29px;"></xui:place>
  <xui:place control="input12" id="controlPlace10" style="position:absolute;width:129px;left:361px;top:29px;"></xui:place></layout>
  <xforms:select1 ref="data('bizData2')/RELEASE" id="radio5" disabled="true">
   <xforms:item id="selectItem11">
    <xforms:label id="default35"><![CDATA[是]]></xforms:label>
    <xforms:value id="default36"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem12">
    <xforms:label id="default37"><![CDATA[否]]></xforms:label>
    <xforms:value id="default38"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input11" ref="data('bizData2')/oPERATORNAME2" disabled="true"></xforms:input>
  <xforms:input id="input12" ref="data('bizData2')/VERIFY_DATE" disabled="true"></xforms:input></xui:view>
  <xforms:input id="input22" ref="data('dataMain')/MAILING_ADDRESS" style="width:485px;" disabled="true"></xforms:input>
  <xforms:input id="input23" ref="data('dataMain')/POSTCODE" disabled="true"></xforms:input>
  <xforms:textarea ref="data('bizData2')/MEMO" id="textarea3" style="height:60px;" disabled="true"></xforms:textarea></xui:view>
</xui:view>
    <resource id="rsMain" xui:update-mode="insert" xui:parent="" >
<xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1" src="businessActivity3.js" />
</resource>

</window>