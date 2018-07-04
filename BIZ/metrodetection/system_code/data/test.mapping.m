<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="TEST_CASE_BASE_NEW"/>
  <mapping concept="TEST_CASE_BASE_NEW">
    <table name="TEST_CASE_BASE_NEW" type="owner-table">
      <key field="fID" type="String"/>  
      <item field="TESTCASEID" relation="tESTCASEID" type="String"/>  
      <item field="TESTCASENAME" relation="tESTCASENAME" type="String"/>  
      <item field="SUBTESTCASEID" relation="sUBTESTCASEID" type="String"/> 
    </table> 
  </mapping> 
</model>
