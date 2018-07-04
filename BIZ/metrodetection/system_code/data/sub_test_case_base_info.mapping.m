<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="SUB_TEST_CASE_BASE_INFO"/>
  <mapping concept="SUB_TEST_CASE_BASE_INFO">
    <table name="SUB_TEST_CASE_BASE_INFO" type="owner-table">
      <key field="fID" type="String"/>  
      <item field="TEST_CASE_VER" relation="tESTCASEVER" type="Integer"/>  
      <item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>  
      <item field="SUB_TEST_CASE_ID" relation="sUBTESTCASEID" type="String"/>  
      <item field="SUB_TEST_CASE_NAME" relation="sUBTESTCASENAME" type="String"/>  
      <item field="SUB_TEST_CASE_PRIOR" relation="sUBTESTCASEPRIOR" type="Decimal"/>  
      <item field="SUB_TEST_CASE_ORDER" relation="sUBTESTCASEORDER" type="Decimal"/>  
      <item field="SUB_TEST_CASE_TIME" relation="sUBTESTCASETIME" type="Decimal"/>  
      <item field="TIME_UNIT_ID" relation="tIMEUNITID" type="Decimal"/>  
      <item field="INDEX_NAME" relation="iNDEXNAME" type="String"/> 
      <index fields="TEST_CASE_VER,TEST_CASE_ID,SUB_TEST_CASE_ID" name="AK_1_SUB_TEST_CASE" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>