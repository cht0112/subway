<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="DECTION_STANDARD_ON_INFO"/>  
  <mapping concept="DECTION_STANDARD_ON_INFO"> 
    <table name="DECTION_STANDARD_ON_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="DECTION_STANDARD_TYPE" relation="DECTION_STANDARD_TYPE" type="Decimal"/>  
      <item field="DECTION_STANDARD_ID" relation="DECTION_STANDARD_ID" type="String"/>  
      <item field="CITY_CODE" relation="CITY_CODE" type="Decimal"/>  
      <item field="PUBLISH_DATE" relation="PUBLISH_DATE" type="Date"/>  
      <item field="STANDARD_E_FILE_ID" relation="STANDARD_E_FILE_ID" type="String"/>  
      <item field="STANDARD_FILE_VER" relation="STANDARD_FILE_VER" type="String"/>  
      <item field="STANDARD_FILE_DESC" relation="STANDARD_FILE_DESC" type="String"/>  
      <index fields="DECTION_STANDARD_ID" name="UK_DECTION_STANDARD_INFO" type="UNIQUE"/>  
      <item field="childStandrad" relation="childStandrad" type="String"/> 
    </table> 
  </mapping> 
</model>
