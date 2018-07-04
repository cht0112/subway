<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryWhoShared2MeAction" procedure="queryWhoShared2MeProcedure"> 
    <label language="zh_CN">查谁共享给我</label> 
  </action>  
  <procedure code="ScheduleSharedInfo.queryWhoShared2Me" code-model="/metrodetection/system_code/logic/code"
    name="queryWhoShared2MeProcedure"/>  
  <action name="addScheduleAction" procedure="addScheduleProcedure"> 
    <public name="cmd" type="Xml"/>  
    <label language="zh_CN">增加日程</label> 
  </action>  
  <procedure code-model="/metrodetection/system_code/logic/code" code="Detection_Process_Related.addSchedule"
    name="addScheduleProcedure"> 
    <parameter name="cmd" type="Xml"/> 
  </procedure>  
  <action name="newScheduleAction" procedure="newScheduleProcedure"> 
    <label language="zh_CN">新建日程</label>  
    <public name="fTitle" type="String"/>  
    <public name="fBeginTime" type="String"/>  
    <public name="fEndTime" type="String"/> 
  </action>  
  <procedure name="newScheduleProcedure" code-model="/metrodetection/system_code/logic/code" code="Detection_Process_Related.newSchedule">
    <parameter name="fTitle" type="String"/>
    <parameter name="fBeginTime" type="String"/>
    <parameter name="fEndTime" type="String"/>
  </procedure>
  
  <action name="deleteScheduleAction" procedure="deleteScheduleProcedure"> 
    <public name="fID" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.deleteSchedule" code-model="/metrodetection/system_code/logic/code"
    name="deleteScheduleProcedure"> 
    <parameter name="fID" type="String"/> 
  </procedure>  
  <action name="deleteScheduleByBizAction" procedure="deleteScheduleByBizProcedure"> 
    <public name="fBizID" type="String"/>  
    <public name="fBizType" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.deleteScheduleByBiz" code-model="/metrodetection/system_code/logic/code"
    name="deleteScheduleByBizProcedure"> 
    <parameter name="fBizID" type="String"/>  
    <parameter name="fBizType" type="String"/> 
  </procedure>  
  <action name="updateScheduleAction" procedure="updateScheduleProcedure"> 
    <public name="fID" type="String"/>  
    <public name="fTitle" type="String"/>  
    <public name="fBeginTime" type="String"/>  
    <public name="fEndTime" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.updateSchedule" code-model="/metrodetection/system_code/logic/code"
    name="updateScheduleProcedure"> 
    <parameter name="fID" type="String"/>  
    <parameter name="fTitle" type="String"/>  
    <parameter name="fBeginTime" type="String"/>  
    <parameter name="fEndTime" type="String"/> 
  </procedure>  
  <action name="getExecutorFullIDsAction" procedure="getExecutorFullIDsProcedure"> 
    <public name="executorIDs" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.getExecutorFullIDs" code-model="/metrodetection/system_code/logic/code"
    name="getExecutorFullIDsProcedure"> 
    <parameter name="executorIDs" type="String"/> 
  </procedure>  
  <action name="addSchedule2Action" procedure="addScheduleProcedure2"> 
    <label language="zh_CN">增加日程</label>  
    <public name="cmd" type="Xml"/> 
  </action>  
  <procedure code="OA.schedule.ScheduleInterface.newSchedule" code-model="/metrodetection/system_code/logic/code"
    name="addScheduleProcedure2"> 
    <parameter name="cmd" type="Xml"/> 
  </procedure>  
  <action name="getCurrentPersonIDAction" procedure="getCurrentPersonIDProcedure"/>  
  <procedure code="Detection_Process_Related.getCurrentPersonID" code-model="/metrodetection/system_code/logic/code"
    name="getCurrentPersonIDProcedure"/>  
  <action name="getScheduleDataAction" procedure="getScheduleDataProcedure"> 
    <public name="dateStr" type="String"/>  
    <public name="count" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.getPortletData" code-model="/metrodetection/system_code/logic/code"
    name="getScheduleDataProcedure"> 
    <parameter name="dateStr" type="String"/>  
    <parameter name="count" type="String"/> 
  </procedure>  
  <action name="deleteScheduleExecutorsAction" procedure="deleteScheduleExecutorsProcedure"> 
    <public name="fMasterID" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.deleteScheduleExecutorsByID" code-model="/metrodetection/system_code/logic/code"
    name="deleteScheduleExecutorsProcedure"> 
    <parameter name="fMasterID" type="String"/> 
  </procedure>  
  <action name="getManageOrgIDsAction" procedure="getManageOrgIDsProcedure"> 
    <public name="manageCodes" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.getManageOrgIDs" code-model="/metrodetection/system_code/logic/code"
    name="getManageOrgIDsProcedure"> 
    <parameter name="manageCodes" type="String"/> 
  </procedure>  
  <action name="getScheduleCountAction" procedure="getScheduleCountProcedure"> 
    <public name="dateStr" type="String"/> 
  </action>  
  <procedure code="Detection_Process_Related.getScheduleCount" code-model="/metrodetection/system_code/logic/code"
    name="getScheduleCountProcedure"> 
    <parameter name="dateStr" type="String"/> 
  </procedure>  
  <action name="queryOA_SD_ScheduleAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String"/>  
    <private name="from" type="String"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="queryOA_SD_SCHEDULEAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_SD_SCHEDULE"/>  
    <private name="select" type="String" value="OA_SD_SCHEDULE.*"/>  
    <private name="from" type="String" value="OA_SD_SCHEDULE OA_SD_SCHEDULE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_SCHEDULE"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveOA_SD_SCHEDULEAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="OA_SD_SCHEDULE"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createOA_SD_SCHEDULEAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="OA_SD_SCHEDULE"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="queryOA_SD_EXECUTORAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_SD_EXECUTOR"/>  
    <private name="select" type="String" value="OA_SD_EXECUTOR.*"/>  
    <private name="from" type="String" value="OA_SD_EXECUTOR OA_SD_EXECUTOR"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_EXECUTOR"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveOA_SD_EXECUTORAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="OA_SD_EXECUTOR"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createOA_SD_EXECUTORAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="OA_SD_EXECUTOR"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
  <action name="queryOA_SD_SHARERANGEAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="OA_SD_SHARERANGE"/>  
    <private name="select" type="String" value="OA_SD_SHARERANGE.*"/>  
    <private name="from" type="String" value="OA_SD_SHARERANGE OA_SD_SHARERANGE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_SD_SHARERANGE"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveOA_SD_SHARERANGEAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="OA_SD_SHARERANGE"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createOA_SD_SHARERANGEAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="OA_SD_SHARERANGE"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action> 
</model>
