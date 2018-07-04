<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:63px;width:162px;top:367px;left:228px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="laboratoryData" concept="TEST_PROJECT_INFO" confirm-refresh="false" relations="lINEID,lineName"><creator id="default1"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/selectLineAction"></reader>
  <writer id="default3"></writer>
  <rule id="dataBizRule2" relation="lINEID" readonly="true()"></rule></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[mainActivity.model1Load(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="proData" concept="JINDU_VIEW_NEW" is-tree="true" store-type="grid" limit="-1" confirm-refresh="false" relations="JINDU_VIEW_NEW,FID,FPARENTID,TNAME,TPERSON,TPERSONNAME,TSTART,TEND,TEXECUTE,TCHECK,ROOMID,ROOMAREA,TOOLNO,LINEID,TASKID"><creator id="default4" action="/metrodetection/system_code/logic/action/createJINDU_VIEW_NEWAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/queryJINDU_VIEW_NEWAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveJINDU_VIEW_NEWAction"></writer>
  <tree-option id="default7" parent-relation="FPARENTID"></tree-option>
  <rule id="dataBizRule1" concept="JINDU_VIEW_NEW" readonly="true()"></rule></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="177px" mode="horz" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="height:100%;width:100%;line-height:20px;" has-drag-bar="true">
   <xhtml:div region="left" id="div1"><xui:place control="grid1" id="controlPlace1" style="height:100%;width:100%;line-height:normal;"></xui:place></xhtml:div>
   <xhtml:div region="right" id="div2"><xui:place control="grid2" id="controlPlace2" style="height:100%;width:100%;"></xui:place></xhtml:div></xhtml:div></xui:layout> 
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="laboratoryData" onRowClick="mainActivity.grid1RowClick"><xui:column id="gridColumn1" ref="lineName" label="线路名称" type="ed" width="175px"></xui:column></xhtml:div>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid2" data="proData"><xui:column id="gridColumn2" ref="TNAME" label="名称" type="tree" width="260px"></xui:column>
  <xui:column id="gridColumn3" ref="TPERSONNAME" label="执行人" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn4" ref="TSTART" label="开始时间" type="ed" width="100px" format="yyyy-MM-dd"></xui:column>
  <xui:column id="gridColumn5" ref="TEND" label="结束时间" type="ed" width="100px" format="yyyy-MM-dd"></xui:column>
  <xui:column id="gridColumn6" ref="TEXECUTE" label="执行状态" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn7" ref="TCHECK" label="检查结果" type="ed" width="100px"></xui:column></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>
