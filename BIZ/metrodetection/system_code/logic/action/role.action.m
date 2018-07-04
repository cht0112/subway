<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model"><action name="queryROLE_IDAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="ROLE_ID"/>
<private name="select" type="String" value="ROLE_ID.*"/>
<private name="from" type="String" value="ROLE_ID ROLE_ID"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/role/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="ROLE_ID"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
<label language="zh_CN">查询角色</label>
</action>
<action name="saveROLE_IDAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="ROLE_ID"/>
<private name="dataModel" type="String" value="/metrodetection/role/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
<label language="zh_CN">保存角色</label>
</action>
<action name="createROLE_IDAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="ROLE_ID"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
<label language="zh_CN">创建角色</label>
</action>









<action name="queryFUNC_IDAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="FUNC_ID"/>
<private name="select" type="String" value="FUNC_ID.*,SYSTEM_TYPE_CODE,SYSTEM_TYPE_CODE.sYSTEMTYPECNAME as sYSTEMTYPECNAME,SYSTEM_TYPE_CODE.sYSTEMTYPEENAME as sYSTEMTYPEENAME,MANAGEMENT_TYPE_CODE,MANAGEMENT_TYPE_CODE.mANAGEMENTTYPE as mANAGEMENTTYPE,MANAGEMENT_TYPE_CODE.mANAGEMENTTYPECNAME as mANAGEMENTTYPECNAME,MANAGEMENT_TYPE_CODE.mANAGEMENTTYPEENAME as mANAGEMENTTYPEENAME"/>
<private name="from" type="String" value="FUNC_ID FUNC_ID  join SYSTEM_TYPE_CODE SYSTEM_TYPE_CODE on FUNC_ID.sYSTEMTYPE  =  SYSTEM_TYPE_CODE join MANAGEMENT_TYPE_CODE MANAGEMENT_TYPE_CODE on FUNC_ID.mANAGEMENTTYPE  =  MANAGEMENT_TYPE_CODE.mANAGEMENTTYPE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/role/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="FUNC_ID"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
<label language="zh_CN">查询功能</label>
</action>
<action name="saveFUNC_IDAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="FUNC_ID"/>
<private name="dataModel" type="String" value="/metrodetection/role/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
<label language="zh_CN">保存功能</label>
</action>
<action name="createFUNC_IDAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="FUNC_ID"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
<label language="zh_CN">创建功能</label>
</action>



</model>