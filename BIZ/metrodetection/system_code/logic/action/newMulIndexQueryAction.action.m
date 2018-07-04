<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="newMulIndexQueryAction" global="false" procedure="newMulIndexQueryProcedure"><label language="zh_CN">批量新增指标列表查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="INDEX_SYSTEM_VALUE"/>  
    <private name="select" type="String" value="INDEX_SYSTEM_VALUE,case when INDEX_SYSTEM_VALUE is null then null when INDEX_SYSTEM_VALUE is not null then  INDEX_SYSTEM_VALUE + 0  end  as INDEXNO,INDEX_SYSTEM_VALUE.iNDEXID as INDEXID,INDEX_ID_BASE_INFO.iNDEXIDCNAME as INDEXIDCNAME,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as DETECTIONRANGECNAME,DETECTION_RANGE_CODE.rANGEIDCNAME as RANGEIDCNAME,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as DETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dEVICETYPECNAME as DEVICETYPECNAME,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as BUSINESSIDCNAME,INDEX_SYSTEM_VALUE.iNDEXVALUE as INDEXVALUE,INDEX_SYSTEM_VALUE.iNDEXVALUEDESC as INDEXVALUEDESC,INDEX_SYSTEM_VALUE.iNDEXSYSTEMNO as INDEXSYSTEMNO,INDEX_SYSTEM_VALUE.bUSINESSID as BUSINESSID,INDEX_SYSTEM_VALUE.aPPLYFOROBJECT as APPLYFOROBJECT,INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE as APPLYFORDEVICETYPE,INDEX_ID_BASE_INFO.dETECTIONRANGETYPE as DETECTIONRANGETYPE,INDEX_ID_BASE_INFO.dETECTIONRANGEID as DETECTIONRANGEID,INDEX_SYSTEM_PARAMETER.iNDEXSYSTEMNAME as INDEXSYSTEMNAME"/>  
    <private name="from" type="String" value="INDEX_SYSTEM_VALUE INDEX_SYSTEM_VALUE  optional  join INDEX_ID_APPLY_INFO INDEX_ID_APPLY_INFO on INDEX_SYSTEM_VALUE.iNDEXID = INDEX_ID_APPLY_INFO.iNDEXID optional  join INDEX_ID_BASE_INFO INDEX_ID_BASE_INFO on INDEX_ID_APPLY_INFO.iNDEXID = INDEX_ID_BASE_INFO optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on INDEX_ID_BASE_INFO.dETECTIONRANGETYPE = DETECTION_RANGE_TYPE optional  join DETECTION_RANGE_CODE DETECTION_RANGE_CODE on  INDEX_ID_BASE_INFO.dETECTIONRANGEID = DETECTION_RANGE_CODE.dETECTIONRANGEID AND DETECTION_RANGE_CODE.dETECTIONRANGETYPE = INDEX_ID_BASE_INFO.dETECTIONRANGETYPE  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on INDEX_SYSTEM_VALUE.aPPLYFOROBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on  INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE AND DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = INDEX_SYSTEM_VALUE.aPPLYFOROBJECT  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on INDEX_SYSTEM_VALUE.bUSINESSID = BUSINESS_TYPE_CODE optional  join INDEX_SYSTEM_PARAMETER INDEX_SYSTEM_PARAMETER on INDEX_SYSTEM_VALUE.iNDEXSYSTEMNO = INDEX_SYSTEM_PARAMETER"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
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
<public type="Integer" name="id" required="false"></public>
</action>
</model>