<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="BASE_DECTION_AND_DOCNOD"/>  
  <mapping concept="BASE_DECTION_AND_DOCNOD"> 
    <table name="BASE_DECTION_AND_DOCNOD" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="DECTION_BASED_ON_ID" relation="DECTION_BASED_ON_ID" type="Decimal"/>  
      <item field="SID" relation="SID" type="String"/> 
    </table> 
  </mapping> 
</model>