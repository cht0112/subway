<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
























<concept name="OA_SD_SCHEDULE" default-value-expr="guid()"><has-relation relation="fTITLE" size="255"></has-relation>
<has-relation relation="fBEGINDATEPART"></has-relation>
<has-relation relation="fBEGINTIMEPART" size="8"></has-relation>
<has-relation relation="fBEGINTIME"></has-relation>
<has-relation relation="fENDDATEPART"></has-relation>
<has-relation relation="fENDTIMEPART" size="8"></has-relation>
<has-relation relation="fENDTIME"></has-relation>
<has-relation relation="fCONTENT"></has-relation>
<has-relation relation="fISSHARED" size="22"></has-relation>
<has-relation relation="fISREMIND" size="22"></has-relation>
<has-relation relation="fREMINDDATEPART"></has-relation>
<has-relation relation="fREMINDTIMEPART" size="8"></has-relation>
<has-relation relation="fREMINDTIME"></has-relation>
<has-relation relation="fCREATEPSNID" size="36"></has-relation>
<has-relation relation="fCREATEPSNNAME" size="64"></has-relation>
<has-relation relation="fCREATETIME"></has-relation>
<has-relation relation="fCREATEURL" size="512"></has-relation>
<has-relation relation="fBIZID" size="36"></has-relation>
<has-relation relation="fBIZTYPE" size="64"></has-relation>
<has-relation relation="fSCOPE" size="36"></has-relation>
<has-relation relation="version" size="22"></has-relation>
<has-relation relation="fISOUTSIDE" size="36"></has-relation>
<label language="zh_CN">日程</label>
</concept>
<relation name="fREMINDTIME" data-type="DateTime"><label language="zh_CN"></label>
</relation>
<relation name="fBIZID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fBEGINTIME" data-type="DateTime"><label language="zh_CN"></label>
</relation>
<relation name="fISOUTSIDE" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fENDDATEPART" data-type="DateTime"><label language="zh_CN"></label>
</relation>
<relation name="fCREATEURL" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fREMINDTIMEPART" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fTITLE" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSCOPE" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fCREATEPSNID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fREMINDDATEPART" data-type="DateTime"><label language="zh_CN"></label>
</relation>
<relation name="fCREATETIME" data-type="DateTime"><label language="zh_CN"></label>
</relation>
<relation name="fISSHARED" data-type="Integer"><label language="zh_CN"></label>
</relation>
<relation name="fBEGINTIMEPART" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fENDTIMEPART" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fENDTIME" data-type="DateTime"><label language="zh_CN"></label>
</relation>
<relation name="fCREATEPSNNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fISREMIND" data-type="Integer"><label language="zh_CN"></label>
</relation>
<relation name="fBEGINDATEPART" data-type="DateTime"><label language="zh_CN"></label>
</relation>
<relation name="fBIZTYPE" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fCONTENT" data-type="Text"><label language="zh_CN"></label>
</relation>
<concept name="OA_SD_EXECUTOR" default-value-expr="guid()"><has-relation relation="fMASTERID" size="36"></has-relation>
<has-relation relation="fEXECUTORID" size="36"></has-relation>
<has-relation relation="fEXECUTORNAME" size="64"></has-relation>
<has-relation relation="fREMARK"></has-relation>
<has-relation relation="version" size="22"></has-relation>
<label language="zh_CN">执行人</label>
</concept>
<concept name="OA_SD_SHARERANGE" default-value-expr="guid()"><has-relation relation="fSHARETYPE" size="22"></has-relation>
<has-relation relation="fSHAREDORGKINDID" size="36"></has-relation>
<has-relation relation="fSHAREDORGID" size="65"></has-relation>
<has-relation relation="fSHAREDORGNAME" size="64"></has-relation>
<has-relation relation="fSHAREDORGFID" size="512"></has-relation>
<has-relation relation="fSHAREDORGFNAME" size="1024"></has-relation>
<has-relation relation="fSHARETOORGKINDID" size="36"></has-relation>
<has-relation relation="fSHARETOORGID" size="65"></has-relation>
<has-relation relation="fSHARETOORGNAME" size="64"></has-relation>
<has-relation relation="fSHARETOORGFID" size="512"></has-relation>
<has-relation relation="fSHARETOORGFNAME" size="1024"></has-relation>
<has-relation relation="version" size="22"></has-relation>
<label language="zh_CN">共享</label>
</concept>
<relation name="fMASTERID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHAREDORGFID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fREMARK" data-type="Text"><label language="zh_CN"></label>
</relation>
<relation name="fSHARETOORGFNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHARETYPE" data-type="Integer"><label language="zh_CN"></label>
</relation>
<relation name="fEXECUTORID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHARETOORGID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHARETOORGFID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fEXECUTORNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHAREDORGNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHAREDORGKINDID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHARETOORGNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHAREDORGFNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHARETOORGKINDID" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="fSHAREDORGID" data-type="String"><label language="zh_CN"></label>
</relation>
</model>
