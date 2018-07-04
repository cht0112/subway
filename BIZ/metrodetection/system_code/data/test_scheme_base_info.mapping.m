<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="TEST_SCHEME_BASE_INFO"/>
  <mapping concept="TEST_SCHEME_BASE_INFO">
    <table name="TEST_SCHEME_BASE_INFO" type="owner-table">
      <key field="TEST_SCHEME_ID" type="Integer"/>  
      <item field="TEST_SCHEME_NAME" relation="tESTSCHEMENAME" type="String"/>  
      <item field="TEST_SCHEME_DESC" relation="tESTSCHEMEDESC" type="String"/>  
      <item field="BUSINESS_ID" relation="bUSINESSID" type="Integer"/>  
      <item field="DECTION_BASED_ON_ID" relation="dECTIONBASEDONID" type="Integer"/>  
      <item field="MAKE_DATE_TIME" relation="mAKEDATETIME" type="Date"/>  
      <item field="VALID_STATE" relation="vALIDSTATE" type="Integer"/>  
      <item field="APPLICATION_NO" relation="aPPLICATIONNO" type="Integer"/> 
    </table> 
  </mapping> 
</model>
