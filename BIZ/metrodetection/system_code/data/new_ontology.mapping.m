<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="ME_ZJCXSJYPXX"/><mapping concept="ME_ZJCXSJYPXX"><table name="ME_ZJCXSJYPXX" type="owner-table"><key field="fID" type="String"/>
<item field="version" relation="version"/>
<item field="sample_device_no" relation="sample_device_no"/>
<item field="contract_code" relation="contract_code"/>
<item field="model_name" relation="model_name"/>
<item field="project_id" relation="project_id"/>
</table>
<table name="sample_device_occupy_info" type="relation-table"><key field="fID" type="String"/>
</table>
<table name="sample_device_hardware_info" type="relation-table"><key field="fID" type="String"/>
</table>
</mapping>
</model>