<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:373px;height:auto;left:470px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="laboratoryData" concept="DETECTION_TOOL_INFO"><creator id="default1" action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="proData" concept="JINDU_VIEW" limit="-1" is-tree="true"><creator id="default4" action="/metrodetection/system_code/logic/action/createJINDU_VIEWAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryJINDU_VIEWAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveJINDU_VIEWAction"></writer>
  <tree-option id="default7" parent-relation="FPARENTID"></tree-option></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[mainActivity2.model1Load(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="15%" mode="horz" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="height:738px;width:792px;">
   <xhtml:div region="left" id="div1"><xui:place control="grid2" id="controlPlace2" style="height:718px;width:113px;"></xui:place></xhtml:div>
   <xhtml:div region="right" id="div2"><xui:place control="grid1" id="controlPlace1" style="height:730px;width:625px;"></xui:place></xhtml:div></xhtml:div></xui:layout> 
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="proData"><xui:column id="gridColumn1" ref="TNAME" label="名称" type="tree" width="100px"></xui:column>
  <xui:column id="gridColumn3" ref="TPERSONNAME" label="执行人" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn7" ref="TSTART" label="开始时间" type="ed" width="100px"></xui:column><xui:column id="gridColumn4" ref="TEND" label="结束时间" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn5" ref="TEXECUTE" label="执行状态" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn6" ref="TCHECK" label="检查结果" type="ed" width="100px"></xui:column>
  </xhtml:div>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid2" data="laboratoryData" onRowClick="mainActivity2.grid2RowClick"><xui:column id="gridColumn8" ref="tOOLCNAME" label="工具中文名称" type="ed" width="100px"></xui:column></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity2.js"></xhtml:script></xui:resource> 
</xui:window>
