<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="EDUCATION_AND_JOB_INFO"/>  
  <mapping concept="EDUCATION_AND_JOB_INFO"> 
    <table name="EDUCATION_AND_JOB_INFO" type="owner-table"> 
      <key field="FID" type="String"/>  
      <item field="OPERATOR_ID" relation="oPERATORID" type="String"/>  
      <item field="EXPERIENCE_TYPE" relation="eXPERIENCETYPE" type="Integer"/>  
      <item field="EXPERIENCE_PLACE" relation="eXPERIENCEPLACE" type="String"/>  
      <item field="EXPERIENCE_DESCRIPTION" relation="eXPERIENCEDESCRIPTION" type="String"/>  
      <item field="EXPERIENCE_START_DATE" relation="eXPERIENCESTARTDATE" type="Date"/>  
      <item field="EXPERIENCE_END_DATE" relation="eXPERIENCEENDDATE" type="Date"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <index fields="OPERATOR_ID,EXPERIENCE_TYPE,EXPERIENCE_START_DATE,EXPERIENCE_END_DATE" name="AK_KEY_1_EDUCATIO" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>