<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryHRInfo" global="false" procedure="myQueryHRInfoProcedure">
    <label language="zh_CN">查询人力资源</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="HR_BASE_INFO"/>  
    <private name="select" type="String" value="HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as OPERATOR_NAME,POSITION_TYPE_CODE.pOSITIONIDCNAME as POSITION_ID_CNAME,OFFICE_TYPE_CODE.oFFICEIDCNAME as OFFICE_ID_CNAME,TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO as APPLICATIONNO,case when HR_BASE_INFO.oPERATORSTATE = 1 then '正常' when HR_BASE_INFO.oPERATORSTATE = 2 then '工作' when HR_BASE_INFO.oPERATORSTATE = 3 then '病假' when HR_BASE_INFO.oPERATORSTATE = 4 then '年假' when HR_BASE_INFO.oPERATORSTATE = 5 then '事假' when HR_BASE_INFO.oPERATORSTATE = 6 then '公出' when HR_BASE_INFO.oPERATORSTATE = 7 then '离职' end as OPERATORSTATE"/>  
    <private name="from" type="String" value="HR_BASE_INFO HR_BASE_INFO  optional  join OFFICE_TYPE_CODE OFFICE_TYPE_CODE on HR_BASE_INFO.oFFICEID = OFFICE_TYPE_CODE optional  join POSITION_TYPE_CODE POSITION_TYPE_CODE on HR_BASE_INFO.pOSITIONID = POSITION_TYPE_CODE optional  join TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO on HR_BASE_INFO = TEST_PROJECT_MEMBER_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String" value="1 = 0"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="HR_BASE_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="HR_BASE_INFO asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
