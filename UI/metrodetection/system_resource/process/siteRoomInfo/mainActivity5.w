<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:143px;top:264px;height:auto;left:130px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData1" concept="ROOM_APPLY_INFO" store-type="simple" confirm-refresh="false"><creator id="default1" action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/querySiteCSQ"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction"></writer>
  <rule id="dataBizRule1" concept="ROOM_APPLY_INFO"></rule>
  <rule id="dataBizRule2" relation="rOOMID"></rule>
  <rule id="dataBizRule3" relation="rOOMAREA" required="true()" alert="'区域不能为空'"></rule>
  <rule id="dataBizRule4" relation="aPPLYFOROBJECT" required="true()" alert="'应用检测对象类型不能为空'"></rule>
  <rule id="dataBizRule5" relation="aPPLYFORDEVICETYPE" required="true()" alert="'应用检测对象不能为空'"></rule>
  <rule id="dataBizRule6" relation="aPPLYFORRANGE" required="true()" alert="'应用检测方面类型不能为空'"></rule>
  <rule id="dataBizRule7" relation="iMAGE"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData2" concept="DEVICE_TYPE_CODE"><creator id="default13" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default14" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default15" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData3" concept="DETECTION_OBJECT_TYPE"><creator id="default28" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default29" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default30" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData4" concept="DETECTION_RANGE_TYPE"><creator id="default34" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"></creator>
  <reader id="default35" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"></reader>
  <writer id="default36" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="mainActivity5.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:293px;left:370px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="width:100%;height:108%;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" onclick="mainActivity5.inputbutton1Click(event)" style="width:75px;float:right" type="button" value="确定"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;width:100%;height:108%;" id="layout1"><xui:place control="rOOMAREA" style="position: absolute;left:114px;top:56px;" id="controlPlace4"></xui:place><xui:place control="blobImage1" id="controlPlace9" style="position:absolute;height:138px;left:367px;top:56px;"></xui:place><xhtml:label id="label3" style="position:absolute;width:105px;left:6px;top:98px;" class="xui-label">应用检测对象类型</xhtml:label><xhtml:label id="label5" style="position:absolute;width:105px;left:6px;top:174px;" class="xui-label">应用检测方面类型</xhtml:label><xhtml:label id="label6" style="position:absolute;width:65px;left:300px;top:60px;" class="xui-label">区域位置图</xhtml:label><xui:place control="gridSelect4" id="controlPlace14" style="position:absolute;left:114px;top:93px;"></xui:place><xui:place control="gridSelect5" id="controlPlace15" style="position:absolute;left:114px;top:167px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace6" style="position:absolute;left:114px;top:130px;"></xui:place>
  <xhtml:label id="label4" style="position:absolute;left:31px;top:136px;" class="xui-label">应用检测对象</xhtml:label>
  <xhtml:label id="label1" style="position:absolute;width:30px;left:81px;top:60px;" class="xui-label">区域</xhtml:label>
  <xui:place control="toolbars1" id="controlPlace3" style="position:absolute;width:400px;top:5px;height:25px;left:6px;"></xui:place></layout>
  <xforms:input ref="data('bizData1')/rOOMAREA" id="rOOMAREA"></xforms:input><xhtml:div component="/UI/system/components/blob.xbl.xml#image" id="blobImage1" data="bizData1" relation="iMAGE" concept="ROOM_APPLY_INFO" ></xhtml:div><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('bizData1')/aPPLYFOROBJECT" label-ref="data('bizData1')/dETECTIONOBJECTCNAME" input-changeable="true" onCloseup="mainActivity5.gridSelect4Closeup">
				   
				   
				   
				
   <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel4"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default26"></xforms:value>
   <xforms:itemset id="default27" data="bizData3" auto-load-data="true"><xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default32"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default33"></xforms:column></xforms:itemset></xhtml:div><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('bizData1')/aPPLYFORRANGE" label-ref="data('bizData1')/dETECTIONRANGECNAME" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="dETECTIONRANGECNAME" id="xuiLabel5"></xforms:label>
   <xforms:value ref="DETECTION_RANGE_TYPE" id="default37"></xforms:value>
   <xforms:itemset id="default38" data="bizData4" auto-load-data="true">
  
  <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default45"></xforms:column>
  <xforms:column ref="dETECTIONRANGECNAME" id="default46"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('bizData1')/aPPLYFORDEVICETYPE" label-ref="data('bizData1')/dEVICETYPECNAME" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="dEVICETYPECNAME" id="xuiLabel2"></xforms:label>
   <xforms:value ref="dEVICETYPE" id="default4"></xforms:value>
   <xforms:itemset id="default5" data="bizData2" auto-load-data="true">
  
  
  
  
  
  
  
  
  <xforms:column ref="dEVICETYPE" visible="false" id="default23"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default24"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="bizData1">
   <item name="save-item" id="barItem2"></item>
   <item name="delete-item" id="barItem3"></item>
   <item name="refresh-item" id="barItem4"></item>
   <item name="filter-pro-item" id="customBarItem1"></item>
   </xui:bar></xhtml:div></xui:view></xui:view>  
  <xui:resource/> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity5.js"></xhtml:script></resource></xui:window>
