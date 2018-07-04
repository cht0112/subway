<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:175px;left:134px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" xui:update-mode="whereVersion" auto-load="false" id="dAssetIn" concept="OA_AS_InD" order-by="fCode:asc,fInDate:desc,fNO:desc" filter-relations="fCode,fKind,fName,fSpecType,fUnit,fBuyApplyNO,fAmount,fIsCheckName,fIsInName,fDate,fRemark,fNO,fInDate,fMode,fDutyDeptName,fDutyPsnName"> 
      <reader action="/OA/asset/logic/action/queryASInDetailAction"/>  
      <calculate-relation relation="recNo"/>  
      <filter name="isInFilter" id="filter1">OA_AS_InD.fIsIn=1</filter> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetInList"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar" data="dAssetIn"> 
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/>  
        <item name="separator"/>  
        <item name="custom-page-item" page-count="5"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem1"> 
        <xhtml:div style="width:30px;height:14px;background-color:transparent;">
          <xhtml:label id="label1" class="xui-label" style="width:30px;height:14px;background-color:transparent;">时间</xhtml:label> 
        </xhtml:div>
        </item>  
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" style="width:80px" id="extDateFilter" filter-data="dAssetIn" filter-date-relation1="m.fDate"/> 
        </item>  
        <item id="barItem2"> 
          </item>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdAssetInList" data="dAssetIn" onRowDblClick="grdAssetInListRowDblclick"> 
      <column label="序号" width="30" ref="recNo" show-index="true" align="center" type="ro"/>  
      <column label="责任部门" width="100" ref="fDutyDeptName" type="ro"/>  
      <column label="责任人" width="70" ref="fDutyPsnName" type="ro"/>  
      <column label="入库日期" width="70" ref="fInDate" type="date" readonly="true"/>  
      <column label="资产编号" width="90" ref="fCode" type="ro"/>  
      <column label="资产类别" width="75" ref="fKind" type="ro"/>  
      <column label="资产名称" width="75" ref="fName" type="ro"/>  
      <column label="规格型号" width="80" ref="fSpecType" type="ro"/>  
      <column label="单位" width="35" ref="fUnit" align="center" type="ro"/>  
      <column label="金额(元)" width="100" ref="fAmount" type="ro" format="0,000.00" align="right"/>  
      <column label="入库日期" width="70" ref="fDate" type="date" readonly="true"/>  
      <column label="是否验收" width="55" ref="fIsCheckName" type="ro"/>  
      <column label="入库方式" width="50" ref="fMode" type="ro"/>  
      <column label="入库单号" width="120" ref="fNO" type="ro"/>  
      <column label="请购单号" width="120" ref="fBuyApplyNO" type="ro"/> 
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
    <xhtml:script src="assetInDetailQuery.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>
