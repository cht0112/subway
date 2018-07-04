<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DECTION_FILE_CODE"/>
  <mapping concept="DECTION_FILE_CODE">
    <table name="DECTION_FILE_CODE" type="owner-table">
      <key field="fILE_ID" type="Integer"/>  
      <item field="CITY_CODE" relation="cITYCODE" type="Decimal"/>  
      <item field="FILE_ID_CNAME" relation="fILEIDCNAME" type="String"/>  
      <item field="FILE_ID_ENAME" relation="fILEIDENAME" type="String"/> 
    </table> 
  </mapping> 
</model>