<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <action name="queryOPOrgAction" procedure="queryOPOrgProcedure" global="false"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="SA_OPOrg"/>  
    <private name="select" type="String" value="SA_OPOrg.*,SA_OPPerson as personID,SA_OPPerson.sName as personName,SA_OPPerson.sCode as personCode,SA_OPPerson.sNumb as personNumb,SA_OPPerson.sLoginName as personLoginName,SA_OPPerson.sPassword as personPassword,SA_OPPerson.sMainOrgID as personMainOrgID,SA_OPPerson.sIDCard as personIDCard,SA_OPPerson.sValidState as personValidState,SA_OPPerson.version as personVersion,SA_OPPerson.sSex as personSex,'' as ognName,'' as dptName,'' as posName,HR_BASE_INFO.nATION as nATION,HR_BASE_INFO.eDUCATIONID as eDUCATIONID,HR_BASE_INFO.pOSITIONALTITLE as pOSITIONALTITLE,EDUCATION_CODE,EDUCATION_CODE.eDUCATIONIDCNAME as eDUCATIONIDCNAME,POSITIONAL_TITLE_CODE,POSITIONAL_TITLE_CODE.pOSITIONALTITLEIDCNAME as pOSITIONALTITLEIDCNAME,case when HR_BASE_INFO.oPERATORSTATE = 1 then '正常' when HR_BASE_INFO.oPERATORSTATE = 2 then '工作' when HR_BASE_INFO.oPERATORSTATE = 3 then '病假' when HR_BASE_INFO.oPERATORSTATE = 4 then '年假' when HR_BASE_INFO.oPERATORSTATE = 5 then '事假' when HR_BASE_INFO.oPERATORSTATE = 6 then '公出' when HR_BASE_INFO.oPERATORSTATE = 2 then '离职' end  as operatorState"/>  
    <private name="from" type="String" value="SA_OPOrg SA_OPOrg  optional  join SA_OPPerson SA_OPPerson on SA_OPOrg.sPersonID = SA_OPPerson optional  join HR_BASE_INFO HR_BASE_INFO on SA_OPPerson.sCode = HR_BASE_INFO.Scode optional  join EDUCATION_CODE EDUCATION_CODE on HR_BASE_INFO.eDUCATIONID = EDUCATION_CODE optional  join POSITIONAL_TITLE_CODE POSITIONAL_TITLE_CODE on HR_BASE_INFO.pOSITIONALTITLE = POSITIONAL_TITLE_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/system/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="SA_OPOrg"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="SA_OPOrg.sSequence asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>  
    <public name="manageCodes" type="String" required="false"/>  
    <public name="manageFilterMode" type="String" required="false"/>  
    <public name="splitFullIDCodeName" type="Boolean" required="false"/>  
    <label language="zh_CN">组织查询</label> 
  </action>  
  <action name="saveOPOrgAction" procedure="saveOPOrgProcedure"> 
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="SA_OPOrg"/>  
    <private name="dataModel" type="String" value="/system/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <label language="zh_CN">组织保存</label> 
  </action>  
  <action name="createOPOrgAction" procedure="createOPOrgProcedure"> 
    <private name="concept" type="String" value="SA_OPOrg"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/>  
    <label language="zh_CN">组织创建</label> 
  </action>  
  <action name="queryOPPersonAction" procedure="queryOPPersonProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="SA_OPPerson"/>  
    <private name="select" type="String" value="SA_OPPerson.*,mainOrg.sName as mainOrgName,mainOrg.sFID as mainOrgFID,mainOrg.sFName as mainOrgFName,mainOrg.sSequence as mainOrgSequence"/>  
    <private name="from" type="String" value="SA_OPPerson SA_OPPerson optional  join SA_OPOrg mainOrg on mainOrg = SA_OPPerson.sMainOrgID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/system/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="SA_OPPerson"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="mainOrg.sSequence asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>  
    <label language="zh_CN">人员查询</label> 
  </action>  
  <action name="saveOPPersonAction" procedure="saveOPPersonProcedure"> 
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="SA_OPPerson"/>  
    <private name="dataModel" type="String" value="/system/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <label language="zh_CN">人员保存</label> 
  </action>  
  <action name="createOPPersonAction" procedure="createOPPersonProcedure"> 
    <private name="concept" type="String" value="SA_OPPerson"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/>  
    <label language="zh_CN">人员创建</label> 
  </action>  
  <action name="disableOrgAction" global="false" procedure="disableOrgProcedure"> 
    <label language="zh_CN">组织禁用</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/> 
  </action>  
  <action name="enableOrgAction" global="false" procedure="enableOrgProcedure"> 
    <label language="zh_CN">组织启用</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/>  
    <public type="Boolean" name="enableSlavePsm" required="false"/> 
  </action>  
  <action name="logicDeleteOrgAction" global="false" procedure="logicDeleteOrgProcedure"> 
    <label language="zh_CN">组织逻辑删除</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/> 
  </action>  
  <action name="restoreOrgAction" global="false" procedure="restoreOrgProcedure"> 
    <label language="zh_CN">组织还原</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/>  
    <public type="Boolean" name="restoreSlavePsm" required="false"/> 
  </action>  
  <action name="physicalDeleteOrgAction" global="false" procedure="physicalDeleteOrgProcedure"> 
    <label language="zh_CN">组织清除</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/>  
    <public type="Boolean" name="deletePerson" required="false"/> 
  </action>  
  <action name="sortOrgsAction" global="false" procedure="sortOrgsProcedure"> 
    <label language="zh_CN">组织排序</label>  
    <public type="List" name="ids" required="true"/>  
    <public type="List" name="versions" required="false"/>  
    <public type="String" name="parentID" required="false"/> 
  </action>  
  <action name="moveOrgAction" global="false" procedure="moveOrgProcedure"> 
    <label language="zh_CN">组织移动</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/>  
    <public type="String" name="newParentID" required="false"/> 
  </action>  
  <action name="assignPersonAction" global="false" procedure="assignPersonProcedure"> 
    <label language="zh_CN">分配人员</label>  
    <public type="List" name="personIDs" required="true"/>  
    <public type="String" name="orgID" required="true"/>  
    <public type="Integer" name="psmValidState" required="false"/>  
    <public type="Boolean" name="autoEnableOldPsm" required="false"/> 
  </action>  
  <action name="resetPasswordAction" global="false" procedure="resetPasswordProcedure"> 
    <label language="zh_CN">重置密码</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/> 
  </action>  
  <action name="changePersonMainOrgAction" global="false" procedure="changePersonMainOrgProcedure"> 
    <label language="zh_CN">设置人员所属组织</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/>  
    <public type="String" name="newMainOrgID" required="true"/>  
    <public type="Boolean" name="disableOldMasterPsm" required="false"/> 
  </action>  
  <action name="enableSlavePsmAction" global="false" procedure="enableSlavePsmProcedure"> 
    <label language="zh_CN">启用从属的人员成员</label>  
    <public type="String" name="psmID" required="true"/>  
    <public type="Integer" name="psmVersion" required="false"/>  
    <public type="String" name="personID" required="false"/> 
  </action>  
  <action name="physicalDeletePersonAction" global="false" procedure="physicalDeletePersonProcedure"> 
    <label language="zh_CN">人员清除</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/> 
  </action>  
  <action name="restorePersonAction" global="false" procedure="restorePersonProcedure"> 
    <label language="zh_CN">人员还原</label>  
    <public type="String" name="id" required="true"/>  
    <public type="Integer" name="version" required="false"/>  
    <public type="Boolean" name="restoreSlavePsm" required="false"/>  
    <public type="String" name="newMainOrgID" required="false"/> 
  </action>  
  <action name="queryOrgLevelAction" procedure="bizQueryProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="SA_OrgLevel"/>  
    <private name="select" type="String" value="SA_OrgLevel.*"/>  
    <private name="from" type="String" value="SA_OrgLevel SA_OrgLevel"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/system/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="SA_OrgLevel"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>  
    <label language="zh_CN">查询组织级别</label> 
  </action>  
  <action name="saveOrgLevelAction" procedure="bizSaveProcedure"> 
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="SA_OrgLevel"/>  
    <private name="dataModel" type="String" value="/system/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <label language="zh_CN">保存组织级别</label> 
  </action>  
  <action name="createOrgLevelAction" procedure="bizCreateProcedure"> 
    <private name="concept" type="String" value="SA_OrgLevel"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/>  
    <label language="zh_CN">创建组织级别</label> 
  </action> 
</model>
