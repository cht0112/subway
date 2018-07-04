<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DEFECT_TRACK_PROJECT_INFO"/>  
  <mapping concept="DEFECT_TRACK_PROJECT_INFO">
    <table name="DEFECT_TRACK_PROJECT_INFO" type="owner-table">
      <key field="PROJECT_ID" type="Integer"/>  
      <item field="PROJECT_NAME" relation="PROJECT_NAME" type="String"/>  
      <item field="PROJECT_MANAGER" relation="PROJECT_MANAGER" type="String"/>  
      <item field="PROJECT_DESC" relation="PROJECT_DESC" type="String"/> 
       <item field="MEMO" relation="MEMO" type="String"/>
<item relation="fChildProductProjectID" field="fChildProductProjectID" type="Integer"></item>
</table> 
  </mapping> 
</model>