<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="NewSystemAction" global="false" procedure="NewSystemProcedure"><label language="zh_CN">自建系统问题查询</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="SYSTEM_PROBLEM_RECORD"/>
<private name="select" type="String" value="SYSTEM_PROBLEM_RECORD.*,SYSTEM_TYPE_CODE.sYSTEMTYPECNAME as sYSTEMTYPECNAME,ERROR_TYPE_CODE.eRRORTYPECNAME as eRRORTYPECNAME,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME"/>
<private name="from" type="String" value="SYSTEM_PROBLEM_RECORD SYSTEM_PROBLEM_RECORD  optional  join SYSTEM_TYPE_CODE SYSTEM_TYPE_CODE on SYSTEM_PROBLEM_RECORD.system_type = SYSTEM_TYPE_CODE optional  join ERROR_TYPE_CODE ERROR_TYPE_CODE on SYSTEM_PROBLEM_RECORD.error_type = ERROR_TYPE_CODE optional  join SYSTEM_RESOURCE_INFO SYSTEM_RESOURCE_INFO on SYSTEM_PROBLEM_RECORD.error_id = SYSTEM_RESOURCE_INFO optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on SYSTEM_PROBLEM_RECORD.dection_object  =  DETECTION_OBJECT_TYPE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="SYSTEM_PROBLEM_RECORD"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>