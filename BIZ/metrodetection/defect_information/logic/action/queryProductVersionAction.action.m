<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryProductVersionAction" global="false" procedure="queryProductVersionProcedure"> 
    <label language="zh_CN">新建产品版本信息</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="DEFECT_TRACK_VERSION_INFO"/>  
    <private name="select" type="String" value="DEFECT_TRACK_VERSION_INFO.*,DEFECT_TRACK_PRODUCT_INFO.PRODUCT_NAME as PRODUCT_NAME,(concat(concat(DEFECT_TRACK_VERSION_INFO.MAJOR_VERSION_NUMBER, '.'), DEFECT_TRACK_VERSION_INFO.MINOR_VERSION_NUMBER)) as myVersionId,DEFECT_TRACK_PROJECT_INFO.PROJECT_NAME as PROJECT_NAME,DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID as PROJECT_ID,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME"/>  
    <private name="from" type="String" value="DEFECT_TRACK_VERSION_INFO DEFECT_TRACK_VERSION_INFO  optional  join DEFECT_TRACK_PRODUCT_INFO DEFECT_TRACK_PRODUCT_INFO on DEFECT_TRACK_PRODUCT_INFO = DEFECT_TRACK_VERSION_INFO.PRODUCT_ID optional  join DEFECT_TRACK_PROJECT_INFO DEFECT_TRACK_PROJECT_INFO on DEFECT_TRACK_PROJECT_INFO = DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = DEFECT_TRACK_VERSION_INFO.BUILD_PERSON"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/defect_information/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DEFECT_TRACK_VERSION_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="DEFECT_TRACK_VERSION_INFO desc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>
