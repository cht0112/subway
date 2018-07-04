<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryOA_GZJHAction" procedure="bizQueryProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_GZJH"/>  
    <private name="select" type="String" value="case when OA_GZJH.fPlanMonth is null then OA_GZJH.fPlanYear else concat(OA_GZJH.fPlanYear,'-',OA_GZJH.fPlanMonth) end as sequence,OA_GZJH.*"/>  
    <private name="from" type="String" value="OA_GZJH OA_GZJH"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/workPlan/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_GZJH"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="sequence asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveOA_GZJHAction" procedure="bizSaveProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_GZJH"/>  
    <private name="dataModel" type="String" value="/OA/workPlan/data"/>  
    <protected name="readOnly" type="String" value="sequence"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createOA_GZJHAction" procedure="bizCreateProcedure"> 
    <private name="concept" type="String" value="OA_GZJH"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="queryOA_GZNRAction" procedure="bizQueryProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_GZNR"/>  
    <private name="select" type="String" value="OA_GZNR.*"/>  
    <private name="from" type="String" value="OA_GZNR OA_GZNR"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/workPlan/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_GZNR"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveOA_GZNRAction" procedure="bizSaveProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_GZNR"/>  
    <private name="dataModel" type="String" value="/OA/workPlan/data"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createOA_GZNRAction" procedure="bizCreateProcedure"> 
    <private name="concept" type="String" value="OA_GZNR"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="getWorkPlanAction" procedure="getWorkPlanProcedure"> 
    <public name="count" type="String"/> 
  </action>  
  <procedure name="getWorkPlanProcedure" code="workPlan.getWorkPlan" code-model="/OA/workPlan/logic/code"> 
    <parameter name="count" type="String"/> 
  </procedure>  
  <action name="getDeptWorkPlanAction" procedure="getDeptWorkPlanProcedure"> 
    <public name="year" type="String"/>  
    <public name="month" type="String"/>  
    <!--<private name="date" type="String"/>--> 
  </action>  
  <procedure name="getDeptWorkPlanProcedure" code="workPlan.getDeptWorkPlan" code-model="/OA/workPlan/logic/code"> 
    <parameter name="year" type="String"/>  
    <parameter name="month" type="String"/> 
  </procedure>  
  <action name="getOfficeWorkPlanAction" procedure="getOfficeWorkPlanProcedure"> 
    <public name="year" type="String"/>  
    <public name="month" type="String"/>  
    <public name="week" type="String"/>  
    <public name="deptID" type="String"/> 
  </action>  
  <procedure name="getOfficeWorkPlanProcedure" code="workPlan.getOfficeWorkPlan"
    code-model="/OA/workPlan/logic/code"> 
    <parameter name="year" type="String"/>  
    <parameter name="month" type="String"/>  
    <parameter name="week" type="String"/>  
    <parameter name="deptID" type="String"/> 
  </procedure>  
  <action name="getDeptWorkPlanOfCurrWeekAction" procedure="getDeptWorkPlanOfCurrWeekProcedure"> 
    <public name="beginDate" type="String"/>  
    <public name="endDate" type="String"/> 
  </action>  
  <procedure name="getDeptWorkPlanOfCurrWeekProcedure" code="workPlan.getDeptWorkPlanOfCurrWeek"
    code-model="/OA/workPlan/logic/code"> 
    <parameter name="beginDate" type="String"/>  
    <parameter name="endDate" type="String"/> 
  </procedure>  
  <action name="getOfficeWorkPlanOfCurrMonthAction" procedure="getOfficeWorkPlanOfCurrMonthProcedure"> 
    <public name="beginDate" type="String"/>  
    <public name="endDate" type="String"/>  
    <public name="deptID" type="String"/> 
  </action>  
  <procedure name="getOfficeWorkPlanOfCurrMonthProcedure" code="workPlan.getOfficeWorkPlanOfCurrMonth"
    code-model="/OA/workPlan/logic/code"> 
    <parameter name="beginDate" type="String"/>  
    <parameter name="endDate" type="String"/>  
    <parameter name="deptID" type="String"/> 
  </procedure>  
  <action name="getTaskIDByOwnCreateAction" procedure="getTaskIDByOwnCreateProcedure"> 
    <public name="sData1" type="String"/>  
    <public name="activity" type="String"/>  
    <public name="executorID" type="String"/> 
  </action>  
  <procedure name="getTaskIDByOwnCreateProcedure" code="workPlan.getTaskIDByOwnCreate"
    code-model="/OA/workPlan/logic/code"> 
    <parameter name="sData1" type="String"/>  
    <parameter name="activity" type="String"/>  
    <parameter name="executorID" type="String"/> 
  </procedure>  
  <action name="workPlansOfWeekAcion" procedure="workPlansOfWeekAcionProcedure"> 
    <label language="zh_CN">获取部每周的工作计划year month week</label>  
    <public name="year" type="String"/>  
    <public name="month" type="String"/>  
    <public name="week" type="String"/> 
  </action>  
  <procedure name="workPlansOfWeekAcionProcedure" code="workPlan.getWorkPlansOfWeekPP"
    code-model="/OA/workPlan/logic/code"> 
    <parameter name="year" type="String"/>  
    <parameter name="month" type="String"/>  
    <parameter name="week" type="String"/> 
  </procedure> 
   <action name="getFDeptTiltleAction" procedure="getFDeptTiltleActionProcedure"> 
    <label language="zh_CN">获取路径</label>  
    <public name="sID" type="String"/>  
    
  </action>  
  <procedure name="getFDeptTiltleActionProcedure" code="workPlan.getFDeptTiltle"
    code-model="/OA/workPlan/logic/code"> 
    <parameter name="sID" type="String"/>  
  </procedure> 
</model>
