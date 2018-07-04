<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wSelectBuyApplyDialog" extends="/UI/system/service/commonChoose/templete/listMultiTemplete.w">  
  <data id="main" xui:update-mode="merge-and-append" concept="OA_AS_BuyApplyD" order-by="fNO:desc" relations="fName,fSpecType,fKindID,fKindCode,fUnitID,fKind,fUnit,fBuyNum,fInNum,fPrice,fAmount,fMasterID,fNO,fApplyDeptName,fApplyPsnName,fApplyDate"></data>  
  <reader action="/OA/asset/logic/action/queryASSelectBuyApplyAction" id="readerAction" xui:update-mode="merge"/>  
  <xhtml:input id="displayAlias" xui:update-mode="replace" value="fName"/>  
  <xhtml:input id="returnAliasList" xui:update-mode="replace" value="rowId,fName,fSpecType,fKindID,fUnitID,fKind,fUnit,fBuyNum,fInNum,fPrice,fAmount,fMasterID,fNO,fKindCode"/>  
  <xhtml:input id="quickSearch" xui:update-mode="replace" value="UPPER(OA_AS_BuyApplyD.fName) LIKE '%[QUICKTEXT]%' OR UPPER(OA_AS_BuyApplyD.fSpecType) LIKE '%[QUICKTEXT]%'OR UPPER(OA_AS_BuyApplyD.fKind) LIKE '%[QUICKTEXT]%'OR UPPER(OA_AS_BuyApplyD.fUnit) LIKE '%[QUICKTEXT]%'OR UPPER(m.fNO) LIKE '%[QUICKTEXT]%'"/>  
  <xhtml:div id="listGrid" style="height:100%;width:570px" xui:update-mode="merge-and-append"> 
    <column ref="fKind" label="资产类别" type="ro" width="80"/>  
    <column ref="fName" label="资产名称" type="ro" width="120"/>  
    <column ref="fBuyNum" label="数量" type="ro" width="40" align="right"/>  
    <column label="单价" width="80" ref="fPrice" type="ro" align="right" format="0,000.00"/>  
    <column label="金额(元)" width="100" ref="fAmount" type="ro" align="right" format="0,000.00"/>  
    <column ref="fNO" label="申请单号" type="ro" width="120"/>  
    <column ref="fSpecType" label="规格型号" type="ro" width="100"/>  
    <column ref="fUnit" label="单位" type="ro" width="40"/>  
    <column ref="fApplyDeptName" label="申请部门" type="ro" width="100"/>  
    <column ref="fApplyPsnName" label="申请人" type="ro" width="70"/>  
    <column ref="fApplyDate" label="申请时间" type="date" width="70"/>  
    <column ref="fInNum" label="入库数量" type="ro" width="50" align="right"/> 
  </xhtml:div> 
</xui:window>
