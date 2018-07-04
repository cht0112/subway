<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="SYSTEM_RESOURCE_INFO"/>
  <mapping concept="SYSTEM_RESOURCE_INFO">
    <table name="SYSTEM_RESOURCE_INFO" type="owner-table">
      <key field="eRROR_ID" type="Integer"/>  
      <item field="SYSTEM_TYPE" relation="sYSTEMTYPE" type="Decimal"/>  
      <item field="ERROR_TYPE" relation="eRRORTYPE" type="Decimal"/>  
      <item field="MODULE_NAME" relation="MODULE_NAME"/><item field="DECTION_OBJECT" relation="dECTIONOBJECT" type="Decimal"/>  
      <item field="DECTION_BUSINESS" relation="dECTIONBUSINESS" type="String"/>  
      <item field="ERROR_DESC" relation="eRRORDESC" type="String"/>  
      <item field="ERROR_SOLUTION  " relation="eRRORSOLUTION" type="String"/>  
      <item field="MEMO" relation="mEMO" type="String"/> 
    
</table> 
  </mapping> 
</model>