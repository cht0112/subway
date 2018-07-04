<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DETECTION_TOOL_INFO"/>  
  <mapping concept="DETECTION_TOOL_INFO"> 
    <table name="DETECTION_TOOL_INFO" type="owner-table"> 
      <key field="tOOL_NO" type="Integer"/>  
      <item field="TOOL_CNAME" relation="tOOLCNAME" type="String"/>  
      <item field="TOOL_ENAME" relation="tOOLENAME" type="String"/>  
      <item field="TOOL_TYPE_ID" relation="tOOLTYPEID" type="Integer"/>  
      <item field="TOOL_MODEL" relation="tOOLMODEL" type="String"/>  
      <item field="TOOL_STANDARDS" relation="tOOLSTANDARDS" type="String"/>  
      <item field="TOOL_ID" relation="tOOLID" type="String"/>  
      <item field="USE_STATE_CODE" relation="uSESTATECODE" type="Integer"/>  
      <item field="TOOL_UNIT" relation="tOOLUNIT" type="String"/>  
      <item field="MANUFACTURE_ID" relation="mANUFACTUREID" type="Integer"/>  
      <item field="TOOL_RESOURCE" relation="tOOLRESOURCE" type="Integer"/>  
      <item field="IN_DATE" relation="iNDATE" type="Date"/>  
      <item field="IN_PRICE" relation="iNPRICE" type="Integer"/>  
      <item field="SHARED_FLAG" relation="sHAREDFLAG" type="Integer"/>  
      <item field="MEMO" relation="mEMO" type="String"/>  
      <index fields="TOOL_TYPE_ID,TOOL_ID" name="AK_KEY_2_DETECTIO" type="UNIQUE"/>  
      <item field="fFChildToolOccupy" relation="fFChildToolOccupy" type="Integer"/>  
      <item field="fFChildToolApply" relation="fFChildToolApply" type="Integer"/>  
      <item field="fFChildMovingRecord" relation="fFChildMovingRecord" type="Integer"/>  
      <item field="RECIVE_STATE" relation="rECIVESTATE"/> 
      <item field="ASSET_SORT_CODE" relation="aSSETSORTCODE" type="String"/>
    </table> 
  </mapping> 
</model>