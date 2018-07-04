<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:143px;height:auto;top:272px;left:552px;">
      
    <data auto-load="true" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData" concept="P_DOCUMENTS_BORROW_RECORD" id="dBorrowReturn" limit="20" offset="0" store-type="simple" update-mode="whereAll" confirm-refresh="false"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryp_documents_borrow_record" id="default37" />  
      <writer action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_BORROW_RECORDAction" id="default36" />  
      <creator action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_BORROW_RECORDAction" id="default41" />  
      <rule id="dataBizRule10" relation="aPPLICATIONTIME" required="true()" alert="'借阅申请时间不能为空!'" />  
      <rule id="default4" relation="pFILEID" required="true()" alert="'编号不能为空!'" />  
      <rule id="dataBizRule11" relation="dOCUMENTCATEGORY" required="true()" alert="'文档科目不能为空!'" />  
      <rule id="dataBizRule8" relation="dOCUMENTTYPE" required="true()" alert="'文档类型不能为空!'" />  
      <rule id="dataBizRule9" relation="pFILENAME" required="true()" alert="'文档名称不能为空!'" />  
      <rule id="default19" relation="bORROWER" required="true()" alert="'借阅者不能为空!'" />  
      <rule id="default22" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'" />
    <rule id="dataBizRule1" relation="iNDEEDRETURNDATE" required="true()" alert="'实际归还时间不能为空!'"></rule></data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE"> 
      <creator id="default24" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"/>  
      <reader id="default32" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"/>  
      <writer id="default29" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE"> 
      <creator id="default26" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"/>  
      <reader id="default31" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"/>  
      <writer id="default30" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO"> 
      <creator id="default27" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"/>  
      <reader id="default29" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/>  
      <writer id="default30" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"> 
      <creator id="default99" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"/>  
      <reader id="default97" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/>  
      <writer id="default100" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="false" id="bizData1" concept="P_DOCUMENTS_ARCHIVE"> 
      <creator id="default38" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"/>  
      <reader id="default39" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"/>  
      <writer id="default40" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple"> 
      <reader id="default98" action="/system/logic/action/queryOrgAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="guidang" concept="P_DOCUMENTS_ARCHIVE"
      store-type="simple"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="bizData2" concept="P_DOCUMENTS_ARCHIVE"
      store-type="simple">
      <creator id="default8" action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"/>  
      <reader id="default9" action="/metrodetection/system_code/logic/action/queryP_DOCUMENTS_ARCHIVEAction"/>  
      <writer id="default15" action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"/>
    </data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="guihuan.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:197px;left:41px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1">
          <xui:place control="view1" id="controlPlace2" style="width:692px;height:389px;"/>
        </center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="guihuan.inputbutton2Click(event)"
            style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button"
            value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" onclick="guihuan.inputbutton1Click(event)"
            style="width:75px;float:right" type="button" value="确认"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1">
        <xhtml:label id="label1" style="position:absolute;top:15px;left:68px;" class="xui-label"><![CDATA[文档科目]]></xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;top:15px;left:325px;" class="xui-label"><![CDATA[文档类型]]></xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;left:301px;top:103px;" class="xui-label"><![CDATA[借阅申请时间]]></xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;top:146px;left:301px;" class="xui-label"><![CDATA[实际归还时间]]></xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;top:58px;left:68px;" class="xui-label"><![CDATA[文档名称]]></xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;top:102px;left:80px;" class="xui-label"><![CDATA[借阅者]]></xhtml:label>  
        <xhtml:label id="label7" style="position:absolute;top:146px;left:44px;" class="xui-label"><![CDATA[预期归还时间]]></xhtml:label>  
        <xhtml:label id="label8" style="position:absolute;left:92px;top:185px;" class="xui-label"><![CDATA[备注]]></xhtml:label>  
        <xui:place control="input1" id="controlPlace3" style="position:absolute;top:11px;left:119px;"/>  
        <xui:place control="input2" id="controlPlace4" style="position:absolute;top:11px;left:376px;"/>  
        <xui:place control="gridSelect1" id="controlPlace6" style="position:absolute;left:119px;top:53px;width:413px;"/>  
        <xui:place control="gridSelect2" id="controlPlace7" style="position:absolute;left:119px;top:97px;"/>  
        <xui:place control="input4" id="controlPlace8" style="position:absolute;top:99px;left:376px;"/>  
        <xui:place control="input5" id="controlPlace9" style="position:absolute;left:119px;top:141px;"/>  
        <xui:place control="input6" id="controlPlace10" style="position:absolute;top:141px;left:376px;"/>  
        <xui:place control="textarea1" id="controlPlace11" style="position:absolute;left:119px;top:183px;width:413px;height:81px;"/>
      </layout>  
      <xforms:input id="input1" ref="data('dBorrowReturn')/dOCUMENTCATEGORYCNAME" disabled="true" tabindex="1"/>  
      <xforms:input id="input2" ref="data('dBorrowReturn')/dOCUMENTTYPECNAME" disabled="true" tabindex="2"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dBorrowReturn')/pFILEID"
        label-ref="data('dBorrowReturn')/pFILENAME" disabled="true" tabindex="3"> 
        <xforms:label ref="pFILENAME" id="default5"/>  
        <xforms:value ref="P_DOCUMENTS_ARCHIVE" id="default6"/>  
        <xforms:itemset id="default7" data="bizData1" auto-load-data="true"> 
          <xforms:column ref="P_DOCUMENTS_ARCHIVE" visible="false" id="default10"/>  
          <xforms:column ref="pFILENAME" id="default11"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dBorrowReturn')/bORROWER"
        tabindex="4" disabled="true"> 
        <xforms:label ref="oPERATORNAME" id="default12"/>  
        <xforms:value ref="HR_BASE_INFO" id="default13"/>  
        <xforms:itemset id="default14" data="hrData" auto-load-data="true"> 
          <xforms:column ref="HR_BASE_INFO" visible="false" id="default17"/>  
          <xforms:column ref="oPERATORNAME" id="default18"/>
        </xforms:itemset>
      </xhtml:div>  
      <xforms:input id="input4" ref="data('dBorrowReturn')/aPPLICATIONTIME" format="yyyy-MM-dd"
        disabled="true" tabindex="5"/>  
      <xforms:input id="input5" ref="data('dBorrowReturn')/rETURNDATE" format="yyyy-MM-dd"
        disabled="true" tabindex="6"/>  
      <xforms:input id="input6" ref="data('dBorrowReturn')/iNDEEDRETURNDATE" tabindex="7" disabled="true"/>  
      <xforms:textarea ref="data('dBorrowReturn')/mEMO" id="textarea1" tabindex="8"/>
    </xui:view>
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="guihuan.js"/>
  </xui:resource> 
</xui:window>
