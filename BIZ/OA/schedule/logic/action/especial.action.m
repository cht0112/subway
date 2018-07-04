<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryEspecialSchedulePersonAction" procedure="bizQueryProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_SD_especialSchedulePerson"/>  
    <private name="select" type="String" value="OA_SD_especialSchedulePerson.*"/>  
    <private name="from" type="String" value="OA_SD_especialSchedulePerson OA_SD_especialSchedulePerson"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_especialSchedulePerson"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveEspecialSchedulePersonAction" procedure="bizSaveProcedure"> 
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="OA_SD_especialSchedulePerson"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createEspecialSchedulePersonAction" procedure="bizCreateProcedure"> 
    <private name="concept" type="String" value="OA_SD_especialSchedulePerson"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="queryOA_v_especialScheduleAction" procedure="bizQueryProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_v_especialSchedule"/>  
    <private name="select" type="String" value="OA_v_especialSchedule.*"/>  
    <private name="from" type="String" value="OA_v_especialSchedule OA_v_especialSchedule"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_v_especialSchedule"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveOA_v_especialScheduleAction" procedure="bizSaveProcedure"> 
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="OA_v_especialSchedule"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createOA_v_especialScheduleAction" procedure="bizCreateProcedure"> 
    <private name="concept" type="String" value="OA_v_especialSchedule"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="queryOA_SD_ScheduleEspAction" procedure="bizQueryProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_SD_ScheduleEsp"/>  
    <private name="select" type="String" value="OA_SD_ScheduleEsp.*"/>  
    <private name="from" type="String" value="OA_SD_ScheduleEsp OA_SD_ScheduleEsp"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_ScheduleEsp"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveOA_SD_ScheduleEspAction" procedure="bizSaveProcedure"> 
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="OA_SD_ScheduleEsp"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createOA_SD_ScheduleEspAction" procedure="bizCreateProcedure"> 
    <private name="concept" type="String" value="OA_SD_ScheduleEsp"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="checkPersonScheduleAction" procedure="checkPersonScheduleProcedure"> 
    <public name="beginDate" type="String"/>  
    <public name="title" type="String"/>  
    <public name="name" type="String"/> 
    <public name="endDate" type="String"/> 
  </action>  
  <procedure name="checkPersonScheduleProcedure" code="Schedule.isValidate" code-model="/OA/schedule/logic/code"> 
    <parameter name="beginDate" type="String"/>  
    <parameter name="title" type="String"/>  
    <parameter name="name" type="String"/> 
    <parameter name="endDate" type="String"/> 
  </procedure>  
  <action name="checkPersonAction" procedure="checkPersonProcedure"> 
    <public name="fID" type="String"/> 
  </action>  
  <procedure name="checkPersonProcedure" code="Schedule.isValidatePerson" code-model="/OA/schedule/logic/code"> 
    <parameter name="fID" type="String"/> 
  </procedure> 
   <action name="deleteExecutorAction" procedure="deleteExecutorProcedure"> 
    <public name="deleteId" type="String"/> 
    <public name="names" type="String"/> 
  </action>  
  <procedure name="deleteExecutorProcedure" code="Schedule.deleteExecutorAndUpdateExecutor" code-model="/OA/schedule/logic/code"> 
    <parameter name="deleteId" type="String"/> 
    <parameter name="names" type="String"/> 
  </procedure> 
</model>
