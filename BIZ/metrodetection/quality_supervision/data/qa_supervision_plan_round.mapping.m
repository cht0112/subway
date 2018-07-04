<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="QA_SUPERVISION_PLAN_ROUND"/>  
  <mapping concept="QA_SUPERVISION_PLAN_ROUND">
    <table name="QA_SUPERVISION_PLAN_ROUND" type="owner-table">
      <key field="ROUND_ID" type="Integer"/>  
      <item field="SUPERVISION_PLAN_ID" relation="SUPERVISION_PLAN_ID" type="Integer"/>  
      <item field="ROUND_NO" relation="ROUND_NO" type="Integer"/>  
      <item field="SUPERVISION_DATE" relation="SUPERVISION_DATE" type="Date"/>  
      <item field="SUPERVISION_PERSON" relation="SUPERVISION_PERSON" type="String"/>  
      <index fields="SUPERVISION_PLAN_ID" name="RELATIONSHIP_3_FK" type="NORMAL"/> 
    </table> 
  </mapping> 
</model>