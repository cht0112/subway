<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myIndexValueAction" global="false" procedure="myIndexValueProcedure"> 
    <label language="zh_CN">新建指标库数据查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="INDEX_SYSTEM_VALUE"/>  
    <private name="select" type="String" value="INDEX_SYSTEM_VALUE.*,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,INDEX_SYSTEM_PARAMETER,INDEX_SYSTEM_PARAMETER.iNDEXSYSTEMNAME as iNDEXSYSTEMNAME,INDEX_ID_BASE_INFO,INDEX_ID_BASE_INFO.iNDEXIDCNAME as iNDEXIDCNAME,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME"/>  
    <private name="from" type="String" value="INDEX_SYSTEM_VALUE INDEX_SYSTEM_VALUE  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on INDEX_SYSTEM_VALUE.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE optional  join INDEX_SYSTEM_PARAMETER INDEX_SYSTEM_PARAMETER on INDEX_SYSTEM_VALUE.iNDEXSYSTEMNO = INDEX_SYSTEM_PARAMETER optional  join INDEX_ID_BASE_INFO INDEX_ID_BASE_INFO on INDEX_SYSTEM_VALUE.iNDEXID = INDEX_ID_BASE_INFO optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on INDEX_SYSTEM_VALUE.bUSINESSID  =  BUSINESS_TYPE_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="INDEX_SYSTEM_VALUE"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
