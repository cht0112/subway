<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="ACADEMIC_DEGREE_CODE"/>
  <mapping concept="ACADEMIC_DEGREE_CODE">
    <table name="ACADEMIC_DEGREE_CODE" type="owner-table">
      <key field="dEGREE_ID" type="Integer"/>  
      <item field="DEGREE_ID_CNAME" relation="dEGREEIDCNAME" type="String"/>  
      <item field="DEGREE_ID_ENAME" relation="dEGREEIDENAME" type="String"/> 
    </table> 
  </mapping> 
</model>
