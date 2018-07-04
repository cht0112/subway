<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:203px;height:auto;left:178px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrg" concept="SA_OPOrg" store-type="grid" confirm-refresh="false"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <writer id="default2" action="/SA/OPM/logic/action/saveOPOrgAction"/>  
      <creator id="default3" action="/SA/OPM/logic/action/createOPOrgAction"/>  
      <calculate-relation relation="calcOrgKind" id="calculate-relation3"/>  
      <calculate-relation relation="calcValidState" id="calculate-relation1"/>  
      <rule id="dataBizRule6" relation="calcOrgKind" calculate="call('justep.OpmUtils.getOrgKindLabel',data('dOrg')/sOrgKindID)"
        readonly="true()"/>  
      <rule id="dataBizRule1" relation="calcValidState" calculate="call('justep.OpmUtils.getValidStateLabel', data('dOrg')/sValidState)"
        readonly="true()"/>  
      <rule id="dataBizRule3" concept="SA_OPOrg" readonly="call('orgDetail.getReadOnly')"/>
  <rule id="dataBizRule4" relation="sName" required="true()" alert="'名称不能为空！'"></rule>
  <rule id="dataBizRule5" relation="sCode" required="true()" alert="'编码不能为空！'"></rule> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dParent" concept="SA_OPOrg" store-type="simple"> 
      <reader id="default4" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <rule id="dataBizRule2" relation="sFName" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" class="xui-container"> 
    <xforms:input id="inputParentFName" ref="data('dParent')/sFName" />  
    <xforms:input id="inputName" ref="data('dOrg')/sName" />  
    <xforms:input id="inputCode" ref="data('dOrg')/sCode" />  
    <xforms:trigger id="btnOK"> 
      <xforms:label id="xuiLabel1">确定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript2">orgDetail.btnOKClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnCancel"> 
      <xforms:label id="xuiLabel2">取消</xforms:label>    
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript1">orgDetail.btnCancelClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="orgDetail.receiverReceive" />  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridOrg" data="dOrg" />  
    <xui:layout style="position:relative;height:200px;width:300px;" id="rootLayout" type="absolute"> 
      <xhtml:div id="div1" style="position:absolute;background-color:#F8F8F8;width:279px;top:61px;height:22px;left:49px;" class="xui-container"> 
         
      <xui:place control="inputParentFName" id="controlPlace1" style="border-style:none none none none;width:82%;height:100%;" /></xhtml:div>  
      <xui:place control="inputName" id="controlPlace3" style="position:absolute;width:147px;top:101px;left:50px;" />  
      <xui:place control="inputCode" id="controlPlace4" style="position:absolute;width:147px;top:148px;left:52px;" />  
      <xui:place control="receiver" id="controlPlace8" style="position:absolute;top:210px;left:241px;" />  
      <xui:place control="gridOrg" id="controlPlace9" style="width:200px;height:100px;position:absolute;top:384px;left:94px;display:none;" />  
      <xui:place control-label="inputParentFName" id="controlLabel2" style="position:absolute;top:65px;left:8px;" label="上级" />  
      <xui:place control-label="inputName" id="controlLabel3" style="position:absolute;top:106px;left:9px;" />  
      <xui:place control-label="inputCode" id="controlLabel9" style="position:absolute;top:153px;left:10px;" />  
      <xui:place control="btnOK" id="controlPlace6" style="position:absolute;width:75px;top:101px;left:216px;" />  
      <xui:place control="btnCancel" id="controlPlace7" style="position:absolute;width:75px;top:147px;left:218px;" />  
    </xui:layout> 
  </xui:view><xui:resource id="resource1"> 
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript1" src="orgDetail.js"/> 
  </xui:resource> 
</xui:window>
