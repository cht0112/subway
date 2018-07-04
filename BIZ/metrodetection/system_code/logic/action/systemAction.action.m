<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="systemAction" global="false" procedure="systemProcedure"><label language="zh_CN">检测系统问题资源库</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="SYSTEM_RESOURCE_INFO"/>
<private name="select" type="String" value="SYSTEM_RESOURCE_INFO.*,SYSTEM_TYPE_CODE,SYSTEM_TYPE_CODE.sYSTEMTYPECNAME as sYSTEMTYPECNAME,SYSTEM_TYPE_CODE.sYSTEMTYPEENAME as sYSTEMTYPEENAME,ERROR_TYPE_CODE,ERROR_TYPE_CODE.eRRORTYPECNAME as eRRORTYPECNAME,ERROR_TYPE_CODE.eRRORTYPEENAME as eRRORTYPEENAME,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME"/>
<private name="from" type="String" value="SYSTEM_RESOURCE_INFO SYSTEM_RESOURCE_INFO  optional  join SYSTEM_TYPE_CODE SYSTEM_TYPE_CODE on SYSTEM_RESOURCE_INFO.sYSTEMTYPE = SYSTEM_TYPE_CODE optional  join ERROR_TYPE_CODE ERROR_TYPE_CODE on SYSTEM_RESOURCE_INFO.eRRORTYPE = ERROR_TYPE_CODE optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on SYSTEM_RESOURCE_INFO.dECTIONOBJECT  =  DETECTION_OBJECT_TYPE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_resource/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="SYSTEM_RESOURCE_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>