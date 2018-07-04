<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:219px;left:434px;">
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="relationIndexD" concept="RELATIONSHIP_INDEX_AND_CASE"
      store-type="grid" onAfterRefresh="relationIndex.relationIndexDAfterRefresh">
      <reader id="default1" action="/metrodetection/system_code/logic/action/querySubRelationIndexAction"/>
    </data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"/>
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1">
        <xui:place control="RelationG" id="controlPlace2" style="position:absolute;left:5px;width:707px;top:20px;height:306px;"/>
      <xui:place control="windowReceiver1" id="controlPlace3" style="position:absolute;top:172px;left:324px;"></xui:place></layout>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="RelationG" data="relationIndexD">
        <xui:column id="gridColumn7" ref="sUBTESTCASENAME" label="测试子用例名称" type="ed" width="100px"></xui:column><xui:column id="gridColumn9" ref="iNDEXSYSTEMNAME" label="指标库名称" type="ed" width="100px"></xui:column><xui:column id="gridColumn10" ref="iNDEXIDCNAME" label="指标名称" type="ed" width="100px"></xui:column><xui:column id="gridColumn6" ref="bUSINESSIDCNAME" label="业务类型" type="ro" width="100px"></xui:column>
  
  <xui:column id="gridColumn8" ref="iNDEXVALUE" label="指标值公式" type="ed" width="100px"></xui:column>
  
  
  <xui:column id="gridColumn11" ref="dETECTIONOBJECTCNAME" label="对象类别" type="ro" width="100px"></xui:column>
  <xui:column id="gridColumn12" ref="dEVICETYPECNAME" label="检测对象" type="ro" width="100px"></xui:column></xhtml:div>
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1" onReceive="relationIndex.windowReceiver1Receive"></xhtml:div></xui:view>
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="relationIndex.js"></xhtml:script></xui:resource> 
</xui:window>
