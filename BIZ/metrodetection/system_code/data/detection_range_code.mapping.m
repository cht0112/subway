<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="DETECTION_RANGE_CODE"/>
  <mapping concept="DETECTION_RANGE_CODE">
    <table name="DETECTION_RANGE_CODE" type="owner-table">
      <key field="fID" type="String"/>  
      <item field="DETECTION_RANGE_TYPE" relation="dETECTIONRANGETYPE" type="Integer"/>  
      <item field="DETECTION_RANGE_ID" relation="dETECTIONRANGEID" type="Decimal"/>  
      <item field="RANGE_ID_CNAME" relation="rANGEIDCNAME" type="String"/>  
      <item field="RANGE_ID_ENAME" relation="rANGEIDENAME" type="String"/>  
      <index fields="DETECTION_RANGE_TYPE,DETECTION_RANGE_ID" name="AK_KEY_1_DETECTIO"
        type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
