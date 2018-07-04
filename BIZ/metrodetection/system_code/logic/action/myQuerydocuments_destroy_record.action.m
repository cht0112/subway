<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQuerydocuments_destroy_record" global="false" procedure="myQuerydocuments_destroy_recordProcedure"><label language="zh_CN">自定义文档销毁查询</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="DOCUMENTS_DESTROY_RECORD"/>  
    <private name="select" type="String" value="P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY as dOCUMENTCATEGORY,P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE as dOCUMENTTYPE,DOCUMENT_CATEGORY_CODE.dOCUMENTCATEGORYCNAME as dOCUMENTCATEGORYCNAME,DOCUMENT_TYPE_CODE.dOCUMENTTYPECNAME as dOCUMENTTYPECNAME,SA_DocNode.sParentID as sParentID,SA_DocNode.sDocName as sDocName,DOCUMENTS_DESTROY_RECORD,DOCUMENTS_DESTROY_RECORD.aPPLICATIONTIME as aPPLICATIONTIME,DOCUMENTS_DESTROY_RECORD.dESTROYTYPE as dESTROYTYPE,DOCUMENTS_DESTROY_RECORD.fILEID as fILEID,DOCUMENTS_DESTROY_RECORD.fILENAME as fILENAME,DOCUMENTS_DESTROY_RECORD.fILEVER as fILEVER,DOCUMENTS_DESTROY_RECORD.sECRETLEVEL as sECRETLEVEL,DOCUMENTS_DESTROY_RECORD.fILEDESC as fILEDESC,DOCUMENTS_DESTROY_RECORD.mEMO as mEMO,DOCUMENTS_DESTROY_RECORD.oPERATORID as oPERATORID,SA_DocNode_1.sDocName as sDocName1,HR_BASE_INFO.oPERATORNAME as OPERATORNAME"/>  
    <private name="from" type="String" value="DOCUMENTS_DESTROY_RECORD DOCUMENTS_DESTROY_RECORD  optional  join P_DOCUMENTS_ARCHIVE P_DOCUMENTS_ARCHIVE on DOCUMENTS_DESTROY_RECORD.fILEID = P_DOCUMENTS_ARCHIVE optional  join DOCUMENT_CATEGORY_CODE DOCUMENT_CATEGORY_CODE on P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = DOCUMENT_CATEGORY_CODE optional  join DOCUMENT_TYPE_CODE DOCUMENT_TYPE_CODE on P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY AND P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE = DOCUMENT_TYPE_CODE.dOCUMENTTYPE optional  join SA_DocNode SA_DocNode on DOCUMENTS_DESTROY_RECORD.fILEID = SA_DocNode optional  join SA_DocNode SA_DocNode_1 on SA_DocNode.sParentID = SA_DocNode_1 optional  join HR_BASE_INFO HR_BASE_INFO on DOCUMENTS_DESTROY_RECORD.oPERATORID = HR_BASE_INFO"/>  
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