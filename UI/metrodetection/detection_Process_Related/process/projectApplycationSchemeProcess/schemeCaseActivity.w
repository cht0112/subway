<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xforms:model id="model1" style="height:auto;left:185px;top:147px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="schemeCaseBD" concept="TEST_SCHEME_CASE_INFO" confirm-refresh="false" filter-relations="tESTCASEVER,tESTCASENAME,bUSINESSIDCNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME"><reader id="default1" action="/metrodetection/system_code/logic/action/myQueryTestSchemeCaseAction"></reader></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="schemeCaseWR" id="controlPlace1" style="position:absolute;top:175px;left:292px;"></xui:place>
  <xui:place control="view1" id="controlPlace2" style="height:100%;width:100%;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="schemeCaseWR" onReceive="schemeCaseActivity.schemeCaseWRReceive"></xhtml:div>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace3" style="position:absolute;width:400px;height:25px;top:1px;left:-2px;"></xui:place>
  <xui:place control="grid1" id="controlPlace4" style="position:absolute;left:2px;top:39px;width:632px;height:326px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="schemeCaseBD">
   <item name="refresh-item" id="barItem4"></item>
   <item name="filter-pro-item" id="customBarItem1"></item>
   <item name="separator" id="customBarItem2"></item>
   <item name="pre-item" id="barItem6"></item>
   <item name="next-item" id="barItem7"></item>
   <item name="separator" id="customBarItem3"></item>
   <item name="custom-page-item" id="customPageItem1"></item></xui:bar></xhtml:div>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" header-row-height="36" row-height="36" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="schemeCaseBD"><xui:column id="gridColumn2" ref="tESTCASENAME" label="测试用例名称" type="ro" width="100px"></xui:column><xui:column id="gridColumn1" ref="tESTCASEVER" label="测试用例版本" type="ro" width="100px"></xui:column>
  
  <xui:column id="gridColumn3" ref="bUSINESSIDCNAME" label="业务类型" type="ro" width="100px"></xui:column>
  <xui:column id="gridColumn4" ref="bUSINESSSTAGECNAME" label="业务阶段" type="ro" width="100px"></xui:column>
  <xui:column id="gridColumn5" ref="dETECTIONOBJECTCNAME" label="检测对象类别" type="ro" width="100px"></xui:column>
  <xui:column id="gridColumn6" ref="dEVICETYPECNAME" label="检测对象" type="ro" width="100px"></xui:column></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="schemeCaseActivity.js"></xhtml:script></xui:resource> 
</xui:window>
