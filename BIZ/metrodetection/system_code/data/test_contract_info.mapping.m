<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="TEST_CONTRACT_INFO"/>  
  <mapping concept="TEST_CONTRACT_INFO"> 
    <table name="TEST_CONTRACT_INFO" type="owner-table"> 
      <key field="CONTRACT_NO" type="Integer"/>  
      <item field="CONTRACT_NAME" relation="cONTRACTNAME" type="String"/>  
      <item field="MANUFACTURE_ID" relation="mANUFACTUREID" type="Decimal"/>  
      <item field="CONTRACT_DATE" relation="cONTRACTDATE" type="DateTime"/>  
      <item field="EXPECT_ENDING_DATE" relation="eXPECTENDINGDATE" type="DateTime"/>  
      <item field="CONTRACT_DESC" relation="cONTRACTDESC" type="String"/>  
      <item field="APPLICATION_NO" relation="aPPLICATIONNO" type="Decimal"/>  
      <item field="CONTRACT_CODE" relation="cONTRACTCODE" type="String"/>  
      <item field="MEMO" relation="mEMO" type="String"/> 
    </table> 
  </mapping> 
</model>
