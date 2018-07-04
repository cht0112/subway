<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryp_documents_borrow_record" global="false" procedure="myQueryp_documents_borrow_recordProcedure"><label language="zh_CN">自定义文档归还</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="P_DOCUMENTS_BORROW_RECORD"/>
<private name="select" type="String" value="DOCUMENT_CATEGORY_CODE,DOCUMENT_TYPE_CODE.dOCUMENTTYPE as dOCUMENTTYPE,P_DOCUMENTS_BORROW_RECORD,P_DOCUMENTS_BORROW_RECORD.aPPLICATIONTIME as aPPLICATIONTIME,P_DOCUMENTS_BORROW_RECORD.pFILEID as pFILEID,P_DOCUMENTS_BORROW_RECORD.dOCUMENTCATEGORY as dOCUMENTCATEGORY,P_DOCUMENTS_BORROW_RECORD.dOCUMENTTYPE as dOCUMENTTYPE1,P_DOCUMENTS_BORROW_RECORD.pFILENAME as pFILENAME,P_DOCUMENTS_BORROW_RECORD.bORROWER as bORROWER,P_DOCUMENTS_BORROW_RECORD.rETURNDATE as rETURNDATE,P_DOCUMENTS_BORROW_RECORD.iNDEEDRETURNDATE as iNDEEDRETURNDATE,P_DOCUMENTS_BORROW_RECORD.mEMO as mEMO,DOCUMENT_CATEGORY_CODE.dOCUMENTCATEGORYCNAME as dOCUMENTCATEGORYCNAME,DOCUMENT_TYPE_CODE.dOCUMENTTYPECNAME as dOCUMENTTYPECNAME,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,P_DOCUMENTS_ARCHIVE.aLLOWBORROW as aLLOWBORROW,HR_BASE_INFO.oPERATORNAME as oPERATORNAME1,HR_BASE_INFO.oPERATORNAME as oPERATORNAME2"/>
<private name="from" type="String" value="P_DOCUMENTS_BORROW_RECORD P_DOCUMENTS_BORROW_RECORD  optional  join DOCUMENT_CATEGORY_CODE DOCUMENT_CATEGORY_CODE on P_DOCUMENTS_BORROW_RECORD.dOCUMENTCATEGORY = DOCUMENT_CATEGORY_CODE optional  join DOCUMENT_TYPE_CODE DOCUMENT_TYPE_CODE on P_DOCUMENTS_BORROW_RECORD.dOCUMENTTYPE = DOCUMENT_TYPE_CODE.dOCUMENTTYPE optional  join HR_BASE_INFO HR_BASE_INFO on P_DOCUMENTS_BORROW_RECORD.bORROWER = HR_BASE_INFO optional  join P_DOCUMENTS_ARCHIVE P_DOCUMENTS_ARCHIVE on P_DOCUMENTS_BORROW_RECORD.pFILEID = P_DOCUMENTS_ARCHIVE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String" value="P_DOCUMENTS_BORROW_RECORD.aPPLICATIONTIME = (select  max(P_DOCUMENTS_BORROW_RECORD1.aPPLICATIONTIME) from P_DOCUMENTS_BORROW_RECORD P_DOCUMENTS_BORROW_RECORD1  where P_DOCUMENTS_BORROW_RECORD1.pFILEID = P_DOCUMENTS_BORROW_RECORD.pFILEID)"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="P_DOCUMENTS_BORROW_RECORD"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>