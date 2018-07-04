<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="CUSTOMER_COMPLAINT_FEEDBACK"/>

<store name="CUSTOMER_COMPLAINT_INFO"/><mapping concept="CUSTOMER_COMPLAINT_INFO"><table name="CUSTOMER_COMPLAINT_INFO" type="owner-table"><key field="COMPLAINT_ID" type="Integer"/>
<item field="COMPLAINT_DOC_CODE" relation="COMPLAINT_DOC_CODE" type="String"/>
<item field="COMPLAINT_DOC_NO" relation="COMPLAINT_DOC_NO" type="String"/>
<item field="COMPLAINT_UNIT" relation="COMPLAINT_UNIT" type="String"/>
<item field="COMPLAINT_DATE" relation="COMPLAINT_DATE" type="Date"/>
<item field="CONTACTOR_TELEPHONE" relation="CONTACTOR_TELEPHONE" type="String"/>
<item field="CONTACT_EMAIL" relation="CONTACT_EMAIL" type="String"/>
<item field="COMPLAINT_CONTENT" relation="COMPLAINT_CONTENT" type="String"/>
<item field="COMPLAINT_RECEIPT_DATE" relation="RECEIPT_DATE" type="Date"/>
<item field="COMPLAINT_TITLE" relation="TITLE"/>
<item field="COMPLAINT_TYPE" relation="TYPE"/>
<item field="COMPLAINT_SEVERITY" relation="SEVERITY"/>
<item field="COMPLAINT_REGION" relation="REGION"/>
<item field="COMPLAINT_RECEIPTOR" relation="RECEIPT"/>





</table>
</mapping>
<mapping concept="CUSTOMER_COMPLAINT_FEEDBACK"><table name="CUSTOMER_COMPLAINT_FEEDBACK" type="owner-table">
<item field="COMPLAINT_ID" relation="COMPLAINT_ID" type="Integer"/>
<item field="COMPLAINT_DEAL_DATE" relation="DEAL_DATE" type="Date"/>
<item field="COMPLAINT_RESPONSOR_TITLE" relation="RESPONSOR_TITLE" type="String"/>
<index fields="COMPLAINT_ID" name="RELATIONSHIP_2_FK" type="NORMAL"/>
<key field="FEEDBACK_ID" type="Integer"/>
<item field="COMPLAINT_RESPONSOR" relation="RESPONSOR"/>


<item field="COMPLAINT_RELEASE" relation="RELEASE"/>


</table>
</mapping>
</model>