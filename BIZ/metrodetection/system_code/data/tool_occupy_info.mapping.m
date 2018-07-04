<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="TOOL_OCCUPY_INFO"/>  
  <mapping concept="TOOL_OCCUPY_INFO"> 
    <table name="TOOL_OCCUPY_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="TOOL_NO" relation="tOOLNO1" type="Integer"/>  
      <item field="TEST_TASK_ID" relation="tESTTASKID" type="Integer"/>  
      <item field="OCCUPY_START_DATE_TIME" relation="oCCUPYSTARTDATETIME" type="DateTime"/>  
      <item field="OCCUPY_END_DATE_TIME" relation="oCCUPYENDDATETIME" type="DateTime"/>
       <item field="TOOL_USED" relation="tOOLUSED" type="Integer"/>
        <item field="TECH_MANAGER" relation="tECHMANAGER" type="String"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <item field="VERSION" relation="version" type="Integer"/>
      <index fields="TOOL_NO,OCCUPY_START_DATE_TIME,OCCUPY_END_DATE_TIME" name="AK_KEY_1_TOOL_OCC" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>