<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="TEST_APPLICATION_INFO"/>
  <mapping concept="TEST_APPLICATION_INFO">
    <table name="TEST_APPLICATION_INFO" type="owner-table"> 
      <key field="aPPLICATION_NO" type="Integer"/>  
      <item field="ASSIGNED_MANUFACTURE_ID" relation="aSSIGNEDMANUFACTUREID"
        type="Decimal"/>  
      <item field="PRODUCT_MANUFACTURE_ID" relation="pRODUCTMANUFACTUREID" type="Decimal"/>  
      <item field="PRODUCT_NAME" relation="pRODUCTNAME" type="String"/>  
      <item field="DETECTION_OBJECT_TYPE" relation="dETECTIONOBJECTTYPE" type="Decimal"/>  
      <item field="DEVICE_TYPE" relation="dEVICETYPE" type="Integer"/>  
      <item field="BUSINESS_ID" relation="bUSINESSID" type="Decimal"/>  
      <item field="LINE_ID" relation="lINEID" type="Decimal"/>  
      <item field="DECTION_BASED_ON_NAME" relation="dECTIONBASEDONNAME" type="String"/>  
      <item field="CONTACT_PERSON" relation="cONTACTPERSON" type="String"/>  
      <item field="CONTACT_MOBILE" relation="cONTACTMOBILE" type="String"/>  
      <item field="CONTACT_TELEPHONE" relation="cONTACTTELEPHONE" type="String"/>  
      <item field="CONTACT_EMAIL" relation="cONTACTEMAIL" type="String"/>  
      <item field="CONTACT_ADDRESS" relation="cONTACTADDRESS" type="String"/>  
      <item field="CONTACT_POSTCODE" relation="cONTACTPOSTCODE" type="String"/>  
      <item field="CONTACT_FAX_NUMBER" relation="cONTACTFAXNUMBER" type="String"/>  
      <item field="APPLICATION_DATE" relation="aPPLICATIONDATE" type="Date"/>  
      <item field="EXPECT_ENDING_DATE" relation="eXPECTENDINGDATE" type="Date"/>  
      <item field="PRODUCT_STYLE" relation="pRODUCTSTYLE" type="String"/>  
      <item field="COMPANY_TYPE" relation="cOMPANYTYPE" type="String"/>  
      <item field="APPLICATION_FIELDS" relation="aPPLICATIONFIELDS" type="String"/>  
      <item field="DEVELOPMENT_TOOLS" relation="dEVELOPMENTTOOLS" type="String"/>  
      <item field="COMPILER_ENVIRONMENT" relation="cOMPILERENVIRONMENT" type="String"/>  
      <item field="PRODUCT_CONFIGURATION" relation="pRODUCTCONFIGURATION" type="String"/>  
      <item field="FEATURES_AND_MODELS" relation="fEATURESANDMODELS" type="String"/>  
      <item field="TESTING_REQUIREMENTS" relation="tESTINGREQUIREMENTS" type="String"/>  
      <item field="OPERATOR_ID" relation="oPERATORID" type="String"/>  
      <item field="MNITL_TELEPHONE" relation="mNITLTELEPHONE" type="String"/>  
      <item field="MNITL_FAX_NUMBER" relation="mNITLFAXNUMBER" type="String"/>  
      <item field="MNITL_MOBILE" relation="mNITLMOBILE" type="String"/>  
      <item field="MNITL_EMAIL" relation="mNITLEMAIL" type="String"/>  
      <item field="MNITL_ADDRESS" relation="mNITLADDRESS" type="String"/>  
      <item field="MNITL_POSTCODE" relation="mNITLPOSTCODE" type="String"/>  
      <item field="RECEIPTER" relation="rECEIPTER" type="String"/>  
      <item field="RECEIPT_DATE" relation="rECEIPTDATE" type="Date"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <item field="APP_DOC_ID" relation="APP_DOC_ID"/>  
      <item field="APP_DOC_NO" relation="APP_DOC_NO"/>  
      <item field="COMPANY_PROMISE" relation="COMPANY_PROMISE"/>  
      <item field="INSTALL_REQUIRE" relation="iNSTALLREQUIRE" type="String"/>  
      <item field="PROCESS_UNIT" relation="pROCESSUNIT" type="String"/> 
    </table> 
  </mapping> 
</model>
