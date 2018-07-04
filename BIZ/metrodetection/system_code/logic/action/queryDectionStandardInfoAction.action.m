<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryDectionStandardInfoAction" global="false" procedure="queryDectionStandardInfoProcedure"> 
    <label language="zh_CN">新建检测标准查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="dsoi,dsoi.DECTION_STANDARD_TYPE as DECTION_STANDARD_TYPE,case when DECTION_STANDARD_TYPE = 1 then '国际' when DECTION_STANDARD_TYPE = 2 then '国标' when DECTION_STANDARD_TYPE = 3 then '行标' when DECTION_STANDARD_TYPE = 4 then '地标' when DECTION_STANDARD_TYPE = 5 then '企业标准' end  as dECTIONTYPENAME,dsoi.DECTION_STANDARD_ID as DECTION_STANDARD_ID,dsoi.CITY_CODE as CITYCODE,dsoi.PUBLISH_DATE as PUBLISH_DATE,dsoi.STANDARD_E_FILE_ID as STANDARD_E_FILE_ID,dsoi.STANDARD_FILE_VER as STANDARD_FILE_VER,dsoi.STANDARD_FILE_DESC as STANDARD_FILE_DESC,CITY_CODE,CITY_CODE.cITYCODECNAME as cITYCODECNAME,SA_DocNode,SA_DocNode.sDocName as sDocName"/>  
    <private name="from" type="String" value="DECTION_STANDARD_ON_INFO dsoi  optional  join CITY_CODE CITY_CODE on dsoi.CITY_CODE = CITY_CODE optional  join SA_DocNode SA_DocNode on dsoi.STANDARD_E_FILE_ID = SA_DocNode"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="dsoi"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="queryDectionStandardMidAction" global="false" procedure="queryDectionStandardMidProcedure">
    <label language="zh_CN">新建检测标准中间表查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="DECTION_BASED_STANDARD,DECTION_BASED_STANDARD.DECTION_BASED_ON_ID as DECTION_BASED_ON_ID,DECTION_BASED_STANDARD.SID as SID,DECTION_STANDARD_ON_INFO,DECTION_STANDARD_ON_INFO.DECTION_STANDARD_ID as DECTION_STANDARD_ID,DECTION_STANDARD_ON_INFO.PUBLISH_DATE as PUBLISH_DATE,CITY_CODE,CITY_CODE.cITYCODECNAME as cITYCODECNAME,SA_DocNode.sDocName as sDocName,DECTION_STANDARD_ON_INFO.DECTION_STANDARD_TYPE as DECTION_STANDARD_TYPE,case when DECTION_STANDARD_TYPE = 1 then '国际' when DECTION_STANDARD_TYPE = 2 then '国标' when DECTION_STANDARD_TYPE = 3 then '行标' when DECTION_STANDARD_TYPE = 4 then '地标' when DECTION_STANDARD_TYPE = 5 then '企业标准' end as sTANDARDTYPENAME"/>  
    <private name="from" type="String" value="DECTION_BASED_STANDARD DECTION_BASED_STANDARD  optional  join DECTION_STANDARD_ON_INFO DECTION_STANDARD_ON_INFO on DECTION_BASED_STANDARD.SID = DECTION_STANDARD_ON_INFO optional  join CITY_CODE CITY_CODE on DECTION_STANDARD_ON_INFO.CITY_CODE = CITY_CODE optional  join SA_DocNode SA_DocNode on DECTION_STANDARD_ON_INFO.STANDARD_E_FILE_ID = SA_DocNode"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DECTION_BASED_STANDARD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
