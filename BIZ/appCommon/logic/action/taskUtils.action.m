<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <procedure name="isNoticeTaskProcedure" code-model="/appCommon/logic/code" code="com.justep.appCommon.TaskUtils.isNoticeTask"> 
    <parameter name="task" type="String"/> 
  </procedure>  
  <action name="isNoticeTaskAction" procedure="isNoticeTaskProcedure" global="true"> 
    <public name="task" type="String"/> 
  </action> 
</model>
