<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="INDEX_ID_APPLY_INFO"/>
  <mapping concept="INDEX_ID_APPLY_INFO">
    <table name="INDEX_ID_APPLY_INFO" type="owner-table">
      <key field="fID" type="String"/>  
      <item field="INDEX_ID" relation="iNDEXID" type="Integer"/>  
      <item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Decimal"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>  
      <index fields="INDEX_ID,APPLY_FOR_DEVICE_TYPE" name="AK_KEY_1_INDEX_ID"
        type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
