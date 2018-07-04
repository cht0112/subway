<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="DEVICE_TYPE_CODE"/>
  <mapping concept="DEVICE_TYPE_CODE">
    <table name="DEVICE_TYPE_CODE" type="owner-table">
      <key field="fID" type="String"/>  
      <item field="DETECTION_OBJECT_TYPE" relation="dETECTIONOBJECTTYPE" type="Integer"/>  
      <item field="DEVICE_TYPE" relation="dEVICETYPE" type="Integer"/>  
      <item field="DEVICE_TYPE_CNAME" relation="dEVICETYPECNAME" type="String"/>  
      <item field="DEVICE_TYPE_ENAME" relation="dEVICETYPEENAME" type="String"/>  
      <index fields="DETECTION_OBJECT_TYPE,DEVICE_TYPE" name="AK_KEY_1_DEVICE_T"
        type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
