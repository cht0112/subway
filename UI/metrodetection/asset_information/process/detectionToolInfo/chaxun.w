<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="model1" style="width:143px;height:auto;top:157px;left:557px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="beipinbeijian" concept="DETECTION_TOOL_MOVING_RECORD" store-type="simple" auto-new="true" confirm-refresh="false" confirm-delete="false" filter-relations="oPERATEDATETIME,oPERATORID,tOOLID,tOOLNUMBER,mOVINGREASON,uSESTATECODECNAME,pROJECTNAME,tOOLCATEGORYCNAME"><creator id="default1" action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_MOVING_RECORDAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/myQuerybeipinbeijian"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_MOVING_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="toolData" concept="DETECTION_TOOL_INFO" store-type="simple">
   <reader id="default4" action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_INFOAction"></reader>
   <creator id="default77" action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_INFOAction"></creator>
   <writer id="default78" action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData1" concept="TOOL_SORT_CODE" store-type="grid" confirm-refresh="false" confirm-delete="false">
   <creator id="default28" action="/metrodetection/system_code/logic/action/createTOOL_SORT_CODEAction"></creator>
   <reader id="default27" action="/metrodetection/system_code/logic/action/queryTOOL_SORT_CODEAction"></reader>
   <writer id="default50" action="/metrodetection/system_code/logic/action/saveTOOL_SORT_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData2" concept="USE_STATE_CODE" store-type="grid" confirm-refresh="false">
   <creator id="default57" action="/metrodetection/system_code/logic/action/createUSE_STATE_CODEAction"></creator>
   <reader id="default58" action="/metrodetection/system_code/logic/action/queryUSE_STATE_CODEAction"></reader>
   <writer id="default59" action="/metrodetection/system_code/logic/action/saveUSE_STATE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple">
   <reader id="default67" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple">
   <creator id="default69" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
   <reader id="default71" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
   <writer id="default72" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO">
   <creator id="default37" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default61" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default60" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData3" concept="TEST_PROJECT_TASK_INFO" store-type="simple">
   <reader id="default68" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_TASK_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="zhanyong" concept="TOOL_OCCUPY_INFO" store-type="simple">
   <creator id="default74" action="/metrodetection/system_code/logic/action/createTOOL_OCCUPY_INFOAction"></creator>
   <reader id="default75" action="/metrodetection/system_code/logic/action/queryTOOL_OCCUPY_INFOAction"></reader>
   <writer id="default76" action="/metrodetection/system_code/logic/action/saveTOOL_OCCUPY_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView" class="xui-container"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="chaxun.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:467px;left:587px;"/>  
      <xui:place control="view4" id="controlPlace8" style="width:1049px;height:48px;"></xui:place>
  <xui:place control="view5" id="controlPlace11" style="height:502px;width:1201px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view4" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout4"><xui:place control="toolbars3" id="controlPlace9" style="position:absolute;top:7px;left:5px;"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar2" style="width:500px;height:39px;" data="beipinbeijian">
   <item name="refresh-item" id="barItem12"></item>
   <item name="filter-pro-item" id="customBarItem4"></item>
   <item name="separator" id="customBarItem6"></item>
   <item name="custom-page-item" id="customPageItem2"></item></xui:bar></xhtml:div>
  </xui:view>
  <xui:view auto-load="true" id="view5" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout5"><xui:place control="grid2" style="width:100%;height:100%;" id="controlPlace12"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid2" data="beipinbeijian">
   <column ref="oPERATETYPE1" label="操作类型" width="100px" type="ed" id="gridColumn16"></column><column ref="oPERATORID" label="操作员" width="100px" type="ed" id="gridColumn17"></column><column ref="tOOLID" label="工具ID" width="100px" type="ed" id="gridColumn21"></column><column ref="tOOLNUMBER" label="工具数量" width="100px" type="ed" id="gridColumn23"></column><column ref="mOVINGREASON1" label="出入库原因" width="100px" type="ed" id="gridColumn24"></column><column ref="oPERATORNAME" label="姓名" width="100px" type="ed" id="gridColumn27"></column><xui:column id="gridColumn28" ref="uSESTATECODECNAME" label="使用状态" type="ed" width="100px"></xui:column><xui:column id="gridColumn29" ref="pROJECTNAME" label="项目名称" type="ed" width="100px"></xui:column><xui:column id="gridColumn30" ref="tOOLCATEGORYCNAME" label="工具类型" type="ed" width="100px"></xui:column><column ref="oPERATEDATETIME" label="操作日期时间" width="100px" type="ed" id="gridColumn15"></column>
   
   
   
   
   
   
  
  
  </xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="chaxun.js"></xhtml:script></xui:resource> 
</xui:window>
