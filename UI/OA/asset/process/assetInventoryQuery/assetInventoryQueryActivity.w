<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:164px;left:97px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dInventory" style=";" concept="OA_AS_InventoryD" limit="40" filter-relations="fInventoryNO,fDeptName,fPersonName,fDate,fDescription,fRemark,fCode,fName"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASInventoryRecordAction"/>  
      <calculate-relation relation="calSeq" id="calculate-relation1"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table id="table" class="xui-container" style="height:100%;width:100%;table-layout:fixed;"
        component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="tr1"> 
          <xhtml:td id="td1" height="30px"> 
            <xui:place control="toolbars4" id="controlPlace9"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr2"> 
          <xhtml:td id="td3"> 
            <xui:place control="vInventory" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars4"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"
        data="dInventory" mode="IMG_TXT_LR"> 
        <item name="refresh-item" id="barItem16"/>  
        <item name="filter-item" id="barItem17"/>  
        <item name="separator" id="separatorItem4"/>  
        <item name="custom-page-item" id="customPageItem2" page-count="5"/>  
        <item name="separator" id="separatorItem5" style=";"/>  
        <item id="customBarItem1"> 
        	<xhtml:div style="width:28px;background-color:transparent;text-align:center;">
          <xhtml:label id="label1" class="xui-label" style="width:28px;background-color:transparent;">时间</xhtml:label> 
        	</xhtml:div>
        </item>  
        <item id="customBarItem1"> 
          <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"
            style="width:80px" id="extDateFilter" filter-data="dInventory" filter-date-relation1="fDate"
            default-select="5"/> 
        </item>  
        <item id="customBarItem1"> 
        </item>  
        <item id="customBarItem4"> 
          <xforms:trigger id="trigger1" appearance="image" src="/UI/OA/common/images/search.png"> 
            <xforms:label id="xuiLabel1">trigger</xforms:label> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vInventory" class="xui-container"> 
      <layout id="layout1" style="width:100%;height:100%;"> 
        <xui:place control="grdInventory" id="controlPlace3" style="height:100%;width:100%;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="grdInventory" data="dInventory"> 
        <column id="gridColumn1" ref="calSeq" type="ro" width="30" label="序号"
          show-index="true"/>  
        <column id="gridColumn8" ref="fCode" label="资产编号" type="html" width="97"
          onRender="grdInventoryFCodeRender"/>  
        <column id="gridColumn9" ref="fName" label="资产名称" type="ro" width="123"/>  
        <column id="gridColumn5" ref="fDate" label="清查日期" type="date" width="80"
          readonly="true" align="center"/>  
        <column id="gridColumn2" ref="fInventoryNO" label="清查单号" type="ro" width="120"/>  
        <column id="gridColumn3" ref="fDeptName" label="清查部门" type="ro" width="100"
          align="center"/>  
        <column id="gridColumn4" ref="fPersonName" label="清查人" type="ro" width="70"
          align="center"/>  
        <column id="gridColumn6" ref="fDescription" label="描述" type="txt" width="223"
          readonly="true"/>  
        <column id="gridColumn7" ref="fRemark" label="备注" type="txt" width="138"
          readonly="true"/> 
      </xhtml:div> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="assetInventoryQueryActivity.js"/>  
    <xhtml:link rel="stylesheet" type="text/css" id="htmlLink1" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
