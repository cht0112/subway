<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">  
  <procedure name="getDateQueryDataProcedure" code-model="/OA/meeting/logic/code" code="Meeting.getDateQueryData"> 
    <parameter name="beginDate" type="String"/>  
    <parameter name="endDate" type="String"/>  
    <parameter name="roomID" type="String"/> 
  </procedure>  
  <procedure name="getRoomQueryDataProcedure" code-model="/OA/meeting/logic/code" code="Meeting.getRoomQueryData"> 
    <parameter name="roomDate" type="String"/>  
    <parameter name="roomIDStr" type="String"/>  
    <parameter name="roomFilterStr" type="String"/> 
  </procedure>  
  <procedure name="weekMeetingArrageReportProcedure" code-model="/OA/meeting/logic/code" code="Meeting.weekMeetingArrageReport"> 
    <parameter name="tempDateTimeOrcl" type="String"/>
  </procedure> 
</model>
