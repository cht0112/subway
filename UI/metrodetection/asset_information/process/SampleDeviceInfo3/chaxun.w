<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="model1" style="width:143px;height:auto;top:180px;left:526px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="lvliData" concept="SAMPLE_DEVICE_MOVING_RECORD" auto-new="false" store-type="simple" confirm-refresh="false" confirm-delete="false" filter-relations="oPERATEDATETIME,dEVICEID,sAMPLEDEVICENO,pROJECTNAME">
   <creator id="default1" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_MOVING_RECORDAction"></creator>
   <reader id="default2" action="/metrodetection/system_code/logic/action/myQuerylvli"></reader>
   <writer id="default3" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_MOVING_RECORDAction"></writer>
   <rule id="dataBizRule1" relation="oPERATEDATETIME" required="true()" alert="'操作日期时间不能为空!'"></rule>
   <rule id="dataBizRule13" relation="oPERATORID" required="true()" alert="'操作员不能为空!'"></rule>
   <rule id="dataBizRule15" relation="dEVICEID" required="true()" alert="'设备ID不能为空!'"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple">
   <reader id="default73" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrData" concept="HR_BASE_INFO">
   <creator id="default72" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default75" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default74" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="zhanyong" concept="SAMPLE_DEVICE_OCCUPY_INFO" store-type="simple">
   <creator id="default81" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_OCCUPY_INFOAction"></creator>
   <reader id="default82" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_OCCUPY_INFOAction"></reader>
   <writer id="default83" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_OCCUPY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData2" concept="TEST_PROJECT_INFO" store-type="simple">
   <reader id="default92" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="TEST_PROJECT_INFO">
   <creator id="default90"></creator>
   <reader id="default89" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
   <writer id="default91"></writer></data>
  <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SAMPLE_DEVICE_INFO" direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="simple" update-mode="whereAll" confirm-delete="false">
   <reader action="/metrodetection/system_code/logic/action/myQuerySampleDeviceInfo" id="default77"></reader>
   <writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction" id="default76"></writer>
   <creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction" id="default80"></creator>
   <rule id="dataBizRule4" relation="dEVICETYPE" required="true()" alert="'检测对象不能为空!'"></rule>
   <rule id="dataBizRule5" relation="dECTIONTYPE" required="true()" alert="'检测类型不能为空!'"></rule>
   <rule id="dataBizRule6" relation="sOFTWAREVERSION" required="true()" alert="'软件版本不能为空!'"></rule>
   <rule id="dataBizRule7" relation="hARDWAREVERSION" required="true()" alert="'硬件版本不能为空!'"></rule>
   <rule id="dataBizRule8" relation="dEADLINERECEIVEDATE" required="true()" alert="'最晚进场日期不能为空!'"></rule>
   <rule id="dataBizRule9" relation="iNDEEDRECEIVEDATE" required="true()" alert="'实际进场日期不能为空!'"></rule>
   <rule id="dataBizRule10" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"></rule>
   <rule id="dataBizRule11" relation="iNDEEDRETURNDATE" required="true()" alert="'实际归还日期不能为空!'"></rule>
   <rule id="dataBizRule12" relation="sHAREDFLAG" required="true()" alert="'是否允许资源共用不能为空!'"></rule>
   <rule id="dataBizRule3" relation="mANUFACTUREID" required="true()" alert="'供应商名称不能为空!'"></rule>
   <rule id="dataBizRule16" relation="dEVICEID" alert="'设备ID不能为空!'" required="true()"></rule>
   <filter name="filter0" id="filter1"></filter>
   <calculate-relation relation="recCB" id="calculate-relation2"></calculate-relation></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="cData" concept="CHECK_RECORD" store-type="simple">
   <creator id="default71" action="/metrodetection/system_code/logic/action/createCHECK_RECORDAction"></creator>
   <reader id="default71" action="/metrodetection/system_code/logic/action/queryCHECK_RECORDAction"></reader>
   <writer id="default72" action="/metrodetection/system_code/logic/action/saveCHECK_RECORDAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="chaxun.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:237px;left:250px;"/>  
      <xui:place control="view1" id="controlPlace2" style="width:674px;height:42px;"></xui:place>
  <xui:place control="view2" id="controlPlace4" style="height:479px;width:864px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace3" style="position:absolute;width:400px;top:5px;height:25px;left:5px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" style="width:501px;" data="lvliData">
   <item name="refresh-item" id="barItem4"></item>
   <item name="filter-pro-item" id="customBarItem1"></item>
   <item name="separator" id="customBarItem3"></item>
   <item name="custom-page-item" id="customPageItem1"></item></xui:bar></xhtml:div></xui:view>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout2"><xui:place control="grid1" style="width:100%;height:100%;" id="controlPlace6"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid1" data="lvliData">
   <xui:column id="gridColumn13" ref="pROJECTNAME" label="项目名称" type="ed" width="100px"></xui:column><column ref="oPERATETYPE1" label="操作类型" width="100px" type="ed" id="gridColumn2"></column><column ref="dEVICEID" label="唯一编号" width="100px" type="ed" id="gridColumn6"></column><column ref="oPERATERESULTSTATE1" label="操作结果" width="100px" type="ed" id="gridColumn7"></column><column ref="sAMPLEDEVICENO" label="样品序号" width="100px" type="ed" id="gridColumn9"></column><xui:column id="gridColumn12" ref="oPERATORNAME" label="操作员" type="ed" width="100px"></xui:column><column ref="oPERATEDATETIME" label="操作日期时间" width="100px" type="ed" id="gridColumn1"></column>
   
   
   
   
  
  </xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="chaxun.js"></xhtml:script></xui:resource> 
</xui:window>
