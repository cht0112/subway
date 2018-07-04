<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myquerytool" global="false" procedure="myquerytoolProcedure"><label language="zh_CN">查询工具</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="DETECTION_TOOL_INFO"/>
<private name="select" type="String" value="DETECTION_TOOL_INFO.tOOLCNAME as tOOLCNAME,DETECTION_TOOL_INFO.tOOLENAME as tOOLENAME,USE_STATE_CODE.uSESTATECODECNAME as uSESTATECODECNAME,USE_STATE_CODE,DETECTION_TOOL_INFO,DETECTION_TOOL_INFO.tOOLTYPEID as tOOLTYPEID,DETECTION_TOOL_INFO.tOOLMODEL as tOOLMODEL,DETECTION_TOOL_INFO.tOOLSTANDARDS as tOOLSTANDARDS,DETECTION_TOOL_INFO.tOOLID as tOOLID,DETECTION_TOOL_INFO.tOOLUNIT as tOOLUNIT,DETECTION_TOOL_INFO.mANUFACTUREID as mANUFACTUREID,DETECTION_TOOL_INFO.tOOLRESOURCE as tOOLRESOURCE,DETECTION_TOOL_INFO.iNDATE as iNDATE,DETECTION_TOOL_INFO.iNPRICE as iNPRICE,DETECTION_TOOL_INFO.sHAREDFLAG as sHAREDFLAG,DETECTION_TOOL_INFO.mEMO as mEMO,DETECTION_TOOL_INFO.uSESTATECODE as uSESTATECODE1"/>
<private name="from" type="String" value="DETECTION_TOOL_INFO DETECTION_TOOL_INFO  optional  join USE_STATE_CODE USE_STATE_CODE on DETECTION_TOOL_INFO.uSESTATECODE = USE_STATE_CODE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="DETECTION_TOOL_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>