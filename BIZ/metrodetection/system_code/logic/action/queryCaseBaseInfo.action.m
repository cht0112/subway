<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryCaseBaseInfo" global="false" procedure="queryCaseBaseInfoProcedure"><label language="zh_CN">用例基本信息查询</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_CASE_BASE_INFO"/>
<private name="select" type="String" value="tcbi.*,dboi.*"/>
<private name="from" type="String" value="TEST_CASE_BASE_INFO tcbi  optional  join DECTION_BASED_ON_INFO dboi on tcbi.dECTIONBASEDONID  =  dboi"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="tcbi"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>