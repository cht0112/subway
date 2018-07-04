<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:160px;left:445px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="subTestCaseD" concept="SUB_TEST_CASE_BASE_INFO" onAfterRefresh="relationIndex.subTestCaseDAfterRefresh" filter-relations="iNDEXIDCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,rANGEIDCNAME,tESTCASEVER,tESTCASEID,sUBTESTCASEID"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createSUB_TEST_CASE_BASE_INFOAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/querySubCaseRelationIndexAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveSUB_TEST_CASE_BASE_INFOAction"/>  
      <calculate-relation relation="calSeq" id="calculate-relation1" type="xsd:string"/>  
      <calculate-relation relation="checkBox" id="calculate-relation2"/>  
      <calculate-relation relation="calBusinessId" id="calculate-relation3" type="xsd:string"/>  
      <calculate-relation relation="indexNo" id="calculate-relation4" type="xsd:string"/> 
    <calculate-relation relation="businessId" id="calculate-relation5" type="xsd:string"></calculate-relation></data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="xml"
      columns="indexNo,businessId,indexValue,indexDes,bUSINESSIDCNAME" src="" auto-load="false"
      id="businessCD" store-type="simple"> 
      <rows xmlns="" id="default4">  
        <row id="default5"> 
          <cell id="default6"/>  
          <cell id="default7"/>  
          <cell id="default8"/>  
          <cell id="default9"/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="indexValueD" concept="INDEX_SYSTEM_VALUE"
      store-type="simple"> 
      <creator id="default10" action="/metrodetection/system_code/logic/action/createINDEX_SYSTEM_VALUEAction"/>  
      <reader id="default11" action="/metrodetection/system_code/logic/action/myQueryIndexSystemValueParamAction"/>  
      <writer id="default12" action="/metrodetection/system_code/logic/action/saveINDEX_SYSTEM_VALUEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="relationIndexD" concept="RELATIONSHIP_INDEX_AND_CASE" store-type="simple" direct-delete="true" confirm-delete="false" confirm-refresh="false"><creator id="default24" action="/metrodetection/system_code/logic/action/createRELATIONSHIP_INDEX_AND_CASEAction"></creator>
  <reader id="default25" action="/metrodetection/system_code/logic/action/myQueryRelationIndexCaseAction"></reader>
  <writer id="default26" action="/metrodetection/system_code/logic/action/saveRELATIONSHIP_INDEX_AND_CASEAction"></writer></data>
  <xforms:action id="action1" ev:event="onload"><xforms:script id="xformsScript1"><![CDATA[relationIndex.model1Load(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"/> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xui:place control="grid1" id="controlPlace3" style="position:absolute;top:55px;left:-2px;width:100%;height:89%;"/>  
        <!--  
        <xui:place control="gridSelect5" id="controlPlace5" style="position:absolute;top:23px;left:196px;"/>
      -->  
        <xui:place control="toolbars1" id="controlPlace2" style="position:absolute;height:41px;width:558px;left:2px;top:8px;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid1" data="subTestCaseD" onRowDblClick="relationIndex.grid1RowDblClick" onRowValueChanged="relationIndex.grid1RowValueChanged"> 
        <xui:column id="gridColumn11" ref="checkBox" label="#master_checkbox" type="ch"
          width="51px" align="center"/>  
        <xui:column id="gridColumn10" ref="calSeq" label="序号" type="ro" width="38px"
          align="center" show-index="true"/>  
        <xui:column id="gridColumn5" ref="tESTCASEVER" label="测试用例版本" type="ro" width="100px"/>  
        <xui:column id="gridColumn6" ref="tESTCASEID" label="测试用例ID" type="ro" width="100px"/>  
        <xui:column id="gridColumn7" ref="sUBTESTCASEID" label="测试子用例ID" type="ro"
          width="100px"/>  
        <xui:column id="gridColumn2" ref="dEVICETYPECNAME" label="检测对象" type="ro"
          width="100px"/>  
        <xui:column id="gridColumn3" ref="dETECTIONRANGECNAME" label="检测方面类别" type="ro"
          width="100px"/>  
        <xui:column id="gridColumn4" ref="rANGEIDCNAME" label="检测方面" type="ro" width="100px"/>  
        <xui:column id="gridColumn1" ref="iNDEXIDCNAME" label="指标名称" type="ro" width="100px"/>  
        <xui:column id="gridColumn12" ref="calBusinessId" type="select" width="140px"
          label="选择指标值" editor="gridSelect6"> 
          <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
            label-separator="," value-separator="," ext-separator="," id="gridSelect6"
            ref="data('subTestCaseD')/indexNo" label-ref="data('subTestCaseD')/calBusinessId"
            onCloseup="relationIndex.gridSelect6Closeup"
            onDropdown="relationIndex.gridSelect6Dropdown" multi-select="false" ext-ref="data('subTestCaseD')/businessId"> 
            <xforms:label ref="iNDEXVALUE" id="default79"/>  
            <xforms:value ref="INDEX_SYSTEM_VALUE" id="default80"/>  
            <xforms:itemset id="default81" data="indexValueD" auto-load-data="true"> 
                
                
                
               
            
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="INDEX_SYSTEM_VALUE" visible="false" id="default61"></xforms:column>
  <xforms:column ref="bUSINESSIDCNAME" id="default62"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default63"></xforms:column>
  <xforms:column ref="rANGEIDCNAME" id="default64"></xforms:column>
  <xforms:column ref="iNDEXVALUE" id="default65"></xforms:column>
  <xforms:column ref="iNDEXVALUEDESC" id="default66"></xforms:column>
  <xforms:column ref="bUSINESSID" visible="false" id="default67"></xforms:column></xforms:itemset> 
          <xforms:ext-value id="default23" ref="bUSINESSID"></xforms:ext-value></xhtml:div> 
        </xui:column> 
      <xui:column id="gridColumn8" ref="iNDEXID1" label="指标ID" type="ed" width="100px" visible="false"></xui:column></xhtml:div>  
      <!--<xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect5" ref="data('businessCD')/indexNo"
        label-ref="data('businessCD')/businessId"> 
        <xforms:label ref="bUSINESSIDCNAME" id="default64"/>  
        <xforms:value ref="INDEX_SYSTEM_VALUE" id="default65"/>  
        <xforms:itemset id="default66" data="indexValueD" auto-load-data="true"> 
          <xforms:column ref="INDEX_SYSTEM_VALUE" id="default77"/>  
          <xforms:column ref="bUSINESSIDCNAME" id="default78"/>
        </xforms:itemset>
      </xhtml:div>
    -->  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="subTestCaseD"> 
          <item id="barItem2"> 
            <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
              <xforms:label> <![CDATA[保存]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[relationIndex.saveRalationClick(event)]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-pro-item" id="customBarItem1"/>  
          <item name="separator" id="customBarItem2"/>  
          <item name="custom-page-item" id="customPageItem1"/> 
        </xui:bar> 
      </xhtml:div> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="relationIndex.js"/> 
  </xui:resource> 
</xui:window>
