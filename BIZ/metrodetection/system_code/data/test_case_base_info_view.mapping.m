<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
  
  <store name="TEST_CASE_BASE_INFO_VIEW"/>
  <mapping concept="TEST_CASE_BASE_INFO_VIEW">
    <table name="TEST_CASE_BASE_INFO_VIEW" type="owner-table">
      <key field="fID" type="String"/>  
      <item field="TESTCASEID" relation="tESTCASEID" type="String"/>  
      <item field="TESTCASENAME" relation="tESTCASENAME" type="String"/>  
      <item field="SUBTESTCASEID" relation="sUBTESTCASEID" type="String"/> 
    </table> 
  </mapping> 
</model>