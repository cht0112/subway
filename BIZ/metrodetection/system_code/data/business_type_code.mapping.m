<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="BUSINESS_TYPE_CODE"/>
  <mapping concept="BUSINESS_TYPE_CODE">
    <table name="BUSINESS_TYPE_CODE" type="owner-table">
      <key field="bUSINESS_ID" type="Integer"/>  
      <item field="BUSINESS_ID_CNAME" relation="bUSINESSIDCNAME" type="String"/>  
      <item field="BUSINESS_ID_ENAME" relation="bUSINESSIDENAME" type="String"/> 
    </table> 
  </mapping> 
</model>