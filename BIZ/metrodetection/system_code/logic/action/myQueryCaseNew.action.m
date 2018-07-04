<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryCaseNew" global="false" procedure="queryCaseNewProcedure"><label language="zh_CN">查询用例新方法</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="SUB_TEST_CASE_BASE_INFO"/>
<private name="select" type="String" value="TEST_CASE_BASE_INFO.tESTCASEID as tESTCASEID,TEST_CASE_BASE_INFO.tESTCASENAME as tESTCASENAME,'' as sUBTESTCASEID"/>
<private name="from" type="String" value="TEST_CASE_BASE_INFO TEST_CASE_BASE_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/testing_standard/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="tESTCASENAME"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>