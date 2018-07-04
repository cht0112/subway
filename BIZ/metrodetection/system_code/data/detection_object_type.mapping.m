<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="DETECTION_OBJECT_TYPE"/>
  <mapping concept="DETECTION_OBJECT_TYPE">
    <table name="DETECTION_OBJECT_TYPE" type="owner-table">
      <key field="detection_object_type" type="Integer"/>  
      <item field="DETECTION_OBJECT_CNAME" relation="dETECTIONOBJECTCNAME" type="String"/>  
      <item field="DETECTION_OBJECT_ENAME" relation="dETECTIONOBJECTENAME" type="String"/> 
    </table> 
  </mapping> 
</model>
