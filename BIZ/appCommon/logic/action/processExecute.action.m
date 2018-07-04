<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <procedure name="getCurrentExecuteDataProcedure" code-model="/appCommon/logic/code" code="com.justep.appCommon.ProcessExecute.getCurrentExecuteData"> 
    <parameter name="dataModel" type="String"/>  
    <parameter name="executeConcept" type="String"/>  
    <parameter name="bizID" type="String"/>  
    <parameter name="taskID" type="String"/> 
  </procedure>  
  <action name="getCurrentExecuteDataAction" procedure="getCurrentExecuteDataProcedure" global="true"> 
    <public name="dataModel" type="String"/>  
    <public name="executeConcept" type="String"/>  
    <public name="bizID" type="String"/>  
    <public name="taskID" type="String"/> 
  </action>  
  <procedure name="setCurrentExecuteDataProcedure" code-model="/appCommon/logic/code" code="com.justep.appCommon.ProcessExecute.setCurrentExecuteData"> 
    <parameter name="dataModel" type="String"/>  
    <parameter name="executeConcept" type="String"/>  
    <parameter name="bizID" type="String"/>  
    <parameter name="taskID" type="String"/>  
    <parameter name="fExecuteID" type="String"/>  
    <parameter name="fOpinion" type="String"/>  
    <parameter name="fVerdict" type="String"/> 
  </procedure>  
  <action name="setCurrentExecuteDataAction" procedure="setCurrentExecuteDataProcedure" global="true"> 
    <public name="dataModel" type="String"/>  
    <public name="executeConcept" type="String"/>  
    <public name="bizID" type="String"/>  
    <public name="taskID" type="String"/>  
    <public name="fExecuteID" type="String" />  
    <public name="fOpinion" type="String" />  
    <public name="fVerdict" type="String" /> 
  </action>  
  <procedure name="getExecuteListDataProcedure" code-model="/appCommon/logic/code" code="com.justep.appCommon.ProcessExecute.getExecuteListData"> 
    <parameter name="dataModel" type="String"/>  
    <parameter name="executeConcept" type="String"/>  
    <parameter name="bizID" type="String"/>  
    <parameter name="condition" type="String"/>  
    <parameter name="orderBy" type="String"/> 
  </procedure>  
  <action name="getExecuteListDataAction" procedure="getExecuteListDataProcedure" global="true"> 
    <public name="dataModel" type="String"/>  
    <public name="executeConcept" type="String"/>  
    <public name="bizID" type="String"/>  
    <public name="condition" type="String"/>  
    <public name="orderBy" type="String" value="EXECUTE_CONCEPT.fUpdateTime"/> 
  </action> 
</model>
