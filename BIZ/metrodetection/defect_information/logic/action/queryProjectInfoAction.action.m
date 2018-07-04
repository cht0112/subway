<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryProjectInfoAction" global="false" procedure="queryProjectInfoProcedure">
    <label language="zh_CN">新建项目查询</label> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="DEFECT_TRACK_PROJECT_INFO,DEFECT_TRACK_PROJECT_INFO.PROJECT_NAME as PROJECT_NAME,DEFECT_TRACK_PROJECT_INFO.PROJECT_MANAGER as PROJECT_MANAGER,DEFECT_TRACK_PROJECT_INFO.PROJECT_DESC as PROJECT_DESC,DEFECT_TRACK_PROJECT_INFO.MEMO as MEMO,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>  
    <private name="from" type="String" value="DEFECT_TRACK_PROJECT_INFO DEFECT_TRACK_PROJECT_INFO  optional  join HR_BASE_INFO HR_BASE_INFO on DEFECT_TRACK_PROJECT_INFO.PROJECT_MANAGER = HR_BASE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/defect_information/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DEFECT_TRACK_PROJECT_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
