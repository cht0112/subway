<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="querySubRelationIndexAction" global="false" procedure="querySubRelationIndexProcedure"> 
    <label language="zh_CN">子用例和指标映射关联查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="RELATIONSHIP_INDEX_AND_CASE.*,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,SUB_TEST_CASE_BASE_INFO,SUB_TEST_CASE_BASE_INFO.sUBTESTCASENAME as sUBTESTCASENAME,INDEX_SYSTEM_VALUE,INDEX_SYSTEM_VALUE.iNDEXVALUE as iNDEXVALUE,INDEX_SYSTEM_VALUE.iNDEXVALUEDESC as iNDEXVALUEDESC,INDEX_SYSTEM_PARAMETER,INDEX_SYSTEM_PARAMETER.iNDEXSYSTEMNAME as iNDEXSYSTEMNAME,INDEX_ID_BASE_INFO,INDEX_ID_BASE_INFO.iNDEXIDCNAME as iNDEXIDCNAME,INDEX_ID_BASE_INFO.dETECTIONRANGETYPE as dETECTIONRANGETYPE,INDEX_ID_BASE_INFO.dETECTIONRANGEID as dETECTIONRANGEID,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE as dETECTIONOBJECTTYPE,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME"/>  
    <private name="from" type="String" value="RELATIONSHIP_INDEX_AND_CASE RELATIONSHIP_INDEX_AND_CASE  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on BUSINESS_TYPE_CODE = RELATIONSHIP_INDEX_AND_CASE.bUSINESSID optional  join SUB_TEST_CASE_BASE_INFO SUB_TEST_CASE_BASE_INFO on SUB_TEST_CASE_BASE_INFO.tESTCASEVER = RELATIONSHIP_INDEX_AND_CASE.tESTCASEVER AND SUB_TEST_CASE_BASE_INFO.tESTCASEID = RELATIONSHIP_INDEX_AND_CASE.tESTCASEID AND SUB_TEST_CASE_BASE_INFO.sUBTESTCASEID = RELATIONSHIP_INDEX_AND_CASE.sUBTESTCASEID optional  join INDEX_SYSTEM_VALUE INDEX_SYSTEM_VALUE on RELATIONSHIP_INDEX_AND_CASE.iNDEXNO = INDEX_SYSTEM_VALUE optional  join INDEX_SYSTEM_PARAMETER INDEX_SYSTEM_PARAMETER on INDEX_SYSTEM_VALUE.iNDEXSYSTEMNO = INDEX_SYSTEM_PARAMETER optional  join INDEX_ID_BASE_INFO INDEX_ID_BASE_INFO on INDEX_ID_BASE_INFO = INDEX_SYSTEM_VALUE.iNDEXID optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on DETECTION_OBJECT_TYPE = INDEX_SYSTEM_VALUE.aPPLYFOROBJECT optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = INDEX_SYSTEM_VALUE.aPPLYFOROBJECT AND DEVICE_TYPE_CODE.dEVICETYPE = INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="RELATIONSHIP_INDEX_AND_CASE"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="querySubCaseRelationIndexAction" global="false" procedure="querySubCaseRelationIndexProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="distinct INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE as aPPLYFORDEVICETYPE,INDEX_ID_BASE_INFO,INDEX_ID_BASE_INFO.iNDEXIDCNAME as iNDEXIDCNAME,INDEX_ID_BASE_INFO.dETECTIONRANGETYPE as dETECTIONRANGETYPE,INDEX_ID_BASE_INFO.dETECTIONRANGEID as dETECTIONRANGEID,DEVICE_TYPE_CODE,DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE as dETECTIONOBJECTTYPE,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,DETECTION_RANGE_CODE,DETECTION_RANGE_CODE.dETECTIONRANGETYPE as dETECTIONRANGETYPE1,DETECTION_RANGE_CODE.dETECTIONRANGEID as dETECTIONRANGEID1,DETECTION_RANGE_CODE.rANGEIDCNAME as rANGEIDCNAME,SUB_TEST_CASE_BASE_INFO,SUB_TEST_CASE_BASE_INFO.tESTCASEVER as tESTCASEVER,SUB_TEST_CASE_BASE_INFO.tESTCASEID as tESTCASEID,SUB_TEST_CASE_BASE_INFO.sUBTESTCASEID as sUBTESTCASEID,INDEX_SYSTEM_VALUE.iNDEXID as iNDEXID1"/>  
    <private name="from" type="String" value="INDEX_SYSTEM_VALUE INDEX_SYSTEM_VALUE  optional  join INDEX_ID_BASE_INFO INDEX_ID_BASE_INFO on INDEX_SYSTEM_VALUE.iNDEXID = INDEX_ID_BASE_INFO optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on INDEX_SYSTEM_VALUE.aPPLYFOROBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND INDEX_SYSTEM_VALUE.aPPLYFORDEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on INDEX_ID_BASE_INFO.dETECTIONRANGETYPE = DETECTION_RANGE_TYPE optional  join DETECTION_RANGE_CODE DETECTION_RANGE_CODE on INDEX_ID_BASE_INFO.dETECTIONRANGETYPE = DETECTION_RANGE_CODE.dETECTIONRANGETYPE AND INDEX_ID_BASE_INFO.dETECTIONRANGEID = DETECTION_RANGE_CODE.dETECTIONRANGEID optional  join SUB_TEST_CASE_BASE_INFO SUB_TEST_CASE_BASE_INFO on SUB_TEST_CASE_BASE_INFO.iNDEXNAME  =  INDEX_ID_BASE_INFO.iNDEXIDCNAME"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="SUB_TEST_CASE_BASE_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
