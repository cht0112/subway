<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window" id="wdwSendDoc">  
  <resource> 
    <xhtml:script src="/UI/system/components/printHtml/formPrint.js"/> 
  </resource>  
  <xforms:model id="model1" style="height:auto;left:509px;top:441px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_Task" id="dataMain" limit="20" offset="1" store-type="simple"> 
      <reader action="/system/logic/action/queryTaskAction"/>  
      <calculate-relation relation="recNO" type="xsd{semicolon}integer"/> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2"><![CDATA[detectionProcessQueryDetail.model1ModelConstructDone(event)]]></xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="false" id="testApplicationData" concept="TEST_APPLICATION_INFO"
      store-type="simple"> 
      <reader id="default1" action="/metrodetection/system_code/logic/action/queryTestApplication"/> 
    </data>  
    <data xmlns="" id="reportData" component="/UI/system/components/reportData.xbl.xml#data">  
      <source id="default5"> 
        <action id="default6" name="detectionProcessQueryReport" type="action"
          columns="SPARENT,SACTIVITYNAME,SEXECUTORDEPTNAME,SEXECUTORPERSONNAME,SCONTENT,SSTATUSNAME,SACTUALFINISHTIME"/> 
      </source> 
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
            <xforms:script id="xformsScript1">detectionProcessQueryDetail.tabProcessChartSelect()</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="flow" style="position:relative;" id="layout1"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" src="res.xls" style="width:100%; height: 100%;;;"></xhtml:div> 
      </layout>  
      <xforms:input ref="data('testApplicationData')/mANUFACTUREIDCNAME" id="aSSIGNEDMANUFACTUREID1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/wtName" id="pRODUCTMANUFACTUREID1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/pRODUCTNAME" id="pRODUCTNAME1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/dETECTIONOBJECTCNAME" id="dETECTIONOBJECTTYPE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/dEVICETYPECNAME" id="dEVICETYPE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/bUSINESSIDCNAME" id="bUSINESSID1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/lINEID" id="lINEID1" disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cONTACTPERSON" id="cONTACTPERSON1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cONTACTMOBILE" id="cONTACTMOBILE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cONTACTTELEPHONE" id="cONTACTTELEPHONE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cONTACTEMAIL" id="cONTACTEMAIL1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cONTACTADDRESS" id="cONTACTADDRESS1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cONTACTPOSTCODE" id="cONTACTPOSTCODE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cONTACTFAXNUMBER" id="cONTACTFAXNUMBER1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/aPPLICATIONDATE" id="aPPLICATIONDATE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/eXPECTENDINGDATE" id="eXPECTENDINGDATE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/pRODUCTSTYLE" id="pRODUCTSTYLE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cOMPANYTYPE" id="cOMPANYTYPE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/dEVELOPMENTTOOLS" id="dEVELOPMENTTOOLS1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/cOMPILERENVIRONMENT" id="cOMPILERENVIRONMENT1"
        style="width:456px;" disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/oPERATORNAME" id="oPERATORID1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/mNITLTELEPHONE" id="mNITLTELEPHONE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/mNITLFAXNUMBER" id="mNITLFAXNUMBER1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/mNITLMOBILE" id="mNITLMOBILE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/mNITLEMAIL" id="mNITLEMAIL1" disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/mNITLADDRESS" id="mNITLADDRESS1"
        style="width:148px;" disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/mNITLPOSTCODE" id="mNITLPOSTCODE1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/receipterName" id="rECEIPTER1"
        disabled="true"/>  
      <xforms:input ref="data('testApplicationData')/rECEIPTDATE" id="rECEIPTDATE1"
        disabled="true"/>  
      <xforms:textarea ref="data('testApplicationData')/mEMO" id="textarea1" style="height:39px;width:762px;"
        disabled="true"/>  
      <xforms:textarea ref="data('testApplicationData')/dECTIONBASEDONNAME" id="textarea2"
        style="height:29px;width:763px;" disabled="true"/>  
      <xforms:textarea ref="data('testApplicationData')/pRODUCTCONFIGURATION" id="textarea3"
        style="height:31px;width:763px;" disabled="true"/>  
      <xforms:textarea ref="data('testApplicationData')/aPPLICATIONFIELDS" id="textarea4"
        style="height:32px;width:762px;" disabled="true"/>  
      <xforms:textarea ref="data('testApplicationData')/fEATURESANDMODELS" id="textarea5"
        style="height:32px;width:762px;" disabled="true"/>  
      <xforms:textarea ref="data('testApplicationData')/tESTINGREQUIREMENTS" id="textarea6"
        style="height:34px;width:762px;" disabled="true"/>  
      <xui:view auto-load="false" id="view2" class="xui-container" style="border-color:#000000 #000000 #000000 #000000;border-style:double double double double;border-width:1px 1px 1px 1px;width:919px;height:207px;"> 
        <layout type="absolute" style="position:relative;" id="layout2"> 
          <xui:place control="view3" id="controlPlace4" style="position:absolute;height:167px;top:34px;left:4px;border-color:#FFFFFF #FFFFFF #FFFFFF #FFFFFF;width:746px;"/> 
        </layout>  
        <xui:view auto-load="true" id="view3" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout3"> 
            <xui:place control="report1" id="controlPlace5" style="position:absolute;top:5px;left:72px;height:149px;width:764px;"/> 
          </layout>  
          <xhtml:div component="/UI/system/components/report.xbl.xml#report" src=""
            report-name="流程记录" auto-load="false" data-list="reportData" id="report1"
            column-width="1"> 
            <layout-content id="default1"><![CDATA[
			  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="1" style="font-size:11pt;border-collapse:collapse;table-layout:fixed;width:1px;">
			     <tr>
			     	<td ></td>
			     	<td  style="WIDTH: 18px"></td><td  style="WIDTH: 140px"></td>
			     	<td  style="WIDTH: 299px"></td><td  style="WIDTH: 105px"></td>
			     	<td  style="WIDTH: 72px"></td><td  style="WIDTH: 105px"></td>
			     </tr>
			     <tr>
			     	<td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td>
			     	<td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td>
			     	<td  style="HEIGHT: 13px"></td><td  style="HEIGHT: 13px"></td>
			     	<td  style="HEIGHT: 13px"></td>
			     </tr>
			     <tr>
			     	<td  style="HEIGHT: 26px"></td><td  style="HEIGHT: 26px"></td>
			     	<td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">环节</td>
			     	<td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">附言</td>
			     	<td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">用户组</td>
			     	<td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">执行人</td>
			     	<td  style="BORDER-BOTTOM: #000000 1px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 2px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle">时间</td>
			     </tr>
			     <tr>
			     	<td  style="HEIGHT: 26px"></td>
			     	<td  style="HEIGHT: 26px"></td>
			     	<td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 2px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.select(reportData.SACTIVITYNAME)</td>
			     	<td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SCONTENT</td>
			     	<td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: left; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SEXECUTORDEPTNAME</td>
			     	<td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 1px solid; VERTIAL-ALIGN: middle">reportData.SEXECUTORPERSONNAME</td>
			     	<td  style="BORDER-BOTTOM: #000000 2px solid; TEXT-ALIGN: center; BORDER-LEFT: #000000 1px solid; FONT-FAMILY: 宋体; HEIGHT: 26px; FONT-SIZE: 12px; BORDER-TOP: #000000 1px solid; BORDER-RIGHT: #000000 2px solid; VERTIAL-ALIGN: middle" format="yyyy/m/d h:mm;@">reportData.SACTUALFINISHTIME</td>
			     </tr>
			  </table>
			]]></layout-content> 
          </xhtml:div> 
        </xui:view> 
      </xui:view>  
      <xforms:trigger appearance="image" id="trigger1" image-text-mode="LR" style="width:31px;" src="/UI/metrodetection/detection_Process_Related/process/detectionProcessQuery/images/move_down.gif"> 
        <xforms:action id="action2" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript2"><![CDATA[detectionProcessQueryDetail.trigger1Click(event)]]></xforms:script> 
        </xforms:action> 
      </xforms:trigger> 
    </xui:view> 
  </view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="detectionProcessQueryDetail.js"/> 
  </resource> 
</window>
