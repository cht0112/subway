<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:89px;left:130px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dManageType" concept="SA_OPManageType" limit="-1"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPManageTypeAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1" type="xsd:string"/> 
    <writer id="default2"></writer>
  <creator id="default3"></creator>
  <rule id="dataBizRule1" concept="SA_OPManageType" readonly="data('dManageType')/sIsSystem = 1"></rule>
  <rule id="dataBizRule2" relation="sName" required="true()" alert="'业务管理类型名称不能为空！'"></rule>
  <rule id="dataBizRule3" relation="sCode" required="true()" alert="'业务管理类型编码不能为空！'"></rule></data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px"> 
        <top size="35px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="2"><xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="selectManageType.inputSearchKeydown(event)" style="width:100px;;"></xhtml:input>
  <xui:place control="imageSearch" id="controlPlace6" style="width:25px;height:25px;"></xui:place></xhtml:div></top>  
        <center id="borderLayout-center1"> 
          <xui:place control="gridManageType" id="controlPlace2" style="height:100%;width:100%;"/> 
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
            
           
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace5" /><xui:place control="btnCancel" id="controlPlace4" /></xhtml:div></bottom> 
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace3" style="top:116px;left:336px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridManageType" data="dManageType" onRowDblClick="selectManageType.gridManageTypeRowDblClick" edit-mode="false" class="grid-compact" space-column="false"> 
      <xui:column id="gridColumn3" ref="calcIndex" type="ro" width="30px" label=" "
        show-index="true"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="*"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectManageType.receiverReceive"/>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[selectManageType.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[selectManageType.btnOKClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger> 
  <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" class="button-yellow" icon-class="icon-system-search">
   <xforms:label id="xuiLabel3">搜索</xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">selectManageType.imageSearchClick(event)</xforms:script></xforms:action> </xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="selectManageType.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>
