<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="TEST_CASE_BASE_INFO"/>
  <mapping concept="TEST_CASE_BASE_INFO">
    <table name="TEST_CASE_BASE_INFO" type="owner-table">
      <key field="fID" type="String"/>  
      <item field="TEST_CASE_VER" relation="tESTCASEVER" type="Integer"/>  
      <item field="TEST_CASE_ID" relation="tESTCASEID" type="String"/>  
      <item field="TEST_CASE_NAME" relation="tESTCASENAME" type="String"/>  
      <item field="TEST_CASE_PRIOR" relation="tESTCASEPRIOR" type="String"/>  
      <item field="TEST_CASE_DESC" relation="tESTCASEDESC" type="String"/>  
      <item field="TEST_CASE_FILE" relation="tESTCASEFILE" type="String"/>  
      <item field="MAKE_DATE_TIME" relation="mAKEDATETIME" type="DateTime"/>  
      <item field="DECTION_BASED_ON_ID" relation="dECTIONBASEDONID" type="Decimal"/>  
        
      <index fields="TEST_CASE_VER,TEST_CASE_ID" name="AK_KEY_1_TEST_CAS" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>