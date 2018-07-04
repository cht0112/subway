<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="HR_SKILL_INFO"/>  
  <mapping concept="HR_SKILL_INFO"> 
    <table name="HR_SKILL_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="OPERATOR_ID" relation="oPERATORID" type="String"/>  
      <item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Decimal"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>  
      <item field="APPLY_FOR_RANGE" relation="aPPLYFORRANGE" type="Decimal"/>  
      <index fields="OPERATOR_ID,APPLY_FOR_DEVICE_TYPE,APPLY_FOR_RANGE" name="AK_KEY_1_HR_SKILL"
        type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
