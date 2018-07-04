<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="NewfactoryAction" global="false" procedure="NewfactoryProcedure"><label language="zh_CN">新建厂商查询</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_CONTRACT_INFO"/>
<private name="select" type="String" value="TEST_CONTRACT_INFO.*,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME"/>
<private name="from" type="String" value="TEST_CONTRACT_INFO TEST_CONTRACT_INFO  optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on TEST_CONTRACT_INFO.mANUFACTUREID  =  AFC_MANUFACTURER_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TEST_CONTRACT_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>