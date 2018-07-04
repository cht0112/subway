<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="TOOL_APPLY_INFO"/>  
  <mapping concept="TOOL_APPLY_INFO"> 
    <table name="TOOL_APPLY_INFO" type="owner-table"> 
      <key field="FID" type="String"/>  
      <item field="TOOL_TYPE_ID" relation="tOOLTYPEID" type="Integer"/>  
      <item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Decimal"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>  
      <item field="APPLY_FOR_RANGE" relation="aPPLYFORRANGE" type="Decimal"/>  
      <index fields="TOOL_TYPE_ID,APPLY_FOR_DEVICE_TYPE,APPLY_FOR_RANGE" name="AK_KEY_1_TOOL_APP" type="UNIQUE"/> 
    <item field="TOOL_NO" relation="tOOLNO2" type="Decimal"/>
</table> 
  </mapping> 
</model>