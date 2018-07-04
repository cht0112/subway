<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="SAMPLE_DEVICE_MOVING_RECORD"/>  
  <mapping concept="SAMPLE_DEVICE_MOVING_RECORD"> 
    <table name="SAMPLE_DEVICE_MOVING_RECORD" type="owner-table"> 
      <key field="FID" type="String"/>  
      <item field="OPERATE_DATE_TIME" relation="oPERATEDATETIME" type="Date"/>  
      <item field="OPERATE_TYPE" relation="oPERATETYPE" type="Integer"/>  
      <item field="OPERATOR_ID" relation="oPERATORID" type="String"/>  
      <item field="PROJECT_ID" relation="pROJECTID" type="Integer"/>  
      <item field="TEST_TASK_ID" relation="tESTTASKID" type="String"/>  
      <item field="DEVICE_ID" relation="dEVICEID" type="String"/>  
      <item field="OPERATE_RESULT_STATE" relation="oPERATERESULTSTATE" type="Integer"/>  
      <item field="MEMO" relation="mEMO" type="String"/> 
    <item relation="sAMPLEDEVICENO" field="SAMPLE_DEVICE_NO"></item>
</table> 
  </mapping> 
</model>