<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DECTION_BASED_ON_INFO"/>  
  <mapping concept="DECTION_BASED_ON_INFO"> 
    <table name="DECTION_BASED_ON_INFO" type="owner-table"> 
      <key field="dECTION_BASED_ON_ID" type="Integer"/>  
      <item field="DECTION_BASED_ON_NAME" relation="dECTIONBASEDONNAME" type="String"/>  
      <item field="VALID_DATE_TIME" relation="vALIDDATETIME" type="DateTime"/>  
      <item field="VALID_STATE" relation="vALIDSTATE" type="Decimal"/>  
      <item field="VERSION" relation="version" type="Integer"/> 
    <item relation="fChildstandardMid" field="fChildstandardMid" type="Decimal"></item>
</table> 
  </mapping> 
</model>