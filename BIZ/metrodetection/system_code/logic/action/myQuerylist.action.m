<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQuerylist" global="false" procedure="myQuerylistProcedure">
<label language="zh_CN">检测基本信息</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_SCHEME_BASE_INFO"/>
<private name="select" type="String" value="TEST_SCHEME_BASE_INFO.*,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,VALID_STATE_CODE,VALID_STATE_CODE.vALIDSTATECNAME as vALIDSTATECNAME,DECTION_BASED_ON_INFO,DECTION_BASED_ON_INFO.dECTIONBASEDONNAME as dECTIONBASEDONNAME,TEST_SCHEME_CASE_INFO.bUSINESSSTAGE as bUSINESSSTAGE,BUSINESS_STAGE_CODE,BUSINESS_STAGE_CODE.bUSINESSSTAGECNAME as bUSINESSSTAGECNAME"/>
<private name="from" type="String" value="TEST_SCHEME_BASE_INFO TEST_SCHEME_BASE_INFO  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_SCHEME_BASE_INFO.bUSINESSID = BUSINESS_TYPE_CODE optional  join VALID_STATE_CODE VALID_STATE_CODE on TEST_SCHEME_BASE_INFO.vALIDSTATE = VALID_STATE_CODE optional  join DECTION_BASED_ON_INFO DECTION_BASED_ON_INFO on DECTION_BASED_ON_INFO = TEST_SCHEME_BASE_INFO.dECTIONBASEDONID optional  join TEST_SCHEME_CASE_INFO TEST_SCHEME_CASE_INFO on TEST_SCHEME_BASE_INFO = TEST_SCHEME_CASE_INFO.tESTSCHEMEID AND TEST_SCHEME_BASE_INFO.bUSINESSID = TEST_SCHEME_CASE_INFO.bUSINESSID optional  join BUSINESS_STAGE_CODE BUSINESS_STAGE_CODE on TEST_SCHEME_CASE_INFO.bUSINESSID = BUSINESS_STAGE_CODE.bUSINESSID AND TEST_SCHEME_CASE_INFO.bUSINESSSTAGE = BUSINESS_STAGE_CODE.bUSINESSSTAGE AND BUSINESS_TYPE_CODE = BUSINESS_STAGE_CODE.bUSINESSID"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="true"/>
<public name="idColumn" type="String" value="TEST_SCHEME_BASE_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>