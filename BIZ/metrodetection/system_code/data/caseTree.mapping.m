<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="CASE_TREE_NEW_OBJ_V"/>
<store name="CASE_TREE_NEW_OBJ"/>

<store name="CASE_TREE_NEW_V"/>
<store name="CASE_TREE_NEW"/>


<store name="CASE_TREE"/>

<mapping concept="CASE_TREE"><table name="CASE_TREE" type="owner-table"><key field="fID" type="String"/>
</table>
</mapping>


<mapping concept="CASE_TREE_NEW"><table name="CASE_TREE_NEW" type="owner-table"><key field="fID" type="String"/>













<item field="fID" relation="fID"/>
<item field="fPARENTID" relation="fPARENTID"/>
<item field="tESTCASENAME" relation="tESTCASENAME"/>
<item field="sHIJIAN" relation="sHIJIAN"/>
<item field="sTARTTIME" relation="sTARTTIME"/>
<item field="eNDTIME" relation="eNDTIME"/>
<item field="qZRW" relation="qZRW"/>
<item field="oPERATORNAME" relation="oPERATORNAME"/>
<item field="rOOMNAME" relation="rOOMNAME"/>
<item field="tOOLNAME" relation="tOOLNAME"/>
<item field="cASEID" relation="cASEID"/>
<item field="cASEVERSION" relation="cASEVERSION"/>
<item field="tREESN" relation="tREESN"/>
</table>
</mapping>
<mapping concept="CASE_TREE_NEW_V"><table name="CASE_TREE_NEW_V" type="owner-table"><key field="fID" type="String"/>













<item field="fID" relation="fID"/>
<item field="fPARENTID" relation="fPARENTID"/>
<item field="tESTCASENAME" relation="tESTCASENAME"/>
<item field="sHIJIAN" relation="sHIJIAN"/>
<item field="sTARTTIME" relation="sTARTTIME"/>
<item field="eNDTIME" relation="eNDTIME"/>
<item field="qZRW" relation="qZRW"/>
<item field="oPERATORNAME" relation="oPERATORNAME"/>
<item field="rOOMNAME" relation="rOOMNAME"/>
<item field="tOOLNAME" relation="tOOLNAME"/>
<item field="cASEID" relation="cASEID"/>
<item field="cASEVERSION" relation="cASEVERSION"/>
<item field="tREESN" relation="tREESN"/>
</table>
</mapping>

<mapping concept="CASE_TREE_NEW_OBJ"><table name="CASE_TREE_NEW_OBJ" type="owner-table"><key field="fID" type="String"/>
<item field="FID" relation="fID" type="String"/>
<item field="FPARENTID" relation="fPARENTID" type="String"/>
<item field="TESTCASENAME" relation="tESTCASENAME" type="String"/>
<item field="SHIJIAN" relation="sHIJIAN" type="Integer"/>
<item field="STARTTIME" relation="sTARTTIME" type="String"/>
<item field="ENDTIME" relation="eNDTIME" type="String"/>
<item field="QZRW" relation="qZRW" type="String"/>
<item field="OPERATORNAME" relation="oPERATORNAME" type="String"/>
<item field="ROOMNAME" relation="rOOMNAME" type="String"/>
<item field="TOOLNAME" relation="tOOLNAME" type="String"/>
<item field="CASEID" relation="cASEID" type="String"/>
<item field="CASEVERSION" relation="cASEVERSION" type="Integer"/>
<item field="TREESN" relation="tREESN" type="Integer"/>
</table>
</mapping>
<mapping concept="CASE_TREE_NEW_OBJ_V"><table name="CASE_TREE_NEW_OBJ_V" type="owner-table"><key field="fID" type="String"/>
<item field="FID" relation="fID" type="String"/>
<item field="FPARENTID" relation="fPARENTID" type="String"/>
<item field="TESTCASENAME" relation="tESTCASENAME" type="String"/>
<item field="SHIJIAN" relation="sHIJIAN" type="Integer"/>
<item field="STARTTIME" relation="sTARTTIME" type="String"/>
<item field="ENDTIME" relation="eNDTIME" type="String"/>
<item field="QZRW" relation="qZRW" type="String"/>
<item field="OPERATORNAME" relation="oPERATORNAME" type="String"/>
<item field="ROOMNAME" relation="rOOMNAME" type="String"/>
<item field="TOOLNAME" relation="tOOLNAME" type="String"/>
<item field="CASEID" relation="cASEID" type="String"/>
<item field="CASEVERSION" relation="cASEVERSION" type="Integer"/>
<item field="TREESN" relation="tREESN" type="Integer"/>
</table>
</mapping>
</model>