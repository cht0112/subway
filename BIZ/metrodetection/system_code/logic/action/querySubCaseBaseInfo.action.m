<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="querySubCaseBaseInfo" global="false" procedure="querySubCaseBaseInfoProcedure"><label language="zh_CN">测试子用例基本信息</label>
 <permission name="range" type="List"/>  
    <private name="concept" type="String" value="SUB_TEST_CASE_BASE_INFO"/>  
    <private name="select" type="String" value="stcbi.*,tuc.*"/>  
    <private name="from" type="String" value="SUB_TEST_CASE_BASE_INFO stcbi  optional  join TIME_UNIT_CODE tuc on stcbi.tIMEUNITID  =  tuc"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="stcbi"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>