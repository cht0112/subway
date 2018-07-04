<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="ROOM_OCCUPY_INFO"/>  
  <mapping concept="ROOM_OCCUPY_INFO"> 
    <table name="ROOM_OCCUPY_INFO" type="owner-table"> 
      <key field="FID" type="String"/>  
      <item field="ROOM_ID" relation="rOOMID" type="Integer"/>  
      <item field="ROOM_AREA" relation="rOOMAREA" type="String"/>  
      <item field="TEST_TASK_ID" relation="tESTTASKID" type="Integer"/>
      <item field="ROOM_USED" relation="rOOMUSED" type="Integer"/>
      <item field="TECH_MANAGER" relation="tECHMANAGER" type="String"/>  
      <item field="OCCUPY_START_DATE_TIME" relation="oCCUPYSTARTDATETIME" type="Date"/>  
      <item field="OCCUPY_END_DATE_TIME" relation="oCCUPYENDDATETIME" type="Date"/>  
      <item field="MEMO" relation="mEMO" type="String"/>
      <item field="VERSION" relation="version" type="Integer"/>
      <index fields="ROOM_ID,ROOM_AREA,OCCUPY_START_DATE_TIME,OCCUPY_END_DATE_TIME" name="AK_KEY_1_ROOM_OCC" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>