<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="selectLineAction" global="false" procedure="selectLineProcedure">
<label language="zh_CN">查询线路信息</label>
<public name="range" type="List"></public>
<public name="concept" type="String" value="TEST_PROJECT_INFO" required="true"/>
<private name="select" type="String" value="TEST_PROJECT_INFO.lINEID as lINEID,(TEST_PROJECT_INFO.lINEID) as lineName" />
<private name="from" type="String" value="TEST_PROJECT_INFO TEST_PROJECT_INFO" />
<private name="aggregate" type="String" />
<private name="dataModel" type="String" value="/metrodetection/system_code/data" />
<private name="fnModel" type="String" />
<protected name="condition" type="String" />
<public name="distinct" type="Boolean" value="true"></public>
<public name="idColumn" type="String" value="lINEID"></public>
<public name="filter" type="String"></public>
<public name="limit" type="Integer"></public>
<public name="offset" type="Integer"></public>
<public name="columns" type="String"></public>
<public name="orderBy" type="String"></public>
<public name="aggregateColumns" type="String"></public>
<public name="variables" type="Map"></public>
</action>
<action name="selectLineProcessAction" global="false" procedure="selectLineProcessProcedure"><label language="zh_CN">线路查询</label>
</action>
</model>