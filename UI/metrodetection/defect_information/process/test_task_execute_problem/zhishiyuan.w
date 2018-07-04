<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:528px;height:auto;left:428px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="PROBLEM_RESOURCE_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="true" onValueChanged="zhishiyuan.dataMainValueChanged"> 
      <reader action="/metrodetection/defect_information/logic/action/ProblemAction" id="default3"/>  
      <writer action="/metrodetection/defect_information/logic/action/savePROBLEM_RESOURCE_INFOAction" id="default4"/>  
      <creator action="/metrodetection/defect_information/logic/action/createPROBLEM_RESOURCE_INFOAction" id="default5"/>  
      <rule id="default17" relation="APPLY_FOR_OBJECT" required="true()"/>  
      <rule id="default20" relation="APPLY_FOR_DEVICE_TYPE" required="true()"/>  
      <rule id="default25" relation="APPLY_FOR_RANGE" required="true()"/>  
      <rule id="default28" relation="APPLY_FOR_SUB_RANGE" required="true()"/>  
      <rule id="default33" relation="PROBLEM_PRIOR" required="true()"/>  
      <rule id="default36" relation="PROBLEM_TYPE" required="true()"/>  
      <rule id="default39" relation="PROBLEM_DESC" required="true()"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="DETECTION_OBJECT_TYPE"><creator id="default48" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default49" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default50" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="DEVICE_TYPE_CODE"><creator id="default60" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default61" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default62" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData3" concept="DETECTION_RANGE_TYPE"><creator id="default72" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"></creator>
  <reader id="default73" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"></reader>
  <writer id="default74" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData4" concept="DETECTION_RANGE_CODE"><creator id="default84" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_CODEAction"></creator>
  <reader id="default85" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_CODEAction"></reader>
  <writer id="default86" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData5" concept="PROBLEM_PRIOR_CODE"><creator id="default96" action="/metrodetection/system_code/logic/action/createPROBLEM_PRIOR_CODEAction"></creator>
  <reader id="default97" action="/metrodetection/system_code/logic/action/queryPROBLEM_PRIOR_CODEAction"></reader>
  <writer id="default98" action="/metrodetection/system_code/logic/action/savePROBLEM_PRIOR_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData6" concept="PROBLEM_TYPE_CODE"><creator id="default108" action="/metrodetection/system_code/logic/action/createPROBLEM_TYPE_CODEAction"></creator>
  <reader id="default109" action="/metrodetection/system_code/logic/action/queryPROBLEM_TYPE_CODEAction"></reader>
  <writer id="default110" action="/metrodetection/system_code/logic/action/savePROBLEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData7" concept="AFC_MANUFACTURER_INFO"><creator id="default18" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"></creator>
  <reader id="default21" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default22" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData8" concept="AFC_MANUFACTURER_INFO" store-type="simple"><creator id="default173"></creator>
  <reader id="default174" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default175"></writer></data>
  <xforms:action id="action4" ev:event="xbl-loaded"><xforms:script id="xformsScript4"><![CDATA[zhishiyuan.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData9" concept="TEST_TASK_EXECUTE_PROBLEM" store-type="simple"><creator id="default13" action="/metrodetection/system_code/logic/action/createTEST_TASK_EXECUTE_PROBLEMAction"></creator>
  <reader id="default14" action="/metrodetection/system_code/logic/action/queryTEST_TASK_EXECUTE_PROBLEMAction"></reader>
  <writer id="default16" action="/metrodetection/system_code/logic/action/saveTEST_TASK_EXECUTE_PROBLEMAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[zhishiyuan.insertTriggerClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem3" name="delete-item"/>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[zhishiyuan.removeTriggerClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="customBarItem1"><xhtml:div component="/UI/system/components/smartFilter.xbl.xml#smartFilter" id="smartFilter1" filter-data="dataMain" filter-relations="SOLUTION" style="height:26px;" auto-refresh="true" onGetCondition="zhishiyuan.smartFilter1GetCondition"></xhtml:div></item>
         <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
<!--            <xforms:label id="default22"><![CDATA[要搜索的内容]]></xforms:label>  -->
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[xforms.blur(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item> 
        <item id="customBarItem2"><xforms:trigger id="trigger2" style="width:100px;">
   <xforms:label id="default15"><![CDATA[确认选择该方案]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[zhishiyuan.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></item><item id="barItem2"> 
          </item>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      	<column label="选择" width="30px" ref="recCB" type="html"
        align="center" onRender="zhishiyuan.grdMain_recCBRender"/>  
      	<column id="default1" label="受测厂商" ref="mANUFACTUREIDCNAME" type="ro" width="100px" align="center"/>  
      <column id="default2" label="应用检测对象类型" ref="dETECTIONOBJECTCNAME" type="ro" width="100px" align="center"/>  
      <column id="default6" label="应用检测对象" ref="dEVICETYPECNAME" type="ro" width="132px" align="center"/>  
      <column id="default7" label="对象型号" ref="DEVICE_STYLE" type="ro" width="100px" align="center"/>  
      <column id="default8" label="应用检测方面类型" ref="dETECTIONRANGECNAME" type="ro" width="100px" align="center"/>  
      <column id="default9" label="应用检测方面" ref="rANGEIDCNAME" type="ro" width="100px" align="center"/>  
      <column id="default10" label="版本信息" ref="HARDWARE_VERSION" type="ro" width="100px" align="center"/>  
      <column id="default11" label="问题级别" ref="pROBLEMPRIORCNAME" type="ro" width="100px" align="center"/>  
      <column id="default12" label="问题类型" ref="pROBLEMTYPECNAME" type="ro" width="100px" align="center"/>  
      </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
        <!--        <item id="barItem13" name="save-item"/>  -->
	<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[zhishiyuan.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xhtml:span id="span1" style="font-size:10pt;position:absolute;color:#FF0000;top:62px;left:6px;">  <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span2" style="font-size:10pt;position:absolute;color:#FF0000;top:64px;left:329px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptDEVICE_STYLE" id="default23" style="font-size:10pt;position: absolute;top:124px;left:363px;" label="对象型号"/>  
        <place control="iptDEVICE_STYLE" id="default24" style="font-size:10pt;position: absolute;left:424px;top:118px;"/>  
        <xhtml:span id="span3" style="font-size:10pt;position:absolute;color:#FF0000;top:95px;left:6px;">  <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span4" style="font-size:10pt;position:absolute;color:#FF0000;left:328px;top:93px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptHARDWARE_VERSION" id="default31" style="font-size:10pt;position: absolute;left:64px;top:124px;" label="版本信息"/>  
        <place control="iptHARDWARE_VERSION" id="default32" style="font-size:10pt;position: absolute;left:125px;top:119px;"/>  
        <xhtml:span id="span5" style="font-size:10pt;position:absolute;color:#FF0000;top:152px;left:54px;">  <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span6" style="font-size:10pt;position:absolute;color:#FF0000;left:355px;top:152px;">  <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span7" style="font-size:10pt;position:absolute;color:#FF0000;width:6px;left:55px;top:261px;">  <![CDATA[*]]> </xhtml:span>  
        <xui:place control-label="gridSelect1" id="controlLabel1" style="position:absolute;left:20px;top:64px;" label="应用检测对象类型"></xui:place><xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;left:125px;top:59px;"></xui:place>
  <xui:place control-label="gridSelect2" id="controlLabel2" style="position:absolute;left:343px;top:64px;" label="应用检测对象"></xui:place><xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;left:424px;top:59px;"></xui:place>
  <xui:place control-label="gridSelect3" id="controlLabel3" style="position:absolute;left:20px;top:95px;" label="应用检测方面类型"></xui:place><xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;left:125px;top:89px;"></xui:place>
  <xui:place control-label="gridSelect4" id="controlLabel4" style="position:absolute;top:95px;left:343px;" label="应用检测方面"></xui:place><xui:place control="gridSelect4" id="controlPlace8" style="position:absolute;left:424px;top:89px;"></xui:place>
  <xui:place control-label="gridSelect5" id="controlLabel5" style="position:absolute;top:154px;left:68px;" label="问题级别"></xui:place><xui:place control="gridSelect5" id="controlPlace9" style="position:absolute;top:145px;left:125px;"></xui:place>
  <xui:place control-label="gridSelect6" id="controlLabel6" style="position:absolute;left:367px;top:154px;" label="问题类型"></xui:place><xui:place control="gridSelect6" id="controlPlace10" style="position:absolute;left:424px;top:145px;"></xui:place>
  <xui:place control-label="textarea1" id="controlLabel8" style="position:absolute;left:92px;top:333px;" label="备注"></xui:place><xui:place control="textarea1" id="controlPlace11" style="position:absolute;width:454px;top:315px;left:124px;height:47px;"></xui:place>
  <xui:place control-label="gridSelect8" id="controlLabel10" style="position:absolute;left:68px;top:34px;" label="受测厂商"></xui:place><xui:place control="gridSelect8" id="controlPlace13" style="position:absolute;top:29px;left:125px;"></xui:place>
  <xui:place control-label="gridSelect9" id="controlLabel11" style="position:absolute;left:367px;top:34px;" label="厂商类型"></xui:place>
  <xui:place control="gridSelect9" id="controlPlace15" style="position:absolute;left:424px;top:29px;"></xui:place>
  <xui:place control-label="textarea2" id="controlLabel12" style="position:absolute;left:68px;top:193px;" label="解决方案"></xui:place><xui:place control="textarea2" id="controlPlace16" style="position:absolute;left:125px;width:454px;height:44px;top:176px;"></xui:place>
  <xui:place control-label="textarea3" id="controlLabel13" style="position:absolute;left:68px;top:263px;" label="问题描述"></xui:place><xui:place control="textarea3" id="controlPlace17" style="position:absolute;width:455px;left:124px;height:46px;top:245px;"></xui:place></layout>  
      <xforms:input id="iptDEVICE_STYLE" ref="data('dataMain')/DEVICE_STYLE"></xforms:input>  
      <xforms:input id="iptHARDWARE_VERSION" ref="data('dataMain')/HARDWARE_VERSION"></xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/APPLY_FOR_OBJECT" onCloseup="zhishiyuan.gridSelect1Closeup">
   <xforms:label ref="dETECTIONOBJECTCNAME" id="default19"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default46"></xforms:value>
   <xforms:itemset id="default47" data="bizData1" auto-load-data="true">
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default55"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default56"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/APPLY_FOR_DEVICE_TYPE">
   <xforms:label ref="dEVICETYPECNAME" id="default57"></xforms:label>
   <xforms:value ref="dEVICETYPE" id="default58"></xforms:value>
   <xforms:itemset id="default59" data="bizData2" auto-load-data="true">
  <xforms:column ref="dEVICETYPE" visible="false" id="default67"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default68"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/APPLY_FOR_RANGE" onCloseup="zhishiyuan.gridSelect3Closeup">
   <xforms:label ref="dETECTIONRANGECNAME" id="default69"></xforms:label>
   <xforms:value ref="DETECTION_RANGE_TYPE" id="default70"></xforms:value>
   <xforms:itemset id="default71" data="bizData3" auto-load-data="true">
  <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default79"></xforms:column>
  <xforms:column ref="dETECTIONRANGECNAME" id="default80"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/APPLY_FOR_SUB_RANGE">
   <xforms:label ref="rANGEIDCNAME" id="default81"></xforms:label>
   <xforms:value ref="dETECTIONRANGEID" id="default82"></xforms:value>
   <xforms:itemset id="default83" data="bizData4" auto-load-data="true">
  <xforms:column ref="dETECTIONRANGEID" visible="false" id="default91"></xforms:column>
  <xforms:column ref="rANGEIDCNAME" id="default92"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/PROBLEM_PRIOR" onCloseup="zhishiyuan.gridSelect5Closeup">
   <xforms:label ref="pROBLEMPRIORCNAME" id="default93"></xforms:label>
   <xforms:value ref="PROBLEM_PRIOR_CODE" id="default94"></xforms:value>
   <xforms:itemset id="default95" data="bizData5" auto-load-data="true">
  <xforms:column ref="PROBLEM_PRIOR_CODE" visible="false" id="default103"></xforms:column>
  <xforms:column ref="pROBLEMPRIORCNAME" id="default104"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('dataMain')/PROBLEM_TYPE">
   <xforms:label ref="pROBLEMTYPECNAME" id="default105"></xforms:label>
   <xforms:value ref="pROBLEMTYPE" id="default106"></xforms:value>
   <xforms:itemset id="default107" data="bizData6" auto-load-data="true">
  <xforms:column ref="pROBLEMTYPE" visible="false" id="default115"></xforms:column>
  <xforms:column ref="pROBLEMTYPECNAME" id="default116"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea1"><xforms:action id="action7" ev:event="DOMFocusOut"><xforms:script id="xformsScript7"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect8" ref="data('dataMain')/MANUFACTURE_ID" label-ref="data('dataMain')/mANUFACTUREIDCNAME" onCloseup="zhishiyuan.gridSelect8Closeup">
   <xforms:label ref="mANUFACTUREIDCNAME" id="default44"></xforms:label>
   <xforms:value ref="AFC_MANUFACTURER_INFO" id="default45"></xforms:value>
   <xforms:itemset id="default51" auto-load-data="true" data="bizData7">
  
  
  
  
  
  <itemset-data xmlns="" id="default136">
   <rows xmlns="" id="default137"></rows></itemset-data>
  
  <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default142"></xforms:column>
  <xforms:column ref="mANUFACTUREIDCNAME" id="default143"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect9" ref="data('dataMain')/mANUFACTURETYPE" readonly="true">
   <xforms:label ref="col_1" id="default144"></xforms:label>
   <xforms:value ref="col_0" id="default145"></xforms:value>
   <xforms:itemset id="default146" auto-load-data="true"><itemset-data xmlns="" id="default158">
   <rows xmlns="" id="default159">
    <row id="default160">
     <cell id="default161">1</cell>
     <cell id="default162">设备厂商</cell></row> 
    <row id="default163">
     <cell id="default164">2</cell>
     <cell id="default165">工具厂商</cell></row> 
    <row id="default166">
     <cell id="default167">3</cell>
     <cell id="default168">第三方检测机构</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default171"></xforms:column>
  <xforms:column ref="col_1" id="default172"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/SOLUTION" id="textarea2"><xforms:action id="action5" ev:event="DOMFocusOut"><xforms:script id="xformsScript5"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/PROBLEM_DESC" id="textarea3"><xforms:action id="action6" ev:event="DOMFocusOut"><xforms:script id="xformsScript6"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="zhishiyuan.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="zhishiyuan.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:62%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    <xui:place control="windowReceiver1" id="controlPlace19" style="position:absolute;top:248px;left:204px;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1" onReceive="zhishiyuan.windowReceiver1Receive"></xhtml:div>
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  <xhtml:script id="htmlScript2" src="zhishiyuan.js"></xhtml:script></xui:resource> 
</xui:window>
