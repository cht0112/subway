<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="INDEX_SYSTEM_PARAMETER"/>  
  <mapping concept="INDEX_SYSTEM_PARAMETER"> 
    <table name="INDEX_SYSTEM_PARAMETER" type="owner-table"> 
      <key field="INDEX_SYSTEM_NO" type="Integer"/>  
      <item field="INDEX_SYSTEM_NAME" relation="iNDEXSYSTEMNAME" type="String"/>  
      <item field="MAKE_DATE_TIME" relation="mAKEDATETIME" type="Date"/>  
      <item field="DECTION_BASED_ON_ID" relation="dECTIONBASEDONID" type="Decimal"/>  
      <item field="VALID_STATE" relation="vALIDSTATE" type="Decimal"/> 
    </table> 
  </mapping> 
</model>