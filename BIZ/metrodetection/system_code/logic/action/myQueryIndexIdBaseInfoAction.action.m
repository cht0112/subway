<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryIndexIdBaseInfoAction" global="false" procedure="myQueryIndexIdBaseInfoProcedure">
    <label language="zh_CN">新建指标定义基础信息查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="INDEX_ID_BASE_INFO"/>  
    <private name="select" type="String" value="iibi.*,DETECTION_RANGE_TYPE,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,DETECTION_RANGE_CODE.rANGEIDCNAME as rANGEIDCNAME,DETECTION_RANGE_CODE.dETECTIONRANGEID as dETECTIONRANGEID"/>  
    <private name="from" type="String" value="INDEX_ID_BASE_INFO iibi  optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on iibi.dETECTIONRANGETYPE = DETECTION_RANGE_TYPE optional  join DETECTION_RANGE_CODE DETECTION_RANGE_CODE on iibi.dETECTIONRANGEID = DETECTION_RANGE_CODE.dETECTIONRANGEID AND    iibi.dETECTIONRANGETYPE   =  DETECTION_RANGE_CODE.dETECTIONRANGETYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="iibi"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
