<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="P_DOCUMENTS_BORROW_RECORD"/><mapping concept="P_DOCUMENTS_BORROW_RECORD"><table name="P_DOCUMENTS_BORROW_RECORD" type="owner-table"><key field="bORROW_APPLICATION_NO" type="Integer"/>
<item field="APPLICATION_TIME" relation="aPPLICATIONTIME" type="DateTime"/>
<item field="P_FILE_ID" relation="pFILEID" type="String"/>
<item field="DOCUMENT_CATEGORY" relation="dOCUMENTCATEGORY" type="Integer"/>
<item field="DOCUMENT_TYPE" relation="dOCUMENTTYPE" type="Integer"/>
<item field="P_FILE_NAME" relation="pFILENAME" type="String"/>
<item field="BORROWER" relation="bORROWER" type="String"/>
<item field="RETURN_DATE" relation="rETURNDATE" type="Date"/>
<item field="INDEED_RETURN_DATE" relation="iNDEEDRETURNDATE" type="Date"/>
<item field="MEMO" relation="mEMO" type="String"/>
</table>
</mapping>
</model>