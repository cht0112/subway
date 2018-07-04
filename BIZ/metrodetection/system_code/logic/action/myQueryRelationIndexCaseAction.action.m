<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryRelationIndexCaseAction" global="false" procedure="myQueryRelationIndexCaseProcedure"> 
    <label language="zh_CN">新建指标和用例关系查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="RELATIONSHIP_INDEX_AND_CASE"/>  
    <private name="select" type="String" value="riac.*,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,INDEX_SYSTEM_VALUE,INDEX_SYSTEM_VALUE.iNDEXVALUE as iNDEXVALUE"/>  
    <private name="from" type="String" value="RELATIONSHIP_INDEX_AND_CASE riac  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on riac.bUSINESSID = BUSINESS_TYPE_CODE optional  join INDEX_SYSTEM_VALUE INDEX_SYSTEM_VALUE on riac.iNDEXNO = INDEX_SYSTEM_VALUE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="riac"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
