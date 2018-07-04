<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:218px;left:167px;">
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="standaMidD" concept="DECTION_BASED_STANDARD"
      store-type="simple" direct-delete="true" confirm-delete="false" confirm-refresh="false">
      <creator id="default1" action="/metrodetection/system_code/logic/action/createDECTION_BASED_STANDARDAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_STANDARDAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveDECTION_BASED_STANDARDAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="standardD" concept="DECTION_STANDARD_ON_INFO" onAfterRefresh="dectionStandardDetail.standardDAfterRefresh" onValueChanged="dectionStandardDetail.standardDValueChanged">
      <reader id="default4" action="/metrodetection/system_code/logic/action/queryDectionStandardInfoAction"/>  
      <calculate-relation relation="calCheckBox" id="calculate-relation1"/>  
      <calculate-relation relation="calSeq" id="calculate-relation2"/>
    </data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"/>
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1">
        <xui:place control="windowReceiver1" id="controlPlace2" style="position:absolute;top:85px;left:446px;"/>  
        <xui:place control="grid1" id="controlPlace3" style="position:absolute;height:320px;left:0px;top:40px;width:710px;"/>  
        <xui:place control="toolbars1" id="controlPlace4" style="position:absolute;left:0px;top:-1px;width:419px;height:39px;"/>
      </layout>  
      <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
        id="windowReceiver1" onReceive="dectionStandardDetail.windowReceiver1Receive"/>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid1" data="standardD" onRowValueChanged="dectionStandardDetail.grid1RowValueChanged">
        <xui:column id="gridColumn8" ref="calCheckBox" label="#master_checkbox" type="ch"
          width="27px" align="center"/>
        <xui:column id="gridColumn9" ref="calSeq" label="序号" type="ro" width="37px"
          show-index="true" align="center"/>
        <xui:column id="gridColumn11" ref="DECTION_STANDARD_ID" label="依赖标准编号" type="ro" width="100px"></xui:column><xui:column id="gridColumn15" ref="sDocName" label="文件名称" type="ed" width="100px"></xui:column><xui:column id="gridColumn10" ref="dECTIONTYPENAME" type="ro" width="100px" label="依赖标准类型"></xui:column>
  
  <xui:column id="gridColumn14" ref="cITYCODECNAME" label="依赖标准所属城市" type="ro" width="100px"></xui:column><xui:column id="gridColumn12" ref="PUBLISH_DATE" label="依赖标准发布时间" type="ro" width="102px"></xui:column>
  <xui:column id="gridColumn13" ref="STANDARD_FILE_DESC" label="依赖标准内容描述" type="ro" width="135px"></xui:column>
  
  </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="standardD"> 
          <item id="barItem2"> 
            <xforms:trigger appearance="image-text" id="saveTr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_save.gif" disabled="true"> 
              <xforms:label> <![CDATA[保存]]> </xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate">
                <xforms:script id="xformsScript1"><![CDATA[dectionStandardDetail.saveTrClick(event)]]></xforms:script>
              </xforms:action>
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-pro-item" id="customBarItem1"/>  
          <item name="separator" id="customBarItem2"/>  
          <item name="custom-page-item" id="customPageItem1" items="pre,page,next,ext"/>
        </xui:bar>
      </xhtml:div>
    </xui:view>
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="dectionStandardDetail.js"/>
  </xui:resource> 
</xui:window>
