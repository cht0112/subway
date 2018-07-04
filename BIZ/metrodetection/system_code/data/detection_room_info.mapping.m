<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DETECTION_ROOM_INFO"/>  
  <mapping concept="DETECTION_ROOM_INFO"> 
    <table name="DETECTION_ROOM_INFO" type="owner-table"> 
      <item field="ROOM_TYPE" relation="rOOMTYPE" type="Integer"/>  
      <item field="ROOM_CNAME" relation="rOOMCNAME" type="String"/>  
      <item field="ROOM_ENAME" relation="rOOMENAME" type="String"/>  
      <item field="IMAGE" relation="iMAGE" type="Blob"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <key field="ROOM_ID" type="Integer"/> 
    

<item field="MANUFACTURE_ID" relation="MANUFACTURE_ID"/>
<item field="IS_DELEGATE" relation="IS_DELEGATE"/>
</table> 
  </mapping> 
</model>