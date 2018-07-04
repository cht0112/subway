<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryFuncAction" global="false" procedure="queryFuncProcedure">
<label language="zh_CN">查询用户拥有功能</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="FUNC_ID"/>
<private name="select" type="String" value="FUNC_ID,FUNC_ID.fUNCNAME as fUNCNAME,FUNC_ID.sYSTEMTYPE as sYSTEMTYPE,FUNC_ID.mANAGEMENTTYPE as mANAGEMENTTYPE,FUNC_ID.fUNCID as fUNCID,SYSTEM_TYPE_CODE.sYSTEMTYPECNAME as sYSTEMTYPECNAME,MANAGEMENT_TYPE_CODE.mANAGEMENTTYPECNAME as mANAGEMENTTYPECNAME,PRIVILEGE_TYPE.pRIVILEGENAME as pRIVILEGENAME,PRIVILEGE_FUNC,PRIVILEGE_FUNC.pRIVILEGETYPE as pRIVILEGETYPE,PRIVILEGE_FUNC.fUNCID as fUNCID1"/>
<private name="from" type="String" value="FUNC_ID FUNC_ID  join PRIVILEGE_FUNC PRIVILEGE_FUNC on PRIVILEGE_FUNC.fUNCID = FUNC_ID.fUNCID join ROLE_PRIVILEGE ROLE_PRIVILEGE on ROLE_PRIVILEGE.pRIVILEGEID = PRIVILEGE_FUNC join ROLE_OPERATOR ROLE_OPERATOR on ROLE_OPERATOR.rOLEID = ROLE_PRIVILEGE.rOLEID join OPERATOR_PASSWORD OPERATOR_PASSWORD on ROLE_OPERATOR.oPERATORID = OPERATOR_PASSWORD join SYSTEM_TYPE_CODE SYSTEM_TYPE_CODE on FUNC_ID.sYSTEMTYPE = SYSTEM_TYPE_CODE join MANAGEMENT_TYPE_CODE MANAGEMENT_TYPE_CODE on MANAGEMENT_TYPE_CODE.mANAGEMENTTYPE = FUNC_ID.mANAGEMENTTYPE optional  join MEMBER_IN_USERGROUP MEMBER_IN_USERGROUP on 1 = 1 join PRIVILEGE_TYPE PRIVILEGE_TYPE on PRIVILEGE_FUNC.pRIVILEGETYPE = PRIVILEGE_TYPE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="true"/>
<public name="idColumn" type="String" value="FUNC_ID"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>