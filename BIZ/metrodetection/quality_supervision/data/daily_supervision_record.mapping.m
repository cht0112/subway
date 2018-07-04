<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DAILY_SUPERVISION_RECORD"/>
  <mapping concept="DAILY_SUPERVISION_RECORD">
    <table name="DAILY_SUPERVISION_RECORD" type="owner-table">
      <key field="RECORD_ID" type="Integer"/>  
        
      <item field="SUPERVISION_PLAN_ID" relation="SUPERVISION_PLAN_IDID"/><item field="RECORD_CODE" relation="RECORD_CODE" type="String"/>  
      <item field="RECORD_NO" relation="RECORD_NO" type="String"/>  
      <item field="RECORD_DATE" relation="RECORD_DATE" type="Date"/>  
      <item field="SUPERVISION_PERSON" relation="SUPERVISION_PERSON" type="String"/>  
      <item field="RECORD_CONTENT" relation="RECORD_CONTENT" type="String"/>  
      <item field="FACTUAL_RECORD" relation="FACTUAL_RECORD" type="String"/>  
      <item field="CONFIRMATION_OPINIONS" relation="CONFIRMATION_OPINIONS" type="String"/>  
      <item field="SUPPLEMENTARY_DESC" relation="SUPPLEMENTARY_DESC" type="String"/>  
      <item field="RESPONSOR_PERSON" relation="RESPONSOR_PERSON" type="String"/>  
      <item field="SIGNING_DATE" relation="SIGNING_DATE" type="Date"/>  
       
    
</table> 
  </mapping> 
</model>