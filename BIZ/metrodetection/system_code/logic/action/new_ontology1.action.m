<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryME_CXAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="ME_CX"/>
<private name="select" type="String" value="SAMPLE_DEVICE_HARDWARE_INFO.mODELNAME as mODELNAME,SAMPLE_DEVICE_HARDWARE_INFO.mODELSTYLE as mODELSTYLE,SAMPLE_DEVICE_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,SAMPLE_DEVICE_INFO,SAMPLE_DEVICE_INFO.cONTRACTCODE as cONTRACTCODE"/>
<private name="from" type="String" value="SAMPLE_DEVICE_HARDWARE_INFO SAMPLE_DEVICE_HARDWARE_INFO  optional  join SAMPLE_DEVICE_OCCUPY_INFO SAMPLE_DEVICE_OCCUPY_INFO on SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO  =  SAMPLE_DEVICE_OCCUPY_INFO.sAMPLEDEVICENO join SAMPLE_DEVICE_INFO SAMPLE_DEVICE_INFO on SAMPLE_DEVICE_OCCUPY_INFO.sAMPLEDEVICENO  =  SAMPLE_DEVICE_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="ME_CX"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveME_CXAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="ME_CX"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createME_CXAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="ME_CX"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>

</model>