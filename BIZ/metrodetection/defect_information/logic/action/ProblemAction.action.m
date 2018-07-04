<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="ProblemAction" global="false" procedure="ProblemProcedure"><label language="zh_CN">受测系统问题资源库</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="PROBLEM_RESOURCE_INFO"/>  
    <private name="select" type="String" value="PROBLEM_RESOURCE_INFO.*,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,DETECTION_RANGE_TYPE.dETECTIONRANGECNAME as dETECTIONRANGECNAME,DETECTION_RANGE_CODE.rANGEIDCNAME as rANGEIDCNAME,PROBLEM_TYPE_CODE,PROBLEM_TYPE_CODE.pROBLEMPRIOR as pROBLEMPRIOR1,PROBLEM_TYPE_CODE.pROBLEMTYPE as pROBLEMTYPE,PROBLEM_TYPE_CODE.pROBLEMTYPECNAME as pROBLEMTYPECNAME,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,AFC_MANUFACTURER_INFO.mANUFACTURETYPE as mANUFACTURETYPE,PROBLEM_RESOURCE_INFO.PROBLEM_PRIOR as PROBLEM_PRIOR,PROBLEM_PRIOR_CODE.pROBLEMPRIORCNAME as pROBLEMPRIORCNAME"/>  
    <private name="from" type="String" value="PROBLEM_RESOURCE_INFO PROBLEM_RESOURCE_INFO  optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on PROBLEM_RESOURCE_INFO.APPLY_FOR_OBJECT = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on PROBLEM_RESOURCE_INFO.APPLY_FOR_DEVICE_TYPE = DEVICE_TYPE_CODE.dEVICETYPE AND PROBLEM_RESOURCE_INFO.APPLY_FOR_OBJECT = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE optional  join DETECTION_RANGE_TYPE DETECTION_RANGE_TYPE on PROBLEM_RESOURCE_INFO.APPLY_FOR_RANGE = DETECTION_RANGE_TYPE optional  join DETECTION_RANGE_CODE DETECTION_RANGE_CODE on PROBLEM_RESOURCE_INFO.APPLY_FOR_SUB_RANGE = DETECTION_RANGE_CODE.dETECTIONRANGEID AND PROBLEM_RESOURCE_INFO.APPLY_FOR_RANGE = DETECTION_RANGE_CODE.dETECTIONRANGETYPE optional  join PROBLEM_TYPE_CODE PROBLEM_TYPE_CODE on PROBLEM_RESOURCE_INFO.PROBLEM_TYPE = PROBLEM_TYPE_CODE.pROBLEMTYPE AND PROBLEM_RESOURCE_INFO.PROBLEM_PRIOR = PROBLEM_TYPE_CODE.pROBLEMPRIOR optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on PROBLEM_RESOURCE_INFO.MANUFACTURE_ID = AFC_MANUFACTURER_INFO optional  join PROBLEM_PRIOR_CODE PROBLEM_PRIOR_CODE on PROBLEM_RESOURCE_INFO.PROBLEM_PRIOR = PROBLEM_PRIOR_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/defect_information/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="PROBLEM_RESOURCE_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>