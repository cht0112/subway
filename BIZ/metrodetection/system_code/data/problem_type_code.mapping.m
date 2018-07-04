<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="PROBLEM_TYPE_CODE"/><mapping concept="PROBLEM_TYPE_CODE"><table name="PROBLEM_TYPE_CODE" type="owner-table"><key field="fID" type="String"/>
<item field="PROBLEM_PRIOR" relation="pROBLEMPRIOR" type="Integer"/>
<item field="PROBLEM_TYPE" relation="pROBLEMTYPE" type="Decimal"/>
<item field="PROBLEM_TYPE_CNAME" relation="pROBLEMTYPECNAME" type="String"/>
<item field="PROBLEM_TYPE_ENAME" relation="pROBLEMTYPEENAME" type="String"/>
<index fields="PROBLEM_PRIOR,PROBLEM_TYPE" name="AK_KEY_1_PROBLEM_" type="UNIQUE"/>
</table>
</mapping>
</model>