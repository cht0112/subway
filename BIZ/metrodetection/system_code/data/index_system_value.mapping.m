<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="INDEX_SYSTEM_VALUE"/>
  <mapping concept="INDEX_SYSTEM_VALUE">
    <table name="INDEX_SYSTEM_VALUE" type="owner-table">
      <key field="INDEX_NO" type="Integer"/>  
      <item field="INDEX_SYSTEM_NO" relation="iNDEXSYSTEMNO" type="Integer"/>  
      <item field="BUSINESS_ID" relation="bUSINESSID" type="Integer"/>  
      <item field="INDEX_ID" relation="iNDEXID" type="Integer"/>  
      <item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Integer"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Integer"/>  
      <item field="INDEX_VALUE" relation="iNDEXVALUE" type="String"/>  
      <item field="INDEX_VALUE_DESC" relation="iNDEXVALUEDESC" type="String"/> 
    </table> 
  </mapping> 
</model>