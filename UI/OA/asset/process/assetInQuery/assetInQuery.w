<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:175px;left:134px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" xui:update-mode="whereVersion" auto-load="false" id="dAssetInM" concept="OA_AS_InM" order-by="fCreateTime:desc" auto-new="false" filter-relations="fNO,fDutyDeptName,fDutyPsnName,fDate,fMode,fAmount,fStateName,fRemark"> 
      <reader action="/OA/asset/logic/action/queryASInMAction"/>  
      <calculate-relation relation="recNo"/>  
      <rule id="dataBizRule1" concept="OA_AS_InM" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="false" id="dAssetInStatus" store-type="simple"> 
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="default3">未完成</cell>  
          <cell id="default4">0</cell> 
        </row>  
        <row id="default5"> 
          <cell id="default6">已完成</cell>  
          <cell id="default7">1</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetInList"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar" data="dAssetInM"> 
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/>  
        <item name="separator"/>  
        <item name="custom-page-item"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem1"> 
        <xhtml:div style="width:28px;background-color:transparent;">
          <xhtml:label id="label1" class="xui-label" style="width:28px;background-color:transparent;">时间</xhtml:label> 
        </xhtml:div>
        </item>  
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" style="width:80px" id="extDateFilter1" filter-data="dAssetInM" filter-date-relation1="fDate"/> 
        </item>  
        <item name="separator" id="separatorItem2"/>  
        <item id="customBarItem1"> 
        <xhtml:div style="width:55px;background-color:transparent;">
          <xhtml:label id="label1" class="xui-label" style="width:55px;background-color:transparent;">入库状态</xhtml:label>
          </xhtml:div> 
        </item>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" style="width:80px;" all-selected-label="'全部'" id="gridFilterState" default-label="'全部'" filter-data="dAssetInM" filter-relation="fState" multi-select="true" onGetCondition="assetInQuery.gridFilterStateGetCondition"> 
            <xforms:label ref="label" id="xuiLabel1"/>  
            <xforms:value ref="value" id="default8"/>  
            <xforms:itemset id="default9" data="dAssetInStatus" auto-load-data="true"> 
              <xforms:column ref="label" id="default10"/>  
              <xforms:column ref="value" visible="false" id="default11"/> 
            </xforms:itemset> 
          </xhtml:div> 
        </item>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdAssetInList" data="dAssetInM" onRowDblClick="grdAssetInListRowDblclick"> 
      <column ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
      <column ref="fNO" label="单据号" type="html" width="120" onRender="grdAssetInList_fNORender"/>  
      <column id="gridColumn1" ref="fDutyDeptName" label="责任部门" type="ro" width="100"/>  
      <column id="gridColumn2" ref="fDutyPsnName" label="责任人" type="ro" width="70"/>  
      <column id="gridColumn3" ref="fDate" label="入库日期" type="date" width="70" readonly="true"/>  
      <column id="gridColumn4" ref="fMode" label="入库方式" type="ro" width="60"/>  
      <column id="gridColumn7" ref="fStateName" label="入库状态" type="ro" width="60"/>  
      <column id="gridColumn6" ref="fAmount" label="总金额" type="ro" width="100" align="right" format="0,000.00"/>  
      <column id="gridColumn8" ref="fRemark" label="备注" type="ro" width="214"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <place control="tbrAssetInList"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="grdAssetInList" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="assetInQuery.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
