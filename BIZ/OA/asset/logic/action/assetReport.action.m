<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="assetSummaryMainAction" global="false" procedure="assetSummaryMainProcedure"> 
    <public name="beginDate" type="String"/>  
    <public name="endDate" type="String"/>  
    <public name="dayNum" type="String"/>  
    <public name="orgIDs" type="String"/> 
  </action>  
  <action name="assetSummaryDetailAction" global="false" procedure="assetSummaryDetailProcedure"> 
    <public name="beginDate" type="String"/>  
    <public name="endDate" type="String"/>  
    <public name="orgIDs" type="String"/> 
  </action>  
  <action name="assetSummaryZTAction" global="false" procedure="assetSummaryZTProcedure"> 
    <public name="beginDate" type="String"/>  
    <public name="endDate" type="String"/>  
    <public name="dayNum" type="String"/>  
    <public name="orgIDs" type="String"/> 
  </action>  
  <action name="assetSummaryBTAction" global="false" procedure="assetSummaryBTProcedure"> 
    <public name="beginDate" type="String"/>  
    <public name="endDate" type="String"/>  
    <public name="orgIDs" type="String"/> 
  </action> 
</model>
