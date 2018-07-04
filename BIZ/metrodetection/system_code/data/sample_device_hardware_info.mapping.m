<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="SAMPLE_DEVICE_HARDWARE_INFO"/>  
  <mapping concept="SAMPLE_DEVICE_HARDWARE_INFO"> 
    <table name="SAMPLE_DEVICE_HARDWARE_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="SAMPLE_DEVICE_NO" relation="sAMPLEDEVICENO" type="Integer"/>  
      <item field="MODEL_NAME" relation="mODELNAME" type="String"/>  
      <item field="MODEL_STYLE" relation="mODELSTYLE" type="String"/>  
      <item field="MODEL_NUMBER" relation="mODELNUMBER" type="Integer"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <index fields="SAMPLE_DEVICE_NO,MODEL_NAME" name="AK_KEY_1_SAMPLE_HARDWARE"
        type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
