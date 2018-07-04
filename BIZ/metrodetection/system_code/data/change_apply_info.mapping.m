<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="CHANGE_APPLY_INFO"/><mapping concept="CHANGE_APPLY_INFO"><table name="CHANGE_APPLY_INFO" type="owner-table"><key field="CHANGE_ID" type="Integer"/>
<item field="CHANGE_APPLY_DOC_NO" relation="CHANGE_APPLY_DOC_NO"/><item field="CHANGE_APPLY_NO" relation="CHANGE_APPLY_NOAPPLYNO" type="String"/>
<item field="CHANGE_TITLE" relation="CHANGE_TITLETITLE" type="String"/>
<item field="PROJECT_ID" relation="PROJECT_IDID" type="Decimal"/>
<item field="PROJECT_NAME" relation="PROJECT_NAMENAME" type="String"/>
<item field="CHANGE_OBJECT" relation="CHANGE_OBJECTOBJECT" type="String"/>
<item field="CHANGE_CONTENT" relation="CHANGE_CONTENTCONTENT" type="String"/>
<item field="CHANGE_REASON" relation="CHANGE_REASONREASON" type="String"/>
<item field="IMPACT_RANGE" relation="IMPACT_RANGERANGE" type="String"/>
<item field="POTENTIAL_RISK" relation="POTENTIAL_RISKRISK" type="String"/>
<item field="RESOLVE_RISK" relation="RESOLVE_RISKRISK" type="String"/>
<item field="IMPLEMENTATION_PROCESS" relation="IMPLEMENTATION_PROCESSPROCESS" type="String"/>
<item field="RESOURCES_NEEDED" relation="RESOURCES_NEEDEDNEEDED" type="String"/>
<item field="CHANGE_TIME" relation="CHANGE_TIMETIME" type="Date"/>
<item field="APPLY_PERSON" relation="APPLY_PERSONPERSON" type="String"/>
<item field="APPLY_DATE" relation="APPLY_DATEDATE" type="Date"/>
<item field="APPLY_APPROVER" relation="APPLY_APPROVER"/><item field="APPLY_APPROVE_DATE" relation="APPLY_APPROVE_DATE"/><item field="REASON_ASSESSMENT" relation="REASON_ASSESSMENTASSESSMENT" type="String"/>
<item field="RANGE_ASSESSMENT" relation="RANGE_ASSESSMENTASSESSMENT" type="String"/>
<item field="RISK_ASSESSMENT" relation="RISK_ASSESSMENTASSESSMENT" type="String"/>
<item field="PROCESS_ASSESSMENT" relation="PROCESS_ASSESSMENTASSESSMENT" type="String"/>
<item field="RESOURCE_ASSESSMENT" relation="RESOURCE_ASSESSMENTASSESSMENT" type="String"/>
<item field="TIME_ASSESSMENT" relation="TIME_ASSESSMENTASSESSMENT" type="String"/>
<item field="APPROVAL_STATUS" relation="APPROVAL_STATUSSTATUS" type="Decimal"/>
<item field="ACCEPT_OPINION" relation="ACCEPT_OPINIONOPINION" type="String"/>
<item field="CHANGE_AUDIT_DATE" relation="CHANGE_AUDIT_DATE" type="Date"/>
<item field="CHANGE_AUDITOR" relation="CHANGE_AUDITOR" type="String"/>

<item field="VERSION" relation="VERSION"/>
<item field="MEMO" relation="MEMO"/>


</table>
</mapping>
</model>