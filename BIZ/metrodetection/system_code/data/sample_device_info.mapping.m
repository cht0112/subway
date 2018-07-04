<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="SAMPLE_DEVICE_INFO"/>  
  <mapping concept="SAMPLE_DEVICE_INFO">
    <table name="SAMPLE_DEVICE_INFO" type="owner-table">
      <key field="SAMPLE_DEVICE_NO" type="Integer"/>  
      <item field="APPLICATION_NO" relation="aPPLICATIONNO"/>  
      <item field="MANUFACTURE_ID" relation="mANUFACTUREID"/>  
      <item field="DEVICE_TYPE" relation="dEVICETYPE"/>  
      <item field="DEVICE_STYLE" relation="dEVICESTYLE"/>  
      <item field="DECTION_TYPE" relation="dECTIONTYPE"/>  
      <item field="DEVICE_ID" relation="dEVICEID"/>  
      <item field="SOFTWARE_VERSION" relation="sOFTWAREVERSION"/>  
      <item field="HARDWARE_VERSION" relation="hARDWAREVERSION"/>  
      <item field="DEADLINE_RECEIVE_DATE" relation="dEADLINERECEIVEDATE"/>  
      <item field="INDEED_RECEIVE_DATE" relation="iNDEEDRECEIVEDATE"/>  
      <item field="RETURN_DATE" relation="rETURNDATE"/>  
      <item field="INDEED_RETURN_DATE" relation="iNDEEDRETURNDATE"/>  
      <item field="SHARED_FLAG" relation="sHAREDFLAG"/>  
      <item field="MEMO" relation="mEMO"/> 
    

<item field="RECIVE_STATE" relation="rECIVESTATE"/>
</table> 
  </mapping> 
</model>