<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model" style="top:352px;height:auto;left:606px;">






   <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_BASE_INFO" id="main" limit="10" offset="0" onAfterRefreshPage="justep.MultiList._doPageChange" update-mode="whereAll">





    <calculate-relation relation="ch" type="xs:string" id="calculate-relation1"></calculate-relation>
    <creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction" id="default1_6"></creator>
    <reader action="/metrodetection/system_code/logic/action/myQueryHRInfo" id="default2_6"></reader>
    <writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction" id="default3_6"></writer></data> 
   <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_APPLICATION_INFO" id="applicationData" store-type="simple" update-mode="whereAll">




    <creator action="/metrodetection/system_code/logic/action/createTEST_APPLICATION_INFOAction" id="default1_5"></creator>
    <reader action="/metrodetection/system_code/logic/action/queryTEST_APPLICATION_INFOAction" id="default2_5"></reader>
    <writer action="/metrodetection/system_code/logic/action/saveTEST_APPLICATION_INFOAction" id="default3_5"></writer></data> 
   <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROLE_ID" id="roleData" store-type="grid" update-mode="whereAll">




    <creator action="/metrodetection/system_code/logic/action/createROLE_IDAction" id="default5_2"></creator>
    <reader action="/metrodetection/system_code/logic/action/myQueryAllRoleOfOperatorAction" id="default6_2"></reader>
    <writer action="/metrodetection/system_code/logic/action/saveROLE_IDAction" id="default7_2"></writer></data> 
   <xforms:action ev:event="onload" id="action1_6">


    <xforms:script id="xformsScript1_6">

hrDialog.modelLoad(event)</xforms:script></xforms:action> 
   <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROLE_ID" id="rData" update-mode="whereAll">




    <creator action="/metrodetection/system_code/logic/action/createROLE_IDAction" id="default3_3"></creator>
    <reader action="/metrodetection/system_code/logic/action/queryROLE_IDAction" id="default4_3"></reader>
    <writer action="/metrodetection/system_code/logic/action/saveROLE_IDAction" id="default5_3"></writer></data> </xforms:model><xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="hrOccupyDialog.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:310px;left:599px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="hrView" id="controlPlace2" style="width:566px;height:343px;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" style="width:75px;float:right" type="button" value="确定" onclick="hrOccupyDialog.inputbutton1Click(event)"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="hrView" class="xui-container">
   <layout type="absolute" style="position:relative;width:566px;height:343px;" id="layout1"><xui:place control="grid1" id="controlPlace3" style="position:absolute;width:624px;top:26px;height:238px;left:56px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="main"><xui:column id="gridColumn5" ref="ch" label="ch" type="ed" width="45px"></xui:column><xui:column id="gridColumn1" ref="OPERATOR_NAME" label="姓名" type="ed" width="100"></xui:column>
  <xui:column id="gridColumn2" ref="OFFICE_ID_CNAME" label="职位中文名称" type="ed" width="100"></xui:column>
  <xui:column id="gridColumn3" ref="ROLE_ID" label="角色编号" type="ed" width="100"></xui:column>
  <xui:column id="gridColumn4" ref="ROLE_NAME" label="角色名称" type="ed" width="100"></xui:column>
  </xhtml:div></xui:view></xui:view>  
  <xui:resource/> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="hrOccupyDialog.js"></xhtml:script></resource></xui:window>
