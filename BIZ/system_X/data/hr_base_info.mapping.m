<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="HR_BASE_INFO"/>  
  <mapping concept="HR_BASE_INFO"> 
    <table name="HR_BASE_INFO" type="owner-table"> 
      <key field="oPERATOR_ID" type="String"/>  
      <item field="OPERATOR_NAME" relation="oPERATORNAME" type="String"/>  
      <item field="OPERATOR_SEX" relation="oPERATORSEX" type="Decimal"/>  
      <item field="OPERATOR_BIRTHDAY" relation="oPERATORBIRTHDAY" type="Date"/>  
      <item field="NATION" relation="nATION" type="String"/>  
      <item field="OFFICE_ID" relation="oFFICEID" type="Decimal"/>  
      <item field="POSITION_ID" relation="pOSITIONID" type="Decimal"/>  
      <item field="DEGREE_ID" relation="dEGREEID" type="Decimal"/>  
      <item field="EDUCATION_ID" relation="eDUCATIONID" type="Decimal"/>  
      <item field="POLITICAL_ID" relation="pOLITICALID" type="Decimal"/>  
      <item field="PROFESSIONAL" relation="pROFESSIONAL" type="String"/>  
      <item field="POSITIONAL_TITLE" relation="pOSITIONALTITLE" type="Decimal"/>  
      <item field="EMAIL_ADDRESS" relation="eMAILADDRESS" type="String"/>  
      <item field="MOBILE" relation="mOBILE" type="String"/>  
      <item field="OPERATOR_STATE" relation="oPERATORSTATE" type="Decimal"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <item field="Scode" relation="Scode"/> 
      <item field="CARD_ID" relation="cARDID" type="String"/>
    </table> 
  </mapping> 
</model>