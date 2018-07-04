<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="createSDSCHEDULEAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_SD_Schedule"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="querySDSCHEDULEAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_SD_Schedule"/>  
    <private name="select" type="String" value="OA_SD_Schedule.*"/>  
    <private name="from" type="String" value="OA_SD_Schedule OA_SD_Schedule"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_Schedule"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="queryMySDSCHEDULEAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_SD_Schedule"/>  
    <private name="select" type="String" value="OA_SD_Schedule,OA_SD_Schedule.fTitle as fTitle,OA_SD_Schedule.fBeginTime as fBeginTime,OA_SD_Schedule.fEndTime as fEndTime,OA_SD_Schedule.fExecutors as fExecutors"/>  
    <private name="from" type="String" value="OA_SD_Schedule OA_SD_Schedule"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_Schedule"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveSDSCHEDULEAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_SD_Schedule"/>  
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/> 
  </action>  
  <action name="createSDEXECUTORAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_SD_Executor"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="querySDEXECUTORAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_SD_Executor"/>  
    <private name="select" type="String" value="OA_SD_Executor.*"/>  
    <private name="from" type="String" value="OA_SD_Executor OA_SD_Executor"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_Executor"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="queryMySDEXECUTORAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_SD_Executor"/>  
    <private name="select" type="String" value="OA_SD_Executor,OA_SD_Executor.fSDMasterID as fSDMasterID,OA_SD_Executor.fExecutorID as fExecutorID,OA_SD_Schedule.fTitle as fTitle,OA_SD_Schedule.fBeginTime as fBeginTime,OA_SD_Schedule.fEndTime as fEndTime,OA_SD_Schedule.fContent as fContent,OA_SD_Schedule.fExecutors as fExecutors"/>  
    <private name="from" type="String" value="OA_SD_Executor OA_SD_Executor join OA_SD_Schedule OA_SD_Schedule on OA_SD_Executor.fSDMasterID = OA_SD_Schedule"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_Executor"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveSDEXECUTORAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_SD_Executor"/>  
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/> 
  </action>  
  <action name="createSDSHARERANGEAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_SD_ShareRange"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="querySDSHARERANGEAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_SD_ShareRange"/>  
    <private name="select" type="String" value="OA_SD_ShareRange.*"/>  
    <private name="from" type="String" value="OA_SD_ShareRange OA_SD_ShareRange"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_ShareRange"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>
  </action>  
  <action name="saveSDSHARERANGEAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_SD_ShareRange"/>  
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/schedule/data"/> 
  </action>  
  <action name="queryWhoShared2MeAction" procedure="queryWhoShared2MeProcedure" > 
    <label language="zh_CN">查谁共享给我</label> 
  </action>  
  <procedure name="queryWhoShared2MeProcedure" code="ScheduleSharedInfo.queryWhoShared2Me" code-model="/OA/schedule/logic/code"/>  
  <action name="addScheduleAction" procedure="addScheduleProcedure" > 
  	 <public name="cmd" type="Xml"/>  
    <label language="zh_CN">增加日程</label> 
  </action>  
  <procedure name="addScheduleProcedure" code="Schedule.addSchedule" code-model="/OA/schedule/logic/code"> 
    <parameter name="cmd" type="Xml"/> 
  </procedure>  
  <action name="newScheduleAction" procedure="newScheduleProcedure" > 
    <label language="zh_CN">新建日程</label>  
    <public name="fTitle" type="String"/>  
    <public name="fBeginTime" type="String"/>  
    <public name="fEndTime" type="String"/> 
  </action>  
  <procedure name="newScheduleProcedure" code="Schedule.newSchedule" code-model="/OA/schedule/logic/code"> 
    <parameter name="fTitle" type="String"/>  
    <parameter name="fBeginTime" type="String"/>  
    <parameter name="fEndTime" type="String"/> 
  </procedure>  
  <action name="deleteScheduleAction" procedure="deleteScheduleProcedure" >
     <public name="fID" type="String"/> 
  </action>  
  <procedure name="deleteScheduleProcedure" code="Schedule.deleteSchedule" code-model="/OA/schedule/logic/code"> 
    <parameter name="fID" type="String"/> 
  </procedure>  
  <action name="deleteScheduleByBizAction" procedure="deleteScheduleByBizProcedure" >
  	 <public name="fBizID" type="String"/> 
  	 <public name="fBizType" type="String"/> 
  </action>  
  <procedure name="deleteScheduleByBizProcedure" code="Schedule.deleteScheduleByBiz" code-model="/OA/schedule/logic/code"> 
    <parameter name="fBizID" type="String"/>  
    <parameter name="fBizType" type="String"/> 
  </procedure>  
  <action name="updateScheduleAction" procedure="updateScheduleProcedure" > 
    <public name="fID" type="String"/>  
    <public name="fTitle" type="String"/>  
    <public name="fBeginTime" type="String"/>  
    <public name="fEndTime" type="String"/> 
  </action>  
  <procedure name="updateScheduleProcedure" code="Schedule.updateSchedule" code-model="/OA/schedule/logic/code"> 
    <parameter name="fID" type="String"/>  
    <parameter name="fTitle" type="String"/>  
    <parameter name="fBeginTime" type="String"/>  
    <parameter name="fEndTime" type="String"/> 
  </procedure>  
  <action name="getExecutorFullIDsAction" procedure="getExecutorFullIDsProcedure" >
 	<public name="executorIDs" type="String"/>  
  </action>  
  <procedure name="getExecutorFullIDsProcedure" code="Schedule.getExecutorFullIDs" code-model="/OA/schedule/logic/code"> 
    <parameter name="executorIDs" type="String"/> 
  </procedure>  
  <action name="addSchedule2Action" procedure="addScheduleProcedure2" > 
    <label language="zh_CN">增加日程</label> 
    <public name="cmd" type="Xml"/>  
  </action>  
  <procedure name="addScheduleProcedure2" code="OA.schedule.ScheduleInterface.newSchedule" code-model="/OA/schedule/logic/code"> 
    <parameter name="cmd" type="Xml"/> 
  </procedure>  
  <action name="getCurrentPersonIDAction" procedure="getCurrentPersonIDProcedure" />  
  <procedure name="getCurrentPersonIDProcedure" code="Schedule.getCurrentPersonID" code-model="/OA/schedule/logic/code"/>  
  <action name="getScheduleDataAction" procedure="getScheduleDataProcedure" >
    <public name="dateStr" type="String"/>  
    <public name="count" type="String"/>  
  </action>  
  <procedure name="getScheduleDataProcedure" code="Schedule.getPortletData" code-model="/OA/schedule/logic/code"> 
    <parameter name="dateStr" type="String"/>  
    <parameter name="count" type="String"/> 
  </procedure> 
  
  <action name="deleteScheduleExecutorsAction" procedure="deleteScheduleExecutorsProcedure" >
    <public name="fMasterID" type="String"/>  
  </action>  
  <procedure name="deleteScheduleExecutorsProcedure" code="Schedule.deleteScheduleExecutorsByID" code-model="/OA/schedule/logic/code"> 
    <parameter name="fMasterID" type="String"/>  
  </procedure> 
  
   <action name="getManageOrgIDsAction" procedure="getManageOrgIDsProcedure"> 
    <public name="manageCodes" type="String"/> 
  </action>  
  <procedure name="getManageOrgIDsProcedure" code-model="/OA/schedule/logic/code" code="Schedule.getManageOrgIDs"> 
    <parameter name="manageCodes" type="String"/> 
  </procedure>
  
  <action name="getScheduleCountAction" procedure="getScheduleCountProcedure">
    <public name="dateStr" type="String"/>  
  </action>  
  <procedure name="getScheduleCountProcedure" code="Schedule.getScheduleCount" code-model="/OA/schedule/logic/code"> 
    <parameter name="dateStr" type="String"/>  
  </procedure> 
</model>
