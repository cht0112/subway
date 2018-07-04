<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryDefectProductAction" global="false" procedure="queryDefectProductProcedure"> 
    <label language="zh_CN">新建缺陷跟踪产品信息查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="DEFECT_TRACK_PRODUCT_INFO"/>  
    <private name="select" type="String" value="DEFECT_TRACK_PRODUCT_INFO.*,DEFECT_TRACK_PROJECT_INFO.PROJECT_NAME as PROJECT_NAME"/>  
    <private name="from" type="String" value="DEFECT_TRACK_PRODUCT_INFO DEFECT_TRACK_PRODUCT_INFO  optional  join DEFECT_TRACK_PROJECT_INFO DEFECT_TRACK_PROJECT_INFO on DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID = DEFECT_TRACK_PROJECT_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/defect_information/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DEFECT_TRACK_PRODUCT_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
