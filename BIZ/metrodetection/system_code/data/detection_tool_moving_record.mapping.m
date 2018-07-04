<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DETECTION_TOOL_MOVING_RECORD"/>  
  <mapping concept="DETECTION_TOOL_MOVING_RECORD"> 
    <table name="DETECTION_TOOL_MOVING_RECORD" type="owner-table"> 
      <key field="FID" type="String"/>  
      <item field="OPERATE_DATE_TIME" relation="oPERATEDATETIME" type="Date"/>  
      <item field="OPERATE_TYPE" relation="oPERATETYPE" type="Integer"/>  
      <item field="OPERATOR_ID" relation="oPERATORID" type="String"/>  
      <item field="PROJECT_ID" relation="pROJECTID" type="Integer"/>  
      <item field="TEST_TASK_ID" relation="tESTTASKID" type="String"/>  
      <item field="TOOL_TYPE_ID" relation="tOOLTYPEID" type="Integer"/>  
      <item field="TOOL_ID" relation="tOOLID" type="String"/>  
      <item field="TOOL_ID_STATE" relation="tOOLIDSTATE" type="Integer"/>  
      <item field="TOOL_NUMBER" relation="tOOLNUMBER" type="Integer"/>  
      <item field="MOVING_REASON" relation="mOVINGREASON" type="Integer"/>  
      <item field="MEMO" relation="mEMO" type="String"/> 
    <item field="TOOL_NO" relation="tOOLNO" type="Integer"/>
</table> 
  </mapping> 
</model>