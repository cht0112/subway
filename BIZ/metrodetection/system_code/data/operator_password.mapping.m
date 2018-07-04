<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="OPERATOR_PASSWORD"/>  
  <mapping concept="OPERATOR_PASSWORD"> 
    <table name="OPERATOR_PASSWORD" type="owner-table"> 
      <key field="OPERATOR_ID" type="String"/>  
      <item field="USER_NAME" relation="uSERNAME" type="String"/>  
      <item field="USER_TYPE" relation="uSERTYPE" type="Decimal"/>  
      <item field="VALID_END_DATE" relation="vALIDENDDATE" type="DateTime"/>  
      <item field="OPERATOR_PASSWORD" relation="oPERATORPASSWORD" type="String"/>  
      <item field="ORG_ID" relation="oRGID" type="String"/> 
    </table> 
  </mapping> 
</model>