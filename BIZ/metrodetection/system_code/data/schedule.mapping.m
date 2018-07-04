<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="OA_SD_SHARERANGE"/>
<store name="OA_SD_EXECUTOR"/>
<store name="OA_SD_SCHEDULE"/>
  
    
    
    
    
    
   

<mapping concept="OA_SD_SCHEDULE"><table name="OA_SD_SCHEDULE" type="owner-table"><key field="fID" type="String"/>
<item field="FTITLE" relation="fTITLE" type="String"/>
<item field="FBEGINDATEPART" relation="fBEGINDATEPART" type="DateTime"/>
<item field="FBEGINTIMEPART" relation="fBEGINTIMEPART" type="String"/>
<item field="FBEGINTIME" relation="fBEGINTIME" type="DateTime"/>
<item field="FENDDATEPART" relation="fENDDATEPART" type="DateTime"/>
<item field="FENDTIMEPART" relation="fENDTIMEPART" type="String"/>
<item field="FENDTIME" relation="fENDTIME" type="DateTime"/>
<item field="FCONTENT" relation="fCONTENT" type="Text"/>
<item field="FISSHARED" relation="fISSHARED" type="Integer"/>
<item field="FISREMIND" relation="fISREMIND" type="Integer"/>
<item field="FREMINDDATEPART" relation="fREMINDDATEPART" type="DateTime"/>
<item field="FREMINDTIMEPART" relation="fREMINDTIMEPART" type="String"/>
<item field="FREMINDTIME" relation="fREMINDTIME" type="DateTime"/>
<item field="FCREATEPSNID" relation="fCREATEPSNID" type="String"/>
<item field="FCREATEPSNNAME" relation="fCREATEPSNNAME" type="String"/>
<item field="FCREATETIME" relation="fCREATETIME" type="DateTime"/>
<item field="FCREATEURL" relation="fCREATEURL" type="String"/>
<item field="FBIZID" relation="fBIZID" type="String"/>
<item field="FBIZTYPE" relation="fBIZTYPE" type="String"/>
<item field="FSCOPE" relation="fSCOPE" type="String"/>
<item field="VERSION" relation="version" type="Integer"/>
<item field="FISOUTSIDE" relation="fISOUTSIDE" type="String"/>
</table>
</mapping>
<mapping concept="OA_SD_EXECUTOR"><table name="OA_SD_EXECUTOR" type="owner-table"><key field="fID" type="String"/>
<item field="FMASTERID" relation="fMASTERID" type="String"/>
<item field="FEXECUTORID" relation="fEXECUTORID" type="String"/>
<item field="FEXECUTORNAME" relation="fEXECUTORNAME" type="String"/>
<item field="FREMARK" relation="fREMARK" type="Text"/>
<item field="VERSION" relation="version" type="Integer"/>
</table>
</mapping>
<mapping concept="OA_SD_SHARERANGE"><table name="OA_SD_SHARERANGE" type="owner-table"><key field="fID" type="String"/>
<item field="FSHARETYPE" relation="fSHARETYPE" type="Integer"/>
<item field="FSHAREDORGKINDID" relation="fSHAREDORGKINDID" type="String"/>
<item field="FSHAREDORGID" relation="fSHAREDORGID" type="String"/>
<item field="FSHAREDORGNAME" relation="fSHAREDORGNAME" type="String"/>
<item field="FSHAREDORGFID" relation="fSHAREDORGFID" type="String"/>
<item field="FSHAREDORGFNAME" relation="fSHAREDORGFNAME" type="String"/>
<item field="FSHARETOORGKINDID" relation="fSHARETOORGKINDID" type="String"/>
<item field="FSHARETOORGID" relation="fSHARETOORGID" type="String"/>
<item field="FSHARETOORGNAME" relation="fSHARETOORGNAME" type="String"/>
<item field="FSHARETOORGFID" relation="fSHARETOORGFID" type="String"/>
<item field="FSHARETOORGFNAME" relation="fSHARETOORGFNAME" type="String"/>
<item field="VERSION" relation="version" type="Integer"/>
<index fields="FSHARETYPE,FSHAREDORGID,FSHARETOORGID" name="IDX_SDSHARERANGE_UNIQUE" type="UNIQUE"/>
</table>
</mapping>
</model>