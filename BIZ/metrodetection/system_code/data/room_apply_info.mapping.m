<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="ROOM_APPLY_INFO"/>  
  <mapping concept="ROOM_APPLY_INFO"> 
    <table name="ROOM_APPLY_INFO" type="owner-table"> 
      <key field="FID" type="String"/>  
      <item field="ROOM_AREA" relation="rOOMAREA" type="String"/>  
      <item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Decimal"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>  
      <item field="APPLY_FOR_RANGE" relation="aPPLYFORRANGE" type="Decimal"/>  
      <item field="IMAGE" relation="iMAGE"/>  
      <index fields="ROOM_AREA,APPLY_FOR_DEVICE_TYPE,APPLY_FOR_RANGE" name="AK_KEY_1_ROOM_APP" type="UNIQUE"/>  
      <item field="ROOM_ID" relation="rOOMID"/> 
    </table> 
  </mapping> 
</model>