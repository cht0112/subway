<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="INDEX_ID_BASE_INFO"/>  
  <mapping concept="INDEX_ID_BASE_INFO"> 
    <table name="INDEX_ID_BASE_INFO" type="owner-table"> 
      <key field="INDEX_ID" type="Integer"/>  
      <item field="INDEX_ID_CNAME" relation="iNDEXIDCNAME" type="String"/>  
      <item field="INDEX_ID_DEFINITION" relation="iNDEXIDDEFINITION" type="String"/>  
      <item field="DETECTION_RANGE_TYPE" relation="dETECTIONRANGETYPE" type="Decimal"/>  
      <item field="DETECTION_RANGE_ID" relation="dETECTIONRANGEID" type="Decimal"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <item field="childindexId" relation="childindexId" type="Integer"/> 
    </table> 
  </mapping> 
</model>