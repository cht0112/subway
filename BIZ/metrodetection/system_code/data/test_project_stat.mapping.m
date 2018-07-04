<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="TEST_PROJECT_STAT"/>  
  <mapping concept="TEST_PROJECT_STAT"> 
    <table name="TEST_PROJECT_STAT" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="REPORT_DATE" relation="rEPORTDATE" type="Integer"/>  
      <item field="PROJECT_DATE" relation="pROJECTDATE" type="Integer"/>  
      <item field="BUSINESS_ID" relation="bUSINESSID" type="Integer"/>  
      <item field="BUSINESS_STAGE" relation="bUSINESSSTAGE" type="Integer"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Integer"/>  
      <item field="MANUFACTURE_ID" relation="mANUFACTUREID" type="Integer"/>  
      <item field="PROJECT_NUMBER" relation="pROJECTNUMBER" type="Integer"/>  
      <item field="SUB_TEST_CASE_NUMBER" relation="sUBTESTCASENUMBER" type="Integer"/>  
      <item field="SUB_TEST_CASE_TIME" relation="sUBTESTCASETIME" type="Integer"/>  
      <index fields="REPORT_DATE,PROJECT_DATE,BUSINESS_ID,BUSINESS_STAGE,APPLY_FOR_DEVICE_TYPE,MANUFACTURE_ID"
        name="AK_KEY_1_TEST_PRO" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
