<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryTestApplication" global="false" procedure="queryTestApplicationProcedure"><label language="zh_CN">查询申请检测表单</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_APPLICATION_INFO"/>
<private name="select" type="String" value="TEST_APPLICATION_INFO.*,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,afc.mANUFACTUREIDCNAME as wtName,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO_1.oPERATORNAME as receipterName"/>
<private name="from" type="String" value="TEST_APPLICATION_INFO TEST_APPLICATION_INFO  optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on TEST_APPLICATION_INFO.aSSIGNEDMANUFACTUREID = AFC_MANUFACTURER_INFO optional  join AFC_MANUFACTURER_INFO afc on TEST_APPLICATION_INFO.pRODUCTMANUFACTUREID = afc optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on TEST_APPLICATION_INFO.dETECTIONOBJECTTYPE = DETECTION_OBJECT_TYPE optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_APPLICATION_INFO.bUSINESSID = BUSINESS_TYPE_CODE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on TEST_APPLICATION_INFO.dETECTIONOBJECTTYPE = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND TEST_APPLICATION_INFO.dEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join HR_BASE_INFO HR_BASE_INFO on TEST_APPLICATION_INFO.oPERATORID = HR_BASE_INFO optional  join HR_BASE_INFO HR_BASE_INFO_1 on TEST_APPLICATION_INFO.rECEIPTER = HR_BASE_INFO_1"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TEST_APPLICATION_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>