<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;height:auto;top:515px;left:472px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="dataMain" concept="PROBLEM_RESOURCE_INFO" store-type="simple" auto-new="false"><creator id="default1" action="/metrodetection/defect_information/logic/action/createPROBLEM_RESOURCE_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/defect_information/logic/action/ProblemAction"></reader>
  <writer id="default3" action="/metrodetection/defect_information/logic/action/savePROBLEM_RESOURCE_INFOAction"></writer>
  <rule id="dataBizRule1" relation="APPLY_FOR_OBJECT" required="true()"></rule>
  <rule id="dataBizRule2" relation="APPLY_FOR_DEVICE_TYPE" required="true()"></rule>
  <rule id="dataBizRule3" relation="APPLY_FOR_RANGE" required="true()"></rule>
  <rule id="dataBizRule4" relation="APPLY_FOR_SUB_RANGE" required="true()"></rule>
  <rule id="dataBizRule5" relation="PROBLEM_PRIOR" required="true()"></rule>
  <rule id="dataBizRule6" relation="PROBLEM_TYPE" required="true()"></rule>
  <rule id="dataBizRule7" relation="PROBLEM_DESC" required="true()"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData7" concept="AFC_MANUFACTURER_INFO"><creator id="default7" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"></creator>
  <reader id="default8" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default9" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData1" concept="DETECTION_OBJECT_TYPE"><creator id="default19" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default20" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default21" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData2" concept="DEVICE_TYPE_CODE"><creator id="default22" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default23" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default24" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData3" concept="DETECTION_RANGE_TYPE"><creator id="default40" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"></creator>
  <reader id="default41" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"></reader>
  <writer id="default42" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData4" concept="DETECTION_RANGE_CODE"><creator id="default46" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_CODEAction"></creator>
  <reader id="default47" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_CODEAction"></reader>
  <writer id="default48" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData5" concept="PROBLEM_PRIOR_CODE"><creator id="default67" action="/metrodetection/system_code/logic/action/createPROBLEM_PRIOR_CODEAction"></creator>
  <reader id="default68" action="/metrodetection/system_code/logic/action/queryPROBLEM_PRIOR_CODEAction"></reader>
  <writer id="default69" action="/metrodetection/system_code/logic/action/savePROBLEM_PRIOR_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData6" concept="PROBLEM_TYPE_CODE"><creator id="default76" action="/metrodetection/system_code/logic/action/createPROBLEM_TYPE_CODEAction"></creator>
  <reader id="default77" action="/metrodetection/system_code/logic/action/queryPROBLEM_TYPE_CODEAction"></reader>
  <writer id="default78" action="/metrodetection/system_code/logic/action/savePROBLEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData8" concept="AFC_MANUFACTURER_INFO" store-type="simple"><creator id="default85"></creator>
  <reader id="default86" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default87"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="DialogActivity.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="width:836px;height:715px;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" onclick="DialogActivity.inputbutton1Click(event)" style="width:75px;float:right" type="button" value="确定"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace3" style="position:absolute;top:7px;height:25px;left:14px;width:512px;"></xui:place>
  <xui:place control-label="DEVICE_STYLE" style="font-size:10pt;position: absolute;top:194px;left:390px;" id="controlLabel4" label="对象型号">对象型号</xui:place>
  <xui:place control="DEVICE_STYLE" style="position: absolute;width: 153px;left:450px;top:187px;" id="controlPlace7"></xui:place>
  <xui:place control-label="HARDWARE_VERSION" style="font-size:10pt;position: absolute;top:194px;left:82px;" id="controlLabel7" label="版本信息">版本信息</xui:place>
  <xui:place control="HARDWARE_VERSION" style="position: absolute;width: 153px;left:143px;top:185px;" id="controlPlace10"></xui:place>
  <xui:place control-label="gridSelect8" id="controlLabel1" style=";position:absolute;top:103px;left:63px" label="受测厂商"></xui:place><xui:place control="gridSelect8" id="controlPlace16" style="position:absolute;top:95px;left:143px;"></xui:place>
  <xui:place control-label="gridSelect9" id="controlLabel13" style="position:absolute;top:105px;left:394px;" label="厂商类型"></xui:place><xui:place control="gridSelect9" id="controlPlace17" style="position:absolute;top:97px;left:450px;"></xui:place>
  <xui:place control-label="gridSelect1" id="controlLabel14" style="position:absolute;top:131px;left:38px;" label="应用检测对象类型"></xui:place><xui:place control="gridSelect1" id="controlPlace18" style="position:absolute;left:143px;top:125px;"></xui:place>
  <xui:place control-label="gridSelect2" id="controlLabel15" style=";position:absolute;top:134px;left:370px" label="应用检测对象"></xui:place><xui:place control="gridSelect2" id="controlPlace19" style="position:absolute;left:450px;top:127px;"></xui:place>
  <xui:place control-label="gridSelect3" id="controlLabel16" style="position:absolute;top:161px;left:38px;" label="应用检测方面类型"></xui:place><xui:place control="gridSelect3" id="controlPlace20" style="position:absolute;left:143px;top:155px;"></xui:place>
  <xui:place control-label="gridSelect4" id="controlLabel17" style=";position:absolute;top:164px;left:370px" label="应用检测方面"></xui:place><xui:place control="gridSelect4" id="controlPlace21" style="position:absolute;left:450px;top:157px;"></xui:place>
  <xui:place control-label="gridSelect5" id="controlLabel20" style="position:absolute;top:225px;left:86px;" label="问题级别"></xui:place><xui:place control="gridSelect5" id="controlPlace22" style="position:absolute;left:143px;top:213px;"></xui:place>
  <xui:place control-label="gridSelect6" id="controlLabel19" style="position:absolute;top:225px;left:394px;" label="问题类型"></xui:place><xui:place control="gridSelect6" id="controlPlace23" style="position:absolute;left:450px;top:215px;"></xui:place>
  <xui:place control-label="textarea1" id="controlLabel21" style="position:absolute;top:268px;left:86px;" label="解决方案"></xui:place><xui:place control="textarea1" id="controlPlace24" style="position:absolute;top:254px;left:143px;width:461px;height:58px;"></xui:place>
  <xui:place control-label="textarea2" id="controlLabel22" style="position:absolute;top:350px;left:86px;" label="问题描述"></xui:place><xui:place control="textarea2" id="controlPlace25" style="position:absolute;top:337px;left:143px;width:460px;height:61px;"></xui:place>
  <xui:place control-label="textarea3" id="controlLabel23" style="position:absolute;top:431px;left:110px;" label="备注"></xui:place><xui:place control="textarea3" id="controlPlace26" style="position:absolute;left:143px;top:423px;width:459px;height:61px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="dataMain">
   <item name="insert-item" id="barItem1"></item><item name="save-item" id="barItem2"></item><item name="delete-item" id="barItem3"></item><item name="refresh-item" id="barItem4"></item>
   <item name="separator" id="customBarItem3"></item>
   </xui:bar></xhtml:div>
  <xforms:input ref="data('dataMain')/DEVICE_STYLE" id="DEVICE_STYLE"></xforms:input>
  <xforms:input ref="data('dataMain')/HARDWARE_VERSION" id="HARDWARE_VERSION"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect8" ref="data('dataMain')/MANUFACTURE_ID" label-ref="data('dataMain')/mANUFACTUREIDCNAME" onCloseup="DialogActivity.gridSelect8Closeup">
   <xforms:label ref="mANUFACTUREIDCNAME" id="default4"></xforms:label>
   <xforms:value ref="AFC_MANUFACTURER_INFO" id="default5"></xforms:value>
   <xforms:itemset id="default6" data="bizData7" auto-load-data="true">
  <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default92"></xforms:column>
  <xforms:column ref="mANUFACTUREIDCNAME" id="default93"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect9" ref="data('dataMain')/mANUFACTURETYPE" readonly="true">
   <xforms:label ref="col_1" id="default10"></xforms:label>
   <xforms:value ref="col_0" id="default11"></xforms:value>
   <xforms:itemset id="default12" auto-load-data="true"><itemset-data xmlns="" id="default116">
   <rows xmlns="" id="default117">
    <row id="default118">
     <cell id="default119">1</cell>
     <cell id="default120">设备厂商</cell></row> 
    <row id="default121">
     <cell id="default122">2</cell>
     <cell id="default123">工具厂商</cell></row> 
    <row id="default124">
     <cell id="default125">3</cell>
     <cell id="default126">第三方检测机构</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default129"></xforms:column>
  <xforms:column ref="col_1" id="default130"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/APPLY_FOR_OBJECT" onCloseup="DialogActivity.gridSelect1Closeup">
   <xforms:label ref="dETECTIONOBJECTCNAME" id="default13"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default14"></xforms:value>
   <xforms:itemset id="default15" data="bizData1" auto-load-data="true">
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default29"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default30"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/APPLY_FOR_DEVICE_TYPE">
   <xforms:label ref="dEVICETYPECNAME" id="default16"></xforms:label>
   <xforms:value ref="dEVICETYPE" id="default17"></xforms:value>
   <xforms:itemset id="default18" data="bizData2" auto-load-data="true">
  <xforms:column ref="dEVICETYPE" visible="false" id="default35"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default36"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/APPLY_FOR_RANGE" onCloseup="DialogActivity.gridSelect3Closeup">
   <xforms:label ref="dETECTIONRANGECNAME" id="default37"></xforms:label>
   <xforms:value ref="DETECTION_RANGE_TYPE" id="default38"></xforms:value>
   <xforms:itemset id="default39" data="bizData3" auto-load-data="true">
  <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default59"></xforms:column>
  <xforms:column ref="dETECTIONRANGECNAME" id="default60"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/APPLY_FOR_SUB_RANGE">
   <xforms:label ref="rANGEIDCNAME" id="default43"></xforms:label>
   <xforms:value ref="dETECTIONRANGEID" id="default44"></xforms:value>
   <xforms:itemset id="default45" data="bizData4" auto-load-data="true">
  <xforms:column ref="dETECTIONRANGEID" visible="false" id="default53"></xforms:column>
  <xforms:column ref="rANGEIDCNAME" id="default54"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/PROBLEM_PRIOR" onCloseup="DialogActivity.gridSelect5Closeup">
   <xforms:label ref="pROBLEMPRIORCNAME" id="default61"></xforms:label>
   <xforms:value ref="PROBLEM_PRIOR_CODE" id="default62"></xforms:value>
   <xforms:itemset id="default63" data="bizData5" auto-load-data="true">
  <xforms:column ref="PROBLEM_PRIOR_CODE" visible="false" id="default74"></xforms:column>
  <xforms:column ref="pROBLEMPRIORCNAME" id="default75"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('dataMain')/PROBLEM_TYPE">
   <xforms:label ref="pROBLEMTYPECNAME" id="default64"></xforms:label>
   <xforms:value ref="pROBLEMTYPE" id="default65"></xforms:value>
   <xforms:itemset id="default66" data="bizData6" auto-load-data="true">
  <xforms:column ref="pROBLEMTYPE" visible="false" id="default83"></xforms:column>
  <xforms:column ref="pROBLEMTYPECNAME" id="default84"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/SOLUTION" id="textarea1"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/PROBLEM_DESC" id="textarea2"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea3"></xforms:textarea></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="DialogActivity.js"></xhtml:script></xui:resource> 
</xui:window>
