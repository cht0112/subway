<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;height:auto;top:190px;left:532px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="false" id="indexData" concept="INDEX_SYSTEM_VALUE"
      confirm-refresh="false" onValueChanged="zhibiaoDialog.indexDataValueChanged"> 
      <reader id="default1" action="/metrodetection/system_code/logic/action/newMulIndexQueryAction"/>  
      <calculate-relation relation="calIndex" id="calculate-relation1" type="xsd:string"/>  
      <calculate-relation relation="recCB" id="calculate-relation2" type="xsd:string"/>  
      <creator id="default2" action="/metrodetection/system_code/logic/action/createINDEX_SYSTEM_VALUEAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveINDEX_SYSTEM_VALUEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="indexFilterData" concept="INDEX_SYSTEM_PARAMETER"> 
      <reader id="default11" action="/metrodetection/system_code/logic/action/queryINDEX_SYSTEM_PARAMETERAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="xml"
      columns="value,name" src="" auto-load="false" id="cData" auto-new="true" store-type="simple"/>  
    <xforms:action id="action1" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript1"><![CDATA[zhibiaoDialog.model1XBLLoaded(event)]]></xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"> 
          <xui:place control="view1" id="controlPlace2" style="height:100%;width:100%;"/> 
        </center> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xui:place control="grid1" id="controlPlace3" style="position:absolute;left:6px;width:100%;top:43px;height:91%;"/>  
        <xui:place control="toolbars1" id="controlPlace4" style="position:absolute;height:37px;left:6px;width:1068px;top:3px;"/> 
      <xui:place control="windowDialog2" id="controlPlace1" style="position:absolute;top:194px;left:234px;"></xui:place></layout>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid1" data="indexData"> 
        <xui:column id="gridColumn25" ref="calIndex" label="序号" type="ro" width="29px"
          show-index="true"/>  
        <xui:column id="gridColumn24" ref="INDEXNO" type="ro" width="56px" label="指标序号"
          align="center"/>  
        <xui:column id="gridColumn12" ref="INDEXID" label="指标ID" type="ro" width="48px"
          align="center"/>  
        <xui:column id="gridColumn23" ref="INDEXIDCNAME" label="指标名称" type="ro" width="108px"/>  
        <xui:column id="gridColumn16" ref="DETECTIONRANGECNAME" label="指标检测方面类别" type="ro"
          width="119px"/>  
        <xui:column id="gridColumn17" ref="RANGEIDCNAME" type="ro" width="100px" label="检测方面"/>  
        <xui:column id="gridColumn18" ref="DETECTIONOBJECTCNAME" label="应用检测对象类型"
          type="ro" width="114px"/>  
        <xui:column id="gridColumn19" ref="DEVICETYPECNAME" label="应用检测对象" type="ro"
          width="100px"/>  
        <xui:column id="gridColumn20" ref="BUSINESSIDCNAME" label="指标应用业务类型" type="ro"
          width="120px"/>  
        <xui:column id="gridColumn13" ref="INDEXVALUE" label="指标值公式" type="ed" width="116px"/>  
        <xui:column id="gridColumn14" ref="INDEXVALUEDESC" label="指标值文字描述" type="ed"
          width="184px"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="indexData"> 
          <!--          <item name="save-item" id="barItem2"/>  -->  
          <item> 
            <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
              <xforms:label> <![CDATA[保存]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script><![CDATA[zhibiaoDialog.saveMasClick(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem4"/> 
        </xui:bar>  
        <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar"
          id="customBar1"> 
          <item id="customBarItem2"><xhtml:label id="label1" class="xui-label"><![CDATA[选择指标库]]></xhtml:label></item><item id="customBarItem11"> 
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
              label-separator="," value-separator="," ext-separator="," id="gridSelect2"
              ref="data('cData')/value" label-ref="data('cData')/name" onCloseup="zhibiaoDialog.gridSelect2Closeup"> 
              <xforms:label ref="iNDEXSYSTEMNAME" id="default17"/>  
              <xforms:value ref="INDEX_SYSTEM_PARAMETER" id="default18"/>  
              <xforms:itemset id="default19" data="indexFilterData" auto-load-data="true"> 
                <xforms:column ref="INDEX_SYSTEM_PARAMETER" visible="false" id="default21"/>  
                <xforms:column ref="iNDEXSYSTEMNAME" id="default22"/> 
              </xforms:itemset> 
            </xhtml:div> 
          </item>  
          <item id="customBarItem12"> 
            <xhtml:div component="/UI/system/components/excel.xbl.xml#export" action="/SA/excel/logic/action/exportExcel"
              id="excelExport1" data="indexData" from="UI" label-relations="序号,指标序号,,,,,,,,,,,,"
              relations="INDEXNO:,INDEXID:,INDEXIDCNAME:,DETECTIONRANGECNAME:,RANGEIDCNAME:,DETECTIONOBJECTCNAME:,DEVICETYPECNAME:,BUSINESSIDCNAME:,INDEXVALUE:,INDEXVALUEDESC:,INDEXSYSTEMNO:"
              use-config-dlg="false" appearance="image-text"/> 
          </item>  
          <item id="customBarItem4"> 
            </item>  
          <item id="customBarItem1"> 
            <xforms:trigger id="trigger2" appearance="image-text" image-text-mode="LR"
              src="/UI/system/components/excel/images/import.gif" dis-src="/UI/system/components/excel/images/unimport.gif"> 
              <xforms:label id="default4"><![CDATA[导入Excel]]></xforms:label>  
              <xforms:action id="action2" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript2"><![CDATA[zhibiaoDialog.trigger2Click(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </xui:bar> 
      </xhtml:div> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="400px" height="180px" modal="true" id="windowDialog2" url="/UI/metrodetection/testing_standard/process/zhibiaokuvalueProcess/importExcelDialog.w" onClose="zhibiaoDialog.windowDialog2Close"></xhtml:div></xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="zhibiaoDialog.js"/> 
  </xui:resource> 
</xui:window>
