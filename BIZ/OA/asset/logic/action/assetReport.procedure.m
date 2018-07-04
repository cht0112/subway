<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <procedure name="assetSummaryMainProcedure" code-model="/OA/asset/logic/code" code="AssetReport.assetSummaryMain"> 
    <parameter name="beginDate" type="String"/>  
    <parameter name="endDate" type="String"/>  
    <parameter name="dayNum" type="String"/>  
    <parameter name="orgIDs" type="String"/> 
  </procedure>  
  <procedure name="assetSummaryDetailProcedure" code-model="/OA/asset/logic/code" code="AssetReport.assetSummaryDetail"> 
    <parameter name="beginDate" type="String"/>  
    <parameter name="endDate" type="String"/>  
    <parameter name="orgIDs" type="String"/> 
  </procedure>  
  <procedure name="assetSummaryZTProcedure" code-model="/OA/asset/logic/code" code="AssetReport.assetSummaryZT"> 
    <parameter name="beginDate" type="String"/>  
    <parameter name="endDate" type="String"/>  
    <parameter name="dayNum" type="String"/>  
    <parameter name="orgIDs" type="String"/> 
  </procedure>  
  <procedure name="assetSummaryBTProcedure" code-model="/OA/asset/logic/code" code="AssetReport.assetSummaryBT">
    <parameter name="beginDate" type="String"/>
    <parameter name="endDate" type="String"/>
    <parameter name="orgIDs" type="String"/>
  </procedure>
</model>
