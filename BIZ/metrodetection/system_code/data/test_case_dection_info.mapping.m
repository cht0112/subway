<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="TEST_CASE_DECTION_INFO"/>  
  <mapping concept="TEST_CASE_DECTION_INFO"> 
    <table name="TEST_CASE_DECTION_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="TEST_CASE_VER" relation="tESTCASEVER" type="Integer"/>  
      <item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>  
      <item field="APPLY_FOR_OBJECT" relation="aPPLYFOROBJECT" type="Decimal"/>  
      <item field="APPLY_FOR_DEVICE_TYPE" relation="aPPLYFORDEVICETYPE" type="Decimal"/>  
      <item field="APPLY_FOR_RANGE" relation="aPPLYFORRANGE" type="Decimal"/>  
      <item field="APPLY_FOR_SUB_RANGE" relation="aPPLYFORSUBRANGE" type="Decimal"/>  
      <index fields="TEST_CASE_VER,TEST_CASE_ID,APPLY_FOR_DEVICE_TYPE,APPLY_FOR_RANGE,APPLY_FOR_SUB_RANGE"
        name="AK_KEY_1_TEST_CASE_DECTION" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
