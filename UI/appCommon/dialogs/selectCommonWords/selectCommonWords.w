<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:179px;height:auto;left:129px;">
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="dCommonWords" concept="AP_CommonWords">
      <reader id="default1" action="/appCommon/logic/action/queryCommonWordsAction"/>  
      <writer id="default2" action="/appCommon/logic/action/saveCommonWordsAction"/>  
      <creator id="default3" action="/appCommon/logic/action/createCommonWordsAction"/>
    </data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;top:;" id="rootLayout">
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <top size="35px" id="borderLayout-top1">
          <xui:place control="toolbars1" id="controlPlace1"/>
        </top>  
        <center id="borderLayout-center1">
          <xui:place control="gridCommonWords" id="controlPlace2" style="height:100%;width:100%;"/>
        <xui:place control="windowReceiver" id="controlPlace3"></xui:place></center>  
        <bottom size="35px" id="borderLayout-bottom1">
          <xhtml:button id="btnCancel" class="xui-button" style="float:right;margin-top:5px;margin-right:8px;" onclick="selectCommonWords.btnCancelClick(event)">取消</xhtml:button>  
          <xhtml:button id="btnOK" class="xui-button" style="float:right;margin-top:5px;margin-right:8px;" onclick="selectCommonWords.btnOKClick(event)">确定</xhtml:button>
        </bottom>
      </xhtml:div>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="dCommonWords"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="save-item" id="barItem2"/>  
        <item name="delete-item" id="barItem3"/>  
        <item name="separator" id="customBarItem1"/>  
        <item name="custom-page-item" id="customPageItem1"/>
      </xui:bar>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="gridCommonWords" data="dCommonWords" edit-mode="true" onRowDblClick="selectCommonWords.btnOKClick">
      <xui:column id="gridColumn1" ref="fCommonWords" label="常用语" type="ed"/>
    </xhtml:div>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver"></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="selectCommonWords.js"></xhtml:script></xui:resource> 
</xui:window>
