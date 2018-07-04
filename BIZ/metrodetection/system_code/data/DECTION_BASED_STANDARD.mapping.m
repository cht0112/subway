<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="DECTION_BASED_STANDARD"/>  
  <mapping concept="DECTION_BASED_STANDARD"> 
    <table name="DECTION_BASED_STANDARD" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="DECTION_BASED_ON_ID" relation="DECTION_BASED_ON_ID" type="Decimal"/>  
      <index fields="DECTION_BASED_ON_ID,SID" name="AK_DECTION_BASED_STANDARD"
        type="UNIQUE"/>  
      <item relation="SID" field="SID"/> 
    </table> 
  </mapping> 
</model>
