<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:263px;left:523px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" xui:update-mode="whereVersion" auto-load="false" id="mainData" concept="OA_AS_InM" store-type="simple"> 
      <reader action="/OA/asset/logic/action/queryASInMAction"/>  
      <rule id="dataBizRule1" concept="OA_AS_InM" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" xui:update-mode="whereVersion" auto-load="true" id="subData" concept="OA_AS_InD" store-type="simple" order-by="fCode:asc"> 
      <reader action="/OA/asset/logic/action/queryASInDAction"/>  
      <calculate-relation relation="recCB"/>  
      <rule id="dataBizRule2" concept="OA_AS_InD" readonly="true()"/>  
      <master id="master1" data="mainData" relation="fMasterID"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view id="vAssetInDetail"> 
      <xforms:output id="optNO" ref="data('mainData')/fNO" auto-size="true" style="background-color:transparent;"/>  
      <xforms:output id="optDeptName" ref="data('mainData')/fDutyDeptName" auto-size="true"/>  
      <xforms:output id="optPsnName" ref="data('mainData')/fDutyPsnName" auto-size="true"/>  
      <xforms:output ref="data('mainData')/fDate" id="iptDate" format="yyyy-MM-dd" auto-size="true"/>  
      <xforms:output id="optMode" ref="data('mainData')/fMode" auto-size="true"/>  
      <xforms:textarea ref="data('mainData')/fRemark" id="taRemark" auto-size="true"/>  
      <xforms:output id="optState" ref="data('mainData')/fStateName" type="ro"/>  
      <xforms:output id="optAmount" ref="data('mainData')/fAmount" format="format-number('0,000.00')"/>   
      <xui:view id="vGrdAssetInD"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetInD" data="subData"> 
          <column ref="序号" type="ro" width="10" show-index="true"/>  
          <column ref="fKind" label="资产类别" type="ro" width="80"/>  
          <column id="gridColumn2" ref="fCode" label="资产编号" type="ro" width="120"/>  
          <column id="fName" ref="fName" label="资产名称" type="ro" width="120"/>  
          <column id="fSpecType" ref="fSpecType" label="规格型号" type="ro" width="80"/>  
          <column ref="fUnit" label="单位" type="ro" width="35" align="center"/>  
          <column label="金额(元)" width="100" ref="fAmount" type="ro" align="right" format="0,000.00"/>  
          <column id="gridColumn6" ref="fDate" label="入库日期" type="ro" width="70"/>  
          <column label="入库状态" width="55" ref="fIsInName" type="ro"/>  
          <column label="验收状态" width="55" ref="fIsCheckName" type="ro"/>  
          <column id="gridColumn5" ref="fBuyApplyNO" label="采购单" type="html" width="120" onRender="grdAssetInD_fBuyApplyNORender"/>  
          <column id="gridColumn5" ref="fCheckNO" label="验收单" type="html" width="120" onRender="grdAssetInD_fCheckNORender"/>  
          <column label="备注" width="150" ref="fRemark" type="ro"/> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="grdAssetInD" style="width:100%;height:100%;"/> 
        </xui:layout> 
      </xui:view>  
      <xui:layout style="height:100%;" type="excel" src="assetInViewDialog.xls"> 
        <place control="vGrdAssetInD"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table"> 
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vAssetInDetail"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="资产验收单" width="550px" height="400px" modal="true" id="dlgInCheckInfo" url="/OA/asset/process/dialog/assetInCheckInfo/assetInCheckInfo.w" onSend="dlgAssetInCheckSend" reload-on-open="true"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="assetInViewDialog.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"></xhtml:script> 
  </xui:resource> 
</xui:window>
