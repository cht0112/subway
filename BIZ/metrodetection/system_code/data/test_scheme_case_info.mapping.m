<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="TEST_SCHEME_CASE_INFO"/>  
  <mapping concept="TEST_SCHEME_CASE_INFO"> 
    <table name="TEST_SCHEME_CASE_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="TEST_SCHEME_ID" relation="tESTSCHEMEID" type="Integer"/>  
      <item field="BUSINESS_ID" relation="bUSINESSID" type="Decimal"/>  
      <item field="BUSINESS_STAGE" relation="bUSINESSSTAGE" type="Decimal"/>  
      <item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Decimal"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>  
      <item field="TEST_CASE_VER" relation="tESTCASEVER" type="Decimal"/>  
      <item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>  
      <index fields="TEST_SCHEME_ID,BUSINESS_STAGE,TEST_CASE_ID" name="AK_KEY_1_TEST_SCH"
        type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
