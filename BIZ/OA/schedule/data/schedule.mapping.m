<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="OA_SD_Schedule"/>  
  <store name="OA_SD_Executor"/>  
  <store name="OA_SD_ShareRange"/>  
  <mapping concept="OA_SD_Schedule"> 
    <table name="OA_SD_Schedule" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fTitle" relation="fTitle" type="String"/>  
      <item field="fBeginDatePart" relation="fBeginDatePart" type="Date"/>  
      <item field="fBeginTimePart" relation="fBeginTimePart" type="String"/>  
      <item field="fBeginTime" relation="fBeginTime" type="DateTime"/>  
      <item field="fEndDatePart" relation="fEndDatePart" type="Date"/>  
      <item field="fEndTimePart" relation="fEndTimePart" type="String"/>  
      <item field="fEndTime" relation="fEndTime" type="DateTime"/>  
      <item field="fContent" relation="fContent" type="String"/>  
      <item field="fExecutors" relation="fExecutors" type="String"/>  
      <item field="fIsShared" relation="fIsShared" type="Integer"/>  
      <item field="fIsRemind" relation="fIsRemind" type="Integer"/>  
      <item field="fRemindDatePart" relation="fRemindDatePart" type="Date"/>  
      <item field="fRemindTimePart" relation="fRemindTimePart" type="String"/>  
      <item field="fRemindTime" relation="fRemindTime" type="DateTime"/>  
      <item field="fCreatePsnID" relation="fCreatePsnID" type="String"/>  
      <item field="fCreatePsnName" relation="fCreatePsnName" type="String"/>  
      <item field="fCreateTime" relation="fCreateTime" type="DateTime"/>  
      <item field="fCreateURL" relation="fCreateURL" type="String"/>  
      <item field="fBizID" relation="fBizID" type="String"/>  
      <item field="fBizType" relation="fBizType" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_SD_Executor"> 
    <table name="OA_SD_Executor" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fMasterID" relation="fSDMasterID" type="String"/>  
      <item field="fExecutorID" relation="fExecutorID" type="String"/>  
      <item field="fExecutorName" relation="fExecutorName" type="String"/>  
      <item field="fRemark" relation="fRemark" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_SD_ShareRange"> 
    <table name="OA_SD_ShareRange" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fShareType" relation="fShareType" type="Integer"/>  
      <item field="fSharedOrgKindID" relation="fSharedOrgKindID" type="String"/>  
      <item field="fSharedOrgID" relation="fSharedOrgID" type="String"/>  
      <item field="fSharedOrgName" relation="fSharedOrgName" type="String"/>  
      <item field="fSharedOrgFID" relation="fSharedOrgFID" type="String"/>  
      <item field="fSharedOrgFName" relation="fSharedOrgFName" type="String"/>  
      <item field="fShareToOrgKindID" relation="fShareToOrgKindID" type="String"/>  
      <item field="fShareToOrgID" relation="fShareToOrgID" type="String"/>  
      <item field="fShareToOrgName" relation="fShareToOrgName" type="String"/>  
      <item field="fShareToOrgFID" relation="fShareToOrgFID" type="String"/>  
      <item field="fShareToOrgFName" relation="fShareToOrgFName" type="String"/> 
    </table> 
  </mapping> 
</model>