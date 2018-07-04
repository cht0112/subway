<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="DEVICE_HARDWARE_INFO"/><mapping concept="DEVICE_HARDWARE_INFO"><table name="DEVICE_HARDWARE_INFO" type="owner-table"><key field="fID" type="String"/>
<item field="DEVICE_TYPE" relation="dEVICETYPE" type="Integer"/>
<item field="MODEL_TYPE" relation="mODELTYPE" type="Decimal"/>
<item field="MODEL_NUMBER" relation="mODELNUMBER" type="Decimal"/>
<item field="MEMO" relation="mEMO" type="String"/>
<index fields="DEVICE_TYPE,MODEL_TYPE" name="AK_KEY_1_DEVICE_H" type="UNIQUE"/>
</table>
</mapping>
</model>