<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQuerydocdestroy" global="false" procedure="myQuerydocdestroyProcedure"><label language="zh_CN">自定义电子文档销毁</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="DOCUMENTS_DESTROY_RECORD"/>  
    <private name="select" type="String" value="DOCUMENTS_DESTROY_RECORD,DOCUMENTS_DESTROY_RECORD.aPPLICATIONTIME as aPPLICATIONTIME,DOCUMENTS_DESTROY_RECORD.dESTROYTYPE as dESTROYTYPE,DOCUMENTS_DESTROY_RECORD.fILEID as fILEID,DOCUMENTS_DESTROY_RECORD.fILENAME as fILENAME,DOCUMENTS_DESTROY_RECORD.fILEVER as fILEVER,DOCUMENTS_DESTROY_RECORD.sECRETLEVEL as sECRETLEVEL,DOCUMENTS_DESTROY_RECORD.fILEDESC as fILEDESC,DOCUMENTS_DESTROY_RECORD.mEMO as mEMO,P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY as dOCUMENTCATEGORY,P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE as dOCUMENTTYPE,P_DOCUMENTS_ARCHIVE.pFILENAME as pFILENAME,P_DOCUMENTS_ARCHIVE.fILEVER as fILEVER1,P_DOCUMENTS_ARCHIVE.sECRETLEVEL as sECRETLEVEL1,P_DOCUMENTS_ARCHIVE.pFILEPROPERTY as pFILEPROPERTY,P_DOCUMENTS_ARCHIVE.pFILEDESC as pFILEDESC,P_DOCUMENTS_ARCHIVE.lOCATIONROOMID as lOCATIONROOMID,P_DOCUMENTS_ARCHIVE.lOCATIONCABINETID as lOCATIONCABINETID,P_DOCUMENTS_ARCHIVE.aRCHIVEDATE as aRCHIVEDATE,P_DOCUMENTS_ARCHIVE.aRCHIVEOPERATOR as aRCHIVEOPERATOR,P_DOCUMENTS_ARCHIVE.iNPUTOPERATOR as iNPUTOPERATOR,P_DOCUMENTS_ARCHIVE.aLLOWBORROW as aLLOWBORROW,P_DOCUMENTS_ARCHIVE.dESTROYSTATE as dESTROYSTATE,P_DOCUMENTS_ARCHIVE.mEMO as mEMO1,SA_DocNode.sParentID as sParentID,SA_DocNode.sDocName as sDocName"/>  
    <private name="from" type="String" value="DOCUMENTS_DESTROY_RECORD DOCUMENTS_DESTROY_RECORD  optional  join P_DOCUMENTS_ARCHIVE P_DOCUMENTS_ARCHIVE on DOCUMENTS_DESTROY_RECORD.fILEID = P_DOCUMENTS_ARCHIVE optional  join SA_DocNode SA_DocNode on DOCUMENTS_DESTROY_RECORD.fILEID = SA_DocNode"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DOCUMENTS_DESTROY_RECORD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>