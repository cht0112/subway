<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="HR_OCCUPY_INFO"/>  
  <mapping concept="HR_OCCUPY_INFO"> 
    <table name="HR_OCCUPY_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="OPERATOR_ID" relation="oPERATORID" type="String"/>  
      <item field="TEST_TASK_ID" relation="tESTTASKID" type="String"/>  
      <item field="OCCUPY_START_DATE_TIME" relation="oCCUPYSTARTDATETIME" type="DateTime"/>  
      <item field="OCCUPY_END_DATE_TIME" relation="oCCUPYENDDATETIME" type="DateTime"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <index fields="OPERATOR_ID,OCCUPY_START_DATE_TIME,OCCUPY_END_DATE_TIME" name="AK_KEY_1_HR_OCCUP" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>