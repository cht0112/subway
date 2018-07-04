<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <mapping concept="query_sample_device_info"> 
    <table name="query_sample_device_info" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="contract_code" relation="contract_code"/>  
      <item field="project_id" relation="project_id"/>  
      <item field="manufacture_id" relation="manufacture_id"/>  
      <item field="device_type" relation="device_type"/>  
      <item field="device_style" relation="device_style"/>  
      <item field="dection_type" relation="dection_type"/>  
      <item field="device_id" relation="device_id"/>  
      <item field="software_version" relation="software_version"/>  
      <item field="hardware_version" relation="hardware_version"/>  
      <item field="deadline_receive_date" relation="deadline_receive_date"/>  
      <item field="indeed_receive_date" relation="indeed_receive_date"/>  
      <item field="return_date" relation="return_date"/>  
      <item field="indeed_return_date" relation="indeed_return_date"/>  
      <item field="shared_flag" relation="shared_flag"/>  
      <item field="memo" relation="memo"/>  
      <item field="model_name" relation="model_name"/>  
      <item field="model_style" relation="model_style"/>  
      <item field="model_number" relation="model_number"/>  
      <item field="device_info_memo" relation="device_info_memo"/>  
      <item field="test_task_id" relation="test_task_id"/> 
    </table>  
    <table name="sample_device_hardware_info" type="relation-table"> 
      <key field="fID" type="String"/> 
    </table>  
    <table name="sample_device_occupy_info" type="relation-table"> 
      <key field="fID" type="String"/>  
      <item field="CONTRACT_CODE" relation="cONTRACTCODE"/>  
      <item field="PROJECT_ID" relation="pROJECT_ID"/>  
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
      <item field="MODEL_NAME" relation="mODELNAME"/>  
      <item field="MODEL_STYLE" relation="mODELSTYLE"/>  
      <item field="MODEL_NUMBER" relation="mODELNUMBER"/>  
      <item field="DEVICE_INFO_MEMO" relation="dEVICEINFOMEMO"/>  
      <item field="TEST_TASK_ID" relation="tESTTASKID"/>  
      <item field="OCCUPY_START_DATE_TIME" relation="oCCUPYSTARTDATETIME"/>  
      <item field="OCCUPY_END_DATE_TIME" relation="oCCUPYENDDATETIME"/>  
      <item field="OCCUPY_INFO_MEMO" relation="oCCUPYINFOMEMO"/> 
    </table> 
  </mapping> 
</model>
