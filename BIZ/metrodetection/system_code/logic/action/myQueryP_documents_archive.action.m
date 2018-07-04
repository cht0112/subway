<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryP_documents_archive" global="false" procedure="myQueryP_documents_archiveProcedure"><label language="zh_CN">自定义查询纸质文档管理</label>
<permission type="List" name="range"/>  
    <private type="String" name="concept" value="P_DOCUMENTS_ARCHIVE"/>  
    <private type="String" name="select" value="P_DOCUMENTS_ARCHIVE,P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY as dOCUMENTCATEGORY,P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE as dOCUMENTTYPE,P_DOCUMENTS_ARCHIVE.pFILENAME as pFILENAME,P_DOCUMENTS_ARCHIVE.fILEVER as fILEVER,P_DOCUMENTS_ARCHIVE.sECRETLEVEL as sECRETLEVEL,P_DOCUMENTS_ARCHIVE.pFILEPROPERTY as pFILEPROPERTY,P_DOCUMENTS_ARCHIVE.pFILEDESC as pFILEDESC,P_DOCUMENTS_ARCHIVE.lOCATIONROOMID as lOCATIONROOMID,P_DOCUMENTS_ARCHIVE.lOCATIONCABINETID as lOCATIONCABINETID,P_DOCUMENTS_ARCHIVE.aRCHIVEDATE as aRCHIVEDATE,P_DOCUMENTS_ARCHIVE.aRCHIVEOPERATOR as aRCHIVEOPERATOR,P_DOCUMENTS_ARCHIVE.iNPUTOPERATOR as iNPUTOPERATOR,P_DOCUMENTS_ARCHIVE.aLLOWBORROW as aLLOWBORROW,P_DOCUMENTS_ARCHIVE.dESTROYSTATE as dESTROYSTATE,P_DOCUMENTS_ARCHIVE.mEMO as mEMO,DOCUMENT_CATEGORY_CODE.dOCUMENTCATEGORYCNAME as dOCUMENTCATEGORYCNAME,DOCUMENT_TYPE_CODE.dOCUMENTTYPECNAME as dOCUMENTTYPECNAME,SECRET_LEVEL_CODE.sECRETLEVELCNAME as sECRETLEVELCNAME,DETECTION_ROOM_INFO.rOOMTYPE as rOOMTYPE,DETECTION_ROOM_INFO.rOOMCNAME as rOOMCNAME,case when P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 1 then '正常' when P_DOCUMENTS_ARCHIVE.aLLOWBORROW = 2 then '已外借' end as aLLOWBORROWNAME,case when P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 1 then '正常' when P_DOCUMENTS_ARCHIVE.dESTROYSTATE = 2 then '销毁' end as dESTROYSTATENAME,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO_3.oPERATORNAME as oPERATORNAME1"/>  
    <private type="String" name="from" value="P_DOCUMENTS_ARCHIVE P_DOCUMENTS_ARCHIVE  optional  join DOCUMENT_CATEGORY_CODE DOCUMENT_CATEGORY_CODE on P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = DOCUMENT_CATEGORY_CODE optional  join DOCUMENT_TYPE_CODE DOCUMENT_TYPE_CODE on P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY AND P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE = DOCUMENT_TYPE_CODE.dOCUMENTTYPE optional  join SECRET_LEVEL_CODE SECRET_LEVEL_CODE on P_DOCUMENTS_ARCHIVE.sECRETLEVEL = SECRET_LEVEL_CODE.sECRETLEVEL optional  join DETECTION_ROOM_INFO DETECTION_ROOM_INFO on P_DOCUMENTS_ARCHIVE.lOCATIONROOMID = DETECTION_ROOM_INFO optional  join HR_BASE_INFO HR_BASE_INFO on P_DOCUMENTS_ARCHIVE.aRCHIVEOPERATOR = HR_BASE_INFO optional  join HR_BASE_INFO HR_BASE_INFO_3 on P_DOCUMENTS_ARCHIVE.iNPUTOPERATOR  =  HR_BASE_INFO_3"/>  
    <private type="String" name="aggregate"/>  
    <private type="String" name="dataModel" value="/metrodetection/system_code/data"/>  
    <private type="String" name="fnModel"/>  
    <protected type="String" name="condition"/>  
    <public type="Boolean" name="distinct" value="false"/>  
    <public type="String" name="idColumn" value="P_DOCUMENTS_ARCHIVE"/>  
    <public type="String" name="filter"/>  
    <public type="Integer" name="limit"/>  
    <public type="Integer" name="offset"/>  
    <public type="String" name="columns"/>  
    <public type="String" name="orderBy"/>  
    <public type="String" name="aggregateColumns"/>  
    <public type="Map" name="variables"/>
</action>
</model>