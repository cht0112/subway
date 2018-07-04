<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="P_DOCUMENTS_ARCHIVE"/>
  <mapping concept="P_DOCUMENTS_ARCHIVE">
    <table name="P_DOCUMENTS_ARCHIVE" type="owner-table">
      <key field="p_FILE_ID" type="String"/>  
      <item field="DOCUMENT_CATEGORY" relation="dOCUMENTCATEGORY" type="Integer"/>  
      <item field="DOCUMENT_TYPE" relation="dOCUMENTTYPE" type="Integer"/>  
      <item field="P_FILE_NAME" relation="pFILENAME" type="String"/>  
      <item field="FILE_VER" relation="fILEVER" type="String"/>  
      <item field="SECRET_LEVEL" relation="sECRETLEVEL" type="Integer"/>  
      <item field="P_FILE_PROPERTY" relation="pFILEPROPERTY" type="String"/>  
      <item field="P_FILE_DESC" relation="pFILEDESC" type="String"/>  
      <item field="LOCATION_ROOM_ID" relation="lOCATIONROOMID" type="Integer"/>  
      <item field="LOCATION_CABINET_ID" relation="lOCATIONCABINETID" type="String"/>  
      <item field="ARCHIVE_DATE" relation="aRCHIVEDATE" type="Date"/>  
      <item field="ARCHIVE_OPERATOR" relation="aRCHIVEOPERATOR" type="String"/>  
      <item field="INPUT_OPERATOR" relation="iNPUTOPERATOR" type="String"/>  
      <item field="ALLOW_BORROW" relation="aLLOWBORROW" type="Integer"/>  
      <item field="DESTROY_STATE" relation="dESTROYSTATE" type="Integer"/>  
      <item field="MEMO" relation="mEMO" type="String"/> 
      <item field="  dOCUMENTARCHIVECHILD" relation="  dOCUMENTARCHIVECHILD" type="String"/>
    </table> 
  </mapping> 
</model>
