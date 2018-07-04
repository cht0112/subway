<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="SAMPLE_DEVICE_OCCUPY_INFO"/>  
  <mapping concept="SAMPLE_DEVICE_OCCUPY_INFO"> 
    <table name="SAMPLE_DEVICE_OCCUPY_INFO" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="SAMPLE_DEVICE_NO" relation="sAMPLEDEVICENO" type="Integer"/>  
      <item field="PROJECT_ID" relation="pROJECTID" type="Integer"/>  
      <item field="DEVICE_ID" relation="dEVICEID" type="String"/>  
      <item field="TEST_TASK_ID" relation="tESTTASKID" type="Integer"/>  
      <item field="OCCUPY_START_DATE_TIME" relation="oCCUPYSTARTDATETIME" type="DateTime"/>  
      <item field="OCCUPY_END_DATE_TIME" relation="oCCUPYENDDATETIME" type="DateTime"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <index fields="SAMPLE_DEVICE_NO,OCCUPY_START_DATE_TIME,OCCUPY_END_DATE_TIME"
        name="AK_KEY_1_SAMPLE_OCCUPY" type="UNIQUE"/> 
    </table> 
  </mapping> 
</model>
